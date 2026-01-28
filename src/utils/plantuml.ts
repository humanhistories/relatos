/**
 * Relatos Viewer - PlantUML Export/Import Utilities
 * 
 * Provides functions to export Relatos data to PlantUML format
 * and import PlantUML text back to Relatos data structures.
 * 
 * The format uses PlantUML component diagram syntax with special
 * @relatos: comments to preserve all metadata.
 */

import type { Node, Edge, Group } from '../types/data';

/**
 * Export options for PlantUML
 */
export interface PlantUMLExportOptions {
  /**
   * Use short IDs (A, B, ..., Z, AA, AB, ...) instead of full IDs
   * Reduces output size significantly
   * @default false
   */
  useShortIds?: boolean;
  
  /**
   * Include metadata comments (@relatos:node, @relatos:edge, @relatos:group)
   * Required for import back to Relatos, but can be disabled for cleaner output
   * @default true
   */
  includeMetadata?: boolean;
  
  /**
   * Output format
   * - 'plain': Plain PlantUML text
   * - 'deflate': Compressed and encoded string for PlantUML server
   *   (Use with URL like: http://www.plantuml.com/plantuml/svg/{encodedString})
   * @default 'plain'
   */
  outputFormat?: 'plain' | 'deflate';
  
  /**
   * @deprecated No longer used. Deflate output returns only the encoded string.
   * Prepend your own server URL if needed.
   */
  serverUrlPrefix?: string;
}

// ============================================================================
// ID Shortening Utilities (similar to makerelationdiagram.py)
// ============================================================================

/**
 * Convert a number to alphabetic representation (A, B, ..., Z, AA, AB, ...)
 * Similar to num2alpha() in makerelationdiagram.py
 */
function numToAlpha(num: number): string {
  if (num <= 26) {
    return String.fromCharCode(64 + num); // 1->A, 2->B, ..., 26->Z
  } else if (num % 26 === 0) {
    return numToAlpha(Math.floor(num / 26) - 1) + 'Z';
  } else {
    return numToAlpha(Math.floor(num / 26)) + String.fromCharCode(64 + (num % 26));
  }
}

/**
 * ID Shortener class - maps original IDs to short alphabetic IDs
 * Similar to getShortId() in makerelationdiagram.py
 */
class IdShortener {
  private count = 0;
  private idMap = new Map<string, string>();
  private reverseMap = new Map<string, string>();

  /**
   * Get short ID for an original ID
   */
  getShortId(originalId: string): string {
    if (!this.idMap.has(originalId)) {
      this.count++;
      const shortId = numToAlpha(this.count);
      this.idMap.set(originalId, shortId);
      this.reverseMap.set(shortId, originalId);
    }
    return this.idMap.get(originalId)!;
  }

  /**
   * Get original ID from short ID
   */
  getOriginalId(shortId: string): string | undefined {
    return this.reverseMap.get(shortId);
  }

  /**
   * Reset the shortener
   */
  reset(): void {
    this.count = 0;
    this.idMap.clear();
    this.reverseMap.clear();
  }
}

// ============================================================================
// Deflate and Encode (similar to makerelationdiagram.py)
// ============================================================================

/**
 * PlantUML alphabet for URL encoding
 */
const PLANTUML_ALPHABET = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_';
const BASE64_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

/**
 * Compress and encode PlantUML text for use in PlantUML server URLs
 * Similar to deflate_and_encode() in makerelationdiagram.py
 * 
 * Note: This uses a pure JavaScript implementation without external dependencies.
 * The compression uses a simple deflate-like algorithm.
 * 
 * @param plantumlText Plain PlantUML text
 * @returns Encoded string for PlantUML server URL
 */
