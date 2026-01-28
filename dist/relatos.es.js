const ct = `<!-- relatos/src/assets/icons/icons.svg -->
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

  <!-- =========================================
       Undo / Cancel edit / Restore previous state
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
let nt = !1;
const lt = "relatos-icons-sprite";
function J() {
  if (nt)
    return;
  if (document.getElementById(lt)) {
    nt = !0;
    return;
  }
  const N = document.createElement("div");
  N.id = lt, N.style.display = "none", N.innerHTML = ct, document.body.appendChild(N), nt = !0;
}
function q(N, t = 16) {
  return J(), `<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <use href="#${N}"></use>
  </svg>`;
}
class ut {
  constructor(t, e) {
    this.currentView = null, this.views = /* @__PURE__ */ new Map(), this.tabButtons = /* @__PURE__ */ new Map(), this.editToggleButton = null, this.alwaysShowEdgesButton = null, this.lightingToggleButton = null, this.tileTypeButton = null, this.moonToggleButton = null, this.fitCenterButton = null, this.deleteBendButton = null, this.cancelEditButton = null, this.tableContainer = null, this.nodesTableContainer = null, this.edgesTableContainer = null, this.groupsTableContainer = null, this.tableOptions = null, this.nodes = [], this.edges = [], this.groups = [], this.isExternalTableContainer = !1, this.hasEdges = !1, this.sharedAlwaysShowEdges = !1, this.sharedLightingEnabled = !1, this.sharedTime = null, this.sharedTileServerIndex = 0, this.container = t, this.enabledViews = e, J(), this.container.style.display = "flex", this.container.style.flexDirection = "column", this.container.style.width = "100%", this.tabContainer = document.createElement("div"), this.tabContainer.style.display = "flex", this.tabContainer.style.gap = "4px", this.tabContainer.style.padding = "8px", this.tabContainer.style.borderBottom = "none", this.tabContainer.style.backgroundColor = "transparent", this.tabContainer.style.position = "absolute", this.tabContainer.style.top = "0", this.tabContainer.style.left = "0", this.tabContainer.style.right = "0", this.tabContainer.style.zIndex = "1000", this.tabContainer.style.pointerEvents = "none", this.viewContainer = document.createElement("div"), this.viewContainer.style.flex = "1 1 0%", this.viewContainer.style.position = "relative", this.viewContainer.style.overflow = "hidden", this.viewContainer.style.minHeight = "0", this.createTabButtons(), this.createCommonControlsContainer(), this.container.appendChild(this.viewContainer), this.viewContainer.appendChild(this.tabContainer);
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
   * Update tables
   */
  updateTables() {
    !this.tableOptions || !this.tableContainer || (this.tableContainer.innerHTML = "", this.tableOptions.nodes?.format && (this.nodesTableContainer = this.createTable("nodes", this.tableOptions.nodes.header || "", this.tableOptions.nodes.format, this.nodes, "node"), this.tableContainer.appendChild(this.nodesTableContainer)), this.tableOptions.edges?.format && (this.edgesTableContainer = this.createTable("edges", this.tableOptions.edges.header || "", this.tableOptions.edges.format, this.edges, "edge"), this.tableContainer.appendChild(this.edgesTableContainer)), this.tableOptions.groups?.format && (this.groupsTableContainer = this.createTable("groups", this.tableOptions.groups.header || "", this.tableOptions.groups.format, this.groups, "group"), this.tableContainer.appendChild(this.groupsTableContainer)));
  }
  /**
   * Create table
   */
  createTable(t, e, s, i, o) {
    const l = document.createElement("div"), n = document.createElement("table");
    if (n.style.width = "100%", n.style.borderCollapse = "collapse", !document.getElementById("relatos-table-styles")) {
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
    n.className = "relatos-table";
    const r = document.createElement("thead");
    if (e)
      r.innerHTML = e;
    else {
      const c = document.createElement("tr");
      r.appendChild(c);
    }
    n.appendChild(r);
    const h = document.createElement("tbody");
    for (const c of i) {
      const u = document.createElement("tr");
      u.id = `${o}-${c.id}`, u.style.cursor = "pointer";
      let a = s;
      if ("info" in c && c.info)
        for (const [d, g] of Object.entries(c.info)) {
          const p = new RegExp(`\\{\\{info\\.${d}\\}\\}`, "g");
          a = a.replace(p, String(g || ""));
        }
      if (a = a.replace(/\{\{info\.[^}]+\}\}/g, ""), a = a.replace(/\{\{id\}\}/g, String(c.id || "")), a = a.replace(/\{\{label\}\}/g, String("label" in c && c.label || "")), a = a.replace(/\{\{type\}\}/g, String("type" in c && c.type || "")), "coordinates" in c && c.coordinates && (a = a.replace(/\{\{coordinates\.0\}\}/g, String(c.coordinates[0] || "")), a = a.replace(/\{\{coordinates\.1\}\}/g, String(c.coordinates[1] || "")), a = a.replace(/\{\{latitude\}\}/g, String(c.coordinates[0] || "")), a = a.replace(/\{\{longitude\}\}/g, String(c.coordinates[1] || ""))), c.style && typeof c.style == "object") {
        const d = c.style;
        a = a.replace(/\{\{style\.color\}\}/g, String(d.color ?? "")), a = a.replace(/\{\{style\.borderColor\}\}/g, String(d.borderColor ?? "")), a = a.replace(/\{\{style\.width\}\}/g, String(d.width ?? "")), a = a.replace(/\{\{style\.height\}\}/g, String(d.height ?? "")), a = a.replace(/\{\{style\.weight\}\}/g, String(d.weight ?? "")), a = a.replace(/\{\{style\.label\}\}/g, String(d.label ?? "")), a = a.replace(/\{\{style\.srcLabel\}\}/g, String(d.srcLabel ?? "")), a = a.replace(/\{\{style\.dstLabel\}\}/g, String(d.dstLabel ?? ""));
      }
      if ("src" in c && (a = a.replace(/\{\{src\}\}/g, String(c.src || "")), a = a.replace(/\{\{dst\}\}/g, String(c.dst || "")), a = a.replace(/\{\{relType\}\}/g, String(c.relType || ""))), "nodeIds" in c) {
        const d = c;
        if (a = a.replace(/\{\{nodeIds\}\}/g, String(d.nodeIds?.join(", ") || "")), a = a.replace(/\{\{nodeCount\}\}/g, String(d.nodeIds?.length || 0)), a = a.replace(/\{\{parentId\}\}/g, String(d.parentId || "")), d.meta && typeof d.meta == "object")
          for (const [g, p] of Object.entries(d.meta)) {
            const f = new RegExp(`\\{\\{meta\\.${g}\\}\\}`, "g");
            a = a.replace(f, String(p || ""));
          }
        d.layout && (a = a.replace(/\{\{layout\.position\.x\}\}/g, String(d.layout.position.x || "")), a = a.replace(/\{\{layout\.position\.y\}\}/g, String(d.layout.position.y || "")), a = a.replace(/\{\{layout\.size\.width\}\}/g, String(d.layout.size.width || "")), a = a.replace(/\{\{layout\.size\.height\}\}/g, String(d.layout.size.height || "")));
      }
      u.innerHTML = a, u.addEventListener("click", () => {
        if (o === "node") {
          if (this.highlightAndScrollToRow(u), !this.currentView)
            return;
          const d = this.views.get(this.currentView);
          d?.selectNode && d.selectNode(c.id);
        }
      }), h.appendChild(u);
    }
    return n.appendChild(h), l.appendChild(n), l;
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
      const o = this.tableContainer?.querySelector(`#node-${i}`);
      o && (o.classList.add("highlight"), s || (s = o), setTimeout(() => {
        o.classList.remove("highlight");
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
    this.commonControlsContainer = document.createElement("div"), this.commonControlsContainer.style.display = "flex", this.commonControlsContainer.style.gap = "4px", this.commonControlsContainer.style.marginLeft = "auto", this.commonControlsContainer.style.pointerEvents = "none", this.createCancelEditButton(), this.createEditToggleButton(), this.createAlwaysShowEdgesButton(), this.createDeleteBendButton(), this.createLightingToggleButton(), this.createTileTypeButton(), this.createMoonToggleButton(), this.createFitCenterButton(), this.tabContainer.appendChild(this.commonControlsContainer);
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
    this.alwaysShowEdgesButton = document.createElement("button"), this.alwaysShowEdgesButton.className = "relatos-always-show-edges-toggle", this.alwaysShowEdgesButton.innerHTML = q("icon-relations", 16), this.alwaysShowEdgesButton.setAttribute("aria-label", "Toggle edges"), this.alwaysShowEdgesButton.setAttribute("title", "Toggle edges"), this.alwaysShowEdgesButton.style.padding = "6px", this.alwaysShowEdgesButton.style.border = "1px solid #ccc", this.alwaysShowEdgesButton.style.borderRadius = "4px", this.alwaysShowEdgesButton.style.backgroundColor = "#fff", this.alwaysShowEdgesButton.style.cursor = "pointer", this.alwaysShowEdgesButton.style.fontSize = "16px", this.alwaysShowEdgesButton.style.width = "32px", this.alwaysShowEdgesButton.style.height = "32px", this.alwaysShowEdgesButton.style.display = "flex", this.alwaysShowEdgesButton.style.alignItems = "center", this.alwaysShowEdgesButton.style.justifyContent = "center", this.alwaysShowEdgesButton.style.pointerEvents = "auto", this.alwaysShowEdgesButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.alwaysShowEdgesButton.style.transition = "0.2s", this.alwaysShowEdgesButton.style.color = "#000000", this.alwaysShowEdgesButton.addEventListener("click", () => {
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
    this.lightingToggleButton = document.createElement("button"), this.lightingToggleButton.innerHTML = q("icon-sun", 16), this.lightingToggleButton.setAttribute("aria-label", "Toggle lighting"), this.lightingToggleButton.setAttribute("title", "Toggle lighting"), this.lightingToggleButton.style.padding = "6px", this.lightingToggleButton.style.border = "1px solid #ccc", this.lightingToggleButton.style.borderRadius = "4px", this.lightingToggleButton.style.backgroundColor = "#fff", this.lightingToggleButton.style.cursor = "pointer", this.lightingToggleButton.style.fontSize = "16px", this.lightingToggleButton.style.width = "32px", this.lightingToggleButton.style.height = "32px", this.lightingToggleButton.style.display = "none", this.lightingToggleButton.style.alignItems = "center", this.lightingToggleButton.style.justifyContent = "center", this.lightingToggleButton.style.pointerEvents = "auto", this.lightingToggleButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.lightingToggleButton.style.transition = "0.2s", this.lightingToggleButton.addEventListener("click", () => {
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
    this.tileTypeButton = document.createElement("button"), this.tileTypeButton.innerHTML = q("icon-map-tiles", 16), this.tileTypeButton.setAttribute("aria-label", "Switch tile type"), this.tileTypeButton.setAttribute("title", "Switch tile type"), this.tileTypeButton.style.padding = "6px", this.tileTypeButton.style.border = "1px solid #ccc", this.tileTypeButton.style.borderRadius = "4px", this.tileTypeButton.style.backgroundColor = "#fff", this.tileTypeButton.style.cursor = "pointer", this.tileTypeButton.style.fontSize = "16px", this.tileTypeButton.style.width = "32px", this.tileTypeButton.style.height = "32px", this.tileTypeButton.style.display = "none", this.tileTypeButton.style.alignItems = "center", this.tileTypeButton.style.justifyContent = "center", this.tileTypeButton.style.pointerEvents = "auto", this.tileTypeButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.tileTypeButton.style.transition = "0.2s", this.tileTypeButton.addEventListener("click", () => {
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
    const e = t.isMoonEnabled?.() || !1, s = t.getTime?.() || null, i = s ? new Date(s) : /* @__PURE__ */ new Date(), o = t.getMoonPhase?.(i) || 0, l = t.getMoonPhaseIcon?.(o, 16) || "🌑";
    this.moonToggleButton.innerHTML = l, e ? (this.moonToggleButton.style.backgroundColor = "#fff9c4", this.moonToggleButton.style.boxShadow = "inset 0 2px 4px rgba(0, 0, 0, 0.2)", this.moonToggleButton.style.transform = "translateY(1px)", this.moonToggleButton.setAttribute("title", "Hide moon")) : (this.moonToggleButton.style.backgroundColor = "#fff", this.moonToggleButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.moonToggleButton.style.transform = "translateY(0)", this.moonToggleButton.setAttribute("title", "Show moon"));
  }
  /**
   * Create fit center button (in common controls)
   */
  createFitCenterButton() {
    this.fitCenterButton = document.createElement("button"), this.fitCenterButton.innerHTML = q("icon-home", 16), this.fitCenterButton.setAttribute("aria-label", "Fit and center"), this.fitCenterButton.setAttribute("title", "Fit and center"), this.fitCenterButton.style.padding = "6px", this.fitCenterButton.style.border = "1px solid #ccc", this.fitCenterButton.style.borderRadius = "4px", this.fitCenterButton.style.backgroundColor = "#fff", this.fitCenterButton.style.cursor = "pointer", this.fitCenterButton.style.fontSize = "16px", this.fitCenterButton.style.width = "32px", this.fitCenterButton.style.height = "32px", this.fitCenterButton.style.display = "flex", this.fitCenterButton.style.alignItems = "center", this.fitCenterButton.style.justifyContent = "center", this.fitCenterButton.style.pointerEvents = "auto", this.fitCenterButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.fitCenterButton.style.transition = "0.2s", this.fitCenterButton.addEventListener("click", () => {
      if (!this.currentView)
        return;
      const t = this.views.get(this.currentView);
      t?.fitAndCenter && t.fitAndCenter();
    }), this.commonControlsContainer.appendChild(this.fitCenterButton);
  }
  /**
   * Create delete bend button (in common controls, Graph only)
   */
  createDeleteBendButton() {
    this.deleteBendButton = document.createElement("button"), this.deleteBendButton.innerHTML = q("icon-trash", 16), this.deleteBendButton.setAttribute("aria-label", "Delete bend point"), this.deleteBendButton.setAttribute("title", "Delete bend point"), this.deleteBendButton.style.padding = "6px", this.deleteBendButton.style.border = "1px solid #ccc", this.deleteBendButton.style.borderRadius = "4px", this.deleteBendButton.style.backgroundColor = "#fff", this.deleteBendButton.style.cursor = "pointer", this.deleteBendButton.style.fontSize = "16px", this.deleteBendButton.style.width = "32px", this.deleteBendButton.style.height = "32px", this.deleteBendButton.style.display = "none", this.deleteBendButton.style.alignItems = "center", this.deleteBendButton.style.justifyContent = "center", this.deleteBendButton.style.pointerEvents = "auto", this.deleteBendButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.deleteBendButton.style.transition = "0.2s", this.deleteBendButton.addEventListener("click", () => {
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
    this.cancelEditButton = document.createElement("button"), this.cancelEditButton.innerHTML = q("icon-undo", 16), this.cancelEditButton.setAttribute("aria-label", "Cancel edit"), this.cancelEditButton.setAttribute("title", "Cancel edit and restore previous state"), this.cancelEditButton.style.padding = "6px", this.cancelEditButton.style.border = "1px solid #ccc", this.cancelEditButton.style.borderRadius = "4px", this.cancelEditButton.style.backgroundColor = "#fff", this.cancelEditButton.style.cursor = "pointer", this.cancelEditButton.style.fontSize = "16px", this.cancelEditButton.style.width = "32px", this.cancelEditButton.style.height = "32px", this.cancelEditButton.style.display = "none", this.cancelEditButton.style.alignItems = "center", this.cancelEditButton.style.justifyContent = "center", this.cancelEditButton.style.pointerEvents = "auto", this.cancelEditButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.cancelEditButton.style.transition = "0.2s", this.cancelEditButton.addEventListener("click", () => {
      if (!this.currentView)
        return;
      const t = this.views.get(this.currentView);
      t?.cancelEdit && t.cancelEdit();
    }), this.commonControlsContainer.appendChild(this.cancelEditButton);
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
      i.innerHTML = q(t[s], 16), i.setAttribute("aria-label", e[s]), i.setAttribute("title", e[s]), i.style.padding = "8px 16px", i.style.border = "1px solid #ccc", i.style.borderRadius = "4px 4px 0 0", i.style.backgroundColor = "#fff", i.style.cursor = "pointer", i.style.fontSize = "14px", i.style.display = "flex", i.style.alignItems = "center", i.style.justifyContent = "center", i.style.color = "#000000", i.style.pointerEvents = "auto", i.style.visibility = "visible", i.style.opacity = "1", i.addEventListener("click", () => {
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
      const o = this.tabButtons.get(this.currentView);
      o && (o.style.backgroundColor = "#fff", o.style.fontWeight = "normal", o.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", o.style.transform = "translateY(0)");
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
    for (this.cancelEditButton && s.push(this.cancelEditButton), this.editToggleButton && s.push(this.editToggleButton), this.deleteBendButton && s.push(this.deleteBendButton), this.lightingToggleButton && s.push(this.lightingToggleButton), this.moonToggleButton && s.push(this.moonToggleButton), this.tileTypeButton && s.push(this.tileTypeButton), this.alwaysShowEdgesButton && this.hasEdges && s.push(this.alwaysShowEdgesButton), this.fitCenterButton && s.push(this.fitCenterButton); this.commonControlsContainer.firstChild; )
      this.commonControlsContainer.removeChild(this.commonControlsContainer.firstChild);
    t ? (this.deleteBendButton && this.commonControlsContainer.appendChild(this.deleteBendButton), this.cancelEditButton && this.commonControlsContainer.appendChild(this.cancelEditButton), this.editToggleButton && this.commonControlsContainer.appendChild(this.editToggleButton), this.alwaysShowEdgesButton && this.hasEdges && this.commonControlsContainer.appendChild(this.alwaysShowEdgesButton), this.fitCenterButton && this.commonControlsContainer.appendChild(this.fitCenterButton)) : e && (this.moonToggleButton && this.currentView === "map2d" && this.commonControlsContainer.appendChild(this.moonToggleButton), this.lightingToggleButton && this.commonControlsContainer.appendChild(this.lightingToggleButton), this.tileTypeButton && this.commonControlsContainer.appendChild(this.tileTypeButton), this.alwaysShowEdgesButton && this.hasEdges && this.commonControlsContainer.appendChild(this.alwaysShowEdgesButton), this.fitCenterButton && this.commonControlsContainer.appendChild(this.fitCenterButton));
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
   * Update Graph-specific buttons (called from GraphView when state changes)
   */
  updateGraphButtons() {
    this.updateCancelEditButton(), this.updateDeleteBendButton();
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
function Q(N, t = 16) {
  return J(), `<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <use href="#${N}"></use>
  </svg>`;
}
class gt {
  constructor(t, e, s, i = !1, o, l) {
    this.nodes = [], this.edges = [], this.groups = [], this.mode = "view", this.editable = !1, this.nodeElements = /* @__PURE__ */ new Map(), this.edgeElements = /* @__PURE__ */ new Map(), this.selectedEdgeId = null, this.selectedNodeId = null, this.zoomedNodeId = null, this.anchorHandles = /* @__PURE__ */ new Map(), this.draggingAnchor = null, this.bendHandles = /* @__PURE__ */ new Map(), this.draggingBend = null, this.draggingNode = null, this.draggingGroup = null, this.panning = null, this.lastPanEndTime = 0, this.resizingNode = null, this.resizingGroup = null, this.saveDebounceTimer = null, this.SAVE_DEBOUNCE_MS = 500, this.resizeRenderTimer = null, this.editToggleButton = null, this.alwaysShowEdgesButton = null, this.alwaysShowEdges = !1, this.hoveredEdgePairKey = null, this.tappedEdgePairKey = null, this.snapshotBeforeEdit = null, this.edgeClickTimers = /* @__PURE__ */ new WeakMap(), this.offsetX = 0, this.offsetY = 0, this.zoom = 1, this.pinchDistance = null, this.pinchCenter = null, this.initialZoom = 1, this.popupElement = null, this.popupNodeId = null, this.DEFAULT_NODE_WIDTH = 120, this.DEFAULT_NODE_HEIGHT = 60, this.EDGE_DEFAULT_COLOR = "#999", this.EDGE_HOVER_COLOR = "#333", this.EDGE_DEFAULT_WIDTH = 1.5, this.EDGE_HOVER_WIDTH = 3, this.EDGE_MIN_WEIGHT = 1, this.EDGE_MAX_WEIGHT = 10, this.NODE_PADDING = 10, this.HANDLE_RADIUS = 8, this.BEND_HANDLE_RADIUS = 7, this.HIT_PATH_WIDTH = 32, this.controlButtonsContainer = null, this.deleteBendButton = null, this.fitCenterButton = null, this.cancelEditButton = null, this.container = t, this.onNodeClick = e ? (n) => {
      this.popupNodeId === n.node.id && this.popupElement && this.popupElement.style.opacity === "1" ? this.hidePopup() : this.showPopup(n.node), e(n);
    } : void 0, this.onSave = s, this.editable = i, this.onEdgeClick = o, this.onGroupClick = l, this.container.style.position = "relative", this.container.style.width = "100%", this.container.style.height = "100%", this.container.style.overflow = "visible", this.createAlwaysShowEdgesButton(), this.alwaysShowEdgesButton && (this.alwaysShowEdgesButton.style.display = "none", this.alwaysShowEdgesButton.parentNode && this.alwaysShowEdgesButton.parentNode.removeChild(this.alwaysShowEdgesButton)), this.createEditToggleButton(), this.editToggleButton && (this.editToggleButton.style.display = "none", this.editToggleButton.parentNode && this.editToggleButton.parentNode.removeChild(this.editToggleButton)), this.createControlButtons(), this.controlButtonsContainer && (this.controlButtonsContainer.style.display = "none", this.controlButtonsContainer.parentNode && this.controlButtonsContainer.parentNode.removeChild(this.controlButtonsContainer)), this.createAttributionLabel(), this.svgWrapper = document.createElement("div"), this.svgWrapper.style.position = "absolute", this.svgWrapper.style.top = "0", this.svgWrapper.style.left = "0", this.svgWrapper.style.width = "100%", this.svgWrapper.style.height = "100%", this.svgWrapper.style.transformOrigin = "0 0", this.svgWrapper.style.pointerEvents = "none", this.container.appendChild(this.svgWrapper), this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"), this.svg.style.width = "100%", this.svg.style.height = "100%", this.svg.style.display = "block", this.svg.style.pointerEvents = "auto", this.svgWrapper.appendChild(this.svg), this.svgDefs = document.createElementNS("http://www.w3.org/2000/svg", "defs"), this.createArrowMarkers(), this.svg.appendChild(this.svgDefs), this.groupsGroup = document.createElementNS("http://www.w3.org/2000/svg", "g"), this.groupsGroup.setAttribute("class", "groups"), this.svg.appendChild(this.groupsGroup), this.edgesGroup = document.createElementNS("http://www.w3.org/2000/svg", "g"), this.edgesGroup.setAttribute("class", "edges"), this.svg.appendChild(this.edgesGroup), this.nodesGroup = document.createElementNS("http://www.w3.org/2000/svg", "g"), this.nodesGroup.setAttribute("class", "nodes"), this.svg.appendChild(this.nodesGroup), this.anchorHandlesGroup = document.createElementNS("http://www.w3.org/2000/svg", "g"), this.anchorHandlesGroup.setAttribute("class", "anchor-handles"), this.anchorHandlesGroup.style.display = "none", this.svg.appendChild(this.anchorHandlesGroup), this.bendHandlesGroup = document.createElementNS("http://www.w3.org/2000/svg", "g"), this.bendHandlesGroup.setAttribute("class", "bend-handles"), this.bendHandlesGroup.style.display = "none", this.svg.appendChild(this.bendHandlesGroup), this.edgeLabelsGroup = document.createElementNS("http://www.w3.org/2000/svg", "g"), this.edgeLabelsGroup.setAttribute("class", "edge-labels"), this.svg.appendChild(this.edgeLabelsGroup), this.updateTransform(), this.setupEventListeners();
  }
  /**
   * Create always show edges toggle button
   */
  createAlwaysShowEdgesButton() {
    this.alwaysShowEdgesButton = document.createElement("button"), this.alwaysShowEdgesButton.className = "relatos-always-show-edges-toggle", this.alwaysShowEdgesButton.setAttribute("aria-label", "Always show all edges"), this.alwaysShowEdgesButton.setAttribute("title", "Always show all edges"), this.alwaysShowEdgesButton.style.padding = "6px", this.alwaysShowEdgesButton.style.border = "1px solid #ccc", this.alwaysShowEdgesButton.style.borderRadius = "4px", this.alwaysShowEdgesButton.style.backgroundColor = "#fff", this.alwaysShowEdgesButton.style.cursor = "pointer", this.alwaysShowEdgesButton.style.fontSize = "16px", this.alwaysShowEdgesButton.style.lineHeight = "1", this.alwaysShowEdgesButton.style.width = "32px", this.alwaysShowEdgesButton.style.height = "32px", this.alwaysShowEdgesButton.style.display = "flex", this.alwaysShowEdgesButton.style.alignItems = "center", this.alwaysShowEdgesButton.style.justifyContent = "center", this.alwaysShowEdgesButton.style.transition = "all 0.2s", this.alwaysShowEdgesButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.alwaysShowEdgesButton.style.pointerEvents = "auto", this.alwaysShowEdgesButton.style.color = "#000000", this.alwaysShowEdgesButton.innerHTML = Q("icon-relations", 16), this.alwaysShowEdgesButton.addEventListener("click", () => {
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
    this.editToggleButton && (this.editToggleButton.innerHTML = Q("icon-edit", 16), this.mode === "edit" ? (this.editToggleButton.setAttribute("aria-label", "Exit edit mode"), this.editToggleButton.setAttribute("title", "Exit edit mode"), this.editToggleButton.classList.add("relatos-edit-toggle-active"), this.editToggleButton.style.backgroundColor = "#fff9c4", this.editToggleButton.style.color = "red", this.editToggleButton.style.borderColor = "#999", this.editToggleButton.style.boxShadow = "inset 0 2px 4px rgba(0, 0, 0, 0.2)", this.editToggleButton.style.transform = "translateY(1px)") : (this.editToggleButton.setAttribute("aria-label", "Enter edit mode"), this.editToggleButton.setAttribute("title", "Enter edit mode"), this.editToggleButton.classList.remove("relatos-edit-toggle-active"), this.editToggleButton.style.backgroundColor = "#fff", this.editToggleButton.style.color = "#333", this.editToggleButton.style.borderColor = "#ccc", this.editToggleButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.editToggleButton.style.transform = "translateY(0)"));
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
    this.controlButtonsContainer = document.createElement("div"), this.controlButtonsContainer.style.position = "absolute", this.controlButtonsContainer.style.top = "8px", this.controlButtonsContainer.style.right = "8px", this.controlButtonsContainer.style.display = "flex", this.controlButtonsContainer.style.gap = "4px", this.controlButtonsContainer.style.zIndex = "1000", this.controlButtonsContainer.style.pointerEvents = "none", this.deleteBendButton = this.createIconButton(Q("icon-trash", 16), "Delete bend point", "Delete bend point", () => {
      this.selectedEdgeId && this.deleteNearestBendPoint();
    }), this.deleteBendButton.style.display = "none", this.fitCenterButton = this.createIconButton(Q("icon-home", 16), "Fit and center", "Fit and center", () => {
      this.fitAndCenter();
    }), this.fitCenterButton.style.display = "none", this.cancelEditButton = this.createIconButton(Q("icon-undo", 16), "Cancel edit", "Cancel edit and restore previous state", () => {
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
    const o = document.createElement("button");
    return o.innerHTML = t, o.setAttribute("aria-label", e), o.setAttribute("title", s), o.style.padding = "6px", o.style.border = "1px solid #ccc", o.style.borderRadius = "4px", o.style.backgroundColor = "#fff", o.style.cursor = "pointer", o.style.fontSize = "16px", o.style.width = "32px", o.style.height = "32px", o.style.display = "flex", o.style.alignItems = "center", o.style.justifyContent = "center", o.style.pointerEvents = "auto", o.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", o.style.transition = "all 0.2s", o.addEventListener("click", (l) => {
      l.stopPropagation(), i();
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
  zoomToPoint(t, e, s) {
    const i = this.screenToSvg(e, s);
    this.zoom, this.zoom = t;
    const o = this.container.getBoundingClientRect(), l = e - o.left, n = s - o.top, r = {
      x: l / this.zoom - this.offsetX,
      y: n / this.zoom - this.offsetY
    }, h = i.x - r.x, c = i.y - r.y;
    this.offsetX += h, this.offsetY += c;
  }
  /**
   * Convert screen coordinates to SVG coordinates accounting for offset and zoom
   * With DOM scale transform, wrapper size is (100% / zoom) and then scaled by zoom
   * The visual size is always 100%, so we can use container coordinates
   */
  screenToSvg(t, e) {
    const s = this.container.getBoundingClientRect(), i = t - s.left, o = e - s.top, l = i / this.zoom, n = o / this.zoom;
    return {
      x: l - this.offsetX,
      y: n - this.offsetY
    };
  }
  /**
   * Update transform: zoom on DOM wrapper, translate on SVG groups
   */
  updateTransform() {
    if (this.popupNodeId && this.popupElement) {
      const l = this.nodes.find((n) => n.id === this.popupNodeId);
      l && this.updatePopupPosition(l);
    }
    const t = isFinite(this.zoom) && this.zoom > 0 ? this.zoom : 1, e = isFinite(this.offsetX) ? this.offsetX : 0, s = isFinite(this.offsetY) ? this.offsetY : 0, i = 1 / t;
    this.svgWrapper.style.width = `${i * 100}%`, this.svgWrapper.style.height = `${i * 100}%`, this.svgWrapper.style.transform = `scale(${t})`;
    const o = `translate(${-e}, ${-s})`;
    this.nodesGroup.setAttribute("transform", o), this.edgesGroup.setAttribute("transform", o), this.groupsGroup.setAttribute("transform", o), this.anchorHandlesGroup.setAttribute("transform", o), this.bendHandlesGroup.setAttribute("transform", o), this.edgeLabelsGroup && this.edgeLabelsGroup.setAttribute("transform", o);
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
    let e = 1 / 0, s = 1 / 0, i = -1 / 0, o = -1 / 0;
    for (const y of this.nodes)
      if (y.position) {
        const m = y.style || {}, w = m.width || this.DEFAULT_NODE_WIDTH, b = m.height || this.DEFAULT_NODE_HEIGHT;
        e = Math.min(e, y.position.x - w / 2), s = Math.min(s, y.position.y - b / 2), i = Math.max(i, y.position.x + w / 2), o = Math.max(o, y.position.y + b / 2);
      }
    if (e === 1 / 0)
      return;
    const l = 60;
    e -= l, s -= l, i += l, o += l;
    const n = (e + i) / 2, r = (s + o) / 2, h = i - e, c = o - s, u = this.container.getBoundingClientRect();
    if (u.width <= 0 || u.height <= 0 || !isFinite(h) || !isFinite(c) || h <= 0 || c <= 0)
      return;
    const a = u.width / h, d = u.height / c;
    if (!isFinite(a) || !isFinite(d))
      return;
    const g = Math.min(a, d, 1);
    this.zoom = g;
    const p = u.width / (2 * this.zoom), f = u.height / (2 * this.zoom);
    !isFinite(n) || !isFinite(r) || !isFinite(p) || !isFinite(f) || (this.offsetX = n - p, this.offsetY = r - f, this.svg.removeAttribute("viewBox"), this.updateTransform(), this.render());
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
    let e = 1 / 0, s = 1 / 0, i = -1 / 0, o = -1 / 0;
    for (const y of this.nodes)
      if (y.position) {
        const m = y.style || {}, w = m.width || this.DEFAULT_NODE_WIDTH, b = m.height || this.DEFAULT_NODE_HEIGHT;
        e = Math.min(e, y.position.x - w / 2), s = Math.min(s, y.position.y - b / 2), i = Math.max(i, y.position.x + w / 2), o = Math.max(o, y.position.y + b / 2);
      }
    if (e === 1 / 0)
      return;
    const l = 60;
    e -= l, s -= l, i += l, o += l;
    const n = (e + i) / 2, r = (s + o) / 2, h = i - e, c = o - s, u = this.container.getBoundingClientRect();
    if (u.width <= 0 || u.height <= 0 || !isFinite(h) || !isFinite(c) || h <= 0 || c <= 0)
      return;
    const a = u.width / h, d = u.height / c;
    if (!isFinite(a) || !isFinite(d))
      return;
    const g = Math.min(a, d, 1), p = u.width / 2, f = u.height / 2;
    this.animateZoomToPoint(g, p, f, n, r);
  }
  /**
   * Setup event listeners (using Pointer Events for touch support)
   */
  setupEventListeners() {
    this.svg.addEventListener("click", (i) => {
      const o = i.target;
      o.closest("[data-node-id]") || o.getAttribute("data-edge-pair-key") || o.getAttribute("data-hit-edge-pair-key") || Date.now() - (this.lastPanEndTime || 0) < 100 || this.mode === "view" && this.hidePopup();
    }), this.svg.addEventListener("pointerdown", (i) => {
      const o = i.target, l = o.closest("[data-node-id]")?.getAttribute("data-node-id"), n = o.getAttribute("data-edge-pair-key") || o.getAttribute("data-hit-edge-pair-key"), r = o.getAttribute("data-handle-type"), h = o.getAttribute("data-bend-index");
      if (this.mode === "edit") {
        const c = o.getAttribute("data-resize-side");
        if (c) {
          const u = o.getAttribute("data-node-id");
          if (u) {
            const a = this.nodes.find((d) => d.id === u);
            if (a?.position) {
              const d = a.style || {}, g = d.width || this.DEFAULT_NODE_WIDTH, p = d.height || this.DEFAULT_NODE_HEIGHT, f = this.screenToSvg(i.clientX, i.clientY);
              this.resizingNode = {
                nodeId: u,
                side: c,
                startX: f.x,
                startY: f.y,
                startWidth: g,
                startHeight: p,
                startNodeX: a.position.x,
                startNodeY: a.position.y
              }, i.target.setPointerCapture(i.pointerId), i.preventDefault(), i.stopPropagation();
              return;
            }
          }
        }
        if (l) {
          const u = this.nodes.find((a) => a.id === l);
          if (u?.position) {
            const a = this.screenToSvg(i.clientX, i.clientY);
            this.draggingNode = {
              nodeId: l,
              offsetX: a.x - u.position.x,
              offsetY: a.y - u.position.y
            }, i.target.setPointerCapture(i.pointerId), i.preventDefault(), i.stopPropagation();
            return;
          }
        } else if (h !== null) {
          const u = o.getAttribute("data-edge-id");
          if (u) {
            const a = this.screenToSvg(i.clientX, i.clientY), d = this.edges.find((g) => g.id === u);
            if (d) {
              const [g, p] = d.src < d.dst ? [d.src, d.dst] : [d.dst, d.src], f = `${g}||${p}`, y = this.groupEdgesByPair(this.edges).find((m) => m.key === f);
              if (y && y.bends) {
                const m = parseInt(h, 10);
                if (m >= 0 && m < y.bends.length) {
                  const w = y.bends[m];
                  this.draggingBend = {
                    edgeId: u,
                    bendIndex: m,
                    offsetX: a.x - w.x,
                    offsetY: a.y - w.y
                  }, i.preventDefault(), i.stopPropagation();
                  return;
                }
              }
            }
          }
        } else if (r) {
          const u = o.getAttribute("data-edge-id");
          if (u) {
            const a = this.screenToSvg(i.clientX, i.clientY), d = this.edges.find((g) => g.id === u);
            if (d) {
              const [g, p] = d.src < d.dst ? [d.src, d.dst] : [d.dst, d.src], f = `${g}||${p}`, y = this.groupEdgesByPair(this.edges).find((m) => m.key === f);
              if (y) {
                const m = r === "src" ? y.a : y.b, w = this.nodes.find((b) => b.id === m);
                if (w) {
                  const b = r === "src" ? y.b : y.a, C = this.nodes.find((E) => E.id === b);
                  if (C) {
                    const E = r === "src" ? y.srcAnchor || this.estimateAnchor(w, C) : y.dstAnchor || this.estimateAnchor(w, C), v = w.style || {}, x = v.width || this.DEFAULT_NODE_WIDTH, B = v.height || this.DEFAULT_NODE_HEIGHT, T = this.calculateAnchorPosition(w, E, x, B);
                    this.draggingAnchor = {
                      edgeId: u,
                      type: r,
                      offsetX: a.x - T.x,
                      offsetY: a.y - T.y
                    }, i.preventDefault(), i.stopPropagation();
                    return;
                  }
                }
              }
            }
          }
        } else n || this.deselectEdge();
      } else if (l) {
        const c = this.nodes.find((u) => u.id === l);
        if (c && this.onNodeClick) {
          const u = this.screenToSvg(i.clientX, i.clientY);
          this.onNodeClick({
            node: c,
            position: { x: u.x, y: u.y },
            originalEvent: i
          });
        }
      } else n || (this.deselectEdge(), this.tappedEdgePairKey && (this.tappedEdgePairKey = null, this.render()));
    });
    let t = 0, e = null;
    this.svg.addEventListener("pointerdown", (i) => {
      const o = i.target, l = o.getAttribute("data-edge-pair-key") || o.getAttribute("data-hit-edge-pair-key");
      if (this.mode === "edit" && l) {
        const n = Date.now();
        if (n - t < 300 && e === o) {
          const h = this.groupEdgesByPair(this.edges).find((c) => c.key === l);
          if (h && h.edges.length > 0) {
            this.insertBendPoint(h.edges[0].id, i), i.preventDefault(), i.stopPropagation(), t = 0, e = null;
            return;
          }
        }
        t = n, e = o;
      }
    }), this.container.addEventListener("dblclick", (i) => {
      if (this.mode !== "edit")
        return;
      const o = i.target;
      if (!o || !this.container.contains(o))
        return;
      const l = o.getAttribute("data-hit-edge-pair-key") || o.getAttribute("data-edge-pair-key");
      if (l) {
        const r = this.groupEdgesByPair(this.edges).find((h) => h.key === l);
        if (r && r.edges.length > 0) {
          this.insertBendPoint(r.edges[0].id, i), i.preventDefault(), i.stopPropagation();
          return;
        }
      }
      let n = o;
      for (; n && n !== this.svg; ) {
        const r = n.getAttribute("data-hit-edge-pair-key") || n.getAttribute("data-edge-pair-key");
        if (r) {
          const h = this.groupEdgesByPair(this.edges).find((c) => c.key === r);
          if (h && h.edges.length > 0) {
            this.insertBendPoint(h.edges[0].id, i), i.preventDefault(), i.stopPropagation();
            return;
          }
        }
        n = n.parentElement;
      }
    }, !0);
    const s = /* @__PURE__ */ new Map();
    this.svg.addEventListener("pointerdown", (i) => {
      if (i.pointerType === "touch" && (s.set(i.pointerId, i), s.size === 2)) {
        const o = Array.from(s.values()), [l, n] = o;
        this.pinchDistance = Math.hypot(n.clientX - l.clientX, n.clientY - l.clientY), this.pinchCenter = {
          x: (l.clientX + n.clientX) / 2,
          y: (l.clientY + n.clientY) / 2
        }, this.initialZoom = this.zoom, i.preventDefault();
      }
    }), this.svg.addEventListener("pointermove", (i) => {
      if (i.pointerType === "touch" && s.set(i.pointerId, i), this.pinchDistance !== null && this.pinchCenter !== null && s.size === 2) {
        const h = Array.from(s.values()), [c, u] = h, d = Math.hypot(u.clientX - c.clientX, u.clientY - c.clientY) / this.pinchDistance, g = Math.pow(d, 1.5), p = Math.max(0.1, Math.min(5, this.initialZoom * g));
        this.zoomToPoint(p, this.pinchCenter.x, this.pinchCenter.y), this.updateTransform(), this.render(), i.preventDefault();
        return;
      }
      const o = i.target, l = o instanceof HTMLButtonElement || o.closest("button") !== null || o.closest(".relatos-always-show-edges-toggle") !== null || o.closest(".relatos-edit-toggle") !== null || o.closest(".relatos-control-buttons") !== null, n = i.pointerType === "touch" && s.size === 1, r = i.pointerType === "mouse" && i.buttons === 1;
      if (!l && !this.resizingNode && !this.resizingGroup && !this.draggingNode && !this.draggingGroup && !this.draggingAnchor && !this.draggingBend && (n || r)) {
        if (!this.panning)
          this.panning = {
            startX: i.clientX,
            startY: i.clientY,
            startOffsetX: this.offsetX,
            startOffsetY: this.offsetY
          };
        else {
          const h = i.clientX - this.panning.startX, c = i.clientY - this.panning.startY, u = h / this.zoom, a = c / this.zoom;
          this.offsetX = this.panning.startOffsetX + u, this.offsetY = this.panning.startOffsetY + a, this.updateTransform(), this.render();
        }
        i.preventDefault();
        return;
      }
      this.resizingNode ? this.updateNodeSize(i) : this.resizingGroup ? this.updateGroupSize(i) : this.draggingNode ? this.updateNodePosition(i) : this.draggingGroup ? this.updateGroupPosition(i) : this.draggingAnchor ? this.updateAnchorPosition(i) : this.draggingBend && this.updateBendPosition(i);
    }), document.addEventListener("pointermove", (i) => {
      i.pointerType === "touch" && s.set(i.pointerId, i);
      const o = i.target;
      if (!(o instanceof HTMLButtonElement || o.closest("button") !== null || o.closest(".relatos-always-show-edges-toggle") !== null || o.closest(".relatos-edit-toggle") !== null || o.closest(".relatos-control-buttons") !== null) && this.panning && !this.resizingNode && !this.resizingGroup && !this.draggingNode && !this.draggingGroup && !this.draggingAnchor && !this.draggingBend) {
        const n = i.pointerType === "touch" && s.size === 1, r = i.pointerType === "mouse" && (i.buttons === 1 || i.button === 0);
        if (n || r) {
          const h = i.clientX - this.panning.startX, c = i.clientY - this.panning.startY, u = h / this.zoom, a = c / this.zoom;
          this.offsetX = this.panning.startOffsetX - u, this.offsetY = this.panning.startOffsetY - a, this.updateTransform(), this.render(), i.preventDefault();
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
      this.mode !== "edit" || !this.selectedEdgeId || (i.key === "Delete" || i.key === "Backspace") && (this.deleteNearestBendPoint(), i.preventDefault());
    }), this.container.setAttribute("tabindex", "0"), this.container.addEventListener("wheel", (i) => {
      if (i.ctrlKey || i.metaKey) {
        i.preventDefault();
        const o = Math.pow(1.5, -i.deltaY / 60), l = Math.max(0.1, Math.min(5, this.zoom * o));
        this.zoomToPoint(l, i.clientX, i.clientY), this.updateTransform(), this.render();
      } else {
        i.preventDefault();
        const o = Math.pow(1.5, i.deltaY / 60), l = Math.max(0.1, Math.min(5, this.zoom * o));
        this.zoomToPoint(l, i.clientX, i.clientY), this.updateTransform(), this.render();
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
    const i = e.style || {}, o = i.width || this.DEFAULT_NODE_WIDTH, l = i.height || this.DEFAULT_NODE_HEIGHT, n = e.position.x + o / 2, r = e.position.y + l / 2;
    o * this.zoom, l * this.zoom;
    const h = Math.min(s.width * 0.3, s.height * 0.3), c = h / o, u = h / l, a = Math.min(c, u), p = Math.max(0.5, Math.min(3, a)), f = s.width / 2, y = s.height / 2;
    this.animateZoomToPoint(p, f, y, n, r);
  }
  /**
   * Zoom to specified point with animation
   * @param targetZoom Target zoom level
   * @param screenCenterX Screen center X coordinate (relative to container)
   * @param screenCenterY Screen center Y coordinate (relative to container)
   * @param targetSvgX Target SVG X coordinate
   * @param targetSvgY Target SVG Y coordinate
   */
  animateZoomToPoint(t, e, s, i, o) {
    const l = this.zoom, n = this.offsetX, r = this.offsetY, h = this.container.getBoundingClientRect(), c = h.width / (2 * t), u = h.height / (2 * t), a = i - c, d = o - u, g = 500, p = performance.now(), f = (y) => {
      const m = y - p, w = Math.min(m / g, 1), b = 1 - Math.pow(1 - w, 3), C = l + (t - l) * b, E = n + (a - n) * b, v = r + (d - r) * b;
      if (this.zoom = C, this.offsetX = E, this.offsetY = v, this.updateTransform(), this.render(), w >= 1) {
        const x = this.container.getBoundingClientRect(), B = x.width / 2, T = x.height / 2;
        B / this.zoom - this.offsetX, T / this.zoom - this.offsetY;
      }
      w < 1 && requestAnimationFrame(f);
    };
    requestAnimationFrame(f);
  }
  /**
   * Ensure node position information (auto-layout if not present)
   * If coordinates (latitude/longitude) exist, place based on lat/lon,
   * otherwise place in remaining 1/4 area
   */
  ensureNodePositions() {
    const t = this.nodes.filter((m) => m.coordinates && m.coordinates.length === 2), e = this.nodes.filter((m) => !m.coordinates || m.coordinates.length !== 2), s = this.nodes.filter((m) => !m.position), i = this.nodes.every((m) => m.position), o = this.groups.every((m) => m.layout);
    if (i && o || s.length === 0 && t.length === 0 && e.length === 0)
      return;
    const l = this.container.getBoundingClientRect(), n = l.width || 1e3, r = l.height || 600, h = 2, c = n * h * 0.25, u = n * h * 0.75, a = r * h, d = c, g = r * h, p = 0, f = [];
    for (const m of this.nodes)
      if (m.position) {
        const w = m.style || {}, b = w.width || this.DEFAULT_NODE_WIDTH, C = w.height || this.DEFAULT_NODE_HEIGHT;
        if (f.push({
          x: m.position.x - b / 2,
          y: m.position.y - C / 2,
          width: b,
          height: C
        }), m.coordinates && m.coordinates.length === 2) {
          const [E, v] = m.coordinates;
        }
      }
    if (t.length > 0) {
      const m = t.map((L) => L.coordinates[0]), w = t.map((L) => L.coordinates[1]), b = Math.min(...m), C = Math.max(...m), E = Math.min(...w), v = Math.max(...w), x = C - b, B = v - E, T = Math.max(x, B) * 0.1 || 0.01, A = {
        minLat: b - T,
        maxLat: C + T,
        minLon: E - T,
        maxLon: v + T
      }, M = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map();
      for (const L of t) {
        const [I, _] = L.coordinates, P = (_ - A.minLon) / (A.maxLon - A.minLon), R = 1 - (I - A.minLat) / (A.maxLat - A.minLat), H = {
          x: d + P * u,
          y: R * a
        }, O = L.style || {}, U = O.width || this.DEFAULT_NODE_WIDTH, $ = O.height || this.DEFAULT_NODE_HEIGHT, G = H.x, k = H.y;
        M.set(L.id, { originalCenterX: G, originalCenterY: k }), S.set(L.id, {
          node: L,
          width: U,
          height: $,
          originalCenterX: G,
          originalCenterY: k
        });
      }
      this.resolveNodePositionsWithVectorConstraints(S, M);
    }
    const y = e.filter((m) => !m.position);
    if (y.length > 0) {
      const w = Math.ceil(Math.sqrt(y.length)), b = Math.ceil(y.length / w), C = c - 40, E = g - 40, v = C / w, x = E / b;
      y.forEach((B, T) => {
        const A = B.style || {}, M = A.width || this.DEFAULT_NODE_WIDTH, S = A.height || this.DEFAULT_NODE_HEIGHT, L = Math.floor(T / w), I = T % w, _ = p + 20 + (I + 0.5) * v, P = 20 + (L + 0.5) * x;
        B.position = { x: _, y: P }, f.push({
          x: _ - M / 2,
          y: P - S / 2,
          width: M,
          height: S
        });
      });
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
    const h = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
    for (const p of this.groups)
      p.layout && c.add(p.id);
    const u = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
    for (const [p, f] of t) {
      const y = f.node, m = e.get(p);
      y.position ? (u.set(p, { centerX: y.position.x, centerY: y.position.y }), h.add(p)) : u.set(p, {
        centerX: m.originalCenterX,
        centerY: m.originalCenterY
      });
      const w = u.get(p);
      a.set(p, {
        x: w.centerX - f.width / 2,
        y: w.centerY - f.height / 2,
        width: f.width,
        height: f.height
      });
    }
    const d = (p) => {
      const f = [];
      for (const y of this.groups) {
        const m = /* @__PURE__ */ new Set(), w = (b) => {
          for (const E of b.nodeIds)
            m.add(E);
          const C = this.groups.filter((E) => E.parentId === b.id);
          for (const E of C)
            w(E);
        };
        w(y), m.has(p) && f.push(y);
      }
      return f;
    }, g = (p) => {
      if (c.has(p.id) && p.layout)
        return {
          minX: p.layout.position.x,
          maxX: p.layout.position.x + p.layout.size.width,
          minY: p.layout.position.y,
          maxY: p.layout.position.y + p.layout.size.height
        };
      const f = this.groups.some((B) => B.parentId === p.id), y = /* @__PURE__ */ new Set();
      if (f) {
        const B = this.groups.filter((T) => T.parentId === p.id);
        for (const T of B) {
          const A = (M) => {
            for (const L of M.nodeIds)
              y.add(L);
            const S = this.groups.filter((L) => L.parentId === M.id);
            for (const L of S)
              A(L);
          };
          A(T);
        }
      }
      let m = 1 / 0, w = -1 / 0, b = 1 / 0, C = -1 / 0, E = !1;
      for (const B of p.nodeIds) {
        if (f && y.has(B))
          continue;
        const T = a.get(B);
        T && (E = !0, m = Math.min(m, T.x), w = Math.max(w, T.x + T.width), b = Math.min(b, T.y), C = Math.max(C, T.y + T.height));
      }
      if (f) {
        const B = this.groups.filter((T) => T.parentId === p.id);
        for (const T of B) {
          const A = g(T);
          A && (E = !0, m = Math.min(m, A.minX), w = Math.max(w, A.maxX), b = Math.min(b, A.minY), C = Math.max(C, A.maxY));
        }
      }
      if (!E)
        return null;
      const v = f ? 50 : 30, x = v + 25;
      return {
        minX: m - v,
        maxX: w + v,
        minY: b - x,
        maxY: C + v
      };
    };
    for (let p = 0; p < 100; p++) {
      let f = !1;
      const y = Array.from(t.entries());
      for (let m = 0; m < y.length; m++) {
        const [w, b] = y[m], C = u.get(w), E = a.get(w), v = d(w);
        for (let x = m + 1; x < y.length; x++) {
          const [B, T] = y[x], A = u.get(B), M = a.get(B), S = d(B), L = e.get(w), I = e.get(B), _ = I.originalCenterX - L.originalCenterX, P = I.originalCenterY - L.originalCenterY, R = Math.sqrt(_ * _ + P * P);
          if (R === 0) continue;
          const H = _ / R, O = P / R;
          let U = !1, $ = 0;
          for (const G of v) {
            const k = g(G);
            if (k)
              for (const j of S) {
                let W = !1;
                if (G.id === j.id)
                  W = !0;
                else {
                  const z = (Y, V) => {
                    if (V.parentId === Y.id) return !0;
                    if (!V.parentId) return !1;
                    const X = this.groups.find((F) => F.id === V.parentId);
                    return X ? z(Y, X) : !1;
                  };
                  W = z(G, j) || z(j, G);
                }
                if (W) continue;
                const D = g(j);
                if (!D) continue;
                const K = k.minX < D.maxX + 60 && k.maxX + 60 > D.minX, Z = k.minY < D.maxY + 60 && k.maxY + 60 > D.minY;
                if (K && Z) {
                  U = !0;
                  const z = (k.minX + k.maxX) / 2, Y = (k.minY + k.maxY) / 2, V = (D.minX + D.maxX) / 2, X = (D.minY + D.maxY) / 2, F = V - z, tt = X - Y, st = Math.sqrt(F * F + tt * tt), ot = k.maxX - k.minX, et = k.maxY - k.minY, it = D.maxX - D.minX, at = D.maxY - D.minY, ht = Math.abs(ot * H) + Math.abs(et * O), dt = Math.abs(it * H) + Math.abs(at * O), rt = (ht + dt) / 2 + 60;
                  st < rt && ($ = Math.max($, rt));
                }
              }
          }
          if (U && $ > 0) {
            f = !0;
            const G = A.centerX - C.centerX, k = A.centerY - C.centerY;
            if (Math.sqrt(G * G + k * k) < $) {
              const W = h.has(w), D = h.has(B);
              if (W && D)
                continue;
              const K = $ / R, Z = _ * K, z = P * K, Y = L.originalCenterX + Z, V = L.originalCenterY + z, X = (Y - A.centerX) / 2, F = (V - A.centerY) / 2;
              W || (C.centerX -= X, C.centerY -= F, E.x = C.centerX - b.width / 2, E.y = C.centerY - b.height / 2), D || (A.centerX += X, A.centerY += F, M.x = A.centerX - T.width / 2, M.y = A.centerY - T.height / 2);
            }
          }
          if (!U) {
            const G = h.has(w), k = h.has(B);
            if (G && k)
              continue;
            const j = E.x < M.x + M.width + 20 && E.x + E.width + 20 > M.x, W = E.y < M.y + M.height + 20 && E.y + E.height + 20 > M.y;
            if (j && W) {
              f = !0;
              const D = Math.abs(b.width * H) + Math.abs(b.height * O), K = Math.abs(T.width * H) + Math.abs(T.height * O), Z = (D + K) / 2 + 20, z = A.centerX - C.centerX, Y = A.centerY - C.centerY;
              if (Math.sqrt(z * z + Y * Y) < Z) {
                const X = Z / R, F = _ * X, tt = P * X, st = L.originalCenterX + F, ot = L.originalCenterY + tt, et = (st - A.centerX) / 2, it = (ot - A.centerY) / 2;
                G || (C.centerX -= et, C.centerY -= it, E.x = C.centerX - b.width / 2, E.y = C.centerY - b.height / 2), k || (A.centerX += et, A.centerY += it, M.x = A.centerX - T.width / 2, M.y = A.centerY - T.height / 2);
              }
            }
          }
        }
      }
      if (!f)
        break;
    }
    for (const [p, f] of t) {
      if (h.has(p))
        continue;
      const y = u.get(p);
      f.node.position = {
        x: y.centerX,
        y: y.centerY
      };
    }
    for (const p of this.groups) {
      const f = g(p);
      f && (p.layout = {
        position: { x: f.minX, y: f.minY },
        size: {
          width: f.maxX - f.minX,
          height: f.maxY - f.minY
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
    const i = [], o = (r) => {
      const h = /* @__PURE__ */ new Set(), c = (g) => {
        for (const f of g.nodeIds)
          h.add(f);
        const p = this.groups.filter((f) => f.parentId === g.id);
        for (const f of p)
          c(f);
      };
      if (c(r), h.size === 0)
        return null;
      let u = 0, a = 0, d = 0;
      for (const g of h) {
        const p = t.get(g);
        p && (u += p.originalCenterX, a += p.originalCenterY, d++);
      }
      return d === 0 ? null : {
        x: u / d,
        y: a / d
      };
    }, l = (r) => {
      if (!r.parentId) return 0;
      const h = this.groups.find((c) => c.id === r.parentId);
      return h ? 1 + l(h) : 0;
    };
    for (const r of this.groups) {
      const h = this.getGroupLayout(r);
      if (!h) continue;
      const c = o(r);
      c && i.push({
        group: r,
        layout: h,
        originalCenter: c,
        level: l(r)
      });
    }
    const n = /* @__PURE__ */ new Map();
    for (const r of i) {
      n.has(r.level) || n.set(r.level, /* @__PURE__ */ new Map());
      const h = n.get(r.level), c = r.group.parentId || null;
      h.has(c) || h.set(c, []), h.get(c).push(r);
    }
    for (const [r, h] of n)
      for (const [c, u] of h)
        if (!(u.length < 2)) {
          u.sort((a, d) => {
            const g = a.originalCenter.y - d.originalCenter.y;
            return Math.abs(g) > 10 ? g : a.originalCenter.x - d.originalCenter.x;
          });
          for (let a = 0; a < 50; a++) {
            let d = !1;
            for (let g = 1; g < u.length; g++) {
              const p = u[g], f = p.layout.position.x, y = f + p.layout.size.width;
              for (let m = 0; m < g; m++) {
                const w = u[m], b = w.layout.position.x, C = b + w.layout.size.width;
                if (f < C + 60 && y + 60 > b) {
                  const E = p.layout.position.y, v = E + p.layout.size.height, x = w.layout.position.y, B = x + w.layout.size.height;
                  if (E < B + 60 && v + 60 > x) {
                    d = !0;
                    const T = C + 60 - f;
                    p.layout.position.x += T;
                    const A = this.calculateGroupBounds(p.group.nodeIds, p.group.id);
                    A && (p.layout.size = {
                      width: A.maxX - A.minX,
                      height: A.maxY - A.minY
                    });
                  }
                }
              }
            }
            for (let g = 1; g < u.length; g++) {
              const p = u[g], f = p.layout.position.y, y = f + p.layout.size.height;
              for (let m = 0; m < g; m++) {
                const w = u[m], b = w.layout.position.y, C = b + w.layout.size.height;
                if (f < C + 60 && y + 60 > b) {
                  const E = p.layout.position.x, v = E + p.layout.size.width, x = w.layout.position.x, B = x + w.layout.size.width;
                  if (E < B + 60 && v + 60 > x) {
                    d = !0;
                    const T = C + 60 - f;
                    p.layout.position.y += T;
                    const A = this.calculateGroupBounds(p.group.nodeIds, p.group.id);
                    A && (p.layout.size = {
                      width: A.maxX - A.minX,
                      height: A.maxY - A.minY
                    });
                  }
                }
              }
            }
            if (!d)
              break;
          }
          for (const a of u)
            a.group.layout = a.layout;
        }
  }
  /**
   * Compact layout: reduce excess space while maintaining position relationships
   * Nodes and groups maintain their relative positions (left-right, top-bottom)
   * Same-level groups must not overlap
   */
  compactLayout(t) {
    const i = (r) => {
      const h = /* @__PURE__ */ new Set(), c = (g) => {
        for (const f of g.nodeIds)
          h.add(f);
        const p = this.groups.filter((f) => f.parentId === g.id);
        for (const f of p)
          c(f);
      };
      if (c(r), h.size === 0) return null;
      let u = 0, a = 0, d = 0;
      for (const g of h) {
        const p = t.get(g);
        p && (u += p.originalCenterX, a += p.originalCenterY, d++);
      }
      return d > 0 ? { x: u / d, y: a / d } : null;
    }, o = (r) => {
      if (!r.parentId) return 0;
      const h = this.groups.find((c) => c.id === r.parentId);
      return h ? 1 + o(h) : 0;
    }, l = Array.from(this.nodes).filter((r) => r.position);
    l.sort((r, h) => {
      const c = t.get(r.id), u = t.get(h.id);
      if (!c || !u) return 0;
      const a = c.originalCenterY - u.originalCenterY;
      return Math.abs(a) > 10 ? a : c.originalCenterX - u.originalCenterX;
    });
    for (let r = 1; r < l.length; r++) {
      const h = l[r];
      if (!h.position) continue;
      const u = (h.style || {}).width || this.DEFAULT_NODE_WIDTH, a = h.position.x - u / 2;
      let d = -1 / 0;
      for (let g = 0; g < r; g++) {
        const p = l[g];
        if (!p.position) continue;
        const y = (p.style || {}).width || this.DEFAULT_NODE_WIDTH, m = p.position.x + y / 2;
        d = Math.max(d, m);
      }
      if (d > -1 / 0) {
        const g = d + 20;
        if (a > g) {
          const p = g - a;
          h.position.x += p;
        }
      }
    }
    for (let r = 1; r < l.length; r++) {
      const h = l[r];
      if (!h.position) continue;
      const u = (h.style || {}).height || this.DEFAULT_NODE_HEIGHT, a = h.position.y - u / 2;
      let d = -1 / 0;
      for (let g = 0; g < r; g++) {
        const p = l[g];
        if (!p.position) continue;
        const y = (p.style || {}).height || this.DEFAULT_NODE_HEIGHT, m = p.position.y + y / 2;
        d = Math.max(d, m);
      }
      if (d > -1 / 0) {
        const g = d + 20;
        if (a > g) {
          const p = g - a;
          h.position.y += p;
        }
      }
    }
    const n = /* @__PURE__ */ new Map();
    for (const r of this.groups) {
      const h = o(r);
      n.has(h) || n.set(h, /* @__PURE__ */ new Map());
      const c = n.get(h), u = r.parentId || null;
      c.has(u) || c.set(u, []), c.get(u).push(r);
    }
    for (const [r, h] of n)
      for (const [c, u] of h)
        if (!(u.length < 2)) {
          u.sort((a, d) => {
            const g = i(a), p = i(d);
            if (!g || !p) return 0;
            const f = g.y - p.y;
            return Math.abs(f) > 10 ? f : g.x - p.x;
          });
          for (let a = 1; a < u.length; a++) {
            const d = u[a], g = this.getGroupLayout(d);
            if (!g) continue;
            const p = g.position.x;
            let f = -1 / 0;
            for (let y = 0; y < a; y++) {
              const m = u[y], w = this.getGroupLayout(m);
              if (!w) continue;
              const b = w.position.x + w.size.width;
              f = Math.max(f, b);
            }
            if (f > -1 / 0) {
              const y = f + 60;
              if (p > y) {
                const m = y - p;
                g.position.x += m, d.layout = g;
              }
            }
          }
          for (let a = 1; a < u.length; a++) {
            const d = u[a], g = this.getGroupLayout(d);
            if (!g) continue;
            const p = g.position.y;
            let f = -1 / 0;
            for (let y = 0; y < a; y++) {
              const m = u[y], w = this.getGroupLayout(m);
              if (!w) continue;
              const b = w.position.y + w.size.height;
              f = Math.max(f, b);
            }
            if (f > -1 / 0) {
              const y = f + 60;
              if (p > y) {
                const m = y - p;
                g.position.y += m, d.layout = g;
              }
            }
          }
        }
  }
  /**
   * Adjust node positions to avoid overlap with other nodes (old implementation, kept for backward compatibility)
   * Adjust while preserving original positional relationships (east-west, north-south)
   */
  adjustNodePosition(t, e, s, i, o = 20) {
    let n = t.x, r = t.y;
    const h = t.width, c = t.height, u = s?.originalX ?? t.x, a = s?.originalY ?? t.y, d = e.map((g, p) => {
      const f = g.width || this.DEFAULT_NODE_WIDTH, y = g.height || this.DEFAULT_NODE_HEIGHT, m = g.x + f / 2, w = g.y + y / 2, b = m - u, C = w - a;
      return {
        x: g.x,
        y: g.y,
        width: f,
        height: y,
        centerX: m,
        centerY: w,
        relativeDx: b,
        // Infer original positional relationship (relationship between existing nodes' current positions and original node's original position)
        relativeDy: C,
        originalCenterX: m,
        // Existing node's current position (inferred original position)
        originalCenterY: w
      };
    });
    for (let g = 0; g < o; g++) {
      let p = !1, f = n, y = r, m = 1 / 0;
      for (const w of d)
        if (n < w.x + w.width + 20 && n + h + 20 > w.x && r < w.y + w.height + 20 && r + c + 20 > w.y) {
          p = !0;
          const b = n + h / 2, C = r + c / 2, E = w.centerX - b, v = w.centerY - C, x = Math.sqrt(E * E + v * v);
          if (x > 0) {
            const B = (h + w.width) / 2 + 20;
            let T = E, A = v;
            if (Math.abs(w.relativeDx) > 0.1 || Math.abs(w.relativeDy) > 0.1)
              if (Math.abs(w.relativeDx) > Math.abs(w.relativeDy))
                T = (w.relativeDx > 0 ? -1 : 1) * Math.abs(E) / x * B, A = v / x * B * 0.5;
              else {
                const U = w.relativeDy > 0 ? -1 : 1;
                T = E / x * B * 0.5, A = U * Math.abs(v) / x * B;
              }
            else
              T = E / x * B, A = v / x * B;
            const M = n + T, S = r + A, L = Math.sqrt(
              Math.pow(M - u, 2) + Math.pow(S - a, 2)
            ), I = M + h / 2, _ = S + c / 2, P = I - u, R = _ - a;
            let H = 0;
            (w.relativeDx > 0 && P < w.relativeDx || w.relativeDx < 0 && P > w.relativeDx) && (H += 1e3), (w.relativeDy > 0 && R < w.relativeDy || w.relativeDy < 0 && R > w.relativeDy) && (H += 1e3);
            const O = L + H;
            O < m && (m = O, f = M, y = S);
          } else {
            const B = (h + w.width) / 2 + 20;
            let T = 0, A = 0;
            if (w.relativeDx !== 0 || w.relativeDy !== 0) {
              const I = w.relativeDx > 0 ? -1 : 1, _ = w.relativeDy > 0 ? -1 : 1;
              T = I * B, A = _ * B;
            } else {
              const I = Math.random() * Math.PI * 2;
              T = Math.cos(I) * B, A = Math.sin(I) * B;
            }
            const M = n + T, S = r + A, L = Math.sqrt(
              Math.pow(M - u, 2) + Math.pow(S - a, 2)
            );
            L < m && (m = L, f = M, y = S);
          }
        }
      if (!p)
        break;
      n = f, r = y;
    }
    return { x: n, y: r };
  }
  /**
   * Group edges by node pair
   * Group by undirected pair key (minId||maxId) and generate EdgePair
   */
  groupEdgesByPair(t) {
    const e = /* @__PURE__ */ new Map();
    for (const s of t) {
      const [i, o] = s.src < s.dst ? [s.src, s.dst] : [s.dst, s.src], l = `${i}||${o}`;
      let n = e.get(l);
      n || (n = {
        key: l,
        a: i,
        b: o,
        edges: []
      }, e.set(l, n)), n.edges.push(s), s.src === i && s.dst === o ? (s.srcAnchor && !n.srcAnchor && (n.srcAnchor = s.srcAnchor), s.dstAnchor && !n.dstAnchor && (n.dstAnchor = s.dstAnchor), s.bends && !n.bends && (n.bends = s.bends)) : (s.srcAnchor && !n.dstAnchor && (n.dstAnchor = s.srcAnchor), s.dstAnchor && !n.srcAnchor && (n.srcAnchor = s.dstAnchor), s.bends && !n.bends && (n.bends = s.bends));
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
    const e = this.nodes.find((f) => f.id === t.a), s = this.nodes.find((f) => f.id === t.b);
    if (!e?.position || !s?.position)
      return "";
    const i = t.srcAnchor || this.estimateAnchor(e, s), o = t.dstAnchor || this.estimateAnchor(s, e), l = e.style || {}, n = s.style || {}, r = l.width || this.DEFAULT_NODE_WIDTH, h = l.height || this.DEFAULT_NODE_HEIGHT, c = n.width || this.DEFAULT_NODE_WIDTH, u = n.height || this.DEFAULT_NODE_HEIGHT, a = this.calculateAnchorPosition(e, i, r, h), d = this.calculateAnchorPosition(s, o, c, u), g = [a];
    t.bends && g.push(...t.bends), g.push(d);
    const p = [`M ${g[0].x} ${g[0].y}`];
    for (let f = 1; f < g.length; f++)
      p.push(`L ${g[f].x} ${g[f].y}`);
    return p.join(" ");
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
    const o = t.position.x, l = t.position.y, n = s || t.style?.width || this.DEFAULT_NODE_WIDTH, r = i || t.style?.height || this.DEFAULT_NODE_HEIGHT;
    let h = 0, c = 0;
    switch (e.side) {
      case "top":
        h = o - n / 2 + n * e.t, c = l - r / 2;
        break;
      case "right":
        h = o + n / 2, c = l - r / 2 + r * e.t;
        break;
      case "bottom":
        h = o - n / 2 + n * e.t, c = l + r / 2;
        break;
      case "left":
        h = o - n / 2, c = l - r / 2 + r * e.t;
        break;
    }
    return { x: h, y: c };
  }
  /**
   * Auto-estimate anchor
   * Calculate side and position closest to direction from node center to target node
   */
  estimateAnchor(t, e) {
    if (!t.position || !e.position)
      return { side: "right", t: 0.5 };
    const s = t.style || {}, i = s.width || this.DEFAULT_NODE_WIDTH, o = s.height || this.DEFAULT_NODE_HEIGHT, l = e.position.x - t.position.x, n = e.position.y - t.position.y, r = Math.atan2(n, l), h = r < 0 ? r + 2 * Math.PI : r;
    let c, u;
    return h >= 7 * Math.PI / 4 || h < Math.PI / 4 ? (c = "right", u = 0.5 + n / o * 0.5) : h >= Math.PI / 4 && h < 3 * Math.PI / 4 ? (c = "bottom", u = 0.5 + l / i * 0.5) : h >= 3 * Math.PI / 4 && h < 5 * Math.PI / 4 ? (c = "left", u = 0.5 - n / o * 0.5) : (c = "top", u = 0.5 - l / i * 0.5), u = Math.max(0, Math.min(1, u)), { side: c, t: u };
  }
  /**
   * Get edge point array [start, ...bends, end]
   */
  getEdgePoints(t) {
    const e = this.nodes.find((p) => p.id === t.src), s = this.nodes.find((p) => p.id === t.dst);
    if (!e?.position || !s?.position)
      return [];
    const i = t.srcAnchor || this.estimateAnchor(e, s), o = t.dstAnchor || this.estimateAnchor(s, e), l = e.style || {}, n = s.style || {}, r = l.width || this.DEFAULT_NODE_WIDTH, h = l.height || this.DEFAULT_NODE_HEIGHT, c = n.width || this.DEFAULT_NODE_WIDTH, u = n.height || this.DEFAULT_NODE_HEIGHT, a = this.calculateAnchorPosition(e, i, r, h), d = this.calculateAnchorPosition(s, o, c, u), g = [a];
    return t.bends && g.push(...t.bends), g.push(d), g;
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
    const e = this.edges.find((h) => h.id === t);
    if (!e)
      return;
    const [s, i] = e.src < e.dst ? [e.src, e.dst] : [e.dst, e.src], o = `${s}||${i}`, l = this.groupEdgesByPair(this.edges).find((h) => h.key === o);
    if (!l)
      return;
    const n = ["top", "right", "bottom", "left"], r = (h) => {
      const c = n.indexOf(h);
      return n[(c + 1) % 4];
    };
    l.srcAnchor && (l.srcAnchor.side = r(l.srcAnchor.side)), l.dstAnchor && (l.dstAnchor.side = r(l.dstAnchor.side));
    for (const h of l.edges)
      h.src === l.a && h.dst === l.b ? (h.srcAnchor = l.srcAnchor, h.dstAnchor = l.dstAnchor) : (h.srcAnchor = l.dstAnchor, h.dstAnchor = l.srcAnchor);
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
    const [e, s] = t.src < t.dst ? [t.src, t.dst] : [t.dst, t.src], i = `${e}||${s}`, o = this.groupEdgesByPair(this.edges).find((m) => m.key === i);
    if (!o)
      return;
    const l = this.nodes.find((m) => m.id === o.a), n = this.nodes.find((m) => m.id === o.b);
    if (!l || !n)
      return;
    const r = o.srcAnchor || this.estimateAnchor(l, n), h = o.dstAnchor || this.estimateAnchor(n, l), c = l.style || {}, u = n.style || {}, a = c.width || this.DEFAULT_NODE_WIDTH, d = c.height || this.DEFAULT_NODE_HEIGHT, g = u.width || this.DEFAULT_NODE_WIDTH, p = u.height || this.DEFAULT_NODE_HEIGHT, f = this.calculateAnchorPosition(l, r, a, d), y = this.calculateAnchorPosition(n, h, g, p);
    this.createAnchorHandle(t.id, "src", f.x, f.y), this.createAnchorHandle(t.id, "dst", y.x, y.y), this.anchorHandlesGroup.style.display = "block", this.anchorHandlesGroup.style.pointerEvents = "auto";
  }
  /**
   * Update bend point handles
   */
  updateBendHandles() {
    if (this.bendHandles.clear(), this.bendHandlesGroup.innerHTML = "", !this.selectedEdgeId || this.mode !== "edit") {
      this.bendHandlesGroup.style.display = "none", this.updateControlButtons();
      return;
    }
    const t = this.edges.find((l) => l.id === this.selectedEdgeId);
    if (!t) {
      this.updateControlButtons();
      return;
    }
    const [e, s] = t.src < t.dst ? [t.src, t.dst] : [t.dst, t.src], i = `${e}||${s}`, o = this.groupEdgesByPair(this.edges).find((l) => l.key === i);
    if (!o || !o.bends || o.bends.length === 0) {
      this.bendHandlesGroup.style.display = "none", this.updateControlButtons();
      return;
    }
    o.bends.forEach((l, n) => {
      this.createBendHandle(t.id, n, l.x, l.y);
    }), this.bendHandlesGroup.style.display = "block", this.bendHandlesGroup.style.pointerEvents = "auto", this.updateControlButtons();
  }
  /**
   * Create anchor handle
   */
  createAnchorHandle(t, e, s, i) {
    const o = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    o.setAttribute("cx", String(s)), o.setAttribute("cy", String(i)), o.setAttribute("r", String(this.HANDLE_RADIUS)), o.setAttribute("fill", "#2196f3"), o.setAttribute("stroke", "#fff"), o.setAttribute("stroke-width", "2"), o.setAttribute("data-edge-id", t), o.setAttribute("data-handle-type", e), o.style.cursor = "move", this.anchorHandles.set(e, o), this.anchorHandlesGroup.appendChild(o);
  }
  /**
   * Create bend point handle
   */
  createBendHandle(t, e, s, i) {
    const o = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    o.setAttribute("cx", String(s)), o.setAttribute("cy", String(i)), o.setAttribute("r", String(this.BEND_HANDLE_RADIUS)), o.setAttribute("fill", "#ff9800"), o.setAttribute("stroke", "#fff"), o.setAttribute("stroke-width", "2"), o.setAttribute("data-edge-id", t), o.setAttribute("data-bend-index", String(e)), o.style.cursor = "move", this.bendHandles.set(e, o), this.bendHandlesGroup.appendChild(o);
  }
  /**
   * Update node position (during drag)
   */
  updateNodePosition(t) {
    if (!this.draggingNode)
      return;
    const e = this.nodes.find((l) => l.id === this.draggingNode.nodeId);
    if (!e)
      return;
    const s = this.screenToSvg(t.clientX, t.clientY), i = s.x, o = s.y;
    e.position || (e.position = { x: 0, y: 0 }), e.position.x = i - this.draggingNode.offsetX, e.position.y = o - this.draggingNode.offsetY, this.updateGroupLayouts(e.id, void 0), this.render(), this.updateAnchorHandles(), this.updateBendHandles();
  }
  /**
   * Update node size (during resize)
   */
  updateNodeSize(t) {
    if (!this.resizingNode)
      return;
    const e = this.nodes.find((h) => h.id === this.resizingNode.nodeId);
    if (!e?.position)
      return;
    const s = this.screenToSvg(t.clientX, t.clientY), i = s.x, o = s.y;
    e.style || (e.style = {});
    const l = i - this.resizingNode.startX, n = o - this.resizingNode.startY;
    switch (this.resizingNode.side) {
      case "right": {
        const h = Math.max(60, this.resizingNode.startWidth + l);
        e.style.width = h, e.position.x = this.resizingNode.startNodeX + l / 2;
        break;
      }
      case "left": {
        const h = Math.max(60, this.resizingNode.startWidth - l);
        e.style.width = h, e.position.x = this.resizingNode.startNodeX + l / 2;
        break;
      }
      case "bottom": {
        const h = Math.max(40, this.resizingNode.startHeight + n);
        e.style.height = h, e.position.y = this.resizingNode.startNodeY + n / 2;
        break;
      }
      case "top": {
        const h = Math.max(40, this.resizingNode.startHeight - n);
        e.style.height = h, e.position.y = this.resizingNode.startNodeY + n / 2;
        break;
      }
    }
    const r = this.nodeElements.get(e.id);
    if (r) {
      const h = e.style || {}, c = h.width || this.DEFAULT_NODE_WIDTH, u = h.height || this.DEFAULT_NODE_HEIGHT, a = e.position.x - c / 2, d = e.position.y - u / 2;
      r.setAttribute("x", String(a)), r.setAttribute("y", String(d)), r.setAttribute("width", String(c)), r.setAttribute("height", String(u));
      const g = r.parentElement;
      if (g) {
        const p = g.querySelector("foreignObject");
        if (p) {
          const f = e.style || {}, y = f.width || this.DEFAULT_NODE_WIDTH, m = f.height || this.DEFAULT_NODE_HEIGHT, w = e.position.x - y / 2, b = e.position.y - m / 2;
          p.setAttribute("x", String(w)), p.setAttribute("y", String(b));
        }
        e.position && g.querySelectorAll("[data-resize-side]").forEach((y) => {
          const m = y.getAttribute("data-resize-side");
          m === "top" ? (y.setAttribute("cx", String(e.position.x)), y.setAttribute("cy", String(e.position.y - u / 2))) : m === "right" ? (y.setAttribute("cx", String(e.position.x + c / 2)), y.setAttribute("cy", String(e.position.y))) : m === "bottom" ? (y.setAttribute("cx", String(e.position.x)), y.setAttribute("cy", String(e.position.y + u / 2))) : m === "left" && (y.setAttribute("cx", String(e.position.x - c / 2)), y.setAttribute("cy", String(e.position.y)));
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
        meta: t.meta ? { ...t.meta } : void 0
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
      meta: t.meta ? { ...t.meta } : void 0
    })), this.render(), this.deselectEdge());
  }
  /**
   * Update anchor position (during drag)
   */
  updateAnchorPosition(t) {
    if (!this.draggingAnchor)
      return;
    const e = this.edges.find((C) => C.id === this.draggingAnchor.edgeId);
    if (!e)
      return;
    const [s, i] = e.src < e.dst ? [e.src, e.dst] : [e.dst, e.src], o = `${s}||${i}`, l = this.groupEdgesByPair(this.edges).find((C) => C.key === o);
    if (!l)
      return;
    const n = this.draggingAnchor.type === "src" ? l.a : l.b, r = this.nodes.find((C) => C.id === n);
    if (!r?.position)
      return;
    const h = this.screenToSvg(t.clientX, t.clientY), c = h.x - this.draggingAnchor.offsetX, u = h.y - this.draggingAnchor.offsetY, a = r.position.x, d = r.position.y, g = r.style || {}, p = g.width || this.DEFAULT_NODE_WIDTH, f = g.height || this.DEFAULT_NODE_HEIGHT, y = {
      top: Math.abs(u - (d - f / 2)),
      right: Math.abs(c - (a + p / 2)),
      bottom: Math.abs(u - (d + f / 2)),
      left: Math.abs(c - (a - p / 2))
    };
    let m = "right", w = y.right;
    for (const [C, E] of Object.entries(y))
      E < w && (w = E, m = C);
    let b = 0.5;
    switch (m) {
      case "top":
      case "bottom":
        b = (c - (a - p / 2)) / p;
        break;
      case "left":
      case "right":
        b = (u - (d - f / 2)) / f;
        break;
    }
    b = Math.max(0, Math.min(1, b)), this.draggingAnchor.type === "src" ? l.srcAnchor = { side: m, t: b } : l.dstAnchor = { side: m, t: b };
    for (const C of l.edges)
      C.src === l.a && C.dst === l.b ? (C.srcAnchor = l.srcAnchor, C.dstAnchor = l.dstAnchor) : (C.srcAnchor = l.dstAnchor, C.dstAnchor = l.srcAnchor);
    this.render(), this.updateAnchorHandles(), this.updateBendHandles();
  }
  /**
   * Update bend point position (during drag)
   */
  updateBendPosition(t) {
    if (!this.draggingBend)
      return;
    const e = this.edges.find((u) => u.id === this.draggingBend.edgeId);
    if (!e)
      return;
    const [s, i] = e.src < e.dst ? [e.src, e.dst] : [e.dst, e.src], o = `${s}||${i}`, l = this.groupEdgesByPair(this.edges).find((u) => u.key === o);
    if (!l || !l.bends)
      return;
    const n = this.draggingBend.bendIndex;
    if (n < 0 || n >= l.bends.length)
      return;
    const r = this.screenToSvg(t.clientX, t.clientY), h = r.x - this.draggingBend.offsetX, c = r.y - this.draggingBend.offsetY;
    l.bends[n] = { x: h, y: c };
    for (const u of l.edges)
      u.bends = [...l.bends];
    this.render(), this.updateBendHandles();
  }
  /**
   * Insert bend point (on double click/tap)
   */
  insertBendPoint(t, e) {
    const s = this.edges.find((S) => S.id === t);
    if (!s)
      return;
    const [i, o] = s.src < s.dst ? [s.src, s.dst] : [s.dst, s.src], l = `${i}||${o}`, n = this.groupEdgesByPair(this.edges).find((S) => S.key === l);
    if (!n)
      return;
    const r = this.svg.getBoundingClientRect(), h = e.clientX - r.left, c = e.clientY - r.top, u = [], a = this.nodes.find((S) => S.id === n.a), d = this.nodes.find((S) => S.id === n.b);
    if (!a?.position || !d?.position)
      return;
    const g = n.srcAnchor || this.estimateAnchor(a, d), p = n.dstAnchor || this.estimateAnchor(d, a), f = a.style || {}, y = d.style || {}, m = f.width || this.DEFAULT_NODE_WIDTH, w = f.height || this.DEFAULT_NODE_HEIGHT, b = y.width || this.DEFAULT_NODE_WIDTH, C = y.height || this.DEFAULT_NODE_HEIGHT, E = this.calculateAnchorPosition(a, g, m, w), v = this.calculateAnchorPosition(d, p, b, C);
    u.push(E), n.bends && u.push(...n.bends), u.push(v);
    let x = 0, B = 1 / 0;
    for (let S = 0; S < u.length - 1; S++) {
      const L = u[S], I = u[S + 1], _ = this.pointToLineSegmentDistance(h, c, L.x, L.y, I.x, I.y);
      _ < B && (B = _, x = S);
    }
    const T = u[x], A = u[x + 1], M = {
      x: (T.x + A.x) / 2,
      y: (T.y + A.y) / 2
    };
    n.bends || (n.bends = []), n.bends.splice(x, 0, M);
    for (const S of n.edges)
      S.bends = [...n.bends];
    this.selectedEdgeId !== t && this.selectEdge(t, !1), this.render(), this.updateBendHandles();
  }
  /**
   * Calculate distance from point to line segment
   */
  pointToLineSegmentDistance(t, e, s, i, o, l) {
    const n = o - s, r = l - i, h = n * n + r * r;
    if (h === 0)
      return Math.sqrt((t - s) ** 2 + (e - i) ** 2);
    const c = Math.max(0, Math.min(1, ((t - s) * n + (e - i) * r) / h)), u = s + c * n, a = i + c * r;
    return Math.sqrt((t - u) ** 2 + (e - a) ** 2);
  }
  /**
   * Delete nearest bend point (on Delete/Backspace)
   * Also implements View interface deleteNearestBendPoint method
   */
  deleteNearestBendPoint() {
    if (!this.selectedEdgeId)
      return;
    const t = this.edges.find((l) => l.id === this.selectedEdgeId);
    if (!t)
      return;
    const [e, s] = t.src < t.dst ? [t.src, t.dst] : [t.dst, t.src], i = `${e}||${s}`, o = this.groupEdgesByPair(this.edges).find((l) => l.key === i);
    if (!(!o || !o.bends || o.bends.length === 0)) {
      o.bends.pop(), o.bends.length === 0 && delete o.bends;
      for (const l of o.edges)
        o.bends ? l.bends = [...o.bends] : delete l.bends;
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
      const s = e.edges.some((C) => C.id === this.selectedEdgeId), i = this.mode === "view" && e.key === this.hoveredEdgePairKey, o = this.mode === "view" && e.key === this.tappedEdgePairKey, l = this.alwaysShowEdges || s || i || o, r = e.edges[0].style || {}, h = r.color || this.EDGE_DEFAULT_COLOR, c = r.weight || 1, u = Math.max(this.EDGE_MIN_WEIGHT, Math.min(this.EDGE_MAX_WEIGHT, c)), a = this.EDGE_DEFAULT_WIDTH + (u - 1) * 0.5, d = l ? Math.max(a, this.EDGE_HOVER_WIDTH) : a, g = s ? "#2196f3" : h, p = l ? 1 : 0.3, f = this.calculateEdgePairPath(e);
      if (!f)
        continue;
      const y = document.createElementNS("http://www.w3.org/2000/svg", "path");
      y.setAttribute("d", f), y.setAttribute("stroke", "transparent"), y.setAttribute("stroke-width", String(this.HIT_PATH_WIDTH)), y.setAttribute("fill", "none"), y.setAttribute("data-hit-edge-pair-key", e.key), y.style.cursor = "pointer", y.style.pointerEvents = "stroke", this.edgesGroup.appendChild(y);
      const m = document.createElementNS("http://www.w3.org/2000/svg", "path");
      m.setAttribute("d", f), m.setAttribute("stroke", g), m.setAttribute("stroke-width", String(d)), m.setAttribute("stroke-opacity", String(p)), m.setAttribute("fill", "none"), m.setAttribute("data-edge-pair-key", e.key), m.style.pointerEvents = "none", m.style.transition = "stroke-opacity 0.2s, stroke-width 0.2s";
      const w = this.getEdgePairMarkerAttributes(e);
      if (w.markerStart && m.setAttribute("marker-start", w.markerStart), w.markerEnd && m.setAttribute("marker-end", w.markerEnd), this.edgeElements.set(e.key, m), this.edgesGroup.appendChild(m), this.mode === "view")
        this.setupEdgeInteraction(y, e, r);
      else if (this.mode === "edit") {
        this.setupEdgeInteractionForEdit(y, e);
        const C = e.key;
        y.addEventListener("click", (E) => {
          const v = this.edgeClickTimers.get(y);
          if (v != null) {
            clearTimeout(v), this.edgeClickTimers.set(y, null);
            return;
          }
          const x = window.setTimeout(() => {
            if (this.edgeClickTimers.set(y, null), this.mode === "edit") {
              const B = this.groupEdgesByPair(this.edges).find((T) => T.key === C);
              B && B.edges.length > 0 && (this.selectEdge(B.edges[0].id, E.shiftKey), this.render());
            }
          }, 300);
          this.edgeClickTimers.set(y, x);
        });
      }
      const b = e.key;
      y.addEventListener("dblclick", (C) => {
        if (this.mode !== "edit")
          return;
        const E = this.edgeClickTimers.get(y);
        E != null && (clearTimeout(E), this.edgeClickTimers.set(y, null));
        const v = this.groupEdgesByPair(this.edges).find((x) => x.key === b);
        v && v.edges.length > 0 && (this.insertBendPoint(v.edges[0].id, C), C.preventDefault(), C.stopPropagation());
      }), l && this.renderEdgeLabels(e, r);
    }
    this.renderGroups();
    for (const e of this.nodes) {
      if (!e.position)
        continue;
      const s = e.style || {}, i = s.width || this.DEFAULT_NODE_WIDTH, o = s.height || this.DEFAULT_NODE_HEIGHT, l = s.color || "#fff", n = s.borderColor || "#333", r = document.createElementNS("http://www.w3.org/2000/svg", "g");
      r.setAttribute("data-node-id", e.id);
      const h = document.createElementNS("http://www.w3.org/2000/svg", "rect"), c = e.position.x - i / 2, u = e.position.y - o / 2;
      h.setAttribute("x", String(c)), h.setAttribute("y", String(u)), h.setAttribute("width", String(i)), h.setAttribute("height", String(o));
      const a = l.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
      if (a) {
        const f = parseInt(a[1], 16), y = parseInt(a[2], 16), m = parseInt(a[3], 16);
        h.setAttribute("fill", `rgba(${f}, ${y}, ${m}, 0.5)`);
      } else
        h.setAttribute("fill", l);
      const d = this.selectedNodeId === e.id;
      h.setAttribute("stroke", d ? "#2196f3" : n), h.setAttribute("stroke-width", d ? "4" : "2"), h.setAttribute("rx", "4"), h.style.cursor = this.mode === "view" ? "pointer" : "move";
      const g = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
      g.setAttribute("x", String(c)), g.setAttribute("y", String(u)), g.setAttribute("width", String(i)), g.setAttribute("height", String(o));
      const p = document.createElement("div");
      p.style.width = "100%", p.style.height = "100%", p.style.display = "flex", p.style.alignItems = "flex-start", p.style.justifyContent = "center", p.style.textAlign = "center", p.style.fontSize = "14px", p.style.color = "#333", p.style.padding = "4px", p.style.wordWrap = "break-word", p.style.overflowWrap = "break-word", p.style.whiteSpace = "normal", p.style.overflow = "hidden", p.style.textOverflow = "ellipsis", p.textContent = e.label, g.appendChild(p), r.appendChild(h), r.appendChild(g), this.mode === "edit" && this.addResizeHandles(r, e, i, o), this.nodesGroup.appendChild(r), this.nodeElements.set(e.id, h), this.mode === "view" && this.onNodeClick && r.addEventListener("click", (f) => {
        f.stopPropagation(), f.preventDefault();
        const y = this.svg.getBoundingClientRect(), m = f.clientX - y.left, w = f.clientY - y.top;
        this.onNodeClick({
          node: e,
          position: { x: m, y: w },
          originalEvent: f
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
    let l = 1 / 0, n = -1 / 0, r = 1 / 0, h = -1 / 0, c = !1;
    const u = e ? this.groups.some((p) => p.parentId === e) : !1, a = /* @__PURE__ */ new Set();
    if (u && e) {
      const p = this.groups.filter((f) => f.parentId === e);
      for (const f of p) {
        const y = (m) => {
          for (const b of m.nodeIds)
            a.add(b);
          const w = this.groups.filter((b) => b.parentId === m.id);
          for (const b of w)
            y(b);
        };
        y(f);
      }
    }
    for (const p of t) {
      if (u && a.has(p))
        continue;
      const f = this.nodes.find((x) => x.id === p);
      if (!f || !f.position)
        continue;
      c = !0;
      const y = f.style || {}, m = y.width || this.DEFAULT_NODE_WIDTH, w = y.height || this.DEFAULT_NODE_HEIGHT, b = f.position.x - m / 2, C = f.position.x + m / 2, E = f.position.y - w / 2, v = f.position.y + w / 2;
      l = Math.min(l, b), n = Math.max(n, C), r = Math.min(r, E), h = Math.max(h, v);
    }
    if (u && e) {
      const p = this.groups.filter((f) => f.parentId === e);
      for (const f of p) {
        const y = this.getGroupLayout(f);
        if (y) {
          c = !0;
          const m = y.position.x, w = y.position.x + y.size.width, b = y.position.y, C = y.position.y + y.size.height;
          l = Math.min(l, m), n = Math.max(n, w), r = Math.min(r, b), h = Math.max(h, C);
        }
      }
    }
    if (!c)
      return null;
    const d = u ? 50 : 30, g = d + 25;
    return {
      minX: l - d,
      maxX: n + d,
      minY: r - g,
      // Extra top padding for label
      maxY: h + d
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
      const i = (o) => {
        if (!o.parentId) return 0;
        const l = this.groups.find((n) => n.id === o.parentId);
        return l ? 1 + i(l) : 0;
      };
      return i(e) - i(s);
    });
    for (const e of t) {
      let s = this.getGroupLayout(e);
      if (s)
        e.layout || (e.layout = s);
      else {
        const n = this.calculateGroupBounds(e.nodeIds, e.id);
        if (n)
          s = {
            position: { x: n.minX, y: n.minY },
            size: { width: n.maxX - n.minX, height: n.maxY - n.minY }
          }, e.layout = s;
        else
          continue;
      }
      const i = document.createElementNS("http://www.w3.org/2000/svg", "g");
      i.setAttribute("data-group-id", e.id), i.setAttribute("class", "group");
      const o = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      o.setAttribute("x", String(s.position.x)), o.setAttribute("y", String(s.position.y)), o.setAttribute("width", String(s.size.width)), o.setAttribute("height", String(s.size.height)), o.setAttribute("fill", "rgba(200, 200, 200, 0.1)"), o.setAttribute("stroke", "#999"), o.setAttribute("stroke-width", "2"), o.setAttribute("stroke-dasharray", "5,5"), o.setAttribute("rx", "4"), o.style.pointerEvents = "auto", o.style.cursor = this.mode === "edit" ? "move" : "pointer";
      const l = document.createElementNS("http://www.w3.org/2000/svg", "text");
      l.setAttribute("x", String(s.position.x + 10)), l.setAttribute("y", String(s.position.y + 25)), l.setAttribute("font-size", "14"), l.setAttribute("font-weight", "bold"), l.setAttribute("fill", "#666"), l.textContent = e.label, l.style.pointerEvents = "none", i.appendChild(o), i.appendChild(l), this.mode === "edit" && this.setupGroupEditInteractions(i, e, o), this.mode === "view" && this.onGroupClick && i.addEventListener("click", (n) => {
        if (n.target.getAttribute("data-resize-side"))
          return;
        n.stopPropagation(), n.preventDefault();
        const h = this.svg.getBoundingClientRect(), c = n.clientX - h.left, u = n.clientY - h.top;
        this.onGroupClick({
          group: e,
          position: { x: c, y: u },
          originalEvent: n
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
    const i = /* @__PURE__ */ new Set(), o = s && e ? e : null;
    if (t) {
      const n = this.groups.filter((r) => r.nodeIds.includes(t));
      n.forEach((r) => i.add(r));
      for (const r of n)
        this.addParentGroupsToUpdate(r, i);
    }
    if (e) {
      const n = this.groups.find((r) => r.id === e);
      n && (s || i.add(n), this.addParentGroupsToUpdate(n, i));
    }
    const l = Array.from(i).sort((n, r) => {
      const h = (c) => {
        if (!c.parentId) return 0;
        const u = this.groups.find((a) => a.id === c.parentId);
        return u ? 1 + h(u) : 0;
      };
      return h(r) - h(n);
    });
    for (const n of l) {
      if (o && n.id === o)
        continue;
      const r = this.calculateGroupBounds(n.nodeIds, n.id);
      r && (n.layout || (n.layout = {
        position: { x: 0, y: 0 },
        size: { width: 0, height: 0 }
      }), n.layout.position.x = r.minX, n.layout.position.y = r.minY, n.layout.size.width = r.maxX - r.minX, n.layout.size.height = r.maxY - r.minY);
    }
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
    const i = this.groups.filter((o) => o.parentId === t);
    for (const o of i) {
      o.layout && (o.layout.position.x += e, o.layout.position.y += s);
      for (const l of o.nodeIds) {
        const n = this.nodes.find((r) => r.id === l);
        n && n.position && (n.position.x += e, n.position.y += s);
      }
      this.moveDescendantGroups(o.id, e, s);
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
      const l = this.screenToSvg(i.clientX, i.clientY), n = l.x, r = l.y;
      if (!e.layout)
        return;
      const h = e.layout.position.x, c = e.layout.position.y;
      this.draggingGroup = {
        groupId: e.id,
        offsetX: n - h,
        offsetY: r - c
      }, s.style.cursor = "grabbing";
    }), this.addGroupResizeHandles(t, e, s));
  }
  /**
   * Add resize handles to group
   */
  addGroupResizeHandles(t, e, s) {
    if (!e.layout)
      return;
    const i = 12, o = ["top", "right", "bottom", "left"];
    for (const l of o) {
      const n = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      n.setAttribute("r", String(i / 2)), n.setAttribute("fill", "#2196f3"), n.setAttribute("stroke", "#fff"), n.setAttribute("stroke-width", "2"), n.setAttribute("data-resize-side", l), n.setAttribute("data-group-id", e.id), n.style.cursor = this.getResizeCursor(l), n.style.pointerEvents = "auto";
      const r = e.layout.position.x, h = e.layout.position.y, c = e.layout.size.width, u = e.layout.size.height;
      switch (l) {
        case "top":
          n.setAttribute("cx", String(r + c / 2)), n.setAttribute("cy", String(h));
          break;
        case "right":
          n.setAttribute("cx", String(r + c)), n.setAttribute("cy", String(h + u / 2));
          break;
        case "bottom":
          n.setAttribute("cx", String(r + c / 2)), n.setAttribute("cy", String(h + u));
          break;
        case "left":
          n.setAttribute("cx", String(r)), n.setAttribute("cy", String(h + u / 2));
          break;
      }
      n.addEventListener("pointerdown", (a) => {
        if (this.mode !== "edit")
          return;
        a.stopPropagation(), a.preventDefault(), n.setPointerCapture(a.pointerId);
        const d = this.screenToSvg(a.clientX, a.clientY), g = d.x, p = d.y;
        e.layout && (this.resizingGroup = {
          groupId: e.id,
          side: l,
          startX: g,
          startY: p,
          startWidth: e.layout.size.width,
          startHeight: e.layout.size.height,
          startPosX: e.layout.position.x,
          startPosY: e.layout.position.y
        });
      }), t.appendChild(n);
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
      const o = s.edges.some((m) => m.id === this.selectedEdgeId), l = this.mode === "view" && s.key === this.hoveredEdgePairKey, n = this.mode === "view" && s.key === this.tappedEdgePairKey, r = this.alwaysShowEdges || o || l || n, c = s.edges[0].style || {}, u = c.color || this.EDGE_DEFAULT_COLOR, a = c.weight || 1, d = Math.max(this.EDGE_MIN_WEIGHT, Math.min(this.EDGE_MAX_WEIGHT, a)), g = this.EDGE_DEFAULT_WIDTH + (d - 1) * 0.5, p = r ? Math.max(g, this.EDGE_HOVER_WIDTH) : g, f = o ? "#2196f3" : u, y = r ? 1 : 0.3;
      i.setAttribute("stroke", f), i.setAttribute("stroke-width", String(p)), i.setAttribute("stroke-opacity", String(y)), r ? (this.edgeLabelsGroup.querySelectorAll(`[data-edge-pair-key="${s.key}"]`).forEach((w) => w.remove()), this.renderEdgeLabels(s, c)) : this.edgeLabelsGroup.querySelectorAll(`[data-edge-pair-key="${s.key}"]`).forEach((w) => w.remove());
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
        const o = this.screenToSvg(i.clientX, i.clientY), l = e.edges[0];
        this.onEdgeClick({
          edge: l,
          position: { x: o.x, y: o.y },
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
    const o = [
      { side: "top", x: e.position.x, y: e.position.y - i / 2 },
      { side: "right", x: e.position.x + s / 2, y: e.position.y },
      { side: "bottom", x: e.position.x, y: e.position.y + i / 2 },
      { side: "left", x: e.position.x - s / 2, y: e.position.y }
    ];
    for (const l of o) {
      const n = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      n.setAttribute("cx", String(l.x)), n.setAttribute("cy", String(l.y)), n.setAttribute("r", "6"), n.setAttribute("fill", "#4CAF50"), n.setAttribute("stroke", "#fff"), n.setAttribute("stroke-width", "2"), n.setAttribute("data-resize-side", l.side), n.setAttribute("data-node-id", e.id), n.style.cursor = this.getResizeCursor(l.side), n.style.pointerEvents = "auto", t.appendChild(n);
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
    const e = this.groups.find((a) => a.id === this.draggingGroup.groupId);
    if (!e || !e.layout)
      return;
    const s = this.screenToSvg(t.clientX, t.clientY), i = s.x, o = s.y, l = i - this.draggingGroup.offsetX, n = o - this.draggingGroup.offsetY, r = l - e.layout.position.x, h = n - e.layout.position.y, c = /* @__PURE__ */ new Set(), u = this.groups.filter((a) => a.parentId === e.id);
    for (const a of u)
      for (const d of a.nodeIds)
        c.add(d);
    for (const a of e.nodeIds)
      if (!c.has(a)) {
        const d = this.nodes.find((g) => g.id === a);
        d && d.position && (d.position.x += r, d.position.y += h);
      }
    this.moveDescendantGroups(e.id, r, h), e.layout.position.x = l, e.layout.position.y = n, this.updateGroupLayouts(void 0, e.id, !0), this.render(), this.updateAnchorHandles(), this.updateBendHandles();
  }
  /**
   * Update group size (during resize)
   */
  updateGroupSize(t) {
    if (!this.resizingGroup)
      return;
    const e = this.groups.find((h) => h.id === this.resizingGroup.groupId);
    if (!e || !e.layout)
      return;
    const s = this.screenToSvg(t.clientX, t.clientY), i = s.x, o = s.y, l = i - this.resizingGroup.startX, n = o - this.resizingGroup.startY;
    switch (this.resizingGroup.side) {
      case "right": {
        const h = Math.max(100, this.resizingGroup.startWidth + l);
        e.layout.size.width = h;
        break;
      }
      case "left": {
        const h = Math.max(100, this.resizingGroup.startWidth - l);
        e.layout.size.width = h, e.layout.position.x = this.resizingGroup.startPosX + l;
        break;
      }
      case "bottom": {
        const h = Math.max(100, this.resizingGroup.startHeight + n);
        e.layout.size.height = h;
        break;
      }
      case "top": {
        const h = Math.max(100, this.resizingGroup.startHeight - n);
        e.layout.size.height = h, e.layout.position.y = this.resizingGroup.startPosY + n;
        break;
      }
    }
    const r = this.groupsGroup.querySelector(`[data-group-id="${e.id}"]`);
    if (r) {
      const h = r.querySelector("rect");
      if (h && (h.setAttribute("x", String(e.layout.position.x)), h.setAttribute("y", String(e.layout.position.y)), h.setAttribute("width", String(e.layout.size.width)), h.setAttribute("height", String(e.layout.size.height))), !e.layout)
        return;
      const c = r.querySelectorAll("[data-resize-side]"), u = e.layout;
      c.forEach((d) => {
        const g = d.getAttribute("data-resize-side"), p = u.position.x, f = u.position.y, y = u.size.width, m = u.size.height;
        switch (g) {
          case "top":
            d.setAttribute("cx", String(p + y / 2)), d.setAttribute("cy", String(f));
            break;
          case "right":
            d.setAttribute("cx", String(p + y)), d.setAttribute("cy", String(f + m / 2));
            break;
          case "bottom":
            d.setAttribute("cx", String(p + y / 2)), d.setAttribute("cy", String(f + m));
            break;
          case "left":
            d.setAttribute("cx", String(p)), d.setAttribute("cy", String(f + m / 2));
            break;
        }
      });
      const a = r.querySelector("text");
      a && (a.setAttribute("x", String(e.layout.position.x + 10)), a.setAttribute("y", String(e.layout.position.y + 20)));
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
      const o = i.getTotalLength();
      if (o === 0)
        return document.body.removeChild(s), null;
      const l = i.getPointAtLength(o * e);
      return document.body.removeChild(s), { x: l.x, y: l.y };
    } catch {
      return document.body.removeChild(s), null;
    }
  }
  /**
   * Render edge labels based on relationship directionality
   */
  renderEdgeLabels(t, e) {
    const s = this.nodes.find((E) => E.id === t.a), i = this.nodes.find((E) => E.id === t.b);
    if (!s?.position || !i?.position)
      return;
    const o = s.style || {}, l = i.style || {}, n = o.width || this.DEFAULT_NODE_WIDTH, r = o.height || this.DEFAULT_NODE_HEIGHT, h = l.width || this.DEFAULT_NODE_WIDTH, c = l.height || this.DEFAULT_NODE_HEIGHT, u = t.srcAnchor || this.estimateAnchor(s, i), a = t.dstAnchor || this.estimateAnchor(i, s), d = this.calculateAnchorPosition(s, u, n, r), g = this.calculateAnchorPosition(i, a, h, c), p = this.calculateEdgePairPath(t), f = t.edges.find((E) => E.src === t.a && E.dst === t.b), y = t.edges.find((E) => E.src === t.b && E.dst === t.a), m = f?.style?.label || f?.relType || "", w = y?.style?.label || y?.relType || "", b = m !== w && m && w, C = m === w && m;
    if (b) {
      const v = this.getPointOnPath(p, 0.75), x = this.getPointOnPath(p, 0.25), B = v ? v.x : d.x + (g.x - d.x) * (1 - 0.25), T = v ? v.y : d.y + (g.y - d.y) * (1 - 0.25), A = x ? x.x : d.x + (g.x - d.x) * 0.25, M = x ? x.y : d.y + (g.y - d.y) * 0.25;
      if (m) {
        const S = document.createElementNS("http://www.w3.org/2000/svg", "text");
        S.setAttribute("x", String(B)), S.setAttribute("y", String(T - 8)), S.setAttribute("text-anchor", "middle"), S.setAttribute("dominant-baseline", "middle"), S.setAttribute("font-size", "12"), S.setAttribute("fill", "#333"), S.setAttribute("font-weight", "bold"), S.setAttribute("pointer-events", "none"), S.setAttribute("data-edge-pair-key", t.key);
        const L = document.createElementNS("http://www.w3.org/2000/svg", "rect"), I = m.length * 7;
        L.setAttribute("x", String(B - I / 2 - 4)), L.setAttribute("y", String(T - 16)), L.setAttribute("width", String(I + 8)), L.setAttribute("height", "16"), L.setAttribute("fill", "rgba(255, 255, 255, 0.9)"), L.setAttribute("rx", "2"), L.setAttribute("pointer-events", "none"), L.setAttribute("data-edge-pair-key", t.key), this.edgeLabelsGroup.appendChild(L), S.textContent = m, this.edgeLabelsGroup.appendChild(S);
      }
      if (w) {
        const S = document.createElementNS("http://www.w3.org/2000/svg", "text");
        S.setAttribute("x", String(A)), S.setAttribute("y", String(M - 8)), S.setAttribute("text-anchor", "middle"), S.setAttribute("dominant-baseline", "middle"), S.setAttribute("font-size", "12"), S.setAttribute("fill", "#333"), S.setAttribute("font-weight", "bold"), S.setAttribute("pointer-events", "none"), S.setAttribute("data-edge-pair-key", t.key);
        const L = document.createElementNS("http://www.w3.org/2000/svg", "rect"), I = w.length * 7;
        L.setAttribute("x", String(A - I / 2 - 4)), L.setAttribute("y", String(M - 16)), L.setAttribute("width", String(I + 8)), L.setAttribute("height", "16"), L.setAttribute("fill", "rgba(255, 255, 255, 0.9)"), L.setAttribute("rx", "2"), L.setAttribute("pointer-events", "none"), L.setAttribute("data-edge-pair-key", t.key), this.edgeLabelsGroup.appendChild(L), S.textContent = w, this.edgeLabelsGroup.appendChild(S);
      }
    } else if (C) {
      const E = this.getPointOnPath(p, 0.5), v = E ? E.x : (d.x + g.x) / 2, x = E ? E.y : (d.y + g.y) / 2, B = document.createElementNS("http://www.w3.org/2000/svg", "text");
      B.setAttribute("x", String(v)), B.setAttribute("y", String(x)), B.setAttribute("text-anchor", "middle"), B.setAttribute("dominant-baseline", "middle"), B.setAttribute("data-edge-pair-key", t.key), B.setAttribute("font-size", "12"), B.setAttribute("fill", "#333"), B.setAttribute("font-weight", "bold"), B.setAttribute("pointer-events", "none");
      const T = document.createElementNS("http://www.w3.org/2000/svg", "rect"), A = m.length * 7;
      T.setAttribute("x", String(v - A / 2 - 4)), T.setAttribute("y", String(x - 8)), T.setAttribute("width", String(A + 8)), T.setAttribute("height", "16"), T.setAttribute("fill", "rgba(255, 255, 255, 0.9)"), T.setAttribute("rx", "2"), T.setAttribute("pointer-events", "none"), T.setAttribute("data-edge-pair-key", t.key), this.edgeLabelsGroup.appendChild(T), B.textContent = m, this.edgeLabelsGroup.appendChild(B);
    } else if (e.label) {
      const E = this.getPointOnPath(p, 0.5), v = E ? E.x : (d.x + g.x) / 2, x = E ? E.y : (d.y + g.y) / 2, B = document.createElementNS("http://www.w3.org/2000/svg", "text");
      B.setAttribute("x", String(v)), B.setAttribute("y", String(x)), B.setAttribute("text-anchor", "middle"), B.setAttribute("dominant-baseline", "middle"), B.setAttribute("font-size", "12"), B.setAttribute("fill", "#333"), B.setAttribute("font-weight", "bold"), B.setAttribute("pointer-events", "none"), B.setAttribute("data-edge-pair-key", t.key);
      const T = document.createElementNS("http://www.w3.org/2000/svg", "rect"), A = e.label.length * 7;
      T.setAttribute("x", String(v - A / 2 - 4)), T.setAttribute("y", String(x - 8)), T.setAttribute("width", String(A + 8)), T.setAttribute("height", "16"), T.setAttribute("fill", "rgba(255, 255, 255, 0.9)"), T.setAttribute("rx", "2"), T.setAttribute("pointer-events", "none"), T.setAttribute("data-edge-pair-key", t.key), this.edgeLabelsGroup.appendChild(T), B.textContent = e.label, this.edgeLabelsGroup.appendChild(B);
    }
  }
  /**
   * Set mode
   */
  setMode(t) {
    if (!this.editable && t === "edit")
      return;
    const e = this.mode === "edit";
    t === "edit" && this.mode === "view" && this.saveSnapshot(), this.mode = t, this.render(), t === "view" && (this.deselectEdge(), e && this.onSave && this.onSave({
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
    const e = this.edges.find((n) => n.id === t);
    if (!e)
      return !1;
    const [s, i] = e.src < e.dst ? [e.src, e.dst] : [e.dst, e.src], o = `${s}||${i}`, l = this.groupEdgesByPair(this.edges).find((n) => n.key === o);
    return !!(l && l.bends && l.bends.length > 0);
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
      const g = isFinite(this.zoom) && this.zoom > 0 ? this.zoom : 1, p = isFinite(this.offsetX) ? this.offsetX : 0, f = isFinite(this.offsetY) ? this.offsetY : 0, y = (t.position.x + p) * g, m = (t.position.y + f) * g, w = this.popupElement.getBoundingClientRect(), b = w.width || 200, C = w.height || 50, E = y - b / 2, v = m - s * g / 2 - C - 10;
      this.popupElement.style.left = `${E}px`, this.popupElement.style.top = `${v}px`;
      return;
    }
    const o = i.getBoundingClientRect(), l = this.container.getBoundingClientRect(), n = o.left + o.width / 2 - l.left, r = o.top + o.height / 2 - l.top, h = this.popupElement.getBoundingClientRect(), c = h.width || 200, u = h.height || 50, a = n - c / 2, d = r - o.height / 2 - u - 10;
    this.popupElement.style.left = `${a}px`, this.popupElement.style.top = `${d}px`;
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
}
function pt(N, t = 16) {
  return J(), `<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <use href="#${N}"></use>
  </svg>`;
}
class ft {
  // postRender event listener for popup position updates
  constructor(t, e, s, i, o, l) {
    this.viewer = null, this.Cesium = null, this.nodes = [], this.edges = [], this.selectedNodeId = null, this.lastSelectedNodeId = null, this.nodeEntities = /* @__PURE__ */ new Map(), this.edgeEntities = /* @__PURE__ */ new Map(), this.rectEntity = null, this.fitCenterButton = null, this.lightingToggleButton = null, this.alwaysShowEdgesButton = null, this.alwaysShowEdges = !0, this.tileTypeButton = null, this.baseImageryLayer = null, this.timeISO = null, this.customTileUrls = [], this.currentCustomTileIndex = 0, this.popupElement = null, this.popupEntity = null, this.popupUpdateListener = null, this.container = t, this.onNodeClick = e, this.cesiumLoader = s, this.globe3dOptions = i, this.onEdgeClick = l;
    const n = o && o.length > 0 ? o : i?.customTileUrls;
    n && n.length > 0 ? this.customTileUrls = n.map(
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
    const t = this.viewer.canvas, e = this.viewer.scene.camera, s = 5e5, i = 4e7, o = (u) => {
      if (u.ctrlKey) {
        u.preventDefault(), u.stopPropagation();
        const a = 1 - u.deltaY * 0.01, d = this.Cesium.Cartographic.fromCartesian(e.position);
        let p = d.height / a;
        p = Math.max(s, Math.min(i, p));
        const f = this.Cesium.Cartesian3.fromRadians(
          d.longitude,
          d.latitude,
          p
        );
        e.setView({
          destination: f,
          orientation: {
            heading: e.heading,
            pitch: e.pitch,
            roll: e.roll
          }
        });
      }
    };
    let l = 1, n = 0;
    const r = (u) => {
      u.preventDefault(), l = u.scale || 1, n = this.Cesium.Cartographic.fromCartesian(e.position).height;
    }, h = (u) => {
      u.preventDefault();
      const d = (u.scale || 1) / l;
      let g = n / d;
      g = Math.max(s, Math.min(i, g));
      const p = this.Cesium.Cartographic.fromCartesian(e.position), f = this.Cesium.Cartesian3.fromRadians(
        p.longitude,
        p.latitude,
        g
      );
      e.setView({
        destination: f,
        orientation: {
          heading: e.heading,
          pitch: e.pitch,
          roll: e.roll
        }
      });
    }, c = (u) => {
      u.preventDefault(), l = 1, n = 0;
    };
    t.addEventListener("wheel", o, { passive: !1 }), "GestureEvent" in window && (t.addEventListener("gesturestart", r, { passive: !1 }), t.addEventListener("gesturechange", h, { passive: !1 }), t.addEventListener("gestureend", c, { passive: !1 })), this._trackpadPinchHandlers = {
      wheel: o,
      gestureStart: r,
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
    let o = !1, l = !1;
    this.viewer.scene.camera.changed.addEventListener(() => {
      if (o || l)
        return;
      const n = this.viewer.scene.camera, r = this.Cesium.Cartographic.fromCartesian(n.position), h = r.height;
      if (h < t || h > e) {
        o = !0;
        const c = Math.max(t, Math.min(e, h)), u = this.Cesium.Cartesian3.fromRadians(
          r.longitude,
          r.latitude,
          c
        );
        n.setView({
          destination: u,
          orientation: n.orientation
        }), setTimeout(() => {
          o = !1;
        }, 0);
      }
    }), this._isFlying = () => l, this._setIsFlying = (n) => {
      l = n;
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
        const o = s.id.nodeId, l = this.nodes.find((r) => r.id === o), n = this.nodeEntities.get(o);
        if (l && n && (this.showPopup(n, l), this.onNodeClick)) {
          const r = this.viewer.camera.pickEllipsoid(e.position, this.viewer.scene.globe.ellipsoid);
          if (r) {
            const h = this.Cesium.Cartographic.fromCartesian(r), c = this.Cesium.Math.toDegrees(h.longitude), u = this.Cesium.Math.toDegrees(h.latitude);
            this.onNodeClick({
              node: l,
              position: { x: c, y: u },
              originalEvent: e.originalEvent
            });
          }
        }
        return;
      }
      const i = this.viewer.scene.drillPick(e.position);
      for (const o of i)
        if (o.id && o.id.nodeId) {
          const l = o.id.nodeId, n = this.nodes.find((h) => h.id === l), r = this.nodeEntities.get(l);
          if (n && r && (this.showPopup(r, n), this.onNodeClick)) {
            const h = this.viewer.camera.pickEllipsoid(e.position, this.viewer.scene.globe.ellipsoid);
            if (h) {
              const c = this.Cesium.Cartographic.fromCartesian(h), u = this.Cesium.Math.toDegrees(c.longitude), a = this.Cesium.Math.toDegrees(c.latitude);
              this.onNodeClick({
                node: n,
                position: { x: u, y: a },
                originalEvent: e.originalEvent
              });
            }
          }
          return;
        }
      i.length === 0 && this.hidePopup();
      for (const o of i)
        if (o.id && o.id.edgeId) {
          const l = o.id.edgeId, n = this.edges.find((r) => r.id === l);
          if (n && this.onEdgeClick) {
            const r = this.viewer.camera.pickEllipsoid(e.position, this.viewer.scene.globe.ellipsoid);
            if (r) {
              const h = this.Cesium.Cartographic.fromCartesian(r), c = this.Cesium.Math.toDegrees(h.longitude), u = this.Cesium.Math.toDegrees(h.latitude);
              this.onEdgeClick({
                edge: n,
                position: { x: c, y: u },
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
      const [i, o] = e.coordinates;
      if (Number.isFinite(i) && Number.isFinite(o)) {
        const [l, n] = e.coordinates, r = 3e6, h = this.nodeEntities.get(t);
        h && e && this.showPopup(h, e);
        const c = this._setIsFlying;
        c && c(!0), setTimeout(() => {
          this.viewer.camera.flyTo({
            destination: this.Cesium.Cartesian3.fromDegrees(n, l, r),
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
    const s = this.nodes.filter((i) => {
      if (!i.coordinates || !Array.isArray(i.coordinates) || i.coordinates.length !== 2) return !0;
      const [o, l] = i.coordinates;
      return !Number.isFinite(o) || !Number.isFinite(l);
    });
    if (s.length > 0) {
      const r = Math.ceil(Math.sqrt(s.length)), c = 50 / (Math.ceil(s.length / r) + 1), u = 32 / (r + 1), a = s.findIndex((d) => d.id === t);
      if (a >= 0) {
        const d = Math.floor(a / r), g = a % r, p = -50 + (d + 1) * c, f = -32 + (g + 1) * u, y = 3e6, m = this.nodeEntities.get(t);
        m && e && this.showPopup(m, e);
        const w = this._setIsFlying;
        w && w(!0), setTimeout(() => {
          this.viewer.camera.flyTo({
            destination: this.Cesium.Cartesian3.fromDegrees(f, p, y),
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
              w && w(!1);
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
    const t = this.nodes.filter((s) => {
      if (!s.coordinates || !Array.isArray(s.coordinates) || s.coordinates.length !== 2) return !0;
      const [i, o] = s.coordinates;
      return !Number.isFinite(i) || !Number.isFinite(o);
    }), e = this.nodes.filter((s) => {
      if (!s.coordinates || !Array.isArray(s.coordinates) || s.coordinates.length !== 2) return !1;
      const [i, o] = s.coordinates;
      return Number.isFinite(i) && Number.isFinite(o);
    });
    if (t.length > 0) {
      const n = [
        this.Cesium.Cartesian3.fromDegrees(-32, -50, 0),
        this.Cesium.Cartesian3.fromDegrees(0, -50, 0),
        this.Cesium.Cartesian3.fromDegrees(0, 0, 0),
        this.Cesium.Cartesian3.fromDegrees(-32, 0, 0)
      ];
      this.rectEntity = this.viewer.entities.add({
        polygon: {
          hierarchy: n,
          material: this.Cesium.Color.fromCssColorString("#f0f0f0").withAlpha(0.1),
          outline: !0,
          outlineColor: this.Cesium.Color.fromCssColorString("#666"),
          height: 0
        }
      });
      const r = Math.ceil(Math.sqrt(t.length)), c = 50 / (Math.ceil(t.length / r) + 1), u = 32 / (r + 1);
      t.forEach((a, d) => {
        const g = Math.floor(d / r), p = d % r, f = -50 + (g + 1) * c, y = -32 + (p + 1) * u, m = this.selectedNodeId === a.id, w = a.style?.color || "#ffffff", b = m ? "#2196f3" : a.style?.borderColor || "#333333";
        let C;
        const E = w.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
        if (E) {
          const B = parseInt(E[1], 16) / 255, T = parseInt(E[2], 16) / 255, A = parseInt(E[3], 16) / 255;
          C = new this.Cesium.Color(B, T, A, 1);
        } else
          C = this.Cesium.Color.fromCssColorString(w), C = C.withAlpha(1);
        const v = this.Cesium.Color.fromCssColorString(b), x = this.viewer.entities.add({
          position: this.Cesium.Cartesian3.fromDegrees(y, f, 0),
          point: {
            pixelSize: m ? 15 : 10,
            color: C,
            outlineColor: v,
            outlineWidth: 2,
            heightReference: this.Cesium.HeightReference.CLAMP_TO_GROUND
          },
          label: {
            text: a.label,
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
          nodeId: a.id
        });
        this.nodeEntities.set(a.id, x);
      });
    }
    for (const s of e) {
      const [i, o] = s.coordinates, l = this.selectedNodeId === s.id, n = s.style?.color || "#ffffff", r = l ? "#2196f3" : s.style?.borderColor || "#333333";
      let h;
      const c = n.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
      if (c) {
        const d = parseInt(c[1], 16) / 255, g = parseInt(c[2], 16) / 255, p = parseInt(c[3], 16) / 255;
        h = new this.Cesium.Color(d, g, p, 1);
      } else
        h = this.Cesium.Color.fromCssColorString(n), h = h.withAlpha(1);
      const u = this.Cesium.Color.fromCssColorString(r), a = this.viewer.entities.add({
        position: this.Cesium.Cartesian3.fromDegrees(o, i, 0),
        point: {
          pixelSize: l ? 15 : 10,
          color: h,
          // Use node fill color
          outlineColor: u,
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
      this.nodeEntities.set(s.id, a);
    }
    if (this.alwaysShowEdges)
      for (const s of this.edges) {
        const i = this.nodes.find((g) => g.id === s.src), o = this.nodes.find((g) => g.id === s.dst);
        if (!i?.coordinates || !o?.coordinates)
          continue;
        const [l, n] = i.coordinates, [r, h] = o.coordinates, c = s.style?.color || "#999999", u = s.style?.weight || 1, a = Math.max(1, Math.min(5, u)), d = this.viewer.entities.add({
          polyline: {
            positions: [
              this.Cesium.Cartesian3.fromDegrees(n, l, 0),
              this.Cesium.Cartesian3.fromDegrees(h, r, 0)
            ],
            width: a,
            material: this.Cesium.Color.fromCssColorString(c),
            clampToGround: !0
          },
          edgeId: s.id
          // For hit testing
        });
        this.edgeEntities.set(s.id, d);
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
        const s = this.nodes.find((n) => n.id === t);
        if (!s)
          continue;
        const i = this.selectedNodeId === t, o = s.style?.color || "#ffffff", l = i ? "#2196f3" : s.style?.borderColor || "#333333";
        if (e.point) {
          e.point.pixelSize = i ? 15 : 10;
          let n;
          const r = o.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
          if (r) {
            const h = parseInt(r[1], 16) / 255, c = parseInt(r[2], 16) / 255, u = parseInt(r[3], 16) / 255;
            n = new this.Cesium.Color(h, c, u, 1);
          } else
            n = this.Cesium.Color.fromCssColorString(o), n = n.withAlpha(1);
          e.point.color = n, e.point.outlineColor = this.Cesium.Color.fromCssColorString(l);
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
    const t = this.nodes.filter((s) => {
      if (!s.coordinates || !Array.isArray(s.coordinates) || s.coordinates.length !== 2) return !0;
      const [i, o] = s.coordinates;
      return !Number.isFinite(i) || !Number.isFinite(o);
    }), e = this.nodes.filter((s) => {
      if (!s.coordinates || !Array.isArray(s.coordinates) || s.coordinates.length !== 2) return !1;
      const [i, o] = s.coordinates;
      return Number.isFinite(i) && Number.isFinite(o);
    });
    if (t.length > 0) {
      const n = [
        this.Cesium.Cartesian3.fromDegrees(-32, -50, 0),
        this.Cesium.Cartesian3.fromDegrees(0, -50, 0),
        this.Cesium.Cartesian3.fromDegrees(0, 0, 0),
        this.Cesium.Cartesian3.fromDegrees(-32, 0, 0)
      ];
      this.rectEntity = this.viewer.entities.add({
        polygon: {
          hierarchy: n,
          material: this.Cesium.Color.fromCssColorString("#f0f0f0").withAlpha(0.1),
          outline: !0,
          outlineColor: this.Cesium.Color.fromCssColorString("#666"),
          height: 0
        }
      });
      const r = Math.ceil(Math.sqrt(t.length)), c = 50 / (Math.ceil(t.length / r) + 1), u = 32 / (r + 1);
      t.forEach((a, d) => {
        const g = Math.floor(d / r), p = d % r, f = -50 + (g + 1) * c, y = -32 + (p + 1) * u, m = this.selectedNodeId === a.id, w = a.style?.color || "#ffffff", b = m ? "#2196f3" : a.style?.borderColor || "#333333";
        let C;
        const E = w.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
        if (E) {
          const B = parseInt(E[1], 16) / 255, T = parseInt(E[2], 16) / 255, A = parseInt(E[3], 16) / 255;
          C = new this.Cesium.Color(B, T, A, 1);
        } else
          C = this.Cesium.Color.fromCssColorString(w), C = C.withAlpha(1);
        const v = this.Cesium.Color.fromCssColorString(b), x = this.viewer.entities.add({
          position: this.Cesium.Cartesian3.fromDegrees(y, f, 0),
          point: {
            pixelSize: m ? 15 : 10,
            color: C,
            outlineColor: v,
            outlineWidth: 2,
            heightReference: this.Cesium.HeightReference.CLAMP_TO_GROUND
          },
          label: {
            text: a.label,
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
          nodeId: a.id
        });
        this.nodeEntities.set(a.id, x);
      });
    }
    for (const s of e) {
      const [i, o] = s.coordinates, l = this.selectedNodeId === s.id, n = s.style?.color || "#ffffff", r = l ? "#2196f3" : s.style?.borderColor || "#333333";
      let h;
      const c = n.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
      if (c) {
        const d = parseInt(c[1], 16) / 255, g = parseInt(c[2], 16) / 255, p = parseInt(c[3], 16) / 255;
        h = new this.Cesium.Color(d, g, p, 1);
      } else
        h = this.Cesium.Color.fromCssColorString(n), h = h.withAlpha(1);
      const u = this.Cesium.Color.fromCssColorString(r), a = this.viewer.entities.add({
        position: this.Cesium.Cartesian3.fromDegrees(o, i, 0),
        point: {
          pixelSize: l ? 15 : 10,
          color: h,
          outlineColor: u,
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
      this.nodeEntities.set(s.id, a);
    }
    if (this.alwaysShowEdges)
      for (const s of this.edges) {
        const i = this.nodes.find((g) => g.id === s.src), o = this.nodes.find((g) => g.id === s.dst);
        if (!i?.coordinates || !o?.coordinates)
          continue;
        const [l, n] = i.coordinates, [r, h] = o.coordinates, c = s.style?.color || "#999999", u = s.style?.weight || 1, a = Math.max(1, Math.min(5, u)), d = this.viewer.entities.add({
          polyline: {
            positions: [
              this.Cesium.Cartesian3.fromDegrees(n, l, 0),
              this.Cesium.Cartesian3.fromDegrees(h, r, 0)
            ],
            width: a,
            material: this.Cesium.Color.fromCssColorString(c),
            clampToGround: !0
          },
          edgeId: s.id
          // For hit testing
        });
        this.edgeEntities.set(s.id, d);
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
    const e = (n, r, h, c = !1) => {
      const u = (d) => String(d).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"), a = `<a href="${u(h)}" target="_blank" rel="noopener noreferrer">${u(r)}</a>`;
      return new n.Credit(a, c);
    };
    if (this.baseImageryLayer)
      try {
        this.viewer.imageryLayers.remove(this.baseImageryLayer);
      } catch {
      }
    if (this.customTileUrls.length > 0) {
      const n = this.customTileUrls[this.currentCustomTileIndex], r = n.url.includes("NaturalEarthII"), h = n.maximumLevel ?? (r ? 2 : 19);
      let c;
      if (n.credit) {
        const d = n.credit;
        d.href ? c = e(this.Cesium, d.label, d.href, d.showOnScreen ?? !1) : c = new this.Cesium.Credit(d.label, d.showOnScreen ?? !1);
      } else
        c = new this.Cesium.Credit(
          `Custom tile server (${this.currentCustomTileIndex + 1}/${this.customTileUrls.length})`
        );
      const u = {
        url: n.url,
        maximumLevel: h,
        credit: c
      };
      r && this.Cesium?.GeographicTilingScheme && (u.tilingScheme = new this.Cesium.GeographicTilingScheme());
      const a = new this.Cesium.UrlTemplateImageryProvider(u);
      this.baseImageryLayer = this.viewer.imageryLayers.addImageryProvider(a, 0), this.updateTileTypeButton();
      return;
    }
    const s = new this.Cesium.Credit("© NASA", !0), i = new this.Cesium.GeographicTilingScheme({
      rectangle: this.Cesium.Rectangle.fromDegrees(-180, -90, 180, 90),
      numberOfLevelZeroTilesX: 2,
      // Level 0 has 2 tiles in X direction
      numberOfLevelZeroTilesY: 1
      // Level 0 has 1 tile in Y direction
    }), o = "/cesium/Assets/Textures/NaturalEarthII/{z}/{x}/{reverseY}.jpg", l = new this.Cesium.UrlTemplateImageryProvider({
      url: o,
      maximumLevel: 2,
      // NaturalEarthII tiles only go up to level 2
      tilingScheme: i,
      // EPSG:4326 (Geographic Coordinate System)
      credit: s,
      customTags: {
        reverseY: (n, r, h, c) => {
          const a = Math.pow(2, c) - 1 - h;
          return String(a);
        }
      }
    });
    this.baseImageryLayer = this.viewer.imageryLayers.addImageryProvider(l, 0), this.updateTileTypeButton();
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
    this.lightingToggleButton.innerHTML = pt("icon-sun", 16), t ? (this.lightingToggleButton.style.backgroundColor = "#fff9c4", this.lightingToggleButton.style.boxShadow = "inset 0 2px 4px rgba(0, 0, 0, 0.2)", this.lightingToggleButton.style.transform = "translateY(1px)") : (this.lightingToggleButton.style.backgroundColor = "#fff", this.lightingToggleButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.lightingToggleButton.style.transform = "translateY(0)"), this.lightingToggleButton.style.color = "#333";
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
    const t = this.nodes.filter((b) => {
      if (!b.coordinates || !Array.isArray(b.coordinates) || b.coordinates.length !== 2) return !1;
      const [C, E] = b.coordinates;
      return Number.isFinite(C) && Number.isFinite(E);
    }), e = this.nodes.filter((b) => {
      if (!b.coordinates || !Array.isArray(b.coordinates) || b.coordinates.length !== 2) return !0;
      const [C, E] = b.coordinates;
      return !Number.isFinite(C) || !Number.isFinite(E);
    }), s = [], i = [];
    if (t.forEach((b) => {
      if (b.coordinates && b.coordinates.length === 2) {
        const [C, E] = b.coordinates;
        Number.isFinite(C) && Number.isFinite(E) && (s.push(C), i.push(E));
      }
    }), e.length > 0) {
      const x = Math.ceil(Math.sqrt(e.length)), T = 50 / (Math.ceil(e.length / x) + 1), A = 32 / (x + 1);
      e.forEach((M, S) => {
        const L = Math.floor(S / x), I = S % x, _ = -50 + (L + 1) * T, P = -32 + (I + 1) * A;
        s.push(_), i.push(P);
      });
    }
    if (s.length === 0)
      return;
    const o = Math.min(...s), l = Math.max(...s), n = Math.min(...i), r = Math.max(...i), h = (o + l) / 2, c = (n + r) / 2, u = l - o, a = r - n, d = Math.max(u, a), g = Math.max(1e6, d * 111e3 * 2), y = Math.max(5e5, Math.min(4e7, g)), m = () => new Promise((b) => {
      if (!this.baseImageryLayer) {
        b();
        return;
      }
      if (this.baseImageryLayer.imageryProvider && this.baseImageryLayer.imageryProvider.ready) {
        b();
        return;
      }
      const C = setTimeout(() => {
        b();
      }, 2e3);
      this.baseImageryLayer.imageryProvider && this.baseImageryLayer.imageryProvider.readyPromise ? this.baseImageryLayer.imageryProvider.readyPromise.then(() => {
        clearTimeout(C), b();
      }).catch(() => {
        clearTimeout(C), b();
      }) : (clearTimeout(C), b());
    }), w = this._setIsFlying;
    w && w(!0), m().then(() => {
      this.viewer.camera.flyTo({
        destination: this.Cesium.Cartesian3.fromDegrees(c, h, y),
        orientation: {
          heading: 0,
          pitch: this.Cesium.Math.toRadians(-90),
          roll: 0
        },
        duration: 1,
        // Animate in 1 second
        complete: () => {
          w && w(!1);
          const b = this.viewer.scene.camera, C = this.Cesium.Cartographic.fromCartesian(b.position), E = C.height, v = 5e5, x = 4e7;
          if (E < v || E > x) {
            const B = Math.max(v, Math.min(x, E)), T = this.Cesium.Cartesian3.fromRadians(
              C.longitude,
              C.latitude,
              B
            );
            b.setView({
              destination: T,
              orientation: b.orientation
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
    const i = this.container.getBoundingClientRect(), o = this.container.offsetWidth;
    o > 0 && i.width > 0 && (s = i.width / o);
    const l = e.x / s, n = e.y / s;
    this.popupElement.style.display = "block";
    const r = l - this.popupElement.offsetWidth / 2, h = n - this.popupElement.offsetHeight - 15;
    this.popupElement.style.left = `${r}px`, this.popupElement.style.top = `${h}px`;
  }
  /**
   * Check if editable (Globe3D is not editable)
   */
  isEditable() {
    return !1;
  }
}
function yt(N, t = 16) {
  return J(), `<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <use href="#${N}"></use>
  </svg>`;
}
class mt {
  // Current index in customTileUrls array
  constructor(t, e, s, i, o, l) {
    this.map = null, this.Leaflet = null, this.nodes = [], this.edges = [], this.selectedNodeId = null, this.lastSelectedNodeId = null, this.markers = /* @__PURE__ */ new Map(), this.polylines = /* @__PURE__ */ new Map(), this.rectLayer = null, this.fitCenterButton = null, this.lightingToggleButton = null, this.alwaysShowEdgesButton = null, this.alwaysShowEdges = !0, this.tileTypeButton = null, this.baseTileLayer = null, this.nightShadeLayer = null, this.nightShadeDebugLayer = null, this.lightingEnabled = !1, this.timeISO = null, this.moonToggleButton = null, this.moonEnabled = !1, this.moonMarker = null, this.customTileUrls = [], this.currentCustomTileIndex = 0, this.container = t, this.onNodeClick = e, this.leafletLoader = s, this.map2dOptions = o, this.onEdgeClick = l;
    const n = i && i.length > 0 ? i : o?.customTileUrls;
    n && n.length > 0 ? this.customTileUrls = n.map(
      (r) => typeof r == "string" ? { url: r } : r
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
    const t = await this.leafletLoader();
    this.Leaflet = t.default || t;
    const e = this.map2dOptions?.center || [0, 0], s = this.map2dOptions?.zoom || 2;
    let i = 5;
    if (this.customTileUrls.length > 0) {
      const l = this.customTileUrls.map((n) => n.maxZoom ?? n.maximumLevel ?? 19);
      i = Math.min(...l);
    }
    const o = {
      center: e,
      zoom: s,
      zoomControl: !1,
      // Hide zoom control (+/- buttons)
      attributionControl: !0,
      maxZoom: i
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
    let t;
    if (this.customTileUrls.length > 0) {
      const i = this.customTileUrls[this.currentCustomTileIndex], o = i.maxZoom ?? i.maximumLevel ?? 19, l = i.tms ?? !1, n = i.attribution ?? `Custom tile server (${this.currentCustomTileIndex + 1}/${this.customTileUrls.length})`;
      t = this.Leaflet.tileLayer(i.url, {
        maxZoom: o,
        tms: l,
        // TMS format (Y from bottom to top) if specified
        attribution: n
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
    const o = this.unwrapLongitudes(i);
    let l = o.map((d) => [d.lat, d.lng]);
    l.length > 0 && (l[0][0] !== l[l.length - 1][0] || l[0][1] !== l[l.length - 1][1]) && l.push([l[0][0], l[0][1]]);
    const n = l.map(([d, g]) => ({ lat: d, lng: g }));
    this.isCounterClockwise(n) && l.reverse();
    const h = l.map(([d, g]) => ({ lat: d, lng: g }));
    if (this.isCounterClockwise(h)) {
      l.reverse();
      const d = l.map(([g, p]) => ({ lat: g, lng: p }));
      this.isCounterClockwise(d);
    }
    const u = o.map((d) => [d.lat, d.lng]);
    u.length > 0 && (u[0][0] !== u[u.length - 1][0] || u[0][1] !== u[u.length - 1][1]) && u.push([u[0][0], u[0][1]]);
    const a = this.Leaflet.polygon(u, {
      fillColor: "#000000",
      fillOpacity: 0.3,
      color: "#000000",
      weight: 0,
      interactive: !1
    });
    if (a.addTo(this.map), this.nightShadeLayer = a, this.map2dOptions?.debugNightShading) {
      const d = this.Leaflet.polyline(l, {
        color: "#ff0000",
        weight: 2,
        opacity: 0.8,
        interactive: !1
      });
      d.addTo(this.map), this.nightShadeDebugLayer = d;
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
      const i = t[s], o = t[s + 1];
      e += (o.lng - i.lng) * (o.lat + i.lat);
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
      let { lat: i, lng: o } = t[s];
      const l = e[s - 1].lng;
      for (; o - l > 180; )
        o -= 360;
      for (; o - l < -180; )
        o += 360;
      e.push({ lat: i, lng: o });
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
    const o = Math.PI / 180, l = s + 1.915 * Math.sin(i * o) + 0.02 * Math.sin(2 * i * o), n = 1.00014 - 0.01671 * Math.cos(i * o) - 14e-4 * Math.cos(2 * i * o);
    return { lambda: l, R: n };
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
    const s = Math.PI / 180, i = 180 / Math.PI, o = Math.atan(Math.cos(e * s) * Math.tan(t * s)) * i, l = Math.asin(Math.sin(e * s) * Math.sin(t * s)) * i, n = Math.floor(t / 90) * 90, r = Math.floor(o / 90) * 90;
    return { alpha: o + (n - r), delta: l };
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
      const o = this.julian(i), l = this.GMST(o), n = this.sunEclipticPosition(o), r = this.eclipticObliquity(o), h = this.sunEquatorialPosition(n.lambda, r), c = [];
      for (let u = 0; u <= e * s; u++) {
        const a = -e / 2 + u / s, d = this.hourAngle(a, h, l), g = this.terminatorLatitude(d, h);
        c.push({ lat: g, lng: a });
      }
      return h.delta < 0 ? (c.unshift({ lat: 90, lng: -e / 2 }), c.push({ lat: 90, lng: e / 2 })) : (c.unshift({ lat: -90, lng: -e / 2 }), c.push({ lat: -90, lng: e / 2 })), c.length > 0 ? c : null;
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
      const [i, o] = e.coordinates;
      if (Number.isFinite(i) && Number.isFinite(o)) {
        const [l, n] = e.coordinates;
        this.renderWithoutFit(), this.map.flyTo([l, n], 4, {
          duration: 1,
          easeLinearity: 0.25
          // Easing linearity (0.25 is recommended)
        });
        const r = () => {
          const h = this.markers.get(t);
          h && h.openPopup(), this.map.off("moveend", r);
        };
        this.map.once("moveend", r);
        return;
      }
    }
    const s = this.nodes.filter((i) => {
      if (!i.coordinates || !Array.isArray(i.coordinates) || i.coordinates.length !== 2) return !0;
      const [o, l] = i.coordinates;
      return !Number.isFinite(o) || !Number.isFinite(l);
    });
    if (s.length > 0) {
      const r = Math.ceil(Math.sqrt(s.length)), c = 50 / (Math.ceil(s.length / r) + 1), u = 32 / (r + 1), a = s.findIndex((d) => d.id === t);
      if (a >= 0) {
        const d = Math.floor(a / r), g = a % r, p = -50 + (d + 1) * c, f = -32 + (g + 1) * u;
        this.renderWithoutFit(), this.map.flyTo([p, f], 4, {
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
    this.markers.forEach((i) => {
      this.map.removeLayer(i);
    }), this.markers.clear(), Array.from(this.polylines.keys()).forEach((i) => {
      const o = this.polylines.get(i);
      if (o && this.map)
        try {
          this.map.hasLayer(o) && this.map.removeLayer(o);
        } catch {
        }
      this.polylines.delete(i);
    }), this.polylines.clear();
    const e = this.nodes.filter((i) => {
      if (!i.coordinates || !Array.isArray(i.coordinates) || i.coordinates.length !== 2) return !0;
      const [o, l] = i.coordinates;
      return !Number.isFinite(o) || !Number.isFinite(l);
    }), s = this.nodes.filter((i) => {
      if (!i.coordinates || !Array.isArray(i.coordinates) || i.coordinates.length !== 2) return !1;
      const [o, l] = i.coordinates;
      return Number.isFinite(o) && Number.isFinite(l);
    });
    if (e.length > 0) {
      const r = this.Leaflet.latLngBounds(
        [-50, -32],
        [0, 0]
      );
      this.rectLayer = this.Leaflet.rectangle(r, {
        color: "#666",
        fillColor: "#f0f0f0",
        fillOpacity: 0.1,
        weight: 1,
        dashArray: "5,5"
      }), this.rectLayer.addTo(this.map);
      const h = Math.ceil(Math.sqrt(e.length)), u = 50 / (Math.ceil(e.length / h) + 1), a = 32 / (h + 1);
      e.forEach((d, g) => {
        const p = Math.floor(g / h), f = g % h, y = -50 + (p + 1) * u, m = -32 + (f + 1) * a, w = this.selectedNodeId === d.id, b = d.style?.color || "#ffffff", C = w ? "#2196f3" : d.style?.borderColor || "#333333", E = `
          <div style="
            width: ${w ? 15 : 10}px;
            height: ${w ? 15 : 10}px;
            background-color: ${b};
            border: 2px solid ${C};
            border-radius: 50%;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          "></div>
        `, v = this.Leaflet.divIcon({
          html: E,
          className: "relatos-node-marker",
          iconSize: [w ? 15 : 10, w ? 15 : 10],
          iconAnchor: [w ? 7.5 : 5, w ? 7.5 : 5]
        }), x = this.Leaflet.marker([y, m], { icon: v });
        x.bindPopup(d.label, {
          closeButton: !1,
          offset: [0, -10]
        }), x.on("click", (B) => {
          if (this.onNodeClick) {
            const T = B.latlng;
            this.onNodeClick({
              node: d,
              position: { x: T.lng, y: T.lat },
              originalEvent: B.originalEvent
            });
          }
        }), x.addTo(this.map), this.markers.set(d.id, x);
      });
    }
    for (const i of s) {
      const [o, l] = i.coordinates, n = this.selectedNodeId === i.id, r = i.style?.color || "#ffffff", h = n ? "#2196f3" : i.style?.borderColor || "#333333", c = `
        <div style="
          width: ${n ? 15 : 10}px;
          height: ${n ? 15 : 10}px;
          background-color: ${r};
          border: 2px solid ${h};
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        "></div>
      `, u = this.Leaflet.divIcon({
        html: c,
        className: "relatos-node-marker",
        iconSize: [n ? 15 : 10, n ? 15 : 10],
        iconAnchor: [n ? 7.5 : 5, n ? 7.5 : 5]
      }), a = this.Leaflet.marker([o, l], { icon: u });
      a.bindPopup(i.label, {
        closeButton: !1,
        offset: [0, -10]
      }), a.on("click", (d) => {
        if (this.onNodeClick) {
          const g = d.latlng;
          this.onNodeClick({
            node: i,
            position: { x: g.lng, y: g.lat },
            originalEvent: d.originalEvent,
            view: "map2d"
          });
        }
      }), a.addTo(this.map), this.markers.set(i.id, a);
    }
    if (this.alwaysShowEdges)
      for (const i of this.edges) {
        const o = this.nodes.find((f) => f.id === i.src), l = this.nodes.find((f) => f.id === i.dst);
        if (!o?.coordinates || !l?.coordinates)
          continue;
        const [n, r] = o.coordinates, [h, c] = l.coordinates, u = i.style?.color || "#999999", a = i.style?.weight || 1, d = Math.max(1, Math.min(5, a)), g = this.Leaflet.polyline(
          [[n, r], [h, c]],
          {
            color: u,
            weight: d,
            opacity: 0.7
          }
        );
        g.on("click", (f) => {
          if (this.onEdgeClick) {
            const y = f.latlng;
            this.onEdgeClick({
              edge: i,
              position: { x: y.lng, y: y.lat },
              originalEvent: f.originalEvent,
              view: "map2d"
            });
          }
        });
        const p = this.polylines.get(i.id);
        if (p && this.map)
          try {
            this.map.hasLayer(p) && this.map.removeLayer(p);
          } catch {
          }
        g.addTo(this.map), this.polylines.set(i.id, g);
      }
    this.fitToNodes();
  }
  /**
   * Render nodes and edges (without fit action)
   */
  renderWithoutFit() {
    if (!this.map || !this.Leaflet)
      return;
    this.markers.forEach((i) => {
      this.map.removeLayer(i);
    }), this.markers.clear(), Array.from(this.polylines.keys()).forEach((i) => {
      const o = this.polylines.get(i);
      if (o && this.map)
        try {
          this.map.hasLayer(o) && this.map.removeLayer(o);
        } catch {
        }
      this.polylines.delete(i);
    }), this.polylines.clear(), this.rectLayer && (this.map.removeLayer(this.rectLayer), this.rectLayer = null);
    const e = this.nodes.filter((i) => {
      if (!i.coordinates || !Array.isArray(i.coordinates) || i.coordinates.length !== 2) return !0;
      const [o, l] = i.coordinates;
      return !Number.isFinite(o) || !Number.isFinite(l);
    }), s = this.nodes.filter((i) => {
      if (!i.coordinates || !Array.isArray(i.coordinates) || i.coordinates.length !== 2) return !1;
      const [o, l] = i.coordinates;
      return Number.isFinite(o) && Number.isFinite(l);
    });
    if (e.length > 0) {
      const r = this.Leaflet.latLngBounds(
        [-50, -32],
        [0, 0]
      );
      this.rectLayer = this.Leaflet.rectangle(r, {
        color: "#666",
        fillColor: "#f0f0f0",
        fillOpacity: 0.1,
        weight: 1,
        dashArray: "5,5"
      }), this.rectLayer.addTo(this.map);
      const h = Math.ceil(Math.sqrt(e.length)), u = 50 / (Math.ceil(e.length / h) + 1), a = 32 / (h + 1);
      e.forEach((d, g) => {
        const p = Math.floor(g / h), f = g % h, y = -50 + (p + 1) * u, m = -32 + (f + 1) * a, w = this.selectedNodeId === d.id, b = d.style?.color || "#ffffff", C = w ? "#2196f3" : d.style?.borderColor || "#333333", E = `
          <div style="
            width: ${w ? 15 : 10}px;
            height: ${w ? 15 : 10}px;
            background-color: ${b};
            border: 2px solid ${C};
            border-radius: 50%;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          "></div>
        `, v = this.Leaflet.divIcon({
          html: E,
          className: "relatos-node-marker",
          iconSize: [w ? 15 : 10, w ? 15 : 10],
          iconAnchor: [w ? 7.5 : 5, w ? 7.5 : 5]
        }), x = this.Leaflet.marker([y, m], { icon: v });
        x.bindPopup(d.label, {
          closeButton: !1,
          offset: [0, -10]
        }), x.on("click", (B) => {
          if (this.onNodeClick) {
            const T = B.latlng;
            this.onNodeClick({
              node: d,
              position: { x: T.lng, y: T.lat },
              originalEvent: B.originalEvent,
              view: "map2d"
            });
          }
        }), x.addTo(this.map), this.markers.set(d.id, x);
      });
    }
    for (const i of s) {
      const [o, l] = i.coordinates, n = this.selectedNodeId === i.id, r = i.style?.color || "#ffffff", h = n ? "#2196f3" : i.style?.borderColor || "#333333", c = `
        <div style="
          width: ${n ? 15 : 10}px;
          height: ${n ? 15 : 10}px;
          background-color: ${r};
          border: 2px solid ${h};
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        "></div>
      `, u = this.Leaflet.divIcon({
        html: c,
        className: "relatos-node-marker",
        iconSize: [n ? 15 : 10, n ? 15 : 10],
        iconAnchor: [n ? 7.5 : 5, n ? 7.5 : 5]
      }), a = this.Leaflet.marker([o, l], { icon: u });
      a.bindPopup(i.label, {
        closeButton: !1,
        offset: [0, -10]
      }), a.on("click", (d) => {
        if (this.onNodeClick) {
          const g = d.latlng;
          this.onNodeClick({
            node: i,
            position: { x: g.lng, y: g.lat },
            originalEvent: d.originalEvent
          });
        }
      }), a.addTo(this.map), this.markers.set(i.id, a);
    }
    if (this.alwaysShowEdges)
      for (const i of this.edges) {
        const o = this.nodes.find((f) => f.id === i.src), l = this.nodes.find((f) => f.id === i.dst);
        if (!o?.coordinates || !l?.coordinates)
          continue;
        const [n, r] = o.coordinates, [h, c] = l.coordinates, u = i.style?.color || "#999999", a = i.style?.weight || 1, d = Math.max(1, Math.min(5, a)), g = this.Leaflet.polyline(
          [[n, r], [h, c]],
          {
            color: u,
            weight: d,
            opacity: 0.7
          }
        );
        g.on("click", (f) => {
          if (this.onEdgeClick) {
            const y = f.latlng;
            this.onEdgeClick({
              edge: i,
              position: { x: y.lng, y: y.lat },
              originalEvent: f.originalEvent,
              view: "map2d"
            });
          }
        });
        const p = this.polylines.get(i.id);
        if (p && this.map)
          try {
            this.map.hasLayer(p) && this.map.removeLayer(p);
          } catch {
          }
        g.addTo(this.map), this.polylines.set(i.id, g);
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
    const s = this.julian(t) - 2451545, i = (357.5291 + 0.98560028 * s) * Math.PI / 180, o = (1.9148 * Math.sin(i) + 0.02 * Math.sin(2 * i) + 3e-4 * Math.sin(3 * i)) * Math.PI / 180, l = 102.9372 * Math.PI / 180, n = i + o + l + Math.PI, r = 23.4397 * Math.PI / 180, h = Math.atan2(
      Math.sin(n) * Math.cos(r) - Math.tan(0) * Math.sin(r),
      Math.cos(n)
    ), c = Math.asin(
      Math.sin(0) * Math.cos(r) + Math.cos(0) * Math.sin(r) * Math.sin(n)
    ), u = (218.316 + 13.176396 * s) * Math.PI / 180, a = (134.963 + 13.064993 * s) * Math.PI / 180, d = (93.272 + 13.22935 * s) * Math.PI / 180, g = u + 6.289 * Math.sin(a) * Math.PI / 180, p = 5.128 * Math.sin(d) * Math.PI / 180, f = Math.atan2(
      Math.sin(g) * Math.cos(r) - Math.tan(p) * Math.sin(r),
      Math.cos(g)
    ), y = Math.asin(
      Math.sin(p) * Math.cos(r) + Math.cos(p) * Math.sin(r) * Math.sin(g)
    ), m = 385001 - 20905 * Math.cos(a), w = 149598e3, b = Math.acos(
      Math.sin(c) * Math.sin(y) + Math.cos(c) * Math.cos(y) * Math.cos(h - f)
    ), C = Math.atan2(
      w * Math.sin(b),
      m - w * Math.cos(b)
    ), E = Math.atan2(
      Math.cos(c) * Math.sin(h - f),
      Math.sin(c) * Math.cos(y) - Math.cos(c) * Math.sin(y) * Math.cos(h - f)
    );
    return {
      fraction: (1 + Math.cos(C)) / 2,
      phase: 0.5 + 0.5 * C * (E < 0 ? -1 : 1) / Math.PI,
      angle: E
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
      const i = this.julian(t), o = i - 2451545, l = (218.316 + 13.176396 * o) * Math.PI / 180, n = (134.963 + 13.064993 * o) * Math.PI / 180, r = (93.272 + 13.22935 * o) * Math.PI / 180, h = l + 6.289 * Math.sin(n) * Math.PI / 180, c = 5.128 * Math.sin(r) * Math.PI / 180, u = 23.4397 * Math.PI / 180, a = Math.atan2(
        Math.sin(h) * Math.cos(u) - Math.tan(c) * Math.sin(u),
        Math.cos(h)
      ), d = Math.asin(
        Math.sin(c) * Math.cos(u) + Math.cos(c) * Math.sin(u) * Math.sin(h)
      ), p = this.GMST(i) * Math.PI / 12, f = d;
      let y = a - p;
      const m = f * 180 / Math.PI;
      let w = y * 180 / Math.PI;
      return w = w % 360, w > 180 ? w -= 360 : w < -180 && (w += 360), [m, w];
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
    const s = this.getMoonPhase(t), i = this.getMoonPhaseIcon(s, 24), o = this.Leaflet.divIcon({
      html: i,
      className: "relatos-moon-marker",
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    });
    this.moonMarker = this.Leaflet.marker([e[0], e[1]], { icon: o }), this.moonMarker.addTo(this.map);
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
    this.lightingToggleButton.innerHTML = yt("icon-sun", 16), t ? (this.lightingToggleButton.style.backgroundColor = "#fff9c4", this.lightingToggleButton.style.boxShadow = "inset 0 2px 4px rgba(0, 0, 0, 0.2)", this.lightingToggleButton.style.transform = "translateY(1px)") : (this.lightingToggleButton.style.backgroundColor = "#fff", this.lightingToggleButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.lightingToggleButton.style.transform = "translateY(0)"), this.lightingToggleButton.style.color = "#333";
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
    const t = this.nodes.filter((c) => {
      if (!c.coordinates || !Array.isArray(c.coordinates) || c.coordinates.length !== 2) return !1;
      const [u, a] = c.coordinates;
      return Number.isFinite(u) && Number.isFinite(a);
    }), e = this.nodes.filter((c) => {
      if (!c.coordinates || !Array.isArray(c.coordinates) || c.coordinates.length !== 2) return !0;
      const [u, a] = c.coordinates;
      return !Number.isFinite(u) || !Number.isFinite(a);
    }), s = [], i = [];
    if (t.forEach((c) => {
      if (c.coordinates && c.coordinates.length === 2) {
        const [u, a] = c.coordinates;
        Number.isFinite(u) && Number.isFinite(a) && (s.push(u), i.push(a));
      }
    }), e.length > 0) {
      const g = Math.ceil(Math.sqrt(e.length)), f = 50 / (Math.ceil(e.length / g) + 1), y = 32 / (g + 1);
      e.forEach((m, w) => {
        const b = Math.floor(w / g), C = w % g, E = -50 + (b + 1) * f, v = -32 + (C + 1) * y;
        s.push(E), i.push(v);
      });
    }
    if (s.length === 0)
      return;
    const o = Math.min(...s), l = Math.max(...s), n = Math.min(...i), r = Math.max(...i), h = this.Leaflet.latLngBounds(
      [o, n],
      [l, r]
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
function wt(N, t = {}) {
  J();
  let e;
  if (typeof N == "string") {
    const a = document.querySelector(N);
    if (!a || !(a instanceof HTMLElement))
      throw new Error(`Container element not found: ${N}`);
    e = a;
  } else
    e = N;
  const s = t.enabledViews || ["graph", "map2d", "globe3d"], i = t.initialView || (s.includes("map2d") ? "map2d" : s[0]), o = t.graph?.mode || "view", l = t.graph?.editable || !1, n = t.tileServers, r = new ut(e, s);
  t.time && r.setTime(t.time), typeof t.enableLighting == "boolean" && r.setLightingEnabled(t.enableLighting), t.tables && r.setTableOptions(t.tables), t.events?.onNodeClick && r.setOnNodeClickCallback(t.events.onNodeClick);
  const h = t.events?.onNodeClick ? (a) => {
    t.events.onNodeClick(a), r.highlightNodeRow(a.node.id);
  } : void 0, c = (a) => {
    t.events?.onEdgeClick && t.events.onEdgeClick(a), r.highlightEdgeRow(a.edge.id);
  }, u = (a) => {
    t.events?.onGroupClick && t.events.onGroupClick(a), r.highlightGroupRow(a.group.id);
  };
  if (s.includes("graph")) {
    const a = document.createElement("div");
    a.style.width = "100%", a.style.height = "100%", r.getViewContainer().appendChild(a);
    const d = new gt(
      a,
      h || t.events?.onNodeClick,
      t.events?.onSave,
      l,
      c,
      u
    );
    if (d.setModeChangeCallback(() => {
      r.updateEditToggleButton(), r.updateGraphButtons();
    }), d.setAlwaysShowEdgesChangeCallback((g) => {
      r.setAlwaysShowEdges(g);
    }), d.setGraphButtonsUpdateCallback(() => {
      r.updateGraphButtons();
    }), d.setMode(o), t.data) {
      const g = "groups" in t.data && Array.isArray(t.data.groups) ? t.data.groups : void 0;
      d.setData(t.data.nodes, t.data.edges, g);
    }
    r.registerView("graph", d);
  }
  if (s.includes("map2d") && t.loaders?.leaflet) {
    const a = document.createElement("div");
    a.style.width = "100%", a.style.height = "100%", r.getViewContainer().appendChild(a);
    const d = new mt(
      a,
      h || t.events?.onNodeClick,
      t.loaders.leaflet,
      n,
      t.map2d,
      c
    );
    d.setAlwaysShowEdgesChangeCallback((g) => {
      r.setAlwaysShowEdges(g);
    }), d.setLightingChangeCallback((g) => {
      r.setLightingEnabled(g);
    }), t.data && d.setData(t.data.nodes, t.data.edges), r.registerView("map2d", d);
  }
  if (s.includes("globe3d") && t.loaders?.cesium)
    try {
      const a = document.createElement("div");
      a.style.width = "100%", a.style.height = "100%", r.getViewContainer().appendChild(a);
      const d = new ft(
        a,
        h || t.events?.onNodeClick,
        t.loaders.cesium,
        t.globe3d ? {
          customTileUrl: t.globe3d.customTileUrl,
          customTileUrls: t.globe3d.customTileUrls
        } : void 0,
        n,
        c
      );
      d.setAlwaysShowEdgesChangeCallback((g) => {
        r.setAlwaysShowEdges(g);
      }), d.setLightingChangeCallback((g) => {
        r.setLightingEnabled(g);
      }), t.data && d.setData(t.data.nodes, t.data.edges), r.registerView("globe3d", d);
    } catch {
    }
  if (r.setInitialView(i), t.data) {
    const a = "groups" in t.data && Array.isArray(t.data.groups) ? t.data.groups : void 0;
    r.setData(t.data.nodes, t.data.edges, a);
  }
  return {
    setData(a) {
      const d = r.getView("graph");
      d && d.setData(a.nodes, a.edges, a.groups);
      const g = r.getView("map2d");
      g && g.setData(a.nodes, a.edges);
      const p = r.getView("globe3d");
      p && p.setData(a.nodes, a.edges), r.setData(a.nodes, a.edges, a.groups);
    },
    setView(a) {
      r.switchView(a);
    },
    getView() {
      const a = r.getCurrentView();
      if (!a)
        throw new Error("No view is currently active");
      return a;
    },
    setMode(a) {
      const d = r.getView("graph");
      d && d.setMode(a);
    },
    getMode() {
      const a = r.getView("graph");
      return a ? a.getMode() : null;
    },
    resize() {
      r.resize();
    },
    destroy() {
      r.destroy();
    },
    selectNode(a) {
      const d = r.getView("graph");
      d && d.selectNode && d.selectNode(a);
      const g = r.getView("map2d");
      g && g.selectNode && g.selectNode(a);
      const p = r.getView("globe3d");
      p && p.selectNode && p.selectNode(a);
    },
    setTime(a) {
      r.setTime(a);
    },
    setLighting(a) {
      r.setLightingEnabled(a);
    }
  };
}
export {
  wt as createRelatosViewer
};
