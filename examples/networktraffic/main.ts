/**
 * Relatos Viewer Example - Network Traffic
 * Demonstrates 3-level hierarchical grouping (Country > Region > City)
 * with IP address nodes and traffic flow edges
 * 
 * Uses IP addresses from documentation/test ranges:
 * - 192.0.2.0/24 (TEST-NET-1)
 * - 198.51.100.0/24 (TEST-NET-2)
 * - 203.0.113.0/24 (TEST-NET-3)
 */

import { createRelatosViewer, exportRelat, importRelat } from '../../src/index';
import type { Node, Edge, Group } from '../../src/types/data';
import type { SavePayload } from '../../src/types/events';

/** Source of truth: relat text with all group/node/rel labels (id as "label" only; no layout). Nodes and edges first so labels are set before group parsing. */
const INITIAL_RELAT_TEXT = `ip-192-0-2-1 as "192.0.2.1"[color=#E3F2FD,border=#1976D2,lat=37.7749,lon=-122.4194,info.ip="192.0.2.1",info.country="USA",info.region="California",info.city="San Francisco"]
ip-192-0-2-2 as "192.0.2.2"[color=#E3F2FD,border=#1976D2,lat=34.0522,lon=-118.2437,info.ip="192.0.2.2",info.country="USA",info.region="California",info.city="Los Angeles"]
ip-192-0-2-4 as "192.0.2.4"[color=#E3F2FD,border=#1976D2,lat=34.0736,lon=-118.4004,info.ip="192.0.2.4",info.country="USA",info.region="California",info.city="Los Angeles",info.district="Beverly Hills"]
ip-192-0-2-3 as "192.0.2.3"[color=#E3F2FD,border=#1976D2,lat=25.7617,lon=-80.1918,info.ip="192.0.2.3",info.country="USA",info.region="Florida",info.city="Miami"]
ip-198-51-100-1 as "198.51.100.1"[color=#FFF3E0,border=#F57C00,lat=35.658,lon=139.7016,info.ip="198.51.100.1",info.country="Japan",info.region="Tokyo",info.city="Shibuya"]
ip-203-0-113-1 as "203.0.113.1"[color=#F3E5F5,border=#7B1FA2,lat=51.5074,lon=-0.1278,info.ip="203.0.113.1",info.country="UK",info.region="England",info.city="London"]
net-192-0-2-0 as "192.0.2.0/24"[color=#E8F5E9,border=#4CAF50,info.network="192.0.2.0/24",info.type="TEST-NET-1",info.description="Documentation/Test Network"]
net-198-51-100-0 as "198.51.100.0/24"[color=#E8F5E9,border=#4CAF50,info.network="198.51.100.0/24",info.type="TEST-NET-2",info.description="Documentation/Test Network"]
net-203-0-113-0 as "203.0.113.0/24"[color=#E8F5E9,border=#4CAF50,info.network="203.0.113.0/24",info.type="TEST-NET-3",info.description="Documentation/Test Network"]
ip-192-0-2-1-->net-192-0-2-0 : belongs_to [color=#1976D2,weight=2,info.fromLabel="192.0.2.1",info.toLabel="192.0.2.0/24",info.relationship="belongs to"]
ip-192-0-2-2-->net-192-0-2-0 : belongs_to [color=#1976D2,weight=2,info.fromLabel="192.0.2.2",info.toLabel="192.0.2.0/24",info.relationship="belongs to"]
ip-192-0-2-4-->net-192-0-2-0 : belongs_to [color=#1976D2,weight=2,info.fromLabel="192.0.2.4",info.toLabel="192.0.2.0/24",info.relationship="belongs to"]
ip-192-0-2-3-->net-192-0-2-0 : belongs_to [color=#1976D2,weight=2,info.fromLabel="192.0.2.3",info.toLabel="192.0.2.0/24",info.relationship="belongs to"]
ip-198-51-100-1-->net-198-51-100-0 : belongs_to [color=#F57C00,weight=2,info.fromLabel="198.51.100.1",info.toLabel="198.51.100.0/24",info.relationship="belongs to"]
ip-203-0-113-1-->net-203-0-113-0 : belongs_to [color=#7B1FA2,weight=2,info.fromLabel="203.0.113.1",info.toLabel="203.0.113.0/24",info.relationship="belongs to"]
net-192-0-2-0-->net-198-51-100-0 : connection [color=#4CAF50,weight=4,info.fromLabel="192.0.2.0/24",info.toLabel="198.51.100.0/24",info.relationship="connected"]
net-192-0-2-0-->net-203-0-113-0 : connection [color=#4CAF50,weight=4,info.fromLabel="192.0.2.0/24",info.toLabel="203.0.113.0/24",info.relationship="connected"]
group-usa as "USA" { group-california as "California" { group-sanfrancisco as "San Francisco" { ip-192-0-2-1 }, group-losangeles as "Los Angeles" { ip-192-0-2-2, group-beverlyhills as "Beverly Hills" { ip-192-0-2-4 } } }, group-florida as "Florida" { group-miami as "Miami" { ip-192-0-2-3 } } }
group-japan as "Japan" { group-tokyo as "Tokyo" { group-shibuya as "Shibuya" { ip-198-51-100-1 } } }
group-uk as "UK" { group-england as "England" { group-london as "London" { ip-203-0-113-1 } } }`;

