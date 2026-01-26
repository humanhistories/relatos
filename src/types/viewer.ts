/**
 * Relatos Viewer - Viewer type definitions
 */

import type { ViewType, GraphMode } from './options';
import type { Node, Edge, Group } from './data';
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
   * @param data Node, edge, and group data
   */
  setData(data: { nodes: Node[]; edges: Edge[]; groups?: Group[] }): void;

  /**
   * Get current data
   */
  getData(): { nodes: Node[]; edges: Edge[]; groups?: Group[] };

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

  /**
   * Set shared time for Map2D and Globe3D
   * @param timeISO ISO 8601 time string (e.g., "2025-06-21T12:00:00Z")
   */
  setTime(timeISO: string): void;

  /**
   * Set shared lighting for Map2D and Globe3D
   * @param enabled Whether to enable lighting
   */
  setLighting(enabled: boolean): void;
}
