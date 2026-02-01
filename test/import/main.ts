/**
 * Relatos Import Test
 * Demonstrates importing relat text (Relatos dedicated text format) into Relatos
 */

import { createRelatosViewer } from '../../src/index';
import type { RelatosViewer } from '../../src/types/viewer';

// Leaflet loader function
async function loadLeaflet(): Promise<any> {
  try {
    const leafletModule = await import('leaflet');
    let Leaflet = leafletModule;
    if (leafletModule.default && typeof leafletModule.default === 'object') {
      Leaflet = leafletModule.default;
    }
    if (!Leaflet?.map) throw new Error('Leaflet: map not found');
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
    throw new Error(`Leaflet load failed: ${error instanceof Error ? error.message : String(error)}`);
  }
}

// Cesium loader function
async function loadCesium(): Promise<any> {
  try {
    if (typeof window !== 'undefined') {
      (window as any).CESIUM_BASE_URL = '/node_modules/cesium/Build/Cesium/';
    }
    const cesiumModule = await import('cesium');
    let Cesium = cesiumModule;
    if (cesiumModule.default && typeof cesiumModule.default === 'object') {
      Cesium = cesiumModule.default;
    }
    if (!Cesium?.Viewer) throw new Error('Cesium: Viewer not found');
    return Cesium;
  } catch (error) {
    throw new Error(`Cesium load failed: ${error instanceof Error ? error.message : String(error)}`);
  }
}

// Create viewer with no initial data
let viewerInstance: RelatosViewer;

viewerInstance = createRelatosViewer('#viewer-container', {
  enabledViews: ['graph', 'map2d', 'globe3d'],
  initialView: 'graph',
  loaders: {
    leaflet: loadLeaflet,
    cesium: loadCesium,
  },
  graph: { mode: 'view', editable: true },
  tables: {
    nodes: {
      header: `<tr><th>ID</th><th>Label</th><th>Type</th><th>Color</th><th>Coordinates</th></tr>`,
      format: `<td>{{id}}</td><td>{{label}}</td><td>{{type}}</td><td><span style="display:inline-block;width:20px;height:20px;background-color:{{style.color}};border:2px solid {{style.borderColor}};border-radius:4px;"></span></td><td>{{coordinates.0}}, {{coordinates.1}}</td>`,
    },
    edges: {
      header: `<tr><th>ID</th><th>From</th><th>To</th><th>Type</th><th>Color</th><th>Weight</th></tr>`,
      format: `<td>{{id}}</td><td>{{src}}</td><td>{{dst}}</td><td>{{relType}}</td><td><span style="display:inline-block;width:20px;height:4px;background-color:{{style.color}};"></span></td><td>{{style.weight}}</td>`,
    },
    groups: {
      header: `<tr><th>ID</th><th>Label</th><th>Nodes</th><th>Parent</th></tr>`,
      format: `<td>{{id}}</td><td>{{label}}</td><td>{{nodeCount}}</td><td>{{parentId}}</td>`,
    },
  },
  events: {
    onNodeClick: (event) => console.log('Node clicked:', event.node.id),
    onEdgeClick: (event) => console.log('Edge clicked:', event.edge.id),
  },
});

const importBtn = document.getElementById('import-btn') as HTMLButtonElement;
const clearBtn = document.getElementById('clear-btn') as HTMLButtonElement;
const sampleBtn = document.getElementById('sample-btn') as HTMLButtonElement;
const relatInput = document.getElementById('relat-input') as HTMLTextAreaElement;
const statusMessage = document.getElementById('status-message') as HTMLSpanElement;

function showStatus(message: string, type: 'success' | 'error' | 'info') {
  statusMessage.textContent = message;
  statusMessage.className = type;
  if (type !== 'error') {
    setTimeout(() => {
      statusMessage.textContent = '';
      statusMessage.className = '';
    }, 5000);
  }
}

function doImport() {
  const text = relatInput.value.trim();
  if (!text) {
    showStatus('Please enter relat text to import', 'error');
    return;
  }
  try {
    viewerInstance.importRelat(text);
    showStatus('Import successful!', 'success');
    setTimeout(() => viewerInstance.resize(), 100);
  } catch (error) {
    console.error('Import error:', error);
    showStatus(`Import failed: ${error instanceof Error ? error.message : String(error)}`, 'error');
  }
}

function clearAll() {
  relatInput.value = '';
  statusMessage.textContent = '';
  statusMessage.className = '';
  viewerInstance.importRelat('');
  showStatus('Cleared', 'info');
}

function loadSample() {
  const sampleRelat = `Tokyo, NewYork, London, Paris
Tokyo-->NewYork : flight
NewYork-->London : flight
London-->Paris : train
Tokyo-->Paris : flight
`;
  relatInput.value = sampleRelat;
  showStatus('Sample loaded - click Import to view', 'info');
}

importBtn.addEventListener('click', doImport);
clearBtn.addEventListener('click', clearAll);
sampleBtn.addEventListener('click', loadSample);

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
    importSection.style.height = `${Math.min(Math.max(startHeight + deltaY, 150), window.innerHeight * 0.6)}px`;
    viewerInstance.resize();
  });
  document.addEventListener('mouseup', () => {
    if (!isResizing) return;
    isResizing = false;
    document.body.classList.remove('resizing');
    resizer.classList.remove('dragging');
    viewerInstance.resize();
  });
}

setTimeout(() => viewerInstance.resize(), 100);

(window as any).viewerInstance = viewerInstance;
(window as any).doImport = doImport;
