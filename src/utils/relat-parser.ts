/**
 * relat (provisional) - Parser and normalized IR
 * Tokenizer + recursive descent; --> space-independent; warnings for error recovery.
 */

/** Layout part of RelatIR (node positions, group layout, edge bends and anchors) */
export interface RelatIRLayout {
  nodes?: Record<string, { x: number; y: number; w?: number; h?: number; fixed?: boolean }>;
  groups?: Record<string, { x: number; y: number; w: number; h: number }>;
  edges?: Record<string, {
    bends?: Array<{ x: number; y: number }>;
    src_side?: string;
    src_t?: number;
    dst_side?: string;
    dst_t?: number;
  }>;
}

/** Style block part of RelatIR (node/group/edge/relID styles) */
export interface RelatIRStyleBlock {
  nodes?: Record<string, Record<string, unknown>>;
  groups?: Record<string, Record<string, unknown>>;
  edges?: Record<string, Record<string, unknown>>;
  rels?: Record<string, Record<string, unknown>>;
}

/** Normalized IR from parseRelat */
export interface RelatIR {
  nodes: Record<string, { id: string; label?: string; style?: Record<string, unknown>; group?: string }>;
  groups: Record<string, { id: string; label?: string; style?: Record<string, unknown>; members: string[] }>;
  edges: Array<{ from: string; to: string; relId?: string; label?: string; style?: Record<string, unknown> }>;
  layout?: RelatIRLayout;
  style?: RelatIRStyleBlock;
  warnings: string[];
}

const enum TokenType {
  Id,
  Number,
  String,
  Arrow,   // -->
  Lbrace,
  Rbrace,
  Lbracket,
  Rbracket,
  Colon,
  Equals,
  As,      // keyword as
  Node,    // keyword node
  Layout,  // keyword layout
  StyleKw, // keyword style (style block)
  RelKw,   // keyword rel (in style block)
  GroupKw, // keyword group (in layout/style)
  EdgeKw,  // keyword edge (in layout/style)
  Bends,   // keyword bends
  Sep,     // , ; newline
  Eof,
}

interface Token {
  type: TokenType;
  value: string;
  offset: number;
}

function removeComments(text: string): string {
  let out = '';
  let i = 0;
  const n = text.length;
  let depthBracket = 0;
  while (i < n) {
    const c = text[i];
    if (c === '[') { depthBracket++; out += c; i++; continue; }
    if (c === ']') { depthBracket--; out += c; i++; continue; }
    if (depthBracket > 0) {
      out += c;
      i++;
      continue;
    }
    if (c === '/' && text[i + 1] === '/') {
      i += 2;
      while (i < n && text[i] !== '\n' && text[i] !== '\r') i++;
      continue;
    }
    if (c === '#') {
      i++;
      while (i < n && text[i] !== '\n' && text[i] !== '\r') i++;
      continue;
    }
    if (c === '/' && text[i + 1] === '*') {
      i += 2;
      while (i < n - 1 && !(text[i] === '*' && text[i + 1] === '/')) i++;
      i = i < n - 1 ? i + 2 : n;
      continue;
    }
    out += c;
    i++;
  }
  return out;
}

