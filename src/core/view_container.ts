/**
 * Relatos Viewer - View Container
 * Manages tab UI and view switching
 */

import type { ViewType, Node, Edge } from '../types';
import type { Group } from '../types/data';
import type { TableOptions } from '../types/options';
import { injectSvgSprite } from '../assets/icons/icons-embedded';
import { copyToClipboard } from '../utils/clipboard';
import { exportRelat } from '../utils/relat';

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

/** Get nested value by dot-separated path (e.g. "a.b.c"). */
function getNested(obj: Record<string, unknown> | undefined, path: string): unknown {
  if (!obj) return undefined;
  const parts = path.split('.');
  let current: unknown = obj;
  for (const p of parts) {
    if (current == null || typeof current !== 'object') return undefined;
    current = (current as Record<string, unknown>)[p];
  }
  return current;
}

/** Flatten object to "prefix.key: value" lines; nested as prefix.k1.k2: value. */
function flattenToDisplayString(obj: Record<string, unknown> | undefined, prefix: string): string {
  if (!obj || typeof obj !== 'object') return '';
  const lines: string[] = [];
  function walk(o: Record<string, unknown>, path: string) {
    for (const [key, value] of Object.entries(o)) {
      const fullPath = path ? `${path}.${key}` : key;
      if (value != null && typeof value === 'object' && !Array.isArray(value) && !(value instanceof Date)) {
        walk(value as Record<string, unknown>, fullPath);
      } else {
        lines.push(`${prefix}.${fullPath}: ${value === undefined || value === null ? '' : String(value)}`);
      }
    }
  }
  walk(obj, '');
  return lines.join('\n');
}

/**
 * Base View interface
 */
export interface View {
  /**
   * Show view
   */
  show(): void;

  /**
   * Hide view
   */
  hide(): void;

  /**
   * Resize view
   */
  resize(): void;

  /**
   * Destroy view
   */
  destroy(): void;

  /**
   * Check if view is editable
   */
  isEditable?(): boolean;

  /**
   * Get edit mode toggle button container
   */
  getEditToggleButton?(): HTMLElement | null;

  /**
   * Select node (highlight)
   * @param nodeId Node ID to select (null to deselect)
   */
  selectNode?(nodeId: string | null): void;

  /**
   * Get always show edges state
   */
  getAlwaysShowEdges?(): boolean;

  /**
   * Set always show edges state
   */
  setAlwaysShowEdges?(enabled: boolean): void;

  /**
   * Get lighting state (for Map2D/Globe3D)
   */
  getLightingEnabled?(): boolean;

  /**
   * Set lighting state (for Map2D/Globe3D)
   */
  setLightingEnabled?(enabled: boolean): void;

  /**
   * Set time (for Map2D/Globe3D)
   */
  setTime?(timeISO: string): void;

  /**
   * Get number of available tile servers (for Map2D/Globe3D with custom tiles)
   */
  getTileServerCount?(): number;

  /**
   * Get current tile server index (0-based, for Map2D/Globe3D with custom tiles)
   */
  getTileServerIndex?(): number;

  /**
   * Set current tile server index (0-based, for Map2D/Globe3D with custom tiles)
   */
  setTileServerIndex?(index: number): void;

  /**
   * Cycle to next tile server (for Map2D/Globe3D with custom tiles)
   */
  cycleTileServer?(): void;

  /**
   * Fit and center view (all views)
   */
  fitAndCenter?(): void;


  /**
   * Delete nearest bend point (Graph only)
   */
  deleteNearestBendPoint?(): void;

  /**
   * Cancel edit mode (Graph only)
   */
  cancelEdit?(): void;

  /**
   * Undo last edit (Graph edit mode only)
   */
  undo?(): void;

  /**
   * Redo last undone edit (Graph edit mode only)
   */
  redo?(): void;

  /**
   * Whether undo is available (Graph edit mode only)
   */
  canUndo?(): boolean;

  /**
   * Whether redo is available (Graph edit mode only)
   */
  canRedo?(): boolean;

  /**
   * Get current view as SVG string (Graph only; others return null)
   */
  getViewAsSvg?(): string | null;

  /**
   * Export current view as image blob (Graph: SVG→canvas; Map2D/Globe3D: canvas)
   */
  exportViewToImage?(format: 'png' | 'webp', options?: { quality?: number }): Promise<Blob | null>;
}

/**
 * ViewContainer class
 * Manages tab UI and view switching
 */
export class ViewContainer {
  private container: HTMLElement;
  private tabContainer: HTMLElement;
  private viewContainer: HTMLElement;
  private enabledViews: ViewType[];
  private currentView: ViewType | null = null;
  private views: Map<ViewType, View> = new Map();
  private tabButtons: Map<ViewType, HTMLButtonElement> = new Map();
  private editToggleButton: HTMLButtonElement | null = null;
  // Common control buttons container (shared across views)
  private commonControlsContainer!: HTMLElement;
  private alwaysShowEdgesButton: HTMLButtonElement | null = null;
  private lightingToggleButton: HTMLButtonElement | null = null;
  private tileTypeButton: HTMLButtonElement | null = null;
  private moonToggleButton: HTMLButtonElement | null = null; // Moon toggle button (Map2D only)
  private fitCenterButton: HTMLButtonElement | null = null; // Fit and center button (all views)
  private deleteBendButton: HTMLButtonElement | null = null; // Delete bend point button (Graph only)
  private undoButton: HTMLButtonElement | null = null; // Undo button (Graph edit only)
  private redoButton: HTMLButtonElement | null = null; // Redo button (Graph edit only)
  private cancelEditButton: HTMLButtonElement | null = null; // Cancel edit button (Graph only)
  private exportButton: HTMLButtonElement | null = null; // relat export (copy to clipboard) button
  private tableContainer: HTMLElement | null = null;
  private nodesTableContainer: HTMLElement | null = null;
  private edgesTableContainer: HTMLElement | null = null;
  private groupsTableContainer: HTMLElement | null = null;
  private tableOptions: TableOptions | null = null;
  private nodes: Node[] = [];
  private edges: Edge[] = [];
  private groups: Group[] = [];
  private isExternalTableContainer: boolean = false; // Whether using external container
  private hasEdges: boolean = false; // Whether edges exist
  private onNodeClickCallback?: (event: import('../types/events').NodeClickEvent) => void; // Callback for table row clicks
  
  // Shared toggle button states across views
  // Note: GraphView default is false, but Map2D/Globe3D default is true
  // We use true as the shared default to match Map2D/Globe3D
  private sharedAlwaysShowEdges: boolean = false; // Default: false (all toggles off)
  private sharedLightingEnabled: boolean = false; // Default: false
  private sharedTime: string | null = null; // Shared time for Map2D/Globe3D
  // Shared tile server index for Map2D/Globe3D custom tile servers
  private sharedTileServerIndex: number = 0;

  constructor(container: HTMLElement, enabledViews: ViewType[]) {
    this.container = container;
    this.enabledViews = enabledViews;
    
    // Inject SVG sprite on initialization
    injectSvgSprite();

    // Container style setup
    this.container.style.display = 'flex';
    this.container.style.flexDirection = 'column';
    this.container.style.width = '100%';
    // Height depends on parent element (explicitly set by parent)

    // Create tab container (transparent background, overlaid on view)
    this.tabContainer = document.createElement('div');
    this.tabContainer.style.display = 'flex';
    this.tabContainer.style.gap = '4px';
    this.tabContainer.style.padding = '8px';
    this.tabContainer.style.borderBottom = 'none'; // Remove border
    this.tabContainer.style.backgroundColor = 'transparent'; // Make background transparent
    this.tabContainer.style.position = 'absolute'; // Absolute positioning to overlay on view
    this.tabContainer.style.top = '0';
    this.tabContainer.style.left = '0';
    this.tabContainer.style.right = '0';
    this.tabContainer.style.zIndex = '1000'; // Ensure buttons are above views
    this.tabContainer.style.pointerEvents = 'auto'; // Toolbar must receive events (buttons need to be clickable)

    // Create view container (extends to full height including tab area)
    this.viewContainer = document.createElement('div');
    this.viewContainer.style.flex = '1 1 0%'; // flex-grow: 1, flex-shrink: 1, flex-basis: 0%
    this.viewContainer.style.position = 'relative'; // Relative positioning for absolute children
    this.viewContainer.style.overflow = 'hidden';
    this.viewContainer.style.minHeight = '0'; // Ensure flexbox child height is calculated correctly

    // Create tab buttons
    this.createTabButtons();

    // Create common control buttons container
    this.createCommonControlsContainer();

    // Create edit toggle button (in common controls)
    // Note: createEditToggleButton is already called in createCommonControlsContainer

    // Append to DOM
    this.container.appendChild(this.viewContainer);
    // Append tabContainer as child of viewContainer (absolutely positioned relative to viewContainer)
    this.viewContainer.appendChild(this.tabContainer);
  }

