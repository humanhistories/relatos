/**
 * Relatos Viewer - Graph View
 * SVG graph display (view mode)
 */

import type { Node, Edge, GraphMode, EdgeAnchor, NodeSide, EdgeStyle } from '../../types';
import type { NodeClickEvent, EdgeClickEvent } from '../../types/events';
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
 * Graph Viewクラス
 */
export class GraphView implements View {
  private container: HTMLElement;
  private svgWrapper: HTMLElement; // Wrapper element for zoom/pan transform
  private svg: SVGElement;
  private svgDefs: SVGDefsElement;
  private nodesGroup: SVGGElement;
  private edgesGroup: SVGGElement;
  private nodes: Node[] = [];
  private edges: Edge[] = [];
  private mode: GraphMode = 'view';
  private editable: boolean = false;
  private onNodeClick?: (event: NodeClickEvent) => void;
  private onEdgeClick?: (event: EdgeClickEvent) => void;
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
  private panning: { startX: number; startY: number; startOffsetX: number; startOffsetY: number } | null = null; // Pan state
  private lastPanEndTime: number = 0; // パン操作が終了した時刻（ミリ秒）
  private resizingNode: { nodeId: string; side: 'top' | 'right' | 'bottom' | 'left'; startX: number; startY: number; startWidth: number; startHeight: number; startNodeX: number; startNodeY: number } | null = null;
  private onSave?: (payload: { nodes: Node[]; edges: Edge[] }) => void;
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
  private snapshotBeforeEdit: { nodes: Node[]; edges: Edge[] } | null = null;
  private edgeClickTimers: WeakMap<SVGPathElement, number | null> = new WeakMap(); // Track click timers per hit-path; // Snapshot before entering edit mode
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
  private clearSelectionButton: HTMLButtonElement | null = null;
  private deleteBendButton: HTMLButtonElement | null = null;
  private fitCenterButton: HTMLButtonElement | null = null;
  private cancelEditButton: HTMLButtonElement | null = null;

