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

import { createRelatosViewer } from '../../src/index';
import type { Node, Edge, Group } from '../../src/types/data';
import type { SavePayload } from '../../src/types/events';

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
 * Get nodes without position information (for auto-layout)
 */
function getNodesWithoutLayout(nodes: Node[]): Node[] {
  return nodes.map(node => {
    const { position, ...rest } = node as any;
    return rest;
  });
}

/**
 * Get groups without layout information (for auto-layout)
 */
function getGroupsWithoutLayout(groups: Group[]): Group[] {
  return groups.map(group => {
    const { layout, ...rest } = group;
    return rest;
  });
}

/**
 * Get edges without anchor and bend information (for auto-layout)
 */
function getEdgesWithoutLayout(edges: Edge[]): Edge[] {
  return edges.map(edge => {
    const { anchors, bends, ...rest } = edge;
    return rest;
  });
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

// Sample network traffic data
// IP addresses in different locations with traffic flows

// Nodes: IP addresses
const nodes = [
  // USA > California > San Francisco
  {
    id: 'ip-192-0-2-1',
    label: '192.0.2.1',
    coordinates: [37.7749, -122.4194], // San Francisco
    info: {
      ip: '192.0.2.1',
      country: 'USA',
      region: 'California',
      city: 'San Francisco',
      latitude: '37.7749',
      longitude: '-122.4194',
    },
    style: {
      color: '#E3F2FD',
      borderColor: '#1976D2',
      width: 140,
      height: 50,
    },
  },
  // USA > California > Los Angeles
  {
    id: 'ip-192-0-2-2',
    label: '192.0.2.2',
    coordinates: [34.0522, -118.2437], // Los Angeles
    info: {
      ip: '192.0.2.2',
      country: 'USA',
      region: 'California',
      city: 'Los Angeles',
      latitude: '34.0522',
      longitude: '-118.2437',
    },
    style: {
      color: '#E3F2FD',
      borderColor: '#1976D2',
      width: 140,
      height: 50,
    },
  },
  // USA > California > Los Angeles > Beverly Hills
  {
    id: 'ip-192-0-2-4',
    label: '192.0.2.4',
    coordinates: [34.0736, -118.4004], // Beverly Hills
    info: {
      ip: '192.0.2.4',
      country: 'USA',
      region: 'California',
      city: 'Los Angeles',
      district: 'Beverly Hills',
      latitude: '34.0736',
      longitude: '-118.4004',
    },
    style: {
      color: '#E3F2FD',
      borderColor: '#1976D2',
      width: 140,
      height: 50,
    },
  },
  // USA > Florida > Miami
  {
    id: 'ip-192-0-2-3',
    label: '192.0.2.3',
    coordinates: [25.7617, -80.1918], // Miami
    info: {
      ip: '192.0.2.3',
      country: 'USA',
      region: 'Florida',
      city: 'Miami',
      latitude: '25.7617',
      longitude: '-80.1918',
    },
    style: {
      color: '#E3F2FD',
      borderColor: '#1976D2',
      width: 140,
      height: 50,
    },
  },
  // Japan > Tokyo > Shibuya
  {
    id: 'ip-198-51-100-1',
    label: '198.51.100.1',
    coordinates: [35.6580, 139.7016], // Shibuya, Tokyo
    info: {
      ip: '198.51.100.1',
      country: 'Japan',
      region: 'Tokyo',
      city: 'Shibuya',
      latitude: '35.6580',
      longitude: '139.7016',
    },
    style: {
      color: '#FFF3E0',
      borderColor: '#F57C00',
      width: 140,
      height: 50,
    },
  },
  // UK > England > London
  {
    id: 'ip-203-0-113-1',
    label: '203.0.113.1',
    coordinates: [51.5074, -0.1278], // London
    info: {
      ip: '203.0.113.1',
      country: 'UK',
      region: 'England',
      city: 'London',
      latitude: '51.5074',
      longitude: '-0.1278',
    },
    style: {
      color: '#F3E5F5',
      borderColor: '#7B1FA2',
      width: 140,
      height: 50,
    },
  },
  // Network nodes (no group, no coordinates - will be placed in non-geo area)
  {
    id: 'net-192-0-2-0',
    label: '192.0.2.0/24',
    info: {
      network: '192.0.2.0/24',
      type: 'TEST-NET-1',
      description: 'Documentation/Test Network',
    },
    style: {
      color: '#E8F5E9',
      borderColor: '#4CAF50',
      width: 160,
      height: 50,
    },
  },
  {
    id: 'net-198-51-100-0',
    label: '198.51.100.0/24',
    info: {
      network: '198.51.100.0/24',
      type: 'TEST-NET-2',
      description: 'Documentation/Test Network',
    },
    style: {
      color: '#E8F5E9',
      borderColor: '#4CAF50',
      width: 160,
      height: 50,
    },
  },
  {
    id: 'net-203-0-113-0',
    label: '203.0.113.0/24',
    info: {
      network: '203.0.113.0/24',
      type: 'TEST-NET-3',
      description: 'Documentation/Test Network',
    },
    style: {
      color: '#E8F5E9',
      borderColor: '#4CAF50',
      width: 160,
      height: 50,
    },
  },
];

// Edges: Network connections
const edges = [
  // IP addresses to their networks
  {
    id: 'edge-1',
    src: 'ip-192-0-2-1',
    dst: 'net-192-0-2-0',
    relType: 'belongs_to',
    info: {
      fromLabel: '192.0.2.1',
      toLabel: '192.0.2.0/24',
      relationship: 'belongs to',
    },
    style: {
      color: '#1976D2',
      weight: 2,
    },
  },
  {
    id: 'edge-2',
    src: 'ip-192-0-2-2',
    dst: 'net-192-0-2-0',
    relType: 'belongs_to',
    info: {
      fromLabel: '192.0.2.2',
      toLabel: '192.0.2.0/24',
      relationship: 'belongs to',
    },
    style: {
      color: '#1976D2',
      weight: 2,
    },
  },
  {
    id: 'edge-3',
    src: 'ip-192-0-2-4',
    dst: 'net-192-0-2-0',
    relType: 'belongs_to',
    info: {
      fromLabel: '192.0.2.4',
      toLabel: '192.0.2.0/24',
      relationship: 'belongs to',
    },
    style: {
      color: '#1976D2',
      weight: 2,
    },
  },
  {
    id: 'edge-4',
    src: 'ip-192-0-2-3',
    dst: 'net-192-0-2-0',
    relType: 'belongs_to',
    info: {
      fromLabel: '192.0.2.3',
      toLabel: '192.0.2.0/24',
      relationship: 'belongs to',
    },
    style: {
      color: '#1976D2',
      weight: 2,
    },
  },
  {
    id: 'edge-5',
    src: 'ip-198-51-100-1',
    dst: 'net-198-51-100-0',
    relType: 'belongs_to',
    info: {
      fromLabel: '198.51.100.1',
      toLabel: '198.51.100.0/24',
      relationship: 'belongs to',
    },
    style: {
      color: '#F57C00',
      weight: 2,
    },
  },
  {
    id: 'edge-6',
    src: 'ip-203-0-113-1',
    dst: 'net-203-0-113-0',
    relType: 'belongs_to',
    info: {
      fromLabel: '203.0.113.1',
      toLabel: '203.0.113.0/24',
      relationship: 'belongs to',
    },
    style: {
      color: '#7B1FA2',
      weight: 2,
    },
  },
  // Network to network connections
  {
    id: 'edge-7',
    src: 'net-192-0-2-0',
    dst: 'net-198-51-100-0',
    relType: 'connection',
    info: {
      fromLabel: '192.0.2.0/24',
      toLabel: '198.51.100.0/24',
      relationship: 'connected',
    },
    style: {
      color: '#4CAF50',
      weight: 4,
    },
  },
  {
    id: 'edge-8',
    src: 'net-192-0-2-0',
    dst: 'net-203-0-113-0',
    relType: 'connection',
    info: {
      fromLabel: '192.0.2.0/24',
      toLabel: '203.0.113.0/24',
      relationship: 'connected',
    },
    style: {
      color: '#4CAF50',
      weight: 4,
    },
  },
];

// Groups: Multi-level hierarchy (Country > Region > City > District)
// Group structure:
// - Country (Lv1)
//   - Region (Lv2)
//     - City (Lv3)
//       - District (Lv4) - e.g., Beverly Hills
//         - IP nodes

const groups = [
  // USA > California > San Francisco
  // Parent groups only contain child groups, not descendant nodes
  {
    id: 'group-usa',
    label: 'USA',
    nodeIds: [], // Parent group: no direct nodes, only child groups
    meta: {
      level: 1,
      type: 'country',
    },
  },
  {
    id: 'group-california',
    label: 'California',
    nodeIds: [], // Parent group: no direct nodes, only child groups
    parentId: 'group-usa',
    meta: {
      level: 2,
      type: 'region',
    },
  },
  {
    id: 'group-sanfrancisco',
    label: 'San Francisco',
    nodeIds: ['ip-192-0-2-1'],
    parentId: 'group-california',
    meta: {
      level: 3,
      type: 'city',
    },
  },
  {
    id: 'group-losangeles',
    label: 'Los Angeles',
    nodeIds: ['ip-192-0-2-2'], // Direct node only (Beverly Hills is in child group)
    parentId: 'group-california',
    meta: {
      level: 3,
      type: 'city',
    },
  },
  // USA > California > Los Angeles > Beverly Hills (4-level hierarchy)
  {
    id: 'group-beverlyhills',
    label: 'Beverly Hills',
    nodeIds: ['ip-192-0-2-4'],
    parentId: 'group-losangeles',
    meta: {
      level: 4,
      type: 'district',
    },
  },
  // USA > Florida > Miami
  {
    id: 'group-florida',
    label: 'Florida',
    nodeIds: [], // Parent group: no direct nodes, only child groups
    parentId: 'group-usa',
    meta: {
      level: 2,
      type: 'region',
    },
  },
  {
    id: 'group-miami',
    label: 'Miami',
    nodeIds: ['ip-192-0-2-3'],
    parentId: 'group-florida',
    meta: {
      level: 3,
      type: 'city',
    },
  },
  // Japan > Tokyo > Shibuya
  {
    id: 'group-japan',
    label: 'Japan',
    nodeIds: [], // Parent group: no direct nodes, only child groups
    meta: {
      level: 1,
      type: 'country',
    },
  },
  {
    id: 'group-tokyo',
    label: 'Tokyo',
    nodeIds: [], // Parent group: no direct nodes, only child groups
    parentId: 'group-japan',
    meta: {
      level: 2,
      type: 'region',
    },
  },
  {
    id: 'group-shibuya',
    label: 'Shibuya',
    nodeIds: ['ip-198-51-100-1'],
    parentId: 'group-tokyo',
    meta: {
      level: 3,
      type: 'city',
    },
  },
  // UK > England > London
  {
    id: 'group-uk',
    label: 'UK',
    nodeIds: [], // Parent group: no direct nodes, only child groups
    meta: {
      level: 1,
      type: 'country',
    },
  },
  {
    id: 'group-england',
    label: 'England',
    nodeIds: [], // Parent group: no direct nodes, only child groups
    parentId: 'group-uk',
    meta: {
      level: 2,
      type: 'region',
    },
  },
  {
    id: 'group-london',
    label: 'London',
    nodeIds: ['ip-203-0-113-1'],
    parentId: 'group-england',
    meta: {
      level: 3,
      type: 'city',
    },
  },
];

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

// Load saved layouts before creating viewer
const { nodes: nodesWithLayout, edges: edgesWithLayout, groups: groupsWithLayout } = 
  loadLayouts(nodes, edges, groups);

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

// Display initial layout info
const initialLayoutInfo = extractLayoutInfo({
  nodes: nodesWithLayout,
  edges: edgesWithLayout,
  groups: groupsWithLayout,
});
setTimeout(() => {
  updateLayoutDisplay('initial-layout-json', initialLayoutInfo);
}, 0);

// Create viewer
const viewerInstance = createRelatosViewer('#viewer-container', {
  enabledViews: ['graph', 'map2d', 'globe3d'],
  initialView: 'graph',
  data: {
    nodes: nodesWithLayout,
    edges: edgesWithLayout,
    groups: groupsWithLayout,
  },
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
          <th>IP Address</th>
          <th>Country</th>
          <th>Region</th>
          <th>City</th>
          <th>District</th>
          <th>Latitude</th>
          <th>Longitude</th>
        </tr>
      `,
      format: `
        <td>{{label}}</td>
        <td>{{info.country}}</td>
        <td>{{info.region}}</td>
        <td>{{info.city}}</td>
        <td>{{info.district}}</td>
        <td>{{info.latitude}}</td>
        <td>{{info.longitude}}</td>
      `,
    },
    edges: {
      header: `
        <tr>
          <th>Source IP</th>
          <th>Destination IP</th>
          <th>Bytes</th>
          <th>Packets</th>
        </tr>
      `,
      format: `
        <td>{{info.fromLabel}}</td>
        <td>{{info.toLabel}}</td>
        <td>{{info.bytes}}</td>
        <td>{{info.packets}}</td>
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
        <td>{{meta.level}}</td>
        <td>{{meta.type}}</td>
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

    // Clear layout from LocalStorage
    clearLayoutFromStorage(nodes, edges, groups);

    // Set data without layout information to trigger auto-layout
    const resetNodes = getNodesWithoutLayout(nodes);
    const resetEdges = getEdgesWithoutLayout(edges);
    const resetGroups = getGroupsWithoutLayout(groups);
    
    viewerInstance.setData({
      nodes: resetNodes,
      edges: resetEdges,
      groups: resetGroups,
    });

    // Update initial layout display (now empty)
    const resetLayoutInfo = extractLayoutInfo({
      nodes: resetNodes,
      edges: resetEdges,
      groups: resetGroups,
    });
    updateLayoutDisplay('initial-layout-json', resetLayoutInfo);
    
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