  /**
   * Initialize table display options
   */
  setTableOptions(tableOptions: TableOptions | null): void {
    this.tableOptions = tableOptions;
    if (tableOptions && (tableOptions.nodes?.format || tableOptions.edges?.format || tableOptions.groups?.format)) {
      this.createTableContainer();
    } else if (this.tableContainer) {
      // Remove table if not needed
      // If using external container, don't remove it (not created by relatos)
      if (this.isExternalTableContainer) {
        // Only clear content of existing container
        this.tableContainer.innerHTML = '';
        this.tableContainer = null;
        this.isExternalTableContainer = false;
      } else if (this.container.contains(this.tableContainer)) {
        // Remove container created by relatos
        this.container.removeChild(this.tableContainer);
        this.tableContainer = null;
      }
      this.nodesTableContainer = null;
      this.edgesTableContainer = null;
      this.groupsTableContainer = null;
    }
  }

  /**
   * Set onNodeClick callback (called on table row click)
   */
  setOnNodeClickCallback(callback: (event: import('../types/events').NodeClickEvent) => void): void {
    this.onNodeClickCallback = callback;
  }

  /**
   * Create table container
   */
  private createTableContainer(): void {
    if (this.tableContainer) {
      return; // Already created
    }

    // Use existing container if options.tables.container is specified
    if (this.tableOptions && 'container' in this.tableOptions && this.tableOptions.container) {
      const containerSelector = this.tableOptions.container;
      let container: HTMLElement | null = null;
      
      if (typeof containerSelector === 'string') {
        container = document.querySelector(containerSelector);
      } else if (containerSelector instanceof HTMLElement) {
        container = containerSelector;
      }
      
      if (container) {
        this.tableContainer = container;
        this.isExternalTableContainer = true;
        return;
      }
    }

    // Create new container if no existing container
    this.tableContainer = document.createElement('div');
    this.tableContainer.style.height = '300px';
    this.tableContainer.style.overflowY = 'auto';
    this.tableContainer.style.backgroundColor = '#fff';
    this.tableContainer.style.borderTop = '1px solid #ddd';
    this.isExternalTableContainer = false;

    this.container.appendChild(this.tableContainer);
  }

  /**
   * Set node, edge, and group data
   */
  setData(nodes: Node[], edges: Edge[], groups?: Group[]): void {
    this.nodes = nodes;
    this.edges = edges;
    this.groups = groups || [];
    this.hasEdges = Array.isArray(edges) && edges.length > 0;
    this.updateTables();
    this.updateAlwaysShowEdgesButtonVisibility();
  }

  /**
   * Get current data (nodes, edges, groups)
   */
  getData(): { nodes: Node[]; edges: Edge[]; groups: Group[] } {
    return {
      nodes: this.nodes,
      edges: this.edges,
      groups: this.groups,
    };
  }

  /**
   * Update tables
   */
  private updateTables(): void {
    if (!this.tableOptions || !this.tableContainer) {
      return;
    }

    // Clear existing tables
    this.tableContainer.innerHTML = '';

    // Display node table
    if (this.tableOptions.nodes?.format) {
      this.nodesTableContainer = this.createTable('nodes', this.tableOptions.nodes.header || '', this.tableOptions.nodes.format, this.nodes, 'node');
      const nodeSection = this.wrapTableSection(this.nodesTableContainer, this.tableOptions.nodes.sectionTitle);
      this.tableContainer.appendChild(nodeSection);
    }

    // Display edge table
    if (this.tableOptions.edges?.format) {
      this.edgesTableContainer = this.createTable('edges', this.tableOptions.edges.header || '', this.tableOptions.edges.format, this.edges, 'edge');
      const edgeSection = this.wrapTableSection(this.edgesTableContainer, this.tableOptions.edges.sectionTitle);
      this.tableContainer.appendChild(edgeSection);
    }

    // Display group table
    if (this.tableOptions.groups?.format) {
      this.groupsTableContainer = this.createTable('groups', this.tableOptions.groups.header || '', this.tableOptions.groups.format, this.groups, 'group');
      const groupSection = this.wrapTableSection(this.groupsTableContainer, this.tableOptions.groups.sectionTitle);
      this.tableContainer.appendChild(groupSection);
    }
  }

  private wrapTableSection(tableElement: HTMLElement, sectionTitle?: string): HTMLElement {
    const section = document.createElement('div');
    section.className = 'relatos-table-section';
    if (sectionTitle) {
      const h3 = document.createElement('h3');
      h3.textContent = sectionTitle;
      h3.style.margin = '0 0 8px 0';
      h3.style.padding = '8px 12px 0';
      h3.style.fontSize = '14px';
      h3.style.color = '#333';
      section.appendChild(h3);
    }
    section.appendChild(tableElement);
    return section;
  }

  /**
   * Create table
   */
  private createTable(
    id: string,
    header: string,
    format: string,
    data: Node[] | Edge[] | Group[],
    rowIdPrefix: 'node' | 'edge' | 'group'
  ): HTMLElement {
    const tableContainer = document.createElement('div');
    const table = document.createElement('table');
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';

    // Add table styles (for highlighting)
    if (!document.getElementById('relatos-table-styles')) {
      const style = document.createElement('style');
      style.id = 'relatos-table-styles';
      style.textContent = `
        .relatos-table tr {
          border-bottom: 1px solid #ddd;
        }
        .relatos-table tr:hover {
          background-color: #f9f9f9;
        }
        .relatos-table tr.highlight {
          background-color: #fff9c4;
          animation: relatos-highlight-fade 2s ease-out;
        }
        @keyframes relatos-highlight-fade {
          from {
            background-color: #fff9c4;
          }
          to {
            background-color: transparent;
          }
        }
        .relatos-table th,
        .relatos-table td {
          padding: 12px;
          text-align: left;
        }
        .relatos-table th {
          background-color: #f5f5f5;
          font-weight: 600;
          color: #333;
          position: sticky;
          top: 0;
          z-index: 1;
        }
      `;
      document.head.appendChild(style);
    }
    table.className = 'relatos-table';

    // Header
    const thead = document.createElement('thead');
    if (header) {
      thead.innerHTML = header;
    } else {
      // Default header (empty if format cannot be inferred)
      const tr = document.createElement('tr');
      thead.appendChild(tr);
    }
    table.appendChild(thead);

    // Body
    const tbody = document.createElement('tbody');
    for (const item of data) {
      const row = document.createElement('tr');
      row.id = `${rowIdPrefix}-${item.id}`;
      row.style.cursor = 'pointer';

      // Process HTML format
      let rowHtml = format;
      
      // Embed data ({{fieldName}} format)
      // {{info}}: full flattened "info.key: value" / "info.k1.k2: value"
      rowHtml = rowHtml.replace(/\{\{info\}\}/g, () =>
        flattenToDisplayString('info' in item ? (item.info as Record<string, unknown> | undefined) : undefined, 'info')
      );
      rowHtml = rowHtml.replace(/\{\{info\.([^}]+)\}\}/g, (_, path: string) =>
        String(getNested('info' in item ? (item.info as Record<string, unknown>) : undefined, path) ?? '')
      );
      // {{meta}}: full flattened "meta.key: value" (Group etc.)
      rowHtml = rowHtml.replace(/\{\{meta\}\}/g, () =>
        flattenToDisplayString('meta' in item ? (item.meta as Record<string, unknown> | undefined) : undefined, 'meta')
      );
      rowHtml = rowHtml.replace(/\{\{meta\.([^}]+)\}\}/g, (_, path: string) =>
        String(getNested('meta' in item ? (item.meta as Record<string, unknown>) : undefined, path) ?? '')
      );
      
      // Then embed Node/Edge basic fields ({{fieldName}} format)
      // This allows access to both standard fields and info fields
      rowHtml = rowHtml.replace(/\{\{id\}\}/g, String(item.id || ''));
      rowHtml = rowHtml.replace(/\{\{label\}\}/g, String('label' in item ? (item.label || '') : ''));

      // position field (Node only, Graph) and layout shorthand {{x}}, {{y}}
      if ('position' in item && item.position && typeof item.position === 'object') {
        const pos = item.position as { x?: number; y?: number };
        rowHtml = rowHtml.replace(/\{\{position\.x\}\}/g, String(pos.x ?? ''));
        rowHtml = rowHtml.replace(/\{\{position\.y\}\}/g, String(pos.y ?? ''));
        rowHtml = rowHtml.replace(/\{\{x\}\}/g, String(pos.x ?? ''));
        rowHtml = rowHtml.replace(/\{\{y\}\}/g, String(pos.y ?? ''));
      }
      
      // coordinates field (Node only). {{lat}}/{{lon}} are relat keywords; {{latitude}}/{{longitude}} kept for backward compat.
      if ('coordinates' in item && item.coordinates) {
        rowHtml = rowHtml.replace(/\{\{coordinates\.0\}\}/g, String(item.coordinates[0] || ''));
        rowHtml = rowHtml.replace(/\{\{coordinates\.1\}\}/g, String(item.coordinates[1] || ''));
        rowHtml = rowHtml.replace(/\{\{lat\}\}/g, String(item.coordinates[0] || ''));
        rowHtml = rowHtml.replace(/\{\{lon\}\}/g, String(item.coordinates[1] || ''));
        rowHtml = rowHtml.replace(/\{\{latitude\}\}/g, String(item.coordinates[0] || ''));
        rowHtml = rowHtml.replace(/\{\{longitude\}\}/g, String(item.coordinates[1] || ''));
      }

