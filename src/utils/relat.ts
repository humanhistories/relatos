/**
 * relat - Relatos dedicated text format (import/export)
 * Spec: _xxxref/relatテキスト表記言語仕様.txt
 */

import type { Node, Edge, NodeStyle, EdgeStyle, NodeSide } from '../types';
import type { Group, GroupStyle } from '../types/data';
import { parseRelat, type RelatIR } from './relat-parser';

/** Result of importRelat */
export interface RelatImportResult {
  nodes: Node[];
  edges: Edge[];
  groups: Group[];
}

/** Options for exportRelat */
export interface RelatExportOptions {
  /** Include layout block. Default: false */
  includeLayout?: boolean;
  /** Include style block. Default: false */
  includeStyle?: boolean;
}

/** Format info object as relat bracket parts (info.key=value). */
function infoToRelatParts(info?: Record<string, unknown>, prefix = 'info.', excludeTopKeys?: Set<string>): string[] {
  if (!info || typeof info !== 'object') return [];
  const parts: string[] = [];
  for (const [k, v] of Object.entries(info)) {
    if (v === undefined) continue;
    if (excludeTopKeys?.has(k)) continue;
    const key = prefix + k;
    if (v != null && typeof v === 'object' && !Array.isArray(v) && !(v instanceof Date)) {
      parts.push(...infoToRelatParts(v as Record<string, unknown>, key + '.'));
    } else {
      parts.push(`${key}=${typeof v === 'string' ? JSON.stringify(v) : v}`);
    }
  }
  return parts;
}

/** Omit node info keys that are redundant with top-level lat/lon/color. */
function nodeInfoExcludeKeys(coordinates?: [number, number], styleColor?: string, info?: Record<string, unknown>): Set<string> | undefined {
  if (!info || typeof info !== 'object') return undefined;
  const exclude = new Set<string>();
  if (coordinates && coordinates.length >= 2) {
    exclude.add('lat');
    exclude.add('lon');
    exclude.add('latitude');
    exclude.add('longitude');
  }
  if (styleColor != null && info['color'] === styleColor) {
    exclude.add('color');
  }
  return exclude.size > 0 ? exclude : undefined;
}

/** Export node style + coordinates + info. When excludeLayoutKeys is true, width/height are omitted (they go in layout block). Omit info.lat/info.lon when coordinates exist; omit info.color when it equals style.color. */
function styleToRelatNodeStyle(
  style?: NodeStyle,
  excludeLayoutKeys?: boolean,
  coordinates?: [number, number],
  info?: Record<string, unknown>
): string {
  const parts: string[] = [];
  if (style) {
    if (style.color != null) parts.push(`color=${style.color}`);
    if (style.borderColor != null) parts.push(`border=${style.borderColor}`);
    if (!excludeLayoutKeys) {
      if (style.width != null) parts.push(`width=${style.width}`);
      if (style.height != null) parts.push(`height=${style.height}`);
    }
  }
  if (coordinates && coordinates.length >= 2) {
    parts.push(`lat=${coordinates[0]}`, `lon=${coordinates[1]}`);
  }
  const excludeKeys = nodeInfoExcludeKeys(coordinates, style?.color, info);
  parts.push(...infoToRelatParts(info, 'info.', excludeKeys));
  return parts.length ? `[${parts.join(',')}]` : '';
}

function styleToRelatEdgeStyle(style?: EdgeStyle, skipLabel?: boolean, info?: Record<string, unknown>): string {
  const parts: string[] = [];
  if (style) {
    if (style.color != null) parts.push(`color=${style.color}`);
    if (style.weight != null) parts.push(`weight=${style.weight}`);
    if (!skipLabel && style.label != null) parts.push(`label=${JSON.stringify(style.label)}`);
  }
  parts.push(...infoToRelatParts(info));
  return parts.length ? `[${parts.join(',')}]` : '';
}

function styleToRelatGroupStyle(style?: GroupStyle, info?: Record<string, unknown>): string {
  const parts: string[] = [];
  if (style) {
    if (style.color != null) parts.push(`color=${style.color}`);
    if (style.borderColor != null) parts.push(`border=${style.borderColor}`);
    if (style.borderWidth != null) parts.push(`width=${style.borderWidth}`);
    if (style.borderDash === false) parts.push('dash=false');
    else if (style.borderDash === true) parts.push('dash=true');
  }
  parts.push(...infoToRelatParts(info));
  return parts.length ? `[${parts.join(',')}]` : '';
}

