import { RelatosViewerOptions, RelatosViewer } from './types';
/**
 * Creates a RelatosViewer instance
 *
 * @param containerEl Container element (HTMLElement or selector string)
 * @param options Viewer options
 * @returns RelatosViewer instance
 */
export declare function createRelatosViewer(containerEl: HTMLElement | string, options?: RelatosViewerOptions): RelatosViewer;
export type * from './types';
export { exportToPlantUML, importFromPlantUML, deflateAndEncode, decodeAndInflate, isDeflateEncoded, getPlantUMLServerUrl } from './utils/plantuml';
export type { PlantUMLExportOptions } from './utils/plantuml';
export { getShapeDataForOffice } from './utils/office-shapes';
export type { OfficeShapeExport, NodeShapeData, EdgeShapeData, GroupShapeData, BoundingBox } from './types/office-shapes';