// Layout storage utilities
// Key structure: <ページURLハッシュ>_<オブジェクトID>_<全オブジェクトIDのSUMハッシュ>

/**
 * Calculate hash value from string
 */
function hashString(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash).toString(36);
}

/**
 * Get page URL hash (app ID equivalent)
 */
function getPageUrlHash(): string {
  return hashString(window.location.href);
}

/**
 * Calculate hash of all object IDs (nodes, edges, groups)
 */
function calculateAllIdsHash(nodes: Node[], edges: Edge[], groups: Group[]): string {
  const allIds: string[] = [
    ...nodes.map(n => n.id),
    ...edges.map(e => e.id),
    ...groups.map(g => g.id)
  ].sort(); // Sort to ensure consistency
  return hashString(allIds.join(','));
}

/**
 * Generate storage key for an object
 */
function generateStorageKey(objectId: string, allIdsHash: string): string {
  const pageUrlHash = getPageUrlHash();
  return `relatos_layout_${pageUrlHash}_${objectId}_${allIdsHash}`;
}

/**
 * Save layout to LocalStorage
 */
function saveLayout(payload: SavePayload): void {
  try {
    const allIdsHash = calculateAllIdsHash(
      payload.nodes,
      payload.edges,
      payload.groups || []
    );

    // Save node layouts
    for (const node of payload.nodes) {
      const key = generateStorageKey(node.id, allIdsHash);
      const value: {
        position?: { x: number; y: number };
        style?: { width?: number; height?: number };
      } = {};
      
      if (node.position) {
        value.position = node.position;
      }
      
      // Node.style is not in the type definition but is used in GraphView
      const nodeWithStyle = node as any;
      if (nodeWithStyle.style) {
        value.style = {};
        if (nodeWithStyle.style.width !== undefined) {
          value.style.width = nodeWithStyle.style.width;
        }
        if (nodeWithStyle.style.height !== undefined) {
          value.style.height = nodeWithStyle.style.height;
        }
      }
      
      localStorage.setItem(key, JSON.stringify(value));
    }

    // Save group layouts
    if (payload.groups) {
      for (const group of payload.groups) {
        const key = generateStorageKey(group.id, allIdsHash);
        const value: {
          layout?: {
            position: { x: number; y: number };
            size: { width: number; height: number };
          };
        } = {};
        
        if (group.layout) {
          value.layout = group.layout;
        }
        
        localStorage.setItem(key, JSON.stringify(value));
      }
    }

    // Save edge layouts
    for (const edge of payload.edges) {
      const key = generateStorageKey(edge.id, allIdsHash);
      const value: {
        srcAnchor?: { side: string; t: number };
        dstAnchor?: { side: string; t: number };
        bends?: Array<{ x: number; y: number }>;
      } = {};
      
      // GraphView uses srcAnchor/dstAnchor with { side: NodeSide, t: number } format
      const edgeAny = edge as any;
      if (edgeAny.srcAnchor) {
        value.srcAnchor = {
          side: edgeAny.srcAnchor.side,
          t: edgeAny.srcAnchor.t
        };
      }
      if (edgeAny.dstAnchor) {
        value.dstAnchor = {
          side: edgeAny.dstAnchor.side,
          t: edgeAny.dstAnchor.t
        };
      }
      
      if (edge.bends) {
        value.bends = edge.bends;
      }
      
      localStorage.setItem(key, JSON.stringify(value));
    }
  } catch (error) {
    console.error('Failed to save layout to LocalStorage:', error);
  }
}

/**
 * Clear all layout data from LocalStorage for the current diagram
 */
