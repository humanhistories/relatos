const V = `<!-- relatos/src/assets/icons/icons.svg -->
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

</svg>`;
let W = !1;
const Y = "relatos-icons-sprite";
function D() {
  if (W)
    return;
  if (document.getElementById(Y)) {
    W = !0;
    return;
  }
  const M = document.createElement("div");
  M.id = Y, M.style.display = "none", M.innerHTML = V, document.body.appendChild(M), W = !0;
}
function _(M, t = 16) {
  return D(), `<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <use href="#${M}"></use>
  </svg>`;
}
class G {
  constructor(t, e) {
    this.currentView = null, this.views = /* @__PURE__ */ new Map(), this.tabButtons = /* @__PURE__ */ new Map(), this.editToggleButton = null, this.alwaysShowEdgesButton = null, this.lightingToggleButton = null, this.tileTypeButton = null, this.moonToggleButton = null, this.fitCenterButton = null, this.clearSelectionButton = null, this.deleteBendButton = null, this.cancelEditButton = null, this.tableContainer = null, this.nodesTableContainer = null, this.edgesTableContainer = null, this.tableOptions = null, this.nodes = [], this.edges = [], this.isExternalTableContainer = !1, this.hasEdges = !1, this.sharedAlwaysShowEdges = !1, this.sharedLightingEnabled = !1, this.sharedTime = null, this.sharedTileServerIndex = 0, this.container = t, this.enabledViews = e, D(), this.container.style.display = "flex", this.container.style.flexDirection = "column", this.container.style.width = "100%", this.tabContainer = document.createElement("div"), this.tabContainer.style.display = "flex", this.tabContainer.style.gap = "4px", this.tabContainer.style.padding = "8px", this.tabContainer.style.borderBottom = "none", this.tabContainer.style.backgroundColor = "transparent", this.tabContainer.style.position = "absolute", this.tabContainer.style.top = "0", this.tabContainer.style.left = "0", this.tabContainer.style.right = "0", this.tabContainer.style.zIndex = "1000", this.tabContainer.style.pointerEvents = "none", this.viewContainer = document.createElement("div"), this.viewContainer.style.flex = "1 1 0%", this.viewContainer.style.position = "relative", this.viewContainer.style.overflow = "hidden", this.viewContainer.style.minHeight = "0", this.createTabButtons(), this.createCommonControlsContainer(), this.container.appendChild(this.viewContainer), this.viewContainer.appendChild(this.tabContainer);
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
  createTable(t, e, i, s, o) {
    const n = document.createElement("div"), l = document.createElement("table");
    if (l.style.width = "100%", l.style.borderCollapse = "collapse", !document.getElementById("relatos-table-styles")) {
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
    l.className = "relatos-table";
    const a = document.createElement("thead");
    if (e)
      a.innerHTML = e;
    else {
      const d = document.createElement("tr");
      a.appendChild(d);
    }
    l.appendChild(a);
    const c = document.createElement("tbody");
    for (const d of s) {
      const r = document.createElement("tr");
      r.id = `${o}-${d.id}`, r.style.cursor = "pointer";
      let h = i;
      if ("info" in d && d.info)
        for (const [g, u] of Object.entries(d.info)) {
          const m = new RegExp(`\\{\\{info\\.${g}\\}\\}`, "g");
          h = h.replace(m, String(u || ""));
        }
      if (h = h.replace(/\{\{id\}\}/g, String(d.id || "")), h = h.replace(/\{\{label\}\}/g, String("label" in d && d.label || "")), h = h.replace(/\{\{type\}\}/g, String("type" in d && d.type || "")), "coordinates" in d && d.coordinates && (h = h.replace(/\{\{coordinates\.0\}\}/g, String(d.coordinates[0] || "")), h = h.replace(/\{\{coordinates\.1\}\}/g, String(d.coordinates[1] || "")), h = h.replace(/\{\{latitude\}\}/g, String(d.coordinates[0] || "")), h = h.replace(/\{\{longitude\}\}/g, String(d.coordinates[1] || ""))), d.style && typeof d.style == "object") {
        const g = d.style;
        h = h.replace(/\{\{style\.color\}\}/g, String(g.color ?? "")), h = h.replace(/\{\{style\.borderColor\}\}/g, String(g.borderColor ?? "")), h = h.replace(/\{\{style\.width\}\}/g, String(g.width ?? "")), h = h.replace(/\{\{style\.height\}\}/g, String(g.height ?? "")), h = h.replace(/\{\{style\.weight\}\}/g, String(g.weight ?? "")), h = h.replace(/\{\{style\.label\}\}/g, String(g.label ?? "")), h = h.replace(/\{\{style\.srcLabel\}\}/g, String(g.srcLabel ?? "")), h = h.replace(/\{\{style\.dstLabel\}\}/g, String(g.dstLabel ?? ""));
      }
      "src" in d && (h = h.replace(/\{\{src\}\}/g, String(d.src || "")), h = h.replace(/\{\{dst\}\}/g, String(d.dst || "")), h = h.replace(/\{\{relType\}\}/g, String(d.relType || ""))), r.innerHTML = h, r.addEventListener("click", () => {
        if (o === "node") {
          if (this.highlightAndScrollToRow(r), !this.currentView)
            return;
          const g = this.views.get(this.currentView);
          g?.selectNode && g.selectNode(d.id);
        }
      }), c.appendChild(r);
    }
    return l.appendChild(c), n.appendChild(l), n;
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
    this.tableContainer.querySelectorAll(".highlight").forEach((s) => s.classList.remove("highlight"));
    let i = null;
    for (const s of t) {
      const o = this.tableContainer?.querySelector(`#node-${s}`);
      o && (o.classList.add("highlight"), i || (i = o), setTimeout(() => {
        o.classList.remove("highlight");
      }, 2e3));
    }
    i && i.scrollIntoView({ behavior: "smooth", block: "center" });
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
    this.commonControlsContainer = document.createElement("div"), this.commonControlsContainer.style.display = "flex", this.commonControlsContainer.style.gap = "4px", this.commonControlsContainer.style.marginLeft = "auto", this.commonControlsContainer.style.pointerEvents = "none", this.createCancelEditButton(), this.createEditToggleButton(), this.createAlwaysShowEdgesButton(), this.createClearSelectionButton(), this.createDeleteBendButton(), this.createLightingToggleButton(), this.createTileTypeButton(), this.createMoonToggleButton(), this.createFitCenterButton(), this.tabContainer.appendChild(this.commonControlsContainer);
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
    this.alwaysShowEdgesButton = document.createElement("button"), this.alwaysShowEdgesButton.className = "relatos-always-show-edges-toggle", this.alwaysShowEdgesButton.innerHTML = _("icon-relations", 16), this.alwaysShowEdgesButton.setAttribute("aria-label", "Toggle edges"), this.alwaysShowEdgesButton.setAttribute("title", "Toggle edges"), this.alwaysShowEdgesButton.style.padding = "6px", this.alwaysShowEdgesButton.style.border = "1px solid #ccc", this.alwaysShowEdgesButton.style.borderRadius = "4px", this.alwaysShowEdgesButton.style.backgroundColor = "#fff", this.alwaysShowEdgesButton.style.cursor = "pointer", this.alwaysShowEdgesButton.style.fontSize = "16px", this.alwaysShowEdgesButton.style.width = "32px", this.alwaysShowEdgesButton.style.height = "32px", this.alwaysShowEdgesButton.style.display = "flex", this.alwaysShowEdgesButton.style.alignItems = "center", this.alwaysShowEdgesButton.style.justifyContent = "center", this.alwaysShowEdgesButton.style.pointerEvents = "auto", this.alwaysShowEdgesButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.alwaysShowEdgesButton.style.transition = "0.2s", this.alwaysShowEdgesButton.style.color = "#000000", this.alwaysShowEdgesButton.addEventListener("click", () => {
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
    this.lightingToggleButton = document.createElement("button"), this.lightingToggleButton.innerHTML = _("icon-sun", 16), this.lightingToggleButton.setAttribute("aria-label", "Toggle lighting"), this.lightingToggleButton.setAttribute("title", "Toggle lighting"), this.lightingToggleButton.style.padding = "6px", this.lightingToggleButton.style.border = "1px solid #ccc", this.lightingToggleButton.style.borderRadius = "4px", this.lightingToggleButton.style.backgroundColor = "#fff", this.lightingToggleButton.style.cursor = "pointer", this.lightingToggleButton.style.fontSize = "16px", this.lightingToggleButton.style.width = "32px", this.lightingToggleButton.style.height = "32px", this.lightingToggleButton.style.display = "none", this.lightingToggleButton.style.alignItems = "center", this.lightingToggleButton.style.justifyContent = "center", this.lightingToggleButton.style.pointerEvents = "auto", this.lightingToggleButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.lightingToggleButton.style.transition = "0.2s", this.lightingToggleButton.addEventListener("click", () => {
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
    this.tileTypeButton = document.createElement("button"), this.tileTypeButton.innerHTML = _("icon-map-tiles", 16), this.tileTypeButton.setAttribute("aria-label", "Switch tile type"), this.tileTypeButton.setAttribute("title", "Switch tile type"), this.tileTypeButton.style.padding = "6px", this.tileTypeButton.style.border = "1px solid #ccc", this.tileTypeButton.style.borderRadius = "4px", this.tileTypeButton.style.backgroundColor = "#fff", this.tileTypeButton.style.cursor = "pointer", this.tileTypeButton.style.fontSize = "16px", this.tileTypeButton.style.width = "32px", this.tileTypeButton.style.height = "32px", this.tileTypeButton.style.display = "none", this.tileTypeButton.style.alignItems = "center", this.tileTypeButton.style.justifyContent = "center", this.tileTypeButton.style.pointerEvents = "auto", this.tileTypeButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.tileTypeButton.style.transition = "0.2s", this.tileTypeButton.addEventListener("click", () => {
      if (!this.currentView)
        return;
      let t = 0;
      for (const e of this.views.values())
        if (e.getTileServerCount) {
          const i = e.getTileServerCount();
          i > t && (t = i);
        }
      if (!(t < 2)) {
        this.sharedTileServerIndex = (this.sharedTileServerIndex + 1) % t;
        for (const e of this.views.values())
          if (e.getTileServerCount && e.setTileServerIndex) {
            const i = e.getTileServerCount();
            if (i > 0) {
              const s = this.sharedTileServerIndex % i;
              e.setTileServerIndex(s);
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
    const e = t.isMoonEnabled?.() || !1, i = t.getTime?.() || null, s = i ? new Date(i) : /* @__PURE__ */ new Date(), o = t.getMoonPhase?.(s) || 0, n = t.getMoonPhaseIcon?.(o, 16) || "🌑";
    this.moonToggleButton.innerHTML = n, e ? (this.moonToggleButton.style.backgroundColor = "#fff9c4", this.moonToggleButton.style.boxShadow = "inset 0 2px 4px rgba(0, 0, 0, 0.2)", this.moonToggleButton.style.transform = "translateY(1px)", this.moonToggleButton.setAttribute("title", "Hide moon")) : (this.moonToggleButton.style.backgroundColor = "#fff", this.moonToggleButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.moonToggleButton.style.transform = "translateY(0)", this.moonToggleButton.setAttribute("title", "Show moon"));
  }
  /**
   * Create fit center button (in common controls)
   */
  createFitCenterButton() {
    this.fitCenterButton = document.createElement("button"), this.fitCenterButton.innerHTML = _("icon-home", 16), this.fitCenterButton.setAttribute("aria-label", "Fit and center"), this.fitCenterButton.setAttribute("title", "Fit and center"), this.fitCenterButton.style.padding = "6px", this.fitCenterButton.style.border = "1px solid #ccc", this.fitCenterButton.style.borderRadius = "4px", this.fitCenterButton.style.backgroundColor = "#fff", this.fitCenterButton.style.cursor = "pointer", this.fitCenterButton.style.fontSize = "16px", this.fitCenterButton.style.width = "32px", this.fitCenterButton.style.height = "32px", this.fitCenterButton.style.display = "flex", this.fitCenterButton.style.alignItems = "center", this.fitCenterButton.style.justifyContent = "center", this.fitCenterButton.style.pointerEvents = "auto", this.fitCenterButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.fitCenterButton.style.transition = "0.2s", this.fitCenterButton.addEventListener("click", () => {
      if (!this.currentView)
        return;
      const t = this.views.get(this.currentView);
      t?.fitAndCenter && t.fitAndCenter();
    }), this.commonControlsContainer.appendChild(this.fitCenterButton);
  }
  /**
   * Create clear selection button (in common controls, Graph only)
   */
  createClearSelectionButton() {
    this.clearSelectionButton = document.createElement("button"), this.clearSelectionButton.innerHTML = "✕", this.clearSelectionButton.setAttribute("aria-label", "Clear selection"), this.clearSelectionButton.setAttribute("title", "Clear selection"), this.clearSelectionButton.style.padding = "6px", this.clearSelectionButton.style.border = "1px solid #ccc", this.clearSelectionButton.style.borderRadius = "4px", this.clearSelectionButton.style.backgroundColor = "#fff", this.clearSelectionButton.style.cursor = "pointer", this.clearSelectionButton.style.fontSize = "16px", this.clearSelectionButton.style.width = "32px", this.clearSelectionButton.style.height = "32px", this.clearSelectionButton.style.display = "none", this.clearSelectionButton.style.alignItems = "center", this.clearSelectionButton.style.justifyContent = "center", this.clearSelectionButton.style.pointerEvents = "auto", this.clearSelectionButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.clearSelectionButton.style.transition = "0.2s", this.clearSelectionButton.addEventListener("click", () => {
      if (!this.currentView)
        return;
      const t = this.views.get(this.currentView);
      t?.clearSelection && t.clearSelection();
    }), this.commonControlsContainer.appendChild(this.clearSelectionButton);
  }
  /**
   * Create delete bend button (in common controls, Graph only)
   */
  createDeleteBendButton() {
    this.deleteBendButton = document.createElement("button"), this.deleteBendButton.innerHTML = "🗑", this.deleteBendButton.setAttribute("aria-label", "Delete bend point"), this.deleteBendButton.setAttribute("title", "Delete bend point"), this.deleteBendButton.style.padding = "6px", this.deleteBendButton.style.border = "1px solid #ccc", this.deleteBendButton.style.borderRadius = "4px", this.deleteBendButton.style.backgroundColor = "#fff", this.deleteBendButton.style.cursor = "pointer", this.deleteBendButton.style.fontSize = "16px", this.deleteBendButton.style.width = "32px", this.deleteBendButton.style.height = "32px", this.deleteBendButton.style.display = "none", this.deleteBendButton.style.alignItems = "center", this.deleteBendButton.style.justifyContent = "center", this.deleteBendButton.style.pointerEvents = "auto", this.deleteBendButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.deleteBendButton.style.transition = "0.2s", this.deleteBendButton.addEventListener("click", () => {
      if (!this.currentView)
        return;
      const t = this.views.get(this.currentView);
      t?.deleteNearestBendPoint && t.deleteNearestBendPoint();
    }), this.commonControlsContainer.appendChild(this.deleteBendButton);
  }
  /**
   * Create cancel edit button (in common controls, Graph only)
   */
  createCancelEditButton() {
    this.cancelEditButton = document.createElement("button"), this.cancelEditButton.innerHTML = _("icon-undo", 16), this.cancelEditButton.setAttribute("aria-label", "Cancel edit"), this.cancelEditButton.setAttribute("title", "Cancel edit and restore previous state"), this.cancelEditButton.style.padding = "6px", this.cancelEditButton.style.border = "1px solid #ccc", this.cancelEditButton.style.borderRadius = "4px", this.cancelEditButton.style.backgroundColor = "#fff", this.cancelEditButton.style.cursor = "pointer", this.cancelEditButton.style.fontSize = "16px", this.cancelEditButton.style.width = "32px", this.cancelEditButton.style.height = "32px", this.cancelEditButton.style.display = "none", this.cancelEditButton.style.alignItems = "center", this.cancelEditButton.style.justifyContent = "center", this.cancelEditButton.style.pointerEvents = "auto", this.cancelEditButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.cancelEditButton.style.transition = "0.2s", this.cancelEditButton.addEventListener("click", () => {
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
      const i = t.getEditToggleButton?.();
      i && (this.editToggleButton.innerHTML = i.innerHTML, this.editToggleButton.setAttribute("aria-label", i.getAttribute("aria-label") || "Toggle edit mode"), this.editToggleButton.setAttribute("title", i.getAttribute("title") || "Toggle edit mode"), this.editToggleButton.className = i.className, this.editToggleButton.style.padding = "6px", this.editToggleButton.style.border = i.style.border || "1px solid #ccc", this.editToggleButton.style.borderRadius = i.style.borderRadius || "4px", this.editToggleButton.style.backgroundColor = i.style.backgroundColor || "#fff", this.editToggleButton.style.color = i.style.color || "#333", this.editToggleButton.style.borderColor = i.style.borderColor || "#ccc", this.editToggleButton.style.cursor = i.style.cursor || "pointer", this.editToggleButton.style.fontSize = "16px", this.editToggleButton.style.width = "32px", this.editToggleButton.style.height = "32px", this.editToggleButton.style.alignItems = "center", this.editToggleButton.style.justifyContent = "center", this.editToggleButton.style.transition = i.style.transition || "0.2s", this.editToggleButton.style.boxShadow = i.style.boxShadow || "0 2px 4px rgba(0, 0, 0, 0.1)", this.editToggleButton.style.transform = i.style.transform || "translateY(0)", this.editToggleButton.onclick = () => {
        i.click();
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
    for (const i of this.enabledViews) {
      const s = document.createElement("button");
      s.innerHTML = _(t[i], 16), s.setAttribute("aria-label", e[i]), s.setAttribute("title", e[i]), s.style.padding = "8px 16px", s.style.border = "1px solid #ccc", s.style.borderRadius = "4px 4px 0 0", s.style.backgroundColor = "#fff", s.style.cursor = "pointer", s.style.fontSize = "14px", s.style.display = "flex", s.style.alignItems = "center", s.style.justifyContent = "center", s.style.color = "#000000", s.style.pointerEvents = "auto", s.style.visibility = "visible", s.style.opacity = "1", s.addEventListener("click", () => {
        this.switchView(i);
      }), this.tabButtons.set(i, s), this.tabContainer.appendChild(s), console.log(`Created tab button for view: ${i}`);
    }
    console.log(`Created ${this.tabButtons.size} tab buttons for enabled views: ${this.enabledViews.join(", ")}`);
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
    if (!this.enabledViews.includes(t)) {
      console.warn(`View "${t}" is not enabled`);
      return;
    }
    if (this.currentView === t)
      return;
    if (this.currentView) {
      const s = this.views.get(this.currentView);
      s && s.hide();
      const o = this.tabButtons.get(this.currentView);
      o && (o.style.backgroundColor = "#fff", o.style.fontWeight = "normal", o.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", o.style.transform = "translateY(0)");
    }
    const e = this.views.get(t);
    e ? (this.applySharedToggleStates(e), e.show(), setTimeout(() => {
      this.currentView === t && (this.applySharedToggleStates(e), this.updateLightingButton(), this.updateTileTypeButton(), this.updateMoonButton());
    }, t === "globe3d" ? 500 : 100), e.resize()) : console.warn(`View "${t}" is enabled but not registered. Make sure the view is created and registered.`);
    const i = this.tabButtons.get(t);
    i && (i.style.backgroundColor = "#fff9c4", i.style.fontWeight = "bold", i.style.boxShadow = "inset 0 2px 4px rgba(0, 0, 0, 0.2)", i.style.transform = "translateY(1px)"), this.currentView = t, this.updateEditToggleButton(), this.updateCommonControlsVisibility(), this.updateAlwaysShowEdgesButton(), this.updateLightingButton(), this.updateTileTypeButton(), this.updateCancelEditButton(), this.updateClearSelectionButton(), this.updateDeleteBendButton();
  }
  /**
   * Set initial view
   */
  setInitialView(t) {
    if (!this.enabledViews.includes(t)) {
      console.warn(`View "${t}" is not enabled, using first enabled view`), this.switchView(this.enabledViews[0]);
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
        const i = this.sharedTileServerIndex % e;
        t.setTileServerIndex(i);
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
    this.cancelEditButton && e && (this.cancelEditButton.style.display = "none"), this.editToggleButton && e && (this.editToggleButton.style.display = "none"), this.clearSelectionButton && (this.clearSelectionButton.style.display = t ? "flex" : "none"), this.deleteBendButton && (this.deleteBendButton.style.display = t ? "flex" : "none"), this.lightingToggleButton && (this.lightingToggleButton.style.display = e ? "flex" : "none"), this.tileTypeButton && (this.tileTypeButton.style.display = e ? "flex" : "none"), this.moonToggleButton && (this.moonToggleButton.style.display = this.currentView === "map2d" ? "flex" : "none"), this.alwaysShowEdgesButton && (this.alwaysShowEdgesButton.style.display = this.hasEdges ? "flex" : "none"), this.fitCenterButton && (this.fitCenterButton.style.display = "flex"), this.reorderButtons();
  }
  /**
   * Reorder buttons based on current view
   * Graph: Cancel, Edit toggle, Always show edges, Fit/Center
   * Map2D/Globe3D: Lighting toggle, Tile type, Always show edges, Fit/Center
   */
  reorderButtons() {
    const t = this.currentView === "graph", e = this.currentView === "map2d" || this.currentView === "globe3d";
    if (!this.commonControlsContainer)
      return;
    const i = [];
    for (this.cancelEditButton && i.push(this.cancelEditButton), this.editToggleButton && i.push(this.editToggleButton), this.clearSelectionButton && i.push(this.clearSelectionButton), this.deleteBendButton && i.push(this.deleteBendButton), this.lightingToggleButton && i.push(this.lightingToggleButton), this.moonToggleButton && i.push(this.moonToggleButton), this.tileTypeButton && i.push(this.tileTypeButton), this.alwaysShowEdgesButton && this.hasEdges && i.push(this.alwaysShowEdgesButton), this.fitCenterButton && i.push(this.fitCenterButton); this.commonControlsContainer.firstChild; )
      this.commonControlsContainer.removeChild(this.commonControlsContainer.firstChild);
    t ? (this.cancelEditButton && this.commonControlsContainer.appendChild(this.cancelEditButton), this.editToggleButton && this.commonControlsContainer.appendChild(this.editToggleButton), this.alwaysShowEdgesButton && this.hasEdges && this.commonControlsContainer.appendChild(this.alwaysShowEdgesButton), this.fitCenterButton && this.commonControlsContainer.appendChild(this.fitCenterButton)) : e && (this.moonToggleButton && this.currentView === "map2d" && this.commonControlsContainer.appendChild(this.moonToggleButton), this.lightingToggleButton && this.commonControlsContainer.appendChild(this.lightingToggleButton), this.tileTypeButton && this.commonControlsContainer.appendChild(this.tileTypeButton), this.alwaysShowEdgesButton && this.hasEdges && this.commonControlsContainer.appendChild(this.alwaysShowEdgesButton), this.fitCenterButton && this.commonControlsContainer.appendChild(this.fitCenterButton));
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
        const i = e.getTileServerCount();
        i > t && (t = i);
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
    const i = t.getMode?.() === "edit";
    this.cancelEditButton.style.display = i ? "flex" : "none";
  }
  /**
   * Update clear selection button visibility (Graph only, shown when edge is selected)
   */
  updateClearSelectionButton() {
    if (!this.clearSelectionButton)
      return;
    if (!this.currentView || this.currentView !== "graph") {
      this.clearSelectionButton.style.display = "none";
      return;
    }
    const t = this.views.get(this.currentView);
    if (!t) {
      this.clearSelectionButton.style.display = "none";
      return;
    }
    const i = t.getSelectedEdgeId?.();
    this.clearSelectionButton.style.display = i ? "flex" : "none";
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
    const e = t, i = e.getSelectedEdgeId?.();
    if (i) {
      const o = (e.getEdges?.() || []).find((l) => l.id === i), n = o?.bends && o.bends.length > 0;
      this.deleteBendButton.style.display = n ? "flex" : "none";
    } else
      this.deleteBendButton.style.display = "none";
  }
  /**
   * Update Graph-specific buttons (called from GraphView when state changes)
   */
  updateGraphButtons() {
    this.updateCancelEditButton(), this.updateClearSelectionButton(), this.updateDeleteBendButton();
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
function z(M, t = 16) {
  return D(), `<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <use href="#${M}"></use>
  </svg>`;
}
class U {
  constructor(t, e, i, s = !1, o) {
    this.nodes = [], this.edges = [], this.mode = "view", this.editable = !1, this.nodeElements = /* @__PURE__ */ new Map(), this.edgeElements = /* @__PURE__ */ new Map(), this.selectedEdgeId = null, this.selectedNodeId = null, this.zoomedNodeId = null, this.anchorHandles = /* @__PURE__ */ new Map(), this.draggingAnchor = null, this.bendHandles = /* @__PURE__ */ new Map(), this.draggingBend = null, this.draggingNode = null, this.panning = null, this.lastPanEndTime = 0, this.resizingNode = null, this.saveDebounceTimer = null, this.SAVE_DEBOUNCE_MS = 500, this.resizeRenderTimer = null, this.editToggleButton = null, this.alwaysShowEdgesButton = null, this.alwaysShowEdges = !1, this.hoveredEdgePairKey = null, this.tappedEdgePairKey = null, this.snapshotBeforeEdit = null, this.edgeClickTimers = /* @__PURE__ */ new WeakMap(), this.offsetX = 0, this.offsetY = 0, this.zoom = 1, this.pinchDistance = null, this.pinchCenter = null, this.initialZoom = 1, this.popupElement = null, this.popupNodeId = null, this.DEFAULT_NODE_WIDTH = 120, this.DEFAULT_NODE_HEIGHT = 60, this.EDGE_DEFAULT_COLOR = "#999", this.EDGE_HOVER_COLOR = "#333", this.EDGE_DEFAULT_WIDTH = 1.5, this.EDGE_HOVER_WIDTH = 3, this.EDGE_MIN_WEIGHT = 1, this.EDGE_MAX_WEIGHT = 10, this.NODE_PADDING = 10, this.HANDLE_RADIUS = 8, this.BEND_HANDLE_RADIUS = 7, this.HIT_PATH_WIDTH = 32, this.controlButtonsContainer = null, this.clearSelectionButton = null, this.deleteBendButton = null, this.fitCenterButton = null, this.cancelEditButton = null, this.container = t, this.onNodeClick = e ? (n) => {
      this.popupNodeId === n.node.id && this.popupElement && this.popupElement.style.opacity === "1" ? this.hidePopup() : this.showPopup(n.node), e(n);
    } : void 0, this.onSave = i, this.editable = s, this.onEdgeClick = o, this.container.style.position = "relative", this.container.style.width = "100%", this.container.style.height = "100%", this.container.style.overflow = "visible", this.createAlwaysShowEdgesButton(), this.alwaysShowEdgesButton && (this.alwaysShowEdgesButton.style.display = "none", this.alwaysShowEdgesButton.parentNode && this.alwaysShowEdgesButton.parentNode.removeChild(this.alwaysShowEdgesButton)), this.createEditToggleButton(), this.editToggleButton && (this.editToggleButton.style.display = "none", this.editToggleButton.parentNode && this.editToggleButton.parentNode.removeChild(this.editToggleButton)), this.createControlButtons(), this.controlButtonsContainer && (this.controlButtonsContainer.style.display = "none", this.controlButtonsContainer.parentNode && this.controlButtonsContainer.parentNode.removeChild(this.controlButtonsContainer)), this.createAttributionLabel(), this.svgWrapper = document.createElement("div"), this.svgWrapper.style.position = "absolute", this.svgWrapper.style.top = "0", this.svgWrapper.style.left = "0", this.svgWrapper.style.width = "100%", this.svgWrapper.style.height = "100%", this.svgWrapper.style.transformOrigin = "0 0", this.svgWrapper.style.pointerEvents = "none", this.container.appendChild(this.svgWrapper), this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"), this.svg.style.width = "100%", this.svg.style.height = "100%", this.svg.style.display = "block", this.svg.style.pointerEvents = "auto", this.svgWrapper.appendChild(this.svg), this.svgDefs = document.createElementNS("http://www.w3.org/2000/svg", "defs"), this.createArrowMarkers(), this.svg.appendChild(this.svgDefs), this.edgesGroup = document.createElementNS("http://www.w3.org/2000/svg", "g"), this.edgesGroup.setAttribute("class", "edges"), this.svg.appendChild(this.edgesGroup), this.nodesGroup = document.createElementNS("http://www.w3.org/2000/svg", "g"), this.nodesGroup.setAttribute("class", "nodes"), this.svg.appendChild(this.nodesGroup), this.anchorHandlesGroup = document.createElementNS("http://www.w3.org/2000/svg", "g"), this.anchorHandlesGroup.setAttribute("class", "anchor-handles"), this.anchorHandlesGroup.style.display = "none", this.svg.appendChild(this.anchorHandlesGroup), this.bendHandlesGroup = document.createElementNS("http://www.w3.org/2000/svg", "g"), this.bendHandlesGroup.setAttribute("class", "bend-handles"), this.bendHandlesGroup.style.display = "none", this.svg.appendChild(this.bendHandlesGroup), this.edgeLabelsGroup = document.createElementNS("http://www.w3.org/2000/svg", "g"), this.edgeLabelsGroup.setAttribute("class", "edge-labels"), this.svg.appendChild(this.edgeLabelsGroup), this.updateTransform(), this.setupEventListeners();
  }
  /**
   * Create always show edges toggle button
   */
  createAlwaysShowEdgesButton() {
    this.alwaysShowEdgesButton = document.createElement("button"), this.alwaysShowEdgesButton.className = "relatos-always-show-edges-toggle", this.alwaysShowEdgesButton.setAttribute("aria-label", "Always show all edges"), this.alwaysShowEdgesButton.setAttribute("title", "Always show all edges"), this.alwaysShowEdgesButton.style.padding = "6px", this.alwaysShowEdgesButton.style.border = "1px solid #ccc", this.alwaysShowEdgesButton.style.borderRadius = "4px", this.alwaysShowEdgesButton.style.backgroundColor = "#fff", this.alwaysShowEdgesButton.style.cursor = "pointer", this.alwaysShowEdgesButton.style.fontSize = "16px", this.alwaysShowEdgesButton.style.lineHeight = "1", this.alwaysShowEdgesButton.style.width = "32px", this.alwaysShowEdgesButton.style.height = "32px", this.alwaysShowEdgesButton.style.display = "flex", this.alwaysShowEdgesButton.style.alignItems = "center", this.alwaysShowEdgesButton.style.justifyContent = "center", this.alwaysShowEdgesButton.style.transition = "all 0.2s", this.alwaysShowEdgesButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.alwaysShowEdgesButton.style.pointerEvents = "auto", this.alwaysShowEdgesButton.style.color = "#000000", this.alwaysShowEdgesButton.innerHTML = z("icon-relations", 16), this.alwaysShowEdgesButton.addEventListener("click", () => {
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
    this.editToggleButton && (this.editToggleButton.innerHTML = z("icon-edit", 16), this.mode === "edit" ? (this.editToggleButton.setAttribute("aria-label", "Exit edit mode"), this.editToggleButton.setAttribute("title", "Exit edit mode"), this.editToggleButton.classList.add("relatos-edit-toggle-active"), this.editToggleButton.style.backgroundColor = "#fff9c4", this.editToggleButton.style.color = "red", this.editToggleButton.style.borderColor = "#999", this.editToggleButton.style.boxShadow = "inset 0 2px 4px rgba(0, 0, 0, 0.2)", this.editToggleButton.style.transform = "translateY(1px)") : (this.editToggleButton.setAttribute("aria-label", "Enter edit mode"), this.editToggleButton.setAttribute("title", "Enter edit mode"), this.editToggleButton.classList.remove("relatos-edit-toggle-active"), this.editToggleButton.style.backgroundColor = "#fff", this.editToggleButton.style.color = "#333", this.editToggleButton.style.borderColor = "#ccc", this.editToggleButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", this.editToggleButton.style.transform = "translateY(0)"));
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
    this.controlButtonsContainer = document.createElement("div"), this.controlButtonsContainer.style.position = "absolute", this.controlButtonsContainer.style.top = "8px", this.controlButtonsContainer.style.right = "8px", this.controlButtonsContainer.style.display = "flex", this.controlButtonsContainer.style.gap = "4px", this.controlButtonsContainer.style.zIndex = "1000", this.controlButtonsContainer.style.pointerEvents = "none", this.clearSelectionButton = this.createIconButton("✕", "Clear selection", "Clear selection", () => {
      this.deselectEdge();
    }), this.clearSelectionButton.style.display = "none", this.deleteBendButton = this.createIconButton("🗑", "Delete bend point", "Delete bend point", () => {
      this.selectedEdgeId && this.deleteNearestBendPoint();
    }), this.deleteBendButton.style.display = "none", this.fitCenterButton = this.createIconButton(z("icon-home", 16), "Fit and center", "Fit and center", () => {
      this.fitAndCenter();
    }), this.fitCenterButton.style.display = "none", this.cancelEditButton = this.createIconButton(z("icon-undo", 16), "Cancel edit", "Cancel edit and restore previous state", () => {
      this.restoreSnapshot(), this.setMode("view");
    }), this.cancelEditButton.style.display = "none", this.controlButtonsContainer.appendChild(this.clearSelectionButton), this.controlButtonsContainer.appendChild(this.deleteBendButton), this.controlButtonsContainer.appendChild(this.fitCenterButton), this.controlButtonsContainer.appendChild(this.cancelEditButton);
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
  createIconButton(t, e, i, s) {
    const o = document.createElement("button");
    return o.innerHTML = t, o.setAttribute("aria-label", e), o.setAttribute("title", i), o.style.padding = "6px", o.style.border = "1px solid #ccc", o.style.borderRadius = "4px", o.style.backgroundColor = "#fff", o.style.cursor = "pointer", o.style.fontSize = "16px", o.style.width = "32px", o.style.height = "32px", o.style.display = "flex", o.style.alignItems = "center", o.style.justifyContent = "center", o.style.pointerEvents = "auto", o.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)", o.style.transition = "all 0.2s", o.addEventListener("click", (n) => {
      n.stopPropagation(), s();
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
  zoomToPoint(t, e, i) {
    const s = this.screenToSvg(e, i);
    this.zoom, this.zoom = t;
    const o = this.container.getBoundingClientRect(), n = e - o.left, l = i - o.top, a = {
      x: n / this.zoom - this.offsetX,
      y: l / this.zoom - this.offsetY
    }, c = s.x - a.x, d = s.y - a.y;
    this.offsetX += c, this.offsetY += d;
  }
  /**
   * Convert screen coordinates to SVG coordinates accounting for offset and zoom
   * With DOM scale transform, wrapper size is (100% / zoom) and then scaled by zoom
   * The visual size is always 100%, so we can use container coordinates
   */
  screenToSvg(t, e) {
    const i = this.container.getBoundingClientRect(), s = t - i.left, o = e - i.top, n = s / this.zoom, l = o / this.zoom;
    return {
      x: n - this.offsetX,
      y: l - this.offsetY
    };
  }
  /**
   * Update transform: zoom on DOM wrapper, translate on SVG groups
   */
  updateTransform() {
    if (this.popupNodeId && this.popupElement) {
      const n = this.nodes.find((l) => l.id === this.popupNodeId);
      n && this.updatePopupPosition(n);
    }
    const t = isFinite(this.zoom) && this.zoom > 0 ? this.zoom : 1, e = isFinite(this.offsetX) ? this.offsetX : 0, i = isFinite(this.offsetY) ? this.offsetY : 0, s = 1 / t;
    this.svgWrapper.style.width = `${s * 100}%`, this.svgWrapper.style.height = `${s * 100}%`, this.svgWrapper.style.transform = `scale(${t})`;
    const o = `translate(${-e}, ${-i})`;
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
    let e = 1 / 0, i = 1 / 0, s = -1 / 0, o = -1 / 0;
    for (const p of this.nodes)
      if (p.position) {
        const f = p.style || {}, w = f.width || this.DEFAULT_NODE_WIDTH, E = f.height || this.DEFAULT_NODE_HEIGHT;
        e = Math.min(e, p.position.x - w / 2), i = Math.min(i, p.position.y - E / 2), s = Math.max(s, p.position.x + w / 2), o = Math.max(o, p.position.y + E / 2);
      }
    if (e === 1 / 0)
      return;
    const n = 60;
    e -= n, i -= n, s += n, o += n;
    const l = (e + s) / 2, a = (i + o) / 2, c = s - e, d = o - i, r = this.container.getBoundingClientRect();
    if (r.width <= 0 || r.height <= 0 || !isFinite(c) || !isFinite(d) || c <= 0 || d <= 0)
      return;
    const h = r.width / c, g = r.height / d;
    if (!isFinite(h) || !isFinite(g))
      return;
    const u = Math.min(h, g, 1);
    this.zoom = u;
    const m = r.width / (2 * this.zoom), y = r.height / (2 * this.zoom);
    !isFinite(l) || !isFinite(a) || !isFinite(m) || !isFinite(y) || (this.offsetX = l - m, this.offsetY = a - y, this.svg.removeAttribute("viewBox"), this.updateTransform(), this.render());
  }
  /**
   * アニメーション付きでフィット&センター
   */
  animateFitAndCenter() {
    if (this.nodes.length === 0)
      return;
    const t = this.container.getBoundingClientRect();
    if (t.width <= 0 || t.height <= 0 || !isFinite(t.width) || !isFinite(t.height))
      return;
    let e = 1 / 0, i = 1 / 0, s = -1 / 0, o = -1 / 0;
    for (const p of this.nodes)
      if (p.position) {
        const f = p.style || {}, w = f.width || this.DEFAULT_NODE_WIDTH, E = f.height || this.DEFAULT_NODE_HEIGHT;
        e = Math.min(e, p.position.x - w / 2), i = Math.min(i, p.position.y - E / 2), s = Math.max(s, p.position.x + w / 2), o = Math.max(o, p.position.y + E / 2);
      }
    if (e === 1 / 0)
      return;
    const n = 60;
    e -= n, i -= n, s += n, o += n;
    const l = (e + s) / 2, a = (i + o) / 2, c = s - e, d = o - i, r = this.container.getBoundingClientRect();
    if (r.width <= 0 || r.height <= 0 || !isFinite(c) || !isFinite(d) || c <= 0 || d <= 0)
      return;
    const h = r.width / c, g = r.height / d;
    if (!isFinite(h) || !isFinite(g))
      return;
    const u = Math.min(h, g, 1), m = r.width / 2, y = r.height / 2;
    this.animateZoomToPoint(u, m, y, l, a);
  }
  /**
   * Setup event listeners (using Pointer Events for touch support)
   */
  setupEventListeners() {
    this.svg.addEventListener("click", (s) => {
      const o = s.target;
      o.closest("[data-node-id]") || o.getAttribute("data-edge-pair-key") || o.getAttribute("data-hit-edge-pair-key") || Date.now() - (this.lastPanEndTime || 0) < 100 || this.mode === "view" && this.hidePopup();
    }), this.svg.addEventListener("pointerdown", (s) => {
      const o = s.target, n = o.closest("[data-node-id]")?.getAttribute("data-node-id"), l = o.getAttribute("data-edge-pair-key") || o.getAttribute("data-hit-edge-pair-key"), a = o.getAttribute("data-handle-type"), c = o.getAttribute("data-bend-index");
      if (this.mode === "edit") {
        const d = o.getAttribute("data-resize-side");
        if (d) {
          const r = o.getAttribute("data-node-id");
          if (r) {
            const h = this.nodes.find((g) => g.id === r);
            if (h?.position) {
              const g = h.style || {}, u = g.width || this.DEFAULT_NODE_WIDTH, m = g.height || this.DEFAULT_NODE_HEIGHT, y = this.screenToSvg(s.clientX, s.clientY);
              this.resizingNode = {
                nodeId: r,
                side: d,
                startX: y.x,
                startY: y.y,
                startWidth: u,
                startHeight: m,
                startNodeX: h.position.x,
                startNodeY: h.position.y
              }, s.target.setPointerCapture(s.pointerId), s.preventDefault(), s.stopPropagation();
              return;
            }
          }
        }
        if (n) {
          const r = this.nodes.find((h) => h.id === n);
          if (r?.position) {
            const h = this.screenToSvg(s.clientX, s.clientY);
            this.draggingNode = {
              nodeId: n,
              offsetX: h.x - r.position.x,
              offsetY: h.y - r.position.y
            }, s.target.setPointerCapture(s.pointerId), s.preventDefault(), s.stopPropagation();
            return;
          }
        } else if (c !== null) {
          const r = o.getAttribute("data-edge-id");
          if (r) {
            this.draggingBend = { edgeId: r, bendIndex: parseInt(c, 10) }, s.preventDefault(), s.stopPropagation();
            return;
          }
        } else if (a) {
          const r = o.getAttribute("data-edge-id");
          if (r) {
            this.draggingAnchor = { edgeId: r, type: a }, s.preventDefault(), s.stopPropagation();
            return;
          }
        } else l || this.deselectEdge();
      } else if (n) {
        const d = this.nodes.find((r) => r.id === n);
        if (d && this.onNodeClick) {
          const r = this.screenToSvg(s.clientX, s.clientY);
          this.onNodeClick({
            node: d,
            position: { x: r.x, y: r.y },
            originalEvent: s
          });
        }
      } else l || (this.deselectEdge(), this.tappedEdgePairKey && (this.tappedEdgePairKey = null, this.render()));
    });
    let t = 0, e = null;
    this.svg.addEventListener("pointerdown", (s) => {
      const o = s.target, n = o.getAttribute("data-edge-pair-key") || o.getAttribute("data-hit-edge-pair-key");
      if (this.mode === "edit" && n) {
        const l = Date.now();
        if (l - t < 300 && e === o) {
          const c = this.groupEdgesByPair(this.edges).find((d) => d.key === n);
          if (c && c.edges.length > 0) {
            this.insertBendPoint(c.edges[0].id, s), s.preventDefault(), s.stopPropagation(), t = 0, e = null;
            return;
          }
        }
        t = l, e = o;
      }
    }), this.container.addEventListener("dblclick", (s) => {
      if (this.mode !== "edit")
        return;
      const o = s.target;
      if (!o || !this.container.contains(o))
        return;
      const n = o.getAttribute("data-hit-edge-pair-key") || o.getAttribute("data-edge-pair-key");
      if (n) {
        const a = this.groupEdgesByPair(this.edges).find((c) => c.key === n);
        if (a && a.edges.length > 0) {
          this.insertBendPoint(a.edges[0].id, s), s.preventDefault(), s.stopPropagation();
          return;
        }
      }
      let l = o;
      for (; l && l !== this.svg; ) {
        const a = l.getAttribute("data-hit-edge-pair-key") || l.getAttribute("data-edge-pair-key");
        if (a) {
          const c = this.groupEdgesByPair(this.edges).find((d) => d.key === a);
          if (c && c.edges.length > 0) {
            this.insertBendPoint(c.edges[0].id, s), s.preventDefault(), s.stopPropagation();
            return;
          }
        }
        l = l.parentElement;
      }
    }, !0);
    const i = /* @__PURE__ */ new Map();
    this.svg.addEventListener("pointerdown", (s) => {
      if (s.pointerType === "touch" && (i.set(s.pointerId, s), i.size === 2)) {
        const o = Array.from(i.values()), [n, l] = o;
        this.pinchDistance = Math.hypot(l.clientX - n.clientX, l.clientY - n.clientY), this.pinchCenter = {
          x: (n.clientX + l.clientX) / 2,
          y: (n.clientY + l.clientY) / 2
        }, this.initialZoom = this.zoom, s.preventDefault();
      }
    }), this.svg.addEventListener("pointermove", (s) => {
      if (s.pointerType === "touch" && i.set(s.pointerId, s), this.pinchDistance !== null && this.pinchCenter !== null && i.size === 2) {
        const c = Array.from(i.values()), [d, r] = c, g = Math.hypot(r.clientX - d.clientX, r.clientY - d.clientY) / this.pinchDistance, u = Math.pow(g, 1.5), m = Math.max(0.1, Math.min(5, this.initialZoom * u));
        this.zoomToPoint(m, this.pinchCenter.x, this.pinchCenter.y), this.updateTransform(), this.render(), s.preventDefault();
        return;
      }
      const o = s.target, n = o instanceof HTMLButtonElement || o.closest("button") !== null || o.closest(".relatos-always-show-edges-toggle") !== null || o.closest(".relatos-edit-toggle") !== null || o.closest(".relatos-control-buttons") !== null, l = s.pointerType === "touch" && i.size === 1, a = s.pointerType === "mouse" && s.buttons === 1;
      if (!n && !this.resizingNode && !this.draggingNode && !this.draggingAnchor && !this.draggingBend && (l || a)) {
        if (!this.panning)
          this.panning = {
            startX: s.clientX,
            startY: s.clientY,
            startOffsetX: this.offsetX,
            startOffsetY: this.offsetY
          };
        else {
          const c = s.clientX - this.panning.startX, d = s.clientY - this.panning.startY, r = c / this.zoom, h = d / this.zoom;
          this.offsetX = this.panning.startOffsetX + r, this.offsetY = this.panning.startOffsetY + h, this.updateTransform(), this.render();
        }
        s.preventDefault();
        return;
      }
      this.resizingNode ? this.updateNodeSize(s) : this.draggingNode ? this.updateNodePosition(s) : this.draggingAnchor ? this.updateAnchorPosition(s) : this.draggingBend && this.updateBendPosition(s);
    }), document.addEventListener("pointermove", (s) => {
      s.pointerType === "touch" && i.set(s.pointerId, s);
      const o = s.target;
      if (!(o instanceof HTMLButtonElement || o.closest("button") !== null || o.closest(".relatos-always-show-edges-toggle") !== null || o.closest(".relatos-edit-toggle") !== null || o.closest(".relatos-control-buttons") !== null) && this.panning && !this.resizingNode && !this.draggingNode && !this.draggingAnchor && !this.draggingBend) {
        const l = s.pointerType === "touch" && i.size === 1, a = s.pointerType === "mouse" && (s.buttons === 1 || s.button === 0);
        if (l || a) {
          const c = s.clientX - this.panning.startX, d = s.clientY - this.panning.startY, r = c / this.zoom, h = d / this.zoom;
          this.offsetX = this.panning.startOffsetX - r, this.offsetY = this.panning.startOffsetY - h, this.updateTransform(), this.render(), s.preventDefault();
          return;
        }
      }
      this.resizingNode ? this.updateNodeSize(s) : this.draggingNode ? this.updateNodePosition(s) : this.draggingAnchor ? this.updateAnchorPosition(s) : this.draggingBend && this.updateBendPosition(s);
    }), this.svg.addEventListener("pointerup", (s) => {
      s.pointerType === "touch" && (i.delete(s.pointerId), i.size < 2 && (this.pinchDistance = null, this.pinchCenter = null)), s.target instanceof SVGElement && s.target.releasePointerCapture(s.pointerId), this.resizingNode && this.handleResizeEnd(), this.panning && (this.lastPanEndTime = Date.now()), this.panning = null, this.resizingNode = null, this.draggingNode = null, this.draggingAnchor = null, this.draggingBend = null;
    }), document.addEventListener("pointerup", (s) => {
      s.pointerType === "touch" && (i.delete(s.pointerId), i.size < 2 && (this.pinchDistance = null, this.pinchCenter = null)), this.resizingNode && this.handleResizeEnd(), this.panning && (this.lastPanEndTime = Date.now()), this.panning = null, this.resizingNode = null, this.draggingNode = null, this.draggingAnchor = null, this.draggingBend = null;
    }), this.svg.addEventListener("pointercancel", (s) => {
      s.pointerType === "touch" && (i.delete(s.pointerId), i.size < 2 && (this.pinchDistance = null, this.pinchCenter = null)), s.target instanceof SVGElement && s.target.releasePointerCapture(s.pointerId), this.resizingNode && this.handleResizeEnd(), this.panning && (this.lastPanEndTime = Date.now()), this.panning = null, this.resizingNode = null, this.draggingNode = null, this.draggingAnchor = null, this.draggingBend = null;
    }), this.container.addEventListener("keydown", (s) => {
      this.mode !== "edit" || !this.selectedEdgeId || (s.key === "Delete" || s.key === "Backspace") && (this.deleteNearestBendPoint(), s.preventDefault());
    }), this.container.setAttribute("tabindex", "0"), this.container.addEventListener("wheel", (s) => {
      if (s.ctrlKey || s.metaKey) {
        s.preventDefault();
        const o = Math.pow(1.5, -s.deltaY / 60), n = Math.max(0.1, Math.min(5, this.zoom * o));
        this.zoomToPoint(n, s.clientX, s.clientY), this.updateTransform(), this.render();
      } else {
        s.preventDefault();
        const o = Math.pow(1.5, s.deltaY / 60), n = Math.max(0.1, Math.min(5, this.zoom * o));
        this.zoomToPoint(n, s.clientX, s.clientY), this.updateTransform(), this.render();
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
    const i = document.createElementNS("http://www.w3.org/2000/svg", "marker");
    i.setAttribute("id", "arrow-start"), i.setAttribute("viewBox", "0 0 10 10"), i.setAttribute("refX", "1"), i.setAttribute("refY", "5"), i.setAttribute("markerWidth", "6"), i.setAttribute("markerHeight", "6"), i.setAttribute("orient", "auto");
    const s = document.createElementNS("http://www.w3.org/2000/svg", "path");
    s.setAttribute("d", "M 10 0 L 0 5 L 10 10 z"), s.setAttribute("fill", "#333"), i.appendChild(s), this.svgDefs.appendChild(i);
  }
  /**
   * データを設定
   */
  setData(t, e) {
    this.nodes = t, this.edges = e, this.ensureNodePositions(), this.render(), this.container.style.display !== "none" && this.container.offsetParent !== null && setTimeout(() => {
      const i = this.container.getBoundingClientRect();
      i.width > 0 && i.height > 0 && this.fitAndCenter();
    }, 100);
  }
  /**
   * ノードを選択（ハイライト表示）
   * @param nodeId 選択するノードID（nullの場合は選択解除）
   * @param zoomToNode ノードへズームインするかどうか（デフォルト: true）
   */
  selectNode(t, e = !0) {
    if (t && e && this.zoomedNodeId === t) {
      this.zoomedNodeId = null, this.selectedNodeId = t, this.render(), this.animateFitAndCenter();
      return;
    }
    if (this.selectedNodeId = t, t ? this.zoomedNodeId = t : this.zoomedNodeId = null, this.render(), t && e) {
      this.zoomToNode(t);
      const i = this.nodes.find((s) => s.id === t);
      i && this.showPopup(i);
    } else t || (this.zoomedNodeId = null, this.hidePopup());
  }
  /**
   * 指定されたノードへズームイン（LeafletのflyToのようにアニメーション）
   * @param nodeId ズームするノードID
   */
  zoomToNode(t) {
    const e = this.nodes.find((f) => f.id === t);
    if (!e || !e.position)
      return;
    const i = this.container.getBoundingClientRect();
    if (i.width <= 0 || i.height <= 0)
      return;
    const s = e.style || {}, o = s.width || this.DEFAULT_NODE_WIDTH, n = s.height || this.DEFAULT_NODE_HEIGHT, l = e.position.x + o / 2, a = e.position.y + n / 2;
    o * this.zoom, n * this.zoom;
    const c = Math.min(i.width * 0.3, i.height * 0.3), d = c / o, r = c / n, h = Math.min(d, r), m = Math.max(0.5, Math.min(3, h)), y = i.width / 2, p = i.height / 2;
    console.log("[Graph Debug] Zoom to node:", {
      nodeId: t,
      nodePosition: {
        x: e.position.x,
        y: e.position.y,
        width: o,
        height: n
      },
      nodeCenter: {
        svgX: l,
        svgY: a
      },
      currentZoom: this.zoom,
      targetZoom: m,
      currentOffset: {
        x: this.offsetX,
        y: this.offsetY
      },
      containerSize: {
        width: i.width,
        height: i.height
      },
      containerCenter: {
        screenX: y,
        screenY: p
      }
    }), this.animateZoomToPoint(m, y, p, l, a);
  }
  /**
   * 指定されたポイントへアニメーションでズーム
   * @param targetZoom 目標ズームレベル
   * @param screenCenterX スクリーン中心X座標（コンテナ内の相対座標）
   * @param screenCenterY スクリーン中心Y座標（コンテナ内の相対座標）
   * @param targetSvgX 目標SVG座標X
   * @param targetSvgY 目標SVG座標Y
   */
  animateZoomToPoint(t, e, i, s, o) {
    const n = this.zoom, l = this.offsetX, a = this.offsetY, c = this.container.getBoundingClientRect(), d = c.width / (2 * t), r = c.height / (2 * t), h = s - d, g = o - r, u = 500, m = performance.now(), y = (p) => {
      const f = p - m, w = Math.min(f / u, 1), E = 1 - Math.pow(1 - w, 3), b = n + (t - n) * E, B = l + (h - l) * E, C = a + (g - a) * E;
      if (this.zoom = b, this.offsetX = B, this.offsetY = C, this.updateTransform(), this.render(), w >= 1) {
        const T = this.container.getBoundingClientRect(), A = T.width / 2, x = T.height / 2, S = A / this.zoom - this.offsetX, v = x / this.zoom - this.offsetY;
        console.log("[Graph Debug] Zoom completed:", {
          finalZoom: this.zoom,
          finalOffset: {
            x: this.offsetX,
            y: this.offsetY
          },
          screenCenterToSvg: {
            svgX: S,
            svgY: v
          },
          targetNode: {
            svgX: s,
            svgY: o
          },
          nodePositionInSvg: {
            x: s,
            y: o
          }
        });
      }
      w < 1 && requestAnimationFrame(y);
    };
    requestAnimationFrame(y);
  }
  /**
   * ノードの位置情報を確保（ない場合は自動配置）
   * coordinates（緯度経度）がある場合は緯度経度ベースで配置、
   * ない場合は残り1/4の領域に配置
   */
  ensureNodePositions() {
    const t = this.nodes.filter((y) => y.coordinates && y.coordinates.length === 2), e = this.nodes.filter((y) => !y.coordinates || y.coordinates.length !== 2);
    if (this.nodes.filter((y) => !y.position).length === 0 && t.length === 0 && e.length === 0)
      return;
    const s = this.container.getBoundingClientRect(), o = s.width || 1e3, n = s.height || 600, l = 2, a = o * l * 0.25, c = o * l * 0.75, d = n * l, r = a, h = n * l, g = 0, u = [];
    for (const y of this.nodes)
      if (y.position) {
        const p = y.style || {}, f = p.width || this.DEFAULT_NODE_WIDTH, w = p.height || this.DEFAULT_NODE_HEIGHT;
        if (u.push({
          x: y.position.x - f / 2,
          y: y.position.y - w / 2,
          width: f,
          height: w
        }), y.coordinates && y.coordinates.length === 2) {
          const [E, b] = y.coordinates;
        }
      }
    if (t.length > 0) {
      const y = t.map((v) => v.coordinates[0]), p = t.map((v) => v.coordinates[1]), f = Math.min(...y), w = Math.max(...y), E = Math.min(...p), b = Math.max(...p), B = w - f, C = b - E, T = Math.max(B, C) * 0.1 || 0.01, A = {
        minLat: f - T,
        maxLat: w + T,
        minLon: E - T,
        maxLon: b + T
      }, x = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map();
      for (const v of t) {
        const [L, N] = v.coordinates, k = (N - A.minLon) / (A.maxLon - A.minLon), I = 1 - (L - A.minLat) / (A.maxLat - A.minLat), H = {
          x: r + k * c,
          y: I * d
        }, P = v.style || {}, R = P.width || this.DEFAULT_NODE_WIDTH, X = P.height || this.DEFAULT_NODE_HEIGHT, O = H.x, F = H.y;
        x.set(v.id, { originalCenterX: O, originalCenterY: F }), S.set(v.id, {
          node: v,
          width: R,
          height: X,
          originalCenterX: O,
          originalCenterY: F
        });
      }
      this.resolveNodePositionsWithOrderConstraints(S, x);
    }
    const m = e.filter((y) => !y.position);
    if (m.length > 0) {
      const p = Math.ceil(Math.sqrt(m.length)), f = Math.ceil(m.length / p), w = a - 40, E = h - 40, b = w / p, B = E / f;
      m.forEach((C, T) => {
        const A = C.style || {}, x = A.width || this.DEFAULT_NODE_WIDTH, S = A.height || this.DEFAULT_NODE_HEIGHT, v = Math.floor(T / p), L = T % p, N = g + 20 + (L + 0.5) * b, k = 20 + (v + 0.5) * B;
        C.position = { x: N, y: k }, u.push({
          x: N - x / 2,
          y: k - S / 2,
          width: x,
          height: S
        });
      });
    }
  }
  /**
   * x方向とy方向を分離した制約ベースの衝突解決アルゴリズム
   * 元のx順序・y順序を制約として固定し、重ならないように調整
   * 
   * @param nodeInfoMap すべてのノード情報（元の中心座標含む）
   * @param nodeOriginalCenters すべてのノードの元の中心座標
   */
  resolveNodePositionsWithOrderConstraints(t, e) {
    const o = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
    for (const [c, d] of t) {
      const r = d.node;
      if (r.position) {
        const h = r.position.x, g = r.position.y;
        o.set(c, { centerX: h, centerY: g }), n.set(c, {
          x: r.position.x - d.width / 2,
          y: r.position.y - d.height / 2,
          width: d.width,
          height: d.height
        });
      } else {
        const h = e.get(c);
        o.set(c, {
          centerX: h.originalCenterX,
          centerY: h.originalCenterY
        }), n.set(c, {
          x: h.originalCenterX - d.width / 2,
          y: h.originalCenterY - d.height / 2,
          width: d.width,
          height: d.height
        });
      }
    }
    const l = Array.from(t.entries()).sort((c, d) => {
      const r = e.get(c[0]), h = e.get(d[0]);
      return r.originalCenterX - h.originalCenterX;
    }), a = Array.from(t.entries()).sort((c, d) => {
      const r = e.get(c[0]), h = e.get(d[0]);
      return r.originalCenterY - h.originalCenterY;
    });
    for (let c = 0; c < 50; c++) {
      let d = !1;
      for (let r = 0; r < l.length; r++) {
        const [h] = l[r], g = n.get(h), u = o.get(h);
        for (let m = 0; m < r; m++) {
          const [y] = l[m], p = n.get(y);
          if (g.x < p.x + p.width + 20 && g.x + g.width + 20 > p.x) {
            d = !0;
            const f = p.width / 2 + g.width / 2 + 20, E = o.get(y).centerX + f;
            u.centerX = E, g.x = E - g.width / 2;
          }
        }
      }
      for (let r = 0; r < a.length; r++) {
        const [h] = a[r], g = n.get(h), u = o.get(h);
        for (let m = 0; m < r; m++) {
          const [y] = a[m], p = n.get(y);
          if (g.y < p.y + p.height + 20 && g.y + g.height + 20 > p.y) {
            d = !0;
            const f = p.height / 2 + g.height / 2 + 20, E = o.get(y).centerY + f;
            u.centerY = E, g.y = E - g.height / 2;
          }
        }
      }
      if (!d)
        break;
    }
    for (const [c, d] of t)
      if (!d.node.position) {
        const r = n.get(c);
        d.node.position = {
          x: r.x + r.width / 2,
          y: r.y + r.height / 2
        };
      }
  }
  /**
   * ノードの位置が他のノードと重ならないように調整（旧実装、後方互換性のために残す）
   * 元の位置関係（東西南北）を保持しながら調整
   */
  adjustNodePosition(t, e, i, s, o = 20) {
    let l = t.x, a = t.y;
    const c = t.width, d = t.height, r = i?.originalX ?? t.x, h = i?.originalY ?? t.y, g = e.map((u, m) => {
      const y = u.width || this.DEFAULT_NODE_WIDTH, p = u.height || this.DEFAULT_NODE_HEIGHT, f = u.x + y / 2, w = u.y + p / 2, E = f - r, b = w - h;
      return {
        x: u.x,
        y: u.y,
        width: y,
        height: p,
        centerX: f,
        centerY: w,
        relativeDx: E,
        // 元の位置関係を推測（既存ノードの現在の位置と元のノードの元の位置の関係）
        relativeDy: b,
        originalCenterX: f,
        // 既存ノードの現在の位置（推測された元の位置）
        originalCenterY: w
      };
    });
    for (let u = 0; u < o; u++) {
      let m = !1, y = l, p = a, f = 1 / 0;
      for (const w of g)
        if (l < w.x + w.width + 20 && l + c + 20 > w.x && a < w.y + w.height + 20 && a + d + 20 > w.y) {
          m = !0;
          const E = l + c / 2, b = a + d / 2, B = w.centerX - E, C = w.centerY - b, T = Math.sqrt(B * B + C * C);
          if (T > 0) {
            const A = (c + w.width) / 2 + 20;
            let x = B, S = C;
            if (Math.abs(w.relativeDx) > 0.1 || Math.abs(w.relativeDy) > 0.1)
              if (Math.abs(w.relativeDx) > Math.abs(w.relativeDy))
                x = (w.relativeDx > 0 ? -1 : 1) * Math.abs(B) / T * A, S = C / T * A * 0.5;
              else {
                const O = w.relativeDy > 0 ? -1 : 1;
                x = B / T * A * 0.5, S = O * Math.abs(C) / T * A;
              }
            else
              x = B / T * A, S = C / T * A;
            const v = l + x, L = a + S, N = Math.sqrt(
              Math.pow(v - r, 2) + Math.pow(L - h, 2)
            ), k = v + c / 2, I = L + d / 2, H = k - r, P = I - h;
            let R = 0;
            (w.relativeDx > 0 && H < w.relativeDx || w.relativeDx < 0 && H > w.relativeDx) && (R += 1e3), (w.relativeDy > 0 && P < w.relativeDy || w.relativeDy < 0 && P > w.relativeDy) && (R += 1e3);
            const X = N + R;
            X < f && (f = X, y = v, p = L);
          } else {
            const A = (c + w.width) / 2 + 20;
            let x = 0, S = 0;
            if (w.relativeDx !== 0 || w.relativeDy !== 0) {
              const k = w.relativeDx > 0 ? -1 : 1, I = w.relativeDy > 0 ? -1 : 1;
              x = k * A, S = I * A;
            } else {
              const k = Math.random() * Math.PI * 2;
              x = Math.cos(k) * A, S = Math.sin(k) * A;
            }
            const v = l + x, L = a + S, N = Math.sqrt(
              Math.pow(v - r, 2) + Math.pow(L - h, 2)
            );
            N < f && (f = N, y = v, p = L);
          }
        }
      if (!m)
        break;
      l = y, a = p;
    }
    return { x: l, y: a };
  }
  /**
   * エッジをノードペアでグループ化
   * 無向ペアキー（minId||maxId）でグループ化し、EdgePairを生成
   */
  groupEdgesByPair(t) {
    const e = /* @__PURE__ */ new Map();
    for (const i of t) {
      const [s, o] = i.src < i.dst ? [i.src, i.dst] : [i.dst, i.src], n = `${s}||${o}`;
      let l = e.get(n);
      l || (l = {
        key: n,
        a: s,
        b: o,
        edges: []
      }, e.set(n, l)), l.edges.push(i), i.src === s && i.dst === o ? (i.srcAnchor && !l.srcAnchor && (l.srcAnchor = i.srcAnchor), i.dstAnchor && !l.dstAnchor && (l.dstAnchor = i.dstAnchor), i.bends && !l.bends && (l.bends = i.bends)) : (i.srcAnchor && !l.dstAnchor && (l.dstAnchor = i.srcAnchor), i.dstAnchor && !l.srcAnchor && (l.srcAnchor = i.dstAnchor), i.bends && !l.bends && (l.bends = i.bends));
    }
    return Array.from(e.values());
  }
  /**
   * EdgePairから方向性を判定
   * @returns { hasAtoB: boolean, hasBtoA: boolean }
   */
  getEdgePairDirection(t) {
    let e = !1, i = !1;
    for (const s of t.edges)
      s.src === t.a && s.dst === t.b ? e = !0 : s.src === t.b && s.dst === t.a && (i = !0);
    return { hasAtoB: e, hasBtoA: i };
  }
  /**
   * EdgePairのパスを計算（A->B方向を基準）
   */
  calculateEdgePairPath(t) {
    const e = this.nodes.find((y) => y.id === t.a), i = this.nodes.find((y) => y.id === t.b);
    if (!e?.position || !i?.position)
      return "";
    const s = t.srcAnchor || this.estimateAnchor(e, i), o = t.dstAnchor || this.estimateAnchor(i, e), n = e.style || {}, l = i.style || {}, a = n.width || this.DEFAULT_NODE_WIDTH, c = n.height || this.DEFAULT_NODE_HEIGHT, d = l.width || this.DEFAULT_NODE_WIDTH, r = l.height || this.DEFAULT_NODE_HEIGHT, h = this.calculateAnchorPosition(e, s, a, c), g = this.calculateAnchorPosition(i, o, d, r), u = [h];
    t.bends && u.push(...t.bends), u.push(g);
    const m = [`M ${u[0].x} ${u[0].y}`];
    for (let y = 1; y < u.length; y++)
      m.push(`L ${u[y].x} ${u[y].y}`);
    return m.join(" ");
  }
  /**
   * Calculate position on node edge
   * @param node Node
   * @param anchor Anchor information
   * @param width Node width (optional, uses default if not provided)
   * @param height Node height (optional, uses default if not provided)
   * @returns Coordinates {x, y}
   */
  calculateAnchorPosition(t, e, i, s) {
    if (!t.position)
      return { x: 0, y: 0 };
    const o = t.position.x, n = t.position.y, l = i || t.style?.width || this.DEFAULT_NODE_WIDTH, a = s || t.style?.height || this.DEFAULT_NODE_HEIGHT;
    let c = 0, d = 0;
    switch (e.side) {
      case "top":
        c = o - l / 2 + l * e.t, d = n - a / 2;
        break;
      case "right":
        c = o + l / 2, d = n - a / 2 + a * e.t;
        break;
      case "bottom":
        c = o - l / 2 + l * e.t, d = n + a / 2;
        break;
      case "left":
        c = o - l / 2, d = n - a / 2 + a * e.t;
        break;
    }
    return { x: c, y: d };
  }
  /**
   * アンカーを自動推定
   * ノード中心から相手ノードへの方向に最も近い辺と位置を計算
   */
  estimateAnchor(t, e) {
    if (!t.position || !e.position)
      return { side: "right", t: 0.5 };
    const i = t.style || {}, s = i.width || this.DEFAULT_NODE_WIDTH, o = i.height || this.DEFAULT_NODE_HEIGHT, n = e.position.x - t.position.x, l = e.position.y - t.position.y, a = Math.atan2(l, n), c = a < 0 ? a + 2 * Math.PI : a;
    let d, r;
    return c >= 7 * Math.PI / 4 || c < Math.PI / 4 ? (d = "right", r = 0.5 + l / o * 0.5) : c >= Math.PI / 4 && c < 3 * Math.PI / 4 ? (d = "bottom", r = 0.5 + n / s * 0.5) : c >= 3 * Math.PI / 4 && c < 5 * Math.PI / 4 ? (d = "left", r = 0.5 - l / o * 0.5) : (d = "top", r = 0.5 - n / s * 0.5), r = Math.max(0, Math.min(1, r)), { side: d, t: r };
  }
  /**
   * エッジのポイント配列を取得 [start, ...bends, end]
   */
  getEdgePoints(t) {
    const e = this.nodes.find((m) => m.id === t.src), i = this.nodes.find((m) => m.id === t.dst);
    if (!e?.position || !i?.position)
      return [];
    const s = t.srcAnchor || this.estimateAnchor(e, i), o = t.dstAnchor || this.estimateAnchor(i, e), n = e.style || {}, l = i.style || {}, a = n.width || this.DEFAULT_NODE_WIDTH, c = n.height || this.DEFAULT_NODE_HEIGHT, d = l.width || this.DEFAULT_NODE_WIDTH, r = l.height || this.DEFAULT_NODE_HEIGHT, h = this.calculateAnchorPosition(e, s, a, c), g = this.calculateAnchorPosition(i, o, d, r), u = [h];
    return t.bends && u.push(...t.bends), u.push(g), u;
  }
  /**
   * エッジのパスを計算（アンカー考慮、折れ点対応）
   */
  calculateEdgePath(t) {
    const e = this.getEdgePoints(t);
    if (e.length < 2)
      return "";
    const i = [`M ${e[0].x} ${e[0].y}`];
    for (let s = 1; s < e.length; s++)
      i.push(`L ${e[s].x} ${e[s].y}`);
    return i.join(" ");
  }
  /**
   * EdgePairのマーカー属性を決定
   * 方向性に応じてmarker-start/marker-endを設定
   */
  getEdgePairMarkerAttributes(t) {
    const { hasAtoB: e, hasBtoA: i } = this.getEdgePairDirection(t), s = {};
    return e && (s.markerEnd = "url(#arrow-end)"), i && (s.markerStart = "url(#arrow-start)"), s;
  }
  /**
   * エッジの選択を解除
   */
  deselectEdge() {
    this.selectedEdgeId = null, this.anchorHandlesGroup.style.display = "none", this.bendHandlesGroup.style.display = "none", this.anchorHandles.clear(), this.bendHandles.clear();
  }
  /**
   * エッジを選択
   */
  selectEdge(t, e) {
    this.selectedEdgeId === t && e ? this.rotateAnchorSide(t) : (this.selectedEdgeId = t, this.updateAnchorHandles(), this.updateBendHandles());
  }
  /**
   * アンカーのsideを時計回りに切り替え（Shift+クリック時）
   */
  rotateAnchorSide(t) {
    const e = this.edges.find((c) => c.id === t);
    if (!e)
      return;
    const [i, s] = e.src < e.dst ? [e.src, e.dst] : [e.dst, e.src], o = `${i}||${s}`, n = this.groupEdgesByPair(this.edges).find((c) => c.key === o);
    if (!n)
      return;
    const l = ["top", "right", "bottom", "left"], a = (c) => {
      const d = l.indexOf(c);
      return l[(d + 1) % 4];
    };
    n.srcAnchor && (n.srcAnchor.side = a(n.srcAnchor.side)), n.dstAnchor && (n.dstAnchor.side = a(n.dstAnchor.side));
    for (const c of n.edges)
      c.src === n.a && c.dst === n.b ? (c.srcAnchor = n.srcAnchor, c.dstAnchor = n.dstAnchor) : (c.srcAnchor = n.dstAnchor, c.dstAnchor = n.srcAnchor);
    this.render(), this.updateAnchorHandles(), this.updateBendHandles();
  }
  /**
   * アンカーハンドルを更新
   */
  updateAnchorHandles() {
    if (this.anchorHandles.clear(), this.anchorHandlesGroup.innerHTML = "", !this.selectedEdgeId || this.mode !== "edit") {
      this.anchorHandlesGroup.style.display = "none";
      return;
    }
    const t = this.edges.find((f) => f.id === this.selectedEdgeId);
    if (!t)
      return;
    const [e, i] = t.src < t.dst ? [t.src, t.dst] : [t.dst, t.src], s = `${e}||${i}`, o = this.groupEdgesByPair(this.edges).find((f) => f.key === s);
    if (!o)
      return;
    const n = this.nodes.find((f) => f.id === o.a), l = this.nodes.find((f) => f.id === o.b);
    if (!n || !l)
      return;
    const a = o.srcAnchor || this.estimateAnchor(n, l), c = o.dstAnchor || this.estimateAnchor(l, n), d = n.style || {}, r = l.style || {}, h = d.width || this.DEFAULT_NODE_WIDTH, g = d.height || this.DEFAULT_NODE_HEIGHT, u = r.width || this.DEFAULT_NODE_WIDTH, m = r.height || this.DEFAULT_NODE_HEIGHT, y = this.calculateAnchorPosition(n, a, h, g), p = this.calculateAnchorPosition(l, c, u, m);
    this.createAnchorHandle(t.id, "src", y.x, y.y), this.createAnchorHandle(t.id, "dst", p.x, p.y), this.anchorHandlesGroup.style.display = "block", this.anchorHandlesGroup.style.pointerEvents = "auto";
  }
  /**
   * 折れ点ハンドルを更新
   */
  updateBendHandles() {
    if (this.bendHandles.clear(), this.bendHandlesGroup.innerHTML = "", !this.selectedEdgeId || this.mode !== "edit") {
      this.bendHandlesGroup.style.display = "none";
      return;
    }
    const t = this.edges.find((n) => n.id === this.selectedEdgeId);
    if (!t)
      return;
    const [e, i] = t.src < t.dst ? [t.src, t.dst] : [t.dst, t.src], s = `${e}||${i}`, o = this.groupEdgesByPair(this.edges).find((n) => n.key === s);
    if (!o || !o.bends || o.bends.length === 0) {
      this.bendHandlesGroup.style.display = "none";
      return;
    }
    o.bends.forEach((n, l) => {
      this.createBendHandle(t.id, l, n.x, n.y);
    }), this.bendHandlesGroup.style.display = "block", this.bendHandlesGroup.style.pointerEvents = "auto";
  }
  /**
   * アンカーハンドルを作成
   */
  createAnchorHandle(t, e, i, s) {
    const o = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    o.setAttribute("cx", String(i)), o.setAttribute("cy", String(s)), o.setAttribute("r", String(this.HANDLE_RADIUS)), o.setAttribute("fill", "#2196f3"), o.setAttribute("stroke", "#fff"), o.setAttribute("stroke-width", "2"), o.setAttribute("data-edge-id", t), o.setAttribute("data-handle-type", e), o.style.cursor = "move", this.anchorHandles.set(e, o), this.anchorHandlesGroup.appendChild(o);
  }
  /**
   * 折れ点ハンドルを作成
   */
  createBendHandle(t, e, i, s) {
    const o = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    o.setAttribute("cx", String(i)), o.setAttribute("cy", String(s)), o.setAttribute("r", String(this.BEND_HANDLE_RADIUS)), o.setAttribute("fill", "#ff9800"), o.setAttribute("stroke", "#fff"), o.setAttribute("stroke-width", "2"), o.setAttribute("data-edge-id", t), o.setAttribute("data-bend-index", String(e)), o.style.cursor = "move", this.bendHandles.set(e, o), this.bendHandlesGroup.appendChild(o);
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
    const i = this.screenToSvg(t.clientX, t.clientY), s = i.x, o = i.y;
    e.position || (e.position = { x: 0, y: 0 }), e.position.x = s - this.draggingNode.offsetX, e.position.y = o - this.draggingNode.offsetY, this.render(), this.updateAnchorHandles(), this.updateBendHandles(), this.debouncedSave();
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
    const i = this.screenToSvg(t.clientX, t.clientY), s = i.x, o = i.y;
    e.style || (e.style = {});
    const n = s - this.resizingNode.startX, l = o - this.resizingNode.startY;
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
        const c = Math.max(40, this.resizingNode.startHeight + l);
        e.style.height = c, e.position.y = this.resizingNode.startNodeY + l / 2;
        break;
      }
      case "top": {
        const c = Math.max(40, this.resizingNode.startHeight - l);
        e.style.height = c, e.position.y = this.resizingNode.startNodeY + l / 2;
        break;
      }
    }
    const a = this.nodeElements.get(e.id);
    if (a) {
      const c = e.style || {}, d = c.width || this.DEFAULT_NODE_WIDTH, r = c.height || this.DEFAULT_NODE_HEIGHT, h = e.position.x - d / 2, g = e.position.y - r / 2;
      a.setAttribute("x", String(h)), a.setAttribute("y", String(g)), a.setAttribute("width", String(d)), a.setAttribute("height", String(r));
      const u = a.parentElement;
      if (u) {
        const m = u.querySelector("foreignObject");
        if (m) {
          const y = e.style || {}, p = y.width || this.DEFAULT_NODE_WIDTH, f = y.height || this.DEFAULT_NODE_HEIGHT, w = e.position.x - p / 2, E = e.position.y - f / 2;
          m.setAttribute("x", String(w)), m.setAttribute("y", String(E));
        }
        e.position && u.querySelectorAll("[data-resize-side]").forEach((p) => {
          const f = p.getAttribute("data-resize-side");
          f === "top" ? (p.setAttribute("cx", String(e.position.x)), p.setAttribute("cy", String(e.position.y - r / 2))) : f === "right" ? (p.setAttribute("cx", String(e.position.x + d / 2)), p.setAttribute("cy", String(e.position.y))) : f === "bottom" ? (p.setAttribute("cx", String(e.position.x)), p.setAttribute("cy", String(e.position.y + r / 2))) : f === "left" && (p.setAttribute("cx", String(e.position.x - d / 2)), p.setAttribute("cy", String(e.position.y)));
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
    const e = this.edges.find((b) => b.id === this.draggingAnchor.edgeId);
    if (!e)
      return;
    const [i, s] = e.src < e.dst ? [e.src, e.dst] : [e.dst, e.src], o = `${i}||${s}`, n = this.groupEdgesByPair(this.edges).find((b) => b.key === o);
    if (!n)
      return;
    const l = this.draggingAnchor.type === "src" ? n.a : n.b, a = this.nodes.find((b) => b.id === l);
    if (!a?.position)
      return;
    const c = this.screenToSvg(t.clientX, t.clientY), d = c.x, r = c.y, h = a.position.x, g = a.position.y, u = a.style || {}, m = u.width || this.DEFAULT_NODE_WIDTH, y = u.height || this.DEFAULT_NODE_HEIGHT, p = {
      top: Math.abs(r - (g - y / 2)),
      right: Math.abs(d - (h + m / 2)),
      bottom: Math.abs(r - (g + y / 2)),
      left: Math.abs(d - (h - m / 2))
    };
    let f = "right", w = p.right;
    for (const [b, B] of Object.entries(p))
      B < w && (w = B, f = b);
    let E = 0.5;
    switch (f) {
      case "top":
      case "bottom":
        E = (d - (h - m / 2)) / m;
        break;
      case "left":
      case "right":
        E = (r - (g - y / 2)) / y;
        break;
    }
    E = Math.max(0, Math.min(1, E)), this.draggingAnchor.type === "src" ? n.srcAnchor = { side: f, t: E } : n.dstAnchor = { side: f, t: E };
    for (const b of n.edges)
      b.src === n.a && b.dst === n.b ? (b.srcAnchor = n.srcAnchor, b.dstAnchor = n.dstAnchor) : (b.srcAnchor = n.dstAnchor, b.dstAnchor = n.srcAnchor);
    this.render(), this.updateAnchorHandles(), this.updateBendHandles(), this.debouncedSave();
  }
  /**
   * Update bend point position (during drag)
   */
  updateBendPosition(t) {
    if (!this.draggingBend)
      return;
    const e = this.edges.find((r) => r.id === this.draggingBend.edgeId);
    if (!e)
      return;
    const [i, s] = e.src < e.dst ? [e.src, e.dst] : [e.dst, e.src], o = `${i}||${s}`, n = this.groupEdgesByPair(this.edges).find((r) => r.key === o);
    if (!n || !n.bends)
      return;
    const l = this.draggingBend.bendIndex;
    if (l < 0 || l >= n.bends.length)
      return;
    const a = this.screenToSvg(t.clientX, t.clientY), c = a.x, d = a.y;
    n.bends[l] = { x: c, y: d };
    for (const r of n.edges)
      r.bends = [...n.bends];
    this.render(), this.updateBendHandles(), this.debouncedSave();
  }
  /**
   * Insert bend point (on double click/tap)
   */
  insertBendPoint(t, e) {
    const i = this.edges.find((L) => L.id === t);
    if (!i)
      return;
    const [s, o] = i.src < i.dst ? [i.src, i.dst] : [i.dst, i.src], n = `${s}||${o}`, l = this.groupEdgesByPair(this.edges).find((L) => L.key === n);
    if (!l)
      return;
    const a = this.svg.getBoundingClientRect(), c = e.clientX - a.left, d = e.clientY - a.top, r = [], h = this.nodes.find((L) => L.id === l.a), g = this.nodes.find((L) => L.id === l.b);
    if (!h?.position || !g?.position)
      return;
    const u = l.srcAnchor || this.estimateAnchor(h, g), m = l.dstAnchor || this.estimateAnchor(g, h), y = h.style || {}, p = g.style || {}, f = y.width || this.DEFAULT_NODE_WIDTH, w = y.height || this.DEFAULT_NODE_HEIGHT, E = p.width || this.DEFAULT_NODE_WIDTH, b = p.height || this.DEFAULT_NODE_HEIGHT, B = this.calculateAnchorPosition(h, u, f, w), C = this.calculateAnchorPosition(g, m, E, b);
    r.push(B), l.bends && r.push(...l.bends), r.push(C);
    let T = 0, A = 1 / 0;
    for (let L = 0; L < r.length - 1; L++) {
      const N = r[L], k = r[L + 1], I = this.pointToLineSegmentDistance(c, d, N.x, N.y, k.x, k.y);
      I < A && (A = I, T = L);
    }
    const x = r[T], S = r[T + 1], v = {
      x: (x.x + S.x) / 2,
      y: (x.y + S.y) / 2
    };
    l.bends || (l.bends = []), l.bends.splice(T, 0, v);
    for (const L of l.edges)
      L.bends = [...l.bends];
    this.render(), this.updateBendHandles(), this.debouncedSave();
  }
  /**
   * 点から線分への距離を計算
   */
  pointToLineSegmentDistance(t, e, i, s, o, n) {
    const l = o - i, a = n - s, c = l * l + a * a;
    if (c === 0)
      return Math.sqrt((t - i) ** 2 + (e - s) ** 2);
    const d = Math.max(0, Math.min(1, ((t - i) * l + (e - s) * a) / c)), r = i + d * l, h = s + d * a;
    return Math.sqrt((t - r) ** 2 + (e - h) ** 2);
  }
  /**
   * 最も近い折れ点を削除（Delete/Backspace時）
   * Also implements View interface deleteNearestBendPoint method
   */
  deleteNearestBendPoint() {
    if (!this.selectedEdgeId)
      return;
    const t = this.edges.find((n) => n.id === this.selectedEdgeId);
    if (!t)
      return;
    const [e, i] = t.src < t.dst ? [t.src, t.dst] : [t.dst, t.src], s = `${e}||${i}`, o = this.groupEdgesByPair(this.edges).find((n) => n.key === s);
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
      const i = e.edges.some((b) => b.id === this.selectedEdgeId), s = this.mode === "view" && e.key === this.hoveredEdgePairKey, o = this.mode === "view" && e.key === this.tappedEdgePairKey, n = this.alwaysShowEdges || i || s || o, a = e.edges[0].style || {}, c = a.color || this.EDGE_DEFAULT_COLOR, d = a.weight || 1, r = Math.max(this.EDGE_MIN_WEIGHT, Math.min(this.EDGE_MAX_WEIGHT, d)), h = this.EDGE_DEFAULT_WIDTH + (r - 1) * 0.5, g = n ? Math.max(h, this.EDGE_HOVER_WIDTH) : h, u = i ? "#2196f3" : c, m = n ? 1 : 0.3, y = this.calculateEdgePairPath(e);
      if (!y)
        continue;
      const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
      p.setAttribute("d", y), p.setAttribute("stroke", "transparent"), p.setAttribute("stroke-width", String(this.HIT_PATH_WIDTH)), p.setAttribute("fill", "none"), p.setAttribute("data-hit-edge-pair-key", e.key), p.style.cursor = "pointer", p.style.pointerEvents = "stroke", this.edgesGroup.appendChild(p);
      const f = document.createElementNS("http://www.w3.org/2000/svg", "path");
      f.setAttribute("d", y), f.setAttribute("stroke", u), f.setAttribute("stroke-width", String(g)), f.setAttribute("stroke-opacity", String(m)), f.setAttribute("fill", "none"), f.setAttribute("data-edge-pair-key", e.key), f.style.pointerEvents = "none", f.style.transition = "stroke-opacity 0.2s, stroke-width 0.2s";
      const w = this.getEdgePairMarkerAttributes(e);
      if (w.markerStart && f.setAttribute("marker-start", w.markerStart), w.markerEnd && f.setAttribute("marker-end", w.markerEnd), this.edgeElements.set(e.key, f), this.edgesGroup.appendChild(f), this.mode === "view")
        this.setupEdgeInteraction(p, e, a);
      else if (this.mode === "edit") {
        this.setupEdgeInteractionForEdit(p, e);
        const b = e.key;
        p.addEventListener("click", (B) => {
          const C = this.edgeClickTimers.get(p);
          if (C != null) {
            clearTimeout(C), this.edgeClickTimers.set(p, null);
            return;
          }
          const T = window.setTimeout(() => {
            if (this.edgeClickTimers.set(p, null), this.mode === "edit") {
              const A = this.groupEdgesByPair(this.edges).find((x) => x.key === b);
              A && A.edges.length > 0 && (this.selectEdge(A.edges[0].id, B.shiftKey), this.render());
            }
          }, 300);
          this.edgeClickTimers.set(p, T);
        });
      }
      const E = e.key;
      p.addEventListener("dblclick", (b) => {
        if (this.mode !== "edit")
          return;
        const B = this.edgeClickTimers.get(p);
        B != null && (clearTimeout(B), this.edgeClickTimers.set(p, null));
        const C = this.groupEdgesByPair(this.edges).find((T) => T.key === E);
        C && C.edges.length > 0 && (this.insertBendPoint(C.edges[0].id, b), b.preventDefault(), b.stopPropagation());
      }), n && this.renderEdgeLabels(e, a);
    }
    for (const e of this.nodes) {
      if (!e.position)
        continue;
      const i = e.style || {}, s = i.width || this.DEFAULT_NODE_WIDTH, o = i.height || this.DEFAULT_NODE_HEIGHT, n = i.color || "#fff", l = i.borderColor || "#333", a = document.createElementNS("http://www.w3.org/2000/svg", "g");
      a.setAttribute("data-node-id", e.id);
      const c = document.createElementNS("http://www.w3.org/2000/svg", "rect"), d = e.position.x - s / 2, r = e.position.y - o / 2;
      c.setAttribute("x", String(d)), c.setAttribute("y", String(r)), c.setAttribute("width", String(s)), c.setAttribute("height", String(o));
      const h = n.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
      if (h) {
        const y = parseInt(h[1], 16), p = parseInt(h[2], 16), f = parseInt(h[3], 16);
        c.setAttribute("fill", `rgba(${y}, ${p}, ${f}, 0.5)`);
      } else
        c.setAttribute("fill", n);
      const g = this.selectedNodeId === e.id;
      c.setAttribute("stroke", g ? "#2196f3" : l), c.setAttribute("stroke-width", g ? "4" : "2"), c.setAttribute("rx", "4"), c.style.cursor = this.mode === "view" ? "pointer" : "move";
      const u = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
      u.setAttribute("x", String(d)), u.setAttribute("y", String(r)), u.setAttribute("width", String(s)), u.setAttribute("height", String(o));
      const m = document.createElement("div");
      m.style.width = "100%", m.style.height = "100%", m.style.display = "flex", m.style.alignItems = "flex-start", m.style.justifyContent = "center", m.style.textAlign = "center", m.style.fontSize = "14px", m.style.color = "#333", m.style.padding = "4px", m.style.wordWrap = "break-word", m.style.overflowWrap = "break-word", m.style.whiteSpace = "normal", m.style.overflow = "hidden", m.style.textOverflow = "ellipsis", m.textContent = e.label, u.appendChild(m), a.appendChild(c), a.appendChild(u), this.mode === "edit" && this.addResizeHandles(a, e, s, o), this.nodesGroup.appendChild(a), this.nodeElements.set(e.id, c), this.mode === "view" && this.onNodeClick && a.addEventListener("click", (y) => {
        y.stopPropagation(), y.preventDefault();
        const p = this.svg.getBoundingClientRect(), f = y.clientX - p.left, w = y.clientY - p.top;
        this.onNodeClick({
          node: e,
          position: { x: f, y: w },
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
    for (const i of e) {
      const s = this.edgeElements.get(i.key);
      if (!s) continue;
      const o = i.edges.some((f) => f.id === this.selectedEdgeId), n = this.mode === "view" && i.key === this.hoveredEdgePairKey, l = this.mode === "view" && i.key === this.tappedEdgePairKey, a = this.alwaysShowEdges || o || n || l, d = i.edges[0].style || {}, r = d.color || this.EDGE_DEFAULT_COLOR, h = d.weight || 1, g = Math.max(this.EDGE_MIN_WEIGHT, Math.min(this.EDGE_MAX_WEIGHT, h)), u = this.EDGE_DEFAULT_WIDTH + (g - 1) * 0.5, m = a ? Math.max(u, this.EDGE_HOVER_WIDTH) : u, y = o ? "#2196f3" : r, p = a ? 1 : 0.3;
      s.setAttribute("stroke", y), s.setAttribute("stroke-width", String(m)), s.setAttribute("stroke-opacity", String(p)), a ? (this.edgeLabelsGroup.querySelectorAll(`[data-edge-pair-key="${i.key}"]`).forEach((w) => w.remove()), this.renderEdgeLabels(i, d)) : this.edgeLabelsGroup.querySelectorAll(`[data-edge-pair-key="${i.key}"]`).forEach((w) => w.remove());
    }
  }
  /**
   * Setup edge interaction (hover/tap for label display in view mode)
   */
  setupEdgeInteraction(t, e, i) {
    t.addEventListener("pointerenter", () => {
      this.tappedEdgePairKey !== e.key && (this.hoveredEdgePairKey = e.key, this.updateEdgeHighlight(e.key));
    }), t.addEventListener("pointerleave", () => {
      this.tappedEdgePairKey !== e.key && (this.hoveredEdgePairKey = null, this.updateEdgeHighlight(null));
    }), t.addEventListener("click", (s) => {
      if (this.mode === "view" && e.edges.length > 0 && (this.tappedEdgePairKey = e.key, this.updateEdgeHighlight(e.key), this.onEdgeClick)) {
        const o = this.screenToSvg(s.clientX, s.clientY), n = e.edges[0];
        this.onEdgeClick({
          edge: n,
          position: { x: o.x, y: o.y },
          originalEvent: s
        });
      }
    });
  }
  /**
   * Setup edge interaction for edit mode (hover/tap to show handles)
   */
  setupEdgeInteractionForEdit(t, e) {
    t.addEventListener("pointerenter", () => {
      e.edges.length > 0 && (this.selectedEdgeId = e.edges[0].id, this.updateAnchorHandles(), this.updateBendHandles(), this.updateControlButtons());
    }), t.addEventListener("pointerleave", () => {
    }), t.addEventListener("pointerdown", (i) => {
      e.edges.length > 0 && (this.selectedEdgeId = e.edges[0].id, this.updateAnchorHandles(), this.updateBendHandles(), this.updateControlButtons());
    });
  }
  /**
   * Add resize handles to node in edit mode
   */
  addResizeHandles(t, e, i, s) {
    const o = [
      { side: "top", x: e.position.x, y: e.position.y - s / 2 },
      { side: "right", x: e.position.x + i / 2, y: e.position.y },
      { side: "bottom", x: e.position.x, y: e.position.y + s / 2 },
      { side: "left", x: e.position.x - i / 2, y: e.position.y }
    ];
    for (const n of o) {
      const l = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      l.setAttribute("cx", String(n.x)), l.setAttribute("cy", String(n.y)), l.setAttribute("r", "6"), l.setAttribute("fill", "#4CAF50"), l.setAttribute("stroke", "#fff"), l.setAttribute("stroke-width", "2"), l.setAttribute("data-resize-side", n.side), l.setAttribute("data-node-id", e.id), l.style.cursor = this.getResizeCursor(n.side), l.style.pointerEvents = "auto", t.appendChild(l);
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
   * Render edge labels based on relationship directionality
   */
  renderEdgeLabels(t, e) {
    const i = this.nodes.find((b) => b.id === t.a), s = this.nodes.find((b) => b.id === t.b);
    if (!i?.position || !s?.position)
      return;
    const o = i.style || {}, n = s.style || {}, l = o.width || this.DEFAULT_NODE_WIDTH, a = o.height || this.DEFAULT_NODE_HEIGHT, c = n.width || this.DEFAULT_NODE_WIDTH, d = n.height || this.DEFAULT_NODE_HEIGHT, r = t.srcAnchor || this.estimateAnchor(i, s), h = t.dstAnchor || this.estimateAnchor(s, i), g = this.calculateAnchorPosition(i, r, l, a), u = this.calculateAnchorPosition(s, h, c, d), m = t.edges.find((b) => b.src === t.a && b.dst === t.b), y = t.edges.find((b) => b.src === t.b && b.dst === t.a), p = m?.style?.label || m?.relType || "", f = y?.style?.label || y?.relType || "", w = p !== f && p && f, E = p === f && p;
    if (w) {
      const B = g.x + (u.x - g.x) * 0.75, C = g.y + (u.y - g.y) * (1 - 0.25), T = g.x + (u.x - g.x) * 0.25, A = g.y + (u.y - g.y) * 0.25;
      if (p) {
        const x = document.createElementNS("http://www.w3.org/2000/svg", "text");
        x.setAttribute("x", String(B)), x.setAttribute("y", String(C - 8)), x.setAttribute("text-anchor", "middle"), x.setAttribute("dominant-baseline", "middle"), x.setAttribute("font-size", "12"), x.setAttribute("fill", "#333"), x.setAttribute("font-weight", "bold"), x.setAttribute("pointer-events", "none"), x.setAttribute("data-edge-pair-key", t.key);
        const S = document.createElementNS("http://www.w3.org/2000/svg", "rect"), v = p.length * 7;
        S.setAttribute("x", String(B - v / 2 - 4)), S.setAttribute("y", String(C - 16)), S.setAttribute("width", String(v + 8)), S.setAttribute("height", "16"), S.setAttribute("fill", "rgba(255, 255, 255, 0.9)"), S.setAttribute("rx", "2"), S.setAttribute("pointer-events", "none"), S.setAttribute("data-edge-pair-key", t.key), this.edgeLabelsGroup.appendChild(S), x.textContent = p, this.edgeLabelsGroup.appendChild(x);
      }
      if (f) {
        const x = document.createElementNS("http://www.w3.org/2000/svg", "text");
        x.setAttribute("x", String(T)), x.setAttribute("y", String(A - 8)), x.setAttribute("text-anchor", "middle"), x.setAttribute("dominant-baseline", "middle"), x.setAttribute("font-size", "12"), x.setAttribute("fill", "#333"), x.setAttribute("font-weight", "bold"), x.setAttribute("pointer-events", "none"), x.setAttribute("data-edge-pair-key", t.key);
        const S = document.createElementNS("http://www.w3.org/2000/svg", "rect"), v = f.length * 7;
        S.setAttribute("x", String(T - v / 2 - 4)), S.setAttribute("y", String(A - 16)), S.setAttribute("width", String(v + 8)), S.setAttribute("height", "16"), S.setAttribute("fill", "rgba(255, 255, 255, 0.9)"), S.setAttribute("rx", "2"), S.setAttribute("pointer-events", "none"), S.setAttribute("data-edge-pair-key", t.key), this.edgeLabelsGroup.appendChild(S), x.textContent = f, this.edgeLabelsGroup.appendChild(x);
      }
    } else if (E) {
      const b = (g.x + u.x) / 2, B = (g.y + u.y) / 2, C = document.createElementNS("http://www.w3.org/2000/svg", "text");
      C.setAttribute("x", String(b)), C.setAttribute("y", String(B)), C.setAttribute("text-anchor", "middle"), C.setAttribute("dominant-baseline", "middle"), C.setAttribute("data-edge-pair-key", t.key), C.setAttribute("font-size", "12"), C.setAttribute("fill", "#333"), C.setAttribute("font-weight", "bold"), C.setAttribute("pointer-events", "none");
      const T = document.createElementNS("http://www.w3.org/2000/svg", "rect"), A = p.length * 7;
      T.setAttribute("x", String(b - A / 2 - 4)), T.setAttribute("y", String(B - 8)), T.setAttribute("width", String(A + 8)), T.setAttribute("height", "16"), T.setAttribute("fill", "rgba(255, 255, 255, 0.9)"), T.setAttribute("rx", "2"), T.setAttribute("pointer-events", "none"), T.setAttribute("data-edge-pair-key", t.key), this.edgeLabelsGroup.appendChild(T), C.textContent = p, this.edgeLabelsGroup.appendChild(C);
    } else if (e.label) {
      const b = (g.x + u.x) / 2, B = (g.y + u.y) / 2, C = document.createElementNS("http://www.w3.org/2000/svg", "text");
      C.setAttribute("x", String(b)), C.setAttribute("y", String(B)), C.setAttribute("text-anchor", "middle"), C.setAttribute("dominant-baseline", "middle"), C.setAttribute("font-size", "12"), C.setAttribute("fill", "#333"), C.setAttribute("font-weight", "bold"), C.setAttribute("pointer-events", "none"), C.setAttribute("data-edge-pair-key", t.key);
      const T = document.createElementNS("http://www.w3.org/2000/svg", "rect"), A = e.label.length * 7;
      T.setAttribute("x", String(b - A / 2 - 4)), T.setAttribute("y", String(B - 8)), T.setAttribute("width", String(A + 8)), T.setAttribute("height", "16"), T.setAttribute("fill", "rgba(255, 255, 255, 0.9)"), T.setAttribute("rx", "2"), T.setAttribute("pointer-events", "none"), T.setAttribute("data-edge-pair-key", t.key), this.edgeLabelsGroup.appendChild(T), C.textContent = e.label, this.edgeLabelsGroup.appendChild(C);
    }
  }
  /**
   * モードを設定
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
   * 編集可能かどうかを取得
   */
  isEditable() {
    return this.editable;
  }
  /**
   * 編集モード切り替えボタンを取得
   */
  getEditToggleButton() {
    return this.editToggleButton;
  }
  /**
   * モードを取得
   */
  getMode() {
    return this.mode;
  }
  /**
   * Viewを表示
   */
  show() {
    this.container.style.display = "block", this.nodes.length > 0 && setTimeout(() => {
      const t = this.container.getBoundingClientRect();
      t.width > 0 && t.height > 0 && this.fitAndCenter();
    }, 100), this.resize();
  }
  /**
   * ポップアップを作成
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
   * ポップアップを表示
   */
  showPopup(t) {
    !t || !t.position || (this.hidePopup(), this.popupElement || (this.popupElement = this.createPopup()), this.popupElement.textContent = t.label, this.popupElement.style.opacity = "1", this.popupElement.style.display = "block", this.popupNodeId = t.id, requestAnimationFrame(() => {
      this.popupElement && this.popupNodeId === t.id && this.updatePopupPosition(t);
    }));
  }
  /**
   * ポップアップの位置を更新
   */
  updatePopupPosition(t) {
    if (!this.popupElement || !t || !t.position)
      return;
    const e = t.style || {};
    e.width || this.DEFAULT_NODE_WIDTH;
    const i = e.height || this.DEFAULT_NODE_HEIGHT, s = this.nodeElements.get(t.id);
    if (!s) {
      this.container.getBoundingClientRect(), this.svg.getBoundingClientRect();
      const u = isFinite(this.zoom) && this.zoom > 0 ? this.zoom : 1, m = isFinite(this.offsetX) ? this.offsetX : 0, y = isFinite(this.offsetY) ? this.offsetY : 0, p = (t.position.x + m) * u, f = (t.position.y + y) * u, w = this.popupElement.getBoundingClientRect(), E = w.width || 200, b = w.height || 50, B = p - E / 2, C = f - i * u / 2 - b - 10;
      this.popupElement.style.left = `${B}px`, this.popupElement.style.top = `${C}px`;
      return;
    }
    const o = s.getBoundingClientRect(), n = this.container.getBoundingClientRect(), l = o.left + o.width / 2 - n.left, a = o.top + o.height / 2 - n.top, c = this.popupElement.getBoundingClientRect(), d = c.width || 200, r = c.height || 50, h = l - d / 2, g = a - o.height / 2 - r - 10;
    this.popupElement.style.left = `${h}px`, this.popupElement.style.top = `${g}px`;
  }
  /**
   * ポップアップを閉じる
   */
  hidePopup() {
    this.popupElement && (this.popupElement.style.opacity = "0", setTimeout(() => {
      this.popupElement && this.popupElement.style.opacity === "0" && (this.popupElement.style.display = "none");
    }, 200)), this.popupNodeId = null;
  }
  /**
   * Viewを非表示
   */
  hide() {
    this.container.style.display = "none", this.hidePopup();
  }
  /**
   * リサイズ
   */
  resize() {
    const t = this.container.getBoundingClientRect();
    if (this.svg.setAttribute("width", String(t.width)), this.svg.setAttribute("height", String(t.height)), this.popupNodeId && this.popupElement) {
      const e = this.nodes.find((i) => i.id === this.popupNodeId);
      e && this.updatePopupPosition(e);
    }
  }
  /**
   * 破棄
   */
  destroy() {
    this.nodeElements.clear(), this.edgeElements.clear(), this.container.contains(this.svg) && this.container.removeChild(this.svg);
  }
}
function $(M, t = 16) {
  return D(), `<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <use href="#${M}"></use>
  </svg>`;
}
class j {
  // postRender event listener for popup position updates
  constructor(t, e, i, s, o, n) {
    this.viewer = null, this.Cesium = null, this.nodes = [], this.edges = [], this.selectedNodeId = null, this.lastSelectedNodeId = null, this.nodeEntities = /* @__PURE__ */ new Map(), this.edgeEntities = /* @__PURE__ */ new Map(), this.rectEntity = null, this.fitCenterButton = null, this.lightingToggleButton = null, this.alwaysShowEdgesButton = null, this.alwaysShowEdges = !0, this.tileTypeButton = null, this.baseImageryLayer = null, this.timeISO = null, this.customTileUrls = [], this.currentCustomTileIndex = 0, this.popupElement = null, this.popupEntity = null, this.popupUpdateListener = null, this.container = t, this.onNodeClick = e, this.cesiumLoader = i, this.globe3dOptions = s, this.onEdgeClick = n;
    const l = o && o.length > 0 ? o : s?.customTileUrls;
    l && l.length > 0 ? this.customTileUrls = l.map(
      (a) => typeof a == "string" ? { url: a } : a
    ) : s?.customTileUrl && (this.customTileUrls = [{ url: s.customTileUrl }]), this.container.style.position = "relative", this.container.style.width = "100%", this.container.style.height = "100%";
  }
  /**
   * Initialize Cesium
   */
  async initializeCesium() {
    if (this.viewer)
      return;
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
      // Hide 3D/2D/Columbus View toggle (2D handled by Leaflet)
      selectionIndicator: !1,
      navigationHelpButton: !1,
      // Hide navigation help (? icon) (overlaps with fit button)
      requestRenderMode: !1
      // Rendering mode (keep false, handle errors separately)
    }), this.Cesium.Moon ? (this.viewer.scene.moon || (this.viewer.scene.moon = new this.Cesium.Moon()), this.viewer.scene.moon.show = !0) : this.viewer.scene.moon && (this.viewer.scene.moon.show = !0);
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
   * Convert BC date string to JulianDate
   * @param dateStr BC date string (e.g., "-500-01-01T12:00:00Z", "-99999-01-01T12:00:00Z")
   * @returns JulianDate, or null on error
   */
  parseBCDate(t) {
    if (!this.Cesium)
      return null;
    try {
      const e = t.match(/^-(\d+)-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(Z|[+-]\d{2}:\d{2})?/);
      if (!e)
        throw new Error("Invalid BC date format");
      const i = `2000-${e[2]}-${e[3]}T${e[4]}:${e[5]}:${e[6]}${e[7] || "Z"}`;
      return this.Cesium.JulianDate.fromIso8601(i);
    } catch {
      return null;
    }
  }
  /**
   * Set day/night shading on/off
   * @param enabled true to enable, false to disable
   */
  setLighting(t) {
    if (!this.viewer || !this.Cesium || this.isLightingEnabled() === t)
      return;
    const i = this.viewer.scene.globe;
    i.enableLighting = t, i.dynamicAtmosphereLighting = t, i.dynamicAtmosphereLightingFromSun = t, i.showGroundAtmosphere = !0, t && (i.lightingFadeOutDistance = 0, i.lightingFadeInDistance = 0, i.nightFadeInDistance = 0, i.nightFadeOutDistance = 0, this.viewer.imageryLayers.length > 0 && this.baseImageryLayer && (this.baseImageryLayer.nightAlpha = 0.9)), this.updateLightingButton();
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
    const i = this.isLightingEnabled();
    this.setLighting(t), e && this.onLightingChange && this.isLightingEnabled() !== i && this.onLightingChange(this.isLightingEnabled());
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
    const e = this.customTileUrls.length, i = (t % e + e) % e;
    this.currentCustomTileIndex !== i && (this.currentCustomTileIndex = i, this.viewer && this.Cesium && (this.setTileTypeInternal(!0), this.updateTileTypeButton()));
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
    const t = 5e5, e = 4e7, i = this.viewer.scene.screenSpaceCameraController;
    i.minimumZoomDistance = t, i.maximumZoomDistance = e;
    let s = !1;
    this.viewer.scene.camera.changed.addEventListener(() => {
      if (s)
        return;
      const o = this.viewer.scene.camera, n = this.Cesium.Cartographic.fromCartesian(o.position), l = n.height;
      if (l < t || l > e) {
        s = !0;
        const a = Math.max(t, Math.min(e, l)), c = this.Cesium.Cartesian3.fromRadians(
          n.longitude,
          n.latitude,
          a
        );
        o.setView({
          destination: c
        }), setTimeout(() => {
          s = !1;
        }, 0);
      }
    });
  }
  /**
   * Set click handler
   */
  setupClickHandler() {
    if (!this.viewer || !this.Cesium)
      return;
    new this.Cesium.ScreenSpaceEventHandler(this.viewer.canvas).setInputAction((e) => {
      const i = this.viewer.scene.pick(e.position);
      if (i && i.id && i.id.nodeId) {
        const o = i.id.nodeId, n = this.nodes.find((a) => a.id === o), l = this.nodeEntities.get(o);
        if (n && l && (this.showPopup(l, n), this.onNodeClick)) {
          const a = this.viewer.camera.pickEllipsoid(e.position, this.viewer.scene.globe.ellipsoid);
          if (a) {
            const c = this.Cesium.Cartographic.fromCartesian(a), d = this.Cesium.Math.toDegrees(c.longitude), r = this.Cesium.Math.toDegrees(c.latitude);
            this.onNodeClick({
              node: n,
              position: { x: d, y: r },
              originalEvent: e.originalEvent
            });
          }
        }
        return;
      }
      const s = this.viewer.scene.drillPick(e.position);
      for (const o of s)
        if (o.id && o.id.nodeId) {
          const n = o.id.nodeId, l = this.nodes.find((c) => c.id === n), a = this.nodeEntities.get(n);
          if (l && a && (this.showPopup(a, l), this.onNodeClick)) {
            const c = this.viewer.camera.pickEllipsoid(e.position, this.viewer.scene.globe.ellipsoid);
            if (c) {
              const d = this.Cesium.Cartographic.fromCartesian(c), r = this.Cesium.Math.toDegrees(d.longitude), h = this.Cesium.Math.toDegrees(d.latitude);
              this.onNodeClick({
                node: l,
                position: { x: r, y: h },
                originalEvent: e.originalEvent
              });
            }
          }
          return;
        }
      s.length === 0 && this.hidePopup();
      for (const o of s)
        if (o.id && o.id.edgeId) {
          const n = o.id.edgeId, l = this.edges.find((a) => a.id === n);
          if (l && this.onEdgeClick) {
            const a = this.viewer.camera.pickEllipsoid(e.position, this.viewer.scene.globe.ellipsoid);
            if (a) {
              const c = this.Cesium.Cartographic.fromCartesian(a), d = this.Cesium.Math.toDegrees(c.longitude), r = this.Cesium.Math.toDegrees(c.latitude);
              this.onEdgeClick({
                edge: l,
                position: { x: d, y: r },
                originalEvent: e.originalEvent
              });
            }
          }
          return;
        }
      !i && (!s || s.length === 0) && this.hidePopup();
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
    if (!this.viewer || !this.Cesium)
      return;
    if (t === this.lastSelectedNodeId) {
      this.selectedNodeId = null, this.lastSelectedNodeId = null, this.hidePopup(), this.fitToNodes(), this.render();
      return;
    }
    this.lastSelectedNodeId = t, this.selectedNodeId = t, this.render();
    const e = this.nodes.find((s) => s.id === t);
    if (!e)
      return;
    if (e.coordinates && e.coordinates.length === 2) {
      const [s, o] = e.coordinates;
      if (Number.isFinite(s) && Number.isFinite(o)) {
        const [n, l] = e.coordinates, a = 3e6, c = this.nodeEntities.get(t);
        c && e && this.showPopup(c, e), this.viewer.camera.flyTo({
          destination: this.Cesium.Cartesian3.fromDegrees(l, n, a),
          orientation: {
            heading: this.Cesium.Math.toRadians(0),
            // Face north
            pitch: this.Cesium.Math.toRadians(-90),
            // Look down from directly above (-90 degrees)
            roll: 0
          },
          duration: 1
          // Move in 1 second
        });
        return;
      }
    }
    const i = this.nodes.filter((s) => {
      if (!s.coordinates || !Array.isArray(s.coordinates) || s.coordinates.length !== 2) return !0;
      const [o, n] = s.coordinates;
      return !Number.isFinite(o) || !Number.isFinite(n);
    });
    if (i.length > 0) {
      const a = Math.ceil(Math.sqrt(i.length)), d = 50 / (Math.ceil(i.length / a) + 1), r = 32 / (a + 1), h = i.findIndex((g) => g.id === t);
      if (h >= 0) {
        const g = Math.floor(h / a), u = h % a, m = -50 + (g + 1) * d, y = -32 + (u + 1) * r, p = 3e6, f = this.nodeEntities.get(t);
        f && e && this.showPopup(f, e), this.viewer.camera.flyTo({
          destination: this.Cesium.Cartesian3.fromDegrees(y, m, p),
          orientation: {
            heading: this.Cesium.Math.toRadians(0),
            // Look north
            pitch: this.Cesium.Math.toRadians(-90),
            // Look straight down (-90 degrees)
            roll: 0
          },
          duration: 1
          // 1 second animation
        });
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
      const [s, o] = i.coordinates;
      return !Number.isFinite(s) || !Number.isFinite(o);
    }), e = this.nodes.filter((i) => {
      if (!i.coordinates || !Array.isArray(i.coordinates) || i.coordinates.length !== 2) return !1;
      const [s, o] = i.coordinates;
      return Number.isFinite(s) && Number.isFinite(o);
    });
    if (t.length > 0) {
      const l = [
        this.Cesium.Cartesian3.fromDegrees(-32, -50, 0),
        this.Cesium.Cartesian3.fromDegrees(0, -50, 0),
        this.Cesium.Cartesian3.fromDegrees(0, 0, 0),
        this.Cesium.Cartesian3.fromDegrees(-32, 0, 0)
      ];
      this.rectEntity = this.viewer.entities.add({
        polygon: {
          hierarchy: l,
          material: this.Cesium.Color.fromCssColorString("#f0f0f0").withAlpha(0.1),
          outline: !0,
          outlineColor: this.Cesium.Color.fromCssColorString("#666"),
          height: 0
        }
      });
      const a = Math.ceil(Math.sqrt(t.length)), d = 50 / (Math.ceil(t.length / a) + 1), r = 32 / (a + 1);
      t.forEach((h, g) => {
        const u = Math.floor(g / a), m = g % a, y = -50 + (u + 1) * d, p = -32 + (m + 1) * r, f = this.selectedNodeId === h.id, w = h.style?.color || "#ffffff", E = f ? "#2196f3" : h.style?.borderColor || "#333333";
        let b;
        const B = w.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
        if (B) {
          const A = parseInt(B[1], 16) / 255, x = parseInt(B[2], 16) / 255, S = parseInt(B[3], 16) / 255;
          b = new this.Cesium.Color(A, x, S, 1);
        } else
          b = this.Cesium.Color.fromCssColorString(w), b = b.withAlpha(1);
        const C = this.Cesium.Color.fromCssColorString(E), T = this.viewer.entities.add({
          position: this.Cesium.Cartesian3.fromDegrees(p, y, 0),
          point: {
            pixelSize: f ? 15 : 10,
            color: b,
            outlineColor: C,
            outlineWidth: 2,
            heightReference: this.Cesium.HeightReference.CLAMP_TO_GROUND
          },
          label: {
            text: h.label,
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
          nodeId: h.id
        });
        this.nodeEntities.set(h.id, T);
      });
    }
    for (const i of e) {
      const [s, o] = i.coordinates, n = this.selectedNodeId === i.id, l = i.style?.color || "#ffffff", a = n ? "#2196f3" : i.style?.borderColor || "#333333";
      let c;
      const d = l.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
      if (d) {
        const g = parseInt(d[1], 16) / 255, u = parseInt(d[2], 16) / 255, m = parseInt(d[3], 16) / 255;
        c = new this.Cesium.Color(g, u, m, 1);
      } else
        c = this.Cesium.Color.fromCssColorString(l), c = c.withAlpha(1);
      const r = this.Cesium.Color.fromCssColorString(a), h = this.viewer.entities.add({
        position: this.Cesium.Cartesian3.fromDegrees(o, s, 0),
        point: {
          pixelSize: n ? 15 : 10,
          color: c,
          // Use node fill color
          outlineColor: r,
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
      this.nodeEntities.set(i.id, h);
    }
    if (this.alwaysShowEdges)
      for (const i of this.edges) {
        const s = this.nodes.find((u) => u.id === i.src), o = this.nodes.find((u) => u.id === i.dst);
        if (!s?.coordinates || !o?.coordinates)
          continue;
        const [n, l] = s.coordinates, [a, c] = o.coordinates, d = i.style?.color || "#999999", r = i.style?.weight || 1, h = Math.max(1, Math.min(5, r)), g = this.viewer.entities.add({
          polyline: {
            positions: [
              this.Cesium.Cartesian3.fromDegrees(l, n, 0),
              this.Cesium.Cartesian3.fromDegrees(c, a, 0)
            ],
            width: h,
            material: this.Cesium.Color.fromCssColorString(d),
            clampToGround: !0
          },
          edgeId: i.id
          // For hit testing
        });
        this.edgeEntities.set(i.id, g);
      }
    this.fitToNodes();
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
      const [s, o] = i.coordinates;
      return !Number.isFinite(s) || !Number.isFinite(o);
    }), e = this.nodes.filter((i) => {
      if (!i.coordinates || !Array.isArray(i.coordinates) || i.coordinates.length !== 2) return !1;
      const [s, o] = i.coordinates;
      return Number.isFinite(s) && Number.isFinite(o);
    });
    if (t.length > 0) {
      const l = [
        this.Cesium.Cartesian3.fromDegrees(-32, -50, 0),
        this.Cesium.Cartesian3.fromDegrees(0, -50, 0),
        this.Cesium.Cartesian3.fromDegrees(0, 0, 0),
        this.Cesium.Cartesian3.fromDegrees(-32, 0, 0)
      ];
      this.rectEntity = this.viewer.entities.add({
        polygon: {
          hierarchy: l,
          material: this.Cesium.Color.fromCssColorString("#f0f0f0").withAlpha(0.1),
          outline: !0,
          outlineColor: this.Cesium.Color.fromCssColorString("#666"),
          height: 0
        }
      });
      const a = Math.ceil(Math.sqrt(t.length)), d = 50 / (Math.ceil(t.length / a) + 1), r = 32 / (a + 1);
      t.forEach((h, g) => {
        const u = Math.floor(g / a), m = g % a, y = -50 + (u + 1) * d, p = -32 + (m + 1) * r, f = this.selectedNodeId === h.id, w = h.style?.color || "#ffffff", E = f ? "#2196f3" : h.style?.borderColor || "#333333";
        let b;
        const B = w.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
        if (B) {
          const A = parseInt(B[1], 16) / 255, x = parseInt(B[2], 16) / 255, S = parseInt(B[3], 16) / 255;
          b = new this.Cesium.Color(A, x, S, 1);
        } else
          b = this.Cesium.Color.fromCssColorString(w), b = b.withAlpha(1);
        const C = this.Cesium.Color.fromCssColorString(E), T = this.viewer.entities.add({
          position: this.Cesium.Cartesian3.fromDegrees(p, y, 0),
          point: {
            pixelSize: f ? 15 : 10,
            color: b,
            outlineColor: C,
            outlineWidth: 2,
            heightReference: this.Cesium.HeightReference.CLAMP_TO_GROUND
          },
          label: {
            text: h.label,
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
          nodeId: h.id
        });
        this.nodeEntities.set(h.id, T);
      });
    }
    for (const i of e) {
      const [s, o] = i.coordinates, n = this.selectedNodeId === i.id, l = i.style?.color || "#ffffff", a = n ? "#2196f3" : i.style?.borderColor || "#333333";
      let c;
      const d = l.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
      if (d) {
        const g = parseInt(d[1], 16) / 255, u = parseInt(d[2], 16) / 255, m = parseInt(d[3], 16) / 255;
        c = new this.Cesium.Color(g, u, m, 1);
      } else
        c = this.Cesium.Color.fromCssColorString(l), c = c.withAlpha(1);
      const r = this.Cesium.Color.fromCssColorString(a), h = this.viewer.entities.add({
        position: this.Cesium.Cartesian3.fromDegrees(o, s, 0),
        point: {
          pixelSize: n ? 15 : 10,
          color: c,
          outlineColor: r,
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
      this.nodeEntities.set(i.id, h);
    }
    if (this.alwaysShowEdges)
      for (const i of this.edges) {
        const s = this.nodes.find((u) => u.id === i.src), o = this.nodes.find((u) => u.id === i.dst);
        if (!s?.coordinates || !o?.coordinates)
          continue;
        const [n, l] = s.coordinates, [a, c] = o.coordinates, d = i.style?.color || "#999999", r = i.style?.weight || 1, h = Math.max(1, Math.min(5, r)), g = this.viewer.entities.add({
          polyline: {
            positions: [
              this.Cesium.Cartesian3.fromDegrees(l, n, 0),
              this.Cesium.Cartesian3.fromDegrees(c, a, 0)
            ],
            width: h,
            material: this.Cesium.Color.fromCssColorString(d),
            clampToGround: !0
          },
          edgeId: i.id
          // For hit testing
        });
        this.edgeEntities.set(i.id, g);
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
    const e = (l, a, c, d = !1) => {
      const r = (g) => String(g).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"), h = `<a href="${r(c)}" target="_blank" rel="noopener noreferrer">${r(a)}</a>`;
      return new l.Credit(h, d);
    };
    if (this.baseImageryLayer)
      try {
        this.viewer.imageryLayers.remove(this.baseImageryLayer);
      } catch (l) {
        console.debug("[Globe3D] Failed to remove baseImageryLayer:", l);
      }
    if (this.customTileUrls.length > 0) {
      const l = this.customTileUrls[this.currentCustomTileIndex], a = l.url.includes("NaturalEarthII"), c = l.maximumLevel ?? (a ? 2 : 19);
      let d;
      if (l.credit) {
        const g = l.credit;
        g.href ? d = e(this.Cesium, g.label, g.href, g.showOnScreen ?? !1) : d = new this.Cesium.Credit(g.label, g.showOnScreen ?? !1);
      } else
        d = new this.Cesium.Credit(
          `Custom tile server (${this.currentCustomTileIndex + 1}/${this.customTileUrls.length})`
        );
      const r = {
        url: l.url,
        maximumLevel: c,
        credit: d
      };
      a && this.Cesium?.GeographicTilingScheme && (r.tilingScheme = new this.Cesium.GeographicTilingScheme());
      const h = new this.Cesium.UrlTemplateImageryProvider(r);
      this.baseImageryLayer = this.viewer.imageryLayers.addImageryProvider(h, 0), this.updateTileTypeButton();
      return;
    }
    const i = new this.Cesium.Credit("© NASA", !0), s = new this.Cesium.GeographicTilingScheme({
      rectangle: this.Cesium.Rectangle.fromDegrees(-180, -90, 180, 90),
      numberOfLevelZeroTilesX: 2,
      // Level 0 has 2 tiles in X direction
      numberOfLevelZeroTilesY: 1
      // Level 0 has 1 tile in Y direction
    }), o = "/cesium/Assets/Textures/NaturalEarthII/{z}/{x}/{reverseY}.jpg", n = new this.Cesium.UrlTemplateImageryProvider({
      url: o,
      maximumLevel: 2,
      // NaturalEarthII tiles only go up to level 2
      tilingScheme: s,
      // EPSG:4326 (Geographic Coordinate System)
      credit: i,
      customTags: {
        reverseY: (l, a, c, d) => {
          const h = Math.pow(2, d) - 1 - c;
          return String(h);
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
    const t = this.nodes.filter((f) => {
      if (!f.coordinates || !Array.isArray(f.coordinates) || f.coordinates.length !== 2) return !1;
      const [w, E] = f.coordinates;
      return Number.isFinite(w) && Number.isFinite(E);
    }), e = this.nodes.filter((f) => {
      if (!f.coordinates || !Array.isArray(f.coordinates) || f.coordinates.length !== 2) return !0;
      const [w, E] = f.coordinates;
      return !Number.isFinite(w) || !Number.isFinite(E);
    }), i = [], s = [];
    if (t.forEach((f) => {
      if (f.coordinates && f.coordinates.length === 2) {
        const [w, E] = f.coordinates;
        Number.isFinite(w) && Number.isFinite(E) && (i.push(w), s.push(E));
      }
    }), e.length > 0) {
      const B = Math.ceil(Math.sqrt(e.length)), T = 50 / (Math.ceil(e.length / B) + 1), A = 32 / (B + 1);
      e.forEach((x, S) => {
        const v = Math.floor(S / B), L = S % B, N = -50 + (v + 1) * T, k = -32 + (L + 1) * A;
        i.push(N), s.push(k);
      });
    }
    if (i.length === 0)
      return;
    const o = Math.min(...i), n = Math.max(...i), l = Math.min(...s), a = Math.max(...s), c = (o + n) / 2, d = (l + a) / 2, r = n - o, h = a - l, g = Math.max(r, h), u = Math.max(1e6, g * 111e3 * 2), p = Math.max(5e5, Math.min(4e7, u));
    this.viewer.camera.flyTo({
      destination: this.Cesium.Cartesian3.fromDegrees(d, c, p),
      orientation: {
        heading: 0,
        pitch: this.Cesium.Math.toRadians(-90),
        roll: 0
      },
      duration: 1
      // Animate in 1 second
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
      const i = () => {
        this.popupEntity && this.popupElement && this.updatePopupPosition();
      };
      this.viewer.scene.postRender.addEventListener(i), this.popupUpdateListener = () => {
        this.viewer?.scene.postRender.removeEventListener(i);
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
   * Update popup position (follow entity position)
   */
  updatePopupPosition() {
    if (!this.viewer || !this.Cesium || !this.popupEntity || !this.popupElement)
      return;
    const t = this.popupEntity.position?.getValue(this.viewer.clock.currentTime);
    if (!t)
      return;
    let e = null;
    if (this.Cesium.SceneTransforms && this.Cesium.SceneTransforms.worldToWindowCoordinates ? e = this.Cesium.SceneTransforms.worldToWindowCoordinates(
      this.viewer.scene,
      t
    ) : this.Cesium.SceneTransforms && this.Cesium.SceneTransforms.wgs84ToWindowCoordinates ? e = this.Cesium.SceneTransforms.wgs84ToWindowCoordinates(
      this.viewer.scene,
      t
    ) : e = this.viewer.camera.project(t), !e) {
      this.popupElement.style.display = "none";
      return;
    }
    this.popupElement.style.display = "block";
    const i = e.x - this.popupElement.offsetWidth / 2, s = e.y - this.popupElement.offsetHeight - 15;
    this.popupElement.style.left = `${i}px`, this.popupElement.style.top = `${s}px`;
  }
  /**
   * Check if editable (Globe3D is not editable)
   */
  isEditable() {
    return !1;
  }
}
function K(M, t = 16) {
  return D(), `<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <use href="#${M}"></use>
  </svg>`;
}
class q {
  // Current index in customTileUrls array
  constructor(t, e, i, s, o, n) {
    this.map = null, this.Leaflet = null, this.nodes = [], this.edges = [], this.selectedNodeId = null, this.lastSelectedNodeId = null, this.markers = /* @__PURE__ */ new Map(), this.polylines = /* @__PURE__ */ new Map(), this.rectLayer = null, this.fitCenterButton = null, this.lightingToggleButton = null, this.alwaysShowEdgesButton = null, this.alwaysShowEdges = !0, this.tileTypeButton = null, this.baseTileLayer = null, this.nightShadeLayer = null, this.nightShadeDebugLayer = null, this.lightingEnabled = !1, this.timeISO = null, this.moonToggleButton = null, this.moonEnabled = !1, this.moonMarker = null, this.customTileUrls = [], this.currentCustomTileIndex = 0, this.container = t, this.onNodeClick = e, this.leafletLoader = i, this.map2dOptions = o, this.onEdgeClick = n;
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
    const t = await this.leafletLoader();
    this.Leaflet = t.default || t;
    const e = this.map2dOptions?.center || [0, 0], i = this.map2dOptions?.zoom || 2;
    let s = 5;
    if (this.customTileUrls.length > 0) {
      const n = this.customTileUrls.map((l) => l.maxZoom ?? l.maximumLevel ?? 19);
      s = Math.min(...n);
    }
    const o = {
      center: e,
      zoom: i,
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
    let t;
    if (this.customTileUrls.length > 0) {
      const s = this.customTileUrls[this.currentCustomTileIndex], o = s.maxZoom ?? s.maximumLevel ?? 19, n = s.tms ?? !1, l = s.attribution ?? `Custom tile server (${this.currentCustomTileIndex + 1}/${this.customTileUrls.length})`;
      t = this.Leaflet.tileLayer(s.url, {
        maxZoom: o,
        tms: n,
        // TMS format (Y from bottom to top) if specified
        attribution: l
      }), t.addTo(this.map), this.baseTileLayer = t;
      return;
    }
    const e = "/cesium/Assets/Textures/NaturalEarthII/{z}/{x}/{y}.jpg", i = this.Leaflet.latLngBounds([
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
      bounds: i,
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
    this.timeISO = t, this.lightingEnabled && this.updateNightShade(), this.moonEnabled && (this.updateMoonMarker(), this.updateMoonButton());
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
    const i = this.lightingEnabled;
    this.setLighting(t), e && this.onLightingChange && this.lightingEnabled !== i && this.onLightingChange(this.lightingEnabled);
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
    const e = this.customTileUrls.length, i = (t % e + e) % e;
    this.currentCustomTileIndex !== i && (this.currentCustomTileIndex = i, this.map && this.Leaflet && (this.setupBaseTileLayer(), this.updateTileTypeButton()));
  }
  /**
   * Cycle to next tile server (for View interface)
   */
  cycleTileServer() {
    this.switchTileType();
  }
  /**
   * 夜のシェード（昼夜境界線）を更新
   */
  updateNightShade() {
    if (!this.map || !this.Leaflet || (this.nightShadeLayer && (this.map.removeLayer(this.nightShadeLayer), this.nightShadeLayer = null), this.nightShadeDebugLayer && (this.map.removeLayer(this.nightShadeDebugLayer), this.nightShadeDebugLayer = null), !this.lightingEnabled))
      return;
    const t = this.timeISO || (/* @__PURE__ */ new Date()).toISOString(), s = this.calculateTerminatorBoundary(t, 720, 2);
    if (!s || s.length === 0)
      return;
    const o = this.unwrapLongitudes(s);
    let n = o.map((g) => [g.lat, g.lng]);
    n.length > 0 && (n[0][0] !== n[n.length - 1][0] || n[0][1] !== n[n.length - 1][1]) && n.push([n[0][0], n[0][1]]);
    const l = n.map(([g, u]) => ({ lat: g, lng: u }));
    this.isCounterClockwise(l) ? (n.reverse(), this.map2dOptions?.debugNightShading && console.debug("[night-shade] Original boundary is CCW, reversed to CW for hole")) : this.map2dOptions?.debugNightShading && console.debug("[night-shade] Original boundary is already CW, using as-is for hole");
    const c = n.map(([g, u]) => ({ lat: g, lng: u }));
    if (this.isCounterClockwise(c)) {
      n.reverse();
      const g = n.map(([m, y]) => ({ lat: m, lng: y }));
      this.isCounterClockwise(g) ? this.map2dOptions?.debugNightShading && console.debug("[night-shade] Warning: Inner ring direction check inconclusive, using current order") : this.map2dOptions?.debugNightShading && console.debug("[night-shade] Inner ring is CW after second reverse");
    } else
      this.map2dOptions?.debugNightShading && console.debug("[night-shade] Inner ring is CW, ready for use as hole");
    const r = o.map((g) => [g.lat, g.lng]);
    r.length > 0 && (r[0][0] !== r[r.length - 1][0] || r[0][1] !== r[r.length - 1][1]) && r.push([r[0][0], r[0][1]]);
    const h = this.Leaflet.polygon(r, {
      fillColor: "#000000",
      fillOpacity: 0.3,
      color: "#000000",
      weight: 0,
      interactive: !1
    });
    if (h.addTo(this.map), this.nightShadeLayer = h, this.map2dOptions?.debugNightShading) {
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
    for (let i = 0; i < t.length - 1; i++) {
      const s = t[i], o = t[i + 1];
      e += (o.lng - s.lng) * (o.lat + s.lat);
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
    for (let i = 1; i < t.length; i++) {
      let { lat: s, lng: o } = t[i];
      const n = e[i - 1].lng;
      for (; o - n > 180; )
        o -= 360, this.map2dOptions?.debugNightShading && console.debug("[night-shade] unwrap: adjusted longitude", { index: i, from: t[i].lng, to: o, prevLng: n });
      for (; o - n < -180; )
        o += 360, this.map2dOptions?.debugNightShading && console.debug("[night-shade] unwrap: adjusted longitude", { index: i, from: t[i].lng, to: o, prevLng: n });
      e.push({ lat: s, lng: o });
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
    let i = 280.46 + 0.9856474 * e;
    i = (i % 360 + 360) % 360;
    let s = 357.528 + 0.9856003 * e;
    s = (s % 360 + 360) % 360;
    const o = Math.PI / 180, n = i + 1.915 * Math.sin(s * o) + 0.02 * Math.sin(2 * s * o), l = 1.00014 - 0.01671 * Math.cos(s * o) - 14e-4 * Math.cos(2 * s * o);
    return { lambda: n, R: l };
  }
  /**
   * Calculate ecliptic obliquity
   * Based on Leaflet.Terminator implementation
   * Reference: http://en.wikipedia.org/wiki/Axial_tilt#Obliquity_of_the_ecliptic_.28Earth.27s_axial_tilt.29
   */
  eclipticObliquity(t) {
    const i = (t - 2451545) / 36525;
    return 23.43929111 - i * (46.836769 / 3600 - i * (1831e-7 / 3600 + i * (20034e-7 / 3600 - i * (576e-9 / 3600 - i * 434e-10 / 3600))));
  }
  /**
   * Compute the Sun's equatorial position from its ecliptic position
   * Based on Leaflet.Terminator implementation
   */
  sunEquatorialPosition(t, e) {
    const i = Math.PI / 180, s = 180 / Math.PI, o = Math.atan(Math.cos(e * i) * Math.tan(t * i)) * s, n = Math.asin(Math.sin(e * i) * Math.sin(t * i)) * s, l = Math.floor(t / 90) * 90, a = Math.floor(o / 90) * 90;
    return { alpha: o + (l - a), delta: n };
  }
  /**
   * Compute the hour angle of the sun for a longitude on Earth
   * Based on Leaflet.Terminator implementation
   */
  hourAngle(t, e, i) {
    return (i + t / 15) * 15 - e.alpha;
  }
  /**
   * For a given hour angle and sun position, compute the latitude of the terminator
   * Based on Leaflet.Terminator implementation
   */
  terminatorLatitude(t, e) {
    const i = Math.PI / 180, s = 180 / Math.PI;
    return Math.atan(-Math.cos(t * i) / Math.tan(e.delta * i)) * s;
  }
  /**
   * Calculate terminator boundary using Leaflet.Terminator's algorithm
   * @param timeISO ISO 8601 time string
   * @param longitudeRange Longitude range (default: 720 degrees, -360 to +360)
   * @param resolution Resolution (points per degree, default: 2)
   * @returns Array of {lat, lng} points forming the terminator boundary
   */
  calculateTerminatorBoundary(t, e = 720, i = 2) {
    try {
      let s;
      if (t.startsWith("-")) {
        if (s = new Date(t), isNaN(s.getTime()))
          return null;
      } else if (s = new Date(t), isNaN(s.getTime()))
        return null;
      const o = this.julian(s), n = this.GMST(o), l = this.sunEclipticPosition(o), a = this.eclipticObliquity(o), c = this.sunEquatorialPosition(l.lambda, a), d = [];
      for (let r = 0; r <= e * i; r++) {
        const h = -e / 2 + r / i, g = this.hourAngle(h, c, n), u = this.terminatorLatitude(g, c);
        d.push({ lat: u, lng: h });
      }
      return c.delta < 0 ? (d.unshift({ lat: 90, lng: -e / 2 }), d.push({ lat: 90, lng: e / 2 })) : (d.unshift({ lat: -90, lng: -e / 2 }), d.push({ lat: -90, lng: e / 2 })), d.length > 0 ? d : null;
    } catch {
      return null;
    }
  }
  /**
   * 年内の日数を計算
   * @param date 日付
   * @returns 年内の日数（1-365/366）
   */
  getDayOfYear(t) {
    const e = new Date(t.getFullYear(), 0, 0), i = t.getTime() - e.getTime(), s = 1e3 * 60 * 60 * 24;
    return Math.floor(i / s);
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
   * Select node (highlight)
   * If same node is selected again, switch to fit action showing entire view
   */
  selectNode(t) {
    if (!t) {
      this.selectedNodeId = null, this.lastSelectedNodeId = null, this.renderWithoutFit();
      return;
    }
    if (!this.map || !this.Leaflet)
      return;
    if (t === this.lastSelectedNodeId) {
      this.selectedNodeId = null, this.lastSelectedNodeId = null, this.fitToNodes(), this.renderWithoutFit();
      return;
    }
    this.lastSelectedNodeId = t, this.selectedNodeId = t;
    const e = this.nodes.find((s) => s.id === t);
    if (!e)
      return;
    if (e.coordinates && e.coordinates.length === 2) {
      const [s, o] = e.coordinates;
      if (Number.isFinite(s) && Number.isFinite(o)) {
        const [n, l] = e.coordinates;
        this.renderWithoutFit(), this.map.flyTo([n, l], 4, {
          // Max zoom level 8
          duration: 1,
          // 1 second animation
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
    const i = this.nodes.filter((s) => {
      if (!s.coordinates || !Array.isArray(s.coordinates) || s.coordinates.length !== 2) return !0;
      const [o, n] = s.coordinates;
      return !Number.isFinite(o) || !Number.isFinite(n);
    });
    if (i.length > 0) {
      const a = Math.ceil(Math.sqrt(i.length)), d = 50 / (Math.ceil(i.length / a) + 1), r = 32 / (a + 1), h = i.findIndex((g) => g.id === t);
      if (h >= 0) {
        const g = Math.floor(h / a), u = h % a, m = -50 + (g + 1) * d, y = -32 + (u + 1) * r;
        this.renderWithoutFit(), this.map.flyTo([m, y], 4, {
          duration: 1,
          // 1 second animation
          easeLinearity: 0.25
        });
        const p = () => {
          const f = this.markers.get(t);
          f && f.openPopup(), this.map.off("moveend", p);
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
    }), this.markers.clear(), this.polylines.forEach((i) => {
      this.map.removeLayer(i);
    }), this.polylines.clear();
    const t = this.nodes.filter((i) => {
      if (!i.coordinates || !Array.isArray(i.coordinates) || i.coordinates.length !== 2) return !0;
      const [s, o] = i.coordinates;
      return !Number.isFinite(s) || !Number.isFinite(o);
    }), e = this.nodes.filter((i) => {
      if (!i.coordinates || !Array.isArray(i.coordinates) || i.coordinates.length !== 2) return !1;
      const [s, o] = i.coordinates;
      return Number.isFinite(s) && Number.isFinite(o);
    });
    if (t.length > 0) {
      const l = this.Leaflet.latLngBounds(
        [-50, -32],
        [0, 0]
      );
      this.rectLayer = this.Leaflet.rectangle(l, {
        color: "#666",
        fillColor: "#f0f0f0",
        fillOpacity: 0.1,
        weight: 1,
        dashArray: "5,5"
      }), this.rectLayer.addTo(this.map);
      const a = Math.ceil(Math.sqrt(t.length)), d = 50 / (Math.ceil(t.length / a) + 1), r = 32 / (a + 1);
      t.forEach((h, g) => {
        const u = Math.floor(g / a), m = g % a, y = -50 + (u + 1) * d, p = -32 + (m + 1) * r, f = this.selectedNodeId === h.id, w = h.style?.color || "#ffffff", E = f ? "#2196f3" : h.style?.borderColor || "#333333", b = `
          <div style="
            width: ${f ? 15 : 10}px;
            height: ${f ? 15 : 10}px;
            background-color: ${w};
            border: 2px solid ${E};
            border-radius: 50%;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          "></div>
        `, B = this.Leaflet.divIcon({
          html: b,
          className: "relatos-node-marker",
          iconSize: [f ? 15 : 10, f ? 15 : 10],
          iconAnchor: [f ? 7.5 : 5, f ? 7.5 : 5]
        }), C = this.Leaflet.marker([y, p], { icon: B });
        C.bindPopup(h.label, {
          closeButton: !1,
          offset: [0, -10]
        }), C.on("click", (T) => {
          if (this.onNodeClick) {
            const A = T.latlng;
            this.onNodeClick({
              node: h,
              position: { x: A.lng, y: A.lat },
              originalEvent: T.originalEvent
            });
          }
        }), C.addTo(this.map), this.markers.set(h.id, C);
      });
    }
    for (const i of e) {
      const [s, o] = i.coordinates, n = this.selectedNodeId === i.id, l = i.style?.color || "#ffffff", a = n ? "#2196f3" : i.style?.borderColor || "#333333", c = `
        <div style="
          width: ${n ? 15 : 10}px;
          height: ${n ? 15 : 10}px;
          background-color: ${l};
          border: 2px solid ${a};
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        "></div>
      `, d = this.Leaflet.divIcon({
        html: c,
        className: "relatos-node-marker",
        iconSize: [n ? 15 : 10, n ? 15 : 10],
        iconAnchor: [n ? 7.5 : 5, n ? 7.5 : 5]
      }), r = this.Leaflet.marker([s, o], { icon: d });
      r.bindPopup(i.label, {
        closeButton: !1,
        offset: [0, -10]
      }), r.on("click", (h) => {
        if (this.onNodeClick) {
          const g = h.latlng;
          this.onNodeClick({
            node: i,
            position: { x: g.lng, y: g.lat },
            originalEvent: h.originalEvent,
            view: "map2d"
          });
        }
      }), r.addTo(this.map), this.markers.set(i.id, r);
    }
    if (this.alwaysShowEdges)
      for (const i of this.edges) {
        const s = this.nodes.find((u) => u.id === i.src), o = this.nodes.find((u) => u.id === i.dst);
        if (!s?.coordinates || !o?.coordinates)
          continue;
        const [n, l] = s.coordinates, [a, c] = o.coordinates, d = i.style?.color || "#999999", r = i.style?.weight || 1, h = Math.max(1, Math.min(5, r)), g = this.Leaflet.polyline(
          [[n, l], [a, c]],
          {
            color: d,
            weight: h,
            opacity: 0.7
          }
        );
        g.on("click", (u) => {
          if (this.onEdgeClick) {
            const m = u.latlng;
            this.onEdgeClick({
              edge: i,
              position: { x: m.lng, y: m.lat },
              originalEvent: u.originalEvent,
              view: "map2d"
            });
          }
        }), g.addTo(this.map), this.polylines.set(i.id, g);
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
    }), this.markers.clear(), this.polylines.forEach((i) => {
      this.map.removeLayer(i);
    }), this.polylines.clear(), this.rectLayer && (this.map.removeLayer(this.rectLayer), this.rectLayer = null);
    const t = this.nodes.filter((i) => {
      if (!i.coordinates || !Array.isArray(i.coordinates) || i.coordinates.length !== 2) return !0;
      const [s, o] = i.coordinates;
      return !Number.isFinite(s) || !Number.isFinite(o);
    }), e = this.nodes.filter((i) => {
      if (!i.coordinates || !Array.isArray(i.coordinates) || i.coordinates.length !== 2) return !1;
      const [s, o] = i.coordinates;
      return Number.isFinite(s) && Number.isFinite(o);
    });
    if (t.length > 0) {
      const l = this.Leaflet.latLngBounds(
        [-50, -32],
        [0, 0]
      );
      this.rectLayer = this.Leaflet.rectangle(l, {
        color: "#666",
        fillColor: "#f0f0f0",
        fillOpacity: 0.1,
        weight: 1,
        dashArray: "5,5"
      }), this.rectLayer.addTo(this.map);
      const a = Math.ceil(Math.sqrt(t.length)), d = 50 / (Math.ceil(t.length / a) + 1), r = 32 / (a + 1);
      t.forEach((h, g) => {
        const u = Math.floor(g / a), m = g % a, y = -50 + (u + 1) * d, p = -32 + (m + 1) * r, f = this.selectedNodeId === h.id, w = h.style?.color || "#ffffff", E = f ? "#2196f3" : h.style?.borderColor || "#333333", b = `
          <div style="
            width: ${f ? 15 : 10}px;
            height: ${f ? 15 : 10}px;
            background-color: ${w};
            border: 2px solid ${E};
            border-radius: 50%;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          "></div>
        `, B = this.Leaflet.divIcon({
          html: b,
          className: "relatos-node-marker",
          iconSize: [f ? 15 : 10, f ? 15 : 10],
          iconAnchor: [f ? 7.5 : 5, f ? 7.5 : 5]
        }), C = this.Leaflet.marker([y, p], { icon: B });
        C.bindPopup(h.label, {
          closeButton: !1,
          offset: [0, -10]
        }), C.on("click", (T) => {
          if (this.onNodeClick) {
            const A = T.latlng;
            this.onNodeClick({
              node: h,
              position: { x: A.lng, y: A.lat },
              originalEvent: T.originalEvent,
              view: "map2d"
            });
          }
        }), C.addTo(this.map), this.markers.set(h.id, C);
      });
    }
    for (const i of e) {
      const [s, o] = i.coordinates, n = this.selectedNodeId === i.id, l = i.style?.color || "#ffffff", a = n ? "#2196f3" : i.style?.borderColor || "#333333", c = `
        <div style="
          width: ${n ? 15 : 10}px;
          height: ${n ? 15 : 10}px;
          background-color: ${l};
          border: 2px solid ${a};
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        "></div>
      `, d = this.Leaflet.divIcon({
        html: c,
        className: "relatos-node-marker",
        iconSize: [n ? 15 : 10, n ? 15 : 10],
        iconAnchor: [n ? 7.5 : 5, n ? 7.5 : 5]
      }), r = this.Leaflet.marker([s, o], { icon: d });
      r.bindPopup(i.label, {
        closeButton: !1,
        offset: [0, -10]
      }), r.on("click", (h) => {
        if (this.onNodeClick) {
          const g = h.latlng;
          this.onNodeClick({
            node: i,
            position: { x: g.lng, y: g.lat },
            originalEvent: h.originalEvent
          });
        }
      }), r.addTo(this.map), this.markers.set(i.id, r);
    }
    if (this.alwaysShowEdges)
      for (const i of this.edges) {
        const s = this.nodes.find((u) => u.id === i.src), o = this.nodes.find((u) => u.id === i.dst);
        if (!s?.coordinates || !o?.coordinates)
          continue;
        const [n, l] = s.coordinates, [a, c] = o.coordinates, d = i.style?.color || "#999999", r = i.style?.weight || 1, h = Math.max(1, Math.min(5, r)), g = this.Leaflet.polyline(
          [[n, l], [a, c]],
          {
            color: d,
            weight: h,
            opacity: 0.7
          }
        );
        g.on("click", (u) => {
          if (this.onEdgeClick) {
            const m = u.latlng;
            this.onEdgeClick({
              edge: i,
              position: { x: m.lng, y: m.lat },
              originalEvent: u.originalEvent,
              view: "map2d"
            });
          }
        }), g.addTo(this.map), this.polylines.set(i.id, g);
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
   * タイルタイプボタンの表示を更新
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
   * エッジ表示ON/OFFボタンの表示を更新
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
   * Based on SunCalc's getMoonIllumination function
   */
  getMoonIllumination(t) {
    const i = this.julian(t) - 2451545, s = (357.5291 + 0.98560028 * i) * Math.PI / 180, o = (1.9148 * Math.sin(s) + 0.02 * Math.sin(2 * s) + 3e-4 * Math.sin(3 * s)) * Math.PI / 180, n = 102.9372 * Math.PI / 180, l = s + o + n + Math.PI, a = 23.4397 * Math.PI / 180, c = Math.atan2(
      Math.sin(l) * Math.cos(a) - Math.tan(0) * Math.sin(a),
      Math.cos(l)
    ), d = Math.asin(
      Math.sin(0) * Math.cos(a) + Math.cos(0) * Math.sin(a) * Math.sin(l)
    ), r = (218.316 + 13.176396 * i) * Math.PI / 180, h = (134.963 + 13.064993 * i) * Math.PI / 180, g = (93.272 + 13.22935 * i) * Math.PI / 180, u = r + 6.289 * Math.sin(h) * Math.PI / 180, m = 5.128 * Math.sin(g) * Math.PI / 180, y = Math.atan2(
      Math.sin(u) * Math.cos(a) - Math.tan(m) * Math.sin(a),
      Math.cos(u)
    ), p = Math.asin(
      Math.sin(m) * Math.cos(a) + Math.cos(m) * Math.sin(a) * Math.sin(u)
    ), f = 385001 - 20905 * Math.cos(h), w = 149598e3, E = Math.acos(
      Math.sin(d) * Math.sin(p) + Math.cos(d) * Math.cos(p) * Math.cos(c - y)
    ), b = Math.atan2(
      w * Math.sin(E),
      f - w * Math.cos(E)
    ), B = Math.atan2(
      Math.cos(d) * Math.sin(c - y),
      Math.sin(d) * Math.cos(p) - Math.cos(d) * Math.sin(p) * Math.cos(c - y)
    );
    return {
      fraction: (1 + Math.cos(b)) / 2,
      phase: 0.5 + 0.5 * b * (B < 0 ? -1 : 1) / Math.PI,
      angle: B
    };
  }
  getMoonPhase(t) {
    const i = this.getMoonIllumination(t).phase;
    return Math.floor(i * 8) % 8;
  }
  /**
   * Get moon phase emoji or SVG
   */
  getMoonPhaseIcon(t, e = 16) {
    const s = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"][t] || "🌑";
    return `<span style="font-size: ${e}px; line-height: 1;">${s}</span>`;
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
   * This method is based on SunCalc's internal moonCoords function.
   */
  calculateMoonPosition(t, e, i) {
    try {
      const s = this.julian(t), o = s - 2451545, n = (218.316 + 13.176396 * o) * Math.PI / 180, l = (134.963 + 13.064993 * o) * Math.PI / 180, a = (93.272 + 13.22935 * o) * Math.PI / 180, c = n + 6.289 * Math.sin(l) * Math.PI / 180, d = 5.128 * Math.sin(a) * Math.PI / 180, r = 23.4397 * Math.PI / 180, h = Math.atan2(
        Math.sin(c) * Math.cos(r) - Math.tan(d) * Math.sin(r),
        Math.cos(c)
      ), g = Math.asin(
        Math.sin(d) * Math.cos(r) + Math.cos(d) * Math.sin(r) * Math.sin(c)
      ), m = this.GMST(s) * Math.PI / 12, y = g;
      let p = h - m;
      p = (p + Math.PI) % (2 * Math.PI) - Math.PI;
      const f = y * 180 / Math.PI, w = p * 180 / Math.PI;
      return [f, w];
    } catch {
      return null;
    }
  }
  /**
   * Update moon marker on map
   */
  updateMoonMarker() {
    if (!this.map || !this.Leaflet || (this.moonMarker && (this.map.removeLayer(this.moonMarker), this.moonMarker = null), !this.moonEnabled) || !this.timeISO)
      return;
    const t = new Date(this.timeISO);
    let e = this.calculateMoonPosition(t, 0, 0);
    if (!e)
      return;
    const s = this.map.getCenter().lng;
    let o = 1 / 0, n = -1 / 0, l = !1;
    for (const [r, h] of this.markers.entries()) {
      const u = h.getLatLng().lng;
      o = Math.min(o, u), n = Math.max(n, u), l = !0;
    }
    if (l) {
      const r = e[1], h = Math.abs(r - s), g = Math.abs(r + 360 - s), u = Math.abs(r - 360 - s);
      g < h && g < u ? e[1] = r + 360 : u < h && u < g && (e[1] = r - 360), n - o > 180 && (e[1] < 0 && s > 0 ? e[1] = e[1] + 360 : e[1] > 0 && s < 0 && (e[1] = e[1] - 360));
    }
    const a = this.getMoonPhase(t), c = this.getMoonPhaseIcon(a, 24), d = this.Leaflet.divIcon({
      html: c,
      className: "relatos-moon-marker",
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    });
    this.moonMarker = this.Leaflet.marker([e[0], e[1]], { icon: d }), this.moonMarker.addTo(this.map);
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
   * カメラを調整してすべてのノードが表示されるようにする
   */
  fitToNodes() {
    if (!this.map || !this.Leaflet || this.nodes.length === 0)
      return;
    const t = this.nodes.filter((d) => {
      if (!d.coordinates || !Array.isArray(d.coordinates) || d.coordinates.length !== 2) return !1;
      const [r, h] = d.coordinates;
      return Number.isFinite(r) && Number.isFinite(h);
    }), e = this.nodes.filter((d) => {
      if (!d.coordinates || !Array.isArray(d.coordinates) || d.coordinates.length !== 2) return !0;
      const [r, h] = d.coordinates;
      return !Number.isFinite(r) || !Number.isFinite(h);
    }), i = [], s = [];
    if (t.forEach((d) => {
      if (d.coordinates && d.coordinates.length === 2) {
        const [r, h] = d.coordinates;
        Number.isFinite(r) && Number.isFinite(h) && (i.push(r), s.push(h));
      }
    }), e.length > 0) {
      const u = Math.ceil(Math.sqrt(e.length)), y = 50 / (Math.ceil(e.length / u) + 1), p = 32 / (u + 1);
      e.forEach((f, w) => {
        const E = Math.floor(w / u), b = w % u, B = -50 + (E + 1) * y, C = -32 + (b + 1) * p;
        i.push(B), s.push(C);
      });
    }
    if (i.length === 0)
      return;
    const o = Math.min(...i), n = Math.max(...i), l = Math.min(...s), a = Math.max(...s), c = this.Leaflet.latLngBounds(
      [o, l],
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
function Z(M, t = {}) {
  D();
  let e;
  if (typeof M == "string") {
    const r = document.querySelector(M);
    if (!r || !(r instanceof HTMLElement))
      throw new Error(`Container element not found: ${M}`);
    e = r;
  } else
    e = M;
  const i = t.enabledViews || ["graph", "map2d", "globe3d"], s = t.initialView || (i.includes("map2d") ? "map2d" : i[0]), o = t.graph?.mode || "view", n = t.graph?.editable || !1, l = t.tileServers, a = new G(e, i);
  t.time && a.setTime(t.time), typeof t.enableLighting == "boolean" && a.setLightingEnabled(t.enableLighting), t.tables && a.setTableOptions(t.tables), t.events?.onNodeClick && a.setOnNodeClickCallback(t.events.onNodeClick);
  const c = t.events?.onNodeClick ? (r) => {
    t.events.onNodeClick(r), a.highlightNodeRow(r.node.id);
  } : void 0, d = (r) => {
    t.events?.onEdgeClick && t.events.onEdgeClick(r), a.highlightEdgeRow(r.edge.id);
  };
  if (i.includes("graph")) {
    const r = document.createElement("div");
    r.style.width = "100%", r.style.height = "100%", a.getViewContainer().appendChild(r);
    const h = new U(
      r,
      c || t.events?.onNodeClick,
      t.events?.onSave,
      n,
      d
    );
    h.setModeChangeCallback(() => {
      a.updateEditToggleButton(), a.updateGraphButtons();
    }), h.setAlwaysShowEdgesChangeCallback((g) => {
      a.setAlwaysShowEdges(g);
    }), h.setGraphButtonsUpdateCallback(() => {
      a.updateGraphButtons();
    }), h.setMode(o), t.data && h.setData(t.data.nodes, t.data.edges), a.registerView("graph", h);
  }
  if (i.includes("map2d") && t.loaders?.leaflet) {
    const r = document.createElement("div");
    r.style.width = "100%", r.style.height = "100%", a.getViewContainer().appendChild(r);
    const h = new q(
      r,
      c || t.events?.onNodeClick,
      t.loaders.leaflet,
      l,
      t.map2d,
      d
    );
    h.setAlwaysShowEdgesChangeCallback((g) => {
      a.setAlwaysShowEdges(g);
    }), h.setLightingChangeCallback((g) => {
      a.setLightingEnabled(g);
    }), t.data && h.setData(t.data.nodes, t.data.edges), a.registerView("map2d", h);
  }
  if (i.includes("globe3d") && t.loaders?.cesium)
    try {
      const r = document.createElement("div");
      r.style.width = "100%", r.style.height = "100%", a.getViewContainer().appendChild(r);
      const h = new j(
        r,
        c || t.events?.onNodeClick,
        t.loaders.cesium,
        t.globe3d ? {
          customTileUrl: t.globe3d.customTileUrl,
          customTileUrls: t.globe3d.customTileUrls
        } : void 0,
        l,
        d
      );
      h.setAlwaysShowEdgesChangeCallback((g) => {
        a.setAlwaysShowEdges(g);
      }), h.setLightingChangeCallback((g) => {
        a.setLightingEnabled(g);
      }), t.data && h.setData(t.data.nodes, t.data.edges), a.registerView("globe3d", h);
    } catch {
    }
  return a.setInitialView(s), t.data && a.setData(t.data.nodes, t.data.edges), {
    setData(r) {
      const h = a.getView("graph");
      h && h.setData(r.nodes, r.edges);
      const g = a.getView("map2d");
      g && g.setData(r.nodes, r.edges);
      const u = a.getView("globe3d");
      u && u.setData(r.nodes, r.edges), a.setData(r.nodes, r.edges);
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
      const h = a.getView("graph");
      h && h.setMode(r);
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
      const h = a.getView("graph");
      h && h.selectNode && h.selectNode(r);
      const g = a.getView("map2d");
      g && g.selectNode && g.selectNode(r);
      const u = a.getView("globe3d");
      u && u.selectNode && u.selectNode(r);
    },
    setTime(r) {
      a.setTime(r);
    },
    setLighting(r) {
      a.setLightingEnabled(r);
    }
  };
}
export {
  Z as createRelatosViewer
};