export function deflateAndEncode(plantumlText: string): string {
  // Convert string to UTF-8 bytes
  const encoder = new TextEncoder();
  const data = encoder.encode(plantumlText);
  
  // Compress using deflate (raw, no header)
  const compressed = deflateRaw(data);
  
  // Convert to base64
  let base64 = '';
  for (let i = 0; i < compressed.length; i += 3) {
    const b1 = compressed[i] || 0;
    const b2 = compressed[i + 1] || 0;
    const b3 = compressed[i + 2] || 0;
    
    const c1 = b1 >> 2;
    const c2 = ((b1 & 0x03) << 4) | (b2 >> 4);
    const c3 = ((b2 & 0x0f) << 2) | (b3 >> 6);
    const c4 = b3 & 0x3f;
    
    base64 += PLANTUML_ALPHABET[c1];
    base64 += PLANTUML_ALPHABET[c2];
    if (i + 1 < compressed.length) {
      base64 += PLANTUML_ALPHABET[c3];
    }
    if (i + 2 < compressed.length) {
      base64 += PLANTUML_ALPHABET[c4];
    }
  }
  
  return base64;
}

/**
 * Simple deflate compression (raw, no zlib header)
 * This is a minimal implementation for PlantUML encoding
 */
function deflateRaw(data: Uint8Array): Uint8Array {
  // Use CompressionStream API if available (modern browsers)
  // Otherwise fall back to uncompressed literal blocks
  
  // For simplicity and browser compatibility, we'll use a simpler approach:
  // Store data in uncompressed DEFLATE blocks (literal blocks)
  // This is valid DEFLATE and works with PlantUML server
  
  const result: number[] = [];
  const BLOCK_SIZE = 65535; // Max block size for uncompressed blocks
  
  let offset = 0;
  while (offset < data.length) {
    const remaining = data.length - offset;
    const blockSize = Math.min(remaining, BLOCK_SIZE);
    const isLast = offset + blockSize >= data.length;
    
    // Block header: BFINAL (1 bit) + BTYPE=00 (2 bits for no compression)
    result.push(isLast ? 0x01 : 0x00);
    
    // LEN (2 bytes, little-endian)
    result.push(blockSize & 0xff);
    result.push((blockSize >> 8) & 0xff);
    
    // NLEN (one's complement of LEN)
    const nlen = blockSize ^ 0xffff;
    result.push(nlen & 0xff);
    result.push((nlen >> 8) & 0xff);
    
    // Copy literal data
    for (let i = 0; i < blockSize; i++) {
      result.push(data[offset + i]);
    }
    
    offset += blockSize;
  }
  
  return new Uint8Array(result);
}

/**
 * Generate PlantUML server URL from encoded text
 */
export function getPlantUMLServerUrl(
  encodedText: string,
  serverUrlPrefix: string = 'https://www.plantuml.com/plantuml/svg/'
): string {
  return serverUrlPrefix + encodedText;
}

// ============================================================================
// PlantUML Node Type Mapping
// ============================================================================

/**
 * PlantUML node type mapping
 * Maps Relatos node types to PlantUML element types
 */
const NODE_TYPE_MAP: Record<string, string> = {
  default: 'rectangle',
  server: 'node',
  database: 'database',
  client: 'agent',
  cloud: 'cloud',
  storage: 'storage',
  folder: 'folder',
  file: 'file',
  component: 'component',
  queue: 'queue',
  stack: 'stack',
  actor: 'actor',
  boundary: 'boundary',
  control: 'control',
  entity: 'entity',
  card: 'card',
  frame: 'frame',
  package: 'package',
  usecase: 'usecase',
  artifact: 'artifact',
  rectangle: 'rectangle',
  hexagon: 'hexagon',
};

/**
 * Get PlantUML element type for a node
 */
function getPlantUMLNodeType(nodeType?: string): string {
  if (!nodeType) return NODE_TYPE_MAP.default;
  const mapped = NODE_TYPE_MAP[nodeType.toLowerCase()];
  return mapped || NODE_TYPE_MAP.default;
}

/**
 * Sanitize ID for PlantUML (alphanumeric and underscore only)
 */
function sanitizeId(id: string): string {
  return id.replace(/[^\w]/g, '_');
}

/**
 * Escape quotes in strings for PlantUML
 */