/** Convert RelatIR to Relatos data (nodes, edges, groups). Applies layout and style block when present. */
export function irToRelatosData(ir: RelatIR): RelatImportResult {
  const layout = ir.layout;
  const styleBlock = ir.style;
  const nodes: Node[] = Object.values(ir.nodes).map((n) => {
    const mergedStyle = mergeStyle(n.style, styleBlock?.nodes?.[n.id]) ?? {};
    const { style: stylePart, coordinates: coords, info: nodeInfo } = splitNodeBracket(mergedStyle);
    let style = Object.keys(stylePart).length ? irStyleToNodeStyle(stylePart) : undefined;
    const pos = layout?.nodes?.[n.id];
    const layoutNode = pos as { x: number; y: number; w?: number; h?: number } | undefined;
    if (layoutNode && (layoutNode.w != null || layoutNode.h != null)) {
      style = { ...style } as NodeStyle;
      if (layoutNode.w != null) (style as NodeStyle).width = layoutNode.w;
      if (layoutNode.h != null) (style as NodeStyle).height = layoutNode.h;
    }
    return {
      id: n.id,
      label: n.label ?? n.id,
      style,
      position: pos ? { x: pos.x, y: pos.y } : undefined,
      coordinates: coords,
      info: nodeInfo,
    };
  });
  const groupList: Group[] = Object.values(ir.groups).map((g) => {
    const mergedStyle = mergeStyle(g.style, styleBlock?.groups?.[g.id]) ?? {};
    const { style: stylePart, info: groupInfo } = splitGroupBracket(mergedStyle);
    const style = Object.keys(stylePart).length ? irStyleToGroupStyle(stylePart) : undefined;
    const gl = layout?.groups?.[g.id];
    const nodeIds = g.members.filter((m) => m in ir.nodes);
    return {
      id: g.id,
      label: g.label ?? g.id,
      nodeIds,
      style,
      layout: gl
        ? { position: { x: gl.x, y: gl.y }, size: { width: gl.w, height: gl.h } }
        : undefined,
      info: groupInfo,
    };
  });
  for (const g of Object.values(ir.groups)) {
    for (const m of g.members) {
      if (m in ir.groups) {
        const child = groupList.find((x) => x.id === m);
        if (child) child.parentId = g.id;
      }
    }
  }
  const groups = groupList;
  const srcDstCount = new Map<string, number>();
  const edges: Edge[] = ir.edges.map((e) => {
    const key = `${e.from}\t${e.to}`;
    const n = (srcDstCount.get(key) ?? 0) + 1;
    srcDstCount.set(key, n);
    const edgeId = n === 1 ? `e_${e.from}_${e.to}` : `e_${e.from}_${e.to}_${n}`;
    const relType = e.relId ?? 'link';
    const rawMerged = mergeStyle(
      e.style,
      mergeStyle(styleBlock?.edges?.[edgeId], styleBlock?.rels?.[relType])
    ) ?? {};
    const { style: stylePart, info: edgeInfo } = splitEdgeBracket(rawMerged);
    const style = Object.keys(stylePart).length ? irStyleToEdgeStyle(stylePart) : undefined;
    const displayLabel = e.label ?? style?.label ?? (e.relId && e.relId !== 'link' ? e.relId : undefined);
    const edgeLayout = layout?.edges?.[edgeId];
    const srcAnchor =
      edgeLayout?.src_side != null
        ? { side: edgeLayout.src_side as NodeSide, t: edgeLayout.src_t ?? 0.5 }
        : undefined;
    const dstAnchor =
      edgeLayout?.dst_side != null
        ? { side: edgeLayout.dst_side as NodeSide, t: edgeLayout.dst_t ?? 0.5 }
        : undefined;
    return {
      id: edgeId,
      src: e.from,
      dst: e.to,
      relType,
      style: displayLabel ? (style ? { ...style, label: displayLabel } : { label: displayLabel }) : style,
      bends: edgeLayout?.bends?.length ? edgeLayout.bends : undefined,
      srcAnchor,
      dstAnchor,
      info: edgeInfo,
    };
  });
  return { nodes, edges, groups };
}

