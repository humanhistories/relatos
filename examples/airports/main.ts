/**
 * Relatos Viewer Example - Major International Airports
 * Displays 20 major international airports as nodes
 * Shows direct flight connections as edges
 * Uses library table display feature
 */

import { createRelatosViewer } from '../../src/index';

// Sample data for 20 major international airports
const airports = [
  { id: 'nrt', label: 'Tokyo (Narita)', iata: 'NRT', latitude: 35.7720, longitude: 140.3929, color: '#1976D2' },
  { id: 'icn', label: 'Seoul (Incheon)', iata: 'ICN', latitude: 37.4602, longitude: 126.4407, color: '#7B1FA2' },
  { id: 'pek', label: 'Beijing (Capital)', iata: 'PEK', latitude: 40.0799, longitude: 116.6031, color: '#388E3C' },
  { id: 'pvg', label: 'Shanghai (Pudong)', iata: 'PVG', latitude: 31.1434, longitude: 121.8052, color: '#F57C00' },
  { id: 'hkg', label: 'Hong Kong', iata: 'HKG', latitude: 22.3080, longitude: 113.9185, color: '#C2185B' },
  { id: 'sin', label: 'Singapore', iata: 'SIN', latitude: 1.3644, longitude: 103.9915, color: '#00796B' },
  { id: 'bkk', label: 'Bangkok', iata: 'BKK', latitude: 13.6900, longitude: 100.7500, color: '#689F38' },
  { id: 'dxb', label: 'Dubai', iata: 'DXB', latitude: 25.2532, longitude: 55.3657, color: '#FBC02D' },
  { id: 'lhr', label: 'London (Heathrow)', iata: 'LHR', latitude: 51.4700, longitude: -0.4543, color: '#D32F2F' },
  { id: 'cdg', label: 'Paris (Charles de Gaulle)', iata: 'CDG', latitude: 49.0097, longitude: 2.5479, color: '#512DA8' },
  { id: 'fra', label: 'Frankfurt', iata: 'FRA', latitude: 50.0379, longitude: 8.5622, color: '#E53935' },
  { id: 'ams', label: 'Amsterdam', iata: 'AMS', latitude: 52.3105, longitude: 4.7683, color: '#303F9F' },
  { id: 'jfk', label: 'New York (JFK)', iata: 'JFK', latitude: 40.6413, longitude: -73.7781, color: '#0288D1' },
  { id: 'lax', label: 'Los Angeles', iata: 'LAX', latitude: 33.9425, longitude: -118.4081, color: '#388E3C' },
  { id: 'ord', label: 'Chicago (O\'Hare)', iata: 'ORD', latitude: 41.9742, longitude: -87.9073, color: '#F9A825' },
  { id: 'yyz', label: 'Toronto', iata: 'YYZ', latitude: 43.6772, longitude: -79.6306, color: '#F57C00' },
  { id: 'syd', label: 'Sydney', iata: 'SYD', latitude: -33.9399, longitude: 151.1753, color: '#C2185B' },
  { id: 'mel', label: 'Melbourne', iata: 'MEL', latitude: -37.6733, longitude: 144.8433, color: '#7B1FA2' },
  { id: 'gru', label: 'São Paulo', iata: 'GRU', latitude: -23.4321, longitude: -46.4692, color: '#512DA8' },
  { id: 'mex', label: 'Mexico City', iata: 'MEX', latitude: 19.4363, longitude: -99.0721, color: '#8E24AA' },
];

