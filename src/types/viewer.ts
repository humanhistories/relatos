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

  /**
   * Export data to PlantUML format
   * Exports all nodes, edges, and groups to PlantUML component diagram format.
   * Layout information is not included in the export.
   * 
   * @param options Export options
   * @returns PlantUML text string (or deflate-encoded string if outputFormat is 'deflate')
   * 
   * @example
   * // Basic export (plain text with short IDs)
   * const plantUML = viewer.exportToPlantUML();
   * 
   * // Export without short IDs (full original IDs)
   * const plantUML = viewer.exportToPlantUML({ useShortIds: false });
   * 
   * // Export as deflate-encoded string (for PlantUML server)
   * const encoded = viewer.exportToPlantUML({ outputFormat: 'deflate' });
   * const url = `http://www.plantuml.com/plantuml/svg/${encoded}`;
   * 
   * // Export without metadata (cleaner output, but cannot be imported back)
   * const plantUML = viewer.exportToPlantUML({ includeMetadata: false });
   */
  exportToPlantUML(options?: {
    /** Use short IDs (A, B, ...) instead of full IDs. Default: true */
    useShortIds?: boolean;
    /** Include metadata comments for import. Default: true */
    includeMetadata?: boolean;
    /** Output format: 'plain' or 'deflate'. Default: 'plain' */
    outputFormat?: 'plain' | 'deflate';
  }): string;

  /**
   * Import data from PlantUML format
   * Parses PlantUML text and updates the viewer with the imported nodes, edges, and groups.
   * 
   * Note: Import requires metadata comments (@relatos:node, @relatos:edge, @relatos:group)
   * to properly restore original IDs and data. If the PlantUML was exported without metadata,
   * import will use the PlantUML IDs and labels as-is.
   * 
   * @param plantUMLText PlantUML text string to import
   */
  importFromPlantUML(plantUMLText: string): void;
}