      // style fields (Node/Edge/Group common, optional) and primary weight (Edge)
      if ((item as any).style && typeof (item as any).style === 'object') {
        const style: any = (item as any).style;
        rowHtml = rowHtml.replace(/\{\{style\.color\}\}/g, String(style.color ?? ''));
        rowHtml = rowHtml.replace(/\{\{style\.borderColor\}\}/g, String(style.borderColor ?? ''));
        rowHtml = rowHtml.replace(/\{\{style\.width\}\}/g, String(style.width ?? ''));
        rowHtml = rowHtml.replace(/\{\{style\.height\}\}/g, String(style.height ?? ''));
        rowHtml = rowHtml.replace(/\{\{style\.weight\}\}/g, String(style.weight ?? ''));
        rowHtml = rowHtml.replace(/\{\{style\.label\}\}/g, String(style.label ?? ''));
        rowHtml = rowHtml.replace(/\{\{style\.srcLabel\}\}/g, String(style.srcLabel ?? ''));
        rowHtml = rowHtml.replace(/\{\{style\.dstLabel\}\}/g, String(style.dstLabel ?? ''));
        rowHtml = rowHtml.replace(/\{\{style\.borderDash\}\}/g, String(style.borderDash ?? ''));
        rowHtml = rowHtml.replace(/\{\{style\.dash\}\}/g, String(style.borderDash ?? ''));
        rowHtml = rowHtml.replace(/\{\{weight\}\}/g, String(style.weight ?? ''));
      }
      // Node layout shorthand {{w}}, {{h}} from style (Node only; Group uses layout)
      if (!('nodeIds' in item) && (item as any).style && typeof (item as any).style === 'object') {
        const style: any = (item as any).style;
        rowHtml = rowHtml.replace(/\{\{w\}\}/g, String(style.width ?? ''));
        rowHtml = rowHtml.replace(/\{\{h\}\}/g, String(style.height ?? ''));
      }

      // Other basic fields (Edge specific)
      if ('src' in item) {
        rowHtml = rowHtml.replace(/\{\{src\}\}/g, String(item.src || ''));
        rowHtml = rowHtml.replace(/\{\{dst\}\}/g, String(item.dst || ''));
        rowHtml = rowHtml.replace(/\{\{relType\}\}/g, String(item.relType || ''));
      }
      // Edge layout: anchors (src_side, src_t, dst_side, dst_t)
      const edgeItem = item as { srcAnchor?: { side?: string; t?: number }; dstAnchor?: { side?: string; t?: number }; anchors?: { src?: { side?: string; t?: number }; dst?: { side?: string; t?: number } } };
      const srcAnchor = edgeItem.srcAnchor ?? edgeItem.anchors?.src;
      const dstAnchor = edgeItem.dstAnchor ?? edgeItem.anchors?.dst;
      rowHtml = rowHtml.replace(/\{\{src_side\}\}/g, String(srcAnchor?.side ?? ''));
      rowHtml = rowHtml.replace(/\{\{src_t\}\}/g, String(srcAnchor?.t ?? ''));
      rowHtml = rowHtml.replace(/\{\{dst_side\}\}/g, String(dstAnchor?.side ?? ''));
      rowHtml = rowHtml.replace(/\{\{dst_t\}\}/g, String(dstAnchor?.t ?? ''));
      rowHtml = rowHtml.replace(/\{\{src\.x\}\}/g, '');
      rowHtml = rowHtml.replace(/\{\{src\.y\}\}/g, '');
      rowHtml = rowHtml.replace(/\{\{dst\.x\}\}/g, '');
      rowHtml = rowHtml.replace(/\{\{dst\.y\}\}/g, '');
      if ('src' in item) {
        const bends = (item as any).bends;
        const bendsStr = Array.isArray(bends) && bends.length > 0
          ? (bends as Array<{ x: number; y: number }>).map(b => `{x=${b.x},y=${b.y}}`).join(', ')
          : '';
        rowHtml = rowHtml.replace(/\{\{bends\}\}/g, bendsStr);
      }

      // Group specific fields
      if ('nodeIds' in item) {
        const group = item as Group;
        const childGroupIds = Array.isArray(data)
          ? (data as Group[]).filter((g: Group) => g.parentId === group.id).map((g: Group) => g.id)
          : [];
        rowHtml = rowHtml.replace(/\{\{nodeIds\}\}/g, String(group.nodeIds?.join(', ') || ''));
        rowHtml = rowHtml.replace(/\{\{nodeCount\}\}/g, String(group.nodeIds?.length || 0));
        rowHtml = rowHtml.replace(/\{\{groupIds\}\}/g, String(childGroupIds.join(', ') || ''));
        rowHtml = rowHtml.replace(/\{\{groupCount\}\}/g, String(childGroupIds.length || 0));
        rowHtml = rowHtml.replace(/\{\{parentId\}\}/g, String(group.parentId || ''));
        // layout fields and shorthand {{x}}, {{y}}, {{w}}, {{h}}
        if (group.layout) {
          rowHtml = rowHtml.replace(/\{\{layout\.position\.x\}\}/g, String(group.layout.position.x || ''));
          rowHtml = rowHtml.replace(/\{\{layout\.position\.y\}\}/g, String(group.layout.position.y || ''));
          rowHtml = rowHtml.replace(/\{\{layout\.size\.width\}\}/g, String(group.layout.size.width || ''));
          rowHtml = rowHtml.replace(/\{\{layout\.size\.height\}\}/g, String(group.layout.size.height || ''));
          rowHtml = rowHtml.replace(/\{\{x\}\}/g, String(group.layout.position.x ?? ''));
          rowHtml = rowHtml.replace(/\{\{y\}\}/g, String(group.layout.position.y ?? ''));
          rowHtml = rowHtml.replace(/\{\{w\}\}/g, String(group.layout.size.width ?? ''));
          rowHtml = rowHtml.replace(/\{\{h\}\}/g, String(group.layout.size.height ?? ''));
        }
      }