// Direct flight connections (between major hub airports)
// Based on actual direct flights (sample data, major routes only)
const directFlights = [
  // Asia - Asia
  { from: 'nrt', to: 'icn', label: 'Direct' },
  { from: 'nrt', to: 'pvg', label: 'Direct' },
  { from: 'nrt', to: 'hkg', label: 'Direct' },
  { from: 'nrt', to: 'sin', label: 'Direct' },
  { from: 'nrt', to: 'bkk', label: 'Direct' },
  { from: 'icn', to: 'pvg', label: 'Direct' },
  { from: 'icn', to: 'hkg', label: 'Direct' },
  { from: 'pvg', to: 'hkg', label: 'Direct' },
  { from: 'pvg', to: 'sin', label: 'Direct' },
  { from: 'hkg', to: 'sin', label: 'Direct' },
  { from: 'hkg', to: 'bkk', label: 'Direct' },
  { from: 'sin', to: 'bkk', label: 'Direct' },
  
  // Asia - Middle East
  { from: 'dxb', to: 'nrt', label: 'Direct' },
  { from: 'dxb', to: 'icn', label: 'Direct' },
  { from: 'dxb', to: 'pek', label: 'Direct' },
  { from: 'dxb', to: 'pvg', label: 'Direct' },
  { from: 'dxb', to: 'hkg', label: 'Direct' },
  { from: 'dxb', to: 'sin', label: 'Direct' },
  { from: 'dxb', to: 'bkk', label: 'Direct' },
  
  // Asia - Europe
  { from: 'nrt', to: 'bkk', label: 'Direct' },
  { from: 'icn', to: 'pvg', label: 'Direct' },
  { from: 'icn', to: 'hkg', label: 'Direct' },
  { from: 'pvg', to: 'hkg', label: 'Direct' },
  { from: 'pvg', to: 'sin', label: 'Direct' },
  { from: 'hkg', to: 'sin', label: 'Direct' },
  { from: 'hkg', to: 'bkk', label: 'Direct' },
  { from: 'sin', to: 'bkk', label: 'Direct' },
  
  // Asia - Middle East
  { from: 'dxb', to: 'nrt', label: 'Direct' },
  { from: 'dxb', to: 'icn', label: 'Direct' },
  { from: 'dxb', to: 'pek', label: 'Direct' },
  { from: 'dxb', to: 'pvg', label: 'Direct' },
  { from: 'dxb', to: 'hkg', label: 'Direct' },
  { from: 'dxb', to: 'sin', label: 'Direct' },
  { from: 'dxb', to: 'bkk', label: 'Direct' },
  
  // Asia - Europe
  { from: 'nrt', to: 'lhr', label: 'Direct' },
  { from: 'nrt', to: 'cdg', label: 'Direct' },
  { from: 'nrt', to: 'fra', label: 'Direct' },
  { from: 'nrt', to: 'ams', label: 'Direct' },
  { from: 'icn', to: 'lhr', label: 'Direct' },
  { from: 'icn', to: 'fra', label: 'Direct' },
  { from: 'icn', to: 'ams', label: 'Direct' },
  { from: 'pek', to: 'lhr', label: 'Direct' },
  { from: 'pek', to: 'cdg', label: 'Direct' },
  { from: 'pek', to: 'fra', label: 'Direct' },
  { from: 'pvg', to: 'lhr', label: 'Direct' },
  { from: 'pvg', to: 'cdg', label: 'Direct' },
  { from: 'pvg', to: 'fra', label: 'Direct' },
  { from: 'hkg', to: 'lhr', label: 'Direct' },
  { from: 'hkg', to: 'cdg', label: 'Direct' },
  { from: 'hkg', to: 'fra', label: 'Direct' },
  { from: 'sin', to: 'lhr', label: 'Direct' },
  { from: 'sin', to: 'fra', label: 'Direct' },
  { from: 'sin', to: 'ams', label: 'Direct' },
  { from: 'bkk', to: 'lhr', label: 'Direct' },
  { from: 'bkk', to: 'fra', label: 'Direct' },
  
  // Asia - North America
  { from: 'nrt', to: 'jfk', label: 'Direct' },
  { from: 'nrt', to: 'lax', label: 'Direct' },
  { from: 'nrt', to: 'ord', label: 'Direct' },
  { from: 'icn', to: 'jfk', label: 'Direct' },
  { from: 'icn', to: 'lax', label: 'Direct' },
  { from: 'icn', to: 'ord', label: 'Direct' },
  { from: 'pek', to: 'jfk', label: 'Direct' },
  { from: 'pek', to: 'lax', label: 'Direct' },
  { from: 'pvg', to: 'jfk', label: 'Direct' },
  { from: 'pvg', to: 'lax', label: 'Direct' },
  { from: 'hkg', to: 'jfk', label: 'Direct' },
  { from: 'hkg', to: 'lax', label: 'Direct' },
  { from: 'sin', to: 'jfk', label: 'Direct' },
  { from: 'sin', to: 'lax', label: 'Direct' },
  
  // Asia - Oceania
  { from: 'nrt', to: 'syd', label: 'Direct' },
  { from: 'nrt', to: 'mel', label: 'Direct' },
  { from: 'icn', to: 'syd', label: 'Direct' },
  { from: 'hkg', to: 'syd', label: 'Direct' },
  { from: 'hkg', to: 'mel', label: 'Direct' },
  { from: 'sin', to: 'syd', label: 'Direct' },
  { from: 'sin', to: 'mel', label: 'Direct' },
  
  // Middle East - Europe
  { from: 'dxb', to: 'lhr', label: 'Direct' },
  { from: 'dxb', to: 'cdg', label: 'Direct' },
  { from: 'dxb', to: 'fra', label: 'Direct' },
  { from: 'dxb', to: 'ams', label: 'Direct' },
  
  // Middle East - North America
  { from: 'dxb', to: 'jfk', label: 'Direct' },
  { from: 'dxb', to: 'lax', label: 'Direct' },
  { from: 'dxb', to: 'ord', label: 'Direct' },
  
  // Europe - Europe
  { from: 'lhr', to: 'cdg', label: 'Direct' },
  { from: 'lhr', to: 'fra', label: 'Direct' },
  { from: 'lhr', to: 'ams', label: 'Direct' },
  { from: 'cdg', to: 'fra', label: 'Direct' },
  { from: 'cdg', to: 'ams', label: 'Direct' },
  { from: 'fra', to: 'ams', label: 'Direct' },
  
  // Europe - North America
  { from: 'lhr', to: 'jfk', label: 'Direct' },
  { from: 'lhr', to: 'lax', label: 'Direct' },
  { from: 'lhr', to: 'ord', label: 'Direct' },
  { from: 'cdg', to: 'jfk', label: 'Direct' },
  { from: 'cdg', to: 'lax', label: 'Direct' },
  { from: 'fra', to: 'jfk', label: 'Direct' },
  { from: 'fra', to: 'lax', label: 'Direct' },
  { from: 'fra', to: 'ord', label: 'Direct' },
  { from: 'ams', to: 'jfk', label: 'Direct' },
  { from: 'ams', to: 'lax', label: 'Direct' },
  
  // Europe - South America
  { from: 'lhr', to: 'gru', label: 'Direct' },
  { from: 'cdg', to: 'gru', label: 'Direct' },
  { from: 'fra', to: 'gru', label: 'Direct' },
  { from: 'ams', to: 'gru', label: 'Direct' },
  
  // North America - North America
  { from: 'jfk', to: 'lax', label: 'Direct' },
  { from: 'jfk', to: 'ord', label: 'Direct' },
  { from: 'jfk', to: 'yyz', label: 'Direct' },
  { from: 'jfk', to: 'mex', label: 'Direct' },
  { from: 'lax', to: 'ord', label: 'Direct' },
  { from: 'lax', to: 'yyz', label: 'Direct' },
  { from: 'lax', to: 'mex', label: 'Direct' },
  { from: 'ord', to: 'yyz', label: 'Direct' },
  
  // North America - South America
  { from: 'jfk', to: 'gru', label: 'Direct' },
  { from: 'lax', to: 'gru', label: 'Direct' },
  { from: 'mex', to: 'gru', label: 'Direct' },
  
  // North America - Oceania
  { from: 'lax', to: 'syd', label: 'Direct' },
  { from: 'lax', to: 'mel', label: 'Direct' },
  
  // South America - Oceania
  { from: 'gru', to: 'syd', label: 'Direct' },
  { from: 'gru', to: 'mel', label: 'Direct' },
];

