import { RelatosViewerOptions, RelatosViewer } from './types';
export declare function createRelatosViewer(containerEl: HTMLElement | string, options?: RelatosViewerOptions): RelatosViewer;
export type * from './types';
export { importRelat, exportRelat, irToRelatosData } from './utils/relat';
export type { RelatImportResult, RelatExportOptions, RelatImportOptions } from './utils/relat';
export { parseRelat } from './utils/relat-parser';
export type { RelatIR } from './utils/relat-parser';
export { getShapeDataForOffice } from './utils/office-shapes';
export type { OfficeShapeExport, NodeShapeData, EdgeShapeData, GroupShapeData, BoundingBox } from './types/office-shapes';
