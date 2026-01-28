/**
 * Relatos Viewer - Type Definitions
 */

/**
 * Available view types
 */
export type ViewType = 'graph' | 'map2d' | 'globe3d';

/**
 * Graph mode
 */
export type GraphMode = 'view' | 'edit';

/**
 * Node position information (for Graph view)
 */
export interface NodePosition {
  x: number;
  y: number;
}

/**
 * Node side
 */
export type NodeSide = 'top' | 'right' | 'bottom' | 'left';

/**
 * Edge anchor position (for Graph view)
 * Connection point on node boundary
 * side: Node side (top/right/bottom/left)
 * t: Relative position on side (0..1, 0 is start, 1 is end)
 */
export interface EdgeAnchor {
  side: NodeSide;
  t: number; // 0..1
}

/**
 * Edge bend point (for Graph view)
 * Intermediate point added in edit mode
 */
export interface EdgeBend {
  x: number;
  y: number;
}

/**
 * Node styling
 */
export interface NodeStyle {
  color?: string; // Background color (default: white)
  borderColor?: string; // Border color (default: #333)
  width?: number; // Node width in pixels (default: 120)
  height?: number; // Node height in pixels (default: 60)
}

/**
 * Node
 */
export interface Node {
  id: string;
  label: string;
  type?: string;
  position?: NodePosition; // Position information for Graph view
  coordinates?: [number, number]; // Geographic coordinates for Map2D/Globe3D [latitude, longitude]
  style?: NodeStyle; // Styling options
  meta?: Record<string, unknown>;
}

/**
 * Edge styling and relationship information
 */
export interface EdgeStyle {
  color?: string; // Edge color (default: #666)
  weight?: number; // Relationship strength (1-10, affects thickness, default: 1)
  label?: string; // Edge label text (shown on hover/tap)
  srcLabel?: string; // Label at source end
  dstLabel?: string; // Label at destination end
}

/**
 * Edge (relationship)
 */
export interface Edge {
  id: string;
  src: string; // Source node ID
  dst: string; // Target node ID
  relType: string; // Relationship type
  srcAnchor?: EdgeAnchor; // Source anchor (auto-estimated if not set)
  dstAnchor?: EdgeAnchor; // Target anchor (auto-estimated if not set)
  bends?: EdgeBend[]; // Empty array for straight line, elements for polyline
  style?: EdgeStyle; // Styling and relationship information
  meta?: Record<string, unknown>;
}

/**
 * Node click event
 */
export interface NodeClickEvent {
  node: Node;
  position: { x: number; y: number };
  originalEvent: MouseEvent | TouchEvent;
  view?: ViewType; // View that triggered the event
}

/**
 * Save payload
 * Edited data passed to onSave callback
 */
export interface SavePayload {
  nodes: Node[];
  edges: Edge[];
}

/**
 * Viewer options
 * @deprecated Use types from './types/options' instead
 */
export interface RelatosViewerOptions {
  /**
   * List of enabled view types
   * Only specified views are available
   * @default ['graph']
   */
  enabledViews?: ViewType[];

  /**
   * Initial view type
   * Must be included in enabledViews
   * @default 'graph'
   */
  initialView?: ViewType;

  /**
   * Initial data
   */
  data?: {
    nodes: Node[];
    edges: Edge[];
  };

  /**
   * Shared time information (ISO 8601 format, e.g., "2025-06-21T12:00:00Z")
   * Used by both Map2D and Globe3D
   */
  time?: string;

  /**
   * Shared lighting setting
   * Whether to enable sun position and day/night shading for Map2D and Globe3D
   */
  enableLighting?: boolean;

  /**
   * Shared tile server configuration
   * Used by both Map2D and Globe3D
   */
  tileServers?: Array<
    | string
    | {
        url: string;
        attribution?: string;
        maximumLevel?: number;
        credit?: {
          label: string;
          href?: string;
          showOnScreen?: boolean;
        };
      }
  >;

  /**
   * Graph-specific options
   */
  graph?: {
    mode?: GraphMode;
    editable?: boolean;
  };

  /**
   * Leaflet/Cesium loaders
   * map2d/globe3d are disabled if not specified
   */
  loaders?: {
    leaflet?: () => Promise<any>;
    cesium?: () => Promise<any>;
  };

  /**
   * Map2D-specific options
   */
  map2d?: {
    center?: [number, number];
    zoom?: number;
  };

  /**
   * Globe3D-specific options
   */
  globe3d?: {
    camera?: {
      longitude: number;
      latitude: number;
      height: number;
    };
  };

  /**
   * Table display configuration
   */
  tables?: {
    nodes?: {
      header?: string;
      format: string | null;
    } | null;
    edges?: {
      header?: string;
      format: string | null;
    } | null;
  };

  /**
   * Event handlers
   */
  events?: {
    onNodeClick?: (event: NodeClickEvent) => void;
    onEdgeClick?: (event: any) => void;
    onGroupClick?: (event: import('./types/events').GroupClickEvent) => void;
    onSave?: (payload: SavePayload) => void;
  };
}

/**
 * Viewer instance
 */
export interface RelatosViewer {
  /**
   * Set data
   */
  setData(data: { nodes: Node[]; edges: Edge[] }): void;

  /**
   * Switch view
   */
  setView(viewType: ViewType): void;

  /**
   * Get current view type
   */
  getView(): ViewType;

  /**
   * Set graph mode (graph view only)
   */
  setMode(mode: GraphMode): void;

  /**
   * Get current graph mode
   */
  getMode(): GraphMode | null;

  /**
   * Resize
   */
  resize(): void;

  /**
   * Destroy
   */
  destroy(): void;

  /**
   * Select node (highlight)
   * @param nodeId Node ID to select (null to deselect)
   */
  selectNode(nodeId: string | null): void;

  /**
   * Set shared time for Map2D and Globe3D
   */
  setTime(timeISO: string): void;

  /**
   * Set shared lighting for Map2D and Globe3D
   */
  setLighting(enabled: boolean): void;

  /**
   * Export data to PlantUML format
   * @param options Export options (optional)
   * @returns PlantUML text string (or deflate-encoded string if outputFormat is 'deflate')
   */
  exportToPlantUML(options?: {
    /** Use short IDs (A, B, ...) instead of full IDs. Default: true */
    useShortIds?: boolean;
    /** Include metadata comments for import. Default: true */
    includeMetadata?: boolean;
    /** Output format: 'plain' or 'deflate'. Default: 'plain' */
    outputFormat?: 'plain' | 'deflate';
  }): string;

  /**
   * Import data from PlantUML format
   * @param plantUMLText PlantUML text string
   */
  importFromPlantUML(plantUMLText: string): void;
}