// Edge weights (approximate flight frequency)
const edgeWeights: Record<string, number> = {
  // Major intercontinental routes (weight 9-10)
  'nrt-jfk': 10, 'jfk-nrt': 10,
  'nrt-lax': 10, 'lax-nrt': 10,
  'lhr-jfk': 10, 'jfk-lhr': 10,
  'lhr-lax': 9, 'lax-lhr': 9,
  'dxb-lhr': 9, 'lhr-dxb': 9,
  'dxb-jfk': 9, 'jfk-dxb': 9,
  'hkg-jfk': 9, 'jfk-hkg': 9,
  'sin-lax': 9, 'lax-sin': 9,
  
  // Major routes within Asia (weight 8-9)
  'nrt-icn': 9, 'icn-nrt': 9,
  'nrt-pvg': 9, 'pvg-nrt': 9,
  'nrt-hkg': 9, 'hkg-nrt': 9,
  'pvg-hkg': 9, 'hkg-pvg': 9,
  'hkg-sin': 9, 'sin-hkg': 9,
  'nrt-sin': 8, 'sin-nrt': 8,
  
  // Major Asia-Europe routes (weight 8-9)
  'nrt-lhr': 9, 'lhr-nrt': 9,
  'nrt-cdg': 8, 'cdg-nrt': 8,
  'nrt-fra': 8, 'fra-nrt': 8,
  'icn-lhr': 8, 'lhr-icn': 8,
  'hkg-lhr': 8, 'lhr-hkg': 8,
  'sin-lhr': 8, 'lhr-sin': 8,
  
  // Major routes within Europe (weight 8-9)
  'lhr-cdg': 9, 'cdg-lhr': 9,
  'lhr-fra': 9, 'fra-lhr': 9,
  'lhr-ams': 8, 'ams-lhr': 8,
  'cdg-fra': 8, 'fra-cdg': 8,
  
  // Major routes within North America (weight 9-10)
  'jfk-lax': 10, 'lax-jfk': 10,
  'jfk-ord': 9, 'ord-jfk': 9,
  'lax-ord': 9, 'ord-lax': 9,
  'jfk-yyz': 8, 'yyz-jfk': 8,
  
  // Other major routes (weight 7-8)
  'nrt-syd': 8, 'syd-nrt': 8,
  'lax-syd': 8, 'syd-lax': 8,
  'dxb-sin': 8, 'sin-dxb': 8,
  'icn-jfk': 8, 'jfk-icn': 8,
  'pvg-jfk': 8, 'jfk-pvg': 8,
  'pek-lhr': 7, 'lhr-pek': 7,
  'lhr-gru': 7, 'gru-lhr': 7,
};