function mergeStyle(
  a?: Record<string, unknown>,
  b?: Record<string, unknown>
): Record<string, unknown> | undefined {
  if (!a && !b) return undefined;
  if (!a) return b;
  if (!b) return a;
  return { ...a, ...b };
}

/** Build nested object from flat keys like "info.country" -> { country: value }. */
function buildInfoFromPrefix(flat: Record<string, unknown>, prefix: string): Record<string, unknown> | undefined {
  const info: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(flat)) {
    if (typeof k === 'string' && k.startsWith(prefix) && v !== undefined) {
      const rest = k.slice(prefix.length);
      if (rest === '') continue;
      const parts = rest.startsWith('.') ? rest.slice(1).split('.') : rest.split('.');
      let cur: Record<string, unknown> = info;
      for (let i = 0; i < parts.length - 1; i++) {
        const p = parts[i];
        if (!(p in cur) || typeof cur[p] !== 'object') cur[p] = {};
        cur = cur[p] as Record<string, unknown>;
      }
      cur[parts[parts.length - 1]] = v;
    }
  }
  return Object.keys(info).length ? info : undefined;
}

/** Split node bracket: lat/lon (or latitude/longitude) -> coordinates, info.* -> info, rest -> style. */
function splitNodeBracket(merged: Record<string, unknown>): { style: Record<string, unknown>; coordinates?: [number, number]; info?: Record<string, unknown> } {
  const style: Record<string, unknown> = {};
  let coordinates: [number, number] | undefined;
  const lat = merged.lat ?? merged.latitude;
  const lon = merged.lon ?? merged.longitude;
  if (typeof lat === 'number' && typeof lon === 'number') coordinates = [lat, lon];
  const info = buildInfoFromPrefix(merged, 'info.');
  const coordKeys = ['lat', 'lon', 'latitude', 'longitude'];
  for (const [k, v] of Object.entries(merged)) {
    if (coordKeys.includes(k) || (typeof k === 'string' && k.startsWith('info.'))) continue;
    style[k] = v;
  }
  return { style, coordinates, info };
}

/** Split edge bracket: weight/width -> style.weight, info.* -> info, rest -> style. */
function splitEdgeBracket(merged: Record<string, unknown>): { style: Record<string, unknown>; info?: Record<string, unknown> } {
  const style: Record<string, unknown> = {};
  const info = buildInfoFromPrefix(merged, 'info.');
  for (const [k, v] of Object.entries(merged)) {
    if (typeof k === 'string' && k.startsWith('info.')) continue;
    if (k === 'weight') { style.width = v; continue; }
    style[k] = v;
  }
  return { style, info };
}

/** Split group bracket: info.* -> info, rest -> style. */
function splitGroupBracket(merged: Record<string, unknown>): { style: Record<string, unknown>; info?: Record<string, unknown> } {
  const style: Record<string, unknown> = {};
  const info = buildInfoFromPrefix(merged, 'info.');
  for (const [k, v] of Object.entries(merged)) {
    if (typeof k === 'string' && k.startsWith('info.')) continue;
    style[k] = v;
  }
  return { style, info };
}

/** Import: only accept spec-defined keys (7.3). Unknown keys are ignored. */
function irStyleToNodeStyle(s: Record<string, unknown>): NodeStyle | undefined {
  const o: NodeStyle = {};
  if (s.color != null) o.color = String(s.color);
  if (s.border != null) o.borderColor = String(s.border);
  if (s.width != null) o.width = Number(s.width);
  if (s.height != null) o.height = Number(s.height);
  return Object.keys(o).length ? o : undefined;
}

function irStyleToGroupStyle(s: Record<string, unknown>): GroupStyle | undefined {
  const o: GroupStyle = {};
  if (s.color != null) o.color = String(s.color);
  if (s.border != null) o.borderColor = String(s.border);
  if (s.width != null) o.borderWidth = Number(s.width);
  if (s.dash !== undefined) o.borderDash = Boolean(s.dash);
  return Object.keys(o).length ? o : undefined;
}