function clearLayoutFromStorage(nodes: Node[], edges: Edge[], groups: Group[]): void {
  try {
    const allIdsHash = calculateAllIdsHash(nodes, edges, groups);

    // Remove node layouts
    for (const node of nodes) {
      const key = generateStorageKey(node.id, allIdsHash);
      localStorage.removeItem(key);
    }

    // Remove group layouts
    for (const group of groups) {
      const key = generateStorageKey(group.id, allIdsHash);
      localStorage.removeItem(key);
    }

    // Remove edge layouts
    for (const edge of edges) {
      const key = generateStorageKey(edge.id, allIdsHash);
      localStorage.removeItem(key);
    }

    console.log('Layout data cleared from LocalStorage');
  } catch (error) {
    console.error('Failed to clear layout from LocalStorage:', error);
  }
}

/**
 * Load layouts from LocalStorage and apply to objects
 */
function loadLayouts(
  nodes: Node[],
  edges: Edge[],
  groups: Group[]
): {
  nodes: Node[];
  edges: Edge[];
  groups: Group[];
} {
  try {
    const allIdsHash = calculateAllIdsHash(nodes, edges, groups);

    // Load node layouts
    const loadedNodes = nodes.map(node => {
      const key = generateStorageKey(node.id, allIdsHash);
      const stored = localStorage.getItem(key);
      if (stored) {
        try {
          const layout = JSON.parse(stored);
          const loadedNode: Node = { ...node };
          
          if (layout.position) {
            loadedNode.position = layout.position;
          }
          
          // Node.style is not in the type definition but is used in GraphView
          const loadedNodeWithStyle = loadedNode as any;
          if (layout.style) {
            loadedNodeWithStyle.style = {
              ...(node as any).style,
              ...(layout.style.width !== undefined ? { width: layout.style.width } : {}),
              ...(layout.style.height !== undefined ? { height: layout.style.height } : {})
            };
          }
          
          return loadedNode;
        } catch (e) {
          console.warn(`Failed to parse layout for node ${node.id}:`, e);
        }
      }
      return node;
    });

    // Load group layouts
    const loadedGroups = groups.map(group => {
      const key = generateStorageKey(group.id, allIdsHash);
      const stored = localStorage.getItem(key);
      if (stored) {
        try {
          const layout = JSON.parse(stored);
          const loadedGroup: Group = { ...group };
          
          if (layout.layout) {
            loadedGroup.layout = layout.layout;
          }
          
          return loadedGroup;
        } catch (e) {
          console.warn(`Failed to parse layout for group ${group.id}:`, e);
        }
      }
      return group;
    });

    // Load edge layouts
    const loadedEdges = edges.map(edge => {
      const key = generateStorageKey(edge.id, allIdsHash);
      const stored = localStorage.getItem(key);
      if (stored) {
        try {
          const layout = JSON.parse(stored);
          // GraphView uses srcAnchor/dstAnchor with { side: NodeSide, t: number } format
          // We need to cast to any since the Edge type from data.ts doesn't have these properties
          const loadedEdge = { ...edge } as any;
          
          if (layout.srcAnchor) {
            loadedEdge.srcAnchor = {
              side: layout.srcAnchor.side as 'top' | 'right' | 'bottom' | 'left',
              t: layout.srcAnchor.t
            };
          }
          if (layout.dstAnchor) {
            loadedEdge.dstAnchor = {
              side: layout.dstAnchor.side as 'top' | 'right' | 'bottom' | 'left',
              t: layout.dstAnchor.t
            };
          }
          
          if (layout.bends) {
            loadedEdge.bends = layout.bends;
          }
          
          return loadedEdge as Edge;
        } catch (e) {
          console.warn(`Failed to parse layout for edge ${edge.id}:`, e);
        }
      }
      return edge;
    });

    return {
      nodes: loadedNodes,
      edges: loadedEdges,
      groups: loadedGroups
    };
  } catch (error) {
    console.error('Failed to load layouts from LocalStorage:', error);
    return { nodes, edges, groups };
  }
}

// Leaflet loader function
async function loadLeaflet(): Promise<any> {
  try {
    const leafletModule = await import('leaflet');
    
    let Leaflet = leafletModule;
    
    if (leafletModule.default && typeof leafletModule.default === 'object') {
      Leaflet = leafletModule.default;
    }
    
    if (!Leaflet || typeof Leaflet !== 'object') {
      throw new Error('Failed to load Leaflet: Invalid module structure');
    }
    
    if (!Leaflet.map) {
      throw new Error('Failed to load Leaflet: map function not found');
    }
    
    // Dynamically load Leaflet CSS
    if (typeof document !== 'undefined') {
      const linkId = 'leaflet-css';
      if (!document.getElementById(linkId)) {
        const link = document.createElement('link');
        link.id = linkId;
        link.rel = 'stylesheet';
        link.href = '/node_modules/leaflet/dist/leaflet.css';
        document.head.appendChild(link);
      }
    }
    
    return Leaflet;
  } catch (error) {
    console.error('Failed to load Leaflet:', error);
    throw new Error(`Leaflet is not installed or failed to load: ${error instanceof Error ? error.message : String(error)}`);
  }
}

