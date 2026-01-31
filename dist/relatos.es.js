const jn = `<!-- relatos/src/assets/icons/icons.svg -->
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
       - For PlantUML export functionality
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
let Se = !1;
const di = "relatos-icons-sprite";
function Rt() {
  if (Se)
    return;
  if (document.getElementById(di)) {
    Se = !0;
    return;
  }
  const i = document.createElement("div");
  i.id = di, i.style.display = "none", i.innerHTML = jn, document.body.appendChild(i), Se = !0;
}
const Zn = 4, ci = 0, ui = 1, Kn = 2;
function Pt(i) {
  let e = i.length;
  for (; --e >= 0; )
    i[e] = 0;
}
const qn = 0, on = 1, Jn = 2, Qn = 3, ts = 258, ei = 29, ie = 256, Vt = ie + 1 + ei, Mt = 30, ii = 19, rn = 2 * Vt + 1, Et = 15, Be = 16, es = 7, ni = 256, an = 16, ln = 17, hn = 18, Xe = (
  /* extra bits for each length code */
  new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0])
), me = (
  /* extra bits for each distance code */
  new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13])
), is = (
  /* extra bits for each bit length code */
  new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7])
), dn = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), ns = 512, ht = new Array((Vt + 2) * 2);
Pt(ht);
const Ft = new Array(Mt * 2);
Pt(Ft);
const jt = new Array(ns);
Pt(jt);
const Zt = new Array(ts - Qn + 1);
Pt(Zt);
const si = new Array(ei);
Pt(si);
const we = new Array(Mt);
Pt(we);
function ke(i, e, t, n, s) {
  this.static_tree = i, this.extra_bits = e, this.extra_base = t, this.elems = n, this.max_length = s, this.has_stree = i && i.length;
}
let cn, un, gn;
function Ie(i, e) {
  this.dyn_tree = i, this.max_code = 0, this.stat_desc = e;
}
const fn = (i) => i < 256 ? jt[i] : jt[256 + (i >>> 7)], Kt = (i, e) => {
  i.pending_buf[i.pending++] = e & 255, i.pending_buf[i.pending++] = e >>> 8 & 255;
}, W = (i, e, t) => {
  i.bi_valid > Be - t ? (i.bi_buf |= e << i.bi_valid & 65535, Kt(i, i.bi_buf), i.bi_buf = e >> Be - i.bi_valid, i.bi_valid += t - Be) : (i.bi_buf |= e << i.bi_valid & 65535, i.bi_valid += t);
}, nt = (i, e, t) => {
  W(
    i,
    t[e * 2],
    t[e * 2 + 1]
    /*.Len*/
  );
}, pn = (i, e) => {
  let t = 0;
  do
    t |= i & 1, i >>>= 1, t <<= 1;
  while (--e > 0);
  return t >>> 1;
}, ss = (i) => {
  i.bi_valid === 16 ? (Kt(i, i.bi_buf), i.bi_buf = 0, i.bi_valid = 0) : i.bi_valid >= 8 && (i.pending_buf[i.pending++] = i.bi_buf & 255, i.bi_buf >>= 8, i.bi_valid -= 8);
}, os = (i, e) => {
  const t = e.dyn_tree, n = e.max_code, s = e.stat_desc.static_tree, o = e.stat_desc.has_stree, d = e.stat_desc.extra_bits, l = e.stat_desc.extra_base, a = e.stat_desc.max_length;
  let h, c, f, r, u, p, y = 0;
  for (r = 0; r <= Et; r++)
    i.bl_count[r] = 0;
  for (t[i.heap[i.heap_max] * 2 + 1] = 0, h = i.heap_max + 1; h < rn; h++)
    c = i.heap[h], r = t[t[c * 2 + 1] * 2 + 1] + 1, r > a && (r = a, y++), t[c * 2 + 1] = r, !(c > n) && (i.bl_count[r]++, u = 0, c >= l && (u = d[c - l]), p = t[c * 2], i.opt_len += p * (r + u), o && (i.static_len += p * (s[c * 2 + 1] + u)));
  if (y !== 0) {
    do {
      for (r = a - 1; i.bl_count[r] === 0; )
        r--;
      i.bl_count[r]--, i.bl_count[r + 1] += 2, i.bl_count[a]--, y -= 2;
    } while (y > 0);
    for (r = a; r !== 0; r--)
      for (c = i.bl_count[r]; c !== 0; )
        f = i.heap[--h], !(f > n) && (t[f * 2 + 1] !== r && (i.opt_len += (r - t[f * 2 + 1]) * t[f * 2], t[f * 2 + 1] = r), c--);
  }
}, yn = (i, e, t) => {
  const n = new Array(Et + 1);
  let s = 0, o, d;
  for (o = 1; o <= Et; o++)
    s = s + t[o - 1] << 1, n[o] = s;
  for (d = 0; d <= e; d++) {
    let l = i[d * 2 + 1];
    l !== 0 && (i[d * 2] = pn(n[l]++, l));
  }
}, rs = () => {
  let i, e, t, n, s;
  const o = new Array(Et + 1);
  for (t = 0, n = 0; n < ei - 1; n++)
    for (si[n] = t, i = 0; i < 1 << Xe[n]; i++)
      Zt[t++] = n;
  for (Zt[t - 1] = n, s = 0, n = 0; n < 16; n++)
    for (we[n] = s, i = 0; i < 1 << me[n]; i++)
      jt[s++] = n;
  for (s >>= 7; n < Mt; n++)
    for (we[n] = s << 7, i = 0; i < 1 << me[n] - 7; i++)
      jt[256 + s++] = n;
  for (e = 0; e <= Et; e++)
    o[e] = 0;
  for (i = 0; i <= 143; )
    ht[i * 2 + 1] = 8, i++, o[8]++;
  for (; i <= 255; )
    ht[i * 2 + 1] = 9, i++, o[9]++;
  for (; i <= 279; )
    ht[i * 2 + 1] = 7, i++, o[7]++;
  for (; i <= 287; )
    ht[i * 2 + 1] = 8, i++, o[8]++;
  for (yn(ht, Vt + 1, o), i = 0; i < Mt; i++)
    Ft[i * 2 + 1] = 5, Ft[i * 2] = pn(i, 5);
  cn = new ke(ht, Xe, ie + 1, Vt, Et), un = new ke(Ft, me, 0, Mt, Et), gn = new ke(new Array(0), is, 0, ii, es);
}, mn = (i) => {
  let e;
  for (e = 0; e < Vt; e++)
    i.dyn_ltree[e * 2] = 0;
  for (e = 0; e < Mt; e++)
    i.dyn_dtree[e * 2] = 0;
  for (e = 0; e < ii; e++)
    i.bl_tree[e * 2] = 0;
  i.dyn_ltree[ni * 2] = 1, i.opt_len = i.static_len = 0, i.sym_next = i.matches = 0;
}, wn = (i) => {
  i.bi_valid > 8 ? Kt(i, i.bi_buf) : i.bi_valid > 0 && (i.pending_buf[i.pending++] = i.bi_buf), i.bi_buf = 0, i.bi_valid = 0;
}, gi = (i, e, t, n) => {
  const s = e * 2, o = t * 2;
  return i[s] < i[o] || i[s] === i[o] && n[e] <= n[t];
}, Le = (i, e, t) => {
  const n = i.heap[t];
  let s = t << 1;
  for (; s <= i.heap_len && (s < i.heap_len && gi(e, i.heap[s + 1], i.heap[s], i.depth) && s++, !gi(e, n, i.heap[s], i.depth)); )
    i.heap[t] = i.heap[s], t = s, s <<= 1;
  i.heap[t] = n;
}, fi = (i, e, t) => {
  let n, s, o = 0, d, l;
  if (i.sym_next !== 0)
    do
      n = i.pending_buf[i.sym_buf + o++] & 255, n += (i.pending_buf[i.sym_buf + o++] & 255) << 8, s = i.pending_buf[i.sym_buf + o++], n === 0 ? nt(i, s, e) : (d = Zt[s], nt(i, d + ie + 1, e), l = Xe[d], l !== 0 && (s -= si[d], W(i, s, l)), n--, d = fn(n), nt(i, d, t), l = me[d], l !== 0 && (n -= we[d], W(i, n, l)));
    while (o < i.sym_next);
  nt(i, ni, e);
}, Fe = (i, e) => {
  const t = e.dyn_tree, n = e.stat_desc.static_tree, s = e.stat_desc.has_stree, o = e.stat_desc.elems;
  let d, l, a = -1, h;
  for (i.heap_len = 0, i.heap_max = rn, d = 0; d < o; d++)
    t[d * 2] !== 0 ? (i.heap[++i.heap_len] = a = d, i.depth[d] = 0) : t[d * 2 + 1] = 0;
  for (; i.heap_len < 2; )
    h = i.heap[++i.heap_len] = a < 2 ? ++a : 0, t[h * 2] = 1, i.depth[h] = 0, i.opt_len--, s && (i.static_len -= n[h * 2 + 1]);
  for (e.max_code = a, d = i.heap_len >> 1; d >= 1; d--)
    Le(i, t, d);
  h = o;
  do
    d = i.heap[
      1
      /*SMALLEST*/
    ], i.heap[
      1
      /*SMALLEST*/
    ] = i.heap[i.heap_len--], Le(
      i,
      t,
      1
      /*SMALLEST*/
    ), l = i.heap[
      1
      /*SMALLEST*/
    ], i.heap[--i.heap_max] = d, i.heap[--i.heap_max] = l, t[h * 2] = t[d * 2] + t[l * 2], i.depth[h] = (i.depth[d] >= i.depth[l] ? i.depth[d] : i.depth[l]) + 1, t[d * 2 + 1] = t[l * 2 + 1] = h, i.heap[
      1
      /*SMALLEST*/
    ] = h++, Le(
      i,
      t,
      1
      /*SMALLEST*/
    );
  while (i.heap_len >= 2);
  i.heap[--i.heap_max] = i.heap[
    1
    /*SMALLEST*/
  ], os(i, e), yn(t, a, i.bl_count);
}, pi = (i, e, t) => {
  let n, s = -1, o, d = e[1], l = 0, a = 7, h = 4;
  for (d === 0 && (a = 138, h = 3), e[(t + 1) * 2 + 1] = 65535, n = 0; n <= t; n++)
    o = d, d = e[(n + 1) * 2 + 1], !(++l < a && o === d) && (l < h ? i.bl_tree[o * 2] += l : o !== 0 ? (o !== s && i.bl_tree[o * 2]++, i.bl_tree[an * 2]++) : l <= 10 ? i.bl_tree[ln * 2]++ : i.bl_tree[hn * 2]++, l = 0, s = o, d === 0 ? (a = 138, h = 3) : o === d ? (a = 6, h = 3) : (a = 7, h = 4));
}, yi = (i, e, t) => {
  let n, s = -1, o, d = e[1], l = 0, a = 7, h = 4;
  for (d === 0 && (a = 138, h = 3), n = 0; n <= t; n++)
    if (o = d, d = e[(n + 1) * 2 + 1], !(++l < a && o === d)) {
      if (l < h)
        do
          nt(i, o, i.bl_tree);
        while (--l !== 0);
      else o !== 0 ? (o !== s && (nt(i, o, i.bl_tree), l--), nt(i, an, i.bl_tree), W(i, l - 3, 2)) : l <= 10 ? (nt(i, ln, i.bl_tree), W(i, l - 3, 3)) : (nt(i, hn, i.bl_tree), W(i, l - 11, 7));
      l = 0, s = o, d === 0 ? (a = 138, h = 3) : o === d ? (a = 6, h = 3) : (a = 7, h = 4);
    }
}, as = (i) => {
  let e;
  for (pi(i, i.dyn_ltree, i.l_desc.max_code), pi(i, i.dyn_dtree, i.d_desc.max_code), Fe(i, i.bl_desc), e = ii - 1; e >= 3 && i.bl_tree[dn[e] * 2 + 1] === 0; e--)
    ;
  return i.opt_len += 3 * (e + 1) + 5 + 5 + 4, e;
}, ls = (i, e, t, n) => {
  let s;
  for (W(i, e - 257, 5), W(i, t - 1, 5), W(i, n - 4, 4), s = 0; s < n; s++)
    W(i, i.bl_tree[dn[s] * 2 + 1], 3);
  yi(i, i.dyn_ltree, e - 1), yi(i, i.dyn_dtree, t - 1);
}, hs = (i) => {
  let e = 4093624447, t;
  for (t = 0; t <= 31; t++, e >>>= 1)
    if (e & 1 && i.dyn_ltree[t * 2] !== 0)
      return ci;
  if (i.dyn_ltree[18] !== 0 || i.dyn_ltree[20] !== 0 || i.dyn_ltree[26] !== 0)
    return ui;
  for (t = 32; t < ie; t++)
    if (i.dyn_ltree[t * 2] !== 0)
      return ui;
  return ci;
};
let mi = !1;
const ds = (i) => {
  mi || (rs(), mi = !0), i.l_desc = new Ie(i.dyn_ltree, cn), i.d_desc = new Ie(i.dyn_dtree, un), i.bl_desc = new Ie(i.bl_tree, gn), i.bi_buf = 0, i.bi_valid = 0, mn(i);
}, bn = (i, e, t, n) => {
  W(i, (qn << 1) + (n ? 1 : 0), 3), wn(i), Kt(i, t), Kt(i, ~t), t && i.pending_buf.set(i.window.subarray(e, e + t), i.pending), i.pending += t;
}, cs = (i) => {
  W(i, on << 1, 3), nt(i, ni, ht), ss(i);
}, us = (i, e, t, n) => {
  let s, o, d = 0;
  i.level > 0 ? (i.strm.data_type === Kn && (i.strm.data_type = hs(i)), Fe(i, i.l_desc), Fe(i, i.d_desc), d = as(i), s = i.opt_len + 3 + 7 >>> 3, o = i.static_len + 3 + 7 >>> 3, o <= s && (s = o)) : s = o = t + 5, t + 4 <= s && e !== -1 ? bn(i, e, t, n) : i.strategy === Zn || o === s ? (W(i, (on << 1) + (n ? 1 : 0), 3), fi(i, ht, Ft)) : (W(i, (Jn << 1) + (n ? 1 : 0), 3), ls(i, i.l_desc.max_code + 1, i.d_desc.max_code + 1, d + 1), fi(i, i.dyn_ltree, i.dyn_dtree)), mn(i), n && wn(i);
}, gs = (i, e, t) => (i.pending_buf[i.sym_buf + i.sym_next++] = e, i.pending_buf[i.sym_buf + i.sym_next++] = e >> 8, i.pending_buf[i.sym_buf + i.sym_next++] = t, e === 0 ? i.dyn_ltree[t * 2]++ : (i.matches++, e--, i.dyn_ltree[(Zt[t] + ie + 1) * 2]++, i.dyn_dtree[fn(e) * 2]++), i.sym_next === i.sym_end);
var fs = ds, ps = bn, ys = us, ms = gs, ws = cs, bs = {
  _tr_init: fs,
  _tr_stored_block: ps,
  _tr_flush_block: ys,
  _tr_tally: ms,
  _tr_align: ws
};
const _s = (i, e, t, n) => {
  let s = i & 65535 | 0, o = i >>> 16 & 65535 | 0, d = 0;
  for (; t !== 0; ) {
    d = t > 2e3 ? 2e3 : t, t -= d;
    do
      s = s + e[n++] | 0, o = o + s | 0;
    while (--d);
    s %= 65521, o %= 65521;
  }
  return s | o << 16 | 0;
};
var qt = _s;
const Es = () => {
  let i, e = [];
  for (var t = 0; t < 256; t++) {
    i = t;
    for (var n = 0; n < 8; n++)
      i = i & 1 ? 3988292384 ^ i >>> 1 : i >>> 1;
    e[t] = i;
  }
  return e;
}, Cs = new Uint32Array(Es()), xs = (i, e, t, n) => {
  const s = Cs, o = n + t;
  i ^= -1;
  for (let d = n; d < o; d++)
    i = i >>> 8 ^ s[(i ^ e[d]) & 255];
  return i ^ -1;
};
var $ = xs, vt = {
  2: "need dictionary",
  /* Z_NEED_DICT       2  */
  1: "stream end",
  /* Z_STREAM_END      1  */
  0: "",
  /* Z_OK              0  */
  "-1": "file error",
  /* Z_ERRNO         (-1) */
  "-2": "stream error",
  /* Z_STREAM_ERROR  (-2) */
  "-3": "data error",
  /* Z_DATA_ERROR    (-3) */
  "-4": "insufficient memory",
  /* Z_MEM_ERROR     (-4) */
  "-5": "buffer error",
  /* Z_BUF_ERROR     (-5) */
  "-6": "incompatible version"
  /* Z_VERSION_ERROR (-6) */
}, ne = {
  /* Allowed flush values; see deflate() and inflate() below for details */
  Z_NO_FLUSH: 0,
  Z_PARTIAL_FLUSH: 1,
  Z_SYNC_FLUSH: 2,
  Z_FULL_FLUSH: 3,
  Z_FINISH: 4,
  Z_BLOCK: 5,
  Z_TREES: 6,
  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK: 0,
  Z_STREAM_END: 1,
  Z_NEED_DICT: 2,
  Z_ERRNO: -1,
  Z_STREAM_ERROR: -2,
  Z_DATA_ERROR: -3,
  Z_MEM_ERROR: -4,
  Z_BUF_ERROR: -5,
  //Z_VERSION_ERROR: -6,
  /* compression levels */
  Z_NO_COMPRESSION: 0,
  Z_BEST_SPEED: 1,
  Z_BEST_COMPRESSION: 9,
  Z_DEFAULT_COMPRESSION: -1,
  Z_FILTERED: 1,
  Z_HUFFMAN_ONLY: 2,
  Z_RLE: 3,
  Z_FIXED: 4,
  Z_DEFAULT_STRATEGY: 0,
  /* Possible values of the data_type field (though see inflate()) */
  Z_BINARY: 0,
  Z_TEXT: 1,
  //Z_ASCII:                1, // = Z_TEXT (deprecated)
  Z_UNKNOWN: 2,
  /* The deflate compression method */
  Z_DEFLATED: 8
  //Z_NULL:                 null // Use -1 or null inline, depending on var type
};
const { _tr_init: vs, _tr_stored_block: Ye, _tr_flush_block: Ts, _tr_tally: yt, _tr_align: As } = bs, {
  Z_NO_FLUSH: mt,
  Z_PARTIAL_FLUSH: Ss,
  Z_FULL_FLUSH: Bs,
  Z_FINISH: q,
  Z_BLOCK: wi,
  Z_OK: U,
  Z_STREAM_END: bi,
  Z_STREAM_ERROR: st,
  Z_DATA_ERROR: ks,
  Z_BUF_ERROR: Me,
  Z_DEFAULT_COMPRESSION: Is,
  Z_FILTERED: Ls,
  Z_HUFFMAN_ONLY: de,
  Z_RLE: Ms,
  Z_FIXED: Ns,
  Z_DEFAULT_STRATEGY: Ds,
  Z_UNKNOWN: Rs,
  Z_DEFLATED: Ce
} = ne, Ps = 9, zs = 15, Os = 8, Gs = 29, Hs = 256, We = Hs + 1 + Gs, $s = 30, Us = 19, Xs = 2 * We + 1, Fs = 15, N = 3, ft = 258, ot = ft + N + 1, Ys = 32, Nt = 42, oi = 57, Ve = 69, je = 73, Ze = 91, Ke = 103, Ct = 113, $t = 666, Y = 1, zt = 2, Tt = 3, Ot = 4, Ws = 3, xt = (i, e) => (i.msg = vt[e], e), _i = (i) => i * 2 - (i > 4 ? 9 : 0), gt = (i) => {
  let e = i.length;
  for (; --e >= 0; )
    i[e] = 0;
}, Vs = (i) => {
  let e, t, n, s = i.w_size;
  e = i.hash_size, n = e;
  do
    t = i.head[--n], i.head[n] = t >= s ? t - s : 0;
  while (--e);
  e = s, n = e;
  do
    t = i.prev[--n], i.prev[n] = t >= s ? t - s : 0;
  while (--e);
};
let js = (i, e, t) => (e << i.hash_shift ^ t) & i.hash_mask, wt = js;
const Z = (i) => {
  const e = i.state;
  let t = e.pending;
  t > i.avail_out && (t = i.avail_out), t !== 0 && (i.output.set(e.pending_buf.subarray(e.pending_out, e.pending_out + t), i.next_out), i.next_out += t, e.pending_out += t, i.total_out += t, i.avail_out -= t, e.pending -= t, e.pending === 0 && (e.pending_out = 0));
}, K = (i, e) => {
  Ts(i, i.block_start >= 0 ? i.block_start : -1, i.strstart - i.block_start, e), i.block_start = i.strstart, Z(i.strm);
}, R = (i, e) => {
  i.pending_buf[i.pending++] = e;
}, Gt = (i, e) => {
  i.pending_buf[i.pending++] = e >>> 8 & 255, i.pending_buf[i.pending++] = e & 255;
}, qe = (i, e, t, n) => {
  let s = i.avail_in;
  return s > n && (s = n), s === 0 ? 0 : (i.avail_in -= s, e.set(i.input.subarray(i.next_in, i.next_in + s), t), i.state.wrap === 1 ? i.adler = qt(i.adler, e, s, t) : i.state.wrap === 2 && (i.adler = $(i.adler, e, s, t)), i.next_in += s, i.total_in += s, s);
}, _n = (i, e) => {
  let t = i.max_chain_length, n = i.strstart, s, o, d = i.prev_length, l = i.nice_match;
  const a = i.strstart > i.w_size - ot ? i.strstart - (i.w_size - ot) : 0, h = i.window, c = i.w_mask, f = i.prev, r = i.strstart + ft;
  let u = h[n + d - 1], p = h[n + d];
  i.prev_length >= i.good_match && (t >>= 2), l > i.lookahead && (l = i.lookahead);
  do
    if (s = e, !(h[s + d] !== p || h[s + d - 1] !== u || h[s] !== h[n] || h[++s] !== h[n + 1])) {
      n += 2, s++;
      do
        ;
      while (h[++n] === h[++s] && h[++n] === h[++s] && h[++n] === h[++s] && h[++n] === h[++s] && h[++n] === h[++s] && h[++n] === h[++s] && h[++n] === h[++s] && h[++n] === h[++s] && n < r);
      if (o = ft - (r - n), n = r - ft, o > d) {
        if (i.match_start = e, d = o, o >= l)
          break;
        u = h[n + d - 1], p = h[n + d];
      }
    }
  while ((e = f[e & c]) > a && --t !== 0);
  return d <= i.lookahead ? d : i.lookahead;
}, Dt = (i) => {
  const e = i.w_size;
  let t, n, s;
  do {
    if (n = i.window_size - i.lookahead - i.strstart, i.strstart >= e + (e - ot) && (i.window.set(i.window.subarray(e, e + e - n), 0), i.match_start -= e, i.strstart -= e, i.block_start -= e, i.insert > i.strstart && (i.insert = i.strstart), Vs(i), n += e), i.strm.avail_in === 0)
      break;
    if (t = qe(i.strm, i.window, i.strstart + i.lookahead, n), i.lookahead += t, i.lookahead + i.insert >= N)
      for (s = i.strstart - i.insert, i.ins_h = i.window[s], i.ins_h = wt(i, i.ins_h, i.window[s + 1]); i.insert && (i.ins_h = wt(i, i.ins_h, i.window[s + N - 1]), i.prev[s & i.w_mask] = i.head[i.ins_h], i.head[i.ins_h] = s, s++, i.insert--, !(i.lookahead + i.insert < N)); )
        ;
  } while (i.lookahead < ot && i.strm.avail_in !== 0);
}, En = (i, e) => {
  let t = i.pending_buf_size - 5 > i.w_size ? i.w_size : i.pending_buf_size - 5, n, s, o, d = 0, l = i.strm.avail_in;
  do {
    if (n = 65535, o = i.bi_valid + 42 >> 3, i.strm.avail_out < o || (o = i.strm.avail_out - o, s = i.strstart - i.block_start, n > s + i.strm.avail_in && (n = s + i.strm.avail_in), n > o && (n = o), n < t && (n === 0 && e !== q || e === mt || n !== s + i.strm.avail_in)))
      break;
    d = e === q && n === s + i.strm.avail_in ? 1 : 0, Ye(i, 0, 0, d), i.pending_buf[i.pending - 4] = n, i.pending_buf[i.pending - 3] = n >> 8, i.pending_buf[i.pending - 2] = ~n, i.pending_buf[i.pending - 1] = ~n >> 8, Z(i.strm), s && (s > n && (s = n), i.strm.output.set(i.window.subarray(i.block_start, i.block_start + s), i.strm.next_out), i.strm.next_out += s, i.strm.avail_out -= s, i.strm.total_out += s, i.block_start += s, n -= s), n && (qe(i.strm, i.strm.output, i.strm.next_out, n), i.strm.next_out += n, i.strm.avail_out -= n, i.strm.total_out += n);
  } while (d === 0);
  return l -= i.strm.avail_in, l && (l >= i.w_size ? (i.matches = 2, i.window.set(i.strm.input.subarray(i.strm.next_in - i.w_size, i.strm.next_in), 0), i.strstart = i.w_size, i.insert = i.strstart) : (i.window_size - i.strstart <= l && (i.strstart -= i.w_size, i.window.set(i.window.subarray(i.w_size, i.w_size + i.strstart), 0), i.matches < 2 && i.matches++, i.insert > i.strstart && (i.insert = i.strstart)), i.window.set(i.strm.input.subarray(i.strm.next_in - l, i.strm.next_in), i.strstart), i.strstart += l, i.insert += l > i.w_size - i.insert ? i.w_size - i.insert : l), i.block_start = i.strstart), i.high_water < i.strstart && (i.high_water = i.strstart), d ? Ot : e !== mt && e !== q && i.strm.avail_in === 0 && i.strstart === i.block_start ? zt : (o = i.window_size - i.strstart, i.strm.avail_in > o && i.block_start >= i.w_size && (i.block_start -= i.w_size, i.strstart -= i.w_size, i.window.set(i.window.subarray(i.w_size, i.w_size + i.strstart), 0), i.matches < 2 && i.matches++, o += i.w_size, i.insert > i.strstart && (i.insert = i.strstart)), o > i.strm.avail_in && (o = i.strm.avail_in), o && (qe(i.strm, i.window, i.strstart, o), i.strstart += o, i.insert += o > i.w_size - i.insert ? i.w_size - i.insert : o), i.high_water < i.strstart && (i.high_water = i.strstart), o = i.bi_valid + 42 >> 3, o = i.pending_buf_size - o > 65535 ? 65535 : i.pending_buf_size - o, t = o > i.w_size ? i.w_size : o, s = i.strstart - i.block_start, (s >= t || (s || e === q) && e !== mt && i.strm.avail_in === 0 && s <= o) && (n = s > o ? o : s, d = e === q && i.strm.avail_in === 0 && n === s ? 1 : 0, Ye(i, i.block_start, n, d), i.block_start += n, Z(i.strm)), d ? Tt : Y);
}, Ne = (i, e) => {
  let t, n;
  for (; ; ) {
    if (i.lookahead < ot) {
      if (Dt(i), i.lookahead < ot && e === mt)
        return Y;
      if (i.lookahead === 0)
        break;
    }
    if (t = 0, i.lookahead >= N && (i.ins_h = wt(i, i.ins_h, i.window[i.strstart + N - 1]), t = i.prev[i.strstart & i.w_mask] = i.head[i.ins_h], i.head[i.ins_h] = i.strstart), t !== 0 && i.strstart - t <= i.w_size - ot && (i.match_length = _n(i, t)), i.match_length >= N)
      if (n = yt(i, i.strstart - i.match_start, i.match_length - N), i.lookahead -= i.match_length, i.match_length <= i.max_lazy_match && i.lookahead >= N) {
        i.match_length--;
        do
          i.strstart++, i.ins_h = wt(i, i.ins_h, i.window[i.strstart + N - 1]), t = i.prev[i.strstart & i.w_mask] = i.head[i.ins_h], i.head[i.ins_h] = i.strstart;
        while (--i.match_length !== 0);
        i.strstart++;
      } else
        i.strstart += i.match_length, i.match_length = 0, i.ins_h = i.window[i.strstart], i.ins_h = wt(i, i.ins_h, i.window[i.strstart + 1]);
    else
      n = yt(i, 0, i.window[i.strstart]), i.lookahead--, i.strstart++;
    if (n && (K(i, !1), i.strm.avail_out === 0))
      return Y;
  }
  return i.insert = i.strstart < N - 1 ? i.strstart : N - 1, e === q ? (K(i, !0), i.strm.avail_out === 0 ? Tt : Ot) : i.sym_next && (K(i, !1), i.strm.avail_out === 0) ? Y : zt;
}, It = (i, e) => {
  let t, n, s;
  for (; ; ) {
    if (i.lookahead < ot) {
      if (Dt(i), i.lookahead < ot && e === mt)
        return Y;
      if (i.lookahead === 0)
        break;
    }
    if (t = 0, i.lookahead >= N && (i.ins_h = wt(i, i.ins_h, i.window[i.strstart + N - 1]), t = i.prev[i.strstart & i.w_mask] = i.head[i.ins_h], i.head[i.ins_h] = i.strstart), i.prev_length = i.match_length, i.prev_match = i.match_start, i.match_length = N - 1, t !== 0 && i.prev_length < i.max_lazy_match && i.strstart - t <= i.w_size - ot && (i.match_length = _n(i, t), i.match_length <= 5 && (i.strategy === Ls || i.match_length === N && i.strstart - i.match_start > 4096) && (i.match_length = N - 1)), i.prev_length >= N && i.match_length <= i.prev_length) {
      s = i.strstart + i.lookahead - N, n = yt(i, i.strstart - 1 - i.prev_match, i.prev_length - N), i.lookahead -= i.prev_length - 1, i.prev_length -= 2;
      do
        ++i.strstart <= s && (i.ins_h = wt(i, i.ins_h, i.window[i.strstart + N - 1]), t = i.prev[i.strstart & i.w_mask] = i.head[i.ins_h], i.head[i.ins_h] = i.strstart);
      while (--i.prev_length !== 0);
      if (i.match_available = 0, i.match_length = N - 1, i.strstart++, n && (K(i, !1), i.strm.avail_out === 0))
        return Y;
    } else if (i.match_available) {
      if (n = yt(i, 0, i.window[i.strstart - 1]), n && K(i, !1), i.strstart++, i.lookahead--, i.strm.avail_out === 0)
        return Y;
    } else
      i.match_available = 1, i.strstart++, i.lookahead--;
  }
  return i.match_available && (n = yt(i, 0, i.window[i.strstart - 1]), i.match_available = 0), i.insert = i.strstart < N - 1 ? i.strstart : N - 1, e === q ? (K(i, !0), i.strm.avail_out === 0 ? Tt : Ot) : i.sym_next && (K(i, !1), i.strm.avail_out === 0) ? Y : zt;
}, Zs = (i, e) => {
  let t, n, s, o;
  const d = i.window;
  for (; ; ) {
    if (i.lookahead <= ft) {
      if (Dt(i), i.lookahead <= ft && e === mt)
        return Y;
      if (i.lookahead === 0)
        break;
    }
    if (i.match_length = 0, i.lookahead >= N && i.strstart > 0 && (s = i.strstart - 1, n = d[s], n === d[++s] && n === d[++s] && n === d[++s])) {
      o = i.strstart + ft;
      do
        ;
      while (n === d[++s] && n === d[++s] && n === d[++s] && n === d[++s] && n === d[++s] && n === d[++s] && n === d[++s] && n === d[++s] && s < o);
      i.match_length = ft - (o - s), i.match_length > i.lookahead && (i.match_length = i.lookahead);
    }
    if (i.match_length >= N ? (t = yt(i, 1, i.match_length - N), i.lookahead -= i.match_length, i.strstart += i.match_length, i.match_length = 0) : (t = yt(i, 0, i.window[i.strstart]), i.lookahead--, i.strstart++), t && (K(i, !1), i.strm.avail_out === 0))
      return Y;
  }
  return i.insert = 0, e === q ? (K(i, !0), i.strm.avail_out === 0 ? Tt : Ot) : i.sym_next && (K(i, !1), i.strm.avail_out === 0) ? Y : zt;
}, Ks = (i, e) => {
  let t;
  for (; ; ) {
    if (i.lookahead === 0 && (Dt(i), i.lookahead === 0)) {
      if (e === mt)
        return Y;
      break;
    }
    if (i.match_length = 0, t = yt(i, 0, i.window[i.strstart]), i.lookahead--, i.strstart++, t && (K(i, !1), i.strm.avail_out === 0))
      return Y;
  }
  return i.insert = 0, e === q ? (K(i, !0), i.strm.avail_out === 0 ? Tt : Ot) : i.sym_next && (K(i, !1), i.strm.avail_out === 0) ? Y : zt;
};
function et(i, e, t, n, s) {
  this.good_length = i, this.max_lazy = e, this.nice_length = t, this.max_chain = n, this.func = s;
}
const Ut = [
  /*      good lazy nice chain */
  new et(0, 0, 0, 0, En),
  /* 0 store only */
  new et(4, 4, 8, 4, Ne),
  /* 1 max speed, no lazy matches */
  new et(4, 5, 16, 8, Ne),
  /* 2 */
  new et(4, 6, 32, 32, Ne),
  /* 3 */
  new et(4, 4, 16, 16, It),
  /* 4 lazy matches */
  new et(8, 16, 32, 32, It),
  /* 5 */
  new et(8, 16, 128, 128, It),
  /* 6 */
  new et(8, 32, 128, 256, It),
  /* 7 */
  new et(32, 128, 258, 1024, It),
  /* 8 */
  new et(32, 258, 258, 4096, It)
  /* 9 max compression */
], qs = (i) => {
  i.window_size = 2 * i.w_size, gt(i.head), i.max_lazy_match = Ut[i.level].max_lazy, i.good_match = Ut[i.level].good_length, i.nice_match = Ut[i.level].nice_length, i.max_chain_length = Ut[i.level].max_chain, i.strstart = 0, i.block_start = 0, i.lookahead = 0, i.insert = 0, i.match_length = i.prev_length = N - 1, i.match_available = 0, i.ins_h = 0;
};
function Js() {
  this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = Ce, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new Uint16Array(Xs * 2), this.dyn_dtree = new Uint16Array((2 * $s + 1) * 2), this.bl_tree = new Uint16Array((2 * Us + 1) * 2), gt(this.dyn_ltree), gt(this.dyn_dtree), gt(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new Uint16Array(Fs + 1), this.heap = new Uint16Array(2 * We + 1), gt(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new Uint16Array(2 * We + 1), gt(this.depth), this.sym_buf = 0, this.lit_bufsize = 0, this.sym_next = 0, this.sym_end = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
}
const se = (i) => {
  if (!i)
    return 1;
  const e = i.state;
  return !e || e.strm !== i || e.status !== Nt && //#ifdef GZIP
  e.status !== oi && //#endif
  e.status !== Ve && e.status !== je && e.status !== Ze && e.status !== Ke && e.status !== Ct && e.status !== $t ? 1 : 0;
}, Cn = (i) => {
  if (se(i))
    return xt(i, st);
  i.total_in = i.total_out = 0, i.data_type = Rs;
  const e = i.state;
  return e.pending = 0, e.pending_out = 0, e.wrap < 0 && (e.wrap = -e.wrap), e.status = //#ifdef GZIP
  e.wrap === 2 ? oi : (
    //#endif
    e.wrap ? Nt : Ct
  ), i.adler = e.wrap === 2 ? 0 : 1, e.last_flush = -2, vs(e), U;
}, xn = (i) => {
  const e = Cn(i);
  return e === U && qs(i.state), e;
}, Qs = (i, e) => se(i) || i.state.wrap !== 2 ? st : (i.state.gzhead = e, U), vn = (i, e, t, n, s, o) => {
  if (!i)
    return st;
  let d = 1;
  if (e === Is && (e = 6), n < 0 ? (d = 0, n = -n) : n > 15 && (d = 2, n -= 16), s < 1 || s > Ps || t !== Ce || n < 8 || n > 15 || e < 0 || e > 9 || o < 0 || o > Ns || n === 8 && d !== 1)
    return xt(i, st);
  n === 8 && (n = 9);
  const l = new Js();
  return i.state = l, l.strm = i, l.status = Nt, l.wrap = d, l.gzhead = null, l.w_bits = n, l.w_size = 1 << l.w_bits, l.w_mask = l.w_size - 1, l.hash_bits = s + 7, l.hash_size = 1 << l.hash_bits, l.hash_mask = l.hash_size - 1, l.hash_shift = ~~((l.hash_bits + N - 1) / N), l.window = new Uint8Array(l.w_size * 2), l.head = new Uint16Array(l.hash_size), l.prev = new Uint16Array(l.w_size), l.lit_bufsize = 1 << s + 6, l.pending_buf_size = l.lit_bufsize * 4, l.pending_buf = new Uint8Array(l.pending_buf_size), l.sym_buf = l.lit_bufsize, l.sym_end = (l.lit_bufsize - 1) * 3, l.level = e, l.strategy = o, l.method = t, xn(i);
}, to = (i, e) => vn(i, e, Ce, zs, Os, Ds), eo = (i, e) => {
  if (se(i) || e > wi || e < 0)
    return i ? xt(i, st) : st;
  const t = i.state;
  if (!i.output || i.avail_in !== 0 && !i.input || t.status === $t && e !== q)
    return xt(i, i.avail_out === 0 ? Me : st);
  const n = t.last_flush;
  if (t.last_flush = e, t.pending !== 0) {
    if (Z(i), i.avail_out === 0)
      return t.last_flush = -1, U;
  } else if (i.avail_in === 0 && _i(e) <= _i(n) && e !== q)
    return xt(i, Me);
  if (t.status === $t && i.avail_in !== 0)
    return xt(i, Me);
  if (t.status === Nt && t.wrap === 0 && (t.status = Ct), t.status === Nt) {
    let s = Ce + (t.w_bits - 8 << 4) << 8, o = -1;
    if (t.strategy >= de || t.level < 2 ? o = 0 : t.level < 6 ? o = 1 : t.level === 6 ? o = 2 : o = 3, s |= o << 6, t.strstart !== 0 && (s |= Ys), s += 31 - s % 31, Gt(t, s), t.strstart !== 0 && (Gt(t, i.adler >>> 16), Gt(t, i.adler & 65535)), i.adler = 1, t.status = Ct, Z(i), t.pending !== 0)
      return t.last_flush = -1, U;
  }
  if (t.status === oi) {
    if (i.adler = 0, R(t, 31), R(t, 139), R(t, 8), t.gzhead)
      R(
        t,
        (t.gzhead.text ? 1 : 0) + (t.gzhead.hcrc ? 2 : 0) + (t.gzhead.extra ? 4 : 0) + (t.gzhead.name ? 8 : 0) + (t.gzhead.comment ? 16 : 0)
      ), R(t, t.gzhead.time & 255), R(t, t.gzhead.time >> 8 & 255), R(t, t.gzhead.time >> 16 & 255), R(t, t.gzhead.time >> 24 & 255), R(t, t.level === 9 ? 2 : t.strategy >= de || t.level < 2 ? 4 : 0), R(t, t.gzhead.os & 255), t.gzhead.extra && t.gzhead.extra.length && (R(t, t.gzhead.extra.length & 255), R(t, t.gzhead.extra.length >> 8 & 255)), t.gzhead.hcrc && (i.adler = $(i.adler, t.pending_buf, t.pending, 0)), t.gzindex = 0, t.status = Ve;
    else if (R(t, 0), R(t, 0), R(t, 0), R(t, 0), R(t, 0), R(t, t.level === 9 ? 2 : t.strategy >= de || t.level < 2 ? 4 : 0), R(t, Ws), t.status = Ct, Z(i), t.pending !== 0)
      return t.last_flush = -1, U;
  }
  if (t.status === Ve) {
    if (t.gzhead.extra) {
      let s = t.pending, o = (t.gzhead.extra.length & 65535) - t.gzindex;
      for (; t.pending + o > t.pending_buf_size; ) {
        let l = t.pending_buf_size - t.pending;
        if (t.pending_buf.set(t.gzhead.extra.subarray(t.gzindex, t.gzindex + l), t.pending), t.pending = t.pending_buf_size, t.gzhead.hcrc && t.pending > s && (i.adler = $(i.adler, t.pending_buf, t.pending - s, s)), t.gzindex += l, Z(i), t.pending !== 0)
          return t.last_flush = -1, U;
        s = 0, o -= l;
      }
      let d = new Uint8Array(t.gzhead.extra);
      t.pending_buf.set(d.subarray(t.gzindex, t.gzindex + o), t.pending), t.pending += o, t.gzhead.hcrc && t.pending > s && (i.adler = $(i.adler, t.pending_buf, t.pending - s, s)), t.gzindex = 0;
    }
    t.status = je;
  }
  if (t.status === je) {
    if (t.gzhead.name) {
      let s = t.pending, o;
      do {
        if (t.pending === t.pending_buf_size) {
          if (t.gzhead.hcrc && t.pending > s && (i.adler = $(i.adler, t.pending_buf, t.pending - s, s)), Z(i), t.pending !== 0)
            return t.last_flush = -1, U;
          s = 0;
        }
        t.gzindex < t.gzhead.name.length ? o = t.gzhead.name.charCodeAt(t.gzindex++) & 255 : o = 0, R(t, o);
      } while (o !== 0);
      t.gzhead.hcrc && t.pending > s && (i.adler = $(i.adler, t.pending_buf, t.pending - s, s)), t.gzindex = 0;
    }
    t.status = Ze;
  }
  if (t.status === Ze) {
    if (t.gzhead.comment) {
      let s = t.pending, o;
      do {
        if (t.pending === t.pending_buf_size) {
          if (t.gzhead.hcrc && t.pending > s && (i.adler = $(i.adler, t.pending_buf, t.pending - s, s)), Z(i), t.pending !== 0)
            return t.last_flush = -1, U;
          s = 0;
        }
        t.gzindex < t.gzhead.comment.length ? o = t.gzhead.comment.charCodeAt(t.gzindex++) & 255 : o = 0, R(t, o);
      } while (o !== 0);
      t.gzhead.hcrc && t.pending > s && (i.adler = $(i.adler, t.pending_buf, t.pending - s, s));
    }
    t.status = Ke;
  }
  if (t.status === Ke) {
    if (t.gzhead.hcrc) {
      if (t.pending + 2 > t.pending_buf_size && (Z(i), t.pending !== 0))
        return t.last_flush = -1, U;
      R(t, i.adler & 255), R(t, i.adler >> 8 & 255), i.adler = 0;
    }
    if (t.status = Ct, Z(i), t.pending !== 0)
      return t.last_flush = -1, U;
  }
  if (i.avail_in !== 0 || t.lookahead !== 0 || e !== mt && t.status !== $t) {
    let s = t.level === 0 ? En(t, e) : t.strategy === de ? Ks(t, e) : t.strategy === Ms ? Zs(t, e) : Ut[t.level].func(t, e);
    if ((s === Tt || s === Ot) && (t.status = $t), s === Y || s === Tt)
      return i.avail_out === 0 && (t.last_flush = -1), U;
    if (s === zt && (e === Ss ? As(t) : e !== wi && (Ye(t, 0, 0, !1), e === Bs && (gt(t.head), t.lookahead === 0 && (t.strstart = 0, t.block_start = 0, t.insert = 0))), Z(i), i.avail_out === 0))
      return t.last_flush = -1, U;
  }
  return e !== q ? U : t.wrap <= 0 ? bi : (t.wrap === 2 ? (R(t, i.adler & 255), R(t, i.adler >> 8 & 255), R(t, i.adler >> 16 & 255), R(t, i.adler >> 24 & 255), R(t, i.total_in & 255), R(t, i.total_in >> 8 & 255), R(t, i.total_in >> 16 & 255), R(t, i.total_in >> 24 & 255)) : (Gt(t, i.adler >>> 16), Gt(t, i.adler & 65535)), Z(i), t.wrap > 0 && (t.wrap = -t.wrap), t.pending !== 0 ? U : bi);
}, io = (i) => {
  if (se(i))
    return st;
  const e = i.state.status;
  return i.state = null, e === Ct ? xt(i, ks) : U;
}, no = (i, e) => {
  let t = e.length;
  if (se(i))
    return st;
  const n = i.state, s = n.wrap;
  if (s === 2 || s === 1 && n.status !== Nt || n.lookahead)
    return st;
  if (s === 1 && (i.adler = qt(i.adler, e, t, 0)), n.wrap = 0, t >= n.w_size) {
    s === 0 && (gt(n.head), n.strstart = 0, n.block_start = 0, n.insert = 0);
    let a = new Uint8Array(n.w_size);
    a.set(e.subarray(t - n.w_size, t), 0), e = a, t = n.w_size;
  }
  const o = i.avail_in, d = i.next_in, l = i.input;
  for (i.avail_in = t, i.next_in = 0, i.input = e, Dt(n); n.lookahead >= N; ) {
    let a = n.strstart, h = n.lookahead - (N - 1);
    do
      n.ins_h = wt(n, n.ins_h, n.window[a + N - 1]), n.prev[a & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = a, a++;
    while (--h);
    n.strstart = a, n.lookahead = N - 1, Dt(n);
  }
  return n.strstart += n.lookahead, n.block_start = n.strstart, n.insert = n.lookahead, n.lookahead = 0, n.match_length = n.prev_length = N - 1, n.match_available = 0, i.next_in = d, i.input = l, i.avail_in = o, n.wrap = s, U;
};
var so = to, oo = vn, ro = xn, ao = Cn, lo = Qs, ho = eo, co = io, uo = no, go = "pako deflate (from Nodeca project)", Yt = {
  deflateInit: so,
  deflateInit2: oo,
  deflateReset: ro,
  deflateResetKeep: ao,
  deflateSetHeader: lo,
  deflate: ho,
  deflateEnd: co,
  deflateSetDictionary: uo,
  deflateInfo: go
};
const fo = (i, e) => Object.prototype.hasOwnProperty.call(i, e);
var po = function(i) {
  const e = Array.prototype.slice.call(arguments, 1);
  for (; e.length; ) {
    const t = e.shift();
    if (t) {
      if (typeof t != "object")
        throw new TypeError(t + "must be non-object");
      for (const n in t)
        fo(t, n) && (i[n] = t[n]);
    }
  }
  return i;
}, yo = (i) => {
  let e = 0;
  for (let n = 0, s = i.length; n < s; n++)
    e += i[n].length;
  const t = new Uint8Array(e);
  for (let n = 0, s = 0, o = i.length; n < o; n++) {
    let d = i[n];
    t.set(d, s), s += d.length;
  }
  return t;
}, xe = {
  assign: po,
  flattenChunks: yo
};
let Tn = !0;
try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch {
  Tn = !1;
}
const Jt = new Uint8Array(256);
for (let i = 0; i < 256; i++)
  Jt[i] = i >= 252 ? 6 : i >= 248 ? 5 : i >= 240 ? 4 : i >= 224 ? 3 : i >= 192 ? 2 : 1;
Jt[254] = Jt[254] = 1;
var mo = (i) => {
  if (typeof TextEncoder == "function" && TextEncoder.prototype.encode)
    return new TextEncoder().encode(i);
  let e, t, n, s, o, d = i.length, l = 0;
  for (s = 0; s < d; s++)
    t = i.charCodeAt(s), (t & 64512) === 55296 && s + 1 < d && (n = i.charCodeAt(s + 1), (n & 64512) === 56320 && (t = 65536 + (t - 55296 << 10) + (n - 56320), s++)), l += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
  for (e = new Uint8Array(l), o = 0, s = 0; o < l; s++)
    t = i.charCodeAt(s), (t & 64512) === 55296 && s + 1 < d && (n = i.charCodeAt(s + 1), (n & 64512) === 56320 && (t = 65536 + (t - 55296 << 10) + (n - 56320), s++)), t < 128 ? e[o++] = t : t < 2048 ? (e[o++] = 192 | t >>> 6, e[o++] = 128 | t & 63) : t < 65536 ? (e[o++] = 224 | t >>> 12, e[o++] = 128 | t >>> 6 & 63, e[o++] = 128 | t & 63) : (e[o++] = 240 | t >>> 18, e[o++] = 128 | t >>> 12 & 63, e[o++] = 128 | t >>> 6 & 63, e[o++] = 128 | t & 63);
  return e;
};
const wo = (i, e) => {
  if (e < 65534 && i.subarray && Tn)
    return String.fromCharCode.apply(null, i.length === e ? i : i.subarray(0, e));
  let t = "";
  for (let n = 0; n < e; n++)
    t += String.fromCharCode(i[n]);
  return t;
};
var bo = (i, e) => {
  const t = e || i.length;
  if (typeof TextDecoder == "function" && TextDecoder.prototype.decode)
    return new TextDecoder().decode(i.subarray(0, e));
  let n, s;
  const o = new Array(t * 2);
  for (s = 0, n = 0; n < t; ) {
    let d = i[n++];
    if (d < 128) {
      o[s++] = d;
      continue;
    }
    let l = Jt[d];
    if (l > 4) {
      o[s++] = 65533, n += l - 1;
      continue;
    }
    for (d &= l === 2 ? 31 : l === 3 ? 15 : 7; l > 1 && n < t; )
      d = d << 6 | i[n++] & 63, l--;
    if (l > 1) {
      o[s++] = 65533;
      continue;
    }
    d < 65536 ? o[s++] = d : (d -= 65536, o[s++] = 55296 | d >> 10 & 1023, o[s++] = 56320 | d & 1023);
  }
  return wo(o, s);
}, _o = (i, e) => {
  e = e || i.length, e > i.length && (e = i.length);
  let t = e - 1;
  for (; t >= 0 && (i[t] & 192) === 128; )
    t--;
  return t < 0 || t === 0 ? e : t + Jt[i[t]] > e ? t : e;
}, Qt = {
  string2buf: mo,
  buf2string: bo,
  utf8border: _o
};
function Eo() {
  this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
}
var An = Eo;
const Sn = Object.prototype.toString, {
  Z_NO_FLUSH: Co,
  Z_SYNC_FLUSH: xo,
  Z_FULL_FLUSH: vo,
  Z_FINISH: To,
  Z_OK: be,
  Z_STREAM_END: Ao,
  Z_DEFAULT_COMPRESSION: So,
  Z_DEFAULT_STRATEGY: Bo,
  Z_DEFLATED: ko
} = ne;
function oe(i) {
  this.options = xe.assign({
    level: So,
    method: ko,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: Bo
  }, i || {});
  let e = this.options;
  e.raw && e.windowBits > 0 ? e.windowBits = -e.windowBits : e.gzip && e.windowBits > 0 && e.windowBits < 16 && (e.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new An(), this.strm.avail_out = 0;
  let t = Yt.deflateInit2(
    this.strm,
    e.level,
    e.method,
    e.windowBits,
    e.memLevel,
    e.strategy
  );
  if (t !== be)
    throw new Error(vt[t]);
  if (e.header && Yt.deflateSetHeader(this.strm, e.header), e.dictionary) {
    let n;
    if (typeof e.dictionary == "string" ? n = Qt.string2buf(e.dictionary) : Sn.call(e.dictionary) === "[object ArrayBuffer]" ? n = new Uint8Array(e.dictionary) : n = e.dictionary, t = Yt.deflateSetDictionary(this.strm, n), t !== be)
      throw new Error(vt[t]);
    this._dict_set = !0;
  }
}
oe.prototype.push = function(i, e) {
  const t = this.strm, n = this.options.chunkSize;
  let s, o;
  if (this.ended)
    return !1;
  for (e === ~~e ? o = e : o = e === !0 ? To : Co, typeof i == "string" ? t.input = Qt.string2buf(i) : Sn.call(i) === "[object ArrayBuffer]" ? t.input = new Uint8Array(i) : t.input = i, t.next_in = 0, t.avail_in = t.input.length; ; ) {
    if (t.avail_out === 0 && (t.output = new Uint8Array(n), t.next_out = 0, t.avail_out = n), (o === xo || o === vo) && t.avail_out <= 6) {
      this.onData(t.output.subarray(0, t.next_out)), t.avail_out = 0;
      continue;
    }
    if (s = Yt.deflate(t, o), s === Ao)
      return t.next_out > 0 && this.onData(t.output.subarray(0, t.next_out)), s = Yt.deflateEnd(this.strm), this.onEnd(s), this.ended = !0, s === be;
    if (t.avail_out === 0) {
      this.onData(t.output);
      continue;
    }
    if (o > 0 && t.next_out > 0) {
      this.onData(t.output.subarray(0, t.next_out)), t.avail_out = 0;
      continue;
    }
    if (t.avail_in === 0) break;
  }
  return !0;
};
oe.prototype.onData = function(i) {
  this.chunks.push(i);
};
oe.prototype.onEnd = function(i) {
  i === be && (this.result = xe.flattenChunks(this.chunks)), this.chunks = [], this.err = i, this.msg = this.strm.msg;
};
function ri(i, e) {
  const t = new oe(e);
  if (t.push(i, !0), t.err)
    throw t.msg || vt[t.err];
  return t.result;
}
function Io(i, e) {
  return e = e || {}, e.raw = !0, ri(i, e);
}
function Lo(i, e) {
  return e = e || {}, e.gzip = !0, ri(i, e);
}
var Mo = oe, No = ri, Do = Io, Ro = Lo, Po = {
  Deflate: Mo,
  deflate: No,
  deflateRaw: Do,
  gzip: Ro
};
const ce = 16209, zo = 16191;
var Oo = function(e, t) {
  let n, s, o, d, l, a, h, c, f, r, u, p, y, g, m, w, b, _, A, T, x, S, C, v;
  const E = e.state;
  n = e.next_in, C = e.input, s = n + (e.avail_in - 5), o = e.next_out, v = e.output, d = o - (t - e.avail_out), l = o + (e.avail_out - 257), a = E.dmax, h = E.wsize, c = E.whave, f = E.wnext, r = E.window, u = E.hold, p = E.bits, y = E.lencode, g = E.distcode, m = (1 << E.lenbits) - 1, w = (1 << E.distbits) - 1;
  t:
    do {
      p < 15 && (u += C[n++] << p, p += 8, u += C[n++] << p, p += 8), b = y[u & m];
      e:
        for (; ; ) {
          if (_ = b >>> 24, u >>>= _, p -= _, _ = b >>> 16 & 255, _ === 0)
            v[o++] = b & 65535;
          else if (_ & 16) {
            A = b & 65535, _ &= 15, _ && (p < _ && (u += C[n++] << p, p += 8), A += u & (1 << _) - 1, u >>>= _, p -= _), p < 15 && (u += C[n++] << p, p += 8, u += C[n++] << p, p += 8), b = g[u & w];
            i:
              for (; ; ) {
                if (_ = b >>> 24, u >>>= _, p -= _, _ = b >>> 16 & 255, _ & 16) {
                  if (T = b & 65535, _ &= 15, p < _ && (u += C[n++] << p, p += 8, p < _ && (u += C[n++] << p, p += 8)), T += u & (1 << _) - 1, T > a) {
                    e.msg = "invalid distance too far back", E.mode = ce;
                    break t;
                  }
                  if (u >>>= _, p -= _, _ = o - d, T > _) {
                    if (_ = T - _, _ > c && E.sane) {
                      e.msg = "invalid distance too far back", E.mode = ce;
                      break t;
                    }
                    if (x = 0, S = r, f === 0) {
                      if (x += h - _, _ < A) {
                        A -= _;
                        do
                          v[o++] = r[x++];
                        while (--_);
                        x = o - T, S = v;
                      }
                    } else if (f < _) {
                      if (x += h + f - _, _ -= f, _ < A) {
                        A -= _;
                        do
                          v[o++] = r[x++];
                        while (--_);
                        if (x = 0, f < A) {
                          _ = f, A -= _;
                          do
                            v[o++] = r[x++];
                          while (--_);
                          x = o - T, S = v;
                        }
                      }
                    } else if (x += f - _, _ < A) {
                      A -= _;
                      do
                        v[o++] = r[x++];
                      while (--_);
                      x = o - T, S = v;
                    }
                    for (; A > 2; )
                      v[o++] = S[x++], v[o++] = S[x++], v[o++] = S[x++], A -= 3;
                    A && (v[o++] = S[x++], A > 1 && (v[o++] = S[x++]));
                  } else {
                    x = o - T;
                    do
                      v[o++] = v[x++], v[o++] = v[x++], v[o++] = v[x++], A -= 3;
                    while (A > 2);
                    A && (v[o++] = v[x++], A > 1 && (v[o++] = v[x++]));
                  }
                } else if ((_ & 64) === 0) {
                  b = g[(b & 65535) + (u & (1 << _) - 1)];
                  continue i;
                } else {
                  e.msg = "invalid distance code", E.mode = ce;
                  break t;
                }
                break;
              }
          } else if ((_ & 64) === 0) {
            b = y[(b & 65535) + (u & (1 << _) - 1)];
            continue e;
          } else if (_ & 32) {
            E.mode = zo;
            break t;
          } else {
            e.msg = "invalid literal/length code", E.mode = ce;
            break t;
          }
          break;
        }
    } while (n < s && o < l);
  A = p >> 3, n -= A, p -= A << 3, u &= (1 << p) - 1, e.next_in = n, e.next_out = o, e.avail_in = n < s ? 5 + (s - n) : 5 - (n - s), e.avail_out = o < l ? 257 + (l - o) : 257 - (o - l), E.hold = u, E.bits = p;
};
const Lt = 15, Ei = 852, Ci = 592, xi = 0, De = 1, vi = 2, Go = new Uint16Array([
  /* Length codes 257..285 base */
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  13,
  15,
  17,
  19,
  23,
  27,
  31,
  35,
  43,
  51,
  59,
  67,
  83,
  99,
  115,
  131,
  163,
  195,
  227,
  258,
  0,
  0
]), Ho = new Uint8Array([
  /* Length codes 257..285 extra */
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  17,
  17,
  17,
  17,
  18,
  18,
  18,
  18,
  19,
  19,
  19,
  19,
  20,
  20,
  20,
  20,
  21,
  21,
  21,
  21,
  16,
  72,
  78
]), $o = new Uint16Array([
  /* Distance codes 0..29 base */
  1,
  2,
  3,
  4,
  5,
  7,
  9,
  13,
  17,
  25,
  33,
  49,
  65,
  97,
  129,
  193,
  257,
  385,
  513,
  769,
  1025,
  1537,
  2049,
  3073,
  4097,
  6145,
  8193,
  12289,
  16385,
  24577,
  0,
  0
]), Uo = new Uint8Array([
  /* Distance codes 0..29 extra */
  16,
  16,
  16,
  16,
  17,
  17,
  18,
  18,
  19,
  19,
  20,
  20,
  21,
  21,
  22,
  22,
  23,
  23,
  24,
  24,
  25,
  25,
  26,
  26,
  27,
  27,
  28,
  28,
  29,
  29,
  64,
  64
]), Xo = (i, e, t, n, s, o, d, l) => {
  const a = l.bits;
  let h = 0, c = 0, f = 0, r = 0, u = 0, p = 0, y = 0, g = 0, m = 0, w = 0, b, _, A, T, x, S = null, C;
  const v = new Uint16Array(Lt + 1), E = new Uint16Array(Lt + 1);
  let B = null, k, I, M;
  for (h = 0; h <= Lt; h++)
    v[h] = 0;
  for (c = 0; c < n; c++)
    v[e[t + c]]++;
  for (u = a, r = Lt; r >= 1 && v[r] === 0; r--)
    ;
  if (u > r && (u = r), r === 0)
    return s[o++] = 1 << 24 | 64 << 16 | 0, s[o++] = 1 << 24 | 64 << 16 | 0, l.bits = 1, 0;
  for (f = 1; f < r && v[f] === 0; f++)
    ;
  for (u < f && (u = f), g = 1, h = 1; h <= Lt; h++)
    if (g <<= 1, g -= v[h], g < 0)
      return -1;
  if (g > 0 && (i === xi || r !== 1))
    return -1;
  for (E[1] = 0, h = 1; h < Lt; h++)
    E[h + 1] = E[h] + v[h];
  for (c = 0; c < n; c++)
    e[t + c] !== 0 && (d[E[e[t + c]]++] = c);
  if (i === xi ? (S = B = d, C = 20) : i === De ? (S = Go, B = Ho, C = 257) : (S = $o, B = Uo, C = 0), w = 0, c = 0, h = f, x = o, p = u, y = 0, A = -1, m = 1 << u, T = m - 1, i === De && m > Ei || i === vi && m > Ci)
    return 1;
  for (; ; ) {
    k = h - y, d[c] + 1 < C ? (I = 0, M = d[c]) : d[c] >= C ? (I = B[d[c] - C], M = S[d[c] - C]) : (I = 96, M = 0), b = 1 << h - y, _ = 1 << p, f = _;
    do
      _ -= b, s[x + (w >> y) + _] = k << 24 | I << 16 | M | 0;
    while (_ !== 0);
    for (b = 1 << h - 1; w & b; )
      b >>= 1;
    if (b !== 0 ? (w &= b - 1, w += b) : w = 0, c++, --v[h] === 0) {
      if (h === r)
        break;
      h = e[t + d[c]];
    }
    if (h > u && (w & T) !== A) {
      for (y === 0 && (y = u), x += f, p = h - y, g = 1 << p; p + y < r && (g -= v[p + y], !(g <= 0)); )
        p++, g <<= 1;
      if (m += 1 << p, i === De && m > Ei || i === vi && m > Ci)
        return 1;
      A = w & T, s[A] = u << 24 | p << 16 | x - o | 0;
    }
  }
  return w !== 0 && (s[x + w] = h - y << 24 | 64 << 16 | 0), l.bits = u, 0;
};
var Wt = Xo;
const Fo = 0, Bn = 1, kn = 2, {
  Z_FINISH: Ti,
  Z_BLOCK: Yo,
  Z_TREES: ue,
  Z_OK: At,
  Z_STREAM_END: Wo,
  Z_NEED_DICT: Vo,
  Z_STREAM_ERROR: J,
  Z_DATA_ERROR: In,
  Z_MEM_ERROR: Ln,
  Z_BUF_ERROR: jo,
  Z_DEFLATED: Ai
} = ne, ve = 16180, Si = 16181, Bi = 16182, ki = 16183, Ii = 16184, Li = 16185, Mi = 16186, Ni = 16187, Di = 16188, Ri = 16189, _e = 16190, lt = 16191, Re = 16192, Pi = 16193, Pe = 16194, zi = 16195, Oi = 16196, Gi = 16197, Hi = 16198, ge = 16199, fe = 16200, $i = 16201, Ui = 16202, Xi = 16203, Fi = 16204, Yi = 16205, ze = 16206, Wi = 16207, Vi = 16208, z = 16209, Mn = 16210, Nn = 16211, Zo = 852, Ko = 592, qo = 15, Jo = qo, ji = (i) => (i >>> 24 & 255) + (i >>> 8 & 65280) + ((i & 65280) << 8) + ((i & 255) << 24);
function Qo() {
  this.strm = null, this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
}
const St = (i) => {
  if (!i)
    return 1;
  const e = i.state;
  return !e || e.strm !== i || e.mode < ve || e.mode > Nn ? 1 : 0;
}, Dn = (i) => {
  if (St(i))
    return J;
  const e = i.state;
  return i.total_in = i.total_out = e.total = 0, i.msg = "", e.wrap && (i.adler = e.wrap & 1), e.mode = ve, e.last = 0, e.havedict = 0, e.flags = -1, e.dmax = 32768, e.head = null, e.hold = 0, e.bits = 0, e.lencode = e.lendyn = new Int32Array(Zo), e.distcode = e.distdyn = new Int32Array(Ko), e.sane = 1, e.back = -1, At;
}, Rn = (i) => {
  if (St(i))
    return J;
  const e = i.state;
  return e.wsize = 0, e.whave = 0, e.wnext = 0, Dn(i);
}, Pn = (i, e) => {
  let t;
  if (St(i))
    return J;
  const n = i.state;
  return e < 0 ? (t = 0, e = -e) : (t = (e >> 4) + 5, e < 48 && (e &= 15)), e && (e < 8 || e > 15) ? J : (n.window !== null && n.wbits !== e && (n.window = null), n.wrap = t, n.wbits = e, Rn(i));
}, zn = (i, e) => {
  if (!i)
    return J;
  const t = new Qo();
  i.state = t, t.strm = i, t.window = null, t.mode = ve;
  const n = Pn(i, e);
  return n !== At && (i.state = null), n;
}, tr = (i) => zn(i, Jo);
let Zi = !0, Oe, Ge;
const er = (i) => {
  if (Zi) {
    Oe = new Int32Array(512), Ge = new Int32Array(32);
    let e = 0;
    for (; e < 144; )
      i.lens[e++] = 8;
    for (; e < 256; )
      i.lens[e++] = 9;
    for (; e < 280; )
      i.lens[e++] = 7;
    for (; e < 288; )
      i.lens[e++] = 8;
    for (Wt(Bn, i.lens, 0, 288, Oe, 0, i.work, { bits: 9 }), e = 0; e < 32; )
      i.lens[e++] = 5;
    Wt(kn, i.lens, 0, 32, Ge, 0, i.work, { bits: 5 }), Zi = !1;
  }
  i.lencode = Oe, i.lenbits = 9, i.distcode = Ge, i.distbits = 5;
}, On = (i, e, t, n) => {
  let s;
  const o = i.state;
  return o.window === null && (o.wsize = 1 << o.wbits, o.wnext = 0, o.whave = 0, o.window = new Uint8Array(o.wsize)), n >= o.wsize ? (o.window.set(e.subarray(t - o.wsize, t), 0), o.wnext = 0, o.whave = o.wsize) : (s = o.wsize - o.wnext, s > n && (s = n), o.window.set(e.subarray(t - n, t - n + s), o.wnext), n -= s, n ? (o.window.set(e.subarray(t - n, t), 0), o.wnext = n, o.whave = o.wsize) : (o.wnext += s, o.wnext === o.wsize && (o.wnext = 0), o.whave < o.wsize && (o.whave += s))), 0;
}, ir = (i, e) => {
  let t, n, s, o, d, l, a, h, c, f, r, u, p, y, g = 0, m, w, b, _, A, T, x, S;
  const C = new Uint8Array(4);
  let v, E;
  const B = (
    /* permutation of code lengths */
    new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
  );
  if (St(i) || !i.output || !i.input && i.avail_in !== 0)
    return J;
  t = i.state, t.mode === lt && (t.mode = Re), d = i.next_out, s = i.output, a = i.avail_out, o = i.next_in, n = i.input, l = i.avail_in, h = t.hold, c = t.bits, f = l, r = a, S = At;
  t:
    for (; ; )
      switch (t.mode) {
        case ve:
          if (t.wrap === 0) {
            t.mode = Re;
            break;
          }
          for (; c < 16; ) {
            if (l === 0)
              break t;
            l--, h += n[o++] << c, c += 8;
          }
          if (t.wrap & 2 && h === 35615) {
            t.wbits === 0 && (t.wbits = 15), t.check = 0, C[0] = h & 255, C[1] = h >>> 8 & 255, t.check = $(t.check, C, 2, 0), h = 0, c = 0, t.mode = Si;
            break;
          }
          if (t.head && (t.head.done = !1), !(t.wrap & 1) || /* check if zlib header allowed */
          (((h & 255) << 8) + (h >> 8)) % 31) {
            i.msg = "incorrect header check", t.mode = z;
            break;
          }
          if ((h & 15) !== Ai) {
            i.msg = "unknown compression method", t.mode = z;
            break;
          }
          if (h >>>= 4, c -= 4, x = (h & 15) + 8, t.wbits === 0 && (t.wbits = x), x > 15 || x > t.wbits) {
            i.msg = "invalid window size", t.mode = z;
            break;
          }
          t.dmax = 1 << t.wbits, t.flags = 0, i.adler = t.check = 1, t.mode = h & 512 ? Ri : lt, h = 0, c = 0;
          break;
        case Si:
          for (; c < 16; ) {
            if (l === 0)
              break t;
            l--, h += n[o++] << c, c += 8;
          }
          if (t.flags = h, (t.flags & 255) !== Ai) {
            i.msg = "unknown compression method", t.mode = z;
            break;
          }
          if (t.flags & 57344) {
            i.msg = "unknown header flags set", t.mode = z;
            break;
          }
          t.head && (t.head.text = h >> 8 & 1), t.flags & 512 && t.wrap & 4 && (C[0] = h & 255, C[1] = h >>> 8 & 255, t.check = $(t.check, C, 2, 0)), h = 0, c = 0, t.mode = Bi;
        /* falls through */
        case Bi:
          for (; c < 32; ) {
            if (l === 0)
              break t;
            l--, h += n[o++] << c, c += 8;
          }
          t.head && (t.head.time = h), t.flags & 512 && t.wrap & 4 && (C[0] = h & 255, C[1] = h >>> 8 & 255, C[2] = h >>> 16 & 255, C[3] = h >>> 24 & 255, t.check = $(t.check, C, 4, 0)), h = 0, c = 0, t.mode = ki;
        /* falls through */
        case ki:
          for (; c < 16; ) {
            if (l === 0)
              break t;
            l--, h += n[o++] << c, c += 8;
          }
          t.head && (t.head.xflags = h & 255, t.head.os = h >> 8), t.flags & 512 && t.wrap & 4 && (C[0] = h & 255, C[1] = h >>> 8 & 255, t.check = $(t.check, C, 2, 0)), h = 0, c = 0, t.mode = Ii;
        /* falls through */
        case Ii:
          if (t.flags & 1024) {
            for (; c < 16; ) {
              if (l === 0)
                break t;
              l--, h += n[o++] << c, c += 8;
            }
            t.length = h, t.head && (t.head.extra_len = h), t.flags & 512 && t.wrap & 4 && (C[0] = h & 255, C[1] = h >>> 8 & 255, t.check = $(t.check, C, 2, 0)), h = 0, c = 0;
          } else t.head && (t.head.extra = null);
          t.mode = Li;
        /* falls through */
        case Li:
          if (t.flags & 1024 && (u = t.length, u > l && (u = l), u && (t.head && (x = t.head.extra_len - t.length, t.head.extra || (t.head.extra = new Uint8Array(t.head.extra_len)), t.head.extra.set(
            n.subarray(
              o,
              // extra field is limited to 65536 bytes
              // - no need for additional size check
              o + u
            ),
            /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
            x
          )), t.flags & 512 && t.wrap & 4 && (t.check = $(t.check, n, u, o)), l -= u, o += u, t.length -= u), t.length))
            break t;
          t.length = 0, t.mode = Mi;
        /* falls through */
        case Mi:
          if (t.flags & 2048) {
            if (l === 0)
              break t;
            u = 0;
            do
              x = n[o + u++], t.head && x && t.length < 65536 && (t.head.name += String.fromCharCode(x));
            while (x && u < l);
            if (t.flags & 512 && t.wrap & 4 && (t.check = $(t.check, n, u, o)), l -= u, o += u, x)
              break t;
          } else t.head && (t.head.name = null);
          t.length = 0, t.mode = Ni;
        /* falls through */
        case Ni:
          if (t.flags & 4096) {
            if (l === 0)
              break t;
            u = 0;
            do
              x = n[o + u++], t.head && x && t.length < 65536 && (t.head.comment += String.fromCharCode(x));
            while (x && u < l);
            if (t.flags & 512 && t.wrap & 4 && (t.check = $(t.check, n, u, o)), l -= u, o += u, x)
              break t;
          } else t.head && (t.head.comment = null);
          t.mode = Di;
        /* falls through */
        case Di:
          if (t.flags & 512) {
            for (; c < 16; ) {
              if (l === 0)
                break t;
              l--, h += n[o++] << c, c += 8;
            }
            if (t.wrap & 4 && h !== (t.check & 65535)) {
              i.msg = "header crc mismatch", t.mode = z;
              break;
            }
            h = 0, c = 0;
          }
          t.head && (t.head.hcrc = t.flags >> 9 & 1, t.head.done = !0), i.adler = t.check = 0, t.mode = lt;
          break;
        case Ri:
          for (; c < 32; ) {
            if (l === 0)
              break t;
            l--, h += n[o++] << c, c += 8;
          }
          i.adler = t.check = ji(h), h = 0, c = 0, t.mode = _e;
        /* falls through */
        case _e:
          if (t.havedict === 0)
            return i.next_out = d, i.avail_out = a, i.next_in = o, i.avail_in = l, t.hold = h, t.bits = c, Vo;
          i.adler = t.check = 1, t.mode = lt;
        /* falls through */
        case lt:
          if (e === Yo || e === ue)
            break t;
        /* falls through */
        case Re:
          if (t.last) {
            h >>>= c & 7, c -= c & 7, t.mode = ze;
            break;
          }
          for (; c < 3; ) {
            if (l === 0)
              break t;
            l--, h += n[o++] << c, c += 8;
          }
          switch (t.last = h & 1, h >>>= 1, c -= 1, h & 3) {
            case 0:
              t.mode = Pi;
              break;
            case 1:
              if (er(t), t.mode = ge, e === ue) {
                h >>>= 2, c -= 2;
                break t;
              }
              break;
            case 2:
              t.mode = Oi;
              break;
            case 3:
              i.msg = "invalid block type", t.mode = z;
          }
          h >>>= 2, c -= 2;
          break;
        case Pi:
          for (h >>>= c & 7, c -= c & 7; c < 32; ) {
            if (l === 0)
              break t;
            l--, h += n[o++] << c, c += 8;
          }
          if ((h & 65535) !== (h >>> 16 ^ 65535)) {
            i.msg = "invalid stored block lengths", t.mode = z;
            break;
          }
          if (t.length = h & 65535, h = 0, c = 0, t.mode = Pe, e === ue)
            break t;
        /* falls through */
        case Pe:
          t.mode = zi;
        /* falls through */
        case zi:
          if (u = t.length, u) {
            if (u > l && (u = l), u > a && (u = a), u === 0)
              break t;
            s.set(n.subarray(o, o + u), d), l -= u, o += u, a -= u, d += u, t.length -= u;
            break;
          }
          t.mode = lt;
          break;
        case Oi:
          for (; c < 14; ) {
            if (l === 0)
              break t;
            l--, h += n[o++] << c, c += 8;
          }
          if (t.nlen = (h & 31) + 257, h >>>= 5, c -= 5, t.ndist = (h & 31) + 1, h >>>= 5, c -= 5, t.ncode = (h & 15) + 4, h >>>= 4, c -= 4, t.nlen > 286 || t.ndist > 30) {
            i.msg = "too many length or distance symbols", t.mode = z;
            break;
          }
          t.have = 0, t.mode = Gi;
        /* falls through */
        case Gi:
          for (; t.have < t.ncode; ) {
            for (; c < 3; ) {
              if (l === 0)
                break t;
              l--, h += n[o++] << c, c += 8;
            }
            t.lens[B[t.have++]] = h & 7, h >>>= 3, c -= 3;
          }
          for (; t.have < 19; )
            t.lens[B[t.have++]] = 0;
          if (t.lencode = t.lendyn, t.lenbits = 7, v = { bits: t.lenbits }, S = Wt(Fo, t.lens, 0, 19, t.lencode, 0, t.work, v), t.lenbits = v.bits, S) {
            i.msg = "invalid code lengths set", t.mode = z;
            break;
          }
          t.have = 0, t.mode = Hi;
        /* falls through */
        case Hi:
          for (; t.have < t.nlen + t.ndist; ) {
            for (; g = t.lencode[h & (1 << t.lenbits) - 1], m = g >>> 24, w = g >>> 16 & 255, b = g & 65535, !(m <= c); ) {
              if (l === 0)
                break t;
              l--, h += n[o++] << c, c += 8;
            }
            if (b < 16)
              h >>>= m, c -= m, t.lens[t.have++] = b;
            else {
              if (b === 16) {
                for (E = m + 2; c < E; ) {
                  if (l === 0)
                    break t;
                  l--, h += n[o++] << c, c += 8;
                }
                if (h >>>= m, c -= m, t.have === 0) {
                  i.msg = "invalid bit length repeat", t.mode = z;
                  break;
                }
                x = t.lens[t.have - 1], u = 3 + (h & 3), h >>>= 2, c -= 2;
              } else if (b === 17) {
                for (E = m + 3; c < E; ) {
                  if (l === 0)
                    break t;
                  l--, h += n[o++] << c, c += 8;
                }
                h >>>= m, c -= m, x = 0, u = 3 + (h & 7), h >>>= 3, c -= 3;
              } else {
                for (E = m + 7; c < E; ) {
                  if (l === 0)
                    break t;
                  l--, h += n[o++] << c, c += 8;
                }
                h >>>= m, c -= m, x = 0, u = 11 + (h & 127), h >>>= 7, c -= 7;
              }
              if (t.have + u > t.nlen + t.ndist) {
                i.msg = "invalid bit length repeat", t.mode = z;
                break;
              }
              for (; u--; )
                t.lens[t.have++] = x;
            }
          }
          if (t.mode === z)
            break;
          if (t.lens[256] === 0) {
            i.msg = "invalid code -- missing end-of-block", t.mode = z;
            break;
          }
          if (t.lenbits = 9, v = { bits: t.lenbits }, S = Wt(Bn, t.lens, 0, t.nlen, t.lencode, 0, t.work, v), t.lenbits = v.bits, S) {
            i.msg = "invalid literal/lengths set", t.mode = z;
            break;
          }
          if (t.distbits = 6, t.distcode = t.distdyn, v = { bits: t.distbits }, S = Wt(kn, t.lens, t.nlen, t.ndist, t.distcode, 0, t.work, v), t.distbits = v.bits, S) {
            i.msg = "invalid distances set", t.mode = z;
            break;
          }
          if (t.mode = ge, e === ue)
            break t;
        /* falls through */
        case ge:
          t.mode = fe;
        /* falls through */
        case fe:
          if (l >= 6 && a >= 258) {
            i.next_out = d, i.avail_out = a, i.next_in = o, i.avail_in = l, t.hold = h, t.bits = c, Oo(i, r), d = i.next_out, s = i.output, a = i.avail_out, o = i.next_in, n = i.input, l = i.avail_in, h = t.hold, c = t.bits, t.mode === lt && (t.back = -1);
            break;
          }
          for (t.back = 0; g = t.lencode[h & (1 << t.lenbits) - 1], m = g >>> 24, w = g >>> 16 & 255, b = g & 65535, !(m <= c); ) {
            if (l === 0)
              break t;
            l--, h += n[o++] << c, c += 8;
          }
          if (w && (w & 240) === 0) {
            for (_ = m, A = w, T = b; g = t.lencode[T + ((h & (1 << _ + A) - 1) >> _)], m = g >>> 24, w = g >>> 16 & 255, b = g & 65535, !(_ + m <= c); ) {
              if (l === 0)
                break t;
              l--, h += n[o++] << c, c += 8;
            }
            h >>>= _, c -= _, t.back += _;
          }
          if (h >>>= m, c -= m, t.back += m, t.length = b, w === 0) {
            t.mode = Yi;
            break;
          }
          if (w & 32) {
            t.back = -1, t.mode = lt;
            break;
          }
          if (w & 64) {
            i.msg = "invalid literal/length code", t.mode = z;
            break;
          }
          t.extra = w & 15, t.mode = $i;
        /* falls through */
        case $i:
          if (t.extra) {
            for (E = t.extra; c < E; ) {
              if (l === 0)
                break t;
              l--, h += n[o++] << c, c += 8;
            }
            t.length += h & (1 << t.extra) - 1, h >>>= t.extra, c -= t.extra, t.back += t.extra;
          }
          t.was = t.length, t.mode = Ui;
        /* falls through */
        case Ui:
          for (; g = t.distcode[h & (1 << t.distbits) - 1], m = g >>> 24, w = g >>> 16 & 255, b = g & 65535, !(m <= c); ) {
            if (l === 0)
              break t;
            l--, h += n[o++] << c, c += 8;
          }
          if ((w & 240) === 0) {
            for (_ = m, A = w, T = b; g = t.distcode[T + ((h & (1 << _ + A) - 1) >> _)], m = g >>> 24, w = g >>> 16 & 255, b = g & 65535, !(_ + m <= c); ) {
              if (l === 0)
                break t;
              l--, h += n[o++] << c, c += 8;
            }
            h >>>= _, c -= _, t.back += _;
          }
          if (h >>>= m, c -= m, t.back += m, w & 64) {
            i.msg = "invalid distance code", t.mode = z;
            break;
          }
          t.offset = b, t.extra = w & 15, t.mode = Xi;
        /* falls through */
        case Xi:
          if (t.extra) {
            for (E = t.extra; c < E; ) {
              if (l === 0)
                break t;
              l--, h += n[o++] << c, c += 8;
            }
            t.offset += h & (1 << t.extra) - 1, h >>>= t.extra, c -= t.extra, t.back += t.extra;
          }
          if (t.offset > t.dmax) {
            i.msg = "invalid distance too far back", t.mode = z;
            break;
          }
          t.mode = Fi;
        /* falls through */
        case Fi:
          if (a === 0)
            break t;
          if (u = r - a, t.offset > u) {
            if (u = t.offset - u, u > t.whave && t.sane) {
              i.msg = "invalid distance too far back", t.mode = z;
              break;
            }
            u > t.wnext ? (u -= t.wnext, p = t.wsize - u) : p = t.wnext - u, u > t.length && (u = t.length), y = t.window;
          } else
            y = s, p = d - t.offset, u = t.length;
          u > a && (u = a), a -= u, t.length -= u;
          do
            s[d++] = y[p++];
          while (--u);
          t.length === 0 && (t.mode = fe);
          break;
        case Yi:
          if (a === 0)
            break t;
          s[d++] = t.length, a--, t.mode = fe;
          break;
        case ze:
          if (t.wrap) {
            for (; c < 32; ) {
              if (l === 0)
                break t;
              l--, h |= n[o++] << c, c += 8;
            }
            if (r -= a, i.total_out += r, t.total += r, t.wrap & 4 && r && (i.adler = t.check = /*UPDATE_CHECK(state.check, put - _out, _out);*/
            t.flags ? $(t.check, s, r, d - r) : qt(t.check, s, r, d - r)), r = a, t.wrap & 4 && (t.flags ? h : ji(h)) !== t.check) {
              i.msg = "incorrect data check", t.mode = z;
              break;
            }
            h = 0, c = 0;
          }
          t.mode = Wi;
        /* falls through */
        case Wi:
          if (t.wrap && t.flags) {
            for (; c < 32; ) {
              if (l === 0)
                break t;
              l--, h += n[o++] << c, c += 8;
            }
            if (t.wrap & 4 && h !== (t.total & 4294967295)) {
              i.msg = "incorrect length check", t.mode = z;
              break;
            }
            h = 0, c = 0;
          }
          t.mode = Vi;
        /* falls through */
        case Vi:
          S = Wo;
          break t;
        case z:
          S = In;
          break t;
        case Mn:
          return Ln;
        case Nn:
        /* falls through */
        default:
          return J;
      }
  return i.next_out = d, i.avail_out = a, i.next_in = o, i.avail_in = l, t.hold = h, t.bits = c, (t.wsize || r !== i.avail_out && t.mode < z && (t.mode < ze || e !== Ti)) && On(i, i.output, i.next_out, r - i.avail_out), f -= i.avail_in, r -= i.avail_out, i.total_in += f, i.total_out += r, t.total += r, t.wrap & 4 && r && (i.adler = t.check = /*UPDATE_CHECK(state.check, strm.next_out - _out, _out);*/
  t.flags ? $(t.check, s, r, i.next_out - r) : qt(t.check, s, r, i.next_out - r)), i.data_type = t.bits + (t.last ? 64 : 0) + (t.mode === lt ? 128 : 0) + (t.mode === ge || t.mode === Pe ? 256 : 0), (f === 0 && r === 0 || e === Ti) && S === At && (S = jo), S;
}, nr = (i) => {
  if (St(i))
    return J;
  let e = i.state;
  return e.window && (e.window = null), i.state = null, At;
}, sr = (i, e) => {
  if (St(i))
    return J;
  const t = i.state;
  return (t.wrap & 2) === 0 ? J : (t.head = e, e.done = !1, At);
}, or = (i, e) => {
  const t = e.length;
  let n, s, o;
  return St(i) || (n = i.state, n.wrap !== 0 && n.mode !== _e) ? J : n.mode === _e && (s = 1, s = qt(s, e, t, 0), s !== n.check) ? In : (o = On(i, e, t, t), o ? (n.mode = Mn, Ln) : (n.havedict = 1, At));
};
var rr = Rn, ar = Pn, lr = Dn, hr = tr, dr = zn, cr = ir, ur = nr, gr = sr, fr = or, pr = "pako inflate (from Nodeca project)", dt = {
  inflateReset: rr,
  inflateReset2: ar,
  inflateResetKeep: lr,
  inflateInit: hr,
  inflateInit2: dr,
  inflate: cr,
  inflateEnd: ur,
  inflateGetHeader: gr,
  inflateSetDictionary: fr,
  inflateInfo: pr
};
function yr() {
  this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
}
var mr = yr;
const Gn = Object.prototype.toString, {
  Z_NO_FLUSH: wr,
  Z_FINISH: br,
  Z_OK: te,
  Z_STREAM_END: He,
  Z_NEED_DICT: $e,
  Z_STREAM_ERROR: _r,
  Z_DATA_ERROR: Ki,
  Z_MEM_ERROR: Er
} = ne;
function re(i) {
  this.options = xe.assign({
    chunkSize: 1024 * 64,
    windowBits: 15,
    to: ""
  }, i || {});
  const e = this.options;
  e.raw && e.windowBits >= 0 && e.windowBits < 16 && (e.windowBits = -e.windowBits, e.windowBits === 0 && (e.windowBits = -15)), e.windowBits >= 0 && e.windowBits < 16 && !(i && i.windowBits) && (e.windowBits += 32), e.windowBits > 15 && e.windowBits < 48 && (e.windowBits & 15) === 0 && (e.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new An(), this.strm.avail_out = 0;
  let t = dt.inflateInit2(
    this.strm,
    e.windowBits
  );
  if (t !== te)
    throw new Error(vt[t]);
  if (this.header = new mr(), dt.inflateGetHeader(this.strm, this.header), e.dictionary && (typeof e.dictionary == "string" ? e.dictionary = Qt.string2buf(e.dictionary) : Gn.call(e.dictionary) === "[object ArrayBuffer]" && (e.dictionary = new Uint8Array(e.dictionary)), e.raw && (t = dt.inflateSetDictionary(this.strm, e.dictionary), t !== te)))
    throw new Error(vt[t]);
}
re.prototype.push = function(i, e) {
  const t = this.strm, n = this.options.chunkSize, s = this.options.dictionary;
  let o, d, l;
  if (this.ended) return !1;
  for (e === ~~e ? d = e : d = e === !0 ? br : wr, Gn.call(i) === "[object ArrayBuffer]" ? t.input = new Uint8Array(i) : t.input = i, t.next_in = 0, t.avail_in = t.input.length; ; ) {
    for (t.avail_out === 0 && (t.output = new Uint8Array(n), t.next_out = 0, t.avail_out = n), o = dt.inflate(t, d), o === $e && s && (o = dt.inflateSetDictionary(t, s), o === te ? o = dt.inflate(t, d) : o === Ki && (o = $e)); t.avail_in > 0 && o === He && t.state.wrap > 0 && i[t.next_in] !== 0; )
      dt.inflateReset(t), o = dt.inflate(t, d);
    switch (o) {
      case _r:
      case Ki:
      case $e:
      case Er:
        return this.onEnd(o), this.ended = !0, !1;
    }
    if (l = t.avail_out, t.next_out && (t.avail_out === 0 || o === He))
      if (this.options.to === "string") {
        let a = Qt.utf8border(t.output, t.next_out), h = t.next_out - a, c = Qt.buf2string(t.output, a);
        t.next_out = h, t.avail_out = n - h, h && t.output.set(t.output.subarray(a, a + h), 0), this.onData(c);
      } else
        this.onData(t.output.length === t.next_out ? t.output : t.output.subarray(0, t.next_out));
    if (!(o === te && l === 0)) {
      if (o === He)
        return o = dt.inflateEnd(this.strm), this.onEnd(o), this.ended = !0, !0;
      if (t.avail_in === 0) break;
    }
  }
  return !0;
};
re.prototype.onData = function(i) {
  this.chunks.push(i);
};
re.prototype.onEnd = function(i) {
  i === te && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = xe.flattenChunks(this.chunks)), this.chunks = [], this.err = i, this.msg = this.strm.msg;
};
function ai(i, e) {
  const t = new re(e);
  if (t.push(i), t.err) throw t.msg || vt[t.err];
  return t.result;
}
function Cr(i, e) {
  return e = e || {}, e.raw = !0, ai(i, e);
}
var xr = re, vr = ai, Tr = Cr, Ar = ai, Sr = {
  Inflate: xr,
  inflate: vr,
  inflateRaw: Tr,
  ungzip: Ar
};
const { Deflate: Br, deflate: kr, deflateRaw: Ir, gzip: Lr } = Po, { Inflate: Mr, inflate: Nr, inflateRaw: Dr, ungzip: Rr } = Sr;
var Pr = Br, zr = kr, Or = Ir, Gr = Lr, Hr = Mr, $r = Nr, Ur = Dr, Xr = Rr, Fr = ne, Hn = {
  Deflate: Pr,
  deflate: zr,
  deflateRaw: Or,
  gzip: Gr,
  Inflate: Hr,
  inflate: $r,
  inflateRaw: Ur,
  ungzip: Xr,
  constants: Fr
};
function Je(i) {
  return i <= 26 ? String.fromCharCode(64 + i) : i % 26 === 0 ? Je(Math.floor(i / 26) - 1) + "Z" : Je(Math.floor(i / 26)) + String.fromCharCode(64 + i % 26);
}
class Yr {
  constructor() {
    this.count = 0, this.idMap = /* @__PURE__ */ new Map(), this.reverseMap = /* @__PURE__ */ new Map();
  }
  /**
   * Get short ID for an original ID
   */
  getShortId(e) {
    if (!this.idMap.has(e)) {
      this.count++;
      const t = Je(this.count);
      this.idMap.set(e, t), this.reverseMap.set(t, e);
    }
    return this.idMap.get(e);
  }
  /**
   * Get original ID from short ID
   */
  getOriginalId(e) {
    return this.reverseMap.get(e);
  }
  /**
   * Reset the shortener
   */
  reset() {
    this.count = 0, this.idMap.clear(), this.reverseMap.clear();
  }
}
function pe(i) {
  return i < 10 ? String.fromCharCode(48 + i) : (i -= 10, i < 26 ? String.fromCharCode(65 + i) : (i -= 26, i < 26 ? String.fromCharCode(97 + i) : (i -= 26, i === 0 ? "-" : i === 1 ? "_" : "?")));
}
function Xt(i) {
  const e = i.charCodeAt(0);
  return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 90 ? e - 65 + 10 : e >= 97 && e <= 122 ? e - 97 + 36 : i === "-" ? 62 : i === "_" ? 63 : -1;
}
function Ue(i, e, t) {
  const n = i >> 2, s = (i & 3) << 4 | e >> 4, o = (e & 15) << 2 | t >> 6, d = t & 63;
  return pe(n & 63) + pe(s & 63) + pe(o & 63) + pe(d & 63);
}
function Wr(i) {
  const t = new TextEncoder().encode(i), n = Hn.deflateRaw(t, { level: 9 });
  let s = "";
  for (let o = 0; o < n.length; o += 3)
    o + 2 === n.length ? s += Ue(n[o], n[o + 1], 0) : o + 1 === n.length ? s += Ue(n[o], 0, 0) : s += Ue(n[o], n[o + 1], n[o + 2]);
  return s;
}
function Ra(i) {
  try {
    const e = [];
    for (let o = 0; o < i.length; o += 4) {
      const d = Xt(i[o] || "0"), l = Xt(i[o + 1] || "0"), a = Xt(i[o + 2] || "0"), h = Xt(i[o + 3] || "0");
      if (d < 0 || l < 0)
        return null;
      e.push(d << 2 | l >> 4), o + 2 < i.length && a >= 0 && e.push((l & 15) << 4 | a >> 2), o + 3 < i.length && h >= 0 && e.push((a & 3) << 6 | h);
    }
    const t = new Uint8Array(e), n = Hn.inflateRaw(t);
    return new TextDecoder("utf-8").decode(n);
  } catch (e) {
    return console.error("Deflate decompression failed:", e), null;
  }
}
function Pa(i) {
  const e = i.trim();
  if (e.startsWith("@startuml") || e.startsWith("'"))
    return !1;
  for (const t of e)
    if (Xt(t) < 0)
      return !1;
  return e.length > 0;
}
function za(i, e = "https://www.plantuml.com/plantuml/svg/") {
  return e + i;
}
const Vr = {
  default: "rectangle"
};
function jr(i) {
  return Vr.default;
}
function pt(i) {
  return i.replace(/[^\w]/g, "_");
}
function li(i) {
  return i.replace(/"/g, '\\"');
}
function Zr(i) {
  const e = /* @__PURE__ */ new Map();
  for (const t of i) {
    const n = t.parentId || null;
    e.has(n) || e.set(n, []), e.get(n).push(t);
  }
  return e;
}
function Kr(i, e) {
  if (!e) return "";
  const t = { id: i.id };
  i.coordinates && (t.coordinates = i.coordinates), i.meta && Object.keys(i.meta).length > 0 && (t.meta = i.meta), i.info && Object.keys(i.info).length > 0 && (t.info = i.info);
  const n = i;
  if (n.style && typeof n.style == "object") {
    const s = n.style, o = {};
    s.color !== void 0 && (o.color = s.color), s.borderColor !== void 0 && (o.borderColor = s.borderColor), s.width !== void 0 && (o.width = s.width), s.height !== void 0 && (o.height = s.height), Object.keys(o).length > 0 && (t.style = o);
  }
  return `' @relatos:node ${JSON.stringify(t)}`;
}
function qr(i, e) {
  return !e || !i.position ? "" : `' @relatos:layout:node ${JSON.stringify({ id: i.id, position: i.position })}`;
}
function Jr(i, e) {
  if (!e) return "";
  const t = { id: i.id };
  return i.parentId && (t.parentId = i.parentId), i.nodeIds && i.nodeIds.length > 0 && (t.nodeIds = i.nodeIds), i.info && Object.keys(i.info).length > 0 && (t.info = i.info), `' @relatos:group ${JSON.stringify(t)}`;
}
function Qr(i, e) {
  return !e || !i.layout ? "" : `' @relatos:layout:group ${JSON.stringify({ id: i.id, layout: i.layout })}`;
}
function ta(i, e) {
  if (!e) return "";
  const t = { id: i.id, src: i.src, dst: i.dst };
  i.relType && (t.relType = i.relType), i.meta && Object.keys(i.meta).length > 0 && (t.meta = i.meta), i.info && Object.keys(i.info).length > 0 && (t.info = i.info);
  const n = i;
  if (n.style && typeof n.style == "object") {
    const s = n.style, o = {};
    s.color !== void 0 && (o.color = s.color), s.weight !== void 0 && (o.weight = s.weight), s.label !== void 0 && (o.label = s.label), s.srcLabel !== void 0 && (o.srcLabel = s.srcLabel), s.dstLabel !== void 0 && (o.dstLabel = s.dstLabel), Object.keys(o).length > 0 && (t.style = o);
  }
  return `' @relatos:edge ${JSON.stringify(t)}`;
}
function ea(i, e) {
  if (!e) return "";
  const t = i;
  if (!(t.srcAnchor || t.dstAnchor || i.bends && i.bends.length > 0)) return "";
  const s = { id: i.id };
  return t.srcAnchor && (s.srcAnchor = t.srcAnchor), t.dstAnchor && (s.dstAnchor = t.dstAnchor), i.bends && i.bends.length > 0 && (s.bends = i.bends), `' @relatos:layout:edge ${JSON.stringify(s)}`;
}
function ia(i) {
  const e = i;
  if (!e.style) return "";
  const t = [];
  if (e.style.color) {
    let n = e.style.color.replace(/^#/, "");
    /^[0-9A-Fa-f]{6}$/.test(n) && (n = `${n}7F`), t.push(`#${n}`);
  }
  if (e.style.borderColor) {
    const n = e.style.borderColor.replace(/^#/, "");
    t.length === 0 ? t.push(`#white;line:${n}`) : t[0] = `${t[0]};line:${n}`;
  }
  return t.length > 0 ? ` ${t.join("")}` : "";
}
function $n(i, e = "", t = null, n = !0) {
  const s = jr(), o = t ? t.getShortId(i.id) : pt(i.id), d = li(i.label), l = ia(i), a = Kr(i, n), h = qr(i, n), c = [];
  a && c.push(`${e}${a}`), h && c.push(`${e}${h}`);
  const f = `${e}${s} "${d}" as ${o}${l}`;
  return c.length > 0 ? c.join(`
`) + `
` + f : f;
}
function Un(i, e, t, n, s, o = "", d = null, l = !0) {
  const a = [], h = d ? d.getShortId(i.id) : pt(i.id), c = li(i.label), f = Jr(i, l), r = Qr(i, l);
  f && a.push(`${o}${f}`), r && a.push(`${o}${r}`), a.push(`${o}package "${c}" as ${h} {`);
  const u = o + "  ", p = new Set(i.nodeIds || []);
  for (const g of p) {
    const m = t.find((w) => w.id === g);
    m && (a.push($n(m, u, d, l)), s.add(g));
  }
  const y = n.get(i.id) || [];
  for (const g of y)
    a.push(""), a.push(Un(g, e, t, n, s, u, d, l));
  return a.push(`${o}}`), a.join(`
`);
}
function na(i) {
  const e = i;
  if (!e.style) return "-->";
  const t = [];
  if (e.style.color) {
    const n = e.style.color.replace(/^#/, "");
    t.push(`#${n}`);
  }
  if (e.style.weight !== void 0) {
    const n = e.style.weight;
    (n >= 5 || n >= 3) && t.push("bold");
  }
  return t.length > 0 ? `-[${t.join(",")}]->` : "-->";
}
function sa(i, e = null, t = !0) {
  const n = e ? e.getShortId(i.src) : pt(i.src), s = e ? e.getShortId(i.dst) : pt(i.dst), o = i.relType ? ` : ${li(i.relType)}` : "", d = na(i), l = ta(i, t), a = ea(i, t), h = [];
  l && h.push(l), a && h.push(a);
  const c = `${n} ${d} ${s}${o}`;
  return h.length > 0 ? h.join(`
`) + `
` + c : c;
}
function Xn(i, e, t, n) {
  const s = n?.useShortIds ?? !1, o = n?.includeMetadata ?? !0, d = n?.outputFormat ?? "plain";
  n?.serverUrlPrefix;
  const l = s ? new Yr() : null, a = [];
  a.push("@startuml"), a.push(""), a.push("skinparam backgroundColor #efefef"), a.push("skinparam componentStyle uml2"), a.push("left to right direction"), a.push("");
  const h = /* @__PURE__ */ new Set();
  if (t && t.length > 0) {
    o && (a.push("' === GROUPS ==="), a.push(""));
    const r = Zr(t), u = r.get(null) || [];
    for (const p of u)
      a.push(Un(p, t, i, r, h, "", l, o)), a.push("");
  }
  const c = i.filter((r) => !h.has(r.id));
  if (c.length > 0) {
    o && (a.push("' === STANDALONE NODES ==="), a.push(""));
    for (const r of c)
      a.push($n(r, "", l, o)), a.push("");
  }
  if (e.length > 0) {
    o && (a.push("' === EDGES ==="), a.push(""));
    for (const r of e)
      a.push(sa(r, l, o)), a.push("");
  }
  a.push("@enduml");
  const f = a.join(`
`);
  return d === "deflate" ? Wr(f) : f;
}
function oa(i) {
  const e = i.match(/^'\s*@relatos:(\w+)\s+(.+)$/);
  if (!e || e[1] === "layout") return null;
  try {
    const t = e[1], n = JSON.parse(e[2]);
    return { type: t, data: n };
  } catch {
    return null;
  }
}
function ra(i) {
  const e = i.match(/^'\s*@relatos:layout:(node|group|edge)\s+(.+)$/);
  if (!e) return null;
  try {
    const t = e[1], n = JSON.parse(e[2]);
    return { kind: t, data: n };
  } catch {
    return null;
  }
}
function aa(i) {
  const e = i.match(/^\s*(\w+)\s+"([^"]+)"\s+as\s+(\w+)(?:\s+(#[^;\s]+(?:;line:[^;\s]+)?))?\s*$/);
  if (!e) return null;
  const t = {
    type: e[1],
    label: e[2].replace(/\\"/g, '"'),
    id: e[3]
  };
  if (e[4]) {
    const n = e[4], s = {}, o = n.match(/^(#[0-9A-Fa-f]{8}|#[0-9A-Fa-f]{6}|#[0-9A-Fa-f]{3}|#\w+)/);
    if (o) {
      let l = o[1];
      /^#[0-9A-Fa-f]{8}$/.test(l) && (l = l.slice(0, 7)), s.color = l;
    }
    const d = n.match(/;line:(#?[0-9A-Fa-f]{6}|#?[0-9A-Fa-f]{3}|#?\w+)/);
    d && (s.borderColor = d[1].startsWith("#") ? d[1] : `#${d[1]}`), Object.keys(s).length > 0 && (t.style = s);
  }
  return t;
}
function la(i) {
  const e = i.match(/^\s*(?:package|rectangle)\s+"([^"]+)"\s+as\s+(\w+)\s*\{?\s*$/);
  return e ? {
    label: e[1].replace(/\\"/g, '"'),
    id: e[2]
  } : null;
}
function ha(i) {
  const e = { src: "", dst: "" }, t = i.match(/^\s*(\w+)\s+-\[([^\]]+)\]->\s+(\w+)(?:\s+:\s+(.+?))?\s*$/);
  if (t) {
    e.src = t[1], e.dst = t[3], t[4] && (e.label = t[4].replace(/\\"/g, '"'));
    const o = t[2], d = {}, l = o.match(/#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3}|\w+)/);
    return l && (d.color = `#${l[1]}`), o.includes("bold") && (d.weight = 4), Object.keys(d).length > 0 && (e.style = d), e;
  }
  const n = i.match(/^\s*(\w+)\s+-->\s+(\w+)\s+:\s+(.+?)\s*$/);
  if (n)
    return {
      src: n[1],
      dst: n[2],
      label: n[3].replace(/\\"/g, '"')
    };
  const s = i.match(/^\s*(\w+)\s+-->\s+(\w+)\s*$/);
  return s ? {
    src: s[1],
    dst: s[2]
  } : null;
}
function da(i) {
  const e = [], t = [], n = [], s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
  let r = null;
  const u = [], p = i.split(`
`);
  for (let y = 0; y < p.length; y++) {
    const g = p[y].trim();
    if (!g || g.startsWith("'") && !g.includes("@relatos:") || g === "@startuml" || g === "@enduml" || g.startsWith("skinparam") || g.startsWith("left to right")) continue;
    const m = ra(g);
    if (m) {
      const T = m.data.id;
      T && (m.kind === "node" ? l.set(pt(T), m.data.position) : m.kind === "group" ? a.set(pt(T), m.data.layout) : m.kind === "edge" && h.set(T, m.data));
      continue;
    }
    const w = oa(g);
    if (w) {
      r = w;
      const T = w.data.id;
      T && (w.type === "node" ? s.set(pt(T), w.data) : w.type === "edge" ? o.set(T, w.data) : w.type === "group" && d.set(pt(T), w.data));
      continue;
    }
    if (g === "}") {
      u.pop(), r = null;
      continue;
    }
    const b = la(g);
    if (b) {
      const T = r?.type === "group" ? r.data : d.get(b.id), x = T?.id || b.id;
      f.set(b.id, x);
      const S = {
        id: x,
        label: b.label,
        nodeIds: T?.nodeIds || [],
        parentId: u.length > 0 ? f.get(u[u.length - 1]) : T?.parentId,
        layout: a.get(b.id) ?? T?.layout ?? void 0,
        info: T?.info || T?.meta || void 0
      };
      n.push(S), u.push(b.id), r = null;
      continue;
    }
    const _ = aa(g);
    if (_) {
      const T = r?.type === "node" ? r.data : s.get(_.id), x = T?.id || _.id;
      c.set(_.id, x);
      const S = {
        id: x,
        label: _.label,
        coordinates: T?.coordinates || void 0,
        position: l.get(_.id) ?? T?.position ?? void 0,
        meta: T?.meta || void 0,
        info: T?.info || void 0
      };
      T?.style && typeof T.style == "object" ? S.style = T.style : _.style && (S.style = _.style), e.push(S), r = null;
      continue;
    }
    const A = ha(g);
    if (A) {
      const T = c.get(A.src) || A.src, x = c.get(A.dst) || A.dst, S = `${A.src}_${A.dst}`, C = r?.type === "edge" ? r.data : null, v = C?.id || S, E = h.get(v) ?? h.get(S), B = {
        id: v,
        src: C?.src || T,
        dst: C?.dst || x,
        relType: C?.relType || A.label || "",
        bends: E?.bends ?? C?.bends ?? void 0,
        meta: C?.meta || void 0,
        info: C?.info || void 0
      };
      C?.style && typeof C.style == "object" ? B.style = C.style : A.style && (B.style = A.style);
      const k = B;
      E?.srcAnchor != null && (k.srcAnchor = E.srcAnchor), E?.dstAnchor != null && (k.dstAnchor = E.dstAnchor), E?.srcAnchor == null && C?.srcAnchor != null && (k.srcAnchor = C.srcAnchor), E?.dstAnchor == null && C?.dstAnchor != null && (k.dstAnchor = C.dstAnchor), t.push(B), r = null;
      continue;
    }
  }
  return { nodes: e, edges: t, groups: n };
}
async function ca(i) {
  try {
    if (navigator.clipboard && window.isSecureContext)
      return await navigator.clipboard.writeText(i), !0;
    {
      const e = document.createElement("textarea");
      e.value = i, e.style.position = "fixed", e.style.left = "-999999px", e.style.top = "-999999px", document.body.appendChild(e), e.focus(), e.select();
      const t = document.execCommand("copy");
      return document.body.removeChild(e), t;
    }
  } catch (e) {
    return console.error("Failed to copy to clipboard:", e), !1;
  }
}
function ua(i) {
  let e = "", t = 0;
  const n = i.length;
  let s = 0;
  for (; t < n; ) {
    const o = i[t];
    if (o === "[") {
      s++, e += o, t++;
      continue;
    }
    if (o === "]") {
      s--, e += o, t++;
      continue;
    }
    if (s > 0) {
      e += o, t++;
      continue;
    }
    if (o === "/" && i[t + 1] === "/") {
      for (t += 2; t < n && i[t] !== `
` && i[t] !== "\r"; ) t++;
      continue;
    }
    if (o === "#") {
      for (t++; t < n && i[t] !== `
` && i[t] !== "\r"; ) t++;
      continue;
    }
    if (o === "/" && i[t + 1] === "*") {
      for (t += 2; t < n - 1 && !(i[t] === "*" && i[t + 1] === "/"); ) t++;
      t = t < n - 1 ? t + 2 : n;
      continue;
    }
    e += o, t++;
  }
  return e;
}
function ga(i) {
  const e = [], t = [], n = i.length;
  let s = 0, o = 0, d = 0;
  function l() {
    for (; s < n && o === 0 && d === 0; ) {
      const a = i[s];
      if (a === `
` || a === "\r" || a === "," || a === ";") {
        e.push({ type: 18, value: a, offset: s }), a === "\r" && i[s + 1] === `
` && s++, s++;
        continue;
      }
      if (/[\s]/.test(a)) {
        s++;
        continue;
      }
      break;
    }
  }
  for (; s < n && (l(), !(s >= n)); ) {
    const a = s, h = i[s];
    if (h === "{") {
      o++, e.push({ type: 4, value: "{", offset: a }), s++;
      continue;
    }
    if (h === "}") {
      o--, e.push({ type: 5, value: "}", offset: a }), s++;
      continue;
    }
    if (h === "[") {
      d++, e.push({ type: 6, value: "[", offset: a }), s++;
      continue;
    }
    if (h === "]") {
      d--, e.push({ type: 7, value: "]", offset: a }), s++;
      continue;
    }
    if (h === ":") {
      e.push({ type: 8, value: ":", offset: a }), s++;
      continue;
    }
    if (h === "=") {
      e.push({ type: 9, value: "=", offset: a }), s++;
      continue;
    }
    if (h === "#" && s + 1 < n && /[0-9a-fA-F]/.test(i[s + 1])) {
      let c = "#";
      for (s++; s < n && /[0-9a-fA-F]/.test(i[s]); )
        c += i[s], s++;
      e.push({ type: 0, value: c, offset: a });
      continue;
    }
    if (h === "-" && i[s + 1] === "-" && i[s + 2] === ">") {
      e.push({ type: 3, value: "-->", offset: a }), s += 3;
      continue;
    }
    if (h === '"' || h === "'") {
      const c = h;
      s++;
      let f = "";
      for (; s < n && i[s] !== c; ) {
        if (i[s] === "\\") {
          s++, f += i[s] ?? "", s++;
          continue;
        }
        f += i[s], s++;
      }
      s >= n ? t.push(`Unclosed string at ${a}`) : s++, e.push({ type: 2, value: f, offset: a });
      continue;
    }
    if (/\d/.test(h) || h === "." && s + 1 < n && /\d/.test(i[s + 1])) {
      const c = s;
      for (; s < n && /\d/.test(i[s]); ) s++;
      if (s < n && i[s] === "." && s + 1 < n && /\d/.test(i[s + 1]))
        for (s++; s < n && /\d/.test(i[s]); ) s++;
      e.push({ type: 1, value: i.slice(c, s), offset: c });
      continue;
    }
    if (/[a-zA-Z_0-9_\u0080-\uFFFF]/.test(h) || h === "-" && (s + 2 >= n || i[s + 1] !== "-" || i[s + 2] !== ">")) {
      let c = "";
      for (; s < n; ) {
        const f = i[s];
        if (f === "-" && s + 2 < n && i[s + 1] === "-" && i[s + 2] === ">" || !/[a-zA-Z_0-9\u0080-\uFFFF-]/.test(f)) break;
        c += f, s++;
      }
      c === "as" ? e.push({ type: 10, value: c, offset: a }) : c === "node" ? e.push({ type: 11, value: c, offset: a }) : c === "layout" ? e.push({ type: 12, value: c, offset: a }) : c === "style" ? e.push({ type: 13, value: c, offset: a }) : c === "rel" ? e.push({ type: 14, value: c, offset: a }) : c === "group" ? e.push({ type: 15, value: c, offset: a }) : c === "edge" ? e.push({ type: 16, value: c, offset: a }) : c === "bends" ? e.push({ type: 17, value: c, offset: a }) : c === "fixed" ? e.push({ type: 0, value: c, offset: a }) : e.push({ type: 0, value: c, offset: a });
      continue;
    }
    s++;
  }
  return e.push({ type: 19, value: "", offset: n }), { tokens: e, errors: t };
}
function fa(i) {
  const e = i.trim();
  return e === "true" ? !0 : e === "false" ? !1 : /^#[\da-fA-F]+$/.test(e) ? e : /^-?\d+(\.\d+)?$/.test(e) ? Number(e) : e.startsWith('"') && e.endsWith('"') || e.startsWith("'") && e.endsWith("'") ? e.slice(1, -1).replace(/\\"/g, '"').replace(/\\'/g, "'") : e;
}
function j(i, e) {
  if (e.current >= i.length || i[e.current].type !== 6) return null;
  e.current++;
  const t = {}, n = i.length;
  for (; e.current < n && i[e.current].type !== 7; ) {
    const s = i[e.current];
    if (s.type === 0) {
      const o = s.value;
      if (e.current++, e.current < n && i[e.current].type === 9) {
        e.current++;
        const d = i[e.current];
        let l = !0;
        d && (d.type === 0 || d.type === 1 || d.type === 2) && (l = d.type === 2 ? d.value : fa(d.value), e.current++), t[o] = l;
      } else
        t[o] = !0;
    } else
      e.current++;
    for (; e.current < n && (i[e.current].type === 18 || i[e.current].value === "," || i[e.current].value === ";"); ) e.current++;
  }
  return e.current < n && i[e.current].type === 7 && e.current++, t;
}
function qi(i, e) {
  if (!(!i && !e))
    return i ? e ? { ...i, ...e } : i : e;
}
function pa(i) {
  const e = [], t = ua(i), { tokens: n, errors: s } = ga(t);
  e.push(...s);
  const o = {}, d = {}, l = [];
  let a, h;
  function c(x, S, C, v) {
    const E = o[x];
    E ? (S !== void 0 && (E.label = S), E.style = qi(E.style, C) ?? E.style, v !== void 0 && (E.group = v)) : o[x] = { id: x, label: S ?? x, style: C ?? void 0, group: v };
  }
  function f(x, S, C, v) {
    const E = d[x];
    E ? (S !== void 0 && (E.label = S), E.style = qi(E.style, C) ?? E.style, v && (E.members = [.../* @__PURE__ */ new Set([...E.members, ...v])])) : d[x] = { id: x, label: S ?? x, style: C ?? void 0, members: v ?? [] };
  }
  const r = { current: 0 }, u = n.length;
  function p(x) {
    let S = 1, C = 1;
    for (let v = 0; v < x && v < t.length; v++)
      t[v] === `
` ? (S++, C = 1) : C++;
    return { line: S, col: C };
  }
  function y(x) {
    const S = r.current < u ? n[r.current].offset : t.length, { line: C, col: v } = p(S);
    e.push(`${x} (line ${C}, column ${v})`);
  }
  function g(x, S) {
    return r.current >= u ? x === 19 : n[r.current].type === x;
  }
  function m(x, S) {
    if (r.current >= u) return null;
    const C = n[r.current];
    return C.type !== x ? null : (r.current++, C);
  }
  function w() {
    for (; r.current < u && (n[r.current].type === 18 || n[r.current].value === "," || n[r.current].value === ";" || n[r.current].value === `
`); ) r.current++;
    for (; r.current < u && n[r.current].type === 0 && n[r.current].value === ""; ) r.current++;
  }
  function b(x) {
    const S = [];
    for (; ; ) {
      if (w(), g(
        5
        /* Rbrace */
      ))
        return r.current++, S;
      if (g(
        19
        /* Eof */
      ))
        return y("Missing closing } for group"), S;
      if (g(
        15
        /* GroupKw */
      )) {
        if (r.current++, !g(
          0
          /* Id */
        ))
          return e.push("Expected group ID after group"), S;
        const C = n[r.current].value;
        r.current++;
        let v = C;
        g(
          10
          /* As */
        ) && (r.current++, g(
          2
          /* String */
        ) && (v = n[r.current].value, r.current++));
        const E = j(n, r) ?? void 0;
        if (!m(
          4
          /* Lbrace */
        ))
          return e.push("Expected { after group id"), S;
        const B = b(C);
        f(C, v !== C ? v : C, E, B), S.push(C);
        continue;
      }
      if (g(
        0
        /* Id */
      )) {
        const C = n[r.current].value;
        r.current++;
        let v = C;
        g(
          10
          /* As */
        ) && (r.current++, g(
          2
          /* String */
        ) && (v = n[r.current].value, r.current++));
        const E = j(n, r) ?? void 0;
        if (g(
          4
          /* Lbrace */
        )) {
          m(
            4
            /* Lbrace */
          );
          const k = b(C);
          f(C, v !== C ? v : C, void 0, k), S.push(C);
        } else
          c(C, v, E, x), S.push(C);
        continue;
      }
      y("Expected node ID or nested group in group block"), r.current++;
    }
  }
  function _() {
    if (!g(
      19
      /* Eof */
    )) {
      if (g(
        15
        /* GroupKw */
      )) {
        if (r.current++, !g(
          0
          /* Id */
        )) {
          e.push("Expected group ID after group");
          return;
        }
        const x = n[r.current].value;
        r.current++;
        const S = j(n, r) ?? void 0;
        if (!m(
          4
          /* Lbrace */
        )) {
          e.push("Expected { after group id");
          return;
        }
        const C = b(x);
        f(x, x, S, C);
        return;
      }
      if (g(
        12
        /* Layout */
      )) {
        if (r.current++, !m(
          4
          /* Lbrace */
        )) {
          e.push("Expected { after layout");
          return;
        }
        const x = {}, S = {}, C = {};
        for (; !g(
          5
          /* Rbrace */
        ) && !g(
          19
          /* Eof */
        ) && (w(), !(g(
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
            if (r.current++, !g(
              0
              /* Id */
            )) {
              e.push("Expected node ID in layout");
              continue;
            }
            const v = n[r.current].value;
            if (r.current++, w(), !m(
              4
              /* Lbrace */
            )) {
              e.push("Expected { after node ID in layout");
              continue;
            }
            let E, B, k, I, M = !1;
            for (; !g(
              5
              /* Rbrace */
            ) && !g(
              19
              /* Eof */
            ) && (w(), !g(
              5
              /* Rbrace */
            )); )
              if (g(
                0
                /* Id */
              )) {
                const L = n[r.current].value;
                if (r.current++, g(
                  9
                  /* Equals */
                )) {
                  r.current++;
                  const D = n[r.current];
                  if (D && (D.type === 0 || D.type === 1)) {
                    const P = D.value;
                    r.current++;
                    const O = Number(P);
                    L === "x" ? E = O : L === "y" ? B = O : L === "w" ? k = O : L === "h" ? I = O : L === "fixed" && (M = P === "true" || P === "1");
                  }
                } else L === "fixed" && (M = !0);
              } else
                r.current++;
            g(
              5
              /* Rbrace */
            ) && r.current++, E != null && B != null && (x[v] = { x: E, y: B, w: k, h: I, fixed: M || void 0 });
          } else if (g(
            15
            /* GroupKw */
          )) {
            if (r.current++, !g(
              0
              /* Id */
            )) {
              e.push("Expected group ID in layout");
              continue;
            }
            const v = n[r.current].value;
            if (r.current++, w(), !m(
              4
              /* Lbrace */
            )) {
              e.push("Expected { after group ID in layout");
              continue;
            }
            let E, B, k, I;
            for (; !g(
              5
              /* Rbrace */
            ) && !g(
              19
              /* Eof */
            ) && (w(), !g(
              5
              /* Rbrace */
            )); )
              if (g(
                0
                /* Id */
              )) {
                const M = n[r.current].value;
                if (r.current++, g(
                  9
                  /* Equals */
                )) {
                  r.current++;
                  const L = n[r.current];
                  if (L && (L.type === 0 || L.type === 1)) {
                    const D = L.value;
                    r.current++;
                    const P = Number(D);
                    M === "x" ? E = P : M === "y" ? B = P : M === "w" ? k = P : M === "h" && (I = P);
                  }
                }
              } else
                r.current++;
            g(
              5
              /* Rbrace */
            ) && r.current++, E != null && B != null && k != null && I != null && (S[v] = { x: E, y: B, w: k, h: I });
          } else if (g(
            16
            /* EdgeKw */
          )) {
            if (r.current++, !g(
              0
              /* Id */
            )) {
              e.push("Expected edge ID in layout");
              continue;
            }
            const v = n[r.current].value;
            r.current++, w();
            let E, B, k, I;
            if (g(
              4
              /* Lbrace */
            )) {
              for (r.current++; !g(
                5
                /* Rbrace */
              ) && !g(
                19
                /* Eof */
              ) && (w(), !g(
                5
                /* Rbrace */
              )); )
                if (g(
                  0
                  /* Id */
                )) {
                  const L = n[r.current].value;
                  if (r.current++, g(
                    9
                    /* Equals */
                  )) {
                    r.current++;
                    const D = n[r.current], P = D && D.type === 1, O = D && D.type === 0;
                    if (P || O) {
                      const X = D.value;
                      r.current++;
                      const F = Number(X);
                      L === "src_side" ? E = X : L === "src_t" ? B = Number.isNaN(F) ? void 0 : F : L === "dst_side" ? k = X : L === "dst_t" && (I = Number.isNaN(F) ? void 0 : F);
                    }
                  }
                } else
                  r.current++;
              g(
                5
                /* Rbrace */
              ) && r.current++, w();
            }
            const M = [];
            if (g(
              17
              /* Bends */
            ) && (r.current++, w(), m(
              4
              /* Lbrace */
            ))) {
              for (; !g(
                5
                /* Rbrace */
              ) && !g(
                19
                /* Eof */
              ) && (w(), !g(
                5
                /* Rbrace */
              )); )
                if (g(
                  4
                  /* Lbrace */
                )) {
                  r.current++;
                  let L, D;
                  for (; !g(
                    5
                    /* Rbrace */
                  ) && !g(
                    19
                    /* Eof */
                  ) && (w(), !g(
                    5
                    /* Rbrace */
                  )); )
                    if (g(
                      0
                      /* Id */
                    )) {
                      const P = n[r.current].value;
                      if (r.current++, g(
                        9
                        /* Equals */
                      )) {
                        r.current++;
                        const O = n[r.current];
                        if (O && (O.type === 0 || O.type === 1)) {
                          const X = O.value;
                          r.current++;
                          const F = Number(X);
                          P === "x" ? L = F : P === "y" && (D = F);
                        }
                      }
                    } else
                      r.current++;
                  g(
                    5
                    /* Rbrace */
                  ) && r.current++, L != null && D != null && M.push({ x: L, y: D });
                }
              g(
                5
                /* Rbrace */
              ) && r.current++;
            }
            if (M.length > 0 || E != null || B != null || k != null || I != null) {
              const L = {};
              M.length > 0 && (L.bends = M), E != null && (L.src_side = E), B != null && (L.src_t = B), k != null && (L.dst_side = k), I != null && (L.dst_t = I), C[v] = L;
            }
          } else
            r.current++;
        g(
          5
          /* Rbrace */
        ) && r.current++, a = {
          nodes: Object.keys(x).length ? x : void 0,
          groups: Object.keys(S).length ? S : void 0,
          edges: Object.keys(C).length ? C : void 0
        };
        return;
      }
      if (g(
        13
        /* StyleKw */
      )) {
        if (r.current++, !m(
          4
          /* Lbrace */
        )) {
          e.push("Expected { after style");
          return;
        }
        const x = {}, S = {}, C = {}, v = {};
        for (; !g(
          5
          /* Rbrace */
        ) && !g(
          19
          /* Eof */
        ) && (w(), !(g(
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
            if (r.current++, !g(
              0
              /* Id */
            )) {
              e.push("Expected node ID in style");
              continue;
            }
            const E = n[r.current].value;
            r.current++;
            const B = j(n, r);
            B && Object.keys(B).length > 0 && (x[E] = B);
          } else if (g(
            15
            /* GroupKw */
          )) {
            if (r.current++, !g(
              0
              /* Id */
            )) {
              e.push("Expected group ID in style");
              continue;
            }
            const E = n[r.current].value;
            r.current++;
            const B = j(n, r);
            B && Object.keys(B).length > 0 && (S[E] = B);
          } else if (g(
            16
            /* EdgeKw */
          )) {
            if (r.current++, !g(
              0
              /* Id */
            )) {
              e.push("Expected edge ID in style");
              continue;
            }
            const E = n[r.current].value;
            r.current++;
            const B = j(n, r);
            B && Object.keys(B).length > 0 && (C[E] = B);
          } else if (g(
            14
            /* RelKw */
          )) {
            if (r.current++, !g(
              0
              /* Id */
            )) {
              e.push("Expected relID in style");
              continue;
            }
            const E = n[r.current].value;
            r.current++;
            const B = j(n, r);
            B && Object.keys(B).length > 0 && (v[E] = B);
          } else
            r.current++;
        g(
          5
          /* Rbrace */
        ) && r.current++, h = {
          nodes: Object.keys(x).length ? x : void 0,
          groups: Object.keys(S).length ? S : void 0,
          edges: Object.keys(C).length ? C : void 0,
          rels: Object.keys(v).length ? v : void 0
        };
        return;
      }
      if (g(
        2
        /* String */
      )) {
        const S = n[r.current].value;
        if (r.current++, !m(
          10
          /* As */
        )) {
          e.push('Expected "as" after string');
          return;
        }
        if (!g(
          0
          /* Id */
        )) {
          e.push('Expected group or node ID after "as"');
          return;
        }
        const v = n[r.current].value;
        r.current++;
        const E = j(n, r) ?? void 0;
        if (g(
          4
          /* Lbrace */
        )) {
          m(
            4
            /* Lbrace */
          );
          const B = b(v);
          f(v, S, E, B);
        } else
          c(v, S, E);
        return;
      }
      if (g(
        0
        /* Id */
      )) {
        const x = n[r.current].value, S = r.current + 1 < u ? n[r.current + 1].type : 19;
        if (S === 3) {
          if (r.current++, m(
            3
            /* Arrow */
          ), !g(
            0
            /* Id */
          ) && !g(
            2
            /* String */
          )) {
            e.push("Expected target node after -->");
            return;
          }
          let E;
          n[r.current].type, E = n[r.current].value, r.current++, c(x, x), c(E, E);
          let B, k;
          if (g(
            8
            /* Colon */
          )) {
            if (r.current++, g(
              0
              /* Id */
            ))
              B = n[r.current].value, r.current++, g(
                10
                /* As */
              ) && (r.current++, g(
                2
                /* String */
              ) && (k = n[r.current].value, r.current++));
            else if (g(
              2
              /* String */
            )) {
              const M = n[r.current].value;
              B = M, k = M, r.current++;
            }
          }
          const I = j(n, r) ?? void 0;
          l.push({ from: x, to: E, relId: B, label: k, style: I });
          return;
        }
        let C = S === 4;
        if (S === 6) {
          let E = r.current + 2, B = 1;
          for (; E < u && B > 0; )
            n[E].type === 6 ? B++ : n[E].type === 7 && B--, E++;
          E < u && n[E].type === 4 && (C = !0);
        }
        if (!C && S === 10) {
          let E = r.current + 1;
          if (E + 1 < u && n[E].type === 10 && n[E + 1].type === 2) {
            for (E += 2; E < u && n[E].type === 6; ) {
              let B = 1;
              for (E++; E < u && B > 0; )
                n[E].type === 6 ? B++ : n[E].type === 7 && B--, E++;
            }
            E < u && n[E].type === 4 && (C = !0);
          }
        }
        if (C) {
          const E = n[r.current].value;
          r.current++;
          let B = E;
          g(
            10
            /* As */
          ) && (r.current++, g(
            2
            /* String */
          ) && (B = n[r.current].value, r.current++));
          const k = j(n, r) ?? void 0;
          if (!g(
            4
            /* Lbrace */
          )) {
            e.push("Expected { after group id or style");
            return;
          }
          m(
            4
            /* Lbrace */
          );
          const I = b(E);
          f(E, B !== E ? B : E, k, I);
          return;
        }
        r.current++;
        const v = j(n, r) ?? void 0;
        c(x, x, v);
        return;
      }
      if (g(
        11
        /* Node */
      )) {
        if (r.current++, g(
          2
          /* String */
        )) {
          const x = n[r.current].value;
          if (r.current++, !m(
            10
            /* As */
          )) {
            e.push('Expected "as" after node label');
            return;
          }
          if (!g(
            0
            /* Id */
          )) {
            e.push("Expected node ID");
            return;
          }
          const S = n[r.current].value;
          r.current++;
          const C = j(n, r) ?? void 0;
          c(S, x, C);
        } else if (g(
          0
          /* Id */
        )) {
          const x = n[r.current].value;
          r.current++;
          const S = j(n, r) ?? void 0;
          c(x, x, S);
        }
        return;
      }
      r.current++;
    }
  }
  const A = Math.max(u * 3, 1e4);
  let T = 0;
  for (; r.current < u && !g(
    19
    /* Eof */
  ); ) {
    if (T++ > A) {
      y("Parse iteration limit exceeded (possible infinite loop or malformed input)");
      break;
    }
    if (w(), g(
      19
      /* Eof */
    )) break;
    _();
  }
  return { nodes: o, groups: d, edges: l, layout: a, style: h, warnings: e };
}
function Ji(i, e) {
  if (!i || Object.keys(i).length === 0) return "";
  const t = [];
  return i.color != null && t.push(`color=${i.color}`), i.borderColor != null && t.push(`border=${i.borderColor}`), e || (i.width != null && t.push(`width=${i.width}`), i.height != null && t.push(`height=${i.height}`)), t.length ? `[${t.join(",")}]` : "";
}
function ya(i, e) {
  if (!i) return "";
  const t = [];
  return i.color != null && t.push(`color=${i.color}`), i.weight != null && t.push(`width=${i.weight}`), t.length ? `[${t.join(",")}]` : "";
}
function Qi(i) {
  if (!i || Object.keys(i).length === 0) return "";
  const e = [];
  return i.color != null && e.push(`color=${i.color}`), i.borderColor != null && e.push(`border=${i.borderColor}`), i.borderWidth != null && e.push(`width=${i.borderWidth}`), i.borderDash === !1 ? e.push("dash=false") : i.borderDash === !0 && e.push("dash=true"), e.length ? `[${e.join(",")}]` : "";
}
function ma(i) {
  const e = i.layout, t = i.style, n = Object.values(i.nodes).map((a) => {
    const h = ye(a.style, t?.nodes?.[a.id]);
    let c = h ? wa(h) : void 0;
    const f = e?.nodes?.[a.id], r = f;
    return r && (r.w != null || r.h != null) && (c = { ...c }, r.w != null && (c.width = r.w), r.h != null && (c.height = r.h)), {
      id: a.id,
      label: a.label ?? a.id,
      style: c,
      position: f ? { x: f.x, y: f.y } : void 0
    };
  }), s = Object.values(i.groups).map((a) => {
    const h = ye(a.style, t?.groups?.[a.id]), c = h ? ba(h) : void 0, f = e?.groups?.[a.id], r = a.members.filter((u) => u in i.nodes);
    return {
      id: a.id,
      label: a.label ?? a.id,
      nodeIds: r,
      style: c,
      layout: f ? { position: { x: f.x, y: f.y }, size: { width: f.w, height: f.h } } : void 0
    };
  });
  for (const a of Object.values(i.groups))
    for (const h of a.members)
      if (h in i.groups) {
        const c = s.find((f) => f.id === h);
        c && (c.parentId = a.id);
      }
  const o = s, d = /* @__PURE__ */ new Map(), l = i.edges.map((a) => {
    const h = `${a.from}	${a.to}`, c = (d.get(h) ?? 0) + 1;
    d.set(h, c);
    const f = c === 1 ? `e_${a.from}_${a.to}` : `e_${a.from}_${a.to}_${c}`, r = a.relId ?? "link", u = ye(
      a.style,
      ye(t?.edges?.[f], t?.rels?.[r])
    ), p = u ? _a(u) : void 0, y = a.label ?? p?.label ?? (a.relId && a.relId !== "link" ? a.relId : void 0), g = e?.edges?.[f], m = g?.src_side != null ? { side: g.src_side, t: g.src_t ?? 0.5 } : void 0, w = g?.dst_side != null ? { side: g.dst_side, t: g.dst_t ?? 0.5 } : void 0;
    return {
      id: f,
      src: a.from,
      dst: a.to,
      relType: r,
      style: y ? p ? { ...p, label: y } : { label: y } : p,
      bends: g?.bends?.length ? g.bends : void 0,
      srcAnchor: m,
      dstAnchor: w
    };
  });
  return { nodes: n, edges: l, groups: o };
}
function ye(i, e) {
  if (!(!i && !e))
    return i ? e ? { ...i, ...e } : i : e;
}
function wa(i) {
  const e = {};
  return i.color != null && (e.color = String(i.color)), i.border != null && (e.borderColor = String(i.border)), i.width != null && (e.width = Number(i.width)), i.height != null && (e.height = Number(i.height)), Object.keys(e).length ? e : void 0;
}
function ba(i) {
  const e = {};
  return i.color != null && (e.color = String(i.color)), i.border != null && (e.borderColor = String(i.border)), i.width != null && (e.borderWidth = Number(i.width)), i.dash !== void 0 && (e.borderDash = !!i.dash), Object.keys(e).length ? e : void 0;
}
function _a(i) {
  const e = {};
  return i.color != null && (e.color = String(i.color)), i.width != null && (e.weight = Number(i.width)), i.label != null && (e.label = String(i.label)), Object.keys(e).length ? e : void 0;
}
function Ea(i, e) {
  const t = pa(i);
  return e?.onWarnings && t.warnings.length > 0 && e.onWarnings(t.warnings), ma(t);
}
function Qe(i, e, t, n) {
  const s = [], o = new Set(i.map((a) => a.id));
  function d(a) {
    const h = t.filter((u) => u.parentId === a.id), f = [...a.nodeIds.filter((u) => o.has(u))];
    for (const u of h) f.push(d(u));
    const r = f.join(", ");
    return r ? `${a.id} { ${r} }` : `${a.id} { }`;
  }
  const l = t.filter((a) => !a.parentId);
  for (const a of l) {
    const h = t.filter((y) => y.parentId === a.id), c = a.nodeIds.filter((y) => o.has(y));
    if (!(c.length > 0 || h.length > 0)) continue;
    const r = a.label !== a.id ? `"${a.label.replace(/"/g, '\\"')}" as ${a.id}` : a.id, u = Qi(a.style), p = [...c];
    for (const y of h) p.push(d(y));
    s.push(`${r}${u} { ${p.join(", ")} }`);
  }
  for (const a of i) {
    const h = a.style ? { ...a.style, width: void 0, height: void 0 } : void 0, c = h && Object.keys(h).some((p) => h[p] != null);
    if (!(a.label !== a.id || c)) continue;
    const r = a.label !== a.id ? `"${a.label.replace(/"/g, '\\"')}" as ${a.id}` : a.id, u = Ji(a.style, !0);
    s.push(`${r}${u}`);
  }
  for (const a of e) {
    let h = `${a.src}-->${a.dst}${a.relType && a.relType !== "link" ? ` : ${a.relType}` : ""}`;
    const c = a.style?.label;
    c != null && c !== a.relType && !n?.includeStyle && (h += ` as "${c.replace(/"/g, '\\"')}"`), s.push(h);
  }
  if (n?.includeLayout) {
    const a = [];
    for (const h of i)
      if (h.position != null) {
        const c = h.style?.width, f = h.style?.height, r = [c != null ? `w=${c}` : "", f != null ? `h=${f}` : ""].filter(Boolean).join(" ");
        a.push(`node ${h.id} {x=${h.position.x} y=${h.position.y}${r ? ` ${r}` : ""}}`);
      }
    for (const h of t)
      h.layout && a.push(`group ${h.id} {x=${h.layout.position.x} y=${h.layout.position.y} w=${h.layout.size.width} h=${h.layout.size.height}}`);
    for (const h of e) {
      const c = h.srcAnchor != null || h.dstAnchor != null, f = h.bends != null && h.bends.length > 0;
      if (!c && !f) continue;
      const r = h.srcAnchor?.side ?? "right", u = h.srcAnchor?.t ?? 0.5, p = h.dstAnchor?.side ?? "right", y = h.dstAnchor?.t ?? 0.5, g = c ? ` { src_side=${r}, src_t=${u}, dst_side=${p}, dst_t=${y} }` : "", m = f && h.bends ? ` bends {${h.bends.map((w) => `{x=${w.x},y=${w.y}}`).join(",")}}` : "";
      a.push(`edge ${h.id}${g}${m}`);
    }
    a.length > 0 && (s.push(""), s.push("layout {"), s.push(...a.map((h) => `  ${h}`)), s.push("}"));
  }
  if (n?.includeStyle) {
    const a = [];
    for (const c of i)
      if (c.style && Object.keys(c.style).length > 0) {
        const f = Ji(c.style);
        f && a.push(`node ${c.id} ${f}`);
      }
    for (const c of t)
      if (c.style && Object.keys(c.style).length > 0) {
        const f = Qi(c.style);
        f && a.push(`group ${c.id} ${f}`);
      }
    for (const c of e)
      if (c.style && Object.keys(c.style).length > 0) {
        const f = ya(c.style);
        f && a.push(`edge ${c.id} ${f}`);
      }
    const h = /* @__PURE__ */ new Set();
    for (const c of e)
      if (c.relType && c.relType !== "link" && !h.has(c.relType)) {
        h.add(c.relType);
        const f = c.style?.label;
        if (f != null && f === c.relType) continue;
        const r = [];
        c.style?.color != null && r.push(`color=${c.style.color}`), c.style?.weight != null && r.push(`width=${c.style.weight}`), f != null && r.push(`label=${JSON.stringify(f)}`), r.length > 0 && a.push(`rel ${c.relType} [${r.join(",")}]`);
      }
    a.length > 0 && (s.push(""), s.push("style {"), s.push(...a.map((c) => `  ${c}`)), s.push("}"));
  }
  return s.join(`
`);
}
function it(i, e = 16) {
  return Rt(), `<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <use href="#${i}"></use>
  </svg>`;
}
function tn(i, e) {
  if (!i) return;
  const t = e.split(".");
  let n = i;
  for (const s of t) {
    if (n == null || typeof n != "object") return;
    n = n[s];
  }
  return n;
}
function en(i, e) {
  if (!i || typeof i != "object") return "";
  const t = [];
  function n(s, o) {
    for (const [d, l] of Object.entries(s)) {
      const a = o ? `${o}.${d}` : d;
      l != null && typeof l == "object" && !Array.isArray(l) && !(l instanceof Date) ? n(l, a) : t.push(`${e}.${a}: ${l == null ? "" : String(l)}`);
    }
  }
  return n(i, ""), t.join(`
`);
}
class Ca {
  constructor(e, t) {
    this.currentView = null, this.views = /* @__PURE__ */ new Map(), this.tabButtons = /* @__PURE__ */ new Map(), this.editToggleButton = null, this.alwaysShowEdgesButton = null, this.lightingToggleButton = null, this.tileTypeButton = null, this.moonToggleButton = null, this.fitCenterButton = null, this.deleteBendButton = null, this.undoButton = null, this.redoButton = null, this.cancelEditButton = null, this.exportButton = null, this.plantUMLExportOptions = {
      useShortIds: !0,
      // Default: use short IDs for smaller output
      includeMetadata: !0,
      // Default: include metadata for full restore on import
      outputFormat: "plain"
      // Default: plain text with short IDs
    }, this.tableContainer = null, this.nodesTableContainer = null, this.edgesTableContainer = null, this.groupsTableContainer = null, this.tableOptions = null, this.nodes = [], this.edges = [], this.groups = [], this.isExternalTableContainer = !1, this.hasEdges = !1, this.sharedAlwaysShowEdges = !1, this.sharedLightingEnabled = !1, this.sharedTime = null, this.sharedTileServerIndex = 0, this.container = e, this.enabledViews = t, Rt(), this.container.style.display = "flex", this.container.style.flexDirection = "column", this.container.style.width = "100%", this.tabContainer = document.createElement("div"), this.tabContainer.style.display = "flex", this.tabContainer.style.gap = "4px", this.tabContainer.style.padding = "8px", this.tabContainer.style.borderBottom = "none", this.tabContainer.style.backgroundColor = "transparent", this.tabContainer.style.position = "absolute", this.tabContainer.style.top = "0", this.tabContainer.style.left = "0", this.tabContainer.style.right = "0", this.tabContainer.style.zIndex = "1000", this.tabContainer.style.pointerEvents = "none", this.viewContainer = document.createElement("div"), this.viewContainer.style.flex = "1 1 0%", this.viewContainer.style.position = "relative", this.viewContainer.style.overflow = "hidden", this.viewContainer.style.minHeight = "0", this.createTabButtons(), this.createCommonControlsContainer(), this.container.appendChild(this.viewContainer), this.viewContainer.appendChild(this.tabContainer);
  }
  /**
   * Initialize table display options
   */
  setTableOptions(e) {
    this.tableOptions = e, e && (e.nodes?.format || e.edges?.format || e.groups?.format) ? this.createTableContainer() : this.tableContainer && (this.isExternalTableContainer ? (this.tableContainer.innerHTML = "", this.tableContainer = null, this.isExternalTableContainer = !1) : this.container.contains(this.tableContainer) && (this.container.removeChild(this.tableContainer), this.tableContainer = null), this.nodesTableContainer = null, this.edgesTableContainer = null, this.groupsTableContainer = null);
  }
  /**
   * Set onNodeClick callback (called on table row click)
   */
  setOnNodeClickCallback(e) {
    this.onNodeClickCallback = e;
  }
  /**
   * Create table container
   */
  createTableContainer() {
    if (!this.tableContainer) {
      if (this.tableOptions && "container" in this.tableOptions && this.tableOptions.container) {
        const e = this.tableOptions.container;
        let t = null;
        if (typeof e == "string" ? t = document.querySelector(e) : e instanceof HTMLElement && (t = e), t) {
          this.tableContainer = t, this.isExternalTableContainer = !0;
          return;
        }
      }
      this.tableContainer = document.createElement("div"), this.tableContainer.style.height = "300px", this.tableContainer.style.overflowY = "auto", this.tableContainer.style.backgroundColor = "#fff", this.tableContainer.style.borderTop = "1px solid #ddd", this.isExternalTableContainer = !1, this.container.appendChild(this.tableContainer);
    }
  }
  /**
   * Set node, edge, and group data
   */
  setData(e, t, n) {
    this.nodes = e, this.edges = t, this.groups = n || [], this.hasEdges = Array.isArray(t) && t.length > 0, this.updateTables(), this.updateAlwaysShowEdgesButtonVisibility();
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
        const e = this.wrapTableSection(this.nodesTableContainer, this.tableOptions.nodes.sectionTitle);
        this.tableContainer.appendChild(e);
      }
      if (this.tableOptions.edges?.format) {
        this.edgesTableContainer = this.createTable("edges", this.tableOptions.edges.header || "", this.tableOptions.edges.format, this.edges, "edge");
        const e = this.wrapTableSection(this.edgesTableContainer, this.tableOptions.edges.sectionTitle);
        this.tableContainer.appendChild(e);
      }
      if (this.tableOptions.groups?.format) {
        this.groupsTableContainer = this.createTable("groups", this.tableOptions.groups.header || "", this.tableOptions.groups.format, this.groups, "group");
        const e = this.wrapTableSection(this.groupsTableContainer, this.tableOptions.groups.sectionTitle);
        this.tableContainer.appendChild(e);
      }
    }
  }
  wrapTableSection(e, t) {
    const n = document.createElement("div");
    if (n.className = "relatos-table-section", t) {
      const s = document.createElement("h3");
      s.textContent = t, s.style.margin = "0 0 8px 0", s.style.padding = "8px 12px 0", s.style.fontSize = "14px", s.style.color = "#333", n.appendChild(s);
    }
    return n.appendChild(e), n;
  }
  /**
   * Create table
   */
  createTable(e, t, n, s, o) {
    const d = document.createElement("div"), l = document.createElement("table");
    if (l.style.width = "100%", l.style.borderCollapse = "collapse", !document.getElementById("relatos-table-styles")) {
      const c = document.createElement("style");
      c.id = "relatos-table-styles", c.textContent = `
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
      `, document.head.appendChild(c);
    }
    l.className = "relatos-table";
    const a = document.createElement("thead");
    if (t)
      a.innerHTML = t;
    else {
      const c = document.createElement("tr");
      a.appendChild(c);
    }
    l.appendChild(a);
    const h = document.createElement("tbody");
    for (const c of s) {
      const f = document.createElement("tr");
      f.id = `${o}-${c.id}`, f.style.cursor = "pointer";
      let r = n;
      if (r = r.replace(
        /\{\{info\}\}/g,
        () => en("info" in c ? c.info : void 0, "info")
      ), r = r.replace(
        /\{\{info\.([^}]+)\}\}/g,
        (g, m) => String(tn("info" in c ? c.info : void 0, m) ?? "")
      ), r = r.replace(
        /\{\{meta\}\}/g,
        () => en("meta" in c ? c.meta : void 0, "meta")
      ), r = r.replace(
        /\{\{meta\.([^}]+)\}\}/g,
        (g, m) => String(tn("meta" in c ? c.meta : void 0, m) ?? "")
      ), r = r.replace(/\{\{id\}\}/g, String(c.id || "")), r = r.replace(/\{\{label\}\}/g, String("label" in c && c.label || "")), "position" in c && c.position && typeof c.position == "object") {
        const g = c.position;
        r = r.replace(/\{\{position\.x\}\}/g, String(g.x ?? "")), r = r.replace(/\{\{position\.y\}\}/g, String(g.y ?? "")), r = r.replace(/\{\{x\}\}/g, String(g.x ?? "")), r = r.replace(/\{\{y\}\}/g, String(g.y ?? ""));
      }
      if ("coordinates" in c && c.coordinates && (r = r.replace(/\{\{coordinates\.0\}\}/g, String(c.coordinates[0] || "")), r = r.replace(/\{\{coordinates\.1\}\}/g, String(c.coordinates[1] || "")), r = r.replace(/\{\{latitude\}\}/g, String(c.coordinates[0] || "")), r = r.replace(/\{\{longitude\}\}/g, String(c.coordinates[1] || ""))), c.style && typeof c.style == "object") {
        const g = c.style;
        r = r.replace(/\{\{style\.color\}\}/g, String(g.color ?? "")), r = r.replace(/\{\{style\.borderColor\}\}/g, String(g.borderColor ?? "")), r = r.replace(/\{\{style\.width\}\}/g, String(g.width ?? "")), r = r.replace(/\{\{style\.height\}\}/g, String(g.height ?? "")), r = r.replace(/\{\{style\.weight\}\}/g, String(g.weight ?? "")), r = r.replace(/\{\{style\.label\}\}/g, String(g.label ?? "")), r = r.replace(/\{\{style\.srcLabel\}\}/g, String(g.srcLabel ?? "")), r = r.replace(/\{\{style\.dstLabel\}\}/g, String(g.dstLabel ?? "")), r = r.replace(/\{\{style\.borderDash\}\}/g, String(g.borderDash ?? "")), r = r.replace(/\{\{style\.dash\}\}/g, String(g.borderDash ?? "")), r = r.replace(/\{\{weight\}\}/g, String(g.weight ?? ""));
      }
      if (!("nodeIds" in c) && c.style && typeof c.style == "object") {
        const g = c.style;
        r = r.replace(/\{\{w\}\}/g, String(g.width ?? "")), r = r.replace(/\{\{h\}\}/g, String(g.height ?? ""));
      }
      "src" in c && (r = r.replace(/\{\{src\}\}/g, String(c.src || "")), r = r.replace(/\{\{dst\}\}/g, String(c.dst || "")), r = r.replace(/\{\{relType\}\}/g, String(c.relType || "")));
      const u = c, p = u.srcAnchor ?? u.anchors?.src, y = u.dstAnchor ?? u.anchors?.dst;
      if (r = r.replace(/\{\{src_side\}\}/g, String(p?.side ?? "")), r = r.replace(/\{\{src_t\}\}/g, String(p?.t ?? "")), r = r.replace(/\{\{dst_side\}\}/g, String(y?.side ?? "")), r = r.replace(/\{\{dst_t\}\}/g, String(y?.t ?? "")), r = r.replace(/\{\{src\.x\}\}/g, ""), r = r.replace(/\{\{src\.y\}\}/g, ""), r = r.replace(/\{\{dst\.x\}\}/g, ""), r = r.replace(/\{\{dst\.y\}\}/g, ""), "src" in c) {
        const g = c.bends, m = Array.isArray(g) && g.length > 0 ? g.map((w) => `{x=${w.x},y=${w.y}}`).join(", ") : "";
        r = r.replace(/\{\{bends\}\}/g, m);
      }
      if ("nodeIds" in c) {
        const g = c, m = Array.isArray(s) ? s.filter((w) => w.parentId === g.id).map((w) => w.id) : [];
        r = r.replace(/\{\{nodeIds\}\}/g, String(g.nodeIds?.join(", ") || "")), r = r.replace(/\{\{nodeCount\}\}/g, String(g.nodeIds?.length || 0)), r = r.replace(/\{\{groupIds\}\}/g, String(m.join(", ") || "")), r = r.replace(/\{\{groupCount\}\}/g, String(m.length || 0)), r = r.replace(/\{\{parentId\}\}/g, String(g.parentId || "")), g.layout && (r = r.replace(/\{\{layout\.position\.x\}\}/g, String(g.layout.position.x || "")), r = r.replace(/\{\{layout\.position\.y\}\}/g, String(g.layout.position.y || "")), r = r.replace(/\{\{layout\.size\.width\}\}/g, String(g.layout.size.width || "")), r = r.replace(/\{\{layout\.size\.height\}\}/g, String(g.layout.size.height || "")), r = r.replace(/\{\{x\}\}/g, String(g.layout.position.x ?? "")), r = r.replace(/\{\{y\}\}/g, String(g.layout.position.y ?? "")), r = r.replace(/\{\{w\}\}/g, String(g.layout.size.width ?? "")), r = r.replace(/\{\{h\}\}/g, String(g.layout.size.height ?? "")));
      }
      f.innerHTML = r, f.addEventListener("click", () => {
        if (o === "node") {
          if (this.highlightAndScrollToRow(f), !this.currentView)
            return;
          const g = this.views.get(this.currentView);
          g?.selectNode && g.selectNode(c.id);
        }
      }), h.appendChild(f);
    }
    return l.appendChild(h), d.appendChild(l), d;
  }
  /**
   * Highlight row and scroll to it
   */
  highlightAndScrollToRow(e) {
    const t = this.tableContainer?.querySelector(".highlight");
    t && t.classList.remove("highlight"), e.classList.add("highlight"), setTimeout(() => {
      e.classList.remove("highlight");
    }, 2e3), e.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  /**
   * Highlight row based on node ID (called from onNodeClick)
   */
  highlightNodeRow(e) {
    if (!e || !this.tableContainer)
      return;
    const t = this.tableContainer.querySelector(`#node-${e}`);
    t && this.highlightAndScrollToRow(t);
  }
  /**
   * Highlight rows based on multiple node IDs (called from onEdgeClick)
   * Scrolls to first node
   */
  highlightNodeRows(e) {
    if (!e || e.length === 0 || !this.tableContainer)
      return;
    this.tableContainer.querySelectorAll(".highlight").forEach((s) => s.classList.remove("highlight"));
    let n = null;
    for (const s of e) {
      const o = this.tableContainer?.querySelector(`#node-${s}`);
      o && (o.classList.add("highlight"), n || (n = o), setTimeout(() => {
        o.classList.remove("highlight");
      }, 2e3));
    }
    n && n.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  /**
   * Highlight row and scroll based on edge ID (called from onEdgeClick)
   */
  highlightEdgeRow(e) {
    if (!e || !this.tableContainer)
      return;
    const t = this.tableContainer.querySelector(`#edge-${e}`);
    t && this.highlightAndScrollToRow(t);
  }
  /**
   * Highlight row and scroll based on group ID (called from onGroupClick)
   */
  highlightGroupRow(e) {
    if (!e || !this.tableContainer)
      return;
    const t = this.tableContainer.querySelector(`#group-${e}`);
    t && this.highlightAndScrollToRow(t);
  }
  /**
   * Create common control buttons container (shared across views)
   */
  createCommonControlsContainer() {
    this.commonControlsContainer = document.createElement("div"), this.commonControlsContainer.style.display = "flex", this.commonControlsContainer.style.gap = "4px", this.commonControlsContainer.style.marginLeft = "auto", this.commonControlsContainer.style.pointerEvents = "none", this.createCancelEditButton(), this.createUndoButton(), this.createRedoButton(), this.createEditToggleButton(), this.createAlwaysShowEdgesButton(), this.createDeleteBendButton(), this.createLightingToggleButton(), this.createTileTypeButton(), this.createMoonToggleButton(), this.createFitCenterButton(), this.createExportButton(), this.tabContainer.appendChild(this.commonControlsContainer);
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
    this.alwaysShowEdgesButton = document.createElement("button"), this.alwaysShowEdgesButton.className = "relatos-always-show-edges-toggle", this.alwaysShowEdgesButton.innerHTML = it("icon-relations", 16), this.alwaysShowEdgesButton.setAttribute("aria-label", "Toggle edges"), this.alwaysShowEdgesButton.setAttribute("title", "Toggle edges"), this.alwaysShowEdgesButton.style.padding = "6px", this.alwaysShowEdgesButton.style.border = "1px solid #ccc", this.alwaysShowEdgesButton.style.borderRadius = "4px", this.alwaysShowEdgesButton.style.backgroundColor = "#fff", this.alwaysShowEdgesButton.style.cursor = "pointer", this.alwaysShowEdgesButton.style.fontSize = "16px", this.alwaysShowEdgesButton.style.width = "32px", this.alwaysShowEdgesButton.style.height = "32px", this.alwaysShowEdgesButton.style.display = "flex", this.alwaysShowEdgesButton.style.alignItems = "center", this.alwaysShowEdgesButton.style.justifyContent = "center", this.alwaysShowEdgesButton.style.pointerEvents = "auto", this.alwaysShowEdgesButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.alwaysShowEdgesButton.style.transition = "0.2s", this.alwaysShowEdgesButton.style.color = "#000000", this.alwaysShowEdgesButton.addEventListener("click", () => {
      if (!this.currentView)
        return;
      const e = this.views.get(this.currentView);
      if (e?.getAlwaysShowEdges) {
        const t = e.getAlwaysShowEdges();
        this.setAlwaysShowEdges(!t);
      }
    }), this.commonControlsContainer.appendChild(this.alwaysShowEdgesButton);
  }
  /**
   * Create lighting toggle button (in common controls)
   */
  createLightingToggleButton() {
    this.lightingToggleButton = document.createElement("button"), this.lightingToggleButton.innerHTML = it("icon-sun", 16), this.lightingToggleButton.setAttribute("aria-label", "Toggle lighting"), this.lightingToggleButton.setAttribute("title", "Toggle lighting"), this.lightingToggleButton.style.padding = "6px", this.lightingToggleButton.style.border = "1px solid #ccc", this.lightingToggleButton.style.borderRadius = "4px", this.lightingToggleButton.style.backgroundColor = "#fff", this.lightingToggleButton.style.cursor = "pointer", this.lightingToggleButton.style.fontSize = "16px", this.lightingToggleButton.style.width = "32px", this.lightingToggleButton.style.height = "32px", this.lightingToggleButton.style.display = "none", this.lightingToggleButton.style.alignItems = "center", this.lightingToggleButton.style.justifyContent = "center", this.lightingToggleButton.style.pointerEvents = "auto", this.lightingToggleButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.lightingToggleButton.style.transition = "0.2s", this.lightingToggleButton.addEventListener("click", () => {
      if (!this.currentView)
        return;
      const e = this.views.get(this.currentView);
      if (e?.getLightingEnabled) {
        const t = e.getLightingEnabled();
        this.setLightingEnabled(!t);
      }
    }), this.commonControlsContainer.appendChild(this.lightingToggleButton);
  }
  /**
   * Create tile type button (in common controls)
   */
  createTileTypeButton() {
    this.tileTypeButton = document.createElement("button"), this.tileTypeButton.innerHTML = it("icon-map-tiles", 16), this.tileTypeButton.setAttribute("aria-label", "Switch tile type"), this.tileTypeButton.setAttribute("title", "Switch tile type"), this.tileTypeButton.style.padding = "6px", this.tileTypeButton.style.border = "1px solid #ccc", this.tileTypeButton.style.borderRadius = "4px", this.tileTypeButton.style.backgroundColor = "#fff", this.tileTypeButton.style.cursor = "pointer", this.tileTypeButton.style.fontSize = "16px", this.tileTypeButton.style.width = "32px", this.tileTypeButton.style.height = "32px", this.tileTypeButton.style.display = "none", this.tileTypeButton.style.alignItems = "center", this.tileTypeButton.style.justifyContent = "center", this.tileTypeButton.style.pointerEvents = "auto", this.tileTypeButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.tileTypeButton.style.transition = "0.2s", this.tileTypeButton.addEventListener("click", () => {
      if (!this.currentView)
        return;
      let e = 0;
      for (const t of this.views.values())
        if (t.getTileServerCount) {
          const n = t.getTileServerCount();
          n > e && (e = n);
        }
      if (!(e < 2)) {
        this.sharedTileServerIndex = (this.sharedTileServerIndex + 1) % e;
        for (const t of this.views.values())
          if (t.getTileServerCount && t.setTileServerIndex) {
            const n = t.getTileServerCount();
            if (n > 0) {
              const s = this.sharedTileServerIndex % n;
              t.setTileServerIndex(s);
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
        const e = this.views.get("map2d");
        e && e.toggleMoon && (e.toggleMoon(), this.updateMoonButton());
      }
    }), this.commonControlsContainer.appendChild(this.moonToggleButton);
  }
  /**
   * Update moon button appearance
   */
  updateMoonButton() {
    if (!this.moonToggleButton || this.currentView !== "map2d")
      return;
    const e = this.views.get("map2d");
    if (!e)
      return;
    const t = e.isMoonEnabled?.() || !1, n = e.getTime?.() || null, s = n ? new Date(n) : /* @__PURE__ */ new Date(), o = e.getMoonPhase?.(s) || 0, d = e.getMoonPhaseIcon?.(o, 16) || "🌑";
    this.moonToggleButton.innerHTML = d, t ? (this.moonToggleButton.style.backgroundColor = "#fff9c4", this.moonToggleButton.style.boxShadow = "inset 0 2px 4px rgba(0, 0, 0, 0.2)", this.moonToggleButton.style.transform = "translateY(1px)", this.moonToggleButton.setAttribute("title", "Hide moon")) : (this.moonToggleButton.style.backgroundColor = "#fff", this.moonToggleButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.moonToggleButton.style.transform = "translateY(0)", this.moonToggleButton.setAttribute("title", "Show moon"));
  }
  /**
   * Create fit center button (in common controls)
   */
  createFitCenterButton() {
    this.fitCenterButton = document.createElement("button"), this.fitCenterButton.innerHTML = it("icon-home", 16), this.fitCenterButton.setAttribute("aria-label", "Fit and center"), this.fitCenterButton.setAttribute("title", "Fit and center"), this.fitCenterButton.style.padding = "6px", this.fitCenterButton.style.border = "1px solid #ccc", this.fitCenterButton.style.borderRadius = "4px", this.fitCenterButton.style.backgroundColor = "#fff", this.fitCenterButton.style.cursor = "pointer", this.fitCenterButton.style.fontSize = "16px", this.fitCenterButton.style.width = "32px", this.fitCenterButton.style.height = "32px", this.fitCenterButton.style.display = "flex", this.fitCenterButton.style.alignItems = "center", this.fitCenterButton.style.justifyContent = "center", this.fitCenterButton.style.pointerEvents = "auto", this.fitCenterButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.fitCenterButton.style.transition = "0.2s", this.fitCenterButton.addEventListener("click", () => {
      if (!this.currentView)
        return;
      const e = this.views.get(this.currentView);
      e?.fitAndCenter && e.fitAndCenter();
    }), this.commonControlsContainer.appendChild(this.fitCenterButton);
  }
  /**
   * Create export button (in common controls, all views)
   * Exports nodes, edges, and groups to relat format (with layout) and copies to clipboard
   */
  createExportButton() {
    this.exportButton = document.createElement("button"), this.exportButton.innerHTML = it("icon-export", 16), this.exportButton.setAttribute("aria-label", "Export to relat"), this.exportButton.setAttribute("title", "Export to relat (copy to clipboard)"), this.exportButton.style.padding = "6px", this.exportButton.style.border = "1px solid #ccc", this.exportButton.style.borderRadius = "4px", this.exportButton.style.backgroundColor = "#fff", this.exportButton.style.cursor = "pointer", this.exportButton.style.fontSize = "16px", this.exportButton.style.width = "32px", this.exportButton.style.height = "32px", this.exportButton.style.display = "flex", this.exportButton.style.alignItems = "center", this.exportButton.style.justifyContent = "center", this.exportButton.style.pointerEvents = "auto", this.exportButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.exportButton.style.transition = "0.2s", this.exportButton.addEventListener("click", async () => {
      await this.exportRelatAndCopy();
    }), this.commonControlsContainer.appendChild(this.exportButton);
  }
  /**
   * Export current data to relat format (with layout) and copy to clipboard
   */
  async exportRelatAndCopy() {
    const e = "Export to relat (copy to clipboard)";
    try {
      const t = Qe(this.nodes, this.edges, this.groups, { includeLayout: !0 });
      console.log("Exported relat length:", t.length);
      const n = await ca(t);
      this.exportButton && (n ? (this.exportButton.style.backgroundColor = "#c8e6c9", this.exportButton.style.borderColor = "#4caf50", this.exportButton.setAttribute("title", "Copied to clipboard!"), setTimeout(() => {
        this.exportButton && (this.exportButton.style.backgroundColor = "#fff", this.exportButton.style.borderColor = "#ccc", this.exportButton.setAttribute("title", e));
      }, 2e3)) : (this.exportButton.style.backgroundColor = "#ffcdd2", this.exportButton.style.borderColor = "#f44336", this.exportButton.setAttribute("title", "Failed to copy"), setTimeout(() => {
        this.exportButton && (this.exportButton.style.backgroundColor = "#fff", this.exportButton.style.borderColor = "#ccc", this.exportButton.setAttribute("title", e));
      }, 2e3)));
    } catch (t) {
      console.error("Export failed:", t), this.exportButton && (this.exportButton.style.backgroundColor = "#ffcdd2", this.exportButton.style.borderColor = "#f44336", this.exportButton.setAttribute("title", `Export failed: ${t instanceof Error ? t.message : String(t)}`), setTimeout(() => {
        this.exportButton && (this.exportButton.style.backgroundColor = "#fff", this.exportButton.style.borderColor = "#ccc", this.exportButton.setAttribute("title", e));
      }, 3e3));
    }
  }
  /**
   * Set PlantUML export options
   */
  setPlantUMLExportOptions(e) {
    this.plantUMLExportOptions = { ...this.plantUMLExportOptions, ...e };
  }
  /**
   * Get PlantUML export options
   */
  getPlantUMLExportOptions() {
    return { ...this.plantUMLExportOptions };
  }
  /**
   * Get PlantUML export text
   */
  getPlantUMLExport(e) {
    const t = e || this.plantUMLExportOptions;
    return Xn(this.nodes, this.edges, this.groups, t);
  }
  /**
   * Get relat export text (with layout when includeLayout is true)
   */
  getExportRelat(e) {
    return Qe(this.nodes, this.edges, this.groups, { includeLayout: e ?? !0 });
  }
  /**
   * Create delete bend button (in common controls, Graph only)
   */
  createDeleteBendButton() {
    this.deleteBendButton = document.createElement("button"), this.deleteBendButton.innerHTML = it("icon-trash", 16), this.deleteBendButton.setAttribute("aria-label", "Delete bend point"), this.deleteBendButton.setAttribute("title", "Delete bend point"), this.deleteBendButton.style.padding = "6px", this.deleteBendButton.style.border = "1px solid #ccc", this.deleteBendButton.style.borderRadius = "4px", this.deleteBendButton.style.backgroundColor = "#fff", this.deleteBendButton.style.cursor = "pointer", this.deleteBendButton.style.fontSize = "16px", this.deleteBendButton.style.width = "32px", this.deleteBendButton.style.height = "32px", this.deleteBendButton.style.display = "none", this.deleteBendButton.style.alignItems = "center", this.deleteBendButton.style.justifyContent = "center", this.deleteBendButton.style.pointerEvents = "auto", this.deleteBendButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.deleteBendButton.style.transition = "0.2s", this.deleteBendButton.addEventListener("click", () => {
      if (!this.currentView)
        return;
      const e = this.views.get(this.currentView);
      e?.deleteNearestBendPoint && e.deleteNearestBendPoint();
    });
  }
  /**
   * Create cancel edit button (in common controls, Graph only)
   */
  createCancelEditButton() {
    this.cancelEditButton = document.createElement("button"), this.cancelEditButton.innerHTML = it("icon-close", 16), this.cancelEditButton.setAttribute("aria-label", "Cancel edit"), this.cancelEditButton.setAttribute("title", "Cancel edit and restore previous state"), this.cancelEditButton.style.padding = "6px", this.cancelEditButton.style.border = "1px solid #ccc", this.cancelEditButton.style.borderRadius = "4px", this.cancelEditButton.style.backgroundColor = "#fff", this.cancelEditButton.style.cursor = "pointer", this.cancelEditButton.style.fontSize = "16px", this.cancelEditButton.style.width = "32px", this.cancelEditButton.style.height = "32px", this.cancelEditButton.style.display = "none", this.cancelEditButton.style.alignItems = "center", this.cancelEditButton.style.justifyContent = "center", this.cancelEditButton.style.pointerEvents = "auto", this.cancelEditButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.cancelEditButton.style.transition = "0.2s", this.cancelEditButton.addEventListener("click", () => {
      if (!this.currentView)
        return;
      const e = this.views.get(this.currentView);
      e?.cancelEdit && e.cancelEdit();
    }), this.commonControlsContainer.appendChild(this.cancelEditButton);
  }
  /**
   * Create undo button (Graph edit mode only)
   */
  createUndoButton() {
    this.undoButton = document.createElement("button"), this.undoButton.innerHTML = it("icon-undo", 16), this.undoButton.setAttribute("aria-label", "Undo"), this.undoButton.setAttribute("title", "Undo (Ctrl+Z)"), this.undoButton.style.padding = "6px", this.undoButton.style.border = "1px solid #ccc", this.undoButton.style.borderRadius = "4px", this.undoButton.style.backgroundColor = "#fff", this.undoButton.style.cursor = "pointer", this.undoButton.style.fontSize = "16px", this.undoButton.style.width = "32px", this.undoButton.style.height = "32px", this.undoButton.style.display = "none", this.undoButton.style.alignItems = "center", this.undoButton.style.justifyContent = "center", this.undoButton.style.pointerEvents = "auto", this.undoButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.undoButton.style.transition = "0.2s", this.undoButton.addEventListener("click", () => {
      if (!this.currentView) return;
      const e = this.views.get(this.currentView);
      e?.undo && e.undo();
    }), this.commonControlsContainer.appendChild(this.undoButton);
  }
  /**
   * Create redo button (Graph edit mode only)
   */
  createRedoButton() {
    this.redoButton = document.createElement("button"), this.redoButton.innerHTML = it("icon-redo", 16), this.redoButton.setAttribute("aria-label", "Redo"), this.redoButton.setAttribute("title", "Redo (Ctrl+Shift+Z)"), this.redoButton.style.padding = "6px", this.redoButton.style.border = "1px solid #ccc", this.redoButton.style.borderRadius = "4px", this.redoButton.style.backgroundColor = "#fff", this.redoButton.style.cursor = "pointer", this.redoButton.style.fontSize = "16px", this.redoButton.style.width = "32px", this.redoButton.style.height = "32px", this.redoButton.style.display = "none", this.redoButton.style.alignItems = "center", this.redoButton.style.justifyContent = "center", this.redoButton.style.pointerEvents = "auto", this.redoButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.redoButton.style.transition = "0.2s", this.redoButton.addEventListener("click", () => {
      if (!this.currentView) return;
      const e = this.views.get(this.currentView);
      e?.redo && e.redo();
    }), this.commonControlsContainer.appendChild(this.redoButton);
  }
  /**
   * Update edit toggle button
   */
  updateEditToggleButton() {
    if (!this.editToggleButton || !this.currentView)
      return;
    const e = this.views.get(this.currentView);
    if (!e)
      return;
    if ((e.isEditable?.() || !1) && this.currentView === "graph") {
      this.editToggleButton.style.display = "flex";
      const n = e.getEditToggleButton?.();
      n && (this.editToggleButton.innerHTML = n.innerHTML, this.editToggleButton.setAttribute("aria-label", n.getAttribute("aria-label") || "Toggle edit mode"), this.editToggleButton.setAttribute("title", n.getAttribute("title") || "Toggle edit mode"), this.editToggleButton.className = n.className, this.editToggleButton.style.padding = "6px", this.editToggleButton.style.border = n.style.border || "1px solid #ccc", this.editToggleButton.style.borderRadius = n.style.borderRadius || "4px", this.editToggleButton.style.backgroundColor = n.style.backgroundColor || "#fff", this.editToggleButton.style.color = n.style.color || "#333", this.editToggleButton.style.borderColor = n.style.borderColor || "#ccc", this.editToggleButton.style.cursor = n.style.cursor || "pointer", this.editToggleButton.style.fontSize = "16px", this.editToggleButton.style.width = "32px", this.editToggleButton.style.height = "32px", this.editToggleButton.style.alignItems = "center", this.editToggleButton.style.justifyContent = "center", this.editToggleButton.style.transition = n.style.transition || "0.2s", this.editToggleButton.style.boxShadow = n.style.boxShadow || "0 2px 4px rgba(0, 0, 0, 0.1)", this.editToggleButton.style.transform = n.style.transform || "translateY(0)", this.editToggleButton.onclick = () => {
        n.click();
      });
    } else
      this.editToggleButton.style.display = "none";
  }
  /**
   * Create tab buttons
   */
  createTabButtons() {
    const e = {
      graph: "icon-view-graph",
      map2d: "icon-view-map",
      globe3d: "icon-view-globe3d"
    }, t = {
      graph: "Graph",
      map2d: "Map 2D",
      globe3d: "Globe 3D"
    };
    for (const n of this.enabledViews) {
      const s = document.createElement("button");
      s.innerHTML = it(e[n], 16), s.setAttribute("aria-label", t[n]), s.setAttribute("title", t[n]), s.style.padding = "8px 16px", s.style.border = "1px solid #ccc", s.style.borderRadius = "4px 4px 0 0", s.style.backgroundColor = "#fff", s.style.cursor = "pointer", s.style.fontSize = "14px", s.style.display = "flex", s.style.alignItems = "center", s.style.justifyContent = "center", s.style.color = "#000000", s.style.pointerEvents = "auto", s.style.visibility = "visible", s.style.opacity = "1", s.addEventListener("click", () => {
        this.switchView(n);
      }), this.tabButtons.set(n, s), this.tabContainer.appendChild(s);
    }
  }
  /**
   * Register a view
   */
  registerView(e, t) {
    this.views.set(e, t), t.hide(), this.applySharedToggleStates(t), this.updateEditToggleButton();
  }
  /**
   * Switch view
   */
  switchView(e) {
    if (!this.enabledViews.includes(e) || this.currentView === e)
      return;
    if (this.currentView) {
      const s = this.views.get(this.currentView);
      s && s.hide();
      const o = this.tabButtons.get(this.currentView);
      o && (o.style.backgroundColor = "#fff", o.style.fontWeight = "normal", o.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", o.style.transform = "translateY(0)");
    }
    const t = this.views.get(e);
    t && (this.applySharedToggleStates(t), t.show(), setTimeout(() => {
      this.currentView === e && (this.applySharedToggleStates(t), this.updateLightingButton(), this.updateTileTypeButton(), this.updateMoonButton());
    }, e === "globe3d" ? 500 : 100), t.resize());
    const n = this.tabButtons.get(e);
    n && (n.style.backgroundColor = "#fff9c4", n.style.fontWeight = "bold", n.style.boxShadow = "inset 0 2px 4px rgba(0, 0, 0, 0.2)", n.style.transform = "translateY(1px)"), this.currentView = e, this.updateEditToggleButton(), this.updateCommonControlsVisibility(), this.updateAlwaysShowEdgesButton(), this.updateLightingButton(), this.updateTileTypeButton(), this.updateCancelEditButton(), this.updateDeleteBendButton();
  }
  /**
   * Set initial view
   */
  setInitialView(e) {
    if (!this.enabledViews.includes(e)) {
      this.switchView(this.enabledViews[0]);
      return;
    }
    this.switchView(e);
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
  getView(e) {
    return this.views.get(e);
  }
  /**
   * Resize
   */
  resize() {
    if (this.currentView) {
      const e = this.views.get(this.currentView);
      e && e.resize();
    }
  }
  /**
   * Apply shared toggle button states to a view
   */
  applySharedToggleStates(e) {
    if (e.setAlwaysShowEdges && e.setAlwaysShowEdges(this.sharedAlwaysShowEdges), e.setLightingEnabled) {
      const t = e.setLightingEnabled;
      t && t.call(e, this.sharedLightingEnabled, !1);
    }
    if (e.setTime && this.sharedTime !== null && e.setTime(this.sharedTime), e.getTileServerCount && e.setTileServerIndex) {
      const t = e.getTileServerCount();
      if (t > 0) {
        const n = this.sharedTileServerIndex % t;
        e.setTileServerIndex(n);
      }
    }
  }
  /**
   * Update shared always show edges state and apply to all views
   */
  setAlwaysShowEdges(e) {
    this.sharedAlwaysShowEdges = e;
    for (const t of this.views.values())
      t.setAlwaysShowEdges && t.setAlwaysShowEdges(e);
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
  setLightingEnabled(e) {
    this.sharedLightingEnabled = e;
    for (const t of this.views.values())
      t.setLightingEnabled && t.setLightingEnabled(e);
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
  setTime(e) {
    this.sharedTime = e;
    for (const t of this.views.values())
      t.setTime && t.setTime(e);
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
    const e = this.currentView === "graph", t = this.currentView === "map2d" || this.currentView === "globe3d";
    this.cancelEditButton && t && (this.cancelEditButton.style.display = "none"), this.editToggleButton && t && (this.editToggleButton.style.display = "none"), this.deleteBendButton && (e ? this.updateDeleteBendButton() : this.deleteBendButton.style.display = "none"), this.lightingToggleButton && (this.lightingToggleButton.style.display = t ? "flex" : "none"), this.tileTypeButton && (this.tileTypeButton.style.display = t ? "flex" : "none"), this.moonToggleButton && (this.moonToggleButton.style.display = this.currentView === "map2d" ? "flex" : "none"), this.alwaysShowEdgesButton && (this.alwaysShowEdgesButton.style.display = this.hasEdges ? "flex" : "none"), this.fitCenterButton && (this.fitCenterButton.style.display = "flex"), this.reorderButtons();
  }
  /**
   * Reorder buttons based on current view
   * Graph: Delete bend, Cancel, Edit toggle, Always show edges, Fit/Center
   * Map2D/Globe3D: Moon toggle (Map2D only), Lighting toggle, Tile type, Always show edges, Fit/Center
   */
  reorderButtons() {
    const e = this.currentView === "graph", t = this.currentView === "map2d" || this.currentView === "globe3d";
    if (!this.commonControlsContainer)
      return;
    const n = [];
    for (this.cancelEditButton && n.push(this.cancelEditButton), this.undoButton && n.push(this.undoButton), this.redoButton && n.push(this.redoButton), this.editToggleButton && n.push(this.editToggleButton), this.deleteBendButton && n.push(this.deleteBendButton), this.lightingToggleButton && n.push(this.lightingToggleButton), this.moonToggleButton && n.push(this.moonToggleButton), this.tileTypeButton && n.push(this.tileTypeButton), this.alwaysShowEdgesButton && this.hasEdges && n.push(this.alwaysShowEdgesButton), this.fitCenterButton && n.push(this.fitCenterButton), this.exportButton && n.push(this.exportButton); this.commonControlsContainer.firstChild; )
      this.commonControlsContainer.removeChild(this.commonControlsContainer.firstChild);
    e ? (this.undoButton && this.commonControlsContainer.appendChild(this.undoButton), this.redoButton && this.commonControlsContainer.appendChild(this.redoButton), this.deleteBendButton && this.commonControlsContainer.appendChild(this.deleteBendButton), this.cancelEditButton && this.commonControlsContainer.appendChild(this.cancelEditButton), this.editToggleButton && this.commonControlsContainer.appendChild(this.editToggleButton), this.alwaysShowEdgesButton && this.hasEdges && this.commonControlsContainer.appendChild(this.alwaysShowEdgesButton), this.fitCenterButton && this.commonControlsContainer.appendChild(this.fitCenterButton), this.exportButton && this.commonControlsContainer.appendChild(this.exportButton)) : t && (this.moonToggleButton && this.currentView === "map2d" && this.commonControlsContainer.appendChild(this.moonToggleButton), this.lightingToggleButton && this.commonControlsContainer.appendChild(this.lightingToggleButton), this.tileTypeButton && this.commonControlsContainer.appendChild(this.tileTypeButton), this.alwaysShowEdgesButton && this.hasEdges && this.commonControlsContainer.appendChild(this.alwaysShowEdgesButton), this.fitCenterButton && this.commonControlsContainer.appendChild(this.fitCenterButton), this.exportButton && this.commonControlsContainer.appendChild(this.exportButton));
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
    const e = this.views.get(this.currentView);
    if (!e)
      return;
    e.getAlwaysShowEdges?.() ?? this.sharedAlwaysShowEdges ? (this.alwaysShowEdgesButton.setAttribute("aria-label", "Hide edges"), this.alwaysShowEdgesButton.setAttribute("title", "Hide edges"), this.alwaysShowEdgesButton.classList.add("relatos-always-show-edges-active"), this.alwaysShowEdgesButton.style.backgroundColor = "#fff9c4", this.alwaysShowEdgesButton.style.color = "#000000", this.alwaysShowEdgesButton.style.borderColor = "#999", this.alwaysShowEdgesButton.style.boxShadow = "inset 0 2px 4px rgba(0, 0, 0, 0.2)", this.alwaysShowEdgesButton.style.transform = "translateY(1px)") : (this.alwaysShowEdgesButton.setAttribute("aria-label", "Show edges"), this.alwaysShowEdgesButton.setAttribute("title", "Show edges"), this.alwaysShowEdgesButton.classList.remove("relatos-always-show-edges-active"), this.alwaysShowEdgesButton.style.backgroundColor = "#fff", this.alwaysShowEdgesButton.style.color = "#333", this.alwaysShowEdgesButton.style.borderColor = "#ccc", this.alwaysShowEdgesButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.alwaysShowEdgesButton.style.transform = "translateY(0)");
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
    let e = 0;
    for (const t of this.views.values())
      if (t.getTileServerCount) {
        const n = t.getTileServerCount();
        n > e && (e = n);
      }
    if (e >= 2) {
      this.tileTypeButton.style.display = "flex";
      const t = this.sharedTileServerIndex % e;
      this.tileTypeButton.setAttribute(
        "title",
        `Tile server ${t + 1}/${e} (click to switch)`
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
    const e = this.views.get(this.currentView);
    if (!e) {
      this.cancelEditButton.style.display = "none";
      return;
    }
    const n = e.getMode?.() === "edit";
    this.cancelEditButton.style.display = n ? "flex" : "none";
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
    const e = this.views.get(this.currentView);
    if (!e) {
      this.deleteBendButton.style.display = "none";
      return;
    }
    const t = e, n = t.getSelectedEdgeId?.();
    if (n && t.hasBendPoints) {
      const s = t.hasBendPoints(n);
      this.deleteBendButton.style.display = s ? "flex" : "none";
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
    const e = this.views.get(this.currentView);
    if (!e) {
      this.undoButton.style.display = "none", this.redoButton.style.display = "none";
      return;
    }
    const t = e;
    if (!(t.getMode?.() === "edit")) {
      this.undoButton.style.display = "none", this.redoButton.style.display = "none";
      return;
    }
    this.undoButton.style.display = "flex", this.redoButton.style.display = "flex", this.undoButton.disabled = !t.canUndo?.(), this.redoButton.disabled = !t.canRedo?.();
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
    for (const e of this.views.values())
      e.destroy();
    this.views.clear(), this.tabButtons.clear(), this.container.contains(this.tabContainer) && this.container.removeChild(this.tabContainer), this.container.contains(this.viewContainer) && this.container.removeChild(this.viewContainer);
  }
}
function Ht(i, e = 16) {
  return Rt(), `<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <use href="#${i}"></use>
  </svg>`;
}
const Ee = class Ee {
  constructor(e, t, n, s = !1, o, d) {
    this.nodes = [], this.edges = [], this.groups = [], this.mode = "view", this.editable = !1, this.nodeElements = /* @__PURE__ */ new Map(), this.edgeElements = /* @__PURE__ */ new Map(), this.selectedEdgeId = null, this.selectedNodeId = null, this.zoomedNodeId = null, this.anchorHandles = /* @__PURE__ */ new Map(), this.draggingAnchor = null, this.bendHandles = /* @__PURE__ */ new Map(), this.draggingBend = null, this.draggingNode = null, this.draggingGroup = null, this.panning = null, this.lastPanEndTime = 0, this.resizingNode = null, this.resizingGroup = null, this.saveDebounceTimer = null, this.SAVE_DEBOUNCE_MS = 500, this.resizeRenderTimer = null, this.editToggleButton = null, this.alwaysShowEdgesButton = null, this.alwaysShowEdges = !1, this.hoveredEdgePairKey = null, this.tappedEdgePairKey = null, this.snapshotBeforeEdit = null, this.edgeClickTimers = /* @__PURE__ */ new WeakMap(), this.undoStack = [], this.redoStack = [], this.offsetX = 0, this.offsetY = 0, this.zoom = 1, this.pinchDistance = null, this.pinchCenter = null, this.initialZoom = 1, this.popupElement = null, this.popupNodeId = null, this.DEFAULT_NODE_WIDTH = 120, this.DEFAULT_NODE_HEIGHT = 60, this.EDGE_DEFAULT_COLOR = "#999", this.EDGE_HOVER_COLOR = "#333", this.EDGE_DEFAULT_WIDTH = 1.5, this.EDGE_HOVER_WIDTH = 3, this.EDGE_MIN_WEIGHT = 1, this.EDGE_MAX_WEIGHT = 10, this.NODE_PADDING = 10, this.HANDLE_RADIUS = 8, this.BEND_HANDLE_RADIUS = 7, this.HIT_PATH_WIDTH = 32, this.controlButtonsContainer = null, this.deleteBendButton = null, this.fitCenterButton = null, this.cancelEditButton = null, this.container = e, this.onNodeClick = t ? (l) => {
      this.popupNodeId === l.node.id && this.popupElement && this.popupElement.style.opacity === "1" ? this.hidePopup() : this.showPopup(l.node), t(l);
    } : void 0, this.onSave = n, this.editable = s, this.onEdgeClick = o, this.onGroupClick = d, this.container.style.position = "relative", this.container.style.width = "100%", this.container.style.height = "100%", this.container.style.overflow = "visible", this.createAlwaysShowEdgesButton(), this.alwaysShowEdgesButton && (this.alwaysShowEdgesButton.style.display = "none", this.alwaysShowEdgesButton.parentNode && this.alwaysShowEdgesButton.parentNode.removeChild(this.alwaysShowEdgesButton)), this.createEditToggleButton(), this.editToggleButton && (this.editToggleButton.style.display = "none", this.editToggleButton.parentNode && this.editToggleButton.parentNode.removeChild(this.editToggleButton)), this.createControlButtons(), this.controlButtonsContainer && (this.controlButtonsContainer.style.display = "none", this.controlButtonsContainer.parentNode && this.controlButtonsContainer.parentNode.removeChild(this.controlButtonsContainer)), this.createAttributionLabel(), this.svgWrapper = document.createElement("div"), this.svgWrapper.style.position = "absolute", this.svgWrapper.style.top = "0", this.svgWrapper.style.left = "0", this.svgWrapper.style.width = "100%", this.svgWrapper.style.height = "100%", this.svgWrapper.style.transformOrigin = "0 0", this.svgWrapper.style.pointerEvents = "none", this.container.appendChild(this.svgWrapper), this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"), this.svg.style.width = "100%", this.svg.style.height = "100%", this.svg.style.display = "block", this.svg.style.pointerEvents = "auto", this.svgWrapper.appendChild(this.svg), this.svgDefs = document.createElementNS("http://www.w3.org/2000/svg", "defs"), this.createArrowMarkers(), this.svg.appendChild(this.svgDefs), this.groupsGroup = document.createElementNS("http://www.w3.org/2000/svg", "g"), this.groupsGroup.setAttribute("class", "groups"), this.svg.appendChild(this.groupsGroup), this.edgesGroup = document.createElementNS("http://www.w3.org/2000/svg", "g"), this.edgesGroup.setAttribute("class", "edges"), this.svg.appendChild(this.edgesGroup), this.nodesGroup = document.createElementNS("http://www.w3.org/2000/svg", "g"), this.nodesGroup.setAttribute("class", "nodes"), this.svg.appendChild(this.nodesGroup), this.anchorHandlesGroup = document.createElementNS("http://www.w3.org/2000/svg", "g"), this.anchorHandlesGroup.setAttribute("class", "anchor-handles"), this.anchorHandlesGroup.style.display = "none", this.svg.appendChild(this.anchorHandlesGroup), this.bendHandlesGroup = document.createElementNS("http://www.w3.org/2000/svg", "g"), this.bendHandlesGroup.setAttribute("class", "bend-handles"), this.bendHandlesGroup.style.display = "none", this.svg.appendChild(this.bendHandlesGroup), this.edgeLabelsGroup = document.createElementNS("http://www.w3.org/2000/svg", "g"), this.edgeLabelsGroup.setAttribute("class", "edge-labels"), this.svg.appendChild(this.edgeLabelsGroup), this.updateTransform(), this.setupEventListeners();
  }
  /**
   * Create always show edges toggle button
   */
  createAlwaysShowEdgesButton() {
    this.alwaysShowEdgesButton = document.createElement("button"), this.alwaysShowEdgesButton.className = "relatos-always-show-edges-toggle", this.alwaysShowEdgesButton.setAttribute("aria-label", "Always show all edges"), this.alwaysShowEdgesButton.setAttribute("title", "Always show all edges"), this.alwaysShowEdgesButton.style.padding = "6px", this.alwaysShowEdgesButton.style.border = "1px solid #ccc", this.alwaysShowEdgesButton.style.borderRadius = "4px", this.alwaysShowEdgesButton.style.backgroundColor = "#fff", this.alwaysShowEdgesButton.style.cursor = "pointer", this.alwaysShowEdgesButton.style.fontSize = "16px", this.alwaysShowEdgesButton.style.lineHeight = "1", this.alwaysShowEdgesButton.style.width = "32px", this.alwaysShowEdgesButton.style.height = "32px", this.alwaysShowEdgesButton.style.display = "flex", this.alwaysShowEdgesButton.style.alignItems = "center", this.alwaysShowEdgesButton.style.justifyContent = "center", this.alwaysShowEdgesButton.style.transition = "all 0.2s", this.alwaysShowEdgesButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.alwaysShowEdgesButton.style.pointerEvents = "auto", this.alwaysShowEdgesButton.style.color = "#000000", this.alwaysShowEdgesButton.innerHTML = Ht("icon-relations", 16), this.alwaysShowEdgesButton.addEventListener("click", () => {
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
    this.editToggleButton && (this.editToggleButton.innerHTML = Ht("icon-edit", 16), this.mode === "edit" ? (this.editToggleButton.setAttribute("aria-label", "Exit edit mode"), this.editToggleButton.setAttribute("title", "Exit edit mode"), this.editToggleButton.classList.add("relatos-edit-toggle-active"), this.editToggleButton.style.backgroundColor = "#fff9c4", this.editToggleButton.style.color = "red", this.editToggleButton.style.borderColor = "#999", this.editToggleButton.style.boxShadow = "inset 0 2px 4px rgba(0, 0, 0, 0.2)", this.editToggleButton.style.transform = "translateY(1px)") : (this.editToggleButton.setAttribute("aria-label", "Enter edit mode"), this.editToggleButton.setAttribute("title", "Enter edit mode"), this.editToggleButton.classList.remove("relatos-edit-toggle-active"), this.editToggleButton.style.backgroundColor = "#fff", this.editToggleButton.style.color = "#333", this.editToggleButton.style.borderColor = "#ccc", this.editToggleButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.editToggleButton.style.transform = "translateY(0)"));
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
    this.controlButtonsContainer = document.createElement("div"), this.controlButtonsContainer.style.position = "absolute", this.controlButtonsContainer.style.top = "8px", this.controlButtonsContainer.style.right = "8px", this.controlButtonsContainer.style.display = "flex", this.controlButtonsContainer.style.gap = "4px", this.controlButtonsContainer.style.zIndex = "1000", this.controlButtonsContainer.style.pointerEvents = "none", this.deleteBendButton = this.createIconButton(Ht("icon-trash", 16), "Delete bend point", "Delete bend point", () => {
      this.selectedEdgeId && this.deleteNearestBendPoint();
    }), this.deleteBendButton.style.display = "none", this.fitCenterButton = this.createIconButton(Ht("icon-home", 16), "Fit and center", "Fit and center", () => {
      this.fitAndCenter();
    }), this.fitCenterButton.style.display = "none", this.cancelEditButton = this.createIconButton(Ht("icon-close", 16), "Cancel edit", "Cancel edit and restore previous state", () => {
      this.restoreSnapshot(), this.setMode("view");
    }), this.cancelEditButton.style.display = "none", this.controlButtonsContainer.appendChild(this.deleteBendButton), this.controlButtonsContainer.appendChild(this.fitCenterButton), this.controlButtonsContainer.appendChild(this.cancelEditButton);
  }
  /**
   * Create attribution label
   */
  createAttributionLabel() {
    const e = document.createElement("div");
    e.style.position = "absolute", e.style.bottom = "8px", e.style.left = "8px", e.style.zIndex = "1000", e.style.pointerEvents = "auto", e.style.fontSize = "12px", e.style.fontFamily = "Arial, sans-serif", e.style.color = "#333", e.style.backgroundColor = "rgba(255, 255, 255, 0.8)", e.style.padding = "4px 8px", e.style.borderRadius = "4px", e.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.2)";
    const t = document.createElement("a");
    t.href = "https://humanhistories.org/en/histoverse/", t.target = "_blank", t.rel = "noopener noreferrer", t.textContent = "Relatos", t.style.color = "#333", t.style.textDecoration = "none", t.style.cursor = "pointer", t.addEventListener("mouseenter", () => {
      t.style.textDecoration = "underline", t.style.color = "#0066cc";
    }), t.addEventListener("mouseleave", () => {
      t.style.textDecoration = "none", t.style.color = "#333";
    }), e.appendChild(t), this.container.appendChild(e);
  }
  /**
   * Create an icon-only button
   */
  createIconButton(e, t, n, s) {
    const o = document.createElement("button");
    return o.innerHTML = e, o.setAttribute("aria-label", t), o.setAttribute("title", n), o.style.padding = "6px", o.style.border = "1px solid #ccc", o.style.borderRadius = "4px", o.style.backgroundColor = "#fff", o.style.cursor = "pointer", o.style.fontSize = "16px", o.style.width = "32px", o.style.height = "32px", o.style.display = "flex", o.style.alignItems = "center", o.style.justifyContent = "center", o.style.pointerEvents = "auto", o.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", o.style.transition = "all 0.2s", o.addEventListener("click", (d) => {
      d.stopPropagation(), s();
    }), o.addEventListener("mouseenter", () => {
      o.style.backgroundColor = "#f5f5f5";
    }), o.addEventListener("mouseleave", () => {
      o.style.backgroundColor = "#fff";
    }), o;
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
  zoomToPoint(e, t, n) {
    const s = this.screenToSvg(t, n);
    this.zoom, this.zoom = e;
    const o = this.container.getBoundingClientRect(), d = t - o.left, l = n - o.top, a = {
      x: d / this.zoom - this.offsetX,
      y: l / this.zoom - this.offsetY
    }, h = s.x - a.x, c = s.y - a.y;
    this.offsetX += h, this.offsetY += c;
  }
  /**
   * Convert screen coordinates to SVG coordinates accounting for offset and zoom
   * With DOM scale transform, wrapper size is (100% / zoom) and then scaled by zoom
   * The visual size is always 100%, so we can use container coordinates
   */
  screenToSvg(e, t) {
    const n = this.container.getBoundingClientRect(), s = e - n.left, o = t - n.top, d = s / this.zoom, l = o / this.zoom;
    return {
      x: d - this.offsetX,
      y: l - this.offsetY
    };
  }
  /**
   * Update transform: zoom on DOM wrapper, translate on SVG groups
   */
  updateTransform() {
    if (this.popupNodeId && this.popupElement) {
      const d = this.nodes.find((l) => l.id === this.popupNodeId);
      d && this.updatePopupPosition(d);
    }
    const e = isFinite(this.zoom) && this.zoom > 0 ? this.zoom : 1, t = isFinite(this.offsetX) ? this.offsetX : 0, n = isFinite(this.offsetY) ? this.offsetY : 0, s = 1 / e;
    this.svgWrapper.style.width = `${s * 100}%`, this.svgWrapper.style.height = `${s * 100}%`, this.svgWrapper.style.transform = `scale(${e})`;
    const o = `translate(${-t}, ${-n})`;
    this.nodesGroup.setAttribute("transform", o), this.edgesGroup.setAttribute("transform", o), this.groupsGroup.setAttribute("transform", o), this.anchorHandlesGroup.setAttribute("transform", o), this.bendHandlesGroup.setAttribute("transform", o), this.edgeLabelsGroup && this.edgeLabelsGroup.setAttribute("transform", o);
  }
  /**
   * Fit and center the graph by adjusting offset and zoom
   */
  fitAndCenter() {
    if (this.nodes.length === 0)
      return;
    const e = this.container.getBoundingClientRect();
    if (e.width <= 0 || e.height <= 0 || !isFinite(e.width) || !isFinite(e.height))
      return;
    let t = 1 / 0, n = 1 / 0, s = -1 / 0, o = -1 / 0;
    for (const m of this.nodes)
      if (m.position) {
        const w = m.style || {}, b = w.width || this.DEFAULT_NODE_WIDTH, _ = w.height || this.DEFAULT_NODE_HEIGHT;
        t = Math.min(t, m.position.x - b / 2), n = Math.min(n, m.position.y - _ / 2), s = Math.max(s, m.position.x + b / 2), o = Math.max(o, m.position.y + _ / 2);
      }
    for (const m of this.edges) {
      const w = this.getEdgePoints(m);
      for (const b of w)
        t = Math.min(t, b.x), n = Math.min(n, b.y), s = Math.max(s, b.x), o = Math.max(o, b.y);
    }
    if (t === 1 / 0)
      return;
    const d = 60;
    t -= d, n -= d, s += d, o += d;
    const l = (t + s) / 2, a = (n + o) / 2, h = s - t, c = o - n, f = this.container.getBoundingClientRect();
    if (f.width <= 0 || f.height <= 0 || !isFinite(h) || !isFinite(c) || h <= 0 || c <= 0)
      return;
    const r = f.width / h, u = f.height / c;
    if (!isFinite(r) || !isFinite(u))
      return;
    const p = Math.min(r, u, 1);
    this.zoom = p;
    const y = f.width / (2 * this.zoom), g = f.height / (2 * this.zoom);
    !isFinite(l) || !isFinite(a) || !isFinite(y) || !isFinite(g) || (this.offsetX = l - y, this.offsetY = a - g, this.svg.removeAttribute("viewBox"), this.updateTransform(), this.render());
  }
  /**
   * Fit and center with animation
   */
  animateFitAndCenter() {
    if (this.nodes.length === 0)
      return;
    const e = this.container.getBoundingClientRect();
    if (e.width <= 0 || e.height <= 0 || !isFinite(e.width) || !isFinite(e.height))
      return;
    let t = 1 / 0, n = 1 / 0, s = -1 / 0, o = -1 / 0;
    for (const m of this.nodes)
      if (m.position) {
        const w = m.style || {}, b = w.width || this.DEFAULT_NODE_WIDTH, _ = w.height || this.DEFAULT_NODE_HEIGHT;
        t = Math.min(t, m.position.x - b / 2), n = Math.min(n, m.position.y - _ / 2), s = Math.max(s, m.position.x + b / 2), o = Math.max(o, m.position.y + _ / 2);
      }
    if (t === 1 / 0)
      return;
    const d = 60;
    t -= d, n -= d, s += d, o += d;
    const l = (t + s) / 2, a = (n + o) / 2, h = s - t, c = o - n, f = this.container.getBoundingClientRect();
    if (f.width <= 0 || f.height <= 0 || !isFinite(h) || !isFinite(c) || h <= 0 || c <= 0)
      return;
    const r = f.width / h, u = f.height / c;
    if (!isFinite(r) || !isFinite(u))
      return;
    const p = Math.min(r, u, 1), y = f.width / 2, g = f.height / 2;
    this.animateZoomToPoint(p, y, g, l, a);
  }
  /**
   * Setup event listeners (using Pointer Events for touch support)
   */
  setupEventListeners() {
    this.svg.addEventListener("click", (s) => {
      const o = s.target;
      o.closest("[data-node-id]") || o.getAttribute("data-edge-pair-key") || o.getAttribute("data-hit-edge-pair-key") || Date.now() - (this.lastPanEndTime || 0) < 100 || this.mode === "view" && this.hidePopup();
    }), this.svg.addEventListener("pointerdown", (s) => {
      const o = s.target, d = o.closest("[data-node-id]")?.getAttribute("data-node-id"), l = o.getAttribute("data-edge-pair-key") || o.getAttribute("data-hit-edge-pair-key"), a = o.getAttribute("data-handle-type"), h = o.getAttribute("data-bend-index");
      if (this.mode === "edit") {
        const c = o.getAttribute("data-resize-side");
        if (c) {
          const f = o.getAttribute("data-node-id");
          if (f) {
            const r = this.nodes.find((u) => u.id === f);
            if (r?.position) {
              this.pushUndoState();
              const u = r.style || {}, p = u.width || this.DEFAULT_NODE_WIDTH, y = u.height || this.DEFAULT_NODE_HEIGHT, g = this.screenToSvg(s.clientX, s.clientY);
              this.resizingNode = {
                nodeId: f,
                side: c,
                startX: g.x,
                startY: g.y,
                startWidth: p,
                startHeight: y,
                startNodeX: r.position.x,
                startNodeY: r.position.y
              }, s.target.setPointerCapture(s.pointerId), s.preventDefault(), s.stopPropagation();
              return;
            }
          }
        }
        if (d) {
          const f = this.nodes.find((r) => r.id === d);
          if (f?.position) {
            this.pushUndoState();
            const r = this.screenToSvg(s.clientX, s.clientY);
            this.draggingNode = {
              nodeId: d,
              offsetX: r.x - f.position.x,
              offsetY: r.y - f.position.y
            }, s.target.setPointerCapture(s.pointerId), s.preventDefault(), s.stopPropagation();
            return;
          }
        } else if (h !== null) {
          const f = o.getAttribute("data-edge-id");
          if (f) {
            const r = this.screenToSvg(s.clientX, s.clientY), u = this.edges.find((p) => p.id === f);
            if (u) {
              const [p, y] = u.src < u.dst ? [u.src, u.dst] : [u.dst, u.src], g = `${p}||${y}`, m = this.groupEdgesByPair(this.edges).find((w) => w.key === g);
              if (m && m.bends) {
                const w = parseInt(h, 10);
                if (w >= 0 && w < m.bends.length) {
                  this.pushUndoState();
                  const b = m.bends[w];
                  this.draggingBend = {
                    edgeId: f,
                    bendIndex: w,
                    offsetX: r.x - b.x,
                    offsetY: r.y - b.y
                  }, s.preventDefault(), s.stopPropagation();
                  return;
                }
              }
            }
          }
        } else if (a) {
          const f = o.getAttribute("data-edge-id");
          if (f) {
            const r = this.screenToSvg(s.clientX, s.clientY), u = this.edges.find((p) => p.id === f);
            if (u) {
              const [p, y] = u.src < u.dst ? [u.src, u.dst] : [u.dst, u.src], g = `${p}||${y}`, m = this.groupEdgesByPair(this.edges).find((w) => w.key === g);
              if (m) {
                const w = a === "src" ? m.a : m.b, b = this.nodes.find((_) => _.id === w);
                if (b) {
                  const _ = a === "src" ? m.b : m.a, A = this.nodes.find((T) => T.id === _);
                  if (A) {
                    this.pushUndoState();
                    const T = a === "src" ? m.srcAnchor || this.estimateAnchor(b, A) : m.dstAnchor || this.estimateAnchor(b, A), x = b.style || {}, S = x.width || this.DEFAULT_NODE_WIDTH, C = x.height || this.DEFAULT_NODE_HEIGHT, v = this.calculateAnchorPosition(b, T, S, C);
                    this.draggingAnchor = {
                      edgeId: f,
                      type: a,
                      offsetX: r.x - v.x,
                      offsetY: r.y - v.y
                    }, s.preventDefault(), s.stopPropagation();
                    return;
                  }
                }
              }
            }
          }
        } else l || this.deselectEdge();
      } else if (d) {
        const c = this.nodes.find((f) => f.id === d);
        if (c && this.onNodeClick) {
          const f = this.screenToSvg(s.clientX, s.clientY);
          this.onNodeClick({
            node: c,
            position: { x: f.x, y: f.y },
            originalEvent: s
          });
        }
      } else l || (this.deselectEdge(), this.tappedEdgePairKey && (this.tappedEdgePairKey = null, this.render()));
    });
    let e = 0, t = null;
    this.svg.addEventListener("pointerdown", (s) => {
      const o = s.target, d = o.getAttribute("data-edge-pair-key") || o.getAttribute("data-hit-edge-pair-key");
      if (this.mode === "edit" && d) {
        const l = Date.now();
        if (l - e < 300 && t === o) {
          const h = this.groupEdgesByPair(this.edges).find((c) => c.key === d);
          if (h && h.edges.length > 0) {
            this.insertBendPoint(h.edges[0].id, s), s.preventDefault(), s.stopPropagation(), e = 0, t = null;
            return;
          }
        }
        e = l, t = o;
      }
    }), this.container.addEventListener("dblclick", (s) => {
      if (this.mode !== "edit")
        return;
      const o = s.target;
      if (!o || !this.container.contains(o))
        return;
      const d = o.getAttribute("data-hit-edge-pair-key") || o.getAttribute("data-edge-pair-key");
      if (d) {
        const a = this.groupEdgesByPair(this.edges).find((h) => h.key === d);
        if (a && a.edges.length > 0) {
          this.insertBendPoint(a.edges[0].id, s), s.preventDefault(), s.stopPropagation();
          return;
        }
      }
      let l = o;
      for (; l && l !== this.svg; ) {
        const a = l.getAttribute("data-hit-edge-pair-key") || l.getAttribute("data-edge-pair-key");
        if (a) {
          const h = this.groupEdgesByPair(this.edges).find((c) => c.key === a);
          if (h && h.edges.length > 0) {
            this.insertBendPoint(h.edges[0].id, s), s.preventDefault(), s.stopPropagation();
            return;
          }
        }
        l = l.parentElement;
      }
    }, !0);
    const n = /* @__PURE__ */ new Map();
    this.svg.addEventListener("pointerdown", (s) => {
      if (s.pointerType === "touch" && (n.set(s.pointerId, s), n.size === 2)) {
        const o = Array.from(n.values()), [d, l] = o;
        this.pinchDistance = Math.hypot(l.clientX - d.clientX, l.clientY - d.clientY), this.pinchCenter = {
          x: (d.clientX + l.clientX) / 2,
          y: (d.clientY + l.clientY) / 2
        }, this.initialZoom = this.zoom, s.preventDefault();
      }
    }), this.svg.addEventListener("pointermove", (s) => {
      if (s.pointerType === "touch" && n.set(s.pointerId, s), this.pinchDistance !== null && this.pinchCenter !== null && n.size === 2) {
        const h = Array.from(n.values()), [c, f] = h, u = Math.hypot(f.clientX - c.clientX, f.clientY - c.clientY) / this.pinchDistance, p = Math.pow(u, 1.5), y = Math.max(0.1, Math.min(5, this.initialZoom * p));
        this.zoomToPoint(y, this.pinchCenter.x, this.pinchCenter.y), this.updateTransform(), this.render(), s.preventDefault();
        return;
      }
      const o = s.target, d = o instanceof HTMLButtonElement || o.closest("button") !== null || o.closest(".relatos-always-show-edges-toggle") !== null || o.closest(".relatos-edit-toggle") !== null || o.closest(".relatos-control-buttons") !== null, l = s.pointerType === "touch" && n.size === 1, a = s.pointerType === "mouse" && s.buttons === 1;
      if (!d && !this.resizingNode && !this.resizingGroup && !this.draggingNode && !this.draggingGroup && !this.draggingAnchor && !this.draggingBend && (l || a)) {
        if (!this.panning)
          this.panning = {
            startX: s.clientX,
            startY: s.clientY,
            startOffsetX: this.offsetX,
            startOffsetY: this.offsetY
          };
        else {
          const h = s.clientX - this.panning.startX, c = s.clientY - this.panning.startY, f = h / this.zoom, r = c / this.zoom;
          this.offsetX = this.panning.startOffsetX + f, this.offsetY = this.panning.startOffsetY + r, this.updateTransform(), this.render();
        }
        s.preventDefault();
        return;
      }
      this.resizingNode ? this.updateNodeSize(s) : this.resizingGroup ? this.updateGroupSize(s) : this.draggingNode ? this.updateNodePosition(s) : this.draggingGroup ? this.updateGroupPosition(s) : this.draggingAnchor ? this.updateAnchorPosition(s) : this.draggingBend && this.updateBendPosition(s);
    }), document.addEventListener("pointermove", (s) => {
      s.pointerType === "touch" && n.set(s.pointerId, s);
      const o = s.target;
      if (!(o instanceof HTMLButtonElement || o.closest("button") !== null || o.closest(".relatos-always-show-edges-toggle") !== null || o.closest(".relatos-edit-toggle") !== null || o.closest(".relatos-control-buttons") !== null) && this.panning && !this.resizingNode && !this.resizingGroup && !this.draggingNode && !this.draggingGroup && !this.draggingAnchor && !this.draggingBend) {
        const l = s.pointerType === "touch" && n.size === 1, a = s.pointerType === "mouse" && (s.buttons === 1 || s.button === 0);
        if (l || a) {
          const h = s.clientX - this.panning.startX, c = s.clientY - this.panning.startY, f = h / this.zoom, r = c / this.zoom;
          this.offsetX = this.panning.startOffsetX - f, this.offsetY = this.panning.startOffsetY - r, this.updateTransform(), this.render(), s.preventDefault();
          return;
        }
      }
      this.resizingNode ? this.updateNodeSize(s) : this.resizingGroup ? this.updateGroupSize(s) : this.draggingNode ? this.updateNodePosition(s) : this.draggingGroup ? this.updateGroupPosition(s) : this.draggingAnchor ? this.updateAnchorPosition(s) : this.draggingBend && this.updateBendPosition(s);
    }), this.svg.addEventListener("pointerup", (s) => {
      s.pointerType === "touch" && (n.delete(s.pointerId), n.size < 2 && (this.pinchDistance = null, this.pinchCenter = null)), s.target instanceof SVGElement && s.target.releasePointerCapture(s.pointerId), this.resizingNode && this.handleResizeEnd(), this.panning && (this.lastPanEndTime = Date.now()), this.panning = null, this.resizingNode ? this.handleResizeEnd() : this.resizingGroup && this.handleGroupResizeEnd(), this.resizingNode = null, this.resizingGroup = null, this.draggingNode = null, this.draggingGroup = null, this.draggingAnchor = null, this.draggingBend = null;
    }), document.addEventListener("pointerup", (s) => {
      s.pointerType === "touch" && (n.delete(s.pointerId), n.size < 2 && (this.pinchDistance = null, this.pinchCenter = null)), this.resizingNode && this.handleResizeEnd(), this.panning && (this.lastPanEndTime = Date.now()), this.panning = null, this.resizingNode ? this.handleResizeEnd() : this.resizingGroup && this.handleGroupResizeEnd(), this.resizingNode = null, this.resizingGroup = null, this.draggingNode = null, this.draggingGroup = null, this.draggingAnchor = null, this.draggingBend = null;
    }), this.svg.addEventListener("pointercancel", (s) => {
      s.pointerType === "touch" && (n.delete(s.pointerId), n.size < 2 && (this.pinchDistance = null, this.pinchCenter = null)), s.target instanceof SVGElement && s.target.releasePointerCapture(s.pointerId), this.resizingNode && this.handleResizeEnd(), this.panning && (this.lastPanEndTime = Date.now()), this.panning = null, this.resizingNode ? this.handleResizeEnd() : this.resizingGroup && this.handleGroupResizeEnd(), this.resizingNode = null, this.resizingGroup = null, this.draggingNode = null, this.draggingGroup = null, this.draggingAnchor = null, this.draggingBend = null;
    }), this.container.addEventListener("keydown", (s) => {
      if (this.mode === "edit") {
        if ((s.ctrlKey || s.metaKey) && s.key === "z" && !s.shiftKey) {
          this.canUndo() && (this.undo(), s.preventDefault());
          return;
        }
        if ((s.ctrlKey || s.metaKey) && (s.key === "y" || s.key === "z" && s.shiftKey)) {
          this.canRedo() && (this.redo(), s.preventDefault());
          return;
        }
        this.selectedEdgeId && (s.key === "Delete" || s.key === "Backspace") && (this.deleteNearestBendPoint(), s.preventDefault());
      }
    }), this.container.setAttribute("tabindex", "0"), this.container.addEventListener("wheel", (s) => {
      if (s.ctrlKey || s.metaKey) {
        s.preventDefault();
        const o = Math.pow(1.5, -s.deltaY / 60), d = Math.max(0.1, Math.min(5, this.zoom * o));
        this.zoomToPoint(d, s.clientX, s.clientY), this.updateTransform(), this.render();
      } else {
        s.preventDefault();
        const o = Math.pow(1.5, s.deltaY / 60), d = Math.max(0.1, Math.min(5, this.zoom * o));
        this.zoomToPoint(d, s.clientX, s.clientY), this.updateTransform(), this.render();
      }
    }, { passive: !1 });
  }
  /**
   * Create arrow markers
   */
  createArrowMarkers() {
    const e = document.createElementNS("http://www.w3.org/2000/svg", "marker");
    e.setAttribute("id", "arrow-end"), e.setAttribute("viewBox", "0 0 10 10"), e.setAttribute("refX", "9"), e.setAttribute("refY", "5"), e.setAttribute("markerWidth", "6"), e.setAttribute("markerHeight", "6"), e.setAttribute("orient", "auto");
    const t = document.createElementNS("http://www.w3.org/2000/svg", "path");
    t.setAttribute("d", "M 0 0 L 10 5 L 0 10 z"), t.setAttribute("fill", "#333"), e.appendChild(t), this.svgDefs.appendChild(e);
    const n = document.createElementNS("http://www.w3.org/2000/svg", "marker");
    n.setAttribute("id", "arrow-start"), n.setAttribute("viewBox", "0 0 10 10"), n.setAttribute("refX", "1"), n.setAttribute("refY", "5"), n.setAttribute("markerWidth", "6"), n.setAttribute("markerHeight", "6"), n.setAttribute("orient", "auto");
    const s = document.createElementNS("http://www.w3.org/2000/svg", "path");
    s.setAttribute("d", "M 10 0 L 0 5 L 10 10 z"), s.setAttribute("fill", "#333"), n.appendChild(s), this.svgDefs.appendChild(n);
  }
  /**
   * Set data
   */
  setData(e, t, n) {
    this.nodes = e, this.edges = t, this.groups = n || [], this.ensureNodePositions(), this.render(), this.container.style.display !== "none" && this.container.offsetParent !== null && setTimeout(() => {
      const s = this.container.getBoundingClientRect();
      s.width > 0 && s.height > 0 && this.fitAndCenter();
    }, 100);
  }
  /**
   * Select node (highlight)
   * @param nodeId Node ID to select (null to deselect)
   * @param zoomToNode Whether to zoom in to node (default: true)
   */
  selectNode(e, t = !0) {
    if (e && t && this.zoomedNodeId === e) {
      this.zoomedNodeId = null, this.selectedNodeId = e, this.render(), this.animateFitAndCenter();
      return;
    }
    if (this.selectedNodeId = e, e ? this.zoomedNodeId = e : this.zoomedNodeId = null, this.render(), e && t) {
      this.zoomToNode(e);
      const n = this.nodes.find((s) => s.id === e);
      n && this.showPopup(n);
    } else e || (this.zoomedNodeId = null, this.hidePopup());
  }
  /**
   * Zoom in to specified node (with animation like Leaflet's flyTo)
   * @param nodeId Node ID to zoom to
   */
  zoomToNode(e) {
    const t = this.nodes.find((w) => w.id === e);
    if (!t || !t.position)
      return;
    const n = this.container.getBoundingClientRect();
    if (n.width <= 0 || n.height <= 0)
      return;
    const s = t.style || {}, o = s.width || this.DEFAULT_NODE_WIDTH, d = s.height || this.DEFAULT_NODE_HEIGHT, l = t.position.x + o / 2, a = t.position.y + d / 2;
    o * this.zoom, d * this.zoom;
    const h = Math.min(n.width * 0.3, n.height * 0.3), c = h / o, f = h / d, r = Math.min(c, f), y = Math.max(0.5, Math.min(3, r)), g = n.width / 2, m = n.height / 2;
    this.animateZoomToPoint(y, g, m, l, a);
  }
  /**
   * Zoom to specified point with animation
   * @param targetZoom Target zoom level
   * @param screenCenterX Screen center X coordinate (relative to container)
   * @param screenCenterY Screen center Y coordinate (relative to container)
   * @param targetSvgX Target SVG X coordinate
   * @param targetSvgY Target SVG Y coordinate
   */
  animateZoomToPoint(e, t, n, s, o) {
    const d = this.zoom, l = this.offsetX, a = this.offsetY, h = this.container.getBoundingClientRect(), c = h.width / (2 * e), f = h.height / (2 * e), r = s - c, u = o - f, p = 500, y = performance.now(), g = (m) => {
      const w = m - y, b = Math.min(w / p, 1), _ = 1 - Math.pow(1 - b, 3), A = d + (e - d) * _, T = l + (r - l) * _, x = a + (u - a) * _;
      if (this.zoom = A, this.offsetX = T, this.offsetY = x, this.updateTransform(), this.render(), b >= 1) {
        const S = this.container.getBoundingClientRect(), C = S.width / 2, v = S.height / 2;
        C / this.zoom - this.offsetX, v / this.zoom - this.offsetY;
      }
      b < 1 && requestAnimationFrame(g);
    };
    requestAnimationFrame(g);
  }
  /**
   * Ensure node position information (auto-layout if not present)
   * If coordinates (latitude/longitude) exist, place based on lat/lon,
   * otherwise place in remaining 1/4 area
   */
  ensureNodePositions() {
    const e = this.nodes.filter((w) => w.coordinates && w.coordinates.length === 2), t = this.nodes.filter((w) => !w.coordinates || w.coordinates.length !== 2), n = this.nodes.filter((w) => !w.position), s = this.nodes.every((w) => w.position), o = this.groups.every((w) => w.layout);
    if (s && o || n.length === 0 && e.length === 0 && t.length === 0)
      return;
    const d = this.container.getBoundingClientRect(), l = d.width || 1e3, a = d.height || 600, h = 2, c = l * h * 0.25, f = l * h * 0.75, r = a * h, u = c, p = a * h, y = 0, g = [];
    for (const w of this.nodes)
      if (w.position) {
        const b = w.style || {}, _ = b.width || this.DEFAULT_NODE_WIDTH, A = b.height || this.DEFAULT_NODE_HEIGHT;
        if (g.push({
          x: w.position.x - _ / 2,
          y: w.position.y - A / 2,
          width: _,
          height: A
        }), w.coordinates && w.coordinates.length === 2) {
          const [T, x] = w.coordinates;
        }
      }
    if (e.length > 0) {
      const w = e.map((I) => I.coordinates[0]), b = e.map((I) => I.coordinates[1]), _ = Math.min(...w), A = Math.max(...w), T = Math.min(...b), x = Math.max(...b), S = A - _, C = x - T, v = Math.max(S, C) * 0.1 || 0.01, E = {
        minLat: _ - v,
        maxLat: A + v,
        minLon: T - v,
        maxLon: x + v
      }, B = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map();
      for (const I of e) {
        const [M, L] = I.coordinates, D = (L - E.minLon) / (E.maxLon - E.minLon), P = 1 - (M - E.minLat) / (E.maxLat - E.minLat), O = {
          x: u + D * f,
          y: P * r
        }, X = I.style || {}, F = X.width || this.DEFAULT_NODE_WIDTH, bt = X.height || this.DEFAULT_NODE_HEIGHT, V = O.x, G = O.y;
        B.set(I.id, { originalCenterX: V, originalCenterY: G }), k.set(I.id, {
          node: I,
          width: F,
          height: bt,
          originalCenterX: V,
          originalCenterY: G
        });
      }
      this.resolveNodePositionsWithVectorConstraints(k, B);
    }
    const m = t.filter((w) => !w.position);
    if (m.length > 0) {
      const b = Math.ceil(Math.sqrt(m.length)), _ = Math.ceil(m.length / b), A = c - 40, T = p - 40, x = A / b, S = T / _;
      m.forEach((C, v) => {
        const E = C.style || {}, B = E.width || this.DEFAULT_NODE_WIDTH, k = E.height || this.DEFAULT_NODE_HEIGHT, I = Math.floor(v / b), M = v % b, L = y + 20 + (M + 0.5) * x, D = 20 + (I + 0.5) * S;
        C.position = { x: L, y: D }, g.push({
          x: L - B / 2,
          y: D - k / 2,
          width: B,
          height: k
        });
      });
    }
    if (this.groups.length > 0) {
      const w = (_) => {
        if (!_.parentId) return 0;
        const A = this.groups.find((T) => T.id === _.parentId);
        return A ? 1 + w(A) : 0;
      }, b = [...this.groups].sort((_, A) => w(A) - w(_));
      for (const _ of b) {
        const A = this.calculateGroupBounds(_.nodeIds, _.id);
        A && (_.layout = {
          position: { x: A.minX, y: A.minY },
          size: {
            width: A.maxX - A.minX,
            height: A.maxY - A.minY
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
  resolveNodePositionsWithVectorConstraints(e, t) {
    const h = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
    for (const y of this.groups)
      y.layout && c.add(y.id);
    const f = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
    for (const [y, g] of e) {
      const m = g.node, w = t.get(y);
      m.position ? (f.set(y, { centerX: m.position.x, centerY: m.position.y }), h.add(y)) : f.set(y, {
        centerX: w.originalCenterX,
        centerY: w.originalCenterY
      });
      const b = f.get(y);
      r.set(y, {
        x: b.centerX - g.width / 2,
        y: b.centerY - g.height / 2,
        width: g.width,
        height: g.height
      });
    }
    const u = (y) => {
      const g = [];
      for (const m of this.groups) {
        const w = /* @__PURE__ */ new Set(), b = (_) => {
          for (const T of _.nodeIds)
            w.add(T);
          const A = this.groups.filter((T) => T.parentId === _.id);
          for (const T of A)
            b(T);
        };
        b(m), w.has(y) && g.push(m);
      }
      return g;
    }, p = (y) => {
      if (c.has(y.id) && y.layout)
        return {
          minX: y.layout.position.x,
          maxX: y.layout.position.x + y.layout.size.width,
          minY: y.layout.position.y,
          maxY: y.layout.position.y + y.layout.size.height
        };
      const g = this.groups.some((C) => C.parentId === y.id), m = /* @__PURE__ */ new Set();
      if (g) {
        const C = this.groups.filter((v) => v.parentId === y.id);
        for (const v of C) {
          const E = (B) => {
            for (const I of B.nodeIds)
              m.add(I);
            const k = this.groups.filter((I) => I.parentId === B.id);
            for (const I of k)
              E(I);
          };
          E(v);
        }
      }
      let w = 1 / 0, b = -1 / 0, _ = 1 / 0, A = -1 / 0, T = !1;
      for (const C of y.nodeIds) {
        if (g && m.has(C))
          continue;
        const v = r.get(C);
        v && (T = !0, w = Math.min(w, v.x), b = Math.max(b, v.x + v.width), _ = Math.min(_, v.y), A = Math.max(A, v.y + v.height));
      }
      if (g) {
        const C = this.groups.filter((v) => v.parentId === y.id);
        for (const v of C) {
          const E = p(v);
          E && (T = !0, w = Math.min(w, E.minX), b = Math.max(b, E.maxX), _ = Math.min(_, E.minY), A = Math.max(A, E.maxY));
        }
      }
      if (!T)
        return null;
      const x = g ? 50 : 30, S = x + 25;
      return {
        minX: w - x,
        maxX: b + x,
        minY: _ - S,
        maxY: A + x
      };
    };
    for (let y = 0; y < 100; y++) {
      let g = !1;
      const m = Array.from(e.entries());
      for (let w = 0; w < m.length; w++) {
        const [b, _] = m[w], A = f.get(b), T = r.get(b), x = u(b);
        for (let S = w + 1; S < m.length; S++) {
          const [C, v] = m[S], E = f.get(C), B = r.get(C), k = u(C), I = t.get(b), M = t.get(C), L = M.originalCenterX - I.originalCenterX, D = M.originalCenterY - I.originalCenterY, P = Math.sqrt(L * L + D * D);
          if (P === 0) continue;
          const O = L / P, X = D / P;
          let F = !1, bt = 0;
          for (const V of x) {
            const G = p(V);
            if (G)
              for (const _t of k) {
                let ct = !1;
                if (V.id === _t.id)
                  ct = !0;
                else {
                  const Q = (rt, ut) => {
                    if (ut.parentId === rt.id) return !0;
                    if (!ut.parentId) return !1;
                    const tt = this.groups.find((at) => at.id === ut.parentId);
                    return tt ? Q(rt, tt) : !1;
                  };
                  ct = Q(V, _t) || Q(_t, V);
                }
                if (ct) continue;
                const H = p(_t);
                if (!H) continue;
                const Bt = G.minX < H.maxX + 60 && G.maxX + 60 > H.minX, kt = G.minY < H.maxY + 60 && G.maxY + 60 > H.minY;
                if (Bt && kt) {
                  F = !0;
                  const Q = (G.minX + G.maxX) / 2, rt = (G.minY + G.maxY) / 2, ut = (H.minX + H.maxX) / 2, tt = (H.minY + H.maxY) / 2, at = ut - Q, ae = tt - rt, Te = Math.sqrt(at * at + ae * ae), Ae = G.maxX - G.minX, le = G.maxY - G.minY, he = H.maxX - H.minX, Yn = H.maxY - H.minY, Wn = Math.abs(Ae * O) + Math.abs(le * X), Vn = Math.abs(he * O) + Math.abs(Yn * X), hi = (Wn + Vn) / 2 + 60;
                  Te < hi && (bt = Math.max(bt, hi));
                }
              }
          }
          if (F && bt > 0) {
            g = !0;
            const V = E.centerX - A.centerX, G = E.centerY - A.centerY;
            if (Math.sqrt(V * V + G * G) < bt) {
              const ct = h.has(b), H = h.has(C);
              if (ct && H)
                continue;
              const Bt = bt / P, kt = L * Bt, Q = D * Bt, rt = I.originalCenterX + kt, ut = I.originalCenterY + Q, tt = (rt - E.centerX) / 2, at = (ut - E.centerY) / 2;
              ct || (A.centerX -= tt, A.centerY -= at, T.x = A.centerX - _.width / 2, T.y = A.centerY - _.height / 2), H || (E.centerX += tt, E.centerY += at, B.x = E.centerX - v.width / 2, B.y = E.centerY - v.height / 2);
            }
          }
          if (!F) {
            const V = h.has(b), G = h.has(C);
            if (V && G)
              continue;
            const _t = T.x < B.x + B.width + 20 && T.x + T.width + 20 > B.x, ct = T.y < B.y + B.height + 20 && T.y + T.height + 20 > B.y;
            if (_t && ct) {
              g = !0;
              const H = Math.abs(_.width * O) + Math.abs(_.height * X), Bt = Math.abs(v.width * O) + Math.abs(v.height * X), kt = (H + Bt) / 2 + 20, Q = E.centerX - A.centerX, rt = E.centerY - A.centerY;
              if (Math.sqrt(Q * Q + rt * rt) < kt) {
                const tt = kt / P, at = L * tt, ae = D * tt, Te = I.originalCenterX + at, Ae = I.originalCenterY + ae, le = (Te - E.centerX) / 2, he = (Ae - E.centerY) / 2;
                V || (A.centerX -= le, A.centerY -= he, T.x = A.centerX - _.width / 2, T.y = A.centerY - _.height / 2), G || (E.centerX += le, E.centerY += he, B.x = E.centerX - v.width / 2, B.y = E.centerY - v.height / 2);
              }
            }
          }
        }
      }
      if (!g)
        break;
    }
    for (const [y, g] of e) {
      if (h.has(y))
        continue;
      const m = f.get(y);
      g.node.position = {
        x: m.centerX,
        y: m.centerY
      };
    }
    for (const y of this.groups) {
      const g = p(y);
      g && (y.layout = {
        position: { x: g.minX, y: g.minY },
        size: {
          width: g.maxX - g.minX,
          height: g.maxY - g.minY
        }
      });
    }
  }
  /**
   * Resolve group-group collisions for same-level groups
   * Maintains original positional relationships (left-right, top-bottom)
   * and prevents overlaps between groups at the same hierarchy level
   */
  resolveGroupPositionsWithOrderConstraints(e) {
    const s = [], o = (a) => {
      const h = /* @__PURE__ */ new Set(), c = (p) => {
        for (const g of p.nodeIds)
          h.add(g);
        const y = this.groups.filter((g) => g.parentId === p.id);
        for (const g of y)
          c(g);
      };
      if (c(a), h.size === 0)
        return null;
      let f = 0, r = 0, u = 0;
      for (const p of h) {
        const y = e.get(p);
        y && (f += y.originalCenterX, r += y.originalCenterY, u++);
      }
      return u === 0 ? null : {
        x: f / u,
        y: r / u
      };
    }, d = (a) => {
      if (!a.parentId) return 0;
      const h = this.groups.find((c) => c.id === a.parentId);
      return h ? 1 + d(h) : 0;
    };
    for (const a of this.groups) {
      const h = this.getGroupLayout(a);
      if (!h) continue;
      const c = o(a);
      c && s.push({
        group: a,
        layout: h,
        originalCenter: c,
        level: d(a)
      });
    }
    const l = /* @__PURE__ */ new Map();
    for (const a of s) {
      l.has(a.level) || l.set(a.level, /* @__PURE__ */ new Map());
      const h = l.get(a.level), c = a.group.parentId || null;
      h.has(c) || h.set(c, []), h.get(c).push(a);
    }
    for (const [a, h] of l)
      for (const [c, f] of h)
        if (!(f.length < 2)) {
          f.sort((r, u) => {
            const p = r.originalCenter.y - u.originalCenter.y;
            return Math.abs(p) > 10 ? p : r.originalCenter.x - u.originalCenter.x;
          });
          for (let r = 0; r < 50; r++) {
            let u = !1;
            for (let p = 1; p < f.length; p++) {
              const y = f[p], g = y.layout.position.x, m = g + y.layout.size.width;
              for (let w = 0; w < p; w++) {
                const b = f[w], _ = b.layout.position.x, A = _ + b.layout.size.width;
                if (g < A + 60 && m + 60 > _) {
                  const T = y.layout.position.y, x = T + y.layout.size.height, S = b.layout.position.y, C = S + b.layout.size.height;
                  if (T < C + 60 && x + 60 > S) {
                    u = !0;
                    const v = A + 60 - g;
                    y.layout.position.x += v;
                    const E = this.calculateGroupBounds(y.group.nodeIds, y.group.id);
                    E && (y.layout.size = {
                      width: E.maxX - E.minX,
                      height: E.maxY - E.minY
                    });
                  }
                }
              }
            }
            for (let p = 1; p < f.length; p++) {
              const y = f[p], g = y.layout.position.y, m = g + y.layout.size.height;
              for (let w = 0; w < p; w++) {
                const b = f[w], _ = b.layout.position.y, A = _ + b.layout.size.height;
                if (g < A + 60 && m + 60 > _) {
                  const T = y.layout.position.x, x = T + y.layout.size.width, S = b.layout.position.x, C = S + b.layout.size.width;
                  if (T < C + 60 && x + 60 > S) {
                    u = !0;
                    const v = A + 60 - g;
                    y.layout.position.y += v;
                    const E = this.calculateGroupBounds(y.group.nodeIds, y.group.id);
                    E && (y.layout.size = {
                      width: E.maxX - E.minX,
                      height: E.maxY - E.minY
                    });
                  }
                }
              }
            }
            if (!u)
              break;
          }
          for (const r of f)
            r.group.layout = r.layout;
        }
  }
  /**
   * Compact layout: reduce excess space while maintaining position relationships
   * Nodes and groups maintain their relative positions (left-right, top-bottom)
   * Same-level groups must not overlap
   */
  compactLayout(e) {
    const s = (a) => {
      const h = /* @__PURE__ */ new Set(), c = (p) => {
        for (const g of p.nodeIds)
          h.add(g);
        const y = this.groups.filter((g) => g.parentId === p.id);
        for (const g of y)
          c(g);
      };
      if (c(a), h.size === 0) return null;
      let f = 0, r = 0, u = 0;
      for (const p of h) {
        const y = e.get(p);
        y && (f += y.originalCenterX, r += y.originalCenterY, u++);
      }
      return u > 0 ? { x: f / u, y: r / u } : null;
    }, o = (a) => {
      if (!a.parentId) return 0;
      const h = this.groups.find((c) => c.id === a.parentId);
      return h ? 1 + o(h) : 0;
    }, d = Array.from(this.nodes).filter((a) => a.position);
    d.sort((a, h) => {
      const c = e.get(a.id), f = e.get(h.id);
      if (!c || !f) return 0;
      const r = c.originalCenterY - f.originalCenterY;
      return Math.abs(r) > 10 ? r : c.originalCenterX - f.originalCenterX;
    });
    for (let a = 1; a < d.length; a++) {
      const h = d[a];
      if (!h.position) continue;
      const f = (h.style || {}).width || this.DEFAULT_NODE_WIDTH, r = h.position.x - f / 2;
      let u = -1 / 0;
      for (let p = 0; p < a; p++) {
        const y = d[p];
        if (!y.position) continue;
        const m = (y.style || {}).width || this.DEFAULT_NODE_WIDTH, w = y.position.x + m / 2;
        u = Math.max(u, w);
      }
      if (u > -1 / 0) {
        const p = u + 20;
        if (r > p) {
          const y = p - r;
          h.position.x += y;
        }
      }
    }
    for (let a = 1; a < d.length; a++) {
      const h = d[a];
      if (!h.position) continue;
      const f = (h.style || {}).height || this.DEFAULT_NODE_HEIGHT, r = h.position.y - f / 2;
      let u = -1 / 0;
      for (let p = 0; p < a; p++) {
        const y = d[p];
        if (!y.position) continue;
        const m = (y.style || {}).height || this.DEFAULT_NODE_HEIGHT, w = y.position.y + m / 2;
        u = Math.max(u, w);
      }
      if (u > -1 / 0) {
        const p = u + 20;
        if (r > p) {
          const y = p - r;
          h.position.y += y;
        }
      }
    }
    const l = /* @__PURE__ */ new Map();
    for (const a of this.groups) {
      const h = o(a);
      l.has(h) || l.set(h, /* @__PURE__ */ new Map());
      const c = l.get(h), f = a.parentId || null;
      c.has(f) || c.set(f, []), c.get(f).push(a);
    }
    for (const [a, h] of l)
      for (const [c, f] of h)
        if (!(f.length < 2)) {
          f.sort((r, u) => {
            const p = s(r), y = s(u);
            if (!p || !y) return 0;
            const g = p.y - y.y;
            return Math.abs(g) > 10 ? g : p.x - y.x;
          });
          for (let r = 1; r < f.length; r++) {
            const u = f[r], p = this.getGroupLayout(u);
            if (!p) continue;
            const y = p.position.x;
            let g = -1 / 0;
            for (let m = 0; m < r; m++) {
              const w = f[m], b = this.getGroupLayout(w);
              if (!b) continue;
              const _ = b.position.x + b.size.width;
              g = Math.max(g, _);
            }
            if (g > -1 / 0) {
              const m = g + 60;
              if (y > m) {
                const w = m - y;
                p.position.x += w, u.layout = p;
              }
            }
          }
          for (let r = 1; r < f.length; r++) {
            const u = f[r], p = this.getGroupLayout(u);
            if (!p) continue;
            const y = p.position.y;
            let g = -1 / 0;
            for (let m = 0; m < r; m++) {
              const w = f[m], b = this.getGroupLayout(w);
              if (!b) continue;
              const _ = b.position.y + b.size.height;
              g = Math.max(g, _);
            }
            if (g > -1 / 0) {
              const m = g + 60;
              if (y > m) {
                const w = m - y;
                p.position.y += w, u.layout = p;
              }
            }
          }
        }
  }
  /**
   * Adjust node positions to avoid overlap with other nodes (old implementation, kept for backward compatibility)
   * Adjust while preserving original positional relationships (east-west, north-south)
   */
  adjustNodePosition(e, t, n, s, o = 20) {
    let l = e.x, a = e.y;
    const h = e.width, c = e.height, f = n?.originalX ?? e.x, r = n?.originalY ?? e.y, u = t.map((p, y) => {
      const g = p.width || this.DEFAULT_NODE_WIDTH, m = p.height || this.DEFAULT_NODE_HEIGHT, w = p.x + g / 2, b = p.y + m / 2, _ = w - f, A = b - r;
      return {
        x: p.x,
        y: p.y,
        width: g,
        height: m,
        centerX: w,
        centerY: b,
        relativeDx: _,
        // Infer original positional relationship (relationship between existing nodes' current positions and original node's original position)
        relativeDy: A,
        originalCenterX: w,
        // Existing node's current position (inferred original position)
        originalCenterY: b
      };
    });
    for (let p = 0; p < o; p++) {
      let y = !1, g = l, m = a, w = 1 / 0;
      for (const b of u)
        if (l < b.x + b.width + 20 && l + h + 20 > b.x && a < b.y + b.height + 20 && a + c + 20 > b.y) {
          y = !0;
          const _ = l + h / 2, A = a + c / 2, T = b.centerX - _, x = b.centerY - A, S = Math.sqrt(T * T + x * x);
          if (S > 0) {
            const C = (h + b.width) / 2 + 20;
            let v = T, E = x;
            if (Math.abs(b.relativeDx) > 0.1 || Math.abs(b.relativeDy) > 0.1)
              if (Math.abs(b.relativeDx) > Math.abs(b.relativeDy))
                v = (b.relativeDx > 0 ? -1 : 1) * Math.abs(T) / S * C, E = x / S * C * 0.5;
              else {
                const F = b.relativeDy > 0 ? -1 : 1;
                v = T / S * C * 0.5, E = F * Math.abs(x) / S * C;
              }
            else
              v = T / S * C, E = x / S * C;
            const B = l + v, k = a + E, I = Math.sqrt(
              Math.pow(B - f, 2) + Math.pow(k - r, 2)
            ), M = B + h / 2, L = k + c / 2, D = M - f, P = L - r;
            let O = 0;
            (b.relativeDx > 0 && D < b.relativeDx || b.relativeDx < 0 && D > b.relativeDx) && (O += 1e3), (b.relativeDy > 0 && P < b.relativeDy || b.relativeDy < 0 && P > b.relativeDy) && (O += 1e3);
            const X = I + O;
            X < w && (w = X, g = B, m = k);
          } else {
            const C = (h + b.width) / 2 + 20;
            let v = 0, E = 0;
            if (b.relativeDx !== 0 || b.relativeDy !== 0) {
              const M = b.relativeDx > 0 ? -1 : 1, L = b.relativeDy > 0 ? -1 : 1;
              v = M * C, E = L * C;
            } else {
              const M = Math.random() * Math.PI * 2;
              v = Math.cos(M) * C, E = Math.sin(M) * C;
            }
            const B = l + v, k = a + E, I = Math.sqrt(
              Math.pow(B - f, 2) + Math.pow(k - r, 2)
            );
            I < w && (w = I, g = B, m = k);
          }
        }
      if (!y)
        break;
      l = g, a = m;
    }
    return { x: l, y: a };
  }
  /**
   * Group edges by node pair
   * Group by undirected pair key (minId||maxId) and generate EdgePair
   */
  groupEdgesByPair(e) {
    const t = /* @__PURE__ */ new Map();
    for (const n of e) {
      const [s, o] = n.src < n.dst ? [n.src, n.dst] : [n.dst, n.src], d = `${s}||${o}`;
      let l = t.get(d);
      l || (l = {
        key: d,
        a: s,
        b: o,
        edges: []
      }, t.set(d, l)), l.edges.push(n), n.src === s && n.dst === o ? (n.srcAnchor && !l.srcAnchor && (l.srcAnchor = n.srcAnchor), n.dstAnchor && !l.dstAnchor && (l.dstAnchor = n.dstAnchor), n.bends && !l.bends && (l.bends = n.bends)) : (n.srcAnchor && !l.dstAnchor && (l.dstAnchor = n.srcAnchor), n.dstAnchor && !l.srcAnchor && (l.srcAnchor = n.dstAnchor), n.bends && !l.bends && (l.bends = n.bends));
    }
    return Array.from(t.values());
  }
  /**
   * Determine direction from EdgePair
   * @returns { hasAtoB: boolean, hasBtoA: boolean }
   */
  getEdgePairDirection(e) {
    let t = !1, n = !1;
    for (const s of e.edges)
      s.src === e.a && s.dst === e.b ? t = !0 : s.src === e.b && s.dst === e.a && (n = !0);
    return { hasAtoB: t, hasBtoA: n };
  }
  /**
   * Calculate EdgePair path (based on A->B direction)
   */
  calculateEdgePairPath(e) {
    const t = this.nodes.find((g) => g.id === e.a), n = this.nodes.find((g) => g.id === e.b);
    if (!t?.position || !n?.position)
      return "";
    const s = e.srcAnchor || this.estimateAnchor(t, n), o = e.dstAnchor || this.estimateAnchor(n, t), d = t.style || {}, l = n.style || {}, a = d.width || this.DEFAULT_NODE_WIDTH, h = d.height || this.DEFAULT_NODE_HEIGHT, c = l.width || this.DEFAULT_NODE_WIDTH, f = l.height || this.DEFAULT_NODE_HEIGHT, r = this.calculateAnchorPosition(t, s, a, h), u = this.calculateAnchorPosition(n, o, c, f), p = [r];
    e.bends && p.push(...e.bends), p.push(u);
    const y = [`M ${p[0].x} ${p[0].y}`];
    for (let g = 1; g < p.length; g++)
      y.push(`L ${p[g].x} ${p[g].y}`);
    return y.join(" ");
  }
  /**
   * Calculate position on node edge
   * @param node Node
   * @param anchor Anchor information
   * @param width Node width (optional, uses default if not provided)
   * @param height Node height (optional, uses default if not provided)
   * @returns Coordinates {x, y}
   */
  calculateAnchorPosition(e, t, n, s) {
    if (!e.position)
      return { x: 0, y: 0 };
    const o = e.position.x, d = e.position.y, l = n || e.style?.width || this.DEFAULT_NODE_WIDTH, a = s || e.style?.height || this.DEFAULT_NODE_HEIGHT;
    let h = 0, c = 0;
    switch (t.side) {
      case "top":
        h = o - l / 2 + l * t.t, c = d - a / 2;
        break;
      case "right":
        h = o + l / 2, c = d - a / 2 + a * t.t;
        break;
      case "bottom":
        h = o - l / 2 + l * t.t, c = d + a / 2;
        break;
      case "left":
        h = o - l / 2, c = d - a / 2 + a * t.t;
        break;
    }
    return { x: h, y: c };
  }
  /**
   * Auto-estimate anchor
   * Calculate side and position closest to direction from node center to target node
   */
  estimateAnchor(e, t) {
    if (!e.position || !t.position)
      return { side: "right", t: 0.5 };
    const n = e.style || {}, s = n.width || this.DEFAULT_NODE_WIDTH, o = n.height || this.DEFAULT_NODE_HEIGHT, d = t.position.x - e.position.x, l = t.position.y - e.position.y, a = Math.atan2(l, d), h = a < 0 ? a + 2 * Math.PI : a;
    let c, f;
    return h >= 7 * Math.PI / 4 || h < Math.PI / 4 ? (c = "right", f = 0.5 + l / o * 0.5) : h >= Math.PI / 4 && h < 3 * Math.PI / 4 ? (c = "bottom", f = 0.5 + d / s * 0.5) : h >= 3 * Math.PI / 4 && h < 5 * Math.PI / 4 ? (c = "left", f = 0.5 - l / o * 0.5) : (c = "top", f = 0.5 - d / s * 0.5), f = Math.max(0, Math.min(1, f)), { side: c, t: f };
  }
  /**
   * Get edge point array [start, ...bends, end]
   */
  getEdgePoints(e) {
    const t = this.nodes.find((y) => y.id === e.src), n = this.nodes.find((y) => y.id === e.dst);
    if (!t?.position || !n?.position)
      return [];
    const s = e.srcAnchor || this.estimateAnchor(t, n), o = e.dstAnchor || this.estimateAnchor(n, t), d = t.style || {}, l = n.style || {}, a = d.width || this.DEFAULT_NODE_WIDTH, h = d.height || this.DEFAULT_NODE_HEIGHT, c = l.width || this.DEFAULT_NODE_WIDTH, f = l.height || this.DEFAULT_NODE_HEIGHT, r = this.calculateAnchorPosition(t, s, a, h), u = this.calculateAnchorPosition(n, o, c, f), p = [r];
    return e.bends && p.push(...e.bends), p.push(u), p;
  }
  /**
   * Calculate edge path (considering anchors, supporting bend points)
   */
  calculateEdgePath(e) {
    const t = this.getEdgePoints(e);
    if (t.length < 2)
      return "";
    const n = [`M ${t[0].x} ${t[0].y}`];
    for (let s = 1; s < t.length; s++)
      n.push(`L ${t[s].x} ${t[s].y}`);
    return n.join(" ");
  }
  /**
   * Determine EdgePair marker attributes
   * Set marker-start/marker-end based on direction
   */
  getEdgePairMarkerAttributes(e) {
    const { hasAtoB: t, hasBtoA: n } = this.getEdgePairDirection(e), s = {};
    return t && (s.markerEnd = "url(#arrow-end)"), n && (s.markerStart = "url(#arrow-start)"), s;
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
  selectEdge(e, t) {
    this.selectedEdgeId === e && t ? this.rotateAnchorSide(e) : (this.selectedEdgeId = e, this.updateAnchorHandles(), this.updateBendHandles());
  }
  /**
   * Rotate anchor side clockwise (on Shift+click)
   */
  rotateAnchorSide(e) {
    const t = this.edges.find((h) => h.id === e);
    if (!t)
      return;
    this.pushUndoState();
    const [n, s] = t.src < t.dst ? [t.src, t.dst] : [t.dst, t.src], o = `${n}||${s}`, d = this.groupEdgesByPair(this.edges).find((h) => h.key === o);
    if (!d)
      return;
    const l = ["top", "right", "bottom", "left"], a = (h) => {
      const c = l.indexOf(h);
      return l[(c + 1) % 4];
    };
    d.srcAnchor && (d.srcAnchor.side = a(d.srcAnchor.side)), d.dstAnchor && (d.dstAnchor.side = a(d.dstAnchor.side));
    for (const h of d.edges)
      h.src === d.a && h.dst === d.b ? (h.srcAnchor = d.srcAnchor, h.dstAnchor = d.dstAnchor) : (h.srcAnchor = d.dstAnchor, h.dstAnchor = d.srcAnchor);
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
    const e = this.edges.find((w) => w.id === this.selectedEdgeId);
    if (!e)
      return;
    const [t, n] = e.src < e.dst ? [e.src, e.dst] : [e.dst, e.src], s = `${t}||${n}`, o = this.groupEdgesByPair(this.edges).find((w) => w.key === s);
    if (!o)
      return;
    const d = this.nodes.find((w) => w.id === o.a), l = this.nodes.find((w) => w.id === o.b);
    if (!d || !l)
      return;
    const a = o.srcAnchor || this.estimateAnchor(d, l), h = o.dstAnchor || this.estimateAnchor(l, d), c = d.style || {}, f = l.style || {}, r = c.width || this.DEFAULT_NODE_WIDTH, u = c.height || this.DEFAULT_NODE_HEIGHT, p = f.width || this.DEFAULT_NODE_WIDTH, y = f.height || this.DEFAULT_NODE_HEIGHT, g = this.calculateAnchorPosition(d, a, r, u), m = this.calculateAnchorPosition(l, h, p, y);
    this.createAnchorHandle(e.id, "src", g.x, g.y), this.createAnchorHandle(e.id, "dst", m.x, m.y), this.anchorHandlesGroup.style.display = "block", this.anchorHandlesGroup.style.pointerEvents = "auto";
  }
  /**
   * Update bend point handles
   */
  updateBendHandles() {
    if (this.bendHandles.clear(), this.bendHandlesGroup.innerHTML = "", !this.selectedEdgeId || this.mode !== "edit") {
      this.bendHandlesGroup.style.display = "none", this.updateControlButtons();
      return;
    }
    const e = this.edges.find((d) => d.id === this.selectedEdgeId);
    if (!e) {
      this.updateControlButtons();
      return;
    }
    const [t, n] = e.src < e.dst ? [e.src, e.dst] : [e.dst, e.src], s = `${t}||${n}`, o = this.groupEdgesByPair(this.edges).find((d) => d.key === s);
    if (!o || !o.bends || o.bends.length === 0) {
      this.bendHandlesGroup.style.display = "none", this.updateControlButtons();
      return;
    }
    o.bends.forEach((d, l) => {
      this.createBendHandle(e.id, l, d.x, d.y);
    }), this.bendHandlesGroup.style.display = "block", this.bendHandlesGroup.style.pointerEvents = "auto", this.updateControlButtons();
  }
  /**
   * Create anchor handle
   */
  createAnchorHandle(e, t, n, s) {
    const o = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    o.setAttribute("cx", String(n)), o.setAttribute("cy", String(s)), o.setAttribute("r", String(this.HANDLE_RADIUS)), o.setAttribute("fill", "#2196f3"), o.setAttribute("stroke", "#fff"), o.setAttribute("stroke-width", "2"), o.setAttribute("data-edge-id", e), o.setAttribute("data-handle-type", t), o.style.cursor = "move", this.anchorHandles.set(t, o), this.anchorHandlesGroup.appendChild(o);
  }
  /**
   * Create bend point handle
   */
  createBendHandle(e, t, n, s) {
    const o = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    o.setAttribute("cx", String(n)), o.setAttribute("cy", String(s)), o.setAttribute("r", String(this.BEND_HANDLE_RADIUS)), o.setAttribute("fill", "#ff9800"), o.setAttribute("stroke", "#fff"), o.setAttribute("stroke-width", "2"), o.setAttribute("data-edge-id", e), o.setAttribute("data-bend-index", String(t)), o.style.cursor = "move", this.bendHandles.set(t, o), this.bendHandlesGroup.appendChild(o);
  }
  /**
   * Update node position (during drag)
   */
  updateNodePosition(e) {
    if (!this.draggingNode)
      return;
    const t = this.nodes.find((d) => d.id === this.draggingNode.nodeId);
    if (!t)
      return;
    const n = this.screenToSvg(e.clientX, e.clientY), s = n.x, o = n.y;
    t.position || (t.position = { x: 0, y: 0 }), t.position.x = s - this.draggingNode.offsetX, t.position.y = o - this.draggingNode.offsetY, this.updateGroupLayouts(t.id, void 0), this.render(), this.updateAnchorHandles(), this.updateBendHandles();
  }
  /**
   * Update node size (during resize)
   */
  updateNodeSize(e) {
    if (!this.resizingNode)
      return;
    const t = this.nodes.find((h) => h.id === this.resizingNode.nodeId);
    if (!t?.position)
      return;
    const n = this.screenToSvg(e.clientX, e.clientY), s = n.x, o = n.y;
    t.style || (t.style = {});
    const d = s - this.resizingNode.startX, l = o - this.resizingNode.startY;
    switch (this.resizingNode.side) {
      case "right": {
        const h = Math.max(60, this.resizingNode.startWidth + d);
        t.style.width = h, t.position.x = this.resizingNode.startNodeX + d / 2;
        break;
      }
      case "left": {
        const h = Math.max(60, this.resizingNode.startWidth - d);
        t.style.width = h, t.position.x = this.resizingNode.startNodeX + d / 2;
        break;
      }
      case "bottom": {
        const h = Math.max(40, this.resizingNode.startHeight + l);
        t.style.height = h, t.position.y = this.resizingNode.startNodeY + l / 2;
        break;
      }
      case "top": {
        const h = Math.max(40, this.resizingNode.startHeight - l);
        t.style.height = h, t.position.y = this.resizingNode.startNodeY + l / 2;
        break;
      }
    }
    const a = this.nodeElements.get(t.id);
    if (a) {
      const h = t.style || {}, c = h.width || this.DEFAULT_NODE_WIDTH, f = h.height || this.DEFAULT_NODE_HEIGHT, r = t.position.x - c / 2, u = t.position.y - f / 2;
      a.setAttribute("x", String(r)), a.setAttribute("y", String(u)), a.setAttribute("width", String(c)), a.setAttribute("height", String(f));
      const p = a.parentElement;
      if (p) {
        const y = p.querySelector("foreignObject");
        if (y) {
          const g = t.style || {}, m = g.width || this.DEFAULT_NODE_WIDTH, w = g.height || this.DEFAULT_NODE_HEIGHT, b = t.position.x - m / 2, _ = t.position.y - w / 2;
          y.setAttribute("x", String(b)), y.setAttribute("y", String(_));
        }
        t.position && p.querySelectorAll("[data-resize-side]").forEach((m) => {
          const w = m.getAttribute("data-resize-side");
          w === "top" ? (m.setAttribute("cx", String(t.position.x)), m.setAttribute("cy", String(t.position.y - f / 2))) : w === "right" ? (m.setAttribute("cx", String(t.position.x + c / 2)), m.setAttribute("cy", String(t.position.y))) : w === "bottom" ? (m.setAttribute("cx", String(t.position.x)), m.setAttribute("cy", String(t.position.y + f / 2))) : w === "left" && (m.setAttribute("cx", String(t.position.x - c / 2)), m.setAttribute("cy", String(t.position.y)));
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
      nodes: this.nodes.map((e) => ({
        ...e,
        position: e.position ? { ...e.position } : void 0,
        style: e.style ? { ...e.style } : void 0,
        meta: e.meta ? { ...e.meta } : void 0
      })),
      edges: this.edges.map((e) => ({
        ...e,
        srcAnchor: e.srcAnchor ? { ...e.srcAnchor } : void 0,
        dstAnchor: e.dstAnchor ? { ...e.dstAnchor } : void 0,
        bends: e.bends ? e.bends.map((t) => ({ ...t })) : void 0,
        style: e.style ? { ...e.style } : void 0,
        meta: e.meta ? { ...e.meta } : void 0
      })),
      groups: this.groups.map((e) => ({
        ...e,
        layout: e.layout ? {
          position: { ...e.layout.position },
          size: { ...e.layout.size }
        } : void 0,
        info: e.info ? { ...e.info } : void 0
      }))
    };
  }
  /**
   * Restore snapshot (cancel edit)
   */
  restoreSnapshot() {
    this.snapshotBeforeEdit && (this.nodes = this.snapshotBeforeEdit.nodes.map((e) => ({
      ...e,
      position: e.position ? { ...e.position } : void 0,
      style: e.style ? { ...e.style } : void 0,
      meta: e.meta ? { ...e.meta } : void 0
    })), this.edges = this.snapshotBeforeEdit.edges.map((e) => ({
      ...e,
      srcAnchor: e.srcAnchor ? { ...e.srcAnchor } : void 0,
      dstAnchor: e.dstAnchor ? { ...e.dstAnchor } : void 0,
      bends: e.bends ? e.bends.map((t) => ({ ...t })) : void 0,
      style: e.style ? { ...e.style } : void 0,
      meta: e.meta ? { ...e.meta } : void 0
    })), this.groups = this.snapshotBeforeEdit.groups.map((e) => ({
      ...e,
      layout: e.layout ? {
        position: { ...e.layout.position },
        size: { ...e.layout.size }
      } : void 0,
      info: e.info ? { ...e.info } : void 0
    })), this.render(), this.deselectEdge());
  }
  /**
   * Clone current nodes, edges, groups (editable state only)
   */
  cloneState() {
    return {
      nodes: this.nodes.map((e) => ({
        ...e,
        position: e.position ? { ...e.position } : void 0,
        style: e.style ? { ...e.style } : void 0,
        meta: e.meta ? { ...e.meta } : void 0
      })),
      edges: this.edges.map((e) => ({
        ...e,
        srcAnchor: e.srcAnchor ? { ...e.srcAnchor } : void 0,
        dstAnchor: e.dstAnchor ? { ...e.dstAnchor } : void 0,
        bends: e.bends ? e.bends.map((t) => ({ ...t })) : void 0,
        style: e.style ? { ...e.style } : void 0,
        meta: e.meta ? { ...e.meta } : void 0
      })),
      groups: this.groups.map((e) => ({
        ...e,
        layout: e.layout ? {
          position: { ...e.layout.position },
          size: { ...e.layout.size }
        } : void 0,
        info: e.info ? { ...e.info } : void 0
      }))
    };
  }
  /**
   * Push current state to undo stack (call at start of an edit)
   */
  pushUndoState() {
    if (this.mode !== "edit")
      return;
    const e = this.cloneState();
    this.undoStack.push(e), this.undoStack.length > Ee.MAX_UNDO_LEVELS && this.undoStack.shift(), this.redoStack = [], this.onGraphButtonsUpdate?.();
  }
  /**
   * Apply a snapshot to current state
   */
  applyState(e) {
    this.nodes = e.nodes.map((t) => ({
      ...t,
      position: t.position ? { ...t.position } : void 0,
      style: t.style ? { ...t.style } : void 0,
      meta: t.meta ? { ...t.meta } : void 0
    })), this.edges = e.edges.map((t) => ({
      ...t,
      srcAnchor: t.srcAnchor ? { ...t.srcAnchor } : void 0,
      dstAnchor: t.dstAnchor ? { ...t.dstAnchor } : void 0,
      bends: t.bends ? t.bends.map((n) => ({ ...n })) : void 0,
      style: t.style ? { ...t.style } : void 0,
      meta: t.meta ? { ...t.meta } : void 0
    })), this.groups = e.groups.map((t) => ({
      ...t,
      layout: t.layout ? {
        position: { ...t.layout.position },
        size: { ...t.layout.size }
      } : void 0,
      info: t.info ? { ...t.info } : void 0
    }));
  }
  /**
   * Undo last edit (Graph edit mode only)
   */
  undo() {
    if (this.mode !== "edit" || this.undoStack.length === 0)
      return;
    const e = this.cloneState();
    this.redoStack.push(e);
    const t = this.undoStack.pop();
    this.applyState(t), this.render(), this.updateAnchorHandles(), this.updateBendHandles(), this.updateControlButtons(), this.debouncedSave(), this.onGraphButtonsUpdate?.();
  }
  /**
   * Redo last undone edit (Graph edit mode only)
   */
  redo() {
    if (this.mode !== "edit" || this.redoStack.length === 0)
      return;
    const e = this.cloneState();
    this.undoStack.push(e);
    const t = this.redoStack.pop();
    this.applyState(t), this.render(), this.updateAnchorHandles(), this.updateBendHandles(), this.updateControlButtons(), this.debouncedSave(), this.onGraphButtonsUpdate?.();
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
  updateAnchorPosition(e) {
    if (!this.draggingAnchor)
      return;
    const t = this.edges.find((A) => A.id === this.draggingAnchor.edgeId);
    if (!t)
      return;
    const [n, s] = t.src < t.dst ? [t.src, t.dst] : [t.dst, t.src], o = `${n}||${s}`, d = this.groupEdgesByPair(this.edges).find((A) => A.key === o);
    if (!d)
      return;
    const l = this.draggingAnchor.type === "src" ? d.a : d.b, a = this.nodes.find((A) => A.id === l);
    if (!a?.position)
      return;
    const h = this.screenToSvg(e.clientX, e.clientY), c = h.x - this.draggingAnchor.offsetX, f = h.y - this.draggingAnchor.offsetY, r = a.position.x, u = a.position.y, p = a.style || {}, y = p.width || this.DEFAULT_NODE_WIDTH, g = p.height || this.DEFAULT_NODE_HEIGHT, m = {
      top: Math.abs(f - (u - g / 2)),
      right: Math.abs(c - (r + y / 2)),
      bottom: Math.abs(f - (u + g / 2)),
      left: Math.abs(c - (r - y / 2))
    };
    let w = "right", b = m.right;
    for (const [A, T] of Object.entries(m))
      T < b && (b = T, w = A);
    let _ = 0.5;
    switch (w) {
      case "top":
      case "bottom":
        _ = (c - (r - y / 2)) / y;
        break;
      case "left":
      case "right":
        _ = (f - (u - g / 2)) / g;
        break;
    }
    _ = Math.max(0, Math.min(1, _)), this.draggingAnchor.type === "src" ? d.srcAnchor = { side: w, t: _ } : d.dstAnchor = { side: w, t: _ };
    for (const A of d.edges)
      A.src === d.a && A.dst === d.b ? (A.srcAnchor = d.srcAnchor, A.dstAnchor = d.dstAnchor) : (A.srcAnchor = d.dstAnchor, A.dstAnchor = d.srcAnchor);
    this.render(), this.updateAnchorHandles(), this.updateBendHandles();
  }
  /**
   * Update bend point position (during drag)
   */
  updateBendPosition(e) {
    if (!this.draggingBend)
      return;
    const t = this.edges.find((f) => f.id === this.draggingBend.edgeId);
    if (!t)
      return;
    const [n, s] = t.src < t.dst ? [t.src, t.dst] : [t.dst, t.src], o = `${n}||${s}`, d = this.groupEdgesByPair(this.edges).find((f) => f.key === o);
    if (!d || !d.bends)
      return;
    const l = this.draggingBend.bendIndex;
    if (l < 0 || l >= d.bends.length)
      return;
    const a = this.screenToSvg(e.clientX, e.clientY), h = a.x - this.draggingBend.offsetX, c = a.y - this.draggingBend.offsetY;
    d.bends[l] = { x: h, y: c };
    for (const f of d.edges)
      f.bends = [...d.bends];
    this.render(), this.updateBendHandles();
  }
  /**
   * Insert bend point (on double click/tap)
   */
  insertBendPoint(e, t) {
    const n = this.edges.find((k) => k.id === e);
    if (!n)
      return;
    this.pushUndoState();
    const [s, o] = n.src < n.dst ? [n.src, n.dst] : [n.dst, n.src], d = `${s}||${o}`, l = this.groupEdgesByPair(this.edges).find((k) => k.key === d);
    if (!l)
      return;
    const a = this.svg.getBoundingClientRect(), h = t.clientX - a.left, c = t.clientY - a.top, f = [], r = this.nodes.find((k) => k.id === l.a), u = this.nodes.find((k) => k.id === l.b);
    if (!r?.position || !u?.position)
      return;
    const p = l.srcAnchor || this.estimateAnchor(r, u), y = l.dstAnchor || this.estimateAnchor(u, r), g = r.style || {}, m = u.style || {}, w = g.width || this.DEFAULT_NODE_WIDTH, b = g.height || this.DEFAULT_NODE_HEIGHT, _ = m.width || this.DEFAULT_NODE_WIDTH, A = m.height || this.DEFAULT_NODE_HEIGHT, T = this.calculateAnchorPosition(r, p, w, b), x = this.calculateAnchorPosition(u, y, _, A);
    f.push(T), l.bends && f.push(...l.bends), f.push(x);
    let S = 0, C = 1 / 0;
    for (let k = 0; k < f.length - 1; k++) {
      const I = f[k], M = f[k + 1], L = this.pointToLineSegmentDistance(h, c, I.x, I.y, M.x, M.y);
      L < C && (C = L, S = k);
    }
    const v = f[S], E = f[S + 1], B = {
      x: (v.x + E.x) / 2,
      y: (v.y + E.y) / 2
    };
    l.bends || (l.bends = []), l.bends.splice(S, 0, B);
    for (const k of l.edges)
      k.bends = [...l.bends];
    this.selectedEdgeId !== e && this.selectEdge(e, !1), this.render(), this.updateBendHandles();
  }
  /**
   * Calculate distance from point to line segment
   */
  pointToLineSegmentDistance(e, t, n, s, o, d) {
    const l = o - n, a = d - s, h = l * l + a * a;
    if (h === 0)
      return Math.sqrt((e - n) ** 2 + (t - s) ** 2);
    const c = Math.max(0, Math.min(1, ((e - n) * l + (t - s) * a) / h)), f = n + c * l, r = s + c * a;
    return Math.sqrt((e - f) ** 2 + (t - r) ** 2);
  }
  /**
   * Delete nearest bend point (on Delete/Backspace)
   * Also implements View interface deleteNearestBendPoint method
   */
  deleteNearestBendPoint() {
    if (!this.selectedEdgeId)
      return;
    const e = this.edges.find((d) => d.id === this.selectedEdgeId);
    if (!e)
      return;
    const [t, n] = e.src < e.dst ? [e.src, e.dst] : [e.dst, e.src], s = `${t}||${n}`, o = this.groupEdgesByPair(this.edges).find((d) => d.key === s);
    if (!(!o || !o.bends || o.bends.length === 0)) {
      this.pushUndoState(), o.bends.pop(), o.bends.length === 0 && delete o.bends;
      for (const d of o.edges)
        o.bends ? d.bends = [...o.bends] : delete d.bends;
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
    const e = this.groupEdgesByPair(this.edges);
    for (const t of e) {
      const n = t.edges.some((A) => A.id === this.selectedEdgeId), s = this.mode === "view" && t.key === this.hoveredEdgePairKey, o = this.mode === "view" && t.key === this.tappedEdgePairKey, d = this.alwaysShowEdges || n || s || o, a = t.edges[0].style || {}, h = a.color || this.EDGE_DEFAULT_COLOR, c = a.weight || 1, f = Math.max(this.EDGE_MIN_WEIGHT, Math.min(this.EDGE_MAX_WEIGHT, c)), r = this.EDGE_DEFAULT_WIDTH + (f - 1) * 0.5, u = d ? Math.max(r, this.EDGE_HOVER_WIDTH) : r, p = n ? "#2196f3" : h, y = d ? 1 : 0.3, g = this.calculateEdgePairPath(t);
      if (!g)
        continue;
      const m = document.createElementNS("http://www.w3.org/2000/svg", "path");
      m.setAttribute("d", g), m.setAttribute("stroke", "transparent"), m.setAttribute("stroke-width", String(this.HIT_PATH_WIDTH)), m.setAttribute("fill", "none"), m.setAttribute("data-hit-edge-pair-key", t.key), m.style.cursor = "pointer", m.style.pointerEvents = "stroke", this.edgesGroup.appendChild(m);
      const w = document.createElementNS("http://www.w3.org/2000/svg", "path");
      w.setAttribute("d", g), w.setAttribute("stroke", p), w.setAttribute("stroke-width", String(u)), w.setAttribute("stroke-opacity", String(y)), w.setAttribute("fill", "none"), w.setAttribute("data-edge-pair-key", t.key), w.style.pointerEvents = "none", w.style.transition = "stroke-opacity 0.2s, stroke-width 0.2s";
      const b = this.getEdgePairMarkerAttributes(t);
      if (b.markerStart && w.setAttribute("marker-start", b.markerStart), b.markerEnd && w.setAttribute("marker-end", b.markerEnd), this.edgeElements.set(t.key, w), this.edgesGroup.appendChild(w), this.mode === "view")
        this.setupEdgeInteraction(m, t, a);
      else if (this.mode === "edit") {
        this.setupEdgeInteractionForEdit(m, t);
        const A = t.key;
        m.addEventListener("click", (T) => {
          const x = this.edgeClickTimers.get(m);
          if (x != null) {
            clearTimeout(x), this.edgeClickTimers.set(m, null);
            return;
          }
          const S = window.setTimeout(() => {
            if (this.edgeClickTimers.set(m, null), this.mode === "edit") {
              const C = this.groupEdgesByPair(this.edges).find((v) => v.key === A);
              C && C.edges.length > 0 && (this.selectEdge(C.edges[0].id, T.shiftKey), this.render());
            }
          }, 300);
          this.edgeClickTimers.set(m, S);
        });
      }
      const _ = t.key;
      m.addEventListener("dblclick", (A) => {
        if (this.mode !== "edit")
          return;
        const T = this.edgeClickTimers.get(m);
        T != null && (clearTimeout(T), this.edgeClickTimers.set(m, null));
        const x = this.groupEdgesByPair(this.edges).find((S) => S.key === _);
        x && x.edges.length > 0 && (this.insertBendPoint(x.edges[0].id, A), A.preventDefault(), A.stopPropagation());
      }), d && this.renderEdgeLabels(t, a);
    }
    this.renderGroups();
    for (const t of this.nodes) {
      if (!t.position)
        continue;
      const n = t.style || {}, s = n.width || this.DEFAULT_NODE_WIDTH, o = n.height || this.DEFAULT_NODE_HEIGHT, d = n.color || "#fff", l = n.borderColor || "#333", a = document.createElementNS("http://www.w3.org/2000/svg", "g");
      a.setAttribute("data-node-id", t.id);
      const h = document.createElementNS("http://www.w3.org/2000/svg", "rect"), c = t.position.x - s / 2, f = t.position.y - o / 2;
      h.setAttribute("x", String(c)), h.setAttribute("y", String(f)), h.setAttribute("width", String(s)), h.setAttribute("height", String(o));
      const r = d.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
      if (r) {
        const g = parseInt(r[1], 16), m = parseInt(r[2], 16), w = parseInt(r[3], 16);
        h.setAttribute("fill", `rgba(${g}, ${m}, ${w}, 0.5)`);
      } else
        h.setAttribute("fill", d);
      const u = this.selectedNodeId === t.id;
      h.setAttribute("stroke", u ? "#2196f3" : l), h.setAttribute("stroke-width", u ? "4" : "2"), h.setAttribute("rx", "4"), h.style.cursor = this.mode === "view" ? "pointer" : "move";
      const p = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
      p.setAttribute("x", String(c)), p.setAttribute("y", String(f)), p.setAttribute("width", String(s)), p.setAttribute("height", String(o));
      const y = document.createElement("div");
      y.style.width = "100%", y.style.height = "100%", y.style.display = "flex", y.style.alignItems = "flex-start", y.style.justifyContent = "center", y.style.textAlign = "center", y.style.fontSize = "14px", y.style.color = "#333", y.style.padding = "4px", y.style.wordWrap = "break-word", y.style.overflowWrap = "break-word", y.style.whiteSpace = "normal", y.style.overflow = "hidden", y.style.textOverflow = "ellipsis", y.textContent = t.label, p.appendChild(y), a.appendChild(h), a.appendChild(p), this.mode === "edit" && this.addResizeHandles(a, t, s, o), this.nodesGroup.appendChild(a), this.nodeElements.set(t.id, h), this.mode === "view" && this.onNodeClick && a.addEventListener("click", (g) => {
        g.stopPropagation(), g.preventDefault();
        const m = this.svg.getBoundingClientRect(), w = g.clientX - m.left, b = g.clientY - m.top;
        this.onNodeClick({
          node: t,
          position: { x: w, y: b },
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
  calculateGroupBounds(e, t) {
    let d = 1 / 0, l = -1 / 0, a = 1 / 0, h = -1 / 0, c = !1;
    const f = t ? this.groups.some((y) => y.parentId === t) : !1, r = /* @__PURE__ */ new Set();
    if (f && t) {
      const y = this.groups.filter((g) => g.parentId === t);
      for (const g of y) {
        const m = (w) => {
          for (const _ of w.nodeIds)
            r.add(_);
          const b = this.groups.filter((_) => _.parentId === w.id);
          for (const _ of b)
            m(_);
        };
        m(g);
      }
    }
    for (const y of e) {
      if (f && r.has(y))
        continue;
      const g = this.nodes.find((S) => S.id === y);
      if (!g || !g.position)
        continue;
      c = !0;
      const m = g.style || {}, w = m.width || this.DEFAULT_NODE_WIDTH, b = m.height || this.DEFAULT_NODE_HEIGHT, _ = g.position.x - w / 2, A = g.position.x + w / 2, T = g.position.y - b / 2, x = g.position.y + b / 2;
      d = Math.min(d, _), l = Math.max(l, A), a = Math.min(a, T), h = Math.max(h, x);
    }
    if (f && t) {
      const y = this.groups.filter((g) => g.parentId === t);
      for (const g of y) {
        const m = this.getGroupLayout(g);
        if (m) {
          c = !0;
          const w = m.position.x, b = m.position.x + m.size.width, _ = m.position.y, A = m.position.y + m.size.height;
          d = Math.min(d, w), l = Math.max(l, b), a = Math.min(a, _), h = Math.max(h, A);
        }
      }
    }
    if (!c)
      return null;
    const u = f ? 50 : 30, p = u + 25;
    return {
      minX: d - u,
      maxX: l + u,
      minY: a - p,
      // Extra top padding for label
      maxY: h + u
    };
  }
  /**
   * Get or calculate group layout
   */
  getGroupLayout(e) {
    if (e.layout)
      return e.layout;
    const t = this.calculateGroupBounds(e.nodeIds, e.id);
    return t ? {
      position: {
        x: t.minX,
        y: t.minY
      },
      size: {
        width: t.maxX - t.minX,
        height: t.maxY - t.minY
      }
    } : null;
  }
  /**
   * Render groups
   */
  renderGroups() {
    if (this.groups.length === 0)
      return;
    const e = [...this.groups].sort((t, n) => {
      const s = (o) => {
        if (!o.parentId) return 0;
        const d = this.groups.find((l) => l.id === o.parentId);
        return d ? 1 + s(d) : 0;
      };
      return s(t) - s(n);
    });
    for (const t of e) {
      let n = this.getGroupLayout(t);
      if (n)
        t.layout || (t.layout = n);
      else {
        const a = this.calculateGroupBounds(t.nodeIds, t.id);
        if (a)
          n = {
            position: { x: a.minX, y: a.minY },
            size: { width: a.maxX - a.minX, height: a.maxY - a.minY }
          }, t.layout = n;
        else
          continue;
      }
      const s = document.createElementNS("http://www.w3.org/2000/svg", "g");
      s.setAttribute("data-group-id", t.id), s.setAttribute("class", "group");
      const o = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      o.setAttribute("x", String(n.position.x)), o.setAttribute("y", String(n.position.y)), o.setAttribute("width", String(n.size.width)), o.setAttribute("height", String(n.size.height));
      const d = t.style;
      o.setAttribute("fill", d?.color ?? "rgba(200, 200, 200, 0.1)"), o.setAttribute("stroke", d?.borderColor ?? "#999"), o.setAttribute("stroke-width", String(d?.borderWidth ?? 2)), o.setAttribute("stroke-dasharray", d?.borderDash === !1 ? "none" : "5,5"), o.setAttribute("rx", "4"), o.style.pointerEvents = "auto", o.style.cursor = this.mode === "edit" ? "move" : "pointer";
      const l = document.createElementNS("http://www.w3.org/2000/svg", "text");
      l.setAttribute("x", String(n.position.x + 10)), l.setAttribute("y", String(n.position.y + 25)), l.setAttribute("font-size", "14"), l.setAttribute("font-weight", "bold"), l.setAttribute("fill", "#666"), l.textContent = t.label, l.style.pointerEvents = "none", s.appendChild(o), s.appendChild(l), this.mode === "edit" && this.setupGroupEditInteractions(s, t, o), this.mode === "view" && this.onGroupClick && s.addEventListener("click", (a) => {
        if (a.target.getAttribute("data-resize-side"))
          return;
        a.stopPropagation(), a.preventDefault();
        const c = this.svg.getBoundingClientRect(), f = a.clientX - c.left, r = a.clientY - c.top;
        this.onGroupClick({
          group: t,
          position: { x: f, y: r },
          originalEvent: a
        });
      }, !0), this.groupsGroup.appendChild(s);
    }
  }
  /**
   * Update group layouts for groups containing a node or child group
   * @param nodeId Node ID that changed (optional)
   * @param groupId Group ID that changed (optional)
   * @param preserveChangedGroupLayout If true, don't recalculate layout for the changed group (preserve its current layout)
   */
  updateGroupLayouts(e, t, n = !1) {
    const s = /* @__PURE__ */ new Set(), o = n && t ? t : null;
    if (e) {
      const l = this.groups.filter((a) => a.nodeIds.includes(e));
      l.forEach((a) => s.add(a));
      for (const a of l)
        this.addParentGroupsToUpdate(a, s);
    }
    if (t) {
      const l = this.groups.find((a) => a.id === t);
      if (l) {
        n || s.add(l), this.addParentGroupsToUpdate(l, s);
        const a = this.collectNodeIdsInGroupAndDescendants(l);
        for (const h of a) {
          const c = this.groups.filter((f) => f.nodeIds.includes(h));
          for (const f of c)
            s.add(f), this.addParentGroupsToUpdate(f, s);
        }
      }
    }
    const d = Array.from(s).sort((l, a) => {
      const h = (c) => {
        if (!c.parentId) return 0;
        const f = this.groups.find((r) => r.id === c.parentId);
        return f ? 1 + h(f) : 0;
      };
      return h(a) - h(l);
    });
    for (const l of d) {
      if (o && l.id === o)
        continue;
      const a = this.calculateGroupBounds(l.nodeIds, l.id);
      a && (l.layout || (l.layout = {
        position: { x: 0, y: 0 },
        size: { width: 0, height: 0 }
      }), l.layout.position.x = a.minX, l.layout.position.y = a.minY, l.layout.size.width = a.maxX - a.minX, l.layout.size.height = a.maxY - a.minY);
    }
  }
  /**
   * Collect all node IDs that belong to a group (direct nodeIds + all descendant groups' nodeIds).
   * Used when a group is moved so that other groups containing any of these nodes (e.g. syster) get bounds recalculated.
   */
  collectNodeIdsInGroupAndDescendants(e) {
    const t = /* @__PURE__ */ new Set();
    for (const s of e.nodeIds)
      t.add(s);
    const n = this.groups.filter((s) => s.parentId === e.id);
    for (const s of n)
      this.collectNodeIdsInGroupAndDescendants(s).forEach((d) => t.add(d));
    return t;
  }
  /**
   * Recursively add parent groups to update set
   */
  addParentGroupsToUpdate(e, t) {
    if (e.parentId) {
      const n = this.groups.find((s) => s.id === e.parentId);
      n && (t.add(n), this.addParentGroupsToUpdate(n, t));
    }
  }
  /**
   * Recursively move all descendant groups (children and all descendants) and their nodes
   */
  moveDescendantGroups(e, t, n) {
    const s = this.groups.filter((o) => o.parentId === e);
    for (const o of s) {
      o.layout && (o.layout.position.x += t, o.layout.position.y += n);
      for (const d of o.nodeIds) {
        const l = this.nodes.find((a) => a.id === d);
        l && l.position && (l.position.x += t, l.position.y += n);
      }
      this.moveDescendantGroups(o.id, t, n);
    }
  }
  /**
   * Setup group edit interactions (drag to move, resize handles)
   */
  setupGroupEditInteractions(e, t, n) {
    t.layout && (n.addEventListener("pointerdown", (s) => {
      if (this.mode !== "edit" || s.target.getAttribute("data-resize-side"))
        return;
      s.stopPropagation(), s.preventDefault(), n.setPointerCapture(s.pointerId);
      const d = this.screenToSvg(s.clientX, s.clientY), l = d.x, a = d.y;
      if (!t.layout)
        return;
      this.pushUndoState();
      const h = t.layout.position.x, c = t.layout.position.y;
      this.draggingGroup = {
        groupId: t.id,
        offsetX: l - h,
        offsetY: a - c
      }, n.style.cursor = "grabbing";
    }), this.addGroupResizeHandles(e, t, n));
  }
  /**
   * Add resize handles to group
   */
  addGroupResizeHandles(e, t, n) {
    if (!t.layout)
      return;
    const s = 12, o = ["top", "right", "bottom", "left"];
    for (const d of o) {
      const l = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      l.setAttribute("r", String(s / 2)), l.setAttribute("fill", "#2196f3"), l.setAttribute("stroke", "#fff"), l.setAttribute("stroke-width", "2"), l.setAttribute("data-resize-side", d), l.setAttribute("data-group-id", t.id), l.style.cursor = this.getResizeCursor(d), l.style.pointerEvents = "auto";
      const a = t.layout.position.x, h = t.layout.position.y, c = t.layout.size.width, f = t.layout.size.height;
      switch (d) {
        case "top":
          l.setAttribute("cx", String(a + c / 2)), l.setAttribute("cy", String(h));
          break;
        case "right":
          l.setAttribute("cx", String(a + c)), l.setAttribute("cy", String(h + f / 2));
          break;
        case "bottom":
          l.setAttribute("cx", String(a + c / 2)), l.setAttribute("cy", String(h + f));
          break;
        case "left":
          l.setAttribute("cx", String(a)), l.setAttribute("cy", String(h + f / 2));
          break;
      }
      l.addEventListener("pointerdown", (r) => {
        if (this.mode !== "edit")
          return;
        r.stopPropagation(), r.preventDefault(), l.setPointerCapture(r.pointerId);
        const u = this.screenToSvg(r.clientX, r.clientY), p = u.x, y = u.y;
        t.layout && (this.pushUndoState(), this.resizingGroup = {
          groupId: t.id,
          side: d,
          startX: p,
          startY: y,
          startWidth: t.layout.size.width,
          startHeight: t.layout.size.height,
          startPosX: t.layout.position.x,
          startPosY: t.layout.position.y
        });
      }), e.appendChild(l);
    }
  }
  /**
   * Update edge style and label visibility without full re-render
   */
  updateEdgeHighlight(e) {
    const t = this.groupEdgesByPair(this.edges);
    for (const n of t) {
      const s = this.edgeElements.get(n.key);
      if (!s) continue;
      const o = n.edges.some((w) => w.id === this.selectedEdgeId), d = this.mode === "view" && n.key === this.hoveredEdgePairKey, l = this.mode === "view" && n.key === this.tappedEdgePairKey, a = this.alwaysShowEdges || o || d || l, c = n.edges[0].style || {}, f = c.color || this.EDGE_DEFAULT_COLOR, r = c.weight || 1, u = Math.max(this.EDGE_MIN_WEIGHT, Math.min(this.EDGE_MAX_WEIGHT, r)), p = this.EDGE_DEFAULT_WIDTH + (u - 1) * 0.5, y = a ? Math.max(p, this.EDGE_HOVER_WIDTH) : p, g = o ? "#2196f3" : f, m = a ? 1 : 0.3;
      s.setAttribute("stroke", g), s.setAttribute("stroke-width", String(y)), s.setAttribute("stroke-opacity", String(m)), a ? (this.edgeLabelsGroup.querySelectorAll(`[data-edge-pair-key="${n.key}"]`).forEach((b) => b.remove()), this.renderEdgeLabels(n, c)) : this.edgeLabelsGroup.querySelectorAll(`[data-edge-pair-key="${n.key}"]`).forEach((b) => b.remove());
    }
  }
  /**
   * Setup edge interaction (hover/tap for label display in view mode)
   */
  setupEdgeInteraction(e, t, n) {
    e.addEventListener("pointerenter", () => {
      this.tappedEdgePairKey !== t.key && (this.hoveredEdgePairKey = t.key, this.updateEdgeHighlight(t.key));
    }), e.addEventListener("pointerleave", () => {
      this.tappedEdgePairKey !== t.key && (this.hoveredEdgePairKey = null, this.updateEdgeHighlight(null));
    }), e.addEventListener("click", (s) => {
      if (this.mode === "view" && t.edges.length > 0 && (this.tappedEdgePairKey = t.key, this.updateEdgeHighlight(t.key), this.onEdgeClick)) {
        const o = this.screenToSvg(s.clientX, s.clientY), d = t.edges[0];
        this.onEdgeClick({
          edge: d,
          position: { x: o.x, y: o.y },
          originalEvent: s
        });
      }
    });
  }
  /**
   * Setup edge interaction for edit mode (hover/tap to show handles)
   */
  setupEdgeInteractionForEdit(e, t) {
    e.addEventListener("pointerenter", () => {
      if (t.edges.length > 0) {
        if (this.selectedEdgeId !== null && !t.edges.some((s) => s.id === this.selectedEdgeId))
          return;
        this.selectedEdgeId = t.edges[0].id, this.updateAnchorHandles(), this.updateBendHandles(), this.updateControlButtons();
      }
    }), e.addEventListener("pointerleave", () => {
    }), e.addEventListener("pointerdown", (n) => {
      t.edges.length > 0 && (this.selectedEdgeId = t.edges[0].id, this.updateAnchorHandles(), this.updateBendHandles(), this.updateControlButtons());
    });
  }
  /**
   * Add resize handles to node in edit mode
   */
  addResizeHandles(e, t, n, s) {
    const o = [
      { side: "top", x: t.position.x, y: t.position.y - s / 2 },
      { side: "right", x: t.position.x + n / 2, y: t.position.y },
      { side: "bottom", x: t.position.x, y: t.position.y + s / 2 },
      { side: "left", x: t.position.x - n / 2, y: t.position.y }
    ];
    for (const d of o) {
      const l = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      l.setAttribute("cx", String(d.x)), l.setAttribute("cy", String(d.y)), l.setAttribute("r", "6"), l.setAttribute("fill", "#4CAF50"), l.setAttribute("stroke", "#fff"), l.setAttribute("stroke-width", "2"), l.setAttribute("data-resize-side", d.side), l.setAttribute("data-node-id", t.id), l.style.cursor = this.getResizeCursor(d.side), l.style.pointerEvents = "auto", e.appendChild(l);
    }
  }
  /**
   * Get cursor style for resize handle
   */
  getResizeCursor(e) {
    switch (e) {
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
  updateGroupPosition(e) {
    if (!this.draggingGroup)
      return;
    const t = this.groups.find((r) => r.id === this.draggingGroup.groupId);
    if (!t || !t.layout)
      return;
    const n = this.screenToSvg(e.clientX, e.clientY), s = n.x, o = n.y, d = s - this.draggingGroup.offsetX, l = o - this.draggingGroup.offsetY, a = d - t.layout.position.x, h = l - t.layout.position.y, c = /* @__PURE__ */ new Set(), f = this.groups.filter((r) => r.parentId === t.id);
    for (const r of f)
      for (const u of r.nodeIds)
        c.add(u);
    for (const r of t.nodeIds)
      if (!c.has(r)) {
        const u = this.nodes.find((p) => p.id === r);
        u && u.position && (u.position.x += a, u.position.y += h);
      }
    this.moveDescendantGroups(t.id, a, h), t.layout.position.x = d, t.layout.position.y = l, this.updateGroupLayouts(void 0, t.id, !0), this.render(), this.updateAnchorHandles(), this.updateBendHandles();
  }
  /**
   * Update group size (during resize)
   */
  updateGroupSize(e) {
    if (!this.resizingGroup)
      return;
    const t = this.groups.find((h) => h.id === this.resizingGroup.groupId);
    if (!t || !t.layout)
      return;
    const n = this.screenToSvg(e.clientX, e.clientY), s = n.x, o = n.y, d = s - this.resizingGroup.startX, l = o - this.resizingGroup.startY;
    switch (this.resizingGroup.side) {
      case "right": {
        const h = Math.max(100, this.resizingGroup.startWidth + d);
        t.layout.size.width = h;
        break;
      }
      case "left": {
        const h = Math.max(100, this.resizingGroup.startWidth - d);
        t.layout.size.width = h, t.layout.position.x = this.resizingGroup.startPosX + d;
        break;
      }
      case "bottom": {
        const h = Math.max(100, this.resizingGroup.startHeight + l);
        t.layout.size.height = h;
        break;
      }
      case "top": {
        const h = Math.max(100, this.resizingGroup.startHeight - l);
        t.layout.size.height = h, t.layout.position.y = this.resizingGroup.startPosY + l;
        break;
      }
    }
    const a = this.groupsGroup.querySelector(`[data-group-id="${t.id}"]`);
    if (a) {
      const h = a.querySelector("rect");
      if (h && (h.setAttribute("x", String(t.layout.position.x)), h.setAttribute("y", String(t.layout.position.y)), h.setAttribute("width", String(t.layout.size.width)), h.setAttribute("height", String(t.layout.size.height))), !t.layout)
        return;
      const c = a.querySelectorAll("[data-resize-side]"), f = t.layout;
      c.forEach((u) => {
        const p = u.getAttribute("data-resize-side"), y = f.position.x, g = f.position.y, m = f.size.width, w = f.size.height;
        switch (p) {
          case "top":
            u.setAttribute("cx", String(y + m / 2)), u.setAttribute("cy", String(g));
            break;
          case "right":
            u.setAttribute("cx", String(y + m)), u.setAttribute("cy", String(g + w / 2));
            break;
          case "bottom":
            u.setAttribute("cx", String(y + m / 2)), u.setAttribute("cy", String(g + w));
            break;
          case "left":
            u.setAttribute("cx", String(y)), u.setAttribute("cy", String(g + w / 2));
            break;
        }
      });
      const r = a.querySelector("text");
      r && (r.setAttribute("x", String(t.layout.position.x + 10)), r.setAttribute("y", String(t.layout.position.y + 20)));
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
  getPointOnPath(e, t) {
    if (!e)
      return null;
    const n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    n.style.position = "absolute", n.style.visibility = "hidden", n.style.width = "0", n.style.height = "0", document.body.appendChild(n);
    const s = document.createElementNS("http://www.w3.org/2000/svg", "path");
    s.setAttribute("d", e), n.appendChild(s);
    try {
      const o = s.getTotalLength();
      if (o === 0)
        return document.body.removeChild(n), null;
      const d = s.getPointAtLength(o * t);
      return document.body.removeChild(n), { x: d.x, y: d.y };
    } catch {
      return document.body.removeChild(n), null;
    }
  }
  /**
   * Render edge labels based on relationship directionality
   */
  renderEdgeLabels(e, t) {
    const n = this.nodes.find((T) => T.id === e.a), s = this.nodes.find((T) => T.id === e.b);
    if (!n?.position || !s?.position)
      return;
    const o = n.style || {}, d = s.style || {}, l = o.width || this.DEFAULT_NODE_WIDTH, a = o.height || this.DEFAULT_NODE_HEIGHT, h = d.width || this.DEFAULT_NODE_WIDTH, c = d.height || this.DEFAULT_NODE_HEIGHT, f = e.srcAnchor || this.estimateAnchor(n, s), r = e.dstAnchor || this.estimateAnchor(s, n), u = this.calculateAnchorPosition(n, f, l, a), p = this.calculateAnchorPosition(s, r, h, c), y = this.calculateEdgePairPath(e), g = e.edges.find((T) => T.src === e.a && T.dst === e.b), m = e.edges.find((T) => T.src === e.b && T.dst === e.a), w = g?.style?.label || g?.relType || "", b = m?.style?.label || m?.relType || "", _ = w !== b && w && b, A = w === b && w;
    if (_) {
      const x = this.getPointOnPath(y, 0.75), S = this.getPointOnPath(y, 0.25), C = x ? x.x : u.x + (p.x - u.x) * (1 - 0.25), v = x ? x.y : u.y + (p.y - u.y) * (1 - 0.25), E = S ? S.x : u.x + (p.x - u.x) * 0.25, B = S ? S.y : u.y + (p.y - u.y) * 0.25;
      if (w) {
        const k = document.createElementNS("http://www.w3.org/2000/svg", "text");
        k.setAttribute("x", String(C)), k.setAttribute("y", String(v - 8)), k.setAttribute("text-anchor", "middle"), k.setAttribute("dominant-baseline", "middle"), k.setAttribute("font-size", "12"), k.setAttribute("fill", "#333"), k.setAttribute("font-weight", "bold"), k.setAttribute("pointer-events", "none"), k.setAttribute("data-edge-pair-key", e.key);
        const I = document.createElementNS("http://www.w3.org/2000/svg", "rect"), M = w.length * 7;
        I.setAttribute("x", String(C - M / 2 - 4)), I.setAttribute("y", String(v - 16)), I.setAttribute("width", String(M + 8)), I.setAttribute("height", "16"), I.setAttribute("fill", "rgba(255, 255, 255, 0.9)"), I.setAttribute("rx", "2"), I.setAttribute("pointer-events", "none"), I.setAttribute("data-edge-pair-key", e.key), this.edgeLabelsGroup.appendChild(I), k.textContent = w, this.edgeLabelsGroup.appendChild(k);
      }
      if (b) {
        const k = document.createElementNS("http://www.w3.org/2000/svg", "text");
        k.setAttribute("x", String(E)), k.setAttribute("y", String(B - 8)), k.setAttribute("text-anchor", "middle"), k.setAttribute("dominant-baseline", "middle"), k.setAttribute("font-size", "12"), k.setAttribute("fill", "#333"), k.setAttribute("font-weight", "bold"), k.setAttribute("pointer-events", "none"), k.setAttribute("data-edge-pair-key", e.key);
        const I = document.createElementNS("http://www.w3.org/2000/svg", "rect"), M = b.length * 7;
        I.setAttribute("x", String(E - M / 2 - 4)), I.setAttribute("y", String(B - 16)), I.setAttribute("width", String(M + 8)), I.setAttribute("height", "16"), I.setAttribute("fill", "rgba(255, 255, 255, 0.9)"), I.setAttribute("rx", "2"), I.setAttribute("pointer-events", "none"), I.setAttribute("data-edge-pair-key", e.key), this.edgeLabelsGroup.appendChild(I), k.textContent = b, this.edgeLabelsGroup.appendChild(k);
      }
    } else if (A) {
      const T = this.getPointOnPath(y, 0.5), x = T ? T.x : (u.x + p.x) / 2, S = T ? T.y : (u.y + p.y) / 2, C = document.createElementNS("http://www.w3.org/2000/svg", "text");
      C.setAttribute("x", String(x)), C.setAttribute("y", String(S)), C.setAttribute("text-anchor", "middle"), C.setAttribute("dominant-baseline", "middle"), C.setAttribute("data-edge-pair-key", e.key), C.setAttribute("font-size", "12"), C.setAttribute("fill", "#333"), C.setAttribute("font-weight", "bold"), C.setAttribute("pointer-events", "none");
      const v = document.createElementNS("http://www.w3.org/2000/svg", "rect"), E = w.length * 7;
      v.setAttribute("x", String(x - E / 2 - 4)), v.setAttribute("y", String(S - 8)), v.setAttribute("width", String(E + 8)), v.setAttribute("height", "16"), v.setAttribute("fill", "rgba(255, 255, 255, 0.9)"), v.setAttribute("rx", "2"), v.setAttribute("pointer-events", "none"), v.setAttribute("data-edge-pair-key", e.key), this.edgeLabelsGroup.appendChild(v), C.textContent = w, this.edgeLabelsGroup.appendChild(C);
    } else if (t.label) {
      const T = this.getPointOnPath(y, 0.5), x = T ? T.x : (u.x + p.x) / 2, S = T ? T.y : (u.y + p.y) / 2, C = document.createElementNS("http://www.w3.org/2000/svg", "text");
      C.setAttribute("x", String(x)), C.setAttribute("y", String(S)), C.setAttribute("text-anchor", "middle"), C.setAttribute("dominant-baseline", "middle"), C.setAttribute("font-size", "12"), C.setAttribute("fill", "#333"), C.setAttribute("font-weight", "bold"), C.setAttribute("pointer-events", "none"), C.setAttribute("data-edge-pair-key", e.key);
      const v = document.createElementNS("http://www.w3.org/2000/svg", "rect"), E = t.label.length * 7;
      v.setAttribute("x", String(x - E / 2 - 4)), v.setAttribute("y", String(S - 8)), v.setAttribute("width", String(E + 8)), v.setAttribute("height", "16"), v.setAttribute("fill", "rgba(255, 255, 255, 0.9)"), v.setAttribute("rx", "2"), v.setAttribute("pointer-events", "none"), v.setAttribute("data-edge-pair-key", e.key), this.edgeLabelsGroup.appendChild(v), C.textContent = t.label, this.edgeLabelsGroup.appendChild(C);
    }
  }
  /**
   * Set mode
   */
  setMode(e) {
    if (!this.editable && e === "edit")
      return;
    const t = this.mode === "edit";
    e === "edit" && this.mode === "view" && (this.saveSnapshot(), this.undoStack = [], this.redoStack = []), this.mode = e, this.render(), e === "view" && (this.deselectEdge(), t && this.onSave && this.onSave({
      nodes: this.nodes,
      edges: this.edges,
      groups: this.groups.length > 0 ? this.groups : void 0
    })), this.updateEditToggleButtonIcon(), this.updateControlButtons(), this.onModeChange && this.onModeChange();
  }
  /**
   * Set callback for mode change notification
   */
  setModeChangeCallback(e) {
    this.onModeChange = e;
  }
  /**
   * Set callback for always show edges state changes
   */
  setAlwaysShowEdgesChangeCallback(e) {
    this.onAlwaysShowEdgesChange = e;
  }
  /**
   * Set callback for Graph buttons update (for ViewContainer)
   */
  setGraphButtonsUpdateCallback(e) {
    this.onGraphButtonsUpdate = e;
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
  setAlwaysShowEdges(e) {
    this.alwaysShowEdges !== e && (this.alwaysShowEdges = e, this.updateAlwaysShowEdgesButton(), this.alwaysShowEdges || (this.hoveredEdgePairKey = null, this.tappedEdgePairKey = null), this.render());
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
  hasBendPoints(e) {
    const t = this.edges.find((l) => l.id === e);
    if (!t)
      return !1;
    const [n, s] = t.src < t.dst ? [t.src, t.dst] : [t.dst, t.src], o = `${n}||${s}`, d = this.groupEdgesByPair(this.edges).find((l) => l.key === o);
    return !!(d && d.bends && d.bends.length > 0);
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
    let e = 1 / 0, t = 1 / 0, n = -1 / 0, s = -1 / 0;
    for (const r of this.nodes) {
      if (!r.position) continue;
      const u = r.style || {}, p = u.width ?? this.DEFAULT_NODE_WIDTH, y = u.height ?? this.DEFAULT_NODE_HEIGHT;
      e = Math.min(e, r.position.x - p / 2), t = Math.min(t, r.position.y - y / 2), n = Math.max(n, r.position.x + p / 2), s = Math.max(s, r.position.y + y / 2);
    }
    for (const r of this.groups) {
      const u = this.getGroupLayout(r);
      u && (e = Math.min(e, u.position.x), t = Math.min(t, u.position.y), n = Math.max(n, u.position.x + u.size.width), s = Math.max(s, u.position.y + u.size.height));
    }
    for (const r of this.edges) {
      const u = this.getEdgePoints(r);
      for (const p of u)
        e = Math.min(e, p.x), t = Math.min(t, p.y), n = Math.max(n, p.x), s = Math.max(s, p.y);
    }
    const o = 20;
    e -= o, t -= o, n += o, s += o;
    const d = n - e, l = s - t, a = this.svg.cloneNode(!0);
    a.setAttribute("viewBox", `0 0 ${d} ${l}`), a.setAttribute("width", String(Math.round(d))), a.setAttribute("height", String(Math.round(l)));
    const h = `translate(${-e}, ${-t})`;
    return [
      a.querySelector(".groups"),
      a.querySelector(".edges"),
      a.querySelector(".nodes"),
      a.querySelector(".anchor-handles"),
      a.querySelector(".bend-handles"),
      a.querySelector(".edge-labels")
    ].forEach((r) => {
      r instanceof SVGGElement && r.setAttribute("transform", h);
    }), a.querySelectorAll(".edges path[data-edge-pair-key]").forEach((r) => {
      r instanceof SVGPathElement && (r.setAttribute("stroke-opacity", "1"), (parseFloat(r.getAttribute("stroke-width") || "0") || 0) < 2 && r.setAttribute("stroke-width", "2"));
    }), new XMLSerializer().serializeToString(a);
  }
  /**
   * Export current view as image blob (Graph view: SVG → canvas → blob).
   * Uses data URL for SVG to avoid tainted canvas when drawing to canvas.
   */
  async exportViewToImage(e, t) {
    const n = this.getViewAsSvg();
    if (!n) return null;
    const s = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(n);
    return new Promise((o) => {
      const d = new Image();
      d.crossOrigin = "anonymous", d.onload = () => {
        const l = d.naturalWidth, a = d.naturalHeight, h = document.createElement("canvas");
        h.width = l, h.height = a;
        const c = h.getContext("2d");
        if (!c) {
          o(null);
          return;
        }
        c.fillStyle = "#ffffff", c.fillRect(0, 0, l, a), c.drawImage(d, 0, 0);
        const f = t?.quality ?? 0.92;
        h.toBlob(
          (r) => o(r ?? null),
          e === "png" ? "image/png" : "image/webp",
          f
        );
      }, d.onerror = () => o(null), d.src = s;
    });
  }
  /**
   * Show view
   */
  show() {
    this.container.style.display = "block", this.nodes.length > 0 && setTimeout(() => {
      const e = this.container.getBoundingClientRect();
      e.width > 0 && e.height > 0 && this.fitAndCenter();
    }, 100), this.resize();
  }
  /**
   * Create popup
   */
  createPopup() {
    const e = document.createElement("div");
    e.className = "relatos-graph-popup", e.style.cssText = `
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
    const t = document.createElement("div");
    return t.style.cssText = `
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-top: 8px solid white;
    `, e.appendChild(t), this.container.appendChild(e), e;
  }
  /**
   * Show popup
   */
  showPopup(e) {
    !e || !e.position || (this.hidePopup(), this.popupElement || (this.popupElement = this.createPopup()), this.popupElement.textContent = e.label, this.popupElement.style.opacity = "1", this.popupElement.style.display = "block", this.popupNodeId = e.id, requestAnimationFrame(() => {
      this.popupElement && this.popupNodeId === e.id && this.updatePopupPosition(e);
    }));
  }
  /**
   * Update popup position
   */
  updatePopupPosition(e) {
    if (!this.popupElement || !e || !e.position)
      return;
    const t = e.style || {};
    t.width || this.DEFAULT_NODE_WIDTH;
    const n = t.height || this.DEFAULT_NODE_HEIGHT, s = this.nodeElements.get(e.id);
    if (!s) {
      this.container.getBoundingClientRect(), this.svg.getBoundingClientRect();
      const p = isFinite(this.zoom) && this.zoom > 0 ? this.zoom : 1, y = isFinite(this.offsetX) ? this.offsetX : 0, g = isFinite(this.offsetY) ? this.offsetY : 0, m = (e.position.x + y) * p, w = (e.position.y + g) * p, b = this.popupElement.getBoundingClientRect(), _ = b.width || 200, A = b.height || 50, T = m - _ / 2, x = w - n * p / 2 - A - 10;
      this.popupElement.style.left = `${T}px`, this.popupElement.style.top = `${x}px`;
      return;
    }
    const o = s.getBoundingClientRect(), d = this.container.getBoundingClientRect(), l = o.left + o.width / 2 - d.left, a = o.top + o.height / 2 - d.top, h = this.popupElement.getBoundingClientRect(), c = h.width || 200, f = h.height || 50, r = l - c / 2, u = a - o.height / 2 - f - 10;
    this.popupElement.style.left = `${r}px`, this.popupElement.style.top = `${u}px`;
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
    const e = this.container.getBoundingClientRect();
    if (this.svg.setAttribute("width", String(e.width)), this.svg.setAttribute("height", String(e.height)), this.popupNodeId && this.popupElement) {
      const t = this.nodes.find((n) => n.id === this.popupNodeId);
      t && this.updatePopupPosition(t);
    }
  }
  /**
   * Destroy
   */
  destroy() {
    this.nodeElements.clear(), this.edgeElements.clear(), this.container.contains(this.svg) && this.container.removeChild(this.svg);
  }
};
Ee.MAX_UNDO_LEVELS = 50;
let ti = Ee;
function xa(i, e = 16) {
  return Rt(), `<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <use href="#${i}"></use>
  </svg>`;
}
class va {
  // postRender event listener for popup position updates
  constructor(e, t, n, s, o, d) {
    this.viewer = null, this.Cesium = null, this.nodes = [], this.edges = [], this.selectedNodeId = null, this.lastSelectedNodeId = null, this.nodeEntities = /* @__PURE__ */ new Map(), this.edgeEntities = /* @__PURE__ */ new Map(), this.rectEntity = null, this.fitCenterButton = null, this.lightingToggleButton = null, this.alwaysShowEdgesButton = null, this.alwaysShowEdges = !0, this.tileTypeButton = null, this.baseImageryLayer = null, this.timeISO = null, this.customTileUrls = [], this.currentCustomTileIndex = 0, this.popupElement = null, this.popupEntity = null, this.popupUpdateListener = null, this.container = e, this.onNodeClick = t, this.cesiumLoader = n, this.globe3dOptions = s, this.onEdgeClick = d;
    const l = o && o.length > 0 ? o : s?.customTileUrls;
    l && l.length > 0 ? this.customTileUrls = l.map(
      (a) => typeof a == "string" ? { url: a } : a
    ) : s?.customTileUrl && (this.customTileUrls = [{ url: s.customTileUrl }]), this.container.style.position = "relative", this.container.style.width = "100%", this.container.style.height = "100%";
  }
  async initializeCesium() {
    if (this.viewer) return;
    if (!this.cesiumLoader)
      throw new Error("Cesium loader is not provided. Please provide options.loaders.cesium.");
    const e = await this.cesiumLoader();
    this.Cesium = e.default || e;
    const t = new this.Cesium.EllipsoidTerrainProvider();
    this.Cesium.Ion && (this.Cesium.Ion.defaultAccessToken = ""), this.viewer = new this.Cesium.Viewer(this.container, {
      terrainProvider: t,
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
      requestRenderMode: !1
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
    const e = this.viewer.canvas, t = this.viewer.scene.camera, n = 5e5, s = 4e7, o = (f) => {
      if (f.ctrlKey) {
        f.preventDefault(), f.stopPropagation();
        const r = 1 - f.deltaY * 0.01, u = this.Cesium.Cartographic.fromCartesian(t.position);
        let y = u.height / r;
        y = Math.max(n, Math.min(s, y));
        const g = this.Cesium.Cartesian3.fromRadians(
          u.longitude,
          u.latitude,
          y
        );
        t.setView({
          destination: g,
          orientation: {
            heading: t.heading,
            pitch: t.pitch,
            roll: t.roll
          }
        });
      }
    };
    let d = 1, l = 0;
    const a = (f) => {
      f.preventDefault(), d = f.scale || 1, l = this.Cesium.Cartographic.fromCartesian(t.position).height;
    }, h = (f) => {
      f.preventDefault();
      const u = (f.scale || 1) / d;
      let p = l / u;
      p = Math.max(n, Math.min(s, p));
      const y = this.Cesium.Cartographic.fromCartesian(t.position), g = this.Cesium.Cartesian3.fromRadians(
        y.longitude,
        y.latitude,
        p
      );
      t.setView({
        destination: g,
        orientation: {
          heading: t.heading,
          pitch: t.pitch,
          roll: t.roll
        }
      });
    }, c = (f) => {
      f.preventDefault(), d = 1, l = 0;
    };
    e.addEventListener("wheel", o, { passive: !1 }), "GestureEvent" in window && (e.addEventListener("gesturestart", a, { passive: !1 }), e.addEventListener("gesturechange", h, { passive: !1 }), e.addEventListener("gestureend", c, { passive: !1 })), this._trackpadPinchHandlers = {
      wheel: o,
      gestureStart: a,
      gestureChange: h,
      gestureEnd: c
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
  setTime(e) {
    if (this.timeISO = e, !(!this.viewer || !this.Cesium))
      try {
        let t;
        e.startsWith("-") ? t = this.parseBCDate(e) : t = this.Cesium.JulianDate.fromIso8601(e), t && (this.viewer.clock.currentTime = t, this.viewer.clock.startTime = t, this.viewer.clock.stopTime = t, this.viewer.clock.shouldAnimate = !1);
      } catch {
      }
  }
  /**
   * Convert BC date string to JulianDate (approximation using year 2000)
   */
  parseBCDate(e) {
    if (!this.Cesium) return null;
    try {
      const t = e.match(/^-(\d+)-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(Z|[+-]\d{2}:\d{2})?/);
      if (!t) throw new Error("Invalid BC date format");
      const n = `2000-${t[2]}-${t[3]}T${t[4]}:${t[5]}:${t[6]}${t[7] || "Z"}`;
      return this.Cesium.JulianDate.fromIso8601(n);
    } catch {
      return null;
    }
  }
  /**
   * Set day/night shading on/off
   */
  setLighting(e) {
    if (!this.viewer || !this.Cesium || this.isLightingEnabled() === e) return;
    const t = this.viewer.scene.globe;
    t.enableLighting = e, t.dynamicAtmosphereLighting = e, t.dynamicAtmosphereLightingFromSun = e, t.showGroundAtmosphere = !0, e ? (t.lightingFadeOutDistance = 0, t.lightingFadeInDistance = 0, t.nightFadeInDistance = 0, t.nightFadeOutDistance = 0, this.baseImageryLayer && (this.baseImageryLayer.nightAlpha = 0.9), this.viewer.scene.sun && (this.viewer.scene.sun.show = !0), this.viewer.scene.moon?.onlySunLighting !== void 0 && (this.viewer.scene.moon.onlySunLighting = !0)) : this.viewer.scene.moon?.onlySunLighting !== void 0 && (this.viewer.scene.moon.onlySunLighting = !1), this.updateLightingButton();
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
  setAlwaysShowEdges(e) {
    this.alwaysShowEdges !== e && (this.alwaysShowEdges = e, this.updateAlwaysShowEdgesButton(), this.renderWithoutFit());
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
  setLightingEnabled(e, t = !0) {
    const n = this.isLightingEnabled();
    this.setLighting(e), t && this.onLightingChange && this.isLightingEnabled() !== n && this.onLightingChange(this.isLightingEnabled());
  }
  /**
   * Set callback for always show edges state changes
   */
  setAlwaysShowEdgesChangeCallback(e) {
    this.onAlwaysShowEdgesChange = e;
  }
  /**
   * Set callback for lighting state changes
   */
  setLightingChangeCallback(e) {
    this.onLightingChange = e;
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
  setTileServerIndex(e) {
    if (this.customTileUrls.length === 0)
      return;
    const t = this.customTileUrls.length, n = (e % t + t) % t;
    this.currentCustomTileIndex !== n && (this.currentCustomTileIndex = n, this.viewer && this.Cesium && (this.setTileTypeInternal(!0), this.updateTileTypeButton()));
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
    const e = 5e5, t = 4e7, n = this.viewer.scene.screenSpaceCameraController;
    n.minimumZoomDistance = e, n.maximumZoomDistance = t, n.enableInputs = !0, n.enableZoom = !0, n.enableRotate = !0, n.enableTilt = !0, n.enableTranslate = !0;
    const s = this.Cesium.CameraEventType;
    n.zoomEventTypes = [
      s.WHEEL,
      s.PINCH
    ], n.rotateEventTypes = s.LEFT_DRAG, n.tiltEventTypes = [
      { eventType: s.LEFT_DRAG, modifier: this.Cesium.KeyboardEventModifier.CTRL },
      { eventType: s.MIDDLE_DRAG }
    ], n.translateEventTypes = [
      s.RIGHT_DRAG
      // Two-finger drag on mobile/trackpad
    ];
    let o = !1, d = !1;
    this.viewer.scene.camera.changed.addEventListener(() => {
      if (o || d)
        return;
      const l = this.viewer.scene.camera, a = this.Cesium.Cartographic.fromCartesian(l.position), h = a.height;
      if (h < e || h > t) {
        o = !0;
        const c = Math.max(e, Math.min(t, h)), f = this.Cesium.Cartesian3.fromRadians(
          a.longitude,
          a.latitude,
          c
        );
        l.setView({
          destination: f,
          orientation: l.orientation
        }), setTimeout(() => {
          o = !1;
        }, 0);
      }
    }), this._isFlying = () => d, this._setIsFlying = (l) => {
      d = l;
    };
  }
  /**
   * Set click handler
   */
  setupClickHandler() {
    if (!this.viewer || !this.Cesium)
      return;
    new this.Cesium.ScreenSpaceEventHandler(this.viewer.canvas).setInputAction((t) => {
      const n = this.viewer.scene.pick(t.position);
      if (n && n.id && n.id.nodeId) {
        const o = n.id.nodeId, d = this.nodes.find((a) => a.id === o), l = this.nodeEntities.get(o);
        if (d && l && (this.showPopup(l, d), this.onNodeClick)) {
          const a = this.viewer.camera.pickEllipsoid(t.position, this.viewer.scene.globe.ellipsoid);
          if (a) {
            const h = this.Cesium.Cartographic.fromCartesian(a), c = this.Cesium.Math.toDegrees(h.longitude), f = this.Cesium.Math.toDegrees(h.latitude);
            this.onNodeClick({
              node: d,
              position: { x: c, y: f },
              originalEvent: t.originalEvent
            });
          }
        }
        return;
      }
      const s = this.viewer.scene.drillPick(t.position);
      for (const o of s)
        if (o.id && o.id.nodeId) {
          const d = o.id.nodeId, l = this.nodes.find((h) => h.id === d), a = this.nodeEntities.get(d);
          if (l && a && (this.showPopup(a, l), this.onNodeClick)) {
            const h = this.viewer.camera.pickEllipsoid(t.position, this.viewer.scene.globe.ellipsoid);
            if (h) {
              const c = this.Cesium.Cartographic.fromCartesian(h), f = this.Cesium.Math.toDegrees(c.longitude), r = this.Cesium.Math.toDegrees(c.latitude);
              this.onNodeClick({
                node: l,
                position: { x: f, y: r },
                originalEvent: t.originalEvent
              });
            }
          }
          return;
        }
      s.length === 0 && this.hidePopup();
      for (const o of s)
        if (o.id && o.id.edgeId) {
          const d = o.id.edgeId, l = this.edges.find((a) => a.id === d);
          if (l && this.onEdgeClick) {
            const a = this.viewer.camera.pickEllipsoid(t.position, this.viewer.scene.globe.ellipsoid);
            if (a) {
              const h = this.Cesium.Cartographic.fromCartesian(a), c = this.Cesium.Math.toDegrees(h.longitude), f = this.Cesium.Math.toDegrees(h.latitude);
              this.onEdgeClick({
                edge: l,
                position: { x: c, y: f },
                originalEvent: t.originalEvent
              });
            }
          }
          return;
        }
      !n && (!s || s.length === 0) && this.hidePopup();
    }, this.Cesium.ScreenSpaceEventType.LEFT_CLICK);
  }
  /**
   * Set data
   */
  setData(e, t) {
    this.nodes = e, this.edges = t, this.viewer && this.Cesium && this.render();
  }
  /**
   * Select node (highlight)
   * In Globe3D mode, move camera to node position and display at center
   * If same node is selected again, switch to fit action showing entire view
   */
  selectNode(e) {
    if (!e) {
      this.selectedNodeId = null, this.lastSelectedNodeId = null, this.hidePopup(), this.render();
      return;
    }
    if (!this.viewer || !this.Cesium) return;
    if (e === this.lastSelectedNodeId) {
      this.lastSelectedNodeId = null, this.nodeEntities.size > 0 && this.updateNodeSelection(), this.fitToNodes();
      return;
    }
    this.lastSelectedNodeId = e, this.selectedNodeId = e, this.nodeEntities.size > 0 ? this.updateNodeSelection() : this.render();
    const t = this.nodes.find((s) => s.id === e);
    if (!t) return;
    if (t.coordinates && t.coordinates.length === 2) {
      const [s, o] = t.coordinates;
      if (Number.isFinite(s) && Number.isFinite(o)) {
        const [d, l] = t.coordinates, a = 3e6, h = this.nodeEntities.get(e);
        h && t && this.showPopup(h, t);
        const c = this._setIsFlying;
        c && c(!0), setTimeout(() => {
          this.viewer.camera.flyTo({
            destination: this.Cesium.Cartesian3.fromDegrees(l, d, a),
            orientation: {
              heading: this.Cesium.Math.toRadians(0),
              pitch: this.Cesium.Math.toRadians(-90),
              roll: 0
            },
            duration: 1,
            // Move in 1 second
            complete: () => {
              c && c(!1);
            }
          });
        }, 0);
        return;
      }
    }
    const n = this.nodes.filter((s) => {
      if (!s.coordinates || !Array.isArray(s.coordinates) || s.coordinates.length !== 2) return !0;
      const [o, d] = s.coordinates;
      return !Number.isFinite(o) || !Number.isFinite(d);
    });
    if (n.length > 0) {
      const a = Math.ceil(Math.sqrt(n.length)), c = 50 / (Math.ceil(n.length / a) + 1), f = 32 / (a + 1), r = n.findIndex((u) => u.id === e);
      if (r >= 0) {
        const u = Math.floor(r / a), p = r % a, y = -50 + (u + 1) * c, g = -32 + (p + 1) * f, m = 3e6, w = this.nodeEntities.get(e);
        w && t && this.showPopup(w, t);
        const b = this._setIsFlying;
        b && b(!0), setTimeout(() => {
          this.viewer.camera.flyTo({
            destination: this.Cesium.Cartesian3.fromDegrees(g, y, m),
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
    const e = this.nodes.filter((s) => {
      if (!s.coordinates || !Array.isArray(s.coordinates) || s.coordinates.length !== 2) return !0;
      const [o, d] = s.coordinates;
      return !Number.isFinite(o) || !Number.isFinite(d);
    }), t = this.nodes.filter((s) => {
      if (!s.coordinates || !Array.isArray(s.coordinates) || s.coordinates.length !== 2) return !1;
      const [o, d] = s.coordinates;
      return Number.isFinite(o) && Number.isFinite(d);
    }), n = /* @__PURE__ */ new Map();
    if (e.length > 0) {
      const a = [
        this.Cesium.Cartesian3.fromDegrees(-32, -50, 0),
        this.Cesium.Cartesian3.fromDegrees(0, -50, 0),
        this.Cesium.Cartesian3.fromDegrees(0, 0, 0),
        this.Cesium.Cartesian3.fromDegrees(-32, 0, 0)
      ];
      this.rectEntity = this.viewer.entities.add({
        polygon: {
          hierarchy: a,
          material: this.Cesium.Color.fromCssColorString("#f0f0f0").withAlpha(0.1),
          outline: !0,
          outlineColor: this.Cesium.Color.fromCssColorString("#666"),
          height: 0
        }
      });
      const h = Math.ceil(Math.sqrt(e.length)), f = 50 / (Math.ceil(e.length / h) + 1), r = 32 / (h + 1);
      e.forEach((u, p) => {
        const y = Math.floor(p / h), g = p % h, m = -50 + (y + 1) * f, w = -32 + (g + 1) * r;
        n.set(u.id, [m, w]);
        const b = this.selectedNodeId === u.id, _ = u.style?.color || "#ffffff", A = b ? "#2196f3" : u.style?.borderColor || "#333333";
        let T;
        const x = _.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
        if (x) {
          const v = parseInt(x[1], 16) / 255, E = parseInt(x[2], 16) / 255, B = parseInt(x[3], 16) / 255;
          T = new this.Cesium.Color(v, E, B, 1);
        } else
          T = this.Cesium.Color.fromCssColorString(_), T = T.withAlpha(1);
        const S = this.Cesium.Color.fromCssColorString(A), C = this.viewer.entities.add({
          position: this.Cesium.Cartesian3.fromDegrees(w, m, 0),
          point: {
            pixelSize: b ? 15 : 10,
            color: T,
            outlineColor: S,
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
        this.nodeEntities.set(u.id, C);
      });
    }
    for (const s of t) {
      const [o, d] = s.coordinates;
      n.set(s.id, [o, d]);
      const l = this.selectedNodeId === s.id, a = s.style?.color || "#ffffff", h = l ? "#2196f3" : s.style?.borderColor || "#333333";
      let c;
      const f = a.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
      if (f) {
        const p = parseInt(f[1], 16) / 255, y = parseInt(f[2], 16) / 255, g = parseInt(f[3], 16) / 255;
        c = new this.Cesium.Color(p, y, g, 1);
      } else
        c = this.Cesium.Color.fromCssColorString(a), c = c.withAlpha(1);
      const r = this.Cesium.Color.fromCssColorString(h), u = this.viewer.entities.add({
        position: this.Cesium.Cartesian3.fromDegrees(d, o, 0),
        point: {
          pixelSize: l ? 15 : 10,
          color: c,
          // Use node fill color
          outlineColor: r,
          // Use border color
          outlineWidth: 2,
          heightReference: this.Cesium.HeightReference.CLAMP_TO_GROUND
        },
        label: {
          text: s.label,
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
        nodeId: s.id
        // For hit testing
      });
      this.nodeEntities.set(s.id, u);
    }
    if (this.alwaysShowEdges)
      for (const s of this.edges) {
        const o = n.get(s.src), d = n.get(s.dst);
        if (!o || !d)
          continue;
        const [l, a] = o, [h, c] = d, f = s.style?.color || "#999999", r = s.style?.weight || 1, u = Math.max(1, Math.min(5, r)), p = this.viewer.entities.add({
          polyline: {
            positions: [
              this.Cesium.Cartesian3.fromDegrees(a, l, 0),
              this.Cesium.Cartesian3.fromDegrees(c, h, 0)
            ],
            width: u,
            material: this.Cesium.Color.fromCssColorString(f),
            clampToGround: !0
          },
          edgeId: s.id
          // For hit testing
        });
        this.edgeEntities.set(s.id, p);
      }
    this.fitToNodes();
  }
  /**
   * Update node selection state without re-rendering edges
   * This preserves edge visibility during node selection
   */
  updateNodeSelection() {
    if (!(!this.viewer || !this.Cesium))
      for (const [e, t] of this.nodeEntities.entries()) {
        const n = this.nodes.find((l) => l.id === e);
        if (!n)
          continue;
        const s = this.selectedNodeId === e, o = n.style?.color || "#ffffff", d = s ? "#2196f3" : n.style?.borderColor || "#333333";
        if (t.point) {
          t.point.pixelSize = s ? 15 : 10;
          let l;
          const a = o.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
          if (a) {
            const h = parseInt(a[1], 16) / 255, c = parseInt(a[2], 16) / 255, f = parseInt(a[3], 16) / 255;
            l = new this.Cesium.Color(h, c, f, 1);
          } else
            l = this.Cesium.Color.fromCssColorString(o), l = l.withAlpha(1);
          t.point.color = l, t.point.outlineColor = this.Cesium.Color.fromCssColorString(d);
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
    const e = this.nodes.filter((s) => {
      if (!s.coordinates || !Array.isArray(s.coordinates) || s.coordinates.length !== 2) return !0;
      const [o, d] = s.coordinates;
      return !Number.isFinite(o) || !Number.isFinite(d);
    }), t = this.nodes.filter((s) => {
      if (!s.coordinates || !Array.isArray(s.coordinates) || s.coordinates.length !== 2) return !1;
      const [o, d] = s.coordinates;
      return Number.isFinite(o) && Number.isFinite(d);
    }), n = /* @__PURE__ */ new Map();
    if (e.length > 0) {
      const a = [
        this.Cesium.Cartesian3.fromDegrees(-32, -50, 0),
        this.Cesium.Cartesian3.fromDegrees(0, -50, 0),
        this.Cesium.Cartesian3.fromDegrees(0, 0, 0),
        this.Cesium.Cartesian3.fromDegrees(-32, 0, 0)
      ];
      this.rectEntity = this.viewer.entities.add({
        polygon: {
          hierarchy: a,
          material: this.Cesium.Color.fromCssColorString("#f0f0f0").withAlpha(0.1),
          outline: !0,
          outlineColor: this.Cesium.Color.fromCssColorString("#666"),
          height: 0
        }
      });
      const h = Math.ceil(Math.sqrt(e.length)), f = 50 / (Math.ceil(e.length / h) + 1), r = 32 / (h + 1);
      e.forEach((u, p) => {
        const y = Math.floor(p / h), g = p % h, m = -50 + (y + 1) * f, w = -32 + (g + 1) * r;
        n.set(u.id, [m, w]);
        const b = this.selectedNodeId === u.id, _ = u.style?.color || "#ffffff", A = b ? "#2196f3" : u.style?.borderColor || "#333333";
        let T;
        const x = _.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
        if (x) {
          const v = parseInt(x[1], 16) / 255, E = parseInt(x[2], 16) / 255, B = parseInt(x[3], 16) / 255;
          T = new this.Cesium.Color(v, E, B, 1);
        } else
          T = this.Cesium.Color.fromCssColorString(_), T = T.withAlpha(1);
        const S = this.Cesium.Color.fromCssColorString(A), C = this.viewer.entities.add({
          position: this.Cesium.Cartesian3.fromDegrees(w, m, 0),
          point: {
            pixelSize: b ? 15 : 10,
            color: T,
            outlineColor: S,
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
        this.nodeEntities.set(u.id, C);
      });
    }
    for (const s of t) {
      const [o, d] = s.coordinates;
      n.set(s.id, [o, d]);
      const l = this.selectedNodeId === s.id, a = s.style?.color || "#ffffff", h = l ? "#2196f3" : s.style?.borderColor || "#333333";
      let c;
      const f = a.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
      if (f) {
        const p = parseInt(f[1], 16) / 255, y = parseInt(f[2], 16) / 255, g = parseInt(f[3], 16) / 255;
        c = new this.Cesium.Color(p, y, g, 1);
      } else
        c = this.Cesium.Color.fromCssColorString(a), c = c.withAlpha(1);
      const r = this.Cesium.Color.fromCssColorString(h), u = this.viewer.entities.add({
        position: this.Cesium.Cartesian3.fromDegrees(d, o, 0),
        point: {
          pixelSize: l ? 15 : 10,
          color: c,
          outlineColor: r,
          outlineWidth: 2,
          heightReference: this.Cesium.HeightReference.CLAMP_TO_GROUND
        },
        label: {
          text: s.label,
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
        nodeId: s.id
      });
      this.nodeEntities.set(s.id, u);
    }
    if (this.alwaysShowEdges)
      for (const s of this.edges) {
        const o = n.get(s.src), d = n.get(s.dst);
        if (!o || !d)
          continue;
        const [l, a] = o, [h, c] = d, f = s.style?.color || "#999999", r = s.style?.weight || 1, u = Math.max(1, Math.min(5, r)), p = this.viewer.entities.add({
          polyline: {
            positions: [
              this.Cesium.Cartesian3.fromDegrees(a, l, 0),
              this.Cesium.Cartesian3.fromDegrees(c, h, 0)
            ],
            width: u,
            material: this.Cesium.Color.fromCssColorString(f),
            clampToGround: !0
          },
          edgeId: s.id
          // For hit testing
        });
        this.edgeEntities.set(s.id, p);
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
  setTileTypeInternal(e = !1) {
    if (!this.viewer || !this.Cesium)
      return;
    const t = (l, a, h, c = !1) => {
      const f = (u) => String(u).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"), r = `<a href="${f(h)}" target="_blank" rel="noopener noreferrer">${f(a)}</a>`;
      return new l.Credit(r, c);
    };
    if (this.baseImageryLayer)
      try {
        this.viewer.imageryLayers.remove(this.baseImageryLayer);
      } catch {
      }
    if (this.customTileUrls.length > 0) {
      const l = this.customTileUrls[this.currentCustomTileIndex], a = l.url.includes("NaturalEarthII"), h = l.maximumLevel ?? (a ? 2 : 19);
      let c;
      if (l.credit) {
        const u = l.credit;
        u.href ? c = t(this.Cesium, u.label, u.href, u.showOnScreen ?? !1) : c = new this.Cesium.Credit(u.label, u.showOnScreen ?? !1);
      } else
        c = new this.Cesium.Credit(
          `Custom tile server (${this.currentCustomTileIndex + 1}/${this.customTileUrls.length})`
        );
      const f = {
        url: l.url,
        maximumLevel: h,
        credit: c
      };
      a && this.Cesium?.GeographicTilingScheme && (f.tilingScheme = new this.Cesium.GeographicTilingScheme());
      const r = new this.Cesium.UrlTemplateImageryProvider(f);
      this.baseImageryLayer = this.viewer.imageryLayers.addImageryProvider(r, 0), this.updateTileTypeButton();
      return;
    }
    const n = new this.Cesium.Credit("© NASA", !0), s = new this.Cesium.GeographicTilingScheme({
      rectangle: this.Cesium.Rectangle.fromDegrees(-180, -90, 180, 90),
      numberOfLevelZeroTilesX: 2,
      // Level 0 has 2 tiles in X direction
      numberOfLevelZeroTilesY: 1
      // Level 0 has 1 tile in Y direction
    }), o = "/cesium/Assets/Textures/NaturalEarthII/{z}/{x}/{reverseY}.jpg", d = new this.Cesium.UrlTemplateImageryProvider({
      url: o,
      maximumLevel: 2,
      // NaturalEarthII tiles only go up to level 2
      tilingScheme: s,
      // EPSG:4326 (Geographic Coordinate System)
      credit: n,
      customTags: {
        reverseY: (l, a, h, c) => {
          const r = Math.pow(2, c) - 1 - h;
          return String(r);
        }
      }
    });
    this.baseImageryLayer = this.viewer.imageryLayers.addImageryProvider(d, 0), this.updateTileTypeButton();
  }
  /**
   * Update tile-switch button visibility/title based on current tile server index
   */
  updateTileTypeButton() {
    if (this.tileTypeButton) {
      if (this.customTileUrls.length > 1) {
        this.tileTypeButton.style.display = "flex";
        const e = this.currentCustomTileIndex + 1, t = this.customTileUrls.length;
        this.tileTypeButton.setAttribute("title", `Custom tile ${e}/${t}`), this.tileTypeButton.style.backgroundColor = "#fff", this.tileTypeButton.style.borderColor = "#ccc", this.tileTypeButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.tileTypeButton.style.transform = "translateY(0)";
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
    const e = this.isLightingEnabled();
    this.lightingToggleButton.innerHTML = xa("icon-sun", 16), e ? (this.lightingToggleButton.style.backgroundColor = "#fff9c4", this.lightingToggleButton.style.boxShadow = "inset 0 2px 4px rgba(0, 0, 0, 0.2)", this.lightingToggleButton.style.transform = "translateY(1px)") : (this.lightingToggleButton.style.backgroundColor = "#fff", this.lightingToggleButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.lightingToggleButton.style.transform = "translateY(0)"), this.lightingToggleButton.style.color = "#333";
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
    const e = this.nodes.filter((_) => {
      if (!_.coordinates || !Array.isArray(_.coordinates) || _.coordinates.length !== 2) return !1;
      const [A, T] = _.coordinates;
      return Number.isFinite(A) && Number.isFinite(T);
    }), t = this.nodes.filter((_) => {
      if (!_.coordinates || !Array.isArray(_.coordinates) || _.coordinates.length !== 2) return !0;
      const [A, T] = _.coordinates;
      return !Number.isFinite(A) || !Number.isFinite(T);
    }), n = [], s = [];
    if (e.forEach((_) => {
      if (_.coordinates && _.coordinates.length === 2) {
        const [A, T] = _.coordinates;
        Number.isFinite(A) && Number.isFinite(T) && (n.push(A), s.push(T));
      }
    }), t.length > 0) {
      const S = Math.ceil(Math.sqrt(t.length)), v = 50 / (Math.ceil(t.length / S) + 1), E = 32 / (S + 1);
      t.forEach((B, k) => {
        const I = Math.floor(k / S), M = k % S, L = -50 + (I + 1) * v, D = -32 + (M + 1) * E;
        n.push(L), s.push(D);
      });
    }
    if (n.length === 0)
      return;
    const o = Math.min(...n), d = Math.max(...n), l = Math.min(...s), a = Math.max(...s), h = (o + d) / 2, c = (l + a) / 2, f = d - o, r = a - l, u = Math.max(f, r), p = Math.max(1e6, u * 111e3 * 2), m = Math.max(5e5, Math.min(4e7, p)), w = () => new Promise((_) => {
      if (!this.baseImageryLayer) {
        _();
        return;
      }
      if (this.baseImageryLayer.imageryProvider && this.baseImageryLayer.imageryProvider.ready) {
        _();
        return;
      }
      const A = setTimeout(() => {
        _();
      }, 2e3);
      this.baseImageryLayer.imageryProvider && this.baseImageryLayer.imageryProvider.readyPromise ? this.baseImageryLayer.imageryProvider.readyPromise.then(() => {
        clearTimeout(A), _();
      }).catch(() => {
        clearTimeout(A), _();
      }) : (clearTimeout(A), _());
    }), b = this._setIsFlying;
    b && b(!0), w().then(() => {
      this.viewer.camera.flyTo({
        destination: this.Cesium.Cartesian3.fromDegrees(c, h, m),
        orientation: {
          heading: 0,
          pitch: this.Cesium.Math.toRadians(-90),
          roll: 0
        },
        duration: 1,
        // Animate in 1 second
        complete: () => {
          b && b(!1);
          const _ = this.viewer.scene.camera, A = this.Cesium.Cartographic.fromCartesian(_.position), T = A.height, x = 5e5, S = 4e7;
          if (T < x || T > S) {
            const C = Math.max(x, Math.min(S, T)), v = this.Cesium.Cartesian3.fromRadians(
              A.longitude,
              A.latitude,
              C
            );
            _.setView({
              destination: v,
              orientation: _.orientation
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
      const e = this.viewer.canvas, t = this._trackpadPinchHandlers;
      t.wheel && e.removeEventListener("wheel", t.wheel), "GestureEvent" in window && (t.gestureStart && e.removeEventListener("gesturestart", t.gestureStart), t.gestureChange && e.removeEventListener("gesturechange", t.gestureChange), t.gestureEnd && e.removeEventListener("gestureend", t.gestureEnd)), this._trackpadPinchHandlers = null;
    }
    this.viewer && (this.viewer.destroy(), this.viewer = null), this.nodeEntities.clear(), this.edgeEntities.clear();
  }
  /**
   * Create custom popup (Leaflet style)
   */
  createPopup() {
    const e = document.createElement("div");
    e.className = "relatos-globe3d-popup", e.style.cssText = `
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
    const t = document.createElement("div");
    return t.style.cssText = `
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-top: 8px solid white;
    `, e.appendChild(t), this.container.appendChild(e), e;
  }
  /**
   * Show popup
   */
  showPopup(e, t) {
    if (!(!this.viewer || !this.Cesium || !e) && (this.hidePopup(), this.popupElement || (this.popupElement = this.createPopup()), this.popupElement.textContent = t.label, this.popupElement.style.opacity = "1", this.popupEntity = e, this.updatePopupPosition(), !this.popupUpdateListener)) {
      const n = () => {
        this.popupEntity && this.popupElement && this.updatePopupPosition();
      };
      this.viewer.scene.postRender.addEventListener(n), this.popupUpdateListener = () => {
        this.viewer?.scene.postRender.removeEventListener(n);
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
    const e = this.popupEntity.position?.getValue(this.viewer.clock.currentTime);
    if (!e) return;
    let t = null;
    if (this.Cesium.SceneTransforms?.worldToWindowCoordinates ? t = this.Cesium.SceneTransforms.worldToWindowCoordinates(this.viewer.scene, e) : this.Cesium.SceneTransforms?.wgs84ToWindowCoordinates ? t = this.Cesium.SceneTransforms.wgs84ToWindowCoordinates(this.viewer.scene, e) : t = this.viewer.camera.project(e), !t) {
      this.popupElement.style.display = "none";
      return;
    }
    let n = 1;
    const s = this.container.getBoundingClientRect(), o = this.container.offsetWidth;
    o > 0 && s.width > 0 && (n = s.width / o);
    const d = t.x / n, l = t.y / n;
    this.popupElement.style.display = "block";
    const a = d - this.popupElement.offsetWidth / 2, h = l - this.popupElement.offsetHeight - 15;
    this.popupElement.style.left = `${a}px`, this.popupElement.style.top = `${h}px`;
  }
  /**
   * Check if editable (Globe3D is not editable)
   */
  isEditable() {
    return !1;
  }
}
function Ta(i, e = 16) {
  return Rt(), `<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <use href="#${i}"></use>
  </svg>`;
}
class Aa {
  // Current index in customTileUrls array
  constructor(e, t, n, s, o, d) {
    this.map = null, this.Leaflet = null, this.nodes = [], this.edges = [], this.selectedNodeId = null, this.lastSelectedNodeId = null, this.markers = /* @__PURE__ */ new Map(), this.polylines = /* @__PURE__ */ new Map(), this.rectLayer = null, this.fitCenterButton = null, this.lightingToggleButton = null, this.alwaysShowEdgesButton = null, this.alwaysShowEdges = !0, this.tileTypeButton = null, this.baseTileLayer = null, this.nightShadeLayer = null, this.nightShadeDebugLayer = null, this.lightingEnabled = !1, this.timeISO = null, this.moonToggleButton = null, this.moonEnabled = !1, this.moonMarker = null, this.customTileUrls = [], this.currentCustomTileIndex = 0, this.container = e, this.onNodeClick = t, this.leafletLoader = n, this.map2dOptions = o, this.onEdgeClick = d;
    const l = s && s.length > 0 ? s : o?.customTileUrls;
    l && l.length > 0 ? this.customTileUrls = l.map(
      (a) => typeof a == "string" ? { url: a } : a
    ) : o?.customTileUrl && (this.customTileUrls = [{ url: o.customTileUrl }]), this.container.style.position = "relative", this.container.style.width = "100%", this.container.style.height = "100%";
  }
  /**
   * Initialize Leaflet
   */
  async initializeLeaflet() {
    if (this.map)
      return;
    if (!this.leafletLoader)
      throw new Error("Leaflet loader is not provided. Please provide options.loaders.leaflet.");
    const e = await this.leafletLoader();
    this.Leaflet = e.default || e;
    const t = this.map2dOptions?.center || [0, 0], n = this.map2dOptions?.zoom || 2;
    let s = 5;
    if (this.customTileUrls.length > 0) {
      const d = this.customTileUrls.map((l) => l.maxZoom ?? l.maximumLevel ?? 19);
      s = Math.min(...d);
    }
    const o = {
      center: t,
      zoom: n,
      zoomControl: !1,
      // Hide zoom control (+/- buttons)
      attributionControl: !0,
      maxZoom: s
      // Use minimum maxZoom from all tile servers
    };
    this.customTileUrls.length === 0 && (o.crs = this.Leaflet.CRS.EPSG4326), this.map = this.Leaflet.map(this.container, o), this.setupBaseTileLayer(), this.setupTimeAndLighting(), this.lightingEnabled && this.updateNightShade(), this.moonEnabled && this.updateMoonMarker(), this.setupClickHandler(), (this.nodes.length > 0 || this.edges.length > 0) && this.render();
  }
  /**
   * Set up base tile layer
   */
  setupBaseTileLayer() {
    if (!this.map || !this.Leaflet)
      return;
    this.baseTileLayer && this.map.removeLayer(this.baseTileLayer);
    let e;
    if (this.customTileUrls.length > 0) {
      const s = this.customTileUrls[this.currentCustomTileIndex], o = s.maxZoom ?? s.maximumLevel ?? 19, d = s.tms ?? !1, l = s.attribution ?? `Custom tile server (${this.currentCustomTileIndex + 1}/${this.customTileUrls.length})`;
      e = this.Leaflet.tileLayer(s.url, {
        maxZoom: o,
        tms: d,
        // TMS format (Y from bottom to top) if specified
        attribution: l
      }), e.addTo(this.map), this.baseTileLayer = e;
      return;
    }
    const t = "/cesium/Assets/Textures/NaturalEarthII/{z}/{x}/{y}.jpg", n = this.Leaflet.latLngBounds([
      [-90, -180],
      // south, west
      [90, 180]
      // north, east
    ]);
    e = this.Leaflet.tileLayer(t, {
      minZoom: 0,
      // Native tiles exist only up to zoom level 2, but the map itself can zoom further (e.g., up to 5)
      // Leaflet will automatically upscale tiles beyond maxNativeZoom.
      maxNativeZoom: 2,
      tms: !0,
      // TMS scheme (Y from bottom to top)
      bounds: n,
      noWrap: !0,
      continuousWorld: !1,
      attribution: "© NASA"
    }), e.addTo(this.map), this.baseTileLayer = e;
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
  setTime(e) {
    this.timeISO = e, this.lightingEnabled && this.updateNightShade(), this.updateMoonButton(), this.moonEnabled && this.updateMoonMarker();
  }
  /**
   * Set day/night shading on/off
   * @param enabled true to enable, false to disable
   */
  setLighting(e) {
    if (this.lightingEnabled !== e) {
      if (this.lightingEnabled = e, !this.map || !this.Leaflet) {
        this.updateLightingButton();
        return;
      }
      e ? this.updateNightShade() : (this.nightShadeLayer && (this.map.removeLayer(this.nightShadeLayer), this.nightShadeLayer = null), this.nightShadeDebugLayer && (this.map.removeLayer(this.nightShadeDebugLayer), this.nightShadeDebugLayer = null)), this.updateLightingButton();
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
  setAlwaysShowEdges(e) {
    this.alwaysShowEdges !== e && (this.alwaysShowEdges = e, this.updateAlwaysShowEdgesButton(), this.renderWithoutFit());
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
  setLightingEnabled(e, t = !0) {
    const n = this.lightingEnabled;
    this.setLighting(e), t && this.onLightingChange && this.lightingEnabled !== n && this.onLightingChange(this.lightingEnabled);
  }
  /**
   * Set callback for always show edges state changes
   */
  setAlwaysShowEdgesChangeCallback(e) {
    this.onAlwaysShowEdgesChange = e;
  }
  /**
   * Set callback for lighting state changes
   */
  setLightingChangeCallback(e) {
    this.onLightingChange = e;
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
  setTileServerIndex(e) {
    if (this.customTileUrls.length === 0)
      return;
    const t = this.customTileUrls.length, n = (e % t + t) % t;
    this.currentCustomTileIndex !== n && (this.currentCustomTileIndex = n, this.map && this.Leaflet && (this.setupBaseTileLayer(), this.updateTileTypeButton()));
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
    const e = this.timeISO || (/* @__PURE__ */ new Date()).toISOString(), s = this.calculateTerminatorBoundary(e, 720, 2);
    if (!s || s.length === 0)
      return;
    const o = this.unwrapLongitudes(s);
    let d = o.map((u) => [u.lat, u.lng]);
    d.length > 0 && (d[0][0] !== d[d.length - 1][0] || d[0][1] !== d[d.length - 1][1]) && d.push([d[0][0], d[0][1]]);
    const l = d.map(([u, p]) => ({ lat: u, lng: p }));
    this.isCounterClockwise(l) && d.reverse();
    const h = d.map(([u, p]) => ({ lat: u, lng: p }));
    if (this.isCounterClockwise(h)) {
      d.reverse();
      const u = d.map(([p, y]) => ({ lat: p, lng: y }));
      this.isCounterClockwise(u);
    }
    const f = o.map((u) => [u.lat, u.lng]);
    f.length > 0 && (f[0][0] !== f[f.length - 1][0] || f[0][1] !== f[f.length - 1][1]) && f.push([f[0][0], f[0][1]]);
    const r = this.Leaflet.polygon(f, {
      fillColor: "#000000",
      fillOpacity: 0.3,
      color: "#000000",
      weight: 0,
      interactive: !1
    });
    if (r.addTo(this.map), this.nightShadeLayer = r, this.map2dOptions?.debugNightShading) {
      const u = this.Leaflet.polyline(d, {
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
  isCounterClockwise(e) {
    if (e.length < 3) return !1;
    let t = 0;
    for (let n = 0; n < e.length - 1; n++) {
      const s = e[n], o = e[n + 1];
      t += (o.lng - s.lng) * (o.lat + s.lat);
    }
    return t > 0;
  }
  /**
   * Unwrap longitudes to ensure continuity across antimeridian
   * Adjusts adjacent points by +/-360 degrees if they jump by more than 180 degrees
   * @param points Array of {lat, lng} points
   * @returns Unwrapped points with continuous longitudes
   */
  unwrapLongitudes(e) {
    if (e.length === 0) return e;
    const t = [{ ...e[0] }];
    for (let n = 1; n < e.length; n++) {
      let { lat: s, lng: o } = e[n];
      const d = t[n - 1].lng;
      for (; o - d > 180; )
        o -= 360;
      for (; o - d < -180; )
        o += 360;
      t.push({ lat: s, lng: o });
    }
    return t;
  }
  /**
   * Calculate Julian Date from a Date object
   * Supports negative years (BC dates)
   * Based on Leaflet.Terminator implementation
   */
  julian(e) {
    return e.getTime() / 864e5 + 24405875e-1;
  }
  /**
   * Calculate Greenwich Mean Sidereal Time
   * Based on Leaflet.Terminator implementation
   * Reference: http://aa.usno.navy.mil/faq/docs/GAST.php
   */
  GMST(e) {
    return (18.697374558 + 24.06570982441908 * (e - 2451545)) % 24;
  }
  /**
   * Compute the position of the Sun in ecliptic coordinates
   * Based on Leaflet.Terminator implementation
   * Reference: http://en.wikipedia.org/wiki/Position_of_the_Sun
   */
  sunEclipticPosition(e) {
    const t = e - 2451545;
    let n = 280.46 + 0.9856474 * t;
    n = (n % 360 + 360) % 360;
    let s = 357.528 + 0.9856003 * t;
    s = (s % 360 + 360) % 360;
    const o = Math.PI / 180, d = n + 1.915 * Math.sin(s * o) + 0.02 * Math.sin(2 * s * o), l = 1.00014 - 0.01671 * Math.cos(s * o) - 14e-4 * Math.cos(2 * s * o);
    return { lambda: d, R: l };
  }
  /**
   * Calculate ecliptic obliquity
   * Based on Leaflet.Terminator implementation
   * Reference: http://en.wikipedia.org/wiki/Axial_tilt#Obliquity_of_the_ecliptic_.28Earth.27s_axial_tilt.29
   */
  eclipticObliquity(e) {
    const n = (e - 2451545) / 36525;
    return 23.43929111 - n * (46.836769 / 3600 - n * (1831e-7 / 3600 + n * (20034e-7 / 3600 - n * (576e-9 / 3600 - n * 434e-10 / 3600))));
  }
  /**
   * Compute the Sun's equatorial position from its ecliptic position
   * Based on Leaflet.Terminator implementation
   */
  sunEquatorialPosition(e, t) {
    const n = Math.PI / 180, s = 180 / Math.PI, o = Math.atan(Math.cos(t * n) * Math.tan(e * n)) * s, d = Math.asin(Math.sin(t * n) * Math.sin(e * n)) * s, l = Math.floor(e / 90) * 90, a = Math.floor(o / 90) * 90;
    return { alpha: o + (l - a), delta: d };
  }
  /**
   * Compute the hour angle of the sun for a longitude on Earth
   * Based on Leaflet.Terminator implementation
   */
  hourAngle(e, t, n) {
    return (n + e / 15) * 15 - t.alpha;
  }
  /**
   * For a given hour angle and sun position, compute the latitude of the terminator
   * Based on Leaflet.Terminator implementation
   */
  terminatorLatitude(e, t) {
    const n = Math.PI / 180, s = 180 / Math.PI;
    return Math.atan(-Math.cos(e * n) / Math.tan(t.delta * n)) * s;
  }
  /**
   * Calculate terminator boundary using Leaflet.Terminator's algorithm
   * @param timeISO ISO 8601 time string
   * @param longitudeRange Longitude range (default: 720 degrees, -360 to +360)
   * @param resolution Resolution (points per degree, default: 2)
   * @returns Array of {lat, lng} points forming the terminator boundary
   */
  calculateTerminatorBoundary(e, t = 720, n = 2) {
    try {
      let s;
      if (e.startsWith("-")) {
        if (s = new Date(e), isNaN(s.getTime()))
          return null;
      } else if (s = new Date(e), isNaN(s.getTime()))
        return null;
      const o = this.julian(s), d = this.GMST(o), l = this.sunEclipticPosition(o), a = this.eclipticObliquity(o), h = this.sunEquatorialPosition(l.lambda, a), c = [];
      for (let f = 0; f <= t * n; f++) {
        const r = -t / 2 + f / n, u = this.hourAngle(r, h, d), p = this.terminatorLatitude(u, h);
        c.push({ lat: p, lng: r });
      }
      return h.delta < 0 ? (c.unshift({ lat: 90, lng: -t / 2 }), c.push({ lat: 90, lng: t / 2 })) : (c.unshift({ lat: -90, lng: -t / 2 }), c.push({ lat: -90, lng: t / 2 })), c.length > 0 ? c : null;
    } catch {
      return null;
    }
  }
  /**
   * Calculate day of year
   * @param date Date
   * @returns Day of year (1-365/366)
   */
  getDayOfYear(e) {
    const t = new Date(e.getFullYear(), 0, 0), n = e.getTime() - t.getTime(), s = 1e3 * 60 * 60 * 24;
    return Math.floor(n / s);
  }
  /**
   * Calculate solar declination (simplified version)
   * @param dayOfYear Day of year (1-365/366)
   * @returns Declination in degrees
   */
  calculateSolarDeclination(e) {
    return 23.45 * Math.PI / 180 * Math.sin(2 * Math.PI * (284 + e) / 365) * 180 / Math.PI;
  }
  /**
   * Setup click handler
   */
  setupClickHandler() {
    !this.map || !this.Leaflet || this.map.on("click", (e) => {
    });
  }
  /**
   * Set data
   */
  setData(e, t) {
    this.nodes = e, this.edges = t, this.map && this.Leaflet && this.render();
  }
  /**
   * Select node (highlight), toggle to fit if same node selected again
   */
  selectNode(e) {
    if (!e) {
      this.selectedNodeId = null, this.lastSelectedNodeId = null, this.renderWithoutFit();
      return;
    }
    if (!this.map || !this.Leaflet) return;
    if (e === this.lastSelectedNodeId) {
      this.lastSelectedNodeId = null, this.fitToNodes();
      return;
    }
    this.lastSelectedNodeId = e, this.selectedNodeId = e;
    const t = this.nodes.find((s) => s.id === e);
    if (!t) return;
    if (t.coordinates && t.coordinates.length === 2) {
      const [s, o] = t.coordinates;
      if (Number.isFinite(s) && Number.isFinite(o)) {
        const [d, l] = t.coordinates;
        this.renderWithoutFit(), this.map.flyTo([d, l], 4, {
          duration: 1,
          easeLinearity: 0.25
          // Easing linearity (0.25 is recommended)
        });
        const a = () => {
          const h = this.markers.get(e);
          h && h.openPopup(), this.map.off("moveend", a);
        };
        this.map.once("moveend", a);
        return;
      }
    }
    const n = this.nodes.filter((s) => {
      if (!s.coordinates || !Array.isArray(s.coordinates) || s.coordinates.length !== 2) return !0;
      const [o, d] = s.coordinates;
      return !Number.isFinite(o) || !Number.isFinite(d);
    });
    if (n.length > 0) {
      const a = Math.ceil(Math.sqrt(n.length)), c = 50 / (Math.ceil(n.length / a) + 1), f = 32 / (a + 1), r = n.findIndex((u) => u.id === e);
      if (r >= 0) {
        const u = Math.floor(r / a), p = r % a, y = -50 + (u + 1) * c, g = -32 + (p + 1) * f;
        this.renderWithoutFit(), this.map.flyTo([y, g], 4, {
          duration: 1,
          // 1 second animation
          easeLinearity: 0.25
        });
        const m = () => {
          const w = this.markers.get(e);
          w && w.openPopup(), this.map.off("moveend", m);
        };
        this.map.once("moveend", m);
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
    this.markers.forEach((o) => {
      this.map.removeLayer(o);
    }), this.markers.clear(), Array.from(this.polylines.keys()).forEach((o) => {
      const d = this.polylines.get(o);
      if (d && this.map)
        try {
          this.map.hasLayer(d) && this.map.removeLayer(d);
        } catch {
        }
      this.polylines.delete(o);
    }), this.polylines.clear();
    const t = this.nodes.filter((o) => {
      if (!o.coordinates || !Array.isArray(o.coordinates) || o.coordinates.length !== 2) return !0;
      const [d, l] = o.coordinates;
      return !Number.isFinite(d) || !Number.isFinite(l);
    }), n = this.nodes.filter((o) => {
      if (!o.coordinates || !Array.isArray(o.coordinates) || o.coordinates.length !== 2) return !1;
      const [d, l] = o.coordinates;
      return Number.isFinite(d) && Number.isFinite(l);
    }), s = /* @__PURE__ */ new Map();
    if (t.length > 0) {
      const h = this.Leaflet.latLngBounds(
        [-50, -32],
        [0, 0]
      );
      this.rectLayer = this.Leaflet.rectangle(h, {
        color: "#666",
        fillColor: "#f0f0f0",
        fillOpacity: 0.1,
        weight: 1,
        dashArray: "5,5"
      }), this.rectLayer.addTo(this.map);
      const c = Math.ceil(Math.sqrt(t.length)), r = 50 / (Math.ceil(t.length / c) + 1), u = 32 / (c + 1);
      t.forEach((p, y) => {
        const g = Math.floor(y / c), m = y % c, w = -50 + (g + 1) * r, b = -32 + (m + 1) * u;
        s.set(p.id, [w, b]);
        const _ = this.selectedNodeId === p.id, A = p.style?.color || "#ffffff", T = _ ? "#2196f3" : p.style?.borderColor || "#333333", x = `
          <div style="
            width: ${_ ? 15 : 10}px;
            height: ${_ ? 15 : 10}px;
            background-color: ${A};
            border: 2px solid ${T};
            border-radius: 50%;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          "></div>
        `, S = this.Leaflet.divIcon({
          html: x,
          className: "relatos-node-marker",
          iconSize: [_ ? 15 : 10, _ ? 15 : 10],
          iconAnchor: [_ ? 7.5 : 5, _ ? 7.5 : 5]
        }), C = this.Leaflet.marker([w, b], { icon: S });
        C.bindPopup(p.label, {
          closeButton: !1,
          offset: [0, -10]
        }), C.on("click", (v) => {
          if (this.onNodeClick) {
            const E = v.latlng;
            this.onNodeClick({
              node: p,
              position: { x: E.lng, y: E.lat },
              originalEvent: v.originalEvent
            });
          }
        }), C.addTo(this.map), this.markers.set(p.id, C);
      });
    }
    for (const o of n) {
      const [d, l] = o.coordinates;
      s.set(o.id, [d, l]);
      const a = this.selectedNodeId === o.id, h = o.style?.color || "#ffffff", c = a ? "#2196f3" : o.style?.borderColor || "#333333", f = `
        <div style="
          width: ${a ? 15 : 10}px;
          height: ${a ? 15 : 10}px;
          background-color: ${h};
          border: 2px solid ${c};
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        "></div>
      `, r = this.Leaflet.divIcon({
        html: f,
        className: "relatos-node-marker",
        iconSize: [a ? 15 : 10, a ? 15 : 10],
        iconAnchor: [a ? 7.5 : 5, a ? 7.5 : 5]
      }), u = this.Leaflet.marker([d, l], { icon: r });
      u.bindPopup(o.label, {
        closeButton: !1,
        offset: [0, -10]
      }), u.on("click", (p) => {
        if (this.onNodeClick) {
          const y = p.latlng;
          this.onNodeClick({
            node: o,
            position: { x: y.lng, y: y.lat },
            originalEvent: p.originalEvent,
            view: "map2d"
          });
        }
      }), u.addTo(this.map), this.markers.set(o.id, u);
    }
    if (this.alwaysShowEdges)
      for (const o of this.edges) {
        const d = s.get(o.src), l = s.get(o.dst);
        if (!d || !l)
          continue;
        const [a, h] = d, [c, f] = l, r = o.style?.color || "#999999", u = o.style?.weight || 1, p = Math.max(1, Math.min(5, u)), y = this.Leaflet.polyline(
          [[a, h], [c, f]],
          {
            color: r,
            weight: p,
            opacity: 0.7
          }
        );
        y.on("click", (m) => {
          if (this.onEdgeClick) {
            const w = m.latlng;
            this.onEdgeClick({
              edge: o,
              position: { x: w.lng, y: w.lat },
              originalEvent: m.originalEvent,
              view: "map2d"
            });
          }
        });
        const g = this.polylines.get(o.id);
        if (g && this.map)
          try {
            this.map.hasLayer(g) && this.map.removeLayer(g);
          } catch {
          }
        y.addTo(this.map), this.polylines.set(o.id, y);
      }
    this.fitToNodes();
  }
  /**
   * Render nodes and edges (without fit action)
   */
  renderWithoutFit() {
    if (!this.map || !this.Leaflet)
      return;
    this.markers.forEach((o) => {
      this.map.removeLayer(o);
    }), this.markers.clear(), Array.from(this.polylines.keys()).forEach((o) => {
      const d = this.polylines.get(o);
      if (d && this.map)
        try {
          this.map.hasLayer(d) && this.map.removeLayer(d);
        } catch {
        }
      this.polylines.delete(o);
    }), this.polylines.clear(), this.rectLayer && (this.map.removeLayer(this.rectLayer), this.rectLayer = null);
    const t = this.nodes.filter((o) => {
      if (!o.coordinates || !Array.isArray(o.coordinates) || o.coordinates.length !== 2) return !0;
      const [d, l] = o.coordinates;
      return !Number.isFinite(d) || !Number.isFinite(l);
    }), n = this.nodes.filter((o) => {
      if (!o.coordinates || !Array.isArray(o.coordinates) || o.coordinates.length !== 2) return !1;
      const [d, l] = o.coordinates;
      return Number.isFinite(d) && Number.isFinite(l);
    }), s = /* @__PURE__ */ new Map();
    if (t.length > 0) {
      const h = this.Leaflet.latLngBounds(
        [-50, -32],
        [0, 0]
      );
      this.rectLayer = this.Leaflet.rectangle(h, {
        color: "#666",
        fillColor: "#f0f0f0",
        fillOpacity: 0.1,
        weight: 1,
        dashArray: "5,5"
      }), this.rectLayer.addTo(this.map);
      const c = Math.ceil(Math.sqrt(t.length)), r = 50 / (Math.ceil(t.length / c) + 1), u = 32 / (c + 1);
      t.forEach((p, y) => {
        const g = Math.floor(y / c), m = y % c, w = -50 + (g + 1) * r, b = -32 + (m + 1) * u;
        s.set(p.id, [w, b]);
        const _ = this.selectedNodeId === p.id, A = p.style?.color || "#ffffff", T = _ ? "#2196f3" : p.style?.borderColor || "#333333", x = `
          <div style="
            width: ${_ ? 15 : 10}px;
            height: ${_ ? 15 : 10}px;
            background-color: ${A};
            border: 2px solid ${T};
            border-radius: 50%;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          "></div>
        `, S = this.Leaflet.divIcon({
          html: x,
          className: "relatos-node-marker",
          iconSize: [_ ? 15 : 10, _ ? 15 : 10],
          iconAnchor: [_ ? 7.5 : 5, _ ? 7.5 : 5]
        }), C = this.Leaflet.marker([w, b], { icon: S });
        C.bindPopup(p.label, {
          closeButton: !1,
          offset: [0, -10]
        }), C.on("click", (v) => {
          if (this.onNodeClick) {
            const E = v.latlng;
            this.onNodeClick({
              node: p,
              position: { x: E.lng, y: E.lat },
              originalEvent: v.originalEvent,
              view: "map2d"
            });
          }
        }), C.addTo(this.map), this.markers.set(p.id, C);
      });
    }
    for (const o of n) {
      const [d, l] = o.coordinates;
      s.set(o.id, [d, l]);
      const a = this.selectedNodeId === o.id, h = o.style?.color || "#ffffff", c = a ? "#2196f3" : o.style?.borderColor || "#333333", f = `
        <div style="
          width: ${a ? 15 : 10}px;
          height: ${a ? 15 : 10}px;
          background-color: ${h};
          border: 2px solid ${c};
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        "></div>
      `, r = this.Leaflet.divIcon({
        html: f,
        className: "relatos-node-marker",
        iconSize: [a ? 15 : 10, a ? 15 : 10],
        iconAnchor: [a ? 7.5 : 5, a ? 7.5 : 5]
      }), u = this.Leaflet.marker([d, l], { icon: r });
      u.bindPopup(o.label, {
        closeButton: !1,
        offset: [0, -10]
      }), u.on("click", (p) => {
        if (this.onNodeClick) {
          const y = p.latlng;
          this.onNodeClick({
            node: o,
            position: { x: y.lng, y: y.lat },
            originalEvent: p.originalEvent
          });
        }
      }), u.addTo(this.map), this.markers.set(o.id, u);
    }
    if (this.alwaysShowEdges)
      for (const o of this.edges) {
        const d = s.get(o.src), l = s.get(o.dst);
        if (!d || !l)
          continue;
        const [a, h] = d, [c, f] = l, r = o.style?.color || "#999999", u = o.style?.weight || 1, p = Math.max(1, Math.min(5, u)), y = this.Leaflet.polyline(
          [[a, h], [c, f]],
          {
            color: r,
            weight: p,
            opacity: 0.7
          }
        );
        y.on("click", (m) => {
          if (this.onEdgeClick) {
            const w = m.latlng;
            this.onEdgeClick({
              edge: o,
              position: { x: w.lng, y: w.lat },
              originalEvent: m.originalEvent,
              view: "map2d"
            });
          }
        });
        const g = this.polylines.get(o.id);
        if (g && this.map)
          try {
            this.map.hasLayer(g) && this.map.removeLayer(g);
          } catch {
          }
        y.addTo(this.map), this.polylines.set(o.id, y);
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
        const e = this.currentCustomTileIndex + 1, t = this.customTileUrls.length;
        this.tileTypeButton.setAttribute("title", `Custom tile ${e}/${t}`), this.tileTypeButton.style.backgroundColor = "#fff", this.tileTypeButton.style.borderColor = "#ccc", this.tileTypeButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.tileTypeButton.style.transform = "translateY(0)";
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
  getMoonIllumination(e) {
    const n = this.julian(e) - 2451545, s = (357.5291 + 0.98560028 * n) * Math.PI / 180, o = (1.9148 * Math.sin(s) + 0.02 * Math.sin(2 * s) + 3e-4 * Math.sin(3 * s)) * Math.PI / 180, d = 102.9372 * Math.PI / 180, l = s + o + d + Math.PI, a = 23.4397 * Math.PI / 180, h = Math.atan2(
      Math.sin(l) * Math.cos(a) - Math.tan(0) * Math.sin(a),
      Math.cos(l)
    ), c = Math.asin(
      Math.sin(0) * Math.cos(a) + Math.cos(0) * Math.sin(a) * Math.sin(l)
    ), f = (218.316 + 13.176396 * n) * Math.PI / 180, r = (134.963 + 13.064993 * n) * Math.PI / 180, u = (93.272 + 13.22935 * n) * Math.PI / 180, p = f + 6.289 * Math.sin(r) * Math.PI / 180, y = 5.128 * Math.sin(u) * Math.PI / 180, g = Math.atan2(
      Math.sin(p) * Math.cos(a) - Math.tan(y) * Math.sin(a),
      Math.cos(p)
    ), m = Math.asin(
      Math.sin(y) * Math.cos(a) + Math.cos(y) * Math.sin(a) * Math.sin(p)
    ), w = 385001 - 20905 * Math.cos(r), b = 149598e3, _ = Math.acos(
      Math.sin(c) * Math.sin(m) + Math.cos(c) * Math.cos(m) * Math.cos(h - g)
    ), A = Math.atan2(
      b * Math.sin(_),
      w - b * Math.cos(_)
    ), T = Math.atan2(
      Math.cos(c) * Math.sin(h - g),
      Math.sin(c) * Math.cos(m) - Math.cos(c) * Math.sin(m) * Math.cos(h - g)
    );
    return {
      fraction: (1 + Math.cos(A)) / 2,
      phase: 0.5 + 0.5 * A * (T < 0 ? -1 : 1) / Math.PI,
      angle: T
    };
  }
  getMoonPhase(e) {
    const n = this.getMoonIllumination(e).phase;
    return Math.floor(n * 8) % 8;
  }
  /**
   * Get moon phase emoji or SVG
   */
  getMoonPhaseIcon(e, t = 16) {
    const s = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"][e] || "🌑";
    return `<span style="font-size: ${t}px; line-height: 1;">${s}</span>`;
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
  calculateMoonPosition(e, t, n) {
    try {
      const s = this.julian(e), o = s - 2451545, d = (218.316 + 13.176396 * o) * Math.PI / 180, l = (134.963 + 13.064993 * o) * Math.PI / 180, a = (93.272 + 13.22935 * o) * Math.PI / 180, h = d + 6.289 * Math.sin(l) * Math.PI / 180, c = 5.128 * Math.sin(a) * Math.PI / 180, f = 23.4397 * Math.PI / 180, r = Math.atan2(
        Math.sin(h) * Math.cos(f) - Math.tan(c) * Math.sin(f),
        Math.cos(h)
      ), u = Math.asin(
        Math.sin(c) * Math.cos(f) + Math.cos(c) * Math.sin(f) * Math.sin(h)
      ), y = this.GMST(s) * Math.PI / 12, g = u;
      let m = r - y;
      const w = g * 180 / Math.PI;
      let b = m * 180 / Math.PI;
      return b = b % 360, b > 180 ? b -= 360 : b < -180 && (b += 360), [w, b];
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
    const e = this.timeISO ? new Date(this.timeISO) : /* @__PURE__ */ new Date();
    let t = this.calculateMoonPosition(e, 0, 0);
    if (!t)
      return;
    const n = this.getMoonPhase(e), s = this.getMoonPhaseIcon(n, 24), o = this.Leaflet.divIcon({
      html: s,
      className: "relatos-moon-marker",
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    });
    this.moonMarker = this.Leaflet.marker([t[0], t[1]], { icon: o }), this.moonMarker.addTo(this.map);
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
    const e = this.isLightingEnabled();
    this.lightingToggleButton.innerHTML = Ta("icon-sun", 16), e ? (this.lightingToggleButton.style.backgroundColor = "#fff9c4", this.lightingToggleButton.style.boxShadow = "inset 0 2px 4px rgba(0, 0, 0, 0.2)", this.lightingToggleButton.style.transform = "translateY(1px)") : (this.lightingToggleButton.style.backgroundColor = "#fff", this.lightingToggleButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.lightingToggleButton.style.transform = "translateY(0)"), this.lightingToggleButton.style.color = "#333";
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
    const e = this.nodes.filter((c) => {
      if (!c.coordinates || !Array.isArray(c.coordinates) || c.coordinates.length !== 2) return !1;
      const [f, r] = c.coordinates;
      return Number.isFinite(f) && Number.isFinite(r);
    }), t = this.nodes.filter((c) => {
      if (!c.coordinates || !Array.isArray(c.coordinates) || c.coordinates.length !== 2) return !0;
      const [f, r] = c.coordinates;
      return !Number.isFinite(f) || !Number.isFinite(r);
    }), n = [], s = [];
    if (e.forEach((c) => {
      if (c.coordinates && c.coordinates.length === 2) {
        const [f, r] = c.coordinates;
        Number.isFinite(f) && Number.isFinite(r) && (n.push(f), s.push(r));
      }
    }), t.length > 0) {
      const p = Math.ceil(Math.sqrt(t.length)), g = 50 / (Math.ceil(t.length / p) + 1), m = 32 / (p + 1);
      t.forEach((w, b) => {
        const _ = Math.floor(b / p), A = b % p, T = -50 + (_ + 1) * g, x = -32 + (A + 1) * m;
        n.push(T), s.push(x);
      });
    }
    if (n.length === 0)
      return;
    const o = Math.min(...n), d = Math.max(...n), l = Math.min(...s), a = Math.max(...s), h = this.Leaflet.latLngBounds(
      [o, l],
      [d, a]
    );
    this.map.flyToBounds(h, {
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
const Sa = 120, Ba = 60, ka = 30, Ia = 50, La = 25;
function ee(i) {
  const e = i.style || {};
  return {
    width: e.width ?? Sa,
    height: e.height ?? Ba
  };
}
function nn(i, e) {
  if (!i.position || !e.position)
    return { side: "right", t: 0.5 };
  const { width: t, height: n } = ee(i), s = e.position.x - i.position.x, o = e.position.y - i.position.y, d = Math.atan2(o, s), l = d < 0 ? d + 2 * Math.PI : d;
  let a, h;
  return l >= 7 * Math.PI / 4 || l < Math.PI / 4 ? (a = "right", h = 0.5 + o / n * 0.5) : l >= Math.PI / 4 && l < 3 * Math.PI / 4 ? (a = "bottom", h = 0.5 + s / t * 0.5) : l >= 3 * Math.PI / 4 && l < 5 * Math.PI / 4 ? (a = "left", h = 0.5 - o / n * 0.5) : (a = "top", h = 0.5 - s / t * 0.5), h = Math.max(0, Math.min(1, h)), { side: a, t: h };
}
function sn(i, e, t, n) {
  if (!i.position)
    return { x: 0, y: 0 };
  const s = i.position.x, o = i.position.y;
  let d, l;
  switch (e.side) {
    case "top":
      d = s - t / 2 + t * e.t, l = o - n / 2;
      break;
    case "right":
      d = s + t / 2, l = o - n / 2 + n * e.t;
      break;
    case "bottom":
      d = s - t / 2 + t * e.t, l = o + n / 2;
      break;
    case "left":
      d = s - t / 2, l = o - n / 2 + n * e.t;
      break;
    default:
      d = s, l = o;
  }
  return { x: d, y: l };
}
function Ma(i, e) {
  const t = e.find((f) => f.id === i.src), n = e.find((f) => f.id === i.dst);
  if (!t?.position || !n?.position)
    return [];
  const s = i.srcAnchor ?? nn(t, n), o = i.dstAnchor ?? nn(n, t), d = ee(t), l = ee(n), a = sn(t, s, d.width, d.height), h = sn(n, o, l.width, l.height), c = [a];
  return i.bends?.length && c.push(...i.bends), c.push(h), c;
}
function Na(i, e, t, n) {
  const s = t.some((u) => u.parentId === i.id), o = /* @__PURE__ */ new Set();
  if (s) {
    const u = t.filter((y) => y.parentId === i.id), p = (y) => {
      y.nodeIds.forEach((g) => o.add(g)), t.filter((g) => g.parentId === y.id).forEach(p);
    };
    u.forEach(p);
  }
  let d = 1 / 0, l = -1 / 0, a = 1 / 0, h = -1 / 0, c = !1;
  for (const u of i.nodeIds) {
    if (s && o.has(u)) continue;
    const p = e.find((b) => b.id === u);
    if (!p?.position) continue;
    c = !0;
    const { width: y, height: g } = ee(p), m = p.position.x - y / 2, w = p.position.y - g / 2;
    d = Math.min(d, m), l = Math.max(l, m + y), a = Math.min(a, w), h = Math.max(h, w + g);
  }
  if (s) {
    const u = t.filter((p) => p.parentId === i.id);
    for (const p of u) {
      const y = n(p);
      y && (c = !0, d = Math.min(d, y.position.x), l = Math.max(l, y.position.x + y.size.width), a = Math.min(a, y.position.y), h = Math.max(h, y.position.y + y.size.height));
    }
  }
  if (!c) return null;
  const f = s ? Ia : ka, r = f + La;
  return {
    minX: d - f,
    maxX: l + f,
    minY: a - r,
    maxY: h + f
  };
}
function Fn(i, e, t, n) {
  if (i.layout)
    return i.layout;
  const s = Na(
    i,
    e,
    t,
    (o) => Fn(o, e, t)
  );
  return s ? {
    position: { x: s.minX, y: s.minY },
    size: {
      width: s.maxX - s.minX,
      height: s.maxY - s.minY
    }
  } : null;
}
function Da(i, e, t = []) {
  const n = i, s = e, o = [];
  let d = 1 / 0, l = -1 / 0, a = 1 / 0, h = -1 / 0;
  for (const p of n) {
    if (!p.position) continue;
    const { width: y, height: g } = ee(p), m = p.position.x - y / 2, w = p.position.y - g / 2, b = p.style || {};
    o.push({
      id: p.id,
      label: p.label,
      left: m,
      top: w,
      width: y,
      height: g,
      fillColor: b.color,
      strokeColor: b.borderColor
    }), d = Math.min(d, m), l = Math.max(l, m + y), a = Math.min(a, w), h = Math.max(h, w + g);
  }
  const c = (p) => Fn(p, n, t), f = [];
  for (const p of t) {
    const y = c(p);
    if (!y) continue;
    const g = p.style;
    f.push({
      id: p.id,
      label: p.label,
      left: y.position.x,
      top: y.position.y,
      width: y.size.width,
      height: y.size.height,
      nodeIds: [...p.nodeIds],
      childGroupIds: t.filter((m) => m.parentId === p.id).map((m) => m.id) || void 0,
      fillColor: g?.color,
      strokeColor: g?.borderColor,
      strokeWidth: g?.borderWidth,
      strokeDash: g?.borderDash
    }), d = Math.min(d, y.position.x), l = Math.max(l, y.position.x + y.size.width), a = Math.min(a, y.position.y), h = Math.max(h, y.position.y + y.size.height);
  }
  const r = [];
  for (const p of s) {
    const y = Ma(p, n);
    if (y.length < 2) continue;
    const g = p.style || {};
    r.push({
      id: p.id,
      srcId: p.src,
      dstId: p.dst,
      points: y,
      label: g.label ?? p.relType,
      srcLabel: g.srcLabel,
      dstLabel: g.dstLabel,
      color: g.color,
      weight: g.weight
    });
  }
  const u = o.length > 0 || f.length > 0 ? {
    left: d,
    top: a,
    width: l - d,
    height: h - a
  } : void 0;
  return {
    nodes: o,
    edges: r,
    groups: f,
    bounds: u
  };
}
function Oa(i, e = {}) {
  Rt();
  let t;
  if (typeof i == "string") {
    const r = document.querySelector(i);
    if (!r || !(r instanceof HTMLElement))
      throw new Error(`Container element not found: ${i}`);
    t = r;
  } else
    t = i;
  const n = e.enabledViews || ["graph", "map2d", "globe3d"], s = e.initialView || (n.includes("map2d") ? "map2d" : n[0]), o = e.graph?.mode || "view", d = e.graph?.editable || !1, l = e.tileServers, a = new Ca(t, n);
  e.time && a.setTime(e.time), typeof e.enableLighting == "boolean" && a.setLightingEnabled(e.enableLighting), e.tables && a.setTableOptions(e.tables), e.events?.onNodeClick && a.setOnNodeClickCallback(e.events.onNodeClick);
  const h = e.events?.onNodeClick ? (r) => {
    e.events.onNodeClick(r), a.highlightNodeRow(r.node.id);
  } : void 0, c = (r) => {
    e.events?.onEdgeClick && e.events.onEdgeClick(r), a.highlightEdgeRow(r.edge.id);
  }, f = (r) => {
    e.events?.onGroupClick && e.events.onGroupClick(r), a.highlightGroupRow(r.group.id);
  };
  if (n.includes("graph")) {
    const r = document.createElement("div");
    r.style.width = "100%", r.style.height = "100%", a.getViewContainer().appendChild(r);
    const u = new ti(
      r,
      h || e.events?.onNodeClick,
      e.events?.onSave,
      d,
      c,
      f
    );
    if (u.setModeChangeCallback(() => {
      a.updateEditToggleButton(), a.updateGraphButtons();
    }), u.setAlwaysShowEdgesChangeCallback((p) => {
      a.setAlwaysShowEdges(p);
    }), u.setGraphButtonsUpdateCallback(() => {
      a.updateGraphButtons();
    }), u.setMode(o), e.data) {
      const p = "groups" in e.data && Array.isArray(e.data.groups) ? e.data.groups : void 0;
      u.setData(e.data.nodes, e.data.edges, p);
    }
    a.registerView("graph", u);
  }
  if (n.includes("map2d") && e.loaders?.leaflet) {
    const r = document.createElement("div");
    r.style.width = "100%", r.style.height = "100%", a.getViewContainer().appendChild(r);
    const u = new Aa(
      r,
      h || e.events?.onNodeClick,
      e.loaders.leaflet,
      l,
      e.map2d,
      c
    );
    u.setAlwaysShowEdgesChangeCallback((p) => {
      a.setAlwaysShowEdges(p);
    }), u.setLightingChangeCallback((p) => {
      a.setLightingEnabled(p);
    }), e.data && u.setData(e.data.nodes, e.data.edges), a.registerView("map2d", u);
  }
  if (n.includes("globe3d") && e.loaders?.cesium)
    try {
      const r = document.createElement("div");
      r.style.width = "100%", r.style.height = "100%", a.getViewContainer().appendChild(r);
      const u = new va(
        r,
        h || e.events?.onNodeClick,
        e.loaders.cesium,
        e.globe3d ? {
          customTileUrl: e.globe3d.customTileUrl,
          customTileUrls: e.globe3d.customTileUrls
        } : void 0,
        l,
        c
      );
      u.setAlwaysShowEdgesChangeCallback((p) => {
        a.setAlwaysShowEdges(p);
      }), u.setLightingChangeCallback((p) => {
        a.setLightingEnabled(p);
      }), e.data && u.setData(e.data.nodes, e.data.edges), a.registerView("globe3d", u);
    } catch {
    }
  if (a.setInitialView(s), e.data) {
    const r = "groups" in e.data && Array.isArray(e.data.groups) ? e.data.groups : void 0;
    a.setData(e.data.nodes, e.data.edges, r);
  }
  return {
    setData(r) {
      const u = a.getView("graph");
      u && u.setData(r.nodes, r.edges, r.groups);
      const p = a.getView("map2d");
      p && p.setData(r.nodes, r.edges);
      const y = a.getView("globe3d");
      y && y.setData(r.nodes, r.edges), a.setData(r.nodes, r.edges, r.groups);
    },
    setView(r) {
      a.switchView(r);
    },
    getView() {
      const r = a.getCurrentView();
      if (!r)
        throw new Error("No view is currently active");
      return r;
    },
    setMode(r) {
      const u = a.getView("graph");
      u && u.setMode(r);
    },
    getMode() {
      const r = a.getView("graph");
      return r ? r.getMode() : null;
    },
    resize() {
      a.resize();
    },
    destroy() {
      a.destroy();
    },
    selectNode(r) {
      const u = a.getView("graph");
      u && u.selectNode && u.selectNode(r);
      const p = a.getView("map2d");
      p && p.selectNode && p.selectNode(r);
      const y = a.getView("globe3d");
      y && y.selectNode && y.selectNode(r);
    },
    setTime(r) {
      a.setTime(r);
    },
    setLighting(r) {
      a.setLightingEnabled(r);
    },
    getData() {
      return a.getData();
    },
    exportToPlantUML(r) {
      const u = a.getData(), p = {
        useShortIds: !0,
        includeMetadata: !0,
        outputFormat: "plain",
        ...r
      };
      return Xn(u.nodes, u.edges, u.groups, p);
    },
    importFromPlantUML(r) {
      const u = da(r), p = a.getView("graph");
      p && p.setData(u.nodes, u.edges, u.groups);
      const y = a.getView("map2d");
      y && y.setData(u.nodes, u.edges);
      const g = a.getView("globe3d");
      g && g.setData(u.nodes, u.edges), a.setData(u.nodes, u.edges, u.groups);
    },
    importRelat(r, u) {
      const p = Ea(r, u), y = a.getView("graph");
      y && y.setData(p.nodes, p.edges, p.groups);
      const g = a.getView("map2d");
      g && g.setData(p.nodes, p.edges);
      const m = a.getView("globe3d");
      m && m.setData(p.nodes, p.edges), a.setData(p.nodes, p.edges, p.groups);
    },
    exportRelat(r) {
      const { nodes: u, edges: p, groups: y } = a.getData();
      return Qe(u, p, y, r);
    },
    setPlantUMLExportOptions(r) {
      a.setPlantUMLExportOptions(r);
    },
    getShapeDataForOffice() {
      const { nodes: r, edges: u, groups: p } = a.getData();
      return Da(r, u, p);
    },
    getViewAsSvg() {
      const r = a.getCurrentView();
      return r ? a.getView(r)?.getViewAsSvg?.() ?? null : null;
    },
    async exportViewToImage(r, u) {
      const p = a.getCurrentView();
      return p ? a.getView(p)?.exportViewToImage?.(r, u) ?? Promise.resolve(null) : null;
    }
  };
}
export {
  Oa as createRelatosViewer,
  Ra as decodeAndInflate,
  Wr as deflateAndEncode,
  Qe as exportRelat,
  Xn as exportToPlantUML,
  za as getPlantUMLServerUrl,
  Da as getShapeDataForOffice,
  da as importFromPlantUML,
  Ea as importRelat,
  ma as irToRelatosData,
  Pa as isDeflateEncoded,
  pa as parseRelat
};