// Create graph node data (include table display data in info field)
const graphNodes = airports.map(airport => ({
  id: airport.id,
  label: airport.label,
  coordinates: [airport.latitude, airport.longitude],
  info: {
    color: airport.color,
    iata: airport.iata,
    latitude: airport.latitude.toFixed(4),
    longitude: airport.longitude.toFixed(4),
  },
  style: {
    color: airport.color,
    borderColor: '#666',
    width: 120,
    height: 60,
  },
}));

// Create graph edge data (include table display data in info field)
const graphEdges = directFlights.map(flight => {
  // Get airport names and create label
  const fromAirport = airports.find(a => a.id === flight.from);
  const toAirport = airports.find(a => a.id === flight.to);
  const label = fromAirport && toAirport 
    ? `${fromAirport.iata} → ${toAirport.iata}`
    : flight.label;
  
  // Get edge weight (approximate flight frequency)
  const edgeKey = `${flight.from}-${flight.to}`;
  const weight = edgeWeights[edgeKey] || 5; // Default value is 5
  
  return {
    id: `${flight.from}-${flight.to}`,
    src: flight.from,
    dst: flight.to,
    relType: flight.label,
    info: {
      fromLabel: fromAirport?.label || flight.from,
      toLabel: toAirport?.label || flight.to,
      fromIata: fromAirport?.iata || '',
      toIata: toAirport?.iata || '',
      label: label,
      weight: weight,
    },
    style: {
      color: '#999',
      width: 2,
      weight: weight,
      label: label,
    },
  };
});

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
    console.error('Error details:', error);
    throw new Error(`Leaflet is not installed or failed to load: ${error instanceof Error ? error.message : String(error)}`);
  }
}