// Cesium loader function
async function loadCesium(): Promise<any> {
  try {
    if (typeof window !== 'undefined') {
      const cesiumBaseUrl = '/node_modules/cesium/Build/Cesium/';
      (window as any).CESIUM_BASE_URL = cesiumBaseUrl;
    }

    const cesiumModule = await import('cesium');
    
    let Cesium = cesiumModule;
    
    if (cesiumModule.default && typeof cesiumModule.default === 'object') {
      Cesium = cesiumModule.default;
    }
    
    if (!Cesium || typeof Cesium !== 'object' || !Cesium.Viewer) {
      Cesium = cesiumModule as any;
    }
    
    if (!Cesium || typeof Cesium !== 'object') {
      throw new Error('Failed to load Cesium: Invalid module structure');
    }
    
    if (!Cesium.Viewer) {
      throw new Error('Failed to load Cesium: Viewer class not found');
    }
    
    return Cesium;
  } catch (error) {
    console.error('Failed to load Cesium:', error);
    throw new Error(`Cesium is not installed or failed to load: ${error instanceof Error ? error.message : String(error)}`);
  }
}

// Parse base relat and apply saved layouts (if any)
const baseData = importRelat(INITIAL_RELAT_TEXT);
const { nodes: nodesWithLayout, edges: edgesWithLayout, groups: groupsWithLayout } =
  loadLayouts(baseData.nodes, baseData.edges, baseData.groups);

/** Relat string to pass to viewer: base + layout when present */
const initialRelatForViewer = exportRelat(nodesWithLayout, edgesWithLayout, groupsWithLayout, { includeLayout: true });

/**
 * Extract layout information from data for display
 */
function extractLayoutInfo(data: {
  nodes: Node[];
  edges: Edge[];
  groups: Group[];
}): object {
  return {
    nodes: data.nodes.map(node => ({
      id: node.id,
      position: node.position || null,
    })).filter(n => n.position !== null),
    edges: data.edges.map(edge => {
      const edgeAny = edge as any;
      return {
        id: edge.id,
        srcAnchor: edgeAny.srcAnchor || null,
        dstAnchor: edgeAny.dstAnchor || null,
        bends: edge.bends || null,
      };
    }).filter(e => e.srcAnchor !== null || e.dstAnchor !== null || e.bends !== null),
    groups: data.groups.map(group => ({
      id: group.id,
      layout: group.layout || null,
    })).filter(g => g.layout !== null),
  };
}

/**
 * Update layout info display
 */
function updateLayoutDisplay(elementId: string, data: object): void {
  const element = document.getElementById(elementId);
  if (element) {
    const isEmpty = Object.values(data).every(
      arr => Array.isArray(arr) && arr.length === 0
    );
    if (isEmpty) {
      element.innerHTML = '<span class="empty-state">No layout information (auto-layout will be used)</span>';
    } else {
      element.textContent = JSON.stringify(data, null, 2);
    }
  }
}

/**
 * Update initial relat text display (source const, no layout)
 */
function updateInitialRelatDisplay(relatText: string): void {
  const element = document.getElementById('initial-layout-json');
  if (element) {
    if (!relatText || relatText.trim() === '') {
      element.innerHTML = '<span class="empty-state">No relat text</span>';
    } else {
      element.textContent = relatText;
    }
  }
}

setTimeout(() => {
  updateInitialRelatDisplay(INITIAL_RELAT_TEXT);
}, 0);

