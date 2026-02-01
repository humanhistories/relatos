/**
 * Relatos Viewer - Options type definitions
 */

import type { Node, Edge, Group } from './data';
import type { RelatosEvents } from './events';

/**
 * Available view types
 */
export type ViewType = 'graph' | 'map2d' | 'globe3d';

/**
 * Graph mode
 */
export type GraphMode = 'view' | 'edit';

/**
 * Leaflet/Cesium loader function types
 * Lazy loaders injected from external
 */
export type LeafletLoader = () => Promise<typeof import('leaflet')>;
export type CesiumLoader = () => Promise<typeof import('cesium')>;

/**
 * Loaders configuration
 */
export interface Loaders {
  leaflet?: LeafletLoader;
  cesium?: CesiumLoader;
}

/**
 * Floating feature configuration
 */
export interface FloatingOptions {
  /**
   * Whether to enable floating feature
   * @default false
   */
  enabled: boolean;
  /**
   * Dock width when minimized (px)
   * @default 300
   */
  dockWidth?: number;
  /**
   * Dock height when minimized (px)
   * @default 200
   */
  dockHeight?: number;
}

/**
 * Graph-specific options
 */
export interface GraphOptions {
  /**
   * Graph mode
   * @default 'view'
   */
  mode?: GraphMode;
}

/**
 * Tile server credit information
 * Maintains minimal information usable in both Leaflet and Cesium
 */
export interface TileServerCredit {
  /**
   * Display label (required)
   * Example: "© OpenStreetMap contributors"
   */
  label: string;
  /**
   * Link URL (optional)
   * Example: "https://www.openstreetmap.org/copyright"
   */
  href?: string;
  /**
   * Whether to always display on screen (for Cesium, optional)
   */
  showOnScreen?: boolean;
}

/**
 * Tile server configuration
 * Specifies URL format and credit information together
 */
export interface TileServerConfig {
  /**
   * Tile URL template
   * Example: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
   */
  url: string;
  /**
   * Attribution string for Leaflet (optional)
   */
  attribution?: string;
  /**
   * Maximum zoom level for Cesium (optional)
   */
  maximumLevel?: number;
  /**
   * Maximum zoom level for Leaflet (optional)
   * If not specified, maximumLevel is used
   */
  maxZoom?: number;
  /**
   * Whether to use TMS (Tile Map Service) format for Leaflet (optional)
   * If true, Y coordinate increases from bottom to top
   * @default false
   */
  tms?: boolean;
  /**
   * Credit information for Cesium (optional)
   */
  credit?: TileServerCredit;
}

/**
 * Map2D-specific options
 */
export interface Map2DOptions {
  /**
   * Initial center coordinates [lat, lng]
   */
  center?: [number, number];
  /**
   * Initial zoom level
   * @default 2
   */
  zoom?: number;
  /**
   * Custom tile server URL template (single)
   * Specify when using your own tile server in on-premise environments, etc.
   * Example: "http://onprem-tile-server/{z}/{x}/{y}.png"
   * If specified, tileType switching is disabled and this URL is used
   * @deprecated Use customTileUrls instead for multiple tile servers
   */
  customTileUrl?: string;
  /**
   * Custom tile server configuration array (multiple)
   * - If string: URL only (same as legacy customTileUrls)
   * - If TileServerConfig: Can specify attribution/credit in addition to URL
   *
   * If multiple tile servers are specified, a tile switching button is displayed and can be cycled through
   * EPSG:4326 and EPSG:3857 are not distinguished; the specified URL is used as-is
   */
  customTileUrls?: (string | TileServerConfig)[];
}

/**
 * Globe3D-specific options
 */
export interface Globe3DOptions {
  /**
   * Initial camera position
   */
  camera?: {
    longitude: number;
    latitude: number;
    height: number;
  };
  /**
   * Custom tile server URL template (single)
   * Specify when using your own tile server in on-premise environments, etc.
   * Example: "http://onprem-tile-server/{z}/{x}/{y}.png"
   * If specified, tileType switching is disabled and this URL is used
   * @deprecated Use customTileUrls instead for multiple tile servers
   */
  customTileUrl?: string;
  /**
   * Custom tile server configuration array (multiple)
   * - If string: URL only (same as legacy customTileUrls)
   * - If TileServerConfig: Can specify attribution/credit in addition to URL
   *
   * If multiple tile servers are specified, a tile switching button is displayed and can be cycled through
   * EPSG:4326 and EPSG:3857 are not distinguished; the specified URL is used as-is
   */
  customTileUrls?: (string | TileServerConfig)[];
}

