const W = `<!-- relatos/src/assets/icons/icons.svg -->
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
let X = !1;
const F = "relatos-icons-sprite";
function P() {
  if (X)
    return;
  if (document.getElementById(F)) {
    X = !0;
    return;
  }
  const I = document.createElement("div");
  I.id = F, I.style.display = "none", I.innerHTML = W, document.body.appendChild(I), X = !0;
}
function D(I, t = 16) {
  return P(), `<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <use href="#${I}"></use>
  </svg>`;
}
class U {
  constructor(t, e) {
    this.currentView = null, this.views = /* @__PURE__ */ new Map(), this.tabButtons = /* @__PURE__ */ new Map(), this.editToggleButton = null, this.alwaysShowEdgesButton = null, this.lightingToggleButton = null, this.tileTypeButton = null, this.moonToggleButton = null, this.fitCenterButton = null, this.deleteBendButton = null, this.cancelEditButton = null, this.tableContainer = null, this.nodesTableContainer = null, this.edgesTableContainer = null, this.groupsTableContainer = null, this.tableOptions = null, this.nodes = [], this.edges = [], this.groups = [], this.isExternalTableContainer = !1, this.hasEdges = !1, this.sharedAlwaysShowEdges = !1, this.sharedLightingEnabled = !1, this.sharedTime = null, this.sharedTileServerIndex = 0, this.container = t, this.enabledViews = e, P(), this.container.style.display = "flex", this.container.style.flexDirection = "column", this.container.style.width = "100%", this.tabContainer = document.createElement("div"), this.tabContainer.style.display = "flex", this.tabContainer.style.gap = "4px", this.tabContainer.style.padding = "8px", this.tabContainer.style.borderBottom = "none", this.tabContainer.style.backgroundColor = "transparent", this.tabContainer.style.position = "absolute", this.tabContainer.style.top = "0", this.tabContainer.style.left = "0", this.tabContainer.style.right = "0", this.tabContainer.style.zIndex = "1000", this.tabContainer.style.pointerEvents = "none", this.viewContainer = document.createElement("div"), this.viewContainer.style.flex = "1 1 0%", this.viewContainer.style.position = "relative", this.viewContainer.style.overflow = "hidden", this.viewContainer.style.minHeight = "0", this.createTabButtons(), this.createCommonControlsContainer(), this.container.appendChild(this.viewContainer), this.viewContainer.appendChild(this.tabContainer);
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
    const r = document.createElement("div"), n = document.createElement("table");
    if (n.style.width = "100%", n.style.borderCollapse = "collapse", !document.getElementById("relatos-table-styles")) {
      const d = document.createElement("style");
      d.id = "relatos-table-styles", d.textContent = `
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
      `, document.head.appendChild(d);
    }
    n.className = "relatos-table";
    const a = document.createElement("thead");
    if (e)
      a.innerHTML = e;
    else {
      const d = document.createElement("tr");
      a.appendChild(d);
    }
    n.appendChild(a);
    const h = document.createElement("tbody");
    for (const d of i) {
      const u = document.createElement("tr");
      u.id = `${o}-${d.id}`, u.style.cursor = "pointer";
      let l = s;
      if ("info" in d && d.info)
        for (const [c, g] of Object.entries(d.info)) {
          const p = new RegExp(`\\{\\{info\\.${c}\\}\\}`, "g");
          l = l.replace(p, String(g || ""));
        }
      if (l = l.replace(/\{\{info\.[^}]+\}\}/g, ""), l = l.replace(/\{\{id\}\}/g, String(d.id || "")), l = l.replace(/\{\{label\}\}/g, String("label" in d && d.label || "")), l = l.replace(/\{\{type\}\}/g, String("type" in d && d.type || "")), "coordinates" in d && d.coordinates && (l = l.replace(/\{\{coordinates\.0\}\}/g, String(d.coordinates[0] || "")), l = l.replace(/\{\{coordinates\.1\}\}/g, String(d.coordinates[1] || "")), l = l.replace(/\{\{latitude\}\}/g, String(d.coordinates[0] || "")), l = l.replace(/\{\{longitude\}\}/g, String(d.coordinates[1] || ""))), d.style && typeof d.style == "object") {
        const c = d.style;
        l = l.replace(/\{\{style\.color\}\}/g, String(c.color ?? "")), l = l.replace(/\{\{style\.borderColor\}\}/g, String(c.borderColor ?? "")), l = l.replace(/\{\{style\.width\}\}/g, String(c.width ?? "")), l = l.replace(/\{\{style\.height\}\}/g, String(c.height ?? "")), l = l.replace(/\{\{style\.weight\}\}/g, String(c.weight ?? "")), l = l.replace(/\{\{style\.label\}\}/g, String(c.label ?? "")), l = l.replace(/\{\{style\.srcLabel\}\}/g, String(c.srcLabel ?? "")), l = l.replace(/\{\{style\.dstLabel\}\}/g, String(c.dstLabel ?? ""));
      }
      if ("src" in d && (l = l.replace(/\{\{src\}\}/g, String(d.src || "")), l = l.replace(/\{\{dst\}\}/g, String(d.dst || "")), l = l.replace(/\{\{relType\}\}/g, String(d.relType || ""))), "nodeIds" in d) {
        const c = d;
        if (l = l.replace(/\{\{nodeIds\}\}/g, String(c.nodeIds?.join(", ") || "")), l = l.replace(/\{\{nodeCount\}\}/g, String(c.nodeIds?.length || 0)), l = l.replace(/\{\{parentId\}\}/g, String(c.parentId || "")), c.meta && typeof c.meta == "object")
          for (const [g, p] of Object.entries(c.meta)) {
            const y = new RegExp(`\\{\\{meta\\.${g}\\}\\}`, "g");
            l = l.replace(y, String(p || ""));
          }
        c.layout && (l = l.replace(/\{\{layout\.position\.x\}\}/g, String(c.layout.position.x || "")), l = l.replace(/\{\{layout\.position\.y\}\}/g, String(c.layout.position.y || "")), l = l.replace(/\{\{layout\.size\.width\}\}/g, String(c.layout.size.width || "")), l = l.replace(/\{\{layout\.size\.height\}\}/g, String(c.layout.size.height || "")));
      }
      u.innerHTML = l, u.addEventListener("click", () => {
        if (o === "node") {
          if (this.highlightAndScrollToRow(u), !this.currentView)
            return;
          const c = this.views.get(this.currentView);
          c?.selectNode && c.selectNode(d.id);
        }
      }), h.appendChild(u);
    }
    return n.appendChild(h), r.appendChild(n), r;
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
    this.alwaysShowEdgesButton = document.createElement("button"), this.alwaysShowEdgesButton.className = "relatos-always-show-edges-toggle", this.alwaysShowEdgesButton.innerHTML = D("icon-relations", 16), this.alwaysShowEdgesButton.setAttribute("aria-label", "Toggle edges"), this.alwaysShowEdgesButton.setAttribute("title", "Toggle edges"), this.alwaysShowEdgesButton.style.padding = "6px", this.alwaysShowEdgesButton.style.border = "1px solid #ccc", this.alwaysShowEdgesButton.style.borderRadius = "4px", this.alwaysShowEdgesButton.style.backgroundColor = "#fff", this.alwaysShowEdgesButton.style.cursor = "pointer", this.alwaysShowEdgesButton.style.fontSize = "16px", this.alwaysShowEdgesButton.style.width = "32px", this.alwaysShowEdgesButton.style.height = "32px", this.alwaysShowEdgesButton.style.display = "flex", this.alwaysShowEdgesButton.style.alignItems = "center", this.alwaysShowEdgesButton.style.justifyContent = "center", this.alwaysShowEdgesButton.style.pointerEvents = "auto", this.alwaysShowEdgesButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.alwaysShowEdgesButton.style.transition = "0.2s", this.alwaysShowEdgesButton.style.color = "#000000", this.alwaysShowEdgesButton.addEventListener("click", () => {
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
    this.lightingToggleButton = document.createElement("button"), this.lightingToggleButton.innerHTML = D("icon-sun", 16), this.lightingToggleButton.setAttribute("aria-label", "Toggle lighting"), this.lightingToggleButton.setAttribute("title", "Toggle lighting"), this.lightingToggleButton.style.padding = "6px", this.lightingToggleButton.style.border = "1px solid #ccc", this.lightingToggleButton.style.borderRadius = "4px", this.lightingToggleButton.style.backgroundColor = "#fff", this.lightingToggleButton.style.cursor = "pointer", this.lightingToggleButton.style.fontSize = "16px", this.lightingToggleButton.style.width = "32px", this.lightingToggleButton.style.height = "32px", this.lightingToggleButton.style.display = "none", this.lightingToggleButton.style.alignItems = "center", this.lightingToggleButton.style.justifyContent = "center", this.lightingToggleButton.style.pointerEvents = "auto", this.lightingToggleButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.lightingToggleButton.style.transition = "0.2s", this.lightingToggleButton.addEventListener("click", () => {
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
    this.tileTypeButton = document.createElement("button"), this.tileTypeButton.innerHTML = D("icon-map-tiles", 16), this.tileTypeButton.setAttribute("aria-label", "Switch tile type"), this.tileTypeButton.setAttribute("title", "Switch tile type"), this.tileTypeButton.style.padding = "6px", this.tileTypeButton.style.border = "1px solid #ccc", this.tileTypeButton.style.borderRadius = "4px", this.tileTypeButton.style.backgroundColor = "#fff", this.tileTypeButton.style.cursor = "pointer", this.tileTypeButton.style.fontSize = "16px", this.tileTypeButton.style.width = "32px", this.tileTypeButton.style.height = "32px", this.tileTypeButton.style.display = "none", this.tileTypeButton.style.alignItems = "center", this.tileTypeButton.style.justifyContent = "center", this.tileTypeButton.style.pointerEvents = "auto", this.tileTypeButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.tileTypeButton.style.transition = "0.2s", this.tileTypeButton.addEventListener("click", () => {
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
    const e = t.isMoonEnabled?.() || !1, s = t.getTime?.() || null, i = s ? new Date(s) : /* @__PURE__ */ new Date(), o = t.getMoonPhase?.(i) || 0, r = t.getMoonPhaseIcon?.(o, 16) || "🌑";
    this.moonToggleButton.innerHTML = r, e ? (this.moonToggleButton.style.backgroundColor = "#fff9c4", this.moonToggleButton.style.boxShadow = "inset 0 2px 4px rgba(0, 0, 0, 0.2)", this.moonToggleButton.style.transform = "translateY(1px)", this.moonToggleButton.setAttribute("title", "Hide moon")) : (this.moonToggleButton.style.backgroundColor = "#fff", this.moonToggleButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.moonToggleButton.style.transform = "translateY(0)", this.moonToggleButton.setAttribute("title", "Show moon"));
  }
  /**
   * Create fit center button (in common controls)
   */
  createFitCenterButton() {
    this.fitCenterButton = document.createElement("button"), this.fitCenterButton.innerHTML = D("icon-home", 16), this.fitCenterButton.setAttribute("aria-label", "Fit and center"), this.fitCenterButton.setAttribute("title", "Fit and center"), this.fitCenterButton.style.padding = "6px", this.fitCenterButton.style.border = "1px solid #ccc", this.fitCenterButton.style.borderRadius = "4px", this.fitCenterButton.style.backgroundColor = "#fff", this.fitCenterButton.style.cursor = "pointer", this.fitCenterButton.style.fontSize = "16px", this.fitCenterButton.style.width = "32px", this.fitCenterButton.style.height = "32px", this.fitCenterButton.style.display = "flex", this.fitCenterButton.style.alignItems = "center", this.fitCenterButton.style.justifyContent = "center", this.fitCenterButton.style.pointerEvents = "auto", this.fitCenterButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.fitCenterButton.style.transition = "0.2s", this.fitCenterButton.addEventListener("click", () => {
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
    this.deleteBendButton = document.createElement("button"), this.deleteBendButton.innerHTML = D("icon-trash", 16), this.deleteBendButton.setAttribute("aria-label", "Delete bend point"), this.deleteBendButton.setAttribute("title", "Delete bend point"), this.deleteBendButton.style.padding = "6px", this.deleteBendButton.style.border = "1px solid #ccc", this.deleteBendButton.style.borderRadius = "4px", this.deleteBendButton.style.backgroundColor = "#fff", this.deleteBendButton.style.cursor = "pointer", this.deleteBendButton.style.fontSize = "16px", this.deleteBendButton.style.width = "32px", this.deleteBendButton.style.height = "32px", this.deleteBendButton.style.display = "none", this.deleteBendButton.style.alignItems = "center", this.deleteBendButton.style.justifyContent = "center", this.deleteBendButton.style.pointerEvents = "auto", this.deleteBendButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.deleteBendButton.style.transition = "0.2s", this.deleteBendButton.addEventListener("click", () => {
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
    this.cancelEditButton = document.createElement("button"), this.cancelEditButton.innerHTML = D("icon-undo", 16), this.cancelEditButton.setAttribute("aria-label", "Cancel edit"), this.cancelEditButton.setAttribute("title", "Cancel edit and restore previous state"), this.cancelEditButton.style.padding = "6px", this.cancelEditButton.style.border = "1px solid #ccc", this.cancelEditButton.style.borderRadius = "4px", this.cancelEditButton.style.backgroundColor = "#fff", this.cancelEditButton.style.cursor = "pointer", this.cancelEditButton.style.fontSize = "16px", this.cancelEditButton.style.width = "32px", this.cancelEditButton.style.height = "32px", this.cancelEditButton.style.display = "none", this.cancelEditButton.style.alignItems = "center", this.cancelEditButton.style.justifyContent = "center", this.cancelEditButton.style.pointerEvents = "auto", this.cancelEditButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.cancelEditButton.style.transition = "0.2s", this.cancelEditButton.addEventListener("click", () => {
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
      i.innerHTML = D(t[s], 16), i.setAttribute("aria-label", e[s]), i.setAttribute("title", e[s]), i.style.padding = "8px 16px", i.style.border = "1px solid #ccc", i.style.borderRadius = "4px 4px 0 0", i.style.backgroundColor = "#fff", i.style.cursor = "pointer", i.style.fontSize = "14px", i.style.display = "flex", i.style.alignItems = "center", i.style.justifyContent = "center", i.style.color = "#000000", i.style.pointerEvents = "auto", i.style.visibility = "visible", i.style.opacity = "1", i.addEventListener("click", () => {
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
function O(I, t = 16) {
  return P(), `<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <use href="#${I}"></use>
  </svg>`;
}
class V {
  constructor(t, e, s, i = !1, o, r) {
    this.nodes = [], this.edges = [], this.groups = [], this.mode = "view", this.editable = !1, this.nodeElements = /* @__PURE__ */ new Map(), this.edgeElements = /* @__PURE__ */ new Map(), this.selectedEdgeId = null, this.selectedNodeId = null, this.zoomedNodeId = null, this.anchorHandles = /* @__PURE__ */ new Map(), this.draggingAnchor = null, this.bendHandles = /* @__PURE__ */ new Map(), this.draggingBend = null, this.draggingNode = null, this.draggingGroup = null, this.panning = null, this.lastPanEndTime = 0, this.resizingNode = null, this.resizingGroup = null, this.saveDebounceTimer = null, this.SAVE_DEBOUNCE_MS = 500, this.resizeRenderTimer = null, this.editToggleButton = null, this.alwaysShowEdgesButton = null, this.alwaysShowEdges = !1, this.hoveredEdgePairKey = null, this.tappedEdgePairKey = null, this.snapshotBeforeEdit = null, this.edgeClickTimers = /* @__PURE__ */ new WeakMap(), this.offsetX = 0, this.offsetY = 0, this.zoom = 1, this.pinchDistance = null, this.pinchCenter = null, this.initialZoom = 1, this.popupElement = null, this.popupNodeId = null, this.DEFAULT_NODE_WIDTH = 120, this.DEFAULT_NODE_HEIGHT = 60, this.EDGE_DEFAULT_COLOR = "#999", this.EDGE_HOVER_COLOR = "#333", this.EDGE_DEFAULT_WIDTH = 1.5, this.EDGE_HOVER_WIDTH = 3, this.EDGE_MIN_WEIGHT = 1, this.EDGE_MAX_WEIGHT = 10, this.NODE_PADDING = 10, this.HANDLE_RADIUS = 8, this.BEND_HANDLE_RADIUS = 7, this.HIT_PATH_WIDTH = 32, this.controlButtonsContainer = null, this.deleteBendButton = null, this.fitCenterButton = null, this.cancelEditButton = null, this.container = t, this.onNodeClick = e ? (n) => {
      this.popupNodeId === n.node.id && this.popupElement && this.popupElement.style.opacity === "1" ? this.hidePopup() : this.showPopup(n.node), e(n);
    } : void 0, this.onSave = s, this.editable = i, this.onEdgeClick = o, this.onGroupClick = r, this.container.style.position = "relative", this.container.style.width = "100%", this.container.style.height = "100%", this.container.style.overflow = "visible", this.createAlwaysShowEdgesButton(), this.alwaysShowEdgesButton && (this.alwaysShowEdgesButton.style.display = "none", this.alwaysShowEdgesButton.parentNode && this.alwaysShowEdgesButton.parentNode.removeChild(this.alwaysShowEdgesButton)), this.createEditToggleButton(), this.editToggleButton && (this.editToggleButton.style.display = "none", this.editToggleButton.parentNode && this.editToggleButton.parentNode.removeChild(this.editToggleButton)), this.createControlButtons(), this.controlButtonsContainer && (this.controlButtonsContainer.style.display = "none", this.controlButtonsContainer.parentNode && this.controlButtonsContainer.parentNode.removeChild(this.controlButtonsContainer)), this.createAttributionLabel(), this.svgWrapper = document.createElement("div"), this.svgWrapper.style.position = "absolute", this.svgWrapper.style.top = "0", this.svgWrapper.style.left = "0", this.svgWrapper.style.width = "100%", this.svgWrapper.style.height = "100%", this.svgWrapper.style.transformOrigin = "0 0", this.svgWrapper.style.pointerEvents = "none", this.container.appendChild(this.svgWrapper), this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"), this.svg.style.width = "100%", this.svg.style.height = "100%", this.svg.style.display = "block", this.svg.style.pointerEvents = "auto", this.svgWrapper.appendChild(this.svg), this.svgDefs = document.createElementNS("http://www.w3.org/2000/svg", "defs"), this.createArrowMarkers(), this.svg.appendChild(this.svgDefs), this.edgesGroup = document.createElementNS("http://www.w3.org/2000/svg", "g"), this.edgesGroup.setAttribute("class", "edges"), this.svg.appendChild(this.edgesGroup), this.groupsGroup = document.createElementNS("http://www.w3.org/2000/svg", "g"), this.groupsGroup.setAttribute("class", "groups"), this.svg.appendChild(this.groupsGroup), this.nodesGroup = document.createElementNS("http://www.w3.org/2000/svg", "g"), this.nodesGroup.setAttribute("class", "nodes"), this.svg.appendChild(this.nodesGroup), this.anchorHandlesGroup = document.createElementNS("http://www.w3.org/2000/svg", "g"), this.anchorHandlesGroup.setAttribute("class", "anchor-handles"), this.anchorHandlesGroup.style.display = "none", this.svg.appendChild(this.anchorHandlesGroup), this.bendHandlesGroup = document.createElementNS("http://www.w3.org/2000/svg", "g"), this.bendHandlesGroup.setAttribute("class", "bend-handles"), this.bendHandlesGroup.style.display = "none", this.svg.appendChild(this.bendHandlesGroup), this.edgeLabelsGroup = document.createElementNS("http://www.w3.org/2000/svg", "g"), this.edgeLabelsGroup.setAttribute("class", "edge-labels"), this.svg.appendChild(this.edgeLabelsGroup), this.updateTransform(), this.setupEventListeners();
  }
  /**
   * Create always show edges toggle button
   */
  createAlwaysShowEdgesButton() {
    this.alwaysShowEdgesButton = document.createElement("button"), this.alwaysShowEdgesButton.className = "relatos-always-show-edges-toggle", this.alwaysShowEdgesButton.setAttribute("aria-label", "Always show all edges"), this.alwaysShowEdgesButton.setAttribute("title", "Always show all edges"), this.alwaysShowEdgesButton.style.padding = "6px", this.alwaysShowEdgesButton.style.border = "1px solid #ccc", this.alwaysShowEdgesButton.style.borderRadius = "4px", this.alwaysShowEdgesButton.style.backgroundColor = "#fff", this.alwaysShowEdgesButton.style.cursor = "pointer", this.alwaysShowEdgesButton.style.fontSize = "16px", this.alwaysShowEdgesButton.style.lineHeight = "1", this.alwaysShowEdgesButton.style.width = "32px", this.alwaysShowEdgesButton.style.height = "32px", this.alwaysShowEdgesButton.style.display = "flex", this.alwaysShowEdgesButton.style.alignItems = "center", this.alwaysShowEdgesButton.style.justifyContent = "center", this.alwaysShowEdgesButton.style.transition = "all 0.2s", this.alwaysShowEdgesButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.alwaysShowEdgesButton.style.pointerEvents = "auto", this.alwaysShowEdgesButton.style.color = "#000000", this.alwaysShowEdgesButton.innerHTML = O("icon-relations", 16), this.alwaysShowEdgesButton.addEventListener("click", () => {
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
    this.editToggleButton && (this.editToggleButton.innerHTML = O("icon-edit", 16), this.mode === "edit" ? (this.editToggleButton.setAttribute("aria-label", "Exit edit mode"), this.editToggleButton.setAttribute("title", "Exit edit mode"), this.editToggleButton.classList.add("relatos-edit-toggle-active"), this.editToggleButton.style.backgroundColor = "#fff9c4", this.editToggleButton.style.color = "red", this.editToggleButton.style.borderColor = "#999", this.editToggleButton.style.boxShadow = "inset 0 2px 4px rgba(0, 0, 0, 0.2)", this.editToggleButton.style.transform = "translateY(1px)") : (this.editToggleButton.setAttribute("aria-label", "Enter edit mode"), this.editToggleButton.setAttribute("title", "Enter edit mode"), this.editToggleButton.classList.remove("relatos-edit-toggle-active"), this.editToggleButton.style.backgroundColor = "#fff", this.editToggleButton.style.color = "#333", this.editToggleButton.style.borderColor = "#ccc", this.editToggleButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.editToggleButton.style.transform = "translateY(0)"));
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
    this.controlButtonsContainer = document.createElement("div"), this.controlButtonsContainer.style.position = "absolute", this.controlButtonsContainer.style.top = "8px", this.controlButtonsContainer.style.right = "8px", this.controlButtonsContainer.style.display = "flex", this.controlButtonsContainer.style.gap = "4px", this.controlButtonsContainer.style.zIndex = "1000", this.controlButtonsContainer.style.pointerEvents = "none", this.deleteBendButton = this.createIconButton(O("icon-trash", 16), "Delete bend point", "Delete bend point", () => {
      this.selectedEdgeId && this.deleteNearestBendPoint();
    }), this.deleteBendButton.style.display = "none", this.fitCenterButton = this.createIconButton(O("icon-home", 16), "Fit and center", "Fit and center", () => {
      this.fitAndCenter();
    }), this.fitCenterButton.style.display = "none", this.cancelEditButton = this.createIconButton(O("icon-undo", 16), "Cancel edit", "Cancel edit and restore previous state", () => {
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
    return o.innerHTML = t, o.setAttribute("aria-label", e), o.setAttribute("title", s), o.style.padding = "6px", o.style.border = "1px solid #ccc", o.style.borderRadius = "4px", o.style.backgroundColor = "#fff", o.style.cursor = "pointer", o.style.fontSize = "16px", o.style.width = "32px", o.style.height = "32px", o.style.display = "flex", o.style.alignItems = "center", o.style.justifyContent = "center", o.style.pointerEvents = "auto", o.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", o.style.transition = "all 0.2s", o.addEventListener("click", (r) => {
      r.stopPropagation(), i();
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
    const o = this.container.getBoundingClientRect(), r = e - o.left, n = s - o.top, a = {
      x: r / this.zoom - this.offsetX,
      y: n / this.zoom - this.offsetY
    }, h = i.x - a.x, d = i.y - a.y;
    this.offsetX += h, this.offsetY += d;
  }
  /**
   * Convert screen coordinates to SVG coordinates accounting for offset and zoom
   * With DOM scale transform, wrapper size is (100% / zoom) and then scaled by zoom
   * The visual size is always 100%, so we can use container coordinates
   */
  screenToSvg(t, e) {
    const s = this.container.getBoundingClientRect(), i = t - s.left, o = e - s.top, r = i / this.zoom, n = o / this.zoom;
    return {
      x: r - this.offsetX,
      y: n - this.offsetY
    };
  }
  /**
   * Update transform: zoom on DOM wrapper, translate on SVG groups
   */
  updateTransform() {
    if (this.popupNodeId && this.popupElement) {
      const r = this.nodes.find((n) => n.id === this.popupNodeId);
      r && this.updatePopupPosition(r);
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
    for (const f of this.nodes)
      if (f.position) {
        const w = f.style || {}, m = w.width || this.DEFAULT_NODE_WIDTH, b = w.height || this.DEFAULT_NODE_HEIGHT;
        e = Math.min(e, f.position.x - m / 2), s = Math.min(s, f.position.y - b / 2), i = Math.max(i, f.position.x + m / 2), o = Math.max(o, f.position.y + b / 2);
      }
    if (e === 1 / 0)
      return;
    const r = 60;
    e -= r, s -= r, i += r, o += r;
    const n = (e + i) / 2, a = (s + o) / 2, h = i - e, d = o - s, u = this.container.getBoundingClientRect();
    if (u.width <= 0 || u.height <= 0 || !isFinite(h) || !isFinite(d) || h <= 0 || d <= 0)
      return;
    const l = u.width / h, c = u.height / d;
    if (!isFinite(l) || !isFinite(c))
      return;
    const g = Math.min(l, c, 1);
    this.zoom = g;
    const p = u.width / (2 * this.zoom), y = u.height / (2 * this.zoom);
    !isFinite(n) || !isFinite(a) || !isFinite(p) || !isFinite(y) || (this.offsetX = n - p, this.offsetY = a - y, this.svg.removeAttribute("viewBox"), this.updateTransform(), this.render());
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
    for (const f of this.nodes)
      if (f.position) {
        const w = f.style || {}, m = w.width || this.DEFAULT_NODE_WIDTH, b = w.height || this.DEFAULT_NODE_HEIGHT;
        e = Math.min(e, f.position.x - m / 2), s = Math.min(s, f.position.y - b / 2), i = Math.max(i, f.position.x + m / 2), o = Math.max(o, f.position.y + b / 2);
      }
    if (e === 1 / 0)
      return;
    const r = 60;
    e -= r, s -= r, i += r, o += r;
    const n = (e + i) / 2, a = (s + o) / 2, h = i - e, d = o - s, u = this.container.getBoundingClientRect();
    if (u.width <= 0 || u.height <= 0 || !isFinite(h) || !isFinite(d) || h <= 0 || d <= 0)
      return;
    const l = u.width / h, c = u.height / d;
    if (!isFinite(l) || !isFinite(c))
      return;
    const g = Math.min(l, c, 1), p = u.width / 2, y = u.height / 2;
    this.animateZoomToPoint(g, p, y, n, a);
  }
  /**
   * Setup event listeners (using Pointer Events for touch support)
   */
  setupEventListeners() {
    this.svg.addEventListener("click", (i) => {
      const o = i.target;
      o.closest("[data-node-id]") || o.getAttribute("data-edge-pair-key") || o.getAttribute("data-hit-edge-pair-key") || Date.now() - (this.lastPanEndTime || 0) < 100 || this.mode === "view" && this.hidePopup();
    }), this.svg.addEventListener("pointerdown", (i) => {
      const o = i.target, r = o.closest("[data-node-id]")?.getAttribute("data-node-id"), n = o.getAttribute("data-edge-pair-key") || o.getAttribute("data-hit-edge-pair-key"), a = o.getAttribute("data-handle-type"), h = o.getAttribute("data-bend-index");
      if (this.mode === "edit") {
        const d = o.getAttribute("data-resize-side");
        if (d) {
          const u = o.getAttribute("data-node-id");
          if (u) {
            const l = this.nodes.find((c) => c.id === u);
            if (l?.position) {
              const c = l.style || {}, g = c.width || this.DEFAULT_NODE_WIDTH, p = c.height || this.DEFAULT_NODE_HEIGHT, y = this.screenToSvg(i.clientX, i.clientY);
              this.resizingNode = {
                nodeId: u,
                side: d,
                startX: y.x,
                startY: y.y,
                startWidth: g,
                startHeight: p,
                startNodeX: l.position.x,
                startNodeY: l.position.y
              }, i.target.setPointerCapture(i.pointerId), i.preventDefault(), i.stopPropagation();
              return;
            }
          }
        }
        if (r) {
          const u = this.nodes.find((l) => l.id === r);
          if (u?.position) {
            const l = this.screenToSvg(i.clientX, i.clientY);
            this.draggingNode = {
              nodeId: r,
              offsetX: l.x - u.position.x,
              offsetY: l.y - u.position.y
            }, i.target.setPointerCapture(i.pointerId), i.preventDefault(), i.stopPropagation();
            return;
          }
        } else if (h !== null) {
          const u = o.getAttribute("data-edge-id");
          if (u) {
            const l = this.screenToSvg(i.clientX, i.clientY), c = this.edges.find((g) => g.id === u);
            if (c) {
              const [g, p] = c.src < c.dst ? [c.src, c.dst] : [c.dst, c.src], y = `${g}||${p}`, f = this.groupEdgesByPair(this.edges).find((w) => w.key === y);
              if (f && f.bends) {
                const w = parseInt(h, 10);
                if (w >= 0 && w < f.bends.length) {
                  const m = f.bends[w];
                  this.draggingBend = {
                    edgeId: u,
                    bendIndex: w,
                    offsetX: l.x - m.x,
                    offsetY: l.y - m.y
                  }, i.preventDefault(), i.stopPropagation();
                  return;
                }
              }
            }
          }
        } else if (a) {
          const u = o.getAttribute("data-edge-id");
          if (u) {
            const l = this.screenToSvg(i.clientX, i.clientY), c = this.edges.find((g) => g.id === u);
            if (c) {
              const [g, p] = c.src < c.dst ? [c.src, c.dst] : [c.dst, c.src], y = `${g}||${p}`, f = this.groupEdgesByPair(this.edges).find((w) => w.key === y);
              if (f) {
                const w = a === "src" ? f.a : f.b, m = this.nodes.find((b) => b.id === w);
                if (m) {
                  const b = a === "src" ? f.b : f.a, C = this.nodes.find((E) => E.id === b);
                  if (C) {
                    const E = a === "src" ? f.srcAnchor || this.estimateAnchor(m, C) : f.dstAnchor || this.estimateAnchor(m, C), v = m.style || {}, B = v.width || this.DEFAULT_NODE_WIDTH, T = v.height || this.DEFAULT_NODE_HEIGHT, A = this.calculateAnchorPosition(m, E, B, T);
                    this.draggingAnchor = {
                      edgeId: u,
                      type: a,
                      offsetX: l.x - A.x,
                      offsetY: l.y - A.y
                    }, i.preventDefault(), i.stopPropagation();
                    return;
                  }
                }
              }
            }
          }
        } else n || this.deselectEdge();
      } else if (r) {
        const d = this.nodes.find((u) => u.id === r);
        if (d && this.onNodeClick) {
          const u = this.screenToSvg(i.clientX, i.clientY);
          this.onNodeClick({
            node: d,
            position: { x: u.x, y: u.y },
            originalEvent: i
          });
        }
      } else n || (this.deselectEdge(), this.tappedEdgePairKey && (this.tappedEdgePairKey = null, this.render()));
    });
    let t = 0, e = null;
    this.svg.addEventListener("pointerdown", (i) => {
      const o = i.target, r = o.getAttribute("data-edge-pair-key") || o.getAttribute("data-hit-edge-pair-key");
      if (this.mode === "edit" && r) {
        const n = Date.now();
        if (n - t < 300 && e === o) {
          const h = this.groupEdgesByPair(this.edges).find((d) => d.key === r);
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
      const r = o.getAttribute("data-hit-edge-pair-key") || o.getAttribute("data-edge-pair-key");
      if (r) {
        const a = this.groupEdgesByPair(this.edges).find((h) => h.key === r);
        if (a && a.edges.length > 0) {
          this.insertBendPoint(a.edges[0].id, i), i.preventDefault(), i.stopPropagation();
          return;
        }
      }
      let n = o;
      for (; n && n !== this.svg; ) {
        const a = n.getAttribute("data-hit-edge-pair-key") || n.getAttribute("data-edge-pair-key");
        if (a) {
          const h = this.groupEdgesByPair(this.edges).find((d) => d.key === a);
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
        const o = Array.from(s.values()), [r, n] = o;
        this.pinchDistance = Math.hypot(n.clientX - r.clientX, n.clientY - r.clientY), this.pinchCenter = {
          x: (r.clientX + n.clientX) / 2,
          y: (r.clientY + n.clientY) / 2
        }, this.initialZoom = this.zoom, i.preventDefault();
      }
    }), this.svg.addEventListener("pointermove", (i) => {
      if (i.pointerType === "touch" && s.set(i.pointerId, i), this.pinchDistance !== null && this.pinchCenter !== null && s.size === 2) {
        const h = Array.from(s.values()), [d, u] = h, c = Math.hypot(u.clientX - d.clientX, u.clientY - d.clientY) / this.pinchDistance, g = Math.pow(c, 1.5), p = Math.max(0.1, Math.min(5, this.initialZoom * g));
        this.zoomToPoint(p, this.pinchCenter.x, this.pinchCenter.y), this.updateTransform(), this.render(), i.preventDefault();
        return;
      }
      const o = i.target, r = o instanceof HTMLButtonElement || o.closest("button") !== null || o.closest(".relatos-always-show-edges-toggle") !== null || o.closest(".relatos-edit-toggle") !== null || o.closest(".relatos-control-buttons") !== null, n = i.pointerType === "touch" && s.size === 1, a = i.pointerType === "mouse" && i.buttons === 1;
      if (!r && !this.resizingNode && !this.resizingGroup && !this.draggingNode && !this.draggingGroup && !this.draggingAnchor && !this.draggingBend && (n || a)) {
        if (!this.panning)
          this.panning = {
            startX: i.clientX,
            startY: i.clientY,
            startOffsetX: this.offsetX,
            startOffsetY: this.offsetY
          };
        else {
          const h = i.clientX - this.panning.startX, d = i.clientY - this.panning.startY, u = h / this.zoom, l = d / this.zoom;
          this.offsetX = this.panning.startOffsetX + u, this.offsetY = this.panning.startOffsetY + l, this.updateTransform(), this.render();
        }
        i.preventDefault();
        return;
      }
      this.resizingNode ? this.updateNodeSize(i) : this.resizingGroup ? this.updateGroupSize(i) : this.draggingNode ? this.updateNodePosition(i) : this.draggingGroup ? this.updateGroupPosition(i) : this.draggingAnchor ? this.updateAnchorPosition(i) : this.draggingBend && this.updateBendPosition(i);
    }), document.addEventListener("pointermove", (i) => {
      i.pointerType === "touch" && s.set(i.pointerId, i);
      const o = i.target;
      if (!(o instanceof HTMLButtonElement || o.closest("button") !== null || o.closest(".relatos-always-show-edges-toggle") !== null || o.closest(".relatos-edit-toggle") !== null || o.closest(".relatos-control-buttons") !== null) && this.panning && !this.resizingNode && !this.resizingGroup && !this.draggingNode && !this.draggingGroup && !this.draggingAnchor && !this.draggingBend) {
        const n = i.pointerType === "touch" && s.size === 1, a = i.pointerType === "mouse" && (i.buttons === 1 || i.button === 0);
        if (n || a) {
          const h = i.clientX - this.panning.startX, d = i.clientY - this.panning.startY, u = h / this.zoom, l = d / this.zoom;
          this.offsetX = this.panning.startOffsetX - u, this.offsetY = this.panning.startOffsetY - l, this.updateTransform(), this.render(), i.preventDefault();
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
        const o = Math.pow(1.5, -i.deltaY / 60), r = Math.max(0.1, Math.min(5, this.zoom * o));
        this.zoomToPoint(r, i.clientX, i.clientY), this.updateTransform(), this.render();
      } else {
        i.preventDefault();
        const o = Math.pow(1.5, i.deltaY / 60), r = Math.max(0.1, Math.min(5, this.zoom * o));
        this.zoomToPoint(r, i.clientX, i.clientY), this.updateTransform(), this.render();
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
    const e = this.nodes.find((w) => w.id === t);
    if (!e || !e.position)
      return;
    const s = this.container.getBoundingClientRect();
    if (s.width <= 0 || s.height <= 0)
      return;
    const i = e.style || {}, o = i.width || this.DEFAULT_NODE_WIDTH, r = i.height || this.DEFAULT_NODE_HEIGHT, n = e.position.x + o / 2, a = e.position.y + r / 2;
    o * this.zoom, r * this.zoom;
    const h = Math.min(s.width * 0.3, s.height * 0.3), d = h / o, u = h / r, l = Math.min(d, u), p = Math.max(0.5, Math.min(3, l)), y = s.width / 2, f = s.height / 2;
    this.animateZoomToPoint(p, y, f, n, a);
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
    const r = this.zoom, n = this.offsetX, a = this.offsetY, h = this.container.getBoundingClientRect(), d = h.width / (2 * t), u = h.height / (2 * t), l = i - d, c = o - u, g = 500, p = performance.now(), y = (f) => {
      const w = f - p, m = Math.min(w / g, 1), b = 1 - Math.pow(1 - m, 3), C = r + (t - r) * b, E = n + (l - n) * b, v = a + (c - a) * b;
      if (this.zoom = C, this.offsetX = E, this.offsetY = v, this.updateTransform(), this.render(), m >= 1) {
        const B = this.container.getBoundingClientRect(), T = B.width / 2, A = B.height / 2;
        T / this.zoom - this.offsetX, A / this.zoom - this.offsetY;
      }
      m < 1 && requestAnimationFrame(y);
    };
    requestAnimationFrame(y);
  }
  /**
   * Ensure node position information (auto-layout if not present)
   * If coordinates (latitude/longitude) exist, place based on lat/lon,
   * otherwise place in remaining 1/4 area
   */
  ensureNodePositions() {
    const t = this.nodes.filter((y) => y.coordinates && y.coordinates.length === 2), e = this.nodes.filter((y) => !y.coordinates || y.coordinates.length !== 2);
    if (this.nodes.filter((y) => !y.position).length === 0 && t.length === 0 && e.length === 0)
      return;
    const i = this.container.getBoundingClientRect(), o = i.width || 1e3, r = i.height || 600, n = 2, a = o * n * 0.25, h = o * n * 0.75, d = r * n, u = a, l = r * n, c = 0, g = [];
    for (const y of this.nodes)
      if (y.position) {
        const f = y.style || {}, w = f.width || this.DEFAULT_NODE_WIDTH, m = f.height || this.DEFAULT_NODE_HEIGHT;
        if (g.push({
          x: y.position.x - w / 2,
          y: y.position.y - m / 2,
          width: w,
          height: m
        }), y.coordinates && y.coordinates.length === 2) {
          const [b, C] = y.coordinates;
        }
      }
    if (t.length > 0) {
      const y = t.map((M) => M.coordinates[0]), f = t.map((M) => M.coordinates[1]), w = Math.min(...y), m = Math.max(...y), b = Math.min(...f), C = Math.max(...f), E = m - w, v = C - b, B = Math.max(E, v) * 0.1 || 0.01, T = {
        minLat: w - B,
        maxLat: m + B,
        minLon: b - B,
        maxLon: C + B
      }, A = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map();
      for (const M of t) {
        const [x, S] = M.coordinates, k = (S - T.minLon) / (T.maxLon - T.minLon), N = 1 - (x - T.minLat) / (T.maxLat - T.minLat), _ = {
          x: u + k * h,
          y: N * d
        }, H = M.style || {}, R = H.width || this.DEFAULT_NODE_WIDTH, z = H.height || this.DEFAULT_NODE_HEIGHT, G = _.x, Y = _.y;
        A.set(M.id, { originalCenterX: G, originalCenterY: Y }), L.set(M.id, {
          node: M,
          width: R,
          height: z,
          originalCenterX: G,
          originalCenterY: Y
        });
      }
      this.resolveNodePositionsWithOrderConstraints(L, A);
    }
    const p = e.filter((y) => !y.position);
    if (p.length > 0) {
      const f = Math.ceil(Math.sqrt(p.length)), w = Math.ceil(p.length / f), m = a - 40, b = l - 40, C = m / f, E = b / w;
      p.forEach((v, B) => {
        const T = v.style || {}, A = T.width || this.DEFAULT_NODE_WIDTH, L = T.height || this.DEFAULT_NODE_HEIGHT, M = Math.floor(B / f), x = B % f, S = c + 20 + (x + 0.5) * C, k = 20 + (M + 0.5) * E;
        v.position = { x: S, y: k }, g.push({
          x: S - A / 2,
          y: k - L / 2,
          width: A,
          height: L
        });
      });
    }
  }
  /**
   * Constraint-based collision resolution algorithm with separated x and y directions
   * Fix original x and y order as constraints and adjust to avoid overlap
   * 
   * @param nodeInfoMap All node information (including original center coordinates)
   * @param nodeOriginalCenters Original center coordinates for all nodes
   */
  resolveNodePositionsWithOrderConstraints(t, e) {
    const o = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
    for (const [h, d] of t) {
      const u = d.node;
      if (u.position) {
        const l = u.position.x, c = u.position.y;
        o.set(h, { centerX: l, centerY: c }), r.set(h, {
          x: u.position.x - d.width / 2,
          y: u.position.y - d.height / 2,
          width: d.width,
          height: d.height
        });
      } else {
        const l = e.get(h);
        o.set(h, {
          centerX: l.originalCenterX,
          centerY: l.originalCenterY
        }), r.set(h, {
          x: l.originalCenterX - d.width / 2,
          y: l.originalCenterY - d.height / 2,
          width: d.width,
          height: d.height
        });
      }
    }
    const n = Array.from(t.entries()).sort((h, d) => {
      const u = e.get(h[0]), l = e.get(d[0]);
      return u.originalCenterX - l.originalCenterX;
    }), a = Array.from(t.entries()).sort((h, d) => {
      const u = e.get(h[0]), l = e.get(d[0]);
      return u.originalCenterY - l.originalCenterY;
    });
    for (let h = 0; h < 50; h++) {
      let d = !1;
      for (let u = 0; u < n.length; u++) {
        const [l] = n[u], c = r.get(l), g = o.get(l);
        for (let p = 0; p < u; p++) {
          const [y] = n[p], f = r.get(y);
          if (c.x < f.x + f.width + 20 && c.x + c.width + 20 > f.x) {
            d = !0;
            const w = f.width / 2 + c.width / 2 + 20, b = o.get(y).centerX + w;
            g.centerX = b, c.x = b - c.width / 2;
          }
        }
      }
      for (let u = 0; u < a.length; u++) {
        const [l] = a[u], c = r.get(l), g = o.get(l);
        for (let p = 0; p < u; p++) {
          const [y] = a[p], f = r.get(y);
          if (c.y < f.y + f.height + 20 && c.y + c.height + 20 > f.y) {
            d = !0;
            const w = f.height / 2 + c.height / 2 + 20, b = o.get(y).centerY + w;
            g.centerY = b, c.y = b - c.height / 2;
          }
        }
      }
      if (!d)
        break;
    }
    for (const [h, d] of t)
      if (!d.node.position) {
        const u = r.get(h);
        d.node.position = {
          x: u.x + u.width / 2,
          y: u.y + u.height / 2
        };
      }
  }
  /**
   * Adjust node positions to avoid overlap with other nodes (old implementation, kept for backward compatibility)
   * Adjust while preserving original positional relationships (east-west, north-south)
   */
  adjustNodePosition(t, e, s, i, o = 20) {
    let n = t.x, a = t.y;
    const h = t.width, d = t.height, u = s?.originalX ?? t.x, l = s?.originalY ?? t.y, c = e.map((g, p) => {
      const y = g.width || this.DEFAULT_NODE_WIDTH, f = g.height || this.DEFAULT_NODE_HEIGHT, w = g.x + y / 2, m = g.y + f / 2, b = w - u, C = m - l;
      return {
        x: g.x,
        y: g.y,
        width: y,
        height: f,
        centerX: w,
        centerY: m,
        relativeDx: b,
        // Infer original positional relationship (relationship between existing nodes' current positions and original node's original position)
        relativeDy: C,
        originalCenterX: w,
        // Existing node's current position (inferred original position)
        originalCenterY: m
      };
    });
    for (let g = 0; g < o; g++) {
      let p = !1, y = n, f = a, w = 1 / 0;
      for (const m of c)
        if (n < m.x + m.width + 20 && n + h + 20 > m.x && a < m.y + m.height + 20 && a + d + 20 > m.y) {
          p = !0;
          const b = n + h / 2, C = a + d / 2, E = m.centerX - b, v = m.centerY - C, B = Math.sqrt(E * E + v * v);
          if (B > 0) {
            const T = (h + m.width) / 2 + 20;
            let A = E, L = v;
            if (Math.abs(m.relativeDx) > 0.1 || Math.abs(m.relativeDy) > 0.1)
              if (Math.abs(m.relativeDx) > Math.abs(m.relativeDy))
                A = (m.relativeDx > 0 ? -1 : 1) * Math.abs(E) / B * T, L = v / B * T * 0.5;
              else {
                const G = m.relativeDy > 0 ? -1 : 1;
                A = E / B * T * 0.5, L = G * Math.abs(v) / B * T;
              }
            else
              A = E / B * T, L = v / B * T;
            const M = n + A, x = a + L, S = Math.sqrt(
              Math.pow(M - u, 2) + Math.pow(x - l, 2)
            ), k = M + h / 2, N = x + d / 2, _ = k - u, H = N - l;
            let R = 0;
            (m.relativeDx > 0 && _ < m.relativeDx || m.relativeDx < 0 && _ > m.relativeDx) && (R += 1e3), (m.relativeDy > 0 && H < m.relativeDy || m.relativeDy < 0 && H > m.relativeDy) && (R += 1e3);
            const z = S + R;
            z < w && (w = z, y = M, f = x);
          } else {
            const T = (h + m.width) / 2 + 20;
            let A = 0, L = 0;
            if (m.relativeDx !== 0 || m.relativeDy !== 0) {
              const k = m.relativeDx > 0 ? -1 : 1, N = m.relativeDy > 0 ? -1 : 1;
              A = k * T, L = N * T;
            } else {
              const k = Math.random() * Math.PI * 2;
              A = Math.cos(k) * T, L = Math.sin(k) * T;
            }
            const M = n + A, x = a + L, S = Math.sqrt(
              Math.pow(M - u, 2) + Math.pow(x - l, 2)
            );
            S < w && (w = S, y = M, f = x);
          }
        }
      if (!p)
        break;
      n = y, a = f;
    }
    return { x: n, y: a };
  }
  /**
   * Group edges by node pair
   * Group by undirected pair key (minId||maxId) and generate EdgePair
   */
  groupEdgesByPair(t) {
    const e = /* @__PURE__ */ new Map();
    for (const s of t) {
      const [i, o] = s.src < s.dst ? [s.src, s.dst] : [s.dst, s.src], r = `${i}||${o}`;
      let n = e.get(r);
      n || (n = {
        key: r,
        a: i,
        b: o,
        edges: []
      }, e.set(r, n)), n.edges.push(s), s.src === i && s.dst === o ? (s.srcAnchor && !n.srcAnchor && (n.srcAnchor = s.srcAnchor), s.dstAnchor && !n.dstAnchor && (n.dstAnchor = s.dstAnchor), s.bends && !n.bends && (n.bends = s.bends)) : (s.srcAnchor && !n.dstAnchor && (n.dstAnchor = s.srcAnchor), s.dstAnchor && !n.srcAnchor && (n.srcAnchor = s.dstAnchor), s.bends && !n.bends && (n.bends = s.bends));
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
    const e = this.nodes.find((y) => y.id === t.a), s = this.nodes.find((y) => y.id === t.b);
    if (!e?.position || !s?.position)
      return "";
    const i = t.srcAnchor || this.estimateAnchor(e, s), o = t.dstAnchor || this.estimateAnchor(s, e), r = e.style || {}, n = s.style || {}, a = r.width || this.DEFAULT_NODE_WIDTH, h = r.height || this.DEFAULT_NODE_HEIGHT, d = n.width || this.DEFAULT_NODE_WIDTH, u = n.height || this.DEFAULT_NODE_HEIGHT, l = this.calculateAnchorPosition(e, i, a, h), c = this.calculateAnchorPosition(s, o, d, u), g = [l];
    t.bends && g.push(...t.bends), g.push(c);
    const p = [`M ${g[0].x} ${g[0].y}`];
    for (let y = 1; y < g.length; y++)
      p.push(`L ${g[y].x} ${g[y].y}`);
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
    const o = t.position.x, r = t.position.y, n = s || t.style?.width || this.DEFAULT_NODE_WIDTH, a = i || t.style?.height || this.DEFAULT_NODE_HEIGHT;
    let h = 0, d = 0;
    switch (e.side) {
      case "top":
        h = o - n / 2 + n * e.t, d = r - a / 2;
        break;
      case "right":
        h = o + n / 2, d = r - a / 2 + a * e.t;
        break;
      case "bottom":
        h = o - n / 2 + n * e.t, d = r + a / 2;
        break;
      case "left":
        h = o - n / 2, d = r - a / 2 + a * e.t;
        break;
    }
    return { x: h, y: d };
  }
  /**
   * Auto-estimate anchor
   * Calculate side and position closest to direction from node center to target node
   */
  estimateAnchor(t, e) {
    if (!t.position || !e.position)
      return { side: "right", t: 0.5 };
    const s = t.style || {}, i = s.width || this.DEFAULT_NODE_WIDTH, o = s.height || this.DEFAULT_NODE_HEIGHT, r = e.position.x - t.position.x, n = e.position.y - t.position.y, a = Math.atan2(n, r), h = a < 0 ? a + 2 * Math.PI : a;
    let d, u;
    return h >= 7 * Math.PI / 4 || h < Math.PI / 4 ? (d = "right", u = 0.5 + n / o * 0.5) : h >= Math.PI / 4 && h < 3 * Math.PI / 4 ? (d = "bottom", u = 0.5 + r / i * 0.5) : h >= 3 * Math.PI / 4 && h < 5 * Math.PI / 4 ? (d = "left", u = 0.5 - n / o * 0.5) : (d = "top", u = 0.5 - r / i * 0.5), u = Math.max(0, Math.min(1, u)), { side: d, t: u };
  }
  /**
   * Get edge point array [start, ...bends, end]
   */
  getEdgePoints(t) {
    const e = this.nodes.find((p) => p.id === t.src), s = this.nodes.find((p) => p.id === t.dst);
    if (!e?.position || !s?.position)
      return [];
    const i = t.srcAnchor || this.estimateAnchor(e, s), o = t.dstAnchor || this.estimateAnchor(s, e), r = e.style || {}, n = s.style || {}, a = r.width || this.DEFAULT_NODE_WIDTH, h = r.height || this.DEFAULT_NODE_HEIGHT, d = n.width || this.DEFAULT_NODE_WIDTH, u = n.height || this.DEFAULT_NODE_HEIGHT, l = this.calculateAnchorPosition(e, i, a, h), c = this.calculateAnchorPosition(s, o, d, u), g = [l];
    return t.bends && g.push(...t.bends), g.push(c), g;
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
    const [s, i] = e.src < e.dst ? [e.src, e.dst] : [e.dst, e.src], o = `${s}||${i}`, r = this.groupEdgesByPair(this.edges).find((h) => h.key === o);
    if (!r)
      return;
    const n = ["top", "right", "bottom", "left"], a = (h) => {
      const d = n.indexOf(h);
      return n[(d + 1) % 4];
    };
    r.srcAnchor && (r.srcAnchor.side = a(r.srcAnchor.side)), r.dstAnchor && (r.dstAnchor.side = a(r.dstAnchor.side));
    for (const h of r.edges)
      h.src === r.a && h.dst === r.b ? (h.srcAnchor = r.srcAnchor, h.dstAnchor = r.dstAnchor) : (h.srcAnchor = r.dstAnchor, h.dstAnchor = r.srcAnchor);
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
    const t = this.edges.find((w) => w.id === this.selectedEdgeId);
    if (!t)
      return;
    const [e, s] = t.src < t.dst ? [t.src, t.dst] : [t.dst, t.src], i = `${e}||${s}`, o = this.groupEdgesByPair(this.edges).find((w) => w.key === i);
    if (!o)
      return;
    const r = this.nodes.find((w) => w.id === o.a), n = this.nodes.find((w) => w.id === o.b);
    if (!r || !n)
      return;
    const a = o.srcAnchor || this.estimateAnchor(r, n), h = o.dstAnchor || this.estimateAnchor(n, r), d = r.style || {}, u = n.style || {}, l = d.width || this.DEFAULT_NODE_WIDTH, c = d.height || this.DEFAULT_NODE_HEIGHT, g = u.width || this.DEFAULT_NODE_WIDTH, p = u.height || this.DEFAULT_NODE_HEIGHT, y = this.calculateAnchorPosition(r, a, l, c), f = this.calculateAnchorPosition(n, h, g, p);
    this.createAnchorHandle(t.id, "src", y.x, y.y), this.createAnchorHandle(t.id, "dst", f.x, f.y), this.anchorHandlesGroup.style.display = "block", this.anchorHandlesGroup.style.pointerEvents = "auto";
  }
  /**
   * Update bend point handles
   */
  updateBendHandles() {
    if (this.bendHandles.clear(), this.bendHandlesGroup.innerHTML = "", !this.selectedEdgeId || this.mode !== "edit") {
      this.bendHandlesGroup.style.display = "none", this.updateControlButtons();
      return;
    }
    const t = this.edges.find((r) => r.id === this.selectedEdgeId);
    if (!t) {
      this.updateControlButtons();
      return;
    }
    const [e, s] = t.src < t.dst ? [t.src, t.dst] : [t.dst, t.src], i = `${e}||${s}`, o = this.groupEdgesByPair(this.edges).find((r) => r.key === i);
    if (!o || !o.bends || o.bends.length === 0) {
      this.bendHandlesGroup.style.display = "none", this.updateControlButtons();
      return;
    }
    o.bends.forEach((r, n) => {
      this.createBendHandle(t.id, n, r.x, r.y);
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
    const e = this.nodes.find((r) => r.id === this.draggingNode.nodeId);
    if (!e)
      return;
    const s = this.screenToSvg(t.clientX, t.clientY), i = s.x, o = s.y;
    e.position || (e.position = { x: 0, y: 0 }), e.position.x = i - this.draggingNode.offsetX, e.position.y = o - this.draggingNode.offsetY, this.updateGroupLayouts(e.id, void 0), this.render(), this.updateAnchorHandles(), this.updateBendHandles(), this.debouncedSave();
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
    const r = i - this.resizingNode.startX, n = o - this.resizingNode.startY;
    switch (this.resizingNode.side) {
      case "right": {
        const h = Math.max(60, this.resizingNode.startWidth + r);
        e.style.width = h, e.position.x = this.resizingNode.startNodeX + r / 2;
        break;
      }
      case "left": {
        const h = Math.max(60, this.resizingNode.startWidth - r);
        e.style.width = h, e.position.x = this.resizingNode.startNodeX + r / 2;
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
    const a = this.nodeElements.get(e.id);
    if (a) {
      const h = e.style || {}, d = h.width || this.DEFAULT_NODE_WIDTH, u = h.height || this.DEFAULT_NODE_HEIGHT, l = e.position.x - d / 2, c = e.position.y - u / 2;
      a.setAttribute("x", String(l)), a.setAttribute("y", String(c)), a.setAttribute("width", String(d)), a.setAttribute("height", String(u));
      const g = a.parentElement;
      if (g) {
        const p = g.querySelector("foreignObject");
        if (p) {
          const y = e.style || {}, f = y.width || this.DEFAULT_NODE_WIDTH, w = y.height || this.DEFAULT_NODE_HEIGHT, m = e.position.x - f / 2, b = e.position.y - w / 2;
          p.setAttribute("x", String(m)), p.setAttribute("y", String(b));
        }
        e.position && g.querySelectorAll("[data-resize-side]").forEach((f) => {
          const w = f.getAttribute("data-resize-side");
          w === "top" ? (f.setAttribute("cx", String(e.position.x)), f.setAttribute("cy", String(e.position.y - u / 2))) : w === "right" ? (f.setAttribute("cx", String(e.position.x + d / 2)), f.setAttribute("cy", String(e.position.y))) : w === "bottom" ? (f.setAttribute("cx", String(e.position.x)), f.setAttribute("cy", String(e.position.y + u / 2))) : w === "left" && (f.setAttribute("cx", String(e.position.x - d / 2)), f.setAttribute("cy", String(e.position.y)));
        });
      }
    }
  }
  /**
   * Handle resize end (called on pointer up)
   */
  handleResizeEnd() {
    this.resizeRenderTimer && (clearTimeout(this.resizeRenderTimer), this.resizeRenderTimer = null), this.resizingNode && this.updateGroupLayouts(this.resizingNode.nodeId, void 0), this.render(), this.debouncedSave();
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
    const [s, i] = e.src < e.dst ? [e.src, e.dst] : [e.dst, e.src], o = `${s}||${i}`, r = this.groupEdgesByPair(this.edges).find((C) => C.key === o);
    if (!r)
      return;
    const n = this.draggingAnchor.type === "src" ? r.a : r.b, a = this.nodes.find((C) => C.id === n);
    if (!a?.position)
      return;
    const h = this.screenToSvg(t.clientX, t.clientY), d = h.x - this.draggingAnchor.offsetX, u = h.y - this.draggingAnchor.offsetY, l = a.position.x, c = a.position.y, g = a.style || {}, p = g.width || this.DEFAULT_NODE_WIDTH, y = g.height || this.DEFAULT_NODE_HEIGHT, f = {
      top: Math.abs(u - (c - y / 2)),
      right: Math.abs(d - (l + p / 2)),
      bottom: Math.abs(u - (c + y / 2)),
      left: Math.abs(d - (l - p / 2))
    };
    let w = "right", m = f.right;
    for (const [C, E] of Object.entries(f))
      E < m && (m = E, w = C);
    let b = 0.5;
    switch (w) {
      case "top":
      case "bottom":
        b = (d - (l - p / 2)) / p;
        break;
      case "left":
      case "right":
        b = (u - (c - y / 2)) / y;
        break;
    }
    b = Math.max(0, Math.min(1, b)), this.draggingAnchor.type === "src" ? r.srcAnchor = { side: w, t: b } : r.dstAnchor = { side: w, t: b };
    for (const C of r.edges)
      C.src === r.a && C.dst === r.b ? (C.srcAnchor = r.srcAnchor, C.dstAnchor = r.dstAnchor) : (C.srcAnchor = r.dstAnchor, C.dstAnchor = r.srcAnchor);
    this.render(), this.updateAnchorHandles(), this.updateBendHandles(), this.debouncedSave();
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
    const [s, i] = e.src < e.dst ? [e.src, e.dst] : [e.dst, e.src], o = `${s}||${i}`, r = this.groupEdgesByPair(this.edges).find((u) => u.key === o);
    if (!r || !r.bends)
      return;
    const n = this.draggingBend.bendIndex;
    if (n < 0 || n >= r.bends.length)
      return;
    const a = this.screenToSvg(t.clientX, t.clientY), h = a.x - this.draggingBend.offsetX, d = a.y - this.draggingBend.offsetY;
    r.bends[n] = { x: h, y: d };
    for (const u of r.edges)
      u.bends = [...r.bends];
    this.render(), this.updateBendHandles(), this.debouncedSave();
  }
  /**
   * Insert bend point (on double click/tap)
   */
  insertBendPoint(t, e) {
    const s = this.edges.find((x) => x.id === t);
    if (!s)
      return;
    const [i, o] = s.src < s.dst ? [s.src, s.dst] : [s.dst, s.src], r = `${i}||${o}`, n = this.groupEdgesByPair(this.edges).find((x) => x.key === r);
    if (!n)
      return;
    const a = this.svg.getBoundingClientRect(), h = e.clientX - a.left, d = e.clientY - a.top, u = [], l = this.nodes.find((x) => x.id === n.a), c = this.nodes.find((x) => x.id === n.b);
    if (!l?.position || !c?.position)
      return;
    const g = n.srcAnchor || this.estimateAnchor(l, c), p = n.dstAnchor || this.estimateAnchor(c, l), y = l.style || {}, f = c.style || {}, w = y.width || this.DEFAULT_NODE_WIDTH, m = y.height || this.DEFAULT_NODE_HEIGHT, b = f.width || this.DEFAULT_NODE_WIDTH, C = f.height || this.DEFAULT_NODE_HEIGHT, E = this.calculateAnchorPosition(l, g, w, m), v = this.calculateAnchorPosition(c, p, b, C);
    u.push(E), n.bends && u.push(...n.bends), u.push(v);
    let B = 0, T = 1 / 0;
    for (let x = 0; x < u.length - 1; x++) {
      const S = u[x], k = u[x + 1], N = this.pointToLineSegmentDistance(h, d, S.x, S.y, k.x, k.y);
      N < T && (T = N, B = x);
    }
    const A = u[B], L = u[B + 1], M = {
      x: (A.x + L.x) / 2,
      y: (A.y + L.y) / 2
    };
    n.bends || (n.bends = []), n.bends.splice(B, 0, M);
    for (const x of n.edges)
      x.bends = [...n.bends];
    this.selectedEdgeId !== t && this.selectEdge(t, !1), this.render(), this.updateBendHandles(), this.debouncedSave();
  }
  /**
   * Calculate distance from point to line segment
   */
  pointToLineSegmentDistance(t, e, s, i, o, r) {
    const n = o - s, a = r - i, h = n * n + a * a;
    if (h === 0)
      return Math.sqrt((t - s) ** 2 + (e - i) ** 2);
    const d = Math.max(0, Math.min(1, ((t - s) * n + (e - i) * a) / h)), u = s + d * n, l = i + d * a;
    return Math.sqrt((t - u) ** 2 + (e - l) ** 2);
  }
  /**
   * Delete nearest bend point (on Delete/Backspace)
   * Also implements View interface deleteNearestBendPoint method
   */
  deleteNearestBendPoint() {
    if (!this.selectedEdgeId)
      return;
    const t = this.edges.find((r) => r.id === this.selectedEdgeId);
    if (!t)
      return;
    const [e, s] = t.src < t.dst ? [t.src, t.dst] : [t.dst, t.src], i = `${e}||${s}`, o = this.groupEdgesByPair(this.edges).find((r) => r.key === i);
    if (!(!o || !o.bends || o.bends.length === 0)) {
      o.bends.pop(), o.bends.length === 0 && delete o.bends;
      for (const r of o.edges)
        o.bends ? r.bends = [...o.bends] : delete r.bends;
      this.render(), this.updateBendHandles(), this.updateControlButtons(), this.debouncedSave();
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
      const s = e.edges.some((C) => C.id === this.selectedEdgeId), i = this.mode === "view" && e.key === this.hoveredEdgePairKey, o = this.mode === "view" && e.key === this.tappedEdgePairKey, r = this.alwaysShowEdges || s || i || o, a = e.edges[0].style || {}, h = a.color || this.EDGE_DEFAULT_COLOR, d = a.weight || 1, u = Math.max(this.EDGE_MIN_WEIGHT, Math.min(this.EDGE_MAX_WEIGHT, d)), l = this.EDGE_DEFAULT_WIDTH + (u - 1) * 0.5, c = r ? Math.max(l, this.EDGE_HOVER_WIDTH) : l, g = s ? "#2196f3" : h, p = r ? 1 : 0.3, y = this.calculateEdgePairPath(e);
      if (!y)
        continue;
      const f = document.createElementNS("http://www.w3.org/2000/svg", "path");
      f.setAttribute("d", y), f.setAttribute("stroke", "transparent"), f.setAttribute("stroke-width", String(this.HIT_PATH_WIDTH)), f.setAttribute("fill", "none"), f.setAttribute("data-hit-edge-pair-key", e.key), f.style.cursor = "pointer", f.style.pointerEvents = "stroke", this.edgesGroup.appendChild(f);
      const w = document.createElementNS("http://www.w3.org/2000/svg", "path");
      w.setAttribute("d", y), w.setAttribute("stroke", g), w.setAttribute("stroke-width", String(c)), w.setAttribute("stroke-opacity", String(p)), w.setAttribute("fill", "none"), w.setAttribute("data-edge-pair-key", e.key), w.style.pointerEvents = "none", w.style.transition = "stroke-opacity 0.2s, stroke-width 0.2s";
      const m = this.getEdgePairMarkerAttributes(e);
      if (m.markerStart && w.setAttribute("marker-start", m.markerStart), m.markerEnd && w.setAttribute("marker-end", m.markerEnd), this.edgeElements.set(e.key, w), this.edgesGroup.appendChild(w), this.mode === "view")
        this.setupEdgeInteraction(f, e, a);
      else if (this.mode === "edit") {
        this.setupEdgeInteractionForEdit(f, e);
        const C = e.key;
        f.addEventListener("click", (E) => {
          const v = this.edgeClickTimers.get(f);
          if (v != null) {
            clearTimeout(v), this.edgeClickTimers.set(f, null);
            return;
          }
          const B = window.setTimeout(() => {
            if (this.edgeClickTimers.set(f, null), this.mode === "edit") {
              const T = this.groupEdgesByPair(this.edges).find((A) => A.key === C);
              T && T.edges.length > 0 && (this.selectEdge(T.edges[0].id, E.shiftKey), this.render());
            }
          }, 300);
          this.edgeClickTimers.set(f, B);
        });
      }
      const b = e.key;
      f.addEventListener("dblclick", (C) => {
        if (this.mode !== "edit")
          return;
        const E = this.edgeClickTimers.get(f);
        E != null && (clearTimeout(E), this.edgeClickTimers.set(f, null));
        const v = this.groupEdgesByPair(this.edges).find((B) => B.key === b);
        v && v.edges.length > 0 && (this.insertBendPoint(v.edges[0].id, C), C.preventDefault(), C.stopPropagation());
      }), r && this.renderEdgeLabels(e, a);
    }
    this.renderGroups();
    for (const e of this.nodes) {
      if (!e.position)
        continue;
      const s = e.style || {}, i = s.width || this.DEFAULT_NODE_WIDTH, o = s.height || this.DEFAULT_NODE_HEIGHT, r = s.color || "#fff", n = s.borderColor || "#333", a = document.createElementNS("http://www.w3.org/2000/svg", "g");
      a.setAttribute("data-node-id", e.id);
      const h = document.createElementNS("http://www.w3.org/2000/svg", "rect"), d = e.position.x - i / 2, u = e.position.y - o / 2;
      h.setAttribute("x", String(d)), h.setAttribute("y", String(u)), h.setAttribute("width", String(i)), h.setAttribute("height", String(o));
      const l = r.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
      if (l) {
        const y = parseInt(l[1], 16), f = parseInt(l[2], 16), w = parseInt(l[3], 16);
        h.setAttribute("fill", `rgba(${y}, ${f}, ${w}, 0.5)`);
      } else
        h.setAttribute("fill", r);
      const c = this.selectedNodeId === e.id;
      h.setAttribute("stroke", c ? "#2196f3" : n), h.setAttribute("stroke-width", c ? "4" : "2"), h.setAttribute("rx", "4"), h.style.cursor = this.mode === "view" ? "pointer" : "move";
      const g = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
      g.setAttribute("x", String(d)), g.setAttribute("y", String(u)), g.setAttribute("width", String(i)), g.setAttribute("height", String(o));
      const p = document.createElement("div");
      p.style.width = "100%", p.style.height = "100%", p.style.display = "flex", p.style.alignItems = "flex-start", p.style.justifyContent = "center", p.style.textAlign = "center", p.style.fontSize = "14px", p.style.color = "#333", p.style.padding = "4px", p.style.wordWrap = "break-word", p.style.overflowWrap = "break-word", p.style.whiteSpace = "normal", p.style.overflow = "hidden", p.style.textOverflow = "ellipsis", p.textContent = e.label, g.appendChild(p), a.appendChild(h), a.appendChild(g), this.mode === "edit" && this.addResizeHandles(a, e, i, o), this.nodesGroup.appendChild(a), this.nodeElements.set(e.id, h), this.mode === "view" && this.onNodeClick && a.addEventListener("click", (y) => {
        y.stopPropagation(), y.preventDefault();
        const f = this.svg.getBoundingClientRect(), w = y.clientX - f.left, m = y.clientY - f.top;
        this.onNodeClick({
          node: e,
          position: { x: w, y: m },
          originalEvent: y
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
    let o = 1 / 0, r = -1 / 0, n = 1 / 0, a = -1 / 0, h = !1;
    const d = e ? this.groups.some((c) => c.parentId === e) : !1, u = /* @__PURE__ */ new Set();
    if (d && e) {
      const c = this.groups.filter((g) => g.parentId === e);
      for (const g of c) {
        const p = (y) => {
          for (const w of y.nodeIds)
            u.add(w);
          const f = this.groups.filter((w) => w.parentId === y.id);
          for (const w of f)
            p(w);
        };
        p(g);
      }
    }
    for (const c of t) {
      if (d && u.has(c))
        continue;
      const g = this.nodes.find((E) => E.id === c);
      if (!g || !g.position)
        continue;
      h = !0;
      const p = g.style || {}, y = p.width || this.DEFAULT_NODE_WIDTH, f = p.height || this.DEFAULT_NODE_HEIGHT, w = g.position.x - y / 2, m = g.position.x + y / 2, b = g.position.y - f / 2, C = g.position.y + f / 2;
      o = Math.min(o, w), r = Math.max(r, m), n = Math.min(n, b), a = Math.max(a, C);
    }
    if (d && e) {
      const c = this.groups.filter((g) => g.parentId === e);
      for (const g of c) {
        const p = this.getGroupLayout(g);
        if (p) {
          h = !0;
          const y = p.position.x, f = p.position.x + p.size.width, w = p.position.y, m = p.position.y + p.size.height;
          o = Math.min(o, y), r = Math.max(r, f), n = Math.min(n, w), a = Math.max(a, m);
        }
      }
    }
    if (!h)
      return null;
    const l = d ? 30 : 20;
    return {
      minX: o - l,
      maxX: r + l,
      minY: n - l,
      maxY: a + l
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
        const r = this.groups.find((n) => n.id === o.parentId);
        return r ? 1 + i(r) : 0;
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
      o.setAttribute("x", String(s.position.x)), o.setAttribute("y", String(s.position.y)), o.setAttribute("width", String(s.size.width)), o.setAttribute("height", String(s.size.height)), o.setAttribute("fill", "rgba(200, 200, 200, 0.1)"), o.setAttribute("stroke", "#999"), o.setAttribute("stroke-width", "2"), o.setAttribute("stroke-dasharray", "5,5"), o.setAttribute("rx", "4"), o.style.pointerEvents = this.mode === "edit" ? "auto" : "none", o.style.cursor = this.mode === "edit" ? "move" : "default";
      const r = document.createElementNS("http://www.w3.org/2000/svg", "text");
      r.setAttribute("x", String(s.position.x + 10)), r.setAttribute("y", String(s.position.y + 20)), r.setAttribute("font-size", "14"), r.setAttribute("font-weight", "bold"), r.setAttribute("fill", "#666"), r.textContent = e.label, i.appendChild(o), i.appendChild(r), this.mode === "edit" && this.setupGroupEditInteractions(i, e, o), this.mode === "view" && this.onGroupClick && i.addEventListener("click", (n) => {
        if (n.target.getAttribute("data-resize-side"))
          return;
        n.stopPropagation(), n.preventDefault();
        const h = this.svg.getBoundingClientRect(), d = n.clientX - h.left, u = n.clientY - h.top;
        this.onGroupClick({
          group: e,
          position: { x: d, y: u },
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
      const n = this.groups.filter((a) => a.nodeIds.includes(t));
      n.forEach((a) => i.add(a));
      for (const a of n)
        this.addParentGroupsToUpdate(a, i);
    }
    if (e) {
      const n = this.groups.find((a) => a.id === e);
      n && (s || i.add(n), this.addParentGroupsToUpdate(n, i));
    }
    const r = Array.from(i).sort((n, a) => {
      const h = (d) => {
        if (!d.parentId) return 0;
        const u = this.groups.find((l) => l.id === d.parentId);
        return u ? 1 + h(u) : 0;
      };
      return h(a) - h(n);
    });
    for (const n of r) {
      if (o && n.id === o)
        continue;
      const a = this.calculateGroupBounds(n.nodeIds, n.id);
      a && (n.layout || (n.layout = {
        position: { x: 0, y: 0 },
        size: { width: 0, height: 0 }
      }), n.layout.position.x = a.minX, n.layout.position.y = a.minY, n.layout.size.width = a.maxX - a.minX, n.layout.size.height = a.maxY - a.minY);
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
      for (const r of o.nodeIds) {
        const n = this.nodes.find((a) => a.id === r);
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
      const r = this.screenToSvg(i.clientX, i.clientY), n = r.x, a = r.y;
      if (!e.layout)
        return;
      const h = e.layout.position.x, d = e.layout.position.y;
      this.draggingGroup = {
        groupId: e.id,
        offsetX: n - h,
        offsetY: a - d
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
    for (const r of o) {
      const n = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      n.setAttribute("r", String(i / 2)), n.setAttribute("fill", "#2196f3"), n.setAttribute("stroke", "#fff"), n.setAttribute("stroke-width", "2"), n.setAttribute("data-resize-side", r), n.setAttribute("data-group-id", e.id), n.style.cursor = this.getResizeCursor(r), n.style.pointerEvents = "auto";
      const a = e.layout.position.x, h = e.layout.position.y, d = e.layout.size.width, u = e.layout.size.height;
      switch (r) {
        case "top":
          n.setAttribute("cx", String(a + d / 2)), n.setAttribute("cy", String(h));
          break;
        case "right":
          n.setAttribute("cx", String(a + d)), n.setAttribute("cy", String(h + u / 2));
          break;
        case "bottom":
          n.setAttribute("cx", String(a + d / 2)), n.setAttribute("cy", String(h + u));
          break;
        case "left":
          n.setAttribute("cx", String(a)), n.setAttribute("cy", String(h + u / 2));
          break;
      }
      n.addEventListener("pointerdown", (l) => {
        if (this.mode !== "edit")
          return;
        l.stopPropagation(), l.preventDefault(), n.setPointerCapture(l.pointerId);
        const c = this.screenToSvg(l.clientX, l.clientY), g = c.x, p = c.y;
        e.layout && (this.resizingGroup = {
          groupId: e.id,
          side: r,
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
      const o = s.edges.some((w) => w.id === this.selectedEdgeId), r = this.mode === "view" && s.key === this.hoveredEdgePairKey, n = this.mode === "view" && s.key === this.tappedEdgePairKey, a = this.alwaysShowEdges || o || r || n, d = s.edges[0].style || {}, u = d.color || this.EDGE_DEFAULT_COLOR, l = d.weight || 1, c = Math.max(this.EDGE_MIN_WEIGHT, Math.min(this.EDGE_MAX_WEIGHT, l)), g = this.EDGE_DEFAULT_WIDTH + (c - 1) * 0.5, p = a ? Math.max(g, this.EDGE_HOVER_WIDTH) : g, y = o ? "#2196f3" : u, f = a ? 1 : 0.3;
      i.setAttribute("stroke", y), i.setAttribute("stroke-width", String(p)), i.setAttribute("stroke-opacity", String(f)), a ? (this.edgeLabelsGroup.querySelectorAll(`[data-edge-pair-key="${s.key}"]`).forEach((m) => m.remove()), this.renderEdgeLabels(s, d)) : this.edgeLabelsGroup.querySelectorAll(`[data-edge-pair-key="${s.key}"]`).forEach((m) => m.remove());
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
        const o = this.screenToSvg(i.clientX, i.clientY), r = e.edges[0];
        this.onEdgeClick({
          edge: r,
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
    for (const r of o) {
      const n = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      n.setAttribute("cx", String(r.x)), n.setAttribute("cy", String(r.y)), n.setAttribute("r", "6"), n.setAttribute("fill", "#4CAF50"), n.setAttribute("stroke", "#fff"), n.setAttribute("stroke-width", "2"), n.setAttribute("data-resize-side", r.side), n.setAttribute("data-node-id", e.id), n.style.cursor = this.getResizeCursor(r.side), n.style.pointerEvents = "auto", t.appendChild(n);
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
    const e = this.groups.find((l) => l.id === this.draggingGroup.groupId);
    if (!e || !e.layout)
      return;
    const s = this.screenToSvg(t.clientX, t.clientY), i = s.x, o = s.y, r = i - this.draggingGroup.offsetX, n = o - this.draggingGroup.offsetY, a = r - e.layout.position.x, h = n - e.layout.position.y, d = /* @__PURE__ */ new Set(), u = this.groups.filter((l) => l.parentId === e.id);
    for (const l of u)
      for (const c of l.nodeIds)
        d.add(c);
    for (const l of e.nodeIds)
      if (!d.has(l)) {
        const c = this.nodes.find((g) => g.id === l);
        c && c.position && (c.position.x += a, c.position.y += h);
      }
    this.moveDescendantGroups(e.id, a, h), e.layout.position.x = r, e.layout.position.y = n, this.updateGroupLayouts(void 0, e.id, !0), this.render(), this.updateAnchorHandles(), this.updateBendHandles(), this.debouncedSave();
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
    const s = this.screenToSvg(t.clientX, t.clientY), i = s.x, o = s.y, r = i - this.resizingGroup.startX, n = o - this.resizingGroup.startY;
    switch (this.resizingGroup.side) {
      case "right": {
        const h = Math.max(100, this.resizingGroup.startWidth + r);
        e.layout.size.width = h;
        break;
      }
      case "left": {
        const h = Math.max(100, this.resizingGroup.startWidth - r);
        e.layout.size.width = h, e.layout.position.x = this.resizingGroup.startPosX + r;
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
    const a = this.groupsGroup.querySelector(`[data-group-id="${e.id}"]`);
    if (a) {
      const h = a.querySelector("rect");
      if (h && (h.setAttribute("x", String(e.layout.position.x)), h.setAttribute("y", String(e.layout.position.y)), h.setAttribute("width", String(e.layout.size.width)), h.setAttribute("height", String(e.layout.size.height))), !e.layout)
        return;
      const d = a.querySelectorAll("[data-resize-side]"), u = e.layout;
      d.forEach((c) => {
        const g = c.getAttribute("data-resize-side"), p = u.position.x, y = u.position.y, f = u.size.width, w = u.size.height;
        switch (g) {
          case "top":
            c.setAttribute("cx", String(p + f / 2)), c.setAttribute("cy", String(y));
            break;
          case "right":
            c.setAttribute("cx", String(p + f)), c.setAttribute("cy", String(y + w / 2));
            break;
          case "bottom":
            c.setAttribute("cx", String(p + f / 2)), c.setAttribute("cy", String(y + w));
            break;
          case "left":
            c.setAttribute("cx", String(p)), c.setAttribute("cy", String(y + w / 2));
            break;
        }
      });
      const l = a.querySelector("text");
      l && (l.setAttribute("x", String(e.layout.position.x + 10)), l.setAttribute("y", String(e.layout.position.y + 20)));
    }
  }
  /**
   * Handle group resize end (called on pointer up)
   */
  handleGroupResizeEnd() {
    this.resizingGroup && this.updateGroupLayouts(void 0, this.resizingGroup.groupId, !0), this.render(), this.debouncedSave();
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
      const r = i.getPointAtLength(o * e);
      return document.body.removeChild(s), { x: r.x, y: r.y };
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
    const o = s.style || {}, r = i.style || {}, n = o.width || this.DEFAULT_NODE_WIDTH, a = o.height || this.DEFAULT_NODE_HEIGHT, h = r.width || this.DEFAULT_NODE_WIDTH, d = r.height || this.DEFAULT_NODE_HEIGHT, u = t.srcAnchor || this.estimateAnchor(s, i), l = t.dstAnchor || this.estimateAnchor(i, s), c = this.calculateAnchorPosition(s, u, n, a), g = this.calculateAnchorPosition(i, l, h, d), p = this.calculateEdgePairPath(t), y = t.edges.find((E) => E.src === t.a && E.dst === t.b), f = t.edges.find((E) => E.src === t.b && E.dst === t.a), w = y?.style?.label || y?.relType || "", m = f?.style?.label || f?.relType || "", b = w !== m && w && m, C = w === m && w;
    if (b) {
      const v = this.getPointOnPath(p, 0.75), B = this.getPointOnPath(p, 0.25), T = v ? v.x : c.x + (g.x - c.x) * (1 - 0.25), A = v ? v.y : c.y + (g.y - c.y) * (1 - 0.25), L = B ? B.x : c.x + (g.x - c.x) * 0.25, M = B ? B.y : c.y + (g.y - c.y) * 0.25;
      if (w) {
        const x = document.createElementNS("http://www.w3.org/2000/svg", "text");
        x.setAttribute("x", String(T)), x.setAttribute("y", String(A - 8)), x.setAttribute("text-anchor", "middle"), x.setAttribute("dominant-baseline", "middle"), x.setAttribute("font-size", "12"), x.setAttribute("fill", "#333"), x.setAttribute("font-weight", "bold"), x.setAttribute("pointer-events", "none"), x.setAttribute("data-edge-pair-key", t.key);
        const S = document.createElementNS("http://www.w3.org/2000/svg", "rect"), k = w.length * 7;
        S.setAttribute("x", String(T - k / 2 - 4)), S.setAttribute("y", String(A - 16)), S.setAttribute("width", String(k + 8)), S.setAttribute("height", "16"), S.setAttribute("fill", "rgba(255, 255, 255, 0.9)"), S.setAttribute("rx", "2"), S.setAttribute("pointer-events", "none"), S.setAttribute("data-edge-pair-key", t.key), this.edgeLabelsGroup.appendChild(S), x.textContent = w, this.edgeLabelsGroup.appendChild(x);
      }
      if (m) {
        const x = document.createElementNS("http://www.w3.org/2000/svg", "text");
        x.setAttribute("x", String(L)), x.setAttribute("y", String(M - 8)), x.setAttribute("text-anchor", "middle"), x.setAttribute("dominant-baseline", "middle"), x.setAttribute("font-size", "12"), x.setAttribute("fill", "#333"), x.setAttribute("font-weight", "bold"), x.setAttribute("pointer-events", "none"), x.setAttribute("data-edge-pair-key", t.key);
        const S = document.createElementNS("http://www.w3.org/2000/svg", "rect"), k = m.length * 7;
        S.setAttribute("x", String(L - k / 2 - 4)), S.setAttribute("y", String(M - 16)), S.setAttribute("width", String(k + 8)), S.setAttribute("height", "16"), S.setAttribute("fill", "rgba(255, 255, 255, 0.9)"), S.setAttribute("rx", "2"), S.setAttribute("pointer-events", "none"), S.setAttribute("data-edge-pair-key", t.key), this.edgeLabelsGroup.appendChild(S), x.textContent = m, this.edgeLabelsGroup.appendChild(x);
      }
    } else if (C) {
      const E = this.getPointOnPath(p, 0.5), v = E ? E.x : (c.x + g.x) / 2, B = E ? E.y : (c.y + g.y) / 2, T = document.createElementNS("http://www.w3.org/2000/svg", "text");
      T.setAttribute("x", String(v)), T.setAttribute("y", String(B)), T.setAttribute("text-anchor", "middle"), T.setAttribute("dominant-baseline", "middle"), T.setAttribute("data-edge-pair-key", t.key), T.setAttribute("font-size", "12"), T.setAttribute("fill", "#333"), T.setAttribute("font-weight", "bold"), T.setAttribute("pointer-events", "none");
      const A = document.createElementNS("http://www.w3.org/2000/svg", "rect"), L = w.length * 7;
      A.setAttribute("x", String(v - L / 2 - 4)), A.setAttribute("y", String(B - 8)), A.setAttribute("width", String(L + 8)), A.setAttribute("height", "16"), A.setAttribute("fill", "rgba(255, 255, 255, 0.9)"), A.setAttribute("rx", "2"), A.setAttribute("pointer-events", "none"), A.setAttribute("data-edge-pair-key", t.key), this.edgeLabelsGroup.appendChild(A), T.textContent = w, this.edgeLabelsGroup.appendChild(T);
    } else if (e.label) {
      const E = this.getPointOnPath(p, 0.5), v = E ? E.x : (c.x + g.x) / 2, B = E ? E.y : (c.y + g.y) / 2, T = document.createElementNS("http://www.w3.org/2000/svg", "text");
      T.setAttribute("x", String(v)), T.setAttribute("y", String(B)), T.setAttribute("text-anchor", "middle"), T.setAttribute("dominant-baseline", "middle"), T.setAttribute("font-size", "12"), T.setAttribute("fill", "#333"), T.setAttribute("font-weight", "bold"), T.setAttribute("pointer-events", "none"), T.setAttribute("data-edge-pair-key", t.key);
      const A = document.createElementNS("http://www.w3.org/2000/svg", "rect"), L = e.label.length * 7;
      A.setAttribute("x", String(v - L / 2 - 4)), A.setAttribute("y", String(B - 8)), A.setAttribute("width", String(L + 8)), A.setAttribute("height", "16"), A.setAttribute("fill", "rgba(255, 255, 255, 0.9)"), A.setAttribute("rx", "2"), A.setAttribute("pointer-events", "none"), A.setAttribute("data-edge-pair-key", t.key), this.edgeLabelsGroup.appendChild(A), T.textContent = e.label, this.edgeLabelsGroup.appendChild(T);
    }
  }
  /**
   * Set mode
   */
  setMode(t) {
    !this.editable && t === "edit" || (t === "edit" && this.mode === "view" && this.saveSnapshot(), this.mode = t, this.render(), t === "view" && this.deselectEdge(), this.updateEditToggleButtonIcon(), this.updateControlButtons(), this.onModeChange && this.onModeChange());
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
    const [s, i] = e.src < e.dst ? [e.src, e.dst] : [e.dst, e.src], o = `${s}||${i}`, r = this.groupEdgesByPair(this.edges).find((n) => n.key === o);
    return !!(r && r.bends && r.bends.length > 0);
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
      const g = isFinite(this.zoom) && this.zoom > 0 ? this.zoom : 1, p = isFinite(this.offsetX) ? this.offsetX : 0, y = isFinite(this.offsetY) ? this.offsetY : 0, f = (t.position.x + p) * g, w = (t.position.y + y) * g, m = this.popupElement.getBoundingClientRect(), b = m.width || 200, C = m.height || 50, E = f - b / 2, v = w - s * g / 2 - C - 10;
      this.popupElement.style.left = `${E}px`, this.popupElement.style.top = `${v}px`;
      return;
    }
    const o = i.getBoundingClientRect(), r = this.container.getBoundingClientRect(), n = o.left + o.width / 2 - r.left, a = o.top + o.height / 2 - r.top, h = this.popupElement.getBoundingClientRect(), d = h.width || 200, u = h.height || 50, l = n - d / 2, c = a - o.height / 2 - u - 10;
    this.popupElement.style.left = `${l}px`, this.popupElement.style.top = `${c}px`;
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
function $(I, t = 16) {
  return P(), `<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <use href="#${I}"></use>
  </svg>`;
}
class j {
  // postRender event listener for popup position updates
  constructor(t, e, s, i, o, r) {
    this.viewer = null, this.Cesium = null, this.nodes = [], this.edges = [], this.selectedNodeId = null, this.lastSelectedNodeId = null, this.nodeEntities = /* @__PURE__ */ new Map(), this.edgeEntities = /* @__PURE__ */ new Map(), this.rectEntity = null, this.fitCenterButton = null, this.lightingToggleButton = null, this.alwaysShowEdgesButton = null, this.alwaysShowEdges = !0, this.tileTypeButton = null, this.baseImageryLayer = null, this.timeISO = null, this.customTileUrls = [], this.currentCustomTileIndex = 0, this.popupElement = null, this.popupEntity = null, this.popupUpdateListener = null, this.container = t, this.onNodeClick = e, this.cesiumLoader = s, this.globe3dOptions = i, this.onEdgeClick = r;
    const n = o && o.length > 0 ? o : i?.customTileUrls;
    n && n.length > 0 ? this.customTileUrls = n.map(
      (a) => typeof a == "string" ? { url: a } : a
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
        const l = 1 - u.deltaY * 0.01, c = this.Cesium.Cartographic.fromCartesian(e.position);
        let p = c.height / l;
        p = Math.max(s, Math.min(i, p));
        const y = this.Cesium.Cartesian3.fromRadians(
          c.longitude,
          c.latitude,
          p
        );
        e.setView({
          destination: y,
          orientation: {
            heading: e.heading,
            pitch: e.pitch,
            roll: e.roll
          }
        });
      }
    };
    let r = 1, n = 0;
    const a = (u) => {
      u.preventDefault(), r = u.scale || 1, n = this.Cesium.Cartographic.fromCartesian(e.position).height;
    }, h = (u) => {
      u.preventDefault();
      const c = (u.scale || 1) / r;
      let g = n / c;
      g = Math.max(s, Math.min(i, g));
      const p = this.Cesium.Cartographic.fromCartesian(e.position), y = this.Cesium.Cartesian3.fromRadians(
        p.longitude,
        p.latitude,
        g
      );
      e.setView({
        destination: y,
        orientation: {
          heading: e.heading,
          pitch: e.pitch,
          roll: e.roll
        }
      });
    }, d = (u) => {
      u.preventDefault(), r = 1, n = 0;
    };
    t.addEventListener("wheel", o, { passive: !1 }), "GestureEvent" in window && (t.addEventListener("gesturestart", a, { passive: !1 }), t.addEventListener("gesturechange", h, { passive: !1 }), t.addEventListener("gestureend", d, { passive: !1 })), this._trackpadPinchHandlers = {
      wheel: o,
      gestureStart: a,
      gestureChange: h,
      gestureEnd: d
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
    let o = !1, r = !1;
    this.viewer.scene.camera.changed.addEventListener(() => {
      if (o || r)
        return;
      const n = this.viewer.scene.camera, a = this.Cesium.Cartographic.fromCartesian(n.position), h = a.height;
      if (h < t || h > e) {
        o = !0;
        const d = Math.max(t, Math.min(e, h)), u = this.Cesium.Cartesian3.fromRadians(
          a.longitude,
          a.latitude,
          d
        );
        n.setView({
          destination: u,
          orientation: n.orientation
        }), setTimeout(() => {
          o = !1;
        }, 0);
      }
    }), this._isFlying = () => r, this._setIsFlying = (n) => {
      r = n;
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
        const o = s.id.nodeId, r = this.nodes.find((a) => a.id === o), n = this.nodeEntities.get(o);
        if (r && n && (this.showPopup(n, r), this.onNodeClick)) {
          const a = this.viewer.camera.pickEllipsoid(e.position, this.viewer.scene.globe.ellipsoid);
          if (a) {
            const h = this.Cesium.Cartographic.fromCartesian(a), d = this.Cesium.Math.toDegrees(h.longitude), u = this.Cesium.Math.toDegrees(h.latitude);
            this.onNodeClick({
              node: r,
              position: { x: d, y: u },
              originalEvent: e.originalEvent
            });
          }
        }
        return;
      }
      const i = this.viewer.scene.drillPick(e.position);
      for (const o of i)
        if (o.id && o.id.nodeId) {
          const r = o.id.nodeId, n = this.nodes.find((h) => h.id === r), a = this.nodeEntities.get(r);
          if (n && a && (this.showPopup(a, n), this.onNodeClick)) {
            const h = this.viewer.camera.pickEllipsoid(e.position, this.viewer.scene.globe.ellipsoid);
            if (h) {
              const d = this.Cesium.Cartographic.fromCartesian(h), u = this.Cesium.Math.toDegrees(d.longitude), l = this.Cesium.Math.toDegrees(d.latitude);
              this.onNodeClick({
                node: n,
                position: { x: u, y: l },
                originalEvent: e.originalEvent
              });
            }
          }
          return;
        }
      i.length === 0 && this.hidePopup();
      for (const o of i)
        if (o.id && o.id.edgeId) {
          const r = o.id.edgeId, n = this.edges.find((a) => a.id === r);
          if (n && this.onEdgeClick) {
            const a = this.viewer.camera.pickEllipsoid(e.position, this.viewer.scene.globe.ellipsoid);
            if (a) {
              const h = this.Cesium.Cartographic.fromCartesian(a), d = this.Cesium.Math.toDegrees(h.longitude), u = this.Cesium.Math.toDegrees(h.latitude);
              this.onEdgeClick({
                edge: n,
                position: { x: d, y: u },
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
        const [r, n] = e.coordinates, a = 3e6, h = this.nodeEntities.get(t);
        h && e && this.showPopup(h, e);
        const d = this._setIsFlying;
        d && d(!0), setTimeout(() => {
          this.viewer.camera.flyTo({
            destination: this.Cesium.Cartesian3.fromDegrees(n, r, a),
            orientation: {
              heading: this.Cesium.Math.toRadians(0),
              pitch: this.Cesium.Math.toRadians(-90),
              roll: 0
            },
            duration: 1,
            // Move in 1 second
            complete: () => {
              d && d(!1);
            }
          });
        }, 0);
        return;
      }
    }
    const s = this.nodes.filter((i) => {
      if (!i.coordinates || !Array.isArray(i.coordinates) || i.coordinates.length !== 2) return !0;
      const [o, r] = i.coordinates;
      return !Number.isFinite(o) || !Number.isFinite(r);
    });
    if (s.length > 0) {
      const a = Math.ceil(Math.sqrt(s.length)), d = 50 / (Math.ceil(s.length / a) + 1), u = 32 / (a + 1), l = s.findIndex((c) => c.id === t);
      if (l >= 0) {
        const c = Math.floor(l / a), g = l % a, p = -50 + (c + 1) * d, y = -32 + (g + 1) * u, f = 3e6, w = this.nodeEntities.get(t);
        w && e && this.showPopup(w, e);
        const m = this._setIsFlying;
        m && m(!0), setTimeout(() => {
          this.viewer.camera.flyTo({
            destination: this.Cesium.Cartesian3.fromDegrees(y, p, f),
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
              m && m(!1);
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
      const a = Math.ceil(Math.sqrt(t.length)), d = 50 / (Math.ceil(t.length / a) + 1), u = 32 / (a + 1);
      t.forEach((l, c) => {
        const g = Math.floor(c / a), p = c % a, y = -50 + (g + 1) * d, f = -32 + (p + 1) * u, w = this.selectedNodeId === l.id, m = l.style?.color || "#ffffff", b = w ? "#2196f3" : l.style?.borderColor || "#333333";
        let C;
        const E = m.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
        if (E) {
          const T = parseInt(E[1], 16) / 255, A = parseInt(E[2], 16) / 255, L = parseInt(E[3], 16) / 255;
          C = new this.Cesium.Color(T, A, L, 1);
        } else
          C = this.Cesium.Color.fromCssColorString(m), C = C.withAlpha(1);
        const v = this.Cesium.Color.fromCssColorString(b), B = this.viewer.entities.add({
          position: this.Cesium.Cartesian3.fromDegrees(f, y, 0),
          point: {
            pixelSize: w ? 15 : 10,
            color: C,
            outlineColor: v,
            outlineWidth: 2,
            heightReference: this.Cesium.HeightReference.CLAMP_TO_GROUND
          },
          label: {
            text: l.label,
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
          nodeId: l.id
        });
        this.nodeEntities.set(l.id, B);
      });
    }
    for (const s of e) {
      const [i, o] = s.coordinates, r = this.selectedNodeId === s.id, n = s.style?.color || "#ffffff", a = r ? "#2196f3" : s.style?.borderColor || "#333333";
      let h;
      const d = n.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
      if (d) {
        const c = parseInt(d[1], 16) / 255, g = parseInt(d[2], 16) / 255, p = parseInt(d[3], 16) / 255;
        h = new this.Cesium.Color(c, g, p, 1);
      } else
        h = this.Cesium.Color.fromCssColorString(n), h = h.withAlpha(1);
      const u = this.Cesium.Color.fromCssColorString(a), l = this.viewer.entities.add({
        position: this.Cesium.Cartesian3.fromDegrees(o, i, 0),
        point: {
          pixelSize: r ? 15 : 10,
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
      this.nodeEntities.set(s.id, l);
    }
    if (this.alwaysShowEdges)
      for (const s of this.edges) {
        const i = this.nodes.find((g) => g.id === s.src), o = this.nodes.find((g) => g.id === s.dst);
        if (!i?.coordinates || !o?.coordinates)
          continue;
        const [r, n] = i.coordinates, [a, h] = o.coordinates, d = s.style?.color || "#999999", u = s.style?.weight || 1, l = Math.max(1, Math.min(5, u)), c = this.viewer.entities.add({
          polyline: {
            positions: [
              this.Cesium.Cartesian3.fromDegrees(n, r, 0),
              this.Cesium.Cartesian3.fromDegrees(h, a, 0)
            ],
            width: l,
            material: this.Cesium.Color.fromCssColorString(d),
            clampToGround: !0
          },
          edgeId: s.id
          // For hit testing
        });
        this.edgeEntities.set(s.id, c);
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
        const i = this.selectedNodeId === t, o = s.style?.color || "#ffffff", r = i ? "#2196f3" : s.style?.borderColor || "#333333";
        if (e.point) {
          e.point.pixelSize = i ? 15 : 10;
          let n;
          const a = o.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
          if (a) {
            const h = parseInt(a[1], 16) / 255, d = parseInt(a[2], 16) / 255, u = parseInt(a[3], 16) / 255;
            n = new this.Cesium.Color(h, d, u, 1);
          } else
            n = this.Cesium.Color.fromCssColorString(o), n = n.withAlpha(1);
          e.point.color = n, e.point.outlineColor = this.Cesium.Color.fromCssColorString(r);
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
      const a = Math.ceil(Math.sqrt(t.length)), d = 50 / (Math.ceil(t.length / a) + 1), u = 32 / (a + 1);
      t.forEach((l, c) => {
        const g = Math.floor(c / a), p = c % a, y = -50 + (g + 1) * d, f = -32 + (p + 1) * u, w = this.selectedNodeId === l.id, m = l.style?.color || "#ffffff", b = w ? "#2196f3" : l.style?.borderColor || "#333333";
        let C;
        const E = m.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
        if (E) {
          const T = parseInt(E[1], 16) / 255, A = parseInt(E[2], 16) / 255, L = parseInt(E[3], 16) / 255;
          C = new this.Cesium.Color(T, A, L, 1);
        } else
          C = this.Cesium.Color.fromCssColorString(m), C = C.withAlpha(1);
        const v = this.Cesium.Color.fromCssColorString(b), B = this.viewer.entities.add({
          position: this.Cesium.Cartesian3.fromDegrees(f, y, 0),
          point: {
            pixelSize: w ? 15 : 10,
            color: C,
            outlineColor: v,
            outlineWidth: 2,
            heightReference: this.Cesium.HeightReference.CLAMP_TO_GROUND
          },
          label: {
            text: l.label,
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
          nodeId: l.id
        });
        this.nodeEntities.set(l.id, B);
      });
    }
    for (const s of e) {
      const [i, o] = s.coordinates, r = this.selectedNodeId === s.id, n = s.style?.color || "#ffffff", a = r ? "#2196f3" : s.style?.borderColor || "#333333";
      let h;
      const d = n.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
      if (d) {
        const c = parseInt(d[1], 16) / 255, g = parseInt(d[2], 16) / 255, p = parseInt(d[3], 16) / 255;
        h = new this.Cesium.Color(c, g, p, 1);
      } else
        h = this.Cesium.Color.fromCssColorString(n), h = h.withAlpha(1);
      const u = this.Cesium.Color.fromCssColorString(a), l = this.viewer.entities.add({
        position: this.Cesium.Cartesian3.fromDegrees(o, i, 0),
        point: {
          pixelSize: r ? 15 : 10,
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
      this.nodeEntities.set(s.id, l);
    }
    if (this.alwaysShowEdges)
      for (const s of this.edges) {
        const i = this.nodes.find((g) => g.id === s.src), o = this.nodes.find((g) => g.id === s.dst);
        if (!i?.coordinates || !o?.coordinates)
          continue;
        const [r, n] = i.coordinates, [a, h] = o.coordinates, d = s.style?.color || "#999999", u = s.style?.weight || 1, l = Math.max(1, Math.min(5, u)), c = this.viewer.entities.add({
          polyline: {
            positions: [
              this.Cesium.Cartesian3.fromDegrees(n, r, 0),
              this.Cesium.Cartesian3.fromDegrees(h, a, 0)
            ],
            width: l,
            material: this.Cesium.Color.fromCssColorString(d),
            clampToGround: !0
          },
          edgeId: s.id
          // For hit testing
        });
        this.edgeEntities.set(s.id, c);
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
    const e = (n, a, h, d = !1) => {
      const u = (c) => String(c).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"), l = `<a href="${u(h)}" target="_blank" rel="noopener noreferrer">${u(a)}</a>`;
      return new n.Credit(l, d);
    };
    if (this.baseImageryLayer)
      try {
        this.viewer.imageryLayers.remove(this.baseImageryLayer);
      } catch {
      }
    if (this.customTileUrls.length > 0) {
      const n = this.customTileUrls[this.currentCustomTileIndex], a = n.url.includes("NaturalEarthII"), h = n.maximumLevel ?? (a ? 2 : 19);
      let d;
      if (n.credit) {
        const c = n.credit;
        c.href ? d = e(this.Cesium, c.label, c.href, c.showOnScreen ?? !1) : d = new this.Cesium.Credit(c.label, c.showOnScreen ?? !1);
      } else
        d = new this.Cesium.Credit(
          `Custom tile server (${this.currentCustomTileIndex + 1}/${this.customTileUrls.length})`
        );
      const u = {
        url: n.url,
        maximumLevel: h,
        credit: d
      };
      a && this.Cesium?.GeographicTilingScheme && (u.tilingScheme = new this.Cesium.GeographicTilingScheme());
      const l = new this.Cesium.UrlTemplateImageryProvider(u);
      this.baseImageryLayer = this.viewer.imageryLayers.addImageryProvider(l, 0), this.updateTileTypeButton();
      return;
    }
    const s = new this.Cesium.Credit("© NASA", !0), i = new this.Cesium.GeographicTilingScheme({
      rectangle: this.Cesium.Rectangle.fromDegrees(-180, -90, 180, 90),
      numberOfLevelZeroTilesX: 2,
      // Level 0 has 2 tiles in X direction
      numberOfLevelZeroTilesY: 1
      // Level 0 has 1 tile in Y direction
    }), o = "/cesium/Assets/Textures/NaturalEarthII/{z}/{x}/{reverseY}.jpg", r = new this.Cesium.UrlTemplateImageryProvider({
      url: o,
      maximumLevel: 2,
      // NaturalEarthII tiles only go up to level 2
      tilingScheme: i,
      // EPSG:4326 (Geographic Coordinate System)
      credit: s,
      customTags: {
        reverseY: (n, a, h, d) => {
          const l = Math.pow(2, d) - 1 - h;
          return String(l);
        }
      }
    });
    this.baseImageryLayer = this.viewer.imageryLayers.addImageryProvider(r, 0), this.updateTileTypeButton();
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
    this.lightingToggleButton.innerHTML = $("icon-sun", 16), t ? (this.lightingToggleButton.style.backgroundColor = "#fff9c4", this.lightingToggleButton.style.boxShadow = "inset 0 2px 4px rgba(0, 0, 0, 0.2)", this.lightingToggleButton.style.transform = "translateY(1px)") : (this.lightingToggleButton.style.backgroundColor = "#fff", this.lightingToggleButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.lightingToggleButton.style.transform = "translateY(0)"), this.lightingToggleButton.style.color = "#333";
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
      const B = Math.ceil(Math.sqrt(e.length)), A = 50 / (Math.ceil(e.length / B) + 1), L = 32 / (B + 1);
      e.forEach((M, x) => {
        const S = Math.floor(x / B), k = x % B, N = -50 + (S + 1) * A, _ = -32 + (k + 1) * L;
        s.push(N), i.push(_);
      });
    }
    if (s.length === 0)
      return;
    const o = Math.min(...s), r = Math.max(...s), n = Math.min(...i), a = Math.max(...i), h = (o + r) / 2, d = (n + a) / 2, u = r - o, l = a - n, c = Math.max(u, l), g = Math.max(1e6, c * 111e3 * 2), f = Math.max(5e5, Math.min(4e7, g)), w = () => new Promise((b) => {
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
    }), m = this._setIsFlying;
    m && m(!0), w().then(() => {
      this.viewer.camera.flyTo({
        destination: this.Cesium.Cartesian3.fromDegrees(d, h, f),
        orientation: {
          heading: 0,
          pitch: this.Cesium.Math.toRadians(-90),
          roll: 0
        },
        duration: 1,
        // Animate in 1 second
        complete: () => {
          m && m(!1);
          const b = this.viewer.scene.camera, C = this.Cesium.Cartographic.fromCartesian(b.position), E = C.height, v = 5e5, B = 4e7;
          if (E < v || E > B) {
            const T = Math.max(v, Math.min(B, E)), A = this.Cesium.Cartesian3.fromRadians(
              C.longitude,
              C.latitude,
              T
            );
            b.setView({
              destination: A,
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
    const r = e.x / s, n = e.y / s;
    this.popupElement.style.display = "block";
    const a = r - this.popupElement.offsetWidth / 2, h = n - this.popupElement.offsetHeight - 15;
    this.popupElement.style.left = `${a}px`, this.popupElement.style.top = `${h}px`;
  }
  /**
   * Check if editable (Globe3D is not editable)
   */
  isEditable() {
    return !1;
  }
}
function K(I, t = 16) {
  return P(), `<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <use href="#${I}"></use>
  </svg>`;
}
class q {
  // Current index in customTileUrls array
  constructor(t, e, s, i, o, r) {
    this.map = null, this.Leaflet = null, this.nodes = [], this.edges = [], this.selectedNodeId = null, this.lastSelectedNodeId = null, this.markers = /* @__PURE__ */ new Map(), this.polylines = /* @__PURE__ */ new Map(), this.rectLayer = null, this.fitCenterButton = null, this.lightingToggleButton = null, this.alwaysShowEdgesButton = null, this.alwaysShowEdges = !0, this.tileTypeButton = null, this.baseTileLayer = null, this.nightShadeLayer = null, this.nightShadeDebugLayer = null, this.lightingEnabled = !1, this.timeISO = null, this.moonToggleButton = null, this.moonEnabled = !1, this.moonMarker = null, this.customTileUrls = [], this.currentCustomTileIndex = 0, this.container = t, this.onNodeClick = e, this.leafletLoader = s, this.map2dOptions = o, this.onEdgeClick = r;
    const n = i && i.length > 0 ? i : o?.customTileUrls;
    n && n.length > 0 ? this.customTileUrls = n.map(
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
    const t = await this.leafletLoader();
    this.Leaflet = t.default || t;
    const e = this.map2dOptions?.center || [0, 0], s = this.map2dOptions?.zoom || 2;
    let i = 5;
    if (this.customTileUrls.length > 0) {
      const r = this.customTileUrls.map((n) => n.maxZoom ?? n.maximumLevel ?? 19);
      i = Math.min(...r);
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
      const i = this.customTileUrls[this.currentCustomTileIndex], o = i.maxZoom ?? i.maximumLevel ?? 19, r = i.tms ?? !1, n = i.attribution ?? `Custom tile server (${this.currentCustomTileIndex + 1}/${this.customTileUrls.length})`;
      t = this.Leaflet.tileLayer(i.url, {
        maxZoom: o,
        tms: r,
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
    let r = o.map((c) => [c.lat, c.lng]);
    r.length > 0 && (r[0][0] !== r[r.length - 1][0] || r[0][1] !== r[r.length - 1][1]) && r.push([r[0][0], r[0][1]]);
    const n = r.map(([c, g]) => ({ lat: c, lng: g }));
    this.isCounterClockwise(n) && r.reverse();
    const h = r.map(([c, g]) => ({ lat: c, lng: g }));
    if (this.isCounterClockwise(h)) {
      r.reverse();
      const c = r.map(([g, p]) => ({ lat: g, lng: p }));
      this.isCounterClockwise(c);
    }
    const u = o.map((c) => [c.lat, c.lng]);
    u.length > 0 && (u[0][0] !== u[u.length - 1][0] || u[0][1] !== u[u.length - 1][1]) && u.push([u[0][0], u[0][1]]);
    const l = this.Leaflet.polygon(u, {
      fillColor: "#000000",
      fillOpacity: 0.3,
      color: "#000000",
      weight: 0,
      interactive: !1
    });
    if (l.addTo(this.map), this.nightShadeLayer = l, this.map2dOptions?.debugNightShading) {
      const c = this.Leaflet.polyline(r, {
        color: "#ff0000",
        weight: 2,
        opacity: 0.8,
        interactive: !1
      });
      c.addTo(this.map), this.nightShadeDebugLayer = c;
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
      const r = e[s - 1].lng;
      for (; o - r > 180; )
        o -= 360;
      for (; o - r < -180; )
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
    const o = Math.PI / 180, r = s + 1.915 * Math.sin(i * o) + 0.02 * Math.sin(2 * i * o), n = 1.00014 - 0.01671 * Math.cos(i * o) - 14e-4 * Math.cos(2 * i * o);
    return { lambda: r, R: n };
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
    const s = Math.PI / 180, i = 180 / Math.PI, o = Math.atan(Math.cos(e * s) * Math.tan(t * s)) * i, r = Math.asin(Math.sin(e * s) * Math.sin(t * s)) * i, n = Math.floor(t / 90) * 90, a = Math.floor(o / 90) * 90;
    return { alpha: o + (n - a), delta: r };
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
      const o = this.julian(i), r = this.GMST(o), n = this.sunEclipticPosition(o), a = this.eclipticObliquity(o), h = this.sunEquatorialPosition(n.lambda, a), d = [];
      for (let u = 0; u <= e * s; u++) {
        const l = -e / 2 + u / s, c = this.hourAngle(l, h, r), g = this.terminatorLatitude(c, h);
        d.push({ lat: g, lng: l });
      }
      return h.delta < 0 ? (d.unshift({ lat: 90, lng: -e / 2 }), d.push({ lat: 90, lng: e / 2 })) : (d.unshift({ lat: -90, lng: -e / 2 }), d.push({ lat: -90, lng: e / 2 })), d.length > 0 ? d : null;
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
        const [r, n] = e.coordinates;
        this.renderWithoutFit(), this.map.flyTo([r, n], 4, {
          duration: 1,
          easeLinearity: 0.25
          // Easing linearity (0.25 is recommended)
        });
        const a = () => {
          const h = this.markers.get(t);
          h && h.openPopup(), this.map.off("moveend", a);
        };
        this.map.once("moveend", a);
        return;
      }
    }
    const s = this.nodes.filter((i) => {
      if (!i.coordinates || !Array.isArray(i.coordinates) || i.coordinates.length !== 2) return !0;
      const [o, r] = i.coordinates;
      return !Number.isFinite(o) || !Number.isFinite(r);
    });
    if (s.length > 0) {
      const a = Math.ceil(Math.sqrt(s.length)), d = 50 / (Math.ceil(s.length / a) + 1), u = 32 / (a + 1), l = s.findIndex((c) => c.id === t);
      if (l >= 0) {
        const c = Math.floor(l / a), g = l % a, p = -50 + (c + 1) * d, y = -32 + (g + 1) * u;
        this.renderWithoutFit(), this.map.flyTo([p, y], 4, {
          duration: 1,
          // 1 second animation
          easeLinearity: 0.25
        });
        const f = () => {
          const w = this.markers.get(t);
          w && w.openPopup(), this.map.off("moveend", f);
        };
        this.map.once("moveend", f);
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
      const [o, r] = i.coordinates;
      return !Number.isFinite(o) || !Number.isFinite(r);
    }), s = this.nodes.filter((i) => {
      if (!i.coordinates || !Array.isArray(i.coordinates) || i.coordinates.length !== 2) return !1;
      const [o, r] = i.coordinates;
      return Number.isFinite(o) && Number.isFinite(r);
    });
    if (e.length > 0) {
      const a = this.Leaflet.latLngBounds(
        [-50, -32],
        [0, 0]
      );
      this.rectLayer = this.Leaflet.rectangle(a, {
        color: "#666",
        fillColor: "#f0f0f0",
        fillOpacity: 0.1,
        weight: 1,
        dashArray: "5,5"
      }), this.rectLayer.addTo(this.map);
      const h = Math.ceil(Math.sqrt(e.length)), u = 50 / (Math.ceil(e.length / h) + 1), l = 32 / (h + 1);
      e.forEach((c, g) => {
        const p = Math.floor(g / h), y = g % h, f = -50 + (p + 1) * u, w = -32 + (y + 1) * l, m = this.selectedNodeId === c.id, b = c.style?.color || "#ffffff", C = m ? "#2196f3" : c.style?.borderColor || "#333333", E = `
          <div style="
            width: ${m ? 15 : 10}px;
            height: ${m ? 15 : 10}px;
            background-color: ${b};
            border: 2px solid ${C};
            border-radius: 50%;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          "></div>
        `, v = this.Leaflet.divIcon({
          html: E,
          className: "relatos-node-marker",
          iconSize: [m ? 15 : 10, m ? 15 : 10],
          iconAnchor: [m ? 7.5 : 5, m ? 7.5 : 5]
        }), B = this.Leaflet.marker([f, w], { icon: v });
        B.bindPopup(c.label, {
          closeButton: !1,
          offset: [0, -10]
        }), B.on("click", (T) => {
          if (this.onNodeClick) {
            const A = T.latlng;
            this.onNodeClick({
              node: c,
              position: { x: A.lng, y: A.lat },
              originalEvent: T.originalEvent
            });
          }
        }), B.addTo(this.map), this.markers.set(c.id, B);
      });
    }
    for (const i of s) {
      const [o, r] = i.coordinates, n = this.selectedNodeId === i.id, a = i.style?.color || "#ffffff", h = n ? "#2196f3" : i.style?.borderColor || "#333333", d = `
        <div style="
          width: ${n ? 15 : 10}px;
          height: ${n ? 15 : 10}px;
          background-color: ${a};
          border: 2px solid ${h};
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        "></div>
      `, u = this.Leaflet.divIcon({
        html: d,
        className: "relatos-node-marker",
        iconSize: [n ? 15 : 10, n ? 15 : 10],
        iconAnchor: [n ? 7.5 : 5, n ? 7.5 : 5]
      }), l = this.Leaflet.marker([o, r], { icon: u });
      l.bindPopup(i.label, {
        closeButton: !1,
        offset: [0, -10]
      }), l.on("click", (c) => {
        if (this.onNodeClick) {
          const g = c.latlng;
          this.onNodeClick({
            node: i,
            position: { x: g.lng, y: g.lat },
            originalEvent: c.originalEvent,
            view: "map2d"
          });
        }
      }), l.addTo(this.map), this.markers.set(i.id, l);
    }
    if (this.alwaysShowEdges)
      for (const i of this.edges) {
        const o = this.nodes.find((y) => y.id === i.src), r = this.nodes.find((y) => y.id === i.dst);
        if (!o?.coordinates || !r?.coordinates)
          continue;
        const [n, a] = o.coordinates, [h, d] = r.coordinates, u = i.style?.color || "#999999", l = i.style?.weight || 1, c = Math.max(1, Math.min(5, l)), g = this.Leaflet.polyline(
          [[n, a], [h, d]],
          {
            color: u,
            weight: c,
            opacity: 0.7
          }
        );
        g.on("click", (y) => {
          if (this.onEdgeClick) {
            const f = y.latlng;
            this.onEdgeClick({
              edge: i,
              position: { x: f.lng, y: f.lat },
              originalEvent: y.originalEvent,
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
      const [o, r] = i.coordinates;
      return !Number.isFinite(o) || !Number.isFinite(r);
    }), s = this.nodes.filter((i) => {
      if (!i.coordinates || !Array.isArray(i.coordinates) || i.coordinates.length !== 2) return !1;
      const [o, r] = i.coordinates;
      return Number.isFinite(o) && Number.isFinite(r);
    });
    if (e.length > 0) {
      const a = this.Leaflet.latLngBounds(
        [-50, -32],
        [0, 0]
      );
      this.rectLayer = this.Leaflet.rectangle(a, {
        color: "#666",
        fillColor: "#f0f0f0",
        fillOpacity: 0.1,
        weight: 1,
        dashArray: "5,5"
      }), this.rectLayer.addTo(this.map);
      const h = Math.ceil(Math.sqrt(e.length)), u = 50 / (Math.ceil(e.length / h) + 1), l = 32 / (h + 1);
      e.forEach((c, g) => {
        const p = Math.floor(g / h), y = g % h, f = -50 + (p + 1) * u, w = -32 + (y + 1) * l, m = this.selectedNodeId === c.id, b = c.style?.color || "#ffffff", C = m ? "#2196f3" : c.style?.borderColor || "#333333", E = `
          <div style="
            width: ${m ? 15 : 10}px;
            height: ${m ? 15 : 10}px;
            background-color: ${b};
            border: 2px solid ${C};
            border-radius: 50%;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          "></div>
        `, v = this.Leaflet.divIcon({
          html: E,
          className: "relatos-node-marker",
          iconSize: [m ? 15 : 10, m ? 15 : 10],
          iconAnchor: [m ? 7.5 : 5, m ? 7.5 : 5]
        }), B = this.Leaflet.marker([f, w], { icon: v });
        B.bindPopup(c.label, {
          closeButton: !1,
          offset: [0, -10]
        }), B.on("click", (T) => {
          if (this.onNodeClick) {
            const A = T.latlng;
            this.onNodeClick({
              node: c,
              position: { x: A.lng, y: A.lat },
              originalEvent: T.originalEvent,
              view: "map2d"
            });
          }
        }), B.addTo(this.map), this.markers.set(c.id, B);
      });
    }
    for (const i of s) {
      const [o, r] = i.coordinates, n = this.selectedNodeId === i.id, a = i.style?.color || "#ffffff", h = n ? "#2196f3" : i.style?.borderColor || "#333333", d = `
        <div style="
          width: ${n ? 15 : 10}px;
          height: ${n ? 15 : 10}px;
          background-color: ${a};
          border: 2px solid ${h};
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        "></div>
      `, u = this.Leaflet.divIcon({
        html: d,
        className: "relatos-node-marker",
        iconSize: [n ? 15 : 10, n ? 15 : 10],
        iconAnchor: [n ? 7.5 : 5, n ? 7.5 : 5]
      }), l = this.Leaflet.marker([o, r], { icon: u });
      l.bindPopup(i.label, {
        closeButton: !1,
        offset: [0, -10]
      }), l.on("click", (c) => {
        if (this.onNodeClick) {
          const g = c.latlng;
          this.onNodeClick({
            node: i,
            position: { x: g.lng, y: g.lat },
            originalEvent: c.originalEvent
          });
        }
      }), l.addTo(this.map), this.markers.set(i.id, l);
    }
    if (this.alwaysShowEdges)
      for (const i of this.edges) {
        const o = this.nodes.find((y) => y.id === i.src), r = this.nodes.find((y) => y.id === i.dst);
        if (!o?.coordinates || !r?.coordinates)
          continue;
        const [n, a] = o.coordinates, [h, d] = r.coordinates, u = i.style?.color || "#999999", l = i.style?.weight || 1, c = Math.max(1, Math.min(5, l)), g = this.Leaflet.polyline(
          [[n, a], [h, d]],
          {
            color: u,
            weight: c,
            opacity: 0.7
          }
        );
        g.on("click", (y) => {
          if (this.onEdgeClick) {
            const f = y.latlng;
            this.onEdgeClick({
              edge: i,
              position: { x: f.lng, y: f.lat },
              originalEvent: y.originalEvent,
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
    const s = this.julian(t) - 2451545, i = (357.5291 + 0.98560028 * s) * Math.PI / 180, o = (1.9148 * Math.sin(i) + 0.02 * Math.sin(2 * i) + 3e-4 * Math.sin(3 * i)) * Math.PI / 180, r = 102.9372 * Math.PI / 180, n = i + o + r + Math.PI, a = 23.4397 * Math.PI / 180, h = Math.atan2(
      Math.sin(n) * Math.cos(a) - Math.tan(0) * Math.sin(a),
      Math.cos(n)
    ), d = Math.asin(
      Math.sin(0) * Math.cos(a) + Math.cos(0) * Math.sin(a) * Math.sin(n)
    ), u = (218.316 + 13.176396 * s) * Math.PI / 180, l = (134.963 + 13.064993 * s) * Math.PI / 180, c = (93.272 + 13.22935 * s) * Math.PI / 180, g = u + 6.289 * Math.sin(l) * Math.PI / 180, p = 5.128 * Math.sin(c) * Math.PI / 180, y = Math.atan2(
      Math.sin(g) * Math.cos(a) - Math.tan(p) * Math.sin(a),
      Math.cos(g)
    ), f = Math.asin(
      Math.sin(p) * Math.cos(a) + Math.cos(p) * Math.sin(a) * Math.sin(g)
    ), w = 385001 - 20905 * Math.cos(l), m = 149598e3, b = Math.acos(
      Math.sin(d) * Math.sin(f) + Math.cos(d) * Math.cos(f) * Math.cos(h - y)
    ), C = Math.atan2(
      m * Math.sin(b),
      w - m * Math.cos(b)
    ), E = Math.atan2(
      Math.cos(d) * Math.sin(h - y),
      Math.sin(d) * Math.cos(f) - Math.cos(d) * Math.sin(f) * Math.cos(h - y)
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
      const i = this.julian(t), o = i - 2451545, r = (218.316 + 13.176396 * o) * Math.PI / 180, n = (134.963 + 13.064993 * o) * Math.PI / 180, a = (93.272 + 13.22935 * o) * Math.PI / 180, h = r + 6.289 * Math.sin(n) * Math.PI / 180, d = 5.128 * Math.sin(a) * Math.PI / 180, u = 23.4397 * Math.PI / 180, l = Math.atan2(
        Math.sin(h) * Math.cos(u) - Math.tan(d) * Math.sin(u),
        Math.cos(h)
      ), c = Math.asin(
        Math.sin(d) * Math.cos(u) + Math.cos(d) * Math.sin(u) * Math.sin(h)
      ), p = this.GMST(i) * Math.PI / 12, y = c;
      let f = l - p;
      const w = y * 180 / Math.PI;
      let m = f * 180 / Math.PI;
      return m = m % 360, m > 180 ? m -= 360 : m < -180 && (m += 360), [w, m];
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
    this.lightingToggleButton.innerHTML = K("icon-sun", 16), t ? (this.lightingToggleButton.style.backgroundColor = "#fff9c4", this.lightingToggleButton.style.boxShadow = "inset 0 2px 4px rgba(0, 0, 0, 0.2)", this.lightingToggleButton.style.transform = "translateY(1px)") : (this.lightingToggleButton.style.backgroundColor = "#fff", this.lightingToggleButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.lightingToggleButton.style.transform = "translateY(0)"), this.lightingToggleButton.style.color = "#333";
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
    const t = this.nodes.filter((d) => {
      if (!d.coordinates || !Array.isArray(d.coordinates) || d.coordinates.length !== 2) return !1;
      const [u, l] = d.coordinates;
      return Number.isFinite(u) && Number.isFinite(l);
    }), e = this.nodes.filter((d) => {
      if (!d.coordinates || !Array.isArray(d.coordinates) || d.coordinates.length !== 2) return !0;
      const [u, l] = d.coordinates;
      return !Number.isFinite(u) || !Number.isFinite(l);
    }), s = [], i = [];
    if (t.forEach((d) => {
      if (d.coordinates && d.coordinates.length === 2) {
        const [u, l] = d.coordinates;
        Number.isFinite(u) && Number.isFinite(l) && (s.push(u), i.push(l));
      }
    }), e.length > 0) {
      const g = Math.ceil(Math.sqrt(e.length)), y = 50 / (Math.ceil(e.length / g) + 1), f = 32 / (g + 1);
      e.forEach((w, m) => {
        const b = Math.floor(m / g), C = m % g, E = -50 + (b + 1) * y, v = -32 + (C + 1) * f;
        s.push(E), i.push(v);
      });
    }
    if (s.length === 0)
      return;
    const o = Math.min(...s), r = Math.max(...s), n = Math.min(...i), a = Math.max(...i), h = this.Leaflet.latLngBounds(
      [o, n],
      [r, a]
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
function Z(I, t = {}) {
  P();
  let e;
  if (typeof I == "string") {
    const l = document.querySelector(I);
    if (!l || !(l instanceof HTMLElement))
      throw new Error(`Container element not found: ${I}`);
    e = l;
  } else
    e = I;
  const s = t.enabledViews || ["graph", "map2d", "globe3d"], i = t.initialView || (s.includes("map2d") ? "map2d" : s[0]), o = t.graph?.mode || "view", r = t.graph?.editable || !1, n = t.tileServers, a = new U(e, s);
  t.time && a.setTime(t.time), typeof t.enableLighting == "boolean" && a.setLightingEnabled(t.enableLighting), t.tables && a.setTableOptions(t.tables), t.events?.onNodeClick && a.setOnNodeClickCallback(t.events.onNodeClick);
  const h = t.events?.onNodeClick ? (l) => {
    t.events.onNodeClick(l), a.highlightNodeRow(l.node.id);
  } : void 0, d = (l) => {
    t.events?.onEdgeClick && t.events.onEdgeClick(l), a.highlightEdgeRow(l.edge.id);
  }, u = (l) => {
    t.events?.onGroupClick && t.events.onGroupClick(l), a.highlightGroupRow(l.group.id);
  };
  if (s.includes("graph")) {
    const l = document.createElement("div");
    l.style.width = "100%", l.style.height = "100%", a.getViewContainer().appendChild(l);
    const c = new V(
      l,
      h || t.events?.onNodeClick,
      t.events?.onSave,
      r,
      d,
      u
    );
    if (c.setModeChangeCallback(() => {
      a.updateEditToggleButton(), a.updateGraphButtons();
    }), c.setAlwaysShowEdgesChangeCallback((g) => {
      a.setAlwaysShowEdges(g);
    }), c.setGraphButtonsUpdateCallback(() => {
      a.updateGraphButtons();
    }), c.setMode(o), t.data) {
      const g = "groups" in t.data && Array.isArray(t.data.groups) ? t.data.groups : void 0;
      c.setData(t.data.nodes, t.data.edges, g);
    }
    a.registerView("graph", c);
  }
  if (s.includes("map2d") && t.loaders?.leaflet) {
    const l = document.createElement("div");
    l.style.width = "100%", l.style.height = "100%", a.getViewContainer().appendChild(l);
    const c = new q(
      l,
      h || t.events?.onNodeClick,
      t.loaders.leaflet,
      n,
      t.map2d,
      d
    );
    c.setAlwaysShowEdgesChangeCallback((g) => {
      a.setAlwaysShowEdges(g);
    }), c.setLightingChangeCallback((g) => {
      a.setLightingEnabled(g);
    }), t.data && c.setData(t.data.nodes, t.data.edges), a.registerView("map2d", c);
  }
  if (s.includes("globe3d") && t.loaders?.cesium)
    try {
      const l = document.createElement("div");
      l.style.width = "100%", l.style.height = "100%", a.getViewContainer().appendChild(l);
      const c = new j(
        l,
        h || t.events?.onNodeClick,
        t.loaders.cesium,
        t.globe3d ? {
          customTileUrl: t.globe3d.customTileUrl,
          customTileUrls: t.globe3d.customTileUrls
        } : void 0,
        n,
        d
      );
      c.setAlwaysShowEdgesChangeCallback((g) => {
        a.setAlwaysShowEdges(g);
      }), c.setLightingChangeCallback((g) => {
        a.setLightingEnabled(g);
      }), t.data && c.setData(t.data.nodes, t.data.edges), a.registerView("globe3d", c);
    } catch {
    }
  if (a.setInitialView(i), t.data) {
    const l = "groups" in t.data && Array.isArray(t.data.groups) ? t.data.groups : void 0;
    a.setData(t.data.nodes, t.data.edges, l);
  }
  return {
    setData(l) {
      const c = a.getView("graph");
      c && c.setData(l.nodes, l.edges, l.groups);
      const g = a.getView("map2d");
      g && g.setData(l.nodes, l.edges);
      const p = a.getView("globe3d");
      p && p.setData(l.nodes, l.edges), a.setData(l.nodes, l.edges, l.groups);
    },
    setView(l) {
      a.switchView(l);
    },
    getView() {
      const l = a.getCurrentView();
      if (!l)
        throw new Error("No view is currently active");
      return l;
    },
    setMode(l) {
      const c = a.getView("graph");
      c && c.setMode(l);
    },
    getMode() {
      const l = a.getView("graph");
      return l ? l.getMode() : null;
    },
    resize() {
      a.resize();
    },
    destroy() {
      a.destroy();
    },
    selectNode(l) {
      const c = a.getView("graph");
      c && c.selectNode && c.selectNode(l);
      const g = a.getView("map2d");
      g && g.selectNode && g.selectNode(l);
      const p = a.getView("globe3d");
      p && p.selectNode && p.selectNode(l);
    },
    setTime(l) {
      a.setTime(l);
    },
    setLighting(l) {
      a.setLightingEnabled(l);
    }
  };
}
export {
  Z as createRelatosViewer
};