// Create viewer (data from INITIAL_RELAT_TEXT + saved layout when present)
const viewerInstance = createRelatosViewer('#viewer-container', {
  enabledViews: ['graph', 'map2d', 'globe3d'],
  initialView: 'graph',
  initialRelat: initialRelatForViewer,
  loaders: {
    leaflet: loadLeaflet,
    cesium: loadCesium,
  },
  graph: {
    mode: 'view',
    editable: true,
  },
    tables: {
    nodes: {
      header: `
        <tr>
          <th>Color</th>
          <th>IP Address</th>
          <th>Country</th>
          <th>Region</th>
          <th>City</th>
          <th>District</th>
          <th>Network</th>
          <th>Type</th>
        </tr>
      `,
      format: `
        <td><span class="color-indicator" style="background-color: {{style.color}}; border: 2px solid {{style.borderColor}};"></span></td>
        <td>{{label}}</td>
        <td>{{info.country}}</td>
        <td>{{info.region}}</td>
        <td>{{info.city}}</td>
        <td>{{info.district}}</td>
        <td>{{info.network}}</td>
        <td>{{info.type}}</td>
      `,
    },
    edges: {
      header: `
        <tr>
          <th>Color</th>
          <th>Source</th>
          <th>Destination</th>
          <th>Relationship</th>
          <th>Weight</th>
        </tr>
      `,
      format: `
        <td><span class="color-indicator" style="background-color: {{style.color}};"></span></td>
        <td>{{info.fromLabel}}</td>
        <td>{{info.toLabel}}</td>
        <td>{{info.relationship}}</td>
        <td>{{style.weight}}</td>
      `,
    },
    groups: {
      header: `
        <tr>
          <th>Group Label</th>
          <th>Level</th>
          <th>Type</th>
          <th>Node Count</th>
          <th>Parent Group</th>
        </tr>
      `,
      format: `
        <td>{{label}}</td>
        <td>{{info.level}}</td>
        <td>{{info.type}}</td>
        <td>{{nodeCount}}</td>
        <td>{{parentId}}</td>
      `,
    },
  },
  events: {
    onNodeClick: (event) => {
      console.log('Node clicked:', event.node.id);
    },
    onSave: (payload) => {
      console.log('Save payload:', payload);
      // Save layout to LocalStorage
      saveLayout(payload);
      
      // Update saved layout display
      const savedLayoutInfo = extractLayoutInfo({
        nodes: payload.nodes,
        edges: payload.edges,
        groups: payload.groups || [],
      });
      updateLayoutDisplay('saved-layout-json', savedLayoutInfo);
    },
  },
});

// Fit view to show all nodes after auto-layout
setTimeout(() => {
  window.dispatchEvent(new Event('resize'));
  
  setTimeout(() => {
    if (viewerInstance) {
      const container = document.getElementById('viewer-container');
      if (container) {
        viewerInstance.resize();
      }
    }
  }, 200);
}, 100);

// Reset Layout button handler
const resetButton = document.getElementById('reset-layout-btn');
if (resetButton) {
  resetButton.addEventListener('click', () => {
    // Confirm reset
    if (!confirm('Reset layout to auto-calculated positions? All manual layout changes will be lost.')) {
      return;
    }

    // Clear layout from LocalStorage (use base data from INITIAL_RELAT_TEXT)
    const resetBaseData = importRelat(INITIAL_RELAT_TEXT);
    clearLayoutFromStorage(resetBaseData.nodes, resetBaseData.edges, resetBaseData.groups);

    // Set base relat (no layout) to trigger auto-layout
    viewerInstance.importRelat(INITIAL_RELAT_TEXT);

    // Initial relat display is unchanged (always shows INITIAL_RELAT_TEXT)
    updateInitialRelatDisplay(INITIAL_RELAT_TEXT);

    // Clear saved layout display
    const savedElement = document.getElementById('saved-layout-json');
    if (savedElement) {
      savedElement.innerHTML = '<span class="empty-state">Layout reset - no changes yet</span>';
    }

    // Trigger resize to fit view
    setTimeout(() => {
      viewerInstance.resize();
    }, 100);

    console.log('Layout reset to auto-calculated positions');
  });
}

// Resizer functionality
const resizer = document.getElementById('resizer');
const layoutInfoSection = document.getElementById('layout-info-section');

if (resizer && layoutInfoSection) {
  let isResizing = false;
  let startY = 0;
  let startHeight = 0;

  resizer.addEventListener('mousedown', (e: MouseEvent) => {
    isResizing = true;
    startY = e.clientY;
    startHeight = layoutInfoSection.offsetHeight;
    
    document.body.classList.add('resizing');
    resizer.classList.add('dragging');
    
    e.preventDefault();
  });

  document.addEventListener('mousemove', (e: MouseEvent) => {
    if (!isResizing) return;
    
    const deltaY = startY - e.clientY;
    const newHeight = Math.min(
      Math.max(startHeight + deltaY, 100), // min height: 100px
      window.innerHeight * 0.5 // max height: 50vh
    );
    
    layoutInfoSection.style.height = `${newHeight}px`;
    
    // Trigger Relatos resize
    viewerInstance.resize();
  });

  document.addEventListener('mouseup', () => {
    if (!isResizing) return;
    
    isResizing = false;
    document.body.classList.remove('resizing');
    resizer.classList.remove('dragging');
    
    // Final resize after drag ends
    viewerInstance.resize();
  });
}
