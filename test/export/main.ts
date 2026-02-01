/**
 * Relatos Export Test
 * Enter relat text in the textarea and click Apply to update the graph. Verifies view export APIs.
 */

import { createRelatosViewer, importRelat } from '../../src/index';
import type { RelatosViewer } from '../../src/types/viewer';

const DEFAULT_RELAT = `n1 as "Node A"
n2 as "Node B"
n3 as "Node C"
n1-->n2
n1-->n3
n2-->n3
n3-->n2
layout {
  node n1 {x=100 y=80}
  node n2 {x=280 y=80}
  node n3 {x=190 y=200}
}
`;

let viewerInstance: RelatosViewer;

viewerInstance = createRelatosViewer('#viewer-container', {
  enabledViews: ['graph'],
  initialView: 'graph',
  graph: { mode: 'view', editable: true },
});

const relatTextarea = document.getElementById('relat-textarea') as HTMLTextAreaElement;
const outputEl = document.getElementById('export-output') as HTMLPreElement | null;
const statusEl = document.getElementById('status-message') as HTMLSpanElement;

relatTextarea.value = DEFAULT_RELAT;
viewerInstance.importRelat(DEFAULT_RELAT);
setTimeout(() => viewerInstance.resize(), 100);

function setStatus(msg: string, type: 'success' | 'error' | '') {
  statusEl.textContent = msg;
  statusEl.className = type;
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

document.getElementById('btn-apply')!.addEventListener('click', () => {
  const text = relatTextarea.value.trim();
  if (!text) {
    setStatus('Enter relat text.', 'error');
    return;
  }
  try {
    viewerInstance.importRelat(text);
    setTimeout(() => viewerInstance.resize(), 100);
    setStatus('Applied.', 'success');
  } catch (e) {
    setStatus(String(e), 'error');
  }
});

document.getElementById('btn-shape-office')!.addEventListener('click', () => {
  try {
    const shape = viewerInstance.getShapeDataForOffice();
    showOutput(JSON.stringify(shape, null, 2));
    setStatus('getShapeDataForOffice() – see output below.', 'success');
  } catch (e) {
    setStatus(String(e), 'error');
  }
});

document.getElementById('btn-relat')!.addEventListener('click', () => {
  const relat = viewerInstance.exportRelat({ includeLayout: true });
  showOutput(relat);
  setStatus('exportRelat(includeLayout: true).', 'success');
});

document.getElementById('btn-svg')!.addEventListener('click', () => {
  const svg = viewerInstance.getViewAsSvg();
  if (!svg) {
    setStatus('getViewAsSvg() returned null.', 'error');
    return;
  }
  const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
  downloadBlob(blob, 'relatos-view.svg');
  setStatus('SVG downloaded.', 'success');
});

document.getElementById('btn-png')!.addEventListener('click', async () => {
  setStatus('Exporting PNG...', '');
  const blob = await viewerInstance.exportViewToImage('png');
  if (!blob) {
    setStatus('exportViewToImage(png) returned null.', 'error');
    return;
  }
  downloadBlob(blob, 'relatos-view.png');
  setStatus('PNG downloaded.', 'success');
});

document.getElementById('btn-webp')!.addEventListener('click', async () => {
  setStatus('Exporting WebP...', '');
  const blob = await viewerInstance.exportViewToImage('webp', { quality: 0.9 });
  if (!blob) {
    setStatus('exportViewToImage(webp) returned null.', 'error');
    return;
  }
  downloadBlob(blob, 'relatos-view.webp');
  setStatus('WebP downloaded.', 'success');
});
