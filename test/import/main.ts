/**
 * Relatos Import Test
 * Demonstrates importing PlantUML text (plain or Brotli-encoded) into Relatos
 */

import { createRelatosViewer, importFromPlantUML, decodeAndInflate, isDeflateEncoded } from '../../src/index';
import type { RelatosViewer } from '../../src/types/viewer';

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

// Create viewer with empty data
let viewerInstance: RelatosViewer;

viewerInstance = createRelatosViewer('#viewer-container', {
  enabledViews: ['graph', 'map2d', 'globe3d'],
  initialView: 'graph',
  data: {
    nodes: [],
    edges: [],
    groups: [],
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
          <th>ID</th>
          <th>Label</th>
          <th>Type</th>
          <th>Color</th>
          <th>Coordinates</th>
        </tr>
      `,
      format: `
        <td>{{id}}</td>
        <td>{{label}}</td>
        <td>{{type}}</td>
        <td><span style="display: inline-block; width: 20px; height: 20px; background-color: {{style.color}}; border: 2px solid {{style.borderColor}}; border-radius: 4px;"></span></td>
        <td>{{coordinates.0}}, {{coordinates.1}}</td>
      `,
    },
    edges: {
      header: `
        <tr>
          <th>ID</th>
          <th>From</th>
          <th>To</th>
          <th>Type</th>
          <th>Color</th>
          <th>Weight</th>
        </tr>
      `,
      format: `
        <td>{{id}}</td>
        <td>{{src}}</td>
        <td>{{dst}}</td>
        <td>{{relType}}</td>
        <td><span style="display: inline-block; width: 20px; height: 4px; background-color: {{style.color}};"></span></td>
        <td>{{style.weight}}</td>
      `,
    },
    groups: {
      header: `
        <tr>
          <th>ID</th>
          <th>Label</th>
          <th>Nodes</th>
          <th>Parent</th>
        </tr>
      `,
      format: `
        <td>{{id}}</td>
        <td>{{label}}</td>
        <td>{{nodeCount}}</td>
        <td>{{parentId}}</td>
      `,
    },
  },
  events: {
    onNodeClick: (event) => {
      console.log('Node clicked:', event.node.id);
    },
    onEdgeClick: (event) => {
      console.log('Edge clicked:', event.edge.id);
    },
  },
});

// DOM Elements
const importBtn = document.getElementById('import-btn') as HTMLButtonElement;
const clearBtn = document.getElementById('clear-btn') as HTMLButtonElement;
const sampleBtn = document.getElementById('sample-btn') as HTMLButtonElement;
const plantumlInput = document.getElementById('plantuml-input') as HTMLTextAreaElement;
const statusMessage = document.getElementById('status-message') as HTMLSpanElement;
const formatIndicator = document.getElementById('format-indicator') as HTMLSpanElement;

/**
 * Show status message
 */
function showStatus(message: string, type: 'success' | 'error' | 'info') {
  statusMessage.textContent = message;
  statusMessage.className = type;
  
  // Clear after 5 seconds for success/info
  if (type !== 'error') {
    setTimeout(() => {
      statusMessage.textContent = '';
      statusMessage.className = '';
    }, 5000);
  }
}

/**
 * Update format indicator based on input
 */
function updateFormatIndicator() {
  const text = plantumlInput.value.trim();
  
  if (!text) {
    formatIndicator.textContent = '';
    return;
  }
  
  if (isDeflateEncoded(text)) {
    formatIndicator.textContent = 'Format: Deflate encoded';
  } else if (text.startsWith('@startuml')) {
    formatIndicator.textContent = 'Format: Plain PlantUML';
  } else if (text.startsWith("'")) {
    formatIndicator.textContent = 'Format: Plain PlantUML (with comments)';
  } else {
    formatIndicator.textContent = 'Format: Unknown';
  }
}

/**
 * Import PlantUML text
 */
function importPlantUML() {
  const text = plantumlInput.value.trim();
  
  if (!text) {
    showStatus('Please enter PlantUML text to import', 'error');
    return;
  }
  
  try {
    let plantUMLText = text;
    
    // Check if deflate encoded and decode if necessary
    if (isDeflateEncoded(text)) {
      showStatus('Decoding deflate...', 'info');
      const decoded = decodeAndInflate(text);
      if (!decoded) {
        showStatus('Failed to decode deflate-encoded text', 'error');
        return;
      }
      plantUMLText = decoded;
      console.log('Decoded PlantUML:', plantUMLText);
    }
    
    // Import using Relatos
    viewerInstance.importFromPlantUML(plantUMLText);
    
    showStatus('Import successful!', 'success');
    
    // Fit view after import
    setTimeout(() => {
      viewerInstance.resize();
    }, 100);
  } catch (error) {
    console.error('Import error:', error);
    showStatus(`Import failed: ${error instanceof Error ? error.message : String(error)}`, 'error');
  }
}

/**
 * Clear input and viewer
 */
function clearAll() {
  plantumlInput.value = '';
  formatIndicator.textContent = '';
  statusMessage.textContent = '';
  statusMessage.className = '';
  
  // Reset viewer to empty state
  viewerInstance.setData({
    nodes: [],
    edges: [],
    groups: [],
  });
  
  showStatus('Cleared', 'info');
}

/**
 * Load sample PlantUML text
 */
function loadSample() {
  const samplePlantUML = `@startuml

skinparam backgroundColor #efefef
skinparam componentStyle uml2
left to right direction

' === GROUPS ===

' @relatos:group {"id":"group-asia","nodeIds":[],"meta":{"type":"continent"}}
package "Asia" as A {
  ' @relatos:group {"id":"group-japan","parentId":"group-asia","nodeIds":["tokyo"],"meta":{"type":"country"}}
  package "Japan" as B {
    ' @relatos:node {"id":"tokyo","type":"city","coordinates":[35.6812,139.7671],"info":{"population":13960000},"style":{"color":"#E3F2FD","borderColor":"#1976D2","width":120,"height":60}}
    rectangle "Tokyo" as C #E3F2FD7F;line:1976D2
  }
}

' @relatos:group {"id":"group-europe","nodeIds":[],"meta":{"type":"continent"}}
package "Europe" as D {
  ' @relatos:group {"id":"group-uk","parentId":"group-europe","nodeIds":["london"],"meta":{"type":"country"}}
  package "UK" as E {
    ' @relatos:node {"id":"london","type":"city","coordinates":[51.5074,-0.1278],"info":{"population":9002000},"style":{"color":"#E8F5E9","borderColor":"#388E3C","width":120,"height":60}}
    rectangle "London" as F #E8F5E97F;line:388E3C
  }
  
  ' @relatos:group {"id":"group-france","parentId":"group-europe","nodeIds":["paris"],"meta":{"type":"country"}}
  package "France" as G {
    ' @relatos:node {"id":"paris","type":"city","coordinates":[48.8566,2.3522],"info":{"population":2161000},"style":{"color":"#FFF3E0","borderColor":"#F57C00","width":120,"height":60}}
    rectangle "Paris" as H #FFF3E07F;line:F57C00
  }
}

' @relatos:group {"id":"group-america","nodeIds":[],"meta":{"type":"continent"}}
package "America" as I {
  ' @relatos:group {"id":"group-usa","parentId":"group-america","nodeIds":["newyork"],"meta":{"type":"country"}}
  package "USA" as J {
    ' @relatos:node {"id":"newyork","type":"city","coordinates":[40.7128,-74.006],"info":{"population":8175000},"style":{"color":"#F3E5F5","borderColor":"#7B1FA2","width":120,"height":60}}
    rectangle "New York" as K #F3E5F57F;line:7B1FA2
  }
}

' === EDGES ===

' @relatos:edge {"id":"e1","src":"tokyo","dst":"newyork","relType":"flight","info":{"distance":10850},"style":{"color":"#1976D2","weight":3}}
C -[#1976D2]-> K : flight

' @relatos:edge {"id":"e2","src":"newyork","dst":"london","relType":"flight","info":{"distance":5570},"style":{"color":"#7B1FA2","weight":2}}
K --> F : flight

' @relatos:edge {"id":"e3","src":"london","dst":"paris","relType":"train","info":{"distance":344},"style":{"color":"#388E3C","weight":4}}
F -[#388E3C,bold]-> H : train

' @relatos:edge {"id":"e4","src":"tokyo","dst":"paris","relType":"flight","info":{"distance":9718},"style":{"color":"#F57C00","weight":2}}
C --> H : flight

@enduml`;

  plantumlInput.value = samplePlantUML;
  updateFormatIndicator();
  showStatus('Sample loaded - click Import to view', 'info');
}

// Event listeners
importBtn.addEventListener('click', importPlantUML);
clearBtn.addEventListener('click', clearAll);
sampleBtn.addEventListener('click', loadSample);
plantumlInput.addEventListener('input', updateFormatIndicator);

// Resizer functionality
const resizer = document.getElementById('resizer');
const importSection = document.getElementById('import-section');

if (resizer && importSection) {
  let isResizing = false;
  let startY = 0;
  let startHeight = 0;

  resizer.addEventListener('mousedown', (e: MouseEvent) => {
    isResizing = true;
    startY = e.clientY;
    startHeight = importSection.offsetHeight;
    
    document.body.classList.add('resizing');
    resizer.classList.add('dragging');
    
    e.preventDefault();
  });

  document.addEventListener('mousemove', (e: MouseEvent) => {
    if (!isResizing) return;
    
    const deltaY = startY - e.clientY;
    const newHeight = Math.min(
      Math.max(startHeight + deltaY, 150), // min height: 150px
      window.innerHeight * 0.6 // max height: 60vh
    );
    
    importSection.style.height = `${newHeight}px`;
    
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

// Set export options to use deflate format (PlantUML compatible)
viewerInstance.setPlantUMLExportOptions({
  outputFormat: 'deflate',
  useShortIds: true,
  includeMetadata: true,
});

// Initial resize
setTimeout(() => {
  viewerInstance.resize();
}, 100);

// Expose for debugging
(window as any).viewerInstance = viewerInstance;
(window as any).importPlantUML = importPlantUML;
