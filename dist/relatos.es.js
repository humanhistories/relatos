const G = `<!-- relatos/src/assets/icons/icons.svg -->
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
let z = !1;
const W = "relatos-icons-sprite";
function P() {
  if (z)
    return;
  if (document.getElementById(W)) {
    z = !0;
    return;
  }
  const I = document.createElement("div");
  I.id = W, I.style.display = "none", I.innerHTML = G, document.body.appendChild(I), z = !0;
}
function D(I, t = 16) {
  return P(), `<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <use href="#${I}"></use>
  </svg>`;
}
class V {
  constructor(t, e) {
    this.currentView = null, this.views = /* @__PURE__ */ new Map(), this.tabButtons = /* @__PURE__ */ new Map(), this.editToggleButton = null, this.alwaysShowEdgesButton = null, this.lightingToggleButton = null, this.tileTypeButton = null, this.moonToggleButton = null, this.fitCenterButton = null, this.deleteBendButton = null, this.cancelEditButton = null, this.tableContainer = null, this.nodesTableContainer = null, this.edgesTableContainer = null, this.tableOptions = null, this.nodes = [], this.edges = [], this.isExternalTableContainer = !1, this.hasEdges = !1, this.sharedAlwaysShowEdges = !1, this.sharedLightingEnabled = !1, this.sharedTime = null, this.sharedTileServerIndex = 0, this.container = t, this.enabledViews = e, P(), this.container.style.display = "flex", this.container.style.flexDirection = "column", this.container.style.width = "100%", this.tabContainer = document.createElement("div"), this.tabContainer.style.display = "flex", this.tabContainer.style.gap = "4px", this.tabContainer.style.padding = "8px", this.tabContainer.style.borderBottom = "none", this.tabContainer.style.backgroundColor = "transparent", this.tabContainer.style.position = "absolute", this.tabContainer.style.top = "0", this.tabContainer.style.left = "0", this.tabContainer.style.right = "0", this.tabContainer.style.zIndex = "1000", this.tabContainer.style.pointerEvents = "none", this.viewContainer = document.createElement("div"), this.viewContainer.style.flex = "1 1 0%", this.viewContainer.style.position = "relative", this.viewContainer.style.overflow = "hidden", this.viewContainer.style.minHeight = "0", this.createTabButtons(), this.createCommonControlsContainer(), this.container.appendChild(this.viewContainer), this.viewContainer.appendChild(this.tabContainer);
  }
  /**
   * Initialize table display options
   */
  setTableOptions(t) {
    this.tableOptions = t, t && (t.nodes?.format || t.edges?.format) ? this.createTableContainer() : this.tableContainer && (this.isExternalTableContainer ? (this.tableContainer.innerHTML = "", this.tableContainer = null, this.isExternalTableContainer = !1) : this.container.contains(this.tableContainer) && (this.container.removeChild(this.tableContainer), this.tableContainer = null), this.nodesTableContainer = null, this.edgesTableContainer = null);
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
   * Set node and edge data
   */
  setData(t, e) {
    this.nodes = t, this.edges = e, this.hasEdges = Array.isArray(e) && e.length > 0, this.updateTables(), this.updateAlwaysShowEdgesButtonVisibility();
  }
  /**
   * Update tables
   */
  updateTables() {
    !this.tableOptions || !this.tableContainer || (this.tableContainer.innerHTML = "", this.tableOptions.nodes?.format && (this.nodesTableContainer = this.createTable("nodes", this.tableOptions.nodes.header || "", this.tableOptions.nodes.format, this.nodes, "node"), this.tableContainer.appendChild(this.nodesTableContainer)), this.tableOptions.edges?.format && (this.edgesTableContainer = this.createTable("edges", this.tableOptions.edges.header || "", this.tableOptions.edges.format, this.edges, "edge"), this.tableContainer.appendChild(this.edgesTableContainer)));
  }
  /**
   * Create table
   */
  createTable(t, e, s, i, o) {
    const n = document.createElement("div"), r = document.createElement("table");
    if (r.style.width = "100%", r.style.borderCollapse = "collapse", !document.getElementById("relatos-table-styles")) {
      const h = document.createElement("style");
      h.id = "relatos-table-styles", h.textContent = `
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
      `, document.head.appendChild(h);
    }
    r.className = "relatos-table";
    const a = document.createElement("thead");
    if (e)
      a.innerHTML = e;
    else {
      const h = document.createElement("tr");
      a.appendChild(h);
    }
    r.appendChild(a);
    const c = document.createElement("tbody");
    for (const h of i) {
      const l = document.createElement("tr");
      l.id = `${o}-${h.id}`, l.style.cursor = "pointer";
      let d = s;
      if ("info" in h && h.info)
        for (const [g, u] of Object.entries(h.info)) {
          const w = new RegExp(`\\{\\{info\\.${g}\\}\\}`, "g");
          d = d.replace(w, String(u || ""));
        }
      if (d = d.replace(/\{\{id\}\}/g, String(h.id || "")), d = d.replace(/\{\{label\}\}/g, String("label" in h && h.label || "")), d = d.replace(/\{\{type\}\}/g, String("type" in h && h.type || "")), "coordinates" in h && h.coordinates && (d = d.replace(/\{\{coordinates\.0\}\}/g, String(h.coordinates[0] || "")), d = d.replace(/\{\{coordinates\.1\}\}/g, String(h.coordinates[1] || "")), d = d.replace(/\{\{latitude\}\}/g, String(h.coordinates[0] || "")), d = d.replace(/\{\{longitude\}\}/g, String(h.coordinates[1] || ""))), h.style && typeof h.style == "object") {
        const g = h.style;
        d = d.replace(/\{\{style\.color\}\}/g, String(g.color ?? "")), d = d.replace(/\{\{style\.borderColor\}\}/g, String(g.borderColor ?? "")), d = d.replace(/\{\{style\.width\}\}/g, String(g.width ?? "")), d = d.replace(/\{\{style\.height\}\}/g, String(g.height ?? "")), d = d.replace(/\{\{style\.weight\}\}/g, String(g.weight ?? "")), d = d.replace(/\{\{style\.label\}\}/g, String(g.label ?? "")), d = d.replace(/\{\{style\.srcLabel\}\}/g, String(g.srcLabel ?? "")), d = d.replace(/\{\{style\.dstLabel\}\}/g, String(g.dstLabel ?? ""));
      }
      "src" in h && (d = d.replace(/\{\{src\}\}/g, String(h.src || "")), d = d.replace(/\{\{dst\}\}/g, String(h.dst || "")), d = d.replace(/\{\{relType\}\}/g, String(h.relType || ""))), l.innerHTML = d, l.addEventListener("click", () => {
        if (o === "node") {
          if (this.highlightAndScrollToRow(l), !this.currentView)
            return;
          const g = this.views.get(this.currentView);
          g?.selectNode && g.selectNode(h.id);
        }
      }), c.appendChild(l);
    }
    return r.appendChild(c), n.appendChild(r), n;
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
    const e = t.isMoonEnabled?.() || !1, s = t.getTime?.() || null, i = s ? new Date(s) : /* @__PURE__ */ new Date(), o = t.getMoonPhase?.(i) || 0, n = t.getMoonPhaseIcon?.(o, 16) || "🌑";
    this.moonToggleButton.innerHTML = n, e ? (this.moonToggleButton.style.backgroundColor = "#fff9c4", this.moonToggleButton.style.boxShadow = "inset 0 2px 4px rgba(0, 0, 0, 0.2)", this.moonToggleButton.style.transform = "translateY(1px)", this.moonToggleButton.setAttribute("title", "Hide moon")) : (this.moonToggleButton.style.backgroundColor = "#fff", this.moonToggleButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.moonToggleButton.style.transform = "translateY(0)", this.moonToggleButton.setAttribute("title", "Show moon"));
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
function X(I, t = 16) {
  return P(), `<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <use href="#${I}"></use>
  </svg>`;
}
class U {
  constructor(t, e, s, i = !1, o) {
    this.nodes = [], this.edges = [], this.mode = "view", this.editable = !1, this.nodeElements = /* @__PURE__ */ new Map(), this.edgeElements = /* @__PURE__ */ new Map(), this.selectedEdgeId = null, this.selectedNodeId = null, this.zoomedNodeId = null, this.anchorHandles = /* @__PURE__ */ new Map(), this.draggingAnchor = null, this.bendHandles = /* @__PURE__ */ new Map(), this.draggingBend = null, this.draggingNode = null, this.panning = null, this.lastPanEndTime = 0, this.resizingNode = null, this.saveDebounceTimer = null, this.SAVE_DEBOUNCE_MS = 500, this.resizeRenderTimer = null, this.editToggleButton = null, this.alwaysShowEdgesButton = null, this.alwaysShowEdges = !1, this.hoveredEdgePairKey = null, this.tappedEdgePairKey = null, this.snapshotBeforeEdit = null, this.edgeClickTimers = /* @__PURE__ */ new WeakMap(), this.offsetX = 0, this.offsetY = 0, this.zoom = 1, this.pinchDistance = null, this.pinchCenter = null, this.initialZoom = 1, this.popupElement = null, this.popupNodeId = null, this.DEFAULT_NODE_WIDTH = 120, this.DEFAULT_NODE_HEIGHT = 60, this.EDGE_DEFAULT_COLOR = "#999", this.EDGE_HOVER_COLOR = "#333", this.EDGE_DEFAULT_WIDTH = 1.5, this.EDGE_HOVER_WIDTH = 3, this.EDGE_MIN_WEIGHT = 1, this.EDGE_MAX_WEIGHT = 10, this.NODE_PADDING = 10, this.HANDLE_RADIUS = 8, this.BEND_HANDLE_RADIUS = 7, this.HIT_PATH_WIDTH = 32, this.controlButtonsContainer = null, this.deleteBendButton = null, this.fitCenterButton = null, this.cancelEditButton = null, this.container = t, this.onNodeClick = e ? (n) => {
      this.popupNodeId === n.node.id && this.popupElement && this.popupElement.style.opacity === "1" ? this.hidePopup() : this.showPopup(n.node), e(n);
    } : void 0, this.onSave = s, this.editable = i, this.onEdgeClick = o, this.container.style.position = "relative", this.container.style.width = "100%", this.container.style.height = "100%", this.container.style.overflow = "visible", this.createAlwaysShowEdgesButton(), this.alwaysShowEdgesButton && (this.alwaysShowEdgesButton.style.display = "none", this.alwaysShowEdgesButton.parentNode && this.alwaysShowEdgesButton.parentNode.removeChild(this.alwaysShowEdgesButton)), this.createEditToggleButton(), this.editToggleButton && (this.editToggleButton.style.display = "none", this.editToggleButton.parentNode && this.editToggleButton.parentNode.removeChild(this.editToggleButton)), this.createControlButtons(), this.controlButtonsContainer && (this.controlButtonsContainer.style.display = "none", this.controlButtonsContainer.parentNode && this.controlButtonsContainer.parentNode.removeChild(this.controlButtonsContainer)), this.createAttributionLabel(), this.svgWrapper = document.createElement("div"), this.svgWrapper.style.position = "absolute", this.svgWrapper.style.top = "0", this.svgWrapper.style.left = "0", this.svgWrapper.style.width = "100%", this.svgWrapper.style.height = "100%", this.svgWrapper.style.transformOrigin = "0 0", this.svgWrapper.style.pointerEvents = "none", this.container.appendChild(this.svgWrapper), this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"), this.svg.style.width = "100%", this.svg.style.height = "100%", this.svg.style.display = "block", this.svg.style.pointerEvents = "auto", this.svgWrapper.appendChild(this.svg), this.svgDefs = document.createElementNS("http://www.w3.org/2000/svg", "defs"), this.createArrowMarkers(), this.svg.appendChild(this.svgDefs), this.edgesGroup = document.createElementNS("http://www.w3.org/2000/svg", "g"), this.edgesGroup.setAttribute("class", "edges"), this.svg.appendChild(this.edgesGroup), this.nodesGroup = document.createElementNS("http://www.w3.org/2000/svg", "g"), this.nodesGroup.setAttribute("class", "nodes"), this.svg.appendChild(this.nodesGroup), this.anchorHandlesGroup = document.createElementNS("http://www.w3.org/2000/svg", "g"), this.anchorHandlesGroup.setAttribute("class", "anchor-handles"), this.anchorHandlesGroup.style.display = "none", this.svg.appendChild(this.anchorHandlesGroup), this.bendHandlesGroup = document.createElementNS("http://www.w3.org/2000/svg", "g"), this.bendHandlesGroup.setAttribute("class", "bend-handles"), this.bendHandlesGroup.style.display = "none", this.svg.appendChild(this.bendHandlesGroup), this.edgeLabelsGroup = document.createElementNS("http://www.w3.org/2000/svg", "g"), this.edgeLabelsGroup.setAttribute("class", "edge-labels"), this.svg.appendChild(this.edgeLabelsGroup), this.updateTransform(), this.setupEventListeners();
  }
  /**
   * Create always show edges toggle button
   */
  createAlwaysShowEdgesButton() {
    this.alwaysShowEdgesButton = document.createElement("button"), this.alwaysShowEdgesButton.className = "relatos-always-show-edges-toggle", this.alwaysShowEdgesButton.setAttribute("aria-label", "Always show all edges"), this.alwaysShowEdgesButton.setAttribute("title", "Always show all edges"), this.alwaysShowEdgesButton.style.padding = "6px", this.alwaysShowEdgesButton.style.border = "1px solid #ccc", this.alwaysShowEdgesButton.style.borderRadius = "4px", this.alwaysShowEdgesButton.style.backgroundColor = "#fff", this.alwaysShowEdgesButton.style.cursor = "pointer", this.alwaysShowEdgesButton.style.fontSize = "16px", this.alwaysShowEdgesButton.style.lineHeight = "1", this.alwaysShowEdgesButton.style.width = "32px", this.alwaysShowEdgesButton.style.height = "32px", this.alwaysShowEdgesButton.style.display = "flex", this.alwaysShowEdgesButton.style.alignItems = "center", this.alwaysShowEdgesButton.style.justifyContent = "center", this.alwaysShowEdgesButton.style.transition = "all 0.2s", this.alwaysShowEdgesButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.alwaysShowEdgesButton.style.pointerEvents = "auto", this.alwaysShowEdgesButton.style.color = "#000000", this.alwaysShowEdgesButton.innerHTML = X("icon-relations", 16), this.alwaysShowEdgesButton.addEventListener("click", () => {
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
    this.editToggleButton && (this.editToggleButton.innerHTML = X("icon-edit", 16), this.mode === "edit" ? (this.editToggleButton.setAttribute("aria-label", "Exit edit mode"), this.editToggleButton.setAttribute("title", "Exit edit mode"), this.editToggleButton.classList.add("relatos-edit-toggle-active"), this.editToggleButton.style.backgroundColor = "#fff9c4", this.editToggleButton.style.color = "red", this.editToggleButton.style.borderColor = "#999", this.editToggleButton.style.boxShadow = "inset 0 2px 4px rgba(0, 0, 0, 0.2)", this.editToggleButton.style.transform = "translateY(1px)") : (this.editToggleButton.setAttribute("aria-label", "Enter edit mode"), this.editToggleButton.setAttribute("title", "Enter edit mode"), this.editToggleButton.classList.remove("relatos-edit-toggle-active"), this.editToggleButton.style.backgroundColor = "#fff", this.editToggleButton.style.color = "#333", this.editToggleButton.style.borderColor = "#ccc", this.editToggleButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.editToggleButton.style.transform = "translateY(0)"));
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
    this.controlButtonsContainer = document.createElement("div"), this.controlButtonsContainer.style.position = "absolute", this.controlButtonsContainer.style.top = "8px", this.controlButtonsContainer.style.right = "8px", this.controlButtonsContainer.style.display = "flex", this.controlButtonsContainer.style.gap = "4px", this.controlButtonsContainer.style.zIndex = "1000", this.controlButtonsContainer.style.pointerEvents = "none", this.deleteBendButton = this.createIconButton(X("icon-trash", 16), "Delete bend point", "Delete bend point", () => {
      this.selectedEdgeId && this.deleteNearestBendPoint();
    }), this.deleteBendButton.style.display = "none", this.fitCenterButton = this.createIconButton(X("icon-home", 16), "Fit and center", "Fit and center", () => {
      this.fitAndCenter();
    }), this.fitCenterButton.style.display = "none", this.cancelEditButton = this.createIconButton(X("icon-undo", 16), "Cancel edit", "Cancel edit and restore previous state", () => {
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
    return o.innerHTML = t, o.setAttribute("aria-label", e), o.setAttribute("title", s), o.style.padding = "6px", o.style.border = "1px solid #ccc", o.style.borderRadius = "4px", o.style.backgroundColor = "#fff", o.style.cursor = "pointer", o.style.fontSize = "16px", o.style.width = "32px", o.style.height = "32px", o.style.display = "flex", o.style.alignItems = "center", o.style.justifyContent = "center", o.style.pointerEvents = "auto", o.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", o.style.transition = "all 0.2s", o.addEventListener("click", (n) => {
      n.stopPropagation(), i();
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
    const o = this.container.getBoundingClientRect(), n = e - o.left, r = s - o.top, a = {
      x: n / this.zoom - this.offsetX,
      y: r / this.zoom - this.offsetY
    }, c = i.x - a.x, h = i.y - a.y;
    this.offsetX += c, this.offsetY += h;
  }
  /**
   * Convert screen coordinates to SVG coordinates accounting for offset and zoom
   * With DOM scale transform, wrapper size is (100% / zoom) and then scaled by zoom
   * The visual size is always 100%, so we can use container coordinates
   */
  screenToSvg(t, e) {
    const s = this.container.getBoundingClientRect(), i = t - s.left, o = e - s.top, n = i / this.zoom, r = o / this.zoom;
    return {
      x: n - this.offsetX,
      y: r - this.offsetY
    };
  }
  /**
   * Update transform: zoom on DOM wrapper, translate on SVG groups
   */
  updateTransform() {
    if (this.popupNodeId && this.popupElement) {
      const n = this.nodes.find((r) => r.id === this.popupNodeId);
      n && this.updatePopupPosition(n);
    }
    const t = isFinite(this.zoom) && this.zoom > 0 ? this.zoom : 1, e = isFinite(this.offsetX) ? this.offsetX : 0, s = isFinite(this.offsetY) ? this.offsetY : 0, i = 1 / t;
    this.svgWrapper.style.width = `${i * 100}%`, this.svgWrapper.style.height = `${i * 100}%`, this.svgWrapper.style.transform = `scale(${t})`;
    const o = `translate(${-e}, ${-s})`;
    this.nodesGroup.setAttribute("transform", o), this.edgesGroup.setAttribute("transform", o), this.anchorHandlesGroup.setAttribute("transform", o), this.bendHandlesGroup.setAttribute("transform", o), this.edgeLabelsGroup && this.edgeLabelsGroup.setAttribute("transform", o);
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
    for (const p of this.nodes)
      if (p.position) {
        const m = p.style || {}, f = m.width || this.DEFAULT_NODE_WIDTH, b = m.height || this.DEFAULT_NODE_HEIGHT;
        e = Math.min(e, p.position.x - f / 2), s = Math.min(s, p.position.y - b / 2), i = Math.max(i, p.position.x + f / 2), o = Math.max(o, p.position.y + b / 2);
      }
    if (e === 1 / 0)
      return;
    const n = 60;
    e -= n, s -= n, i += n, o += n;
    const r = (e + i) / 2, a = (s + o) / 2, c = i - e, h = o - s, l = this.container.getBoundingClientRect();
    if (l.width <= 0 || l.height <= 0 || !isFinite(c) || !isFinite(h) || c <= 0 || h <= 0)
      return;
    const d = l.width / c, g = l.height / h;
    if (!isFinite(d) || !isFinite(g))
      return;
    const u = Math.min(d, g, 1);
    this.zoom = u;
    const w = l.width / (2 * this.zoom), y = l.height / (2 * this.zoom);
    !isFinite(r) || !isFinite(a) || !isFinite(w) || !isFinite(y) || (this.offsetX = r - w, this.offsetY = a - y, this.svg.removeAttribute("viewBox"), this.updateTransform(), this.render());
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
    for (const p of this.nodes)
      if (p.position) {
        const m = p.style || {}, f = m.width || this.DEFAULT_NODE_WIDTH, b = m.height || this.DEFAULT_NODE_HEIGHT;
        e = Math.min(e, p.position.x - f / 2), s = Math.min(s, p.position.y - b / 2), i = Math.max(i, p.position.x + f / 2), o = Math.max(o, p.position.y + b / 2);
      }
    if (e === 1 / 0)
      return;
    const n = 60;
    e -= n, s -= n, i += n, o += n;
    const r = (e + i) / 2, a = (s + o) / 2, c = i - e, h = o - s, l = this.container.getBoundingClientRect();
    if (l.width <= 0 || l.height <= 0 || !isFinite(c) || !isFinite(h) || c <= 0 || h <= 0)
      return;
    const d = l.width / c, g = l.height / h;
    if (!isFinite(d) || !isFinite(g))
      return;
    const u = Math.min(d, g, 1), w = l.width / 2, y = l.height / 2;
    this.animateZoomToPoint(u, w, y, r, a);
  }
  /**
   * Setup event listeners (using Pointer Events for touch support)
   */
  setupEventListeners() {
    this.svg.addEventListener("click", (i) => {
      const o = i.target;
      o.closest("[data-node-id]") || o.getAttribute("data-edge-pair-key") || o.getAttribute("data-hit-edge-pair-key") || Date.now() - (this.lastPanEndTime || 0) < 100 || this.mode === "view" && this.hidePopup();
    }), this.svg.addEventListener("pointerdown", (i) => {
      const o = i.target, n = o.closest("[data-node-id]")?.getAttribute("data-node-id"), r = o.getAttribute("data-edge-pair-key") || o.getAttribute("data-hit-edge-pair-key"), a = o.getAttribute("data-handle-type"), c = o.getAttribute("data-bend-index");
      if (this.mode === "edit") {
        const h = o.getAttribute("data-resize-side");
        if (h) {
          const l = o.getAttribute("data-node-id");
          if (l) {
            const d = this.nodes.find((g) => g.id === l);
            if (d?.position) {
              const g = d.style || {}, u = g.width || this.DEFAULT_NODE_WIDTH, w = g.height || this.DEFAULT_NODE_HEIGHT, y = this.screenToSvg(i.clientX, i.clientY);
              this.resizingNode = {
                nodeId: l,
                side: h,
                startX: y.x,
                startY: y.y,
                startWidth: u,
                startHeight: w,
                startNodeX: d.position.x,
                startNodeY: d.position.y
              }, i.target.setPointerCapture(i.pointerId), i.preventDefault(), i.stopPropagation();
              return;
            }
          }
        }
        if (n) {
          const l = this.nodes.find((d) => d.id === n);
          if (l?.position) {
            const d = this.screenToSvg(i.clientX, i.clientY);
            this.draggingNode = {
              nodeId: n,
              offsetX: d.x - l.position.x,
              offsetY: d.y - l.position.y
            }, i.target.setPointerCapture(i.pointerId), i.preventDefault(), i.stopPropagation();
            return;
          }
        } else if (c !== null) {
          const l = o.getAttribute("data-edge-id");
          if (l) {
            const d = this.screenToSvg(i.clientX, i.clientY), g = this.edges.find((u) => u.id === l);
            if (g) {
              const [u, w] = g.src < g.dst ? [g.src, g.dst] : [g.dst, g.src], y = `${u}||${w}`, p = this.groupEdgesByPair(this.edges).find((m) => m.key === y);
              if (p && p.bends) {
                const m = parseInt(c, 10);
                if (m >= 0 && m < p.bends.length) {
                  const f = p.bends[m];
                  this.draggingBend = {
                    edgeId: l,
                    bendIndex: m,
                    offsetX: d.x - f.x,
                    offsetY: d.y - f.y
                  }, i.preventDefault(), i.stopPropagation();
                  return;
                }
              }
            }
          }
        } else if (a) {
          const l = o.getAttribute("data-edge-id");
          if (l) {
            const d = this.screenToSvg(i.clientX, i.clientY), g = this.edges.find((u) => u.id === l);
            if (g) {
              const [u, w] = g.src < g.dst ? [g.src, g.dst] : [g.dst, g.src], y = `${u}||${w}`, p = this.groupEdgesByPair(this.edges).find((m) => m.key === y);
              if (p) {
                const m = a === "src" ? p.a : p.b, f = this.nodes.find((b) => b.id === m);
                if (f) {
                  const b = a === "src" ? p.b : p.a, C = this.nodes.find((E) => E.id === b);
                  if (C) {
                    const E = a === "src" ? p.srcAnchor || this.estimateAnchor(f, C) : p.dstAnchor || this.estimateAnchor(f, C), x = f.style || {}, B = x.width || this.DEFAULT_NODE_WIDTH, T = x.height || this.DEFAULT_NODE_HEIGHT, A = this.calculateAnchorPosition(f, E, B, T);
                    this.draggingAnchor = {
                      edgeId: l,
                      type: a,
                      offsetX: d.x - A.x,
                      offsetY: d.y - A.y
                    }, i.preventDefault(), i.stopPropagation();
                    return;
                  }
                }
              }
            }
          }
        } else r || this.deselectEdge();
      } else if (n) {
        const h = this.nodes.find((l) => l.id === n);
        if (h && this.onNodeClick) {
          const l = this.screenToSvg(i.clientX, i.clientY);
          this.onNodeClick({
            node: h,
            position: { x: l.x, y: l.y },
            originalEvent: i
          });
        }
      } else r || (this.deselectEdge(), this.tappedEdgePairKey && (this.tappedEdgePairKey = null, this.render()));
    });
    let t = 0, e = null;
    this.svg.addEventListener("pointerdown", (i) => {
      const o = i.target, n = o.getAttribute("data-edge-pair-key") || o.getAttribute("data-hit-edge-pair-key");
      if (this.mode === "edit" && n) {
        const r = Date.now();
        if (r - t < 300 && e === o) {
          const c = this.groupEdgesByPair(this.edges).find((h) => h.key === n);
          if (c && c.edges.length > 0) {
            this.insertBendPoint(c.edges[0].id, i), i.preventDefault(), i.stopPropagation(), t = 0, e = null;
            return;
          }
        }
        t = r, e = o;
      }
    }), this.container.addEventListener("dblclick", (i) => {
      if (this.mode !== "edit")
        return;
      const o = i.target;
      if (!o || !this.container.contains(o))
        return;
      const n = o.getAttribute("data-hit-edge-pair-key") || o.getAttribute("data-edge-pair-key");
      if (n) {
        const a = this.groupEdgesByPair(this.edges).find((c) => c.key === n);
        if (a && a.edges.length > 0) {
          this.insertBendPoint(a.edges[0].id, i), i.preventDefault(), i.stopPropagation();
          return;
        }
      }
      let r = o;
      for (; r && r !== this.svg; ) {
        const a = r.getAttribute("data-hit-edge-pair-key") || r.getAttribute("data-edge-pair-key");
        if (a) {
          const c = this.groupEdgesByPair(this.edges).find((h) => h.key === a);
          if (c && c.edges.length > 0) {
            this.insertBendPoint(c.edges[0].id, i), i.preventDefault(), i.stopPropagation();
            return;
          }
        }
        r = r.parentElement;
      }
    }, !0);
    const s = /* @__PURE__ */ new Map();
    this.svg.addEventListener("pointerdown", (i) => {
      if (i.pointerType === "touch" && (s.set(i.pointerId, i), s.size === 2)) {
        const o = Array.from(s.values()), [n, r] = o;
        this.pinchDistance = Math.hypot(r.clientX - n.clientX, r.clientY - n.clientY), this.pinchCenter = {
          x: (n.clientX + r.clientX) / 2,
          y: (n.clientY + r.clientY) / 2
        }, this.initialZoom = this.zoom, i.preventDefault();
      }
    }), this.svg.addEventListener("pointermove", (i) => {
      if (i.pointerType === "touch" && s.set(i.pointerId, i), this.pinchDistance !== null && this.pinchCenter !== null && s.size === 2) {
        const c = Array.from(s.values()), [h, l] = c, g = Math.hypot(l.clientX - h.clientX, l.clientY - h.clientY) / this.pinchDistance, u = Math.pow(g, 1.5), w = Math.max(0.1, Math.min(5, this.initialZoom * u));
        this.zoomToPoint(w, this.pinchCenter.x, this.pinchCenter.y), this.updateTransform(), this.render(), i.preventDefault();
        return;
      }
      const o = i.target, n = o instanceof HTMLButtonElement || o.closest("button") !== null || o.closest(".relatos-always-show-edges-toggle") !== null || o.closest(".relatos-edit-toggle") !== null || o.closest(".relatos-control-buttons") !== null, r = i.pointerType === "touch" && s.size === 1, a = i.pointerType === "mouse" && i.buttons === 1;
      if (!n && !this.resizingNode && !this.draggingNode && !this.draggingAnchor && !this.draggingBend && (r || a)) {
        if (!this.panning)
          this.panning = {
            startX: i.clientX,
            startY: i.clientY,
            startOffsetX: this.offsetX,
            startOffsetY: this.offsetY
          };
        else {
          const c = i.clientX - this.panning.startX, h = i.clientY - this.panning.startY, l = c / this.zoom, d = h / this.zoom;
          this.offsetX = this.panning.startOffsetX + l, this.offsetY = this.panning.startOffsetY + d, this.updateTransform(), this.render();
        }
        i.preventDefault();
        return;
      }
      this.resizingNode ? this.updateNodeSize(i) : this.draggingNode ? this.updateNodePosition(i) : this.draggingAnchor ? this.updateAnchorPosition(i) : this.draggingBend && this.updateBendPosition(i);
    }), document.addEventListener("pointermove", (i) => {
      i.pointerType === "touch" && s.set(i.pointerId, i);
      const o = i.target;
      if (!(o instanceof HTMLButtonElement || o.closest("button") !== null || o.closest(".relatos-always-show-edges-toggle") !== null || o.closest(".relatos-edit-toggle") !== null || o.closest(".relatos-control-buttons") !== null) && this.panning && !this.resizingNode && !this.draggingNode && !this.draggingAnchor && !this.draggingBend) {
        const r = i.pointerType === "touch" && s.size === 1, a = i.pointerType === "mouse" && (i.buttons === 1 || i.button === 0);
        if (r || a) {
          const c = i.clientX - this.panning.startX, h = i.clientY - this.panning.startY, l = c / this.zoom, d = h / this.zoom;
          this.offsetX = this.panning.startOffsetX - l, this.offsetY = this.panning.startOffsetY - d, this.updateTransform(), this.render(), i.preventDefault();
          return;
        }
      }
      this.resizingNode ? this.updateNodeSize(i) : this.draggingNode ? this.updateNodePosition(i) : this.draggingAnchor ? this.updateAnchorPosition(i) : this.draggingBend && this.updateBendPosition(i);
    }), this.svg.addEventListener("pointerup", (i) => {
      i.pointerType === "touch" && (s.delete(i.pointerId), s.size < 2 && (this.pinchDistance = null, this.pinchCenter = null)), i.target instanceof SVGElement && i.target.releasePointerCapture(i.pointerId), this.resizingNode && this.handleResizeEnd(), this.panning && (this.lastPanEndTime = Date.now()), this.panning = null, this.resizingNode = null, this.draggingNode = null, this.draggingAnchor = null, this.draggingBend = null;
    }), document.addEventListener("pointerup", (i) => {
      i.pointerType === "touch" && (s.delete(i.pointerId), s.size < 2 && (this.pinchDistance = null, this.pinchCenter = null)), this.resizingNode && this.handleResizeEnd(), this.panning && (this.lastPanEndTime = Date.now()), this.panning = null, this.resizingNode = null, this.draggingNode = null, this.draggingAnchor = null, this.draggingBend = null;
    }), this.svg.addEventListener("pointercancel", (i) => {
      i.pointerType === "touch" && (s.delete(i.pointerId), s.size < 2 && (this.pinchDistance = null, this.pinchCenter = null)), i.target instanceof SVGElement && i.target.releasePointerCapture(i.pointerId), this.resizingNode && this.handleResizeEnd(), this.panning && (this.lastPanEndTime = Date.now()), this.panning = null, this.resizingNode = null, this.draggingNode = null, this.draggingAnchor = null, this.draggingBend = null;
    }), this.container.addEventListener("keydown", (i) => {
      this.mode !== "edit" || !this.selectedEdgeId || (i.key === "Delete" || i.key === "Backspace") && (this.deleteNearestBendPoint(), i.preventDefault());
    }), this.container.setAttribute("tabindex", "0"), this.container.addEventListener("wheel", (i) => {
      if (i.ctrlKey || i.metaKey) {
        i.preventDefault();
        const o = Math.pow(1.5, -i.deltaY / 60), n = Math.max(0.1, Math.min(5, this.zoom * o));
        this.zoomToPoint(n, i.clientX, i.clientY), this.updateTransform(), this.render();
      } else {
        i.preventDefault();
        const o = Math.pow(1.5, i.deltaY / 60), n = Math.max(0.1, Math.min(5, this.zoom * o));
        this.zoomToPoint(n, i.clientX, i.clientY), this.updateTransform(), this.render();
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
  setData(t, e) {
    this.nodes = t, this.edges = e, this.ensureNodePositions(), this.render(), this.container.style.display !== "none" && this.container.offsetParent !== null && setTimeout(() => {
      const s = this.container.getBoundingClientRect();
      s.width > 0 && s.height > 0 && this.fitAndCenter();
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
    const i = e.style || {}, o = i.width || this.DEFAULT_NODE_WIDTH, n = i.height || this.DEFAULT_NODE_HEIGHT, r = e.position.x + o / 2, a = e.position.y + n / 2;
    o * this.zoom, n * this.zoom;
    const c = Math.min(s.width * 0.3, s.height * 0.3), h = c / o, l = c / n, d = Math.min(h, l), w = Math.max(0.5, Math.min(3, d)), y = s.width / 2, p = s.height / 2;
    this.animateZoomToPoint(w, y, p, r, a);
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
    const n = this.zoom, r = this.offsetX, a = this.offsetY, c = this.container.getBoundingClientRect(), h = c.width / (2 * t), l = c.height / (2 * t), d = i - h, g = o - l, u = 500, w = performance.now(), y = (p) => {
      const m = p - w, f = Math.min(m / u, 1), b = 1 - Math.pow(1 - f, 3), C = n + (t - n) * b, E = r + (d - r) * b, x = a + (g - a) * b;
      if (this.zoom = C, this.offsetX = E, this.offsetY = x, this.updateTransform(), this.render(), f >= 1) {
        const B = this.container.getBoundingClientRect(), T = B.width / 2, A = B.height / 2;
        T / this.zoom - this.offsetX, A / this.zoom - this.offsetY;
      }
      f < 1 && requestAnimationFrame(y);
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
    const i = this.container.getBoundingClientRect(), o = i.width || 1e3, n = i.height || 600, r = 2, a = o * r * 0.25, c = o * r * 0.75, h = n * r, l = a, d = n * r, g = 0, u = [];
    for (const y of this.nodes)
      if (y.position) {
        const p = y.style || {}, m = p.width || this.DEFAULT_NODE_WIDTH, f = p.height || this.DEFAULT_NODE_HEIGHT;
        if (u.push({
          x: y.position.x - m / 2,
          y: y.position.y - f / 2,
          width: m,
          height: f
        }), y.coordinates && y.coordinates.length === 2) {
          const [b, C] = y.coordinates;
        }
      }
    if (t.length > 0) {
      const y = t.map((M) => M.coordinates[0]), p = t.map((M) => M.coordinates[1]), m = Math.min(...y), f = Math.max(...y), b = Math.min(...p), C = Math.max(...p), E = f - m, x = C - b, B = Math.max(E, x) * 0.1 || 0.01, T = {
        minLat: m - B,
        maxLat: f + B,
        minLon: b - B,
        maxLon: C + B
      }, A = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map();
      for (const M of t) {
        const [v, S] = M.coordinates, k = (S - T.minLon) / (T.maxLon - T.minLon), N = 1 - (v - T.minLat) / (T.maxLat - T.minLat), _ = {
          x: l + k * c,
          y: N * h
        }, H = M.style || {}, R = H.width || this.DEFAULT_NODE_WIDTH, F = H.height || this.DEFAULT_NODE_HEIGHT, O = _.x, Y = _.y;
        A.set(M.id, { originalCenterX: O, originalCenterY: Y }), L.set(M.id, {
          node: M,
          width: R,
          height: F,
          originalCenterX: O,
          originalCenterY: Y
        });
      }
      this.resolveNodePositionsWithOrderConstraints(L, A);
    }
    const w = e.filter((y) => !y.position);
    if (w.length > 0) {
      const p = Math.ceil(Math.sqrt(w.length)), m = Math.ceil(w.length / p), f = a - 40, b = d - 40, C = f / p, E = b / m;
      w.forEach((x, B) => {
        const T = x.style || {}, A = T.width || this.DEFAULT_NODE_WIDTH, L = T.height || this.DEFAULT_NODE_HEIGHT, M = Math.floor(B / p), v = B % p, S = g + 20 + (v + 0.5) * C, k = 20 + (M + 0.5) * E;
        x.position = { x: S, y: k }, u.push({
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
    const o = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
    for (const [c, h] of t) {
      const l = h.node;
      if (l.position) {
        const d = l.position.x, g = l.position.y;
        o.set(c, { centerX: d, centerY: g }), n.set(c, {
          x: l.position.x - h.width / 2,
          y: l.position.y - h.height / 2,
          width: h.width,
          height: h.height
        });
      } else {
        const d = e.get(c);
        o.set(c, {
          centerX: d.originalCenterX,
          centerY: d.originalCenterY
        }), n.set(c, {
          x: d.originalCenterX - h.width / 2,
          y: d.originalCenterY - h.height / 2,
          width: h.width,
          height: h.height
        });
      }
    }
    const r = Array.from(t.entries()).sort((c, h) => {
      const l = e.get(c[0]), d = e.get(h[0]);
      return l.originalCenterX - d.originalCenterX;
    }), a = Array.from(t.entries()).sort((c, h) => {
      const l = e.get(c[0]), d = e.get(h[0]);
      return l.originalCenterY - d.originalCenterY;
    });
    for (let c = 0; c < 50; c++) {
      let h = !1;
      for (let l = 0; l < r.length; l++) {
        const [d] = r[l], g = n.get(d), u = o.get(d);
        for (let w = 0; w < l; w++) {
          const [y] = r[w], p = n.get(y);
          if (g.x < p.x + p.width + 20 && g.x + g.width + 20 > p.x) {
            h = !0;
            const m = p.width / 2 + g.width / 2 + 20, b = o.get(y).centerX + m;
            u.centerX = b, g.x = b - g.width / 2;
          }
        }
      }
      for (let l = 0; l < a.length; l++) {
        const [d] = a[l], g = n.get(d), u = o.get(d);
        for (let w = 0; w < l; w++) {
          const [y] = a[w], p = n.get(y);
          if (g.y < p.y + p.height + 20 && g.y + g.height + 20 > p.y) {
            h = !0;
            const m = p.height / 2 + g.height / 2 + 20, b = o.get(y).centerY + m;
            u.centerY = b, g.y = b - g.height / 2;
          }
        }
      }
      if (!h)
        break;
    }
    for (const [c, h] of t)
      if (!h.node.position) {
        const l = n.get(c);
        h.node.position = {
          x: l.x + l.width / 2,
          y: l.y + l.height / 2
        };
      }
  }
  /**
   * Adjust node positions to avoid overlap with other nodes (old implementation, kept for backward compatibility)
   * Adjust while preserving original positional relationships (east-west, north-south)
   */
  adjustNodePosition(t, e, s, i, o = 20) {
    let r = t.x, a = t.y;
    const c = t.width, h = t.height, l = s?.originalX ?? t.x, d = s?.originalY ?? t.y, g = e.map((u, w) => {
      const y = u.width || this.DEFAULT_NODE_WIDTH, p = u.height || this.DEFAULT_NODE_HEIGHT, m = u.x + y / 2, f = u.y + p / 2, b = m - l, C = f - d;
      return {
        x: u.x,
        y: u.y,
        width: y,
        height: p,
        centerX: m,
        centerY: f,
        relativeDx: b,
        // Infer original positional relationship (relationship between existing nodes' current positions and original node's original position)
        relativeDy: C,
        originalCenterX: m,
        // Existing node's current position (inferred original position)
        originalCenterY: f
      };
    });
    for (let u = 0; u < o; u++) {
      let w = !1, y = r, p = a, m = 1 / 0;
      for (const f of g)
        if (r < f.x + f.width + 20 && r + c + 20 > f.x && a < f.y + f.height + 20 && a + h + 20 > f.y) {
          w = !0;
          const b = r + c / 2, C = a + h / 2, E = f.centerX - b, x = f.centerY - C, B = Math.sqrt(E * E + x * x);
          if (B > 0) {
            const T = (c + f.width) / 2 + 20;
            let A = E, L = x;
            if (Math.abs(f.relativeDx) > 0.1 || Math.abs(f.relativeDy) > 0.1)
              if (Math.abs(f.relativeDx) > Math.abs(f.relativeDy))
                A = (f.relativeDx > 0 ? -1 : 1) * Math.abs(E) / B * T, L = x / B * T * 0.5;
              else {
                const O = f.relativeDy > 0 ? -1 : 1;
                A = E / B * T * 0.5, L = O * Math.abs(x) / B * T;
              }
            else
              A = E / B * T, L = x / B * T;
            const M = r + A, v = a + L, S = Math.sqrt(
              Math.pow(M - l, 2) + Math.pow(v - d, 2)
            ), k = M + c / 2, N = v + h / 2, _ = k - l, H = N - d;
            let R = 0;
            (f.relativeDx > 0 && _ < f.relativeDx || f.relativeDx < 0 && _ > f.relativeDx) && (R += 1e3), (f.relativeDy > 0 && H < f.relativeDy || f.relativeDy < 0 && H > f.relativeDy) && (R += 1e3);
            const F = S + R;
            F < m && (m = F, y = M, p = v);
          } else {
            const T = (c + f.width) / 2 + 20;
            let A = 0, L = 0;
            if (f.relativeDx !== 0 || f.relativeDy !== 0) {
              const k = f.relativeDx > 0 ? -1 : 1, N = f.relativeDy > 0 ? -1 : 1;
              A = k * T, L = N * T;
            } else {
              const k = Math.random() * Math.PI * 2;
              A = Math.cos(k) * T, L = Math.sin(k) * T;
            }
            const M = r + A, v = a + L, S = Math.sqrt(
              Math.pow(M - l, 2) + Math.pow(v - d, 2)
            );
            S < m && (m = S, y = M, p = v);
          }
        }
      if (!w)
        break;
      r = y, a = p;
    }
    return { x: r, y: a };
  }
  /**
   * Group edges by node pair
   * Group by undirected pair key (minId||maxId) and generate EdgePair
   */
  groupEdgesByPair(t) {
    const e = /* @__PURE__ */ new Map();
    for (const s of t) {
      const [i, o] = s.src < s.dst ? [s.src, s.dst] : [s.dst, s.src], n = `${i}||${o}`;
      let r = e.get(n);
      r || (r = {
        key: n,
        a: i,
        b: o,
        edges: []
      }, e.set(n, r)), r.edges.push(s), s.src === i && s.dst === o ? (s.srcAnchor && !r.srcAnchor && (r.srcAnchor = s.srcAnchor), s.dstAnchor && !r.dstAnchor && (r.dstAnchor = s.dstAnchor), s.bends && !r.bends && (r.bends = s.bends)) : (s.srcAnchor && !r.dstAnchor && (r.dstAnchor = s.srcAnchor), s.dstAnchor && !r.srcAnchor && (r.srcAnchor = s.dstAnchor), s.bends && !r.bends && (r.bends = s.bends));
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
    const i = t.srcAnchor || this.estimateAnchor(e, s), o = t.dstAnchor || this.estimateAnchor(s, e), n = e.style || {}, r = s.style || {}, a = n.width || this.DEFAULT_NODE_WIDTH, c = n.height || this.DEFAULT_NODE_HEIGHT, h = r.width || this.DEFAULT_NODE_WIDTH, l = r.height || this.DEFAULT_NODE_HEIGHT, d = this.calculateAnchorPosition(e, i, a, c), g = this.calculateAnchorPosition(s, o, h, l), u = [d];
    t.bends && u.push(...t.bends), u.push(g);
    const w = [`M ${u[0].x} ${u[0].y}`];
    for (let y = 1; y < u.length; y++)
      w.push(`L ${u[y].x} ${u[y].y}`);
    return w.join(" ");
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
    const o = t.position.x, n = t.position.y, r = s || t.style?.width || this.DEFAULT_NODE_WIDTH, a = i || t.style?.height || this.DEFAULT_NODE_HEIGHT;
    let c = 0, h = 0;
    switch (e.side) {
      case "top":
        c = o - r / 2 + r * e.t, h = n - a / 2;
        break;
      case "right":
        c = o + r / 2, h = n - a / 2 + a * e.t;
        break;
      case "bottom":
        c = o - r / 2 + r * e.t, h = n + a / 2;
        break;
      case "left":
        c = o - r / 2, h = n - a / 2 + a * e.t;
        break;
    }
    return { x: c, y: h };
  }
  /**
   * Auto-estimate anchor
   * Calculate side and position closest to direction from node center to target node
   */
  estimateAnchor(t, e) {
    if (!t.position || !e.position)
      return { side: "right", t: 0.5 };
    const s = t.style || {}, i = s.width || this.DEFAULT_NODE_WIDTH, o = s.height || this.DEFAULT_NODE_HEIGHT, n = e.position.x - t.position.x, r = e.position.y - t.position.y, a = Math.atan2(r, n), c = a < 0 ? a + 2 * Math.PI : a;
    let h, l;
    return c >= 7 * Math.PI / 4 || c < Math.PI / 4 ? (h = "right", l = 0.5 + r / o * 0.5) : c >= Math.PI / 4 && c < 3 * Math.PI / 4 ? (h = "bottom", l = 0.5 + n / i * 0.5) : c >= 3 * Math.PI / 4 && c < 5 * Math.PI / 4 ? (h = "left", l = 0.5 - r / o * 0.5) : (h = "top", l = 0.5 - n / i * 0.5), l = Math.max(0, Math.min(1, l)), { side: h, t: l };
  }
  /**
   * Get edge point array [start, ...bends, end]
   */
  getEdgePoints(t) {
    const e = this.nodes.find((w) => w.id === t.src), s = this.nodes.find((w) => w.id === t.dst);
    if (!e?.position || !s?.position)
      return [];
    const i = t.srcAnchor || this.estimateAnchor(e, s), o = t.dstAnchor || this.estimateAnchor(s, e), n = e.style || {}, r = s.style || {}, a = n.width || this.DEFAULT_NODE_WIDTH, c = n.height || this.DEFAULT_NODE_HEIGHT, h = r.width || this.DEFAULT_NODE_WIDTH, l = r.height || this.DEFAULT_NODE_HEIGHT, d = this.calculateAnchorPosition(e, i, a, c), g = this.calculateAnchorPosition(s, o, h, l), u = [d];
    return t.bends && u.push(...t.bends), u.push(g), u;
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
    const [s, i] = e.src < e.dst ? [e.src, e.dst] : [e.dst, e.src], o = `${s}||${i}`, n = this.groupEdgesByPair(this.edges).find((c) => c.key === o);
    if (!n)
      return;
    const r = ["top", "right", "bottom", "left"], a = (c) => {
      const h = r.indexOf(c);
      return r[(h + 1) % 4];
    };
    n.srcAnchor && (n.srcAnchor.side = a(n.srcAnchor.side)), n.dstAnchor && (n.dstAnchor.side = a(n.dstAnchor.side));
    for (const c of n.edges)
      c.src === n.a && c.dst === n.b ? (c.srcAnchor = n.srcAnchor, c.dstAnchor = n.dstAnchor) : (c.srcAnchor = n.dstAnchor, c.dstAnchor = n.srcAnchor);
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
    const n = this.nodes.find((m) => m.id === o.a), r = this.nodes.find((m) => m.id === o.b);
    if (!n || !r)
      return;
    const a = o.srcAnchor || this.estimateAnchor(n, r), c = o.dstAnchor || this.estimateAnchor(r, n), h = n.style || {}, l = r.style || {}, d = h.width || this.DEFAULT_NODE_WIDTH, g = h.height || this.DEFAULT_NODE_HEIGHT, u = l.width || this.DEFAULT_NODE_WIDTH, w = l.height || this.DEFAULT_NODE_HEIGHT, y = this.calculateAnchorPosition(n, a, d, g), p = this.calculateAnchorPosition(r, c, u, w);
    this.createAnchorHandle(t.id, "src", y.x, y.y), this.createAnchorHandle(t.id, "dst", p.x, p.y), this.anchorHandlesGroup.style.display = "block", this.anchorHandlesGroup.style.pointerEvents = "auto";
  }
  /**
   * Update bend point handles
   */
  updateBendHandles() {
    if (this.bendHandles.clear(), this.bendHandlesGroup.innerHTML = "", !this.selectedEdgeId || this.mode !== "edit") {
      this.bendHandlesGroup.style.display = "none", this.updateControlButtons();
      return;
    }
    const t = this.edges.find((n) => n.id === this.selectedEdgeId);
    if (!t) {
      this.updateControlButtons();
      return;
    }
    const [e, s] = t.src < t.dst ? [t.src, t.dst] : [t.dst, t.src], i = `${e}||${s}`, o = this.groupEdgesByPair(this.edges).find((n) => n.key === i);
    if (!o || !o.bends || o.bends.length === 0) {
      this.bendHandlesGroup.style.display = "none", this.updateControlButtons();
      return;
    }
    o.bends.forEach((n, r) => {
      this.createBendHandle(t.id, r, n.x, n.y);
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
    const e = this.nodes.find((n) => n.id === this.draggingNode.nodeId);
    if (!e)
      return;
    const s = this.screenToSvg(t.clientX, t.clientY), i = s.x, o = s.y;
    e.position || (e.position = { x: 0, y: 0 }), e.position.x = i - this.draggingNode.offsetX, e.position.y = o - this.draggingNode.offsetY, this.render(), this.updateAnchorHandles(), this.updateBendHandles(), this.debouncedSave();
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
    const s = this.screenToSvg(t.clientX, t.clientY), i = s.x, o = s.y;
    e.style || (e.style = {});
    const n = i - this.resizingNode.startX, r = o - this.resizingNode.startY;
    switch (this.resizingNode.side) {
      case "right": {
        const c = Math.max(60, this.resizingNode.startWidth + n);
        e.style.width = c, e.position.x = this.resizingNode.startNodeX + n / 2;
        break;
      }
      case "left": {
        const c = Math.max(60, this.resizingNode.startWidth - n);
        e.style.width = c, e.position.x = this.resizingNode.startNodeX + n / 2;
        break;
      }
      case "bottom": {
        const c = Math.max(40, this.resizingNode.startHeight + r);
        e.style.height = c, e.position.y = this.resizingNode.startNodeY + r / 2;
        break;
      }
      case "top": {
        const c = Math.max(40, this.resizingNode.startHeight - r);
        e.style.height = c, e.position.y = this.resizingNode.startNodeY + r / 2;
        break;
      }
    }
    const a = this.nodeElements.get(e.id);
    if (a) {
      const c = e.style || {}, h = c.width || this.DEFAULT_NODE_WIDTH, l = c.height || this.DEFAULT_NODE_HEIGHT, d = e.position.x - h / 2, g = e.position.y - l / 2;
      a.setAttribute("x", String(d)), a.setAttribute("y", String(g)), a.setAttribute("width", String(h)), a.setAttribute("height", String(l));
      const u = a.parentElement;
      if (u) {
        const w = u.querySelector("foreignObject");
        if (w) {
          const y = e.style || {}, p = y.width || this.DEFAULT_NODE_WIDTH, m = y.height || this.DEFAULT_NODE_HEIGHT, f = e.position.x - p / 2, b = e.position.y - m / 2;
          w.setAttribute("x", String(f)), w.setAttribute("y", String(b));
        }
        e.position && u.querySelectorAll("[data-resize-side]").forEach((p) => {
          const m = p.getAttribute("data-resize-side");
          m === "top" ? (p.setAttribute("cx", String(e.position.x)), p.setAttribute("cy", String(e.position.y - l / 2))) : m === "right" ? (p.setAttribute("cx", String(e.position.x + h / 2)), p.setAttribute("cy", String(e.position.y))) : m === "bottom" ? (p.setAttribute("cx", String(e.position.x)), p.setAttribute("cy", String(e.position.y + l / 2))) : m === "left" && (p.setAttribute("cx", String(e.position.x - h / 2)), p.setAttribute("cy", String(e.position.y)));
        });
      }
    }
  }
  /**
   * Handle resize end (called on pointer up)
   */
  handleResizeEnd() {
    this.resizeRenderTimer && (clearTimeout(this.resizeRenderTimer), this.resizeRenderTimer = null), this.render(), this.debouncedSave();
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
    const [s, i] = e.src < e.dst ? [e.src, e.dst] : [e.dst, e.src], o = `${s}||${i}`, n = this.groupEdgesByPair(this.edges).find((C) => C.key === o);
    if (!n)
      return;
    const r = this.draggingAnchor.type === "src" ? n.a : n.b, a = this.nodes.find((C) => C.id === r);
    if (!a?.position)
      return;
    const c = this.screenToSvg(t.clientX, t.clientY), h = c.x - this.draggingAnchor.offsetX, l = c.y - this.draggingAnchor.offsetY, d = a.position.x, g = a.position.y, u = a.style || {}, w = u.width || this.DEFAULT_NODE_WIDTH, y = u.height || this.DEFAULT_NODE_HEIGHT, p = {
      top: Math.abs(l - (g - y / 2)),
      right: Math.abs(h - (d + w / 2)),
      bottom: Math.abs(l - (g + y / 2)),
      left: Math.abs(h - (d - w / 2))
    };
    let m = "right", f = p.right;
    for (const [C, E] of Object.entries(p))
      E < f && (f = E, m = C);
    let b = 0.5;
    switch (m) {
      case "top":
      case "bottom":
        b = (h - (d - w / 2)) / w;
        break;
      case "left":
      case "right":
        b = (l - (g - y / 2)) / y;
        break;
    }
    b = Math.max(0, Math.min(1, b)), this.draggingAnchor.type === "src" ? n.srcAnchor = { side: m, t: b } : n.dstAnchor = { side: m, t: b };
    for (const C of n.edges)
      C.src === n.a && C.dst === n.b ? (C.srcAnchor = n.srcAnchor, C.dstAnchor = n.dstAnchor) : (C.srcAnchor = n.dstAnchor, C.dstAnchor = n.srcAnchor);
    this.render(), this.updateAnchorHandles(), this.updateBendHandles(), this.debouncedSave();
  }
  /**
   * Update bend point position (during drag)
   */
  updateBendPosition(t) {
    if (!this.draggingBend)
      return;
    const e = this.edges.find((l) => l.id === this.draggingBend.edgeId);
    if (!e)
      return;
    const [s, i] = e.src < e.dst ? [e.src, e.dst] : [e.dst, e.src], o = `${s}||${i}`, n = this.groupEdgesByPair(this.edges).find((l) => l.key === o);
    if (!n || !n.bends)
      return;
    const r = this.draggingBend.bendIndex;
    if (r < 0 || r >= n.bends.length)
      return;
    const a = this.screenToSvg(t.clientX, t.clientY), c = a.x - this.draggingBend.offsetX, h = a.y - this.draggingBend.offsetY;
    n.bends[r] = { x: c, y: h };
    for (const l of n.edges)
      l.bends = [...n.bends];
    this.render(), this.updateBendHandles(), this.debouncedSave();
  }
  /**
   * Insert bend point (on double click/tap)
   */
  insertBendPoint(t, e) {
    const s = this.edges.find((v) => v.id === t);
    if (!s)
      return;
    const [i, o] = s.src < s.dst ? [s.src, s.dst] : [s.dst, s.src], n = `${i}||${o}`, r = this.groupEdgesByPair(this.edges).find((v) => v.key === n);
    if (!r)
      return;
    const a = this.svg.getBoundingClientRect(), c = e.clientX - a.left, h = e.clientY - a.top, l = [], d = this.nodes.find((v) => v.id === r.a), g = this.nodes.find((v) => v.id === r.b);
    if (!d?.position || !g?.position)
      return;
    const u = r.srcAnchor || this.estimateAnchor(d, g), w = r.dstAnchor || this.estimateAnchor(g, d), y = d.style || {}, p = g.style || {}, m = y.width || this.DEFAULT_NODE_WIDTH, f = y.height || this.DEFAULT_NODE_HEIGHT, b = p.width || this.DEFAULT_NODE_WIDTH, C = p.height || this.DEFAULT_NODE_HEIGHT, E = this.calculateAnchorPosition(d, u, m, f), x = this.calculateAnchorPosition(g, w, b, C);
    l.push(E), r.bends && l.push(...r.bends), l.push(x);
    let B = 0, T = 1 / 0;
    for (let v = 0; v < l.length - 1; v++) {
      const S = l[v], k = l[v + 1], N = this.pointToLineSegmentDistance(c, h, S.x, S.y, k.x, k.y);
      N < T && (T = N, B = v);
    }
    const A = l[B], L = l[B + 1], M = {
      x: (A.x + L.x) / 2,
      y: (A.y + L.y) / 2
    };
    r.bends || (r.bends = []), r.bends.splice(B, 0, M);
    for (const v of r.edges)
      v.bends = [...r.bends];
    this.selectedEdgeId !== t && this.selectEdge(t, !1), this.render(), this.updateBendHandles(), this.debouncedSave();
  }
  /**
   * Calculate distance from point to line segment
   */
  pointToLineSegmentDistance(t, e, s, i, o, n) {
    const r = o - s, a = n - i, c = r * r + a * a;
    if (c === 0)
      return Math.sqrt((t - s) ** 2 + (e - i) ** 2);
    const h = Math.max(0, Math.min(1, ((t - s) * r + (e - i) * a) / c)), l = s + h * r, d = i + h * a;
    return Math.sqrt((t - l) ** 2 + (e - d) ** 2);
  }
  /**
   * Delete nearest bend point (on Delete/Backspace)
   * Also implements View interface deleteNearestBendPoint method
   */
  deleteNearestBendPoint() {
    if (!this.selectedEdgeId)
      return;
    const t = this.edges.find((n) => n.id === this.selectedEdgeId);
    if (!t)
      return;
    const [e, s] = t.src < t.dst ? [t.src, t.dst] : [t.dst, t.src], i = `${e}||${s}`, o = this.groupEdgesByPair(this.edges).find((n) => n.key === i);
    if (!(!o || !o.bends || o.bends.length === 0)) {
      o.bends.pop(), o.bends.length === 0 && delete o.bends;
      for (const n of o.edges)
        o.bends ? n.bends = [...o.bends] : delete n.bends;
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
        edges: this.edges
      }), this.saveDebounceTimer = null;
    }, this.SAVE_DEBOUNCE_MS));
  }
  /**
   * Render graph
   */
  render() {
    this.updateTransform(), this.nodeElements.clear(), this.edgeElements.clear(), this.edgesGroup.innerHTML = "", this.nodesGroup.innerHTML = "", this.edgeLabelsGroup.innerHTML = "";
    const t = this.groupEdgesByPair(this.edges);
    for (const e of t) {
      const s = e.edges.some((C) => C.id === this.selectedEdgeId), i = this.mode === "view" && e.key === this.hoveredEdgePairKey, o = this.mode === "view" && e.key === this.tappedEdgePairKey, n = this.alwaysShowEdges || s || i || o, a = e.edges[0].style || {}, c = a.color || this.EDGE_DEFAULT_COLOR, h = a.weight || 1, l = Math.max(this.EDGE_MIN_WEIGHT, Math.min(this.EDGE_MAX_WEIGHT, h)), d = this.EDGE_DEFAULT_WIDTH + (l - 1) * 0.5, g = n ? Math.max(d, this.EDGE_HOVER_WIDTH) : d, u = s ? "#2196f3" : c, w = n ? 1 : 0.3, y = this.calculateEdgePairPath(e);
      if (!y)
        continue;
      const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
      p.setAttribute("d", y), p.setAttribute("stroke", "transparent"), p.setAttribute("stroke-width", String(this.HIT_PATH_WIDTH)), p.setAttribute("fill", "none"), p.setAttribute("data-hit-edge-pair-key", e.key), p.style.cursor = "pointer", p.style.pointerEvents = "stroke", this.edgesGroup.appendChild(p);
      const m = document.createElementNS("http://www.w3.org/2000/svg", "path");
      m.setAttribute("d", y), m.setAttribute("stroke", u), m.setAttribute("stroke-width", String(g)), m.setAttribute("stroke-opacity", String(w)), m.setAttribute("fill", "none"), m.setAttribute("data-edge-pair-key", e.key), m.style.pointerEvents = "none", m.style.transition = "stroke-opacity 0.2s, stroke-width 0.2s";
      const f = this.getEdgePairMarkerAttributes(e);
      if (f.markerStart && m.setAttribute("marker-start", f.markerStart), f.markerEnd && m.setAttribute("marker-end", f.markerEnd), this.edgeElements.set(e.key, m), this.edgesGroup.appendChild(m), this.mode === "view")
        this.setupEdgeInteraction(p, e, a);
      else if (this.mode === "edit") {
        this.setupEdgeInteractionForEdit(p, e);
        const C = e.key;
        p.addEventListener("click", (E) => {
          const x = this.edgeClickTimers.get(p);
          if (x != null) {
            clearTimeout(x), this.edgeClickTimers.set(p, null);
            return;
          }
          const B = window.setTimeout(() => {
            if (this.edgeClickTimers.set(p, null), this.mode === "edit") {
              const T = this.groupEdgesByPair(this.edges).find((A) => A.key === C);
              T && T.edges.length > 0 && (this.selectEdge(T.edges[0].id, E.shiftKey), this.render());
            }
          }, 300);
          this.edgeClickTimers.set(p, B);
        });
      }
      const b = e.key;
      p.addEventListener("dblclick", (C) => {
        if (this.mode !== "edit")
          return;
        const E = this.edgeClickTimers.get(p);
        E != null && (clearTimeout(E), this.edgeClickTimers.set(p, null));
        const x = this.groupEdgesByPair(this.edges).find((B) => B.key === b);
        x && x.edges.length > 0 && (this.insertBendPoint(x.edges[0].id, C), C.preventDefault(), C.stopPropagation());
      }), n && this.renderEdgeLabels(e, a);
    }
    for (const e of this.nodes) {
      if (!e.position)
        continue;
      const s = e.style || {}, i = s.width || this.DEFAULT_NODE_WIDTH, o = s.height || this.DEFAULT_NODE_HEIGHT, n = s.color || "#fff", r = s.borderColor || "#333", a = document.createElementNS("http://www.w3.org/2000/svg", "g");
      a.setAttribute("data-node-id", e.id);
      const c = document.createElementNS("http://www.w3.org/2000/svg", "rect"), h = e.position.x - i / 2, l = e.position.y - o / 2;
      c.setAttribute("x", String(h)), c.setAttribute("y", String(l)), c.setAttribute("width", String(i)), c.setAttribute("height", String(o));
      const d = n.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
      if (d) {
        const y = parseInt(d[1], 16), p = parseInt(d[2], 16), m = parseInt(d[3], 16);
        c.setAttribute("fill", `rgba(${y}, ${p}, ${m}, 0.5)`);
      } else
        c.setAttribute("fill", n);
      const g = this.selectedNodeId === e.id;
      c.setAttribute("stroke", g ? "#2196f3" : r), c.setAttribute("stroke-width", g ? "4" : "2"), c.setAttribute("rx", "4"), c.style.cursor = this.mode === "view" ? "pointer" : "move";
      const u = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
      u.setAttribute("x", String(h)), u.setAttribute("y", String(l)), u.setAttribute("width", String(i)), u.setAttribute("height", String(o));
      const w = document.createElement("div");
      w.style.width = "100%", w.style.height = "100%", w.style.display = "flex", w.style.alignItems = "flex-start", w.style.justifyContent = "center", w.style.textAlign = "center", w.style.fontSize = "14px", w.style.color = "#333", w.style.padding = "4px", w.style.wordWrap = "break-word", w.style.overflowWrap = "break-word", w.style.whiteSpace = "normal", w.style.overflow = "hidden", w.style.textOverflow = "ellipsis", w.textContent = e.label, u.appendChild(w), a.appendChild(c), a.appendChild(u), this.mode === "edit" && this.addResizeHandles(a, e, i, o), this.nodesGroup.appendChild(a), this.nodeElements.set(e.id, c), this.mode === "view" && this.onNodeClick && a.addEventListener("click", (y) => {
        y.stopPropagation(), y.preventDefault();
        const p = this.svg.getBoundingClientRect(), m = y.clientX - p.left, f = y.clientY - p.top;
        this.onNodeClick({
          node: e,
          position: { x: m, y: f },
          originalEvent: y
        });
      }, !0);
    }
    this.mode === "edit" && (this.updateAnchorHandles(), this.updateBendHandles(), this.updateControlButtons());
  }
  /**
   * Update edge style and label visibility without full re-render
   */
  updateEdgeHighlight(t) {
    const e = this.groupEdgesByPair(this.edges);
    for (const s of e) {
      const i = this.edgeElements.get(s.key);
      if (!i) continue;
      const o = s.edges.some((m) => m.id === this.selectedEdgeId), n = this.mode === "view" && s.key === this.hoveredEdgePairKey, r = this.mode === "view" && s.key === this.tappedEdgePairKey, a = this.alwaysShowEdges || o || n || r, h = s.edges[0].style || {}, l = h.color || this.EDGE_DEFAULT_COLOR, d = h.weight || 1, g = Math.max(this.EDGE_MIN_WEIGHT, Math.min(this.EDGE_MAX_WEIGHT, d)), u = this.EDGE_DEFAULT_WIDTH + (g - 1) * 0.5, w = a ? Math.max(u, this.EDGE_HOVER_WIDTH) : u, y = o ? "#2196f3" : l, p = a ? 1 : 0.3;
      i.setAttribute("stroke", y), i.setAttribute("stroke-width", String(w)), i.setAttribute("stroke-opacity", String(p)), a ? (this.edgeLabelsGroup.querySelectorAll(`[data-edge-pair-key="${s.key}"]`).forEach((f) => f.remove()), this.renderEdgeLabels(s, h)) : this.edgeLabelsGroup.querySelectorAll(`[data-edge-pair-key="${s.key}"]`).forEach((f) => f.remove());
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
        const o = this.screenToSvg(i.clientX, i.clientY), n = e.edges[0];
        this.onEdgeClick({
          edge: n,
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
    for (const n of o) {
      const r = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      r.setAttribute("cx", String(n.x)), r.setAttribute("cy", String(n.y)), r.setAttribute("r", "6"), r.setAttribute("fill", "#4CAF50"), r.setAttribute("stroke", "#fff"), r.setAttribute("stroke-width", "2"), r.setAttribute("data-resize-side", n.side), r.setAttribute("data-node-id", e.id), r.style.cursor = this.getResizeCursor(n.side), r.style.pointerEvents = "auto", t.appendChild(r);
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
      const n = i.getPointAtLength(o * e);
      return document.body.removeChild(s), { x: n.x, y: n.y };
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
    const o = s.style || {}, n = i.style || {}, r = o.width || this.DEFAULT_NODE_WIDTH, a = o.height || this.DEFAULT_NODE_HEIGHT, c = n.width || this.DEFAULT_NODE_WIDTH, h = n.height || this.DEFAULT_NODE_HEIGHT, l = t.srcAnchor || this.estimateAnchor(s, i), d = t.dstAnchor || this.estimateAnchor(i, s), g = this.calculateAnchorPosition(s, l, r, a), u = this.calculateAnchorPosition(i, d, c, h), w = this.calculateEdgePairPath(t), y = t.edges.find((E) => E.src === t.a && E.dst === t.b), p = t.edges.find((E) => E.src === t.b && E.dst === t.a), m = y?.style?.label || y?.relType || "", f = p?.style?.label || p?.relType || "", b = m !== f && m && f, C = m === f && m;
    if (b) {
      const x = this.getPointOnPath(w, 0.75), B = this.getPointOnPath(w, 0.25), T = x ? x.x : g.x + (u.x - g.x) * (1 - 0.25), A = x ? x.y : g.y + (u.y - g.y) * (1 - 0.25), L = B ? B.x : g.x + (u.x - g.x) * 0.25, M = B ? B.y : g.y + (u.y - g.y) * 0.25;
      if (m) {
        const v = document.createElementNS("http://www.w3.org/2000/svg", "text");
        v.setAttribute("x", String(T)), v.setAttribute("y", String(A - 8)), v.setAttribute("text-anchor", "middle"), v.setAttribute("dominant-baseline", "middle"), v.setAttribute("font-size", "12"), v.setAttribute("fill", "#333"), v.setAttribute("font-weight", "bold"), v.setAttribute("pointer-events", "none"), v.setAttribute("data-edge-pair-key", t.key);
        const S = document.createElementNS("http://www.w3.org/2000/svg", "rect"), k = m.length * 7;
        S.setAttribute("x", String(T - k / 2 - 4)), S.setAttribute("y", String(A - 16)), S.setAttribute("width", String(k + 8)), S.setAttribute("height", "16"), S.setAttribute("fill", "rgba(255, 255, 255, 0.9)"), S.setAttribute("rx", "2"), S.setAttribute("pointer-events", "none"), S.setAttribute("data-edge-pair-key", t.key), this.edgeLabelsGroup.appendChild(S), v.textContent = m, this.edgeLabelsGroup.appendChild(v);
      }
      if (f) {
        const v = document.createElementNS("http://www.w3.org/2000/svg", "text");
        v.setAttribute("x", String(L)), v.setAttribute("y", String(M - 8)), v.setAttribute("text-anchor", "middle"), v.setAttribute("dominant-baseline", "middle"), v.setAttribute("font-size", "12"), v.setAttribute("fill", "#333"), v.setAttribute("font-weight", "bold"), v.setAttribute("pointer-events", "none"), v.setAttribute("data-edge-pair-key", t.key);
        const S = document.createElementNS("http://www.w3.org/2000/svg", "rect"), k = f.length * 7;
        S.setAttribute("x", String(L - k / 2 - 4)), S.setAttribute("y", String(M - 16)), S.setAttribute("width", String(k + 8)), S.setAttribute("height", "16"), S.setAttribute("fill", "rgba(255, 255, 255, 0.9)"), S.setAttribute("rx", "2"), S.setAttribute("pointer-events", "none"), S.setAttribute("data-edge-pair-key", t.key), this.edgeLabelsGroup.appendChild(S), v.textContent = f, this.edgeLabelsGroup.appendChild(v);
      }
    } else if (C) {
      const E = this.getPointOnPath(w, 0.5), x = E ? E.x : (g.x + u.x) / 2, B = E ? E.y : (g.y + u.y) / 2, T = document.createElementNS("http://www.w3.org/2000/svg", "text");
      T.setAttribute("x", String(x)), T.setAttribute("y", String(B)), T.setAttribute("text-anchor", "middle"), T.setAttribute("dominant-baseline", "middle"), T.setAttribute("data-edge-pair-key", t.key), T.setAttribute("font-size", "12"), T.setAttribute("fill", "#333"), T.setAttribute("font-weight", "bold"), T.setAttribute("pointer-events", "none");
      const A = document.createElementNS("http://www.w3.org/2000/svg", "rect"), L = m.length * 7;
      A.setAttribute("x", String(x - L / 2 - 4)), A.setAttribute("y", String(B - 8)), A.setAttribute("width", String(L + 8)), A.setAttribute("height", "16"), A.setAttribute("fill", "rgba(255, 255, 255, 0.9)"), A.setAttribute("rx", "2"), A.setAttribute("pointer-events", "none"), A.setAttribute("data-edge-pair-key", t.key), this.edgeLabelsGroup.appendChild(A), T.textContent = m, this.edgeLabelsGroup.appendChild(T);
    } else if (e.label) {
      const E = this.getPointOnPath(w, 0.5), x = E ? E.x : (g.x + u.x) / 2, B = E ? E.y : (g.y + u.y) / 2, T = document.createElementNS("http://www.w3.org/2000/svg", "text");
      T.setAttribute("x", String(x)), T.setAttribute("y", String(B)), T.setAttribute("text-anchor", "middle"), T.setAttribute("dominant-baseline", "middle"), T.setAttribute("font-size", "12"), T.setAttribute("fill", "#333"), T.setAttribute("font-weight", "bold"), T.setAttribute("pointer-events", "none"), T.setAttribute("data-edge-pair-key", t.key);
      const A = document.createElementNS("http://www.w3.org/2000/svg", "rect"), L = e.label.length * 7;
      A.setAttribute("x", String(x - L / 2 - 4)), A.setAttribute("y", String(B - 8)), A.setAttribute("width", String(L + 8)), A.setAttribute("height", "16"), A.setAttribute("fill", "rgba(255, 255, 255, 0.9)"), A.setAttribute("rx", "2"), A.setAttribute("pointer-events", "none"), A.setAttribute("data-edge-pair-key", t.key), this.edgeLabelsGroup.appendChild(A), T.textContent = e.label, this.edgeLabelsGroup.appendChild(T);
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
    const e = this.edges.find((r) => r.id === t);
    if (!e)
      return !1;
    const [s, i] = e.src < e.dst ? [e.src, e.dst] : [e.dst, e.src], o = `${s}||${i}`, n = this.groupEdgesByPair(this.edges).find((r) => r.key === o);
    return !!(n && n.bends && n.bends.length > 0);
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
      const u = isFinite(this.zoom) && this.zoom > 0 ? this.zoom : 1, w = isFinite(this.offsetX) ? this.offsetX : 0, y = isFinite(this.offsetY) ? this.offsetY : 0, p = (t.position.x + w) * u, m = (t.position.y + y) * u, f = this.popupElement.getBoundingClientRect(), b = f.width || 200, C = f.height || 50, E = p - b / 2, x = m - s * u / 2 - C - 10;
      this.popupElement.style.left = `${E}px`, this.popupElement.style.top = `${x}px`;
      return;
    }
    const o = i.getBoundingClientRect(), n = this.container.getBoundingClientRect(), r = o.left + o.width / 2 - n.left, a = o.top + o.height / 2 - n.top, c = this.popupElement.getBoundingClientRect(), h = c.width || 200, l = c.height || 50, d = r - h / 2, g = a - o.height / 2 - l - 10;
    this.popupElement.style.left = `${d}px`, this.popupElement.style.top = `${g}px`;
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
  constructor(t, e, s, i, o, n) {
    this.viewer = null, this.Cesium = null, this.nodes = [], this.edges = [], this.selectedNodeId = null, this.lastSelectedNodeId = null, this.nodeEntities = /* @__PURE__ */ new Map(), this.edgeEntities = /* @__PURE__ */ new Map(), this.rectEntity = null, this.fitCenterButton = null, this.lightingToggleButton = null, this.alwaysShowEdgesButton = null, this.alwaysShowEdges = !0, this.tileTypeButton = null, this.baseImageryLayer = null, this.timeISO = null, this.customTileUrls = [], this.currentCustomTileIndex = 0, this.popupElement = null, this.popupEntity = null, this.popupUpdateListener = null, this.container = t, this.onNodeClick = e, this.cesiumLoader = s, this.globe3dOptions = i, this.onEdgeClick = n;
    const r = o && o.length > 0 ? o : i?.customTileUrls;
    r && r.length > 0 ? this.customTileUrls = r.map(
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
    }), this.Cesium.Moon ? (this.viewer.scene.moon || (this.viewer.scene.moon = new this.Cesium.Moon()), this.viewer.scene.moon.show = !0, this.viewer.scene.moon.onlySunLighting !== void 0 && (this.viewer.scene.moon.onlySunLighting = !1)) : this.viewer.scene.moon && (this.viewer.scene.moon.show = !0), this.viewer.scene.sun && (this.viewer.scene.sun.show = !0);
    try {
      this.viewer.imageryLayers.removeAll();
    } catch {
    }
    this.setupCameraLimits(), this.setTileTypeInternal(!0), this.setupTimeAndLighting(), this.setupClickHandler(), (this.nodes.length > 0 || this.edges.length > 0) && this.render(), this.onLightingChange && this.isLightingEnabled();
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
    s.minimumZoomDistance = t, s.maximumZoomDistance = e;
    let i = !1, o = !1;
    this.viewer.scene.camera.changed.addEventListener(() => {
      if (i || o)
        return;
      const n = this.viewer.scene.camera, r = this.Cesium.Cartographic.fromCartesian(n.position), a = r.height;
      if (a < t || a > e) {
        i = !0;
        const c = Math.max(t, Math.min(e, a)), h = this.Cesium.Cartesian3.fromRadians(
          r.longitude,
          r.latitude,
          c
        );
        n.setView({
          destination: h,
          orientation: n.orientation
        }), setTimeout(() => {
          i = !1;
        }, 0);
      }
    }), this._isFlying = () => o, this._setIsFlying = (n) => {
      o = n;
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
        const o = s.id.nodeId, n = this.nodes.find((a) => a.id === o), r = this.nodeEntities.get(o);
        if (n && r && (this.showPopup(r, n), this.onNodeClick)) {
          const a = this.viewer.camera.pickEllipsoid(e.position, this.viewer.scene.globe.ellipsoid);
          if (a) {
            const c = this.Cesium.Cartographic.fromCartesian(a), h = this.Cesium.Math.toDegrees(c.longitude), l = this.Cesium.Math.toDegrees(c.latitude);
            this.onNodeClick({
              node: n,
              position: { x: h, y: l },
              originalEvent: e.originalEvent
            });
          }
        }
        return;
      }
      const i = this.viewer.scene.drillPick(e.position);
      for (const o of i)
        if (o.id && o.id.nodeId) {
          const n = o.id.nodeId, r = this.nodes.find((c) => c.id === n), a = this.nodeEntities.get(n);
          if (r && a && (this.showPopup(a, r), this.onNodeClick)) {
            const c = this.viewer.camera.pickEllipsoid(e.position, this.viewer.scene.globe.ellipsoid);
            if (c) {
              const h = this.Cesium.Cartographic.fromCartesian(c), l = this.Cesium.Math.toDegrees(h.longitude), d = this.Cesium.Math.toDegrees(h.latitude);
              this.onNodeClick({
                node: r,
                position: { x: l, y: d },
                originalEvent: e.originalEvent
              });
            }
          }
          return;
        }
      i.length === 0 && this.hidePopup();
      for (const o of i)
        if (o.id && o.id.edgeId) {
          const n = o.id.edgeId, r = this.edges.find((a) => a.id === n);
          if (r && this.onEdgeClick) {
            const a = this.viewer.camera.pickEllipsoid(e.position, this.viewer.scene.globe.ellipsoid);
            if (a) {
              const c = this.Cesium.Cartographic.fromCartesian(a), h = this.Cesium.Math.toDegrees(c.longitude), l = this.Cesium.Math.toDegrees(c.latitude);
              this.onEdgeClick({
                edge: r,
                position: { x: h, y: l },
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
        const [n, r] = e.coordinates, a = 3e6, c = this.nodeEntities.get(t);
        c && e && this.showPopup(c, e);
        const h = this._setIsFlying;
        h && h(!0), setTimeout(() => {
          this.viewer.camera.flyTo({
            destination: this.Cesium.Cartesian3.fromDegrees(r, n, a),
            orientation: {
              heading: this.Cesium.Math.toRadians(0),
              pitch: this.Cesium.Math.toRadians(-90),
              roll: 0
            },
            duration: 1,
            // Move in 1 second
            complete: () => {
              h && h(!1);
            }
          });
        }, 0);
        return;
      }
    }
    const s = this.nodes.filter((i) => {
      if (!i.coordinates || !Array.isArray(i.coordinates) || i.coordinates.length !== 2) return !0;
      const [o, n] = i.coordinates;
      return !Number.isFinite(o) || !Number.isFinite(n);
    });
    if (s.length > 0) {
      const a = Math.ceil(Math.sqrt(s.length)), h = 50 / (Math.ceil(s.length / a) + 1), l = 32 / (a + 1), d = s.findIndex((g) => g.id === t);
      if (d >= 0) {
        const g = Math.floor(d / a), u = d % a, w = -50 + (g + 1) * h, y = -32 + (u + 1) * l, p = 3e6, m = this.nodeEntities.get(t);
        m && e && this.showPopup(m, e);
        const f = this._setIsFlying;
        f && f(!0), setTimeout(() => {
          this.viewer.camera.flyTo({
            destination: this.Cesium.Cartesian3.fromDegrees(y, w, p),
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
              f && f(!1);
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
      const a = Math.ceil(Math.sqrt(t.length)), h = 50 / (Math.ceil(t.length / a) + 1), l = 32 / (a + 1);
      t.forEach((d, g) => {
        const u = Math.floor(g / a), w = g % a, y = -50 + (u + 1) * h, p = -32 + (w + 1) * l, m = this.selectedNodeId === d.id, f = d.style?.color || "#ffffff", b = m ? "#2196f3" : d.style?.borderColor || "#333333";
        let C;
        const E = f.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
        if (E) {
          const T = parseInt(E[1], 16) / 255, A = parseInt(E[2], 16) / 255, L = parseInt(E[3], 16) / 255;
          C = new this.Cesium.Color(T, A, L, 1);
        } else
          C = this.Cesium.Color.fromCssColorString(f), C = C.withAlpha(1);
        const x = this.Cesium.Color.fromCssColorString(b), B = this.viewer.entities.add({
          position: this.Cesium.Cartesian3.fromDegrees(p, y, 0),
          point: {
            pixelSize: m ? 15 : 10,
            color: C,
            outlineColor: x,
            outlineWidth: 2,
            heightReference: this.Cesium.HeightReference.CLAMP_TO_GROUND
          },
          label: {
            text: d.label,
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
          nodeId: d.id
        });
        this.nodeEntities.set(d.id, B);
      });
    }
    for (const s of e) {
      const [i, o] = s.coordinates, n = this.selectedNodeId === s.id, r = s.style?.color || "#ffffff", a = n ? "#2196f3" : s.style?.borderColor || "#333333";
      let c;
      const h = r.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
      if (h) {
        const g = parseInt(h[1], 16) / 255, u = parseInt(h[2], 16) / 255, w = parseInt(h[3], 16) / 255;
        c = new this.Cesium.Color(g, u, w, 1);
      } else
        c = this.Cesium.Color.fromCssColorString(r), c = c.withAlpha(1);
      const l = this.Cesium.Color.fromCssColorString(a), d = this.viewer.entities.add({
        position: this.Cesium.Cartesian3.fromDegrees(o, i, 0),
        point: {
          pixelSize: n ? 15 : 10,
          color: c,
          // Use node fill color
          outlineColor: l,
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
      this.nodeEntities.set(s.id, d);
    }
    if (this.alwaysShowEdges)
      for (const s of this.edges) {
        const i = this.nodes.find((u) => u.id === s.src), o = this.nodes.find((u) => u.id === s.dst);
        if (!i?.coordinates || !o?.coordinates)
          continue;
        const [n, r] = i.coordinates, [a, c] = o.coordinates, h = s.style?.color || "#999999", l = s.style?.weight || 1, d = Math.max(1, Math.min(5, l)), g = this.viewer.entities.add({
          polyline: {
            positions: [
              this.Cesium.Cartesian3.fromDegrees(r, n, 0),
              this.Cesium.Cartesian3.fromDegrees(c, a, 0)
            ],
            width: d,
            material: this.Cesium.Color.fromCssColorString(h),
            clampToGround: !0
          },
          edgeId: s.id
          // For hit testing
        });
        this.edgeEntities.set(s.id, g);
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
        const s = this.nodes.find((r) => r.id === t);
        if (!s)
          continue;
        const i = this.selectedNodeId === t, o = s.style?.color || "#ffffff", n = i ? "#2196f3" : s.style?.borderColor || "#333333";
        if (e.point) {
          e.point.pixelSize = i ? 15 : 10;
          let r;
          const a = o.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
          if (a) {
            const c = parseInt(a[1], 16) / 255, h = parseInt(a[2], 16) / 255, l = parseInt(a[3], 16) / 255;
            r = new this.Cesium.Color(c, h, l, 1);
          } else
            r = this.Cesium.Color.fromCssColorString(o), r = r.withAlpha(1);
          e.point.color = r, e.point.outlineColor = this.Cesium.Color.fromCssColorString(n);
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
      const a = Math.ceil(Math.sqrt(t.length)), h = 50 / (Math.ceil(t.length / a) + 1), l = 32 / (a + 1);
      t.forEach((d, g) => {
        const u = Math.floor(g / a), w = g % a, y = -50 + (u + 1) * h, p = -32 + (w + 1) * l, m = this.selectedNodeId === d.id, f = d.style?.color || "#ffffff", b = m ? "#2196f3" : d.style?.borderColor || "#333333";
        let C;
        const E = f.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
        if (E) {
          const T = parseInt(E[1], 16) / 255, A = parseInt(E[2], 16) / 255, L = parseInt(E[3], 16) / 255;
          C = new this.Cesium.Color(T, A, L, 1);
        } else
          C = this.Cesium.Color.fromCssColorString(f), C = C.withAlpha(1);
        const x = this.Cesium.Color.fromCssColorString(b), B = this.viewer.entities.add({
          position: this.Cesium.Cartesian3.fromDegrees(p, y, 0),
          point: {
            pixelSize: m ? 15 : 10,
            color: C,
            outlineColor: x,
            outlineWidth: 2,
            heightReference: this.Cesium.HeightReference.CLAMP_TO_GROUND
          },
          label: {
            text: d.label,
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
          nodeId: d.id
        });
        this.nodeEntities.set(d.id, B);
      });
    }
    for (const s of e) {
      const [i, o] = s.coordinates, n = this.selectedNodeId === s.id, r = s.style?.color || "#ffffff", a = n ? "#2196f3" : s.style?.borderColor || "#333333";
      let c;
      const h = r.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
      if (h) {
        const g = parseInt(h[1], 16) / 255, u = parseInt(h[2], 16) / 255, w = parseInt(h[3], 16) / 255;
        c = new this.Cesium.Color(g, u, w, 1);
      } else
        c = this.Cesium.Color.fromCssColorString(r), c = c.withAlpha(1);
      const l = this.Cesium.Color.fromCssColorString(a), d = this.viewer.entities.add({
        position: this.Cesium.Cartesian3.fromDegrees(o, i, 0),
        point: {
          pixelSize: n ? 15 : 10,
          color: c,
          outlineColor: l,
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
      this.nodeEntities.set(s.id, d);
    }
    if (this.alwaysShowEdges)
      for (const s of this.edges) {
        const i = this.nodes.find((u) => u.id === s.src), o = this.nodes.find((u) => u.id === s.dst);
        if (!i?.coordinates || !o?.coordinates)
          continue;
        const [n, r] = i.coordinates, [a, c] = o.coordinates, h = s.style?.color || "#999999", l = s.style?.weight || 1, d = Math.max(1, Math.min(5, l)), g = this.viewer.entities.add({
          polyline: {
            positions: [
              this.Cesium.Cartesian3.fromDegrees(r, n, 0),
              this.Cesium.Cartesian3.fromDegrees(c, a, 0)
            ],
            width: d,
            material: this.Cesium.Color.fromCssColorString(h),
            clampToGround: !0
          },
          edgeId: s.id
          // For hit testing
        });
        this.edgeEntities.set(s.id, g);
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
    const e = (r, a, c, h = !1) => {
      const l = (g) => String(g).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"), d = `<a href="${l(c)}" target="_blank" rel="noopener noreferrer">${l(a)}</a>`;
      return new r.Credit(d, h);
    };
    if (this.baseImageryLayer)
      try {
        this.viewer.imageryLayers.remove(this.baseImageryLayer);
      } catch {
      }
    if (this.customTileUrls.length > 0) {
      const r = this.customTileUrls[this.currentCustomTileIndex], a = r.url.includes("NaturalEarthII"), c = r.maximumLevel ?? (a ? 2 : 19);
      let h;
      if (r.credit) {
        const g = r.credit;
        g.href ? h = e(this.Cesium, g.label, g.href, g.showOnScreen ?? !1) : h = new this.Cesium.Credit(g.label, g.showOnScreen ?? !1);
      } else
        h = new this.Cesium.Credit(
          `Custom tile server (${this.currentCustomTileIndex + 1}/${this.customTileUrls.length})`
        );
      const l = {
        url: r.url,
        maximumLevel: c,
        credit: h
      };
      a && this.Cesium?.GeographicTilingScheme && (l.tilingScheme = new this.Cesium.GeographicTilingScheme());
      const d = new this.Cesium.UrlTemplateImageryProvider(l);
      this.baseImageryLayer = this.viewer.imageryLayers.addImageryProvider(d, 0), this.updateTileTypeButton();
      return;
    }
    const s = new this.Cesium.Credit("© NASA", !0), i = new this.Cesium.GeographicTilingScheme({
      rectangle: this.Cesium.Rectangle.fromDegrees(-180, -90, 180, 90),
      numberOfLevelZeroTilesX: 2,
      // Level 0 has 2 tiles in X direction
      numberOfLevelZeroTilesY: 1
      // Level 0 has 1 tile in Y direction
    }), o = "/cesium/Assets/Textures/NaturalEarthII/{z}/{x}/{reverseY}.jpg", n = new this.Cesium.UrlTemplateImageryProvider({
      url: o,
      maximumLevel: 2,
      // NaturalEarthII tiles only go up to level 2
      tilingScheme: i,
      // EPSG:4326 (Geographic Coordinate System)
      credit: s,
      customTags: {
        reverseY: (r, a, c, h) => {
          const d = Math.pow(2, h) - 1 - c;
          return String(d);
        }
      }
    });
    this.baseImageryLayer = this.viewer.imageryLayers.addImageryProvider(n, 0), this.updateTileTypeButton();
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
      e.forEach((M, v) => {
        const S = Math.floor(v / B), k = v % B, N = -50 + (S + 1) * A, _ = -32 + (k + 1) * L;
        s.push(N), i.push(_);
      });
    }
    if (s.length === 0)
      return;
    const o = Math.min(...s), n = Math.max(...s), r = Math.min(...i), a = Math.max(...i), c = (o + n) / 2, h = (r + a) / 2, l = n - o, d = a - r, g = Math.max(l, d), u = Math.max(1e6, g * 111e3 * 2), p = Math.max(5e5, Math.min(4e7, u)), m = () => new Promise((b) => {
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
    }), f = this._setIsFlying;
    f && f(!0), m().then(() => {
      this.viewer.camera.flyTo({
        destination: this.Cesium.Cartesian3.fromDegrees(h, c, p),
        orientation: {
          heading: 0,
          pitch: this.Cesium.Math.toRadians(-90),
          roll: 0
        },
        duration: 1,
        // Animate in 1 second
        complete: () => {
          f && f(!1);
          const b = this.viewer.scene.camera, C = this.Cesium.Cartographic.fromCartesian(b.position), E = C.height, x = 5e5, B = 4e7;
          if (E < x || E > B) {
            const T = Math.max(x, Math.min(B, E)), A = this.Cesium.Cartesian3.fromRadians(
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
    this.hidePopup(), this.popupElement && this.popupElement.parentNode && (this.popupElement.parentNode.removeChild(this.popupElement), this.popupElement = null), this.viewer && (this.viewer.destroy(), this.viewer = null), this.nodeEntities.clear(), this.edgeEntities.clear();
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
    const n = e.x / s, r = e.y / s;
    this.popupElement.style.display = "block";
    const a = n - this.popupElement.offsetWidth / 2, c = r - this.popupElement.offsetHeight - 15;
    this.popupElement.style.left = `${a}px`, this.popupElement.style.top = `${c}px`;
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
  constructor(t, e, s, i, o, n) {
    this.map = null, this.Leaflet = null, this.nodes = [], this.edges = [], this.selectedNodeId = null, this.lastSelectedNodeId = null, this.markers = /* @__PURE__ */ new Map(), this.polylines = /* @__PURE__ */ new Map(), this.rectLayer = null, this.fitCenterButton = null, this.lightingToggleButton = null, this.alwaysShowEdgesButton = null, this.alwaysShowEdges = !0, this.tileTypeButton = null, this.baseTileLayer = null, this.nightShadeLayer = null, this.nightShadeDebugLayer = null, this.lightingEnabled = !1, this.timeISO = null, this.moonToggleButton = null, this.moonEnabled = !1, this.moonMarker = null, this.customTileUrls = [], this.currentCustomTileIndex = 0, this.container = t, this.onNodeClick = e, this.leafletLoader = s, this.map2dOptions = o, this.onEdgeClick = n;
    const r = i && i.length > 0 ? i : o?.customTileUrls;
    r && r.length > 0 ? this.customTileUrls = r.map(
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
      const n = this.customTileUrls.map((r) => r.maxZoom ?? r.maximumLevel ?? 19);
      i = Math.min(...n);
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
      const i = this.customTileUrls[this.currentCustomTileIndex], o = i.maxZoom ?? i.maximumLevel ?? 19, n = i.tms ?? !1, r = i.attribution ?? `Custom tile server (${this.currentCustomTileIndex + 1}/${this.customTileUrls.length})`;
      t = this.Leaflet.tileLayer(i.url, {
        maxZoom: o,
        tms: n,
        // TMS format (Y from bottom to top) if specified
        attribution: r
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
    let n = o.map((g) => [g.lat, g.lng]);
    n.length > 0 && (n[0][0] !== n[n.length - 1][0] || n[0][1] !== n[n.length - 1][1]) && n.push([n[0][0], n[0][1]]);
    const r = n.map(([g, u]) => ({ lat: g, lng: u }));
    this.isCounterClockwise(r) && n.reverse();
    const c = n.map(([g, u]) => ({ lat: g, lng: u }));
    if (this.isCounterClockwise(c)) {
      n.reverse();
      const g = n.map(([u, w]) => ({ lat: u, lng: w }));
      this.isCounterClockwise(g);
    }
    const l = o.map((g) => [g.lat, g.lng]);
    l.length > 0 && (l[0][0] !== l[l.length - 1][0] || l[0][1] !== l[l.length - 1][1]) && l.push([l[0][0], l[0][1]]);
    const d = this.Leaflet.polygon(l, {
      fillColor: "#000000",
      fillOpacity: 0.3,
      color: "#000000",
      weight: 0,
      interactive: !1
    });
    if (d.addTo(this.map), this.nightShadeLayer = d, this.map2dOptions?.debugNightShading) {
      const g = this.Leaflet.polyline(n, {
        color: "#ff0000",
        weight: 2,
        opacity: 0.8,
        interactive: !1
      });
      g.addTo(this.map), this.nightShadeDebugLayer = g;
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
      const n = e[s - 1].lng;
      for (; o - n > 180; )
        o -= 360;
      for (; o - n < -180; )
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
    const o = Math.PI / 180, n = s + 1.915 * Math.sin(i * o) + 0.02 * Math.sin(2 * i * o), r = 1.00014 - 0.01671 * Math.cos(i * o) - 14e-4 * Math.cos(2 * i * o);
    return { lambda: n, R: r };
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
    const s = Math.PI / 180, i = 180 / Math.PI, o = Math.atan(Math.cos(e * s) * Math.tan(t * s)) * i, n = Math.asin(Math.sin(e * s) * Math.sin(t * s)) * i, r = Math.floor(t / 90) * 90, a = Math.floor(o / 90) * 90;
    return { alpha: o + (r - a), delta: n };
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
      const o = this.julian(i), n = this.GMST(o), r = this.sunEclipticPosition(o), a = this.eclipticObliquity(o), c = this.sunEquatorialPosition(r.lambda, a), h = [];
      for (let l = 0; l <= e * s; l++) {
        const d = -e / 2 + l / s, g = this.hourAngle(d, c, n), u = this.terminatorLatitude(g, c);
        h.push({ lat: u, lng: d });
      }
      return c.delta < 0 ? (h.unshift({ lat: 90, lng: -e / 2 }), h.push({ lat: 90, lng: e / 2 })) : (h.unshift({ lat: -90, lng: -e / 2 }), h.push({ lat: -90, lng: e / 2 })), h.length > 0 ? h : null;
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
        const [n, r] = e.coordinates;
        this.renderWithoutFit(), this.map.flyTo([n, r], 4, {
          duration: 1,
          easeLinearity: 0.25
          // Easing linearity (0.25 is recommended)
        });
        const a = () => {
          const c = this.markers.get(t);
          c && c.openPopup(), this.map.off("moveend", a);
        };
        this.map.once("moveend", a);
        return;
      }
    }
    const s = this.nodes.filter((i) => {
      if (!i.coordinates || !Array.isArray(i.coordinates) || i.coordinates.length !== 2) return !0;
      const [o, n] = i.coordinates;
      return !Number.isFinite(o) || !Number.isFinite(n);
    });
    if (s.length > 0) {
      const a = Math.ceil(Math.sqrt(s.length)), h = 50 / (Math.ceil(s.length / a) + 1), l = 32 / (a + 1), d = s.findIndex((g) => g.id === t);
      if (d >= 0) {
        const g = Math.floor(d / a), u = d % a, w = -50 + (g + 1) * h, y = -32 + (u + 1) * l;
        this.renderWithoutFit(), this.map.flyTo([w, y], 4, {
          duration: 1,
          // 1 second animation
          easeLinearity: 0.25
        });
        const p = () => {
          const m = this.markers.get(t);
          m && m.openPopup(), this.map.off("moveend", p);
        };
        this.map.once("moveend", p);
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
      const [o, n] = i.coordinates;
      return !Number.isFinite(o) || !Number.isFinite(n);
    }), s = this.nodes.filter((i) => {
      if (!i.coordinates || !Array.isArray(i.coordinates) || i.coordinates.length !== 2) return !1;
      const [o, n] = i.coordinates;
      return Number.isFinite(o) && Number.isFinite(n);
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
      const c = Math.ceil(Math.sqrt(e.length)), l = 50 / (Math.ceil(e.length / c) + 1), d = 32 / (c + 1);
      e.forEach((g, u) => {
        const w = Math.floor(u / c), y = u % c, p = -50 + (w + 1) * l, m = -32 + (y + 1) * d, f = this.selectedNodeId === g.id, b = g.style?.color || "#ffffff", C = f ? "#2196f3" : g.style?.borderColor || "#333333", E = `
          <div style="
            width: ${f ? 15 : 10}px;
            height: ${f ? 15 : 10}px;
            background-color: ${b};
            border: 2px solid ${C};
            border-radius: 50%;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          "></div>
        `, x = this.Leaflet.divIcon({
          html: E,
          className: "relatos-node-marker",
          iconSize: [f ? 15 : 10, f ? 15 : 10],
          iconAnchor: [f ? 7.5 : 5, f ? 7.5 : 5]
        }), B = this.Leaflet.marker([p, m], { icon: x });
        B.bindPopup(g.label, {
          closeButton: !1,
          offset: [0, -10]
        }), B.on("click", (T) => {
          if (this.onNodeClick) {
            const A = T.latlng;
            this.onNodeClick({
              node: g,
              position: { x: A.lng, y: A.lat },
              originalEvent: T.originalEvent
            });
          }
        }), B.addTo(this.map), this.markers.set(g.id, B);
      });
    }
    for (const i of s) {
      const [o, n] = i.coordinates, r = this.selectedNodeId === i.id, a = i.style?.color || "#ffffff", c = r ? "#2196f3" : i.style?.borderColor || "#333333", h = `
        <div style="
          width: ${r ? 15 : 10}px;
          height: ${r ? 15 : 10}px;
          background-color: ${a};
          border: 2px solid ${c};
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        "></div>
      `, l = this.Leaflet.divIcon({
        html: h,
        className: "relatos-node-marker",
        iconSize: [r ? 15 : 10, r ? 15 : 10],
        iconAnchor: [r ? 7.5 : 5, r ? 7.5 : 5]
      }), d = this.Leaflet.marker([o, n], { icon: l });
      d.bindPopup(i.label, {
        closeButton: !1,
        offset: [0, -10]
      }), d.on("click", (g) => {
        if (this.onNodeClick) {
          const u = g.latlng;
          this.onNodeClick({
            node: i,
            position: { x: u.lng, y: u.lat },
            originalEvent: g.originalEvent,
            view: "map2d"
          });
        }
      }), d.addTo(this.map), this.markers.set(i.id, d);
    }
    if (this.alwaysShowEdges)
      for (const i of this.edges) {
        const o = this.nodes.find((y) => y.id === i.src), n = this.nodes.find((y) => y.id === i.dst);
        if (!o?.coordinates || !n?.coordinates)
          continue;
        const [r, a] = o.coordinates, [c, h] = n.coordinates, l = i.style?.color || "#999999", d = i.style?.weight || 1, g = Math.max(1, Math.min(5, d)), u = this.Leaflet.polyline(
          [[r, a], [c, h]],
          {
            color: l,
            weight: g,
            opacity: 0.7
          }
        );
        u.on("click", (y) => {
          if (this.onEdgeClick) {
            const p = y.latlng;
            this.onEdgeClick({
              edge: i,
              position: { x: p.lng, y: p.lat },
              originalEvent: y.originalEvent,
              view: "map2d"
            });
          }
        });
        const w = this.polylines.get(i.id);
        if (w && this.map)
          try {
            this.map.hasLayer(w) && this.map.removeLayer(w);
          } catch {
          }
        u.addTo(this.map), this.polylines.set(i.id, u);
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
      const [o, n] = i.coordinates;
      return !Number.isFinite(o) || !Number.isFinite(n);
    }), s = this.nodes.filter((i) => {
      if (!i.coordinates || !Array.isArray(i.coordinates) || i.coordinates.length !== 2) return !1;
      const [o, n] = i.coordinates;
      return Number.isFinite(o) && Number.isFinite(n);
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
      const c = Math.ceil(Math.sqrt(e.length)), l = 50 / (Math.ceil(e.length / c) + 1), d = 32 / (c + 1);
      e.forEach((g, u) => {
        const w = Math.floor(u / c), y = u % c, p = -50 + (w + 1) * l, m = -32 + (y + 1) * d, f = this.selectedNodeId === g.id, b = g.style?.color || "#ffffff", C = f ? "#2196f3" : g.style?.borderColor || "#333333", E = `
          <div style="
            width: ${f ? 15 : 10}px;
            height: ${f ? 15 : 10}px;
            background-color: ${b};
            border: 2px solid ${C};
            border-radius: 50%;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          "></div>
        `, x = this.Leaflet.divIcon({
          html: E,
          className: "relatos-node-marker",
          iconSize: [f ? 15 : 10, f ? 15 : 10],
          iconAnchor: [f ? 7.5 : 5, f ? 7.5 : 5]
        }), B = this.Leaflet.marker([p, m], { icon: x });
        B.bindPopup(g.label, {
          closeButton: !1,
          offset: [0, -10]
        }), B.on("click", (T) => {
          if (this.onNodeClick) {
            const A = T.latlng;
            this.onNodeClick({
              node: g,
              position: { x: A.lng, y: A.lat },
              originalEvent: T.originalEvent,
              view: "map2d"
            });
          }
        }), B.addTo(this.map), this.markers.set(g.id, B);
      });
    }
    for (const i of s) {
      const [o, n] = i.coordinates, r = this.selectedNodeId === i.id, a = i.style?.color || "#ffffff", c = r ? "#2196f3" : i.style?.borderColor || "#333333", h = `
        <div style="
          width: ${r ? 15 : 10}px;
          height: ${r ? 15 : 10}px;
          background-color: ${a};
          border: 2px solid ${c};
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        "></div>
      `, l = this.Leaflet.divIcon({
        html: h,
        className: "relatos-node-marker",
        iconSize: [r ? 15 : 10, r ? 15 : 10],
        iconAnchor: [r ? 7.5 : 5, r ? 7.5 : 5]
      }), d = this.Leaflet.marker([o, n], { icon: l });
      d.bindPopup(i.label, {
        closeButton: !1,
        offset: [0, -10]
      }), d.on("click", (g) => {
        if (this.onNodeClick) {
          const u = g.latlng;
          this.onNodeClick({
            node: i,
            position: { x: u.lng, y: u.lat },
            originalEvent: g.originalEvent
          });
        }
      }), d.addTo(this.map), this.markers.set(i.id, d);
    }
    if (this.alwaysShowEdges)
      for (const i of this.edges) {
        const o = this.nodes.find((y) => y.id === i.src), n = this.nodes.find((y) => y.id === i.dst);
        if (!o?.coordinates || !n?.coordinates)
          continue;
        const [r, a] = o.coordinates, [c, h] = n.coordinates, l = i.style?.color || "#999999", d = i.style?.weight || 1, g = Math.max(1, Math.min(5, d)), u = this.Leaflet.polyline(
          [[r, a], [c, h]],
          {
            color: l,
            weight: g,
            opacity: 0.7
          }
        );
        u.on("click", (y) => {
          if (this.onEdgeClick) {
            const p = y.latlng;
            this.onEdgeClick({
              edge: i,
              position: { x: p.lng, y: p.lat },
              originalEvent: y.originalEvent,
              view: "map2d"
            });
          }
        });
        const w = this.polylines.get(i.id);
        if (w && this.map)
          try {
            this.map.hasLayer(w) && this.map.removeLayer(w);
          } catch {
          }
        u.addTo(this.map), this.polylines.set(i.id, u);
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
    const s = this.julian(t) - 2451545, i = (357.5291 + 0.98560028 * s) * Math.PI / 180, o = (1.9148 * Math.sin(i) + 0.02 * Math.sin(2 * i) + 3e-4 * Math.sin(3 * i)) * Math.PI / 180, n = 102.9372 * Math.PI / 180, r = i + o + n + Math.PI, a = 23.4397 * Math.PI / 180, c = Math.atan2(
      Math.sin(r) * Math.cos(a) - Math.tan(0) * Math.sin(a),
      Math.cos(r)
    ), h = Math.asin(
      Math.sin(0) * Math.cos(a) + Math.cos(0) * Math.sin(a) * Math.sin(r)
    ), l = (218.316 + 13.176396 * s) * Math.PI / 180, d = (134.963 + 13.064993 * s) * Math.PI / 180, g = (93.272 + 13.22935 * s) * Math.PI / 180, u = l + 6.289 * Math.sin(d) * Math.PI / 180, w = 5.128 * Math.sin(g) * Math.PI / 180, y = Math.atan2(
      Math.sin(u) * Math.cos(a) - Math.tan(w) * Math.sin(a),
      Math.cos(u)
    ), p = Math.asin(
      Math.sin(w) * Math.cos(a) + Math.cos(w) * Math.sin(a) * Math.sin(u)
    ), m = 385001 - 20905 * Math.cos(d), f = 149598e3, b = Math.acos(
      Math.sin(h) * Math.sin(p) + Math.cos(h) * Math.cos(p) * Math.cos(c - y)
    ), C = Math.atan2(
      f * Math.sin(b),
      m - f * Math.cos(b)
    ), E = Math.atan2(
      Math.cos(h) * Math.sin(c - y),
      Math.sin(h) * Math.cos(p) - Math.cos(h) * Math.sin(p) * Math.cos(c - y)
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
      const i = this.julian(t), o = i - 2451545, n = (218.316 + 13.176396 * o) * Math.PI / 180, r = (134.963 + 13.064993 * o) * Math.PI / 180, a = (93.272 + 13.22935 * o) * Math.PI / 180, c = n + 6.289 * Math.sin(r) * Math.PI / 180, h = 5.128 * Math.sin(a) * Math.PI / 180, l = 23.4397 * Math.PI / 180, d = Math.atan2(
        Math.sin(c) * Math.cos(l) - Math.tan(h) * Math.sin(l),
        Math.cos(c)
      ), g = Math.asin(
        Math.sin(h) * Math.cos(l) + Math.cos(h) * Math.sin(l) * Math.sin(c)
      ), w = this.GMST(i) * Math.PI / 12, y = g;
      let p = d - w;
      const m = y * 180 / Math.PI;
      let f = p * 180 / Math.PI;
      return f = f % 360, f > 180 ? f -= 360 : f < -180 && (f += 360), [m, f];
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
    const t = this.nodes.filter((h) => {
      if (!h.coordinates || !Array.isArray(h.coordinates) || h.coordinates.length !== 2) return !1;
      const [l, d] = h.coordinates;
      return Number.isFinite(l) && Number.isFinite(d);
    }), e = this.nodes.filter((h) => {
      if (!h.coordinates || !Array.isArray(h.coordinates) || h.coordinates.length !== 2) return !0;
      const [l, d] = h.coordinates;
      return !Number.isFinite(l) || !Number.isFinite(d);
    }), s = [], i = [];
    if (t.forEach((h) => {
      if (h.coordinates && h.coordinates.length === 2) {
        const [l, d] = h.coordinates;
        Number.isFinite(l) && Number.isFinite(d) && (s.push(l), i.push(d));
      }
    }), e.length > 0) {
      const u = Math.ceil(Math.sqrt(e.length)), y = 50 / (Math.ceil(e.length / u) + 1), p = 32 / (u + 1);
      e.forEach((m, f) => {
        const b = Math.floor(f / u), C = f % u, E = -50 + (b + 1) * y, x = -32 + (C + 1) * p;
        s.push(E), i.push(x);
      });
    }
    if (s.length === 0)
      return;
    const o = Math.min(...s), n = Math.max(...s), r = Math.min(...i), a = Math.max(...i), c = this.Leaflet.latLngBounds(
      [o, r],
      [n, a]
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
  const s = t.enabledViews || ["graph", "map2d", "globe3d"], i = t.initialView || (s.includes("map2d") ? "map2d" : s[0]), o = t.graph?.mode || "view", n = t.graph?.editable || !1, r = t.tileServers, a = new V(e, s);
  t.time && a.setTime(t.time), typeof t.enableLighting == "boolean" && a.setLightingEnabled(t.enableLighting), t.tables && a.setTableOptions(t.tables), t.events?.onNodeClick && a.setOnNodeClickCallback(t.events.onNodeClick);
  const c = t.events?.onNodeClick ? (l) => {
    t.events.onNodeClick(l), a.highlightNodeRow(l.node.id);
  } : void 0, h = (l) => {
    t.events?.onEdgeClick && t.events.onEdgeClick(l), a.highlightEdgeRow(l.edge.id);
  };
  if (s.includes("graph")) {
    const l = document.createElement("div");
    l.style.width = "100%", l.style.height = "100%", a.getViewContainer().appendChild(l);
    const d = new U(
      l,
      c || t.events?.onNodeClick,
      t.events?.onSave,
      n,
      h
    );
    d.setModeChangeCallback(() => {
      a.updateEditToggleButton(), a.updateGraphButtons();
    }), d.setAlwaysShowEdgesChangeCallback((g) => {
      a.setAlwaysShowEdges(g);
    }), d.setGraphButtonsUpdateCallback(() => {
      a.updateGraphButtons();
    }), d.setMode(o), t.data && d.setData(t.data.nodes, t.data.edges), a.registerView("graph", d);
  }
  if (s.includes("map2d") && t.loaders?.leaflet) {
    const l = document.createElement("div");
    l.style.width = "100%", l.style.height = "100%", a.getViewContainer().appendChild(l);
    const d = new q(
      l,
      c || t.events?.onNodeClick,
      t.loaders.leaflet,
      r,
      t.map2d,
      h
    );
    d.setAlwaysShowEdgesChangeCallback((g) => {
      a.setAlwaysShowEdges(g);
    }), d.setLightingChangeCallback((g) => {
      a.setLightingEnabled(g);
    }), t.data && d.setData(t.data.nodes, t.data.edges), a.registerView("map2d", d);
  }
  if (s.includes("globe3d") && t.loaders?.cesium)
    try {
      const l = document.createElement("div");
      l.style.width = "100%", l.style.height = "100%", a.getViewContainer().appendChild(l);
      const d = new j(
        l,
        c || t.events?.onNodeClick,
        t.loaders.cesium,
        t.globe3d ? {
          customTileUrl: t.globe3d.customTileUrl,
          customTileUrls: t.globe3d.customTileUrls
        } : void 0,
        r,
        h
      );
      d.setAlwaysShowEdgesChangeCallback((g) => {
        a.setAlwaysShowEdges(g);
      }), d.setLightingChangeCallback((g) => {
        a.setLightingEnabled(g);
      }), t.data && d.setData(t.data.nodes, t.data.edges), a.registerView("globe3d", d);
    } catch {
    }
  return a.setInitialView(i), t.data && a.setData(t.data.nodes, t.data.edges), {
    setData(l) {
      const d = a.getView("graph");
      d && d.setData(l.nodes, l.edges);
      const g = a.getView("map2d");
      g && g.setData(l.nodes, l.edges);
      const u = a.getView("globe3d");
      u && u.setData(l.nodes, l.edges), a.setData(l.nodes, l.edges);
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
      const d = a.getView("graph");
      d && d.setMode(l);
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
      const d = a.getView("graph");
      d && d.selectNode && d.selectNode(l);
      const g = a.getView("map2d");
      g && g.selectNode && g.selectNode(l);
      const u = a.getView("globe3d");
      u && u.selectNode && u.selectNode(l);
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
