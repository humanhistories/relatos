/**
 * Relatos Viewer - Viewer type definitions
 */

import type { ViewType, GraphMode } from './options';
import type { Node, Edge, Group } from './data';
import type { SavePayload } from './events';
import type { OfficeShapeExport } from './office-shapes';

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
   * Get shape data for Office export (Excel/PowerPoint native shapes)
   * Returns node/edge/group geometry and styles in Graph-view coordinates
   * so the web app can render them as rectangles, connectors, and group boxes.
   * @returns OfficeShapeExport (nodes, edges, groups, optional bounds)
   */
  getShapeDataForOffice(): OfficeShapeExport;

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
   * Import data from relat format (Relatos dedicated text language)
   * @param relatText relat text string
   * @param options Optional. onWarnings: called when the parser produced warnings (syntax issues). Message may include " (line N, column M)". layoutPayload: when provided (e.g. from onSave), layout from it is applied to the imported data.
   */
  importRelat(relatText: string, options?: { onWarnings?: (warnings: string[]) => void; layoutPayload?: SavePayload }): void;

  /**
   * Export data to relat format (Relatos dedicated text language)
   * @param options Export options (optional)
   * @returns relat text string
   */
  exportRelat(options?: { includeLayout?: boolean; includeStyle?: boolean }): string;

  /**
   * Get current view as SVG string (Graph only; others return null)
   */
  getViewAsSvg(): string | null;

  /**
   * Export current view as image blob (PNG or WebP)
   */
  exportViewToImage(format: 'png' | 'webp', options?: { quality?: number }): Promise<Blob | null>;
}
