/**
 * Relatos Viewer Example - Basic
 * Demonstrates Graph, Map2D, and Globe3D views with edit mode and table display
 * Uses default NaturalEarthII tiles (airgapped environment compatible)
 */

import { createRelatosViewer } from '../../src/index';

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

// Create viewer with sample data
// Demonstrates all standard node and edge parameters (excluding info field)
// Map2D is also enabled (uses default NaturalEarthII tiles when no tileServers are specified)
const viewer = createRelatosViewer('#viewer-container', {
  enabledViews: ['graph', 'map2d', 'globe3d'],
  initialView: 'graph',
  data: {
    nodes: [
      { 
        id: '1', 
        label: 'Tokyo', 
        type: 'city',
        coordinates: [35.6812, 139.7671],
        // Graph position (optional, auto-placed from coordinates if not specified)
        // position: { x: 100, y: 100 },
        style: {
          color: '#E3F2FD',      // Background color
          borderColor: '#1976D2', // Border color
          width: 120,            // Node width
          height: 60,            // Node height
        },
        meta: {
          population: 13960000,
          country: 'Japan',
        },
      },
      { 
        id: '2', 
        label: 'New York', 
        type: 'city',
        coordinates: [40.7128, -74.0060],
        style: {
          color: '#F3E5F5',      // Background color
          borderColor: '#7B1FA2', // Border color
          width: 120,
          height: 60,
        },
        meta: {
          population: 8175000,
          country: 'USA',
        },
      },
      { 
        id: '3', 
        label: 'London',
        type: 'city',
        coordinates: [51.5074, -0.1278],
        style: {
          color: '#E8F5E9',      // Background color
          borderColor: '#388E3C', // Border color
          width: 120,
          height: 60,
        },
        meta: {
          population: 9002000,
          country: 'UK',
        },
      },
      {
        id: '4',
        label: 'Paris',
        type: 'city',
        coordinates: [48.8566, 2.3522],
        style: {
          color: '#FFF3E0',      // Background color
          borderColor: '#F57C00', // Border color
          width: 120,
          height: 60,
        },
        meta: {
          population: 2161000,
          country: 'France',
        },
      }
    ],
    edges: [
      { 
        id: 'e1', 
        src: '1', 
        dst: '2', 
        relType: 'connection',
        // Relationship strength (weight: 1-10, affects thickness)
        style: {
          color: '#999',         // Edge color
          weight: 8,             // Relationship strength (1-10)
          label: 'Tokyo → New York',
          srcLabel: 'From',
          dstLabel: 'To',
        },
        // Anchor information (optional, editable in edit mode)
        // anchors: {
        //   src: { nodeId: '1', position: 0 },
        //   dst: { nodeId: '2', position: Math.PI },
        // },
        // Bend point information (optional, can be added in edit mode)
        // bends: [{ x: 100, y: 50 }],
        meta: {
          distance: 10850,
          unit: 'km',
        },
      },
      { 
        id: 'e2', 
        src: '2', 
        dst: '3', 
        relType: 'connection',
        style: {
          color: '#666',
          weight: 6,             // Relationship strength (moderate)
          label: 'New York → London',
          srcLabel: 'From',
          dstLabel: 'To',
        },
        meta: {
          distance: 5570,
          unit: 'km',
        },
      },
      {
        id: 'e3',
        src: '3',
        dst: '4',
        relType: 'connection',
        style: {
          color: '#888',
          weight: 4,             // Relationship strength (weak)
          label: 'London → Paris',
          srcLabel: 'From',
          dstLabel: 'To',
        },
        meta: {
          distance: 344,
          unit: 'km',
        },
      },
      {
        id: 'e4',
        src: '1',
        dst: '4',
        relType: 'connection',
        style: {
          color: '#777',
          weight: 5,             // Relationship strength (moderate)
          label: 'Tokyo → Paris',
          srcLabel: 'From',
          dstLabel: 'To',
        },
        meta: {
          distance: 9718,
          unit: 'km',
        },
      }
    ]
  },
  loaders: {
    leaflet: loadLeaflet,
    cesium: loadCesium,
  },
  // Enable edit mode (editable: true) but start in view mode (mode: 'view')
  graph: {
    mode: 'view',
    editable: true,
  },
  // No tileServers specified - will use default NaturalEarthII tiles (airgapped environment compatible)
  // Enable node and edge tables
  // Note: info field is not used in this example, only standard parameters are shown
  tables: {
    nodes: {
      header: `
        <tr>
          <th>ID</th>
          <th>Label</th>
          <th>Type</th>
          <th>Latitude</th>
          <th>Longitude</th>
          <th>Color</th>
        </tr>
      `,
      format: `
        <td>{{id}}</td>
        <td>{{label}}</td>
        <td>{{type}}</td>
        <td>{{coordinates.0}}</td>
        <td>{{coordinates.1}}</td>
        <td><span style="display: inline-block; width: 20px; height: 20px; background-color: {{style.color}}; border: 1px solid {{style.borderColor}};"></span></td>
      `,
    },
    edges: {
      header: `
        <tr>
          <th>ID</th>
          <th>From</th>
          <th>To</th>
          <th>Type</th>
          <th>Weight</th>
          <th>Label</th>
        </tr>
      `,
      format: `
        <td>{{id}}</td>
        <td>{{src}}</td>
        <td>{{dst}}</td>
        <td>{{relType}}</td>
        <td>{{style.weight}}</td>
        <td>{{style.label}}</td>
      `,
    },
  },
  events: {
    onNodeClick: (event) => {
      console.log('Node clicked:', event.node.id, event.node.label);
    },
  },
});