      // 未解決の {{...}} プレースホルダーを空白に置換（値がない項目を info/nodeIds と同様に空白表示）
      rowHtml = rowHtml.replace(/\{\{[^}]*\}\}/g, '');

      row.innerHTML = rowHtml;

      // Click event
      row.addEventListener('click', () => {
        if (rowIdPrefix === 'node') {
          this.highlightAndScrollToRow(row);
          // Call selectNode only on the current active view
          if (!this.currentView) {
            return;
          }
          const currentView = this.views.get(this.currentView);
          if (currentView?.selectNode) {
            currentView.selectNode(item.id);
          }
        }
      });

      tbody.appendChild(row);
    }
    table.appendChild(tbody);
    tableContainer.appendChild(table);

    return tableContainer;
  }

  /**
   * Highlight row and scroll to it
   */
  private highlightAndScrollToRow(row: HTMLTableRowElement): void {
    // Remove existing highlight
    const existingHighlight = this.tableContainer?.querySelector('.highlight');
    if (existingHighlight) {
      existingHighlight.classList.remove('highlight');
    }

    // Add highlight
    row.classList.add('highlight');
    
    // Remove highlight after animation
    setTimeout(() => {
      row.classList.remove('highlight');
    }, 2000);

    // Scroll
    row.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  /**
   * Highlight row based on node ID (called from onNodeClick)
   */
  highlightNodeRow(nodeId: string | null): void {
    if (!nodeId || !this.tableContainer) {
      return;
    }

    const row = this.tableContainer.querySelector(`#node-${nodeId}`) as HTMLTableRowElement;
    if (row) {
      this.highlightAndScrollToRow(row);
    }
  }

  /**
   * Highlight rows based on multiple node IDs (called from onEdgeClick)
   * Scrolls to first node
   */
  highlightNodeRows(nodeIds: string[]): void {
    if (!nodeIds || nodeIds.length === 0 || !this.tableContainer) {
      return;
    }

    // Remove existing highlights
    const existingHighlights = this.tableContainer.querySelectorAll('.highlight');
    existingHighlights.forEach(el => el.classList.remove('highlight'));

    // Highlight all node rows
    let firstRow: HTMLTableRowElement | null = null;
    for (const nodeId of nodeIds) {
      const row = this.tableContainer?.querySelector(`#node-${nodeId}`) as HTMLTableRowElement;
      if (row) {
        row.classList.add('highlight');
        if (!firstRow) {
          firstRow = row;
        }
        // Remove highlight after animation
        setTimeout(() => {
          row.classList.remove('highlight');
        }, 2000);
      }
    }

    // Scroll to first node
    if (firstRow) {
      firstRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  /**
   * Highlight row and scroll based on edge ID (called from onEdgeClick)
   */
  highlightEdgeRow(edgeId: string | null): void {
    if (!edgeId || !this.tableContainer) {
      return;
    }

    const row = this.tableContainer.querySelector(`#edge-${edgeId}`) as HTMLTableRowElement;
    if (row) {
      this.highlightAndScrollToRow(row);
    }
  }

  /**
   * Highlight row and scroll based on group ID (called from onGroupClick)
   */
  highlightGroupRow(groupId: string | null): void {
    if (!groupId || !this.tableContainer) {
      return;
    }

    const row = this.tableContainer.querySelector(`#group-${groupId}`) as HTMLTableRowElement;
    if (row) {
      this.highlightAndScrollToRow(row);
    }
  }

  /**
   * Create common control buttons container (shared across views)
   */
  private createCommonControlsContainer(): void {
    this.commonControlsContainer = document.createElement('div');
    this.commonControlsContainer.style.display = 'flex';
    this.commonControlsContainer.style.gap = '4px';
    this.commonControlsContainer.style.marginLeft = 'auto';
    this.commonControlsContainer.style.pointerEvents = 'auto';
    
    // Create common control buttons in order:
    // For Graph: Cancel, Edit toggle, Always show edges, Fit/Center
    // For Map2D/Globe3D: Lighting toggle, Tile type, Always show edges, Fit/Center
    this.createCancelEditButton();
    this.createUndoButton();
    this.createRedoButton();
    this.createEditToggleButton();
    this.createAlwaysShowEdgesButton();
    this.createDeleteBendButton();
    this.createLightingToggleButton();
    this.createTileTypeButton();
    this.createMoonToggleButton();
    this.createFitCenterButton();
    this.createExportButton();
    
    this.tabContainer.appendChild(this.commonControlsContainer);
  }

  /**
   * Create edit toggle button (in common controls)
   */
  private createEditToggleButton(): void {
    // Button is initially hidden (shown only when graph view is editable)
    this.editToggleButton = document.createElement('button');
    this.editToggleButton.className = 'relatos-edit-toggle';
    this.editToggleButton.style.padding = '6px';
    this.editToggleButton.style.border = '1px solid #ccc';
    this.editToggleButton.style.borderRadius = '4px';
    this.editToggleButton.style.backgroundColor = '#fff';
    this.editToggleButton.style.cursor = 'pointer';
    this.editToggleButton.style.fontSize = '16px';
    this.editToggleButton.style.width = '32px';
    this.editToggleButton.style.height = '32px';
    this.editToggleButton.style.display = 'none';
    this.editToggleButton.style.alignItems = 'center';
    this.editToggleButton.style.justifyContent = 'center';
    this.editToggleButton.style.pointerEvents = 'auto';
    this.editToggleButton.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    this.editToggleButton.style.transition = '0.2s';
    this.editToggleButton.style.color = '#333';
    
    // Insert at the beginning (left of icon-relations button)
    this.commonControlsContainer.insertBefore(this.editToggleButton, this.commonControlsContainer.firstChild);
  }

  /**
   * Create always show edges button (in common controls)
   */
  private createAlwaysShowEdgesButton(): void {
    this.alwaysShowEdgesButton = document.createElement('button');
    this.alwaysShowEdgesButton.className = 'relatos-always-show-edges-toggle';
    this.alwaysShowEdgesButton.innerHTML = createSvgIcon('icon-relations', 16);
    this.alwaysShowEdgesButton.setAttribute('aria-label', 'Toggle edges');
    this.alwaysShowEdgesButton.setAttribute('title', 'Toggle edges');
    this.alwaysShowEdgesButton.style.padding = '6px';
    this.alwaysShowEdgesButton.style.border = '1px solid #ccc';
    this.alwaysShowEdgesButton.style.borderRadius = '4px';
    this.alwaysShowEdgesButton.style.backgroundColor = '#fff';
    this.alwaysShowEdgesButton.style.cursor = 'pointer';
    this.alwaysShowEdgesButton.style.fontSize = '16px';
    this.alwaysShowEdgesButton.style.width = '32px';
    this.alwaysShowEdgesButton.style.height = '32px';
    this.alwaysShowEdgesButton.style.display = 'flex';
    this.alwaysShowEdgesButton.style.alignItems = 'center';
    this.alwaysShowEdgesButton.style.justifyContent = 'center';
    this.alwaysShowEdgesButton.style.pointerEvents = 'auto';
    this.alwaysShowEdgesButton.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    this.alwaysShowEdgesButton.style.transition = '0.2s';
    this.alwaysShowEdgesButton.style.color = '#000000';
    
    // Click event: only process current view
    this.alwaysShowEdgesButton.addEventListener('click', () => {
      if (!this.currentView) {
        return;
      }
      const currentView = this.views.get(this.currentView);
      if (currentView?.getAlwaysShowEdges) {
        const currentState = currentView.getAlwaysShowEdges();
        this.setAlwaysShowEdges(!currentState);
      }
    });
    
    this.commonControlsContainer.appendChild(this.alwaysShowEdgesButton);
    // Initial state will be updated later when views are registered
    // this.updateAlwaysShowEdgesButton();
  }

  /**
   * Create lighting toggle button (in common controls)
   */
  private createLightingToggleButton(): void {
    this.lightingToggleButton = document.createElement('button');
    this.lightingToggleButton.innerHTML = createSvgIcon('icon-sun', 16);
    this.lightingToggleButton.setAttribute('aria-label', 'Toggle lighting');
    this.lightingToggleButton.setAttribute('title', 'Toggle lighting');
    this.lightingToggleButton.style.padding = '6px';
    this.lightingToggleButton.style.border = '1px solid #ccc';
    this.lightingToggleButton.style.borderRadius = '4px';
    this.lightingToggleButton.style.backgroundColor = '#fff';
    this.lightingToggleButton.style.cursor = 'pointer';
    this.lightingToggleButton.style.fontSize = '16px';
    this.lightingToggleButton.style.width = '32px';
    this.lightingToggleButton.style.height = '32px';
    this.lightingToggleButton.style.display = 'none'; // Hidden by default
    this.lightingToggleButton.style.alignItems = 'center';
    this.lightingToggleButton.style.justifyContent = 'center';
    this.lightingToggleButton.style.pointerEvents = 'auto';
    this.lightingToggleButton.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    this.lightingToggleButton.style.transition = '0.2s';
    
    // Click event: only process current view
    this.lightingToggleButton.addEventListener('click', () => {
      if (!this.currentView) {
        return;
      }
      const currentView = this.views.get(this.currentView);
      if (currentView?.getLightingEnabled) {
        const currentState = currentView.getLightingEnabled();
        this.setLightingEnabled(!currentState);
      }
    });
    
    this.commonControlsContainer.appendChild(this.lightingToggleButton);
    // Initial state will be updated later when views are registered
    // this.updateLightingButton();
  }

  /**
   * Create tile type button (in common controls)
   */
  private createTileTypeButton(): void {
    this.tileTypeButton = document.createElement('button');
    this.tileTypeButton.innerHTML = createSvgIcon('icon-map-tiles', 16);
    this.tileTypeButton.setAttribute('aria-label', 'Switch tile type');
    this.tileTypeButton.setAttribute('title', 'Switch tile type');
    this.tileTypeButton.style.padding = '6px';
    this.tileTypeButton.style.border = '1px solid #ccc';
    this.tileTypeButton.style.borderRadius = '4px';
    this.tileTypeButton.style.backgroundColor = '#fff';
    this.tileTypeButton.style.cursor = 'pointer';
    this.tileTypeButton.style.fontSize = '16px';
    this.tileTypeButton.style.width = '32px';
    this.tileTypeButton.style.height = '32px';
    this.tileTypeButton.style.display = 'none'; // Hidden by default
    this.tileTypeButton.style.alignItems = 'center';
    this.tileTypeButton.style.justifyContent = 'center';
    this.tileTypeButton.style.pointerEvents = 'auto';
    this.tileTypeButton.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    this.tileTypeButton.style.transition = '0.2s';
    
    // Click event: switch to next tile server
    this.tileTypeButton.addEventListener('click', () => {
      if (!this.currentView) {
        return;
      }
      // First, check if any view supports custom tile servers
      let maxCount = 0;
      for (const view of this.views.values()) {
        if (view.getTileServerCount) {
          const count = view.getTileServerCount();
          if (count > maxCount) {
            maxCount = count;
          }
        }
      }

      // If there are fewer than 2 custom tile servers, do nothing
      if (maxCount < 2) {
        return;
      }

      // There are 2 or more custom tile servers: cycle shared index and apply to all views
      this.sharedTileServerIndex = (this.sharedTileServerIndex + 1) % maxCount;

      for (const view of this.views.values()) {
        if (view.getTileServerCount && view.setTileServerIndex) {
          const count = view.getTileServerCount();
          if (count > 0) {
            const index = this.sharedTileServerIndex % count;
            view.setTileServerIndex(index);
          }
        }
      }

      this.updateTileTypeButton();
    });
    
    this.commonControlsContainer.appendChild(this.tileTypeButton);
    // Initial state will be updated later when views are registered
    // this.updateTileTypeButton();
  }

  /**
   * Create moon toggle button (in common controls, Map2D only)
   */
  private createMoonToggleButton(): void {
    this.moonToggleButton = document.createElement('button');
    this.moonToggleButton.setAttribute('aria-label', 'Toggle moon');
    this.moonToggleButton.setAttribute('title', 'Toggle moon');
    this.moonToggleButton.style.padding = '6px';
    this.moonToggleButton.style.border = '1px solid #ccc';
    this.moonToggleButton.style.borderRadius = '4px';
    this.moonToggleButton.style.backgroundColor = '#fff';
    this.moonToggleButton.style.cursor = 'pointer';
    this.moonToggleButton.style.fontSize = '16px';
    this.moonToggleButton.style.width = '32px';
    this.moonToggleButton.style.height = '32px';
    this.moonToggleButton.style.display = 'none'; // Hidden by default (Map2D only)
    this.moonToggleButton.style.alignItems = 'center';
    this.moonToggleButton.style.justifyContent = 'center';
    this.moonToggleButton.style.pointerEvents = 'auto';
    this.moonToggleButton.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    this.moonToggleButton.style.transition = '0.2s';
    
    // Click event: toggle moon display in Map2D view
    this.moonToggleButton.addEventListener('click', () => {
      if (this.currentView === 'map2d') {
        const map2dView = this.views.get('map2d');
        if (map2dView && (map2dView as any).toggleMoon) {
          (map2dView as any).toggleMoon();
          this.updateMoonButton();
        }
      }
    });
    
    this.commonControlsContainer.appendChild(this.moonToggleButton);
  }

  /**
   * Update moon button appearance
   */
  private updateMoonButton(): void {
    if (!this.moonToggleButton || this.currentView !== 'map2d') {
      return;
    }
    
    const map2dView = this.views.get('map2d');
    if (!map2dView) {
      return;
    }
    
    // Get moon state and phase from Map2DView
    const moonEnabled = (map2dView as any).isMoonEnabled?.() || false;
    const timeISO = (map2dView as any).getTime?.() || null;
    const date = timeISO ? new Date(timeISO) : new Date();
    const phase = (map2dView as any).getMoonPhase?.(date) || 0;
    const iconHtml = (map2dView as any).getMoonPhaseIcon?.(phase, 16) || '🌑';
    
    this.moonToggleButton.innerHTML = iconHtml;
    
    if (moonEnabled) {
      this.moonToggleButton.style.backgroundColor = '#fff9c4';
      this.moonToggleButton.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.2)';
      this.moonToggleButton.style.transform = 'translateY(1px)';
      this.moonToggleButton.setAttribute('title', 'Hide moon');
    } else {
      this.moonToggleButton.style.backgroundColor = '#fff';
      this.moonToggleButton.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
      this.moonToggleButton.style.transform = 'translateY(0)';
      this.moonToggleButton.setAttribute('title', 'Show moon');
    }
  }

  /**
   * Create fit center button (in common controls)
   */
  private createFitCenterButton(): void {
    this.fitCenterButton = document.createElement('button');
    this.fitCenterButton.innerHTML = createSvgIcon('icon-home', 16);
    this.fitCenterButton.setAttribute('aria-label', 'Fit and center');
    this.fitCenterButton.setAttribute('title', 'Fit and center');
    this.fitCenterButton.style.padding = '6px';
    this.fitCenterButton.style.border = '1px solid #ccc';
    this.fitCenterButton.style.borderRadius = '4px';
    this.fitCenterButton.style.backgroundColor = '#fff';
    this.fitCenterButton.style.cursor = 'pointer';
    this.fitCenterButton.style.fontSize = '16px';
    this.fitCenterButton.style.width = '32px';
    this.fitCenterButton.style.height = '32px';
    this.fitCenterButton.style.display = 'flex';
    this.fitCenterButton.style.alignItems = 'center';
    this.fitCenterButton.style.justifyContent = 'center';
    this.fitCenterButton.style.pointerEvents = 'auto';
    this.fitCenterButton.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    this.fitCenterButton.style.transition = '0.2s';
    
    // Click event: only process current view
    this.fitCenterButton.addEventListener('click', () => {
      if (!this.currentView) {
        return;
      }
      const currentView = this.views.get(this.currentView);
      if (currentView?.fitAndCenter) {
        currentView.fitAndCenter();
      }
    });
    
    this.commonControlsContainer.appendChild(this.fitCenterButton);
  }

  /**
   * Create export button (in common controls, all views)
   * Exports nodes, edges, and groups to relat format (with layout) and copies to clipboard
   */
  private createExportButton(): void {
    this.exportButton = document.createElement('button');
    this.exportButton.innerHTML = createSvgIcon('icon-export', 16);
    this.exportButton.setAttribute('aria-label', 'Export to relat');
    this.exportButton.setAttribute('title', 'Export to relat (copy to clipboard)');
    this.exportButton.style.padding = '6px';
    this.exportButton.style.border = '1px solid #ccc';
    this.exportButton.style.borderRadius = '4px';
    this.exportButton.style.backgroundColor = '#fff';
    this.exportButton.style.cursor = 'pointer';
    this.exportButton.style.fontSize = '16px';
    this.exportButton.style.width = '32px';
    this.exportButton.style.height = '32px';
    this.exportButton.style.display = 'flex';
    this.exportButton.style.alignItems = 'center';
    this.exportButton.style.justifyContent = 'center';
    this.exportButton.style.pointerEvents = 'auto';
    this.exportButton.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    this.exportButton.style.transition = '0.2s';
    
    // Click event: export to relat (with layout) and copy to clipboard
    this.exportButton.addEventListener('click', async () => {
      await this.exportRelatAndCopy();
    });
    
    this.commonControlsContainer.appendChild(this.exportButton);
  }

  /**
   * Export current data to relat format (with layout) and copy to clipboard
   */
  private async exportRelatAndCopy(): Promise<void> {
    const exportTitle = 'Export to relat (copy to clipboard)';
    try {
      const relatText = exportRelat(this.nodes, this.edges, this.groups, { includeLayout: true });
      console.log('Exported relat length:', relatText.length);
      const success = await copyToClipboard(relatText);

      if (this.exportButton) {
        if (success) {
          this.exportButton.style.backgroundColor = '#c8e6c9';
          this.exportButton.style.borderColor = '#4caf50';
          this.exportButton.setAttribute('title', 'Copied to clipboard!');
          setTimeout(() => {
            if (this.exportButton) {
              this.exportButton.style.backgroundColor = '#fff';
              this.exportButton.style.borderColor = '#ccc';
              this.exportButton.setAttribute('title', exportTitle);
            }
          }, 2000);
        } else {
          this.exportButton.style.backgroundColor = '#ffcdd2';
          this.exportButton.style.borderColor = '#f44336';
          this.exportButton.setAttribute('title', 'Failed to copy');
          setTimeout(() => {
            if (this.exportButton) {
              this.exportButton.style.backgroundColor = '#fff';
              this.exportButton.style.borderColor = '#ccc';
              this.exportButton.setAttribute('title', exportTitle);
            }
          }, 2000);
        }
      }
    } catch (error) {
      console.error('Export failed:', error);
      if (this.exportButton) {
        this.exportButton.style.backgroundColor = '#ffcdd2';
        this.exportButton.style.borderColor = '#f44336';
        this.exportButton.setAttribute('title', `Export failed: ${error instanceof Error ? error.message : String(error)}`);
        setTimeout(() => {
          if (this.exportButton) {
            this.exportButton.style.backgroundColor = '#fff';
            this.exportButton.style.borderColor = '#ccc';
            this.exportButton.setAttribute('title', exportTitle);
          }
        }, 3000);
      }
    }
  }

  /**
   * Get relat export text (with layout when includeLayout is true)
   */
  getExportRelat(includeLayout?: boolean): string {
    return exportRelat(this.nodes, this.edges, this.groups, { includeLayout: includeLayout ?? true });
  }

  /**
   * Create delete bend button (in common controls, Graph only)
   */
  private createDeleteBendButton(): void {
    this.deleteBendButton = document.createElement('button');
    this.deleteBendButton.innerHTML = createSvgIcon('icon-trash', 16);
    this.deleteBendButton.setAttribute('aria-label', 'Delete bend point');
    this.deleteBendButton.setAttribute('title', 'Delete bend point');
    this.deleteBendButton.style.padding = '6px';
    this.deleteBendButton.style.border = '1px solid #ccc';
    this.deleteBendButton.style.borderRadius = '4px';
    this.deleteBendButton.style.backgroundColor = '#fff';
    this.deleteBendButton.style.cursor = 'pointer';
    this.deleteBendButton.style.fontSize = '16px';
    this.deleteBendButton.style.width = '32px';
    this.deleteBendButton.style.height = '32px';
    this.deleteBendButton.style.display = 'none'; // Hidden by default
    this.deleteBendButton.style.alignItems = 'center';
    this.deleteBendButton.style.justifyContent = 'center';
    this.deleteBendButton.style.pointerEvents = 'auto';
    this.deleteBendButton.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    this.deleteBendButton.style.transition = '0.2s';
    
    // Click event: only process current view
    this.deleteBendButton.addEventListener('click', () => {
      if (!this.currentView) {
        return;
      }
      const currentView = this.views.get(this.currentView);
      if (currentView?.deleteNearestBendPoint) {
        currentView.deleteNearestBendPoint();
      }
    });
    
    // Button will be added to DOM in reorderButtons()
    // Don't append here to avoid duplicate DOM nodes
  }

  /**
   * Create cancel edit button (in common controls, Graph only)
   */
  private createCancelEditButton(): void {
    this.cancelEditButton = document.createElement('button');
    this.cancelEditButton.innerHTML = createSvgIcon('icon-close', 16);
    this.cancelEditButton.setAttribute('aria-label', 'Cancel edit');
    this.cancelEditButton.setAttribute('title', 'Cancel edit and restore previous state');
    this.cancelEditButton.style.padding = '6px';
    this.cancelEditButton.style.border = '1px solid #ccc';
    this.cancelEditButton.style.borderRadius = '4px';
    this.cancelEditButton.style.backgroundColor = '#fff';
    this.cancelEditButton.style.cursor = 'pointer';
    this.cancelEditButton.style.fontSize = '16px';
    this.cancelEditButton.style.width = '32px';
    this.cancelEditButton.style.height = '32px';
    this.cancelEditButton.style.display = 'none'; // Hidden by default
    this.cancelEditButton.style.alignItems = 'center';
    this.cancelEditButton.style.justifyContent = 'center';
    this.cancelEditButton.style.pointerEvents = 'auto';
    this.cancelEditButton.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    this.cancelEditButton.style.transition = '0.2s';
    
    // Click event: only process current view
    this.cancelEditButton.addEventListener('click', () => {
      if (!this.currentView) {
        return;
      }
      const currentView = this.views.get(this.currentView);
      if (currentView?.cancelEdit) {
        currentView.cancelEdit();
      }
    });
    
    this.commonControlsContainer.appendChild(this.cancelEditButton);
  }

  /**
   * Create undo button (Graph edit mode only)
   */
  private createUndoButton(): void {
    this.undoButton = document.createElement('button');
    this.undoButton.innerHTML = createSvgIcon('icon-undo', 16);
    this.undoButton.setAttribute('aria-label', 'Undo');
    this.undoButton.setAttribute('title', 'Undo (Ctrl+Z)');
    this.undoButton.style.padding = '6px';
    this.undoButton.style.border = '1px solid #ccc';
    this.undoButton.style.borderRadius = '4px';
    this.undoButton.style.backgroundColor = '#fff';
    this.undoButton.style.cursor = 'pointer';
    this.undoButton.style.fontSize = '16px';
    this.undoButton.style.width = '32px';
    this.undoButton.style.height = '32px';
    this.undoButton.style.display = 'none';
    this.undoButton.style.alignItems = 'center';
    this.undoButton.style.justifyContent = 'center';
    this.undoButton.style.pointerEvents = 'auto';
    this.undoButton.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    this.undoButton.style.transition = '0.2s';
    this.undoButton.addEventListener('click', () => {
      if (!this.currentView) return;
      const currentView = this.views.get(this.currentView);
      if (currentView?.undo) currentView.undo();
    });
    this.commonControlsContainer.appendChild(this.undoButton);
  }

  /**
   * Create redo button (Graph edit mode only)
   */
  private createRedoButton(): void {
    this.redoButton = document.createElement('button');
    this.redoButton.innerHTML = createSvgIcon('icon-redo', 16);
    this.redoButton.setAttribute('aria-label', 'Redo');
    this.redoButton.setAttribute('title', 'Redo (Ctrl+Shift+Z)');
    this.redoButton.style.padding = '6px';
    this.redoButton.style.border = '1px solid #ccc';
    this.redoButton.style.borderRadius = '4px';
    this.redoButton.style.backgroundColor = '#fff';
    this.redoButton.style.cursor = 'pointer';
    this.redoButton.style.fontSize = '16px';
    this.redoButton.style.width = '32px';
    this.redoButton.style.height = '32px';
    this.redoButton.style.display = 'none';
    this.redoButton.style.alignItems = 'center';
    this.redoButton.style.justifyContent = 'center';
    this.redoButton.style.pointerEvents = 'auto';
    this.redoButton.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    this.redoButton.style.transition = '0.2s';
    this.redoButton.addEventListener('click', () => {
      if (!this.currentView) return;
      const currentView = this.views.get(this.currentView);
      if (currentView?.redo) currentView.redo();
    });
    this.commonControlsContainer.appendChild(this.redoButton);
  }

  /**
   * Update edit toggle button
   */
  updateEditToggleButton(): void {
    if (!this.editToggleButton) {
      return;
    }

    if (!this.currentView) {
      return;
    }
    const currentView = this.views.get(this.currentView);
    if (!currentView) {
      return;
    }
    const isEditable = currentView.isEditable?.() || false;

    if (isEditable && this.currentView === 'graph') {
      this.editToggleButton.style.display = 'flex';
      // Button content is managed by View side
      const toggleButton = currentView.getEditToggleButton?.();
      if (toggleButton) {
        // Replace content with View's button
        this.editToggleButton.innerHTML = toggleButton.innerHTML;
        this.editToggleButton.setAttribute('aria-label', toggleButton.getAttribute('aria-label') || 'Toggle edit mode');
        this.editToggleButton.setAttribute('title', toggleButton.getAttribute('title') || 'Toggle edit mode');
        
        // Copy class list (including toggle state class)
        this.editToggleButton.className = toggleButton.className;
        
        // Copy relevant styles (but keep size 32x32 to match other buttons)
        this.editToggleButton.style.padding = '6px';
        this.editToggleButton.style.border = toggleButton.style.border || '1px solid #ccc';
        this.editToggleButton.style.borderRadius = toggleButton.style.borderRadius || '4px';
        this.editToggleButton.style.backgroundColor = toggleButton.style.backgroundColor || '#fff';
        this.editToggleButton.style.color = toggleButton.style.color || '#333';
        this.editToggleButton.style.borderColor = toggleButton.style.borderColor || '#ccc';
        this.editToggleButton.style.cursor = toggleButton.style.cursor || 'pointer';
        this.editToggleButton.style.fontSize = '16px';
        this.editToggleButton.style.width = '32px';
        this.editToggleButton.style.height = '32px';
        this.editToggleButton.style.alignItems = 'center';
        this.editToggleButton.style.justifyContent = 'center';
        this.editToggleButton.style.transition = toggleButton.style.transition || '0.2s';
        this.editToggleButton.style.boxShadow = toggleButton.style.boxShadow || '0 2px 4px rgba(0, 0, 0, 0.1)';
        this.editToggleButton.style.transform = toggleButton.style.transform || 'translateY(0)';
        
        this.editToggleButton.onclick = () => {
          toggleButton.click();
        };
      }
    } else {
      this.editToggleButton.style.display = 'none';
    }
  }

  /**
   * Create tab buttons
   */
  private createTabButtons(): void {
    const viewIcons: Record<ViewType, string> = {
      graph: 'icon-view-graph',
      map2d: 'icon-view-map',
      globe3d: 'icon-view-globe3d',
    };

    const viewLabels: Record<ViewType, string> = {
      graph: 'Graph',
      map2d: 'Map 2D',
      globe3d: 'Globe 3D',
    };

    for (const viewType of this.enabledViews) {
      const button = document.createElement('button');
      button.innerHTML = createSvgIcon(viewIcons[viewType], 16);
      button.setAttribute('aria-label', viewLabels[viewType]);
      button.setAttribute('title', viewLabels[viewType]);
      button.style.padding = '8px 16px';
      button.style.border = '1px solid #ccc';
      button.style.borderRadius = '4px 4px 0 0';
      button.style.backgroundColor = '#fff';
      button.style.cursor = 'pointer';
      button.style.fontSize = '14px';
      button.style.display = 'flex';
      button.style.alignItems = 'center';
      button.style.justifyContent = 'center';
      button.style.color = '#000000'; // Icon color
      button.style.pointerEvents = 'auto'; // Ensure buttons are clickable even when parent has pointerEvents: 'none'
      button.style.visibility = 'visible'; // Ensure button is visible
      button.style.opacity = '1'; // Ensure button is fully opaque

      // Click event
      button.addEventListener('click', () => {
        this.switchView(viewType);
      });

      this.tabButtons.set(viewType, button);
      this.tabContainer.appendChild(button);
    }
  }

  /**
   * Register a view
   */
  registerView(viewType: ViewType, view: View): void {
    this.views.set(viewType, view);
    view.hide(); // Initially hidden
    
    // Apply shared toggle button states to the newly registered view
    this.applySharedToggleStates(view);
    
    // Update edit toggle button
    this.updateEditToggleButton();
  }


  /**
   * Switch view
   */
  switchView(viewType: ViewType): void {
    if (!this.enabledViews.includes(viewType)) {
      return;
    }

    if (this.currentView === viewType) {
      return; // Already shown
    }

    // Hide previous view
    if (this.currentView) {
      const prevView = this.views.get(this.currentView);
      if (prevView) {
        prevView.hide();
      }
      // Reset previous tab button style
      const prevButton = this.tabButtons.get(this.currentView);
      if (prevButton) {
        prevButton.style.backgroundColor = '#fff';
        prevButton.style.fontWeight = 'normal';
        prevButton.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        prevButton.style.transform = 'translateY(0)';
      }
    }

    // Show new view
    const newView = this.views.get(viewType);
    if (newView) {
      // Apply shared toggle button states to the new view (before showing)
      // Note: For Globe3D/Map2D, initialization is async, so state will be applied again after initialization
      this.applySharedToggleStates(newView);
      newView.show();
      // After show(), wait a bit for async initialization (Globe3D/Map2D), then apply state again
      // This ensures that shared state is applied even if initialization happens asynchronously
      // Use longer timeout for Globe3D as it may take more time to initialize
      const timeout = viewType === 'globe3d' ? 500 : 100;
      setTimeout(() => {
        if (this.currentView === viewType) {
          this.applySharedToggleStates(newView);
          // Update button appearance after state is applied
          this.updateLightingButton();
          this.updateTileTypeButton();
          this.updateMoonButton();
        }
      }, timeout);
      newView.resize();
    }

    // Update tab button style (unified yellow background highlight effect)
    const newButton = this.tabButtons.get(viewType);
    if (newButton) {
      newButton.style.backgroundColor = '#fff9c4';
      newButton.style.fontWeight = 'bold';
      newButton.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.2)';
      newButton.style.transform = 'translateY(1px)';
    }

    this.currentView = viewType;

    // Update edit toggle button
    this.updateEditToggleButton();
    
    // Update common control buttons visibility
    this.updateCommonControlsVisibility();
    
    // Update button appearances based on current view state
    this.updateAlwaysShowEdgesButton();
    this.updateLightingButton();
    this.updateTileTypeButton();
    this.updateCancelEditButton();
    this.updateDeleteBendButton();
  }

  /**
   * Set initial view
   */
  setInitialView(viewType: ViewType): void {
    if (!this.enabledViews.includes(viewType)) {
      this.switchView(this.enabledViews[0]);
      return;
    }
    this.switchView(viewType);
  }

  /**
   * Get current view
   */
  getCurrentView(): ViewType | null {
    return this.currentView;
  }

  /**
   * Get view container element
   */
  getViewContainer(): HTMLElement {
    return this.viewContainer;
  }

  /**
   * Get registered view
   */
  getView(viewType: ViewType): View | undefined {
    return this.views.get(viewType);
  }

  /**
   * Resize
   */
  resize(): void {
    if (this.currentView) {
      const view = this.views.get(this.currentView);
      if (view) {
        view.resize();
      }
    }
  }

  /**
   * Apply shared toggle button states to a view
   */
  private applySharedToggleStates(view: View): void {
    // Apply always show edges state
    if (view.setAlwaysShowEdges) {
      view.setAlwaysShowEdges(this.sharedAlwaysShowEdges);
    }
    
    // Apply lighting state
    // Use notifyContainer=false to prevent circular updates when applying shared state
    if (view.setLightingEnabled) {
      // Type assertion to allow optional notifyContainer parameter
      // Use .call() to preserve 'this' context
      const setLighting = view.setLightingEnabled as ((enabled: boolean, notifyContainer?: boolean) => void) | undefined;
      if (setLighting) {
        // Call with 'this' context preserved by binding to the view object
        setLighting.call(view, this.sharedLightingEnabled, false);
      }
    }
    
    // Apply shared time
    if (view.setTime && this.sharedTime !== null) {
      view.setTime(this.sharedTime);
    }
    
    // Apply shared tile server index for custom tile servers, if supported
    if (view.getTileServerCount && view.setTileServerIndex) {
      const count = view.getTileServerCount();
      if (count > 0) {
        const index = this.sharedTileServerIndex % count;
        view.setTileServerIndex(index);
      }
    }
  }

  /**
   * Update shared always show edges state and apply to all views
   */
  setAlwaysShowEdges(enabled: boolean): void {
    this.sharedAlwaysShowEdges = enabled;
    // Apply to all views
    for (const view of this.views.values()) {
      if (view.setAlwaysShowEdges) {
        view.setAlwaysShowEdges(enabled);
      }
    }
    // Update button appearance
    this.updateAlwaysShowEdgesButton();
  }

  /**
   * Get shared always show edges state
   */
  getAlwaysShowEdges(): boolean {
    return this.sharedAlwaysShowEdges;
  }

  /**
   * Update shared lighting state and apply to all views
   */
  setLightingEnabled(enabled: boolean): void {
    this.sharedLightingEnabled = enabled;
    // Apply to all views that support lighting
    for (const view of this.views.values()) {
      if (view.setLightingEnabled) {
        view.setLightingEnabled(enabled);
      }
    }
    // Update button appearance
    this.updateLightingButton();
  }

  /**
   * Get shared lighting state
   */
  getLightingEnabled(): boolean {
    return this.sharedLightingEnabled;
  }

  /**
   * Update shared time and apply to all views
   */
  setTime(timeISO: string): void {
    this.sharedTime = timeISO;
    // Apply to all views that support time
    for (const view of this.views.values()) {
      if (view.setTime) {
        view.setTime(timeISO);
      }
    }
    // Update moon button icon to reflect new time (moon phase changes with time)
    if (this.currentView === 'map2d') {
      this.updateMoonButton();
    }
  }

  /**
   * Get shared time
   */
  getTime(): string | null {
    return this.sharedTime;
  }

  /**
   * Update common control buttons visibility based on current view
   * Button order for Graph: Cancel, Edit toggle, Always show edges, Fit/Center
   * Button order for Map2D/Globe3D: Lighting toggle, Tile type, Always show edges, Fit/Center
   */
  private updateCommonControlsVisibility(): void {
    const isGraph = this.currentView === 'graph';
    const isMap2DOrGlobe3D = this.currentView === 'map2d' || this.currentView === 'globe3d';
    
    // Cancel edit button: visible in Graph only when in edit mode
    if (this.cancelEditButton) {
      // Will be updated by updateCancelEditButton, but hide for Map2D/Globe3D
      if (isMap2DOrGlobe3D) {
        this.cancelEditButton.style.display = 'none';
      }
    }
    
    // Edit toggle button: visible in Graph only when editable
    // (handled by updateEditToggleButton, but hide for Map2D/Globe3D)
    if (this.editToggleButton && isMap2DOrGlobe3D) {
      this.editToggleButton.style.display = 'none';
    }
    
    // Delete bend button: visible in Graph only (shown conditionally based on bend points)
    if (this.deleteBendButton) {
      if (!isGraph) {
        this.deleteBendButton.style.display = 'none';
      } else {
        // For graph view, let updateDeleteBendButton() determine visibility based on actual state
        this.updateDeleteBendButton();
      }
    }
    
    // Lighting toggle button: hidden in Graph, visible in Map2D/Globe3D
    if (this.lightingToggleButton) {
      this.lightingToggleButton.style.display = isMap2DOrGlobe3D ? 'flex' : 'none';
    }
    
    // Tile type button: hidden in Graph, visible in Map2D/Globe3D
    if (this.tileTypeButton) {
      this.tileTypeButton.style.display = isMap2DOrGlobe3D ? 'flex' : 'none';
    }
    
    // Moon toggle button: visible in Map2D only
    if (this.moonToggleButton) {
      this.moonToggleButton.style.display = this.currentView === 'map2d' ? 'flex' : 'none';
    }
    
    // Always show edges button: visible only when edges exist
    if (this.alwaysShowEdgesButton) {
      this.alwaysShowEdgesButton.style.display = this.hasEdges ? 'flex' : 'none';
    }
    
    // Fit center button: visible in all views
    if (this.fitCenterButton) {
      this.fitCenterButton.style.display = 'flex';
    }
    
    // Reorder buttons based on current view
    this.reorderButtons();
  }

  /**
   * Reorder buttons based on current view
   * Graph: Delete bend, Cancel, Edit toggle, Always show edges, Fit/Center
   * Map2D/Globe3D: Moon toggle (Map2D only), Lighting toggle, Tile type, Always show edges, Fit/Center
   */
  private reorderButtons(): void {
    const isGraph = this.currentView === 'graph';
    const isMap2DOrGlobe3D = this.currentView === 'map2d' || this.currentView === 'globe3d';
    
    if (!this.commonControlsContainer) {
      return;
    }
    
    // Remove all buttons from container
    const buttons: HTMLElement[] = [];
    if (this.cancelEditButton) buttons.push(this.cancelEditButton);
    if (this.undoButton) buttons.push(this.undoButton);
    if (this.redoButton) buttons.push(this.redoButton);
    if (this.editToggleButton) buttons.push(this.editToggleButton);
    if (this.deleteBendButton) buttons.push(this.deleteBendButton);
    if (this.lightingToggleButton) buttons.push(this.lightingToggleButton);
    if (this.moonToggleButton) buttons.push(this.moonToggleButton);
    if (this.tileTypeButton) buttons.push(this.tileTypeButton);
    // Only include always show edges button if edges exist
    if (this.alwaysShowEdgesButton && this.hasEdges) buttons.push(this.alwaysShowEdgesButton);
    if (this.fitCenterButton) buttons.push(this.fitCenterButton);
    if (this.exportButton) buttons.push(this.exportButton);
    
    // Clear container
    while (this.commonControlsContainer.firstChild) {
      this.commonControlsContainer.removeChild(this.commonControlsContainer.firstChild);
    }
    
    // Add buttons in correct order based on view
    if (isGraph) {
      // Graph order: Undo, Redo, Delete bend, Cancel, Edit toggle, Always show edges (if edges exist), Fit/Center, Export
      if (this.undoButton) this.commonControlsContainer.appendChild(this.undoButton);
      if (this.redoButton) this.commonControlsContainer.appendChild(this.redoButton);
      if (this.deleteBendButton) this.commonControlsContainer.appendChild(this.deleteBendButton);
      if (this.cancelEditButton) this.commonControlsContainer.appendChild(this.cancelEditButton);
      if (this.editToggleButton) this.commonControlsContainer.appendChild(this.editToggleButton);
      if (this.alwaysShowEdgesButton && this.hasEdges) this.commonControlsContainer.appendChild(this.alwaysShowEdgesButton);
      if (this.fitCenterButton) this.commonControlsContainer.appendChild(this.fitCenterButton);
      if (this.exportButton) this.commonControlsContainer.appendChild(this.exportButton);
    } else if (isMap2DOrGlobe3D) {
      // Map2D/Globe3D order: Moon toggle (Map2D only), Lighting toggle, Tile type, Always show edges (if edges exist), Fit/Center, Export
      if (this.moonToggleButton && this.currentView === 'map2d') this.commonControlsContainer.appendChild(this.moonToggleButton);
      if (this.lightingToggleButton) this.commonControlsContainer.appendChild(this.lightingToggleButton);
      if (this.tileTypeButton) this.commonControlsContainer.appendChild(this.tileTypeButton);
      if (this.alwaysShowEdgesButton && this.hasEdges) this.commonControlsContainer.appendChild(this.alwaysShowEdgesButton);
      if (this.fitCenterButton) this.commonControlsContainer.appendChild(this.fitCenterButton);
      if (this.exportButton) this.commonControlsContainer.appendChild(this.exportButton);
    }
  }

  /**
   * Update always show edges button visibility based on edges existence
   */
  private updateAlwaysShowEdgesButtonVisibility(): void {
    if (!this.alwaysShowEdgesButton) {
      return;
    }
    
    // Hide button if no edges exist
    this.alwaysShowEdgesButton.style.display = this.hasEdges ? 'flex' : 'none';
    
    // Update button order when visibility changes
    this.reorderButtons();
  }

  /**
   * Update always show edges button appearance
   */
  private updateAlwaysShowEdgesButton(): void {
    if (!this.alwaysShowEdgesButton) {
      return;
    }
    
    // Hide button if no edges exist
    if (!this.hasEdges) {
      this.alwaysShowEdgesButton.style.display = 'none';
      return;
    }
    
    if (!this.currentView) {
      return;
    }
    const currentView = this.views.get(this.currentView);
    if (!currentView) {
      return;
    }
    const enabled = currentView.getAlwaysShowEdges?.() ?? this.sharedAlwaysShowEdges;
    
    if (enabled) {
      this.alwaysShowEdgesButton.setAttribute('aria-label', 'Hide edges');
      this.alwaysShowEdgesButton.setAttribute('title', 'Hide edges');
      this.alwaysShowEdgesButton.classList.add('relatos-always-show-edges-active');
      this.alwaysShowEdgesButton.style.backgroundColor = '#fff9c4';
      this.alwaysShowEdgesButton.style.color = '#000000';
      this.alwaysShowEdgesButton.style.borderColor = '#999';
      this.alwaysShowEdgesButton.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.2)';
      this.alwaysShowEdgesButton.style.transform = 'translateY(1px)';
    } else {
      this.alwaysShowEdgesButton.setAttribute('aria-label', 'Show edges');
      this.alwaysShowEdgesButton.setAttribute('title', 'Show edges');
      this.alwaysShowEdgesButton.classList.remove('relatos-always-show-edges-active');
      this.alwaysShowEdgesButton.style.backgroundColor = '#fff';
      this.alwaysShowEdgesButton.style.color = '#333';
      this.alwaysShowEdgesButton.style.borderColor = '#ccc';
      this.alwaysShowEdgesButton.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
      this.alwaysShowEdgesButton.style.transform = 'translateY(0)';
    }
  }

  /**
   * Update lighting button appearance
   * Uses ViewContainer's shared state to maintain consistency
   */
  private updateLightingButton(): void {
    if (!this.lightingToggleButton) {
      return;
    }
    
    // Always use ViewContainer's shared state, not the current view's state
    // This ensures the button shows the correct state across view switches
    const enabled = this.sharedLightingEnabled;
    
    if (enabled) {
      this.lightingToggleButton.style.backgroundColor = '#fff9c4';
      this.lightingToggleButton.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.2)';
      this.lightingToggleButton.style.transform = 'translateY(1px)';
    } else {
      this.lightingToggleButton.style.backgroundColor = '#fff';
      this.lightingToggleButton.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
      this.lightingToggleButton.style.transform = 'translateY(0)';
    }
  }

  /**
   * Update tile type button appearance
   * - If there are custom tile servers (shared across views): show shared index / count
   * - Otherwise: hide the button
   */
  private updateTileTypeButton(): void {
    if (!this.tileTypeButton) {
      return;
    }

    // Compute total number of custom tile servers across Map2D/Globe3D
    let maxCount = 0;
    for (const view of this.views.values()) {
      if (view.getTileServerCount) {
        const count = view.getTileServerCount();
        if (count > maxCount) {
          maxCount = count;
        }
      }
    }

    // If there are 2 or more shared custom tile servers, show as synchronized tile index
    if (maxCount >= 2) {
      this.tileTypeButton.style.display = 'flex';
      const index = this.sharedTileServerIndex % maxCount;
      this.tileTypeButton.setAttribute(
        'title',
        `Tile server ${index + 1}/${maxCount} (click to switch)`
      );
      return;
    }

    // If there are 0 or 1 custom tile servers, hide the button completely
    this.tileTypeButton.style.display = 'none';
    this.tileTypeButton.removeAttribute('title');
  }

  /**
   * Update cancel edit button visibility (Graph only, shown in edit mode)
   */
  private updateCancelEditButton(): void {
    if (!this.cancelEditButton) {
      return;
    }
    
    if (!this.currentView || this.currentView !== 'graph') {
      this.cancelEditButton.style.display = 'none';
      return;
    }
    const currentView = this.views.get(this.currentView);
    if (!currentView) {
      this.cancelEditButton.style.display = 'none';
      return;
    }
    // Check if view is in edit mode
    const graphView = currentView as any;
    const isEditMode = graphView.getMode?.() === 'edit';
    this.cancelEditButton.style.display = isEditMode ? 'flex' : 'none';
  }


  /**
   * Update delete bend button visibility (Graph only, shown when bend points exist)
   */
  private updateDeleteBendButton(): void {
    if (!this.deleteBendButton) {
      return;
    }
    
    if (!this.currentView || this.currentView !== 'graph') {
      this.deleteBendButton.style.display = 'none';
      return;
    }
    const currentView = this.views.get(this.currentView);
    if (!currentView) {
      this.deleteBendButton.style.display = 'none';
      return;
    }
    // Check if selected edge has bend points
    const graphView = currentView as any;
    const selectedEdgeId = graphView.getSelectedEdgeId?.();
    if (selectedEdgeId && graphView.hasBendPoints) {
      const hasBends = graphView.hasBendPoints(selectedEdgeId);
      this.deleteBendButton.style.display = hasBends ? 'flex' : 'none';
    } else {
      this.deleteBendButton.style.display = 'none';
    }
  }

  /**
   * Update undo/redo button visibility and enabled state (Graph edit mode only)
   */
  private updateUndoRedoButtons(): void {
    if (!this.undoButton || !this.redoButton) return;
    if (!this.currentView || this.currentView !== 'graph') {
      this.undoButton.style.display = 'none';
      this.redoButton.style.display = 'none';
      return;
    }
    const currentView = this.views.get(this.currentView);
    if (!currentView) {
      this.undoButton.style.display = 'none';
      this.redoButton.style.display = 'none';
      return;
    }
    const graphView = currentView as any;
    const isEditMode = graphView.getMode?.() === 'edit';
    if (!isEditMode) {
      this.undoButton.style.display = 'none';
      this.redoButton.style.display = 'none';
      return;
    }
    this.undoButton.style.display = 'flex';
    this.redoButton.style.display = 'flex';
    this.undoButton.disabled = !graphView.canUndo?.();
    this.redoButton.disabled = !graphView.canRedo?.();
  }

  /**
   * Update Graph-specific buttons (called from GraphView when state changes)
   */
  updateGraphButtons(): void {
    this.updateCancelEditButton();
    this.updateUndoRedoButtons();
    this.updateDeleteBendButton();
  }

  /**
   * Destroy
   */
  destroy(): void {
    // Destroy all views
    for (const view of this.views.values()) {
      view.destroy();
    }
    this.views.clear();
    this.tabButtons.clear();

    // Remove from DOM
    if (this.container.contains(this.tabContainer)) {
      this.container.removeChild(this.tabContainer);
    }
    if (this.container.contains(this.viewContainer)) {
      this.container.removeChild(this.viewContainer);
    }
  }
}
