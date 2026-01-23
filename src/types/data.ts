/**
 * Relatos Viewer - Data Type Definitions
 */

/**
 * Node position information (for Graph view)
 */
export interface NodePosition {
  x: number;
  y: number;
}

/**
 * Edge anchor position (for Graph view)
 * Connection point on node boundary
 */
export interface EdgeAnchor {
  /**
   * Source node ID
   */
  nodeId: string;
  /**
   * Anchor position (relative coordinates from node center, or angle)
   * Implementation detail: angle (0-2π) or relative coordinates (-1 to 1)
   */
  position: number | { x: number; y: number };
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
 * Node
 */
export interface Node {
  /**
   * Node ID (unique)
   */
  id: string;

  /**
   * Node label
   */
  label: string;

  /**
   * Node type (optional)
   */
  type?: string;

  /**
   * Position information for Graph view
   * If not present, graph initializes with circular layout
   */
  position?: NodePosition;

  /**
   * Geographic coordinates for Map2D/Globe3D
   * [latitude, longitude]
   */
  coordinates?: [number, number];

  /**
   * Metadata (arbitrary)
   */
  meta?: Record<string, unknown>;

  /**
   * Node information (for table display, can contain arbitrary data)
   */
  info?: Record<string, unknown>;
}

/**
 * Edge (relationship)
 */
export interface Edge {
  /**
   * Edge ID (unique)
   */
  id: string;

  /**
   * Source node ID
   */
  src: string;

  /**
   * Target node ID
   */
  dst: string;

  /**
   * Relationship type
   */
  relType: string;

  /**
   * Anchor information for Graph view
   * Can be modified in edit mode
   */
  anchors?: {
    src: EdgeAnchor;
    dst: EdgeAnchor;
  };

  /**
   * Bend point information for Graph view
   * Can be added in edit mode
   * Empty array for straight line, elements for polyline
   */
  bends?: EdgeBend[];

  /**
   * Metadata (arbitrary)
   */
  meta?: Record<string, unknown>;

  /**
   * Edge information (for table display, can contain arbitrary data)
   */
  info?: Record<string, unknown>;
}

/**
 * Merged bidirectional edge information (internal use)
 * Bidirectional edges are rendered as a single path with arrows at both ends
 */
export interface MergedEdge extends Edge {
  /**
   * Bidirectional flag
   */
  bidirectional: boolean;
  /**
   * Merged pair edge IDs (original two edges)
   */
  mergedIds: [string, string];
}
