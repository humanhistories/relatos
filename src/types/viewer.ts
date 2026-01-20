/**
 * Relatos Viewer - Viewer type definitions
 */

import type { ViewType, GraphMode } from './options';
import type { Node, Edge } from './data';
import type { SavePayload } from './events';

/**
 * RelatosViewer instance
 */
export interface RelatosViewer {
  /**
   * Get current view type
   */
  getCurrentView(): ViewType;

  /**
   * Switch view
   * @param viewType Target view type to switch to
   */
  switchView(viewType: ViewType): Promise<void>;

  /**
   * Set data
   * @param data Node and edge data
   */
  setData(data: { nodes: Node[]; edges: Edge[] }): void;

  /**
   * Get current data
   */
  getData(): { nodes: Node[]; edges: Edge[] };

  /**
   * Set graph mode (graph view only)
   * @param mode 'view' | 'edit'
   */
  setGraphMode(mode: GraphMode): void;

  /**
   * Get current graph mode
   */
  getGraphMode(): GraphMode | null;

  /**
   * Save edit content (graph edit mode only)
   * Manually trigger onSave callback
   */
  save(): void;

  /**
   * Resize
   * Call when container size changes or floating is toggled
   * Internally calls resize() on each view
   */
  resize(): void;

  /**
   * Destroy
   * Clean up resources
   */
  destroy(): void;
}