/**
 * Table display configuration
 */
export interface TableOptions {
  /**
   * Container element for table display (HTMLElement or selector string)
   * If not specified, relatos automatically creates a container
   */
  container?: HTMLElement | string;

  /**
   * Node information table configuration
   * Table is not output if format is null
   */
  nodes?: {
    /**
     * Section title (e.g. "Nodes"). Shown above the table when specified.
     */
    sectionTitle?: string;
    /**
     * Header HTML (optional)
     * Default header is used if not specified
     */
    header?: string;
    /**
     * HTML format within <tr> tag
     * Embed data with {{fieldName}}
     * Table is not output if null
     */
    format: string | null;
  } | null;

  /**
   * Edge information table configuration
   * Table is not output if format is null
   */
  edges?: {
    /** Section title (e.g. "Edges"). */
    sectionTitle?: string;
    /**
     * Header HTML (optional)
     * Default header is used if not specified
     */
    header?: string;
    /**
     * HTML format within <tr> tag
     * Embed data with {{fieldName}}
     * Table is not output if null
     */
    format: string | null;
  } | null;

  /**
   * Group information table configuration
   * Table is not output if format is null
   */
  groups?: {
    /** Section title (e.g. "Groups"). */
    sectionTitle?: string;
    /**
     * Header HTML (optional)
     * Default header is used if not specified
     */
    header?: string;
    /**
     * HTML format within <tr> tag
     * Embed data with {{fieldName}}
     * Table is not output if null
     */
    format: string | null;
  } | null;
}

/**
 * Options for creating RelatosViewer
 */
export interface RelatosViewerOptions {
  /**
   * Container element (HTMLElement or selector string)
   */
  container: HTMLElement | string;

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
   * Initial data as relat text (Relatos dedicated text format).
   * If provided, the viewer is populated by importing this string at creation.
   */
  initialRelat?: string;

  /**
   * Callback for parser warnings (e.g. when using initialRelat).
   * Message may include " (line N, column M)" for position.
   */
  onWarnings?: (warnings: string[]) => void;

  /**
   * Shared time information (ISO 8601 format, e.g., "2025-06-21T12:00:00Z")
   * Used by both Map2D and Globe3D
   * If specified, sun position and day/night shading are displayed
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
   * - If string: URL only
   * - If TileServerConfig: Can specify attribution/credit in addition to URL
   */
  tileServers?: (string | TileServerConfig)[];

  /**
   * Leaflet/Cesium loaders
   * map2d/globe3d are disabled if not specified
   */
  loaders?: Loaders;

  /**
   * Floating feature configuration
   */
  floating?: FloatingOptions;

  /**
   * Graph-specific options
   */
  graph?: GraphOptions;

  /**
   * Map2D-specific options
   */
  map2d?: Map2DOptions;

  /**
   * Globe3D-specific options
   */
  globe3d?: Globe3DOptions;

  /**
   * Table display configuration
   */
  tables?: TableOptions;

  /**
   * When true (default), the "Export to relat" toolbar button is shown.
   * Set to false to hide it.
   */
  showExportButton?: boolean;

  /**
   * When true (default), the "Show moon" toolbar button is shown in Map2D view.
   * Set to false to hide it.
   */
  showMoonButton?: boolean;

  /**
   * When true (default), the "Toggle lighting" toolbar button is shown in Map2D and Globe3D views.
   * Set to false to hide it.
   */
  showLightingButton?: boolean;

  /**
   * When true, the "Show edges" toggle is on at startup (edges visible in Map2D/Globe3D; always-show-edges on in Graph).
   * When false (default), the toggle is off at startup.
   */
  initialAlwaysShowEdges?: boolean;

  /**
   * Event handlers
   */
  events?: Partial<RelatosEvents>;
}
