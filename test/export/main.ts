/**
 * Relatos Export Test
 * Visual check for getData, getShapeDataForOffice, exportToPlantUML, getViewAsSvg, exportViewToImage
 */

import { createRelatosViewer } from '../../src/index';
import type { RelatosViewer } from '../../src/types/viewer';

const sampleData = {
  nodes: [
    { id: 'n1', label: 'Node A', position: { x: 100, y: 80 }, style: { color: '#e3f2fd', borderColor: '#1976d2' } },
    { id: 'n2', label: 'Node B', position: { x: 280, y: 80 }, style: { color: '#fff3e0', borderColor: '#e65100' } },
    { id: 'n3', label: 'Node C', position: { x: 190, y: 200 }, style: { color: '#e8f5e9', borderColor: '#2e7d32' } },
  ],
  edges: [
    { id: 'e1', src: 'n1', dst: 'n2', relType: 'link', style: { label: 'ref', color: '#1976d2', weight: 2 } },
    { id: 'e2', src: 'n1', dst: 'n3', relType: 'link', style: { label: 'ref', color: '#2e7d32', weight: 1 } },
    { id: 'e3', src: 'n2', dst: 'n3', relType: 'link', style: { label: 'boss', color: '#e65100', weight: 3 } },
    { id: 'e4', src: 'n3', dst: 'n2', relType: 'link', style: { label: 'member', color: '#e65100', weight: 3 } },
  ],
  groups: [],
};

let viewerInstance: RelatosViewer;

viewerInstance = createRelatosViewer('#viewer-container', {
  enabledViews: ['graph'],
  initialView: 'graph',
  data: sampleData,
  graph: { mode: 'view', editable: true },
});

const outputEl = document.getElementById('export-output') as HTMLPreElement;
const statusEl = document.getElementById('status-message') as HTMLSpanElement;

function setStatus(msg: string, type: 'success' | 'error' | '') {
  statusEl.textContent = msg;
  statusEl.className = type;
}

function showJson(obj: unknown, maxChars = 8000) {
  const s = JSON.stringify(obj, null, 2);
  outputEl.textContent = s.length > maxChars ? s.slice(0, maxChars) + '\n... (truncated)' : s;
}

function downloadBlob(blob: Blob, filename: string) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}

document.getElementById('btn-get-data')!.addEventListener('click', () => {
  const data = viewerInstance.getData();
  showJson(data);
  setStatus('getData() returned nodes, edges, groups.', 'success');
});

document.getElementById('btn-shape-office')!.addEventListener('click', () => {
  const shape = viewerInstance.getShapeDataForOffice();
  showJson(shape);
  setStatus('getShapeDataForOffice() returned nodes, edges, groups, bounds.', 'success');
});

document.getElementById('btn-plantuml')!.addEventListener('click', () => {
  const plain = viewerInstance.exportToPlantUML({ outputFormat: 'plain' });
  outputEl.textContent = plain.length > 8000 ? plain.slice(0, 8000) + '\n... (truncated)' : plain;
  setStatus('exportToPlantUML(plain) – copy from output or use Export button in viewer.', 'success');
});

document.getElementById('btn-svg')!.addEventListener('click', () => {
  const svg = viewerInstance.getViewAsSvg();
  if (!svg) {
    outputEl.textContent = '(null – switch to Graph view or add nodes)';
    setStatus('getViewAsSvg() returned null.', 'error');
    return;
  }
  outputEl.textContent = svg.length > 8000 ? svg.slice(0, 8000) + '\n... (truncated)' : svg;
  setStatus('getViewAsSvg() – SVG string shown; download as file below.', 'success');
  const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
  downloadBlob(blob, 'relatos-view.svg');
});

document.getElementById('btn-png')!.addEventListener('click', async () => {
  setStatus('Exporting PNG...', '');
  const blob = await viewerInstance.exportViewToImage('png');
  if (!blob) {
    outputEl.textContent = '(null – Graph view with nodes required)';
    setStatus('exportViewToImage(png) returned null.', 'error');
    return;
  }
  showJson({ size: blob.size, type: blob.type });
  downloadBlob(blob, 'relatos-view.png');
  setStatus('PNG downloaded.', 'success');
});

document.getElementById('btn-webp')!.addEventListener('click', async () => {
  setStatus('Exporting WebP...', '');
  const blob = await viewerInstance.exportViewToImage('webp', { quality: 0.9 });
  if (!blob) {
    outputEl.textContent = '(null – Graph view with nodes required)';
    setStatus('exportViewToImage(webp) returned null.', 'error');
    return;
  }
  showJson({ size: blob.size, type: blob.type });
  downloadBlob(blob, 'relatos-view.webp');
  setStatus('WebP downloaded.', 'success');
});
