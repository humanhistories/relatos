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
    throw new Error(`Cesium is not installed or failed to load: ${error instanceof Error ? error.message : String(error)}`);
  }
}

// Sample data in relat format (Relatos dedicated text language)
// Format: nodeId as "label" [style]. Numeric IDs (1, 2, 3, 4) are supported.
const SAMPLE_RELAT = `1 as "Tokyo" [lat=35.6812, lon=139.7671, color=#E3F2FD, border=#1976D2, width=120, height=60]
2 as "New York" [lat=40.7128, lon=-74.006, color=#F3E5F5, border=#7B1FA2, width=120, height=60]
3 as "London" [lat=51.5074, lon=-0.1278, color=#E8F5E9, border=#388E3C, width=120, height=60]
4 as "Paris" [lat=48.8566, lon=2.3522, color=#FFF3E0, border=#F57C00, width=120, height=60]
1-->2 : connection [color=#999, weight=8, label="Tokyo → New York"]
2-->3 : connection [color=#666, weight=6, label="New York → London"]
3-->4 : connection [color=#888, weight=4, label="London → Paris"]
1-->4 : connection [color=#777, weight=5, label="Tokyo → Paris"]
`;

// Create viewer with sample data (relat format)
// Map2D is also enabled (uses default NaturalEarthII tiles when no tileServers are specified)
const viewer = createRelatosViewer('#viewer-container', {
  enabledViews: ['graph', 'map2d', 'globe3d'],
  initialView: 'graph',
  initialRelat: SAMPLE_RELAT,
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
      // Node clicked
    },
  },
});
