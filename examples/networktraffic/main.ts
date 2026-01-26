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
];

// Edges: Traffic flows
const edges = [
  {
    id: 'edge-1',
    src: 'ip-192-0-2-1',
    dst: 'ip-198-51-100-1',
    relType: 'traffic',
    info: {
      fromLabel: '192.0.2.1',
      toLabel: '198.51.100.1',
      bytes: '1.2 GB',
      packets: '15000',
    },
    style: {
      color: '#1976D2',
      weight: 8,
      label: '1.2 GB',
    },
  },
  {
    id: 'edge-2',
    src: 'ip-192-0-2-1',
    dst: 'ip-203-0-113-1',
    relType: 'traffic',
    info: {
      fromLabel: '192.0.2.1',
      toLabel: '203.0.113.1',
      bytes: '850 MB',
      packets: '12000',
    },
    style: {
      color: '#7B1FA2',
      weight: 6,
      label: '850 MB',
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

// Create viewer
const viewerInstance = createRelatosViewer('#viewer-container', {
  enabledViews: ['graph', 'map2d', 'globe3d'],
  initialView: 'graph',
  data: {
    nodes,
    edges,
    groups,
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
      // In a real application, you would send this to a server
      // to persist the layout changes
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