function tokenize(input: string): { tokens: Token[]; errors: string[] } {
  const tokens: Token[] = [];
  const errors: string[] = [];
  const n = input.length;
  let i = 0;
  let depthBrace = 0;
  let depthBracket = 0;

  function skipWs(): void {
    while (i < n && /[\s]/.test(input[i]) && input[i] !== '\n' && input[i] !== '\r') i++;
  }

  function maybeEmitSep(): void {
    while (i < n && depthBrace === 0 && depthBracket === 0) {
      const c = input[i];
      if (c === '\n' || c === '\r' || c === ',' || c === ';') {
        tokens.push({ type: TokenType.Sep, value: c, offset: i });
        if (c === '\r' && input[i + 1] === '\n') i++;
        i++;
        continue;
      }
      if (/[\s]/.test(c)) { i++; continue; }
      break;
    }
  }

  while (i < n) {
    maybeEmitSep();
    if (i >= n) break;

    const start = i;
    const c = input[i];

    if (c === '{') {
      depthBrace++;
      tokens.push({ type: TokenType.Lbrace, value: '{', offset: start });
      i++;
      continue;
    }
    if (c === '}') {
      depthBrace--;
      tokens.push({ type: TokenType.Rbrace, value: '}', offset: start });
      i++;
      continue;
    }
    if (c === '[') {
      depthBracket++;
      tokens.push({ type: TokenType.Lbracket, value: '[', offset: start });
      i++;
      continue;
    }
    if (c === ']') {
      depthBracket--;
      tokens.push({ type: TokenType.Rbracket, value: ']', offset: start });
      i++;
      continue;
    }
    if (c === ':') {
      tokens.push({ type: TokenType.Colon, value: ':', offset: start });
      i++;
      continue;
    }
    if (c === '=') {
      tokens.push({ type: TokenType.Equals, value: '=', offset: start });
      i++;
      continue;
    }
    if (c === '#' && i + 1 < n && /[0-9a-fA-F]/.test(input[i + 1])) {
      let hex = '#';
      i++;
      while (i < n && /[0-9a-fA-F]/.test(input[i])) {
        hex += input[i];
        i++;
      }
      tokens.push({ type: TokenType.Id, value: hex, offset: start });
      continue;
    }

    if (c === '-' && input[i + 1] === '-' && input[i + 2] === '>') {
      tokens.push({ type: TokenType.Arrow, value: '-->', offset: start });
      i += 3;
      continue;
    }

    if (c === '"' || c === "'") {
      const quote = c;
      i++;
      let value = '';
      while (i < n && input[i] !== quote) {
        if (input[i] === '\\') { i++; value += input[i] ?? ''; i++; continue; }
        value += input[i];
        i++;
      }
      if (i >= n) errors.push(`Unclosed string at ${start}`);
      else i++;
      tokens.push({ type: TokenType.String, value, offset: start });
      continue;
    }

    if (/\d/.test(c) || (c === '.' && i + 1 < n && /\d/.test(input[i + 1]))) {
      const startNum = i;
      while (i < n && /\d/.test(input[i])) i++;
      if (i < n && input[i] === '.' && i + 1 < n && /\d/.test(input[i + 1])) {
        i++;
        while (i < n && /\d/.test(input[i])) i++;
      }
      tokens.push({ type: TokenType.Number, value: input.slice(startNum, i), offset: startNum });
      continue;
    }

    if (/[a-zA-Z_0-9_\u0080-\uFFFF]/.test(c) || (c === '-' && (i + 2 >= n || input[i + 1] !== '-' || input[i + 2] !== '>'))) {
      let id = '';
      while (i < n) {
        const ch = input[i];
        if (ch === '-' && i + 2 < n && input[i + 1] === '-' && input[i + 2] === '>') break;
        if (!/[a-zA-Z_0-9\u0080-\uFFFF-]/.test(ch) && !(ch === '.' && id.length > 0)) break;
        id += ch;
        i++;
      }
      if (id === 'as') tokens.push({ type: TokenType.As, value: id, offset: start });
      else if (id === 'node') tokens.push({ type: TokenType.Node, value: id, offset: start });
      else if (id === 'layout') tokens.push({ type: TokenType.Layout, value: id, offset: start });
      else if (id === 'style') tokens.push({ type: TokenType.StyleKw, value: id, offset: start });
      else if (id === 'rel') tokens.push({ type: TokenType.RelKw, value: id, offset: start });
      else if (id === 'group') tokens.push({ type: TokenType.GroupKw, value: id, offset: start });
      else if (id === 'edge') tokens.push({ type: TokenType.EdgeKw, value: id, offset: start });
      else if (id === 'bends') tokens.push({ type: TokenType.Bends, value: id, offset: start });
      else if (id === 'fixed') tokens.push({ type: TokenType.Id, value: id, offset: start });
      else tokens.push({ type: TokenType.Id, value: id, offset: start });
      continue;
    }

    i++;
  }

  tokens.push({ type: TokenType.Eof, value: '', offset: n });
  return { tokens, errors };
}

