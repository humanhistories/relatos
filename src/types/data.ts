/**
 * Histoverse Viewer (Relatos) - データ型定義
 */

/**
 * ノードの位置情報（Graph用）
 */
export interface NodePosition {
  x: number;
  y: number;
}

/**
 * エッジのアンカー位置（Graph用）
 * ノードの境界上の接続点
 */
export interface EdgeAnchor {
  /**
   * ソースノードID
   */
  nodeId: string;
  /**
   * アンカー位置（ノード中心からの相対座標、または角度）
   * 実装詳細: 角度（0-2π）または相対座標（-1 to 1）
   */
  position: number | { x: number; y: number };
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
 * ノード
 */
export interface Node {
  /**
   * ノードID（一意）
   */
  id: string;

  /**
   * ノードラベル
   */
  label: string;

  /**
   * ノードタイプ（オプション）
   */
  type?: string;

  /**
   * Graph用の位置情報
   * 存在しない場合、graphでは円形配置で初期化される
   */
  position?: NodePosition;

  /**
   * Map2D/Globe3D用の地理座標
   * [latitude, longitude]
   */
  coordinates?: [number, number];

  /**
   * メタデータ（任意）
   */
  meta?: Record<string, unknown>;

  /**
   * ノード情報（表表示などに使用、任意のデータを内包可能）
   */
  info?: Record<string, unknown>;
}

/**
 * エッジ（関係）
 */
export interface Edge {
  /**
   * エッジID（一意）
   */
  id: string;

  /**
   * ソースノードID
   */
  src: string;

  /**
   * ターゲットノードID
   */
  dst: string;

  /**
   * 関係タイプ
   */
  relType: string;

  /**
   * Graph用のアンカー情報
   * 編集モードで変更可能
   */
  anchors?: {
    src: EdgeAnchor;
    dst: EdgeAnchor;
  };

  /**
   * Graph用の折れ点情報
   * 編集モードで追加可能
   * 空配列の場合は直線、要素がある場合は折れ線
   */
  bends?: EdgeBend[];

  /**
   * メタデータ（任意）
   */
  meta?: Record<string, unknown>;

  /**
   * エッジ情報（表表示などに使用、任意のデータを内包可能）
   */
  info?: Record<string, unknown>;
}

/**
 * 双方向エッジの統合情報（内部用）
 * 双方向エッジは1本のpathで両端矢印として描画される
 */
export interface MergedEdge extends Edge {
  /**
   * 双方向フラグ
   */
  bidirectional: boolean;
  /**
   * 統合されたペアのエッジID（元の2本のエッジ）
   */
  mergedIds: [string, string];
}