// Cesium loader function
async function loadCesium(): Promise<any> {
  try {
    if (typeof window !== 'undefined') {
      const cesiumBaseUrl = '/node_modules/cesium/Build/Cesium/';
      (window as any).CESIUM_BASE_URL = cesiumBaseUrl;
      console.log('Cesium baseUrl set to:', cesiumBaseUrl);
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
    console.error('Error details:', error);
    throw new Error(`Cesium is not installed or failed to load: ${error instanceof Error ? error.message : String(error)}`);
  }
}

// Get current time in ISO 8601 format
function getCurrentTimeISO(): string {
  const now = new Date();
  return now.toISOString();
}

// Set up time input field
const timeInput = document.getElementById('time-input') as HTMLInputElement;
if (timeInput) {
  const currentTimeISO = getCurrentTimeISO();
  timeInput.value = currentTimeISO;
  
  timeInput.addEventListener('change', () => {
    const timeValue = timeInput.value.trim();
    if (timeValue && viewerInstance) {
      try {
        // Set shared time for both Map2D and Globe3D
        viewerInstance.setTime(timeValue);
      } catch (error) {
        alert('Invalid time format. Please use ISO 8601 format (e.g., 2025-01-17T12:00:00Z).');
      }
    }
  });
}

// Create viewer (using library table feature)
const viewerInstance = createRelatosViewer('#viewer-container', {
  enabledViews: ['graph', 'map2d', 'globe3d'],
  initialView: 'map2d',
  data: {
    nodes: graphNodes,
    edges: graphEdges,
  },
  loaders: {
    leaflet: loadLeaflet,
    cesium: loadCesium,
  },
  graph: {
    mode: 'view',
    editable: true,
  },
  // Shared settings for Map2D and Globe3D
  time: timeInput.value,
  enableLighting: true, // Enable day/night shading on initial load
  // Shared tile server configuration (Map2D / Globe3D common)
  tileServers: [
    {
      // OpenStreetMap
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      maximumLevel: 8,
      attribution: '© <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors',
      credit: {
        label: '© OpenStreetMap contributors',
        href: 'https://www.openstreetmap.org/copyright',
        showOnScreen: false,
      },
    },
    {
      // CARTO Voyager
      url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png',
      maximumLevel: 8,
      attribution: '© <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors © <a href="https://carto.com/" target="_blank">CARTO</a>',
      credit: {
        label: '© OpenStreetMap contributors © CARTO',
        href: 'https://carto.com/',
        showOnScreen: false,
      },
    },
    {
      // CARTO Positron
      url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
      maximumLevel: 8,
      attribution: '© <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors © <a href="https://carto.com/" target="_blank">CARTO</a>',
      credit: {
        label: '© OpenStreetMap contributors © CARTO',
        href: 'https://carto.com/',
        showOnScreen: false,
      },
    },
    {
      // OpenTopoMap
      url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
      maximumLevel: 8,
      attribution: '© <a href="https://opentopomap.org/" target="_blank">OpenTopoMap</a> (CC-BY-SA 3.0)',
      credit: {
        label: '© OpenTopoMap (CC-BY-SA 3.0)',
        href: 'https://opentopomap.org/',
        showOnScreen: false,
      },
    },
    {
      // NASA Blue Marble Next Generation
      url: 'https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/BlueMarble_NextGeneration/default/GoogleMapsCompatible_Level8/{z}/{y}/{x}.jpeg',
      maximumLevel: 8,
      attribution: 'Imagery provided by <a href="https://earthdata.nasa.gov/" target="_blank">NASA EOSDIS GIBS</a> (NASA/GSFC/ESDIS)',
      credit: {
        label: 'Imagery provided by NASA EOSDIS GIBS (NASA/GSFC/ESDIS)',
        href: 'https://earthdata.nasa.gov/',
        showOnScreen: false,
      },
    },
  ],
  tables: {
    nodes: {
      header: `
        <tr>
          <th>Color</th>
          <th>ID</th>
          <th>Airport Name</th>
          <th>IATA</th>
          <th>Latitude</th>
          <th>Longitude</th>
        </tr>
      `,
      format: `
        <td><span class="color-indicator" style="background-color: {{info.color}}"></span></td>
        <td>{{id}}</td>
        <td>{{label}}</td>
        <td>{{info.iata}}</td>
        <td>{{info.latitude}}</td>
        <td>{{info.longitude}}</td>
      `,
    },
    edges: {
      header: `
        <tr>
          <th>From Airport</th>
          <th>To Airport</th>
          <th>Label</th>
          <th>Weight</th>
        </tr>
      `,
      format: `
        <td>{{info.fromLabel}} ({{info.fromIata}})</td>
        <td>{{info.toLabel}} ({{info.toIata}})</td>
        <td>{{info.label}}</td>
        <td>{{info.weight}}</td>
      `,
    },
  },
  events: {
    onNodeClick: (event) => {
      // Library handles table highlighting and scrolling
      console.log('Node clicked:', event.node.id);
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