function parseStyleValue(val: string): unknown {
  const v = val.trim();
  if (v === 'true') return true;
  if (v === 'false') return false;
  if (/^#[\da-fA-F]+$/.test(v)) return v;
  if (/^-?\d+(\.\d+)?$/.test(v)) return Number(v);
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'")))
    return v.slice(1, -1).replace(/\\"/g, '"').replace(/\\'/g, "'");
  return v;
}

function parseBracketStyle(
  tokens: Token[],
  pos: { current: number }
): Record<string, unknown> | null {
  if (pos.current >= tokens.length || tokens[pos.current].type !== TokenType.Lbracket) return null;
  pos.current++;
  const style: Record<string, unknown> = {};
  const len = tokens.length;
  while (pos.current < len && tokens[pos.current].type !== TokenType.Rbracket) {
    const t = tokens[pos.current];
    if (t.type === TokenType.Id) {
      const key = t.value;
      pos.current++;
        if (pos.current < len && tokens[pos.current].type === TokenType.Equals) {
        pos.current++;
        const next = tokens[pos.current];
        let val: unknown = true;
        if (next && (next.type === TokenType.Id || next.type === TokenType.Number || next.type === TokenType.String)) {
          val = next.type === TokenType.String ? next.value : parseStyleValue(next.value);
          pos.current++;
        }
        style[key] = val;
      } else {
        style[key] = true;
      }
    } else {
      pos.current++;
    }
    while (pos.current < len && (tokens[pos.current].type === TokenType.Sep || tokens[pos.current].value === ',' || tokens[pos.current].value === ';')) pos.current++;
  }
  if (pos.current < len && tokens[pos.current].type === TokenType.Rbracket) pos.current++;
  return style;
}

function mergeStyle(a?: Record<string, unknown>, b?: Record<string, unknown>): Record<string, unknown> | undefined {
  if (!a && !b) return undefined;
  if (!a) return b;
  if (!b) return a;
  return { ...a, ...b };
}

/** Parse relat text into normalized IR. */
export function parseRelat(text: string): RelatIR {
  const warnings: string[] = [];
  const noComments = removeComments(text);
  const { tokens, errors } = tokenize(noComments);
  warnings.push(...errors);

  const nodes: RelatIR['nodes'] = {};
  const groups: RelatIR['groups'] = {};
  const edges: RelatIR['edges'] = [];
  let layout: RelatIRLayout | undefined;
  let styleBlock: RelatIRStyleBlock | undefined;

  function ensureNode(id: string, label?: string, style?: Record<string, unknown>, group?: string): void {
    const existing = nodes[id];
    if (existing) {
      if (label !== undefined) existing.label = label;
      existing.style = mergeStyle(existing.style, style) ?? existing.style;
      if (group !== undefined) existing.group = group;
    } else {
      nodes[id] = { id, label: label ?? id, style: style ?? undefined, group };
    }
  }

  function ensureGroup(id: string, label?: string, style?: Record<string, unknown>, members?: string[]): void {
    const existing = groups[id];
    if (existing) {
      if (label !== undefined) existing.label = label;
      existing.style = mergeStyle(existing.style, style) ?? existing.style;
      if (members) existing.members = [...new Set([...existing.members, ...members])];
    } else {
      groups[id] = { id, label: label ?? id, style: style ?? undefined, members: members ?? [] };
    }
  }

  const pos = { current: 0 };
  const len = tokens.length;

  /** Convert offset in noComments to line/column for error messages */
  function offsetToLineCol(off: number): { line: number; col: number } {
    let line = 1;
    let col = 1;
    for (let i = 0; i < off && i < noComments.length; i++) {
      if (noComments[i] === '\n') {
        line++;
        col = 1;
      } else {
        col++;
      }
    }
    return { line, col };
  }

  function warn(msg: string): void {
    const off = pos.current < len ? tokens[pos.current].offset : noComments.length;
    const { line, col } = offsetToLineCol(off);
    warnings.push(`${msg} (line ${line}, column ${col})`);
  }

  function at(type: TokenType, value?: string): boolean {
    if (pos.current >= len) return type === TokenType.Eof;
    const t = tokens[pos.current];
    if (value != null) return t.type === type && t.value === value;
    return t.type === type;
  }
  function consume(type: TokenType, value?: string): Token | null {
    if (pos.current >= len) return null;
    const t = tokens[pos.current];
    if (value != null) {
      if (t.type !== type || t.value !== value) return null;
    } else if (t.type !== type) return null;
    pos.current++;
    return t;
  }
  function skipSep(): void {
    while (pos.current < len && (tokens[pos.current].type === TokenType.Sep || tokens[pos.current].value === ',' || tokens[pos.current].value === ';' || tokens[pos.current].value === '\n')) pos.current++;
    while (pos.current < len && tokens[pos.current].type === TokenType.Id && tokens[pos.current].value === '') pos.current++;
  }

  /** Parse group block content (nodes and/or nested groups) until closing Rbrace; consumes the Rbrace. */
  function parseGroupBlockContent(parentGroupId: string): string[] {
    const members: string[] = [];
    for (;;) {
      skipSep();
      if (at(TokenType.Rbrace)) {
        pos.current++;
        return members;
      }
      if (at(TokenType.Eof)) {
        warn('Missing closing } for group');
        return members;
      }
      if (at(TokenType.GroupKw)) {
        pos.current++;
        if (!at(TokenType.Id)) {
          warnings.push('Expected group ID after group');
          return members;
        }
        const innerId = tokens[pos.current].value;
        pos.current++;
        let innerLabel: string | undefined = innerId;
        if (at(TokenType.As)) {
          pos.current++;
          if (at(TokenType.String)) {
            innerLabel = tokens[pos.current].value;
            pos.current++;
          }
        }
        const innerStyle = parseBracketStyle(tokens, pos) ?? undefined;
        if (!consume(TokenType.Lbrace)) {
          warnings.push('Expected { after group id');
          return members;
        }
        const innerMembers = parseGroupBlockContent(innerId);
        ensureGroup(innerId, innerLabel !== innerId ? innerLabel : innerId, innerStyle, innerMembers);
        members.push(innerId);
        continue;
      }
      if (at(TokenType.Id)) {
        const mid = tokens[pos.current].value;
        pos.current++;
        let nodeLabel: string | undefined = mid;
        if (at(TokenType.As)) {
          pos.current++;
          if (at(TokenType.String)) {
            nodeLabel = tokens[pos.current].value;
            pos.current++;
          }
        }
        const nodeStyle = parseBracketStyle(tokens, pos) ?? undefined;
        const nextIsLbrace = at(TokenType.Lbrace);
        if (nextIsLbrace) {
          consume(TokenType.Lbrace);
          const innerMembers = parseGroupBlockContent(mid);
          ensureGroup(mid, nodeLabel !== mid ? nodeLabel : mid, undefined, innerMembers);
          members.push(mid);
        } else {
          ensureNode(mid, nodeLabel, nodeStyle, parentGroupId);
          members.push(mid);
        }
        continue;
      }
      warn('Expected node ID or nested group in group block');
      pos.current++;
    }
  }

  function parseSegment(): void {
    if (at(TokenType.Eof)) return;

    if (at(TokenType.GroupKw)) {
      pos.current++;
      if (!at(TokenType.Id)) {
        warnings.push('Expected group ID after group');
        return;
      }
      const groupId = tokens[pos.current].value;
      pos.current++;
      const style = parseBracketStyle(tokens, pos) ?? undefined;
      if (!consume(TokenType.Lbrace)) {
        warnings.push('Expected { after group id');
        return;
      }
      const members = parseGroupBlockContent(groupId);
      ensureGroup(groupId, groupId, style, members);
      return;
    }

    if (at(TokenType.Layout)) {
      pos.current++;
      if (!consume(TokenType.Lbrace)) { warnings.push('Expected { after layout'); return; }
      const layoutNodes: Record<string, { x: number; y: number; w?: number; h?: number; fixed?: boolean }> = {};
      const layoutGroups: Record<string, { x: number; y: number; w: number; h: number }> = {};
      const layoutEdges: Record<string, { bends?: Array<{ x: number; y: number }>; src_side?: string; src_t?: number; dst_side?: string; dst_t?: number }> = {};
      while (!at(TokenType.Rbrace) && !at(TokenType.Eof)) {
        skipSep();
        if (at(TokenType.Eof) || at(TokenType.Rbrace)) break;
        if (at(TokenType.Node)) {
          pos.current++;
          if (!at(TokenType.Id)) { warnings.push('Expected node ID in layout'); continue; }
          const nid = tokens[pos.current].value;
          pos.current++;
          skipSep();
          if (!consume(TokenType.Lbrace)) { warnings.push('Expected { after node ID in layout'); continue; }
          let x: number | undefined, y: number | undefined, w: number | undefined, h: number | undefined, fixed = false;
          while (!at(TokenType.Rbrace) && !at(TokenType.Eof)) {
            skipSep();
            if (at(TokenType.Rbrace)) break;
            if (at(TokenType.Id)) {
              const key = tokens[pos.current].value;
              pos.current++;
              if (at(TokenType.Equals)) {
                pos.current++;
                const vt = tokens[pos.current];
                if (vt && (vt.type === TokenType.Id || vt.type === TokenType.Number)) {
                  const val = vt.value;
                  pos.current++;
                  const n = Number(val);
                  if (key === 'x') x = n;
                  else if (key === 'y') y = n;
                  else if (key === 'w') w = n;
                  else if (key === 'h') h = n;
                  else if (key === 'fixed') fixed = val === 'true' || val === '1';
                }
              } else if (key === 'fixed') fixed = true;
            } else {
              pos.current++;
            }
          }
          if (at(TokenType.Rbrace)) pos.current++;
          if (x != null && y != null) layoutNodes[nid] = { x, y, w, h, fixed: fixed || undefined };
        } else if (at(TokenType.GroupKw)) {
          pos.current++;
          if (!at(TokenType.Id)) { warnings.push('Expected group ID in layout'); continue; }
          const gid = tokens[pos.current].value;
          pos.current++;
          skipSep();
          if (!consume(TokenType.Lbrace)) { warnings.push('Expected { after group ID in layout'); continue; }
          let x: number | undefined, y: number | undefined, w: number | undefined, h: number | undefined;
          while (!at(TokenType.Rbrace) && !at(TokenType.Eof)) {
            skipSep();
            if (at(TokenType.Rbrace)) break;
            if (at(TokenType.Id)) {
              const key = tokens[pos.current].value;
              pos.current++;
              if (at(TokenType.Equals)) {
                pos.current++;
                const vt = tokens[pos.current];
                if (vt && (vt.type === TokenType.Id || vt.type === TokenType.Number)) {
                  const val = vt.value;
                  pos.current++;
                  const n = Number(val);
                  if (key === 'x') x = n;
                  else if (key === 'y') y = n;
                  else if (key === 'w') w = n;
                  else if (key === 'h') h = n;
                }
              }
            } else {
              pos.current++;
            }
          }
          if (at(TokenType.Rbrace)) pos.current++;
          if (x != null && y != null && w != null && h != null) layoutGroups[gid] = { x, y, w, h };
        } else if (at(TokenType.EdgeKw)) {
          pos.current++;
          if (!at(TokenType.Id)) { warnings.push('Expected edge ID in layout'); continue; }
          const eid = tokens[pos.current].value;
          pos.current++;
          skipSep();
          let src_side: string | undefined, src_t: number | undefined, dst_side: string | undefined, dst_t: number | undefined;
          if (at(TokenType.Lbrace)) {
            pos.current++;
            while (!at(TokenType.Rbrace) && !at(TokenType.Eof)) {
              skipSep();
              if (at(TokenType.Rbrace)) break;
              if (at(TokenType.Id)) {
                const key = tokens[pos.current].value;
                pos.current++;
                if (at(TokenType.Equals)) {
                  pos.current++;
                  const valTok = tokens[pos.current];
                  const isNum = valTok && valTok.type === TokenType.Number;
                  const isId = valTok && valTok.type === TokenType.Id;
                  if (isNum || isId) {
                    const val = valTok!.value;
                    pos.current++;
                    const n = Number(val);
                    if (key === 'src_side') src_side = val;
                    else if (key === 'src_t') src_t = !Number.isNaN(n) ? n : undefined;
                    else if (key === 'dst_side') dst_side = val;
                    else if (key === 'dst_t') dst_t = !Number.isNaN(n) ? n : undefined;
                  }
                }
              } else {
                pos.current++;
              }
            }
            if (at(TokenType.Rbrace)) pos.current++;
            skipSep();
          }
          const bends: Array<{ x: number; y: number }> = [];
          if (at(TokenType.Bends)) {
            pos.current++;
            skipSep();
            if (consume(TokenType.Lbrace)) {
              while (!at(TokenType.Rbrace) && !at(TokenType.Eof)) {
                skipSep();
                if (at(TokenType.Rbrace)) break;
                if (at(TokenType.Lbrace)) {
                  pos.current++;
                  let px: number | undefined, py: number | undefined;
                  while (!at(TokenType.Rbrace) && !at(TokenType.Eof)) {
                    skipSep();
                    if (at(TokenType.Rbrace)) break;
                    if (at(TokenType.Id)) {
                      const key = tokens[pos.current].value;
                      pos.current++;
                      if (at(TokenType.Equals)) {
                        pos.current++;
                        const v2 = tokens[pos.current];
                        if (v2 && (v2.type === TokenType.Id || v2.type === TokenType.Number)) {
                          const val = v2.value;
                          pos.current++;
                          const n = Number(val);
                          if (key === 'x') px = n;
                          else if (key === 'y') py = n;
                        }
                      }
                    } else {
                      pos.current++;
                    }
                  }
                  if (at(TokenType.Rbrace)) pos.current++;
                  if (px != null && py != null) bends.push({ x: px, y: py });
                }
              }
              if (at(TokenType.Rbrace)) pos.current++;
            }
          }
          if (bends.length > 0 || src_side != null || src_t != null || dst_side != null || dst_t != null) {
            const edgeLayout: { bends?: Array<{ x: number; y: number }>; src_side?: string; src_t?: number; dst_side?: string; dst_t?: number } = {};
            if (bends.length > 0) edgeLayout.bends = bends;
            if (src_side != null) edgeLayout.src_side = src_side;
            if (src_t != null) edgeLayout.src_t = src_t;
            if (dst_side != null) edgeLayout.dst_side = dst_side;
            if (dst_t != null) edgeLayout.dst_t = dst_t;
            layoutEdges[eid] = edgeLayout;
          }
        } else {
          pos.current++;
        }
      }
      if (at(TokenType.Rbrace)) pos.current++;
      layout = {
        nodes: Object.keys(layoutNodes).length ? layoutNodes : undefined,
        groups: Object.keys(layoutGroups).length ? layoutGroups : undefined,
        edges: Object.keys(layoutEdges).length ? layoutEdges : undefined,
      };
      return;
    }

    if (at(TokenType.StyleKw)) {
      pos.current++;
      if (!consume(TokenType.Lbrace)) { warnings.push('Expected { after style'); return; }
      const styleNodes: Record<string, Record<string, unknown>> = {};
      const styleGroups: Record<string, Record<string, unknown>> = {};
      const styleEdges: Record<string, Record<string, unknown>> = {};
      const styleRels: Record<string, Record<string, unknown>> = {};
      while (!at(TokenType.Rbrace) && !at(TokenType.Eof)) {
        skipSep();
        if (at(TokenType.Eof) || at(TokenType.Rbrace)) break;
        if (at(TokenType.Node)) {
          pos.current++;
          if (!at(TokenType.Id)) { warnings.push('Expected node ID in style'); continue; }
          const nid = tokens[pos.current].value;
          pos.current++;
          const s = parseBracketStyle(tokens, pos);
          if (s && Object.keys(s).length > 0) styleNodes[nid] = s;
        } else if (at(TokenType.GroupKw)) {
          pos.current++;
          if (!at(TokenType.Id)) { warnings.push('Expected group ID in style'); continue; }
          const gid = tokens[pos.current].value;
          pos.current++;
          const s = parseBracketStyle(tokens, pos);
          if (s && Object.keys(s).length > 0) styleGroups[gid] = s;
        } else if (at(TokenType.EdgeKw)) {
          pos.current++;
          if (!at(TokenType.Id)) { warnings.push('Expected edge ID in style'); continue; }
          const eid = tokens[pos.current].value;
          pos.current++;
          const s = parseBracketStyle(tokens, pos);
          if (s && Object.keys(s).length > 0) styleEdges[eid] = s;
        } else if (at(TokenType.RelKw)) {
          pos.current++;
          if (!at(TokenType.Id)) { warnings.push('Expected relID in style'); continue; }
          const relId = tokens[pos.current].value;
          pos.current++;
          const s = parseBracketStyle(tokens, pos);
          if (s && Object.keys(s).length > 0) styleRels[relId] = s;
        } else {
          pos.current++;
        }
      }
      if (at(TokenType.Rbrace)) pos.current++;
      styleBlock = {
        nodes: Object.keys(styleNodes).length ? styleNodes : undefined,
        groups: Object.keys(styleGroups).length ? styleGroups : undefined,
        edges: Object.keys(styleEdges).length ? styleEdges : undefined,
        rels: Object.keys(styleRels).length ? styleRels : undefined,
      };
      return;
    }

    if (at(TokenType.String)) {
      const labelTok = tokens[pos.current];
      const label = labelTok.value;
      pos.current++;
      if (!consume(TokenType.As)) {
        warnings.push('Expected "as" after string');
        return;
      }
      if (!at(TokenType.Id)) {
        warnings.push('Expected group or node ID after "as"');
        return;
      }
      const idTok = tokens[pos.current];
      const id = idTok.value;
      pos.current++;
      const style = parseBracketStyle(tokens, pos) ?? undefined;
      if (at(TokenType.Lbrace)) {
        consume(TokenType.Lbrace);
        const members = parseGroupBlockContent(id);
        ensureGroup(id, label, style, members);
      } else {
        ensureNode(id, label, style);
      }
      return;
    }

    if (at(TokenType.Id)) {
      const first = tokens[pos.current].value;
      const next = pos.current + 1 < len ? tokens[pos.current + 1].type : TokenType.Eof;
      if (next === TokenType.Arrow) {
        pos.current++;
        consume(TokenType.Arrow);
        if (!at(TokenType.Id) && !at(TokenType.String)) {
          warnings.push('Expected target node after -->');
          return;
        }
        let toId: string;
        if (tokens[pos.current].type === TokenType.String) {
          toId = tokens[pos.current].value;
          pos.current++;
        } else {
          toId = tokens[pos.current].value;
          pos.current++;
        }
        ensureNode(first, first);
        ensureNode(toId, toId);
        let relId: string | undefined;
        let label: string | undefined;
        if (at(TokenType.Colon)) {
          pos.current++;
          if (at(TokenType.Id)) {
            relId = tokens[pos.current].value;
            pos.current++;
            if (at(TokenType.As)) {
              pos.current++;
              if (at(TokenType.String)) {
                label = tokens[pos.current].value;
                pos.current++;
              }
            }
          } else if (at(TokenType.String)) {
            const s = tokens[pos.current].value;
            relId = s;
            label = s;
            pos.current++;
          }
        }
        const style = parseBracketStyle(tokens, pos) ?? undefined;
        edges.push({ from: first, to: toId, relId, label, style });
        return;
      }
      let hasBrace = next === TokenType.Lbrace;
      if (next === TokenType.Lbracket) {
        let j = pos.current + 2;
        let depth = 1;
        while (j < len && depth > 0) {
          if (tokens[j].type === TokenType.Lbracket) depth++;
          else if (tokens[j].type === TokenType.Rbracket) depth--;
          j++;
        }
        if (j < len && tokens[j].type === TokenType.Lbrace) hasBrace = true;
      }
      // GroupID as "label" { ... }: look ahead for Id, As, String, [optional style], Lbrace
      if (!hasBrace && next === TokenType.As) {
        let j = pos.current + 1; // after Id
        if (j + 1 < len && tokens[j].type === TokenType.As && tokens[j + 1].type === TokenType.String) {
          j += 2; // after String
          while (j < len && tokens[j].type === TokenType.Lbracket) {
            let depth = 1;
            j++;
            while (j < len && depth > 0) {
              if (tokens[j].type === TokenType.Lbracket) depth++;
              else if (tokens[j].type === TokenType.Rbracket) depth--;
              j++;
            }
          }
          if (j < len && tokens[j].type === TokenType.Lbrace) hasBrace = true;
        }
      }
      if (hasBrace) {
        const groupId = tokens[pos.current].value;
        pos.current++;
        let groupLabel: string | undefined = groupId;
        if (at(TokenType.As)) {
          pos.current++;
          if (at(TokenType.String)) {
            groupLabel = tokens[pos.current].value;
            pos.current++;
          }
        }
        const style = parseBracketStyle(tokens, pos) ?? undefined;
        if (!at(TokenType.Lbrace)) {
          warnings.push('Expected { after group id or style');
          return;
        }
        consume(TokenType.Lbrace);
        const members = parseGroupBlockContent(groupId);
        ensureGroup(groupId, groupLabel !== groupId ? groupLabel : groupId, style, members);
        return;
      }
      pos.current++;
      const style = parseBracketStyle(tokens, pos) ?? undefined;
      ensureNode(first, first, style);
      return;
    }

    if (at(TokenType.Node)) {
      pos.current++;
      if (at(TokenType.String)) {
        const label = tokens[pos.current].value;
        pos.current++;
        if (!consume(TokenType.As)) { warnings.push('Expected "as" after node label'); return; }
        if (!at(TokenType.Id)) { warnings.push('Expected node ID'); return; }
        const id = tokens[pos.current].value;
        pos.current++;
        const style = parseBracketStyle(tokens, pos) ?? undefined;
        ensureNode(id, label, style);
      } else if (at(TokenType.Id)) {
        const id = tokens[pos.current].value;
        pos.current++;
        const style = parseBracketStyle(tokens, pos) ?? undefined;
        ensureNode(id, id, style);
      }
      return;
    }

    pos.current++;
  }

  const maxIterations = Math.max(len * 3, 10000);
  let iterations = 0;
  while (pos.current < len && !at(TokenType.Eof)) {
    if (iterations++ > maxIterations) {
      warn('Parse iteration limit exceeded (possible infinite loop or malformed input)');
      break;
    }
    skipSep();
    if (at(TokenType.Eof)) break;
    parseSegment();
  }

  return { nodes, groups, edges, layout, style: styleBlock, warnings };
}
