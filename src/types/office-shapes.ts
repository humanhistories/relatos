/**
 * Relatos Viewer - Office Shape Export Types
 *
 * Types for exporting nodes, edges, and groups as MS Excel / PowerPoint
 * shape data (positions, sizes, styles) so the web app can render them
 * as native Office shapes (rectangles, connectors, group boxes).
 */

/**
 * Bounding box (left-top and size)
 */
export interface BoundingBox {
  left: number;
  top: number;
  width: number;
  height: number;
}

/**
 * Node as a shape for Office export
 * Maps to a rectangle shape (e.g. Excel/PowerPoint rectangle)
 */
export interface NodeShapeData {
  /** Node ID */
  id: string;
  /** Display label */
  label: string;
  /** Left edge (x) in diagram coordinates */
  left: number;
  /** Top edge (y) in diagram coordinates */
  top: number;
  /** Width */
  width: number;
  /** Height */
  height: number;
  /** Fill color (e.g. #ffffff) */
  fillColor?: string;
  /** Stroke/border color (e.g. #333333) */
  strokeColor?: string;
  /** Node type (optional, for styling) */
  type?: string;
}

/**
 * Edge as a connector for Office export
 * Maps to a connector/line shape (polyline with optional arrows)
 */
export interface EdgeShapeData {
  /** Edge ID */
  id: string;
  /** Source node ID */
  srcId: string;
  /** Target node ID */
  dstId: string;
  /** Polyline points [start, ...bends, end] in diagram coordinates */
  points: Array<{ x: number; y: number }>;
  /** Relationship type / edge label */
  label?: string;
  /** Label at source end */
  srcLabel?: string;
  /** Label at destination end */
  dstLabel?: string;
  /** Line color (e.g. #666666) */
  color?: string;
  /** Line weight (1–10, for thickness) */
  weight?: number;
}

/**
 * Group as a container shape for Office export
 * Maps to a group box / rounded rectangle
 */
export interface GroupShapeData {
  /** Group ID */
  id: string;
  /** Display label */
  label: string;
  /** Left edge (x) in diagram coordinates */
  left: number;
  /** Top edge (y) in diagram coordinates */
  top: number;
  /** Width */
  width: number;
  /** Height */
  height: number;
  /** Node IDs directly in this group */
  nodeIds: string[];
  /** Child group IDs (for hierarchy) */
  childGroupIds?: string[];
}

/**
 * Result of getShapeDataForOffice()
 * All coordinates and sizes are in the same coordinate system as the Graph view (logical units).
 */
export interface OfficeShapeExport {
  /** Node shapes (rectangles) */
  nodes: NodeShapeData[];
  /** Edge shapes (connectors / polylines) */
  edges: EdgeShapeData[];
  /** Group shapes (containers) */
  groups: GroupShapeData[];
  /** Optional overall bounding box of the diagram */
  bounds?: BoundingBox;
}
