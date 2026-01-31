/**
 * Relatos relat テスト
 * テキストエリアに relat を入力し、ボタンで Relatos に表示する。
 * Graph / Map2D / Globe3D の全ビューを表示する。
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
 * ノード・エッジ・グループ一覧（主要属性・スタイル・レイアウトに分離）
 * 仕様: 関係性とレイアウト・スタイルを完全に分離した情報構造
 */
const TABLE_OPTIONS = {
  container: '#tables-container',
  nodes: {
    sectionTitle: 'ノード一覧',
    header: '<tr><th colspan="5">主要</th><th>スタイル</th><th colspan="4">レイアウト</th></tr><tr><th>id</th><th>label</th><th>latitude</th><th>longitude</th><th>info</th><th>color</th><th>x</th><th>y</th><th>w</th><th>h</th></tr>',
    format: '<td>{{id}}</td><td>{{label}}</td><td>{{latitude}}</td><td>{{longitude}}</td><td style="white-space:pre-wrap;font-size:12px;">{{info}}</td><td>{{style.color}}</td><td>{{x}}</td><td>{{y}}</td><td>{{w}}</td><td>{{h}}</td>',
  },
  edges: {
    sectionTitle: 'エッジ一覧',
    header: '<tr><th colspan="6">主要</th><th>スタイル</th><th colspan="5">レイアウト</th></tr><tr><th>id</th><th>src</th><th>dst</th><th>relID</th><th>weight</th><th>info</th><th>color</th><th>src_side</th><th>src_t</th><th>dst_side</th><th>dst_t</th><th>bends</th></tr>',
    format: '<td>{{id}}</td><td>{{src}}</td><td>{{dst}}</td><td>{{relType}}</td><td>{{weight}}</td><td style="white-space:pre-wrap;font-size:12px;">{{info}}</td><td>{{style.color}}</td><td>{{src_side}}</td><td>{{src_t}}</td><td>{{dst_side}}</td><td>{{dst_t}}</td><td style="white-space:pre-wrap;font-size:11px;">{{bends}}</td>',
  },
  groups: {
    sectionTitle: 'グループ一覧',
    header: '<tr><th colspan="5">主要</th><th>スタイル</th><th colspan="4">レイアウト</th></tr><tr><th>id</th><th>label</th><th>nodeIds</th><th>groupIds</th><th>info</th><th>color</th><th>x</th><th>y</th><th>w</th><th>h</th></tr>',
    format: '<td>{{id}}</td><td>{{label}}</td><td>{{nodeIds}}</td><td>{{groupIds}}</td><td style="white-space:pre-wrap;font-size:12px;">{{info}}</td><td>{{style.color}}</td><td>{{x}}</td><td>{{y}}</td><td>{{w}}</td><td>{{h}}</td>',
  },
};

let viewer: RelatosViewer;

viewer = createRelatosViewer('#viewer-container', {
  enabledViews: ['graph', 'map2d', 'globe3d'],
  initialView: 'graph',
  data: { nodes: [], edges: [], groups: [] },
  loaders: { leaflet: loadLeaflet, cesium: loadCesium },
  graph: { mode: 'view', editable: true },
  tables: TABLE_OPTIONS,
});

const textarea = document.getElementById('relat-text') as HTMLTextAreaElement;
const statusEl = document.getElementById('status') as HTMLSpanElement;
const btnApply = document.getElementById('btn-apply') as HTMLButtonElement;

if (textarea && !textarea.value.trim()) {
  textarea.value = DEFAULT_RELAT;
}

function setStatus(msg: string, type: 'success' | 'error' | '' = '') {
  statusEl.textContent = msg;
  statusEl.className = type ? `status ${type}` : 'status';
}

btnApply?.addEventListener('click', () => {
  const text = textarea?.value?.trim() ?? '';
  if (!text) {
    setStatus('relat テキストを入力してください。', 'error');
    return;
  }
  try {
    viewer.importRelat(text, {
      onWarnings: (warnings) => {
        setStatus(`構文の警告: ${warnings.join('; ')}`, 'error');
      },
    });
    setStatus('Relatos に反映しました。Graph / Map2D / Globe3D タブで表示を切り替えられます。', 'success');
  } catch (err) {
    setStatus(`読み込みエラー: ${err instanceof Error ? err.message : String(err)}`, 'error');
  }
});
