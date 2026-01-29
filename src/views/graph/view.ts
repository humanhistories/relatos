/**
 * Relatos Viewer - Graph View
 * SVG graph display (view mode)
 */

import type { Node, Edge, GraphMode, EdgeAnchor, NodeSide, EdgeStyle } from '../../types';
import type { Group, GroupLayout } from '../../types/data';
import type { NodeClickEvent, EdgeClickEvent, GroupClickEvent, SavePayload } from '../../types/events';
import type { View } from '../../core/view_container';
import { injectSvgSprite } from '../../assets/icons/icons-embedded';

/**
 * Helper function to get icon from SVG sprite
 * @param iconId Icon ID (e.g., 'icon-edit', 'icon-home', 'icon-sun', 'icon-relations')
 * @param size Icon size (default: 16)
 * @returns HTML string of SVG element
 */
function createSvgIcon(iconId: string, size: number = 16): string {
  // Ensure sprite is injected
  injectSvgSprite();
  
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <use href="#${iconId}"></use>
  </svg>`;
}

/**
 * Internal: Edge pair (grouped by undirected pair key)
 */
interface EdgePair {
  key: string; // "minId||maxId" format
  a: string; // Smaller node ID
  b: string; // Larger node ID
  edges: Edge[]; // All edges belonging to this pair (includes both A->B and B->A)
  // Unified display information (inherited from first edge)
  srcAnchor?: EdgeAnchor;
  dstAnchor?: EdgeAnchor;
  bends?: Array<{ x: number; y: number }>;
}

/**
 * Graph View class
 */
export class GraphView implements View {
  private container: HTMLElement;
  private svgWrapper: HTMLElement; // Wrapper element for zoom/pan transform
  private svg: SVGElement;
  private svgDefs: SVGDefsElement;
  private nodesGroup: SVGGElement;
  private edgesGroup: SVGGElement;
  private groupsGroup: SVGGElement; // Group for group rectangles
  private nodes: Node[] = [];
  private edges: Edge[] = [];
  private groups: Group[] = [];
  private mode: GraphMode = 'view';
  private editable: boolean = false;
  private onNodeClick?: (event: NodeClickEvent) => void;
  private onEdgeClick?: (event: EdgeClickEvent) => void;
  private onGroupClick?: (event: GroupClickEvent) => void;
  private nodeElements: Map<string, SVGRectElement> = new Map();
  private edgeElements: Map<string, SVGPathElement> = new Map();
  private selectedEdgeId: string | null = null;
  private selectedNodeId: string | null = null; // Selected node ID for highlighting
  private zoomedNodeId: string | null = null; // Node ID that is currently zoomed in (for toggle behavior)
  private anchorHandlesGroup: SVGGElement;
  private anchorHandles: Map<string, SVGCircleElement> = new Map(); // 'src' | 'dst' -> handle element
  private draggingAnchor: { edgeId: string; type: 'src' | 'dst'; offsetX: number; offsetY: number } | null = null;
  private bendHandlesGroup: SVGGElement;
  private bendHandles: Map<number, SVGCircleElement> = new Map(); // bend index -> handle element
  private draggingBend: { edgeId: string; bendIndex: number; offsetX: number; offsetY: number } | null = null;
  private draggingNode: { nodeId: string; offsetX: number; offsetY: number } | null = null;
  private draggingGroup: { groupId: string; offsetX: number; offsetY: number } | null = null;
  private panning: { startX: number; startY: number; startOffsetX: number; startOffsetY: number } | null = null; // Pan state
  private lastPanEndTime: number = 0; // Timestamp when pan operation ended (milliseconds)
  private resizingNode: { nodeId: string; side: 'top' | 'right' | 'bottom' | 'left'; startX: number; startY: number; startWidth: number; startHeight: number; startNodeX: number; startNodeY: number } | null = null;
  private resizingGroup: { groupId: string; side: 'top' | 'right' | 'bottom' | 'left'; startX: number; startY: number; startWidth: number; startHeight: number; startPosX: number; startPosY: number } | null = null;
  private onSave?: (payload: SavePayload) => void;
  private saveDebounceTimer: number | null = null;
  private readonly SAVE_DEBOUNCE_MS = 500;
  private resizeRenderTimer: number | null = null; // Throttle render during resize
  private editToggleButton: HTMLButtonElement | null = null;
  private alwaysShowEdgesButton: HTMLButtonElement | null = null; // Toggle button for always showing all edges
  private alwaysShowEdges: boolean = false; // Flag for always showing all edges with labels
  private onModeChange?: () => void; // Callback to notify mode change
  private onAlwaysShowEdgesChange?: (enabled: boolean) => void; // Callback to notify always show edges state change
  private onGraphButtonsUpdate?: () => void; // Callback to update Graph-specific buttons in ViewContainer
  private hoveredEdgePairKey: string | null = null; // Track hovered edge for highlighting (view mode only)
  private tappedEdgePairKey: string | null = null; // Track tapped edge for highlighting (view mode only, persists until click elsewhere)
  private edgeLabelsGroup: SVGGElement; // Group for edge labels
  private snapshotBeforeEdit: { nodes: Node[]; edges: Edge[]; groups: Group[] } | null = null;
  private edgeClickTimers: WeakMap<SVGPathElement, number | null> = new WeakMap(); // Track click timers per hit-path; // Snapshot before entering edit mode
  private undoStack: { nodes: Node[]; edges: Edge[]; groups: Group[] }[] = [];
  private redoStack: { nodes: Node[]; edges: Edge[]; groups: Group[] }[] = [];
  private static readonly MAX_UNDO_LEVELS = 50;
  private offsetX: number = 0; // Offset for panning (x)
  private offsetY: number = 0; // Offset for panning (y)
  private zoom: number = 1; // Zoom level (scale factor)
  private pinchDistance: number | null = null; // Distance for pinch zoom
  private pinchCenter: { x: number; y: number } | null = null; // Center point for pinch zoom
  private initialZoom: number = 1; // Initial zoom when pinch starts
  private popupElement: HTMLElement | null = null; // Popup element for node labels
  private popupNodeId: string | null = null; // Node ID for which popup is shown

  // Default node size
  private readonly DEFAULT_NODE_WIDTH = 120;
  private readonly DEFAULT_NODE_HEIGHT = 60;
  
  // Edge styling constants
  private readonly EDGE_DEFAULT_COLOR = '#999'; // Light gray for normal state
  private readonly EDGE_HOVER_COLOR = '#333'; // Dark gray for hover/tap state
  private readonly EDGE_DEFAULT_WIDTH = 1.5; // Thin for normal state
  private readonly EDGE_HOVER_WIDTH = 3; // Thicker for hover/tap state
  private readonly EDGE_MIN_WEIGHT = 1;
  private readonly EDGE_MAX_WEIGHT = 10;
  private readonly NODE_PADDING = 10;
  private readonly HANDLE_RADIUS = 8; // Increased for touch targets
  private readonly BEND_HANDLE_RADIUS = 7; // Increased for touch targets
  private readonly HIT_PATH_WIDTH = 32; // Increased to 28-40px range for touch targets
  private controlButtonsContainer: HTMLElement | null = null;
  private deleteBendButton: HTMLButtonElement | null = null;
  private fitCenterButton: HTMLButtonElement | null = null;
  private cancelEditButton: HTMLButtonElement | null = null;

  constructor(
    container: HTMLElement,
    onNodeClick?: (event: NodeClickEvent) => void,
    onSave?: (payload: SavePayload) => void,
    editable: boolean = false,
    onEdgeClick?: (event: EdgeClickEvent) => void,
    onGroupClick?: (event: GroupClickEvent) => void
  ) {
    this.container = container;
    // Wrap onNodeClick to add popup display handling
    this.onNodeClick = onNodeClick
      ? (event: NodeClickEvent) => {
          // Toggle popup: OFF if same node, ON if different node
          if (this.popupNodeId === event.node.id && this.popupElement && this.popupElement.style.opacity === '1') {
            // Same node clicked and popup is visible, close popup
            this.hidePopup();
          } else {
            // Different node clicked or popup not visible, show popup
            this.showPopup(event.node);
          }
          // Call original callback
          onNodeClick(event);
        }
      : undefined;
    this.onSave = onSave;
    this.editable = editable;
    this.onEdgeClick = onEdgeClick;
    this.onGroupClick = onGroupClick;

    // Set container styles (ensure height)
    this.container.style.position = 'relative';
    this.container.style.width = '100%';
    this.container.style.height = '100%';
    this.container.style.overflow = 'visible'; // Allow scaled content to extend beyond container bounds

    // Control buttons are now managed by ViewContainer
    // Individual buttons are created but hidden (only for reference/callbacks)
    // Note: createAlwaysShowEdgesButton and createEditToggleButton create buttons
    // that will be hidden, as ViewContainer manages the common controls
    // createControlButtons is also called but those buttons will be hidden
    
    // Create always show edges toggle button (hidden, for reference only)
    this.createAlwaysShowEdgesButton();
    if (this.alwaysShowEdgesButton) {
      this.alwaysShowEdgesButton.style.display = 'none';
      // Remove from DOM if already added
      if (this.alwaysShowEdgesButton.parentNode) {
        this.alwaysShowEdgesButton.parentNode.removeChild(this.alwaysShowEdgesButton);
      }
    }
    
    // Create edit toggle button (hidden, for reference only)
    this.createEditToggleButton();
    if (this.editToggleButton) {
      this.editToggleButton.style.display = 'none';
      // Remove from DOM if already added
      if (this.editToggleButton.parentNode) {
        this.editToggleButton.parentNode.removeChild(this.editToggleButton);
      }
    }

    // Create control buttons container (hidden, for reference only)
    this.createControlButtons();
    if (this.controlButtonsContainer) {
      this.controlButtonsContainer.style.display = 'none';
      // Remove from DOM if already added
      if (this.controlButtonsContainer.parentNode) {
        this.controlButtonsContainer.parentNode.removeChild(this.controlButtonsContainer);
      }
    }

    // Create attribution label
    this.createAttributionLabel();

    // Create wrapper element for zoom/pan transform
    this.svgWrapper = document.createElement('div');
    this.svgWrapper.style.position = 'absolute';
    this.svgWrapper.style.top = '0';
    this.svgWrapper.style.left = '0';
    this.svgWrapper.style.width = '100%';
    this.svgWrapper.style.height = '100%';
    this.svgWrapper.style.transformOrigin = '0 0';
    this.svgWrapper.style.pointerEvents = 'none'; // Allow clicks to pass through to buttons and other elements
    this.container.appendChild(this.svgWrapper);

    // Create SVG element
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.svg.style.width = '100%';
    this.svg.style.height = '100%';
    this.svg.style.display = 'block';
    this.svg.style.pointerEvents = 'auto'; // Re-enable pointer events on SVG itself
    this.svgWrapper.appendChild(this.svg);

    // SVG definitions (arrow markers, etc.)
    this.svgDefs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    this.createArrowMarkers();
    this.svg.appendChild(this.svgDefs);

    // Groups group (drawn at the back, below edges and nodes)
    this.groupsGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    this.groupsGroup.setAttribute('class', 'groups');
    this.svg.appendChild(this.groupsGroup);

    // Edge group (drawn above groups, below nodes)
    this.edgesGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    this.edgesGroup.setAttribute('class', 'edges');
    this.svg.appendChild(this.edgesGroup);

    // Node group (drawn above edges and groups)
    this.nodesGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    this.nodesGroup.setAttribute('class', 'nodes');
    this.svg.appendChild(this.nodesGroup);

    // Anchor handles group (topmost layer)
    this.anchorHandlesGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    this.anchorHandlesGroup.setAttribute('class', 'anchor-handles');
    this.anchorHandlesGroup.style.display = 'none';
    this.svg.appendChild(this.anchorHandlesGroup);

    // Bend point handles group (topmost layer)
    this.bendHandlesGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    this.bendHandlesGroup.setAttribute('class', 'bend-handles');
    this.bendHandlesGroup.style.display = 'none';
    this.svg.appendChild(this.bendHandlesGroup);

    // Edge labels group (for hover/tap labels)
    this.edgeLabelsGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    this.edgeLabelsGroup.setAttribute('class', 'edge-labels');
    this.svg.appendChild(this.edgeLabelsGroup);

    // Initialize transform (set initial zoom and offset)
    this.updateTransform();

    // Set up event listeners
    this.setupEventListeners();
  }

  /**
   * Create always show edges toggle button
   */
  private createAlwaysShowEdgesButton(): void {
    this.alwaysShowEdgesButton = document.createElement('button');
    this.alwaysShowEdgesButton.className = 'relatos-always-show-edges-toggle';
    this.alwaysShowEdgesButton.setAttribute('aria-label', 'Always show all edges');
    this.alwaysShowEdgesButton.setAttribute('title', 'Always show all edges');
    // Position will be set to 'static' when added to controlButtonsContainer
    this.alwaysShowEdgesButton.style.padding = '6px';
    this.alwaysShowEdgesButton.style.border = '1px solid #ccc';
    this.alwaysShowEdgesButton.style.borderRadius = '4px';
    this.alwaysShowEdgesButton.style.backgroundColor = '#fff';
    this.alwaysShowEdgesButton.style.cursor = 'pointer';
    this.alwaysShowEdgesButton.style.fontSize = '16px';
    this.alwaysShowEdgesButton.style.lineHeight = '1';
    this.alwaysShowEdgesButton.style.width = '32px';
    this.alwaysShowEdgesButton.style.height = '32px';
    this.alwaysShowEdgesButton.style.display = 'flex';
    this.alwaysShowEdgesButton.style.alignItems = 'center';
    this.alwaysShowEdgesButton.style.justifyContent = 'center';
    this.alwaysShowEdgesButton.style.transition = 'all 0.2s';
    this.alwaysShowEdgesButton.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    this.alwaysShowEdgesButton.style.pointerEvents = 'auto';
    this.alwaysShowEdgesButton.style.color = '#000000'; // Icon color
    this.alwaysShowEdgesButton.innerHTML = createSvgIcon('icon-relations', 16);

    this.alwaysShowEdgesButton.addEventListener('click', () => {
      this.alwaysShowEdges = !this.alwaysShowEdges;
      this.updateAlwaysShowEdgesButton();
      // Clear hover/tap state when toggling
      if (!this.alwaysShowEdges) {
        this.hoveredEdgePairKey = null;
        this.tappedEdgePairKey = null;
      }
      // Notify ViewContainer of state change
      if (this.onAlwaysShowEdgesChange) {
        this.onAlwaysShowEdgesChange(this.alwaysShowEdges);
      }
      this.render();
    });

    this.updateAlwaysShowEdgesButton();
  }

  /**
   * Update always show edges button appearance
   */
  private updateAlwaysShowEdgesButton(): void {
    if (!this.alwaysShowEdgesButton) {
      return;
    }

    if (this.alwaysShowEdges) {
      this.alwaysShowEdgesButton.setAttribute('aria-label', 'Hide edge labels');
      this.alwaysShowEdgesButton.setAttribute('title', 'Hide edge labels');
      this.alwaysShowEdgesButton.classList.add('relatos-always-show-edges-active');
      // Unified pressed effect: yellow background glow
      this.alwaysShowEdgesButton.style.backgroundColor = '#fff9c4';
      this.alwaysShowEdgesButton.style.color = '#000000'; // Icon color
      this.alwaysShowEdgesButton.style.borderColor = '#999';
      this.alwaysShowEdgesButton.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.2)';
      this.alwaysShowEdgesButton.style.transform = 'translateY(1px)';
    } else {
      this.alwaysShowEdgesButton.setAttribute('aria-label', 'Always show all edges');
      this.alwaysShowEdgesButton.setAttribute('title', 'Always show all edges');
      this.alwaysShowEdgesButton.classList.remove('relatos-always-show-edges-active');
      this.alwaysShowEdgesButton.style.backgroundColor = '#fff';
      this.alwaysShowEdgesButton.style.color = '#333';
      this.alwaysShowEdgesButton.style.borderColor = '#ccc';
      this.alwaysShowEdgesButton.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
      this.alwaysShowEdgesButton.style.transform = 'translateY(0)';
    }
  }

  /**
   * Create edit toggle button (icon-only UI)
   */
  private createEditToggleButton(): void {
    this.editToggleButton = document.createElement('button');
    this.editToggleButton.className = 'relatos-edit-toggle';
    this.editToggleButton.setAttribute('aria-label', 'Toggle edit mode');
    this.editToggleButton.setAttribute('title', 'Toggle edit mode');
    this.editToggleButton.style.position = 'relative';
    this.editToggleButton.style.zIndex = '1000';
    this.editToggleButton.style.padding = '6px';
    this.editToggleButton.style.border = '1px solid #ccc';
    this.editToggleButton.style.borderRadius = '4px';
    this.editToggleButton.style.backgroundColor = '#fff';
    this.editToggleButton.style.cursor = 'pointer';
    this.editToggleButton.style.fontSize = '16px';
    this.editToggleButton.style.lineHeight = '1';
    this.editToggleButton.style.width = '28px';
    this.editToggleButton.style.height = '28px';
    this.editToggleButton.style.display = 'flex';
    this.editToggleButton.style.alignItems = 'center';
    this.editToggleButton.style.justifyContent = 'center';
    this.editToggleButton.style.transition = 'all 0.2s';
    this.editToggleButton.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.1)';

    this.updateEditToggleButtonIcon();

    this.editToggleButton.addEventListener('click', () => {
      this.toggleEditMode();
    });
  }

  /**
   * Update edit toggle button icon based on current mode
   */
  private updateEditToggleButtonIcon(): void {
    if (!this.editToggleButton) {
      return;
    }

    // Always show pencil icon
    this.editToggleButton.innerHTML = createSvgIcon('icon-edit', 16);

    if (this.mode === 'edit') {
      // Edit mode: pressed/depressed appearance with red icon
      // Emphasize edit mode: yellow background (unified effect) with red icon
      this.editToggleButton.setAttribute('aria-label', 'Exit edit mode');
      this.editToggleButton.setAttribute('title', 'Exit edit mode');
      this.editToggleButton.classList.add('relatos-edit-toggle-active');
      this.editToggleButton.style.backgroundColor = '#fff9c4'; // Unified pressed effect (yellow background)
      this.editToggleButton.style.color = 'red'; // Red icon to emphasize edit mode
      this.editToggleButton.style.borderColor = '#999';
      // Unified depressed effect
      this.editToggleButton.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.2)';
      this.editToggleButton.style.transform = 'translateY(1px)';
    } else {
      // View mode: normal appearance
      this.editToggleButton.setAttribute('aria-label', 'Enter edit mode');
      this.editToggleButton.setAttribute('title', 'Enter edit mode');
      this.editToggleButton.classList.remove('relatos-edit-toggle-active');
      this.editToggleButton.style.backgroundColor = '#fff';
      this.editToggleButton.style.color = '#333';
      this.editToggleButton.style.borderColor = '#ccc';
      // Unified normal shadow
      this.editToggleButton.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
      this.editToggleButton.style.transform = 'translateY(0)';
    }
  }

  /**
   * Toggle edit mode
   */
  private toggleEditMode(): void {
    if (!this.editable) {
      return;
    }

    this.setMode(this.mode === 'edit' ? 'view' : 'edit');
  }

  /**
   * Create control buttons container with icon-only UI
   */
  private createControlButtons(): void {
    // Create container for control buttons
    this.controlButtonsContainer = document.createElement('div');
    this.controlButtonsContainer.style.position = 'absolute';
    this.controlButtonsContainer.style.top = '8px';
    this.controlButtonsContainer.style.right = '8px';
    this.controlButtonsContainer.style.display = 'flex';
    this.controlButtonsContainer.style.gap = '4px';
    this.controlButtonsContainer.style.zIndex = '1000';
    this.controlButtonsContainer.style.pointerEvents = 'none'; // Allow clicks to pass through container


    // Delete bend point button (Delete/Backspace alternative)
    this.deleteBendButton = this.createIconButton(createSvgIcon('icon-trash', 16), 'Delete bend point', 'Delete bend point', () => {
      if (this.selectedEdgeId) {
        this.deleteNearestBendPoint();
      }
    });
    this.deleteBendButton.style.display = 'none'; // Hidden by default, shown when bend points exist

    // Control buttons are now managed by ViewContainer
    // Individual buttons are created but not added to DOM
    // They are kept for reference/callbacks only
    
    // Always show edges toggle button (already created in createAlwaysShowEdgesButton)
    // Not adding to controlButtonsContainer as it's managed by ViewContainer

    // Fit/Center button (for reference only, not displayed)
    this.fitCenterButton = this.createIconButton(createSvgIcon('icon-home', 16), 'Fit and center', 'Fit and center', () => {
      this.fitAndCenter();
    });
    this.fitCenterButton.style.display = 'none';

    // Cancel edit button (for reference only, not displayed)
    this.cancelEditButton = this.createIconButton(createSvgIcon('icon-close', 16), 'Cancel edit', 'Cancel edit and restore previous state', () => {
      this.restoreSnapshot();
      this.setMode('view');
    });
    this.cancelEditButton.style.display = 'none';

    // Add buttons to container (but container itself will be hidden)
    this.controlButtonsContainer.appendChild(this.deleteBendButton);
    this.controlButtonsContainer.appendChild(this.fitCenterButton);
    this.controlButtonsContainer.appendChild(this.cancelEditButton);

    // Don't add to DOM - container will be hidden anyway
    // this.container.appendChild(this.controlButtonsContainer);
  }

  /**
   * Create attribution label
   */
  private createAttributionLabel(): void {
    const attributionContainer = document.createElement('div');
    attributionContainer.style.position = 'absolute';
    attributionContainer.style.bottom = '8px';
    attributionContainer.style.left = '8px';
    attributionContainer.style.zIndex = '1000';
    attributionContainer.style.pointerEvents = 'auto';
    attributionContainer.style.fontSize = '12px';
    attributionContainer.style.fontFamily = 'Arial, sans-serif';
    attributionContainer.style.color = '#333';
    attributionContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    attributionContainer.style.padding = '4px 8px';
    attributionContainer.style.borderRadius = '4px';
    attributionContainer.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.2)';

    const attributionLink = document.createElement('a');
    attributionLink.href = 'https://humanhistories.org/en/histoverse/';
    attributionLink.target = '_blank';
    attributionLink.rel = 'noopener noreferrer';
    attributionLink.textContent = 'Relatos';
    attributionLink.style.color = '#333';
    attributionLink.style.textDecoration = 'none';
    attributionLink.style.cursor = 'pointer';

    // Hover effect
    attributionLink.addEventListener('mouseenter', () => {
      attributionLink.style.textDecoration = 'underline';
      attributionLink.style.color = '#0066cc';
    });
    attributionLink.addEventListener('mouseleave', () => {
      attributionLink.style.textDecoration = 'none';
      attributionLink.style.color = '#333';
    });

    attributionContainer.appendChild(attributionLink);
    this.container.appendChild(attributionContainer);
  }

  /**
   * Create an icon-only button
   */
  private createIconButton(
    icon: string,
    ariaLabel: string,
    title: string,
    onClick: () => void
  ): HTMLButtonElement {
    const button = document.createElement('button');
    button.innerHTML = icon;
    button.setAttribute('aria-label', ariaLabel);
    button.setAttribute('title', title);
    button.style.padding = '6px';
    button.style.border = '1px solid #ccc';
    button.style.borderRadius = '4px';
    button.style.backgroundColor = '#fff';
    button.style.cursor = 'pointer';
    button.style.fontSize = '16px';
    button.style.width = '32px';
    button.style.height = '32px';
    button.style.display = 'flex';
    button.style.alignItems = 'center';
    button.style.justifyContent = 'center';
    button.style.pointerEvents = 'auto'; // Enable clicks on button
    button.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    button.style.transition = 'all 0.2s';

    button.addEventListener('click', (e) => {
      e.stopPropagation();
      onClick();
    });

    // Hover effect (optional, for desktop)
    button.addEventListener('mouseenter', () => {
      button.style.backgroundColor = '#f5f5f5';
    });
    button.addEventListener('mouseleave', () => {
      button.style.backgroundColor = '#fff';
    });

    return button;
  }

  /**
   * Update control buttons visibility based on selection state
   * Now delegates to ViewContainer's common controls
   */
  private updateControlButtons(): void {
    // Notify ViewContainer to update Graph-specific buttons
    if (this.onGraphButtonsUpdate) {
      this.onGraphButtonsUpdate();
    }
  }

  /**
   * Zoom to a specific point (common function for pinch and wheel zoom)
   * @param newZoom Target zoom level
   * @param screenX Screen X coordinate of the zoom center
   * @param screenY Screen Y coordinate of the zoom center
   */
  private zoomToPoint(newZoom: number, screenX: number, screenY: number): void {
    // Calculate the SVG coordinate of the zoom center before zoom (using current zoom)
    const centerSvgBefore = this.screenToSvg(screenX, screenY);
    
    // Store old zoom for calculations
    const oldZoom = this.zoom;
    
    // Update zoom
    this.zoom = newZoom;
    
    // Adjust offset to zoom around the center point
    // The center point should remain at the same screen position after zoom
    // Calculate what the center SVG coordinate should be after zoom
    const containerRect = this.container.getBoundingClientRect();
    const relativeX = screenX - containerRect.left;
    const relativeY = screenY - containerRect.top;
    const centerSvgAfter = {
      x: relativeX / this.zoom - this.offsetX,
      y: relativeY / this.zoom - this.offsetY,
    };
    
    // Adjust offset so that centerSvgBefore becomes centerSvgAfter
    const offsetDiffX = centerSvgBefore.x - centerSvgAfter.x;
    const offsetDiffY = centerSvgBefore.y - centerSvgAfter.y;
    this.offsetX += offsetDiffX;
    this.offsetY += offsetDiffY;
  }

  /**
   * Convert screen coordinates to SVG coordinates accounting for offset and zoom
   * With DOM scale transform, wrapper size is (100% / zoom) and then scaled by zoom
   * The visual size is always 100%, so we can use container coordinates
   */
  private screenToSvg(x: number, y: number): { x: number; y: number } {
    // Get the container's position in screen coordinates
    // Since wrapper is sized to (100% / zoom) and scaled by zoom, it visually fills the container
    const containerRect = this.container.getBoundingClientRect();
    
    // Calculate mouse position relative to container's top-left corner
    const relativeX = x - containerRect.left;
    const relativeY = y - containerRect.top;
    
    // Convert from container pixels to SVG coordinates
    // Container represents the visual size, which is (containerSize / zoom) in SVG space
    // So we divide by zoom to get SVG coordinates
    const unscaledX = relativeX / this.zoom;
    const unscaledY = relativeY / this.zoom;
    
    // Subtract offset to get final SVG coordinates
    return {
      x: unscaledX - this.offsetX,
      y: unscaledY - this.offsetY,
    };
  }

  /**
   * Update transform: zoom on DOM wrapper, translate on SVG groups
   */
  private updateTransform(): void {
    // Update popup position
    if (this.popupNodeId && this.popupElement) {
      const node = this.nodes.find(n => n.id === this.popupNodeId);
      if (node) {
        this.updatePopupPosition(node);
      }
    }
    
    // NaN check (use default value if NaN)
    const zoom = isFinite(this.zoom) && this.zoom > 0 ? this.zoom : 1;
    const offsetX = isFinite(this.offsetX) ? this.offsetX : 0;
    const offsetY = isFinite(this.offsetY) ? this.offsetY : 0;
    
    // Apply zoom as DOM scale transform on wrapper
    // When scale < 1, we need to increase the wrapper size to maintain visual size
    // For example, if zoom = 0.5, wrapper should be 200% so that scale(0.5) = 100%
    const wrapperScale = 1 / zoom;
    this.svgWrapper.style.width = `${wrapperScale * 100}%`;
    this.svgWrapper.style.height = `${wrapperScale * 100}%`;
    this.svgWrapper.style.transform = `scale(${zoom})`;
    
    // Apply offset as SVG translate on groups (no scale in SVG transform)
    // Note: screenToSvg subtracts offsetX, so we need to negate it here to maintain consistency
    // When offsetX increases, we want content to appear to move left (translate with negative value)
    const translate = `translate(${-offsetX}, ${-offsetY})`;
    this.nodesGroup.setAttribute('transform', translate);
    this.edgesGroup.setAttribute('transform', translate);
    this.groupsGroup.setAttribute('transform', translate);
    this.anchorHandlesGroup.setAttribute('transform', translate);
    this.bendHandlesGroup.setAttribute('transform', translate);
    if (this.edgeLabelsGroup) {
      this.edgeLabelsGroup.setAttribute('transform', translate);
    }
  }

  /**
   * Fit and center the graph by adjusting offset and zoom
   */
  fitAndCenter(): void {
    if (this.nodes.length === 0) {
      return;
    }

    const containerRectInitial = this.container.getBoundingClientRect();
    if (containerRectInitial.width <= 0 || containerRectInitial.height <= 0 || !isFinite(containerRectInitial.width) || !isFinite(containerRectInitial.height)) {
      return;
    }

    // Bounding box: nodes + edge paths (start, bends, end)
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;

    for (const node of this.nodes) {
      if (node.position) {
        const nodeStyle = node.style || {};
        const nodeWidth = nodeStyle.width || this.DEFAULT_NODE_WIDTH;
        const nodeHeight = nodeStyle.height || this.DEFAULT_NODE_HEIGHT;
        minX = Math.min(minX, node.position.x - nodeWidth / 2);
        minY = Math.min(minY, node.position.y - nodeHeight / 2);
        maxX = Math.max(maxX, node.position.x + nodeWidth / 2);
        maxY = Math.max(maxY, node.position.y + nodeHeight / 2);
      }
    }

    for (const edge of this.edges) {
      const points = this.getEdgePoints(edge);
      for (const p of points) {
        minX = Math.min(minX, p.x);
        minY = Math.min(minY, p.y);
        maxX = Math.max(maxX, p.x);
        maxY = Math.max(maxY, p.y);
      }
    }

    if (minX === Infinity) {
      return;
    }

    const padding = 60;
    minX -= padding;
    minY -= padding;
    maxX += padding;
    maxY += padding;

    // Calculate center and scale
    const centerX = (minX + maxX) / 2;
    const centerY = (minY + maxY) / 2;
    const width = maxX - minX;
    const height = maxY - minY;

    // Get container dimensions (wrapper, not SVG, since SVG will be scaled)
    // Re-check if container size is valid (to prevent NaN)
    const containerRectCheck = this.container.getBoundingClientRect();
    if (containerRectCheck.width <= 0 || containerRectCheck.height <= 0 || !isFinite(width) || !isFinite(height) || width <= 0 || height <= 0) {
      return;
    }
    
    const scaleX = containerRectCheck.width / width;
    const scaleY = containerRectCheck.height / height;
    
    // NaN check
    if (!isFinite(scaleX) || !isFinite(scaleY)) {
      return;
    }
    
    const newZoom = Math.min(scaleX, scaleY, 1); // Don't zoom in beyond 1:1

    // Calculate offset to center the graph
    // Set zoom first
    this.zoom = newZoom;
    
    // We want the container center (screen coordinates) to map to the graph center (centerX, centerY) in SVG coordinates
    // screenToSvg formula: svgX = (relativeX / zoom) - offsetX
    // updateTransform uses: translate(-offsetX, -offsetY)
    //
    // For container center (relativeX = containerRect.width / 2):
    //   We want: centerX = (containerRect.width / 2) / zoom - offsetX
    //   Solving for offsetX: offsetX = (containerRect.width / 2) / zoom - centerX
    //
    // Note: updateTransform uses translate(-offsetX, -offsetY), so when offsetX is positive,
    // the content is translated left. This matches screenToSvg where subtracting offsetX
    // makes SVG coordinates smaller (shifts left visually).
    const centerXInSvgSpace = containerRectCheck.width / (2 * this.zoom);
    const centerYInSvgSpace = containerRectCheck.height / (2 * this.zoom);
    // We want the container center to map to graph center in SVG coordinates.
    // screenToSvg: svgX = (relativeX / zoom) - offsetX
    // updateTransform: translate(-offsetX, -offsetY)
    //
    // For container center (relativeX = containerRect.width / 2) to map to graph center:
    //   centerX = (containerRect.width / 2) / zoom - offsetX
    //   offsetX = (containerRect.width / 2) / zoom - centerX = centerXInSvgSpace - centerX
    //
    // Since updateTransform negates the offset in translate(-offsetX, -offsetY),
    // we need to negate the offset calculation here to account for the double negation.
    // The sign is reversed from the theoretical calculation.
    // NaN check
    if (!isFinite(centerX) || !isFinite(centerY) || !isFinite(centerXInSvgSpace) || !isFinite(centerYInSvgSpace)) {
      return;
    }
    
    this.offsetX = centerX - centerXInSvgSpace;
    this.offsetY = centerY - centerYInSvgSpace;
    
    // Remove viewBox if it exists (we use transform instead)
    this.svg.removeAttribute('viewBox');
    
    // Update transform on groups
    this.updateTransform();
    
    // Re-render to update label positions
    this.render();
  }

  /**
   * Fit and center with animation
   */
  private animateFitAndCenter(): void {
    if (this.nodes.length === 0) {
      return;
    }

    // Check container size
    const containerRectInitial = this.container.getBoundingClientRect();
    if (containerRectInitial.width <= 0 || containerRectInitial.height <= 0 || !isFinite(containerRectInitial.width) || !isFinite(containerRectInitial.height)) {
      return;
    }

    // Calculate bounding box of all nodes
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;

    for (const node of this.nodes) {
      if (node.position) {
        const nodeStyle = node.style || {};
        const nodeWidth = nodeStyle.width || this.DEFAULT_NODE_WIDTH;
        const nodeHeight = nodeStyle.height || this.DEFAULT_NODE_HEIGHT;
        minX = Math.min(minX, node.position.x - nodeWidth / 2);
        minY = Math.min(minY, node.position.y - nodeHeight / 2);
        maxX = Math.max(maxX, node.position.x + nodeWidth / 2);
        maxY = Math.max(maxY, node.position.y + nodeHeight / 2);
      }
    }

    if (minX === Infinity) {
      return;
    }

    // Add padding
    const padding = 60;
    minX -= padding;
    minY -= padding;
    maxX += padding;
    maxY += padding;

    // Calculate center and scale
    const centerX = (minX + maxX) / 2;
    const centerY = (minY + maxY) / 2;
    const width = maxX - minX;
    const height = maxY - minY;

    const containerRectCheck = this.container.getBoundingClientRect();
    if (containerRectCheck.width <= 0 || containerRectCheck.height <= 0 || !isFinite(width) || !isFinite(height) || width <= 0 || height <= 0) {
      return;
    }
    
    const scaleX = containerRectCheck.width / width;
    const scaleY = containerRectCheck.height / height;
    
    if (!isFinite(scaleX) || !isFinite(scaleY)) {
      return;
    }
    
    const targetZoom = Math.min(scaleX, scaleY, 1);

    // Container center coordinates (relative coordinates)
    const containerCenterX = containerRectCheck.width / 2;
    const containerCenterY = containerRectCheck.height / 2;

    // Fit with animation
    this.animateZoomToPoint(targetZoom, containerCenterX, containerCenterY, centerX, centerY);
  }

  /**
   * Setup event listeners (using Pointer Events for touch support)
   */
  private setupEventListeners(): void {
    // Click event for empty space (to close popup)
    // Works for both mouse and touch
    // Use bubble phase (default) so node handlers (capture phase) execute first
    this.svg.addEventListener('click', (e: MouseEvent) => {
      const target = e.target as SVGElement;
      
      // Skip if node or edge is clicked (handled by node/edge event handlers)
      // Use closest() to check parent elements, skip if element has data-node-id (g element) or is its child
      const nodeGroup = target.closest('[data-node-id]');
      if (nodeGroup) {
        // Skip if node is clicked (handled by node event handler)
        return;
      }
      
      // Also skip if edge is clicked
      const edgePairKey = target.getAttribute('data-edge-pair-key') || target.getAttribute('data-hit-edge-pair-key');
      if (edgePairKey) {
        return;
      }
      
      // Don't close popup immediately after pan operation ends (short time between pointerup and click)
      // If panning (this.panning !== null), this.panning is reset to null on pointerup,
      // but click event may fire immediately after, so record pan end time and check
      const now = Date.now();
      const timeSincePanEnd = now - (this.lastPanEndTime || 0);
      if (timeSincePanEnd < 100) { // Ignore clicks within 100ms after pan operation ends
        return;
      }
      
      // Close popup if clicked outside nodes or edges
      if (this.mode === 'view') {
        this.hidePopup();
      }
    }); // Use bubble phase (default) so node handlers (capture phase) execute first
    
    // Pointer down (node drag, edge selection, handle drag start)
    // Works for both mouse and touch
    this.svg.addEventListener('pointerdown', (e: PointerEvent) => {
      const target = e.target as SVGElement;
      const nodeId = target.closest('[data-node-id]')?.getAttribute('data-node-id');
      const edgePairKey = target.getAttribute('data-edge-pair-key') || target.getAttribute('data-hit-edge-pair-key');
      const handleType = target.getAttribute('data-handle-type') as 'src' | 'dst' | null;
      const bendIndex = target.getAttribute('data-bend-index');

      if (this.mode === 'edit') {
        // Check for resize handle (highest priority)
        const resizeSide = target.getAttribute('data-resize-side') as 'top' | 'right' | 'bottom' | 'left' | null;
        if (resizeSide) {
          const resizeNodeId = target.getAttribute('data-node-id');
          if (resizeNodeId) {
            const node = this.nodes.find(n => n.id === resizeNodeId);
            if (node?.position) {
              this.pushUndoState();
              const nodeStyle = node.style || {};
              const currentWidth = nodeStyle.width || this.DEFAULT_NODE_WIDTH;
              const currentHeight = nodeStyle.height || this.DEFAULT_NODE_HEIGHT;
              const svgCoords = this.screenToSvg(e.clientX, e.clientY);
              this.resizingNode = {
                nodeId: resizeNodeId,
                side: resizeSide,
                startX: svgCoords.x,
                startY: svgCoords.y,
                startWidth: currentWidth,
                startHeight: currentHeight,
                startNodeX: node.position.x,
                startNodeY: node.position.y,
              };
              (e.target as SVGElement).setPointerCapture(e.pointerId);
              e.preventDefault();
              e.stopPropagation();
              return;
            }
          }
        }
        
        // Start node drag
        if (nodeId) {
          const node = this.nodes.find(n => n.id === nodeId);
          if (node?.position) {
            this.pushUndoState();
            const svgCoords = this.screenToSvg(e.clientX, e.clientY);
            this.draggingNode = {
              nodeId,
              offsetX: svgCoords.x - node.position.x,
              offsetY: svgCoords.y - node.position.y,
            };
            // Set pointer capture for smooth dragging
            (e.target as SVGElement).setPointerCapture(e.pointerId);
            e.preventDefault();
            e.stopPropagation();
            return;
          }
        } else if (bendIndex !== null) {
          // Start bend handle drag
          const edgeIdFromHandle = target.getAttribute('data-edge-id');
          if (edgeIdFromHandle) {
            // Calculate offset between mouse position and bend handle position
            const svgCoords = this.screenToSvg(e.clientX, e.clientY);
            const edge = this.edges.find(e => e.id === edgeIdFromHandle);
            if (edge) {
              const [a, b] = edge.src < edge.dst ? [edge.src, edge.dst] : [edge.dst, edge.src];
              const pairKey = `${a}||${b}`;
              const pair = this.groupEdgesByPair(this.edges).find(p => p.key === pairKey);
              if (pair && pair.bends) {
                const bendIndexNum = parseInt(bendIndex, 10);
                if (bendIndexNum >= 0 && bendIndexNum < pair.bends.length) {
                  this.pushUndoState();
                  const bendPos = pair.bends[bendIndexNum];
                  this.draggingBend = {
                    edgeId: edgeIdFromHandle,
                    bendIndex: bendIndexNum,
                    offsetX: svgCoords.x - bendPos.x,
                    offsetY: svgCoords.y - bendPos.y,
                  };
            e.preventDefault();
            e.stopPropagation();
            return;
                }
              }
            }
          }
        } else if (handleType) {
          // Start anchor handle drag
          const edgeIdFromHandle = target.getAttribute('data-edge-id');
          if (edgeIdFromHandle) {
            // Calculate offset between mouse position and anchor handle position
            const svgCoords = this.screenToSvg(e.clientX, e.clientY);
            const edge = this.edges.find(e => e.id === edgeIdFromHandle);
            if (edge) {
              const [a, b] = edge.src < edge.dst ? [edge.src, edge.dst] : [edge.dst, edge.src];
              const pairKey = `${a}||${b}`;
              const pair = this.groupEdgesByPair(this.edges).find(p => p.key === pairKey);
              if (pair) {
                const nodeId = handleType === 'src' ? pair.a : pair.b;
                const node = this.nodes.find(n => n.id === nodeId);
                if (node) {
                  const otherNodeId = handleType === 'src' ? pair.b : pair.a;
                  const otherNode = this.nodes.find(n => n.id === otherNodeId);
                  if (otherNode) {
                    this.pushUndoState();
                    const anchor = handleType === 'src' 
                      ? (pair.srcAnchor || this.estimateAnchor(node, otherNode))
                      : (pair.dstAnchor || this.estimateAnchor(node, otherNode));
                    const nodeStyle = node.style || {};
                    const w = nodeStyle.width || this.DEFAULT_NODE_WIDTH;
                    const h = nodeStyle.height || this.DEFAULT_NODE_HEIGHT;
                    const anchorPos = this.calculateAnchorPosition(node, anchor, w, h);
                    this.draggingAnchor = {
                      edgeId: edgeIdFromHandle,
                      type: handleType,
                      offsetX: svgCoords.x - anchorPos.x,
                      offsetY: svgCoords.y - anchorPos.y,
                    };
            e.preventDefault();
            e.stopPropagation();
            return;
                  }
                }
              }
            }
          }
        } else if (edgePairKey) {
          // Don't select or do anything on pointerdown for edges
          // Let dblclick event handle bend point insertion
          // Selection and highlighting will be handled separately if needed
          // This prevents interference with double-click detection
        } else {
          // Deselect on background tap/click
          this.deselectEdge();
        }
      } else {
        // View mode: handle node clicks and edge highlighting
        if (nodeId) {
          const node = this.nodes.find(n => n.id === nodeId);
          if (node && this.onNodeClick) {
            const svgCoords = this.screenToSvg(e.clientX, e.clientY);
            this.onNodeClick({
              node,
              position: { x: svgCoords.x, y: svgCoords.y },
              originalEvent: e,
            });
          }
        } else if (edgePairKey) {
          // Don't handle edge interaction in pointerdown for view mode
          // It's handled by setupEdgeInteraction
        } else {
          // Deselect on background tap/click
          this.deselectEdge();
          // Clear tapped edge highlight (view mode only)
          if (this.tappedEdgePairKey) {
            this.tappedEdgePairKey = null;
            this.render();
          }
        }
      }

    });

    // Double tap (insert bend point) - works for both mouse and touch
    let lastTapTime = 0;
    let lastTapTarget: SVGElement | null = null;
    this.svg.addEventListener('pointerdown', (e: PointerEvent) => {
      const target = e.target as SVGElement;
      const edgePairKey = target.getAttribute('data-edge-pair-key') || target.getAttribute('data-hit-edge-pair-key');
      
      if (this.mode === 'edit' && edgePairKey) {
        const currentTime = Date.now();
        const timeDiff = currentTime - lastTapTime;
        
        // Check if this is a double tap (within 300ms and same target)
        if (timeDiff < 300 && lastTapTarget === target) {
          const pair = this.groupEdgesByPair(this.edges).find(p => p.key === edgePairKey);
          if (pair && pair.edges.length > 0) {
            this.insertBendPoint(pair.edges[0].id, e);
            e.preventDefault();
            e.stopPropagation();
            lastTapTime = 0; // Reset to prevent triple tap
            lastTapTarget = null;
            return;
          }
        }
        
        lastTapTime = currentTime;
        lastTapTarget = target;
      }
    });
    
    // Handle double click for edge bend point insertion
    // Use capture phase and check at SVG level to ensure we catch the event
    this.container.addEventListener('dblclick', (e: MouseEvent) => {
      if (this.mode !== 'edit') {
        return;
      }
      const target = e.target as SVGElement;
      if (!target || !this.container.contains(target)) {
        return;
      }
      
      // Check if clicked on hit-path (transparent path for edge interaction)
      const edgePairKey = target.getAttribute('data-hit-edge-pair-key') || target.getAttribute('data-edge-pair-key');
      if (edgePairKey) {
        const pair = this.groupEdgesByPair(this.edges).find(p => p.key === edgePairKey);
        if (pair && pair.edges.length > 0) {
          this.insertBendPoint(pair.edges[0].id, e);
          e.preventDefault();
          e.stopPropagation();
          return;
        }
      }
      
      // Also check parent elements (in case we clicked on a label or other child element)
      let current: SVGElement | null = target;
      while (current && current !== this.svg) {
        const pairKey = current.getAttribute('data-hit-edge-pair-key') || current.getAttribute('data-edge-pair-key');
        if (pairKey) {
          const pair = this.groupEdgesByPair(this.edges).find(p => p.key === pairKey);
          if (pair && pair.edges.length > 0) {
            this.insertBendPoint(pair.edges[0].id, e);
            e.preventDefault();
            e.stopPropagation();
            return;
          }
        }
        current = current.parentElement as SVGElement | null;
      }
    }, true); // Use capture phase

    // Track active pointers for pinch zoom
    const activePointers = new Map<number, PointerEvent>();

    // Pinch zoom support (for touch devices) - track pinch on pointerdown
    this.svg.addEventListener('pointerdown', (e: PointerEvent) => {
      if (e.pointerType === 'touch') {
        activePointers.set(e.pointerId, e);
        
        // Check if we have 2 active pointers (pinch gesture)
        if (activePointers.size === 2) {
          const pointers = Array.from(activePointers.values());
          const [p1, p2] = pointers;
          this.pinchDistance = Math.hypot(p2.clientX - p1.clientX, p2.clientY - p1.clientY);
          this.pinchCenter = {
            x: (p1.clientX + p2.clientX) / 2,
            y: (p1.clientY + p2.clientY) / 2,
          };
          this.initialZoom = this.zoom;
          e.preventDefault(); // Prevent default touch behavior
        }
      }
    });

    // Pointer move (node/handle dragging, node resizing, pinch zoom) - works for both mouse and touch
    this.svg.addEventListener('pointermove', (e: PointerEvent) => {
      if (e.pointerType === 'touch') {
        activePointers.set(e.pointerId, e);
      }

      // Handle pinch zoom (multitouch) - has highest priority
      if (this.pinchDistance !== null && this.pinchCenter !== null && activePointers.size === 2) {
        const pointers = Array.from(activePointers.values());
        const [p1, p2] = pointers;
        const currentDistance = Math.hypot(p2.clientX - p1.clientX, p2.clientY - p1.clientY);
        const scale = currentDistance / this.pinchDistance;
        // Apply exponential scaling to increase sensitivity: pow(scale, 1.5) makes zoom more responsive
        const adjustedScale = Math.pow(scale, 1.5);
        const newZoom = Math.max(0.1, Math.min(5, this.initialZoom * adjustedScale)); // Limit zoom between 0.1x and 5x
        
        // Use common zoom function
        this.zoomToPoint(newZoom, this.pinchCenter.x, this.pinchCenter.y);
        
        this.updateTransform();
        this.render();
        e.preventDefault(); // Prevent default touch behavior
        return;
      }

      // Handle panning (only if not doing other operations and not on interactive elements)
      // For touch: pan only if 1 finger (activePointers.size === 1)
      // For mouse: pan if left button is pressed (e.buttons === 1)
      // Don't pan if clicking on buttons or other UI elements outside SVG
      const target = e.target as Element;
      const isButtonOrControl = target instanceof HTMLButtonElement || 
                                 target.closest('button') !== null ||
                                 target.closest('.relatos-always-show-edges-toggle') !== null ||
                                 target.closest('.relatos-edit-toggle') !== null ||
                                 target.closest('.relatos-control-buttons') !== null;
      
      const isTouchPan = e.pointerType === 'touch' && activePointers.size === 1;
      const isMousePan = e.pointerType === 'mouse' && e.buttons === 1;
      
      if (!isButtonOrControl && !this.resizingNode && !this.resizingGroup && !this.draggingNode && !this.draggingGroup && !this.draggingAnchor && !this.draggingBend && (isTouchPan || isMousePan)) {
        // Start panning if not already started
        if (!this.panning) {
          this.panning = {
            startX: e.clientX,
            startY: e.clientY,
            startOffsetX: this.offsetX,
            startOffsetY: this.offsetY,
          };
        } else {
          // Update panning offset
          const deltaX = e.clientX - this.panning.startX;
          const deltaY = e.clientY - this.panning.startY;
          
          // Convert screen delta to SVG coordinate delta
          // With DOM scale, we need to account for zoom
          // translate(offsetX, offsetY) moves content: positive offsetX moves content right
          // To move graph right when mouse moves right, we need to increase offsetX
          const deltaXInSvgSpace = deltaX / this.zoom;
          const deltaYInSvgSpace = deltaY / this.zoom;
          
          this.offsetX = this.panning.startOffsetX + deltaXInSvgSpace;
          this.offsetY = this.panning.startOffsetY + deltaYInSvgSpace;
          
          this.updateTransform();
          this.render();
        }
        e.preventDefault();
        return;
      }
      
      if (this.resizingNode) {
        this.updateNodeSize(e);
      } else if (this.resizingGroup) {
        this.updateGroupSize(e);
      } else if (this.draggingNode) {
        this.updateNodePosition(e);
      } else if (this.draggingGroup) {
        this.updateGroupPosition(e);
      } else if (this.draggingAnchor) {
        this.updateAnchorPosition(e);
      } else if (this.draggingBend) {
        this.updateBendPosition(e);
      }
    });

    // Global pointer move (track even when dragging outside SVG or panning)
    document.addEventListener('pointermove', (e: PointerEvent) => {
      if (e.pointerType === 'touch') {
        activePointers.set(e.pointerId, e);
      }

      // Don't pan if clicking on buttons or other UI elements outside SVG
      const target = e.target as Element;
      const isButtonOrControl = target instanceof HTMLButtonElement || 
                                 target.closest('button') !== null ||
                                 target.closest('.relatos-always-show-edges-toggle') !== null ||
                                 target.closest('.relatos-edit-toggle') !== null ||
                                 target.closest('.relatos-control-buttons') !== null;

      // Handle panning (global move for panning outside SVG bounds)
      if (!isButtonOrControl && this.panning && !this.resizingNode && !this.resizingGroup && !this.draggingNode && !this.draggingGroup && !this.draggingAnchor && !this.draggingBend) {
        const isTouchPan = e.pointerType === 'touch' && activePointers.size === 1;
        const isMousePan = e.pointerType === 'mouse' && (e.buttons === 1 || e.button === 0);
        
        if (isTouchPan || isMousePan) {
          const deltaX = e.clientX - this.panning.startX;
          const deltaY = e.clientY - this.panning.startY;
          
          // Convert screen delta to SVG coordinate delta
          // translate(offsetX, offsetY) moves content: positive offsetX moves content right
          // To move graph right when mouse moves right, we need to decrease offsetX
          // (so content appears to move right, but offsetX moves left)
          const deltaXInSvgSpace = deltaX / this.zoom;
          const deltaYInSvgSpace = deltaY / this.zoom;
          
          this.offsetX = this.panning.startOffsetX - deltaXInSvgSpace;
          this.offsetY = this.panning.startOffsetY - deltaYInSvgSpace;
          
          this.updateTransform();
          this.render();
          e.preventDefault();
          return;
        }
      }

      if (this.resizingNode) {
        this.updateNodeSize(e);
      } else if (this.resizingGroup) {
        this.updateGroupSize(e);
      } else if (this.draggingNode) {
        this.updateNodePosition(e);
      } else if (this.draggingGroup) {
        this.updateGroupPosition(e);
      } else if (this.draggingAnchor) {
        this.updateAnchorPosition(e);
      } else if (this.draggingBend) {
        this.updateBendPosition(e);
      }
    });

    // Pointer up (end drag/resize, end pinch, end pan) - works for both mouse and touch
    this.svg.addEventListener('pointerup', (e: PointerEvent) => {
      // Reset pinch state
      if (e.pointerType === 'touch') {
        activePointers.delete(e.pointerId);
        if (activePointers.size < 2) {
          this.pinchDistance = null;
          this.pinchCenter = null;
        }
      }
      if (e.target instanceof SVGElement) {
        e.target.releasePointerCapture(e.pointerId);
      }
      if (this.resizingNode) {
        this.handleResizeEnd();
      }
      // End panning
      if (this.panning) {
        this.lastPanEndTime = Date.now(); // Record pan operation end time
      }
      this.panning = null;
      if (this.resizingNode) {
        this.handleResizeEnd();
      } else if (this.resizingGroup) {
        this.handleGroupResizeEnd();
      }
      this.resizingNode = null;
      this.resizingGroup = null;
      this.draggingNode = null;
      this.draggingGroup = null;
      this.draggingAnchor = null;
      this.draggingBend = null;
    });

    // Global pointer up (end drag/resize, end pan)
    document.addEventListener('pointerup', (e: PointerEvent) => {
      if (e.pointerType === 'touch') {
        activePointers.delete(e.pointerId);
        if (activePointers.size < 2) {
          this.pinchDistance = null;
          this.pinchCenter = null;
        }
      }
      if (this.resizingNode) {
        this.handleResizeEnd();
      }
      // End panning
      if (this.panning) {
        this.lastPanEndTime = Date.now(); // Record pan operation end time
      }
      this.panning = null;
      if (this.resizingNode) {
        this.handleResizeEnd();
      } else if (this.resizingGroup) {
        this.handleGroupResizeEnd();
      }
      this.resizingNode = null;
      this.resizingGroup = null;
      this.draggingNode = null;
      this.draggingGroup = null;
      this.draggingAnchor = null;
      this.draggingBend = null;
    });

    // Pointer cancel (e.g., when touch is interrupted)
    this.svg.addEventListener('pointercancel', (e: PointerEvent) => {
      if (e.pointerType === 'touch') {
        activePointers.delete(e.pointerId);
        if (activePointers.size < 2) {
          this.pinchDistance = null;
          this.pinchCenter = null;
        }
      }
      if (e.target instanceof SVGElement) {
        e.target.releasePointerCapture(e.pointerId);
      }
      if (this.resizingNode) {
        this.handleResizeEnd();
      }
      // End panning
      if (this.panning) {
        this.lastPanEndTime = Date.now(); // Record pan operation end time
      }
      this.panning = null;
      if (this.resizingNode) {
        this.handleResizeEnd();
      } else if (this.resizingGroup) {
        this.handleGroupResizeEnd();
      }
      this.resizingNode = null;
      this.resizingGroup = null;
      this.draggingNode = null;
      this.draggingGroup = null;
      this.draggingAnchor = null;
      this.draggingBend = null;
    });

    // Keyboard event (Undo/Redo, delete bend point with Delete/Backspace)
    this.container.addEventListener('keydown', (e: KeyboardEvent) => {
      if (this.mode !== 'edit') {
        return;
      }

      // Undo: Ctrl+Z (Cmd+Z on Mac)
      if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) {
        if (this.canUndo()) {
          this.undo();
          e.preventDefault();
        }
        return;
      }
      // Redo: Ctrl+Shift+Z or Ctrl+Y (Cmd+Shift+Z or Cmd+Y on Mac)
      if ((e.ctrlKey || e.metaKey) && (e.key === 'y' || (e.key === 'z' && e.shiftKey))) {
        if (this.canRedo()) {
          this.redo();
          e.preventDefault();
        }
        return;
      }

      if (!this.selectedEdgeId) {
        return;
      }

      if (e.key === 'Delete' || e.key === 'Backspace') {
        this.deleteNearestBendPoint();
        e.preventDefault();
      }
    });

    // Make focusable
    this.container.setAttribute('tabindex', '0');

    // Wheel zoom support
    this.container.addEventListener('wheel', (e: WheelEvent) => {
      // Check if Ctrl key is pressed (trackpad pinch gesture)
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault(); // Prevent default browser zoom
        
        // Calculate zoom delta from wheel delta
        // deltaY > 0 means zoom out (pinch in), deltaY < 0 means zoom in (pinch out)
        // Use exponential scaling with increased sensitivity (base 1.5, divisor 60 instead of 100)
        const zoomFactor = Math.pow(1.5, -e.deltaY / 60);
        const newZoom = Math.max(0.1, Math.min(5, this.zoom * zoomFactor)); // Limit zoom between 0.1x and 5x
        
        // Zoom around the mouse position
        this.zoomToPoint(newZoom, e.clientX, e.clientY);
        
        this.updateTransform();
        this.render();
      } else {
        // Normal wheel zoom (without Ctrl key)
        // Wheel up (deltaY < 0) -> zoom out, Wheel down (deltaY > 0) -> zoom in
        e.preventDefault(); // Prevent default scrolling
        
        // Calculate zoom delta from wheel delta
        // deltaY < 0 means wheel up (zoom out), deltaY > 0 means wheel down (zoom in)
        // Use exponential scaling with increased sensitivity (base 1.5, divisor 60 instead of 100)
        // deltaY < 0 -> negative exponent -> Math.pow(1.5, negative) < 1 -> zoom out (correct)
        // deltaY > 0 -> positive exponent -> Math.pow(1.5, positive) > 1 -> zoom in (correct)
        const zoomFactor = Math.pow(1.5, e.deltaY / 60);
        const newZoom = Math.max(0.1, Math.min(5, this.zoom * zoomFactor)); // Limit zoom between 0.1x and 5x
        
        // Zoom around the mouse position
        this.zoomToPoint(newZoom, e.clientX, e.clientY);
        
        this.updateTransform();
        this.render();
      }
    }, { passive: false }); // passive: false to allow preventDefault
  }

  /**
   * Create arrow markers
   */
  private createArrowMarkers(): void {
    // Arrow marker (for end)
    const markerEnd = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
    markerEnd.setAttribute('id', 'arrow-end');
    markerEnd.setAttribute('viewBox', '0 0 10 10');
    markerEnd.setAttribute('refX', '9');
    markerEnd.setAttribute('refY', '5');
    markerEnd.setAttribute('markerWidth', '6');
    markerEnd.setAttribute('markerHeight', '6');
    markerEnd.setAttribute('orient', 'auto');
    const pathEnd = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathEnd.setAttribute('d', 'M 0 0 L 10 5 L 0 10 z');
    pathEnd.setAttribute('fill', '#333');
    markerEnd.appendChild(pathEnd);
    this.svgDefs.appendChild(markerEnd);

    // Arrow marker (for start)
    const markerStart = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
    markerStart.setAttribute('id', 'arrow-start');
    markerStart.setAttribute('viewBox', '0 0 10 10');
    markerStart.setAttribute('refX', '1');
    markerStart.setAttribute('refY', '5');
    markerStart.setAttribute('markerWidth', '6');
    markerStart.setAttribute('markerHeight', '6');
    markerStart.setAttribute('orient', 'auto');
    const pathStart = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathStart.setAttribute('d', 'M 10 0 L 0 5 L 10 10 z');
    pathStart.setAttribute('fill', '#333');
    markerStart.appendChild(pathStart);
    this.svgDefs.appendChild(markerStart);
  }

  /**
   * Set data
   */
  setData(nodes: Node[], edges: Edge[], groups?: Group[]): void {
    this.nodes = nodes;
    this.edges = edges;
    this.groups = groups || [];

    // Apply auto-layout to nodes without position information
    // If coordinates (latitude/longitude) exist, place based on lat/lon,
    // otherwise place in remaining 1/4 area
    this.ensureNodePositions();

    // Render
    this.render();
    
    // Automatically execute fit operation at initial position (consider zoom out to prevent node overlap)
    // Execute immediately if container is visible, otherwise execute in show()
    // Check if container size is valid before executing
    if (this.container.style.display !== 'none' && this.container.offsetParent !== null) {
      // If container is visible, delay slightly to execute after rendering completes
      setTimeout(() => {
        const containerRect = this.container.getBoundingClientRect();
        if (containerRect.width > 0 && containerRect.height > 0) {
          this.fitAndCenter();
        }
      }, 100);
    }
    // If container is hidden, fitAndCenter() will be executed when show() is called
  }

  /**
   * Select node (highlight)
   * @param nodeId Node ID to select (null to deselect)
   * @param zoomToNode Whether to zoom in to node (default: true)
   */
  selectNode(nodeId: string | null, zoomToNode: boolean = true): void {
    // Toggle behavior: switch to fit if same node is already zoomed in
    if (nodeId && zoomToNode && this.zoomedNodeId === nodeId) {
      // Same node clicked, switch to fit
      this.zoomedNodeId = null;
      this.selectedNodeId = nodeId;
      this.render();
      this.animateFitAndCenter();
      return;
    }
    
    // New node selected or deselected
    this.selectedNodeId = nodeId;
    if (nodeId) {
      this.zoomedNodeId = nodeId; // Record zoomed node ID
    } else {
      this.zoomedNodeId = null;
    }
    this.render();
    
    // Zoom in to node (like Leaflet's flyTo)
    if (nodeId && zoomToNode) {
      this.zoomToNode(nodeId);
      // Show popup
      const node = this.nodes.find(n => n.id === nodeId);
      if (node) {
        this.showPopup(node);
      }
    } else if (!nodeId) {
      // Fit if deselected
      this.zoomedNodeId = null;
      this.hidePopup();
    }
  }

  /**
   * Zoom in to specified node (with animation like Leaflet's flyTo)
   * @param nodeId Node ID to zoom to
   */
  private zoomToNode(nodeId: string): void {
    const node = this.nodes.find(n => n.id === nodeId);
    if (!node || !node.position) {
      return;
    }

    // Get container size
    const containerRect = this.container.getBoundingClientRect();
    if (containerRect.width <= 0 || containerRect.height <= 0) {
      return;
    }

    const nodeStyle = node.style || {};
    const nodeWidth = nodeStyle.width || this.DEFAULT_NODE_WIDTH;
    const nodeHeight = nodeStyle.height || this.DEFAULT_NODE_HEIGHT;
    const nodeCenterX = node.position.x + nodeWidth / 2;
    const nodeCenterY = node.position.y + nodeHeight / 2;

    // Calculate target zoom level considering node size
    // Make node approximately 20-30% of screen size
    const nodeDisplayWidth = nodeWidth * this.zoom;
    const nodeDisplayHeight = nodeHeight * this.zoom;
    const targetDisplaySize = Math.min(containerRect.width * 0.3, containerRect.height * 0.3);
    
    // Calculate target zoom level (so node displays at appropriate size)
    const zoomForWidth = targetDisplaySize / nodeWidth;
    const zoomForHeight = targetDisplaySize / nodeHeight;
    const calculatedZoom = Math.min(zoomForWidth, zoomForHeight);
    
    // Zoom level limit (minimum 0.5x, maximum 3.0x)
    const minZoom = 0.5;
    const maxZoom = 3.0; // Limit maximum zoom level to 3.0
    const targetZoom = Math.max(minZoom, Math.min(maxZoom, calculatedZoom));

    // Container center coordinates (relative coordinates)
    const containerCenterX = containerRect.width / 2;
    const containerCenterY = containerRect.height / 2;

    // Zoom in with animation
    // Adjust offset using same calculation method as fitAndCenter
    this.animateZoomToPoint(targetZoom, containerCenterX, containerCenterY, nodeCenterX, nodeCenterY);
  }

  /**
   * Zoom to specified point with animation
   * @param targetZoom Target zoom level
   * @param screenCenterX Screen center X coordinate (relative to container)
   * @param screenCenterY Screen center Y coordinate (relative to container)
   * @param targetSvgX Target SVG X coordinate
   * @param targetSvgY Target SVG Y coordinate
   */
  private animateZoomToPoint(
    targetZoom: number,
    screenCenterX: number,
    screenCenterY: number,
    targetSvgX: number,
    targetSvgY: number
  ): void {
    const startZoom = this.zoom;
    const startOffsetX = this.offsetX;
    const startOffsetY = this.offsetY;
    
    // Calculate target offset in advance
    const containerRect = this.container.getBoundingClientRect();
    const targetCenterXInSvgSpace = containerRect.width / (2 * targetZoom);
    const targetCenterYInSvgSpace = containerRect.height / (2 * targetZoom);
    const targetOffsetX = targetSvgX - targetCenterXInSvgSpace;
    const targetOffsetY = targetSvgY - targetCenterYInSvgSpace;
    
    const duration = 500; // Animation duration (milliseconds)
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);

      // Interpolate zoom and offset simultaneously (animate pan and zoom together)
      const currentZoom = startZoom + (targetZoom - startZoom) * easeOut;
      const currentOffsetX = startOffsetX + (targetOffsetX - startOffsetX) * easeOut;
      const currentOffsetY = startOffsetY + (targetOffsetY - startOffsetY) * easeOut;

      // Update
      this.zoom = currentZoom;
      this.offsetX = currentOffsetX;
      this.offsetY = currentOffsetY;
      this.updateTransform();
      this.render();

      // Output debug information when animation completes
      if (progress >= 1) {
        // Calculate screen center SVG coordinates
        const finalContainerRect = this.container.getBoundingClientRect();
        const containerCenterScreenX = finalContainerRect.width / 2;
        const containerCenterScreenY = finalContainerRect.height / 2;
        const centerSvgX = (containerCenterScreenX / this.zoom) - this.offsetX;
        const centerSvgY = (containerCenterScreenY / this.zoom) - this.offsetY;
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }

  /**
   * Ensure node position information (auto-layout if not present)
   * If coordinates (latitude/longitude) exist, place based on lat/lon,
   * otherwise place in remaining 1/4 area
   */
  private ensureNodePositions(): void {
    const nodesWithCoords = this.nodes.filter(n => n.coordinates && n.coordinates.length === 2);
    const nodesWithoutCoords = this.nodes.filter(n => !n.coordinates || n.coordinates.length !== 2);
    const nodesNeedingPosition = this.nodes.filter(n => !n.position);
    
    // Check if all nodes have position and all groups have layout
    // If so, skip auto-layout to respect user's saved layout
    const allNodesHavePosition = this.nodes.every(n => n.position);
    const allGroupsHaveLayout = this.groups.every(g => g.layout);
    
    if (allNodesHavePosition && allGroupsHaveLayout) {
      // All layout info is provided, skip auto-layout
      return;
    }

    if (nodesNeedingPosition.length === 0 && nodesWithCoords.length === 0 && nodesWithoutCoords.length === 0) {
      return;
    }

    // Get container size
    const containerRect = this.container.getBoundingClientRect();
    const baseWidth = containerRect.width || 1000;
    const baseHeight = containerRect.height || 600;

    // Make lat/lon area wide enough (to place in zoomed-out state)
    // Expand coordinate space, then zoom out with fitAndCenter
    const scaleFactor = 2.0; // Expand coordinate space by 2x
    // Shift lat/lon area to right to place non-geo area on left
    const nonGeoAreaWidth = baseWidth * scaleFactor * 0.25; // Left area width (25%)
    const geoAreaWidth = baseWidth * scaleFactor * 0.75; // Lat/lon area (75%)
    const geoAreaHeight = baseHeight * scaleFactor;
    const geoAreaStartX = nonGeoAreaWidth; // Lat/lon area start X position

    // Non-geo area (placed on left, grid layout)
    const nonGeoAreaHeight = baseHeight * scaleFactor; // Height same as lat/lon area
    const nonGeoAreaStartX = 0; // Start from left side

    const existingPositions: Array<{ x: number; y: number; width: number; height: number }> = [];
    // Preserve original position information of existing nodes (positions calculated from lat/lon)
    const existingOriginalPositions: Map<string, { originalX: number; originalY: number }> = new Map();

    // Collect existing position information
    for (const node of this.nodes) {
      if (node.position) {
        const nodeStyle = node.style || {};
        const nodeWidth = nodeStyle.width || this.DEFAULT_NODE_WIDTH;
        const nodeHeight = nodeStyle.height || this.DEFAULT_NODE_HEIGHT;
        existingPositions.push({
          x: node.position.x - nodeWidth / 2,
          y: node.position.y - nodeHeight / 2,
          width: nodeWidth,
          height: nodeHeight,
        });
        
        // Save original position information of existing nodes (positions calculated from lat/lon)
        if (node.coordinates && node.coordinates.length === 2) {
          const [lat, lon] = node.coordinates;
          // Recalculate position from lat/lon (bounds calculated later, but used temporarily)
          // Actually, nodes with position already set are adjusted, so original position needs to be inferred
        }
      }
    }

    // Calculate positions for nodes with lat/lon
    if (nodesWithCoords.length > 0) {
      // Calculate lat/lon range
      const lats = nodesWithCoords.map(n => n.coordinates![0]);
      const lons = nodesWithCoords.map(n => n.coordinates![1]);
      const minLat = Math.min(...lats);
      const maxLat = Math.max(...lats);
      const minLon = Math.min(...lons);
      const maxLon = Math.max(...lons);

      // Expand range slightly (add margin)
      const latRange = maxLat - minLat;
      const lonRange = maxLon - minLon;
      const margin = Math.max(latRange, lonRange) * 0.1 || 0.01; // Default when range is 0

      const bounds = {
        minLat: minLat - margin,
        maxLat: maxLat + margin,
        minLon: minLon - margin,
        maxLon: maxLon + margin,
      };

      // Pre-calculate original center coordinates for all nodes (existing + new)
      // Map<nodeId, {originalCenterX, originalCenterY}>
      const nodeOriginalCenters: Map<string, { originalCenterX: number; originalCenterY: number }> = new Map();
      const nodeInfoMap: Map<string, { node: Node; width: number; height: number; originalCenterX: number; originalCenterY: number }> = new Map();

      // Calculate original center coordinates for all nodes (existing + new)
      for (const node of nodesWithCoords) {
        const [lat, lon] = node.coordinates!;
        const normalizedX = (lon - bounds.minLon) / (bounds.maxLon - bounds.minLon);
        const normalizedY = 1 - (lat - bounds.minLat) / (bounds.maxLat - bounds.minLat); // Y axis is inverted

        const svgPos = {
          x: geoAreaStartX + normalizedX * geoAreaWidth,
          y: normalizedY * geoAreaHeight,
        };

        const nodeStyle = node.style || {};
        const nodeWidth = nodeStyle.width || this.DEFAULT_NODE_WIDTH;
        const nodeHeight = nodeStyle.height || this.DEFAULT_NODE_HEIGHT;

        // Calculate original center coordinates (center coordinates, not top-left)
        const originalCenterX = svgPos.x;
        const originalCenterY = svgPos.y;

        nodeOriginalCenters.set(node.id, { originalCenterX, originalCenterY });
        nodeInfoMap.set(node.id, {
          node,
          width: nodeWidth,
          height: nodeHeight,
          originalCenterX,
          originalCenterY,
        });
      }

      // Vector-based collision resolution algorithm
      // Maintains vector direction between nodes while adjusting distance
      // Ensures groups (including ancestor groups) don't overlap with other groups
      this.resolveNodePositionsWithVectorConstraints(nodeInfoMap, nodeOriginalCenters);
    }

    // Grid layout for nodes without lat/lon in left area (same approach as Map2D)
    const nodesWithoutCoordsNeedingPosition = nodesWithoutCoords.filter(n => !n.position);
    if (nodesWithoutCoordsNeedingPosition.length > 0) {
      const padding = 20; // Padding between nodes
      
      // Grid layout (same as Map2D)
      const cols = Math.ceil(Math.sqrt(nodesWithoutCoordsNeedingPosition.length));
      const rows = Math.ceil(nodesWithoutCoordsNeedingPosition.length / cols);
      const availableWidth = nonGeoAreaWidth - padding * 2;
      const availableHeight = nonGeoAreaHeight - padding * 2;
      const cellWidth = availableWidth / cols;
      const cellHeight = availableHeight / rows;

      nodesWithoutCoordsNeedingPosition.forEach((node, index) => {
        const nodeStyle = node.style || {};
        const nodeWidth = nodeStyle.width || this.DEFAULT_NODE_WIDTH;
        const nodeHeight = nodeStyle.height || this.DEFAULT_NODE_HEIGHT;

        const row = Math.floor(index / cols);
        const col = index % cols;
        
        // Place at center of cell
        const x = nonGeoAreaStartX + padding + (col + 0.5) * cellWidth;
        const y = padding + (row + 0.5) * cellHeight;

        node.position = { x, y };

        existingPositions.push({
          x: x - nodeWidth / 2,
          y: y - nodeHeight / 2,
          width: nodeWidth,
          height: nodeHeight,
        });
      });
    }
  }

  /**
   * Vector-based collision resolution algorithm
   * Maintains vector direction between nodes while adjusting distance
   * Ensures groups (including ancestor groups) don't overlap with other groups
   * 
   * @param nodeInfoMap All node information (including original center coordinates)
   * @param nodeOriginalCenters Original center coordinates for all nodes
   */
  private resolveNodePositionsWithVectorConstraints(
    nodeInfoMap: Map<string, { node: Node; width: number; height: number; originalCenterX: number; originalCenterY: number }>,
    nodeOriginalCenters: Map<string, { originalCenterX: number; originalCenterY: number }>
  ): void {
    const NODE_PADDING = 20;
    const GROUP_PADDING = 30;
    const NESTED_GROUP_MARGIN = 50;
    const GROUP_SPACING = 60;
    const LABEL_OFFSET_Y = 25;
    const maxIterations = 100;

    // Track nodes with saved layout (these should not be moved)
    const nodesWithSavedPosition: Set<string> = new Set();
    
    // Track groups with saved layout (these should use their saved bounds)
    const groupsWithSavedLayout: Set<string> = new Set();
    for (const group of this.groups) {
      if (group.layout) {
        groupsWithSavedLayout.add(group.id);
      }
    }

    // Initialize node positions from original centers
    const currentCenters: Map<string, { centerX: number; centerY: number }> = new Map();
    const nodePositions: Map<string, { x: number; y: number; width: number; height: number }> = new Map();

    for (const [nodeId, nodeInfo] of nodeInfoMap) {
      const node = nodeInfo.node;
      const originalCenter = nodeOriginalCenters.get(nodeId)!;
      
      if (node.position) {
        // Use existing position and mark as saved (should not be moved)
        currentCenters.set(nodeId, { centerX: node.position.x, centerY: node.position.y });
        nodesWithSavedPosition.add(nodeId);
      } else {
        // Use original center coordinates as initial value
        currentCenters.set(nodeId, {
          centerX: originalCenter.originalCenterX,
          centerY: originalCenter.originalCenterY,
        });
      }
      
      const center = currentCenters.get(nodeId)!;
      nodePositions.set(nodeId, {
        x: center.centerX - nodeInfo.width / 2,
        y: center.centerY - nodeInfo.height / 2,
        width: nodeInfo.width,
        height: nodeInfo.height,
      });
    }

    // Helper: Get all groups that contain a node (including ancestor groups)
    const getGroupsForNode = (nodeId: string): Group[] => {
      const groups: Group[] = [];
      for (const group of this.groups) {
        // Collect all node IDs in this group (including descendant groups)
        const allNodeIds = new Set<string>();
        const collectNodeIds = (g: Group): void => {
          for (const id of g.nodeIds) {
            allNodeIds.add(id);
          }
          const childGroups = this.groups.filter(cg => cg.parentId === g.id);
          for (const childGroup of childGroups) {
            collectNodeIds(childGroup);
          }
        };
        collectNodeIds(group);
        
        if (allNodeIds.has(nodeId)) {
          groups.push(group);
        }
      }
      return groups;
    };

    // Helper: Calculate group bounds from current node positions or saved layout
    const calculateGroupBoundsForLayout = (group: Group): { minX: number; maxX: number; minY: number; maxY: number } | null => {
      // If group has saved layout, use it directly
      if (groupsWithSavedLayout.has(group.id) && group.layout) {
        return {
          minX: group.layout.position.x,
          maxX: group.layout.position.x + group.layout.size.width,
          minY: group.layout.position.y,
          maxY: group.layout.position.y + group.layout.size.height,
        };
      }
      
      const hasChildGroups = this.groups.some(g => g.parentId === group.id);
      const childGroupNodeIds = new Set<string>();
      
      if (hasChildGroups) {
        const childGroups = this.groups.filter(g => g.parentId === group.id);
        for (const childGroup of childGroups) {
          const collectNodeIds = (g: Group): void => {
            for (const nodeId of g.nodeIds) {
              childGroupNodeIds.add(nodeId);
            }
            const descendantGroups = this.groups.filter(dg => dg.parentId === g.id);
            for (const descendantGroup of descendantGroups) {
              collectNodeIds(descendantGroup);
            }
          };
          collectNodeIds(childGroup);
        }
      }

      let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
      let hasValidContent = false;

      // Include direct nodes
      for (const nodeId of group.nodeIds) {
        if (hasChildGroups && childGroupNodeIds.has(nodeId)) {
          continue;
        }
        const pos = nodePositions.get(nodeId);
        if (pos) {
          hasValidContent = true;
          minX = Math.min(minX, pos.x);
          maxX = Math.max(maxX, pos.x + pos.width);
          minY = Math.min(minY, pos.y);
          maxY = Math.max(maxY, pos.y + pos.height);
        }
      }

      // Include child groups
      if (hasChildGroups) {
        const childGroups = this.groups.filter(g => g.parentId === group.id);
        for (const childGroup of childGroups) {
          const childBounds = calculateGroupBoundsForLayout(childGroup);
          if (childBounds) {
            hasValidContent = true;
            minX = Math.min(minX, childBounds.minX);
            maxX = Math.max(maxX, childBounds.maxX);
            minY = Math.min(minY, childBounds.minY);
            maxY = Math.max(maxY, childBounds.maxY);
          }
        }
      }

      if (!hasValidContent) {
        return null;
      }

      const padding = hasChildGroups ? NESTED_GROUP_MARGIN : GROUP_PADDING;
      const topPadding = padding + LABEL_OFFSET_Y;

      return {
        minX: minX - padding,
        maxX: maxX + padding,
        minY: minY - topPadding,
        maxY: maxY + padding,
      };
    };

    // Iteratively resolve collisions
    for (let iteration = 0; iteration < maxIterations; iteration++) {
      let hasCollision = false;

      // Check all pairs of nodes
      const nodeArray = Array.from(nodeInfoMap.entries());
      for (let i = 0; i < nodeArray.length; i++) {
        const [nodeIdA, nodeInfoA] = nodeArray[i];
        const centerA = currentCenters.get(nodeIdA)!;
        const posA = nodePositions.get(nodeIdA)!;
        const groupsA = getGroupsForNode(nodeIdA);

        for (let j = i + 1; j < nodeArray.length; j++) {
          const [nodeIdB, nodeInfoB] = nodeArray[j];
          const centerB = currentCenters.get(nodeIdB)!;
          const posB = nodePositions.get(nodeIdB)!;
          const groupsB = getGroupsForNode(nodeIdB);

          // Calculate original vector from A to B
          const originalCenterA = nodeOriginalCenters.get(nodeIdA)!;
          const originalCenterB = nodeOriginalCenters.get(nodeIdB)!;
          const originalDx = originalCenterB.originalCenterX - originalCenterA.originalCenterX;
          const originalDy = originalCenterB.originalCenterY - originalCenterA.originalCenterY;
          const originalDistance = Math.sqrt(originalDx * originalDx + originalDy * originalDy);
          
          if (originalDistance === 0) continue; // Skip if nodes are at same original position
          
          const originalUnitX = originalDx / originalDistance;
          const originalUnitY = originalDy / originalDistance;

          // Check if groups overlap
          let needsAdjustment = false;
          let minRequiredDistance = 0;

          for (const groupA of groupsA) {
            const boundsA = calculateGroupBoundsForLayout(groupA);
            if (!boundsA) continue;

            for (const groupB of groupsB) {
              // Skip if groups are related (one contains the other)
              let isRelated = false;
              if (groupA.id === groupB.id) {
                isRelated = true;
              } else {
                // Check if groupA contains groupB or vice versa
                const checkContains = (parent: Group, child: Group): boolean => {
                  if (child.parentId === parent.id) return true;
                  if (!child.parentId) return false;
                  const childParent = this.groups.find(g => g.id === child.parentId);
                  return childParent ? checkContains(parent, childParent) : false;
                };
                isRelated = checkContains(groupA, groupB) || checkContains(groupB, groupA);
              }

              if (isRelated) continue; // Skip related groups

              const boundsB = calculateGroupBoundsForLayout(groupB);
              if (!boundsB) continue;

              // Check if groups overlap
              const overlapsHorizontally = boundsA.minX < boundsB.maxX + GROUP_SPACING && boundsA.maxX + GROUP_SPACING > boundsB.minX;
              const overlapsVertically = boundsA.minY < boundsB.maxY + GROUP_SPACING && boundsA.maxY + GROUP_SPACING > boundsB.minY;
              
              if (overlapsHorizontally && overlapsVertically) {
                needsAdjustment = true;
                
                // Calculate required distance to separate groups
                // Find the minimum distance needed to separate the groups along the vector direction
                const centerAX = (boundsA.minX + boundsA.maxX) / 2;
                const centerAY = (boundsA.minY + boundsA.maxY) / 2;
                const centerBX = (boundsB.minX + boundsB.maxX) / 2;
                const centerBY = (boundsB.minY + boundsB.maxY) / 2;
                
                const currentDx = centerBX - centerAX;
                const currentDy = centerBY - centerAY;
                const currentDistance = Math.sqrt(currentDx * currentDx + currentDy * currentDy);
                
                // Calculate required separation distance
                const widthA = boundsA.maxX - boundsA.minX;
                const heightA = boundsA.maxY - boundsA.minY;
                const widthB = boundsB.maxX - boundsB.minX;
                const heightB = boundsB.maxY - boundsB.minY;
                
                // Project group sizes onto the vector direction
                const projectionA = Math.abs(widthA * originalUnitX) + Math.abs(heightA * originalUnitY);
                const projectionB = Math.abs(widthB * originalUnitX) + Math.abs(heightB * originalUnitY);
                const requiredDistance = (projectionA + projectionB) / 2 + GROUP_SPACING;
                
                if (currentDistance < requiredDistance) {
                  minRequiredDistance = Math.max(minRequiredDistance, requiredDistance);
                }
              }
            }
          }

          // Adjust positions along vector direction if needed (for group collisions)
          if (needsAdjustment && minRequiredDistance > 0) {
            hasCollision = true;
            
            const currentDx = centerB.centerX - centerA.centerX;
            const currentDy = centerB.centerY - centerA.centerY;
            const currentDistance = Math.sqrt(currentDx * currentDx + currentDy * currentDy);
            
            if (currentDistance < minRequiredDistance) {
              // Skip if both nodes have saved positions (respect user's saved layout)
              const aHasSavedPos = nodesWithSavedPosition.has(nodeIdA);
              const bHasSavedPos = nodesWithSavedPosition.has(nodeIdB);
              
              if (aHasSavedPos && bHasSavedPos) {
                // Both have saved positions, don't move either
                continue;
              }
              
              // Calculate new positions maintaining vector direction
              const scale = minRequiredDistance / originalDistance;
              const newDx = originalDx * scale;
              const newDy = originalDy * scale;
              
              // Move both nodes to maintain their relative positions
              // Keep nodeA's position relative to original, adjust nodeB
              const newCenterBX = originalCenterA.originalCenterX + newDx;
              const newCenterBY = originalCenterA.originalCenterY + newDy;
              
              // But we need to adjust both to maintain the vector direction from original positions
              // Calculate adjustment needed
              const adjustmentX = (newCenterBX - centerB.centerX) / 2;
              const adjustmentY = (newCenterBY - centerB.centerY) / 2;
              
              // Only move nodes that don't have saved positions
              if (!aHasSavedPos) {
                centerA.centerX -= adjustmentX;
                centerA.centerY -= adjustmentY;
                posA.x = centerA.centerX - nodeInfoA.width / 2;
                posA.y = centerA.centerY - nodeInfoA.height / 2;
              }
              if (!bHasSavedPos) {
                centerB.centerX += adjustmentX;
                centerB.centerY += adjustmentY;
                posB.x = centerB.centerX - nodeInfoB.width / 2;
                posB.y = centerB.centerY - nodeInfoB.height / 2;
              }
            }
          }

          // Direct node-to-node collision detection (for cases without groups)
          // Check if both nodes have no groups or if groups didn't require adjustment
          if (!needsAdjustment) {
            // Skip if both nodes have saved positions (respect user's saved layout)
            const aHasSavedPos = nodesWithSavedPosition.has(nodeIdA);
            const bHasSavedPos = nodesWithSavedPosition.has(nodeIdB);
            
            if (aHasSavedPos && bHasSavedPos) {
              // Both have saved positions, don't move either
              continue;
            }
            
            // Check if node rectangles overlap
            const nodeOverlapsHorizontally = posA.x < posB.x + posB.width + NODE_PADDING && posA.x + posA.width + NODE_PADDING > posB.x;
            const nodeOverlapsVertically = posA.y < posB.y + posB.height + NODE_PADDING && posA.y + posA.height + NODE_PADDING > posB.y;
            
            if (nodeOverlapsHorizontally && nodeOverlapsVertically) {
              hasCollision = true;
              
              // Calculate required distance to separate nodes
              // Project node sizes onto the vector direction
              const projectionA = Math.abs(nodeInfoA.width * originalUnitX) + Math.abs(nodeInfoA.height * originalUnitY);
              const projectionB = Math.abs(nodeInfoB.width * originalUnitX) + Math.abs(nodeInfoB.height * originalUnitY);
              const requiredNodeDistance = (projectionA + projectionB) / 2 + NODE_PADDING;
              
              const currentDx = centerB.centerX - centerA.centerX;
              const currentDy = centerB.centerY - centerA.centerY;
              const currentNodeDistance = Math.sqrt(currentDx * currentDx + currentDy * currentDy);
              
              if (currentNodeDistance < requiredNodeDistance) {
                // Calculate new positions maintaining vector direction
                const scale = requiredNodeDistance / originalDistance;
                const newDx = originalDx * scale;
                const newDy = originalDy * scale;
                
                const newCenterBX = originalCenterA.originalCenterX + newDx;
                const newCenterBY = originalCenterA.originalCenterY + newDy;
                
                // Calculate adjustment needed
                const adjustmentX = (newCenterBX - centerB.centerX) / 2;
                const adjustmentY = (newCenterBY - centerB.centerY) / 2;
                
                // Only move nodes that don't have saved positions
                if (!aHasSavedPos) {
                  centerA.centerX -= adjustmentX;
                  centerA.centerY -= adjustmentY;
                  posA.x = centerA.centerX - nodeInfoA.width / 2;
                  posA.y = centerA.centerY - nodeInfoA.height / 2;
                }
                if (!bHasSavedPos) {
                  centerB.centerX += adjustmentX;
                  centerB.centerY += adjustmentY;
                  posB.x = centerB.centerX - nodeInfoB.width / 2;
                  posB.y = centerB.centerY - nodeInfoB.height / 2;
                }
              }
            }
          }
        }
      }

      if (!hasCollision) {
        break;
      }
    }

    // Set final positions to nodes (only for nodes without saved positions)
    for (const [nodeId, nodeInfo] of nodeInfoMap) {
      // Skip nodes with saved positions (already have correct position)
      if (nodesWithSavedPosition.has(nodeId)) {
        continue;
      }
      const center = currentCenters.get(nodeId)!;
      nodeInfo.node.position = {
        x: center.centerX,
        y: center.centerY,
      };
    }

    // Calculate and store group layouts
    for (const group of this.groups) {
      const bounds = calculateGroupBoundsForLayout(group);
      if (bounds) {
        group.layout = {
          position: { x: bounds.minX, y: bounds.minY },
          size: {
            width: bounds.maxX - bounds.minX,
            height: bounds.maxY - bounds.minY,
          },
        };
      }
    }
  }

  /**
   * Resolve group-group collisions for same-level groups
   * Maintains original positional relationships (left-right, top-bottom)
   * and prevents overlaps between groups at the same hierarchy level
   */
  private resolveGroupPositionsWithOrderConstraints(
    nodeOriginalCenters: Map<string, { originalCenterX: number; originalCenterY: number }>
  ): void {
    const GROUP_SPACING = 60; // Minimum spacing between sibling groups (increased to prevent overlap)
    const maxIterations = 50;

    // Get all groups with their current layouts and original centers
    const groupInfo: Array<{
      group: Group;
      layout: GroupLayout;
      originalCenter: { x: number; y: number };
      level: number;
    }> = [];

    // Helper to calculate group's original center based on its nodes
    const getGroupOriginalCenter = (group: Group): { x: number; y: number } | null => {
      const allNodeIds = new Set<string>();
      
      // Collect all node IDs in this group (including descendant groups)
      const collectNodeIds = (g: Group): void => {
        for (const nodeId of g.nodeIds) {
          allNodeIds.add(nodeId);
        }
        const childGroups = this.groups.filter(cg => cg.parentId === g.id);
        for (const childGroup of childGroups) {
          collectNodeIds(childGroup);
        }
      };
      collectNodeIds(group);
      
      if (allNodeIds.size === 0) {
        return null;
      }
      
      let sumX = 0;
      let sumY = 0;
      let count = 0;
      
      for (const nodeId of allNodeIds) {
        const originalCenter = nodeOriginalCenters.get(nodeId);
        if (originalCenter) {
          sumX += originalCenter.originalCenterX;
          sumY += originalCenter.originalCenterY;
          count++;
        }
      }
      
      if (count === 0) {
        return null;
      }
      
      return {
        x: sumX / count,
        y: sumY / count,
      };
    };

    // Calculate hierarchy level
    const getLevel = (group: Group): number => {
      if (!group.parentId) return 0;
      const parent = this.groups.find(g => g.id === group.parentId);
      if (!parent) return 0;
      return 1 + getLevel(parent);
    };

    // Collect all groups with their layouts and original centers
    for (const group of this.groups) {
      const layout = this.getGroupLayout(group);
      if (!layout) continue;
      
      const originalCenter = getGroupOriginalCenter(group);
      if (!originalCenter) continue;
      
      groupInfo.push({
        group,
        layout,
        originalCenter,
        level: getLevel(group),
      });
    }

    // Group by hierarchy level and parent
    const groupsByLevel: Map<number, Map<string | null, typeof groupInfo>> = new Map();
    for (const info of groupInfo) {
      if (!groupsByLevel.has(info.level)) {
        groupsByLevel.set(info.level, new Map());
      }
      const levelMap = groupsByLevel.get(info.level)!;
      const parentId = info.group.parentId || null;
      if (!levelMap.has(parentId)) {
        levelMap.set(parentId, []);
      }
      levelMap.get(parentId)!.push(info);
    }

    // Resolve collisions for each level and parent group
    for (const [level, parentMap] of groupsByLevel) {
      for (const [parentId, groups] of parentMap) {
        if (groups.length < 2) continue; // Need at least 2 groups to have collisions

        // Sort groups by original position (maintain lat/lon order)
        groups.sort((a, b) => {
          const yDiff = a.originalCenter.y - b.originalCenter.y;
          if (Math.abs(yDiff) > 10) {
            return yDiff; // Sort by Y first if difference is significant
          }
          return a.originalCenter.x - b.originalCenter.x; // Then by X
        });

        // Resolve collisions iteratively
        for (let iteration = 0; iteration < maxIterations; iteration++) {
          let hasCollision = false;

          // Resolve x-direction collisions (left to right)
          for (let i = 1; i < groups.length; i++) {
            const current = groups[i];
            const currentLeft = current.layout.position.x;
            const currentRight = currentLeft + current.layout.size.width;

            // Check collision with groups to the left
            for (let j = 0; j < i; j++) {
              const other = groups[j];
              const otherLeft = other.layout.position.x;
              const otherRight = otherLeft + other.layout.size.width;

              // Check if groups overlap horizontally
              if (currentLeft < otherRight + GROUP_SPACING && currentRight + GROUP_SPACING > otherLeft) {
                // Check if they also overlap vertically
                const currentTop = current.layout.position.y;
                const currentBottom = currentTop + current.layout.size.height;
                const otherTop = other.layout.position.y;
                const otherBottom = otherTop + other.layout.size.height;

                if (currentTop < otherBottom + GROUP_SPACING && currentBottom + GROUP_SPACING > otherTop) {
                  hasCollision = true;
                  // Move current group to the right to maintain original x order
                  const requiredGap = otherRight + GROUP_SPACING - currentLeft;
                  current.layout.position.x += requiredGap;
                  
                  // Recalculate group bounds after movement
                  const bounds = this.calculateGroupBounds(current.group.nodeIds, current.group.id);
                  if (bounds) {
                    current.layout.size = {
                      width: bounds.maxX - bounds.minX,
                      height: bounds.maxY - bounds.minY,
                    };
                  }
                }
              }
            }
          }

          // Resolve y-direction collisions (top to bottom)
          for (let i = 1; i < groups.length; i++) {
            const current = groups[i];
            const currentTop = current.layout.position.y;
            const currentBottom = currentTop + current.layout.size.height;

            // Check collision with groups above
            for (let j = 0; j < i; j++) {
              const other = groups[j];
              const otherTop = other.layout.position.y;
              const otherBottom = otherTop + other.layout.size.height;

              // Check if groups overlap vertically
              if (currentTop < otherBottom + GROUP_SPACING && currentBottom + GROUP_SPACING > otherTop) {
                // Check if they also overlap horizontally
                const currentLeft = current.layout.position.x;
                const currentRight = currentLeft + current.layout.size.width;
                const otherLeft = other.layout.position.x;
                const otherRight = otherLeft + other.layout.size.width;

                if (currentLeft < otherRight + GROUP_SPACING && currentRight + GROUP_SPACING > otherLeft) {
                  hasCollision = true;
                  // Move current group downward to maintain original y order
                  const requiredGap = otherBottom + GROUP_SPACING - currentTop;
                  current.layout.position.y += requiredGap;
                  
                  // Recalculate group bounds after movement
                  const bounds = this.calculateGroupBounds(current.group.nodeIds, current.group.id);
                  if (bounds) {
                    current.layout.size = {
                      width: bounds.maxX - bounds.minX,
                      height: bounds.maxY - bounds.minY,
                    };
                  }
                }
              }
            }
          }

          if (!hasCollision) {
            break;
          }
        }

        // Update group layouts
        for (const info of groups) {
          info.group.layout = info.layout;
        }
      }
    }
  }

  /**
   * Compact layout: reduce excess space while maintaining position relationships
   * Nodes and groups maintain their relative positions (left-right, top-bottom)
   * Same-level groups must not overlap
   */
  private compactLayout(
    nodeOriginalCenters: Map<string, { originalCenterX: number; originalCenterY: number }>
  ): void {
    const NODE_PADDING = 20;
    const GROUP_SPACING = 60;

    // Helper to get group's original center
    const getGroupOriginalCenter = (group: Group): { x: number; y: number } | null => {
      const allNodeIds = new Set<string>();
      const collectNodeIds = (g: Group): void => {
        for (const nodeId of g.nodeIds) {
          allNodeIds.add(nodeId);
        }
        const childGroups = this.groups.filter(cg => cg.parentId === g.id);
        for (const childGroup of childGroups) {
          collectNodeIds(childGroup);
        }
      };
      collectNodeIds(group);
      
      if (allNodeIds.size === 0) return null;
      
      let sumX = 0, sumY = 0, count = 0;
      for (const nodeId of allNodeIds) {
        const originalCenter = nodeOriginalCenters.get(nodeId);
        if (originalCenter) {
          sumX += originalCenter.originalCenterX;
          sumY += originalCenter.originalCenterY;
          count++;
        }
      }
      
      return count > 0 ? { x: sumX / count, y: sumY / count } : null;
    };

    // Get hierarchy level
    const getLevel = (group: Group): number => {
      if (!group.parentId) return 0;
      const parent = this.groups.find(g => g.id === group.parentId);
      return parent ? 1 + getLevel(parent) : 0;
    };

    // Compact nodes horizontally (left to right)
    const nodes = Array.from(this.nodes).filter(n => n.position);
    nodes.sort((a, b) => {
      const centerA = nodeOriginalCenters.get(a.id);
      const centerB = nodeOriginalCenters.get(b.id);
      if (!centerA || !centerB) return 0;
      const yDiff = centerA.originalCenterY - centerB.originalCenterY;
      if (Math.abs(yDiff) > 10) return yDiff;
      return centerA.originalCenterX - centerB.originalCenterX;
    });

    for (let i = 1; i < nodes.length; i++) {
      const current = nodes[i];
      if (!current.position) continue;
      
      const currentStyle = current.style || {};
      const currentWidth = currentStyle.width || this.DEFAULT_NODE_WIDTH;
      const currentLeft = current.position.x - currentWidth / 2;

      // Find rightmost position of nodes to the left
      let maxRight = -Infinity;
      for (let j = 0; j < i; j++) {
        const other = nodes[j];
        if (!other.position) continue;
        const otherStyle = other.style || {};
        const otherWidth = otherStyle.width || this.DEFAULT_NODE_WIDTH;
        const otherRight = other.position.x + otherWidth / 2;
        maxRight = Math.max(maxRight, otherRight);
      }

      if (maxRight > -Infinity) {
        const potentialLeft = maxRight + NODE_PADDING;
        if (currentLeft > potentialLeft) {
          const deltaX = potentialLeft - currentLeft;
          current.position.x += deltaX;
        }
      }
    }

    // Compact nodes vertically (top to bottom)
    for (let i = 1; i < nodes.length; i++) {
      const current = nodes[i];
      if (!current.position) continue;
      
      const currentStyle = current.style || {};
      const currentHeight = currentStyle.height || this.DEFAULT_NODE_HEIGHT;
      const currentTop = current.position.y - currentHeight / 2;

      // Find bottommost position of nodes above
      let maxBottom = -Infinity;
      for (let j = 0; j < i; j++) {
        const other = nodes[j];
        if (!other.position) continue;
        const otherStyle = other.style || {};
        const otherHeight = otherStyle.height || this.DEFAULT_NODE_HEIGHT;
        const otherBottom = other.position.y + otherHeight / 2;
        maxBottom = Math.max(maxBottom, otherBottom);
      }

      if (maxBottom > -Infinity) {
        const potentialTop = maxBottom + NODE_PADDING;
        if (currentTop > potentialTop) {
          const deltaY = potentialTop - currentTop;
          current.position.y += deltaY;
        }
      }
    }

    // Compact same-level groups
    const groupsByLevel: Map<number, Map<string | null, Group[]>> = new Map();
    for (const group of this.groups) {
      const level = getLevel(group);
      if (!groupsByLevel.has(level)) {
        groupsByLevel.set(level, new Map());
      }
      const levelMap = groupsByLevel.get(level)!;
      const parentId = group.parentId || null;
      if (!levelMap.has(parentId)) {
        levelMap.set(parentId, []);
      }
      levelMap.get(parentId)!.push(group);
    }

    for (const [level, parentMap] of groupsByLevel) {
      for (const [parentId, groups] of parentMap) {
        if (groups.length < 2) continue;

        // Sort by original position
        groups.sort((a, b) => {
          const centerA = getGroupOriginalCenter(a);
          const centerB = getGroupOriginalCenter(b);
          if (!centerA || !centerB) return 0;
          const yDiff = centerA.y - centerB.y;
          if (Math.abs(yDiff) > 10) return yDiff;
          return centerA.x - centerB.x;
        });

        // Compact horizontally
        for (let i = 1; i < groups.length; i++) {
          const current = groups[i];
          const currentLayout = this.getGroupLayout(current);
          if (!currentLayout) continue;

          const currentLeft = currentLayout.position.x;

          let maxRight = -Infinity;
          for (let j = 0; j < i; j++) {
            const other = groups[j];
            const otherLayout = this.getGroupLayout(other);
            if (!otherLayout) continue;
            const otherRight = otherLayout.position.x + otherLayout.size.width;
            maxRight = Math.max(maxRight, otherRight);
          }

          if (maxRight > -Infinity) {
            const potentialLeft = maxRight + GROUP_SPACING;
            if (currentLeft > potentialLeft) {
              const deltaX = potentialLeft - currentLeft;
              currentLayout.position.x += deltaX;
              current.layout = currentLayout;
            }
          }
        }

        // Compact vertically
        for (let i = 1; i < groups.length; i++) {
          const current = groups[i];
          const currentLayout = this.getGroupLayout(current);
          if (!currentLayout) continue;

          const currentTop = currentLayout.position.y;

          let maxBottom = -Infinity;
          for (let j = 0; j < i; j++) {
            const other = groups[j];
            const otherLayout = this.getGroupLayout(other);
            if (!otherLayout) continue;
            const otherBottom = otherLayout.position.y + otherLayout.size.height;
            maxBottom = Math.max(maxBottom, otherBottom);
          }

          if (maxBottom > -Infinity) {
            const potentialTop = maxBottom + GROUP_SPACING;
            if (currentTop > potentialTop) {
              const deltaY = potentialTop - currentTop;
              currentLayout.position.y += deltaY;
              current.layout = currentLayout;
            }
          }
        }
      }
    }
  }

  /**
   * Adjust node positions to avoid overlap with other nodes (old implementation, kept for backward compatibility)
   * Adjust while preserving original positional relationships (east-west, north-south)
   */
  private adjustNodePosition(
    node: { x: number; y: number; width: number; height: number },
    existingNodes: Array<{ x: number; y: number; width: number; height: number }>,
    originalPos?: { originalX: number; originalY: number },
    existingOriginalPositions?: Map<string, { originalX: number; originalY: number }>,
    maxIterations: number = 20
  ): { x: number; y: number } {
    const padding = 20; // Increased padding to ensure safer spacing
    let currentX = node.x;
    let currentY = node.y;
    const nodeWidth = node.width;
    const nodeHeight = node.height;
    
    // Get original position (position calculated from lat/lon)
    // Use originalPos if specified, otherwise use node.x, node.y as original position
    const originalX = originalPos?.originalX ?? node.x;
    const originalY = originalPos?.originalY ?? node.y;

    // Calculate original positional relationships of existing nodes (to preserve relative positions)
    // Calculate which side other nodes are on relative to original position
    // Use original position info if available, otherwise infer from current positions
    const relativePositions = existingNodes.map((other, index) => {
      const otherWidth = other.width || this.DEFAULT_NODE_WIDTH;
      const otherHeight = other.height || this.DEFAULT_NODE_HEIGHT;
      const otherCenterX = other.x + otherWidth / 2;
      const otherCenterY = other.y + otherHeight / 2;
      
      // Get original position of existing node (if available)
      // existingOriginalPositions may contain original position info of existing nodes
      // However, since existing node IDs are unknown, infer original positional relationships from current positions
      
      // Relative position based on original position (originalX, originalY)
      // Infer original positional relationships from relationship between existing nodes' current positions and original node's original position
      // Existing nodes are also adjusted, so need to infer original positional relationships from current relationships
      // Generally, if existing node is to the right (east) of original node, assume it was also to the right (east) in original position
      const relativeDx = otherCenterX - originalX;
      const relativeDy = otherCenterY - originalY;
      
      return {
        x: other.x,
        y: other.y,
        width: otherWidth,
        height: otherHeight,
        centerX: otherCenterX,
        centerY: otherCenterY,
        relativeDx, // Infer original positional relationship (relationship between existing nodes' current positions and original node's original position)
        relativeDy,
        originalCenterX: otherCenterX, // Existing node's current position (inferred original position)
        originalCenterY: otherCenterY,
      };
    });

    for (let i = 0; i < maxIterations; i++) {
      let hasCollision = false;
      let bestMoveX = currentX;
      let bestMoveY = currentY;
      let minPenalty = Infinity; // Penalty (distance from original position + positional relationship violation)

      for (const other of relativePositions) {
        // Overlap detection (with padding)
        if (
          currentX < other.x + other.width + padding &&
          currentX + nodeWidth + padding > other.x &&
          currentY < other.y + other.height + padding &&
          currentY + nodeHeight + padding > other.y
        ) {
          hasCollision = true;

          const currentCenterX = currentX + nodeWidth / 2;
          const currentCenterY = currentY + nodeHeight / 2;
          const dx = other.centerX - currentCenterX;
          const dy = other.centerY - currentCenterY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance > 0) {
            // Calculate required movement distance
            const requiredDistance = (nodeWidth + other.width) / 2 + padding;
            
            // Move in direction that preserves original positional relationship
            // Consider original positional relationship (relativeDx, relativeDy)
            // Nodes on west (left) side move left, nodes on east (right) side move right
            // Nodes on north (top) side move up, nodes on south (bottom) side move down
            
            // Determine movement direction based on original positional relationship
            // If relativeDx > 0, other node is to the right (east) of original node
            // If relativeDy > 0, other node is below (south) of original node
            let moveDx = dx;
            let moveDy = dy;
            
            // Adjust to preserve original positional relationship
            // Determine movement direction based on original positional relationship (relativeDx, relativeDy)
            // If relativeDx > 0, other node is to the right (east) of original node → move left on collision
            // If relativeDx < 0, other node is to the left (west) of original node → move right on collision
            // If relativeDy > 0, other node is below (south) of original node → move up on collision
            // If relativeDy < 0, other node is above (north) of original node → move down on collision
            
            // Prioritize original positional relationship
            if (Math.abs(other.relativeDx) > 0.1 || Math.abs(other.relativeDy) > 0.1) {
              // Use direction based on original positional relationship
              // East-west adjustment
              if (Math.abs(other.relativeDx) > Math.abs(other.relativeDy)) {
                // East-west positional relationship is more important
                const originalDirectionX = other.relativeDx > 0 ? -1 : 1; // If to the right (east), move left; if to the left (west), move right
                moveDx = originalDirectionX * Math.abs(dx) / distance * requiredDistance;
                moveDy = (dy / distance) * requiredDistance * 0.5; // Adjust north-south direction as auxiliary
              } else {
                // North-south positional relationship is more important
                const originalDirectionY = other.relativeDy > 0 ? -1 : 1; // If below (south), move up; if above (north), move down
                moveDx = (dx / distance) * requiredDistance * 0.5; // East-west direction adjusted secondarily
                moveDy = originalDirectionY * Math.abs(dy) / distance * requiredDistance;
              }
            } else {
              // If original positional relationship is unknown, use current positional relationship
              moveDx = (dx / distance) * requiredDistance;
              moveDy = (dy / distance) * requiredDistance;
            }
            
            const newX = currentX + moveDx;
            const newY = currentY + moveDy;
            
            // Calculate penalty (distance from original position + positional relationship violation)
            const distanceFromOriginal = Math.sqrt(
              Math.pow(newX - originalX, 2) + Math.pow(newY - originalY, 2)
            );
            
            // Positional relationship violation (deviation from original positional relationship)
            const newCenterX = newX + nodeWidth / 2;
            const newCenterY = newY + nodeHeight / 2;
            const newRelativeDx = newCenterX - originalX;
            const newRelativeDy = newCenterY - originalY;
            
            // Increase penalty if sign of original positional relationship changes
            let relationPenalty = 0;
            if ((other.relativeDx > 0 && newRelativeDx < other.relativeDx) ||
                (other.relativeDx < 0 && newRelativeDx > other.relativeDx)) {
              relationPenalty += 1000; // East-west positional relationship reversed
            }
            if ((other.relativeDy > 0 && newRelativeDy < other.relativeDy) ||
                (other.relativeDy < 0 && newRelativeDy > other.relativeDy)) {
              relationPenalty += 1000; // North-south positional relationship reversed
            }
            
            const penalty = distanceFromOriginal + relationPenalty;
            
            if (penalty < minPenalty) {
              minPenalty = penalty;
              bestMoveX = newX;
              bestMoveY = newY;
            }
          } else {
            // If completely overlapping, move considering original positional relationship
            // Minimal movement based on original positional relationship
            const requiredDistance = (nodeWidth + other.width) / 2 + padding;
            
            let moveDx = 0;
            let moveDy = 0;
            
            if (other.relativeDx !== 0 || other.relativeDy !== 0) {
              // Use direction based on original positional relationship
              const directionX = other.relativeDx > 0 ? -1 : 1;
              const directionY = other.relativeDy > 0 ? -1 : 1;
              moveDx = directionX * requiredDistance;
              moveDy = directionY * requiredDistance;
            } else {
              // If original positional relationship is unknown, move randomly
              const angle = Math.random() * Math.PI * 2;
              moveDx = Math.cos(angle) * requiredDistance;
              moveDy = Math.sin(angle) * requiredDistance;
            }
            
            const newX = currentX + moveDx;
            const newY = currentY + moveDy;
            
            const distanceFromOriginal = Math.sqrt(
              Math.pow(newX - originalX, 2) + Math.pow(newY - originalY, 2)
            );
            
            if (distanceFromOriginal < minPenalty) {
              minPenalty = distanceFromOriginal;
              bestMoveX = newX;
              bestMoveY = newY;
            }
          }
        }
      }

      if (!hasCollision) {
        break;
      }

      // Apply optimal movement position
      currentX = bestMoveX;
      currentY = bestMoveY;
    }

    return { x: currentX, y: currentY };
  }

  /**
   * Group edges by node pair
   * Group by undirected pair key (minId||maxId) and generate EdgePair
   */
  private groupEdgesByPair(edges: Edge[]): EdgePair[] {
    const pairMap = new Map<string, EdgePair>();

    for (const edge of edges) {
      // Generate undirected pair key (fixed in dictionary order)
      const [a, b] = edge.src < edge.dst ? [edge.src, edge.dst] : [edge.dst, edge.src];
      const pairKey = `${a}||${b}`;

      let pair = pairMap.get(pairKey);
      if (!pair) {
        pair = {
          key: pairKey,
          a,
          b,
          edges: [],
        };
        pairMap.set(pairKey, pair);
      }

      pair.edges.push(edge);

      // Inherit anchor/bend point information from first edge (based on A->B direction)
      if (edge.src === a && edge.dst === b) {
        // A->B direction edge
        if (edge.srcAnchor && !pair.srcAnchor) {
          pair.srcAnchor = edge.srcAnchor;
        }
        if (edge.dstAnchor && !pair.dstAnchor) {
          pair.dstAnchor = edge.dstAnchor;
        }
        if (edge.bends && !pair.bends) {
          pair.bends = edge.bends;
        }
      } else {
        // B->A direction edge
        if (edge.srcAnchor && !pair.dstAnchor) {
          pair.dstAnchor = edge.srcAnchor;
        }
        if (edge.dstAnchor && !pair.srcAnchor) {
          pair.srcAnchor = edge.dstAnchor;
        }
        if (edge.bends && !pair.bends) {
          pair.bends = edge.bends;
        }
      }
    }

    return Array.from(pairMap.values());
  }

  /**
   * Determine direction from EdgePair
   * @returns { hasAtoB: boolean, hasBtoA: boolean }
   */
  private getEdgePairDirection(pair: EdgePair): { hasAtoB: boolean; hasBtoA: boolean } {
    let hasAtoB = false;
    let hasBtoA = false;

    for (const edge of pair.edges) {
      if (edge.src === pair.a && edge.dst === pair.b) {
        hasAtoB = true;
      } else if (edge.src === pair.b && edge.dst === pair.a) {
        hasBtoA = true;
      }
    }

    return { hasAtoB, hasBtoA };
  }

  /**
   * Calculate EdgePair path (based on A->B direction)
   */
  private calculateEdgePairPath(pair: EdgePair): string {
    const nodeA = this.nodes.find(n => n.id === pair.a);
    const nodeB = this.nodes.find(n => n.id === pair.b);

    if (!nodeA?.position || !nodeB?.position) {
      return '';
    }

    // Get anchor positions (auto-estimate if not set)
    const srcAnchor = pair.srcAnchor || this.estimateAnchor(nodeA, nodeB);
    const dstAnchor = pair.dstAnchor || this.estimateAnchor(nodeB, nodeA);

    const nodeStyleA = nodeA.style || {};
    const nodeStyleB = nodeB.style || {};
    const widthA = nodeStyleA.width || this.DEFAULT_NODE_WIDTH;
    const heightA = nodeStyleA.height || this.DEFAULT_NODE_HEIGHT;
    const widthB = nodeStyleB.width || this.DEFAULT_NODE_WIDTH;
    const heightB = nodeStyleB.height || this.DEFAULT_NODE_HEIGHT;

    const start = this.calculateAnchorPosition(nodeA, srcAnchor, widthA, heightA);
    const end = this.calculateAnchorPosition(nodeB, dstAnchor, widthB, heightB);

    // points: [start, ...bends, end]
    const points: Array<{ x: number; y: number }> = [start];
    if (pair.bends) {
      points.push(...pair.bends);
    }
    points.push(end);

    const pathParts: string[] = [`M ${points[0].x} ${points[0].y}`];
    for (let i = 1; i < points.length; i++) {
      pathParts.push(`L ${points[i].x} ${points[i].y}`);
    }

    return pathParts.join(' ');
  }

  /**
   * Calculate position on node edge
   * @param node Node
   * @param anchor Anchor information
   * @param width Node width (optional, uses default if not provided)
   * @param height Node height (optional, uses default if not provided)
   * @returns Coordinates {x, y}
   */
  private calculateAnchorPosition(node: Node, anchor: EdgeAnchor, width?: number, height?: number): { x: number; y: number } {
    if (!node.position) {
      return { x: 0, y: 0 };
    }

    const cx = node.position.x;
    const cy = node.position.y;
    const w = width || (node.style?.width || this.DEFAULT_NODE_WIDTH);
    const h = height || (node.style?.height || this.DEFAULT_NODE_HEIGHT);

    let x = 0;
    let y = 0;

    switch (anchor.side) {
      case 'top':
        x = cx - w / 2 + w * anchor.t;
        y = cy - h / 2;
        break;
      case 'right':
        x = cx + w / 2;
        y = cy - h / 2 + h * anchor.t;
        break;
      case 'bottom':
        x = cx - w / 2 + w * anchor.t;
        y = cy + h / 2;
        break;
      case 'left':
        x = cx - w / 2;
        y = cy - h / 2 + h * anchor.t;
        break;
    }

    return { x, y };
  }

  /**
   * Auto-estimate anchor
   * Calculate side and position closest to direction from node center to target node
   */
  private estimateAnchor(srcNode: Node, dstNode: Node): EdgeAnchor {
    if (!srcNode.position || !dstNode.position) {
      return { side: 'right', t: 0.5 };
    }

    const srcNodeStyle = srcNode.style || {};
    const srcWidth = srcNodeStyle.width || this.DEFAULT_NODE_WIDTH;
    const srcHeight = srcNodeStyle.height || this.DEFAULT_NODE_HEIGHT;

    const dx = dstNode.position.x - srcNode.position.x;
    const dy = dstNode.position.y - srcNode.position.y;

    // Calculate angle (-π to π)
    const angle = Math.atan2(dy, dx);

    // Convert angle to 0..2π
    const normalizedAngle = angle < 0 ? angle + 2 * Math.PI : angle;

    // Angle ranges for each side
    // top: π/2 (90 degrees)
    // right: 0 (0 degrees)
    // bottom: 3π/2 (270 degrees)
    // left: π (180 degrees)

    let side: NodeSide;
    let t: number;

    if (normalizedAngle >= 7 * Math.PI / 4 || normalizedAngle < Math.PI / 4) {
      // right
      side = 'right';
      t = 0.5 + (dy / srcHeight) * 0.5;
    } else if (normalizedAngle >= Math.PI / 4 && normalizedAngle < 3 * Math.PI / 4) {
      // bottom
      side = 'bottom';
      t = 0.5 + (dx / srcWidth) * 0.5;
    } else if (normalizedAngle >= 3 * Math.PI / 4 && normalizedAngle < 5 * Math.PI / 4) {
      // left
      side = 'left';
      t = 0.5 - (dy / srcHeight) * 0.5;
    } else {
      // top
      side = 'top';
      t = 0.5 - (dx / srcWidth) * 0.5;
    }

    // Clamp t to 0..1
    t = Math.max(0, Math.min(1, t));

    return { side, t };
  }

  /**
   * Get edge point array [start, ...bends, end]
   */
  private getEdgePoints(edge: Edge): Array<{ x: number; y: number }> {
    const srcNode = this.nodes.find(n => n.id === edge.src);
    const dstNode = this.nodes.find(n => n.id === edge.dst);

    if (!srcNode?.position || !dstNode?.position) {
      return [];
    }

    // Get anchor positions (auto-estimate if not set)
    const srcAnchor = edge.srcAnchor || this.estimateAnchor(srcNode, dstNode);
    const dstAnchor = edge.dstAnchor || this.estimateAnchor(dstNode, srcNode);

    const srcNodeStyle = srcNode.style || {};
    const dstNodeStyle = dstNode.style || {};
    const srcWidth = srcNodeStyle.width || this.DEFAULT_NODE_WIDTH;
    const srcHeight = srcNodeStyle.height || this.DEFAULT_NODE_HEIGHT;
    const dstWidth = dstNodeStyle.width || this.DEFAULT_NODE_WIDTH;
    const dstHeight = dstNodeStyle.height || this.DEFAULT_NODE_HEIGHT;

    const start = this.calculateAnchorPosition(srcNode, srcAnchor, srcWidth, srcHeight);
    const end = this.calculateAnchorPosition(dstNode, dstAnchor, dstWidth, dstHeight);

    // points: [start, ...bends, end]
    const points: Array<{ x: number; y: number }> = [start];
    if (edge.bends) {
      points.push(...edge.bends);
    }
    points.push(end);

    return points;
  }

  /**
   * Calculate edge path (considering anchors, supporting bend points)
   */
  private calculateEdgePath(edge: Edge): string {
    const points = this.getEdgePoints(edge);
    if (points.length < 2) {
      return '';
    }

    const pathParts: string[] = [`M ${points[0].x} ${points[0].y}`];
    for (let i = 1; i < points.length; i++) {
      pathParts.push(`L ${points[i].x} ${points[i].y}`);
    }

    return pathParts.join(' ');
  }

  /**
   * Determine EdgePair marker attributes
   * Set marker-start/marker-end based on direction
   */
  private getEdgePairMarkerAttributes(pair: EdgePair): { markerStart?: string; markerEnd?: string } {
    const { hasAtoB, hasBtoA } = this.getEdgePairDirection(pair);

    const markers: { markerStart?: string; markerEnd?: string } = {};

    // If A->B direction exists, add arrow at end point
    if (hasAtoB) {
      markers.markerEnd = 'url(#arrow-end)';
    }

    // If B->A direction exists, add arrow at start point
    if (hasBtoA) {
      markers.markerStart = 'url(#arrow-start)';
    }

    return markers;
  }

  /**
   * Deselect edge
   */
  private deselectEdge(): void {
    this.selectedEdgeId = null;
    this.anchorHandlesGroup.style.display = 'none';
    this.bendHandlesGroup.style.display = 'none';
    this.anchorHandles.clear();
    this.bendHandles.clear();
    // Notify ViewContainer to update button visibility
    this.updateControlButtons();
  }

  /**
   * Select edge
   */
  private selectEdge(edgeId: string, shiftKey: boolean): void {
    if (this.selectedEdgeId === edgeId && shiftKey) {
      // Toggle anchor side with Shift+click
      this.rotateAnchorSide(edgeId);
    } else {
      this.selectedEdgeId = edgeId;
      this.updateAnchorHandles();
      this.updateBendHandles();
    }
  }


  /**
   * Rotate anchor side clockwise (on Shift+click)
   */
  private rotateAnchorSide(edgeId: string): void {
    const edge = this.edges.find(e => e.id === edgeId);
    if (!edge) {
      return;
    }

    this.pushUndoState();

    // Get pair that edge belongs to
    const [a, b] = edge.src < edge.dst ? [edge.src, edge.dst] : [edge.dst, edge.src];
    const pairKey = `${a}||${b}`;
    const pair = this.groupEdgesByPair(this.edges).find(p => p.key === pairKey);
    if (!pair) {
      return;
    }

    const sideOrder: NodeSide[] = ['top', 'right', 'bottom', 'left'];
    const getNextSide = (side: NodeSide): NodeSide => {
      const index = sideOrder.indexOf(side);
      return sideOrder[(index + 1) % 4];
    };

    // Toggle anchor side (save to pair)
    if (pair.srcAnchor) {
      pair.srcAnchor.side = getNextSide(pair.srcAnchor.side);
    }
    if (pair.dstAnchor) {
      pair.dstAnchor.side = getNextSide(pair.dstAnchor.side);
    }

    // Synchronize anchor information to all edges in pair
    for (const e of pair.edges) {
      if (e.src === pair.a && e.dst === pair.b) {
        // A->B direction
        e.srcAnchor = pair.srcAnchor;
        e.dstAnchor = pair.dstAnchor;
      } else {
        // B->A direction
        e.srcAnchor = pair.dstAnchor;
        e.dstAnchor = pair.srcAnchor;
      }
    }

    this.render();
    this.updateAnchorHandles();
    this.updateBendHandles();
  }

  /**
   * Update anchor handles
   */
  private updateAnchorHandles(): void {
    // Clear existing handles
    this.anchorHandles.clear();
    this.anchorHandlesGroup.innerHTML = '';

    if (!this.selectedEdgeId || this.mode !== 'edit') {
      this.anchorHandlesGroup.style.display = 'none';
      return;
    }

    const edge = this.edges.find(e => e.id === this.selectedEdgeId);
    if (!edge) {
      return;
    }

    // Get pair that edge belongs to
    const [a, b] = edge.src < edge.dst ? [edge.src, edge.dst] : [edge.dst, edge.src];
    const pairKey = `${a}||${b}`;
    const pair = this.groupEdgesByPair(this.edges).find(p => p.key === pairKey);
    if (!pair) {
      return;
    }

    const nodeA = this.nodes.find(n => n.id === pair.a);
    const nodeB = this.nodes.find(n => n.id === pair.b);

    if (!nodeA || !nodeB) {
      return;
    }

    // Get anchor positions (using pair information)
    const srcAnchor = pair.srcAnchor || this.estimateAnchor(nodeA, nodeB);
    const dstAnchor = pair.dstAnchor || this.estimateAnchor(nodeB, nodeA);

    const nodeStyleA = nodeA.style || {};
    const nodeStyleB = nodeB.style || {};
    const widthA = nodeStyleA.width || this.DEFAULT_NODE_WIDTH;
    const heightA = nodeStyleA.height || this.DEFAULT_NODE_HEIGHT;
    const widthB = nodeStyleB.width || this.DEFAULT_NODE_WIDTH;
    const heightB = nodeStyleB.height || this.DEFAULT_NODE_HEIGHT;

    const srcPos = this.calculateAnchorPosition(nodeA, srcAnchor, widthA, heightA);
    const dstPos = this.calculateAnchorPosition(nodeB, dstAnchor, widthB, heightB);

    // Create handle (use edge ID - for edit operations)
    this.createAnchorHandle(edge.id, 'src', srcPos.x, srcPos.y);
    this.createAnchorHandle(edge.id, 'dst', dstPos.x, dstPos.y);

    this.anchorHandlesGroup.style.display = 'block';
    
    // Ensure handles are visible (z-index issues can hide them)
    this.anchorHandlesGroup.style.pointerEvents = 'auto';
  }

  /**
   * Update bend point handles
   */
  private updateBendHandles(): void {
    // Clear existing handles
    this.bendHandles.clear();
    this.bendHandlesGroup.innerHTML = '';

    if (!this.selectedEdgeId || this.mode !== 'edit') {
      this.bendHandlesGroup.style.display = 'none';
      // Notify ViewContainer to update button visibility
      this.updateControlButtons();
      return;
    }

    const edge = this.edges.find(e => e.id === this.selectedEdgeId);
    if (!edge) {
      // Notify ViewContainer to update button visibility
      this.updateControlButtons();
      return;
    }

    // Get pair that edge belongs to
    const [a, b] = edge.src < edge.dst ? [edge.src, edge.dst] : [edge.dst, edge.src];
    const pairKey = `${a}||${b}`;
    const pair = this.groupEdgesByPair(this.edges).find(p => p.key === pairKey);
    if (!pair || !pair.bends || pair.bends.length === 0) {
      this.bendHandlesGroup.style.display = 'none';
      // Notify ViewContainer to update button visibility
      this.updateControlButtons();
      return;
    }

    // Create handle for each bend point (use edge ID - for edit operations)
    pair.bends.forEach((bend, index) => {
      this.createBendHandle(edge.id, index, bend.x, bend.y);
    });

    this.bendHandlesGroup.style.display = 'block';
    
    // Ensure handles are visible (z-index issues can hide them)
    this.bendHandlesGroup.style.pointerEvents = 'auto';
    
    // Notify ViewContainer to update button visibility
    this.updateControlButtons();
  }

  /**
   * Create anchor handle
   */
  private createAnchorHandle(edgeId: string, type: 'src' | 'dst', x: number, y: number): void {
    const handle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    handle.setAttribute('cx', String(x));
    handle.setAttribute('cy', String(y));
    handle.setAttribute('r', String(this.HANDLE_RADIUS));
    handle.setAttribute('fill', '#2196f3');
    handle.setAttribute('stroke', '#fff');
    handle.setAttribute('stroke-width', '2');
    handle.setAttribute('data-edge-id', edgeId);
    handle.setAttribute('data-handle-type', type);
    handle.style.cursor = 'move';

    this.anchorHandles.set(type, handle);
    this.anchorHandlesGroup.appendChild(handle);
  }

  /**
   * Create bend point handle
   */
  private createBendHandle(edgeId: string, bendIndex: number, x: number, y: number): void {
    const handle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    handle.setAttribute('cx', String(x));
    handle.setAttribute('cy', String(y));
    handle.setAttribute('r', String(this.BEND_HANDLE_RADIUS));
    handle.setAttribute('fill', '#ff9800');
    handle.setAttribute('stroke', '#fff');
    handle.setAttribute('stroke-width', '2');
    handle.setAttribute('data-edge-id', edgeId);
    handle.setAttribute('data-bend-index', String(bendIndex));
    handle.style.cursor = 'move';

    this.bendHandles.set(bendIndex, handle);
    this.bendHandlesGroup.appendChild(handle);
  }

  /**
   * Update node position (during drag)
   */
  private updateNodePosition(e: PointerEvent): void {
    if (!this.draggingNode) {
      return;
    }

    const node = this.nodes.find(n => n.id === this.draggingNode!.nodeId);
    if (!node) {
      return;
    }

    // Convert screen coordinates to SVG coordinates
    const svgCoords = this.screenToSvg(e.clientX, e.clientY);
    const mouseX = svgCoords.x;
    const mouseY = svgCoords.y;

    // Update node position
    if (!node.position) {
      node.position = { x: 0, y: 0 };
    }
    node.position.x = mouseX - this.draggingNode.offsetX;
    node.position.y = mouseY - this.draggingNode.offsetY;

    // Update group layouts for groups containing this node
    this.updateGroupLayouts(node.id, undefined);

    // Re-render
    this.render();
    this.updateAnchorHandles();
    this.updateBendHandles();
  }

  /**
   * Update node size (during resize)
   */
  private updateNodeSize(e: PointerEvent): void {
    if (!this.resizingNode) {
      return;
    }

    const node = this.nodes.find(n => n.id === this.resizingNode!.nodeId);
    if (!node?.position) {
      return;
    }

    const svgCoords = this.screenToSvg(e.clientX, e.clientY);
    const pointerX = svgCoords.x;
    const pointerY = svgCoords.y;

    if (!node.style) {
      node.style = {};
    }

    const deltaX = pointerX - this.resizingNode.startX;
    const deltaY = pointerY - this.resizingNode.startY;

    // Node position is center-based: rect is at (position.x - width/2, position.y - height/2)
    // When resizing, we need to adjust both size and position to keep the opposite edge fixed
    switch (this.resizingNode.side) {
      case 'right': {
        // Drag right edge: keep left edge fixed, move right edge right
        // Left edge position: startNodeX - startWidth/2
        // Right edge should move by deltaX
        // New width = startWidth + deltaX
        // New left edge = newPositionX - newWidth/2 = startNodeX - startWidth/2 (fixed)
        // Therefore: newPositionX = startNodeX - startWidth/2 + newWidth/2 = startNodeX + deltaX/2
        const newWidth = Math.max(60, this.resizingNode.startWidth + deltaX);
        node.style.width = newWidth;
        // Move center right by half of width increase to keep left edge fixed
        node.position.x = this.resizingNode.startNodeX + deltaX / 2;
        break;
      }
      case 'left': {
        // Drag left edge: keep right edge fixed, move left edge left
        // Right edge position: startNodeX + startWidth/2
        // Left edge should move by deltaX (negative when dragging left)
        // New width = startWidth - deltaX (deltaX is negative, so width increases)
        // New right edge = newPositionX + newWidth/2 = startNodeX + startWidth/2 (fixed)
        // Therefore: newPositionX = startNodeX + startWidth/2 - newWidth/2 = startNodeX + deltaX/2
        const newWidth = Math.max(60, this.resizingNode.startWidth - deltaX);
        node.style.width = newWidth;
        // Move center left by half of width change to keep right edge fixed
        node.position.x = this.resizingNode.startNodeX + deltaX / 2;
        break;
      }
      case 'bottom': {
        // Drag bottom edge: keep top edge fixed, move bottom edge down
        // Top edge position: startNodeY - startHeight/2
        // Bottom edge should move by deltaY
        // New height = startHeight + deltaY
        // New top edge = newPositionY - newHeight/2 = startNodeY - startHeight/2 (fixed)
        // Therefore: newPositionY = startNodeY - startHeight/2 + newHeight/2 = startNodeY + deltaY/2
        const newHeight = Math.max(40, this.resizingNode.startHeight + deltaY);
        node.style.height = newHeight;
        // Move center down by half of height increase to keep top edge fixed
        node.position.y = this.resizingNode.startNodeY + deltaY / 2;
        break;
      }
      case 'top': {
        // Drag top edge: keep bottom edge fixed, move top edge up
        // Bottom edge position: startNodeY + startHeight/2
        // Top edge should move by deltaY (negative when dragging up)
        // New height = startHeight - deltaY (deltaY is negative, so height increases)
        // New bottom edge = newPositionY + newHeight/2 = startNodeY + startHeight/2 (fixed)
        // Therefore: newPositionY = startNodeY + startHeight/2 - newHeight/2 = startNodeY + deltaY/2
        const newHeight = Math.max(40, this.resizingNode.startHeight - deltaY);
        node.style.height = newHeight;
        // Move center up by half of height change to keep bottom edge fixed
        node.position.y = this.resizingNode.startNodeY + deltaY / 2;
        break;
      }
    }

    // Update only the node's visual representation without full re-render
    // This prevents position drift during resize
    const nodeElement = this.nodeElements.get(node.id);
    if (nodeElement) {
      const nodeStyle = node.style || {};
      const nodeWidth = nodeStyle.width || this.DEFAULT_NODE_WIDTH;
      const nodeHeight = nodeStyle.height || this.DEFAULT_NODE_HEIGHT;
      const x = node.position.x - nodeWidth / 2;
      const y = node.position.y - nodeHeight / 2;
      nodeElement.setAttribute('x', String(x));
      nodeElement.setAttribute('y', String(y));
      nodeElement.setAttribute('width', String(nodeWidth));
      nodeElement.setAttribute('height', String(nodeHeight));
      
      // Update text position
      const group = nodeElement.parentElement;
      if (group) {
        const foreignObject = group.querySelector('foreignObject');
        if (foreignObject) {
          const nodeStyle = node.style || {};
          const nodeWidth = nodeStyle.width || this.DEFAULT_NODE_WIDTH;
          const nodeHeight = nodeStyle.height || this.DEFAULT_NODE_HEIGHT;
          const x = node.position.x - nodeWidth / 2;
          const y = node.position.y - nodeHeight / 2;
          foreignObject.setAttribute('x', String(x));
          foreignObject.setAttribute('y', String(y));
        }
        
        // Update resize handles position
        if (node.position) {
          const handles = group.querySelectorAll('[data-resize-side]');
          handles.forEach(handle => {
            const side = handle.getAttribute('data-resize-side');
            if (side === 'top') {
              handle.setAttribute('cx', String(node.position!.x));
              handle.setAttribute('cy', String(node.position!.y - nodeHeight / 2));
            } else if (side === 'right') {
              handle.setAttribute('cx', String(node.position!.x + nodeWidth / 2));
              handle.setAttribute('cy', String(node.position!.y));
            } else if (side === 'bottom') {
              handle.setAttribute('cx', String(node.position!.x));
              handle.setAttribute('cy', String(node.position!.y + nodeHeight / 2));
            } else if (side === 'left') {
              handle.setAttribute('cx', String(node.position!.x - nodeWidth / 2));
              handle.setAttribute('cy', String(node.position!.y));
            }
          });
        }
      }
    }
  }

  /**
   * Handle resize end (called on pointer up)
   */
  private handleResizeEnd(): void {
    if (this.resizeRenderTimer) {
      clearTimeout(this.resizeRenderTimer);
      this.resizeRenderTimer = null;
    }
    
    // Update group layouts if a node was resized
    if (this.resizingNode) {
      this.updateGroupLayouts(this.resizingNode.nodeId, undefined);
    }
    
    // Final render
    this.render();
  }

  /**
   * Save snapshot before entering edit mode
   */
  private saveSnapshot(): void {
    // Deep clone nodes, edges, and groups
    this.snapshotBeforeEdit = {
      nodes: this.nodes.map(n => ({
        ...n,
        position: n.position ? { ...n.position } : undefined,
        style: n.style ? { ...n.style } : undefined,
        meta: n.meta ? { ...n.meta } : undefined,
      })),
      edges: this.edges.map(e => ({
        ...e,
        srcAnchor: e.srcAnchor ? { ...e.srcAnchor } : undefined,
        dstAnchor: e.dstAnchor ? { ...e.dstAnchor } : undefined,
        bends: e.bends ? e.bends.map(b => ({ ...b })) : undefined,
        style: e.style ? { ...e.style } : undefined,
        meta: e.meta ? { ...e.meta } : undefined,
      })),
      groups: this.groups.map(g => ({
        ...g,
        layout: g.layout ? {
          position: { ...g.layout.position },
          size: { ...g.layout.size },
        } : undefined,
        meta: g.meta ? { ...g.meta } : undefined,
      })),
    };
  }

  /**
   * Restore snapshot (cancel edit)
   */
  private restoreSnapshot(): void {
    if (!this.snapshotBeforeEdit) {
      return;
    }

    this.nodes = this.snapshotBeforeEdit.nodes.map(n => ({
      ...n,
      position: n.position ? { ...n.position } : undefined,
      style: n.style ? { ...n.style } : undefined,
      meta: n.meta ? { ...n.meta } : undefined,
    }));
    this.edges = this.snapshotBeforeEdit.edges.map(e => ({
      ...e,
      srcAnchor: e.srcAnchor ? { ...e.srcAnchor } : undefined,
      dstAnchor: e.dstAnchor ? { ...e.dstAnchor } : undefined,
      bends: e.bends ? e.bends.map(b => ({ ...b })) : undefined,
      style: e.style ? { ...e.style } : undefined,
      meta: e.meta ? { ...e.meta } : undefined,
    }));
    this.groups = this.snapshotBeforeEdit.groups.map(g => ({
      ...g,
      layout: g.layout ? {
        position: { ...g.layout.position },
        size: { ...g.layout.size },
      } : undefined,
      meta: g.meta ? { ...g.meta } : undefined,
    }));

    this.render();
    this.deselectEdge();
  }

  /**
   * Clone current nodes, edges, groups (editable state only)
   */
  private cloneState(): { nodes: Node[]; edges: Edge[]; groups: Group[] } {
    return {
      nodes: this.nodes.map(n => ({
        ...n,
        position: n.position ? { ...n.position } : undefined,
        style: n.style ? { ...n.style } : undefined,
        meta: n.meta ? { ...n.meta } : undefined,
      })),
      edges: this.edges.map(e => ({
        ...e,
        srcAnchor: e.srcAnchor ? { ...e.srcAnchor } : undefined,
        dstAnchor: e.dstAnchor ? { ...e.dstAnchor } : undefined,
        bends: e.bends ? e.bends.map(b => ({ ...b })) : undefined,
        style: e.style ? { ...e.style } : undefined,
        meta: e.meta ? { ...e.meta } : undefined,
      })),
      groups: this.groups.map(g => ({
        ...g,
        layout: g.layout ? {
          position: { ...g.layout.position },
          size: { ...g.layout.size },
        } : undefined,
        meta: g.meta ? { ...g.meta } : undefined,
      })),
    };
  }

  /**
   * Push current state to undo stack (call at start of an edit)
   */
  private pushUndoState(): void {
    if (this.mode !== 'edit') {
      return;
    }
    const snapshot = this.cloneState();
    this.undoStack.push(snapshot);
    if (this.undoStack.length > GraphView.MAX_UNDO_LEVELS) {
      this.undoStack.shift();
    }
    this.redoStack = [];
    this.onGraphButtonsUpdate?.();
  }

  /**
   * Apply a snapshot to current state
   */
  private applyState(snapshot: { nodes: Node[]; edges: Edge[]; groups: Group[] }): void {
    this.nodes = snapshot.nodes.map(n => ({
      ...n,
      position: n.position ? { ...n.position } : undefined,
      style: n.style ? { ...n.style } : undefined,
      meta: n.meta ? { ...n.meta } : undefined,
    }));
    this.edges = snapshot.edges.map(e => ({
      ...e,
      srcAnchor: e.srcAnchor ? { ...e.srcAnchor } : undefined,
      dstAnchor: e.dstAnchor ? { ...e.dstAnchor } : undefined,
      bends: e.bends ? e.bends.map(b => ({ ...b })) : undefined,
      style: e.style ? { ...e.style } : undefined,
      meta: e.meta ? { ...e.meta } : undefined,
    }));
    this.groups = snapshot.groups.map(g => ({
      ...g,
      layout: g.layout ? {
        position: { ...g.layout.position },
        size: { ...g.layout.size },
      } : undefined,
      meta: g.meta ? { ...g.meta } : undefined,
    }));
  }

  /**
   * Undo last edit (Graph edit mode only)
   */
  undo(): void {
    if (this.mode !== 'edit' || this.undoStack.length === 0) {
      return;
    }
    const current = this.cloneState();
    this.redoStack.push(current);
    const previous = this.undoStack.pop()!;
    this.applyState(previous);
    this.render();
    this.updateAnchorHandles();
    this.updateBendHandles();
    this.updateControlButtons();
    this.debouncedSave();
    this.onGraphButtonsUpdate?.();
  }

  /**
   * Redo last undone edit (Graph edit mode only)
   */
  redo(): void {
    if (this.mode !== 'edit' || this.redoStack.length === 0) {
      return;
    }
    const current = this.cloneState();
    this.undoStack.push(current);
    const next = this.redoStack.pop()!;
    this.applyState(next);
    this.render();
    this.updateAnchorHandles();
    this.updateBendHandles();
    this.updateControlButtons();
    this.debouncedSave();
    this.onGraphButtonsUpdate?.();
  }

  /**
   * Whether undo is available (for ViewContainer button state)
   */
  canUndo(): boolean {
    return this.mode === 'edit' && this.undoStack.length > 0;
  }

  /**
   * Whether redo is available (for ViewContainer button state)
   */
  canRedo(): boolean {
    return this.mode === 'edit' && this.redoStack.length > 0;
  }

  /**
   * Update anchor position (during drag)
   */
  private updateAnchorPosition(e: PointerEvent): void {
    if (!this.draggingAnchor) {
      return;
    }

    // Get edge by ID and find its pair
    const edge = this.edges.find(e => e.id === this.draggingAnchor!.edgeId);
    if (!edge) {
      return;
    }
    const [a, b] = edge.src < edge.dst ? [edge.src, edge.dst] : [edge.dst, edge.src];
    const pairKey = `${a}||${b}`;
    const pair = this.groupEdgesByPair(this.edges).find(p => p.key === pairKey);
    if (!pair) {
      return;
    }

    const nodeId = this.draggingAnchor.type === 'src' ? pair.a : pair.b;
    const node = this.nodes.find(n => n.id === nodeId);
    if (!node?.position) {
      return;
    }

    // Convert screen coordinates to SVG coordinates
    const svgCoords = this.screenToSvg(e.clientX, e.clientY);
    // Apply offset to maintain relative position between mouse and handle
    const mouseX = svgCoords.x - this.draggingAnchor.offsetX;
    const mouseY = svgCoords.y - this.draggingAnchor.offsetY;

    // Calculate distances to each edge of the node
    const cx = node.position.x;
    const cy = node.position.y;
    const nodeStyle = node.style || {};
    const w = nodeStyle.width || this.DEFAULT_NODE_WIDTH;
    const h = nodeStyle.height || this.DEFAULT_NODE_HEIGHT;

    const distances = {
      top: Math.abs(mouseY - (cy - h / 2)),
      right: Math.abs(mouseX - (cx + w / 2)),
      bottom: Math.abs(mouseY - (cy + h / 2)),
      left: Math.abs(mouseX - (cx - w / 2)),
    };

    // Determine closest side
    let closestSide: NodeSide = 'right';
    let minDist = distances.right;
    for (const [side, dist] of Object.entries(distances)) {
      if (dist < minDist) {
        minDist = dist;
        closestSide = side as NodeSide;
      }
    }

    // Calculate relative position t on side
    let t = 0.5;
    switch (closestSide) {
      case 'top':
      case 'bottom':
        t = (mouseX - (cx - w / 2)) / w;
        break;
      case 'left':
      case 'right':
        t = (mouseY - (cy - h / 2)) / h;
        break;
    }
    t = Math.max(0, Math.min(1, t));

    // Update anchor (save to pair)
    if (this.draggingAnchor.type === 'src') {
      pair.srcAnchor = { side: closestSide, t };
    } else {
      pair.dstAnchor = { side: closestSide, t };
    }

    // Synchronize anchor information to all edges in pair
    for (const edge of pair.edges) {
      if (edge.src === pair.a && edge.dst === pair.b) {
        // A->B direction
        edge.srcAnchor = pair.srcAnchor;
        edge.dstAnchor = pair.dstAnchor;
      } else {
        // B->A direction
        edge.srcAnchor = pair.dstAnchor;
        edge.dstAnchor = pair.srcAnchor;
      }
    }

    // Re-render
    this.render();
    this.updateAnchorHandles();
    this.updateBendHandles();
  }

  /**
   * Update bend point position (during drag)
   */
  private updateBendPosition(e: PointerEvent): void {
    if (!this.draggingBend) {
      return;
    }

    // Get edge by ID and find its pair
    const edge = this.edges.find(e => e.id === this.draggingBend!.edgeId);
    if (!edge) {
      return;
    }
    const [a, b] = edge.src < edge.dst ? [edge.src, edge.dst] : [edge.dst, edge.src];
    const pairKey = `${a}||${b}`;
    const pair = this.groupEdgesByPair(this.edges).find(p => p.key === pairKey);
    if (!pair || !pair.bends) {
      return;
    }

    const bendIndex = this.draggingBend.bendIndex;
    if (bendIndex < 0 || bendIndex >= pair.bends.length) {
      return;
    }

    // Convert screen coordinates to SVG coordinates
    const svgCoords = this.screenToSvg(e.clientX, e.clientY);
    // Apply offset to maintain relative position between mouse and handle
    const mouseX = svgCoords.x - this.draggingBend.offsetX;
    const mouseY = svgCoords.y - this.draggingBend.offsetY;

    // Update bend point position (save to pair)
    pair.bends[bendIndex] = { x: mouseX, y: mouseY };

    // Synchronize bend point information to all edges in the pair
    for (const edge of pair.edges) {
      edge.bends = [...pair.bends];
    }

    // Re-render
    this.render();
    this.updateBendHandles();
  }

  /**
   * Insert bend point (on double click/tap)
   */
  private insertBendPoint(edgeId: string, e: MouseEvent | PointerEvent): void {
    const edge = this.edges.find(e => e.id === edgeId);
    if (!edge) {
      return;
    }

    this.pushUndoState();

    // Get pair that the edge belongs to
    const [a, b] = edge.src < edge.dst ? [edge.src, edge.dst] : [edge.dst, edge.src];
    const pairKey = `${a}||${b}`;
    const pair = this.groupEdgesByPair(this.edges).find(p => p.key === pairKey);
    if (!pair) {
      return;
    }

    // Get SVG coordinates
    const svgRect = this.svg.getBoundingClientRect();
    const clickX = e.clientX - svgRect.left;
    const clickY = e.clientY - svgRect.top;

    // Get pair point array
    const points: Array<{ x: number; y: number }> = [];
    const nodeA = this.nodes.find(n => n.id === pair.a);
    const nodeB = this.nodes.find(n => n.id === pair.b);
    if (!nodeA?.position || !nodeB?.position) {
      return;
    }

    const srcAnchor = pair.srcAnchor || this.estimateAnchor(nodeA, nodeB);
    const dstAnchor = pair.dstAnchor || this.estimateAnchor(nodeB, nodeA);
    
    const nodeStyleA = nodeA.style || {};
    const nodeStyleB = nodeB.style || {};
    const widthA = nodeStyleA.width || this.DEFAULT_NODE_WIDTH;
    const heightA = nodeStyleA.height || this.DEFAULT_NODE_HEIGHT;
    const widthB = nodeStyleB.width || this.DEFAULT_NODE_WIDTH;
    const heightB = nodeStyleB.height || this.DEFAULT_NODE_HEIGHT;
    
    const start = this.calculateAnchorPosition(nodeA, srcAnchor, widthA, heightA);
    const end = this.calculateAnchorPosition(nodeB, dstAnchor, widthB, heightB);

    points.push(start);
    if (pair.bends) {
      points.push(...pair.bends);
    }
    points.push(end);

    // Find nearest segment
    let nearestSegmentIndex = 0;
    let minDistance = Infinity;

    for (let i = 0; i < points.length - 1; i++) {
      const p1 = points[i];
      const p2 = points[i + 1];

      // Calculate distance from point to line segment
      const distance = this.pointToLineSegmentDistance(clickX, clickY, p1.x, p1.y, p2.x, p2.y);
      if (distance < minDistance) {
        minDistance = distance;
        nearestSegmentIndex = i;
      }
    }

    // Create new bend point (near segment midpoint)
    const p1 = points[nearestSegmentIndex];
    const p2 = points[nearestSegmentIndex + 1];
    const newBend = {
      x: (p1.x + p2.x) / 2,
      y: (p1.y + p2.y) / 2,
    };

    // Initialize bend point array (if not present)
    if (!pair.bends) {
      pair.bends = [];
    }

    // Insert bend point (preserve order)
    // Insert after nearest segment (between start and end, so at nearestSegmentIndex position)
    pair.bends.splice(nearestSegmentIndex, 0, newBend);

    // Synchronize bend point information to all edges in the pair
    for (const e of pair.edges) {
      e.bends = [...pair.bends];
    }

    // Ensure the edge is selected so that handles are displayed
    if (this.selectedEdgeId !== edgeId) {
      this.selectEdge(edgeId, false);
    }

    // Re-render
    this.render();
    this.updateBendHandles();
  }

  /**
   * Calculate distance from point to line segment
   */
  private pointToLineSegmentDistance(
    px: number, py: number,
    x1: number, y1: number,
    x2: number, y2: number
  ): number {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const lengthSquared = dx * dx + dy * dy;

    if (lengthSquared === 0) {
      // If line segment is a point
      return Math.sqrt((px - x1) ** 2 + (py - y1) ** 2);
    }

    const t = Math.max(0, Math.min(1, ((px - x1) * dx + (py - y1) * dy) / lengthSquared));
    const projX = x1 + t * dx;
    const projY = y1 + t * dy;

    return Math.sqrt((px - projX) ** 2 + (py - projY) ** 2);
  }

  /**
   * Delete nearest bend point (on Delete/Backspace)
   * Also implements View interface deleteNearestBendPoint method
   */
  deleteNearestBendPoint(): void {
    if (!this.selectedEdgeId) {
      return;
    }

    const edge = this.edges.find(e => e.id === this.selectedEdgeId);
    if (!edge) {
      return;
    }

    // Get pair that edge belongs to
    const [a, b] = edge.src < edge.dst ? [edge.src, edge.dst] : [edge.dst, edge.src];
    const pairKey = `${a}||${b}`;
    const pair = this.groupEdgesByPair(this.edges).find(p => p.key === pairKey);
    if (!pair || !pair.bends || pair.bends.length === 0) {
      return;
    }

    this.pushUndoState();

    // Delete last bend point
    pair.bends.pop();

    // Delete array if no bend points remain
    if (pair.bends.length === 0) {
      delete pair.bends;
    }

    // Remove bend point information from all edges in pair
    for (const e of pair.edges) {
      if (pair.bends) {
        e.bends = [...pair.bends];
      } else {
        delete e.bends;
      }
    }

    // Re-render
    this.render();
    this.updateBendHandles();
    this.updateControlButtons();
  }

  /**
   * Debounce save callback
   */
  private debouncedSave(): void {
    if (!this.onSave) {
      return;
    }

    if (this.saveDebounceTimer !== null) {
      clearTimeout(this.saveDebounceTimer);
    }

    this.saveDebounceTimer = window.setTimeout(() => {
      this.onSave!({
        nodes: this.nodes,
        edges: this.edges,
        groups: this.groups.length > 0 ? this.groups : undefined,
      });
      this.saveDebounceTimer = null;
    }, this.SAVE_DEBOUNCE_MS);
  }

  /**
   * Render graph
   */
  private render(): void {
    // Update transform before rendering
    this.updateTransform();
    
    // Clear existing elements
    this.nodeElements.clear();
    this.edgeElements.clear();
    this.edgesGroup.innerHTML = '';
    this.groupsGroup.innerHTML = '';
    this.nodesGroup.innerHTML = '';
    this.edgeLabelsGroup.innerHTML = '';

    // Group edges by node pairs
    const edgePairs = this.groupEdgesByPair(this.edges);

    // Render one path per edge pair (below nodes)
    for (const pair of edgePairs) {
      // Determine selection state
      const isSelected = pair.edges.some(e => e.id === this.selectedEdgeId);
      // In edit mode, don't show hover/tap highlighting to simplify interactions
      // In view mode or when always show edges is enabled, show hover/tap highlighting
      const isHovered = this.mode === 'view' && pair.key === this.hoveredEdgePairKey;
      const isTapped = this.mode === 'view' && pair.key === this.tappedEdgePairKey;
      const isHighlighted = this.alwaysShowEdges || isSelected || isHovered || isTapped;

      // Get edge style from first edge in pair
      const firstEdge = pair.edges[0];
      const edgeStyle = firstEdge.style || {};
      const edgeColor = edgeStyle.color || this.EDGE_DEFAULT_COLOR;
      const edgeWeight = edgeStyle.weight || 1;
      const normalizedWeight = Math.max(this.EDGE_MIN_WEIGHT, Math.min(this.EDGE_MAX_WEIGHT, edgeWeight));
      
      // Calculate stroke width based on weight and state
      const baseWidth = this.EDGE_DEFAULT_WIDTH + (normalizedWeight - 1) * 0.5; // 1.5 to 6px range
      const strokeWidth = isHighlighted ? Math.max(baseWidth, this.EDGE_HOVER_WIDTH) : baseWidth;
      const strokeColor = isSelected ? '#2196f3' : edgeColor; // Keep original color, use opacity for hover
      const strokeOpacity = isHighlighted ? 1.0 : 0.3; // Use opacity for hover/tap effect

      // Calculate path for this edge pair
      const pathData = this.calculateEdgePairPath(pair);
      if (!pathData) {
        // Skip if path is empty (nodes don't have positions)
        continue;
      }

      // Hit path for touch targets (always, not just edit mode)
      const hitPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      hitPath.setAttribute('d', pathData);
      hitPath.setAttribute('stroke', 'transparent');
      hitPath.setAttribute('stroke-width', String(this.HIT_PATH_WIDTH));
      hitPath.setAttribute('fill', 'none');
      hitPath.setAttribute('data-hit-edge-pair-key', pair.key);
      hitPath.style.cursor = 'pointer';
      hitPath.style.pointerEvents = 'stroke';
      this.edgesGroup.appendChild(hitPath);

      // Visual path (one path per pair)
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', pathData);
      path.setAttribute('stroke', strokeColor);
      path.setAttribute('stroke-width', String(strokeWidth));
      path.setAttribute('stroke-opacity', String(strokeOpacity));
      path.setAttribute('fill', 'none');
      path.setAttribute('data-edge-pair-key', pair.key);
      path.style.pointerEvents = 'none'; // Clicks handled by hit-path
      path.style.transition = 'stroke-opacity 0.2s, stroke-width 0.2s';

      // Set marker attributes based on directionality
      const markers = this.getEdgePairMarkerAttributes(pair);
      if (markers.markerStart) {
        path.setAttribute('marker-start', markers.markerStart);
      }
      if (markers.markerEnd) {
        path.setAttribute('marker-end', markers.markerEnd);
      }

      this.edgeElements.set(pair.key, path);
      this.edgesGroup.appendChild(path);

      // Add hover/tap event listeners for label display (view mode) and handle display (edit mode)
      if (this.mode === 'view') {
        this.setupEdgeInteraction(hitPath, pair, edgeStyle);
      } else if (this.mode === 'edit') {
        // In edit mode, show handles on hover/tap (but don't show highlighting)
        this.setupEdgeInteractionForEdit(hitPath, pair);
      
      // Add click handler for edge selection (edit mode only)
      // Use a timeout to delay click handling to allow dblclick to fire first
      const currentPairKey = pair.key; // Capture pair key for closure
      hitPath.addEventListener('click', (e: MouseEvent) => {
        const clickTimer = this.edgeClickTimers.get(hitPath);
        
        // Clear any existing timer
        if (clickTimer !== null && clickTimer !== undefined) {
          clearTimeout(clickTimer);
          this.edgeClickTimers.set(hitPath, null);
          return; // This was a double-click, ignore the click
        }
        
        // Set a timer to handle single click after a short delay
        // This allows dblclick event to fire and clear the timer first
        const timerId = window.setTimeout(() => {
          this.edgeClickTimers.set(hitPath, null);
          if (this.mode === 'edit') {
            const pair = this.groupEdgesByPair(this.edges).find(p => p.key === currentPairKey);
            if (pair && pair.edges.length > 0) {
              this.selectEdge(pair.edges[0].id, e.shiftKey);
              // Don't update tap/hover state in edit mode - just select the edge
              // render() is already called by updateAnchorHandles() and updateBendHandles() in selectEdge()
              // But we call render() again to ensure everything is updated
              this.render();
            }
          }
        }, 300); // 300ms delay to allow dblclick to fire
        
        this.edgeClickTimers.set(hitPath, timerId);
      });
      }
      
      // Add dblclick handler directly on hitPath for bend point insertion
      const currentPairKeyForDblClick = pair.key; // Capture pair key for closure
      hitPath.addEventListener('dblclick', (e: MouseEvent) => {
        if (this.mode !== 'edit') {
          return;
        }
        // Clear the click timer to prevent single click from firing
        const clickTimer = this.edgeClickTimers.get(hitPath);
        if (clickTimer !== null && clickTimer !== undefined) {
          clearTimeout(clickTimer);
          this.edgeClickTimers.set(hitPath, null);
        }
        
        const pair = this.groupEdgesByPair(this.edges).find(p => p.key === currentPairKeyForDblClick);
        if (pair && pair.edges.length > 0) {
          this.insertBendPoint(pair.edges[0].id, e);
          e.preventDefault();
          e.stopPropagation();
        }
      });

      // Render edge labels if hovered/tapped/selected
      if (isHighlighted) {
        this.renderEdgeLabels(pair, edgeStyle);
      }
    }

    // Render groups (above edges, below nodes)
    this.renderGroups();

    // Render nodes (above edges and groups)
    for (const node of this.nodes) {
      if (!node.position) {
        continue;
      }

      const nodeStyle = node.style || {};
      const nodeWidth = nodeStyle.width || this.DEFAULT_NODE_WIDTH;
      const nodeHeight = nodeStyle.height || this.DEFAULT_NODE_HEIGHT;
      const nodeColor = nodeStyle.color || '#fff';
      const borderColor = nodeStyle.borderColor || '#333';

      const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      group.setAttribute('data-node-id', node.id);

      // Rectangle
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      const x = node.position.x - nodeWidth / 2;
      const y = node.position.y - nodeHeight / 2;
      rect.setAttribute('x', String(x));
      rect.setAttribute('y', String(y));
      rect.setAttribute('width', String(nodeWidth));
      rect.setAttribute('height', String(nodeHeight));
      // In Graph mode, display node color with opacity 0.5
      // Convert RGB color code to rgba
      const rgbMatch = nodeColor.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
      if (rgbMatch) {
        const r = parseInt(rgbMatch[1], 16);
        const g = parseInt(rgbMatch[2], 16);
        const b = parseInt(rgbMatch[3], 16);
        rect.setAttribute('fill', `rgba(${r}, ${g}, ${b}, 0.5)`);
      } else {
        // Use as-is if color code is not RGB format
      rect.setAttribute('fill', nodeColor);
      }
      
      // Highlight selected node
      const isSelected = this.selectedNodeId === node.id;
      rect.setAttribute('stroke', isSelected ? '#2196f3' : borderColor);
      rect.setAttribute('stroke-width', isSelected ? '4' : '2');
      rect.setAttribute('rx', '4');
      rect.style.cursor = this.mode === 'view' ? 'pointer' : 'move';

      // Text label (with line wrapping)
      const foreignObject = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
      foreignObject.setAttribute('x', String(x));
      foreignObject.setAttribute('y', String(y));
      foreignObject.setAttribute('width', String(nodeWidth));
      foreignObject.setAttribute('height', String(nodeHeight));
      
      const labelDiv = document.createElement('div');
      labelDiv.style.width = '100%';
      labelDiv.style.height = '100%';
      labelDiv.style.display = 'flex';
      labelDiv.style.alignItems = 'flex-start'; // Top aligned
      labelDiv.style.justifyContent = 'center';
      labelDiv.style.textAlign = 'center';
      labelDiv.style.fontSize = '14px';
      labelDiv.style.color = '#333';
      labelDiv.style.padding = '4px';
      labelDiv.style.wordWrap = 'break-word';
      labelDiv.style.overflowWrap = 'break-word';
      labelDiv.style.whiteSpace = 'normal';
      labelDiv.style.overflow = 'hidden';
      labelDiv.style.textOverflow = 'ellipsis'; // Ellipsis for overflow
      labelDiv.textContent = node.label;
      
      foreignObject.appendChild(labelDiv);
      
      group.appendChild(rect);
      group.appendChild(foreignObject);

      // Add resize handles in edit mode
      if (this.mode === 'edit') {
        this.addResizeHandles(group, node, nodeWidth, nodeHeight);
      }

      this.nodesGroup.appendChild(group);
      this.nodeElements.set(node.id, rect);

      // Click event (view mode only)
      if (this.mode === 'view' && this.onNodeClick) {
        // Use capture phase to handle before SVG's click handler
        group.addEventListener('click', (e: MouseEvent) => {
          e.stopPropagation(); // Prevent click event on empty space
          e.preventDefault(); // Prevent default behavior
          
          const svgRect = this.svg.getBoundingClientRect();
          const clickX = e.clientX - svgRect.left;
          const clickY = e.clientY - svgRect.top;

          // Call onNodeClick callback (popup display is handled in callback)
          this.onNodeClick!({
            node,
            position: { x: clickX, y: clickY },
            originalEvent: e,
          });
        }, true); // Use capture phase to handle before SVG's click handler
      }
    }

    // Update anchor handles and bend handles
    if (this.mode === 'edit') {
      this.updateAnchorHandles();
      this.updateBendHandles();
      this.updateControlButtons();
    }
  }

  /**
   * Calculate group bounds from node positions and child groups
   * For groups with child groups, include both child group layouts and direct nodes (nodes not in child groups)
   * For leaf groups (no child groups), only use nodeIds
   */
  private calculateGroupBounds(nodeIds: string[], groupId?: string): { minX: number; maxX: number; minY: number; maxY: number } | null {
    const GROUP_PADDING = 30; // Padding around nodes (increased to prevent label overlap)
    const NESTED_GROUP_MARGIN = 50; // Margin between nested groups (increased to prevent overlap)
    const LABEL_OFFSET_Y = 25; // Additional top padding for label (increased to prevent overlap with nodes)
    
    let minX = Infinity;
    let maxX = -Infinity;
    let minY = Infinity;
    let maxY = -Infinity;
    let hasValidContent = false;

    // Check if this group has child groups
    const hasChildGroups = groupId ? this.groups.some(g => g.parentId === groupId) : false;

    // If this group has child groups, collect node IDs that belong to child groups
    const childGroupNodeIds = new Set<string>();
    if (hasChildGroups && groupId) {
      const childGroups = this.groups.filter(g => g.parentId === groupId);
      for (const childGroup of childGroups) {
        // Recursively collect all node IDs from child groups and their descendants
        const collectNodeIds = (g: Group): void => {
          for (const nodeId of g.nodeIds) {
            childGroupNodeIds.add(nodeId);
          }
          // Also collect from descendant groups
          const descendantGroups = this.groups.filter(dg => dg.parentId === g.id);
          for (const descendantGroup of descendantGroups) {
            collectNodeIds(descendantGroup);
          }
        };
        collectNodeIds(childGroup);
      }
    }

    // Include direct nodes (nodes not in child groups)
    for (const nodeId of nodeIds) {
      // Skip nodes that belong to child groups
      if (hasChildGroups && childGroupNodeIds.has(nodeId)) {
        continue;
      }

      const node = this.nodes.find(n => n.id === nodeId);
      if (!node || !node.position) {
        continue;
      }

      hasValidContent = true;
      const nodeStyle = node.style || {};
      const nodeWidth = nodeStyle.width || this.DEFAULT_NODE_WIDTH;
      const nodeHeight = nodeStyle.height || this.DEFAULT_NODE_HEIGHT;

      const nodeLeft = node.position.x - nodeWidth / 2;
      const nodeRight = node.position.x + nodeWidth / 2;
      const nodeTop = node.position.y - nodeHeight / 2;
      const nodeBottom = node.position.y + nodeHeight / 2;

      minX = Math.min(minX, nodeLeft);
      maxX = Math.max(maxX, nodeRight);
      minY = Math.min(minY, nodeTop);
      maxY = Math.max(maxY, nodeBottom);
    }

    // Include child groups (if this is a parent group)
    if (hasChildGroups && groupId) {
      const childGroups = this.groups.filter(g => g.parentId === groupId);
      for (const childGroup of childGroups) {
        const childLayout = this.getGroupLayout(childGroup);
        if (childLayout) {
          hasValidContent = true;
          const childLeft = childLayout.position.x;
          const childRight = childLayout.position.x + childLayout.size.width;
          const childTop = childLayout.position.y;
          const childBottom = childLayout.position.y + childLayout.size.height;

          minX = Math.min(minX, childLeft);
          maxX = Math.max(maxX, childRight);
          minY = Math.min(minY, childTop);
          maxY = Math.max(maxY, childBottom);
        }
      }
    }

    if (!hasValidContent) {
      return null;
    }

    // Add padding: use nested margin if this group has children, otherwise use regular padding
    const padding = hasChildGroups ? NESTED_GROUP_MARGIN : GROUP_PADDING;
    // Add extra top padding for label
    const topPadding = padding + LABEL_OFFSET_Y;

    return {
      minX: minX - padding,
      maxX: maxX + padding,
      minY: minY - topPadding, // Extra top padding for label
      maxY: maxY + padding,
    };
  }

  /**
   * Get or calculate group layout
   */
  private getGroupLayout(group: Group): GroupLayout | null {
    // If layout exists, use it
    if (group.layout) {
      return group.layout;
    }

    // Otherwise, calculate from node positions and child groups
    const bounds = this.calculateGroupBounds(group.nodeIds, group.id);
    if (!bounds) {
      return null;
    }

    return {
      position: {
        x: bounds.minX,
        y: bounds.minY,
      },
      size: {
        width: bounds.maxX - bounds.minX,
        height: bounds.maxY - bounds.minY,
      },
    };
  }

  /**
   * Render groups
   */
  private renderGroups(): void {
    if (this.groups.length === 0) {
      return;
    }

    // Sort groups by hierarchy level (parent groups first)
    const sortedGroups = [...this.groups].sort((a, b) => {
      // Calculate hierarchy level (0 = root, 1 = child, 2 = grandchild)
      const getLevel = (group: Group): number => {
        if (!group.parentId) return 0;
        const parent = this.groups.find(g => g.id === group.parentId);
        if (!parent) return 0;
        return 1 + getLevel(parent);
      };
      return getLevel(a) - getLevel(b);
    });

    for (const group of sortedGroups) {
      // Ensure layout is initialized (calculate if not exists)
      let layout = this.getGroupLayout(group);
      if (!layout) {
        // Try to calculate layout even if no nodes (might have child groups)
        const bounds = this.calculateGroupBounds(group.nodeIds, group.id);
        if (bounds) {
          layout = {
            position: { x: bounds.minX, y: bounds.minY },
            size: { width: bounds.maxX - bounds.minX, height: bounds.maxY - bounds.minY },
          };
          // Store layout in group for future use
          group.layout = layout;
        } else {
          continue; // Skip groups with no valid content
        }
      } else if (!group.layout) {
        // Store calculated layout in group
        group.layout = layout;
      }

      // Create group element
      const groupElement = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      groupElement.setAttribute('data-group-id', group.id);
      groupElement.setAttribute('class', 'group');

      // Create rectangle
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      rect.setAttribute('x', String(layout.position.x));
      rect.setAttribute('y', String(layout.position.y));
      rect.setAttribute('width', String(layout.size.width));
      rect.setAttribute('height', String(layout.size.height));
      rect.setAttribute('fill', 'rgba(200, 200, 200, 0.1)'); // Light gray background
      rect.setAttribute('stroke', '#999'); // Gray border
      rect.setAttribute('stroke-width', '2');
      rect.setAttribute('stroke-dasharray', '5,5'); // Dashed border
      rect.setAttribute('rx', '4');
      // Edges are now drawn above groups, so pointer-events can be 'auto' for both modes
      rect.style.pointerEvents = 'auto';
      rect.style.cursor = this.mode === 'edit' ? 'move' : 'pointer';

      // Create label
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', String(layout.position.x + 10));
      text.setAttribute('y', String(layout.position.y + 25)); // Increased offset to prevent overlap with nodes
      text.setAttribute('font-size', '14');
      text.setAttribute('font-weight', 'bold');
      text.setAttribute('fill', '#666');
      text.textContent = group.label;
      text.style.pointerEvents = 'none'; // Prevent text from blocking clicks on rect

      groupElement.appendChild(rect);
      groupElement.appendChild(text);

      // Add edit mode interactions
      if (this.mode === 'edit') {
        this.setupGroupEditInteractions(groupElement, group, rect);
      }

      // Add click event for view mode (to trigger onGroupClick)
      if (this.mode === 'view' && this.onGroupClick) {
        groupElement.addEventListener('click', (e: MouseEvent) => {
          // Don't trigger if clicking on resize handles or child elements
          const target = e.target as SVGElement;
          if (target.getAttribute('data-resize-side')) {
            return;
          }
          
          e.stopPropagation(); // Prevent click event on empty space
          e.preventDefault(); // Prevent default behavior
          
          const svgRect = this.svg.getBoundingClientRect();
          const clickX = e.clientX - svgRect.left;
          const clickY = e.clientY - svgRect.top;

          // Call onGroupClick callback
          this.onGroupClick!({
            group,
            position: { x: clickX, y: clickY },
            originalEvent: e,
          });
        }, true); // Use capture phase to handle before SVG's click handler
      }

      this.groupsGroup.appendChild(groupElement);
    }
  }

  /**
   * Update group layouts for groups containing a node or child group
   * @param nodeId Node ID that changed (optional)
   * @param groupId Group ID that changed (optional)
   * @param preserveChangedGroupLayout If true, don't recalculate layout for the changed group (preserve its current layout)
   */
  private updateGroupLayouts(nodeId?: string, groupId?: string, preserveChangedGroupLayout: boolean = false): void {
    const allGroupsToUpdate = new Set<Group>();
    const preserveLayoutGroupId = preserveChangedGroupLayout && groupId ? groupId : null;
    
    if (nodeId) {
      // Find all groups containing this node (including parent groups in hierarchy)
      const containingGroups = this.groups.filter(g => g.nodeIds.includes(nodeId));
      containingGroups.forEach(g => allGroupsToUpdate.add(g));
      
      // Also include parent groups in hierarchy
      for (const group of containingGroups) {
        this.addParentGroupsToUpdate(group, allGroupsToUpdate);
      }
    }
    
    if (groupId) {
      // Find the group that changed
      const changedGroup = this.groups.find(g => g.id === groupId);
      if (changedGroup) {
        // Only add parent groups, not the changed group itself if we're preserving its layout
        if (!preserveChangedGroupLayout) {
          allGroupsToUpdate.add(changedGroup);
        }
        // Include all parent groups
        this.addParentGroupsToUpdate(changedGroup, allGroupsToUpdate);
      }
    }

    // Update layout for each group (update from bottom to top of hierarchy)
    // Sort by hierarchy level (children first, then parents)
    const sortedGroupsToUpdate = Array.from(allGroupsToUpdate).sort((a, b) => {
      const getLevel = (group: Group): number => {
        if (!group.parentId) return 0;
        const parent = this.groups.find(g => g.id === group.parentId);
        if (!parent) return 0;
        return 1 + getLevel(parent);
      };
      return getLevel(b) - getLevel(a); // Reverse order: children first
    });

    for (const group of sortedGroupsToUpdate) {
      // Skip if this is the group we're preserving
      if (preserveLayoutGroupId && group.id === preserveLayoutGroupId) {
        continue;
      }
      
      const bounds = this.calculateGroupBounds(group.nodeIds, group.id);
      if (bounds) {
        if (!group.layout) {
          group.layout = {
            position: { x: 0, y: 0 },
            size: { width: 0, height: 0 },
          };
        }
        group.layout.position.x = bounds.minX;
        group.layout.position.y = bounds.minY;
        group.layout.size.width = bounds.maxX - bounds.minX;
        group.layout.size.height = bounds.maxY - bounds.minY;
      }
    }
  }

  /**
   * Recursively add parent groups to update set
   */
  private addParentGroupsToUpdate(group: Group, allGroupsToUpdate: Set<Group>): void {
    if (group.parentId) {
      const parent = this.groups.find(g => g.id === group.parentId);
      if (parent) {
        allGroupsToUpdate.add(parent);
        // Recursively add parent's parents
        this.addParentGroupsToUpdate(parent, allGroupsToUpdate);
      }
    }
  }

  /**
   * Recursively move all descendant groups (children and all descendants) and their nodes
   */
  private moveDescendantGroups(groupId: string, deltaX: number, deltaY: number): void {
    // Find all direct child groups
    const childGroups = this.groups.filter(g => g.parentId === groupId);
    
    for (const childGroup of childGroups) {
      // Move the child group
      if (childGroup.layout) {
        childGroup.layout.position.x += deltaX;
        childGroup.layout.position.y += deltaY;
      }
      
      // Move all nodes in the child group
      for (const nodeId of childGroup.nodeIds) {
        const node = this.nodes.find(n => n.id === nodeId);
        if (node && node.position) {
          node.position.x += deltaX;
          node.position.y += deltaY;
        }
      }
      
      // Recursively move all descendants of this child group
      this.moveDescendantGroups(childGroup.id, deltaX, deltaY);
    }
  }


  /**
   * Setup group edit interactions (drag to move, resize handles)
   */
  private setupGroupEditInteractions(groupElement: SVGGElement, group: Group, rect: SVGRectElement): void {
    if (!group.layout) {
      return;
    }

    // Make rect draggable
    rect.addEventListener('pointerdown', (e: PointerEvent) => {
      if (this.mode !== 'edit') {
        return;
      }
      
      // Don't start drag if clicking on resize handle
      const target = e.target as SVGElement;
      if (target.getAttribute('data-resize-side')) {
        return;
      }

      // Stop propagation to prevent panning
      e.stopPropagation();
      e.preventDefault();

      // Set pointer capture for smooth dragging
      rect.setPointerCapture(e.pointerId);

      const svgCoords = this.screenToSvg(e.clientX, e.clientY);
      const mouseX = svgCoords.x;
      const mouseY = svgCoords.y;

      // Store initial group position for delta calculation
      if (!group.layout) {
        return;
      }
      this.pushUndoState();
      const initialGroupX = group.layout.position.x;
      const initialGroupY = group.layout.position.y;

      this.draggingGroup = {
        groupId: group.id,
        offsetX: mouseX - initialGroupX,
        offsetY: mouseY - initialGroupY,
      };

      rect.style.cursor = 'grabbing';
    });

    // Add resize handles
    this.addGroupResizeHandles(groupElement, group, rect);
  }

  /**
   * Add resize handles to group
   */
  private addGroupResizeHandles(groupElement: SVGGElement, group: Group, rect: SVGRectElement): void {
    if (!group.layout) {
      return;
    }

    const handleSize = 12;
    const sides: Array<'top' | 'right' | 'bottom' | 'left'> = ['top', 'right', 'bottom', 'left'];

    for (const side of sides) {
      const handle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      handle.setAttribute('r', String(handleSize / 2));
      handle.setAttribute('fill', '#2196f3');
      handle.setAttribute('stroke', '#fff');
      handle.setAttribute('stroke-width', '2');
      handle.setAttribute('data-resize-side', side);
      handle.setAttribute('data-group-id', group.id);
      handle.style.cursor = this.getResizeCursor(side);
      handle.style.pointerEvents = 'auto';

      // Position handle
      const x = group.layout.position.x;
      const y = group.layout.position.y;
      const width = group.layout.size.width;
      const height = group.layout.size.height;

      switch (side) {
        case 'top':
          handle.setAttribute('cx', String(x + width / 2));
          handle.setAttribute('cy', String(y));
          break;
        case 'right':
          handle.setAttribute('cx', String(x + width));
          handle.setAttribute('cy', String(y + height / 2));
          break;
        case 'bottom':
          handle.setAttribute('cx', String(x + width / 2));
          handle.setAttribute('cy', String(y + height));
          break;
        case 'left':
          handle.setAttribute('cx', String(x));
          handle.setAttribute('cy', String(y + height / 2));
          break;
      }

      // Add resize interaction
      handle.addEventListener('pointerdown', (e: PointerEvent) => {
        if (this.mode !== 'edit') {
          return;
        }

        // Stop propagation to prevent panning
        e.stopPropagation();
        e.preventDefault();

        // Set pointer capture for smooth resizing
        handle.setPointerCapture(e.pointerId);

        const svgCoords = this.screenToSvg(e.clientX, e.clientY);
        const pointerX = svgCoords.x;
        const pointerY = svgCoords.y;

        if (!group.layout) {
          return;
        }

        this.pushUndoState();
        this.resizingGroup = {
          groupId: group.id,
          side,
          startX: pointerX,
          startY: pointerY,
          startWidth: group.layout.size.width,
          startHeight: group.layout.size.height,
          startPosX: group.layout.position.x,
          startPosY: group.layout.position.y,
        };
      });

      groupElement.appendChild(handle);
    }
  }

  /**
   * Update edge style and label visibility without full re-render
   */
  private updateEdgeHighlight(pairKey: string | null): void {
    const edgePairs = this.groupEdgesByPair(this.edges);
    
    for (const pair of edgePairs) {
      const path = this.edgeElements.get(pair.key);
      if (!path) continue;
      
      const isSelected = pair.edges.some(e => e.id === this.selectedEdgeId);
      const isHovered = this.mode === 'view' && pair.key === this.hoveredEdgePairKey;
      const isTapped = this.mode === 'view' && pair.key === this.tappedEdgePairKey;
      const isHighlighted = this.alwaysShowEdges || isSelected || isHovered || isTapped;
      
      const firstEdge = pair.edges[0];
      const edgeStyle = firstEdge.style || {};
      const edgeColor = edgeStyle.color || this.EDGE_DEFAULT_COLOR;
      const edgeWeight = edgeStyle.weight || 1;
      const normalizedWeight = Math.max(this.EDGE_MIN_WEIGHT, Math.min(this.EDGE_MAX_WEIGHT, edgeWeight));
      
      const baseWidth = this.EDGE_DEFAULT_WIDTH + (normalizedWeight - 1) * 0.5;
      const strokeWidth = isHighlighted ? Math.max(baseWidth, this.EDGE_HOVER_WIDTH) : baseWidth;
      const strokeColor = isSelected ? '#2196f3' : edgeColor;
      const strokeOpacity = isHighlighted ? 1.0 : 0.3;
      
      path.setAttribute('stroke', strokeColor);
      path.setAttribute('stroke-width', String(strokeWidth));
      path.setAttribute('stroke-opacity', String(strokeOpacity));
      
      // Update label visibility
      if (isHighlighted) {
        // Clear existing labels for this pair
        const existingLabels = this.edgeLabelsGroup.querySelectorAll(`[data-edge-pair-key="${pair.key}"]`);
        existingLabels.forEach(el => el.remove());
        
        // Render new labels
        this.renderEdgeLabels(pair, edgeStyle);
      } else {
        // Remove labels for this pair
        const existingLabels = this.edgeLabelsGroup.querySelectorAll(`[data-edge-pair-key="${pair.key}"]`);
        existingLabels.forEach(el => el.remove());
      }
    }
  }

  /**
   * Setup edge interaction (hover/tap for label display in view mode)
   */
  private setupEdgeInteraction(hitPath: SVGPathElement, pair: EdgePair, edgeStyle: EdgeStyle): void {
    // Hover handlers (for mouse) - only for highlighting, don't interfere with clicks
    hitPath.addEventListener('pointerenter', () => {
      // Only set hover if not already tapped
      if (this.tappedEdgePairKey !== pair.key) {
        this.hoveredEdgePairKey = pair.key;
        this.updateEdgeHighlight(pair.key); // Update only edge styles and labels
      }
    });

    hitPath.addEventListener('pointerleave', () => {
      // Only clear hover if not tapped
      if (this.tappedEdgePairKey !== pair.key) {
        this.hoveredEdgePairKey = null;
        this.updateEdgeHighlight(null); // Update only edge styles and labels
      }
    });

    // Click handler for view mode (to trigger onEdgeClick)
    hitPath.addEventListener('click', (e: MouseEvent) => {
      if (this.mode === 'view' && pair.edges.length > 0) {
        // Set tapped edge for highlighting
        this.tappedEdgePairKey = pair.key;
        this.updateEdgeHighlight(pair.key);

        // Call onEdgeClick callback
        if (this.onEdgeClick) {
          const svgCoords = this.screenToSvg(e.clientX, e.clientY);
          const firstEdge = pair.edges[0];
          this.onEdgeClick({
            edge: firstEdge,
            position: { x: svgCoords.x, y: svgCoords.y },
            originalEvent: e,
          });
        }
      }
    });

    // Don't add pointerdown handler here - let the main pointerdown handler manage edge selection
    // This allows double-click to work properly
  }

  /**
   * Setup edge interaction for edit mode (hover/tap to show handles)
   */
  private setupEdgeInteractionForEdit(hitPath: SVGPathElement, pair: EdgePair): void {
    // Hover handlers: select edge and show handles on hover
    hitPath.addEventListener('pointerenter', () => {
      if (pair.edges.length > 0) {
        // If an edge is already selected, ignore hover to prevent changing selection
        if (this.selectedEdgeId !== null) {
          // Check if the hovered edge is the same as the selected edge
          const isSelectedEdge = pair.edges.some(e => e.id === this.selectedEdgeId);
          if (!isSelectedEdge) {
            // Different edge hovered, ignore it
            return;
          }
        }
        // Select the edge to show handles
        this.selectedEdgeId = pair.edges[0].id;
        this.updateAnchorHandles();
        this.updateBendHandles();
        this.updateControlButtons();
      }
    });

    // Leave handler: keep handles visible when leaving (user might want to interact with handles)
    // Only clear selection when clicking elsewhere (handled by pointerdown on background)
    hitPath.addEventListener('pointerleave', () => {
      // Keep handles visible - don't clear selection on hover out
      // This allows users to interact with the handles
    });

    // Tap handler: also select edge on tap for touch devices
    hitPath.addEventListener('pointerdown', (e: PointerEvent) => {
      if (pair.edges.length > 0) {
        this.selectedEdgeId = pair.edges[0].id;
        this.updateAnchorHandles();
        this.updateBendHandles();
        this.updateControlButtons();
        // Don't prevent default to allow other handlers (like dblclick) to work
      }
    });
  }

  /**
   * Add resize handles to node in edit mode
   */
  private addResizeHandles(group: SVGGElement, node: Node, width: number, height: number): void {
    const handles = [
      { side: 'top' as const, x: node.position!.x, y: node.position!.y - height / 2 },
      { side: 'right' as const, x: node.position!.x + width / 2, y: node.position!.y },
      { side: 'bottom' as const, x: node.position!.x, y: node.position!.y + height / 2 },
      { side: 'left' as const, x: node.position!.x - width / 2, y: node.position!.y },
    ];

    for (const handle of handles) {
      const handleEl = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      handleEl.setAttribute('cx', String(handle.x));
      handleEl.setAttribute('cy', String(handle.y));
      handleEl.setAttribute('r', '6');
      handleEl.setAttribute('fill', '#4CAF50');
      handleEl.setAttribute('stroke', '#fff');
      handleEl.setAttribute('stroke-width', '2');
      handleEl.setAttribute('data-resize-side', handle.side);
      handleEl.setAttribute('data-node-id', node.id);
      handleEl.style.cursor = this.getResizeCursor(handle.side);
      handleEl.style.pointerEvents = 'auto';
      group.appendChild(handleEl);
    }
  }

  /**
   * Get cursor style for resize handle
   */
  private getResizeCursor(side: 'top' | 'right' | 'bottom' | 'left'): string {
    switch (side) {
      case 'top':
      case 'bottom':
        return 'ns-resize';
      case 'left':
      case 'right':
        return 'ew-resize';
    }
  }

  /**
   * Update group position (during drag)
   * Moves all nodes and child groups in the group by the same delta
   */
  private updateGroupPosition(e: PointerEvent): void {
    if (!this.draggingGroup) {
      return;
    }

    const group = this.groups.find(g => g.id === this.draggingGroup!.groupId);
    if (!group || !group.layout) {
      return;
    }

    // Convert screen coordinates to SVG coordinates
    const svgCoords = this.screenToSvg(e.clientX, e.clientY);
    const mouseX = svgCoords.x;
    const mouseY = svgCoords.y;

    // Calculate new group position
    const newGroupX = mouseX - this.draggingGroup.offsetX;
    const newGroupY = mouseY - this.draggingGroup.offsetY;

    // Calculate delta from current position
    const deltaX = newGroupX - group.layout.position.x;
    const deltaY = newGroupY - group.layout.position.y;

    // Move all nodes that belong directly to this group (not to child groups)
    // Find nodes that belong to this group but not to any child group
    const childGroupNodeIds = new Set<string>();
    const childGroups = this.groups.filter(g => g.parentId === group.id);
    for (const childGroup of childGroups) {
      for (const nodeId of childGroup.nodeIds) {
        childGroupNodeIds.add(nodeId);
      }
    }
    
    // Move only nodes that belong directly to this group
    for (const nodeId of group.nodeIds) {
      if (!childGroupNodeIds.has(nodeId)) {
        const node = this.nodes.find(n => n.id === nodeId);
        if (node && node.position) {
          node.position.x += deltaX;
          node.position.y += deltaY;
        }
      }
    }

    // Move all descendant groups (children and all descendants) by the same delta
    this.moveDescendantGroups(group.id, deltaX, deltaY);

    // Update group layout position
    group.layout.position.x = newGroupX;
    group.layout.position.y = newGroupY;

    // Update parent groups after move (but preserve moved group's layout)
    this.updateGroupLayouts(undefined, group.id, true);

    // Re-render
    this.render();
    this.updateAnchorHandles();
    this.updateBendHandles();
  }

  /**
   * Update group size (during resize)
   */
  private updateGroupSize(e: PointerEvent): void {
    if (!this.resizingGroup) {
      return;
    }

    const group = this.groups.find(g => g.id === this.resizingGroup!.groupId);
    if (!group || !group.layout) {
      return;
    }

    const svgCoords = this.screenToSvg(e.clientX, e.clientY);
    const pointerX = svgCoords.x;
    const pointerY = svgCoords.y;

    const deltaX = pointerX - this.resizingGroup.startX;
    const deltaY = pointerY - this.resizingGroup.startY;

    switch (this.resizingGroup.side) {
      case 'right': {
        const newWidth = Math.max(100, this.resizingGroup.startWidth + deltaX);
        group.layout.size.width = newWidth;
        break;
      }
      case 'left': {
        const newWidth = Math.max(100, this.resizingGroup.startWidth - deltaX);
        group.layout.size.width = newWidth;
        group.layout.position.x = this.resizingGroup.startPosX + deltaX;
        break;
      }
      case 'bottom': {
        const newHeight = Math.max(100, this.resizingGroup.startHeight + deltaY);
        group.layout.size.height = newHeight;
        break;
      }
      case 'top': {
        const newHeight = Math.max(100, this.resizingGroup.startHeight - deltaY);
        group.layout.size.height = newHeight;
        group.layout.position.y = this.resizingGroup.startPosY + deltaY;
        break;
      }
    }

    // Update visual representation
    const groupElement = this.groupsGroup.querySelector(`[data-group-id="${group.id}"]`);
    if (groupElement) {
      const rect = groupElement.querySelector('rect');
      if (rect) {
        rect.setAttribute('x', String(group.layout.position.x));
        rect.setAttribute('y', String(group.layout.position.y));
        rect.setAttribute('width', String(group.layout.size.width));
        rect.setAttribute('height', String(group.layout.size.height));
      }

      // Update resize handles
      if (!group.layout) {
        return;
      }
      const handles = groupElement.querySelectorAll('[data-resize-side]');
      const layout = group.layout; // Store in local variable for type narrowing
      handles.forEach(handle => {
        const side = handle.getAttribute('data-resize-side');
        const x = layout.position.x;
        const y = layout.position.y;
        const width = layout.size.width;
        const height = layout.size.height;

        switch (side) {
          case 'top':
            handle.setAttribute('cx', String(x + width / 2));
            handle.setAttribute('cy', String(y));
            break;
          case 'right':
            handle.setAttribute('cx', String(x + width));
            handle.setAttribute('cy', String(y + height / 2));
            break;
          case 'bottom':
            handle.setAttribute('cx', String(x + width / 2));
            handle.setAttribute('cy', String(y + height));
            break;
          case 'left':
            handle.setAttribute('cx', String(x));
            handle.setAttribute('cy', String(y + height / 2));
            break;
        }
      });

      // Update label position
      const text = groupElement.querySelector('text');
      if (text) {
        text.setAttribute('x', String(group.layout.position.x + 10));
        text.setAttribute('y', String(group.layout.position.y + 20));
      }
    }
  }

  /**
   * Handle group resize end (called on pointer up)
   */
  private handleGroupResizeEnd(): void {
    // Update parent groups after resize (but preserve resized group's layout)
    if (this.resizingGroup) {
      this.updateGroupLayouts(undefined, this.resizingGroup.groupId, true);
    }
    // Final render
    this.render();
  }

  /**
   * Calculate point on SVG path at given ratio (0.0 to 1.0)
   * @param pathData SVG path data string (e.g., "M 10 10 L 20 20 L 30 10")
   * @param ratio Position ratio along path (0.0 = start, 1.0 = end, 0.5 = middle)
   * @returns Point coordinates {x, y} or null if path is invalid
   */
  private getPointOnPath(pathData: string, ratio: number): { x: number; y: number } | null {
    if (!pathData) {
      return null;
    }
    
    // Create a temporary SVG path element to use getPointAtLength
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.style.position = 'absolute';
    svg.style.visibility = 'hidden';
    svg.style.width = '0';
    svg.style.height = '0';
    document.body.appendChild(svg);
    
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', pathData);
    svg.appendChild(path);
    
    try {
      const totalLength = path.getTotalLength();
      if (totalLength === 0) {
        document.body.removeChild(svg);
        return null;
      }
      const point = path.getPointAtLength(totalLength * ratio);
      document.body.removeChild(svg);
      return { x: point.x, y: point.y };
    } catch (e) {
      document.body.removeChild(svg);
      return null;
    }
  }

  /**
   * Render edge labels based on relationship directionality
   */
  private renderEdgeLabels(pair: EdgePair, edgeStyle: EdgeStyle): void {
    const nodeA = this.nodes.find(n => n.id === pair.a);
    const nodeB = this.nodes.find(n => n.id === pair.b);
    if (!nodeA?.position || !nodeB?.position) {
      return;
    }

    const nodeStyleA = nodeA.style || {};
    const nodeStyleB = nodeB.style || {};
    const widthA = nodeStyleA.width || this.DEFAULT_NODE_WIDTH;
    const heightA = nodeStyleA.height || this.DEFAULT_NODE_HEIGHT;
    const widthB = nodeStyleB.width || this.DEFAULT_NODE_WIDTH;
    const heightB = nodeStyleB.height || this.DEFAULT_NODE_HEIGHT;

    const srcAnchor = pair.srcAnchor || this.estimateAnchor(nodeA, nodeB);
    const dstAnchor = pair.dstAnchor || this.estimateAnchor(nodeB, nodeA);
    const start = this.calculateAnchorPosition(nodeA, srcAnchor, widthA, heightA);
    const end = this.calculateAnchorPosition(nodeB, dstAnchor, widthB, heightB);

    // Get path data for calculating points on the path (includes bends)
    const pathData = this.calculateEdgePairPath(pair);

    // Check if edges have different labels for A->B and B->A directions
    const aToBEdge = pair.edges.find(e => e.src === pair.a && e.dst === pair.b);
    const bToAEdge = pair.edges.find(e => e.src === pair.b && e.dst === pair.a);
    
    const aToBLabel = aToBEdge?.style?.label || aToBEdge?.relType || '';
    const bToALabel = bToAEdge?.style?.label || bToAEdge?.relType || '';
    
    const hasDifferentLabels = aToBLabel !== bToALabel && aToBLabel && bToALabel;
    const hasSameLabel = aToBLabel === bToALabel && aToBLabel;

    if (hasDifferentLabels) {
      // Show labels at both ends for different relationship labels
      // A->B label at B side (end), B->A label at A side (start)
      // Position labels closer to center (25% from each end) to avoid overlapping with nodes
      const labelOffsetRatio = 0.25; // 25% from each end toward center
      
      // Calculate points on the path at specified ratios
      const labelBPoint = this.getPointOnPath(pathData, 1 - labelOffsetRatio);
      const labelAPoint = this.getPointOnPath(pathData, labelOffsetRatio);
      
      // Fallback to linear interpolation if path calculation fails
      const labelBx = labelBPoint ? labelBPoint.x : start.x + (end.x - start.x) * (1 - labelOffsetRatio);
      const labelBy = labelBPoint ? labelBPoint.y : start.y + (end.y - start.y) * (1 - labelOffsetRatio);
      const labelAx = labelAPoint ? labelAPoint.x : start.x + (end.x - start.x) * labelOffsetRatio;
      const labelAy = labelAPoint ? labelAPoint.y : start.y + (end.y - start.y) * labelOffsetRatio;
      
      if (aToBLabel) {
        const labelB = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        labelB.setAttribute('x', String(labelBx));
        labelB.setAttribute('y', String(labelBy - 8));
        labelB.setAttribute('text-anchor', 'middle');
        labelB.setAttribute('dominant-baseline', 'middle');
        labelB.setAttribute('font-size', '12');
        labelB.setAttribute('fill', '#333');
        labelB.setAttribute('font-weight', 'bold');
        labelB.setAttribute('pointer-events', 'none'); // Don't block clicks
        labelB.setAttribute('data-edge-pair-key', pair.key);
        // Add background rectangle for readability
        const bgB = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        const textWidthB = aToBLabel.length * 7;
        bgB.setAttribute('x', String(labelBx - textWidthB / 2 - 4));
        bgB.setAttribute('y', String(labelBy - 16));
        bgB.setAttribute('width', String(textWidthB + 8));
        bgB.setAttribute('height', '16');
        bgB.setAttribute('fill', 'rgba(255, 255, 255, 0.9)');
        bgB.setAttribute('rx', '2');
        bgB.setAttribute('pointer-events', 'none');
        bgB.setAttribute('data-edge-pair-key', pair.key);
        this.edgeLabelsGroup.appendChild(bgB);
        labelB.textContent = aToBLabel;
        this.edgeLabelsGroup.appendChild(labelB);
      }
      
      if (bToALabel) {
        const labelA = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        labelA.setAttribute('x', String(labelAx));
        labelA.setAttribute('y', String(labelAy - 8));
        labelA.setAttribute('text-anchor', 'middle');
        labelA.setAttribute('dominant-baseline', 'middle');
        labelA.setAttribute('font-size', '12');
        labelA.setAttribute('fill', '#333');
        labelA.setAttribute('font-weight', 'bold');
        labelA.setAttribute('pointer-events', 'none'); // Don't block clicks
        labelA.setAttribute('data-edge-pair-key', pair.key);
        // Add background rectangle for readability
        const bgA = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        const textWidthA = bToALabel.length * 7;
        bgA.setAttribute('x', String(labelAx - textWidthA / 2 - 4));
        bgA.setAttribute('y', String(labelAy - 16));
        bgA.setAttribute('width', String(textWidthA + 8));
        bgA.setAttribute('height', '16');
        bgA.setAttribute('fill', 'rgba(255, 255, 255, 0.9)');
        bgA.setAttribute('rx', '2');
        bgA.setAttribute('pointer-events', 'none');
        bgA.setAttribute('data-edge-pair-key', pair.key);
        this.edgeLabelsGroup.appendChild(bgA);
        labelA.textContent = bToALabel;
        this.edgeLabelsGroup.appendChild(labelA);
      }
    } else if (hasSameLabel) {
      // Show single label at center for same relationship label
      // Calculate point on path at 50% (middle)
      const midPoint = this.getPointOnPath(pathData, 0.5);
      // Fallback to linear interpolation if path calculation fails
      const midX = midPoint ? midPoint.x : (start.x + end.x) / 2;
      const midY = midPoint ? midPoint.y : (start.y + end.y) / 2;
      const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      label.setAttribute('x', String(midX));
      label.setAttribute('y', String(midY));
      label.setAttribute('text-anchor', 'middle');
      label.setAttribute('dominant-baseline', 'middle');
      label.setAttribute('data-edge-pair-key', pair.key);
      label.setAttribute('font-size', '12');
      label.setAttribute('fill', '#333');
      label.setAttribute('font-weight', 'bold');
      label.setAttribute('pointer-events', 'none'); // Don't block clicks
      // Add background rectangle for readability
      const bg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      const textWidth = aToBLabel.length * 7; // Approximate width
      bg.setAttribute('x', String(midX - textWidth / 2 - 4));
      bg.setAttribute('y', String(midY - 8));
      bg.setAttribute('width', String(textWidth + 8));
      bg.setAttribute('height', '16');
      bg.setAttribute('fill', 'rgba(255, 255, 255, 0.9)');
      bg.setAttribute('rx', '2');
      bg.setAttribute('pointer-events', 'none'); // Don't block clicks
      bg.setAttribute('data-edge-pair-key', pair.key);
      this.edgeLabelsGroup.appendChild(bg);
      label.textContent = aToBLabel;
      this.edgeLabelsGroup.appendChild(label);
    } else if (edgeStyle.label) {
      // Fallback: use edgeStyle.label if provided
      // Calculate point on path at 50% (middle)
      const midPoint = this.getPointOnPath(pathData, 0.5);
      // Fallback to linear interpolation if path calculation fails
      const midX = midPoint ? midPoint.x : (start.x + end.x) / 2;
      const midY = midPoint ? midPoint.y : (start.y + end.y) / 2;
      const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      label.setAttribute('x', String(midX));
      label.setAttribute('y', String(midY));
      label.setAttribute('text-anchor', 'middle');
      label.setAttribute('dominant-baseline', 'middle');
      label.setAttribute('font-size', '12');
      label.setAttribute('fill', '#333');
      label.setAttribute('font-weight', 'bold');
      label.setAttribute('pointer-events', 'none'); // Don't block clicks
      label.setAttribute('data-edge-pair-key', pair.key);
      // Add background rectangle for readability
      const bg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      const textWidth = edgeStyle.label.length * 7; // Approximate width
      bg.setAttribute('x', String(midX - textWidth / 2 - 4));
      bg.setAttribute('y', String(midY - 8));
      bg.setAttribute('width', String(textWidth + 8));
      bg.setAttribute('height', '16');
      bg.setAttribute('fill', 'rgba(255, 255, 255, 0.9)');
      bg.setAttribute('rx', '2');
      bg.setAttribute('pointer-events', 'none'); // Don't block clicks
      bg.setAttribute('data-edge-pair-key', pair.key);
      this.edgeLabelsGroup.appendChild(bg);
      label.textContent = edgeStyle.label;
      this.edgeLabelsGroup.appendChild(label);
    }
  }

  /**
   * Set mode
   */
  setMode(mode: GraphMode): void {
    if (!this.editable && mode === 'edit') {
      // Cannot switch to edit mode if not editable
      return;
    }

    const wasEditMode = this.mode === 'edit';

    // Save snapshot before entering edit mode
    if (mode === 'edit' && this.mode === 'view') {
      this.saveSnapshot();
      this.undoStack = [];
      this.redoStack = [];
    }

    this.mode = mode;
    // Re-render on mode change (cursor styles, etc.)
    this.render();
    if (mode === 'view') {
      this.deselectEdge();
      
      // Save layout when exiting edit mode
      if (wasEditMode && this.onSave) {
        this.onSave({
          nodes: this.nodes,
          edges: this.edges,
          groups: this.groups.length > 0 ? this.groups : undefined,
        });
      }
    }

    // Update edit toggle button icon
    this.updateEditToggleButtonIcon();
    
    // Update control buttons visibility
    this.updateControlButtons();
    
    // Notify mode change (for ViewContainer to update button)
    if (this.onModeChange) {
      this.onModeChange();
    }
  }

  /**
   * Set callback for mode change notification
   */
  setModeChangeCallback(callback: () => void): void {
    this.onModeChange = callback;
  }

  /**
   * Set callback for always show edges state changes
   */
  setAlwaysShowEdgesChangeCallback(callback: (enabled: boolean) => void): void {
    this.onAlwaysShowEdgesChange = callback;
  }

  /**
   * Set callback for Graph buttons update (for ViewContainer)
   */
  setGraphButtonsUpdateCallback(callback: () => void): void {
    this.onGraphButtonsUpdate = callback;
  }

  /**
   * Get always show edges state
   */
  getAlwaysShowEdges(): boolean {
    return this.alwaysShowEdges;
  }

  /**
   * Set always show edges state
   */
  setAlwaysShowEdges(enabled: boolean): void {
    if (this.alwaysShowEdges !== enabled) {
      this.alwaysShowEdges = enabled;
      this.updateAlwaysShowEdgesButton();
      // Clear hover/tap state when disabling
      if (!this.alwaysShowEdges) {
        this.hoveredEdgePairKey = null;
        this.tappedEdgePairKey = null;
      }
      this.render();
    }
  }


  /**
   * Clear selection (for View interface)
   */
  clearSelection(): void {
    this.deselectEdge();
  }


  /**
   * Cancel edit mode (for View interface)
   */
  cancelEdit(): void {
    this.restoreSnapshot();
    this.setMode('view');
  }

  /**
   * Get selected edge ID (for ViewContainer)
   */
  getSelectedEdgeId(): string | null {
    return this.selectedEdgeId;
  }

  /**
   * Get edges (for ViewContainer)
   */
  getEdges(): Edge[] {
    return this.edges;
  }

  /**
   * Check if selected edge has bend points (for ViewContainer)
   */
  hasBendPoints(edgeId: string): boolean {
    const edge = this.edges.find(e => e.id === edgeId);
    if (!edge) {
      return false;
    }
    // Get edge pair to check for bend points
    const [a, b] = edge.src < edge.dst ? [edge.src, edge.dst] : [edge.dst, edge.src];
    const pairKey = `${a}||${b}`;
    const pair = this.groupEdgesByPair(this.edges).find(p => p.key === pairKey);
    return !!(pair && pair.bends && pair.bends.length > 0);
  }

  /**
   * Get whether editable
   */
  isEditable(): boolean {
    return this.editable;
  }

  /**
   * Get edit mode toggle button
   */
  getEditToggleButton(): HTMLElement | null {
    return this.editToggleButton;
  }

  /**
   * Get mode
   */
  getMode(): GraphMode {
    return this.mode;
  }

  /**
   * Get current diagram as SVG string (Graph view only).
   * Content is fitted to viewBox with padding.
   */
  getViewAsSvg(): string | null {
    if (this.nodes.length === 0) return null;
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    for (const node of this.nodes) {
      if (!node.position) continue;
      const nodeStyle = (node as { style?: { width?: number; height?: number } }).style || {};
      const w = nodeStyle.width ?? this.DEFAULT_NODE_WIDTH;
      const h = nodeStyle.height ?? this.DEFAULT_NODE_HEIGHT;
      minX = Math.min(minX, node.position.x - w / 2);
      minY = Math.min(minY, node.position.y - h / 2);
      maxX = Math.max(maxX, node.position.x + w / 2);
      maxY = Math.max(maxY, node.position.y + h / 2);
    }
    for (const group of this.groups) {
      const layout = this.getGroupLayout(group);
      if (layout) {
        minX = Math.min(minX, layout.position.x);
        minY = Math.min(minY, layout.position.y);
        maxX = Math.max(maxX, layout.position.x + layout.size.width);
        maxY = Math.max(maxY, layout.position.y + layout.size.height);
      }
    }
    for (const edge of this.edges) {
      const points = this.getEdgePoints(edge);
      for (const p of points) {
        minX = Math.min(minX, p.x);
        minY = Math.min(minY, p.y);
        maxX = Math.max(maxX, p.x);
        maxY = Math.max(maxY, p.y);
      }
    }
    const padding = 20;
    minX -= padding;
    minY -= padding;
    maxX += padding;
    maxY += padding;
    const width = maxX - minX;
    const height = maxY - minY;
    const clone = this.svg.cloneNode(true) as SVGElement;
    clone.setAttribute('viewBox', `0 0 ${width} ${height}`);
    clone.setAttribute('width', String(Math.round(width)));
    clone.setAttribute('height', String(Math.round(height)));
    const translate = `translate(${-minX}, ${-minY})`;
    const groupsToTransform = [clone.querySelector('.groups'), clone.querySelector('.edges'), clone.querySelector('.nodes'),
      clone.querySelector('.anchor-handles'), clone.querySelector('.bend-handles'), clone.querySelector('.edge-labels')];
    groupsToTransform.forEach((g) => {
      if (g instanceof SVGGElement) g.setAttribute('transform', translate);
    });
    // Make edges fully visible in export (no hover state): full opacity and minimum stroke width
    const edgePaths = clone.querySelectorAll('.edges path[data-edge-pair-key]');
    edgePaths.forEach((el) => {
      if (el instanceof SVGPathElement) {
        el.setAttribute('stroke-opacity', '1');
        const currentWidth = parseFloat(el.getAttribute('stroke-width') || '0') || 0;
        if (currentWidth < 2) el.setAttribute('stroke-width', '2');
      }
    });
    return new XMLSerializer().serializeToString(clone);
  }

  /**
   * Export current view as image blob (Graph view: SVG → canvas → blob).
   * Uses data URL for SVG to avoid tainted canvas when drawing to canvas.
   */
  async exportViewToImage(format: 'png' | 'webp', options?: { quality?: number }): Promise<Blob | null> {
    const svgString = this.getViewAsSvg();
    if (!svgString) return null;
    const dataUrl = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgString);
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        const w = img.naturalWidth;
        const h = img.naturalHeight;
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(null);
          return;
        }
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, w, h);
        ctx.drawImage(img, 0, 0);
        const quality = options?.quality ?? 0.92;
        canvas.toBlob(
          (b) => resolve(b ?? null),
          format === 'png' ? 'image/png' : 'image/webp',
          quality
        );
      };
      img.onerror = () => resolve(null);
      img.src = dataUrl;
    });
  }

  /**
   * Show view
   */
  show(): void {
    this.container.style.display = 'block';
    // Execute Fit operation if data is set (to be in fitted state initially)
    // This ensures Graph is in fitted state on initial display or when switching from other views
    if (this.nodes.length > 0) {
      // Wait a bit for container size to become valid
      setTimeout(() => {
        const containerRect = this.container.getBoundingClientRect();
        if (containerRect.width > 0 && containerRect.height > 0) {
          this.fitAndCenter();
        }
      }, 100);
    }
    this.resize();
  }

  /**
   * Create popup
   */
  private createPopup(): HTMLElement {
    const popup = document.createElement('div');
    popup.className = 'relatos-graph-popup';
    popup.style.cssText = `
      position: absolute;
      background: white;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 8px 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      pointer-events: none;
      z-index: 10000;
      font-size: 14px;
      line-height: 1.4;
      max-width: 300px;
      word-wrap: break-word;
      overflow-wrap: break-word;
      white-space: normal;
      opacity: 0;
      transition: opacity 0.2s;
    `;
    
    // Popup arrow (bottom center)
    const arrow = document.createElement('div');
    arrow.style.cssText = `
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-top: 8px solid white;
    `;
    popup.appendChild(arrow);
    
    this.container.appendChild(popup);
    return popup;
  }

  /**
   * Show popup
   */
  private showPopup(node: Node): void {
    if (!node || !node.position) {
      return;
    }

    // Close existing popup
    this.hidePopup();

    // Create popup element if not exists
    if (!this.popupElement) {
      this.popupElement = this.createPopup();
    }

    // Set popup content
    this.popupElement.textContent = node.label;
    this.popupElement.style.opacity = '1';
    this.popupElement.style.display = 'block';
    this.popupNodeId = node.id;

    // Update popup position (with slight delay to calculate position after DOM update)
    // Use requestAnimationFrame to update position in next frame
    requestAnimationFrame(() => {
      if (this.popupElement && this.popupNodeId === node.id) {
        this.updatePopupPosition(node);
      }
    });
  }

  /**
   * Update popup position
   */
  private updatePopupPosition(node: Node): void {
    if (!this.popupElement || !node || !node.position) {
      return;
    }

    const nodeStyle = node.style || {};
    const nodeWidth = nodeStyle.width || this.DEFAULT_NODE_WIDTH;
    const nodeHeight = nodeStyle.height || this.DEFAULT_NODE_HEIGHT;

    // Get node's actual screen position (directly from SVG element)
    const nodeRect = this.nodeElements.get(node.id);
    if (!nodeRect) {
      // Calculate from SVG coordinates if nodeRect cannot be obtained
      const containerRect = this.container.getBoundingClientRect();
      const svgRect = this.svg.getBoundingClientRect();
      
      const zoom = isFinite(this.zoom) && this.zoom > 0 ? this.zoom : 1;
      const offsetX = isFinite(this.offsetX) ? this.offsetX : 0;
      const offsetY = isFinite(this.offsetY) ? this.offsetY : 0;
      
      const relativeX = (node.position.x + offsetX) * zoom;
      const relativeY = (node.position.y + offsetY) * zoom;
      
      const popupRect = this.popupElement.getBoundingClientRect();
      const popupWidth = popupRect.width || 200;
      const popupHeight = popupRect.height || 50;
      
      const popupX = relativeX - popupWidth / 2;
      const popupY = relativeY - nodeHeight * zoom / 2 - popupHeight - 10;
      
      this.popupElement.style.left = `${popupX}px`;
      this.popupElement.style.top = `${popupY}px`;
      return;
    }

    // Get actual screen coordinates of node's rect element
    const rectBounds = nodeRect.getBoundingClientRect();
    const containerRect = this.container.getBoundingClientRect();
    
    // Node center position (screen coordinates, relative to container)
    const nodeCenterX = rectBounds.left + rectBounds.width / 2 - containerRect.left;
    const nodeCenterY = rectBounds.top + rectBounds.height / 2 - containerRect.top;

    // Get popup size
    const popupRect = this.popupElement.getBoundingClientRect();
    const popupWidth = popupRect.width || 200;
    const popupHeight = popupRect.height || 50;

    // Place popup above node (center aligned)
    const popupX = nodeCenterX - popupWidth / 2;
    const popupY = nodeCenterY - rectBounds.height / 2 - popupHeight - 10; // 10px above node

    this.popupElement.style.left = `${popupX}px`;
    this.popupElement.style.top = `${popupY}px`;
  }

  /**
   * Hide popup
   */
  private hidePopup(): void {
    if (this.popupElement) {
      this.popupElement.style.opacity = '0';
      // Don't remove immediately, hide after transition completes
      setTimeout(() => {
        if (this.popupElement && this.popupElement.style.opacity === '0') {
          this.popupElement.style.display = 'none';
        }
      }, 200);
    }
    this.popupNodeId = null;
  }

  /**
   * Hide view
   */
  hide(): void {
    this.container.style.display = 'none';
    this.hidePopup();
  }

  /**
   * Resize
   */
  resize(): void {
    const rect = this.container.getBoundingClientRect();
    this.svg.setAttribute('width', String(rect.width));
    this.svg.setAttribute('height', String(rect.height));
    
    // Update popup position
    if (this.popupNodeId && this.popupElement) {
      const node = this.nodes.find(n => n.id === this.popupNodeId);
      if (node) {
        this.updatePopupPosition(node);
      }
    }
  }

  /**
   * Destroy
   */
  destroy(): void {
    this.nodeElements.clear();
    this.edgeElements.clear();
    if (this.container.contains(this.svg)) {
      this.container.removeChild(this.svg);
    }
  }
}