/**
 * Histoverse Viewer - 型定義
 */

/**
 * 利用可能なViewタイプ
 */
export type ViewType = 'graph' | 'map2d' | 'globe3d';

/**
 * Graphモード
 */
export type GraphMode = 'view' | 'edit';

/**
 * ノードの位置情報（Graph用）
 */
export interface NodePosition {
  x: number;
  y: number;
}

/**
 * ノードの辺
 */
export type NodeSide = 'top' | 'right' | 'bottom' | 'left';

/**
 * エッジのアンカー位置（Graph用）
 * ノードの境界上の接続点
 * side: ノードの辺（top/right/bottom/left）
 * t: 辺上の相対位置（0..1、0が始点、1が終点）
 */
export interface EdgeAnchor {
  side: NodeSide;
  t: number; // 0..1
}

/**
 * エッジの折れ点（Graph用）
 * 編集モードで追加された中間点
 */
export interface EdgeBend {
  x: number;
  y: number;
}

/**
 * Node styling
 */
export interface NodeStyle {
  color?: string; // Background color (default: white)
  borderColor?: string; // Border color (default: #333)
  width?: number; // Node width in pixels (default: 120)
  height?: number; // Node height in pixels (default: 60)
}

/**
 * ノード
 */
export interface Node {
  id: string;
  label: string;
  type?: string;
  position?: NodePosition; // Graph用の位置情報
  coordinates?: [number, number]; // Map2D/Globe3D用の地理座標 [latitude, longitude]
  style?: NodeStyle; // Styling options
  meta?: Record<string, unknown>;
}

/**
 * Edge styling and relationship information
 */
export interface EdgeStyle {
  color?: string; // Edge color (default: #666)
  weight?: number; // Relationship strength (1-10, affects thickness, default: 1)
  label?: string; // Edge label text (shown on hover/tap)
  srcLabel?: string; // Label at source end
  dstLabel?: string; // Label at destination end
}

/**
 * エッジ（関係）
 */
export interface Edge {
  id: string;
  src: string; // ソースノードID
  dst: string; // ターゲットノードID
  relType: string; // 関係タイプ
  srcAnchor?: EdgeAnchor; // ソース側アンカー（未設定なら自動推定）
  dstAnchor?: EdgeAnchor; // ターゲット側アンカー（未設定なら自動推定）
  bends?: EdgeBend[]; // 空配列の場合は直線、要素がある場合は折れ線
  style?: EdgeStyle; // Styling and relationship information
  meta?: Record<string, unknown>;
}

/**
 * ノードクリックイベント
 */
export interface NodeClickEvent {
  node: Node;
  position: { x: number; y: number };
  originalEvent: MouseEvent | TouchEvent;
  view?: ViewType; // どのviewから発火したか
}

/**
 * 保存ペイロード
 * onSaveコールバックに渡される編集後のデータ
 */
export interface SavePayload {
  nodes: Node[];
  edges: Edge[];
}

/**
 * Viewer options
 * @deprecated Use types from './types/options' instead
 */
export interface RelatosViewerOptions {
  /**
   * List of enabled view types
   * Only specified views are available
   * @default ['graph']
   */
  enabledViews?: ViewType[];

  /**
   * Initial view type
   * Must be included in enabledViews
   * @default 'graph'
   */
  initialView?: ViewType;

  /**
   * Initial data
   */
  data?: {
    nodes: Node[];
    edges: Edge[];
  };

  /**
   * Shared time information (ISO 8601 format, e.g., "2025-06-21T12:00:00Z")
   * Used by both Map2D and Globe3D
   */
  time?: string;

  /**
   * Shared lighting setting
   * Whether to enable sun position and day/night shading for Map2D and Globe3D
   */
  enableLighting?: boolean;

  /**
   * Shared tile server configuration
   * Used by both Map2D and Globe3D
   */
  tileServers?: Array<
    | string
    | {
        url: string;
        attribution?: string;
        maximumLevel?: number;
        credit?: {
          label: string;
          href?: string;
          showOnScreen?: boolean;
        };
      }
  >;

  /**
   * Graph-specific options
   */
  graph?: {
    mode?: GraphMode;
    editable?: boolean;
  };

  /**
   * Leaflet/Cesium loaders
   * map2d/globe3d are disabled if not specified
   */
  loaders?: {
    leaflet?: () => Promise<any>;
    cesium?: () => Promise<any>;
  };

  /**
   * Map2D-specific options
   */
  map2d?: {
    center?: [number, number];
    zoom?: number;
  };

  /**
   * Globe3D-specific options
   */
  globe3d?: {
    camera?: {
      longitude: number;
      latitude: number;
      height: number;
    };
  };

  /**
   * Table display configuration
   */
  tables?: {
    nodes?: {
      header?: string;
      format: string | null;
    } | null;
    edges?: {
      header?: string;
      format: string | null;
    } | null;
  };

  /**
   * Event handlers
   */
  events?: {
    onNodeClick?: (event: NodeClickEvent) => void;
    onEdgeClick?: (event: any) => void;
    onSave?: (payload: SavePayload) => void;
  };
}

/**
 * ビューアーインスタンス
 */
export interface RelatosViewer {
  /**
   * データを設定
   */
  setData(data: { nodes: Node[]; edges: Edge[] }): void;

  /**
   * Viewを切替
   */
  setView(viewType: ViewType): void;

  /**
   * 現在のViewタイプを取得
   */
  getView(): ViewType;

  /**
   * Graphモードを設定（graph viewのみ）
   */
  setMode(mode: GraphMode): void;

  /**
   * 現在のGraphモードを取得
   */
  getMode(): GraphMode | null;

  /**
   * リサイズ
   */
  resize(): void;

  /**
   * 破棄
   */
  destroy(): void;

  /**
   * ノードを選択（ハイライト表示）
   * @param nodeId 選択するノードID（nullの場合は選択解除）
   */
  selectNode(nodeId: string | null): void;

  /**
   * Set shared time for Map2D and Globe3D
   */
  setTime(timeISO: string): void;

  /**
   * Set shared lighting for Map2D and Globe3D
   */
  setLighting(enabled: boolean): void;
}
