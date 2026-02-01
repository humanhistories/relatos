/**
 * Relatos relat test
 * Enter relat text in the textarea and click the button to display in Relatos.
 * All views (Graph / Map2D / Globe3D) are available.
 */

import { createRelatosViewer } from '../../src/index';
import type { RelatosViewer } from '../../src/types/viewer';

const DEFAULT_RELAT = `Tokyo, NewYork, London
Tokyo-->NewYork : flight
NewYork-->London : flight
London-->Tokyo : flight
`;

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
  } catch (e) {
    throw new Error(`Leaflet load failed: ${e instanceof Error ? e.message : String(e)}`);
  }
}

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
  } catch (e) {
    throw new Error(`Cesium load failed: ${e instanceof Error ? e.message : String(e)}`);
  }
}

/**
 * Node / edge / group tables (main attributes, style, layout separated)
 * Spec: data structure that fully separates relationship, layout, and style
 */
const TABLE_OPTIONS = {
  container: '#tables-container',
  nodes: {
    sectionTitle: 'Nodes',
    header: '<tr><th colspan="5">Main</th><th>Style</th><th colspan="4">Layout</th></tr><tr><th>id</th><th>label</th><th>lat</th><th>lon</th><th>info</th><th>color</th><th>x</th><th>y</th><th>w</th><th>h</th></tr>',
    format: '<td>{{id}}</td><td>{{label}}</td><td>{{lat}}</td><td>{{lon}}</td><td style="white-space:pre-wrap;font-size:12px;">{{info}}</td><td>{{style.color}}</td><td>{{x}}</td><td>{{y}}</td><td>{{w}}</td><td>{{h}}</td>',
  },
  edges: {
    sectionTitle: 'Edges',
    header: '<tr><th colspan="6">Main</th><th>Style</th><th colspan="5">Layout</th></tr><tr><th>id</th><th>src</th><th>dst</th><th>relID</th><th>weight</th><th>info</th><th>color</th><th>src_side</th><th>src_t</th><th>dst_side</th><th>dst_t</th><th>bends</th></tr>',
    format: '<td>{{id}}</td><td>{{src}}</td><td>{{dst}}</td><td>{{relType}}</td><td>{{weight}}</td><td style="white-space:pre-wrap;font-size:12px;">{{info}}</td><td>{{style.color}}</td><td>{{src_side}}</td><td>{{src_t}}</td><td>{{dst_side}}</td><td>{{dst_t}}</td><td style="white-space:pre-wrap;font-size:11px;">{{bends}}</td>',
  },
  groups: {
    sectionTitle: 'Groups',
    header: '<tr><th colspan="5">Main</th><th>Style</th><th colspan="4">Layout</th></tr><tr><th>id</th><th>label</th><th>nodeIds</th><th>groupIds</th><th>info</th><th>color</th><th>x</th><th>y</th><th>w</th><th>h</th></tr>',
    format: '<td>{{id}}</td><td>{{label}}</td><td>{{nodeIds}}</td><td>{{groupIds}}</td><td style="white-space:pre-wrap;font-size:12px;">{{info}}</td><td>{{style.color}}</td><td>{{x}}</td><td>{{y}}</td><td>{{w}}</td><td>{{h}}</td>',
  },
};

let viewer: RelatosViewer;

viewer = createRelatosViewer('#viewer-container', {
  enabledViews: ['graph', 'map2d', 'globe3d'],
  initialView: 'graph',
  loaders: { leaflet: loadLeaflet, cesium: loadCesium },
  graph: { mode: 'view', editable: true },
  tables: TABLE_OPTIONS,
});

const textarea = document.getElementById('relat-text') as HTMLTextAreaElement;
const statusEl = document.getElementById('status') as HTMLSpanElement;
const btnApply = document.getElementById('btn-apply') as HTMLButtonElement;
const outputEl = document.getElementById('export-output') as HTMLPreElement | null;

if (textarea && !textarea.value.trim()) {
  textarea.value = DEFAULT_RELAT;
}

function setStatus(msg: string, type: 'success' | 'error' | '' = '') {
  statusEl.textContent = msg;
  statusEl.className = type ? `status ${type}` : 'status';
}

function showOutput(text: string, maxChars = 6000) {
  if (outputEl) {
    outputEl.textContent = text.length > maxChars ? text.slice(0, maxChars) + '\n... (truncated)' : text;
    outputEl.style.display = 'block';
  }
}

function downloadBlob(blob: Blob, filename: string) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}

btnApply?.addEventListener('click', () => {
  const text = textarea?.value?.trim() ?? '';
  if (!text) {
    setStatus('Please enter relat text.', 'error');
    return;
  }
  try {
    viewer.importRelat(text, {
      onWarnings: (warnings) => {
        setStatus(`Parse warnings: ${warnings.join('; ')}`, 'error');
      },
    });
    setStatus('Applied to Relatos. Switch tabs for Graph / Map2D / Globe3D.', 'success');
    setTimeout(() => viewer.resize(), 100);
  } catch (err) {
    setStatus(`Load error: ${err instanceof Error ? err.message : String(err)}`, 'error');
  }
});

document.getElementById('btn-shape-office')?.addEventListener('click', () => {
  try {
    const shape = viewer.getShapeDataForOffice();
    showOutput(JSON.stringify(shape, null, 2));
    setStatus('getShapeDataForOffice() – see output area.', 'success');
  } catch (e) {
    setStatus(String(e), 'error');
  }
});

document.getElementById('btn-relat')?.addEventListener('click', () => {
  const relat = viewer.exportRelat({ includeLayout: true });
  showOutput(relat);
  setStatus('exportRelat(includeLayout: true)。', 'success');
});

document.getElementById('btn-svg')?.addEventListener('click', () => {
  const svg = viewer.getViewAsSvg();
  if (svg) {
    const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
    downloadBlob(blob, 'relatos-view.svg');
    setStatus('SVG downloaded.', 'success');
  } else {
    setStatus('getViewAsSvg() returned null.', 'error');
  }
});

document.getElementById('btn-png')?.addEventListener('click', async () => {
  setStatus('Exporting PNG...', '');
  const blob = await viewer.exportViewToImage('png');
  if (!blob) {
    setStatus('exportViewToImage(png) returned null.', 'error');
    return;
  }
  downloadBlob(blob, 'relatos-view.png');
  setStatus('PNG downloaded.', 'success');
});

document.getElementById('btn-webp')?.addEventListener('click', async () => {
  setStatus('Exporting WebP...', '');
  const blob = await viewer.exportViewToImage('webp', { quality: 0.9 });
  if (!blob) {
    setStatus('exportViewToImage(webp) returned null.', 'error');
    return;
  }
  downloadBlob(blob, 'relatos-view.webp');
  setStatus('WebP downloaded.', 'success');
});
