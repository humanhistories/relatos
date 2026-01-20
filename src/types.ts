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
 * ビューアーオプション
 */
export interface RelatosViewerOptions {
  /**
   * 有効なViewタイプのリスト
   * 指定されたviewのみが利用可能になる
   * @default ['graph']
   */
  enabledViews?: ViewType[];

  /**
   * 初期Viewタイプ
   * enabledViewsに含まれている必要がある
   * @default 'graph'
   */
  initialView?: ViewType;

  /**
   * 初期データ
   */
  data?: {
    nodes: Node[];
    edges: Edge[];
  };

  /**
   * 共有タイルサーバ設定
   * Map2D / Globe3D の両方で利用される
   * - string で指定した場合: URLのみ
   * - { url, attribution, credit } 形式で指定した場合: Leaflet/Cesium両方のクレジット情報を指定可能
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
   * Graph固有オプション
   */
  graph?: {
    mode?: GraphMode; // @default 'view'
    editable?: boolean; // 編集可能かどうか @default false
  };

  /**
   * Leaflet/Cesiumのローダー
   * 未指定の場合、map2d/globe3dは無効化される
   */
  loaders?: {
    leaflet?: () => Promise<any>;
    cesium?: () => Promise<any>;
  };

  /**
   * Map2D固有オプション
   */
  map2d?: {
    center?: [number, number];
    zoom?: number;
    time?: string;
    enableLighting?: boolean;
  };

  /**
   * Globe3D固有オプション
   */
  globe3d?: {
    camera?: {
      longitude: number;
      latitude: number;
      height: number;
    };
    time?: string;
    enableLighting?: boolean;
  };

  /**
   * 表表示設定
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
   * イベントハンドラ
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
   * Map2D関連メソッド
   */
  setMap2dTime(timeISO: string): void;
  setMap2dLighting(enabled: boolean): void;

  /**
   * Globe3D関連メソッド
   */
  setGlobe3dTime(timeISO: string): void;
  setGlobe3dLighting(enabled: boolean): void;
}