/** Import: color, width/weight, label (7.3). label = display label per relID. */
function irStyleToEdgeStyle(s: Record<string, unknown>): EdgeStyle | undefined {
  const o: EdgeStyle = {};
  if (s.color != null) o.color = String(s.color);
  if (s.width != null) o.weight = Number(s.width);
  if (s.weight != null) o.weight = Number(s.weight);
  if (s.label != null) o.label = String(s.label);
  return Object.keys(o).length ? o : undefined;
}

/** Options for importRelat (e.g. receive parse warnings with position info) */
export interface RelatImportOptions {
  /** Called when the parser produced warnings (syntax issues, recovery). Message may include " (line N, column M)". */
  onWarnings?: (warnings: string[]) => void;
}

/**
 * Import relat text to Relatos data (nodes, edges, groups).
 * Uses parseRelat (tokenizer + parser) then converts IR to Relatos format.
 * If onWarnings is provided and the parser produced warnings, they are reported there (with line/column when available).
 */
export function importRelat(relatText: string, options?: RelatImportOptions): RelatImportResult {
  const ir = parseRelat(relatText);
  if (options?.onWarnings && ir.warnings.length > 0) {
    options.onWarnings(ir.warnings);
  }
  return irToRelatosData(ir);
}

/**
 * Export Relatos data to relat text.
 * Order: groups, then nodes that need explicit form, then edges, then layout block if includeLayout.
 */