  constructor(
    container: HTMLElement,
    onNodeClick?: (event: NodeClickEvent) => void,
    onSave?: (payload: { nodes: Node[]; edges: Edge[] }) => void,
    editable: boolean = false,
    onEdgeClick?: (event: EdgeClickEvent) => void
  ) {
    this.container = container;
    // onNodeClickをラップしてポップアップ表示処理を追加
    this.onNodeClick = onNodeClick
      ? (event: NodeClickEvent) => {
          // ポップアップのトグル動作：同じノードの場合はOFF、異なるノードの場合はON
          if (this.popupNodeId === event.node.id && this.popupElement && this.popupElement.style.opacity === '1') {
            // 同じノードがクリックされ、かつポップアップが表示されている場合はポップアップを閉じる
            this.hidePopup();
          } else {
            // 異なるノードがクリックされた場合、またはポップアップが表示されていない場合はポップアップを表示
            this.showPopup(event.node);
          }
          // 元のコールバックを呼び出す
          onNodeClick(event);
        }
      : undefined;
    this.onSave = onSave;
    this.editable = editable;
    this.onEdgeClick = onEdgeClick;

    // コンテナのスタイルを設定（高さを確保）
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

    // SVG定義（矢印マーカーなど）
    this.svgDefs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    this.createArrowMarkers();
    this.svg.appendChild(this.svgDefs);

    // エッジグループ（ノードより下に描画）
    this.edgesGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    this.edgesGroup.setAttribute('class', 'edges');
    this.svg.appendChild(this.edgesGroup);

    // ノードグループ（エッジより上に描画）
    this.nodesGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    this.nodesGroup.setAttribute('class', 'nodes');
    this.svg.appendChild(this.nodesGroup);

    // アンカーハンドルグループ（最前面）
    this.anchorHandlesGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    this.anchorHandlesGroup.setAttribute('class', 'anchor-handles');
    this.anchorHandlesGroup.style.display = 'none';
    this.svg.appendChild(this.anchorHandlesGroup);

    // 折れ点ハンドルグループ（最前面）
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

    // イベントリスナー設定
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
    this.alwaysShowEdgesButton.style.color = '#000000'; // アイコンの色
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
      // 統一された押下効果: 黄色の背景色で光る効果
      this.alwaysShowEdgesButton.style.backgroundColor = '#fff9c4';
      this.alwaysShowEdgesButton.style.color = '#000000'; // アイコンの色
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
      // Edit中であることを強調するため、背景色は黄色（統一効果）でアイコン色は赤色
      this.editToggleButton.setAttribute('aria-label', 'Exit edit mode');
      this.editToggleButton.setAttribute('title', 'Exit edit mode');
      this.editToggleButton.classList.add('relatos-edit-toggle-active');
      this.editToggleButton.style.backgroundColor = '#fff9c4'; // 統一された押下効果（黄色の背景色）
      this.editToggleButton.style.color = 'red'; // Edit中であることを強調する赤色アイコン
      this.editToggleButton.style.borderColor = '#999';
      // 統一された凹み効果
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
      // 統一された通常時のシャドウ
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

    // Clear selection button (Esc alternative)
    this.clearSelectionButton = this.createIconButton('✕', 'Clear selection', 'Clear selection', () => {
      this.deselectEdge();
    });
    this.clearSelectionButton.style.display = 'none'; // Hidden by default, shown when edge is selected

    // Delete bend point button (Delete/Backspace alternative)
    this.deleteBendButton = this.createIconButton('🗑', 'Delete bend point', 'Delete bend point', () => {
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
    this.cancelEditButton = this.createIconButton(createSvgIcon('icon-undo', 16), 'Cancel edit', 'Cancel edit and restore previous state', () => {
      this.restoreSnapshot();
      this.setMode('view');
    });
    this.cancelEditButton.style.display = 'none';

    // Add buttons to container (but container itself will be hidden)
    this.controlButtonsContainer.appendChild(this.clearSelectionButton);
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
    // ポップアップの位置を更新
    if (this.popupNodeId && this.popupElement) {
      const node = this.nodes.find(n => n.id === this.popupNodeId);
      if (node) {
        this.updatePopupPosition(node);
      }
    }
    
    // NaNチェック（NaNの場合はデフォルト値を使用）
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

    // コンテナのサイズを確認（最初に確認して、NaNを防ぐ）
    const containerRectInitial = this.container.getBoundingClientRect();
    if (containerRectInitial.width <= 0 || containerRectInitial.height <= 0 || !isFinite(containerRectInitial.width) || !isFinite(containerRectInitial.height)) {
      // コンテナのサイズが有効でない場合は、フィット操作をスキップ
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

    // Add padding (ノードが重ならないように十分な余白を確保)
    const padding = 60; // パディングを増やして、ノード間の間隔を確保
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
    // コンテナのサイズが有効かどうかを再確認（NaNを防ぐため）
    const containerRectCheck = this.container.getBoundingClientRect();
    if (containerRectCheck.width <= 0 || containerRectCheck.height <= 0 || !isFinite(width) || !isFinite(height) || width <= 0 || height <= 0) {
      return;
    }
    
    const scaleX = containerRectCheck.width / width;
    const scaleY = containerRectCheck.height / height;
    
    // NaNチェック
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
    // NaNチェック
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
   * アニメーション付きでフィット&センター
   */
  private animateFitAndCenter(): void {
    if (this.nodes.length === 0) {
      return;
    }

    // コンテナのサイズを確認
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

    // コンテナの中心座標（相対座標）
    const containerCenterX = containerRectCheck.width / 2;
    const containerCenterY = containerRectCheck.height / 2;

    // アニメーションでフィット
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
      
      // ノードやエッジがクリックされた場合は処理しない（ノード/エッジのイベントハンドラで処理される）
      // closest()で親要素を確認し、data-node-idを持つ要素（g要素）やその子要素の場合はスキップ
      const nodeGroup = target.closest('[data-node-id]');
      if (nodeGroup) {
        // ノードがクリックされた場合は処理しない（ノードのイベントハンドラで処理される）
        return;
      }
      
      // エッジがクリックされた場合も処理しない
      const edgePairKey = target.getAttribute('data-edge-pair-key') || target.getAttribute('data-hit-edge-pair-key');
      if (edgePairKey) {
        return;
      }
      
      // パン操作の終了直後（pointerupからclickまでの短い時間）はポップアップを閉じない
      // パン操作中（this.panning !== null）の場合は、pointerupでthis.panningがnullにリセットされるが、
      // その直後にclickイベントが発火する可能性があるため、パン操作の終了時刻を記録してチェックする
      const now = Date.now();
      const timeSincePanEnd = now - (this.lastPanEndTime || 0);
      if (timeSincePanEnd < 100) { // パン操作終了から100ms以内のクリックは無視
        return;
      }
      
      // ノードやエッジ以外の場所をクリックした場合はポップアップを閉じる
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
      
      if (!isButtonOrControl && !this.resizingNode && !this.draggingNode && !this.draggingAnchor && !this.draggingBend && (isTouchPan || isMousePan)) {
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
      } else if (this.draggingNode) {
        this.updateNodePosition(e);
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
      if (!isButtonOrControl && this.panning && !this.resizingNode && !this.draggingNode && !this.draggingAnchor && !this.draggingBend) {
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
      } else if (this.draggingNode) {
        this.updateNodePosition(e);
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
        this.lastPanEndTime = Date.now(); // パン操作終了時刻を記録
      }
      this.panning = null;
      this.resizingNode = null;
      this.draggingNode = null;
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
        this.lastPanEndTime = Date.now(); // パン操作終了時刻を記録
      }
      this.panning = null;
      this.resizingNode = null;
      this.draggingNode = null;
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
        this.lastPanEndTime = Date.now(); // パン操作終了時刻を記録
      }
      this.panning = null;
      this.resizingNode = null;
      this.draggingNode = null;
      this.draggingAnchor = null;
      this.draggingBend = null;
    });

    // Keyboard event (delete bend point with Delete/Backspace)
    this.container.addEventListener('keydown', (e: KeyboardEvent) => {
      if (this.mode !== 'edit' || !this.selectedEdgeId) {
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
   * データを設定
   */
  setData(nodes: Node[], edges: Edge[]): void {
    this.nodes = nodes;
    this.edges = edges;

    // 位置情報がないノードに自動配置を適用
    // coordinates（緯度経度）がある場合は緯度経度ベースで配置、
    // ない場合は残り1/4の領域に配置
    this.ensureNodePositions();

    // 描画
    this.render();
    
    // 初期位置でフィット操作を自動実行（ノードが重ならないようにズームアウトも考慮）
    // コンテナが表示されている場合はすぐに実行、非表示の場合はshow()で実行される
    // コンテナのサイズが有効かどうかを確認してから実行
    if (this.container.style.display !== 'none' && this.container.offsetParent !== null) {
      // コンテナが表示されている場合は、少し遅延させてレンダリング完了後に実行
      setTimeout(() => {
        const containerRect = this.container.getBoundingClientRect();
        if (containerRect.width > 0 && containerRect.height > 0) {
          this.fitAndCenter();
        }
      }, 100);
    }
    // コンテナが非表示の場合は、show()が呼ばれたときにfitAndCenter()が実行される
  }

  /**
   * ノードを選択（ハイライト表示）
   * @param nodeId 選択するノードID（nullの場合は選択解除）
   * @param zoomToNode ノードへズームインするかどうか（デフォルト: true）
   */
  selectNode(nodeId: string | null, zoomToNode: boolean = true): void {
    // トグル動作：同じノードが既にズームインされている場合はフィットに切り替え
    if (nodeId && zoomToNode && this.zoomedNodeId === nodeId) {
      // 同じノードがクリックされたので、フィットに切り替え
      this.zoomedNodeId = null;
      this.selectedNodeId = nodeId;
      this.render();
      this.animateFitAndCenter();
      return;
    }
    
    // 新しいノードが選択されたか、選択解除
    this.selectedNodeId = nodeId;
    if (nodeId) {
      this.zoomedNodeId = nodeId; // ズームされたノードIDを記録
    } else {
      this.zoomedNodeId = null;
    }
    this.render();
    
    // ノードへズームイン（LeafletのflyToのように）
    if (nodeId && zoomToNode) {
      this.zoomToNode(nodeId);
      // ポップアップを表示
      const node = this.nodes.find(n => n.id === nodeId);
      if (node) {
        this.showPopup(node);
      }
    } else if (!nodeId) {
      // 選択解除された場合はフィット
      this.zoomedNodeId = null;
      this.hidePopup();
    }
  }

  /**
   * 指定されたノードへズームイン（LeafletのflyToのようにアニメーション）
   * @param nodeId ズームするノードID
   */
  private zoomToNode(nodeId: string): void {
    const node = this.nodes.find(n => n.id === nodeId);
    if (!node || !node.position) {
      return;
    }

    // コンテナのサイズを取得
    const containerRect = this.container.getBoundingClientRect();
    if (containerRect.width <= 0 || containerRect.height <= 0) {
      return;
    }

    const nodeStyle = node.style || {};
    const nodeWidth = nodeStyle.width || this.DEFAULT_NODE_WIDTH;
    const nodeHeight = nodeStyle.height || this.DEFAULT_NODE_HEIGHT;
    const nodeCenterX = node.position.x + nodeWidth / 2;
    const nodeCenterY = node.position.y + nodeHeight / 2;

    // ノードサイズを考慮して目標ズームレベルを計算
    // ノードが画面の20-30%程度のサイズになるようにする
    const nodeDisplayWidth = nodeWidth * this.zoom;
    const nodeDisplayHeight = nodeHeight * this.zoom;
    const targetDisplaySize = Math.min(containerRect.width * 0.3, containerRect.height * 0.3);
    
    // 目標ズームレベルを計算（ノードが適切なサイズで表示されるように）
    const zoomForWidth = targetDisplaySize / nodeWidth;
    const zoomForHeight = targetDisplaySize / nodeHeight;
    const calculatedZoom = Math.min(zoomForWidth, zoomForHeight);
    
    // ズームレベルの制限（最小0.5倍、最大3.0倍）
    const minZoom = 0.5;
    const maxZoom = 3.0; // 最大ズームレベルを3.0に制限
    const targetZoom = Math.max(minZoom, Math.min(maxZoom, calculatedZoom));

    // コンテナの中心座標（相対座標）
    const containerCenterX = containerRect.width / 2;
    const containerCenterY = containerRect.height / 2;

    // デバッグ情報を出力
    console.log('[Graph Debug] Zoom to node:', {
      nodeId: nodeId,
      nodePosition: {
        x: node.position.x,
        y: node.position.y,
        width: nodeWidth,
        height: nodeHeight,
      },
      nodeCenter: {
        svgX: nodeCenterX,
        svgY: nodeCenterY,
      },
      currentZoom: this.zoom,
      targetZoom: targetZoom,
      currentOffset: {
        x: this.offsetX,
        y: this.offsetY,
      },
      containerSize: {
        width: containerRect.width,
        height: containerRect.height,
      },
      containerCenter: {
        screenX: containerCenterX,
        screenY: containerCenterY,
      },
    });

    // アニメーションでズームイン
    // fitAndCenterと同じ計算方法を使用してオフセットを調整
    this.animateZoomToPoint(targetZoom, containerCenterX, containerCenterY, nodeCenterX, nodeCenterY);
  }

  /**
   * 指定されたポイントへアニメーションでズーム
   * @param targetZoom 目標ズームレベル
   * @param screenCenterX スクリーン中心X座標（コンテナ内の相対座標）
   * @param screenCenterY スクリーン中心Y座標（コンテナ内の相対座標）
   * @param targetSvgX 目標SVG座標X
   * @param targetSvgY 目標SVG座標Y
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
    
    // 目標オフセットを事前に計算
    const containerRect = this.container.getBoundingClientRect();
    const targetCenterXInSvgSpace = containerRect.width / (2 * targetZoom);
    const targetCenterYInSvgSpace = containerRect.height / (2 * targetZoom);
    const targetOffsetX = targetSvgX - targetCenterXInSvgSpace;
    const targetOffsetY = targetSvgY - targetCenterYInSvgSpace;
    
    const duration = 500; // アニメーション時間（ミリ秒）
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // イージング関数（ease-out）
      const easeOut = 1 - Math.pow(1 - progress, 3);

      // ズームとオフセットを同時に補間（パンとズームを同時にアニメーション）
      const currentZoom = startZoom + (targetZoom - startZoom) * easeOut;
      const currentOffsetX = startOffsetX + (targetOffsetX - startOffsetX) * easeOut;
      const currentOffsetY = startOffsetY + (targetOffsetY - startOffsetY) * easeOut;

      // 更新
      this.zoom = currentZoom;
      this.offsetX = currentOffsetX;
      this.offsetY = currentOffsetY;
      this.updateTransform();
      this.render();

      // アニメーション完了時にデバッグ情報を出力
      if (progress >= 1) {
        // 画面中心のSVG座標を計算
        const finalContainerRect = this.container.getBoundingClientRect();
        const containerCenterScreenX = finalContainerRect.width / 2;
        const containerCenterScreenY = finalContainerRect.height / 2;
        const centerSvgX = (containerCenterScreenX / this.zoom) - this.offsetX;
        const centerSvgY = (containerCenterScreenY / this.zoom) - this.offsetY;

        console.log('[Graph Debug] Zoom completed:', {
          finalZoom: this.zoom,
          finalOffset: {
            x: this.offsetX,
            y: this.offsetY,
          },
          screenCenterToSvg: {
            svgX: centerSvgX,
            svgY: centerSvgY,
          },
          targetNode: {
            svgX: targetSvgX,
            svgY: targetSvgY,
          },
          nodePositionInSvg: {
            x: targetSvgX,
            y: targetSvgY,
          },
        });
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }

  /**
   * ノードの位置情報を確保（ない場合は自動配置）
   * coordinates（緯度経度）がある場合は緯度経度ベースで配置、
   * ない場合は残り1/4の領域に配置
   */
  private ensureNodePositions(): void {
    const nodesWithCoords = this.nodes.filter(n => n.coordinates && n.coordinates.length === 2);
    const nodesWithoutCoords = this.nodes.filter(n => !n.coordinates || n.coordinates.length !== 2);
    const nodesNeedingPosition = this.nodes.filter(n => !n.position);

    if (nodesNeedingPosition.length === 0 && nodesWithCoords.length === 0 && nodesWithoutCoords.length === 0) {
      return;
    }

    // コンテナのサイズを取得
    const containerRect = this.container.getBoundingClientRect();
    const baseWidth = containerRect.width || 1000;
    const baseHeight = containerRect.height || 600;

    // 緯度経度対応エリアを十分広くする（ズームアウトした状態で配置するため）
    // 実際の座標空間を拡大して、後でfitAndCenterでズームアウトする
    const scaleFactor = 2.0; // 座標空間を2倍に拡大
    // 左側に非対応エリアを配置するため、緯度経度用領域を右側にシフト
    const nonGeoAreaWidth = baseWidth * scaleFactor * 0.25; // 左側エリアの幅（25%）
    const geoAreaWidth = baseWidth * scaleFactor * 0.75; // 緯度経度用領域（75%）
    const geoAreaHeight = baseHeight * scaleFactor;
    const geoAreaStartX = nonGeoAreaWidth; // 緯度経度用領域の開始X位置

    // 非対応エリア（左側に配置、グリッド配置）
    const nonGeoAreaHeight = baseHeight * scaleFactor; // 縦幅は緯度経度用領域と同じ
    const nonGeoAreaStartX = 0; // 左側から開始

    const existingPositions: Array<{ x: number; y: number; width: number; height: number }> = [];
    // 既存ノードの元の位置情報を保持（緯度経度から計算された位置）
    const existingOriginalPositions: Map<string, { originalX: number; originalY: number }> = new Map();

    // 既存の位置情報を収集
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
        
        // 既存ノードの元の位置情報を保存（緯度経度から計算された位置）
        if (node.coordinates && node.coordinates.length === 2) {
          const [lat, lon] = node.coordinates;
          // 緯度経度から計算された位置を再計算（boundsは後で計算されるが、一時的に使用）
          // 実際には、既にpositionが設定されているノードは調整済みなので、
          // 元の位置は推測が必要
        }
      }
    }

    // 緯度経度ありのノードの位置を計算
    if (nodesWithCoords.length > 0) {
      // 緯度経度の範囲を計算
      const lats = nodesWithCoords.map(n => n.coordinates![0]);
      const lons = nodesWithCoords.map(n => n.coordinates![1]);
      const minLat = Math.min(...lats);
      const maxLat = Math.max(...lats);
      const minLon = Math.min(...lons);
      const maxLon = Math.max(...lons);

      // 範囲を少し広げる（マージンを追加）
      const latRange = maxLat - minLat;
      const lonRange = maxLon - minLon;
      const margin = Math.max(latRange, lonRange) * 0.1 || 0.01; // 範囲が0の場合のデフォルト

      const bounds = {
        minLat: minLat - margin,
        maxLat: maxLat + margin,
        minLon: minLon - margin,
        maxLon: maxLon + margin,
      };

      // すべてのノード（既存+新規）の元の中心座標を事前計算
      // Map<nodeId, {originalCenterX, originalCenterY}>
      const nodeOriginalCenters: Map<string, { originalCenterX: number; originalCenterY: number }> = new Map();
      const nodeInfoMap: Map<string, { node: Node; width: number; height: number; originalCenterX: number; originalCenterY: number }> = new Map();

      // すべてのノード（既存+新規）の元の中心座標を計算
      for (const node of nodesWithCoords) {
        const [lat, lon] = node.coordinates!;
        const normalizedX = (lon - bounds.minLon) / (bounds.maxLon - bounds.minLon);
        const normalizedY = 1 - (lat - bounds.minLat) / (bounds.maxLat - bounds.minLat); // Y軸は反転

        const svgPos = {
          x: geoAreaStartX + normalizedX * geoAreaWidth,
          y: normalizedY * geoAreaHeight,
        };

        const nodeStyle = node.style || {};
        const nodeWidth = nodeStyle.width || this.DEFAULT_NODE_WIDTH;
        const nodeHeight = nodeStyle.height || this.DEFAULT_NODE_HEIGHT;

        // 元の中心座標を計算（左上座標ではなく中心座標）
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

      // x方向とy方向を分離した制約ベースの衝突解決アルゴリズム
      this.resolveNodePositionsWithOrderConstraints(nodeInfoMap, nodeOriginalCenters);
    }

    // 緯度経度なしのノードを左側の領域にグリッド配置（Map2Dと同じ要領）
    const nodesWithoutCoordsNeedingPosition = nodesWithoutCoords.filter(n => !n.position);
    if (nodesWithoutCoordsNeedingPosition.length > 0) {
      const padding = 20; // ノード間のパディング
      
      // グリッド配置（Map2Dと同じ要領）
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
        
        // セル内の中央に配置
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
   * x方向とy方向を分離した制約ベースの衝突解決アルゴリズム
   * 元のx順序・y順序を制約として固定し、重ならないように調整
   * 
   * @param nodeInfoMap すべてのノード情報（元の中心座標含む）
   * @param nodeOriginalCenters すべてのノードの元の中心座標
   */
  private resolveNodePositionsWithOrderConstraints(
    nodeInfoMap: Map<string, { node: Node; width: number; height: number; originalCenterX: number; originalCenterY: number }>,
    nodeOriginalCenters: Map<string, { originalCenterX: number; originalCenterY: number }>
  ): void {
    const padding = 20;
    const maxIterations = 50;

    // 既に位置が設定されているノードの現在の中心座標を計算
    const currentCenters: Map<string, { centerX: number; centerY: number }> = new Map();
    const nodePositions: Map<string, { x: number; y: number; width: number; height: number }> = new Map();

    for (const [nodeId, nodeInfo] of nodeInfoMap) {
      const node = nodeInfo.node;
      if (node.position) {
        // 既存の位置を使用
        const centerX = node.position.x;
        const centerY = node.position.y;
        currentCenters.set(nodeId, { centerX, centerY });
        nodePositions.set(nodeId, {
          x: node.position.x - nodeInfo.width / 2,
          y: node.position.y - nodeInfo.height / 2,
          width: nodeInfo.width,
          height: nodeInfo.height,
        });
      } else {
        // 元の中心座標を初期値として使用
        const originalCenter = nodeOriginalCenters.get(nodeId)!;
        currentCenters.set(nodeId, {
          centerX: originalCenter.originalCenterX,
          centerY: originalCenter.originalCenterY,
        });
        nodePositions.set(nodeId, {
          x: originalCenter.originalCenterX - nodeInfo.width / 2,
          y: originalCenter.originalCenterY - nodeInfo.height / 2,
          width: nodeInfo.width,
          height: nodeInfo.height,
        });
      }
    }

    // 元のx順序・y順序を決定（制約として使用）
    const nodesByOriginalX = Array.from(nodeInfoMap.entries()).sort((a, b) => {
      const centerA = nodeOriginalCenters.get(a[0])!;
      const centerB = nodeOriginalCenters.get(b[0])!;
      return centerA.originalCenterX - centerB.originalCenterX;
    });

    const nodesByOriginalY = Array.from(nodeInfoMap.entries()).sort((a, b) => {
      const centerA = nodeOriginalCenters.get(a[0])!;
      const centerB = nodeOriginalCenters.get(b[0])!;
      return centerA.originalCenterY - centerB.originalCenterY;
    });

    // x方向とy方向を交互に調整
    for (let iteration = 0; iteration < maxIterations; iteration++) {
      let hasCollision = false;

      // x方向の衝突解決（左から右へ、元のx順序を維持）
      for (let i = 0; i < nodesByOriginalX.length; i++) {
        const [nodeId] = nodesByOriginalX[i];
        const currentPos = nodePositions.get(nodeId)!;
        const currentCenter = currentCenters.get(nodeId)!;

        // 左側のノード（元のx順序で前のノード）との衝突をチェック
        for (let j = 0; j < i; j++) {
          const [otherId] = nodesByOriginalX[j];
          const otherPos = nodePositions.get(otherId)!;

          // x方向の衝突判定（左右の重なり）
          if (
            currentPos.x < otherPos.x + otherPos.width + padding &&
            currentPos.x + currentPos.width + padding > otherPos.x
          ) {
            hasCollision = true;
            // 元のx順序を保つため、現在のノードを右側に移動（絶対に順序を入れ替えない）
            const requiredGap = otherPos.width / 2 + currentPos.width / 2 + padding;
            const otherCenter = currentCenters.get(otherId)!;
            const newCenterX = otherCenter.centerX + requiredGap;
            currentCenter.centerX = newCenterX;
            currentPos.x = newCenterX - currentPos.width / 2;
          }
        }
      }

      // y方向の衝突解決（上から下へ、元のy順序を維持）
      for (let i = 0; i < nodesByOriginalY.length; i++) {
        const [nodeId] = nodesByOriginalY[i];
        const currentPos = nodePositions.get(nodeId)!;
        const currentCenter = currentCenters.get(nodeId)!;

        // 上側のノード（元のy順序で前のノード）との衝突をチェック
        for (let j = 0; j < i; j++) {
          const [otherId] = nodesByOriginalY[j];
          const otherPos = nodePositions.get(otherId)!;

          // y方向の衝突判定（上下の重なり）
          if (
            currentPos.y < otherPos.y + otherPos.height + padding &&
            currentPos.y + currentPos.height + padding > otherPos.y
          ) {
            hasCollision = true;
            // 元のy順序を保つため、現在のノードを下側に移動（絶対に順序を入れ替えない）
            const requiredGap = otherPos.height / 2 + currentPos.height / 2 + padding;
            const otherCenter = currentCenters.get(otherId)!;
            const newCenterY = otherCenter.centerY + requiredGap;
            currentCenter.centerY = newCenterY;
            currentPos.y = newCenterY - currentPos.height / 2;
          }
        }
      }

      // すべての衝突が解消されたら終了
      if (!hasCollision) {
        break;
      }
    }

    // 最終的な位置をノードに設定
    for (const [nodeId, nodeInfo] of nodeInfoMap) {
      if (!nodeInfo.node.position) {
        const pos = nodePositions.get(nodeId)!;
        nodeInfo.node.position = {
          x: pos.x + pos.width / 2,
          y: pos.y + pos.height / 2,
        };
      }
    }
  }

  /**
   * ノードの位置が他のノードと重ならないように調整（旧実装、後方互換性のために残す）
   * 元の位置関係（東西南北）を保持しながら調整
   */
  private adjustNodePosition(
    node: { x: number; y: number; width: number; height: number },
    existingNodes: Array<{ x: number; y: number; width: number; height: number }>,
    originalPos?: { originalX: number; originalY: number },
    existingOriginalPositions?: Map<string, { originalX: number; originalY: number }>,
    maxIterations: number = 20
  ): { x: number; y: number } {
    const padding = 20; // パディングを増やして、より安全な間隔を確保
    let currentX = node.x;
    let currentY = node.y;
    const nodeWidth = node.width;
    const nodeHeight = node.height;
    
    // 元の位置（緯度経度から計算された位置）を取得
    // originalPosが指定されている場合はそれを使用、なければnode.x, node.yを元の位置とする
    const originalX = originalPos?.originalX ?? node.x;
    const originalY = originalPos?.originalY ?? node.y;

    // 既存ノードの元の位置関係を計算（相対的な位置関係を保持するため）
    // 他のノードが元の位置に対してどちら側にあるかを計算
    // 既存ノードの元の位置情報があればそれを使用、なければ現在の位置から推測
    const relativePositions = existingNodes.map((other, index) => {
      const otherWidth = other.width || this.DEFAULT_NODE_WIDTH;
      const otherHeight = other.height || this.DEFAULT_NODE_HEIGHT;
      const otherCenterX = other.x + otherWidth / 2;
      const otherCenterY = other.y + otherHeight / 2;
      
      // 既存ノードの元の位置を取得（あれば）
      // existingOriginalPositionsには既存ノードの元の位置情報が含まれる可能性がある
      // しかし、既存ノードのIDが分からないため、現在の位置から元の位置関係を推測
      
      // 元の位置（originalX, originalY）を基準とした相対位置
      // 既存ノードの現在の位置と、元のノードの元の位置の関係から、元の位置関係を推測
      // 既存ノードも調整済みなので、現在の位置関係から元の位置関係を推測する必要がある
      // 一般的に、既存ノードが元のノードより右（東）にあれば、元の位置でも右（東）にあると仮定
      const relativeDx = otherCenterX - originalX;
      const relativeDy = otherCenterY - originalY;
      
      return {
        x: other.x,
        y: other.y,
        width: otherWidth,
        height: otherHeight,
        centerX: otherCenterX,
        centerY: otherCenterY,
        relativeDx, // 元の位置関係を推測（既存ノードの現在の位置と元のノードの元の位置の関係）
        relativeDy,
        originalCenterX: otherCenterX, // 既存ノードの現在の位置（推測された元の位置）
        originalCenterY: otherCenterY,
      };
    });

    for (let i = 0; i < maxIterations; i++) {
      let hasCollision = false;
      let bestMoveX = currentX;
      let bestMoveY = currentY;
      let minPenalty = Infinity; // ペナルティ（元の位置からの距離 + 位置関係の違反度）

      for (const other of relativePositions) {
        // 重なり判定（パディング付き）
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
            // 必要な移動距離を計算
            const requiredDistance = (nodeWidth + other.width) / 2 + padding;
            
            // 元の位置関係を保持する方向に移動
            // 元の位置関係（relativeDx, relativeDy）を考慮
            // 西側（左側）のノードは左側に、東側（右側）のノードは右側に移動
            // 北側（上側）のノードは上側に、南側（下側）のノードは下側に移動
            
            // 元の位置関係に基づいて移動方向を決定
            // relativeDx > 0 なら他のノードは元のノードより右（東）にある
            // relativeDy > 0 なら他のノードは元のノードより下（南）にある
            let moveDx = dx;
            let moveDy = dy;
            
            // 元の位置関係を保持するように調整
            // 元の位置関係（relativeDx, relativeDy）に基づいて移動方向を決定
            // relativeDx > 0 なら他のノードは元のノードより右（東）にある → 衝突時は左に移動
            // relativeDx < 0 なら他のノードは元のノードより左（西）にある → 衝突時は右に移動
            // relativeDy > 0 なら他のノードは元のノードより下（南）にある → 衝突時は上に移動
            // relativeDy < 0 なら他のノードは元のノードより上（北）にある → 衝突時は下に移動
            
            // 元の位置関係を優先的に使用
            if (Math.abs(other.relativeDx) > 0.1 || Math.abs(other.relativeDy) > 0.1) {
              // 元の位置関係に基づいた方向を使用
              // 東西方向の調整
              if (Math.abs(other.relativeDx) > Math.abs(other.relativeDy)) {
                // 東西方向の位置関係がより重要
                const originalDirectionX = other.relativeDx > 0 ? -1 : 1; // 右（東）にある場合は左に移動、左（西）にある場合は右に移動
                moveDx = originalDirectionX * Math.abs(dx) / distance * requiredDistance;
                moveDy = (dy / distance) * requiredDistance * 0.5; // 南北方向は補助的に調整
              } else {
                // 南北方向の位置関係がより重要
                const originalDirectionY = other.relativeDy > 0 ? -1 : 1; // 下（南）にある場合は上に移動、上（北）にある場合は下に移動
                moveDx = (dx / distance) * requiredDistance * 0.5; // 東西方向は補助的に調整
                moveDy = originalDirectionY * Math.abs(dy) / distance * requiredDistance;
              }
            } else {
              // 元の位置関係が不明な場合は、現在の位置関係を使用
              moveDx = (dx / distance) * requiredDistance;
              moveDy = (dy / distance) * requiredDistance;
            }
            
            const newX = currentX + moveDx;
            const newY = currentY + moveDy;
            
            // ペナルティを計算（元の位置からの距離 + 位置関係の違反度）
            const distanceFromOriginal = Math.sqrt(
              Math.pow(newX - originalX, 2) + Math.pow(newY - originalY, 2)
            );
            
            // 位置関係の違反度（元の位置関係からのずれ）
            const newCenterX = newX + nodeWidth / 2;
            const newCenterY = newY + nodeHeight / 2;
            const newRelativeDx = newCenterX - originalX;
            const newRelativeDy = newCenterY - originalY;
            
            // 元の位置関係の符号が変わった場合はペナルティを大きくする
            let relationPenalty = 0;
            if ((other.relativeDx > 0 && newRelativeDx < other.relativeDx) ||
                (other.relativeDx < 0 && newRelativeDx > other.relativeDx)) {
              relationPenalty += 1000; // 東西の位置関係が逆転
            }
            if ((other.relativeDy > 0 && newRelativeDy < other.relativeDy) ||
                (other.relativeDy < 0 && newRelativeDy > other.relativeDy)) {
              relationPenalty += 1000; // 南北の位置関係が逆転
            }
            
            const penalty = distanceFromOriginal + relationPenalty;
            
            if (penalty < minPenalty) {
              minPenalty = penalty;
              bestMoveX = newX;
              bestMoveY = newY;
            }
          } else {
            // 完全に重なっている場合、元の位置関係を考慮して移動
            // 元の位置関係に基づいて最小限の移動
            const requiredDistance = (nodeWidth + other.width) / 2 + padding;
            
            let moveDx = 0;
            let moveDy = 0;
            
            if (other.relativeDx !== 0 || other.relativeDy !== 0) {
              // 元の位置関係に基づいた方向を使用
              const directionX = other.relativeDx > 0 ? -1 : 1;
              const directionY = other.relativeDy > 0 ? -1 : 1;
              moveDx = directionX * requiredDistance;
              moveDy = directionY * requiredDistance;
            } else {
              // 元の位置関係が不明な場合は、ランダムに移動
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

      // 最適な移動位置を適用
      currentX = bestMoveX;
      currentY = bestMoveY;
    }

    return { x: currentX, y: currentY };
  }

  /**
   * エッジをノードペアでグループ化
   * 無向ペアキー（minId||maxId）でグループ化し、EdgePairを生成
   */
  private groupEdgesByPair(edges: Edge[]): EdgePair[] {
    const pairMap = new Map<string, EdgePair>();

    for (const edge of edges) {
      // 無向ペアキーを生成（辞書順で固定）
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

      // 最初のエッジからアンカー/折れ点情報を継承（A->B方向を基準）
      if (edge.src === a && edge.dst === b) {
        // A->B方向のエッジ
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
        // B->A方向のエッジ
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
   * EdgePairから方向性を判定
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
   * EdgePairのパスを計算（A->B方向を基準）
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
   * アンカーを自動推定
   * ノード中心から相手ノードへの方向に最も近い辺と位置を計算
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
   * エッジのポイント配列を取得 [start, ...bends, end]
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
   * エッジのパスを計算（アンカー考慮、折れ点対応）
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
   * EdgePairのマーカー属性を決定
   * 方向性に応じてmarker-start/marker-endを設定
   */
  private getEdgePairMarkerAttributes(pair: EdgePair): { markerStart?: string; markerEnd?: string } {
    const { hasAtoB, hasBtoA } = this.getEdgePairDirection(pair);

    const markers: { markerStart?: string; markerEnd?: string } = {};

    // A->B方向がある場合、終点に矢印
    if (hasAtoB) {
      markers.markerEnd = 'url(#arrow-end)';
    }

    // B->A方向がある場合、始点に矢印
    if (hasBtoA) {
      markers.markerStart = 'url(#arrow-start)';
    }

    return markers;
  }

  /**
   * エッジの選択を解除
   */
  private deselectEdge(): void {
    this.selectedEdgeId = null;
    this.anchorHandlesGroup.style.display = 'none';
    this.bendHandlesGroup.style.display = 'none';
    this.anchorHandles.clear();
    this.bendHandles.clear();
  }

  /**
   * エッジを選択
   */
  private selectEdge(edgeId: string, shiftKey: boolean): void {
    if (this.selectedEdgeId === edgeId && shiftKey) {
      // Shift+クリックでアンカーのsideを切り替え
      this.rotateAnchorSide(edgeId);
    } else {
      this.selectedEdgeId = edgeId;
      this.updateAnchorHandles();
      this.updateBendHandles();
    }
  }


  /**
   * アンカーのsideを時計回りに切り替え（Shift+クリック時）
   */
  private rotateAnchorSide(edgeId: string): void {
    const edge = this.edges.find(e => e.id === edgeId);
    if (!edge) {
      return;
    }

    // エッジが属するペアを取得
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

    // アンカーのsideを切り替え（ペアに保存）
    if (pair.srcAnchor) {
      pair.srcAnchor.side = getNextSide(pair.srcAnchor.side);
    }
    if (pair.dstAnchor) {
      pair.dstAnchor.side = getNextSide(pair.dstAnchor.side);
    }

    // ペアに属する全てのエッジにアンカー情報を同期
    for (const e of pair.edges) {
      if (e.src === pair.a && e.dst === pair.b) {
        // A->B方向
        e.srcAnchor = pair.srcAnchor;
        e.dstAnchor = pair.dstAnchor;
      } else {
        // B->A方向
        e.srcAnchor = pair.dstAnchor;
        e.dstAnchor = pair.srcAnchor;
      }
    }

    this.render();
    this.updateAnchorHandles();
    this.updateBendHandles();
  }

  /**
   * アンカーハンドルを更新
   */
  private updateAnchorHandles(): void {
    // 既存のハンドルをクリア
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

    // エッジが属するペアを取得
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

    // ハンドルを作成（エッジIDを使用 - 編集操作で使用するため）
    this.createAnchorHandle(edge.id, 'src', srcPos.x, srcPos.y);
    this.createAnchorHandle(edge.id, 'dst', dstPos.x, dstPos.y);

    this.anchorHandlesGroup.style.display = 'block';
    
    // Ensure handles are visible (z-index issues can hide them)
    this.anchorHandlesGroup.style.pointerEvents = 'auto';
  }

  /**
   * 折れ点ハンドルを更新
   */
  private updateBendHandles(): void {
    // 既存のハンドルをクリア
    this.bendHandles.clear();
    this.bendHandlesGroup.innerHTML = '';

    if (!this.selectedEdgeId || this.mode !== 'edit') {
      this.bendHandlesGroup.style.display = 'none';
      return;
    }

    const edge = this.edges.find(e => e.id === this.selectedEdgeId);
    if (!edge) {
      return;
    }

    // エッジが属するペアを取得
    const [a, b] = edge.src < edge.dst ? [edge.src, edge.dst] : [edge.dst, edge.src];
    const pairKey = `${a}||${b}`;
    const pair = this.groupEdgesByPair(this.edges).find(p => p.key === pairKey);
    if (!pair || !pair.bends || pair.bends.length === 0) {
      this.bendHandlesGroup.style.display = 'none';
      return;
    }

    // 各折れ点にハンドルを作成（エッジIDを使用 - 編集操作で使用するため）
    pair.bends.forEach((bend, index) => {
      this.createBendHandle(edge.id, index, bend.x, bend.y);
    });

    this.bendHandlesGroup.style.display = 'block';
    
    // Ensure handles are visible (z-index issues can hide them)
    this.bendHandlesGroup.style.pointerEvents = 'auto';
  }

  /**
   * アンカーハンドルを作成
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
   * 折れ点ハンドルを作成
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

    // ノード位置を更新
    if (!node.position) {
      node.position = { x: 0, y: 0 };
    }
    node.position.x = mouseX - this.draggingNode.offsetX;
    node.position.y = mouseY - this.draggingNode.offsetY;

    // 再描画
    this.render();
    this.updateAnchorHandles();
    this.updateBendHandles();
    this.debouncedSave();
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
    // Final render and save
    this.render();
    this.debouncedSave();
  }

  /**
   * Save snapshot before entering edit mode
   */
  private saveSnapshot(): void {
    // Deep clone nodes and edges
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

    this.render();
    this.deselectEdge();
  }

  /**
   * Update anchor position (during drag)
   */
  private updateAnchorPosition(e: PointerEvent): void {
    if (!this.draggingAnchor) {
      return;
    }

    // エッジIDからエッジを取得し、ペアを取得
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

    // 最も近い辺を決定
    let closestSide: NodeSide = 'right';
    let minDist = distances.right;
    for (const [side, dist] of Object.entries(distances)) {
      if (dist < minDist) {
        minDist = dist;
        closestSide = side as NodeSide;
      }
    }

    // 辺上の相対位置tを計算
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

    // アンカーを更新（ペアに保存）
    if (this.draggingAnchor.type === 'src') {
      pair.srcAnchor = { side: closestSide, t };
    } else {
      pair.dstAnchor = { side: closestSide, t };
    }

    // ペアに属する全てのエッジにアンカー情報を同期
    for (const edge of pair.edges) {
      if (edge.src === pair.a && edge.dst === pair.b) {
        // A->B方向
        edge.srcAnchor = pair.srcAnchor;
        edge.dstAnchor = pair.dstAnchor;
      } else {
        // B->A方向
        edge.srcAnchor = pair.dstAnchor;
        edge.dstAnchor = pair.srcAnchor;
      }
    }

    // 再描画
    this.render();
    this.updateAnchorHandles();
    this.updateBendHandles();
    this.debouncedSave();
  }

  /**
   * Update bend point position (during drag)
   */
  private updateBendPosition(e: PointerEvent): void {
    if (!this.draggingBend) {
      return;
    }

    // エッジIDからエッジを取得し、ペアを取得
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

    // 折れ点位置を更新（ペアに保存）
    pair.bends[bendIndex] = { x: mouseX, y: mouseY };

    // ペアに属する全てのエッジに折れ点情報を同期
    for (const edge of pair.edges) {
      edge.bends = [...pair.bends];
    }

    // 再描画
    this.render();
    this.updateBendHandles();
    this.debouncedSave();
  }

  /**
   * Insert bend point (on double click/tap)
   */
  private insertBendPoint(edgeId: string, e: MouseEvent | PointerEvent): void {
    const edge = this.edges.find(e => e.id === edgeId);
    if (!edge) {
      return;
    }

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

    // ペアのポイント配列を取得
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

    // 最も近いセグメントを見つける
    let nearestSegmentIndex = 0;
    let minDistance = Infinity;

    for (let i = 0; i < points.length - 1; i++) {
      const p1 = points[i];
      const p2 = points[i + 1];

      // 点から線分への距離を計算
      const distance = this.pointToLineSegmentDistance(clickX, clickY, p1.x, p1.y, p2.x, p2.y);
      if (distance < minDistance) {
        minDistance = distance;
        nearestSegmentIndex = i;
      }
    }

    // 新しい折れ点を作成（セグメントの中点に近い位置）
    const p1 = points[nearestSegmentIndex];
    const p2 = points[nearestSegmentIndex + 1];
    const newBend = {
      x: (p1.x + p2.x) / 2,
      y: (p1.y + p2.y) / 2,
    };

    // 折れ点配列を初期化（なければ）
    if (!pair.bends) {
      pair.bends = [];
    }

    // 折れ点を挿入（順序を保持）
    // 最も近いセグメントの後に挿入（startとendの間なので、nearestSegmentIndexの位置）
    pair.bends.splice(nearestSegmentIndex, 0, newBend);

    // ペアに属する全てのエッジに折れ点情報を同期
    for (const e of pair.edges) {
      e.bends = [...pair.bends];
    }

    // Ensure the edge is selected so that handles are displayed
    if (this.selectedEdgeId !== edgeId) {
      this.selectEdge(edgeId, false);
    }

    // 再描画
    this.render();
    this.updateBendHandles();
    this.debouncedSave();
  }

  /**
   * 点から線分への距離を計算
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
      // 線分が点の場合
      return Math.sqrt((px - x1) ** 2 + (py - y1) ** 2);
    }

    const t = Math.max(0, Math.min(1, ((px - x1) * dx + (py - y1) * dy) / lengthSquared));
    const projX = x1 + t * dx;
    const projY = y1 + t * dy;

    return Math.sqrt((px - projX) ** 2 + (py - projY) ** 2);
  }

  /**
   * 最も近い折れ点を削除（Delete/Backspace時）
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

    // エッジが属するペアを取得
    const [a, b] = edge.src < edge.dst ? [edge.src, edge.dst] : [edge.dst, edge.src];
    const pairKey = `${a}||${b}`;
    const pair = this.groupEdgesByPair(this.edges).find(p => p.key === pairKey);
    if (!pair || !pair.bends || pair.bends.length === 0) {
      return;
    }

    // 最後の折れ点を削除
    pair.bends.pop();

    // 折れ点がなくなったら配列を削除
    if (pair.bends.length === 0) {
      delete pair.bends;
    }

    // ペアに属する全てのエッジから折れ点情報を削除
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
    this.debouncedSave();
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

    // Render nodes (above edges)
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
      // Graphモードではノードの色をopacity 0.5で表示
      // RGBカラーコードをrgbaに変換
      const rgbMatch = nodeColor.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
      if (rgbMatch) {
        const r = parseInt(rgbMatch[1], 16);
        const g = parseInt(rgbMatch[2], 16);
        const b = parseInt(rgbMatch[3], 16);
        rect.setAttribute('fill', `rgba(${r}, ${g}, ${b}, 0.5)`);
      } else {
        // カラーコードがRGB形式でない場合は、そのまま使用
      rect.setAttribute('fill', nodeColor);
      }
      
      // Highlight selected node
      const isSelected = this.selectedNodeId === node.id;
      rect.setAttribute('stroke', isSelected ? '#2196f3' : borderColor);
      rect.setAttribute('stroke-width', isSelected ? '4' : '2');
      rect.setAttribute('rx', '4');
      rect.style.cursor = this.mode === 'view' ? 'pointer' : 'move';

      // Text label (折り返し対応)
      const foreignObject = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
      foreignObject.setAttribute('x', String(x));
      foreignObject.setAttribute('y', String(y));
      foreignObject.setAttribute('width', String(nodeWidth));
      foreignObject.setAttribute('height', String(nodeHeight));
      
      const labelDiv = document.createElement('div');
      labelDiv.style.width = '100%';
      labelDiv.style.height = '100%';
      labelDiv.style.display = 'flex';
      labelDiv.style.alignItems = 'flex-start'; // 上詰め
      labelDiv.style.justifyContent = 'center';
      labelDiv.style.textAlign = 'center';
      labelDiv.style.fontSize = '14px';
      labelDiv.style.color = '#333';
      labelDiv.style.padding = '4px';
      labelDiv.style.wordWrap = 'break-word';
      labelDiv.style.overflowWrap = 'break-word';
      labelDiv.style.whiteSpace = 'normal';
      labelDiv.style.overflow = 'hidden';
      labelDiv.style.textOverflow = 'ellipsis'; // はみ出した部分を省略
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
          e.stopPropagation(); // 空いている場所のクリックイベントを防ぐ
          e.preventDefault(); // デフォルト動作を防ぐ
          
          const svgRect = this.svg.getBoundingClientRect();
          const clickX = e.clientX - svgRect.left;
          const clickY = e.clientY - svgRect.top;

          // onNodeClickコールバックを呼び出す（ポップアップ表示処理はコールバック内で行う）
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
      const labelBx = start.x + (end.x - start.x) * (1 - labelOffsetRatio);
      const labelBy = start.y + (end.y - start.y) * (1 - labelOffsetRatio);
      const labelAx = start.x + (end.x - start.x) * labelOffsetRatio;
      const labelAy = start.y + (end.y - start.y) * labelOffsetRatio;
      
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
      const midX = (start.x + end.x) / 2;
      const midY = (start.y + end.y) / 2;
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
      const midX = (start.x + end.x) / 2;
      const midY = (start.y + end.y) / 2;
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
   * モードを設定
   */
  setMode(mode: GraphMode): void {
    if (!this.editable && mode === 'edit') {
      // Cannot switch to edit mode if not editable
      return;
    }

    // Save snapshot before entering edit mode
    if (mode === 'edit' && this.mode === 'view') {
      this.saveSnapshot();
    }

    this.mode = mode;
    // Re-render on mode change (cursor styles, etc.)
    this.render();
    if (mode === 'view') {
      this.deselectEdge();
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
   * 編集可能かどうかを取得
   */
  isEditable(): boolean {
    return this.editable;
  }

  /**
   * 編集モード切り替えボタンを取得
   */
  getEditToggleButton(): HTMLElement | null {
    return this.editToggleButton;
  }

  /**
   * モードを取得
   */
  getMode(): GraphMode {
    return this.mode;
  }

  /**
   * Viewを表示
   */
  show(): void {
    this.container.style.display = 'block';
    // データが設定されている場合、Fit操作を実行（初期状態でFitされた状態にする）
    // これにより、Graphが初期表示時または他のビューから切り替えた時にFitされた状態になる
    if (this.nodes.length > 0) {
      // コンテナのサイズが有効になるまで少し待つ
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
   * ポップアップを作成
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
    
    // ポップアップの矢印（下部中央）
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
   * ポップアップを表示
   */
  private showPopup(node: Node): void {
    if (!node || !node.position) {
      return;
    }

    // 既存のポップアップを閉じる
    this.hidePopup();

    // ポップアップ要素を作成（まだない場合）
    if (!this.popupElement) {
      this.popupElement = this.createPopup();
    }

    // ポップアップの内容を設定
    this.popupElement.textContent = node.label;
    this.popupElement.style.opacity = '1';
    this.popupElement.style.display = 'block';
    this.popupNodeId = node.id;

    // ポップアップの位置を更新（少し遅延させて、DOMが更新された後に位置を計算）
    // requestAnimationFrameを使用して、次のフレームで位置を更新
    requestAnimationFrame(() => {
      if (this.popupElement && this.popupNodeId === node.id) {
        this.updatePopupPosition(node);
      }
    });
  }

  /**
   * ポップアップの位置を更新
   */
  private updatePopupPosition(node: Node): void {
    if (!this.popupElement || !node || !node.position) {
      return;
    }

    const nodeStyle = node.style || {};
    const nodeWidth = nodeStyle.width || this.DEFAULT_NODE_WIDTH;
    const nodeHeight = nodeStyle.height || this.DEFAULT_NODE_HEIGHT;

    // ノードの実際の画面位置を取得（SVG要素から直接取得）
    const nodeRect = this.nodeElements.get(node.id);
    if (!nodeRect) {
      // nodeRectが取得できない場合、SVG座標から計算
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

    // ノードのrect要素の実際の画面座標を取得
    const rectBounds = nodeRect.getBoundingClientRect();
    const containerRect = this.container.getBoundingClientRect();
    
    // ノードの中心位置（画面座標、コンテナ相対）
    const nodeCenterX = rectBounds.left + rectBounds.width / 2 - containerRect.left;
    const nodeCenterY = rectBounds.top + rectBounds.height / 2 - containerRect.top;

    // ポップアップのサイズを取得
    const popupRect = this.popupElement.getBoundingClientRect();
    const popupWidth = popupRect.width || 200;
    const popupHeight = popupRect.height || 50;

    // ノードの上にポップアップを配置（中央揃え）
    const popupX = nodeCenterX - popupWidth / 2;
    const popupY = nodeCenterY - rectBounds.height / 2 - popupHeight - 10; // ノードの上10px

    this.popupElement.style.left = `${popupX}px`;
    this.popupElement.style.top = `${popupY}px`;
  }

  /**
   * ポップアップを閉じる
   */
  private hidePopup(): void {
    if (this.popupElement) {
      this.popupElement.style.opacity = '0';
      // すぐに削除せず、トランジション完了後に非表示にする
      setTimeout(() => {
        if (this.popupElement && this.popupElement.style.opacity === '0') {
          this.popupElement.style.display = 'none';
        }
      }, 200);
    }
    this.popupNodeId = null;
  }

  /**
   * Viewを非表示
   */
  hide(): void {
    this.container.style.display = 'none';
    this.hidePopup();
  }

  /**
   * リサイズ
   */
  resize(): void {
    const rect = this.container.getBoundingClientRect();
    this.svg.setAttribute('width', String(rect.width));
    this.svg.setAttribute('height', String(rect.height));
    
    // ポップアップの位置を更新
    if (this.popupNodeId && this.popupElement) {
      const node = this.nodes.find(n => n.id === this.popupNodeId);
      if (node) {
        this.updatePopupPosition(node);
      }
    }
  }

  /**
   * 破棄
   */
  destroy(): void {
    this.nodeElements.clear();
    this.edgeElements.clear();
    if (this.container.contains(this.svg)) {
      this.container.removeChild(this.svg);
    }
  }
}