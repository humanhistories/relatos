/**
 * Relatos Viewer - Office Shape Export Utility
 *
 * Computes node/edge/group geometry and styles in Graph-view coordinate space
 * so the web app can export them as MS Excel / PowerPoint shapes (rectangles,
 * connectors, group boxes).
 */

import type { Node, Edge, Group } from '../types/data';
import type { GroupLayout } from '../types/data';
import type {
  NodeShapeData,
  EdgeShapeData,
  GroupShapeData,
  OfficeShapeExport,
  BoundingBox,
} from '../types/office-shapes';

/** Node with optional style (same as Graph view) */
type NodeWithStyle = Node & {
  position?: { x: number; y: number };
  style?: { width?: number; height?: number; color?: string; borderColor?: string };
};

/** Edge with optional anchors and style (same as Graph view) */
type EdgeWithAnchors = Edge & {
  srcAnchor?: { side: NodeSide; t: number };
  dstAnchor?: { side: NodeSide; t: number };
  bends?: Array<{ x: number; y: number }>;
  style?: { color?: string; weight?: number; label?: string; srcLabel?: string; dstLabel?: string };
};

type NodeSide = 'top' | 'right' | 'bottom' | 'left';

const DEFAULT_NODE_WIDTH = 120;
const DEFAULT_NODE_HEIGHT = 60;
const GROUP_PADDING = 30;
const NESTED_GROUP_MARGIN = 50;
const LABEL_OFFSET_Y = 25;

function getNodeSize(node: NodeWithStyle): { width: number; height: number } {
  const style = node.style || {};
  return {
    width: style.width ?? DEFAULT_NODE_WIDTH,
    height: style.height ?? DEFAULT_NODE_HEIGHT,
  };
}

function estimateAnchor(
  srcNode: NodeWithStyle,
  dstNode: NodeWithStyle
): { side: NodeSide; t: number } {
  if (!srcNode.position || !dstNode.position) {
    return { side: 'right', t: 0.5 };
  }
  const { width: srcWidth, height: srcHeight } = getNodeSize(srcNode);
  const dx = dstNode.position!.x - srcNode.position!.x;
  const dy = dstNode.position!.y - srcNode.position!.y;
  const angle = Math.atan2(dy, dx);
  const normalizedAngle = angle < 0 ? angle + 2 * Math.PI : angle;

  let side: NodeSide;
  let t: number;
  if (normalizedAngle >= 7 * Math.PI / 4 || normalizedAngle < Math.PI / 4) {
    side = 'right';
    t = 0.5 + (dy / srcHeight) * 0.5;
  } else if (normalizedAngle >= Math.PI / 4 && normalizedAngle < 3 * Math.PI / 4) {
    side = 'bottom';
    t = 0.5 + (dx / srcWidth) * 0.5;
  } else if (normalizedAngle >= 3 * Math.PI / 4 && normalizedAngle < 5 * Math.PI / 4) {
    side = 'left';
    t = 0.5 - (dy / srcHeight) * 0.5;
  } else {
    side = 'top';
    t = 0.5 - (dx / srcWidth) * 0.5;
  }
  t = Math.max(0, Math.min(1, t));
  return { side, t };
}

function calculateAnchorPosition(
  node: NodeWithStyle,
  anchor: { side: NodeSide; t: number },
  width: number,
  height: number
): { x: number; y: number } {
  if (!node.position) {
    return { x: 0, y: 0 };
  }
  const cx = node.position.x;
  const cy = node.position.y;
  let x: number, y: number;
  switch (anchor.side) {
    case 'top':
      x = cx - width / 2 + width * anchor.t;
      y = cy - height / 2;
      break;
    case 'right':
      x = cx + width / 2;
      y = cy - height / 2 + height * anchor.t;
      break;
    case 'bottom':
      x = cx - width / 2 + width * anchor.t;
      y = cy + height / 2;
      break;
    case 'left':
      x = cx - width / 2;
      y = cy - height / 2 + height * anchor.t;
      break;
    default:
      x = cx;
      y = cy;
  }
  return { x, y };
}

function getEdgePoints(
  edge: EdgeWithAnchors,
  nodes: NodeWithStyle[]
): Array<{ x: number; y: number }> {
  const srcNode = nodes.find((n) => n.id === edge.src) as NodeWithStyle | undefined;
  const dstNode = nodes.find((n) => n.id === edge.dst) as NodeWithStyle | undefined;
  if (!srcNode?.position || !dstNode?.position) {
    return [];
  }
  const srcAnchor = edge.srcAnchor ?? estimateAnchor(srcNode, dstNode);
  const dstAnchor = edge.dstAnchor ?? estimateAnchor(dstNode, srcNode);
  const srcSize = getNodeSize(srcNode);
  const dstSize = getNodeSize(dstNode);
  const start = calculateAnchorPosition(srcNode, srcAnchor, srcSize.width, srcSize.height);
  const end = calculateAnchorPosition(dstNode, dstAnchor, dstSize.width, dstSize.height);
  const points: Array<{ x: number; y: number }> = [start];
  if (edge.bends?.length) {
    points.push(...edge.bends);
  }
  points.push(end);
  return points;
}