export function exportRelat(
  nodes: Node[],
  edges: Edge[],
  groups: Group[],
  options?: RelatExportOptions
): string {
  const lines: string[] = [];
  const nodeIds = new Set(nodes.map(n => n.id));

  function formatGroupNested(g: Group): string {
    const childGroups = groups.filter(c => c.parentId === g.id);
    const directNodeIds = g.nodeIds.filter(id => nodeIds.has(id));
    const parts: string[] = [...directNodeIds];
    for (const c of childGroups) parts.push(formatGroupNested(c));
    const inner = parts.join(', ');
    const labelPart = g.label !== g.id ? `${g.id} as "${g.label.replace(/"/g, '\\"')}"` : g.id;
    return inner ? `${labelPart} { ${inner} }` : `${labelPart} { }`;
  }

  const topLevelGroups = groups.filter(g => !g.parentId);
  for (const g of topLevelGroups) {
    const childGroups = groups.filter(c => c.parentId === g.id);
    const directNodeIds = g.nodeIds.filter(id => nodeIds.has(id));
    const hasMembers = directNodeIds.length > 0 || childGroups.length > 0;
    if (!hasMembers) continue;
    const labelPart = g.label !== g.id ? `${g.id} as "${g.label.replace(/"/g, '\\"')}"` : g.id;
    const stylePart = styleToRelatGroupStyle(g.style, g.info);
    const parts: string[] = [...directNodeIds];
    for (const c of childGroups) parts.push(formatGroupNested(c));
    lines.push(`${labelPart}${stylePart} { ${parts.join(', ')} }`);
  }
  for (const n of nodes) {
    const styleWithoutLayout = n.style
      ? { ...n.style, width: undefined, height: undefined } as NodeStyle
      : undefined;
    const hasNonLayoutStyle = styleWithoutLayout && Object.keys(styleWithoutLayout).some(k => styleWithoutLayout[k as keyof NodeStyle] != null);
    const needsExplicit = n.label !== n.id || hasNonLayoutStyle || (n.coordinates != null) || (n.info != null && Object.keys(n.info).length > 0);
    if (!needsExplicit) continue;
    const labelPart = n.label !== n.id ? `${n.id} as "${n.label.replace(/"/g, '\\"')}"` : n.id;
    const stylePart = styleToRelatNodeStyle(n.style, true, n.coordinates, n.info);
    lines.push(`${labelPart}${stylePart}`);
  }
  // relType ごとに「2本以上かつ全エッジが同じラベル」なら style にまとめる。1本のみは as "label" で個別に出す。
  const uniformRelLabels = new Map<string, string>();
  for (const relType of [...new Set(edges.map((e) => e.relType).filter(Boolean))] as string[]) {
    if (relType === 'link') continue;
    const withRel = edges.filter((e) => e.relType === relType);
    if (withRel.length < 2) continue;
    const labels = [...new Set(withRel.map((e) => e.style?.label ?? relType))];
    if (labels.length === 1 && labels[0] !== relType) {
      uniformRelLabels.set(relType, labels[0]);
    }
  }

  for (const e of edges) {
    let line = `${e.src}-->${e.dst}${e.relType && e.relType !== 'link' ? ` : ${e.relType}` : ''}`;
    const displayLabel = e.style?.label;
    const hasCustomLabel = displayLabel != null && displayLabel !== e.relType;
    const useUniformStyle = e.relType != null && uniformRelLabels.has(e.relType);

    if (useUniformStyle) {
      // 同一 relType で全同じラベル → エッジ行に as を書かず、後で style に出す
    } else if (hasCustomLabel) {
      line += ` as "${(displayLabel as string).replace(/"/g, '\\"')}"`;
    }
    // as "label" で出した場合、および relID とラベルが同一の場合は [label=...] を付けない
    const labelSameAsRelId = displayLabel != null && displayLabel === e.relType;
    const skipLabelInBracket = useUniformStyle || hasCustomLabel || labelSameAsRelId;
    const edgeBracket = styleToRelatEdgeStyle(e.style, skipLabelInBracket, e.info);
    if (edgeBracket) line += ' ' + edgeBracket;
    lines.push(line);
  }

  if (options?.includeLayout) {
    const layoutLines: string[] = [];
    for (const n of nodes) {
      if (n.position != null) {
        const w = n.style?.width;
        const h = n.style?.height;
        const extras = [w != null ? `w=${w}` : '', h != null ? `h=${h}` : ''].filter(Boolean).join(' ');
        layoutLines.push(`node ${n.id} {x=${n.position.x} y=${n.position.y}${extras ? ` ${extras}` : ''}}`);
      }
    }
    for (const g of groups) {
      if (g.layout) {
        layoutLines.push(`group ${g.id} {x=${g.layout.position.x} y=${g.layout.position.y} w=${g.layout.size.width} h=${g.layout.size.height}}`);
      }
    }
    for (const e of edges) {
      const hasAnchors = e.srcAnchor != null || e.dstAnchor != null;
      const hasBends = e.bends != null && e.bends.length > 0;
      if (!hasAnchors && !hasBends) continue;
      const srcSide = e.srcAnchor?.side ?? 'right';
      const srcT = e.srcAnchor?.t ?? 0.5;
      const dstSide = e.dstAnchor?.side ?? 'right';
      const dstT = e.dstAnchor?.t ?? 0.5;
      const anchorPart = hasAnchors
        ? ` { src_side=${srcSide}, src_t=${srcT}, dst_side=${dstSide}, dst_t=${dstT} }`
        : '';
      const bendsPart =
        hasBends && e.bends
          ? ` bends {${e.bends.map(b => `{x=${b.x},y=${b.y}}`).join(',')}}`
          : '';
      layoutLines.push(`edge ${e.id}${anchorPart}${bendsPart}`);
    }
    if (layoutLines.length > 0) {
      lines.push('');
      lines.push('layout {');
      lines.push(...layoutLines.map(l => `  ${l}`));
      lines.push('}');
    }
  }

  const styleLines: string[] = [];
  if (options?.includeStyle) {
    for (const n of nodes) {
      const s = styleToRelatNodeStyle(n.style, false, n.coordinates, n.info);
      if (s) styleLines.push(`node ${n.id} ${s}`);
    }
    for (const g of groups) {
      const s = styleToRelatGroupStyle(g.style, g.info);
      if (s) styleLines.push(`group ${g.id} ${s}`);
    }
    for (const e of edges) {
      const s = styleToRelatEdgeStyle(e.style, true, e.info);
      if (s) styleLines.push(`edge ${e.id} ${s}`);
    }
  }
  // uniform な rel ラベルは style にまとめる（includeStyle の有無にかかわらず）
  for (const [relType, label] of uniformRelLabels) {
    styleLines.push(`rel ${relType} [label=${JSON.stringify(label)}]`);
  }
  if (styleLines.length > 0) {
    lines.push('');
    lines.push('style {');
    lines.push(...styleLines.map((l) => `  ${l}`));
    lines.push('}');
  }

  return lines.join('\n');
}
