const kt = `<!-- relatos/src/assets/icons/icons.svg -->
<svg xmlns="http://www.w3.org/2000/svg" style="display:none">
  <!-- =========================================
       Edit (pencil) : toggle "edit relations"
       ========================================= -->
  <symbol id="icon-edit" viewBox="0 0 24 24">
    <path
      d="M12 20h9"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.5 3.5a2.12 2.12 0 0 1 3 3L8 18l-4 1 1-4 11.5-11.5z"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </symbol>

  <!-- =========================================
       Sun (day/night shading toggle)
       ========================================= -->
  <symbol id="icon-sun" viewBox="0 0 24 24">
    <circle
      cx="12"
      cy="12"
      r="4"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 2v2"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 20v2"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2 12h2"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20 12h2"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.93 4.93l1.41 1.41"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.66 17.66l1.41 1.41"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19.07 4.93l-1.41 1.41"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.34 17.66l-1.41 1.41"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </symbol>

  <!-- =========================================
       Home (fit to graph / reset view)
       ========================================= -->
  <symbol id="icon-home" viewBox="0 0 24 24">
    <path
      d="M3 10.5l9-7 9 7"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5 9.8V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.8"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </symbol>

  <!-- =========================================
       Relations (edges show/hide toggle)
       - Universal: 3 nodes + connections
       ========================================= -->
  <symbol id="icon-relations" viewBox="0 0 24 24">
    <circle
      cx="6.5"
      cy="7"
      r="2.5"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle
      cx="17.5"
      cy="6.5"
      r="2.5"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle
      cx="12"
      cy="17.5"
      r="2.5"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.8 7.7l6.4-0.6"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.2 9.1l2.7 6"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.2 8.6l-2.6 6.1"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </symbol>

  <!-- Close / Cancel: circle with X (for Cancel edit button) -->
  <symbol id="icon-close" viewBox="0 0 24 24">
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    />
    <path
      d="M8 8l8 8M16 8l-8 8"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
  </symbol>

  <!-- =========================================
       Undo / Restore previous state
       - Universal: curved left arrow (undo)
       ========================================= -->
  <symbol id="icon-undo" viewBox="0 0 24 24">
    <path
      d="M7 7L10.5 3.5"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7 7L10.5 10.5"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <path
      d="M7 7h6.5a7.5 7.5 0 0 1 0 15H6"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </symbol>

  <!-- =========================================
       Redo: curved right arrow (mirror of undo)
       ========================================= -->
  <symbol id="icon-redo" viewBox="0 0 24 24">
    <path
      d="M17 7L13.5 3.5"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17 7L13.5 10.5"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17 7h-6.5a7.5 7.5 0 0 0 0 15H18"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </symbol>

  <symbol id="icon-view-graph" viewBox="0 0 24 24">
    <!-- Left node (pushed to the left) -->
    <rect
      x="2.5"
      y="8.5"
      width="5"
      height="7"
      rx="1.5"
      ry="1.5"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    />

    <!-- Right node (pushed to the right) -->
    <rect
      x="16.5"
      y="8.5"
      width="5"
      height="7"
      rx="1.5"
      ry="1.5"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    />

    <!-- Bidirectional arrow (long and clear) -->
    <path
      d="M8.8 12h6.4"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />

    <!-- Left arrow head (points left) -->
    <path
      d="M8.8 12l1.8-1.8"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.8 12l1.8 1.8"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <!-- Right arrow head (points right) -->
    <path
      d="M15.2 12l-1.8-1.8"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.2 12l-1.8 1.8"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </symbol>

  <symbol id="icon-view-globe3d" viewBox="0 0 24 24">
    <!-- Globe outline: as large as possible inside viewBox -->
    <circle
      cx="12"
      cy="12"
      r="11"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    />

    <!-- Left node (pushed left) -->
    <rect
      x="4.2"
      y="8.5"
      width="4.6"
      height="7"
      rx="1.3"
      ry="1.3"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    />
    <!-- Right node (pushed right) -->
    <rect
      x="15.2"
      y="8.5"
      width="4.6"
      height="7"
      rx="1.3"
      ry="1.3"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    />

    <!-- Bidirectional arrow (longer, not crushed) -->
    <path
      d="M9.6 12h4.8"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
    <!-- Left arrow head (points left) -->
    <path
      d="M9.6 12l1.6-1.6"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.6 12l1.6 1.6"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <!-- Right arrow head (points right) -->
    <path
      d="M14.4 12l-1.6-1.6"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.4 12l-1.6 1.6"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </symbol>

  <symbol id="icon-view-map" viewBox="0 0 24 24">
    <!-- Map frame: as large as possible inside viewBox -->
    <rect
      x="1"
      y="3"
      width="22"
      height="18"
      rx="3"
      ry="3"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    />

    <!-- Left node (pushed left) -->
    <rect
      x="4.2"
      y="8.5"
      width="4.6"
      height="7"
      rx="1.3"
      ry="1.3"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    />
    <!-- Right node (pushed right) -->
    <rect
      x="15.2"
      y="8.5"
      width="4.6"
      height="7"
      rx="1.3"
      ry="1.3"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    />

    <!-- Bidirectional arrow (longer, not crushed) -->
    <path
      d="M9.6 12h4.8"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
    <!-- Left arrow head (points left) -->
    <path
      d="M9.6 12l1.6-1.6"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.6 12l1.6 1.6"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <!-- Right arrow head (points right) -->
    <path
      d="M14.4 12l-1.6-1.6"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.4 12l-1.6 1.6"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </symbol>

  <symbol id="icon-map-tiles" viewBox="0 0 24 24">
    <!-- Top-left (filled) -->
    <rect
      x="4"
      y="4"
      width="7"
      height="7"
      rx="1.2"
      ry="1.2"
      fill="currentColor"
      stroke="currentColor"
      stroke-width="2"
    />
    <!-- Top-right (outline) -->
    <rect
      x="14"
      y="4"
      width="7"
      height="7"
      rx="1.2"
      ry="1.2"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    />
    <!-- Bottom-left (outline) -->
    <rect
      x="4"
      y="14"
      width="7"
      height="7"
      rx="1.2"
      ry="1.2"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    />
    <!-- Bottom-right (filled) -->
    <rect
      x="14"
      y="14"
      width="7"
      height="7"
      rx="1.2"
      ry="1.2"
      fill="currentColor"
      stroke="currentColor"
      stroke-width="2"
    />
  </symbol>

  <!-- =========================================
       Export (share/external link icon)
       - For relat export (copy to clipboard)
       ========================================= -->
  <symbol id="icon-export" viewBox="0 0 24 24">
    <!-- Box -->
    <path
      d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <!-- Arrow up -->
    <polyline
      points="17 8 12 3 7 8"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <line
      x1="12"
      y1="3"
      x2="12"
      y2="15"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </symbol>

  <!-- =========================================
       Trash (delete bend point / remove)
       - Universal: trash can with lid
       ========================================= -->
  <symbol id="icon-trash" viewBox="0 0 24 24">
    <!-- Lid -->
    <path
      d="M4 7h16"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <!-- Handle -->
    <path
      d="M10 4h4"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <!-- Top cap -->
    <path
      d="M9 6h6"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <!-- Can body -->
    <path
      d="M7 7l1 14h8l1-14"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linejoin="round"
    />
    <!-- Inner lines -->
    <path
      d="M10 11v7"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      d="M14 11v7"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
  </symbol>

</svg>`;
let ct = !1;
const yt = "relatos-icons-sprite";
function Q() {
  if (ct)
    return;
  if (document.getElementById(yt)) {
    ct = !0;
    return;
  }
  const w = document.createElement("div");
  w.id = yt, w.style.display = "none", w.innerHTML = kt, document.body.appendChild(w), ct = !0;
}
async function Mt(w) {
  try {
    if (navigator.clipboard && window.isSecureContext)
      return await navigator.clipboard.writeText(w), !0;
    {
      const t = document.createElement("textarea");
      t.value = w, t.style.position = "fixed", t.style.left = "-999999px", t.style.top = "-999999px", document.body.appendChild(t), t.focus(), t.select();
      const e = document.execCommand("copy");
      return document.body.removeChild(t), e;
    }
  } catch (t) {
    return console.error("Failed to copy to clipboard:", t), !1;
  }
}
function Nt(w) {
  let t = "", e = 0;
  const s = w.length;
  let i = 0;
  for (; e < s; ) {
    const n = w[e];
    if (n === "[") {
      i++, t += n, e++;
      continue;
    }
    if (n === "]") {
      i--, t += n, e++;
      continue;
    }
    if (i > 0) {
      t += n, e++;
      continue;
    }
    if (n === "/" && w[e + 1] === "/") {
      for (e += 2; e < s && w[e] !== `
` && w[e] !== "\r"; ) e++;
      continue;
    }
    if (n === "#") {
      for (e++; e < s && w[e] !== `
` && w[e] !== "\r"; ) e++;
      continue;
    }
    if (n === "/" && w[e + 1] === "*") {
      for (e += 2; e < s - 1 && !(w[e] === "*" && w[e + 1] === "/"); ) e++;
      e = e < s - 1 ? e + 2 : s;
      continue;
    }
    t += n, e++;
  }
  return t;
}
function _t(w) {
  const t = [], e = [], s = w.length;
  let i = 0, n = 0, h = 0;
  function a() {
    for (; i < s && n === 0 && h === 0; ) {
      const r = w[i];
      if (r === `
` || r === "\r" || r === "," || r === ";") {
        t.push({ type: 18, value: r, offset: i }), r === "\r" && w[i + 1] === `
` && i++, i++;
        continue;
      }
      if (/[\s]/.test(r)) {
        i++;
        continue;
      }
      break;
    }
  }
  for (; i < s && (a(), !(i >= s)); ) {
    const r = i, c = w[i];
    if (c === "{") {
      n++, t.push({ type: 4, value: "{", offset: r }), i++;
      continue;
    }
    if (c === "}") {
      n--, t.push({ type: 5, value: "}", offset: r }), i++;
      continue;
    }
    if (c === "[") {
      h++, t.push({ type: 6, value: "[", offset: r }), i++;
      continue;
    }
    if (c === "]") {
      h--, t.push({ type: 7, value: "]", offset: r }), i++;
      continue;
    }
    if (c === ":") {
      t.push({ type: 8, value: ":", offset: r }), i++;
      continue;
    }
    if (c === "=") {
      t.push({ type: 9, value: "=", offset: r }), i++;
      continue;
    }
    if (c === "#" && i + 1 < s && /[0-9a-fA-F]/.test(w[i + 1])) {
      let l = "#";
      for (i++; i < s && /[0-9a-fA-F]/.test(w[i]); )
        l += w[i], i++;
      t.push({ type: 0, value: l, offset: r });
      continue;
    }
    if (c === "-" && w[i + 1] === "-" && w[i + 2] === ">") {
      t.push({ type: 3, value: "-->", offset: r }), i += 3;
      continue;
    }
    if (c === '"' || c === "'") {
      const l = c;
      i++;
      let d = "";
      for (; i < s && w[i] !== l; ) {
        if (w[i] === "\\") {
          i++, d += w[i] ?? "", i++;
          continue;
        }
        d += w[i], i++;
      }
      i >= s ? e.push(`Unclosed string at ${r}`) : i++, t.push({ type: 2, value: d, offset: r });
      continue;
    }
    if (/\d/.test(c) || c === "." && i + 1 < s && /\d/.test(w[i + 1])) {
      const l = i;
      for (; i < s && /\d/.test(w[i]); ) i++;
      let d = !1;
      if (i < s && w[i] === "." && i + 1 < s && /\d/.test(w[i + 1]))
        for (d = !0, i++; i < s && /\d/.test(w[i]); ) i++;
      const o = w.slice(l, i);
      d ? t.push({ type: 1, value: o, offset: l }) : t.push({ type: 0, value: o, offset: l });
      continue;
    }
    if (/[a-zA-Z_0-9_\u0080-\uFFFF]/.test(c) || c === "-" && (i + 2 >= s || w[i + 1] !== "-" || w[i + 2] !== ">")) {
      let l = "";
      for (; i < s; ) {
        const d = w[i];
        if (d === "-" && i + 2 < s && w[i + 1] === "-" && w[i + 2] === ">" || !/[a-zA-Z_0-9\u0080-\uFFFF-]/.test(d) && !(d === "." && l.length > 0)) break;
        l += d, i++;
      }
      l === "as" ? t.push({ type: 10, value: l, offset: r }) : l === "node" ? t.push({ type: 11, value: l, offset: r }) : l === "layout" ? t.push({ type: 12, value: l, offset: r }) : l === "style" ? t.push({ type: 13, value: l, offset: r }) : l === "rel" ? t.push({ type: 14, value: l, offset: r }) : l === "group" ? t.push({ type: 15, value: l, offset: r }) : l === "edge" ? t.push({ type: 16, value: l, offset: r }) : l === "bends" ? t.push({ type: 17, value: l, offset: r }) : l === "fixed" ? t.push({ type: 0, value: l, offset: r }) : t.push({ type: 0, value: l, offset: r });
      continue;
    }
    i++;
  }
  return t.push({ type: 19, value: "", offset: s }), { tokens: t, errors: e };
}
function Dt(w) {
  const t = w.trim();
  return t === "true" ? !0 : t === "false" ? !1 : /^#[\da-fA-F]+$/.test(t) ? t : /^-?\d+(\.\d+)?$/.test(t) ? Number(t) : t.startsWith('"') && t.endsWith('"') || t.startsWith("'") && t.endsWith("'") ? t.slice(1, -1).replace(/\\"/g, '"').replace(/\\'/g, "'") : t;
}
function X(w, t) {
  if (t.current >= w.length || w[t.current].type !== 6) return null;
  t.current++;
  const e = {}, s = w.length;
  for (; t.current < s && w[t.current].type !== 7; ) {
    const i = w[t.current];
    if (i.type === 0) {
      const n = i.value;
      if (t.current++, t.current < s && w[t.current].type === 9) {
        t.current++;
        const h = w[t.current];
        let a = !0;
        h && (h.type === 0 || h.type === 1 || h.type === 2) && (a = h.type === 2 ? h.value : Dt(h.value), t.current++), e[n] = a;
      } else
        e[n] = !0;
    } else
      t.current++;
    for (; t.current < s && (w[t.current].type === 18 || w[t.current].value === "," || w[t.current].value === ";"); ) t.current++;
  }
  return t.current < s && w[t.current].type === 7 && t.current++, e;
}
function mt(w, t) {
  if (!(!w && !t))
    return w ? t ? { ...w, ...t } : w : t;
}
function Pt(w) {
  const t = [], e = Nt(w), { tokens: s, errors: i } = _t(e);
  t.push(...i);
  const n = {}, h = {}, a = [];
  let r, c;
  function l(T, A, E, S) {
    const I = n[T];
    I ? (A !== void 0 && A !== T && (I.label = A), I.style = mt(I.style, E) ?? I.style, S !== void 0 && (I.group = S)) : n[T] = { id: T, label: A ?? T, style: E ?? void 0, group: S };
  }
  function d(T, A, E, S) {
    const I = h[T];
    I ? (A !== void 0 && A !== T && (I.label = A), I.style = mt(I.style, E) ?? I.style, S && (I.members = [.../* @__PURE__ */ new Set([...I.members, ...S])])) : h[T] = { id: T, label: A ?? T, style: E ?? void 0, members: S ?? [] };
  }
  const o = { current: 0 }, u = s.length;
  function p(T) {
    let A = 1, E = 1;
    for (let S = 0; S < T && S < e.length; S++)
      e[S] === `
` ? (A++, E = 1) : E++;
    return { line: A, col: E };
  }
  function f(T) {
    const A = o.current < u ? s[o.current].offset : e.length, { line: E, col: S } = p(A);
    t.push(`${T} (line ${E}, column ${S})`);
  }
  function g(T, A) {
    return o.current >= u ? T === 19 : s[o.current].type === T;
  }
  function y(T, A) {
    if (o.current >= u) return null;
    const E = s[o.current];
    return E.type !== T ? null : (o.current++, E);
  }
  function m() {
    for (; o.current < u && (s[o.current].type === 18 || s[o.current].value === "," || s[o.current].value === ";" || s[o.current].value === `
`); ) o.current++;
    for (; o.current < u && s[o.current].type === 0 && s[o.current].value === ""; ) o.current++;
  }
  function b(T) {
    const A = [];
    for (; ; ) {
      if (m(), g(
        5
        /* Rbrace */
      ))
        return o.current++, A;
      if (g(
        19
        /* Eof */
      ))
        return f("Missing closing } for group"), A;
      if (g(
        15
        /* GroupKw */
      )) {
        if (o.current++, !g(
          0
          /* Id */
        ))
          return t.push("Expected group ID after group"), A;
        const E = s[o.current].value;
        o.current++;
        let S = E;
        g(
          10
          /* As */
        ) && (o.current++, g(
          2
          /* String */
        ) && (S = s[o.current].value, o.current++));
        const I = X(s, o) ?? void 0;
        if (!y(
          4
          /* Lbrace */
        ))
          return t.push("Expected { after group id"), A;
        const x = b(E);
        d(E, S !== E ? S : E, I, x), A.push(E);
        continue;
      }
      if (g(
        0
        /* Id */
      )) {
        const E = s[o.current].value;
        o.current++;
        let S = E;
        g(
          10
          /* As */
        ) && (o.current++, g(
          2
          /* String */
        ) && (S = s[o.current].value, o.current++));
        const I = X(s, o) ?? void 0;
        if (g(
          4
          /* Lbrace */
        )) {
          y(
            4
            /* Lbrace */
          );
          const L = b(E);
          d(E, S !== E ? S : E, void 0, L), A.push(E);
        } else
          l(E, S, I, T), A.push(E);
        continue;
      }
      f("Expected node ID or nested group in group block"), o.current++;
    }
  }
  function C() {
    if (!g(
      19
      /* Eof */
    )) {
      if (g(
        15
        /* GroupKw */
      )) {
        if (o.current++, !g(
          0
          /* Id */
        )) {
          t.push("Expected group ID after group");
          return;
        }
        const T = s[o.current].value;
        o.current++;
        const A = X(s, o) ?? void 0;
        if (!y(
          4
          /* Lbrace */
        )) {
          t.push("Expected { after group id");
          return;
        }
        const E = b(T);
        d(T, T, A, E);
        return;
      }
      if (g(
        12
        /* Layout */
      )) {
        if (o.current++, !y(
          4
          /* Lbrace */
        )) {
          t.push("Expected { after layout");
          return;
        }
        const T = {}, A = {}, E = {};
        for (; !g(
          5
          /* Rbrace */
        ) && !g(
          19
          /* Eof */
        ) && (m(), !(g(
          19
          /* Eof */
        ) || g(
          5
          /* Rbrace */
        ))); )
          if (g(
            11
            /* Node */
          )) {
            if (o.current++, !g(
              0
              /* Id */
            )) {
              t.push("Expected node ID in layout");
              continue;
            }
            const S = s[o.current].value;
            if (o.current++, m(), !y(
              4
              /* Lbrace */
            )) {
              t.push("Expected { after node ID in layout");
              continue;
            }
            let I, x, L, k, N = !1;
            for (; !g(
              5
              /* Rbrace */
            ) && !g(
              19
              /* Eof */
            ) && (m(), !g(
              5
              /* Rbrace */
            )); )
              if (g(
                0
                /* Id */
              )) {
                const M = s[o.current].value;
                if (o.current++, g(
                  9
                  /* Equals */
                )) {
                  o.current++;
                  const _ = s[o.current];
                  if (_ && (_.type === 0 || _.type === 1)) {
                    const D = _.value;
                    o.current++;
                    const P = Number(D);
                    M === "x" ? I = P : M === "y" ? x = P : M === "w" ? L = P : M === "h" ? k = P : M === "fixed" && (N = D === "true" || D === "1");
                  }
                } else M === "fixed" && (N = !0);
              } else
                o.current++;
            g(
              5
              /* Rbrace */
            ) && o.current++, I != null && x != null && (T[S] = { x: I, y: x, w: L, h: k, fixed: N || void 0 });
          } else if (g(
            15
            /* GroupKw */
          )) {
            if (o.current++, !g(
              0
              /* Id */
            )) {
              t.push("Expected group ID in layout");
              continue;
            }
            const S = s[o.current].value;
            if (o.current++, m(), !y(
              4
              /* Lbrace */
            )) {
              t.push("Expected { after group ID in layout");
              continue;
            }
            let I, x, L, k;
            for (; !g(
              5
              /* Rbrace */
            ) && !g(
              19
              /* Eof */
            ) && (m(), !g(
              5
              /* Rbrace */
            )); )
              if (g(
                0
                /* Id */
              )) {
                const N = s[o.current].value;
                if (o.current++, g(
                  9
                  /* Equals */
                )) {
                  o.current++;
                  const M = s[o.current];
                  if (M && (M.type === 0 || M.type === 1)) {
                    const _ = M.value;
                    o.current++;
                    const D = Number(_);
                    N === "x" ? I = D : N === "y" ? x = D : N === "w" ? L = D : N === "h" && (k = D);
                  }
                }
              } else
                o.current++;
            g(
              5
              /* Rbrace */
            ) && o.current++, I != null && x != null && L != null && k != null && (A[S] = { x: I, y: x, w: L, h: k });
          } else if (g(
            16
            /* EdgeKw */
          )) {
            if (o.current++, !g(
              0
              /* Id */
            )) {
              t.push("Expected edge ID in layout");
              continue;
            }
            const S = s[o.current].value;
            o.current++, m();
            let I, x, L, k;
            if (g(
              4
              /* Lbrace */
            )) {
              for (o.current++; !g(
                5
                /* Rbrace */
              ) && !g(
                19
                /* Eof */
              ) && (m(), !g(
                5
                /* Rbrace */
              )); )
                if (g(
                  0
                  /* Id */
                )) {
                  const M = s[o.current].value;
                  if (o.current++, g(
                    9
                    /* Equals */
                  )) {
                    o.current++;
                    const _ = s[o.current], D = _ && _.type === 1, P = _ && _.type === 0;
                    if (D || P) {
                      const O = _.value;
                      o.current++;
                      const H = Number(O);
                      M === "src_side" ? I = O : M === "src_t" ? x = Number.isNaN(H) ? void 0 : H : M === "dst_side" ? L = O : M === "dst_t" && (k = Number.isNaN(H) ? void 0 : H);
                    }
                  }
                } else
                  o.current++;
              g(
                5
                /* Rbrace */
              ) && o.current++, m();
            }
            const N = [];
            if (g(
              17
              /* Bends */
            ) && (o.current++, m(), y(
              4
              /* Lbrace */
            ))) {
              for (; !g(
                5
                /* Rbrace */
              ) && !g(
                19
                /* Eof */
              ) && (m(), !g(
                5
                /* Rbrace */
              )); )
                if (g(
                  4
                  /* Lbrace */
                )) {
                  o.current++;
                  let M, _;
                  for (; !g(
                    5
                    /* Rbrace */
                  ) && !g(
                    19
                    /* Eof */
                  ) && (m(), !g(
                    5
                    /* Rbrace */
                  )); )
                    if (g(
                      0
                      /* Id */
                    )) {
                      const D = s[o.current].value;
                      if (o.current++, g(
                        9
                        /* Equals */
                      )) {
                        o.current++;
                        const P = s[o.current];
                        if (P && (P.type === 0 || P.type === 1)) {
                          const O = P.value;
                          o.current++;
                          const H = Number(O);
                          D === "x" ? M = H : D === "y" && (_ = H);
                        }
                      }
                    } else
                      o.current++;
                  g(
                    5
                    /* Rbrace */
                  ) && o.current++, M != null && _ != null && N.push({ x: M, y: _ });
                }
              g(
                5
                /* Rbrace */
              ) && o.current++;
            }
            if (N.length > 0 || I != null || x != null || L != null || k != null) {
              const M = {};
              N.length > 0 && (M.bends = N), I != null && (M.src_side = I), x != null && (M.src_t = x), L != null && (M.dst_side = L), k != null && (M.dst_t = k), E[S] = M;
            }
          } else
            o.current++;
        g(
          5
          /* Rbrace */
        ) && o.current++, r = {
          nodes: Object.keys(T).length ? T : void 0,
          groups: Object.keys(A).length ? A : void 0,
          edges: Object.keys(E).length ? E : void 0
        };
        return;
      }
      if (g(
        13
        /* StyleKw */
      )) {
        if (o.current++, !y(
          4
          /* Lbrace */
        )) {
          t.push("Expected { after style");
          return;
        }
        const T = {}, A = {}, E = {}, S = {};
        for (; !g(
          5
          /* Rbrace */
        ) && !g(
          19
          /* Eof */
        ) && (m(), !(g(
          19
          /* Eof */
        ) || g(
          5
          /* Rbrace */
        ))); )
          if (g(
            11
            /* Node */
          )) {
            if (o.current++, !g(
              0
              /* Id */
            )) {
              t.push("Expected node ID in style");
              continue;
            }
            const I = s[o.current].value;
            o.current++;
            const x = X(s, o);
            x && Object.keys(x).length > 0 && (T[I] = x);
          } else if (g(
            15
            /* GroupKw */
          )) {
            if (o.current++, !g(
              0
              /* Id */
            )) {
              t.push("Expected group ID in style");
              continue;
            }
            const I = s[o.current].value;
            o.current++;
            const x = X(s, o);
            x && Object.keys(x).length > 0 && (A[I] = x);
          } else if (g(
            16
            /* EdgeKw */
          )) {
            if (o.current++, !g(
              0
              /* Id */
            )) {
              t.push("Expected edge ID in style");
              continue;
            }
            const I = s[o.current].value;
            o.current++;
            const x = X(s, o);
            x && Object.keys(x).length > 0 && (E[I] = x);
          } else if (g(
            14
            /* RelKw */
          )) {
            if (o.current++, !g(
              0
              /* Id */
            )) {
              t.push("Expected relID in style");
              continue;
            }
            const I = s[o.current].value;
            o.current++;
            const x = X(s, o);
            x && Object.keys(x).length > 0 && (S[I] = x);
          } else
            o.current++;
        g(
          5
          /* Rbrace */
        ) && o.current++, c = {
          nodes: Object.keys(T).length ? T : void 0,
          groups: Object.keys(A).length ? A : void 0,
          edges: Object.keys(E).length ? E : void 0,
          rels: Object.keys(S).length ? S : void 0
        };
        return;
      }
      if (g(
        0
        /* Id */
      )) {
        const T = s[o.current].value, A = o.current + 1 < u ? s[o.current + 1].type : 19;
        if (A === 3) {
          if (o.current++, y(
            3
            /* Arrow */
          ), !g(
            0
            /* Id */
          ) && !g(
            2
            /* String */
          )) {
            t.push("Expected target node after -->");
            return;
          }
          let x;
          s[o.current].type, x = s[o.current].value, o.current++, l(T, T), l(x, x);
          let L, k;
          if (g(
            8
            /* Colon */
          )) {
            if (o.current++, g(
              0
              /* Id */
            ))
              L = s[o.current].value, o.current++, g(
                10
                /* As */
              ) && (o.current++, g(
                2
                /* String */
              ) && (k = s[o.current].value, o.current++));
            else if (g(
              2
              /* String */
            )) {
              const M = s[o.current].value;
              L = M, k = M, o.current++;
            }
          }
          const N = X(s, o) ?? void 0;
          a.push({ from: T, to: x, relId: L, label: k, style: N });
          return;
        }
        let E = A === 4;
        if (A === 6) {
          let x = o.current + 2, L = 1;
          for (; x < u && L > 0; )
            s[x].type === 6 ? L++ : s[x].type === 7 && L--, x++;
          x < u && s[x].type === 4 && (E = !0);
        }
        if (!E && A === 10) {
          let x = o.current + 1;
          if (x + 1 < u && s[x].type === 10 && s[x + 1].type === 2) {
            for (x += 2; x < u && s[x].type === 6; ) {
              let L = 1;
              for (x++; x < u && L > 0; )
                s[x].type === 6 ? L++ : s[x].type === 7 && L--, x++;
            }
            x < u && s[x].type === 4 && (E = !0);
          }
        }
        if (E) {
          const x = s[o.current].value;
          o.current++;
          let L = x;
          g(
            10
            /* As */
          ) && (o.current++, g(
            2
            /* String */
          ) && (L = s[o.current].value, o.current++));
          const k = X(s, o) ?? void 0;
          if (!g(
            4
            /* Lbrace */
          )) {
            t.push("Expected { after group id or style");
            return;
          }
          y(
            4
            /* Lbrace */
          );
          const N = b(x);
          d(x, L !== x ? L : x, k, N);
          return;
        }
        o.current++;
        let S = T;
        g(
          10
          /* As */
        ) && (o.current++, g(
          2
          /* String */
        ) && (S = s[o.current].value, o.current++));
        const I = X(s, o) ?? void 0;
        l(T, S ?? T, I);
        return;
      }
      if (g(
        11
        /* Node */
      )) {
        if (o.current++, !g(
          0
          /* Id */
        )) {
          t.push("Expected node ID after node");
          return;
        }
        const T = s[o.current].value;
        o.current++;
        let A = T;
        g(
          10
          /* As */
        ) && (o.current++, g(
          2
          /* String */
        ) && (A = s[o.current].value, o.current++));
        const E = X(s, o) ?? void 0;
        l(T, A ?? T, E);
        return;
      }
      o.current++;
    }
  }
  const B = Math.max(u * 3, 1e4);
  let v = 0;
  for (; o.current < u && !g(
    19
    /* Eof */
  ); ) {
    if (v++ > B) {
      f("Parse iteration limit exceeded (possible infinite loop or malformed input)");
      break;
    }
    if (m(), g(
      19
      /* Eof */
    )) break;
    C();
  }
  return { nodes: n, groups: h, edges: a, layout: r, style: c, warnings: t };
}
function at(w, t = "info.", e) {
  if (!w || typeof w != "object") return [];
  const s = [];
  for (const [i, n] of Object.entries(w)) {
    if (n === void 0 || e?.has(i)) continue;
    const h = t + i;
    n != null && typeof n == "object" && !Array.isArray(n) && !(n instanceof Date) ? s.push(...at(n, h + ".")) : s.push(`${h}=${typeof n == "string" ? JSON.stringify(n) : n}`);
  }
  return s;
}
function Gt(w, t, e) {
  if (!e || typeof e != "object") return;
  const s = /* @__PURE__ */ new Set();
  return w && w.length >= 2 && (s.add("lat"), s.add("lon"), s.add("latitude"), s.add("longitude")), t != null && e.color === t && s.add("color"), s.size > 0 ? s : void 0;
}
function wt(w, t, e, s) {
  const i = [];
  w && (w.color != null && i.push(`color=${w.color}`), w.borderColor != null && i.push(`border=${w.borderColor}`), t || (w.width != null && i.push(`width=${w.width}`), w.height != null && i.push(`height=${w.height}`))), e && e.length >= 2 && i.push(`lat=${e[0]}`, `lon=${e[1]}`);
  const n = Gt(e, w?.color, s);
  return i.push(...at(s, "info.", n)), i.length ? `[${i.join(",")}]` : "";
}
function bt(w, t, e) {
  const s = [];
  return w && (w.color != null && s.push(`color=${w.color}`), w.weight != null && s.push(`weight=${w.weight}`), !t && w.label != null && s.push(`label=${JSON.stringify(w.label)}`)), s.push(...at(e)), s.length ? `[${s.join(",")}]` : "";
}
function Ct(w, t) {
  const e = [];
  return w && (w.color != null && e.push(`color=${w.color}`), w.borderColor != null && e.push(`border=${w.borderColor}`), w.borderWidth != null && e.push(`width=${w.borderWidth}`), w.borderDash === !1 ? e.push("dash=false") : w.borderDash === !0 && e.push("dash=true")), e.push(...at(t)), e.length ? `[${e.join(",")}]` : "";
}
function Rt(w) {
  const t = w.layout, e = w.style, s = Object.values(w.nodes).map((r) => {
    const c = rt(r.style, e?.nodes?.[r.id]) ?? {}, { style: l, coordinates: d, info: o } = Ht(c);
    let u = Object.keys(l).length ? Xt(l) : void 0;
    const p = t?.nodes?.[r.id], f = p;
    return f && (f.w != null || f.h != null) && (u = { ...u }, f.w != null && (u.width = f.w), f.h != null && (u.height = f.h)), {
      id: r.id,
      label: r.label ?? r.id,
      style: u,
      position: p ? { x: p.x, y: p.y } : void 0,
      coordinates: d,
      info: o
    };
  }), i = Object.values(w.groups).map((r) => {
    const c = rt(r.style, e?.groups?.[r.id]) ?? {}, { style: l, info: d } = zt(c), o = Object.keys(l).length ? Yt(l) : void 0, u = t?.groups?.[r.id], p = r.members.filter((f) => f in w.nodes);
    return {
      id: r.id,
      label: r.label ?? r.id,
      nodeIds: p,
      style: o,
      layout: u ? { position: { x: u.x, y: u.y }, size: { width: u.w, height: u.h } } : void 0,
      info: d
    };
  });
  for (const r of Object.values(w.groups))
    for (const c of r.members)
      if (c in w.groups) {
        const l = i.find((d) => d.id === c);
        l && (l.parentId = r.id);
      }
  const n = i, h = /* @__PURE__ */ new Map(), a = w.edges.map((r) => {
    const c = `${r.from}	${r.to}`, l = (h.get(c) ?? 0) + 1;
    h.set(c, l);
    const d = l === 1 ? `e_${r.from}_${r.to}` : `e_${r.from}_${r.to}_${l}`, o = r.relId ?? "link", u = rt(
      r.style,
      rt(e?.edges?.[d], e?.rels?.[o])
    ) ?? {}, { style: p, info: f } = Ot(u), g = Object.keys(p).length ? Ut(p) : void 0, y = r.label ?? g?.label ?? (r.relId && r.relId !== "link" ? r.relId : void 0), m = t?.edges?.[d], b = m?.src_side != null ? { side: m.src_side, t: m.src_t ?? 0.5 } : void 0, C = m?.dst_side != null ? { side: m.dst_side, t: m.dst_t ?? 0.5 } : void 0;
    return {
      id: d,
      src: r.from,
      dst: r.to,
      relType: o,
      style: y ? g ? { ...g, label: y } : { label: y } : g,
      bends: m?.bends?.length ? m.bends : void 0,
      srcAnchor: b,
      dstAnchor: C,
      info: f
    };
  });
  return { nodes: s, edges: a, groups: n };
}
function rt(w, t) {
  if (!(!w && !t))
    return w ? t ? { ...w, ...t } : w : t;
}
function pt(w, t) {
  const e = {};
  for (const [s, i] of Object.entries(w))
    if (typeof s == "string" && s.startsWith(t) && i !== void 0) {
      const n = s.slice(t.length);
      if (n === "") continue;
      const h = n.startsWith(".") ? n.slice(1).split(".") : n.split(".");
      let a = e;
      for (let r = 0; r < h.length - 1; r++) {
        const c = h[r];
        (!(c in a) || typeof a[c] != "object") && (a[c] = {}), a = a[c];
      }
      a[h[h.length - 1]] = i;
    }
  return Object.keys(e).length ? e : void 0;
}
function Ht(w) {
  const t = {};
  let e;
  const s = w.lat ?? w.latitude, i = w.lon ?? w.longitude;
  typeof s == "number" && typeof i == "number" && (e = [s, i]);
  const n = pt(w, "info."), h = ["lat", "lon", "latitude", "longitude"];
  for (const [a, r] of Object.entries(w))
    h.includes(a) || typeof a == "string" && a.startsWith("info.") || (t[a] = r);
  return { style: t, coordinates: e, info: n };
}
function Ot(w) {
  const t = {}, e = pt(w, "info.");
  for (const [s, i] of Object.entries(w))
    if (!(typeof s == "string" && s.startsWith("info."))) {
      if (s === "weight") {
        t.width = i;
        continue;
      }
      t[s] = i;
    }
  return { style: t, info: e };
}
function zt(w) {
  const t = {}, e = pt(w, "info.");
  for (const [s, i] of Object.entries(w))
    typeof s == "string" && s.startsWith("info.") || (t[s] = i);
  return { style: t, info: e };
}
function Xt(w) {
  const t = {};
  return w.color != null && (t.color = String(w.color)), w.border != null && (t.borderColor = String(w.border)), w.width != null && (t.width = Number(w.width)), w.height != null && (t.height = Number(w.height)), Object.keys(t).length ? t : void 0;
}
function Yt(w) {
  const t = {};
  return w.color != null && (t.color = String(w.color)), w.border != null && (t.borderColor = String(w.border)), w.width != null && (t.borderWidth = Number(w.width)), w.dash !== void 0 && (t.borderDash = !!w.dash), Object.keys(t).length ? t : void 0;
}
function Ut(w) {
  const t = {};
  return w.color != null && (t.color = String(w.color)), w.width != null && (t.weight = Number(w.width)), w.weight != null && (t.weight = Number(w.weight)), w.label != null && (t.label = String(w.label)), Object.keys(t).length ? t : void 0;
}
function Ft(w, t) {
  const e = new Map(t.nodes.map((r) => [r.id, r])), s = new Map(t.edges.map((r) => [r.id, r])), i = new Map(
    (t.groups ?? []).map((r) => [r.id, r])
  ), n = w.nodes.map((r) => {
    const c = e.get(r.id);
    if (!c) return r;
    const l = r, d = c, o = c.position ?? r.position;
    let u = l.style;
    return (d.style?.width !== void 0 || d.style?.height !== void 0) && (u = { ...u }, d.style.width !== void 0 && (u.width = d.style.width), d.style.height !== void 0 && (u.height = d.style.height)), { ...r, position: o, style: u };
  }), h = w.edges.map((r) => {
    const c = s.get(r.id);
    if (!c) return r;
    const l = c;
    return {
      ...r,
      srcAnchor: l.srcAnchor ?? r.srcAnchor,
      dstAnchor: l.dstAnchor ?? r.dstAnchor,
      bends: l.bends ?? r.bends
    };
  }), a = w.groups.map((r) => {
    const c = i.get(r.id);
    return c ? { ...r, layout: c.layout ?? r.layout } : r;
  });
  return { nodes: n, edges: h, groups: a };
}
function Et(w, t) {
  const e = Pt(w);
  t?.onWarnings && e.warnings.length > 0 && t.onWarnings(e.warnings);
  const s = Rt(e);
  return t?.layoutPayload ? Ft(s, t.layoutPayload) : s;
}
function ut(w, t, e, s) {
  const i = [], n = new Set(w.map((l) => l.id));
  function h(l) {
    const d = e.filter((g) => g.parentId === l.id), u = [...l.nodeIds.filter((g) => n.has(g))];
    for (const g of d) u.push(h(g));
    const p = u.join(", "), f = l.label !== l.id ? `${l.id} as "${l.label.replace(/"/g, '\\"')}"` : l.id;
    return p ? `${f} { ${p} }` : `${f} { }`;
  }
  const a = e.filter((l) => !l.parentId);
  for (const l of a) {
    const d = e.filter((y) => y.parentId === l.id), o = l.nodeIds.filter((y) => n.has(y));
    if (!(o.length > 0 || d.length > 0)) continue;
    const p = l.label !== l.id ? `${l.id} as "${l.label.replace(/"/g, '\\"')}"` : l.id, f = Ct(l.style, l.info), g = [...o];
    for (const y of d) g.push(h(y));
    i.push(`${p}${f} { ${g.join(", ")} }`);
  }
  for (const l of w) {
    const d = l.style ? { ...l.style, width: void 0, height: void 0 } : void 0, o = d && Object.keys(d).some((g) => d[g] != null);
    if (!(l.label !== l.id || o || l.coordinates != null || l.info != null && Object.keys(l.info).length > 0)) continue;
    const p = l.label !== l.id ? `${l.id} as "${l.label.replace(/"/g, '\\"')}"` : l.id, f = wt(l.style, !0, l.coordinates, l.info);
    i.push(`${p}${f}`);
  }
  const r = /* @__PURE__ */ new Map();
  for (const l of [...new Set(t.map((d) => d.relType).filter(Boolean))]) {
    if (l === "link") continue;
    const d = t.filter((u) => u.relType === l);
    if (d.length < 2) continue;
    const o = [...new Set(d.map((u) => u.style?.label ?? l))];
    o.length === 1 && o[0] !== l && r.set(l, o[0]);
  }
  for (const l of t) {
    let d = `${l.src}-->${l.dst}${l.relType && l.relType !== "link" ? ` : ${l.relType}` : ""}`;
    const o = l.style?.label, u = o != null && o !== l.relType, p = l.relType != null && r.has(l.relType);
    p || u && (d += ` as "${o.replace(/"/g, '\\"')}"`);
    const f = o != null && o === l.relType, g = p || u || f, y = bt(l.style, g, l.info);
    y && (d += " " + y), i.push(d);
  }
  if (s?.includeLayout) {
    const l = [];
    for (const d of w)
      if (d.position != null) {
        const o = d.style?.width, u = d.style?.height, p = [o != null ? `w=${o}` : "", u != null ? `h=${u}` : ""].filter(Boolean).join(" ");
        l.push(`node ${d.id} {x=${d.position.x} y=${d.position.y}${p ? ` ${p}` : ""}}`);
      }
    for (const d of e)
      d.layout && l.push(`group ${d.id} {x=${d.layout.position.x} y=${d.layout.position.y} w=${d.layout.size.width} h=${d.layout.size.height}}`);
    for (const d of t) {
      const o = d.srcAnchor != null || d.dstAnchor != null, u = d.bends != null && d.bends.length > 0;
      if (!o && !u) continue;
      const p = d.srcAnchor?.side ?? "right", f = d.srcAnchor?.t ?? 0.5, g = d.dstAnchor?.side ?? "right", y = d.dstAnchor?.t ?? 0.5, m = o ? ` { src_side=${p}, src_t=${f}, dst_side=${g}, dst_t=${y} }` : "", b = u && d.bends ? ` bends {${d.bends.map((C) => `{x=${C.x},y=${C.y}}`).join(",")}}` : "";
      l.push(`edge ${d.id}${m}${b}`);
    }
    l.length > 0 && (i.push(""), i.push("layout {"), i.push(...l.map((d) => `  ${d}`)), i.push("}"));
  }
  const c = [];
  if (s?.includeStyle) {
    for (const l of w) {
      const d = wt(l.style, !1, l.coordinates, l.info);
      d && c.push(`node ${l.id} ${d}`);
    }
    for (const l of e) {
      const d = Ct(l.style, l.info);
      d && c.push(`group ${l.id} ${d}`);
    }
    for (const l of t) {
      const d = bt(l.style, !0, l.info);
      d && c.push(`edge ${l.id} ${d}`);
    }
  }
  for (const [l, d] of r)
    c.push(`rel ${l} [label=${JSON.stringify(d)}]`);
  return c.length > 0 && (i.push(""), i.push("style {"), i.push(...c.map((l) => `  ${l}`)), i.push("}")), i.join(`
`);
}
function F(w, t = 16) {
  return Q(), `<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <use href="#${w}"></use>
  </svg>`;
}
function Tt(w, t) {
  if (!w) return;
  const e = t.split(".");
  let s = w;
  for (const i of e) {
    if (s == null || typeof s != "object") return;
    s = s[i];
  }
  return s;
}
function xt(w, t) {
  if (!w || typeof w != "object") return "";
  const e = [];
  function s(i, n) {
    for (const [h, a] of Object.entries(i)) {
      const r = n ? `${n}.${h}` : h;
      a != null && typeof a == "object" && !Array.isArray(a) && !(a instanceof Date) ? s(a, r) : e.push(`${t}.${r}: ${a == null ? "" : String(a)}`);
    }
  }
  return s(w, ""), e.join(`
`);
}
class Wt {
  constructor(t, e, s) {
    this.currentView = null, this.views = /* @__PURE__ */ new Map(), this.tabButtons = /* @__PURE__ */ new Map(), this.editToggleButton = null, this.alwaysShowEdgesButton = null, this.lightingToggleButton = null, this.tileTypeButton = null, this.moonToggleButton = null, this.fitCenterButton = null, this.deleteBendButton = null, this.undoButton = null, this.redoButton = null, this.cancelEditButton = null, this.exportButton = null, this.tableContainer = null, this.nodesTableContainer = null, this.edgesTableContainer = null, this.groupsTableContainer = null, this.tableOptions = null, this.nodes = [], this.edges = [], this.groups = [], this.isExternalTableContainer = !1, this.hasEdges = !1, this.sharedAlwaysShowEdges = !1, this.sharedLightingEnabled = !1, this.sharedTime = null, this.sharedTileServerIndex = 0, this.showExportButton = !0, this.container = t, this.enabledViews = e, this.showExportButton = s?.showExportButton !== !1, Q(), this.container.style.display = "flex", this.container.style.flexDirection = "column", this.container.style.width = "100%", this.tabContainer = document.createElement("div"), this.tabContainer.style.display = "flex", this.tabContainer.style.gap = "4px", this.tabContainer.style.padding = "8px", this.tabContainer.style.borderBottom = "none", this.tabContainer.style.backgroundColor = "transparent", this.tabContainer.style.position = "absolute", this.tabContainer.style.top = "0", this.tabContainer.style.left = "0", this.tabContainer.style.right = "0", this.tabContainer.style.zIndex = "1000", this.tabContainer.style.pointerEvents = "auto", this.viewContainer = document.createElement("div"), this.viewContainer.style.flex = "1 1 0%", this.viewContainer.style.position = "relative", this.viewContainer.style.overflow = "hidden", this.viewContainer.style.minHeight = "0", this.createTabButtons(), this.createCommonControlsContainer(), this.container.appendChild(this.viewContainer), this.viewContainer.appendChild(this.tabContainer);
  }
  /**
   * Initialize table display options
   */
  setTableOptions(t) {
    this.tableOptions = t, t && (t.nodes?.format || t.edges?.format || t.groups?.format) ? this.createTableContainer() : this.tableContainer && (this.isExternalTableContainer ? (this.tableContainer.innerHTML = "", this.tableContainer = null, this.isExternalTableContainer = !1) : this.container.contains(this.tableContainer) && (this.container.removeChild(this.tableContainer), this.tableContainer = null), this.nodesTableContainer = null, this.edgesTableContainer = null, this.groupsTableContainer = null);
  }
  /**
   * Set onNodeClick callback (called on table row click)
   */
  setOnNodeClickCallback(t) {
    this.onNodeClickCallback = t;
  }
  /**
   * Create table container
   */
  createTableContainer() {
    if (!this.tableContainer) {
      if (this.tableOptions && "container" in this.tableOptions && this.tableOptions.container) {
        const t = this.tableOptions.container;
        let e = null;
        if (typeof t == "string" ? e = document.querySelector(t) : t instanceof HTMLElement && (e = t), e) {
          this.tableContainer = e, this.isExternalTableContainer = !0;
          return;
        }
      }
      this.tableContainer = document.createElement("div"), this.tableContainer.style.height = "300px", this.tableContainer.style.overflowY = "auto", this.tableContainer.style.backgroundColor = "#fff", this.tableContainer.style.borderTop = "1px solid #ddd", this.isExternalTableContainer = !1, this.container.appendChild(this.tableContainer);
    }
  }
  /**
   * Set node, edge, and group data
   */
  setData(t, e, s) {
    this.nodes = t, this.edges = e, this.groups = s || [], this.hasEdges = Array.isArray(e) && e.length > 0, this.updateTables(), this.updateAlwaysShowEdgesButtonVisibility();
  }
  /**
   * Get current data (nodes, edges, groups)
   */
  getData() {
    return {
      nodes: this.nodes,
      edges: this.edges,
      groups: this.groups
    };
  }
  /**
   * Update tables
   */
  updateTables() {
    if (!(!this.tableOptions || !this.tableContainer)) {
      if (this.tableContainer.innerHTML = "", this.tableOptions.nodes?.format) {
        this.nodesTableContainer = this.createTable("nodes", this.tableOptions.nodes.header || "", this.tableOptions.nodes.format, this.nodes, "node");
        const t = this.wrapTableSection(this.nodesTableContainer, this.tableOptions.nodes.sectionTitle);
        this.tableContainer.appendChild(t);
      }
      if (this.tableOptions.edges?.format) {
        this.edgesTableContainer = this.createTable("edges", this.tableOptions.edges.header || "", this.tableOptions.edges.format, this.edges, "edge");
        const t = this.wrapTableSection(this.edgesTableContainer, this.tableOptions.edges.sectionTitle);
        this.tableContainer.appendChild(t);
      }
      if (this.tableOptions.groups?.format) {
        this.groupsTableContainer = this.createTable("groups", this.tableOptions.groups.header || "", this.tableOptions.groups.format, this.groups, "group");
        const t = this.wrapTableSection(this.groupsTableContainer, this.tableOptions.groups.sectionTitle);
        this.tableContainer.appendChild(t);
      }
    }
  }
  wrapTableSection(t, e) {
    const s = document.createElement("div");
    if (s.className = "relatos-table-section", e) {
      const i = document.createElement("h3");
      i.textContent = e, i.style.margin = "0 0 8px 0", i.style.padding = "8px 12px 0", i.style.fontSize = "14px", i.style.color = "#333", s.appendChild(i);
    }
    return s.appendChild(t), s;
  }
  /**
   * Create table
   */
  createTable(t, e, s, i, n) {
    const h = document.createElement("div"), a = document.createElement("table");
    if (a.style.width = "100%", a.style.borderCollapse = "collapse", !document.getElementById("relatos-table-styles")) {
      const l = document.createElement("style");
      l.id = "relatos-table-styles", l.textContent = `
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
      `, document.head.appendChild(l);
    }
    a.className = "relatos-table";
    const r = document.createElement("thead");
    if (e)
      r.innerHTML = e;
    else {
      const l = document.createElement("tr");
      r.appendChild(l);
    }
    a.appendChild(r);
    const c = document.createElement("tbody");
    for (const l of i) {
      const d = document.createElement("tr");
      d.id = `${n}-${l.id}`, d.style.cursor = "pointer";
      let o = s;
      if (o = o.replace(
        /\{\{info\}\}/g,
        () => xt("info" in l ? l.info : void 0, "info")
      ), o = o.replace(
        /\{\{info\.([^}]+)\}\}/g,
        (g, y) => String(Tt("info" in l ? l.info : void 0, y) ?? "")
      ), o = o.replace(
        /\{\{meta\}\}/g,
        () => xt("meta" in l ? l.meta : void 0, "meta")
      ), o = o.replace(
        /\{\{meta\.([^}]+)\}\}/g,
        (g, y) => String(Tt("meta" in l ? l.meta : void 0, y) ?? "")
      ), o = o.replace(/\{\{id\}\}/g, String(l.id || "")), o = o.replace(/\{\{label\}\}/g, String("label" in l && l.label || "")), "position" in l && l.position && typeof l.position == "object") {
        const g = l.position;
        o = o.replace(/\{\{position\.x\}\}/g, String(g.x ?? "")), o = o.replace(/\{\{position\.y\}\}/g, String(g.y ?? "")), o = o.replace(/\{\{x\}\}/g, String(g.x ?? "")), o = o.replace(/\{\{y\}\}/g, String(g.y ?? ""));
      }
      if ("coordinates" in l && l.coordinates && (o = o.replace(/\{\{coordinates\.0\}\}/g, String(l.coordinates[0] || "")), o = o.replace(/\{\{coordinates\.1\}\}/g, String(l.coordinates[1] || "")), o = o.replace(/\{\{lat\}\}/g, String(l.coordinates[0] || "")), o = o.replace(/\{\{lon\}\}/g, String(l.coordinates[1] || "")), o = o.replace(/\{\{latitude\}\}/g, String(l.coordinates[0] || "")), o = o.replace(/\{\{longitude\}\}/g, String(l.coordinates[1] || ""))), l.style && typeof l.style == "object") {
        const g = l.style;
        o = o.replace(/\{\{style\.color\}\}/g, String(g.color ?? "")), o = o.replace(/\{\{style\.borderColor\}\}/g, String(g.borderColor ?? "")), o = o.replace(/\{\{style\.width\}\}/g, String(g.width ?? "")), o = o.replace(/\{\{style\.height\}\}/g, String(g.height ?? "")), o = o.replace(/\{\{style\.weight\}\}/g, String(g.weight ?? "")), o = o.replace(/\{\{style\.label\}\}/g, String(g.label ?? "")), o = o.replace(/\{\{style\.srcLabel\}\}/g, String(g.srcLabel ?? "")), o = o.replace(/\{\{style\.dstLabel\}\}/g, String(g.dstLabel ?? "")), o = o.replace(/\{\{style\.borderDash\}\}/g, String(g.borderDash ?? "")), o = o.replace(/\{\{style\.dash\}\}/g, String(g.borderDash ?? "")), o = o.replace(/\{\{weight\}\}/g, String(g.weight ?? ""));
      }
      if (!("nodeIds" in l) && l.style && typeof l.style == "object") {
        const g = l.style;
        o = o.replace(/\{\{w\}\}/g, String(g.width ?? "")), o = o.replace(/\{\{h\}\}/g, String(g.height ?? ""));
      }
      "src" in l && (o = o.replace(/\{\{src\}\}/g, String(l.src || "")), o = o.replace(/\{\{dst\}\}/g, String(l.dst || "")), o = o.replace(/\{\{relType\}\}/g, String(l.relType || "")));
      const u = l, p = u.srcAnchor ?? u.anchors?.src, f = u.dstAnchor ?? u.anchors?.dst;
      if (o = o.replace(/\{\{src_side\}\}/g, String(p?.side ?? "")), o = o.replace(/\{\{src_t\}\}/g, String(p?.t ?? "")), o = o.replace(/\{\{dst_side\}\}/g, String(f?.side ?? "")), o = o.replace(/\{\{dst_t\}\}/g, String(f?.t ?? "")), o = o.replace(/\{\{src\.x\}\}/g, ""), o = o.replace(/\{\{src\.y\}\}/g, ""), o = o.replace(/\{\{dst\.x\}\}/g, ""), o = o.replace(/\{\{dst\.y\}\}/g, ""), "src" in l) {
        const g = l.bends, y = Array.isArray(g) && g.length > 0 ? g.map((m) => `{x=${m.x},y=${m.y}}`).join(", ") : "";
        o = o.replace(/\{\{bends\}\}/g, y);
      }
      if ("nodeIds" in l) {
        const g = l, y = Array.isArray(i) ? i.filter((m) => m.parentId === g.id).map((m) => m.id) : [];
        o = o.replace(/\{\{nodeIds\}\}/g, String(g.nodeIds?.join(", ") || "")), o = o.replace(/\{\{nodeCount\}\}/g, String(g.nodeIds?.length || 0)), o = o.replace(/\{\{groupIds\}\}/g, String(y.join(", ") || "")), o = o.replace(/\{\{groupCount\}\}/g, String(y.length || 0)), o = o.replace(/\{\{parentId\}\}/g, String(g.parentId || "")), g.layout && (o = o.replace(/\{\{layout\.position\.x\}\}/g, String(g.layout.position.x || "")), o = o.replace(/\{\{layout\.position\.y\}\}/g, String(g.layout.position.y || "")), o = o.replace(/\{\{layout\.size\.width\}\}/g, String(g.layout.size.width || "")), o = o.replace(/\{\{layout\.size\.height\}\}/g, String(g.layout.size.height || "")), o = o.replace(/\{\{x\}\}/g, String(g.layout.position.x ?? "")), o = o.replace(/\{\{y\}\}/g, String(g.layout.position.y ?? "")), o = o.replace(/\{\{w\}\}/g, String(g.layout.size.width ?? "")), o = o.replace(/\{\{h\}\}/g, String(g.layout.size.height ?? "")));
      }
      o = o.replace(/\{\{[^}]*\}\}/g, ""), d.innerHTML = o, d.addEventListener("click", () => {
        if (n === "node") {
          if (this.highlightAndScrollToRow(d), !this.currentView)
            return;
          const g = this.views.get(this.currentView);
          g?.selectNode && g.selectNode(l.id);
        }
      }), c.appendChild(d);
    }
    return a.appendChild(c), h.appendChild(a), h;
  }
  /**
   * Highlight row and scroll to it
   */
  highlightAndScrollToRow(t) {
    const e = this.tableContainer?.querySelector(".highlight");
    e && e.classList.remove("highlight"), t.classList.add("highlight"), setTimeout(() => {
      t.classList.remove("highlight");
    }, 2e3), t.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  /**
   * Highlight row based on node ID (called from onNodeClick)
   */
  highlightNodeRow(t) {
    if (!t || !this.tableContainer)
      return;
    const e = this.tableContainer.querySelector(`#node-${t}`);
    e && this.highlightAndScrollToRow(e);
  }
  /**
   * Highlight rows based on multiple node IDs (called from onEdgeClick)
   * Scrolls to first node
   */
  highlightNodeRows(t) {
    if (!t || t.length === 0 || !this.tableContainer)
      return;
    this.tableContainer.querySelectorAll(".highlight").forEach((i) => i.classList.remove("highlight"));
    let s = null;
    for (const i of t) {
      const n = this.tableContainer?.querySelector(`#node-${i}`);
      n && (n.classList.add("highlight"), s || (s = n), setTimeout(() => {
        n.classList.remove("highlight");
      }, 2e3));
    }
    s && s.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  /**
   * Highlight row and scroll based on edge ID (called from onEdgeClick)
   */
  highlightEdgeRow(t) {
    if (!t || !this.tableContainer)
      return;
    const e = this.tableContainer.querySelector(`#edge-${t}`);
    e && this.highlightAndScrollToRow(e);
  }
  /**
   * Highlight row and scroll based on group ID (called from onGroupClick)
   */
  highlightGroupRow(t) {
    if (!t || !this.tableContainer)
      return;
    const e = this.tableContainer.querySelector(`#group-${t}`);
    e && this.highlightAndScrollToRow(e);
  }
  /**
   * Create common control buttons container (shared across views)
   */
  createCommonControlsContainer() {
    this.commonControlsContainer = document.createElement("div"), this.commonControlsContainer.style.display = "flex", this.commonControlsContainer.style.gap = "4px", this.commonControlsContainer.style.marginLeft = "auto", this.commonControlsContainer.style.pointerEvents = "auto", this.createCancelEditButton(), this.createUndoButton(), this.createRedoButton(), this.createEditToggleButton(), this.createAlwaysShowEdgesButton(), this.createDeleteBendButton(), this.createLightingToggleButton(), this.createTileTypeButton(), this.createMoonToggleButton(), this.createFitCenterButton(), this.createExportButton(), this.tabContainer.appendChild(this.commonControlsContainer);
  }
  /**
   * Create edit toggle button (in common controls)
   */
  createEditToggleButton() {
    this.editToggleButton = document.createElement("button"), this.editToggleButton.className = "relatos-edit-toggle", this.editToggleButton.style.padding = "6px", this.editToggleButton.style.border = "1px solid #ccc", this.editToggleButton.style.borderRadius = "4px", this.editToggleButton.style.backgroundColor = "#fff", this.editToggleButton.style.cursor = "pointer", this.editToggleButton.style.fontSize = "16px", this.editToggleButton.style.width = "32px", this.editToggleButton.style.height = "32px", this.editToggleButton.style.display = "none", this.editToggleButton.style.alignItems = "center", this.editToggleButton.style.justifyContent = "center", this.editToggleButton.style.pointerEvents = "auto", this.editToggleButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.editToggleButton.style.transition = "0.2s", this.editToggleButton.style.color = "#333", this.commonControlsContainer.insertBefore(this.editToggleButton, this.commonControlsContainer.firstChild);
  }
  /**
   * Create always show edges button (in common controls)
   */
  createAlwaysShowEdgesButton() {
    this.alwaysShowEdgesButton = document.createElement("button"), this.alwaysShowEdgesButton.className = "relatos-always-show-edges-toggle", this.alwaysShowEdgesButton.innerHTML = F("icon-relations", 16), this.alwaysShowEdgesButton.setAttribute("aria-label", "Toggle edges"), this.alwaysShowEdgesButton.setAttribute("title", "Toggle edges"), this.alwaysShowEdgesButton.style.padding = "6px", this.alwaysShowEdgesButton.style.border = "1px solid #ccc", this.alwaysShowEdgesButton.style.borderRadius = "4px", this.alwaysShowEdgesButton.style.backgroundColor = "#fff", this.alwaysShowEdgesButton.style.cursor = "pointer", this.alwaysShowEdgesButton.style.fontSize = "16px", this.alwaysShowEdgesButton.style.width = "32px", this.alwaysShowEdgesButton.style.height = "32px", this.alwaysShowEdgesButton.style.display = "flex", this.alwaysShowEdgesButton.style.alignItems = "center", this.alwaysShowEdgesButton.style.justifyContent = "center", this.alwaysShowEdgesButton.style.pointerEvents = "auto", this.alwaysShowEdgesButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.alwaysShowEdgesButton.style.transition = "0.2s", this.alwaysShowEdgesButton.style.color = "#000000", this.alwaysShowEdgesButton.addEventListener("click", () => {
      if (!this.currentView)
        return;
      const t = this.views.get(this.currentView);
      if (t?.getAlwaysShowEdges) {
        const e = t.getAlwaysShowEdges();
        this.setAlwaysShowEdges(!e);
      }
    }), this.commonControlsContainer.appendChild(this.alwaysShowEdgesButton);
  }
  /**
   * Create lighting toggle button (in common controls)
   */
  createLightingToggleButton() {
    this.lightingToggleButton = document.createElement("button"), this.lightingToggleButton.innerHTML = F("icon-sun", 16), this.lightingToggleButton.setAttribute("aria-label", "Toggle lighting"), this.lightingToggleButton.setAttribute("title", "Toggle lighting"), this.lightingToggleButton.style.padding = "6px", this.lightingToggleButton.style.border = "1px solid #ccc", this.lightingToggleButton.style.borderRadius = "4px", this.lightingToggleButton.style.backgroundColor = "#fff", this.lightingToggleButton.style.cursor = "pointer", this.lightingToggleButton.style.fontSize = "16px", this.lightingToggleButton.style.width = "32px", this.lightingToggleButton.style.height = "32px", this.lightingToggleButton.style.display = "none", this.lightingToggleButton.style.alignItems = "center", this.lightingToggleButton.style.justifyContent = "center", this.lightingToggleButton.style.pointerEvents = "auto", this.lightingToggleButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.lightingToggleButton.style.transition = "0.2s", this.lightingToggleButton.addEventListener("click", () => {
      if (!this.currentView)
        return;
      const t = this.views.get(this.currentView);
      if (t?.getLightingEnabled) {
        const e = t.getLightingEnabled();
        this.setLightingEnabled(!e);
      }
    }), this.commonControlsContainer.appendChild(this.lightingToggleButton);
  }
  /**
   * Create tile type button (in common controls)
   */
  createTileTypeButton() {
    this.tileTypeButton = document.createElement("button"), this.tileTypeButton.innerHTML = F("icon-map-tiles", 16), this.tileTypeButton.setAttribute("aria-label", "Switch tile type"), this.tileTypeButton.setAttribute("title", "Switch tile type"), this.tileTypeButton.style.padding = "6px", this.tileTypeButton.style.border = "1px solid #ccc", this.tileTypeButton.style.borderRadius = "4px", this.tileTypeButton.style.backgroundColor = "#fff", this.tileTypeButton.style.cursor = "pointer", this.tileTypeButton.style.fontSize = "16px", this.tileTypeButton.style.width = "32px", this.tileTypeButton.style.height = "32px", this.tileTypeButton.style.display = "none", this.tileTypeButton.style.alignItems = "center", this.tileTypeButton.style.justifyContent = "center", this.tileTypeButton.style.pointerEvents = "auto", this.tileTypeButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.tileTypeButton.style.transition = "0.2s", this.tileTypeButton.addEventListener("click", () => {
      if (!this.currentView)
        return;
      let t = 0;
      for (const e of this.views.values())
        if (e.getTileServerCount) {
          const s = e.getTileServerCount();
          s > t && (t = s);
        }
      if (!(t < 2)) {
        this.sharedTileServerIndex = (this.sharedTileServerIndex + 1) % t;
        for (const e of this.views.values())
          if (e.getTileServerCount && e.setTileServerIndex) {
            const s = e.getTileServerCount();
            if (s > 0) {
              const i = this.sharedTileServerIndex % s;
              e.setTileServerIndex(i);
            }
          }
        this.updateTileTypeButton();
      }
    }), this.commonControlsContainer.appendChild(this.tileTypeButton);
  }
  /**
   * Create moon toggle button (in common controls, Map2D only)
   */
  createMoonToggleButton() {
    this.moonToggleButton = document.createElement("button"), this.moonToggleButton.setAttribute("aria-label", "Toggle moon"), this.moonToggleButton.setAttribute("title", "Toggle moon"), this.moonToggleButton.style.padding = "6px", this.moonToggleButton.style.border = "1px solid #ccc", this.moonToggleButton.style.borderRadius = "4px", this.moonToggleButton.style.backgroundColor = "#fff", this.moonToggleButton.style.cursor = "pointer", this.moonToggleButton.style.fontSize = "16px", this.moonToggleButton.style.width = "32px", this.moonToggleButton.style.height = "32px", this.moonToggleButton.style.display = "none", this.moonToggleButton.style.alignItems = "center", this.moonToggleButton.style.justifyContent = "center", this.moonToggleButton.style.pointerEvents = "auto", this.moonToggleButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.moonToggleButton.style.transition = "0.2s", this.moonToggleButton.addEventListener("click", () => {
      if (this.currentView === "map2d") {
        const t = this.views.get("map2d");
        t && t.toggleMoon && (t.toggleMoon(), this.updateMoonButton());
      }
    }), this.commonControlsContainer.appendChild(this.moonToggleButton);
  }
  /**
   * Update moon button appearance
   */
  updateMoonButton() {
    if (!this.moonToggleButton || this.currentView !== "map2d")
      return;
    const t = this.views.get("map2d");
    if (!t)
      return;
    const e = t.isMoonEnabled?.() || !1, s = t.getTime?.() || null, i = s ? new Date(s) : /* @__PURE__ */ new Date(), n = t.getMoonPhase?.(i) || 0, h = t.getMoonPhaseIcon?.(n, 16) || "🌑";
    this.moonToggleButton.innerHTML = h, e ? (this.moonToggleButton.style.backgroundColor = "#fff9c4", this.moonToggleButton.style.boxShadow = "inset 0 2px 4px rgba(0, 0, 0, 0.2)", this.moonToggleButton.style.transform = "translateY(1px)", this.moonToggleButton.setAttribute("title", "Hide moon")) : (this.moonToggleButton.style.backgroundColor = "#fff", this.moonToggleButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.moonToggleButton.style.transform = "translateY(0)", this.moonToggleButton.setAttribute("title", "Show moon"));
  }
  /**
   * Create fit center button (in common controls)
   */
  createFitCenterButton() {
    this.fitCenterButton = document.createElement("button"), this.fitCenterButton.innerHTML = F("icon-home", 16), this.fitCenterButton.setAttribute("aria-label", "Fit and center"), this.fitCenterButton.setAttribute("title", "Fit and center"), this.fitCenterButton.style.padding = "6px", this.fitCenterButton.style.border = "1px solid #ccc", this.fitCenterButton.style.borderRadius = "4px", this.fitCenterButton.style.backgroundColor = "#fff", this.fitCenterButton.style.cursor = "pointer", this.fitCenterButton.style.fontSize = "16px", this.fitCenterButton.style.width = "32px", this.fitCenterButton.style.height = "32px", this.fitCenterButton.style.display = "flex", this.fitCenterButton.style.alignItems = "center", this.fitCenterButton.style.justifyContent = "center", this.fitCenterButton.style.pointerEvents = "auto", this.fitCenterButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.fitCenterButton.style.transition = "0.2s", this.fitCenterButton.addEventListener("click", () => {
      if (!this.currentView)
        return;
      const t = this.views.get(this.currentView);
      t?.fitAndCenter && t.fitAndCenter();
    }), this.commonControlsContainer.appendChild(this.fitCenterButton);
  }
  /**
   * Create export button (in common controls, all views)
   * Exports nodes, edges, and groups to relat format (with layout) and copies to clipboard
   */
  createExportButton() {
    this.exportButton = document.createElement("button"), this.exportButton.innerHTML = F("icon-export", 16), this.exportButton.setAttribute("aria-label", "Export to relat"), this.exportButton.setAttribute("title", "Export to relat (copy to clipboard)"), this.exportButton.style.padding = "6px", this.exportButton.style.border = "1px solid #ccc", this.exportButton.style.borderRadius = "4px", this.exportButton.style.backgroundColor = "#fff", this.exportButton.style.cursor = "pointer", this.exportButton.style.fontSize = "16px", this.exportButton.style.width = "32px", this.exportButton.style.height = "32px", this.exportButton.style.display = "flex", this.exportButton.style.alignItems = "center", this.exportButton.style.justifyContent = "center", this.exportButton.style.pointerEvents = "auto", this.exportButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.exportButton.style.transition = "0.2s", this.exportButton.addEventListener("click", async () => {
      await this.exportRelatAndCopy();
    }), this.commonControlsContainer.appendChild(this.exportButton);
  }
  /**
   * Export current data to relat format (with layout) and copy to clipboard
   */
  async exportRelatAndCopy() {
    const t = "Export to relat (copy to clipboard)";
    try {
      const e = ut(this.nodes, this.edges, this.groups, { includeLayout: !0 });
      console.log("Exported relat length:", e.length);
      const s = await Mt(e);
      this.exportButton && (s ? (this.exportButton.style.backgroundColor = "#c8e6c9", this.exportButton.style.borderColor = "#4caf50", this.exportButton.setAttribute("title", "Copied to clipboard!"), setTimeout(() => {
        this.exportButton && (this.exportButton.style.backgroundColor = "#fff", this.exportButton.style.borderColor = "#ccc", this.exportButton.setAttribute("title", t));
      }, 2e3)) : (this.exportButton.style.backgroundColor = "#ffcdd2", this.exportButton.style.borderColor = "#f44336", this.exportButton.setAttribute("title", "Failed to copy"), setTimeout(() => {
        this.exportButton && (this.exportButton.style.backgroundColor = "#fff", this.exportButton.style.borderColor = "#ccc", this.exportButton.setAttribute("title", t));
      }, 2e3)));
    } catch (e) {
      console.error("Export failed:", e), this.exportButton && (this.exportButton.style.backgroundColor = "#ffcdd2", this.exportButton.style.borderColor = "#f44336", this.exportButton.setAttribute("title", `Export failed: ${e instanceof Error ? e.message : String(e)}`), setTimeout(() => {
        this.exportButton && (this.exportButton.style.backgroundColor = "#fff", this.exportButton.style.borderColor = "#ccc", this.exportButton.setAttribute("title", t));
      }, 3e3));
    }
  }
  /**
   * Get relat export text (with layout when includeLayout is true)
   */
  getExportRelat(t) {
    return ut(this.nodes, this.edges, this.groups, { includeLayout: t ?? !0 });
  }
  /**
   * Create delete bend button (in common controls, Graph only)
   */
  createDeleteBendButton() {
    this.deleteBendButton = document.createElement("button"), this.deleteBendButton.innerHTML = F("icon-trash", 16), this.deleteBendButton.setAttribute("aria-label", "Delete bend point"), this.deleteBendButton.setAttribute("title", "Delete bend point"), this.deleteBendButton.style.padding = "6px", this.deleteBendButton.style.border = "1px solid #ccc", this.deleteBendButton.style.borderRadius = "4px", this.deleteBendButton.style.backgroundColor = "#fff", this.deleteBendButton.style.cursor = "pointer", this.deleteBendButton.style.fontSize = "16px", this.deleteBendButton.style.width = "32px", this.deleteBendButton.style.height = "32px", this.deleteBendButton.style.display = "none", this.deleteBendButton.style.alignItems = "center", this.deleteBendButton.style.justifyContent = "center", this.deleteBendButton.style.pointerEvents = "auto", this.deleteBendButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.deleteBendButton.style.transition = "0.2s", this.deleteBendButton.addEventListener("click", () => {
      if (!this.currentView)
        return;
      const t = this.views.get(this.currentView);
      t?.deleteNearestBendPoint && t.deleteNearestBendPoint();
    });
  }
  /**
   * Create cancel edit button (in common controls, Graph only)
   */
  createCancelEditButton() {
    this.cancelEditButton = document.createElement("button"), this.cancelEditButton.innerHTML = F("icon-close", 16), this.cancelEditButton.setAttribute("aria-label", "Cancel edit"), this.cancelEditButton.setAttribute("title", "Cancel edit and restore previous state"), this.cancelEditButton.style.padding = "6px", this.cancelEditButton.style.border = "1px solid #ccc", this.cancelEditButton.style.borderRadius = "4px", this.cancelEditButton.style.backgroundColor = "#fff", this.cancelEditButton.style.cursor = "pointer", this.cancelEditButton.style.fontSize = "16px", this.cancelEditButton.style.width = "32px", this.cancelEditButton.style.height = "32px", this.cancelEditButton.style.display = "none", this.cancelEditButton.style.alignItems = "center", this.cancelEditButton.style.justifyContent = "center", this.cancelEditButton.style.pointerEvents = "auto", this.cancelEditButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.cancelEditButton.style.transition = "0.2s", this.cancelEditButton.addEventListener("click", () => {
      if (!this.currentView)
        return;
      const t = this.views.get(this.currentView);
      t?.cancelEdit && t.cancelEdit();
    }), this.commonControlsContainer.appendChild(this.cancelEditButton);
  }
  /**
   * Create undo button (Graph edit mode only)
   */
  createUndoButton() {
    this.undoButton = document.createElement("button"), this.undoButton.innerHTML = F("icon-undo", 16), this.undoButton.setAttribute("aria-label", "Undo"), this.undoButton.setAttribute("title", "Undo (Ctrl+Z)"), this.undoButton.style.padding = "6px", this.undoButton.style.border = "1px solid #ccc", this.undoButton.style.borderRadius = "4px", this.undoButton.style.backgroundColor = "#fff", this.undoButton.style.cursor = "pointer", this.undoButton.style.fontSize = "16px", this.undoButton.style.width = "32px", this.undoButton.style.height = "32px", this.undoButton.style.display = "none", this.undoButton.style.alignItems = "center", this.undoButton.style.justifyContent = "center", this.undoButton.style.pointerEvents = "auto", this.undoButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.undoButton.style.transition = "0.2s", this.undoButton.addEventListener("click", () => {
      if (!this.currentView) return;
      const t = this.views.get(this.currentView);
      t?.undo && t.undo();
    }), this.commonControlsContainer.appendChild(this.undoButton);
  }
  /**
   * Create redo button (Graph edit mode only)
   */
  createRedoButton() {
    this.redoButton = document.createElement("button"), this.redoButton.innerHTML = F("icon-redo", 16), this.redoButton.setAttribute("aria-label", "Redo"), this.redoButton.setAttribute("title", "Redo (Ctrl+Shift+Z)"), this.redoButton.style.padding = "6px", this.redoButton.style.border = "1px solid #ccc", this.redoButton.style.borderRadius = "4px", this.redoButton.style.backgroundColor = "#fff", this.redoButton.style.cursor = "pointer", this.redoButton.style.fontSize = "16px", this.redoButton.style.width = "32px", this.redoButton.style.height = "32px", this.redoButton.style.display = "none", this.redoButton.style.alignItems = "center", this.redoButton.style.justifyContent = "center", this.redoButton.style.pointerEvents = "auto", this.redoButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.redoButton.style.transition = "0.2s", this.redoButton.addEventListener("click", () => {
      if (!this.currentView) return;
      const t = this.views.get(this.currentView);
      t?.redo && t.redo();
    }), this.commonControlsContainer.appendChild(this.redoButton);
  }
  /**
   * Update edit toggle button
   */
  updateEditToggleButton() {
    if (!this.editToggleButton || !this.currentView)
      return;
    const t = this.views.get(this.currentView);
    if (!t)
      return;
    if ((t.isEditable?.() || !1) && this.currentView === "graph") {
      this.editToggleButton.style.display = "flex";
      const s = t.getEditToggleButton?.();
      s && (this.editToggleButton.innerHTML = s.innerHTML, this.editToggleButton.setAttribute("aria-label", s.getAttribute("aria-label") || "Toggle edit mode"), this.editToggleButton.setAttribute("title", s.getAttribute("title") || "Toggle edit mode"), this.editToggleButton.className = s.className, this.editToggleButton.style.padding = "6px", this.editToggleButton.style.border = s.style.border || "1px solid #ccc", this.editToggleButton.style.borderRadius = s.style.borderRadius || "4px", this.editToggleButton.style.backgroundColor = s.style.backgroundColor || "#fff", this.editToggleButton.style.color = s.style.color || "#333", this.editToggleButton.style.borderColor = s.style.borderColor || "#ccc", this.editToggleButton.style.cursor = s.style.cursor || "pointer", this.editToggleButton.style.fontSize = "16px", this.editToggleButton.style.width = "32px", this.editToggleButton.style.height = "32px", this.editToggleButton.style.alignItems = "center", this.editToggleButton.style.justifyContent = "center", this.editToggleButton.style.transition = s.style.transition || "0.2s", this.editToggleButton.style.boxShadow = s.style.boxShadow || "0 2px 4px rgba(0, 0, 0, 0.1)", this.editToggleButton.style.transform = s.style.transform || "translateY(0)", this.editToggleButton.onclick = () => {
        s.click();
      });
    } else
      this.editToggleButton.style.display = "none";
  }
  /**
   * Create tab buttons
   */
  createTabButtons() {
    const t = {
      graph: "icon-view-graph",
      map2d: "icon-view-map",
      globe3d: "icon-view-globe3d"
    }, e = {
      graph: "Graph",
      map2d: "Map 2D",
      globe3d: "Globe 3D"
    };
    for (const s of this.enabledViews) {
      const i = document.createElement("button");
      i.innerHTML = F(t[s], 16), i.setAttribute("aria-label", e[s]), i.setAttribute("title", e[s]), i.style.padding = "8px 16px", i.style.border = "1px solid #ccc", i.style.borderRadius = "4px 4px 0 0", i.style.backgroundColor = "#fff", i.style.cursor = "pointer", i.style.fontSize = "14px", i.style.display = "flex", i.style.alignItems = "center", i.style.justifyContent = "center", i.style.color = "#000000", i.style.pointerEvents = "auto", i.style.visibility = "visible", i.style.opacity = "1", i.addEventListener("click", () => {
        this.switchView(s);
      }), this.tabButtons.set(s, i), this.tabContainer.appendChild(i);
    }
  }
  /**
   * Register a view
   */
  registerView(t, e) {
    this.views.set(t, e), e.hide(), this.applySharedToggleStates(e), this.updateEditToggleButton();
  }
  /**
   * Switch view
   */
  switchView(t) {
    if (!this.enabledViews.includes(t) || this.currentView === t)
      return;
    if (this.currentView) {
      const i = this.views.get(this.currentView);
      i && i.hide();
      const n = this.tabButtons.get(this.currentView);
      n && (n.style.backgroundColor = "#fff", n.style.fontWeight = "normal", n.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", n.style.transform = "translateY(0)");
    }
    const e = this.views.get(t);
    e && (this.applySharedToggleStates(e), e.show(), setTimeout(() => {
      this.currentView === t && (this.applySharedToggleStates(e), this.updateLightingButton(), this.updateTileTypeButton(), this.updateMoonButton());
    }, t === "globe3d" ? 500 : 100), e.resize());
    const s = this.tabButtons.get(t);
    s && (s.style.backgroundColor = "#fff9c4", s.style.fontWeight = "bold", s.style.boxShadow = "inset 0 2px 4px rgba(0, 0, 0, 0.2)", s.style.transform = "translateY(1px)"), this.currentView = t, this.updateEditToggleButton(), this.updateCommonControlsVisibility(), this.updateAlwaysShowEdgesButton(), this.updateLightingButton(), this.updateTileTypeButton(), this.updateCancelEditButton(), this.updateDeleteBendButton();
  }
  /**
   * Set initial view
   */
  setInitialView(t) {
    if (!this.enabledViews.includes(t)) {
      this.switchView(this.enabledViews[0]);
      return;
    }
    this.switchView(t);
  }
  /**
   * Get current view
   */
  getCurrentView() {
    return this.currentView;
  }
  /**
   * Get view container element
   */
  getViewContainer() {
    return this.viewContainer;
  }
  /**
   * Get registered view
   */
  getView(t) {
    return this.views.get(t);
  }
  /**
   * Resize
   */
  resize() {
    if (this.currentView) {
      const t = this.views.get(this.currentView);
      t && t.resize();
    }
  }
  /**
   * Apply shared toggle button states to a view
   */
  applySharedToggleStates(t) {
    if (t.setAlwaysShowEdges && t.setAlwaysShowEdges(this.sharedAlwaysShowEdges), t.setLightingEnabled) {
      const e = t.setLightingEnabled;
      e && e.call(t, this.sharedLightingEnabled, !1);
    }
    if (t.setTime && this.sharedTime !== null && t.setTime(this.sharedTime), t.getTileServerCount && t.setTileServerIndex) {
      const e = t.getTileServerCount();
      if (e > 0) {
        const s = this.sharedTileServerIndex % e;
        t.setTileServerIndex(s);
      }
    }
  }
  /**
   * Update shared always show edges state and apply to all views
   */
  setAlwaysShowEdges(t) {
    this.sharedAlwaysShowEdges = t;
    for (const e of this.views.values())
      e.setAlwaysShowEdges && e.setAlwaysShowEdges(t);
    this.updateAlwaysShowEdgesButton();
  }
  /**
   * Get shared always show edges state
   */
  getAlwaysShowEdges() {
    return this.sharedAlwaysShowEdges;
  }
  /**
   * Update shared lighting state and apply to all views
   */
  setLightingEnabled(t) {
    this.sharedLightingEnabled = t;
    for (const e of this.views.values())
      e.setLightingEnabled && e.setLightingEnabled(t);
    this.updateLightingButton();
  }
  /**
   * Get shared lighting state
   */
  getLightingEnabled() {
    return this.sharedLightingEnabled;
  }
  /**
   * Update shared time and apply to all views
   */
  setTime(t) {
    this.sharedTime = t;
    for (const e of this.views.values())
      e.setTime && e.setTime(t);
    this.currentView === "map2d" && this.updateMoonButton();
  }
  /**
   * Get shared time
   */
  getTime() {
    return this.sharedTime;
  }
  /**
   * Update common control buttons visibility based on current view
   * Button order for Graph: Cancel, Edit toggle, Always show edges, Fit/Center
   * Button order for Map2D/Globe3D: Lighting toggle, Tile type, Always show edges, Fit/Center
   */
  updateCommonControlsVisibility() {
    const t = this.currentView === "graph", e = this.currentView === "map2d" || this.currentView === "globe3d";
    this.cancelEditButton && e && (this.cancelEditButton.style.display = "none"), this.editToggleButton && e && (this.editToggleButton.style.display = "none"), this.deleteBendButton && (t ? this.updateDeleteBendButton() : this.deleteBendButton.style.display = "none"), this.lightingToggleButton && (this.lightingToggleButton.style.display = e ? "flex" : "none"), this.tileTypeButton && (this.tileTypeButton.style.display = e ? "flex" : "none"), this.moonToggleButton && (this.moonToggleButton.style.display = this.currentView === "map2d" ? "flex" : "none"), this.alwaysShowEdgesButton && (this.alwaysShowEdgesButton.style.display = this.hasEdges ? "flex" : "none"), this.fitCenterButton && (this.fitCenterButton.style.display = "flex"), this.reorderButtons();
  }
  /**
   * Reorder buttons based on current view
   * Graph: Delete bend, Cancel, Edit toggle, Always show edges, Fit/Center
   * Map2D/Globe3D: Moon toggle (Map2D only), Lighting toggle, Tile type, Always show edges, Fit/Center
   */
  reorderButtons() {
    const t = this.currentView === "graph", e = this.currentView === "map2d" || this.currentView === "globe3d";
    if (!this.commonControlsContainer)
      return;
    const s = [];
    for (this.cancelEditButton && s.push(this.cancelEditButton), this.undoButton && s.push(this.undoButton), this.redoButton && s.push(this.redoButton), this.editToggleButton && s.push(this.editToggleButton), this.deleteBendButton && s.push(this.deleteBendButton), this.lightingToggleButton && s.push(this.lightingToggleButton), this.moonToggleButton && s.push(this.moonToggleButton), this.tileTypeButton && s.push(this.tileTypeButton), this.alwaysShowEdgesButton && this.hasEdges && s.push(this.alwaysShowEdgesButton), this.fitCenterButton && s.push(this.fitCenterButton), this.exportButton && this.showExportButton && s.push(this.exportButton); this.commonControlsContainer.firstChild; )
      this.commonControlsContainer.removeChild(this.commonControlsContainer.firstChild);
    t ? (this.undoButton && this.commonControlsContainer.appendChild(this.undoButton), this.redoButton && this.commonControlsContainer.appendChild(this.redoButton), this.deleteBendButton && this.commonControlsContainer.appendChild(this.deleteBendButton), this.cancelEditButton && this.commonControlsContainer.appendChild(this.cancelEditButton), this.editToggleButton && this.commonControlsContainer.appendChild(this.editToggleButton), this.alwaysShowEdgesButton && this.hasEdges && this.commonControlsContainer.appendChild(this.alwaysShowEdgesButton), this.fitCenterButton && this.commonControlsContainer.appendChild(this.fitCenterButton), this.exportButton && this.showExportButton && this.commonControlsContainer.appendChild(this.exportButton)) : e && (this.moonToggleButton && this.currentView === "map2d" && this.commonControlsContainer.appendChild(this.moonToggleButton), this.lightingToggleButton && this.commonControlsContainer.appendChild(this.lightingToggleButton), this.tileTypeButton && this.commonControlsContainer.appendChild(this.tileTypeButton), this.alwaysShowEdgesButton && this.hasEdges && this.commonControlsContainer.appendChild(this.alwaysShowEdgesButton), this.fitCenterButton && this.commonControlsContainer.appendChild(this.fitCenterButton), this.exportButton && this.showExportButton && this.commonControlsContainer.appendChild(this.exportButton));
  }
  /**
   * Update always show edges button visibility based on edges existence
   */
  updateAlwaysShowEdgesButtonVisibility() {
    this.alwaysShowEdgesButton && (this.alwaysShowEdgesButton.style.display = this.hasEdges ? "flex" : "none", this.reorderButtons());
  }
  /**
   * Update always show edges button appearance
   */
  updateAlwaysShowEdgesButton() {
    if (!this.alwaysShowEdgesButton)
      return;
    if (!this.hasEdges) {
      this.alwaysShowEdgesButton.style.display = "none";
      return;
    }
    if (!this.currentView)
      return;
    const t = this.views.get(this.currentView);
    if (!t)
      return;
    t.getAlwaysShowEdges?.() ?? this.sharedAlwaysShowEdges ? (this.alwaysShowEdgesButton.setAttribute("aria-label", "Hide edges"), this.alwaysShowEdgesButton.setAttribute("title", "Hide edges"), this.alwaysShowEdgesButton.classList.add("relatos-always-show-edges-active"), this.alwaysShowEdgesButton.style.backgroundColor = "#fff9c4", this.alwaysShowEdgesButton.style.color = "#000000", this.alwaysShowEdgesButton.style.borderColor = "#999", this.alwaysShowEdgesButton.style.boxShadow = "inset 0 2px 4px rgba(0, 0, 0, 0.2)", this.alwaysShowEdgesButton.style.transform = "translateY(1px)") : (this.alwaysShowEdgesButton.setAttribute("aria-label", "Show edges"), this.alwaysShowEdgesButton.setAttribute("title", "Show edges"), this.alwaysShowEdgesButton.classList.remove("relatos-always-show-edges-active"), this.alwaysShowEdgesButton.style.backgroundColor = "#fff", this.alwaysShowEdgesButton.style.color = "#333", this.alwaysShowEdgesButton.style.borderColor = "#ccc", this.alwaysShowEdgesButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.alwaysShowEdgesButton.style.transform = "translateY(0)");
  }
  /**
   * Update lighting button appearance
   * Uses ViewContainer's shared state to maintain consistency
   */
  updateLightingButton() {
    if (!this.lightingToggleButton)
      return;
    this.sharedLightingEnabled ? (this.lightingToggleButton.style.backgroundColor = "#fff9c4", this.lightingToggleButton.style.boxShadow = "inset 0 2px 4px rgba(0, 0, 0, 0.2)", this.lightingToggleButton.style.transform = "translateY(1px)") : (this.lightingToggleButton.style.backgroundColor = "#fff", this.lightingToggleButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.lightingToggleButton.style.transform = "translateY(0)");
  }
  /**
   * Update tile type button appearance
   * - If there are custom tile servers (shared across views): show shared index / count
   * - Otherwise: hide the button
   */
  updateTileTypeButton() {
    if (!this.tileTypeButton)
      return;
    let t = 0;
    for (const e of this.views.values())
      if (e.getTileServerCount) {
        const s = e.getTileServerCount();
        s > t && (t = s);
      }
    if (t >= 2) {
      this.tileTypeButton.style.display = "flex";
      const e = this.sharedTileServerIndex % t;
      this.tileTypeButton.setAttribute(
        "title",
        `Tile server ${e + 1}/${t} (click to switch)`
      );
      return;
    }
    this.tileTypeButton.style.display = "none", this.tileTypeButton.removeAttribute("title");
  }
  /**
   * Update cancel edit button visibility (Graph only, shown in edit mode)
   */
  updateCancelEditButton() {
    if (!this.cancelEditButton)
      return;
    if (!this.currentView || this.currentView !== "graph") {
      this.cancelEditButton.style.display = "none";
      return;
    }
    const t = this.views.get(this.currentView);
    if (!t) {
      this.cancelEditButton.style.display = "none";
      return;
    }
    const s = t.getMode?.() === "edit";
    this.cancelEditButton.style.display = s ? "flex" : "none";
  }
  /**
   * Update delete bend button visibility (Graph only, shown when bend points exist)
   */
  updateDeleteBendButton() {
    if (!this.deleteBendButton)
      return;
    if (!this.currentView || this.currentView !== "graph") {
      this.deleteBendButton.style.display = "none";
      return;
    }
    const t = this.views.get(this.currentView);
    if (!t) {
      this.deleteBendButton.style.display = "none";
      return;
    }
    const e = t, s = e.getSelectedEdgeId?.();
    if (s && e.hasBendPoints) {
      const i = e.hasBendPoints(s);
      this.deleteBendButton.style.display = i ? "flex" : "none";
    } else
      this.deleteBendButton.style.display = "none";
  }
  /**
   * Update undo/redo button visibility and enabled state (Graph edit mode only)
   */
  updateUndoRedoButtons() {
    if (!this.undoButton || !this.redoButton) return;
    if (!this.currentView || this.currentView !== "graph") {
      this.undoButton.style.display = "none", this.redoButton.style.display = "none";
      return;
    }
    const t = this.views.get(this.currentView);
    if (!t) {
      this.undoButton.style.display = "none", this.redoButton.style.display = "none";
      return;
    }
    const e = t;
    if (!(e.getMode?.() === "edit")) {
      this.undoButton.style.display = "none", this.redoButton.style.display = "none";
      return;
    }
    this.undoButton.style.display = "flex", this.redoButton.style.display = "flex", this.undoButton.disabled = !e.canUndo?.(), this.redoButton.disabled = !e.canRedo?.();
  }
  /**
   * Update Graph-specific buttons (called from GraphView when state changes)
   */
  updateGraphButtons() {
    this.updateCancelEditButton(), this.updateUndoRedoButtons(), this.updateDeleteBendButton();
  }
  /**
   * Destroy
   */
  destroy() {
    for (const t of this.views.values())
      t.destroy();
    this.views.clear(), this.tabButtons.clear(), this.container.contains(this.tabContainer) && this.container.removeChild(this.tabContainer), this.container.contains(this.viewContainer) && this.container.removeChild(this.viewContainer);
  }
}
function et(w, t = 16) {
  return Q(), `<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <use href="#${w}"></use>
  </svg>`;
}
const lt = class lt {
  constructor(t, e, s, i = !1, n, h) {
    this.nodes = [], this.edges = [], this.groups = [], this.mode = "view", this.editable = !1, this.nodeElements = /* @__PURE__ */ new Map(), this.edgeElements = /* @__PURE__ */ new Map(), this.selectedEdgeId = null, this.selectedNodeId = null, this.zoomedNodeId = null, this.anchorHandles = /* @__PURE__ */ new Map(), this.draggingAnchor = null, this.bendHandles = /* @__PURE__ */ new Map(), this.draggingBend = null, this.draggingNode = null, this.draggingGroup = null, this.panning = null, this.lastPanEndTime = 0, this.resizingNode = null, this.resizingGroup = null, this.saveDebounceTimer = null, this.SAVE_DEBOUNCE_MS = 500, this.resizeRenderTimer = null, this.editToggleButton = null, this.alwaysShowEdgesButton = null, this.alwaysShowEdges = !1, this.hoveredEdgePairKey = null, this.tappedEdgePairKey = null, this.snapshotBeforeEdit = null, this.edgeClickTimers = /* @__PURE__ */ new WeakMap(), this.undoStack = [], this.redoStack = [], this.offsetX = 0, this.offsetY = 0, this.zoom = 1, this.pinchDistance = null, this.pinchCenter = null, this.initialZoom = 1, this.popupElement = null, this.popupNodeId = null, this.DEFAULT_NODE_WIDTH = 120, this.DEFAULT_NODE_HEIGHT = 60, this.AUTO_LAYOUT_REFERENCE_WIDTH = 1e3, this.AUTO_LAYOUT_REFERENCE_HEIGHT = 600, this.EDGE_DEFAULT_COLOR = "#999", this.EDGE_HOVER_COLOR = "#333", this.EDGE_DEFAULT_WIDTH = 1.5, this.EDGE_HOVER_WIDTH = 3, this.EDGE_MIN_WEIGHT = 1, this.EDGE_MAX_WEIGHT = 10, this.NODE_PADDING = 10, this.HANDLE_RADIUS = 8, this.BEND_HANDLE_RADIUS = 7, this.HIT_PATH_WIDTH = 32, this.controlButtonsContainer = null, this.deleteBendButton = null, this.fitCenterButton = null, this.cancelEditButton = null, this.container = t, this.onNodeClick = e ? (a) => {
      this.popupNodeId === a.node.id && this.popupElement && this.popupElement.style.opacity === "1" ? this.hidePopup() : this.showPopup(a.node), e(a);
    } : void 0, this.onSave = s, this.editable = i, this.onEdgeClick = n, this.onGroupClick = h, this.container.style.position = "relative", this.container.style.width = "100%", this.container.style.height = "100%", this.container.style.overflow = "visible", this.createAlwaysShowEdgesButton(), this.alwaysShowEdgesButton && (this.alwaysShowEdgesButton.style.display = "none", this.alwaysShowEdgesButton.parentNode && this.alwaysShowEdgesButton.parentNode.removeChild(this.alwaysShowEdgesButton)), this.createEditToggleButton(), this.editToggleButton && (this.editToggleButton.style.display = "none", this.editToggleButton.parentNode && this.editToggleButton.parentNode.removeChild(this.editToggleButton)), this.createControlButtons(), this.controlButtonsContainer && (this.controlButtonsContainer.style.display = "none", this.controlButtonsContainer.parentNode && this.controlButtonsContainer.parentNode.removeChild(this.controlButtonsContainer)), this.createAttributionLabel(), this.svgWrapper = document.createElement("div"), this.svgWrapper.style.position = "absolute", this.svgWrapper.style.top = "0", this.svgWrapper.style.left = "0", this.svgWrapper.style.width = "100%", this.svgWrapper.style.height = "100%", this.svgWrapper.style.transformOrigin = "0 0", this.svgWrapper.style.pointerEvents = "none", this.container.appendChild(this.svgWrapper), this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"), this.svg.style.width = "100%", this.svg.style.height = "100%", this.svg.style.display = "block", this.svg.style.pointerEvents = "auto", this.svgWrapper.appendChild(this.svg), this.svgDefs = document.createElementNS("http://www.w3.org/2000/svg", "defs"), this.createArrowMarkers(), this.svg.appendChild(this.svgDefs), this.groupsGroup = document.createElementNS("http://www.w3.org/2000/svg", "g"), this.groupsGroup.setAttribute("class", "groups"), this.svg.appendChild(this.groupsGroup), this.edgesGroup = document.createElementNS("http://www.w3.org/2000/svg", "g"), this.edgesGroup.setAttribute("class", "edges"), this.svg.appendChild(this.edgesGroup), this.nodesGroup = document.createElementNS("http://www.w3.org/2000/svg", "g"), this.nodesGroup.setAttribute("class", "nodes"), this.svg.appendChild(this.nodesGroup), this.anchorHandlesGroup = document.createElementNS("http://www.w3.org/2000/svg", "g"), this.anchorHandlesGroup.setAttribute("class", "anchor-handles"), this.anchorHandlesGroup.style.display = "none", this.svg.appendChild(this.anchorHandlesGroup), this.bendHandlesGroup = document.createElementNS("http://www.w3.org/2000/svg", "g"), this.bendHandlesGroup.setAttribute("class", "bend-handles"), this.bendHandlesGroup.style.display = "none", this.svg.appendChild(this.bendHandlesGroup), this.edgeLabelsGroup = document.createElementNS("http://www.w3.org/2000/svg", "g"), this.edgeLabelsGroup.setAttribute("class", "edge-labels"), this.svg.appendChild(this.edgeLabelsGroup), this.updateTransform(), this.setupEventListeners();
  }
  /**
   * Create always show edges toggle button
   */
  createAlwaysShowEdgesButton() {
    this.alwaysShowEdgesButton = document.createElement("button"), this.alwaysShowEdgesButton.className = "relatos-always-show-edges-toggle", this.alwaysShowEdgesButton.setAttribute("aria-label", "Always show all edges"), this.alwaysShowEdgesButton.setAttribute("title", "Always show all edges"), this.alwaysShowEdgesButton.style.padding = "6px", this.alwaysShowEdgesButton.style.border = "1px solid #ccc", this.alwaysShowEdgesButton.style.borderRadius = "4px", this.alwaysShowEdgesButton.style.backgroundColor = "#fff", this.alwaysShowEdgesButton.style.cursor = "pointer", this.alwaysShowEdgesButton.style.fontSize = "16px", this.alwaysShowEdgesButton.style.lineHeight = "1", this.alwaysShowEdgesButton.style.width = "32px", this.alwaysShowEdgesButton.style.height = "32px", this.alwaysShowEdgesButton.style.display = "flex", this.alwaysShowEdgesButton.style.alignItems = "center", this.alwaysShowEdgesButton.style.justifyContent = "center", this.alwaysShowEdgesButton.style.transition = "all 0.2s", this.alwaysShowEdgesButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.alwaysShowEdgesButton.style.pointerEvents = "auto", this.alwaysShowEdgesButton.style.color = "#000000", this.alwaysShowEdgesButton.innerHTML = et("icon-relations", 16), this.alwaysShowEdgesButton.addEventListener("click", () => {
      this.alwaysShowEdges = !this.alwaysShowEdges, this.updateAlwaysShowEdgesButton(), this.alwaysShowEdges || (this.hoveredEdgePairKey = null, this.tappedEdgePairKey = null), this.onAlwaysShowEdgesChange && this.onAlwaysShowEdgesChange(this.alwaysShowEdges), this.render();
    }), this.updateAlwaysShowEdgesButton();
  }
  /**
   * Update always show edges button appearance
   */
  updateAlwaysShowEdgesButton() {
    this.alwaysShowEdgesButton && (this.alwaysShowEdges ? (this.alwaysShowEdgesButton.setAttribute("aria-label", "Hide edge labels"), this.alwaysShowEdgesButton.setAttribute("title", "Hide edge labels"), this.alwaysShowEdgesButton.classList.add("relatos-always-show-edges-active"), this.alwaysShowEdgesButton.style.backgroundColor = "#fff9c4", this.alwaysShowEdgesButton.style.color = "#000000", this.alwaysShowEdgesButton.style.borderColor = "#999", this.alwaysShowEdgesButton.style.boxShadow = "inset 0 2px 4px rgba(0, 0, 0, 0.2)", this.alwaysShowEdgesButton.style.transform = "translateY(1px)") : (this.alwaysShowEdgesButton.setAttribute("aria-label", "Always show all edges"), this.alwaysShowEdgesButton.setAttribute("title", "Always show all edges"), this.alwaysShowEdgesButton.classList.remove("relatos-always-show-edges-active"), this.alwaysShowEdgesButton.style.backgroundColor = "#fff", this.alwaysShowEdgesButton.style.color = "#333", this.alwaysShowEdgesButton.style.borderColor = "#ccc", this.alwaysShowEdgesButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.alwaysShowEdgesButton.style.transform = "translateY(0)"));
  }
  /**
   * Create edit toggle button (icon-only UI)
   */
  createEditToggleButton() {
    this.editToggleButton = document.createElement("button"), this.editToggleButton.className = "relatos-edit-toggle", this.editToggleButton.setAttribute("aria-label", "Toggle edit mode"), this.editToggleButton.setAttribute("title", "Toggle edit mode"), this.editToggleButton.style.position = "relative", this.editToggleButton.style.zIndex = "1000", this.editToggleButton.style.padding = "6px", this.editToggleButton.style.border = "1px solid #ccc", this.editToggleButton.style.borderRadius = "4px", this.editToggleButton.style.backgroundColor = "#fff", this.editToggleButton.style.cursor = "pointer", this.editToggleButton.style.fontSize = "16px", this.editToggleButton.style.lineHeight = "1", this.editToggleButton.style.width = "28px", this.editToggleButton.style.height = "28px", this.editToggleButton.style.display = "flex", this.editToggleButton.style.alignItems = "center", this.editToggleButton.style.justifyContent = "center", this.editToggleButton.style.transition = "all 0.2s", this.editToggleButton.style.boxShadow = "0 1px 2px rgba(0, 0, 0, 0.1)", this.updateEditToggleButtonIcon(), this.editToggleButton.addEventListener("click", () => {
      this.toggleEditMode();
    });
  }
  /**
   * Update edit toggle button icon based on current mode
   */
  updateEditToggleButtonIcon() {
    this.editToggleButton && (this.editToggleButton.innerHTML = et("icon-edit", 16), this.mode === "edit" ? (this.editToggleButton.setAttribute("aria-label", "Exit edit mode"), this.editToggleButton.setAttribute("title", "Exit edit mode"), this.editToggleButton.classList.add("relatos-edit-toggle-active"), this.editToggleButton.style.backgroundColor = "#fff9c4", this.editToggleButton.style.color = "red", this.editToggleButton.style.borderColor = "#999", this.editToggleButton.style.boxShadow = "inset 0 2px 4px rgba(0, 0, 0, 0.2)", this.editToggleButton.style.transform = "translateY(1px)") : (this.editToggleButton.setAttribute("aria-label", "Enter edit mode"), this.editToggleButton.setAttribute("title", "Enter edit mode"), this.editToggleButton.classList.remove("relatos-edit-toggle-active"), this.editToggleButton.style.backgroundColor = "#fff", this.editToggleButton.style.color = "#333", this.editToggleButton.style.borderColor = "#ccc", this.editToggleButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.editToggleButton.style.transform = "translateY(0)"));
  }
  /**
   * Toggle edit mode
   */
  toggleEditMode() {
    this.editable && this.setMode(this.mode === "edit" ? "view" : "edit");
  }
  /**
   * Create control buttons container with icon-only UI
   */
  createControlButtons() {
    this.controlButtonsContainer = document.createElement("div"), this.controlButtonsContainer.style.position = "absolute", this.controlButtonsContainer.style.top = "8px", this.controlButtonsContainer.style.right = "8px", this.controlButtonsContainer.style.display = "flex", this.controlButtonsContainer.style.gap = "4px", this.controlButtonsContainer.style.zIndex = "1000", this.controlButtonsContainer.style.pointerEvents = "none", this.deleteBendButton = this.createIconButton(et("icon-trash", 16), "Delete bend point", "Delete bend point", () => {
      this.selectedEdgeId && this.deleteNearestBendPoint();
    }), this.deleteBendButton.style.display = "none", this.fitCenterButton = this.createIconButton(et("icon-home", 16), "Fit and center", "Fit and center", () => {
      this.fitAndCenter();
    }), this.fitCenterButton.style.display = "none", this.cancelEditButton = this.createIconButton(et("icon-close", 16), "Cancel edit", "Cancel edit and restore previous state", () => {
      this.restoreSnapshot(), this.setMode("view");
    }), this.cancelEditButton.style.display = "none", this.controlButtonsContainer.appendChild(this.deleteBendButton), this.controlButtonsContainer.appendChild(this.fitCenterButton), this.controlButtonsContainer.appendChild(this.cancelEditButton);
  }
  /**
   * Create attribution label
   */
  createAttributionLabel() {
    const t = document.createElement("div");
    t.style.position = "absolute", t.style.bottom = "8px", t.style.left = "8px", t.style.zIndex = "1000", t.style.pointerEvents = "auto", t.style.fontSize = "12px", t.style.fontFamily = "Arial, sans-serif", t.style.color = "#333", t.style.backgroundColor = "rgba(255, 255, 255, 0.8)", t.style.padding = "4px 8px", t.style.borderRadius = "4px", t.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.2)";
    const e = document.createElement("a");
    e.href = "https://humanhistories.org/en/histoverse/", e.target = "_blank", e.rel = "noopener noreferrer", e.textContent = "Relatos", e.style.color = "#333", e.style.textDecoration = "none", e.style.cursor = "pointer", e.addEventListener("mouseenter", () => {
      e.style.textDecoration = "underline", e.style.color = "#0066cc";
    }), e.addEventListener("mouseleave", () => {
      e.style.textDecoration = "none", e.style.color = "#333";
    }), t.appendChild(e), this.container.appendChild(t);
  }
  /**
   * Create an icon-only button
   */
  createIconButton(t, e, s, i) {
    const n = document.createElement("button");
    return n.innerHTML = t, n.setAttribute("aria-label", e), n.setAttribute("title", s), n.style.padding = "6px", n.style.border = "1px solid #ccc", n.style.borderRadius = "4px", n.style.backgroundColor = "#fff", n.style.cursor = "pointer", n.style.fontSize = "16px", n.style.width = "32px", n.style.height = "32px", n.style.display = "flex", n.style.alignItems = "center", n.style.justifyContent = "center", n.style.pointerEvents = "auto", n.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", n.style.transition = "all 0.2s", n.addEventListener("click", (h) => {
      h.stopPropagation(), i();
    }), n.addEventListener("mouseenter", () => {
      n.style.backgroundColor = "#f5f5f5";
    }), n.addEventListener("mouseleave", () => {
      n.style.backgroundColor = "#fff";
    }), n;
  }
  /**
   * Update control buttons visibility based on selection state
   * Now delegates to ViewContainer's common controls
   */
  updateControlButtons() {
    this.onGraphButtonsUpdate && this.onGraphButtonsUpdate();
  }
  /**
   * Zoom to a specific point (common function for pinch and wheel zoom)
   * @param newZoom Target zoom level
   * @param screenX Screen X coordinate of the zoom center
   * @param screenY Screen Y coordinate of the zoom center
   */
  zoomToPoint(t, e, s) {
    const i = this.screenToSvg(e, s);
    this.zoom, this.zoom = t;
    const n = this.container.getBoundingClientRect(), h = e - n.left, a = s - n.top, r = {
      x: h / this.zoom - this.offsetX,
      y: a / this.zoom - this.offsetY
    }, c = i.x - r.x, l = i.y - r.y;
    this.offsetX += c, this.offsetY += l;
  }
  /**
   * Convert screen coordinates to SVG coordinates accounting for offset and zoom
   * With DOM scale transform, wrapper size is (100% / zoom) and then scaled by zoom
   * The visual size is always 100%, so we can use container coordinates
   */
  screenToSvg(t, e) {
    const s = this.container.getBoundingClientRect(), i = t - s.left, n = e - s.top, h = i / this.zoom, a = n / this.zoom;
    return {
      x: h - this.offsetX,
      y: a - this.offsetY
    };
  }
  /**
   * Update transform: zoom on DOM wrapper, translate on SVG groups
   */
  updateTransform() {
    if (this.popupNodeId && this.popupElement) {
      const h = this.nodes.find((a) => a.id === this.popupNodeId);
      h && this.updatePopupPosition(h);
    }
    const t = isFinite(this.zoom) && this.zoom > 0 ? this.zoom : 1, e = isFinite(this.offsetX) ? this.offsetX : 0, s = isFinite(this.offsetY) ? this.offsetY : 0, i = 1 / t;
    this.svgWrapper.style.width = `${i * 100}%`, this.svgWrapper.style.height = `${i * 100}%`, this.svgWrapper.style.transform = `scale(${t})`;
    const n = `translate(${-e}, ${-s})`;
    this.nodesGroup.setAttribute("transform", n), this.edgesGroup.setAttribute("transform", n), this.groupsGroup.setAttribute("transform", n), this.anchorHandlesGroup.setAttribute("transform", n), this.bendHandlesGroup.setAttribute("transform", n), this.edgeLabelsGroup && this.edgeLabelsGroup.setAttribute("transform", n);
  }
  /**
   * Fit and center the graph by adjusting offset and zoom
   */
  fitAndCenter() {
    if (this.nodes.length === 0)
      return;
    const t = this.container.getBoundingClientRect();
    if (t.width <= 0 || t.height <= 0 || !isFinite(t.width) || !isFinite(t.height))
      return;
    let e = 1 / 0, s = 1 / 0, i = -1 / 0, n = -1 / 0;
    for (const y of this.nodes)
      if (y.position) {
        const m = y.style || {}, b = m.width || this.DEFAULT_NODE_WIDTH, C = m.height || this.DEFAULT_NODE_HEIGHT;
        e = Math.min(e, y.position.x - b / 2), s = Math.min(s, y.position.y - C / 2), i = Math.max(i, y.position.x + b / 2), n = Math.max(n, y.position.y + C / 2);
      }
    for (const y of this.edges) {
      const m = this.getEdgePoints(y);
      for (const b of m)
        e = Math.min(e, b.x), s = Math.min(s, b.y), i = Math.max(i, b.x), n = Math.max(n, b.y);
    }
    if (e === 1 / 0)
      return;
    const h = 60;
    e -= h, s -= h, i += h, n += h;
    const a = (e + i) / 2, r = (s + n) / 2, c = i - e, l = n - s, d = this.container.getBoundingClientRect();
    if (d.width <= 0 || d.height <= 0 || !isFinite(c) || !isFinite(l) || c <= 0 || l <= 0)
      return;
    const o = d.width / c, u = d.height / l;
    if (!isFinite(o) || !isFinite(u))
      return;
    const p = Math.min(o, u, 1);
    this.zoom = p;
    const f = d.width / (2 * this.zoom), g = d.height / (2 * this.zoom);
    !isFinite(a) || !isFinite(r) || !isFinite(f) || !isFinite(g) || (this.offsetX = a - f, this.offsetY = r - g, this.svg.removeAttribute("viewBox"), this.updateTransform(), this.render());
  }
  /**
   * Fit and center with animation
   */
  animateFitAndCenter() {
    if (this.nodes.length === 0)
      return;
    const t = this.container.getBoundingClientRect();
    if (t.width <= 0 || t.height <= 0 || !isFinite(t.width) || !isFinite(t.height))
      return;
    let e = 1 / 0, s = 1 / 0, i = -1 / 0, n = -1 / 0;
    for (const y of this.nodes)
      if (y.position) {
        const m = y.style || {}, b = m.width || this.DEFAULT_NODE_WIDTH, C = m.height || this.DEFAULT_NODE_HEIGHT;
        e = Math.min(e, y.position.x - b / 2), s = Math.min(s, y.position.y - C / 2), i = Math.max(i, y.position.x + b / 2), n = Math.max(n, y.position.y + C / 2);
      }
    if (e === 1 / 0)
      return;
    const h = 60;
    e -= h, s -= h, i += h, n += h;
    const a = (e + i) / 2, r = (s + n) / 2, c = i - e, l = n - s, d = this.container.getBoundingClientRect();
    if (d.width <= 0 || d.height <= 0 || !isFinite(c) || !isFinite(l) || c <= 0 || l <= 0)
      return;
    const o = d.width / c, u = d.height / l;
    if (!isFinite(o) || !isFinite(u))
      return;
    const p = Math.min(o, u, 1), f = d.width / 2, g = d.height / 2;
    this.animateZoomToPoint(p, f, g, a, r);
  }
  /**
   * Setup event listeners (using Pointer Events for touch support)
   */
  setupEventListeners() {
    this.svg.addEventListener("click", (i) => {
      const n = i.target;
      n.closest("[data-node-id]") || n.getAttribute("data-edge-pair-key") || n.getAttribute("data-hit-edge-pair-key") || Date.now() - (this.lastPanEndTime || 0) < 100 || this.mode === "view" && this.hidePopup();
    }), this.svg.addEventListener("pointerdown", (i) => {
      const n = i.target, h = n.closest("[data-node-id]")?.getAttribute("data-node-id"), a = n.getAttribute("data-edge-pair-key") || n.getAttribute("data-hit-edge-pair-key"), r = n.getAttribute("data-handle-type"), c = n.getAttribute("data-bend-index");
      if (this.mode === "edit") {
        const l = n.getAttribute("data-resize-side");
        if (l) {
          const d = n.getAttribute("data-node-id");
          if (d) {
            const o = this.nodes.find((u) => u.id === d);
            if (o?.position) {
              this.pushUndoState();
              const u = o.style || {}, p = u.width || this.DEFAULT_NODE_WIDTH, f = u.height || this.DEFAULT_NODE_HEIGHT, g = this.screenToSvg(i.clientX, i.clientY);
              this.resizingNode = {
                nodeId: d,
                side: l,
                startX: g.x,
                startY: g.y,
                startWidth: p,
                startHeight: f,
                startNodeX: o.position.x,
                startNodeY: o.position.y
              }, i.target.setPointerCapture(i.pointerId), i.preventDefault(), i.stopPropagation();
              return;
            }
          }
        }
        if (h) {
          const d = this.nodes.find((o) => o.id === h);
          if (d?.position) {
            this.pushUndoState();
            const o = this.screenToSvg(i.clientX, i.clientY);
            this.draggingNode = {
              nodeId: h,
              offsetX: o.x - d.position.x,
              offsetY: o.y - d.position.y
            }, i.target.setPointerCapture(i.pointerId), i.preventDefault(), i.stopPropagation();
            return;
          }
        } else if (c !== null) {
          const d = n.getAttribute("data-edge-id");
          if (d) {
            const o = this.screenToSvg(i.clientX, i.clientY), u = this.edges.find((p) => p.id === d);
            if (u) {
              const [p, f] = u.src < u.dst ? [u.src, u.dst] : [u.dst, u.src], g = `${p}||${f}`, y = this.groupEdgesByPair(this.edges).find((m) => m.key === g);
              if (y && y.bends) {
                const m = parseInt(c, 10);
                if (m >= 0 && m < y.bends.length) {
                  this.pushUndoState();
                  const b = y.bends[m];
                  this.draggingBend = {
                    edgeId: d,
                    bendIndex: m,
                    offsetX: o.x - b.x,
                    offsetY: o.y - b.y
                  }, i.preventDefault(), i.stopPropagation();
                  return;
                }
              }
            }
          }
        } else if (r) {
          const d = n.getAttribute("data-edge-id");
          if (d) {
            const o = this.screenToSvg(i.clientX, i.clientY), u = this.edges.find((p) => p.id === d);
            if (u) {
              const [p, f] = u.src < u.dst ? [u.src, u.dst] : [u.dst, u.src], g = `${p}||${f}`, y = this.groupEdgesByPair(this.edges).find((m) => m.key === g);
              if (y) {
                const m = r === "src" ? y.a : y.b, b = this.nodes.find((C) => C.id === m);
                if (b) {
                  const C = r === "src" ? y.b : y.a, B = this.nodes.find((v) => v.id === C);
                  if (B) {
                    this.pushUndoState();
                    const v = r === "src" ? y.srcAnchor || this.estimateAnchor(b, B) : y.dstAnchor || this.estimateAnchor(b, B), T = b.style || {}, A = T.width || this.DEFAULT_NODE_WIDTH, E = T.height || this.DEFAULT_NODE_HEIGHT, S = this.calculateAnchorPosition(b, v, A, E);
                    this.draggingAnchor = {
                      edgeId: d,
                      type: r,
                      offsetX: o.x - S.x,
                      offsetY: o.y - S.y
                    }, i.preventDefault(), i.stopPropagation();
                    return;
                  }
                }
              }
            }
          }
        } else a || this.deselectEdge();
      } else if (h) {
        const l = this.nodes.find((d) => d.id === h);
        if (l && this.onNodeClick) {
          const d = this.screenToSvg(i.clientX, i.clientY);
          this.onNodeClick({
            node: l,
            position: { x: d.x, y: d.y },
            originalEvent: i
          });
        }
      } else a || (this.deselectEdge(), this.tappedEdgePairKey && (this.tappedEdgePairKey = null, this.render()));
    });
    let t = 0, e = null;
    this.svg.addEventListener("pointerdown", (i) => {
      const n = i.target, h = n.getAttribute("data-edge-pair-key") || n.getAttribute("data-hit-edge-pair-key");
      if (this.mode === "edit" && h) {
        const a = Date.now();
        if (a - t < 300 && e === n) {
          const c = this.groupEdgesByPair(this.edges).find((l) => l.key === h);
          if (c && c.edges.length > 0) {
            this.insertBendPoint(c.edges[0].id, i), i.preventDefault(), i.stopPropagation(), t = 0, e = null;
            return;
          }
        }
        t = a, e = n;
      }
    }), this.container.addEventListener("dblclick", (i) => {
      if (this.mode !== "edit")
        return;
      const n = i.target;
      if (!n || !this.container.contains(n))
        return;
      const h = n.getAttribute("data-hit-edge-pair-key") || n.getAttribute("data-edge-pair-key");
      if (h) {
        const r = this.groupEdgesByPair(this.edges).find((c) => c.key === h);
        if (r && r.edges.length > 0) {
          this.insertBendPoint(r.edges[0].id, i), i.preventDefault(), i.stopPropagation();
          return;
        }
      }
      let a = n;
      for (; a && a !== this.svg; ) {
        const r = a.getAttribute("data-hit-edge-pair-key") || a.getAttribute("data-edge-pair-key");
        if (r) {
          const c = this.groupEdgesByPair(this.edges).find((l) => l.key === r);
          if (c && c.edges.length > 0) {
            this.insertBendPoint(c.edges[0].id, i), i.preventDefault(), i.stopPropagation();
            return;
          }
        }
        a = a.parentElement;
      }
    }, !0);
    const s = /* @__PURE__ */ new Map();
    this.svg.addEventListener("pointerdown", (i) => {
      if (i.pointerType === "touch" && (s.set(i.pointerId, i), s.size === 2)) {
        const n = Array.from(s.values()), [h, a] = n;
        this.pinchDistance = Math.hypot(a.clientX - h.clientX, a.clientY - h.clientY), this.pinchCenter = {
          x: (h.clientX + a.clientX) / 2,
          y: (h.clientY + a.clientY) / 2
        }, this.initialZoom = this.zoom, i.preventDefault();
      }
    }), this.svg.addEventListener("pointermove", (i) => {
      if (i.pointerType === "touch" && s.set(i.pointerId, i), this.pinchDistance !== null && this.pinchCenter !== null && s.size === 2) {
        const c = Array.from(s.values()), [l, d] = c, u = Math.hypot(d.clientX - l.clientX, d.clientY - l.clientY) / this.pinchDistance, p = Math.pow(u, 1.5), f = Math.max(0.1, Math.min(5, this.initialZoom * p));
        this.zoomToPoint(f, this.pinchCenter.x, this.pinchCenter.y), this.updateTransform(), this.render(), i.preventDefault();
        return;
      }
      const n = i.target, h = n instanceof HTMLButtonElement || n.closest("button") !== null || n.closest(".relatos-always-show-edges-toggle") !== null || n.closest(".relatos-edit-toggle") !== null || n.closest(".relatos-control-buttons") !== null, a = i.pointerType === "touch" && s.size === 1, r = i.pointerType === "mouse" && i.buttons === 1;
      if (!h && !this.resizingNode && !this.resizingGroup && !this.draggingNode && !this.draggingGroup && !this.draggingAnchor && !this.draggingBend && (a || r)) {
        if (!this.panning)
          this.panning = {
            startX: i.clientX,
            startY: i.clientY,
            startOffsetX: this.offsetX,
            startOffsetY: this.offsetY
          };
        else {
          const c = i.clientX - this.panning.startX, l = i.clientY - this.panning.startY, d = c / this.zoom, o = l / this.zoom;
          this.offsetX = this.panning.startOffsetX + d, this.offsetY = this.panning.startOffsetY + o, this.updateTransform(), this.render();
        }
        i.preventDefault();
        return;
      }
      this.resizingNode ? this.updateNodeSize(i) : this.resizingGroup ? this.updateGroupSize(i) : this.draggingNode ? this.updateNodePosition(i) : this.draggingGroup ? this.updateGroupPosition(i) : this.draggingAnchor ? this.updateAnchorPosition(i) : this.draggingBend && this.updateBendPosition(i);
    }), document.addEventListener("pointermove", (i) => {
      i.pointerType === "touch" && s.set(i.pointerId, i);
      const n = i.target;
      if (!(n instanceof HTMLButtonElement || n.closest("button") !== null || n.closest(".relatos-always-show-edges-toggle") !== null || n.closest(".relatos-edit-toggle") !== null || n.closest(".relatos-control-buttons") !== null) && this.panning && !this.resizingNode && !this.resizingGroup && !this.draggingNode && !this.draggingGroup && !this.draggingAnchor && !this.draggingBend) {
        const a = i.pointerType === "touch" && s.size === 1, r = i.pointerType === "mouse" && (i.buttons === 1 || i.button === 0);
        if (a || r) {
          const c = i.clientX - this.panning.startX, l = i.clientY - this.panning.startY, d = c / this.zoom, o = l / this.zoom;
          this.offsetX = this.panning.startOffsetX - d, this.offsetY = this.panning.startOffsetY - o, this.updateTransform(), this.render(), i.preventDefault();
          return;
        }
      }
      this.resizingNode ? this.updateNodeSize(i) : this.resizingGroup ? this.updateGroupSize(i) : this.draggingNode ? this.updateNodePosition(i) : this.draggingGroup ? this.updateGroupPosition(i) : this.draggingAnchor ? this.updateAnchorPosition(i) : this.draggingBend && this.updateBendPosition(i);
    }), this.svg.addEventListener("pointerup", (i) => {
      i.pointerType === "touch" && (s.delete(i.pointerId), s.size < 2 && (this.pinchDistance = null, this.pinchCenter = null)), i.target instanceof SVGElement && i.target.releasePointerCapture(i.pointerId), this.resizingNode && this.handleResizeEnd(), this.panning && (this.lastPanEndTime = Date.now()), this.panning = null, this.resizingNode ? this.handleResizeEnd() : this.resizingGroup && this.handleGroupResizeEnd(), this.resizingNode = null, this.resizingGroup = null, this.draggingNode = null, this.draggingGroup = null, this.draggingAnchor = null, this.draggingBend = null;
    }), document.addEventListener("pointerup", (i) => {
      i.pointerType === "touch" && (s.delete(i.pointerId), s.size < 2 && (this.pinchDistance = null, this.pinchCenter = null)), this.resizingNode && this.handleResizeEnd(), this.panning && (this.lastPanEndTime = Date.now()), this.panning = null, this.resizingNode ? this.handleResizeEnd() : this.resizingGroup && this.handleGroupResizeEnd(), this.resizingNode = null, this.resizingGroup = null, this.draggingNode = null, this.draggingGroup = null, this.draggingAnchor = null, this.draggingBend = null;
    }), this.svg.addEventListener("pointercancel", (i) => {
      i.pointerType === "touch" && (s.delete(i.pointerId), s.size < 2 && (this.pinchDistance = null, this.pinchCenter = null)), i.target instanceof SVGElement && i.target.releasePointerCapture(i.pointerId), this.resizingNode && this.handleResizeEnd(), this.panning && (this.lastPanEndTime = Date.now()), this.panning = null, this.resizingNode ? this.handleResizeEnd() : this.resizingGroup && this.handleGroupResizeEnd(), this.resizingNode = null, this.resizingGroup = null, this.draggingNode = null, this.draggingGroup = null, this.draggingAnchor = null, this.draggingBend = null;
    }), this.container.addEventListener("keydown", (i) => {
      if (this.mode === "edit") {
        if ((i.ctrlKey || i.metaKey) && i.key === "z" && !i.shiftKey) {
          this.canUndo() && (this.undo(), i.preventDefault());
          return;
        }
        if ((i.ctrlKey || i.metaKey) && (i.key === "y" || i.key === "z" && i.shiftKey)) {
          this.canRedo() && (this.redo(), i.preventDefault());
          return;
        }
        this.selectedEdgeId && (i.key === "Delete" || i.key === "Backspace") && (this.deleteNearestBendPoint(), i.preventDefault());
      }
    }), this.container.setAttribute("tabindex", "0"), this.container.addEventListener("wheel", (i) => {
      if (i.ctrlKey || i.metaKey) {
        i.preventDefault();
        const n = Math.pow(1.5, -i.deltaY / 60), h = Math.max(0.1, Math.min(5, this.zoom * n));
        this.zoomToPoint(h, i.clientX, i.clientY), this.updateTransform(), this.render();
      } else {
        i.preventDefault();
        const n = Math.pow(1.5, i.deltaY / 60), h = Math.max(0.1, Math.min(5, this.zoom * n));
        this.zoomToPoint(h, i.clientX, i.clientY), this.updateTransform(), this.render();
      }
    }, { passive: !1 });
  }
  /**
   * Create arrow markers
   */
  createArrowMarkers() {
    const t = document.createElementNS("http://www.w3.org/2000/svg", "marker");
    t.setAttribute("id", "arrow-end"), t.setAttribute("viewBox", "0 0 10 10"), t.setAttribute("refX", "9"), t.setAttribute("refY", "5"), t.setAttribute("markerWidth", "6"), t.setAttribute("markerHeight", "6"), t.setAttribute("orient", "auto");
    const e = document.createElementNS("http://www.w3.org/2000/svg", "path");
    e.setAttribute("d", "M 0 0 L 10 5 L 0 10 z"), e.setAttribute("fill", "#333"), t.appendChild(e), this.svgDefs.appendChild(t);
    const s = document.createElementNS("http://www.w3.org/2000/svg", "marker");
    s.setAttribute("id", "arrow-start"), s.setAttribute("viewBox", "0 0 10 10"), s.setAttribute("refX", "1"), s.setAttribute("refY", "5"), s.setAttribute("markerWidth", "6"), s.setAttribute("markerHeight", "6"), s.setAttribute("orient", "auto");
    const i = document.createElementNS("http://www.w3.org/2000/svg", "path");
    i.setAttribute("d", "M 10 0 L 0 5 L 10 10 z"), i.setAttribute("fill", "#333"), s.appendChild(i), this.svgDefs.appendChild(s);
  }
  /**
   * Set data
   */
  setData(t, e, s) {
    this.nodes = t, this.edges = e, this.groups = s || [], this.ensureNodePositions(), this.render(), this.container.style.display !== "none" && this.container.offsetParent !== null && setTimeout(() => {
      const i = this.container.getBoundingClientRect();
      i.width > 0 && i.height > 0 && this.fitAndCenter();
    }, 100);
  }
  /**
   * Select node (highlight)
   * @param nodeId Node ID to select (null to deselect)
   * @param zoomToNode Whether to zoom in to node (default: true)
   */
  selectNode(t, e = !0) {
    if (t && e && this.zoomedNodeId === t) {
      this.zoomedNodeId = null, this.selectedNodeId = t, this.render(), this.animateFitAndCenter();
      return;
    }
    if (this.selectedNodeId = t, t ? this.zoomedNodeId = t : this.zoomedNodeId = null, this.render(), t && e) {
      this.zoomToNode(t);
      const s = this.nodes.find((i) => i.id === t);
      s && this.showPopup(s);
    } else t || (this.zoomedNodeId = null, this.hidePopup());
  }
  /**
   * Zoom in to specified node (with animation like Leaflet's flyTo)
   * @param nodeId Node ID to zoom to
   */
  zoomToNode(t) {
    const e = this.nodes.find((m) => m.id === t);
    if (!e || !e.position)
      return;
    const s = this.container.getBoundingClientRect();
    if (s.width <= 0 || s.height <= 0)
      return;
    const i = e.style || {}, n = i.width || this.DEFAULT_NODE_WIDTH, h = i.height || this.DEFAULT_NODE_HEIGHT, a = e.position.x + n / 2, r = e.position.y + h / 2;
    n * this.zoom, h * this.zoom;
    const c = Math.min(s.width * 0.3, s.height * 0.3), l = c / n, d = c / h, o = Math.min(l, d), f = Math.max(0.5, Math.min(3, o)), g = s.width / 2, y = s.height / 2;
    this.animateZoomToPoint(f, g, y, a, r);
  }
  /**
   * Zoom to specified point with animation
   * @param targetZoom Target zoom level
   * @param screenCenterX Screen center X coordinate (relative to container)
   * @param screenCenterY Screen center Y coordinate (relative to container)
   * @param targetSvgX Target SVG X coordinate
   * @param targetSvgY Target SVG Y coordinate
   */
  animateZoomToPoint(t, e, s, i, n) {
    const h = this.zoom, a = this.offsetX, r = this.offsetY, c = this.container.getBoundingClientRect(), l = c.width / (2 * t), d = c.height / (2 * t), o = i - l, u = n - d, p = 500, f = performance.now(), g = (y) => {
      const m = y - f, b = Math.min(m / p, 1), C = 1 - Math.pow(1 - b, 3), B = h + (t - h) * C, v = a + (o - a) * C, T = r + (u - r) * C;
      if (this.zoom = B, this.offsetX = v, this.offsetY = T, this.updateTransform(), this.render(), b >= 1) {
        const A = this.container.getBoundingClientRect(), E = A.width / 2, S = A.height / 2;
        E / this.zoom - this.offsetX, S / this.zoom - this.offsetY;
      }
      b < 1 && requestAnimationFrame(g);
    };
    requestAnimationFrame(g);
  }
  /**
   * Ensure node position information (auto-layout if not present).
   * If coordinates (latitude/longitude) exist, place based on lat/lon (with collision resolution);
   * otherwise place in remaining 1/4 area in a grid.
   * When the relat text has no layout block, positions are recomputed here, so they can differ
   * from an import of the same relat text with a layout block (which uses the saved x,y).
   */
  ensureNodePositions() {
    const t = this.nodes.filter((m) => m.coordinates && m.coordinates.length === 2), e = this.nodes.filter((m) => !m.coordinates || m.coordinates.length !== 2), s = this.nodes.filter((m) => !m.position), i = this.nodes.every((m) => m.position), n = this.groups.every((m) => m.layout);
    if (i && n || s.length === 0 && t.length === 0 && e.length === 0)
      return;
    const h = this.AUTO_LAYOUT_REFERENCE_WIDTH, a = this.AUTO_LAYOUT_REFERENCE_HEIGHT, r = 2, c = h * r * 0.25, l = h * r * 0.75, d = a * r, o = c, u = a * r, p = 0, f = [];
    for (const m of this.nodes)
      if (m.position) {
        const b = m.style || {}, C = b.width || this.DEFAULT_NODE_WIDTH, B = b.height || this.DEFAULT_NODE_HEIGHT;
        if (f.push({
          x: m.position.x - C / 2,
          y: m.position.y - B / 2,
          width: C,
          height: B
        }), m.coordinates && m.coordinates.length === 2) {
          const [v, T] = m.coordinates;
        }
      }
    const g = [...t].sort((m, b) => m.id.localeCompare(b.id));
    if (g.length > 0) {
      const m = g.map((k) => k.coordinates[0]), b = g.map((k) => k.coordinates[1]), C = Math.min(...m), B = Math.max(...m), v = Math.min(...b), T = Math.max(...b), A = B - C, E = T - v, S = Math.max(A, E) * 0.1 || 0.01, I = {
        minLat: C - S,
        maxLat: B + S,
        minLon: v - S,
        maxLon: T + S
      }, x = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map();
      for (const k of g) {
        const [N, M] = k.coordinates, _ = (M - I.minLon) / (I.maxLon - I.minLon), D = 1 - (N - I.minLat) / (I.maxLat - I.minLat), P = {
          x: o + _ * l,
          y: D * d
        }, O = k.style || {}, H = O.width || this.DEFAULT_NODE_WIDTH, tt = O.height || this.DEFAULT_NODE_HEIGHT, V = P.x, z = P.y;
        x.set(k.id, { originalCenterX: V, originalCenterY: z }), L.set(k.id, {
          node: k,
          width: H,
          height: tt,
          originalCenterX: V,
          originalCenterY: z
        });
      }
      this.resolveNodePositionsWithVectorConstraints(L, x);
    }
    const y = e.filter((m) => !m.position);
    if (y.length > 0) {
      const b = [...y].sort((S, I) => S.id.localeCompare(I.id)), C = Math.ceil(Math.sqrt(b.length)), B = Math.ceil(b.length / C), v = c - 40, T = u - 40, A = v / C, E = T / B;
      b.forEach((S, I) => {
        const x = S.style || {}, L = x.width || this.DEFAULT_NODE_WIDTH, k = x.height || this.DEFAULT_NODE_HEIGHT, N = Math.floor(I / C), M = I % C, _ = p + 20 + (M + 0.5) * A, D = 20 + (N + 0.5) * E;
        S.position = { x: _, y: D }, f.push({
          x: _ - L / 2,
          y: D - k / 2,
          width: L,
          height: k
        });
      });
    }
    if (this.groups.length > 0) {
      const m = (C) => {
        if (!C.parentId) return 0;
        const B = this.groups.find((v) => v.id === C.parentId);
        return B ? 1 + m(B) : 0;
      }, b = [...this.groups].sort((C, B) => m(B) - m(C));
      for (const C of b) {
        const B = this.calculateGroupBounds(C.nodeIds, C.id);
        B && (C.layout = {
          position: { x: B.minX, y: B.minY },
          size: {
            width: B.maxX - B.minX,
            height: B.maxY - B.minY
          }
        });
      }
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
  resolveNodePositionsWithVectorConstraints(t, e) {
    const c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set();
    for (const y of this.groups)
      y.layout && l.add(y.id);
    const d = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
    for (const [y, m] of t) {
      const b = m.node, C = e.get(y);
      b.position ? (d.set(y, { centerX: b.position.x, centerY: b.position.y }), c.add(y)) : d.set(y, {
        centerX: C.originalCenterX,
        centerY: C.originalCenterY
      });
      const B = d.get(y);
      o.set(y, {
        x: B.centerX - m.width / 2,
        y: B.centerY - m.height / 2,
        width: m.width,
        height: m.height
      });
    }
    const u = (y) => {
      const m = [];
      for (const b of this.groups) {
        const C = /* @__PURE__ */ new Set(), B = (v) => {
          for (const A of v.nodeIds)
            C.add(A);
          const T = this.groups.filter((A) => A.parentId === v.id);
          for (const A of T)
            B(A);
        };
        B(b), C.has(y) && m.push(b);
      }
      return m;
    }, p = (y) => {
      if (l.has(y.id) && y.layout)
        return {
          minX: y.layout.position.x,
          maxX: y.layout.position.x + y.layout.size.width,
          minY: y.layout.position.y,
          maxY: y.layout.position.y + y.layout.size.height
        };
      const m = this.groups.some((I) => I.parentId === y.id), b = /* @__PURE__ */ new Set();
      if (m) {
        const I = this.groups.filter((x) => x.parentId === y.id);
        for (const x of I) {
          const L = (k) => {
            for (const M of k.nodeIds)
              b.add(M);
            const N = this.groups.filter((M) => M.parentId === k.id);
            for (const M of N)
              L(M);
          };
          L(x);
        }
      }
      let C = 1 / 0, B = -1 / 0, v = 1 / 0, T = -1 / 0, A = !1;
      for (const I of y.nodeIds) {
        if (m && b.has(I))
          continue;
        const x = o.get(I);
        x && (A = !0, C = Math.min(C, x.x), B = Math.max(B, x.x + x.width), v = Math.min(v, x.y), T = Math.max(T, x.y + x.height));
      }
      if (m) {
        const I = this.groups.filter((x) => x.parentId === y.id);
        for (const x of I) {
          const L = p(x);
          L && (A = !0, C = Math.min(C, L.minX), B = Math.max(B, L.maxX), v = Math.min(v, L.minY), T = Math.max(T, L.maxY));
        }
      }
      if (!A)
        return null;
      const E = m ? 50 : 30, S = E + 25;
      return {
        minX: C - E,
        maxX: B + E,
        minY: v - S,
        maxY: T + E
      };
    }, f = [...t.entries()].sort((y, m) => y[0].localeCompare(m[0]));
    for (let y = 0; y < 100; y++) {
      let m = !1;
      for (let b = 0; b < f.length; b++) {
        const [C, B] = f[b], v = d.get(C), T = o.get(C), A = u(C);
        for (let E = b + 1; E < f.length; E++) {
          const [S, I] = f[E], x = d.get(S), L = o.get(S), k = u(S), N = e.get(C), M = e.get(S), _ = M.originalCenterX - N.originalCenterX, D = M.originalCenterY - N.originalCenterY, P = Math.sqrt(_ * _ + D * D);
          if (P === 0) continue;
          const O = _ / P, H = D / P;
          let tt = !1, V = 0;
          for (const z of A) {
            const G = p(z);
            if (G)
              for (const K of k) {
                let j = !1;
                if (z.id === K.id)
                  j = !0;
                else {
                  const Y = (W, q) => {
                    if (q.parentId === W.id) return !0;
                    if (!q.parentId) return !1;
                    const U = this.groups.find(($) => $.id === q.parentId);
                    return U ? Y(W, U) : !1;
                  };
                  j = Y(z, K) || Y(K, z);
                }
                if (j) continue;
                const R = p(K);
                if (!R) continue;
                const Z = G.minX < R.maxX + 60 && G.maxX + 60 > R.minX, J = G.minY < R.maxY + 60 && G.maxY + 60 > R.minY;
                if (Z && J) {
                  tt = !0;
                  const Y = (G.minX + G.maxX) / 2, W = (G.minY + G.maxY) / 2, q = (R.minX + R.maxX) / 2, U = (R.minY + R.maxY) / 2, $ = q - Y, st = U - W, ht = Math.sqrt($ * $ + st * st), dt = G.maxX - G.minX, ot = G.maxY - G.minY, nt = R.maxX - R.minX, St = R.maxY - R.minY, It = Math.abs(dt * O) + Math.abs(ot * H), Lt = Math.abs(nt * O) + Math.abs(St * H), ft = (It + Lt) / 2 + 60;
                  ht < ft && (V = Math.max(V, ft));
                }
              }
          }
          if (tt && V > 0) {
            m = !0;
            const z = x.centerX - v.centerX, G = x.centerY - v.centerY;
            if (Math.sqrt(z * z + G * G) < V) {
              const j = c.has(C), R = c.has(S);
              if (j && R)
                continue;
              const Z = V / P, J = _ * Z, Y = D * Z, W = N.originalCenterX + J, q = N.originalCenterY + Y, U = (W - x.centerX) / 2, $ = (q - x.centerY) / 2;
              j || (v.centerX -= U, v.centerY -= $, T.x = v.centerX - B.width / 2, T.y = v.centerY - B.height / 2), R || (x.centerX += U, x.centerY += $, L.x = x.centerX - I.width / 2, L.y = x.centerY - I.height / 2);
            }
          }
          if (!tt) {
            const z = c.has(C), G = c.has(S);
            if (z && G)
              continue;
            const K = T.x < L.x + L.width + 20 && T.x + T.width + 20 > L.x, j = T.y < L.y + L.height + 20 && T.y + T.height + 20 > L.y;
            if (K && j) {
              m = !0;
              const R = Math.abs(B.width * O) + Math.abs(B.height * H), Z = Math.abs(I.width * O) + Math.abs(I.height * H), J = (R + Z) / 2 + 20, Y = x.centerX - v.centerX, W = x.centerY - v.centerY;
              if (Math.sqrt(Y * Y + W * W) < J) {
                const U = J / P, $ = _ * U, st = D * U, ht = N.originalCenterX + $, dt = N.originalCenterY + st, ot = (ht - x.centerX) / 2, nt = (dt - x.centerY) / 2;
                z || (v.centerX -= ot, v.centerY -= nt, T.x = v.centerX - B.width / 2, T.y = v.centerY - B.height / 2), G || (x.centerX += ot, x.centerY += nt, L.x = x.centerX - I.width / 2, L.y = x.centerY - I.height / 2);
              }
            }
          }
        }
      }
      if (!m)
        break;
    }
    const g = [...t.entries()].sort((y, m) => y[0].localeCompare(m[0]));
    for (const [y, m] of g) {
      if (c.has(y)) continue;
      const b = d.get(y);
      m.node.position = { x: b.centerX, y: b.centerY };
    }
    for (const y of this.groups) {
      const m = p(y);
      m && (y.layout = {
        position: { x: m.minX, y: m.minY },
        size: {
          width: m.maxX - m.minX,
          height: m.maxY - m.minY
        }
      });
    }
  }
  /**
   * Resolve group-group collisions for same-level groups
   * Maintains original positional relationships (left-right, top-bottom)
   * and prevents overlaps between groups at the same hierarchy level
   */
  resolveGroupPositionsWithOrderConstraints(t) {
    const i = [], n = (r) => {
      const c = /* @__PURE__ */ new Set(), l = (p) => {
        for (const g of p.nodeIds)
          c.add(g);
        const f = this.groups.filter((g) => g.parentId === p.id);
        for (const g of f)
          l(g);
      };
      if (l(r), c.size === 0)
        return null;
      let d = 0, o = 0, u = 0;
      for (const p of c) {
        const f = t.get(p);
        f && (d += f.originalCenterX, o += f.originalCenterY, u++);
      }
      return u === 0 ? null : {
        x: d / u,
        y: o / u
      };
    }, h = (r) => {
      if (!r.parentId) return 0;
      const c = this.groups.find((l) => l.id === r.parentId);
      return c ? 1 + h(c) : 0;
    };
    for (const r of this.groups) {
      const c = this.getGroupLayout(r);
      if (!c) continue;
      const l = n(r);
      l && i.push({
        group: r,
        layout: c,
        originalCenter: l,
        level: h(r)
      });
    }
    const a = /* @__PURE__ */ new Map();
    for (const r of i) {
      a.has(r.level) || a.set(r.level, /* @__PURE__ */ new Map());
      const c = a.get(r.level), l = r.group.parentId || null;
      c.has(l) || c.set(l, []), c.get(l).push(r);
    }
    for (const [r, c] of a)
      for (const [l, d] of c)
        if (!(d.length < 2)) {
          d.sort((o, u) => {
            const p = o.originalCenter.y - u.originalCenter.y;
            return Math.abs(p) > 10 ? p : o.originalCenter.x - u.originalCenter.x;
          });
          for (let o = 0; o < 50; o++) {
            let u = !1;
            for (let p = 1; p < d.length; p++) {
              const f = d[p], g = f.layout.position.x, y = g + f.layout.size.width;
              for (let m = 0; m < p; m++) {
                const b = d[m], C = b.layout.position.x, B = C + b.layout.size.width;
                if (g < B + 60 && y + 60 > C) {
                  const v = f.layout.position.y, T = v + f.layout.size.height, A = b.layout.position.y, E = A + b.layout.size.height;
                  if (v < E + 60 && T + 60 > A) {
                    u = !0;
                    const S = B + 60 - g;
                    f.layout.position.x += S;
                    const I = this.calculateGroupBounds(f.group.nodeIds, f.group.id);
                    I && (f.layout.size = {
                      width: I.maxX - I.minX,
                      height: I.maxY - I.minY
                    });
                  }
                }
              }
            }
            for (let p = 1; p < d.length; p++) {
              const f = d[p], g = f.layout.position.y, y = g + f.layout.size.height;
              for (let m = 0; m < p; m++) {
                const b = d[m], C = b.layout.position.y, B = C + b.layout.size.height;
                if (g < B + 60 && y + 60 > C) {
                  const v = f.layout.position.x, T = v + f.layout.size.width, A = b.layout.position.x, E = A + b.layout.size.width;
                  if (v < E + 60 && T + 60 > A) {
                    u = !0;
                    const S = B + 60 - g;
                    f.layout.position.y += S;
                    const I = this.calculateGroupBounds(f.group.nodeIds, f.group.id);
                    I && (f.layout.size = {
                      width: I.maxX - I.minX,
                      height: I.maxY - I.minY
                    });
                  }
                }
              }
            }
            if (!u)
              break;
          }
          for (const o of d)
            o.group.layout = o.layout;
        }
  }
  /**
   * Compact layout: reduce excess space while maintaining position relationships
   * Nodes and groups maintain their relative positions (left-right, top-bottom)
   * Same-level groups must not overlap
   */
  compactLayout(t) {
    const i = (r) => {
      const c = /* @__PURE__ */ new Set(), l = (p) => {
        for (const g of p.nodeIds)
          c.add(g);
        const f = this.groups.filter((g) => g.parentId === p.id);
        for (const g of f)
          l(g);
      };
      if (l(r), c.size === 0) return null;
      let d = 0, o = 0, u = 0;
      for (const p of c) {
        const f = t.get(p);
        f && (d += f.originalCenterX, o += f.originalCenterY, u++);
      }
      return u > 0 ? { x: d / u, y: o / u } : null;
    }, n = (r) => {
      if (!r.parentId) return 0;
      const c = this.groups.find((l) => l.id === r.parentId);
      return c ? 1 + n(c) : 0;
    }, h = Array.from(this.nodes).filter((r) => r.position);
    h.sort((r, c) => {
      const l = t.get(r.id), d = t.get(c.id);
      if (!l || !d) return 0;
      const o = l.originalCenterY - d.originalCenterY;
      return Math.abs(o) > 10 ? o : l.originalCenterX - d.originalCenterX;
    });
    for (let r = 1; r < h.length; r++) {
      const c = h[r];
      if (!c.position) continue;
      const d = (c.style || {}).width || this.DEFAULT_NODE_WIDTH, o = c.position.x - d / 2;
      let u = -1 / 0;
      for (let p = 0; p < r; p++) {
        const f = h[p];
        if (!f.position) continue;
        const y = (f.style || {}).width || this.DEFAULT_NODE_WIDTH, m = f.position.x + y / 2;
        u = Math.max(u, m);
      }
      if (u > -1 / 0) {
        const p = u + 20;
        if (o > p) {
          const f = p - o;
          c.position.x += f;
        }
      }
    }
    for (let r = 1; r < h.length; r++) {
      const c = h[r];
      if (!c.position) continue;
      const d = (c.style || {}).height || this.DEFAULT_NODE_HEIGHT, o = c.position.y - d / 2;
      let u = -1 / 0;
      for (let p = 0; p < r; p++) {
        const f = h[p];
        if (!f.position) continue;
        const y = (f.style || {}).height || this.DEFAULT_NODE_HEIGHT, m = f.position.y + y / 2;
        u = Math.max(u, m);
      }
      if (u > -1 / 0) {
        const p = u + 20;
        if (o > p) {
          const f = p - o;
          c.position.y += f;
        }
      }
    }
    const a = /* @__PURE__ */ new Map();
    for (const r of this.groups) {
      const c = n(r);
      a.has(c) || a.set(c, /* @__PURE__ */ new Map());
      const l = a.get(c), d = r.parentId || null;
      l.has(d) || l.set(d, []), l.get(d).push(r);
    }
    for (const [r, c] of a)
      for (const [l, d] of c)
        if (!(d.length < 2)) {
          d.sort((o, u) => {
            const p = i(o), f = i(u);
            if (!p || !f) return 0;
            const g = p.y - f.y;
            return Math.abs(g) > 10 ? g : p.x - f.x;
          });
          for (let o = 1; o < d.length; o++) {
            const u = d[o], p = this.getGroupLayout(u);
            if (!p) continue;
            const f = p.position.x;
            let g = -1 / 0;
            for (let y = 0; y < o; y++) {
              const m = d[y], b = this.getGroupLayout(m);
              if (!b) continue;
              const C = b.position.x + b.size.width;
              g = Math.max(g, C);
            }
            if (g > -1 / 0) {
              const y = g + 60;
              if (f > y) {
                const m = y - f;
                p.position.x += m, u.layout = p;
              }
            }
          }
          for (let o = 1; o < d.length; o++) {
            const u = d[o], p = this.getGroupLayout(u);
            if (!p) continue;
            const f = p.position.y;
            let g = -1 / 0;
            for (let y = 0; y < o; y++) {
              const m = d[y], b = this.getGroupLayout(m);
              if (!b) continue;
              const C = b.position.y + b.size.height;
              g = Math.max(g, C);
            }
            if (g > -1 / 0) {
              const y = g + 60;
              if (f > y) {
                const m = y - f;
                p.position.y += m, u.layout = p;
              }
            }
          }
        }
  }
  /**
   * Adjust node positions to avoid overlap with other nodes (old implementation, kept for backward compatibility)
   * Adjust while preserving original positional relationships (east-west, north-south)
   */
  adjustNodePosition(t, e, s, i, n = 20) {
    let a = t.x, r = t.y;
    const c = t.width, l = t.height, d = s?.originalX ?? t.x, o = s?.originalY ?? t.y, u = e.map((p, f) => {
      const g = p.width || this.DEFAULT_NODE_WIDTH, y = p.height || this.DEFAULT_NODE_HEIGHT, m = p.x + g / 2, b = p.y + y / 2, C = m - d, B = b - o;
      return {
        x: p.x,
        y: p.y,
        width: g,
        height: y,
        centerX: m,
        centerY: b,
        relativeDx: C,
        // Infer original positional relationship (relationship between existing nodes' current positions and original node's original position)
        relativeDy: B,
        originalCenterX: m,
        // Existing node's current position (inferred original position)
        originalCenterY: b
      };
    });
    for (let p = 0; p < n; p++) {
      let f = !1, g = a, y = r, m = 1 / 0;
      for (const b of u)
        if (a < b.x + b.width + 20 && a + c + 20 > b.x && r < b.y + b.height + 20 && r + l + 20 > b.y) {
          f = !0;
          const C = a + c / 2, B = r + l / 2, v = b.centerX - C, T = b.centerY - B, A = Math.sqrt(v * v + T * T);
          if (A > 0) {
            const E = (c + b.width) / 2 + 20;
            let S = v, I = T;
            if (Math.abs(b.relativeDx) > 0.1 || Math.abs(b.relativeDy) > 0.1)
              if (Math.abs(b.relativeDx) > Math.abs(b.relativeDy))
                S = (b.relativeDx > 0 ? -1 : 1) * Math.abs(v) / A * E, I = T / A * E * 0.5;
              else {
                const H = b.relativeDy > 0 ? -1 : 1;
                S = v / A * E * 0.5, I = H * Math.abs(T) / A * E;
              }
            else
              S = v / A * E, I = T / A * E;
            const x = a + S, L = r + I, k = Math.sqrt(
              Math.pow(x - d, 2) + Math.pow(L - o, 2)
            ), N = x + c / 2, M = L + l / 2, _ = N - d, D = M - o;
            let P = 0;
            (b.relativeDx > 0 && _ < b.relativeDx || b.relativeDx < 0 && _ > b.relativeDx) && (P += 1e3), (b.relativeDy > 0 && D < b.relativeDy || b.relativeDy < 0 && D > b.relativeDy) && (P += 1e3);
            const O = k + P;
            O < m && (m = O, g = x, y = L);
          } else {
            const E = (c + b.width) / 2 + 20;
            let S = 0, I = 0;
            if (b.relativeDx !== 0 || b.relativeDy !== 0) {
              const N = b.relativeDx > 0 ? -1 : 1, M = b.relativeDy > 0 ? -1 : 1;
              S = N * E, I = M * E;
            } else {
              const N = Math.random() * Math.PI * 2;
              S = Math.cos(N) * E, I = Math.sin(N) * E;
            }
            const x = a + S, L = r + I, k = Math.sqrt(
              Math.pow(x - d, 2) + Math.pow(L - o, 2)
            );
            k < m && (m = k, g = x, y = L);
          }
        }
      if (!f)
        break;
      a = g, r = y;
    }
    return { x: a, y: r };
  }
  /**
   * Group edges by node pair
   * Group by undirected pair key (minId||maxId) and generate EdgePair
   */
  groupEdgesByPair(t) {
    const e = /* @__PURE__ */ new Map();
    for (const s of t) {
      const [i, n] = s.src < s.dst ? [s.src, s.dst] : [s.dst, s.src], h = `${i}||${n}`;
      let a = e.get(h);
      a || (a = {
        key: h,
        a: i,
        b: n,
        edges: []
      }, e.set(h, a)), a.edges.push(s), s.src === i && s.dst === n ? (s.srcAnchor && !a.srcAnchor && (a.srcAnchor = s.srcAnchor), s.dstAnchor && !a.dstAnchor && (a.dstAnchor = s.dstAnchor), s.bends && !a.bends && (a.bends = s.bends)) : (s.srcAnchor && !a.dstAnchor && (a.dstAnchor = s.srcAnchor), s.dstAnchor && !a.srcAnchor && (a.srcAnchor = s.dstAnchor), s.bends && !a.bends && (a.bends = s.bends));
    }
    return Array.from(e.values());
  }
  /**
   * Determine direction from EdgePair
   * @returns { hasAtoB: boolean, hasBtoA: boolean }
   */
  getEdgePairDirection(t) {
    let e = !1, s = !1;
    for (const i of t.edges)
      i.src === t.a && i.dst === t.b ? e = !0 : i.src === t.b && i.dst === t.a && (s = !0);
    return { hasAtoB: e, hasBtoA: s };
  }
  /**
   * Calculate EdgePair path (based on A->B direction)
   */
  calculateEdgePairPath(t) {
    const e = this.nodes.find((g) => g.id === t.a), s = this.nodes.find((g) => g.id === t.b);
    if (!e?.position || !s?.position)
      return "";
    const i = t.srcAnchor || this.estimateAnchor(e, s), n = t.dstAnchor || this.estimateAnchor(s, e), h = e.style || {}, a = s.style || {}, r = h.width || this.DEFAULT_NODE_WIDTH, c = h.height || this.DEFAULT_NODE_HEIGHT, l = a.width || this.DEFAULT_NODE_WIDTH, d = a.height || this.DEFAULT_NODE_HEIGHT, o = this.calculateAnchorPosition(e, i, r, c), u = this.calculateAnchorPosition(s, n, l, d), p = [o];
    t.bends && p.push(...t.bends), p.push(u);
    const f = [`M ${p[0].x} ${p[0].y}`];
    for (let g = 1; g < p.length; g++)
      f.push(`L ${p[g].x} ${p[g].y}`);
    return f.join(" ");
  }
  /**
   * Calculate position on node edge
   * @param node Node
   * @param anchor Anchor information
   * @param width Node width (optional, uses default if not provided)
   * @param height Node height (optional, uses default if not provided)
   * @returns Coordinates {x, y}
   */
  calculateAnchorPosition(t, e, s, i) {
    if (!t.position)
      return { x: 0, y: 0 };
    const n = t.position.x, h = t.position.y, a = s || t.style?.width || this.DEFAULT_NODE_WIDTH, r = i || t.style?.height || this.DEFAULT_NODE_HEIGHT;
    let c = 0, l = 0;
    switch (e.side) {
      case "top":
        c = n - a / 2 + a * e.t, l = h - r / 2;
        break;
      case "right":
        c = n + a / 2, l = h - r / 2 + r * e.t;
        break;
      case "bottom":
        c = n - a / 2 + a * e.t, l = h + r / 2;
        break;
      case "left":
        c = n - a / 2, l = h - r / 2 + r * e.t;
        break;
    }
    return { x: c, y: l };
  }
  /**
   * Auto-estimate anchor
   * Calculate side and position closest to direction from node center to target node
   */
  estimateAnchor(t, e) {
    if (!t.position || !e.position)
      return { side: "right", t: 0.5 };
    const s = t.style || {}, i = s.width || this.DEFAULT_NODE_WIDTH, n = s.height || this.DEFAULT_NODE_HEIGHT, h = e.position.x - t.position.x, a = e.position.y - t.position.y, r = Math.atan2(a, h), c = r < 0 ? r + 2 * Math.PI : r;
    let l, d;
    return c >= 7 * Math.PI / 4 || c < Math.PI / 4 ? (l = "right", d = 0.5 + a / n * 0.5) : c >= Math.PI / 4 && c < 3 * Math.PI / 4 ? (l = "bottom", d = 0.5 + h / i * 0.5) : c >= 3 * Math.PI / 4 && c < 5 * Math.PI / 4 ? (l = "left", d = 0.5 - a / n * 0.5) : (l = "top", d = 0.5 - h / i * 0.5), d = Math.max(0, Math.min(1, d)), { side: l, t: d };
  }
  /**
   * Get edge point array [start, ...bends, end]
   */
  getEdgePoints(t) {
    const e = this.nodes.find((f) => f.id === t.src), s = this.nodes.find((f) => f.id === t.dst);
    if (!e?.position || !s?.position)
      return [];
    const i = t.srcAnchor || this.estimateAnchor(e, s), n = t.dstAnchor || this.estimateAnchor(s, e), h = e.style || {}, a = s.style || {}, r = h.width || this.DEFAULT_NODE_WIDTH, c = h.height || this.DEFAULT_NODE_HEIGHT, l = a.width || this.DEFAULT_NODE_WIDTH, d = a.height || this.DEFAULT_NODE_HEIGHT, o = this.calculateAnchorPosition(e, i, r, c), u = this.calculateAnchorPosition(s, n, l, d), p = [o];
    return t.bends && p.push(...t.bends), p.push(u), p;
  }
  /**
   * Calculate edge path (considering anchors, supporting bend points)
   */
  calculateEdgePath(t) {
    const e = this.getEdgePoints(t);
    if (e.length < 2)
      return "";
    const s = [`M ${e[0].x} ${e[0].y}`];
    for (let i = 1; i < e.length; i++)
      s.push(`L ${e[i].x} ${e[i].y}`);
    return s.join(" ");
  }
  /**
   * Determine EdgePair marker attributes
   * Set marker-start/marker-end based on direction
   */
  getEdgePairMarkerAttributes(t) {
    const { hasAtoB: e, hasBtoA: s } = this.getEdgePairDirection(t), i = {};
    return e && (i.markerEnd = "url(#arrow-end)"), s && (i.markerStart = "url(#arrow-start)"), i;
  }
  /**
   * Deselect edge
   */
  deselectEdge() {
    this.selectedEdgeId = null, this.anchorHandlesGroup.style.display = "none", this.bendHandlesGroup.style.display = "none", this.anchorHandles.clear(), this.bendHandles.clear(), this.updateControlButtons();
  }
  /**
   * Select edge
   */
  selectEdge(t, e) {
    this.selectedEdgeId === t && e ? this.rotateAnchorSide(t) : (this.selectedEdgeId = t, this.updateAnchorHandles(), this.updateBendHandles());
  }
  /**
   * Rotate anchor side clockwise (on Shift+click)
   */
  rotateAnchorSide(t) {
    const e = this.edges.find((c) => c.id === t);
    if (!e)
      return;
    this.pushUndoState();
    const [s, i] = e.src < e.dst ? [e.src, e.dst] : [e.dst, e.src], n = `${s}||${i}`, h = this.groupEdgesByPair(this.edges).find((c) => c.key === n);
    if (!h)
      return;
    const a = ["top", "right", "bottom", "left"], r = (c) => {
      const l = a.indexOf(c);
      return a[(l + 1) % 4];
    };
    h.srcAnchor && (h.srcAnchor.side = r(h.srcAnchor.side)), h.dstAnchor && (h.dstAnchor.side = r(h.dstAnchor.side));
    for (const c of h.edges)
      c.src === h.a && c.dst === h.b ? (c.srcAnchor = h.srcAnchor, c.dstAnchor = h.dstAnchor) : (c.srcAnchor = h.dstAnchor, c.dstAnchor = h.srcAnchor);
    this.render(), this.updateAnchorHandles(), this.updateBendHandles();
  }
  /**
   * Update anchor handles
   */
  updateAnchorHandles() {
    if (this.anchorHandles.clear(), this.anchorHandlesGroup.innerHTML = "", !this.selectedEdgeId || this.mode !== "edit") {
      this.anchorHandlesGroup.style.display = "none";
      return;
    }
    const t = this.edges.find((m) => m.id === this.selectedEdgeId);
    if (!t)
      return;
    const [e, s] = t.src < t.dst ? [t.src, t.dst] : [t.dst, t.src], i = `${e}||${s}`, n = this.groupEdgesByPair(this.edges).find((m) => m.key === i);
    if (!n)
      return;
    const h = this.nodes.find((m) => m.id === n.a), a = this.nodes.find((m) => m.id === n.b);
    if (!h || !a)
      return;
    const r = n.srcAnchor || this.estimateAnchor(h, a), c = n.dstAnchor || this.estimateAnchor(a, h), l = h.style || {}, d = a.style || {}, o = l.width || this.DEFAULT_NODE_WIDTH, u = l.height || this.DEFAULT_NODE_HEIGHT, p = d.width || this.DEFAULT_NODE_WIDTH, f = d.height || this.DEFAULT_NODE_HEIGHT, g = this.calculateAnchorPosition(h, r, o, u), y = this.calculateAnchorPosition(a, c, p, f);
    this.createAnchorHandle(t.id, "src", g.x, g.y), this.createAnchorHandle(t.id, "dst", y.x, y.y), this.anchorHandlesGroup.style.display = "block", this.anchorHandlesGroup.style.pointerEvents = "auto";
  }
  /**
   * Update bend point handles
   */
  updateBendHandles() {
    if (this.bendHandles.clear(), this.bendHandlesGroup.innerHTML = "", !this.selectedEdgeId || this.mode !== "edit") {
      this.bendHandlesGroup.style.display = "none", this.updateControlButtons();
      return;
    }
    const t = this.edges.find((h) => h.id === this.selectedEdgeId);
    if (!t) {
      this.updateControlButtons();
      return;
    }
    const [e, s] = t.src < t.dst ? [t.src, t.dst] : [t.dst, t.src], i = `${e}||${s}`, n = this.groupEdgesByPair(this.edges).find((h) => h.key === i);
    if (!n || !n.bends || n.bends.length === 0) {
      this.bendHandlesGroup.style.display = "none", this.updateControlButtons();
      return;
    }
    n.bends.forEach((h, a) => {
      this.createBendHandle(t.id, a, h.x, h.y);
    }), this.bendHandlesGroup.style.display = "block", this.bendHandlesGroup.style.pointerEvents = "auto", this.updateControlButtons();
  }
  /**
   * Create anchor handle
   */
  createAnchorHandle(t, e, s, i) {
    const n = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    n.setAttribute("cx", String(s)), n.setAttribute("cy", String(i)), n.setAttribute("r", String(this.HANDLE_RADIUS)), n.setAttribute("fill", "#2196f3"), n.setAttribute("stroke", "#fff"), n.setAttribute("stroke-width", "2"), n.setAttribute("data-edge-id", t), n.setAttribute("data-handle-type", e), n.style.cursor = "move", this.anchorHandles.set(e, n), this.anchorHandlesGroup.appendChild(n);
  }
  /**
   * Create bend point handle
   */
  createBendHandle(t, e, s, i) {
    const n = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    n.setAttribute("cx", String(s)), n.setAttribute("cy", String(i)), n.setAttribute("r", String(this.BEND_HANDLE_RADIUS)), n.setAttribute("fill", "#ff9800"), n.setAttribute("stroke", "#fff"), n.setAttribute("stroke-width", "2"), n.setAttribute("data-edge-id", t), n.setAttribute("data-bend-index", String(e)), n.style.cursor = "move", this.bendHandles.set(e, n), this.bendHandlesGroup.appendChild(n);
  }
  /**
   * Update node position (during drag)
   */
  updateNodePosition(t) {
    if (!this.draggingNode)
      return;
    const e = this.nodes.find((h) => h.id === this.draggingNode.nodeId);
    if (!e)
      return;
    const s = this.screenToSvg(t.clientX, t.clientY), i = s.x, n = s.y;
    e.position || (e.position = { x: 0, y: 0 }), e.position.x = i - this.draggingNode.offsetX, e.position.y = n - this.draggingNode.offsetY, this.updateGroupLayouts(e.id, void 0), this.render(), this.updateAnchorHandles(), this.updateBendHandles();
  }
  /**
   * Update node size (during resize)
   */
  updateNodeSize(t) {
    if (!this.resizingNode)
      return;
    const e = this.nodes.find((c) => c.id === this.resizingNode.nodeId);
    if (!e?.position)
      return;
    const s = this.screenToSvg(t.clientX, t.clientY), i = s.x, n = s.y;
    e.style || (e.style = {});
    const h = i - this.resizingNode.startX, a = n - this.resizingNode.startY;
    switch (this.resizingNode.side) {
      case "right": {
        const c = Math.max(60, this.resizingNode.startWidth + h);
        e.style.width = c, e.position.x = this.resizingNode.startNodeX + h / 2;
        break;
      }
      case "left": {
        const c = Math.max(60, this.resizingNode.startWidth - h);
        e.style.width = c, e.position.x = this.resizingNode.startNodeX + h / 2;
        break;
      }
      case "bottom": {
        const c = Math.max(40, this.resizingNode.startHeight + a);
        e.style.height = c, e.position.y = this.resizingNode.startNodeY + a / 2;
        break;
      }
      case "top": {
        const c = Math.max(40, this.resizingNode.startHeight - a);
        e.style.height = c, e.position.y = this.resizingNode.startNodeY + a / 2;
        break;
      }
    }
    const r = this.nodeElements.get(e.id);
    if (r) {
      const c = e.style || {}, l = c.width || this.DEFAULT_NODE_WIDTH, d = c.height || this.DEFAULT_NODE_HEIGHT, o = e.position.x - l / 2, u = e.position.y - d / 2;
      r.setAttribute("x", String(o)), r.setAttribute("y", String(u)), r.setAttribute("width", String(l)), r.setAttribute("height", String(d));
      const p = r.parentElement;
      if (p) {
        const f = p.querySelector("foreignObject");
        if (f) {
          const g = e.style || {}, y = g.width || this.DEFAULT_NODE_WIDTH, m = g.height || this.DEFAULT_NODE_HEIGHT, b = e.position.x - y / 2, C = e.position.y - m / 2;
          f.setAttribute("x", String(b)), f.setAttribute("y", String(C));
        }
        e.position && p.querySelectorAll("[data-resize-side]").forEach((y) => {
          const m = y.getAttribute("data-resize-side");
          m === "top" ? (y.setAttribute("cx", String(e.position.x)), y.setAttribute("cy", String(e.position.y - d / 2))) : m === "right" ? (y.setAttribute("cx", String(e.position.x + l / 2)), y.setAttribute("cy", String(e.position.y))) : m === "bottom" ? (y.setAttribute("cx", String(e.position.x)), y.setAttribute("cy", String(e.position.y + d / 2))) : m === "left" && (y.setAttribute("cx", String(e.position.x - l / 2)), y.setAttribute("cy", String(e.position.y)));
        });
      }
    }
  }
  /**
   * Handle resize end (called on pointer up)
   */
  handleResizeEnd() {
    this.resizeRenderTimer && (clearTimeout(this.resizeRenderTimer), this.resizeRenderTimer = null), this.resizingNode && this.updateGroupLayouts(this.resizingNode.nodeId, void 0), this.render();
  }
  /**
   * Save snapshot before entering edit mode
   */
  saveSnapshot() {
    this.snapshotBeforeEdit = {
      nodes: this.nodes.map((t) => ({
        ...t,
        position: t.position ? { ...t.position } : void 0,
        style: t.style ? { ...t.style } : void 0,
        meta: t.meta ? { ...t.meta } : void 0
      })),
      edges: this.edges.map((t) => ({
        ...t,
        srcAnchor: t.srcAnchor ? { ...t.srcAnchor } : void 0,
        dstAnchor: t.dstAnchor ? { ...t.dstAnchor } : void 0,
        bends: t.bends ? t.bends.map((e) => ({ ...e })) : void 0,
        style: t.style ? { ...t.style } : void 0,
        meta: t.meta ? { ...t.meta } : void 0
      })),
      groups: this.groups.map((t) => ({
        ...t,
        layout: t.layout ? {
          position: { ...t.layout.position },
          size: { ...t.layout.size }
        } : void 0,
        info: t.info ? { ...t.info } : void 0
      }))
    };
  }
  /**
   * Restore snapshot (cancel edit)
   */
  restoreSnapshot() {
    this.snapshotBeforeEdit && (this.nodes = this.snapshotBeforeEdit.nodes.map((t) => ({
      ...t,
      position: t.position ? { ...t.position } : void 0,
      style: t.style ? { ...t.style } : void 0,
      meta: t.meta ? { ...t.meta } : void 0
    })), this.edges = this.snapshotBeforeEdit.edges.map((t) => ({
      ...t,
      srcAnchor: t.srcAnchor ? { ...t.srcAnchor } : void 0,
      dstAnchor: t.dstAnchor ? { ...t.dstAnchor } : void 0,
      bends: t.bends ? t.bends.map((e) => ({ ...e })) : void 0,
      style: t.style ? { ...t.style } : void 0,
      meta: t.meta ? { ...t.meta } : void 0
    })), this.groups = this.snapshotBeforeEdit.groups.map((t) => ({
      ...t,
      layout: t.layout ? {
        position: { ...t.layout.position },
        size: { ...t.layout.size }
      } : void 0,
      info: t.info ? { ...t.info } : void 0
    })), this.render(), this.deselectEdge());
  }
  /**
   * Clone current nodes, edges, groups (editable state only)
   */
  cloneState() {
    return {
      nodes: this.nodes.map((t) => ({
        ...t,
        position: t.position ? { ...t.position } : void 0,
        style: t.style ? { ...t.style } : void 0,
        meta: t.meta ? { ...t.meta } : void 0
      })),
      edges: this.edges.map((t) => ({
        ...t,
        srcAnchor: t.srcAnchor ? { ...t.srcAnchor } : void 0,
        dstAnchor: t.dstAnchor ? { ...t.dstAnchor } : void 0,
        bends: t.bends ? t.bends.map((e) => ({ ...e })) : void 0,
        style: t.style ? { ...t.style } : void 0,
        meta: t.meta ? { ...t.meta } : void 0
      })),
      groups: this.groups.map((t) => ({
        ...t,
        layout: t.layout ? {
          position: { ...t.layout.position },
          size: { ...t.layout.size }
        } : void 0,
        info: t.info ? { ...t.info } : void 0
      }))
    };
  }
  /**
   * Push current state to undo stack (call at start of an edit)
   */
  pushUndoState() {
    if (this.mode !== "edit")
      return;
    const t = this.cloneState();
    this.undoStack.push(t), this.undoStack.length > lt.MAX_UNDO_LEVELS && this.undoStack.shift(), this.redoStack = [], this.onGraphButtonsUpdate?.();
  }
  /**
   * Apply a snapshot to current state
   */
  applyState(t) {
    this.nodes = t.nodes.map((e) => ({
      ...e,
      position: e.position ? { ...e.position } : void 0,
      style: e.style ? { ...e.style } : void 0,
      meta: e.meta ? { ...e.meta } : void 0
    })), this.edges = t.edges.map((e) => ({
      ...e,
      srcAnchor: e.srcAnchor ? { ...e.srcAnchor } : void 0,
      dstAnchor: e.dstAnchor ? { ...e.dstAnchor } : void 0,
      bends: e.bends ? e.bends.map((s) => ({ ...s })) : void 0,
      style: e.style ? { ...e.style } : void 0,
      meta: e.meta ? { ...e.meta } : void 0
    })), this.groups = t.groups.map((e) => ({
      ...e,
      layout: e.layout ? {
        position: { ...e.layout.position },
        size: { ...e.layout.size }
      } : void 0,
      info: e.info ? { ...e.info } : void 0
    }));
  }
  /**
   * Undo last edit (Graph edit mode only)
   */
  undo() {
    if (this.mode !== "edit" || this.undoStack.length === 0)
      return;
    const t = this.cloneState();
    this.redoStack.push(t);
    const e = this.undoStack.pop();
    this.applyState(e), this.render(), this.updateAnchorHandles(), this.updateBendHandles(), this.updateControlButtons(), this.debouncedSave(), this.onGraphButtonsUpdate?.();
  }
  /**
   * Redo last undone edit (Graph edit mode only)
   */
  redo() {
    if (this.mode !== "edit" || this.redoStack.length === 0)
      return;
    const t = this.cloneState();
    this.undoStack.push(t);
    const e = this.redoStack.pop();
    this.applyState(e), this.render(), this.updateAnchorHandles(), this.updateBendHandles(), this.updateControlButtons(), this.debouncedSave(), this.onGraphButtonsUpdate?.();
  }
  /**
   * Whether undo is available (for ViewContainer button state)
   */
  canUndo() {
    return this.mode === "edit" && this.undoStack.length > 0;
  }
  /**
   * Whether redo is available (for ViewContainer button state)
   */
  canRedo() {
    return this.mode === "edit" && this.redoStack.length > 0;
  }
  /**
   * Update anchor position (during drag)
   */
  updateAnchorPosition(t) {
    if (!this.draggingAnchor)
      return;
    const e = this.edges.find((B) => B.id === this.draggingAnchor.edgeId);
    if (!e)
      return;
    const [s, i] = e.src < e.dst ? [e.src, e.dst] : [e.dst, e.src], n = `${s}||${i}`, h = this.groupEdgesByPair(this.edges).find((B) => B.key === n);
    if (!h)
      return;
    const a = this.draggingAnchor.type === "src" ? h.a : h.b, r = this.nodes.find((B) => B.id === a);
    if (!r?.position)
      return;
    const c = this.screenToSvg(t.clientX, t.clientY), l = c.x - this.draggingAnchor.offsetX, d = c.y - this.draggingAnchor.offsetY, o = r.position.x, u = r.position.y, p = r.style || {}, f = p.width || this.DEFAULT_NODE_WIDTH, g = p.height || this.DEFAULT_NODE_HEIGHT, y = {
      top: Math.abs(d - (u - g / 2)),
      right: Math.abs(l - (o + f / 2)),
      bottom: Math.abs(d - (u + g / 2)),
      left: Math.abs(l - (o - f / 2))
    };
    let m = "right", b = y.right;
    for (const [B, v] of Object.entries(y))
      v < b && (b = v, m = B);
    let C = 0.5;
    switch (m) {
      case "top":
      case "bottom":
        C = (l - (o - f / 2)) / f;
        break;
      case "left":
      case "right":
        C = (d - (u - g / 2)) / g;
        break;
    }
    C = Math.max(0, Math.min(1, C)), this.draggingAnchor.type === "src" ? h.srcAnchor = { side: m, t: C } : h.dstAnchor = { side: m, t: C };
    for (const B of h.edges)
      B.src === h.a && B.dst === h.b ? (B.srcAnchor = h.srcAnchor, B.dstAnchor = h.dstAnchor) : (B.srcAnchor = h.dstAnchor, B.dstAnchor = h.srcAnchor);
    this.render(), this.updateAnchorHandles(), this.updateBendHandles();
  }
  /**
   * Update bend point position (during drag)
   */
  updateBendPosition(t) {
    if (!this.draggingBend)
      return;
    const e = this.edges.find((d) => d.id === this.draggingBend.edgeId);
    if (!e)
      return;
    const [s, i] = e.src < e.dst ? [e.src, e.dst] : [e.dst, e.src], n = `${s}||${i}`, h = this.groupEdgesByPair(this.edges).find((d) => d.key === n);
    if (!h || !h.bends)
      return;
    const a = this.draggingBend.bendIndex;
    if (a < 0 || a >= h.bends.length)
      return;
    const r = this.screenToSvg(t.clientX, t.clientY), c = r.x - this.draggingBend.offsetX, l = r.y - this.draggingBend.offsetY;
    h.bends[a] = { x: c, y: l };
    for (const d of h.edges)
      d.bends = [...h.bends];
    this.render(), this.updateBendHandles();
  }
  /**
   * Insert bend point (on double click/tap)
   */
  insertBendPoint(t, e) {
    const s = this.edges.find((L) => L.id === t);
    if (!s)
      return;
    this.pushUndoState();
    const [i, n] = s.src < s.dst ? [s.src, s.dst] : [s.dst, s.src], h = `${i}||${n}`, a = this.groupEdgesByPair(this.edges).find((L) => L.key === h);
    if (!a)
      return;
    const r = this.svg.getBoundingClientRect(), c = e.clientX - r.left, l = e.clientY - r.top, d = [], o = this.nodes.find((L) => L.id === a.a), u = this.nodes.find((L) => L.id === a.b);
    if (!o?.position || !u?.position)
      return;
    const p = a.srcAnchor || this.estimateAnchor(o, u), f = a.dstAnchor || this.estimateAnchor(u, o), g = o.style || {}, y = u.style || {}, m = g.width || this.DEFAULT_NODE_WIDTH, b = g.height || this.DEFAULT_NODE_HEIGHT, C = y.width || this.DEFAULT_NODE_WIDTH, B = y.height || this.DEFAULT_NODE_HEIGHT, v = this.calculateAnchorPosition(o, p, m, b), T = this.calculateAnchorPosition(u, f, C, B);
    d.push(v), a.bends && d.push(...a.bends), d.push(T);
    let A = 0, E = 1 / 0;
    for (let L = 0; L < d.length - 1; L++) {
      const k = d[L], N = d[L + 1], M = this.pointToLineSegmentDistance(c, l, k.x, k.y, N.x, N.y);
      M < E && (E = M, A = L);
    }
    const S = d[A], I = d[A + 1], x = {
      x: (S.x + I.x) / 2,
      y: (S.y + I.y) / 2
    };
    a.bends || (a.bends = []), a.bends.splice(A, 0, x);
    for (const L of a.edges)
      L.bends = [...a.bends];
    this.selectedEdgeId !== t && this.selectEdge(t, !1), this.render(), this.updateBendHandles();
  }
  /**
   * Calculate distance from point to line segment
   */
  pointToLineSegmentDistance(t, e, s, i, n, h) {
    const a = n - s, r = h - i, c = a * a + r * r;
    if (c === 0)
      return Math.sqrt((t - s) ** 2 + (e - i) ** 2);
    const l = Math.max(0, Math.min(1, ((t - s) * a + (e - i) * r) / c)), d = s + l * a, o = i + l * r;
    return Math.sqrt((t - d) ** 2 + (e - o) ** 2);
  }
  /**
   * Delete nearest bend point (on Delete/Backspace)
   * Also implements View interface deleteNearestBendPoint method
   */
  deleteNearestBendPoint() {
    if (!this.selectedEdgeId)
      return;
    const t = this.edges.find((h) => h.id === this.selectedEdgeId);
    if (!t)
      return;
    const [e, s] = t.src < t.dst ? [t.src, t.dst] : [t.dst, t.src], i = `${e}||${s}`, n = this.groupEdgesByPair(this.edges).find((h) => h.key === i);
    if (!(!n || !n.bends || n.bends.length === 0)) {
      this.pushUndoState(), n.bends.pop(), n.bends.length === 0 && delete n.bends;
      for (const h of n.edges)
        n.bends ? h.bends = [...n.bends] : delete h.bends;
      this.render(), this.updateBendHandles(), this.updateControlButtons();
    }
  }
  /**
   * Debounce save callback
   */
  debouncedSave() {
    this.onSave && (this.saveDebounceTimer !== null && clearTimeout(this.saveDebounceTimer), this.saveDebounceTimer = window.setTimeout(() => {
      this.onSave({
        nodes: this.nodes,
        edges: this.edges,
        groups: this.groups.length > 0 ? this.groups : void 0
      }), this.saveDebounceTimer = null;
    }, this.SAVE_DEBOUNCE_MS));
  }
  /**
   * Render graph
   */
  render() {
    this.updateTransform(), this.nodeElements.clear(), this.edgeElements.clear(), this.edgesGroup.innerHTML = "", this.groupsGroup.innerHTML = "", this.nodesGroup.innerHTML = "", this.edgeLabelsGroup.innerHTML = "";
    const t = this.groupEdgesByPair(this.edges);
    for (const e of t) {
      const s = e.edges.some((B) => B.id === this.selectedEdgeId), i = this.mode === "view" && e.key === this.hoveredEdgePairKey, n = this.mode === "view" && e.key === this.tappedEdgePairKey, h = this.alwaysShowEdges || s || i || n, r = e.edges[0].style || {}, c = r.color || this.EDGE_DEFAULT_COLOR, l = r.weight || 1, d = Math.max(this.EDGE_MIN_WEIGHT, Math.min(this.EDGE_MAX_WEIGHT, l)), o = this.EDGE_DEFAULT_WIDTH + (d - 1) * 0.5, u = h ? Math.max(o, this.EDGE_HOVER_WIDTH) : o, p = s ? "#2196f3" : c, f = h ? 1 : 0.3, g = this.calculateEdgePairPath(e);
      if (!g)
        continue;
      const y = document.createElementNS("http://www.w3.org/2000/svg", "path");
      y.setAttribute("d", g), y.setAttribute("stroke", "transparent"), y.setAttribute("stroke-width", String(this.HIT_PATH_WIDTH)), y.setAttribute("fill", "none"), y.setAttribute("data-hit-edge-pair-key", e.key), y.style.cursor = "pointer", y.style.pointerEvents = "stroke", this.edgesGroup.appendChild(y);
      const m = document.createElementNS("http://www.w3.org/2000/svg", "path");
      m.setAttribute("d", g), m.setAttribute("stroke", p), m.setAttribute("stroke-width", String(u)), m.setAttribute("stroke-opacity", String(f)), m.setAttribute("fill", "none"), m.setAttribute("data-edge-pair-key", e.key), m.style.pointerEvents = "none", m.style.transition = "stroke-opacity 0.2s, stroke-width 0.2s";
      const b = this.getEdgePairMarkerAttributes(e);
      if (b.markerStart && m.setAttribute("marker-start", b.markerStart), b.markerEnd && m.setAttribute("marker-end", b.markerEnd), this.edgeElements.set(e.key, m), this.edgesGroup.appendChild(m), this.mode === "view")
        this.setupEdgeInteraction(y, e, r);
      else if (this.mode === "edit") {
        this.setupEdgeInteractionForEdit(y, e);
        const B = e.key;
        y.addEventListener("click", (v) => {
          const T = this.edgeClickTimers.get(y);
          if (T != null) {
            clearTimeout(T), this.edgeClickTimers.set(y, null);
            return;
          }
          const A = window.setTimeout(() => {
            if (this.edgeClickTimers.set(y, null), this.mode === "edit") {
              const E = this.groupEdgesByPair(this.edges).find((S) => S.key === B);
              E && E.edges.length > 0 && (this.selectEdge(E.edges[0].id, v.shiftKey), this.render());
            }
          }, 300);
          this.edgeClickTimers.set(y, A);
        });
      }
      const C = e.key;
      y.addEventListener("dblclick", (B) => {
        if (this.mode !== "edit")
          return;
        const v = this.edgeClickTimers.get(y);
        v != null && (clearTimeout(v), this.edgeClickTimers.set(y, null));
        const T = this.groupEdgesByPair(this.edges).find((A) => A.key === C);
        T && T.edges.length > 0 && (this.insertBendPoint(T.edges[0].id, B), B.preventDefault(), B.stopPropagation());
      }), h && this.renderEdgeLabels(e, r);
    }
    this.renderGroups();
    for (const e of this.nodes) {
      if (!e.position)
        continue;
      const s = e.style || {}, i = s.width || this.DEFAULT_NODE_WIDTH, n = s.height || this.DEFAULT_NODE_HEIGHT, h = s.color || "#fff", a = s.borderColor || "#333", r = document.createElementNS("http://www.w3.org/2000/svg", "g");
      r.setAttribute("data-node-id", e.id);
      const c = document.createElementNS("http://www.w3.org/2000/svg", "rect"), l = e.position.x - i / 2, d = e.position.y - n / 2;
      c.setAttribute("x", String(l)), c.setAttribute("y", String(d)), c.setAttribute("width", String(i)), c.setAttribute("height", String(n));
      const o = h.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
      if (o) {
        const g = parseInt(o[1], 16), y = parseInt(o[2], 16), m = parseInt(o[3], 16);
        c.setAttribute("fill", `rgba(${g}, ${y}, ${m}, 0.5)`);
      } else
        c.setAttribute("fill", h);
      const u = this.selectedNodeId === e.id;
      c.setAttribute("stroke", u ? "#2196f3" : a), c.setAttribute("stroke-width", u ? "4" : "2"), c.setAttribute("rx", "4"), c.style.cursor = this.mode === "view" ? "pointer" : "move";
      const p = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
      p.setAttribute("x", String(l)), p.setAttribute("y", String(d)), p.setAttribute("width", String(i)), p.setAttribute("height", String(n));
      const f = document.createElement("div");
      f.style.width = "100%", f.style.height = "100%", f.style.display = "flex", f.style.alignItems = "flex-start", f.style.justifyContent = "center", f.style.textAlign = "center", f.style.fontSize = "14px", f.style.color = "#333", f.style.padding = "4px", f.style.wordWrap = "break-word", f.style.overflowWrap = "break-word", f.style.whiteSpace = "normal", f.style.overflow = "hidden", f.style.textOverflow = "ellipsis", f.textContent = e.label, p.appendChild(f), r.appendChild(c), r.appendChild(p), this.mode === "edit" && this.addResizeHandles(r, e, i, n), this.nodesGroup.appendChild(r), this.nodeElements.set(e.id, c), this.mode === "view" && this.onNodeClick && r.addEventListener("click", (g) => {
        g.stopPropagation(), g.preventDefault();
        const y = this.svg.getBoundingClientRect(), m = g.clientX - y.left, b = g.clientY - y.top;
        this.onNodeClick({
          node: e,
          position: { x: m, y: b },
          originalEvent: g
        });
      }, !0);
    }
    this.mode === "edit" && (this.updateAnchorHandles(), this.updateBendHandles(), this.updateControlButtons());
  }
  /**
   * Calculate group bounds from node positions and child groups
   * For groups with child groups, include both child group layouts and direct nodes (nodes not in child groups)
   * For leaf groups (no child groups), only use nodeIds
   */
  calculateGroupBounds(t, e) {
    let h = 1 / 0, a = -1 / 0, r = 1 / 0, c = -1 / 0, l = !1;
    const d = e ? this.groups.some((f) => f.parentId === e) : !1, o = /* @__PURE__ */ new Set();
    if (d && e) {
      const f = this.groups.filter((g) => g.parentId === e);
      for (const g of f) {
        const y = (m) => {
          for (const C of m.nodeIds)
            o.add(C);
          const b = this.groups.filter((C) => C.parentId === m.id);
          for (const C of b)
            y(C);
        };
        y(g);
      }
    }
    for (const f of t) {
      if (d && o.has(f))
        continue;
      const g = this.nodes.find((A) => A.id === f);
      if (!g || !g.position)
        continue;
      l = !0;
      const y = g.style || {}, m = y.width || this.DEFAULT_NODE_WIDTH, b = y.height || this.DEFAULT_NODE_HEIGHT, C = g.position.x - m / 2, B = g.position.x + m / 2, v = g.position.y - b / 2, T = g.position.y + b / 2;
      h = Math.min(h, C), a = Math.max(a, B), r = Math.min(r, v), c = Math.max(c, T);
    }
    if (d && e) {
      const f = this.groups.filter((g) => g.parentId === e);
      for (const g of f) {
        const y = this.getGroupLayout(g);
        if (y) {
          l = !0;
          const m = y.position.x, b = y.position.x + y.size.width, C = y.position.y, B = y.position.y + y.size.height;
          h = Math.min(h, m), a = Math.max(a, b), r = Math.min(r, C), c = Math.max(c, B);
        }
      }
    }
    if (!l)
      return null;
    const u = d ? 50 : 30, p = u + 25;
    return {
      minX: h - u,
      maxX: a + u,
      minY: r - p,
      // Extra top padding for label
      maxY: c + u
    };
  }
  /**
   * Get or calculate group layout
   */
  getGroupLayout(t) {
    if (t.layout)
      return t.layout;
    const e = this.calculateGroupBounds(t.nodeIds, t.id);
    return e ? {
      position: {
        x: e.minX,
        y: e.minY
      },
      size: {
        width: e.maxX - e.minX,
        height: e.maxY - e.minY
      }
    } : null;
  }
  /**
   * Render groups
   */
  renderGroups() {
    if (this.groups.length === 0)
      return;
    const t = [...this.groups].sort((e, s) => {
      const i = (n) => {
        if (!n.parentId) return 0;
        const h = this.groups.find((a) => a.id === n.parentId);
        return h ? 1 + i(h) : 0;
      };
      return i(e) - i(s);
    });
    for (const e of t) {
      let s = this.getGroupLayout(e);
      if (s)
        e.layout || (e.layout = s);
      else {
        const r = this.calculateGroupBounds(e.nodeIds, e.id);
        if (r)
          s = {
            position: { x: r.minX, y: r.minY },
            size: { width: r.maxX - r.minX, height: r.maxY - r.minY }
          }, e.layout = s;
        else
          continue;
      }
      const i = document.createElementNS("http://www.w3.org/2000/svg", "g");
      i.setAttribute("data-group-id", e.id), i.setAttribute("class", "group");
      const n = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      n.setAttribute("x", String(s.position.x)), n.setAttribute("y", String(s.position.y)), n.setAttribute("width", String(s.size.width)), n.setAttribute("height", String(s.size.height));
      const h = e.style;
      n.setAttribute("fill", h?.color ?? "rgba(200, 200, 200, 0.1)"), n.setAttribute("stroke", h?.borderColor ?? "#999"), n.setAttribute("stroke-width", String(h?.borderWidth ?? 2)), n.setAttribute("stroke-dasharray", h?.borderDash === !1 ? "none" : "5,5"), n.setAttribute("rx", "4"), n.style.pointerEvents = "auto", n.style.cursor = this.mode === "edit" ? "move" : "pointer";
      const a = document.createElementNS("http://www.w3.org/2000/svg", "text");
      a.setAttribute("x", String(s.position.x + 10)), a.setAttribute("y", String(s.position.y + 25)), a.setAttribute("font-size", "14"), a.setAttribute("font-weight", "bold"), a.setAttribute("fill", "#666"), a.textContent = e.label, a.style.pointerEvents = "none", i.appendChild(n), i.appendChild(a), this.mode === "edit" && this.setupGroupEditInteractions(i, e, n), this.mode === "view" && this.onGroupClick && i.addEventListener("click", (r) => {
        if (r.target.getAttribute("data-resize-side"))
          return;
        r.stopPropagation(), r.preventDefault();
        const l = this.svg.getBoundingClientRect(), d = r.clientX - l.left, o = r.clientY - l.top;
        this.onGroupClick({
          group: e,
          position: { x: d, y: o },
          originalEvent: r
        });
      }, !0), this.groupsGroup.appendChild(i);
    }
  }
  /**
   * Update group layouts for groups containing a node or child group
   * @param nodeId Node ID that changed (optional)
   * @param groupId Group ID that changed (optional)
   * @param preserveChangedGroupLayout If true, don't recalculate layout for the changed group (preserve its current layout)
   */
  updateGroupLayouts(t, e, s = !1) {
    const i = /* @__PURE__ */ new Set(), n = s && e ? e : null;
    if (t) {
      const a = this.groups.filter((r) => r.nodeIds.includes(t));
      a.forEach((r) => i.add(r));
      for (const r of a)
        this.addParentGroupsToUpdate(r, i);
    }
    if (e) {
      const a = this.groups.find((r) => r.id === e);
      if (a) {
        s || i.add(a), this.addParentGroupsToUpdate(a, i);
        const r = this.collectNodeIdsInGroupAndDescendants(a);
        for (const c of r) {
          const l = this.groups.filter((d) => d.nodeIds.includes(c));
          for (const d of l)
            i.add(d), this.addParentGroupsToUpdate(d, i);
        }
      }
    }
    const h = Array.from(i).sort((a, r) => {
      const c = (l) => {
        if (!l.parentId) return 0;
        const d = this.groups.find((o) => o.id === l.parentId);
        return d ? 1 + c(d) : 0;
      };
      return c(r) - c(a);
    });
    for (const a of h) {
      if (n && a.id === n)
        continue;
      const r = this.calculateGroupBounds(a.nodeIds, a.id);
      r && (a.layout || (a.layout = {
        position: { x: 0, y: 0 },
        size: { width: 0, height: 0 }
      }), a.layout.position.x = r.minX, a.layout.position.y = r.minY, a.layout.size.width = r.maxX - r.minX, a.layout.size.height = r.maxY - r.minY);
    }
  }
  /**
   * Collect all node IDs that belong to a group (direct nodeIds + all descendant groups' nodeIds).
   * Used when a group is moved so that other groups containing any of these nodes (e.g. syster) get bounds recalculated.
   */
  collectNodeIdsInGroupAndDescendants(t) {
    const e = /* @__PURE__ */ new Set();
    for (const i of t.nodeIds)
      e.add(i);
    const s = this.groups.filter((i) => i.parentId === t.id);
    for (const i of s)
      this.collectNodeIdsInGroupAndDescendants(i).forEach((h) => e.add(h));
    return e;
  }
  /**
   * Recursively add parent groups to update set
   */
  addParentGroupsToUpdate(t, e) {
    if (t.parentId) {
      const s = this.groups.find((i) => i.id === t.parentId);
      s && (e.add(s), this.addParentGroupsToUpdate(s, e));
    }
  }
  /**
   * Recursively move all descendant groups (children and all descendants) and their nodes
   */
  moveDescendantGroups(t, e, s) {
    const i = this.groups.filter((n) => n.parentId === t);
    for (const n of i) {
      n.layout && (n.layout.position.x += e, n.layout.position.y += s);
      for (const h of n.nodeIds) {
        const a = this.nodes.find((r) => r.id === h);
        a && a.position && (a.position.x += e, a.position.y += s);
      }
      this.moveDescendantGroups(n.id, e, s);
    }
  }
  /**
   * Setup group edit interactions (drag to move, resize handles)
   */
  setupGroupEditInteractions(t, e, s) {
    e.layout && (s.addEventListener("pointerdown", (i) => {
      if (this.mode !== "edit" || i.target.getAttribute("data-resize-side"))
        return;
      i.stopPropagation(), i.preventDefault(), s.setPointerCapture(i.pointerId);
      const h = this.screenToSvg(i.clientX, i.clientY), a = h.x, r = h.y;
      if (!e.layout)
        return;
      this.pushUndoState();
      const c = e.layout.position.x, l = e.layout.position.y;
      this.draggingGroup = {
        groupId: e.id,
        offsetX: a - c,
        offsetY: r - l
      }, s.style.cursor = "grabbing";
    }), this.addGroupResizeHandles(t, e, s));
  }
  /**
   * Add resize handles to group
   */
  addGroupResizeHandles(t, e, s) {
    if (!e.layout)
      return;
    const i = 12, n = ["top", "right", "bottom", "left"];
    for (const h of n) {
      const a = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      a.setAttribute("r", String(i / 2)), a.setAttribute("fill", "#2196f3"), a.setAttribute("stroke", "#fff"), a.setAttribute("stroke-width", "2"), a.setAttribute("data-resize-side", h), a.setAttribute("data-group-id", e.id), a.style.cursor = this.getResizeCursor(h), a.style.pointerEvents = "auto";
      const r = e.layout.position.x, c = e.layout.position.y, l = e.layout.size.width, d = e.layout.size.height;
      switch (h) {
        case "top":
          a.setAttribute("cx", String(r + l / 2)), a.setAttribute("cy", String(c));
          break;
        case "right":
          a.setAttribute("cx", String(r + l)), a.setAttribute("cy", String(c + d / 2));
          break;
        case "bottom":
          a.setAttribute("cx", String(r + l / 2)), a.setAttribute("cy", String(c + d));
          break;
        case "left":
          a.setAttribute("cx", String(r)), a.setAttribute("cy", String(c + d / 2));
          break;
      }
      a.addEventListener("pointerdown", (o) => {
        if (this.mode !== "edit")
          return;
        o.stopPropagation(), o.preventDefault(), a.setPointerCapture(o.pointerId);
        const u = this.screenToSvg(o.clientX, o.clientY), p = u.x, f = u.y;
        e.layout && (this.pushUndoState(), this.resizingGroup = {
          groupId: e.id,
          side: h,
          startX: p,
          startY: f,
          startWidth: e.layout.size.width,
          startHeight: e.layout.size.height,
          startPosX: e.layout.position.x,
          startPosY: e.layout.position.y
        });
      }), t.appendChild(a);
    }
  }
  /**
   * Update edge style and label visibility without full re-render
   */
  updateEdgeHighlight(t) {
    const e = this.groupEdgesByPair(this.edges);
    for (const s of e) {
      const i = this.edgeElements.get(s.key);
      if (!i) continue;
      const n = s.edges.some((m) => m.id === this.selectedEdgeId), h = this.mode === "view" && s.key === this.hoveredEdgePairKey, a = this.mode === "view" && s.key === this.tappedEdgePairKey, r = this.alwaysShowEdges || n || h || a, l = s.edges[0].style || {}, d = l.color || this.EDGE_DEFAULT_COLOR, o = l.weight || 1, u = Math.max(this.EDGE_MIN_WEIGHT, Math.min(this.EDGE_MAX_WEIGHT, o)), p = this.EDGE_DEFAULT_WIDTH + (u - 1) * 0.5, f = r ? Math.max(p, this.EDGE_HOVER_WIDTH) : p, g = n ? "#2196f3" : d, y = r ? 1 : 0.3;
      i.setAttribute("stroke", g), i.setAttribute("stroke-width", String(f)), i.setAttribute("stroke-opacity", String(y)), r ? (this.edgeLabelsGroup.querySelectorAll(`[data-edge-pair-key="${s.key}"]`).forEach((b) => b.remove()), this.renderEdgeLabels(s, l)) : this.edgeLabelsGroup.querySelectorAll(`[data-edge-pair-key="${s.key}"]`).forEach((b) => b.remove());
    }
  }
  /**
   * Setup edge interaction (hover/tap for label display in view mode)
   */
  setupEdgeInteraction(t, e, s) {
    t.addEventListener("pointerenter", () => {
      this.tappedEdgePairKey !== e.key && (this.hoveredEdgePairKey = e.key, this.updateEdgeHighlight(e.key));
    }), t.addEventListener("pointerleave", () => {
      this.tappedEdgePairKey !== e.key && (this.hoveredEdgePairKey = null, this.updateEdgeHighlight(null));
    }), t.addEventListener("click", (i) => {
      if (this.mode === "view" && e.edges.length > 0 && (this.tappedEdgePairKey = e.key, this.updateEdgeHighlight(e.key), this.onEdgeClick)) {
        const n = this.screenToSvg(i.clientX, i.clientY), h = e.edges[0];
        this.onEdgeClick({
          edge: h,
          position: { x: n.x, y: n.y },
          originalEvent: i
        });
      }
    });
  }
  /**
   * Setup edge interaction for edit mode (hover/tap to show handles)
   */
  setupEdgeInteractionForEdit(t, e) {
    t.addEventListener("pointerenter", () => {
      if (e.edges.length > 0) {
        if (this.selectedEdgeId !== null && !e.edges.some((i) => i.id === this.selectedEdgeId))
          return;
        this.selectedEdgeId = e.edges[0].id, this.updateAnchorHandles(), this.updateBendHandles(), this.updateControlButtons();
      }
    }), t.addEventListener("pointerleave", () => {
    }), t.addEventListener("pointerdown", (s) => {
      e.edges.length > 0 && (this.selectedEdgeId = e.edges[0].id, this.updateAnchorHandles(), this.updateBendHandles(), this.updateControlButtons());
    });
  }
  /**
   * Add resize handles to node in edit mode
   */
  addResizeHandles(t, e, s, i) {
    const n = [
      { side: "top", x: e.position.x, y: e.position.y - i / 2 },
      { side: "right", x: e.position.x + s / 2, y: e.position.y },
      { side: "bottom", x: e.position.x, y: e.position.y + i / 2 },
      { side: "left", x: e.position.x - s / 2, y: e.position.y }
    ];
    for (const h of n) {
      const a = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      a.setAttribute("cx", String(h.x)), a.setAttribute("cy", String(h.y)), a.setAttribute("r", "6"), a.setAttribute("fill", "#4CAF50"), a.setAttribute("stroke", "#fff"), a.setAttribute("stroke-width", "2"), a.setAttribute("data-resize-side", h.side), a.setAttribute("data-node-id", e.id), a.style.cursor = this.getResizeCursor(h.side), a.style.pointerEvents = "auto", t.appendChild(a);
    }
  }
  /**
   * Get cursor style for resize handle
   */
  getResizeCursor(t) {
    switch (t) {
      case "top":
      case "bottom":
        return "ns-resize";
      case "left":
      case "right":
        return "ew-resize";
    }
  }
  /**
   * Update group position (during drag)
   * Moves all nodes and child groups in the group by the same delta
   */
  updateGroupPosition(t) {
    if (!this.draggingGroup)
      return;
    const e = this.groups.find((o) => o.id === this.draggingGroup.groupId);
    if (!e || !e.layout)
      return;
    const s = this.screenToSvg(t.clientX, t.clientY), i = s.x, n = s.y, h = i - this.draggingGroup.offsetX, a = n - this.draggingGroup.offsetY, r = h - e.layout.position.x, c = a - e.layout.position.y, l = /* @__PURE__ */ new Set(), d = this.groups.filter((o) => o.parentId === e.id);
    for (const o of d)
      for (const u of o.nodeIds)
        l.add(u);
    for (const o of e.nodeIds)
      if (!l.has(o)) {
        const u = this.nodes.find((p) => p.id === o);
        u && u.position && (u.position.x += r, u.position.y += c);
      }
    this.moveDescendantGroups(e.id, r, c), e.layout.position.x = h, e.layout.position.y = a, this.updateGroupLayouts(void 0, e.id, !0), this.render(), this.updateAnchorHandles(), this.updateBendHandles();
  }
  /**
   * Update group size (during resize)
   */
  updateGroupSize(t) {
    if (!this.resizingGroup)
      return;
    const e = this.groups.find((c) => c.id === this.resizingGroup.groupId);
    if (!e || !e.layout)
      return;
    const s = this.screenToSvg(t.clientX, t.clientY), i = s.x, n = s.y, h = i - this.resizingGroup.startX, a = n - this.resizingGroup.startY;
    switch (this.resizingGroup.side) {
      case "right": {
        const c = Math.max(100, this.resizingGroup.startWidth + h);
        e.layout.size.width = c;
        break;
      }
      case "left": {
        const c = Math.max(100, this.resizingGroup.startWidth - h);
        e.layout.size.width = c, e.layout.position.x = this.resizingGroup.startPosX + h;
        break;
      }
      case "bottom": {
        const c = Math.max(100, this.resizingGroup.startHeight + a);
        e.layout.size.height = c;
        break;
      }
      case "top": {
        const c = Math.max(100, this.resizingGroup.startHeight - a);
        e.layout.size.height = c, e.layout.position.y = this.resizingGroup.startPosY + a;
        break;
      }
    }
    const r = this.groupsGroup.querySelector(`[data-group-id="${e.id}"]`);
    if (r) {
      const c = r.querySelector("rect");
      if (c && (c.setAttribute("x", String(e.layout.position.x)), c.setAttribute("y", String(e.layout.position.y)), c.setAttribute("width", String(e.layout.size.width)), c.setAttribute("height", String(e.layout.size.height))), !e.layout)
        return;
      const l = r.querySelectorAll("[data-resize-side]"), d = e.layout;
      l.forEach((u) => {
        const p = u.getAttribute("data-resize-side"), f = d.position.x, g = d.position.y, y = d.size.width, m = d.size.height;
        switch (p) {
          case "top":
            u.setAttribute("cx", String(f + y / 2)), u.setAttribute("cy", String(g));
            break;
          case "right":
            u.setAttribute("cx", String(f + y)), u.setAttribute("cy", String(g + m / 2));
            break;
          case "bottom":
            u.setAttribute("cx", String(f + y / 2)), u.setAttribute("cy", String(g + m));
            break;
          case "left":
            u.setAttribute("cx", String(f)), u.setAttribute("cy", String(g + m / 2));
            break;
        }
      });
      const o = r.querySelector("text");
      o && (o.setAttribute("x", String(e.layout.position.x + 10)), o.setAttribute("y", String(e.layout.position.y + 20)));
    }
  }
  /**
   * Handle group resize end (called on pointer up)
   */
  handleGroupResizeEnd() {
    this.resizingGroup && this.updateGroupLayouts(void 0, this.resizingGroup.groupId, !0), this.render();
  }
  /**
   * Calculate point on SVG path at given ratio (0.0 to 1.0)
   * @param pathData SVG path data string (e.g., "M 10 10 L 20 20 L 30 10")
   * @param ratio Position ratio along path (0.0 = start, 1.0 = end, 0.5 = middle)
   * @returns Point coordinates {x, y} or null if path is invalid
   */
  getPointOnPath(t, e) {
    if (!t)
      return null;
    const s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    s.style.position = "absolute", s.style.visibility = "hidden", s.style.width = "0", s.style.height = "0", document.body.appendChild(s);
    const i = document.createElementNS("http://www.w3.org/2000/svg", "path");
    i.setAttribute("d", t), s.appendChild(i);
    try {
      const n = i.getTotalLength();
      if (n === 0)
        return document.body.removeChild(s), null;
      const h = i.getPointAtLength(n * e);
      return document.body.removeChild(s), { x: h.x, y: h.y };
    } catch {
      return document.body.removeChild(s), null;
    }
  }
  /**
   * Render edge labels based on relationship directionality
   */
  renderEdgeLabels(t, e) {
    const s = this.nodes.find((v) => v.id === t.a), i = this.nodes.find((v) => v.id === t.b);
    if (!s?.position || !i?.position)
      return;
    const n = s.style || {}, h = i.style || {}, a = n.width || this.DEFAULT_NODE_WIDTH, r = n.height || this.DEFAULT_NODE_HEIGHT, c = h.width || this.DEFAULT_NODE_WIDTH, l = h.height || this.DEFAULT_NODE_HEIGHT, d = t.srcAnchor || this.estimateAnchor(s, i), o = t.dstAnchor || this.estimateAnchor(i, s), u = this.calculateAnchorPosition(s, d, a, r), p = this.calculateAnchorPosition(i, o, c, l), f = this.calculateEdgePairPath(t), g = t.edges.find((v) => v.src === t.a && v.dst === t.b), y = t.edges.find((v) => v.src === t.b && v.dst === t.a), m = g?.style?.label || g?.relType || "", b = y?.style?.label || y?.relType || "", C = m !== b && m && b, B = m === b && m;
    if (C) {
      const T = this.getPointOnPath(f, 0.75), A = this.getPointOnPath(f, 0.25), E = T ? T.x : u.x + (p.x - u.x) * (1 - 0.25), S = T ? T.y : u.y + (p.y - u.y) * (1 - 0.25), I = A ? A.x : u.x + (p.x - u.x) * 0.25, x = A ? A.y : u.y + (p.y - u.y) * 0.25;
      if (m) {
        const L = document.createElementNS("http://www.w3.org/2000/svg", "text");
        L.setAttribute("x", String(E)), L.setAttribute("y", String(S - 8)), L.setAttribute("text-anchor", "middle"), L.setAttribute("dominant-baseline", "middle"), L.setAttribute("font-size", "12"), L.setAttribute("fill", "#333"), L.setAttribute("font-weight", "bold"), L.setAttribute("pointer-events", "none"), L.setAttribute("data-edge-pair-key", t.key);
        const k = document.createElementNS("http://www.w3.org/2000/svg", "rect"), N = m.length * 7;
        k.setAttribute("x", String(E - N / 2 - 4)), k.setAttribute("y", String(S - 16)), k.setAttribute("width", String(N + 8)), k.setAttribute("height", "16"), k.setAttribute("fill", "rgba(255, 255, 255, 0.9)"), k.setAttribute("rx", "2"), k.setAttribute("pointer-events", "none"), k.setAttribute("data-edge-pair-key", t.key), this.edgeLabelsGroup.appendChild(k), L.textContent = m, this.edgeLabelsGroup.appendChild(L);
      }
      if (b) {
        const L = document.createElementNS("http://www.w3.org/2000/svg", "text");
        L.setAttribute("x", String(I)), L.setAttribute("y", String(x - 8)), L.setAttribute("text-anchor", "middle"), L.setAttribute("dominant-baseline", "middle"), L.setAttribute("font-size", "12"), L.setAttribute("fill", "#333"), L.setAttribute("font-weight", "bold"), L.setAttribute("pointer-events", "none"), L.setAttribute("data-edge-pair-key", t.key);
        const k = document.createElementNS("http://www.w3.org/2000/svg", "rect"), N = b.length * 7;
        k.setAttribute("x", String(I - N / 2 - 4)), k.setAttribute("y", String(x - 16)), k.setAttribute("width", String(N + 8)), k.setAttribute("height", "16"), k.setAttribute("fill", "rgba(255, 255, 255, 0.9)"), k.setAttribute("rx", "2"), k.setAttribute("pointer-events", "none"), k.setAttribute("data-edge-pair-key", t.key), this.edgeLabelsGroup.appendChild(k), L.textContent = b, this.edgeLabelsGroup.appendChild(L);
      }
    } else if (B) {
      const v = this.getPointOnPath(f, 0.5), T = v ? v.x : (u.x + p.x) / 2, A = v ? v.y : (u.y + p.y) / 2, E = document.createElementNS("http://www.w3.org/2000/svg", "text");
      E.setAttribute("x", String(T)), E.setAttribute("y", String(A)), E.setAttribute("text-anchor", "middle"), E.setAttribute("dominant-baseline", "middle"), E.setAttribute("data-edge-pair-key", t.key), E.setAttribute("font-size", "12"), E.setAttribute("fill", "#333"), E.setAttribute("font-weight", "bold"), E.setAttribute("pointer-events", "none");
      const S = document.createElementNS("http://www.w3.org/2000/svg", "rect"), I = m.length * 7;
      S.setAttribute("x", String(T - I / 2 - 4)), S.setAttribute("y", String(A - 8)), S.setAttribute("width", String(I + 8)), S.setAttribute("height", "16"), S.setAttribute("fill", "rgba(255, 255, 255, 0.9)"), S.setAttribute("rx", "2"), S.setAttribute("pointer-events", "none"), S.setAttribute("data-edge-pair-key", t.key), this.edgeLabelsGroup.appendChild(S), E.textContent = m, this.edgeLabelsGroup.appendChild(E);
    } else if (e.label) {
      const v = this.getPointOnPath(f, 0.5), T = v ? v.x : (u.x + p.x) / 2, A = v ? v.y : (u.y + p.y) / 2, E = document.createElementNS("http://www.w3.org/2000/svg", "text");
      E.setAttribute("x", String(T)), E.setAttribute("y", String(A)), E.setAttribute("text-anchor", "middle"), E.setAttribute("dominant-baseline", "middle"), E.setAttribute("font-size", "12"), E.setAttribute("fill", "#333"), E.setAttribute("font-weight", "bold"), E.setAttribute("pointer-events", "none"), E.setAttribute("data-edge-pair-key", t.key);
      const S = document.createElementNS("http://www.w3.org/2000/svg", "rect"), I = e.label.length * 7;
      S.setAttribute("x", String(T - I / 2 - 4)), S.setAttribute("y", String(A - 8)), S.setAttribute("width", String(I + 8)), S.setAttribute("height", "16"), S.setAttribute("fill", "rgba(255, 255, 255, 0.9)"), S.setAttribute("rx", "2"), S.setAttribute("pointer-events", "none"), S.setAttribute("data-edge-pair-key", t.key), this.edgeLabelsGroup.appendChild(S), E.textContent = e.label, this.edgeLabelsGroup.appendChild(E);
    }
  }
  /**
   * Set mode
   */
  setMode(t) {
    if (!this.editable && t === "edit")
      return;
    const e = this.mode === "edit";
    t === "edit" && this.mode === "view" && (this.saveSnapshot(), this.undoStack = [], this.redoStack = []), this.mode = t, this.render(), t === "view" && (this.deselectEdge(), e && this.onSave && this.onSave({
      nodes: this.nodes,
      edges: this.edges,
      groups: this.groups.length > 0 ? this.groups : void 0
    })), this.updateEditToggleButtonIcon(), this.updateControlButtons(), this.onModeChange && this.onModeChange();
  }
  /**
   * Set callback for mode change notification
   */
  setModeChangeCallback(t) {
    this.onModeChange = t;
  }
  /**
   * Set callback for always show edges state changes
   */
  setAlwaysShowEdgesChangeCallback(t) {
    this.onAlwaysShowEdgesChange = t;
  }
  /**
   * Set callback for Graph buttons update (for ViewContainer)
   */
  setGraphButtonsUpdateCallback(t) {
    this.onGraphButtonsUpdate = t;
  }
  /**
   * Get always show edges state
   */
  getAlwaysShowEdges() {
    return this.alwaysShowEdges;
  }
  /**
   * Set always show edges state
   */
  setAlwaysShowEdges(t) {
    this.alwaysShowEdges !== t && (this.alwaysShowEdges = t, this.updateAlwaysShowEdgesButton(), this.alwaysShowEdges || (this.hoveredEdgePairKey = null, this.tappedEdgePairKey = null), this.render());
  }
  /**
   * Clear selection (for View interface)
   */
  clearSelection() {
    this.deselectEdge();
  }
  /**
   * Cancel edit mode (for View interface)
   */
  cancelEdit() {
    this.restoreSnapshot(), this.setMode("view");
  }
  /**
   * Get selected edge ID (for ViewContainer)
   */
  getSelectedEdgeId() {
    return this.selectedEdgeId;
  }
  /**
   * Get edges (for ViewContainer)
   */
  getEdges() {
    return this.edges;
  }
  /**
   * Check if selected edge has bend points (for ViewContainer)
   */
  hasBendPoints(t) {
    const e = this.edges.find((a) => a.id === t);
    if (!e)
      return !1;
    const [s, i] = e.src < e.dst ? [e.src, e.dst] : [e.dst, e.src], n = `${s}||${i}`, h = this.groupEdgesByPair(this.edges).find((a) => a.key === n);
    return !!(h && h.bends && h.bends.length > 0);
  }
  /**
   * Get whether editable
   */
  isEditable() {
    return this.editable;
  }
  /**
   * Get edit mode toggle button
   */
  getEditToggleButton() {
    return this.editToggleButton;
  }
  /**
   * Get mode
   */
  getMode() {
    return this.mode;
  }
  /**
   * Get current diagram as SVG string (Graph view only).
   * Content is fitted to viewBox with padding.
   */
  getViewAsSvg() {
    if (this.nodes.length === 0) return null;
    let t = 1 / 0, e = 1 / 0, s = -1 / 0, i = -1 / 0;
    for (const o of this.nodes) {
      if (!o.position) continue;
      const u = o.style || {}, p = u.width ?? this.DEFAULT_NODE_WIDTH, f = u.height ?? this.DEFAULT_NODE_HEIGHT;
      t = Math.min(t, o.position.x - p / 2), e = Math.min(e, o.position.y - f / 2), s = Math.max(s, o.position.x + p / 2), i = Math.max(i, o.position.y + f / 2);
    }
    for (const o of this.groups) {
      const u = this.getGroupLayout(o);
      u && (t = Math.min(t, u.position.x), e = Math.min(e, u.position.y), s = Math.max(s, u.position.x + u.size.width), i = Math.max(i, u.position.y + u.size.height));
    }
    for (const o of this.edges) {
      const u = this.getEdgePoints(o);
      for (const p of u)
        t = Math.min(t, p.x), e = Math.min(e, p.y), s = Math.max(s, p.x), i = Math.max(i, p.y);
    }
    const n = 20;
    t -= n, e -= n, s += n, i += n;
    const h = s - t, a = i - e, r = this.svg.cloneNode(!0);
    r.setAttribute("viewBox", `0 0 ${h} ${a}`), r.setAttribute("width", String(Math.round(h))), r.setAttribute("height", String(Math.round(a)));
    const c = `translate(${-t}, ${-e})`;
    return [
      r.querySelector(".groups"),
      r.querySelector(".edges"),
      r.querySelector(".nodes"),
      r.querySelector(".anchor-handles"),
      r.querySelector(".bend-handles"),
      r.querySelector(".edge-labels")
    ].forEach((o) => {
      o instanceof SVGGElement && o.setAttribute("transform", c);
    }), r.querySelectorAll(".edges path[data-edge-pair-key]").forEach((o) => {
      o instanceof SVGPathElement && (o.setAttribute("stroke-opacity", "1"), (parseFloat(o.getAttribute("stroke-width") || "0") || 0) < 2 && o.setAttribute("stroke-width", "2"));
    }), new XMLSerializer().serializeToString(r);
  }
  /**
   * Export current view as image blob (Graph view: SVG → canvas → blob).
   * Uses data URL for SVG to avoid tainted canvas when drawing to canvas.
   */
  async exportViewToImage(t, e) {
    const s = this.getViewAsSvg();
    if (!s) return null;
    const i = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(s);
    return new Promise((n) => {
      const h = new Image();
      h.crossOrigin = "anonymous", h.onload = () => {
        const a = h.naturalWidth, r = h.naturalHeight, c = document.createElement("canvas");
        c.width = a, c.height = r;
        const l = c.getContext("2d");
        if (!l) {
          n(null);
          return;
        }
        l.fillStyle = "#ffffff", l.fillRect(0, 0, a, r), l.drawImage(h, 0, 0);
        const d = e?.quality ?? 0.92;
        c.toBlob(
          (o) => n(o ?? null),
          t === "png" ? "image/png" : "image/webp",
          d
        );
      }, h.onerror = () => n(null), h.src = i;
    });
  }
  /**
   * Show view
   */
  show() {
    this.container.style.display = "block", this.nodes.length > 0 && setTimeout(() => {
      const t = this.container.getBoundingClientRect();
      t.width > 0 && t.height > 0 && this.fitAndCenter();
    }, 100), this.resize();
  }
  /**
   * Create popup
   */
  createPopup() {
    const t = document.createElement("div");
    t.className = "relatos-graph-popup", t.style.cssText = `
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
    const e = document.createElement("div");
    return e.style.cssText = `
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-top: 8px solid white;
    `, t.appendChild(e), this.container.appendChild(t), t;
  }
  /**
   * Show popup
   */
  showPopup(t) {
    !t || !t.position || (this.hidePopup(), this.popupElement || (this.popupElement = this.createPopup()), this.popupElement.textContent = t.label, this.popupElement.style.opacity = "1", this.popupElement.style.display = "block", this.popupNodeId = t.id, requestAnimationFrame(() => {
      this.popupElement && this.popupNodeId === t.id && this.updatePopupPosition(t);
    }));
  }
  /**
   * Update popup position
   */
  updatePopupPosition(t) {
    if (!this.popupElement || !t || !t.position)
      return;
    const e = t.style || {};
    e.width || this.DEFAULT_NODE_WIDTH;
    const s = e.height || this.DEFAULT_NODE_HEIGHT, i = this.nodeElements.get(t.id);
    if (!i) {
      this.container.getBoundingClientRect(), this.svg.getBoundingClientRect();
      const p = isFinite(this.zoom) && this.zoom > 0 ? this.zoom : 1, f = isFinite(this.offsetX) ? this.offsetX : 0, g = isFinite(this.offsetY) ? this.offsetY : 0, y = (t.position.x + f) * p, m = (t.position.y + g) * p, b = this.popupElement.getBoundingClientRect(), C = b.width || 200, B = b.height || 50, v = y - C / 2, T = m - s * p / 2 - B - 10;
      this.popupElement.style.left = `${v}px`, this.popupElement.style.top = `${T}px`;
      return;
    }
    const n = i.getBoundingClientRect(), h = this.container.getBoundingClientRect(), a = n.left + n.width / 2 - h.left, r = n.top + n.height / 2 - h.top, c = this.popupElement.getBoundingClientRect(), l = c.width || 200, d = c.height || 50, o = a - l / 2, u = r - n.height / 2 - d - 10;
    this.popupElement.style.left = `${o}px`, this.popupElement.style.top = `${u}px`;
  }
  /**
   * Hide popup
   */
  hidePopup() {
    this.popupElement && (this.popupElement.style.opacity = "0", setTimeout(() => {
      this.popupElement && this.popupElement.style.opacity === "0" && (this.popupElement.style.display = "none");
    }, 200)), this.popupNodeId = null;
  }
  /**
   * Hide view
   */
  hide() {
    this.container.style.display = "none", this.hidePopup();
  }
  /**
   * Resize
   */
  resize() {
    const t = this.container.getBoundingClientRect();
    if (this.svg.setAttribute("width", String(t.width)), this.svg.setAttribute("height", String(t.height)), this.popupNodeId && this.popupElement) {
      const e = this.nodes.find((s) => s.id === this.popupNodeId);
      e && this.updatePopupPosition(e);
    }
  }
  /**
   * Destroy
   */
  destroy() {
    this.nodeElements.clear(), this.edgeElements.clear(), this.container.contains(this.svg) && this.container.removeChild(this.svg);
  }
};
lt.MAX_UNDO_LEVELS = 50;
let gt = lt;
function $t(w, t = 16) {
  return Q(), `<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <use href="#${w}"></use>
  </svg>`;
}
class Vt {
  // postRender event listener for popup position updates
  constructor(t, e, s, i, n, h) {
    this.viewer = null, this.Cesium = null, this.nodes = [], this.edges = [], this.selectedNodeId = null, this.lastSelectedNodeId = null, this.nodeEntities = /* @__PURE__ */ new Map(), this.edgeEntities = /* @__PURE__ */ new Map(), this.rectEntity = null, this.fitCenterButton = null, this.lightingToggleButton = null, this.alwaysShowEdgesButton = null, this.alwaysShowEdges = !0, this.tileTypeButton = null, this.baseImageryLayer = null, this.timeISO = null, this.customTileUrls = [], this.currentCustomTileIndex = 0, this.popupElement = null, this.popupEntity = null, this.popupUpdateListener = null, this.container = t, this.onNodeClick = e, this.cesiumLoader = s, this.globe3dOptions = i, this.onEdgeClick = h;
    const a = n && n.length > 0 ? n : i?.customTileUrls;
    a && a.length > 0 ? this.customTileUrls = a.map(
      (r) => typeof r == "string" ? { url: r } : r
    ) : i?.customTileUrl && (this.customTileUrls = [{ url: i.customTileUrl }]), this.container.style.position = "relative", this.container.style.width = "100%", this.container.style.height = "100%";
  }
  async initializeCesium() {
    if (this.viewer) return;
    if (!this.cesiumLoader)
      throw new Error("Cesium loader is not provided. Please provide options.loaders.cesium.");
    const t = await this.cesiumLoader();
    this.Cesium = t.default || t;
    const e = new this.Cesium.EllipsoidTerrainProvider();
    this.Cesium.Ion && (this.Cesium.Ion.defaultAccessToken = ""), this.viewer = new this.Cesium.Viewer(this.container, {
      terrainProvider: e,
      baseLayerPicker: !1,
      animation: !1,
      timeline: !1,
      fullscreenButton: !1,
      vrButton: !1,
      geocoder: !1,
      homeButton: !1,
      infoBox: !1,
      sceneModePicker: !1,
      selectionIndicator: !1,
      navigationHelpButton: !1,
      requestRenderMode: !1,
      contextOptions: { preserveDrawingBuffer: !0 }
    }), this.viewer.canvas && (this.viewer.canvas.style.touchAction = "none"), this.Cesium.Moon ? (this.viewer.scene.moon || (this.viewer.scene.moon = new this.Cesium.Moon()), this.viewer.scene.moon.show = !0, this.viewer.scene.moon.onlySunLighting !== void 0 && (this.viewer.scene.moon.onlySunLighting = !1)) : this.viewer.scene.moon && (this.viewer.scene.moon.show = !0), this.viewer.scene.sun && (this.viewer.scene.sun.show = !0);
    try {
      this.viewer.imageryLayers.removeAll();
    } catch {
    }
    this.setupCameraLimits(), this.setupTrackpadPinchZoom(), this.setTileTypeInternal(!0), this.setupTimeAndLighting(), this.setupClickHandler(), (this.nodes.length > 0 || this.edges.length > 0) && this.render(), this.onLightingChange && this.isLightingEnabled();
  }
  /**
   * Setup trackpad pinch zoom for Mac
   * Mac trackpad pinch gestures are sent as:
   * - Chrome/Firefox: wheel event with ctrlKey=true
   * - Safari: gesturestart/gesturechange/gestureend events
   */
  setupTrackpadPinchZoom() {
    if (!this.viewer || !this.Cesium)
      return;
    const t = this.viewer.canvas, e = this.viewer.scene.camera, s = 5e5, i = 4e7, n = (d) => {
      if (d.ctrlKey) {
        d.preventDefault(), d.stopPropagation();
        const o = 1 - d.deltaY * 0.01, u = this.Cesium.Cartographic.fromCartesian(e.position);
        let f = u.height / o;
        f = Math.max(s, Math.min(i, f));
        const g = this.Cesium.Cartesian3.fromRadians(
          u.longitude,
          u.latitude,
          f
        );
        e.setView({
          destination: g,
          orientation: {
            heading: e.heading,
            pitch: e.pitch,
            roll: e.roll
          }
        });
      }
    };
    let h = 1, a = 0;
    const r = (d) => {
      d.preventDefault(), h = d.scale || 1, a = this.Cesium.Cartographic.fromCartesian(e.position).height;
    }, c = (d) => {
      d.preventDefault();
      const u = (d.scale || 1) / h;
      let p = a / u;
      p = Math.max(s, Math.min(i, p));
      const f = this.Cesium.Cartographic.fromCartesian(e.position), g = this.Cesium.Cartesian3.fromRadians(
        f.longitude,
        f.latitude,
        p
      );
      e.setView({
        destination: g,
        orientation: {
          heading: e.heading,
          pitch: e.pitch,
          roll: e.roll
        }
      });
    }, l = (d) => {
      d.preventDefault(), h = 1, a = 0;
    };
    t.addEventListener("wheel", n, { passive: !1 }), "GestureEvent" in window && (t.addEventListener("gesturestart", r, { passive: !1 }), t.addEventListener("gesturechange", c, { passive: !1 }), t.addEventListener("gestureend", l, { passive: !1 })), this._trackpadPinchHandlers = {
      wheel: n,
      gestureStart: r,
      gestureChange: c,
      gestureEnd: l
    };
  }
  /**
   * Set time information and day/night shading
   * Time and lighting are now controlled by ViewContainer's shared state
   */
  setupTimeAndLighting() {
    !this.viewer || this.Cesium;
  }
  /**
   * Set time
   * @param timeISO ISO 8601 time string (e.g., "2025-06-21T12:00:00Z")
   *                For BC dates, add minus sign to year (e.g., "-500-01-01T12:00:00Z")
   */
  setTime(t) {
    if (this.timeISO = t, !(!this.viewer || !this.Cesium))
      try {
        let e;
        t.startsWith("-") ? e = this.parseBCDate(t) : e = this.Cesium.JulianDate.fromIso8601(t), e && (this.viewer.clock.currentTime = e, this.viewer.clock.startTime = e, this.viewer.clock.stopTime = e, this.viewer.clock.shouldAnimate = !1);
      } catch {
      }
  }
  /**
   * Convert BC date string to JulianDate (approximation using year 2000)
   */
  parseBCDate(t) {
    if (!this.Cesium) return null;
    try {
      const e = t.match(/^-(\d+)-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(Z|[+-]\d{2}:\d{2})?/);
      if (!e) throw new Error("Invalid BC date format");
      const s = `2000-${e[2]}-${e[3]}T${e[4]}:${e[5]}:${e[6]}${e[7] || "Z"}`;
      return this.Cesium.JulianDate.fromIso8601(s);
    } catch {
      return null;
    }
  }
  /**
   * Set day/night shading on/off
   */
  setLighting(t) {
    if (!this.viewer || !this.Cesium || this.isLightingEnabled() === t) return;
    const e = this.viewer.scene.globe;
    e.enableLighting = t, e.dynamicAtmosphereLighting = t, e.dynamicAtmosphereLightingFromSun = t, e.showGroundAtmosphere = !0, t ? (e.lightingFadeOutDistance = 0, e.lightingFadeInDistance = 0, e.nightFadeInDistance = 0, e.nightFadeOutDistance = 0, this.baseImageryLayer && (this.baseImageryLayer.nightAlpha = 0.9), this.viewer.scene.sun && (this.viewer.scene.sun.show = !0), this.viewer.scene.moon?.onlySunLighting !== void 0 && (this.viewer.scene.moon.onlySunLighting = !0)) : this.viewer.scene.moon?.onlySunLighting !== void 0 && (this.viewer.scene.moon.onlySunLighting = !1), this.updateLightingButton();
  }
  /**
   * Check if day/night shading is enabled
   */
  isLightingEnabled() {
    return this.viewer ? this.viewer.scene.globe.enableLighting === !0 : !1;
  }
  /**
   * Get always show edges state
   */
  getAlwaysShowEdges() {
    return this.alwaysShowEdges;
  }
  /**
   * Set always show edges state
   */
  setAlwaysShowEdges(t) {
    this.alwaysShowEdges !== t && (this.alwaysShowEdges = t, this.updateAlwaysShowEdgesButton(), this.renderWithoutFit());
  }
  /**
   * Get lighting enabled state (for View interface)
   */
  getLightingEnabled() {
    return this.isLightingEnabled();
  }
  /**
   * Set lighting enabled state (for View interface)
   * @param enabled true to enable, false to disable
   * @param notifyContainer Whether to notify ViewContainer (default: true)
   */
  setLightingEnabled(t, e = !0) {
    const s = this.isLightingEnabled();
    this.setLighting(t), e && this.onLightingChange && this.isLightingEnabled() !== s && this.onLightingChange(this.isLightingEnabled());
  }
  /**
   * Set callback for always show edges state changes
   */
  setAlwaysShowEdgesChangeCallback(t) {
    this.onAlwaysShowEdgesChange = t;
  }
  /**
   * Set callback for lighting state changes
   */
  setLightingChangeCallback(t) {
    this.onLightingChange = t;
  }
  /**
   * Get number of available tile servers (customTileUrls length)
   */
  getTileServerCount() {
    return this.customTileUrls.length;
  }
  /**
   * Get current tile server index (0-based)
   */
  getTileServerIndex() {
    return this.currentCustomTileIndex;
  }
  /**
   * Set current tile server index (0-based, for synchronized switching from ViewContainer)
   */
  setTileServerIndex(t) {
    if (this.customTileUrls.length === 0)
      return;
    const e = this.customTileUrls.length, s = (t % e + e) % e;
    this.currentCustomTileIndex !== s && (this.currentCustomTileIndex = s, this.viewer && this.Cesium && (this.setTileTypeInternal(!0), this.updateTileTypeButton()));
  }
  /**
   * Cycle to next tile server (for View interface)
   */
  cycleTileServer() {
    this.switchTileType();
  }
  /**
   * Limit camera altitude
   */
  setupCameraLimits() {
    if (!this.viewer || !this.Cesium)
      return;
    const t = 5e5, e = 4e7, s = this.viewer.scene.screenSpaceCameraController;
    s.minimumZoomDistance = t, s.maximumZoomDistance = e, s.enableInputs = !0, s.enableZoom = !0, s.enableRotate = !0, s.enableTilt = !0, s.enableTranslate = !0;
    const i = this.Cesium.CameraEventType;
    s.zoomEventTypes = [
      i.WHEEL,
      i.PINCH
    ], s.rotateEventTypes = i.LEFT_DRAG, s.tiltEventTypes = [
      { eventType: i.LEFT_DRAG, modifier: this.Cesium.KeyboardEventModifier.CTRL },
      { eventType: i.MIDDLE_DRAG }
    ], s.translateEventTypes = [
      i.RIGHT_DRAG
      // Two-finger drag on mobile/trackpad
    ];
    let n = !1, h = !1;
    this.viewer.scene.camera.changed.addEventListener(() => {
      if (n || h)
        return;
      const a = this.viewer.scene.camera, r = this.Cesium.Cartographic.fromCartesian(a.position), c = r.height;
      if (c < t || c > e) {
        n = !0;
        const l = Math.max(t, Math.min(e, c)), d = this.Cesium.Cartesian3.fromRadians(
          r.longitude,
          r.latitude,
          l
        );
        a.setView({
          destination: d,
          orientation: a.orientation
        }), setTimeout(() => {
          n = !1;
        }, 0);
      }
    }), this._isFlying = () => h, this._setIsFlying = (a) => {
      h = a;
    };
  }
  /**
   * Set click handler
   */
  setupClickHandler() {
    if (!this.viewer || !this.Cesium)
      return;
    new this.Cesium.ScreenSpaceEventHandler(this.viewer.canvas).setInputAction((e) => {
      const s = this.viewer.scene.pick(e.position);
      if (s && s.id && s.id.nodeId) {
        const n = s.id.nodeId, h = this.nodes.find((r) => r.id === n), a = this.nodeEntities.get(n);
        if (h && a && (this.showPopup(a, h), this.onNodeClick)) {
          const r = this.viewer.camera.pickEllipsoid(e.position, this.viewer.scene.globe.ellipsoid);
          if (r) {
            const c = this.Cesium.Cartographic.fromCartesian(r), l = this.Cesium.Math.toDegrees(c.longitude), d = this.Cesium.Math.toDegrees(c.latitude);
            this.onNodeClick({
              node: h,
              position: { x: l, y: d },
              originalEvent: e.originalEvent
            });
          }
        }
        return;
      }
      const i = this.viewer.scene.drillPick(e.position);
      for (const n of i)
        if (n.id && n.id.nodeId) {
          const h = n.id.nodeId, a = this.nodes.find((c) => c.id === h), r = this.nodeEntities.get(h);
          if (a && r && (this.showPopup(r, a), this.onNodeClick)) {
            const c = this.viewer.camera.pickEllipsoid(e.position, this.viewer.scene.globe.ellipsoid);
            if (c) {
              const l = this.Cesium.Cartographic.fromCartesian(c), d = this.Cesium.Math.toDegrees(l.longitude), o = this.Cesium.Math.toDegrees(l.latitude);
              this.onNodeClick({
                node: a,
                position: { x: d, y: o },
                originalEvent: e.originalEvent
              });
            }
          }
          return;
        }
      i.length === 0 && this.hidePopup();
      for (const n of i)
        if (n.id && n.id.edgeId) {
          const h = n.id.edgeId, a = this.edges.find((r) => r.id === h);
          if (a && this.onEdgeClick) {
            const r = this.viewer.camera.pickEllipsoid(e.position, this.viewer.scene.globe.ellipsoid);
            if (r) {
              const c = this.Cesium.Cartographic.fromCartesian(r), l = this.Cesium.Math.toDegrees(c.longitude), d = this.Cesium.Math.toDegrees(c.latitude);
              this.onEdgeClick({
                edge: a,
                position: { x: l, y: d },
                originalEvent: e.originalEvent
              });
            }
          }
          return;
        }
      !s && (!i || i.length === 0) && this.hidePopup();
    }, this.Cesium.ScreenSpaceEventType.LEFT_CLICK);
  }
  /**
   * Set data
   */
  setData(t, e) {
    this.nodes = t, this.edges = e, this.viewer && this.Cesium && this.render();
  }
  /**
   * Select node (highlight)
   * In Globe3D mode, move camera to node position and display at center
   * If same node is selected again, switch to fit action showing entire view
   */
  selectNode(t) {
    if (!t) {
      this.selectedNodeId = null, this.lastSelectedNodeId = null, this.hidePopup(), this.render();
      return;
    }
    if (!this.viewer || !this.Cesium) return;
    if (t === this.lastSelectedNodeId) {
      this.lastSelectedNodeId = null, this.nodeEntities.size > 0 && this.updateNodeSelection(), this.fitToNodes();
      return;
    }
    this.lastSelectedNodeId = t, this.selectedNodeId = t, this.nodeEntities.size > 0 ? this.updateNodeSelection() : this.render();
    const e = this.nodes.find((i) => i.id === t);
    if (!e) return;
    if (e.coordinates && e.coordinates.length === 2) {
      const [i, n] = e.coordinates;
      if (Number.isFinite(i) && Number.isFinite(n)) {
        const [h, a] = e.coordinates, r = 3e6, c = this.nodeEntities.get(t);
        c && e && this.showPopup(c, e);
        const l = this._setIsFlying;
        l && l(!0), setTimeout(() => {
          this.viewer.camera.flyTo({
            destination: this.Cesium.Cartesian3.fromDegrees(a, h, r),
            orientation: {
              heading: this.Cesium.Math.toRadians(0),
              pitch: this.Cesium.Math.toRadians(-90),
              roll: 0
            },
            duration: 1,
            // Move in 1 second
            complete: () => {
              l && l(!1);
            }
          });
        }, 0);
        return;
      }
    }
    const s = this.nodes.filter((i) => {
      if (!i.coordinates || !Array.isArray(i.coordinates) || i.coordinates.length !== 2) return !0;
      const [n, h] = i.coordinates;
      return !Number.isFinite(n) || !Number.isFinite(h);
    });
    if (s.length > 0) {
      const r = Math.ceil(Math.sqrt(s.length)), l = 50 / (Math.ceil(s.length / r) + 1), d = 32 / (r + 1), o = s.findIndex((u) => u.id === t);
      if (o >= 0) {
        const u = Math.floor(o / r), p = o % r, f = -50 + (u + 1) * l, g = -32 + (p + 1) * d, y = 3e6, m = this.nodeEntities.get(t);
        m && e && this.showPopup(m, e);
        const b = this._setIsFlying;
        b && b(!0), setTimeout(() => {
          this.viewer.camera.flyTo({
            destination: this.Cesium.Cartesian3.fromDegrees(g, f, y),
            orientation: {
              heading: this.Cesium.Math.toRadians(0),
              // Look north
              pitch: this.Cesium.Math.toRadians(-90),
              // Look straight down (-90 degrees)
              roll: 0
            },
            duration: 1,
            // 1 second animation
            complete: () => {
              b && b(!1);
            }
          });
        }, 0);
      }
    }
  }
  /**
   * Render nodes and edges
   */
  render() {
    if (!this.viewer || !this.Cesium)
      return;
    this.viewer.entities.removeAll(), this.nodeEntities.clear(), this.edgeEntities.clear(), this.rectEntity = null;
    const t = this.nodes.filter((i) => {
      if (!i.coordinates || !Array.isArray(i.coordinates) || i.coordinates.length !== 2) return !0;
      const [n, h] = i.coordinates;
      return !Number.isFinite(n) || !Number.isFinite(h);
    }), e = this.nodes.filter((i) => {
      if (!i.coordinates || !Array.isArray(i.coordinates) || i.coordinates.length !== 2) return !1;
      const [n, h] = i.coordinates;
      return Number.isFinite(n) && Number.isFinite(h);
    }), s = /* @__PURE__ */ new Map();
    if (t.length > 0) {
      const r = [
        this.Cesium.Cartesian3.fromDegrees(-32, -50, 0),
        this.Cesium.Cartesian3.fromDegrees(0, -50, 0),
        this.Cesium.Cartesian3.fromDegrees(0, 0, 0),
        this.Cesium.Cartesian3.fromDegrees(-32, 0, 0)
      ];
      this.rectEntity = this.viewer.entities.add({
        polygon: {
          hierarchy: r,
          material: this.Cesium.Color.fromCssColorString("#f0f0f0").withAlpha(0.1),
          outline: !0,
          outlineColor: this.Cesium.Color.fromCssColorString("#666"),
          height: 0
        }
      });
      const c = Math.ceil(Math.sqrt(t.length)), d = 50 / (Math.ceil(t.length / c) + 1), o = 32 / (c + 1);
      t.forEach((u, p) => {
        const f = Math.floor(p / c), g = p % c, y = -50 + (f + 1) * d, m = -32 + (g + 1) * o;
        s.set(u.id, [y, m]);
        const b = this.selectedNodeId === u.id, C = u.style?.color || "#ffffff", B = b ? "#2196f3" : u.style?.borderColor || "#333333";
        let v;
        const T = C.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
        if (T) {
          const S = parseInt(T[1], 16) / 255, I = parseInt(T[2], 16) / 255, x = parseInt(T[3], 16) / 255;
          v = new this.Cesium.Color(S, I, x, 1);
        } else
          v = this.Cesium.Color.fromCssColorString(C), v = v.withAlpha(1);
        const A = this.Cesium.Color.fromCssColorString(B), E = this.viewer.entities.add({
          position: this.Cesium.Cartesian3.fromDegrees(m, y, 0),
          point: {
            pixelSize: b ? 15 : 10,
            color: v,
            outlineColor: A,
            outlineWidth: 2,
            heightReference: this.Cesium.HeightReference.CLAMP_TO_GROUND
          },
          label: {
            text: u.label,
            font: "14px sans-serif",
            fillColor: this.Cesium.Color.WHITE,
            outlineColor: this.Cesium.Color.BLACK,
            outlineWidth: 2,
            style: this.Cesium.LabelStyle.FILL_AND_OUTLINE,
            verticalOrigin: this.Cesium.VerticalOrigin.BOTTOM,
            pixelOffset: new this.Cesium.Cartesian2(0, -20),
            heightReference: this.Cesium.HeightReference.CLAMP_TO_GROUND,
            show: !1
          },
          nodeId: u.id
        });
        this.nodeEntities.set(u.id, E);
      });
    }
    for (const i of e) {
      const [n, h] = i.coordinates;
      s.set(i.id, [n, h]);
      const a = this.selectedNodeId === i.id, r = i.style?.color || "#ffffff", c = a ? "#2196f3" : i.style?.borderColor || "#333333";
      let l;
      const d = r.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
      if (d) {
        const p = parseInt(d[1], 16) / 255, f = parseInt(d[2], 16) / 255, g = parseInt(d[3], 16) / 255;
        l = new this.Cesium.Color(p, f, g, 1);
      } else
        l = this.Cesium.Color.fromCssColorString(r), l = l.withAlpha(1);
      const o = this.Cesium.Color.fromCssColorString(c), u = this.viewer.entities.add({
        position: this.Cesium.Cartesian3.fromDegrees(h, n, 0),
        point: {
          pixelSize: a ? 15 : 10,
          color: l,
          // Use node fill color
          outlineColor: o,
          // Use border color
          outlineWidth: 2,
          heightReference: this.Cesium.HeightReference.CLAMP_TO_GROUND
        },
        label: {
          text: i.label,
          font: "14px sans-serif",
          fillColor: this.Cesium.Color.WHITE,
          outlineColor: this.Cesium.Color.BLACK,
          outlineWidth: 2,
          style: this.Cesium.LabelStyle.FILL_AND_OUTLINE,
          verticalOrigin: this.Cesium.VerticalOrigin.BOTTOM,
          pixelOffset: new this.Cesium.Cartesian2(0, -20),
          heightReference: this.Cesium.HeightReference.CLAMP_TO_GROUND,
          show: !1
          // Hide labels by default, show popup on click instead
        },
        nodeId: i.id
        // For hit testing
      });
      this.nodeEntities.set(i.id, u);
    }
    if (this.alwaysShowEdges)
      for (const i of this.edges) {
        const n = s.get(i.src), h = s.get(i.dst);
        if (!n || !h)
          continue;
        const [a, r] = n, [c, l] = h, d = i.style?.color || "#999999", o = i.style?.weight || 1, u = Math.max(1, Math.min(5, o)), p = this.viewer.entities.add({
          polyline: {
            positions: [
              this.Cesium.Cartesian3.fromDegrees(r, a, 0),
              this.Cesium.Cartesian3.fromDegrees(l, c, 0)
            ],
            width: u,
            material: this.Cesium.Color.fromCssColorString(d),
            clampToGround: !0
          },
          edgeId: i.id
          // For hit testing
        });
        this.edgeEntities.set(i.id, p);
      }
    this.fitToNodes();
  }
  /**
   * Update node selection state without re-rendering edges
   * This preserves edge visibility during node selection
   */
  updateNodeSelection() {
    if (!(!this.viewer || !this.Cesium))
      for (const [t, e] of this.nodeEntities.entries()) {
        const s = this.nodes.find((a) => a.id === t);
        if (!s)
          continue;
        const i = this.selectedNodeId === t, n = s.style?.color || "#ffffff", h = i ? "#2196f3" : s.style?.borderColor || "#333333";
        if (e.point) {
          e.point.pixelSize = i ? 15 : 10;
          let a;
          const r = n.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
          if (r) {
            const c = parseInt(r[1], 16) / 255, l = parseInt(r[2], 16) / 255, d = parseInt(r[3], 16) / 255;
            a = new this.Cesium.Color(c, l, d, 1);
          } else
            a = this.Cesium.Color.fromCssColorString(n), a = a.withAlpha(1);
          e.point.color = a, e.point.outlineColor = this.Cesium.Color.fromCssColorString(h);
        }
      }
  }
  /**
   * Draw nodes and edges without changing camera (no fit)
   */
  renderWithoutFit() {
    if (!this.viewer || !this.Cesium)
      return;
    this.viewer.entities.removeAll(), this.nodeEntities.clear(), this.edgeEntities.clear(), this.rectEntity = null;
    const t = this.nodes.filter((i) => {
      if (!i.coordinates || !Array.isArray(i.coordinates) || i.coordinates.length !== 2) return !0;
      const [n, h] = i.coordinates;
      return !Number.isFinite(n) || !Number.isFinite(h);
    }), e = this.nodes.filter((i) => {
      if (!i.coordinates || !Array.isArray(i.coordinates) || i.coordinates.length !== 2) return !1;
      const [n, h] = i.coordinates;
      return Number.isFinite(n) && Number.isFinite(h);
    }), s = /* @__PURE__ */ new Map();
    if (t.length > 0) {
      const r = [
        this.Cesium.Cartesian3.fromDegrees(-32, -50, 0),
        this.Cesium.Cartesian3.fromDegrees(0, -50, 0),
        this.Cesium.Cartesian3.fromDegrees(0, 0, 0),
        this.Cesium.Cartesian3.fromDegrees(-32, 0, 0)
      ];
      this.rectEntity = this.viewer.entities.add({
        polygon: {
          hierarchy: r,
          material: this.Cesium.Color.fromCssColorString("#f0f0f0").withAlpha(0.1),
          outline: !0,
          outlineColor: this.Cesium.Color.fromCssColorString("#666"),
          height: 0
        }
      });
      const c = Math.ceil(Math.sqrt(t.length)), d = 50 / (Math.ceil(t.length / c) + 1), o = 32 / (c + 1);
      t.forEach((u, p) => {
        const f = Math.floor(p / c), g = p % c, y = -50 + (f + 1) * d, m = -32 + (g + 1) * o;
        s.set(u.id, [y, m]);
        const b = this.selectedNodeId === u.id, C = u.style?.color || "#ffffff", B = b ? "#2196f3" : u.style?.borderColor || "#333333";
        let v;
        const T = C.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
        if (T) {
          const S = parseInt(T[1], 16) / 255, I = parseInt(T[2], 16) / 255, x = parseInt(T[3], 16) / 255;
          v = new this.Cesium.Color(S, I, x, 1);
        } else
          v = this.Cesium.Color.fromCssColorString(C), v = v.withAlpha(1);
        const A = this.Cesium.Color.fromCssColorString(B), E = this.viewer.entities.add({
          position: this.Cesium.Cartesian3.fromDegrees(m, y, 0),
          point: {
            pixelSize: b ? 15 : 10,
            color: v,
            outlineColor: A,
            outlineWidth: 2,
            heightReference: this.Cesium.HeightReference.CLAMP_TO_GROUND
          },
          label: {
            text: u.label,
            font: "14px sans-serif",
            fillColor: this.Cesium.Color.WHITE,
            outlineColor: this.Cesium.Color.BLACK,
            outlineWidth: 2,
            style: this.Cesium.LabelStyle.FILL_AND_OUTLINE,
            verticalOrigin: this.Cesium.VerticalOrigin.BOTTOM,
            pixelOffset: new this.Cesium.Cartesian2(0, -20),
            heightReference: this.Cesium.HeightReference.CLAMP_TO_GROUND,
            show: !1
          },
          nodeId: u.id
        });
        this.nodeEntities.set(u.id, E);
      });
    }
    for (const i of e) {
      const [n, h] = i.coordinates;
      s.set(i.id, [n, h]);
      const a = this.selectedNodeId === i.id, r = i.style?.color || "#ffffff", c = a ? "#2196f3" : i.style?.borderColor || "#333333";
      let l;
      const d = r.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
      if (d) {
        const p = parseInt(d[1], 16) / 255, f = parseInt(d[2], 16) / 255, g = parseInt(d[3], 16) / 255;
        l = new this.Cesium.Color(p, f, g, 1);
      } else
        l = this.Cesium.Color.fromCssColorString(r), l = l.withAlpha(1);
      const o = this.Cesium.Color.fromCssColorString(c), u = this.viewer.entities.add({
        position: this.Cesium.Cartesian3.fromDegrees(h, n, 0),
        point: {
          pixelSize: a ? 15 : 10,
          color: l,
          outlineColor: o,
          outlineWidth: 2,
          heightReference: this.Cesium.HeightReference.CLAMP_TO_GROUND
        },
        label: {
          text: i.label,
          font: "14px sans-serif",
          fillColor: this.Cesium.Color.WHITE,
          outlineColor: this.Cesium.Color.BLACK,
          outlineWidth: 2,
          style: this.Cesium.LabelStyle.FILL_AND_OUTLINE,
          verticalOrigin: this.Cesium.VerticalOrigin.BOTTOM,
          pixelOffset: new this.Cesium.Cartesian2(0, -20),
          heightReference: this.Cesium.HeightReference.CLAMP_TO_GROUND,
          show: !1
          // Hide labels by default, show popup on click instead
        },
        nodeId: i.id
      });
      this.nodeEntities.set(i.id, u);
    }
    if (this.alwaysShowEdges)
      for (const i of this.edges) {
        const n = s.get(i.src), h = s.get(i.dst);
        if (!n || !h)
          continue;
        const [a, r] = n, [c, l] = h, d = i.style?.color || "#999999", o = i.style?.weight || 1, u = Math.max(1, Math.min(5, o)), p = this.viewer.entities.add({
          polyline: {
            positions: [
              this.Cesium.Cartesian3.fromDegrees(r, a, 0),
              this.Cesium.Cartesian3.fromDegrees(l, c, 0)
            ],
            width: u,
            material: this.Cesium.Color.fromCssColorString(d),
            clampToGround: !0
          },
          edgeId: i.id
          // For hit testing
        });
        this.edgeEntities.set(i.id, p);
      }
  }
  // Control buttons are now managed by ViewContainer - no need to create individual buttons
  /**
   * Switch to next tile server when multiple customTileUrls are provided
   */
  switchTileType() {
    if (!(!this.viewer || !this.Cesium) && this.customTileUrls.length > 1) {
      this.currentCustomTileIndex = (this.currentCustomTileIndex + 1) % this.customTileUrls.length, this.setTileTypeInternal(!0), this.updateTileTypeButton();
      return;
    }
  }
  /**
   * Update base imagery layer based on current tile server configuration
   */
  setTileTypeInternal(t = !1) {
    if (!this.viewer || !this.Cesium)
      return;
    const e = (a, r, c, l = !1) => {
      const d = (u) => String(u).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"), o = `<a href="${d(c)}" target="_blank" rel="noopener noreferrer">${d(r)}</a>`;
      return new a.Credit(o, l);
    };
    if (this.baseImageryLayer)
      try {
        this.viewer.imageryLayers.remove(this.baseImageryLayer);
      } catch {
      }
    if (this.customTileUrls.length > 0) {
      const a = this.customTileUrls[this.currentCustomTileIndex], r = a.url.includes("NaturalEarthII"), c = a.maximumLevel ?? (r ? 2 : 19);
      let l;
      if (a.credit) {
        const u = a.credit;
        u.href ? l = e(this.Cesium, u.label, u.href, u.showOnScreen ?? !1) : l = new this.Cesium.Credit(u.label, u.showOnScreen ?? !1);
      } else
        l = new this.Cesium.Credit(
          `Custom tile server (${this.currentCustomTileIndex + 1}/${this.customTileUrls.length})`
        );
      const d = {
        url: a.url,
        maximumLevel: c,
        credit: l
      };
      r && this.Cesium?.GeographicTilingScheme && (d.tilingScheme = new this.Cesium.GeographicTilingScheme());
      const o = new this.Cesium.UrlTemplateImageryProvider(d);
      this.baseImageryLayer = this.viewer.imageryLayers.addImageryProvider(o, 0), this.updateTileTypeButton();
      return;
    }
    const s = new this.Cesium.Credit("© NASA", !0), i = new this.Cesium.GeographicTilingScheme({
      rectangle: this.Cesium.Rectangle.fromDegrees(-180, -90, 180, 90),
      numberOfLevelZeroTilesX: 2,
      // Level 0 has 2 tiles in X direction
      numberOfLevelZeroTilesY: 1
      // Level 0 has 1 tile in Y direction
    }), n = "/cesium/Assets/Textures/NaturalEarthII/{z}/{x}/{reverseY}.jpg", h = new this.Cesium.UrlTemplateImageryProvider({
      url: n,
      maximumLevel: 2,
      // NaturalEarthII tiles only go up to level 2
      tilingScheme: i,
      // EPSG:4326 (Geographic Coordinate System)
      credit: s,
      customTags: {
        reverseY: (a, r, c, l) => {
          const o = Math.pow(2, l) - 1 - c;
          return String(o);
        }
      }
    });
    this.baseImageryLayer = this.viewer.imageryLayers.addImageryProvider(h, 0), this.updateTileTypeButton();
  }
  /**
   * Update tile-switch button visibility/title based on current tile server index
   */
  updateTileTypeButton() {
    if (this.tileTypeButton) {
      if (this.customTileUrls.length > 1) {
        this.tileTypeButton.style.display = "flex";
        const t = this.currentCustomTileIndex + 1, e = this.customTileUrls.length;
        this.tileTypeButton.setAttribute("title", `Custom tile ${t}/${e}`), this.tileTypeButton.style.backgroundColor = "#fff", this.tileTypeButton.style.borderColor = "#ccc", this.tileTypeButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.tileTypeButton.style.transform = "translateY(0)";
        return;
      }
      if (this.customTileUrls.length > 0) {
        this.tileTypeButton.style.display = "none";
        return;
      }
      this.tileTypeButton.style.display = "none";
    }
  }
  /**
   * Update edge-toggle button appearance
   */
  updateAlwaysShowEdgesButton() {
    this.alwaysShowEdgesButton && (this.alwaysShowEdges ? (this.alwaysShowEdgesButton.setAttribute("aria-label", "Hide edges"), this.alwaysShowEdgesButton.setAttribute("title", "Hide edges"), this.alwaysShowEdgesButton.style.backgroundColor = "#fff9c4", this.alwaysShowEdgesButton.style.color = "#000000", this.alwaysShowEdgesButton.style.borderColor = "#999", this.alwaysShowEdgesButton.style.boxShadow = "inset 0 2px 4px rgba(0, 0, 0, 0.2)", this.alwaysShowEdgesButton.style.transform = "translateY(1px)") : (this.alwaysShowEdgesButton.setAttribute("aria-label", "Show edges"), this.alwaysShowEdgesButton.setAttribute("title", "Show edges"), this.alwaysShowEdgesButton.style.backgroundColor = "#fff", this.alwaysShowEdgesButton.style.color = "#000000", this.alwaysShowEdgesButton.style.borderColor = "#ccc", this.alwaysShowEdgesButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.alwaysShowEdgesButton.style.transform = "translateY(0)"));
  }
  /**
   * Update lighting-toggle button appearance
   */
  updateLightingButton() {
    if (!this.lightingToggleButton)
      return;
    const t = this.isLightingEnabled();
    this.lightingToggleButton.innerHTML = $t("icon-sun", 16), t ? (this.lightingToggleButton.style.backgroundColor = "#fff9c4", this.lightingToggleButton.style.boxShadow = "inset 0 2px 4px rgba(0, 0, 0, 0.2)", this.lightingToggleButton.style.transform = "translateY(1px)") : (this.lightingToggleButton.style.backgroundColor = "#fff", this.lightingToggleButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.lightingToggleButton.style.transform = "translateY(0)"), this.lightingToggleButton.style.color = "#333";
  }
  /**
   * Fit and center view (for View interface)
   */
  fitAndCenter() {
    this.fitToNodes();
  }
  /**
   * Adjust camera so that all nodes are visible
   */
  fitToNodes() {
    if (!this.viewer || !this.Cesium || this.nodes.length === 0)
      return;
    const t = this.nodes.filter((C) => {
      if (!C.coordinates || !Array.isArray(C.coordinates) || C.coordinates.length !== 2) return !1;
      const [B, v] = C.coordinates;
      return Number.isFinite(B) && Number.isFinite(v);
    }), e = this.nodes.filter((C) => {
      if (!C.coordinates || !Array.isArray(C.coordinates) || C.coordinates.length !== 2) return !0;
      const [B, v] = C.coordinates;
      return !Number.isFinite(B) || !Number.isFinite(v);
    }), s = [], i = [];
    if (t.forEach((C) => {
      if (C.coordinates && C.coordinates.length === 2) {
        const [B, v] = C.coordinates;
        Number.isFinite(B) && Number.isFinite(v) && (s.push(B), i.push(v));
      }
    }), e.length > 0) {
      const A = Math.ceil(Math.sqrt(e.length)), S = 50 / (Math.ceil(e.length / A) + 1), I = 32 / (A + 1);
      e.forEach((x, L) => {
        const k = Math.floor(L / A), N = L % A, M = -50 + (k + 1) * S, _ = -32 + (N + 1) * I;
        s.push(M), i.push(_);
      });
    }
    if (s.length === 0)
      return;
    const n = Math.min(...s), h = Math.max(...s), a = Math.min(...i), r = Math.max(...i), c = (n + h) / 2, l = (a + r) / 2, d = h - n, o = r - a, u = Math.max(d, o), p = Math.max(1e6, u * 111e3 * 2), y = Math.max(5e5, Math.min(4e7, p)), m = () => new Promise((C) => {
      if (!this.baseImageryLayer) {
        C();
        return;
      }
      if (this.baseImageryLayer.imageryProvider && this.baseImageryLayer.imageryProvider.ready) {
        C();
        return;
      }
      const B = setTimeout(() => {
        C();
      }, 2e3);
      this.baseImageryLayer.imageryProvider && this.baseImageryLayer.imageryProvider.readyPromise ? this.baseImageryLayer.imageryProvider.readyPromise.then(() => {
        clearTimeout(B), C();
      }).catch(() => {
        clearTimeout(B), C();
      }) : (clearTimeout(B), C());
    }), b = this._setIsFlying;
    b && b(!0), m().then(() => {
      this.viewer.camera.flyTo({
        destination: this.Cesium.Cartesian3.fromDegrees(l, c, y),
        orientation: {
          heading: 0,
          pitch: this.Cesium.Math.toRadians(-90),
          roll: 0
        },
        duration: 1,
        // Animate in 1 second
        complete: () => {
          b && b(!1);
          const C = this.viewer.scene.camera, B = this.Cesium.Cartographic.fromCartesian(C.position), v = B.height, T = 5e5, A = 4e7;
          if (v < T || v > A) {
            const E = Math.max(T, Math.min(A, v)), S = this.Cesium.Cartesian3.fromRadians(
              B.longitude,
              B.latitude,
              E
            );
            C.setView({
              destination: S,
              orientation: C.orientation
            });
          }
        }
      });
    });
  }
  /**
   * Show view
   */
  show() {
    this.container.style.display = "block", this.viewer ? this.viewer.resize() : this.cesiumLoader && this.initializeCesium().catch(() => {
    });
  }
  /**
   * Hide view
   */
  hide() {
    this.container.style.display = "none";
  }
  /**
   * Resize view
   */
  resize() {
    this.viewer && this.viewer.resize();
  }
  /**
   * Destroy view
   */
  destroy() {
    if (this.hidePopup(), this.popupElement && this.popupElement.parentNode && (this.popupElement.parentNode.removeChild(this.popupElement), this.popupElement = null), this.viewer && this._trackpadPinchHandlers) {
      const t = this.viewer.canvas, e = this._trackpadPinchHandlers;
      e.wheel && t.removeEventListener("wheel", e.wheel), "GestureEvent" in window && (e.gestureStart && t.removeEventListener("gesturestart", e.gestureStart), e.gestureChange && t.removeEventListener("gesturechange", e.gestureChange), e.gestureEnd && t.removeEventListener("gestureend", e.gestureEnd)), this._trackpadPinchHandlers = null;
    }
    this.viewer && (this.viewer.destroy(), this.viewer = null), this.nodeEntities.clear(), this.edgeEntities.clear();
  }
  /**
   * Create custom popup (Leaflet style)
   */
  createPopup() {
    const t = document.createElement("div");
    t.className = "relatos-globe3d-popup", t.style.cssText = `
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
      max-width: 200px;
      word-wrap: break-word;
      overflow-wrap: break-word;
      white-space: normal;
      opacity: 0;
      transition: opacity 0.2s;
    `;
    const e = document.createElement("div");
    return e.style.cssText = `
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-top: 8px solid white;
    `, t.appendChild(e), this.container.appendChild(t), t;
  }
  /**
   * Show popup
   */
  showPopup(t, e) {
    if (!(!this.viewer || !this.Cesium || !t) && (this.hidePopup(), this.popupElement || (this.popupElement = this.createPopup()), this.popupElement.textContent = e.label, this.popupElement.style.opacity = "1", this.popupEntity = t, this.updatePopupPosition(), !this.popupUpdateListener)) {
      const s = () => {
        this.popupEntity && this.popupElement && this.updatePopupPosition();
      };
      this.viewer.scene.postRender.addEventListener(s), this.popupUpdateListener = () => {
        this.viewer?.scene.postRender.removeEventListener(s);
      };
    }
  }
  /**
   * Hide popup
   */
  hidePopup() {
    this.popupElement && (this.popupElement.style.opacity = "0", setTimeout(() => {
      this.popupElement && this.popupElement.style.opacity === "0" && (this.popupElement.style.display = "none");
    }, 200)), this.popupEntity = null, this.popupUpdateListener && (this.popupUpdateListener(), this.popupUpdateListener = null);
  }
  /**
   * Update popup position (handles CSS transform scale)
   */
  updatePopupPosition() {
    if (!this.viewer || !this.Cesium || !this.popupEntity || !this.popupElement) return;
    const t = this.popupEntity.position?.getValue(this.viewer.clock.currentTime);
    if (!t) return;
    let e = null;
    if (this.Cesium.SceneTransforms?.worldToWindowCoordinates ? e = this.Cesium.SceneTransforms.worldToWindowCoordinates(this.viewer.scene, t) : this.Cesium.SceneTransforms?.wgs84ToWindowCoordinates ? e = this.Cesium.SceneTransforms.wgs84ToWindowCoordinates(this.viewer.scene, t) : e = this.viewer.camera.project(t), !e) {
      this.popupElement.style.display = "none";
      return;
    }
    let s = 1;
    const i = this.container.getBoundingClientRect(), n = this.container.offsetWidth;
    n > 0 && i.width > 0 && (s = i.width / n);
    const h = e.x / s, a = e.y / s;
    this.popupElement.style.display = "block";
    const r = h - this.popupElement.offsetWidth / 2, c = a - this.popupElement.offsetHeight - 15;
    this.popupElement.style.left = `${r}px`, this.popupElement.style.top = `${c}px`;
  }
  /**
   * Get current view as SVG string. Globe3D has no native SVG; returns null.
   * Use exportViewToImage for PNG/WebP download of the Cesium globe.
   */
  getViewAsSvg() {
    return null;
  }
  /**
   * Export current view as image blob. Globe3D returns null (not supported).
   */
  async exportViewToImage(t, e) {
    return null;
  }
  /**
   * Check if editable (Globe3D is not editable)
   */
  isEditable() {
    return !1;
  }
}
function jt(w, t = 16) {
  return Q(), `<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <use href="#${w}"></use>
  </svg>`;
}
class qt {
  // Current index in customTileUrls array
  constructor(t, e, s, i, n, h) {
    this.map = null, this.Leaflet = null, this.nodes = [], this.edges = [], this.selectedNodeId = null, this.lastSelectedNodeId = null, this.markers = /* @__PURE__ */ new Map(), this.polylines = /* @__PURE__ */ new Map(), this.rectLayer = null, this.fitCenterButton = null, this.lightingToggleButton = null, this.alwaysShowEdgesButton = null, this.alwaysShowEdges = !0, this.tileTypeButton = null, this.baseTileLayer = null, this.nightShadeLayer = null, this.nightShadeDebugLayer = null, this.lightingEnabled = !1, this.timeISO = null, this.moonToggleButton = null, this.moonEnabled = !1, this.moonMarker = null, this.customTileUrls = [], this.currentCustomTileIndex = 0, this.container = t, this.onNodeClick = e, this.leafletLoader = s, this.map2dOptions = n, this.onEdgeClick = h;
    const a = i && i.length > 0 ? i : n?.customTileUrls;
    a && a.length > 0 ? this.customTileUrls = a.map(
      (r) => typeof r == "string" ? { url: r } : r
    ) : n?.customTileUrl && (this.customTileUrls = [{ url: n.customTileUrl }]), this.container.style.position = "relative", this.container.style.width = "100%", this.container.style.height = "100%";
  }
  /**
   * Initialize Leaflet
   */
  async initializeLeaflet() {
    if (this.map)
      return;
    if (!this.leafletLoader)
      throw new Error("Leaflet loader is not provided. Please provide options.loaders.leaflet.");
    const t = await this.leafletLoader();
    this.Leaflet = t.default || t;
    const e = this.map2dOptions?.center || [0, 0], s = this.map2dOptions?.zoom || 2;
    let i = 5;
    if (this.customTileUrls.length > 0) {
      const h = this.customTileUrls.map((a) => a.maxZoom ?? a.maximumLevel ?? 19);
      i = Math.min(...h);
    }
    const n = {
      center: e,
      zoom: s,
      zoomControl: !1,
      // Hide zoom control (+/- buttons)
      attributionControl: !0,
      maxZoom: i
      // Use minimum maxZoom from all tile servers
    };
    this.customTileUrls.length === 0 && (n.crs = this.Leaflet.CRS.EPSG4326), this.map = this.Leaflet.map(this.container, n), this.setupBaseTileLayer(), this.setupTimeAndLighting(), this.lightingEnabled && this.updateNightShade(), this.moonEnabled && this.updateMoonMarker(), this.setupClickHandler(), (this.nodes.length > 0 || this.edges.length > 0) && this.render();
  }
  /**
   * Set up base tile layer
   */
  setupBaseTileLayer() {
    if (!this.map || !this.Leaflet)
      return;
    this.baseTileLayer && this.map.removeLayer(this.baseTileLayer);
    let t;
    if (this.customTileUrls.length > 0) {
      const i = this.customTileUrls[this.currentCustomTileIndex], n = i.maxZoom ?? i.maximumLevel ?? 19, h = i.tms ?? !1, a = i.attribution ?? `Custom tile server (${this.currentCustomTileIndex + 1}/${this.customTileUrls.length})`;
      t = this.Leaflet.tileLayer(i.url, {
        maxZoom: n,
        tms: h,
        // TMS format (Y from bottom to top) if specified
        attribution: a
      }), t.addTo(this.map), this.baseTileLayer = t;
      return;
    }
    const e = "/cesium/Assets/Textures/NaturalEarthII/{z}/{x}/{y}.jpg", s = this.Leaflet.latLngBounds([
      [-90, -180],
      // south, west
      [90, 180]
      // north, east
    ]);
    t = this.Leaflet.tileLayer(e, {
      minZoom: 0,
      // Native tiles exist only up to zoom level 2, but the map itself can zoom further (e.g., up to 5)
      // Leaflet will automatically upscale tiles beyond maxNativeZoom.
      maxNativeZoom: 2,
      tms: !0,
      // TMS scheme (Y from bottom to top)
      bounds: s,
      noWrap: !0,
      continuousWorld: !1,
      attribution: "© NASA"
    }), t.addTo(this.map), this.baseTileLayer = t;
  }
  /**
   * Set time information and day/night shading
   * Time and lighting are now controlled by ViewContainer's shared state
   */
  setupTimeAndLighting() {
    !this.map || this.Leaflet;
  }
  /**
   * Set time
   * @param timeISO ISO 8601 time string (e.g., "2025-06-21T12:00:00Z")
   */
  setTime(t) {
    this.timeISO = t, this.lightingEnabled && this.updateNightShade(), this.updateMoonButton(), this.moonEnabled && this.updateMoonMarker();
  }
  /**
   * Set day/night shading on/off
   * @param enabled true to enable, false to disable
   */
  setLighting(t) {
    if (this.lightingEnabled !== t) {
      if (this.lightingEnabled = t, !this.map || !this.Leaflet) {
        this.updateLightingButton();
        return;
      }
      t ? this.updateNightShade() : (this.nightShadeLayer && (this.map.removeLayer(this.nightShadeLayer), this.nightShadeLayer = null), this.nightShadeDebugLayer && (this.map.removeLayer(this.nightShadeDebugLayer), this.nightShadeDebugLayer = null)), this.updateLightingButton();
    }
  }
  /**
   * Check if day/night shading is enabled
   */
  isLightingEnabled() {
    return this.lightingEnabled;
  }
  /**
   * Get always show edges state
   */
  getAlwaysShowEdges() {
    return this.alwaysShowEdges;
  }
  /**
   * Set always show edges state
   */
  setAlwaysShowEdges(t) {
    this.alwaysShowEdges !== t && (this.alwaysShowEdges = t, this.updateAlwaysShowEdgesButton(), this.renderWithoutFit());
  }
  /**
   * Get lighting enabled state (for View interface)
   */
  getLightingEnabled() {
    return this.isLightingEnabled();
  }
  /**
   * Set lighting enabled state (for View interface)
   * @param enabled true to enable, false to disable
   * @param notifyContainer Whether to notify ViewContainer (default: true)
   */
  setLightingEnabled(t, e = !0) {
    const s = this.lightingEnabled;
    this.setLighting(t), e && this.onLightingChange && this.lightingEnabled !== s && this.onLightingChange(this.lightingEnabled);
  }
  /**
   * Set callback for always show edges state changes
   */
  setAlwaysShowEdgesChangeCallback(t) {
    this.onAlwaysShowEdgesChange = t;
  }
  /**
   * Set callback for lighting state changes
   */
  setLightingChangeCallback(t) {
    this.onLightingChange = t;
  }
  /**
   * Get number of available tile servers (customTileUrls length)
   */
  getTileServerCount() {
    return this.customTileUrls.length;
  }
  /**
   * Get current tile server index (0-based)
   */
  getTileServerIndex() {
    return this.currentCustomTileIndex;
  }
  /**
   * Set current tile server index (0-based, for synchronized switching from ViewContainer)
   */
  setTileServerIndex(t) {
    if (this.customTileUrls.length === 0)
      return;
    const e = this.customTileUrls.length, s = (t % e + e) % e;
    this.currentCustomTileIndex !== s && (this.currentCustomTileIndex = s, this.map && this.Leaflet && (this.setupBaseTileLayer(), this.updateTileTypeButton()));
  }
  /**
   * Cycle to next tile server (for View interface)
   */
  cycleTileServer() {
    this.switchTileType();
  }
  /**
   * Update night shade (day/night terminator)
   */
  updateNightShade() {
    if (!this.map || !this.Leaflet || (this.nightShadeLayer && (this.map.removeLayer(this.nightShadeLayer), this.nightShadeLayer = null), this.nightShadeDebugLayer && (this.map.removeLayer(this.nightShadeDebugLayer), this.nightShadeDebugLayer = null), !this.lightingEnabled))
      return;
    const t = this.timeISO || (/* @__PURE__ */ new Date()).toISOString(), i = this.calculateTerminatorBoundary(t, 720, 2);
    if (!i || i.length === 0)
      return;
    const n = this.unwrapLongitudes(i);
    let h = n.map((u) => [u.lat, u.lng]);
    h.length > 0 && (h[0][0] !== h[h.length - 1][0] || h[0][1] !== h[h.length - 1][1]) && h.push([h[0][0], h[0][1]]);
    const a = h.map(([u, p]) => ({ lat: u, lng: p }));
    this.isCounterClockwise(a) && h.reverse();
    const c = h.map(([u, p]) => ({ lat: u, lng: p }));
    if (this.isCounterClockwise(c)) {
      h.reverse();
      const u = h.map(([p, f]) => ({ lat: p, lng: f }));
      this.isCounterClockwise(u);
    }
    const d = n.map((u) => [u.lat, u.lng]);
    d.length > 0 && (d[0][0] !== d[d.length - 1][0] || d[0][1] !== d[d.length - 1][1]) && d.push([d[0][0], d[0][1]]);
    const o = this.Leaflet.polygon(d, {
      fillColor: "#000000",
      fillOpacity: 0.3,
      color: "#000000",
      weight: 0,
      interactive: !1
    });
    if (o.addTo(this.map), this.nightShadeLayer = o, this.map2dOptions?.debugNightShading) {
      const u = this.Leaflet.polyline(h, {
        color: "#ff0000",
        weight: 2,
        opacity: 0.8,
        interactive: !1
      });
      u.addTo(this.map), this.nightShadeDebugLayer = u;
    }
  }
  /**
   * Check if a ring is counter-clockwise (CCW) or clockwise (CW)
   * Uses the shoelace formula to calculate signed area
   * Positive area = CCW, Negative area = CW
   * @param ring Array of {lat, lng} points forming a closed ring
   * @returns true if counter-clockwise, false if clockwise
   */
  isCounterClockwise(t) {
    if (t.length < 3) return !1;
    let e = 0;
    for (let s = 0; s < t.length - 1; s++) {
      const i = t[s], n = t[s + 1];
      e += (n.lng - i.lng) * (n.lat + i.lat);
    }
    return e > 0;
  }
  /**
   * Unwrap longitudes to ensure continuity across antimeridian
   * Adjusts adjacent points by +/-360 degrees if they jump by more than 180 degrees
   * @param points Array of {lat, lng} points
   * @returns Unwrapped points with continuous longitudes
   */
  unwrapLongitudes(t) {
    if (t.length === 0) return t;
    const e = [{ ...t[0] }];
    for (let s = 1; s < t.length; s++) {
      let { lat: i, lng: n } = t[s];
      const h = e[s - 1].lng;
      for (; n - h > 180; )
        n -= 360;
      for (; n - h < -180; )
        n += 360;
      e.push({ lat: i, lng: n });
    }
    return e;
  }
  /**
   * Calculate Julian Date from a Date object
   * Supports negative years (BC dates)
   * Based on Leaflet.Terminator implementation
   */
  julian(t) {
    return t.getTime() / 864e5 + 24405875e-1;
  }
  /**
   * Calculate Greenwich Mean Sidereal Time
   * Based on Leaflet.Terminator implementation
   * Reference: http://aa.usno.navy.mil/faq/docs/GAST.php
   */
  GMST(t) {
    return (18.697374558 + 24.06570982441908 * (t - 2451545)) % 24;
  }
  /**
   * Compute the position of the Sun in ecliptic coordinates
   * Based on Leaflet.Terminator implementation
   * Reference: http://en.wikipedia.org/wiki/Position_of_the_Sun
   */
  sunEclipticPosition(t) {
    const e = t - 2451545;
    let s = 280.46 + 0.9856474 * e;
    s = (s % 360 + 360) % 360;
    let i = 357.528 + 0.9856003 * e;
    i = (i % 360 + 360) % 360;
    const n = Math.PI / 180, h = s + 1.915 * Math.sin(i * n) + 0.02 * Math.sin(2 * i * n), a = 1.00014 - 0.01671 * Math.cos(i * n) - 14e-4 * Math.cos(2 * i * n);
    return { lambda: h, R: a };
  }
  /**
   * Calculate ecliptic obliquity
   * Based on Leaflet.Terminator implementation
   * Reference: http://en.wikipedia.org/wiki/Axial_tilt#Obliquity_of_the_ecliptic_.28Earth.27s_axial_tilt.29
   */
  eclipticObliquity(t) {
    const s = (t - 2451545) / 36525;
    return 23.43929111 - s * (46.836769 / 3600 - s * (1831e-7 / 3600 + s * (20034e-7 / 3600 - s * (576e-9 / 3600 - s * 434e-10 / 3600))));
  }
  /**
   * Compute the Sun's equatorial position from its ecliptic position
   * Based on Leaflet.Terminator implementation
   */
  sunEquatorialPosition(t, e) {
    const s = Math.PI / 180, i = 180 / Math.PI, n = Math.atan(Math.cos(e * s) * Math.tan(t * s)) * i, h = Math.asin(Math.sin(e * s) * Math.sin(t * s)) * i, a = Math.floor(t / 90) * 90, r = Math.floor(n / 90) * 90;
    return { alpha: n + (a - r), delta: h };
  }
  /**
   * Compute the hour angle of the sun for a longitude on Earth
   * Based on Leaflet.Terminator implementation
   */
  hourAngle(t, e, s) {
    return (s + t / 15) * 15 - e.alpha;
  }
  /**
   * For a given hour angle and sun position, compute the latitude of the terminator
   * Based on Leaflet.Terminator implementation
   */
  terminatorLatitude(t, e) {
    const s = Math.PI / 180, i = 180 / Math.PI;
    return Math.atan(-Math.cos(t * s) / Math.tan(e.delta * s)) * i;
  }
  /**
   * Calculate terminator boundary using Leaflet.Terminator's algorithm
   * @param timeISO ISO 8601 time string
   * @param longitudeRange Longitude range (default: 720 degrees, -360 to +360)
   * @param resolution Resolution (points per degree, default: 2)
   * @returns Array of {lat, lng} points forming the terminator boundary
   */
  calculateTerminatorBoundary(t, e = 720, s = 2) {
    try {
      let i;
      if (t.startsWith("-")) {
        if (i = new Date(t), isNaN(i.getTime()))
          return null;
      } else if (i = new Date(t), isNaN(i.getTime()))
        return null;
      const n = this.julian(i), h = this.GMST(n), a = this.sunEclipticPosition(n), r = this.eclipticObliquity(n), c = this.sunEquatorialPosition(a.lambda, r), l = [];
      for (let d = 0; d <= e * s; d++) {
        const o = -e / 2 + d / s, u = this.hourAngle(o, c, h), p = this.terminatorLatitude(u, c);
        l.push({ lat: p, lng: o });
      }
      return c.delta < 0 ? (l.unshift({ lat: 90, lng: -e / 2 }), l.push({ lat: 90, lng: e / 2 })) : (l.unshift({ lat: -90, lng: -e / 2 }), l.push({ lat: -90, lng: e / 2 })), l.length > 0 ? l : null;
    } catch {
      return null;
    }
  }
  /**
   * Calculate day of year
   * @param date Date
   * @returns Day of year (1-365/366)
   */
  getDayOfYear(t) {
    const e = new Date(t.getFullYear(), 0, 0), s = t.getTime() - e.getTime(), i = 1e3 * 60 * 60 * 24;
    return Math.floor(s / i);
  }
  /**
   * Calculate solar declination (simplified version)
   * @param dayOfYear Day of year (1-365/366)
   * @returns Declination in degrees
   */
  calculateSolarDeclination(t) {
    return 23.45 * Math.PI / 180 * Math.sin(2 * Math.PI * (284 + t) / 365) * 180 / Math.PI;
  }
  /**
   * Setup click handler
   */
  setupClickHandler() {
    !this.map || !this.Leaflet || this.map.on("click", (t) => {
    });
  }
  /**
   * Set data
   */
  setData(t, e) {
    this.nodes = t, this.edges = e, this.map && this.Leaflet && this.render();
  }
  /**
   * Select node (highlight), toggle to fit if same node selected again
   */
  selectNode(t) {
    if (!t) {
      this.selectedNodeId = null, this.lastSelectedNodeId = null, this.renderWithoutFit();
      return;
    }
    if (!this.map || !this.Leaflet) return;
    if (t === this.lastSelectedNodeId) {
      this.lastSelectedNodeId = null, this.fitToNodes();
      return;
    }
    this.lastSelectedNodeId = t, this.selectedNodeId = t;
    const e = this.nodes.find((i) => i.id === t);
    if (!e) return;
    if (e.coordinates && e.coordinates.length === 2) {
      const [i, n] = e.coordinates;
      if (Number.isFinite(i) && Number.isFinite(n)) {
        const [h, a] = e.coordinates;
        this.renderWithoutFit(), this.map.flyTo([h, a], 4, {
          duration: 1,
          easeLinearity: 0.25
          // Easing linearity (0.25 is recommended)
        });
        const r = () => {
          const c = this.markers.get(t);
          c && c.openPopup(), this.map.off("moveend", r);
        };
        this.map.once("moveend", r);
        return;
      }
    }
    const s = this.nodes.filter((i) => {
      if (!i.coordinates || !Array.isArray(i.coordinates) || i.coordinates.length !== 2) return !0;
      const [n, h] = i.coordinates;
      return !Number.isFinite(n) || !Number.isFinite(h);
    });
    if (s.length > 0) {
      const r = Math.ceil(Math.sqrt(s.length)), l = 50 / (Math.ceil(s.length / r) + 1), d = 32 / (r + 1), o = s.findIndex((u) => u.id === t);
      if (o >= 0) {
        const u = Math.floor(o / r), p = o % r, f = -50 + (u + 1) * l, g = -32 + (p + 1) * d;
        this.renderWithoutFit(), this.map.flyTo([f, g], 4, {
          duration: 1,
          // 1 second animation
          easeLinearity: 0.25
        });
        const y = () => {
          const m = this.markers.get(t);
          m && m.openPopup(), this.map.off("moveend", y);
        };
        this.map.once("moveend", y);
      }
    } else
      this.renderWithoutFit();
  }
  /**
   * Render nodes and edges
   */
  render() {
    if (!this.map || !this.Leaflet)
      return;
    this.markers.forEach((n) => {
      this.map.removeLayer(n);
    }), this.markers.clear(), Array.from(this.polylines.keys()).forEach((n) => {
      const h = this.polylines.get(n);
      if (h && this.map)
        try {
          this.map.hasLayer(h) && this.map.removeLayer(h);
        } catch {
        }
      this.polylines.delete(n);
    }), this.polylines.clear();
    const e = this.nodes.filter((n) => {
      if (!n.coordinates || !Array.isArray(n.coordinates) || n.coordinates.length !== 2) return !0;
      const [h, a] = n.coordinates;
      return !Number.isFinite(h) || !Number.isFinite(a);
    }), s = this.nodes.filter((n) => {
      if (!n.coordinates || !Array.isArray(n.coordinates) || n.coordinates.length !== 2) return !1;
      const [h, a] = n.coordinates;
      return Number.isFinite(h) && Number.isFinite(a);
    }), i = /* @__PURE__ */ new Map();
    if (e.length > 0) {
      const c = this.Leaflet.latLngBounds(
        [-50, -32],
        [0, 0]
      );
      this.rectLayer = this.Leaflet.rectangle(c, {
        color: "#666",
        fillColor: "#f0f0f0",
        fillOpacity: 0.1,
        weight: 1,
        dashArray: "5,5"
      }), this.rectLayer.addTo(this.map);
      const l = Math.ceil(Math.sqrt(e.length)), o = 50 / (Math.ceil(e.length / l) + 1), u = 32 / (l + 1);
      e.forEach((p, f) => {
        const g = Math.floor(f / l), y = f % l, m = -50 + (g + 1) * o, b = -32 + (y + 1) * u;
        i.set(p.id, [m, b]);
        const C = this.selectedNodeId === p.id, B = p.style?.color || "#ffffff", v = C ? "#2196f3" : p.style?.borderColor || "#333333", T = `
          <div style="
            width: ${C ? 15 : 10}px;
            height: ${C ? 15 : 10}px;
            background-color: ${B};
            border: 2px solid ${v};
            border-radius: 50%;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          "></div>
        `, A = this.Leaflet.divIcon({
          html: T,
          className: "relatos-node-marker",
          iconSize: [C ? 15 : 10, C ? 15 : 10],
          iconAnchor: [C ? 7.5 : 5, C ? 7.5 : 5]
        }), E = this.Leaflet.marker([m, b], { icon: A });
        E.bindPopup(p.label, {
          closeButton: !1,
          offset: [0, -10]
        }), E.on("click", (S) => {
          if (this.onNodeClick) {
            const I = S.latlng;
            this.onNodeClick({
              node: p,
              position: { x: I.lng, y: I.lat },
              originalEvent: S.originalEvent
            });
          }
        }), E.addTo(this.map), this.markers.set(p.id, E);
      });
    }
    for (const n of s) {
      const [h, a] = n.coordinates;
      i.set(n.id, [h, a]);
      const r = this.selectedNodeId === n.id, c = n.style?.color || "#ffffff", l = r ? "#2196f3" : n.style?.borderColor || "#333333", d = `
        <div style="
          width: ${r ? 15 : 10}px;
          height: ${r ? 15 : 10}px;
          background-color: ${c};
          border: 2px solid ${l};
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        "></div>
      `, o = this.Leaflet.divIcon({
        html: d,
        className: "relatos-node-marker",
        iconSize: [r ? 15 : 10, r ? 15 : 10],
        iconAnchor: [r ? 7.5 : 5, r ? 7.5 : 5]
      }), u = this.Leaflet.marker([h, a], { icon: o });
      u.bindPopup(n.label, {
        closeButton: !1,
        offset: [0, -10]
      }), u.on("click", (p) => {
        if (this.onNodeClick) {
          const f = p.latlng;
          this.onNodeClick({
            node: n,
            position: { x: f.lng, y: f.lat },
            originalEvent: p.originalEvent,
            view: "map2d"
          });
        }
      }), u.addTo(this.map), this.markers.set(n.id, u);
    }
    if (this.alwaysShowEdges)
      for (const n of this.edges) {
        const h = i.get(n.src), a = i.get(n.dst);
        if (!h || !a)
          continue;
        const [r, c] = h, [l, d] = a, o = n.style?.color || "#999999", u = n.style?.weight || 1, p = Math.max(1, Math.min(5, u)), f = this.Leaflet.polyline(
          [[r, c], [l, d]],
          {
            color: o,
            weight: p,
            opacity: 0.7
          }
        );
        f.on("click", (y) => {
          if (this.onEdgeClick) {
            const m = y.latlng;
            this.onEdgeClick({
              edge: n,
              position: { x: m.lng, y: m.lat },
              originalEvent: y.originalEvent,
              view: "map2d"
            });
          }
        });
        const g = this.polylines.get(n.id);
        if (g && this.map)
          try {
            this.map.hasLayer(g) && this.map.removeLayer(g);
          } catch {
          }
        f.addTo(this.map), this.polylines.set(n.id, f);
      }
    this.fitToNodes();
  }
  /**
   * Render nodes and edges (without fit action)
   */
  renderWithoutFit() {
    if (!this.map || !this.Leaflet)
      return;
    this.markers.forEach((n) => {
      this.map.removeLayer(n);
    }), this.markers.clear(), Array.from(this.polylines.keys()).forEach((n) => {
      const h = this.polylines.get(n);
      if (h && this.map)
        try {
          this.map.hasLayer(h) && this.map.removeLayer(h);
        } catch {
        }
      this.polylines.delete(n);
    }), this.polylines.clear(), this.rectLayer && (this.map.removeLayer(this.rectLayer), this.rectLayer = null);
    const e = this.nodes.filter((n) => {
      if (!n.coordinates || !Array.isArray(n.coordinates) || n.coordinates.length !== 2) return !0;
      const [h, a] = n.coordinates;
      return !Number.isFinite(h) || !Number.isFinite(a);
    }), s = this.nodes.filter((n) => {
      if (!n.coordinates || !Array.isArray(n.coordinates) || n.coordinates.length !== 2) return !1;
      const [h, a] = n.coordinates;
      return Number.isFinite(h) && Number.isFinite(a);
    }), i = /* @__PURE__ */ new Map();
    if (e.length > 0) {
      const c = this.Leaflet.latLngBounds(
        [-50, -32],
        [0, 0]
      );
      this.rectLayer = this.Leaflet.rectangle(c, {
        color: "#666",
        fillColor: "#f0f0f0",
        fillOpacity: 0.1,
        weight: 1,
        dashArray: "5,5"
      }), this.rectLayer.addTo(this.map);
      const l = Math.ceil(Math.sqrt(e.length)), o = 50 / (Math.ceil(e.length / l) + 1), u = 32 / (l + 1);
      e.forEach((p, f) => {
        const g = Math.floor(f / l), y = f % l, m = -50 + (g + 1) * o, b = -32 + (y + 1) * u;
        i.set(p.id, [m, b]);
        const C = this.selectedNodeId === p.id, B = p.style?.color || "#ffffff", v = C ? "#2196f3" : p.style?.borderColor || "#333333", T = `
          <div style="
            width: ${C ? 15 : 10}px;
            height: ${C ? 15 : 10}px;
            background-color: ${B};
            border: 2px solid ${v};
            border-radius: 50%;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          "></div>
        `, A = this.Leaflet.divIcon({
          html: T,
          className: "relatos-node-marker",
          iconSize: [C ? 15 : 10, C ? 15 : 10],
          iconAnchor: [C ? 7.5 : 5, C ? 7.5 : 5]
        }), E = this.Leaflet.marker([m, b], { icon: A });
        E.bindPopup(p.label, {
          closeButton: !1,
          offset: [0, -10]
        }), E.on("click", (S) => {
          if (this.onNodeClick) {
            const I = S.latlng;
            this.onNodeClick({
              node: p,
              position: { x: I.lng, y: I.lat },
              originalEvent: S.originalEvent,
              view: "map2d"
            });
          }
        }), E.addTo(this.map), this.markers.set(p.id, E);
      });
    }
    for (const n of s) {
      const [h, a] = n.coordinates;
      i.set(n.id, [h, a]);
      const r = this.selectedNodeId === n.id, c = n.style?.color || "#ffffff", l = r ? "#2196f3" : n.style?.borderColor || "#333333", d = `
        <div style="
          width: ${r ? 15 : 10}px;
          height: ${r ? 15 : 10}px;
          background-color: ${c};
          border: 2px solid ${l};
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        "></div>
      `, o = this.Leaflet.divIcon({
        html: d,
        className: "relatos-node-marker",
        iconSize: [r ? 15 : 10, r ? 15 : 10],
        iconAnchor: [r ? 7.5 : 5, r ? 7.5 : 5]
      }), u = this.Leaflet.marker([h, a], { icon: o });
      u.bindPopup(n.label, {
        closeButton: !1,
        offset: [0, -10]
      }), u.on("click", (p) => {
        if (this.onNodeClick) {
          const f = p.latlng;
          this.onNodeClick({
            node: n,
            position: { x: f.lng, y: f.lat },
            originalEvent: p.originalEvent
          });
        }
      }), u.addTo(this.map), this.markers.set(n.id, u);
    }
    if (this.alwaysShowEdges)
      for (const n of this.edges) {
        const h = i.get(n.src), a = i.get(n.dst);
        if (!h || !a)
          continue;
        const [r, c] = h, [l, d] = a, o = n.style?.color || "#999999", u = n.style?.weight || 1, p = Math.max(1, Math.min(5, u)), f = this.Leaflet.polyline(
          [[r, c], [l, d]],
          {
            color: o,
            weight: p,
            opacity: 0.7
          }
        );
        f.on("click", (y) => {
          if (this.onEdgeClick) {
            const m = y.latlng;
            this.onEdgeClick({
              edge: n,
              position: { x: m.lng, y: m.lat },
              originalEvent: y.originalEvent,
              view: "map2d"
            });
          }
        });
        const g = this.polylines.get(n.id);
        if (g && this.map)
          try {
            this.map.hasLayer(g) && this.map.removeLayer(g);
          } catch {
          }
        f.addTo(this.map), this.polylines.set(n.id, f);
      }
  }
  // Control buttons are now managed by ViewContainer - no need to create individual buttons
  /**
   * Switch between customTileUrls in order
   */
  switchTileType() {
    if (this.customTileUrls.length > 1) {
      this.currentCustomTileIndex = (this.currentCustomTileIndex + 1) % this.customTileUrls.length, this.setupBaseTileLayer(), this.updateTileTypeButton();
      return;
    }
  }
  /**
   * Update tile type button display
   */
  updateTileTypeButton() {
    if (this.tileTypeButton) {
      if (this.customTileUrls.length > 1) {
        this.tileTypeButton.style.display = "flex";
        const t = this.currentCustomTileIndex + 1, e = this.customTileUrls.length;
        this.tileTypeButton.setAttribute("title", `Custom tile ${t}/${e}`), this.tileTypeButton.style.backgroundColor = "#fff", this.tileTypeButton.style.borderColor = "#ccc", this.tileTypeButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.tileTypeButton.style.transform = "translateY(0)";
        return;
      }
      if (this.customTileUrls.length > 0) {
        this.tileTypeButton.style.display = "none";
        return;
      }
      this.tileTypeButton.style.display = "none";
    }
  }
  /**
   * Update edge display ON/OFF button display
   */
  updateAlwaysShowEdgesButton() {
    this.alwaysShowEdgesButton && (this.alwaysShowEdges ? (this.alwaysShowEdgesButton.setAttribute("aria-label", "Hide edges"), this.alwaysShowEdgesButton.setAttribute("title", "Hide edges"), this.alwaysShowEdgesButton.style.backgroundColor = "#fff9c4", this.alwaysShowEdgesButton.style.color = "#000000", this.alwaysShowEdgesButton.style.borderColor = "#999", this.alwaysShowEdgesButton.style.boxShadow = "inset 0 2px 4px rgba(0, 0, 0, 0.2)", this.alwaysShowEdgesButton.style.transform = "translateY(1px)") : (this.alwaysShowEdgesButton.setAttribute("aria-label", "Show edges"), this.alwaysShowEdgesButton.setAttribute("title", "Show edges"), this.alwaysShowEdgesButton.style.backgroundColor = "#fff", this.alwaysShowEdgesButton.style.color = "#000000", this.alwaysShowEdgesButton.style.borderColor = "#ccc", this.alwaysShowEdgesButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.alwaysShowEdgesButton.style.transform = "translateY(0)"));
  }
  /**
   * Get moon phase (0-7)
   * 0: New moon, 4: Full moon
   */
  /**
   * Calculate moon phase (0 to 1, where 0 = new moon, 0.5 = full moon)
   */
  getMoonIllumination(t) {
    const s = this.julian(t) - 2451545, i = (357.5291 + 0.98560028 * s) * Math.PI / 180, n = (1.9148 * Math.sin(i) + 0.02 * Math.sin(2 * i) + 3e-4 * Math.sin(3 * i)) * Math.PI / 180, h = 102.9372 * Math.PI / 180, a = i + n + h + Math.PI, r = 23.4397 * Math.PI / 180, c = Math.atan2(
      Math.sin(a) * Math.cos(r) - Math.tan(0) * Math.sin(r),
      Math.cos(a)
    ), l = Math.asin(
      Math.sin(0) * Math.cos(r) + Math.cos(0) * Math.sin(r) * Math.sin(a)
    ), d = (218.316 + 13.176396 * s) * Math.PI / 180, o = (134.963 + 13.064993 * s) * Math.PI / 180, u = (93.272 + 13.22935 * s) * Math.PI / 180, p = d + 6.289 * Math.sin(o) * Math.PI / 180, f = 5.128 * Math.sin(u) * Math.PI / 180, g = Math.atan2(
      Math.sin(p) * Math.cos(r) - Math.tan(f) * Math.sin(r),
      Math.cos(p)
    ), y = Math.asin(
      Math.sin(f) * Math.cos(r) + Math.cos(f) * Math.sin(r) * Math.sin(p)
    ), m = 385001 - 20905 * Math.cos(o), b = 149598e3, C = Math.acos(
      Math.sin(l) * Math.sin(y) + Math.cos(l) * Math.cos(y) * Math.cos(c - g)
    ), B = Math.atan2(
      b * Math.sin(C),
      m - b * Math.cos(C)
    ), v = Math.atan2(
      Math.cos(l) * Math.sin(c - g),
      Math.sin(l) * Math.cos(y) - Math.cos(l) * Math.sin(y) * Math.cos(c - g)
    );
    return {
      fraction: (1 + Math.cos(B)) / 2,
      phase: 0.5 + 0.5 * B * (v < 0 ? -1 : 1) / Math.PI,
      angle: v
    };
  }
  getMoonPhase(t) {
    const s = this.getMoonIllumination(t).phase;
    return Math.floor(s * 8) % 8;
  }
  /**
   * Get moon phase emoji or SVG
   */
  getMoonPhaseIcon(t, e = 16) {
    const i = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"][t] || "🌑";
    return `<span style="font-size: ${e}px; line-height: 1;">${i}</span>`;
  }
  /**
   * Calculate moon sub-lunar point (latitude and longitude where moon is directly overhead)
   * Returns latitude and longitude of the point on Earth directly below the moon
   * 
   * Calculation method:
   * 1. Calculate moon's right ascension (RA) and declination (DEC) from date
   * 2. Calculate Greenwich Mean Sidereal Time (GMST)
   * 3. Sub-lunar point:
   *    - Latitude = DEC (moon's declination)
   *    - Longitude = RA - GMST (moon's right ascension minus Greenwich sidereal time)
   * 
   */
  calculateMoonPosition(t, e, s) {
    try {
      const i = this.julian(t), n = i - 2451545, h = (218.316 + 13.176396 * n) * Math.PI / 180, a = (134.963 + 13.064993 * n) * Math.PI / 180, r = (93.272 + 13.22935 * n) * Math.PI / 180, c = h + 6.289 * Math.sin(a) * Math.PI / 180, l = 5.128 * Math.sin(r) * Math.PI / 180, d = 23.4397 * Math.PI / 180, o = Math.atan2(
        Math.sin(c) * Math.cos(d) - Math.tan(l) * Math.sin(d),
        Math.cos(c)
      ), u = Math.asin(
        Math.sin(l) * Math.cos(d) + Math.cos(l) * Math.sin(d) * Math.sin(c)
      ), f = this.GMST(i) * Math.PI / 12, g = u;
      let y = o - f;
      const m = g * 180 / Math.PI;
      let b = y * 180 / Math.PI;
      return b = b % 360, b > 180 ? b -= 360 : b < -180 && (b += 360), [m, b];
    } catch {
      return null;
    }
  }
  /**
   * Update moon marker on map
   */
  updateMoonMarker() {
    if (!this.map || !this.Leaflet || (this.moonMarker && (this.map.removeLayer(this.moonMarker), this.moonMarker = null), !this.moonEnabled))
      return;
    const t = this.timeISO ? new Date(this.timeISO) : /* @__PURE__ */ new Date();
    let e = this.calculateMoonPosition(t, 0, 0);
    if (!e)
      return;
    const s = this.getMoonPhase(t), i = this.getMoonPhaseIcon(s, 24), n = this.Leaflet.divIcon({
      html: i,
      className: "relatos-moon-marker",
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    });
    this.moonMarker = this.Leaflet.marker([e[0], e[1]], { icon: n }), this.moonMarker.addTo(this.map);
  }
  /**
   * Create moon toggle button
   */
  createMoonToggleButton() {
    this.moonToggleButton = document.createElement("button"), this.moonToggleButton.setAttribute("aria-label", "Toggle moon"), this.moonToggleButton.setAttribute("title", "Toggle moon"), this.moonToggleButton.style.padding = "6px", this.moonToggleButton.style.border = "1px solid #ccc", this.moonToggleButton.style.borderRadius = "4px", this.moonToggleButton.style.backgroundColor = "#fff", this.moonToggleButton.style.cursor = "pointer", this.moonToggleButton.style.fontSize = "16px", this.moonToggleButton.style.width = "32px", this.moonToggleButton.style.height = "32px", this.moonToggleButton.style.display = "flex", this.moonToggleButton.style.alignItems = "center", this.moonToggleButton.style.justifyContent = "center", this.moonToggleButton.style.pointerEvents = "auto", this.moonToggleButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.moonToggleButton.style.transition = "0.2s", this.moonToggleButton.addEventListener("click", () => {
      this.moonEnabled = !this.moonEnabled, this.updateMoonButton(), this.updateMoonMarker();
    });
  }
  /**
   * Get moon enabled state (for ViewContainer)
   */
  isMoonEnabled() {
    return this.moonEnabled;
  }
  /**
   * Toggle moon display (for ViewContainer)
   */
  toggleMoon() {
    this.moonEnabled = !this.moonEnabled, this.updateMoonMarker();
  }
  /**
   * Get time ISO string (for ViewContainer)
   */
  getTime() {
    return this.timeISO;
  }
  /**
   * Update moon button appearance (for ViewContainer)
   * This method is kept for internal use but ViewContainer will call getMoonPhase/getMoonPhaseIcon directly
   */
  updateMoonButton() {
  }
  /**
   * Update lighting button appearance
   */
  updateLightingButton() {
    if (!this.lightingToggleButton)
      return;
    const t = this.isLightingEnabled();
    this.lightingToggleButton.innerHTML = jt("icon-sun", 16), t ? (this.lightingToggleButton.style.backgroundColor = "#fff9c4", this.lightingToggleButton.style.boxShadow = "inset 0 2px 4px rgba(0, 0, 0, 0.2)", this.lightingToggleButton.style.transform = "translateY(1px)") : (this.lightingToggleButton.style.backgroundColor = "#fff", this.lightingToggleButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.lightingToggleButton.style.transform = "translateY(0)"), this.lightingToggleButton.style.color = "#333";
  }
  /**
   * Fit and center view (for View interface)
   */
  fitAndCenter() {
    this.fitToNodes();
  }
  /**
   * Adjust camera to show all nodes
   */
  fitToNodes() {
    if (!this.map || !this.Leaflet || this.nodes.length === 0)
      return;
    const t = this.nodes.filter((l) => {
      if (!l.coordinates || !Array.isArray(l.coordinates) || l.coordinates.length !== 2) return !1;
      const [d, o] = l.coordinates;
      return Number.isFinite(d) && Number.isFinite(o);
    }), e = this.nodes.filter((l) => {
      if (!l.coordinates || !Array.isArray(l.coordinates) || l.coordinates.length !== 2) return !0;
      const [d, o] = l.coordinates;
      return !Number.isFinite(d) || !Number.isFinite(o);
    }), s = [], i = [];
    if (t.forEach((l) => {
      if (l.coordinates && l.coordinates.length === 2) {
        const [d, o] = l.coordinates;
        Number.isFinite(d) && Number.isFinite(o) && (s.push(d), i.push(o));
      }
    }), e.length > 0) {
      const p = Math.ceil(Math.sqrt(e.length)), g = 50 / (Math.ceil(e.length / p) + 1), y = 32 / (p + 1);
      e.forEach((m, b) => {
        const C = Math.floor(b / p), B = b % p, v = -50 + (C + 1) * g, T = -32 + (B + 1) * y;
        s.push(v), i.push(T);
      });
    }
    if (s.length === 0)
      return;
    const n = Math.min(...s), h = Math.max(...s), a = Math.min(...i), r = Math.max(...i), c = this.Leaflet.latLngBounds(
      [n, a],
      [h, r]
    );
    this.map.flyToBounds(c, {
      padding: [20, 20],
      maxZoom: 5,
      // Limit max zoom level to 5
      duration: 1,
      // 1 second animation
      easeLinearity: 0.25
      // Easing linearity (0.25 is recommended)
    });
  }
  /**
   * Show view
   */
  show() {
    this.container.style.display = "block", this.map ? this.map.invalidateSize() : this.leafletLoader && this.initializeLeaflet().catch(() => {
    });
  }
  /**
   * Hide view
   */
  hide() {
    this.container.style.display = "none";
  }
  /**
   * Resize view
   */
  resize() {
    this.map && this.map.invalidateSize();
  }
  /**
   * Get current view as SVG string. Map2D has no native SVG; returns null.
   * Use exportViewToImage for PNG/WebP download of the Leaflet map.
   */
  getViewAsSvg() {
    return null;
  }
  /**
   * Export current Leaflet map as image blob (PNG or WebP).
   * Captures the map container using html2canvas.
   */
  async exportViewToImage(t, e) {
    if (!this.container || !this.map) return null;
    try {
      const s = (await import("./html2canvas.esm-BWVIUcAF.mjs")).default, i = await s(this.container, {
        useCORS: !0,
        allowTaint: !1,
        logging: !1,
        scale: window.devicePixelRatio ?? 1
      }), n = e?.quality ?? 0.92;
      return new Promise((h) => {
        i.toBlob(
          (a) => h(a ?? null),
          t === "png" ? "image/png" : "image/webp",
          n
        );
      });
    } catch {
      return null;
    }
  }
  /**
   * Destroy view
   */
  destroy() {
    this.map && (this.map.remove(), this.map = null), this.markers.clear(), this.polylines.clear();
  }
  /**
   * Check if editable (Map2D is not editable)
   */
  isEditable() {
    return !1;
  }
}
const Kt = 120, Zt = 60, Jt = 30, Qt = 50, te = 25;
function it(w) {
  const t = w.style || {};
  return {
    width: t.width ?? Kt,
    height: t.height ?? Zt
  };
}
function Bt(w, t) {
  if (!w.position || !t.position)
    return { side: "right", t: 0.5 };
  const { width: e, height: s } = it(w), i = t.position.x - w.position.x, n = t.position.y - w.position.y, h = Math.atan2(n, i), a = h < 0 ? h + 2 * Math.PI : h;
  let r, c;
  return a >= 7 * Math.PI / 4 || a < Math.PI / 4 ? (r = "right", c = 0.5 + n / s * 0.5) : a >= Math.PI / 4 && a < 3 * Math.PI / 4 ? (r = "bottom", c = 0.5 + i / e * 0.5) : a >= 3 * Math.PI / 4 && a < 5 * Math.PI / 4 ? (r = "left", c = 0.5 - n / s * 0.5) : (r = "top", c = 0.5 - i / e * 0.5), c = Math.max(0, Math.min(1, c)), { side: r, t: c };
}
function vt(w, t, e, s) {
  if (!w.position)
    return { x: 0, y: 0 };
  const i = w.position.x, n = w.position.y;
  let h, a;
  switch (t.side) {
    case "top":
      h = i - e / 2 + e * t.t, a = n - s / 2;
      break;
    case "right":
      h = i + e / 2, a = n - s / 2 + s * t.t;
      break;
    case "bottom":
      h = i - e / 2 + e * t.t, a = n + s / 2;
      break;
    case "left":
      h = i - e / 2, a = n - s / 2 + s * t.t;
      break;
    default:
      h = i, a = n;
  }
  return { x: h, y: a };
}
function ee(w, t) {
  const e = t.find((d) => d.id === w.src), s = t.find((d) => d.id === w.dst);
  if (!e?.position || !s?.position)
    return [];
  const i = w.srcAnchor ?? Bt(e, s), n = w.dstAnchor ?? Bt(s, e), h = it(e), a = it(s), r = vt(e, i, h.width, h.height), c = vt(s, n, a.width, a.height), l = [r];
  return w.bends?.length && l.push(...w.bends), l.push(c), l;
}
function ie(w, t, e, s) {
  const i = e.some((u) => u.parentId === w.id), n = /* @__PURE__ */ new Set();
  if (i) {
    const u = e.filter((f) => f.parentId === w.id), p = (f) => {
      f.nodeIds.forEach((g) => n.add(g)), e.filter((g) => g.parentId === f.id).forEach(p);
    };
    u.forEach(p);
  }
  let h = 1 / 0, a = -1 / 0, r = 1 / 0, c = -1 / 0, l = !1;
  for (const u of w.nodeIds) {
    if (i && n.has(u)) continue;
    const p = t.find((b) => b.id === u);
    if (!p?.position) continue;
    l = !0;
    const { width: f, height: g } = it(p), y = p.position.x - f / 2, m = p.position.y - g / 2;
    h = Math.min(h, y), a = Math.max(a, y + f), r = Math.min(r, m), c = Math.max(c, m + g);
  }
  if (i) {
    const u = e.filter((p) => p.parentId === w.id);
    for (const p of u) {
      const f = s(p);
      f && (l = !0, h = Math.min(h, f.position.x), a = Math.max(a, f.position.x + f.size.width), r = Math.min(r, f.position.y), c = Math.max(c, f.position.y + f.size.height));
    }
  }
  if (!l) return null;
  const d = i ? Qt : Jt, o = d + te;
  return {
    minX: h - d,
    maxX: a + d,
    minY: r - o,
    maxY: c + d
  };
}
function At(w, t, e, s) {
  if (w.layout)
    return w.layout;
  const i = ie(
    w,
    t,
    e,
    (n) => At(n, t, e)
  );
  return i ? {
    position: { x: i.minX, y: i.minY },
    size: {
      width: i.maxX - i.minX,
      height: i.maxY - i.minY
    }
  } : null;
}
function se(w, t, e = []) {
  const s = w, i = t, n = [];
  let h = 1 / 0, a = -1 / 0, r = 1 / 0, c = -1 / 0;
  for (const p of s) {
    if (!p.position) continue;
    const { width: f, height: g } = it(p), y = p.position.x - f / 2, m = p.position.y - g / 2, b = p.style || {};
    n.push({
      id: p.id,
      label: p.label,
      left: y,
      top: m,
      width: f,
      height: g,
      fillColor: b.color,
      strokeColor: b.borderColor
    }), h = Math.min(h, y), a = Math.max(a, y + f), r = Math.min(r, m), c = Math.max(c, m + g);
  }
  const l = (p) => At(p, s, e), d = [];
  for (const p of e) {
    const f = l(p);
    if (!f) continue;
    const g = p.style;
    d.push({
      id: p.id,
      label: p.label,
      left: f.position.x,
      top: f.position.y,
      width: f.size.width,
      height: f.size.height,
      nodeIds: [...p.nodeIds],
      childGroupIds: e.filter((y) => y.parentId === p.id).map((y) => y.id) || void 0,
      fillColor: g?.color,
      strokeColor: g?.borderColor,
      strokeWidth: g?.borderWidth,
      strokeDash: g?.borderDash
    }), h = Math.min(h, f.position.x), a = Math.max(a, f.position.x + f.size.width), r = Math.min(r, f.position.y), c = Math.max(c, f.position.y + f.size.height);
  }
  const o = [];
  for (const p of i) {
    const f = ee(p, s);
    if (f.length < 2) continue;
    const g = p.style || {};
    o.push({
      id: p.id,
      srcId: p.src,
      dstId: p.dst,
      points: f,
      label: g.label ?? p.relType,
      srcLabel: g.srcLabel,
      dstLabel: g.dstLabel,
      color: g.color,
      weight: g.weight
    });
  }
  const u = n.length > 0 || d.length > 0 ? {
    left: h,
    top: r,
    width: a - h,
    height: c - r
  } : void 0;
  return {
    nodes: n,
    edges: o,
    groups: d,
    bounds: u
  };
}
const oe = 'The "data" option has been removed. Use initialRelat (relat text from importRelat/exportRelat) instead.';
function ne(w, t = {}) {
  if (t.data !== void 0 && t.data !== null)
    throw new Error(oe);
  Q();
  let e;
  if (typeof w == "string") {
    const o = document.querySelector(w);
    if (!o || !(o instanceof HTMLElement))
      throw new Error(`Container element not found: ${w}`);
    e = o;
  } else
    e = w;
  const s = t.enabledViews || ["graph", "map2d", "globe3d"], i = t.initialView || (s.includes("map2d") ? "map2d" : s[0]), n = t.graph?.mode || "view", h = t.graph?.editable || !1, a = t.tileServers, r = new Wt(e, s, {
    showExportButton: t.showExportButton
  });
  t.time && r.setTime(t.time), typeof t.enableLighting == "boolean" && r.setLightingEnabled(t.enableLighting), t.tables && r.setTableOptions(t.tables), t.events?.onNodeClick && r.setOnNodeClickCallback(t.events.onNodeClick);
  const c = t.events?.onNodeClick ? (o) => {
    t.events.onNodeClick(o), r.highlightNodeRow(o.node.id);
  } : void 0, l = (o) => {
    t.events?.onEdgeClick && t.events.onEdgeClick(o), r.highlightEdgeRow(o.edge.id);
  }, d = (o) => {
    t.events?.onGroupClick && t.events.onGroupClick(o), r.highlightGroupRow(o.group.id);
  };
  if (s.includes("graph")) {
    const o = document.createElement("div");
    o.style.width = "100%", o.style.height = "100%", r.getViewContainer().appendChild(o);
    const u = new gt(
      o,
      c || t.events?.onNodeClick,
      t.events?.onSave,
      h,
      l,
      d
    );
    u.setModeChangeCallback(() => {
      r.updateEditToggleButton(), r.updateGraphButtons();
    }), u.setAlwaysShowEdgesChangeCallback((p) => {
      r.setAlwaysShowEdges(p);
    }), u.setGraphButtonsUpdateCallback(() => {
      r.updateGraphButtons();
    }), u.setMode(n), r.registerView("graph", u);
  }
  if (s.includes("map2d") && t.loaders?.leaflet) {
    const o = document.createElement("div");
    o.style.width = "100%", o.style.height = "100%", r.getViewContainer().appendChild(o);
    const u = new qt(
      o,
      c || t.events?.onNodeClick,
      t.loaders.leaflet,
      a,
      t.map2d,
      l
    );
    u.setAlwaysShowEdgesChangeCallback((p) => {
      r.setAlwaysShowEdges(p);
    }), u.setLightingChangeCallback((p) => {
      r.setLightingEnabled(p);
    }), r.registerView("map2d", u);
  }
  if (s.includes("globe3d") && t.loaders?.cesium)
    try {
      const o = document.createElement("div");
      o.style.width = "100%", o.style.height = "100%", r.getViewContainer().appendChild(o);
      const u = new Vt(
        o,
        c || t.events?.onNodeClick,
        t.loaders.cesium,
        t.globe3d ? {
          customTileUrl: t.globe3d.customTileUrl,
          customTileUrls: t.globe3d.customTileUrls
        } : void 0,
        a,
        l
      );
      u.setAlwaysShowEdgesChangeCallback((p) => {
        r.setAlwaysShowEdges(p);
      }), u.setLightingChangeCallback((p) => {
        r.setLightingEnabled(p);
      }), r.registerView("globe3d", u);
    } catch {
    }
  if (r.setInitialView(i), t.initialRelat) {
    const o = t.onWarnings ? { onWarnings: t.onWarnings } : void 0, u = Et(t.initialRelat, o), p = r.getView("graph");
    p && p.setData(u.nodes, u.edges, u.groups);
    const f = r.getView("map2d");
    f && f.setData(u.nodes, u.edges);
    const g = r.getView("globe3d");
    g && g.setData(u.nodes, u.edges), r.setData(u.nodes, u.edges, u.groups);
  }
  return {
    setView(o) {
      r.switchView(o);
    },
    getView() {
      const o = r.getCurrentView();
      if (!o)
        throw new Error("No view is currently active");
      return o;
    },
    setMode(o) {
      const u = r.getView("graph");
      u && u.setMode(o);
    },
    getMode() {
      const o = r.getView("graph");
      return o ? o.getMode() : null;
    },
    resize() {
      r.resize();
    },
    destroy() {
      r.destroy();
    },
    selectNode(o) {
      const u = r.getView("graph");
      u && u.selectNode && u.selectNode(o);
      const p = r.getView("map2d");
      p && p.selectNode && p.selectNode(o);
      const f = r.getView("globe3d");
      f && f.selectNode && f.selectNode(o);
    },
    setTime(o) {
      r.setTime(o);
    },
    setLighting(o) {
      r.setLightingEnabled(o);
    },
    importRelat(o, u) {
      const p = Et(o, u), f = r.getView("graph");
      f && f.setData(p.nodes, p.edges, p.groups);
      const g = r.getView("map2d");
      g && g.setData(p.nodes, p.edges);
      const y = r.getView("globe3d");
      y && y.setData(p.nodes, p.edges), r.setData(p.nodes, p.edges, p.groups);
    },
    exportRelat(o) {
      const { nodes: u, edges: p, groups: f } = r.getData();
      return ut(u, p, f, o);
    },
    getShapeDataForOffice() {
      const { nodes: o, edges: u, groups: p } = r.getData();
      return se(o, u, p);
    },
    getViewAsSvg() {
      const o = r.getCurrentView();
      return o ? r.getView(o)?.getViewAsSvg?.() ?? null : null;
    },
    async exportViewToImage(o, u) {
      const p = r.getCurrentView();
      return p ? r.getView(p)?.exportViewToImage?.(o, u) ?? Promise.resolve(null) : null;
    }
  };
}
export {
  ne as createRelatosViewer,
  ut as exportRelat,
  se as getShapeDataForOffice,
  Et as importRelat,
  Rt as irToRelatosData,
  Pt as parseRelat
};