function calculateGroupBounds(
  group: Group,
  nodes: NodeWithStyle[],
  groups: Group[],
  getLayout: (g: Group) => GroupLayout | null
): { minX: number; maxX: number; minY: number; maxY: number } | null {
  const hasChildGroups = groups.some((g) => g.parentId === group.id);
  const childGroupNodeIds = new Set<string>();
  if (hasChildGroups) {
    const childGroups = groups.filter((g) => g.parentId === group.id);
    const collectNodeIds = (g: Group): void => {
      g.nodeIds.forEach((id) => childGroupNodeIds.add(id));
      groups.filter((dg) => dg.parentId === g.id).forEach(collectNodeIds);
    };
    childGroups.forEach(collectNodeIds);
  }

  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  let hasValidContent = false;

  for (const nodeId of group.nodeIds) {
    if (hasChildGroups && childGroupNodeIds.has(nodeId)) continue;
    const node = nodes.find((n) => n.id === nodeId) as NodeWithStyle | undefined;
    if (!node?.position) continue;
    hasValidContent = true;
    const { width, height } = getNodeSize(node);
    const left = node.position.x - width / 2;
    const top = node.position.y - height / 2;
    minX = Math.min(minX, left);
    maxX = Math.max(maxX, left + width);
    minY = Math.min(minY, top);
    maxY = Math.max(maxY, top + height);
  }

  if (hasChildGroups) {
    const childGroups = groups.filter((g) => g.parentId === group.id);
    for (const childGroup of childGroups) {
      const childLayout = getLayout(childGroup);
      if (childLayout) {
        hasValidContent = true;
        minX = Math.min(minX, childLayout.position.x);
        maxX = Math.max(maxX, childLayout.position.x + childLayout.size.width);
        minY = Math.min(minY, childLayout.position.y);
        maxY = Math.max(maxY, childLayout.position.y + childLayout.size.height);
      }
    }
  }

  if (!hasValidContent) return null;

  const padding = hasChildGroups ? NESTED_GROUP_MARGIN : GROUP_PADDING;
  const topPadding = padding + LABEL_OFFSET_Y;
  return {
    minX: minX - padding,
    maxX: maxX + padding,
    minY: minY - topPadding,
    maxY: maxY + padding,
  };
}

function getGroupLayout(
  group: Group,
  nodes: NodeWithStyle[],
  groups: Group[],
  getLayout: (g: Group) => GroupLayout | null
): GroupLayout | null {
  if (group.layout) {
    return group.layout;
  }
  const bounds = calculateGroupBounds(group, nodes, groups, (g) =>
    getGroupLayout(g, nodes, groups, getLayout)
  );
  if (!bounds) return null;
  return {
    position: { x: bounds.minX, y: bounds.minY },
    size: {
      width: bounds.maxX - bounds.minX,
      height: bounds.maxY - bounds.minY,
    },
  };
}

/**
 * Build shape data for Office export (Excel/PowerPoint shapes) from current Relatos data.
 * Coordinates and sizes match the Graph view coordinate system (logical units).
 *
 * @param nodes Nodes (with position and optional style)
 * @param edges Edges (with optional anchors, bends, style)
 * @param groups Groups (with optional layout)
 * @returns Shape data for nodes, edges, groups and optional overall bounds
 */
export function getShapeDataForOffice(
  nodes: Node[],
  edges: Edge[],
  groups: Group[] = []
): OfficeShapeExport {
  const nodesWithStyle = nodes as NodeWithStyle[];
  const edgesWithAnchors = edges as EdgeWithAnchors[];

  const nodeShapes: NodeShapeData[] = [];
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;

  for (const node of nodesWithStyle) {
    if (!node.position) continue;
    const { width, height } = getNodeSize(node);
    const left = node.position.x - width / 2;
    const top = node.position.y - height / 2;
    const style = node.style || {};
    nodeShapes.push({
      id: node.id,
      label: node.label,
      left,
      top,
      width,
      height,
      fillColor: style.color,
      strokeColor: style.borderColor,
      type: node.type,
    });
    minX = Math.min(minX, left);
    maxX = Math.max(maxX, left + width);
    minY = Math.min(minY, top);
    maxY = Math.max(maxY, top + height);
  }

  const getLayoutForGroup = (group: Group): GroupLayout | null =>
    getGroupLayout(group, nodesWithStyle, groups, getLayoutForGroup);

  const groupShapes: GroupShapeData[] = [];
  for (const group of groups) {
    const layout = getLayoutForGroup(group);
    if (!layout) continue;
    groupShapes.push({
      id: group.id,
      label: group.label,
      left: layout.position.x,
      top: layout.position.y,
      width: layout.size.width,
      height: layout.size.height,
      nodeIds: [...group.nodeIds],
      childGroupIds: groups.filter((g) => g.parentId === group.id).map((g) => g.id) || undefined,
    });
    minX = Math.min(minX, layout.position.x);
    maxX = Math.max(maxX, layout.position.x + layout.size.width);
    minY = Math.min(minY, layout.position.y);
    maxY = Math.max(maxY, layout.position.y + layout.size.height);
  }

  const edgeShapes: EdgeShapeData[] = [];
  for (const edge of edgesWithAnchors) {
    const points = getEdgePoints(edge, nodesWithStyle);
    if (points.length < 2) continue;
    const style = edge.style || {};
    edgeShapes.push({
      id: edge.id,
      srcId: edge.src,
      dstId: edge.dst,
      points,
      label: style.label ?? edge.relType,
      srcLabel: style.srcLabel,
      dstLabel: style.dstLabel,
      color: style.color,
      weight: style.weight,
    });
  }

  const bounds: BoundingBox | undefined =
    nodeShapes.length > 0 || groupShapes.length > 0
      ? {
          left: minX,
          top: minY,
          width: maxX - minX,
          height: maxY - minY,
        }
      : undefined;

  return {
    nodes: nodeShapes,
    edges: edgeShapes,
    groups: groupShapes,
    bounds,
  };
}
