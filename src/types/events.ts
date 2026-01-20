/**
 * Histoverse Viewer (Relatos) - イベント型定義
 */

import type { Node, Edge } from './data';
import type { ViewType } from './options';

/**
 * ノードクリックイベント
 */
export interface NodeClickEvent {
  /**
   * クリックされたノード
   */
  node: Node;
  /**
   * クリック位置（view座標系）
   */
  position: {
    x: number;
    y: number;
  };
  /**
   * 元のDOMイベント
   */
  originalEvent: MouseEvent | TouchEvent;
  /**
   * どのviewから発火したか
   */
  view?: ViewType;
}

/**
 * エッジクリックイベント（オプション）
 */
export interface EdgeClickEvent {
  /**
   * クリックされたエッジ
   */
  edge: Edge;
  /**
   * クリック位置（view座標系）
   */
  position: {
    x: number;
    y: number;
  };
  /**
   * 元のDOMイベント
   */
  originalEvent: MouseEvent | TouchEvent;
  /**
   * どのviewから発火したか
   */
  view?: ViewType;
}

/**
 * View切替イベント
 */
export interface ViewChangeEvent {
  /**
   * 前のViewタイプ
   */
  previousView: string;
  /**
   * 新しいViewタイプ
   */
  newView: string;
}

/**
 * 保存ペイロード
 * onSaveコールバックに渡される編集後のデータ
 */
export interface SavePayload {
  /**
   * 編集後のノードリスト
   * position, anchors, bendsなどの編集情報を含む
   */
  nodes: Node[];
  /**
   * 編集後のエッジリスト
   * anchors, bendsなどの編集情報を含む
   */
  edges: Edge[];
}

/**
 * RelatosViewerのイベントハンドラ
 */
export interface RelatosEvents {
  /**
   * ノードクリック時のコールバック
   * graph(view mode), map2d, globe3dで発火
   */
  onNodeClick?: (event: NodeClickEvent) => void;

  /**
   * エッジクリック時のコールバック（オプション）
   */
  onEdgeClick?: (event: EdgeClickEvent) => void;

  /**
   * 編集モードでの変更保存コールバック
   * graph edit modeでの変更をdebounceして通知
   * 変更後のnodes/edges（anchors, bends含む）を丸ごと返す
   */
  onSave?: (payload: SavePayload) => void;

  /**
   * View切替時のコールバック
   */
  onViewChange?: (event: ViewChangeEvent) => void;

  /**
   * エラー発生時のコールバック
   */
  onError?: (error: Error) => void;
}