function escapeQuotes(str: string): string {
  return str.replace(/"/g, '\\"');
}

/**
 * Build node hierarchy from groups
 * Returns a map of parentGroupId -> childGroupIds
 */
function buildGroupHierarchy(groups: Group[]): Map<string | null, Group[]> {
  const hierarchy = new Map<string | null, Group[]>();
  
  for (const group of groups) {
    const parentId = group.parentId || null;
    if (!hierarchy.has(parentId)) {
      hierarchy.set(parentId, []);
    }
    hierarchy.get(parentId)!.push(group);
  }
  
  return hierarchy;
}

/**
 * Get all node IDs that belong to a group and its subgroups
 */
function getGroupNodeIds(group: Group, allGroups: Group[]): Set<string> {
  const nodeIds = new Set<string>(group.nodeIds || []);
  
  // Find child groups
  const childGroups = allGroups.filter(g => g.parentId === group.id);
  for (const child of childGroups) {
    const childNodeIds = getGroupNodeIds(child, allGroups);
    childNodeIds.forEach(id => nodeIds.add(id));
  }
  
  return nodeIds;
}

/**
 * Export node metadata as a JSON comment
 * Includes all node properties except layout (position)
 */
function nodeToMetaComment(node: Node, includeMetadata: boolean): string {
  if (!includeMetadata) return '';
  
  const meta: Record<string, unknown> = {
    id: node.id,
  };
  
  if (node.type) meta.type = node.type;
  if (node.coordinates) meta.coordinates = node.coordinates;
  if (node.meta && Object.keys(node.meta).length > 0) meta.meta = node.meta;
  if (node.info && Object.keys(node.info).length > 0) meta.info = node.info;
  
  // Include style information (GraphView uses this)
  const nodeAny = node as any;
  if (nodeAny.style && typeof nodeAny.style === 'object') {
    const style: Record<string, unknown> = {};
    if (nodeAny.style.color !== undefined) style.color = nodeAny.style.color;
    if (nodeAny.style.borderColor !== undefined) style.borderColor = nodeAny.style.borderColor;
    if (nodeAny.style.width !== undefined) style.width = nodeAny.style.width;
    if (nodeAny.style.height !== undefined) style.height = nodeAny.style.height;
    if (Object.keys(style).length > 0) meta.style = style;
  }
  
  return `' @relatos:node ${JSON.stringify(meta)}`;
}

/**
 * Export group metadata as a JSON comment
 */
function groupToMetaComment(group: Group, includeMetadata: boolean): string {
  if (!includeMetadata) return '';
  
  const meta: Record<string, unknown> = {
    id: group.id,
  };
  
  if (group.parentId) meta.parentId = group.parentId;
  if (group.nodeIds && group.nodeIds.length > 0) meta.nodeIds = group.nodeIds;
  if (group.meta && Object.keys(group.meta).length > 0) meta.meta = group.meta;
  
  return `' @relatos:group ${JSON.stringify(meta)}`;
}

/**
 * Export edge metadata as a JSON comment
 * Includes all edge properties except layout (anchors, bends)
 */
function edgeToMetaComment(edge: Edge, includeMetadata: boolean): string {
  if (!includeMetadata) return '';
  
  const meta: Record<string, unknown> = {
    id: edge.id,
    src: edge.src,
    dst: edge.dst,
  };
  
  if (edge.relType) meta.relType = edge.relType;
  if (edge.meta && Object.keys(edge.meta).length > 0) meta.meta = edge.meta;
  if (edge.info && Object.keys(edge.info).length > 0) meta.info = edge.info;
  
  // Include style information (GraphView uses this)
  const edgeAny = edge as any;
  if (edgeAny.style && typeof edgeAny.style === 'object') {
    const style: Record<string, unknown> = {};
    if (edgeAny.style.color !== undefined) style.color = edgeAny.style.color;
    if (edgeAny.style.weight !== undefined) style.weight = edgeAny.style.weight;
    if (edgeAny.style.label !== undefined) style.label = edgeAny.style.label;
    if (edgeAny.style.srcLabel !== undefined) style.srcLabel = edgeAny.style.srcLabel;
    if (edgeAny.style.dstLabel !== undefined) style.dstLabel = edgeAny.style.dstLabel;
    if (Object.keys(style).length > 0) meta.style = style;
  }
  
  return `' @relatos:edge ${JSON.stringify(meta)}`;
}

/**
 * Build PlantUML style string for a node
 * Format: #BackgroundColor;line:BorderColor
 * Background colors are made semi-transparent (7F alpha) to match Relatos Graph view
 */
function buildNodeStyleString(node: Node): string {
  const nodeAny = node as any;
  if (!nodeAny.style) return '';
  
  const parts: string[] = [];
  
  // Background color (without # prefix if already present)
  // Add 7F suffix for semi-transparency (50% alpha) to match Relatos Graph view
  if (nodeAny.style.color) {
    let bgColor = nodeAny.style.color.replace(/^#/, '');
    // Only add transparency if it's a 6-digit hex color without alpha
    if (/^[0-9A-Fa-f]{6}$/.test(bgColor)) {
      bgColor = `${bgColor}7F`;
    }
    parts.push(`#${bgColor}`);
  }
  
  // Border color using line: syntax
  if (nodeAny.style.borderColor) {
    const borderColor = nodeAny.style.borderColor.replace(/^#/, '');
    if (parts.length === 0) {
      // No background color, need to add default or use line alone
      parts.push(`#white;line:${borderColor}`);
    } else {
      parts[0] = `${parts[0]};line:${borderColor}`;
    }
  }
  
  return parts.length > 0 ? ` ${parts.join('')}` : '';
}

/**
 * Generate PlantUML for a single node
 */
function nodeToPlantUML(
  node: Node, 
  indent: string = '',
  idShortener: IdShortener | null = null,
  includeMetadata: boolean = true
): string {
  const plantUMLType = getPlantUMLNodeType(node.type);
  const safeId = idShortener 
    ? idShortener.getShortId(node.id)
    : sanitizeId(node.id);
  const label = escapeQuotes(node.label);
  
  // Build native PlantUML style string
  const styleString = buildNodeStyleString(node);
  
  const metaComment = nodeToMetaComment(node, includeMetadata);
  if (metaComment) {
    return `${indent}${metaComment}\n${indent}${plantUMLType} "${label}" as ${safeId}${styleString}`;
  }
  return `${indent}${plantUMLType} "${label}" as ${safeId}${styleString}`;
}

/**
 * Generate PlantUML for a group and its contents (recursive)
 */
function groupToPlantUML(
  group: Group,
  allGroups: Group[],
  nodes: Node[],
  groupHierarchy: Map<string | null, Group[]>,
  nodesInGroups: Set<string>,
  indent: string = '',
  idShortener: IdShortener | null = null,
  includeMetadata: boolean = true
): string {
  const lines: string[] = [];
  const safeId = idShortener
    ? idShortener.getShortId(group.id)
    : sanitizeId(group.id);
  const label = escapeQuotes(group.label);
  
  // Group metadata comment
  const metaComment = groupToMetaComment(group, includeMetadata);
  if (metaComment) {
    lines.push(`${indent}${metaComment}`);
  }
  
  // Opening package (UML standard for groups)
  lines.push(`${indent}package "${label}" as ${safeId} {`);
  
  const innerIndent = indent + '  ';
  
  // Add nodes that directly belong to this group
  const directNodeIds = new Set(group.nodeIds || []);
  for (const nodeId of directNodeIds) {
    const node = nodes.find(n => n.id === nodeId);
    if (node) {
      lines.push(nodeToPlantUML(node, innerIndent, idShortener, includeMetadata));
      nodesInGroups.add(nodeId);
    }
  }
  
  // Add child groups recursively
  const childGroups = groupHierarchy.get(group.id) || [];
  for (const childGroup of childGroups) {
    lines.push('');
    lines.push(groupToPlantUML(childGroup, allGroups, nodes, groupHierarchy, nodesInGroups, innerIndent, idShortener, includeMetadata));
  }
  
  // Closing bracket
  lines.push(`${indent}}`);
  
  return lines.join('\n');
}

/**
 * Build PlantUML edge style string
 * Format: -[#color,thickness]->
 */
function buildEdgeStyleString(edge: Edge): string {
  const edgeAny = edge as any;
  if (!edgeAny.style) return '-->';
  
  const styleParts: string[] = [];
  
  // Edge color
  if (edgeAny.style.color) {
    const color = edgeAny.style.color.replace(/^#/, '');
    styleParts.push(`#${color}`);
  }
  
  // Edge thickness/weight: map to PlantUML line styles
  // weight 1-2: plain (default), weight 3-4: bold, weight 5+: very bold
  if (edgeAny.style.weight !== undefined) {
    const weight = edgeAny.style.weight;
    if (weight >= 5) {
      styleParts.push('bold');
    } else if (weight >= 3) {
      styleParts.push('bold');
    }
    // For weight 1-2, use default (no modifier needed)
  }
  
  if (styleParts.length > 0) {
    return `-[${styleParts.join(',')}]->`;
  }
  return '-->';
}

/**
 * Generate PlantUML for an edge
 */
function edgeToPlantUML(
  edge: Edge,
  idShortener: IdShortener | null = null,
  includeMetadata: boolean = true
): string {
  const srcId = idShortener
    ? idShortener.getShortId(edge.src)
    : sanitizeId(edge.src);
  const dstId = idShortener
    ? idShortener.getShortId(edge.dst)
    : sanitizeId(edge.dst);
  const label = edge.relType ? ` : ${escapeQuotes(edge.relType)}` : '';
  
  // Build native PlantUML edge style
  const arrowStyle = buildEdgeStyleString(edge);
  
  const metaComment = edgeToMetaComment(edge, includeMetadata);
  if (metaComment) {
    return `${metaComment}\n${srcId} ${arrowStyle} ${dstId}${label}`;
  }
  return `${srcId} ${arrowStyle} ${dstId}${label}`;
}

/**
 * Export Relatos data to PlantUML format
 * 
 * @param nodes Array of nodes
 * @param edges Array of edges
 * @param groups Array of groups (optional)
 * @param options Export options (optional)
 * @returns PlantUML text string (or URL if outputFormat is 'deflate')
 */
export function exportToPlantUML(
  nodes: Node[],
  edges: Edge[],
  groups?: Group[],
  options?: PlantUMLExportOptions
): string {
  const useShortIds = options?.useShortIds ?? false;
  const includeMetadata = options?.includeMetadata ?? true;
  const outputFormat = options?.outputFormat ?? 'plain';
  const serverUrlPrefix = options?.serverUrlPrefix ?? 'https://www.plantuml.com/plantuml/svg/';
  
  // Create ID shortener if needed
  const idShortener = useShortIds ? new IdShortener() : null;
  
  const lines: string[] = [];
  
  // Header
  lines.push('@startuml');
  lines.push('');
  
  if (includeMetadata) {
    lines.push("' Relatos Diagram Export");
    lines.push("' Generated by Relatos Viewer");
    lines.push("' https://github.com/tomfujit/relatos");
    lines.push('');
  }
  
  lines.push('skinparam backgroundColor #efefef');
  lines.push('skinparam componentStyle uml2');
  lines.push('left to right direction');
  lines.push('');
  
  const nodesInGroups = new Set<string>();
  
  // Groups section (with nested nodes)
  if (groups && groups.length > 0) {
    if (includeMetadata) {
      lines.push("' === GROUPS ===");
      lines.push('');
    }
    
    const groupHierarchy = buildGroupHierarchy(groups);
    
    // Start with root-level groups (no parent)
    const rootGroups = groupHierarchy.get(null) || [];
    for (const group of rootGroups) {
      lines.push(groupToPlantUML(group, groups, nodes, groupHierarchy, nodesInGroups, '', idShortener, includeMetadata));
      lines.push('');
    }
  }
  
  // Standalone nodes (not in any group)
  const standaloneNodes = nodes.filter(n => !nodesInGroups.has(n.id));
  if (standaloneNodes.length > 0) {
    if (includeMetadata) {
      lines.push("' === STANDALONE NODES ===");
      lines.push('');
    }
    for (const node of standaloneNodes) {
      lines.push(nodeToPlantUML(node, '', idShortener, includeMetadata));
      lines.push('');
    }
  }
  
  // Edges section
  if (edges.length > 0) {
    if (includeMetadata) {
      lines.push("' === EDGES ===");
      lines.push('');
    }
    for (const edge of edges) {
      lines.push(edgeToPlantUML(edge, idShortener, includeMetadata));
      lines.push('');
    }
  }
  
  // Footer
  lines.push('@enduml');
  
  const plainText = lines.join('\n');
  
  // Return based on output format
  if (outputFormat === 'deflate') {
    // Return only the deflate-encoded string (without URL prefix)
    // User can prepend their own server URL if needed
    return deflateAndEncode(plainText);
  }
  
  return plainText;
}

/**
 * Parse metadata from @relatos: comment
 */
function parseRelatosComment(line: string): { type: string; data: Record<string, unknown> } | null {
  const match = line.match(/^'\s*@relatos:(\w+)\s+(.+)$/);
  if (!match) return null;
  
  try {
    const type = match[1];
    const data = JSON.parse(match[2]);
    return { type, data };
  } catch (e) {
    return null;
  }
}

/**
 * Parse node definition from PlantUML line
 * Format: type "label" as id [#color;line:borderColor]
 */
function parseNodeLine(line: string): { 
  type: string; 
  label: string; 
  id: string; 
  style?: { color?: string; borderColor?: string };
} | null {
  // Match: interface "Node Label" as node_id #color;line:borderColor
  // Style part is optional
  const match = line.match(/^\s*(\w+)\s+"([^"]+)"\s+as\s+(\w+)(?:\s+(#[^;\s]+(?:;line:[^;\s]+)?))?\s*$/);
  if (!match) return null;
  
  const result: { 
    type: string; 
    label: string; 
    id: string; 
    style?: { color?: string; borderColor?: string };
  } = {
    type: match[1],
    label: match[2].replace(/\\"/g, '"'),
    id: match[3],
  };
  
  // Parse style if present
  if (match[4]) {
    const styleStr = match[4];
    const style: { color?: string; borderColor?: string } = {};
    
    // Parse background color and border color
    // Format: #E3F2FD7F;line:1976D2 or just #E3F2FD (supports 8-digit hex with alpha)
    const colorMatch = styleStr.match(/^(#[0-9A-Fa-f]{8}|#[0-9A-Fa-f]{6}|#[0-9A-Fa-f]{3}|#\w+)/);
    if (colorMatch) {
      let color = colorMatch[1];
      // Strip alpha channel (last 2 digits) from 8-digit hex color
      if (/^#[0-9A-Fa-f]{8}$/.test(color)) {
        color = color.slice(0, 7);
      }
      style.color = color;
    }
    
    const borderMatch = styleStr.match(/;line:(#?[0-9A-Fa-f]{6}|#?[0-9A-Fa-f]{3}|#?\w+)/);
    if (borderMatch) {
      // Add # if not present
      style.borderColor = borderMatch[1].startsWith('#') ? borderMatch[1] : `#${borderMatch[1]}`;
    }
    
    if (Object.keys(style).length > 0) {
      result.style = style;
    }
  }
  
  return result;
}

/**
 * Parse group definition from PlantUML line
 * Format: package "label" as id { (or rectangle for backward compatibility)
 */
function parseGroupLine(line: string): { label: string; id: string } | null {
  // Match: package "Group Label" as group_id { (or rectangle for backward compatibility)
  const match = line.match(/^\s*(?:package|rectangle)\s+"([^"]+)"\s+as\s+(\w+)\s*\{?\s*$/);
  if (!match) return null;
  
  return {
    label: match[1].replace(/\\"/g, '"'),
    id: match[2],
  };
}

/**
 * Parse edge definition from PlantUML line
 * Format: src --> dst : label  OR  src -[#color,bold]-> dst : label
 */
function parseEdgeLine(line: string): { 
  src: string; 
  dst: string; 
  label?: string; 
  style?: { color?: string; weight?: number };
} | null {
  // Match: node1 --> node2 : label (standard arrow)
  // or: node1 -[#color,bold]-> node2 : label (styled arrow)
  // Arrow patterns: -->, -[...]->
  
  const result: { 
    src: string; 
    dst: string; 
    label?: string; 
    style?: { color?: string; weight?: number };
  } = { src: '', dst: '' };
  
  // Try to match styled arrow: -[#color,bold]->
  const styledMatch = line.match(/^\s*(\w+)\s+-\[([^\]]+)\]->\s+(\w+)(?:\s+:\s+(.+?))?\s*$/);
  if (styledMatch) {
    result.src = styledMatch[1];
    result.dst = styledMatch[3];
    if (styledMatch[4]) {
      result.label = styledMatch[4].replace(/\\"/g, '"');
    }
    
    // Parse style from bracket content
    const styleContent = styledMatch[2];
    const style: { color?: string; weight?: number } = {};
    
    // Parse color
    const colorMatch = styleContent.match(/#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3}|\w+)/);
    if (colorMatch) {
      style.color = `#${colorMatch[1]}`;
    }
    
    // Parse weight from bold/thickness
    if (styleContent.includes('bold')) {
      style.weight = 4;
    }
    
    if (Object.keys(style).length > 0) {
      result.style = style;
    }
    
    return result;
  }
  
  // Match standard arrow: node1 --> node2 : label
  const matchWithLabel = line.match(/^\s*(\w+)\s+-->\s+(\w+)\s+:\s+(.+?)\s*$/);
  if (matchWithLabel) {
    return {
      src: matchWithLabel[1],
      dst: matchWithLabel[2],
      label: matchWithLabel[3].replace(/\\"/g, '"'),
    };
  }
  
  const matchNoLabel = line.match(/^\s*(\w+)\s+-->\s+(\w+)\s*$/);
  if (matchNoLabel) {
    return {
      src: matchNoLabel[1],
      dst: matchNoLabel[2],
    };
  }
  
  return null;
}

/**
 * Import PlantUML text to Relatos data structures
 * 
 * @param plantUMLText PlantUML text string
 * @returns Object containing nodes, edges, and groups
 */
export function importFromPlantUML(plantUMLText: string): {
  nodes: Node[];
  edges: Edge[];
  groups: Group[];
} {
  const nodes: Node[] = [];
  const edges: Edge[] = [];
  const groups: Group[] = [];
  
  // Maps for metadata (from @relatos: comments)
  const nodeMeta = new Map<string, Record<string, unknown>>();
  const edgeMeta = new Map<string, Record<string, unknown>>();
  const groupMeta = new Map<string, Record<string, unknown>>();
  
  // ID mapping (sanitized ID -> original ID)
  const nodeIdMap = new Map<string, string>();
  const groupIdMap = new Map<string, string>();
  
  // Track current group context for nested parsing
  const groupStack: string[] = [];
  
  // Current pending metadata (for next element)
  let pendingMeta: { type: string; data: Record<string, unknown> } | null = null;
  
  const lines = plantUMLText.split('\n');
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Skip empty lines and non-relatos comments
    if (!line || (line.startsWith("'") && !line.includes('@relatos:'))) {
      continue;
    }
    
    // Skip header/footer
    if (line === '@startuml' || line === '@enduml' || line.startsWith('skinparam') || line.startsWith('left to right')) {
      continue;
    }
    
    // Parse @relatos: metadata comment
    const relatosMeta = parseRelatosComment(line);
    if (relatosMeta) {
      pendingMeta = relatosMeta;
      
      // Store metadata by ID for later reference
      const id = relatosMeta.data.id as string;
      if (id) {
        if (relatosMeta.type === 'node') {
          nodeMeta.set(sanitizeId(id), relatosMeta.data);
        } else if (relatosMeta.type === 'edge') {
          edgeMeta.set(id, relatosMeta.data);
        } else if (relatosMeta.type === 'group') {
          groupMeta.set(sanitizeId(id), relatosMeta.data);
        }
      }
      continue;
    }
    
    // Track group nesting
    if (line === '}') {
      groupStack.pop();
      pendingMeta = null;
      continue;
    }
    
    // Parse group definition
    const groupDef = parseGroupLine(line);
    if (groupDef) {
      const meta = pendingMeta?.type === 'group' ? pendingMeta.data : groupMeta.get(groupDef.id);
      const originalId = (meta?.id as string) || groupDef.id;
      
      groupIdMap.set(groupDef.id, originalId);
      
      const group: Group = {
        id: originalId,
        label: groupDef.label,
        nodeIds: (meta?.nodeIds as string[]) || [],
        parentId: groupStack.length > 0 ? groupIdMap.get(groupStack[groupStack.length - 1]) : (meta?.parentId as string | undefined),
        meta: (meta?.meta as Record<string, unknown>) || undefined,
      };
      
      groups.push(group);
      groupStack.push(groupDef.id);
      pendingMeta = null;
      continue;
    }
    
    // Parse node definition
    const nodeDef = parseNodeLine(line);
    if (nodeDef) {
      const meta = pendingMeta?.type === 'node' ? pendingMeta.data : nodeMeta.get(nodeDef.id);
      const originalId = (meta?.id as string) || nodeDef.id;
      
      nodeIdMap.set(nodeDef.id, originalId);
      
      const node: Node = {
        id: originalId,
        label: nodeDef.label,
        type: (meta?.type as string) || nodeDef.type,
        coordinates: (meta?.coordinates as [number, number]) || undefined,
        meta: (meta?.meta as Record<string, unknown>) || undefined,
        info: (meta?.info as Record<string, unknown>) || undefined,
      };
      
      // Restore style information (metadata takes precedence over native PlantUML style)
      if (meta?.style && typeof meta.style === 'object') {
        (node as any).style = meta.style;
      } else if (nodeDef.style) {
        // Use native PlantUML style if no metadata
        (node as any).style = nodeDef.style;
      }
      
      nodes.push(node);
      pendingMeta = null;
      continue;
    }
    
    // Parse edge definition
    const edgeDef = parseEdgeLine(line);
    if (edgeDef) {
      // Find original IDs from node mapping
      const srcId = nodeIdMap.get(edgeDef.src) || edgeDef.src;
      const dstId = nodeIdMap.get(edgeDef.dst) || edgeDef.dst;
      
      // Generate edge ID or use from metadata
      const edgeKey = `${edgeDef.src}_${edgeDef.dst}`;
      const meta = pendingMeta?.type === 'edge' ? pendingMeta.data : null;
      
      const edge: Edge = {
        id: (meta?.id as string) || edgeKey,
        src: (meta?.src as string) || srcId,
        dst: (meta?.dst as string) || dstId,
        relType: (meta?.relType as string) || edgeDef.label || '',
        meta: (meta?.meta as Record<string, unknown>) || undefined,
        info: (meta?.info as Record<string, unknown>) || undefined,
      };
      
      // Restore style information (metadata takes precedence over native PlantUML style)
      if (meta?.style && typeof meta.style === 'object') {
        (edge as any).style = meta.style;
      } else if (edgeDef.style) {
        // Use native PlantUML style if no metadata
        (edge as any).style = edgeDef.style;
      }
      
      edges.push(edge);
      pendingMeta = null;
      continue;
    }
  }
  
  return { nodes, edges, groups };
}

/**
 * Copy text to clipboard
 * Uses the modern Clipboard API with fallback
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      const result = document.execCommand('copy');
      document.body.removeChild(textArea);
      return result;
    }
  } catch (err) {
    console.error('Failed to copy to clipboard:', err);
    return false;
  }
}
