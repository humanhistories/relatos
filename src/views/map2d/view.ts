/**
 * Relatos Viewer - Map2D View
 * 2D map display using Leaflet
 */

import type { Node, Edge } from '../../types';
import type { NodeClickEvent, EdgeClickEvent } from '../../types/events';
import type { TileServerConfig } from '../../types/options';
import type { View } from '../../core/view_container';
import { injectSvgSprite } from '../../assets/icons/icons-embedded';

/**
 * Helper function to get icon from SVG sprite
 * @param iconId Icon ID (e.g., 'icon-edit', 'icon-home', 'icon-sun', 'icon-relations')
 * @param size Icon size (default: 16)
 * @returns HTML string of SVG element
 */
function createSvgIcon(iconId: string, size: number = 16): string {
  // Ensure sprite is injected
  injectSvgSprite();
  
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <use href="#${iconId}"></use>
  </svg>`;
}

/**
 * Leaflet type definitions (simplified)
 */
type LeafletMap = any;
type LeafletMarker = any;
type LeafletPolyline = any;
type LeafletPolygon = any;
type LeafletTileLayer = any;
type LeafletIcon = any;
type LeafletLayerGroup = any;

/**
 * Map2D View class
 */
export class Map2DView implements View {
  private container: HTMLElement;
  private map: LeafletMap | null = null;
  private Leaflet: any = null; // Hold Leaflet object
  private nodes: Node[] = [];
  private edges: Edge[] = [];
  private onNodeClick?: (event: NodeClickEvent) => void;
  private onEdgeClick?: (event: EdgeClickEvent) => void;
  private selectedNodeId: string | null = null;
  private lastSelectedNodeId: string | null = null; // Last selected node ID (for toggle behavior)
  private markers: Map<string, LeafletMarker> = new Map(); // Node markers
  private polylines: Map<string, LeafletPolyline> = new Map(); // Edge polylines
  private rectLayer: any = null; // Rectangle layer for nodes without coordinates
  private leafletLoader?: () => Promise<any>; // Leaflet loader function
  private fitCenterButton: HTMLButtonElement | null = null; // Fit and center button
  private lightingToggleButton: HTMLButtonElement | null = null; // Lighting toggle button
  private alwaysShowEdgesButton: HTMLButtonElement | null = null; // Toggle button for always showing all edges
  private alwaysShowEdges: boolean = true; // Flag for always showing all edges (default: true)
  private onAlwaysShowEdgesChange?: (enabled: boolean) => void; // Callback to notify always show edges state change
  private onLightingChange?: (enabled: boolean) => void; // Callback to notify lighting state change
  private tileTypeButton: HTMLButtonElement | null = null; // Toggle button for tile type
  private baseTileLayer: LeafletTileLayer | null = null; // Reference to base tile layer
  private nightShadeLayer: LeafletPolygon | null = null; // Night shade polygon layer
  private nightShadeDebugLayer: LeafletPolyline | null = null; // Debug polyline for terminator boundary
  private lightingEnabled: boolean = false; // Lighting mode flag
  private map2dOptions?: {
    center?: [number, number];
    zoom?: number;
    time?: string;
    enableLighting?: boolean;
    debugNightShading?: boolean;
    customTileUrl?: string;
    customTileUrls?: (string | TileServerConfig)[];
  }; // Map2D options
  private customTileUrls: TileServerConfig[] = []; // Normalized custom tile configs array
  private currentCustomTileIndex: number = 0; // Current index in customTileUrls array

  constructor(
    container: HTMLElement,
    onNodeClick?: (event: NodeClickEvent) => void,
    leafletLoader?: () => Promise<any>,
    sharedTileServers?: (string | TileServerConfig)[] | null,
    map2dOptions?: {
      center?: [number, number];
      zoom?: number;
      time?: string;
      enableLighting?: boolean;
      debugNightShading?: boolean;
      customTileUrl?: string;
      customTileUrls?: (string | TileServerConfig)[];
    },
    onEdgeClick?: (event: EdgeClickEvent) => void
  ) {
    this.container = container;
    this.onNodeClick = onNodeClick;
    this.leafletLoader = leafletLoader;
    this.map2dOptions = map2dOptions;
    this.onEdgeClick = onEdgeClick;

    // Initialize customTileUrls from shared tileServers or per-view options
    const tileSources =
      (sharedTileServers && sharedTileServers.length > 0)
        ? sharedTileServers
        : map2dOptions?.customTileUrls;

    if (tileSources && tileSources.length > 0) {
      // Normalize to TileServerConfig[]
      this.customTileUrls = tileSources.map((item) =>
        typeof item === 'string'
          ? { url: item }
          : item
      );
    } else if (map2dOptions?.customTileUrl) {
      // Support deprecated customTileUrl for backward compatibility
      this.customTileUrls = [{ url: map2dOptions.customTileUrl }];
    }

    // Set container styles
    this.container.style.position = 'relative';
    this.container.style.width = '100%';
    this.container.style.height = '100%';
  }

  /**
   * Initialize Leaflet
   */
  private async initializeLeaflet(): Promise<void> {
    if (this.map) {
      return; // Already initialized
    }

    if (!this.leafletLoader) {
      throw new Error('Leaflet loader is not provided. Please provide options.loaders.leaflet.');
    }

    // Load Leaflet
    const leafletModule = await this.leafletLoader();
    
    // Get Leaflet object (support default export or named export)
    this.Leaflet = leafletModule.default || leafletModule;

    // Initial center coordinates and zoom level
    const center: [number, number] = this.map2dOptions?.center || [0, 0];
    const zoom: number = this.map2dOptions?.zoom || 2;

    // Calculate minimum maxZoom from all tile servers
    // If no custom tiles are specified, allow zoom up to level 5 and upscale tiles as needed
    // (e.g., NaturalEarthII provides tiles up to level 2, but can be visually upscaled)
    let minMaxZoom = 5; // Default maximum zoom level for the map when no custom tiles are specified
    if (this.customTileUrls.length > 0) {
      const maxZooms = this.customTileUrls.map((config) => {
        return config.maxZoom ?? config.maximumLevel ?? 19;
      });
      minMaxZoom = Math.min(...maxZooms);
    }

    // Create Leaflet Map
    // If no custom tiles are specified, use EPSG:4326 (geographic CRS) for NaturalEarthII tiles
    const mapOptions: any = {
      center,
      zoom,
      zoomControl: false, // Hide zoom control (+/- buttons)
      attributionControl: true,
      maxZoom: minMaxZoom, // Use minimum maxZoom from all tile servers
    };
    
    // Use EPSG:4326 CRS when no tile servers are specified (for NaturalEarthII tiles)
    if (this.customTileUrls.length === 0) {
      mapOptions.crs = this.Leaflet.CRS.EPSG4326;
    }
    
    this.map = this.Leaflet.map(this.container, mapOptions);

    // Add tile layer
    this.setupBaseTileLayer();

    // Set sun shading
    this.setupTimeAndLighting();

    // Apply shading if lightingEnabled flag is true (after map is initialized)
    if (this.lightingEnabled) {
      this.updateNightShade();
    }

    // Control buttons are now managed by ViewContainer - skip creating individual buttons

    // Set node click event
    this.setupClickHandler();

    // Display existing data
    if (this.nodes.length > 0 || this.edges.length > 0) {
      this.render();
    }
  }

  /**
   * Set up base tile layer
   */
  private setupBaseTileLayer(): void {
    if (!this.map || !this.Leaflet) {
      return;
    }

    // Remove existing tile layer
    if (this.baseTileLayer) {
      this.map.removeLayer(this.baseTileLayer);
    }

    let tileLayer: LeafletTileLayer;

    // Use custom tile configs if specified (for on-premises or external tile servers)
    if (this.customTileUrls.length > 0) {
      const currentConfig = this.customTileUrls[this.currentCustomTileIndex];
      const maxZoom = currentConfig.maxZoom ?? currentConfig.maximumLevel ?? 19;
      const tms = currentConfig.tms ?? false;
      const attribution =
        currentConfig.attribution ??
        `Custom tile server (${this.currentCustomTileIndex + 1}/${this.customTileUrls.length})`;

      tileLayer = this.Leaflet.tileLayer(currentConfig.url, {
        maxZoom,
        tms, // TMS format (Y from bottom to top) if specified
        attribution,
      });
      tileLayer.addTo(this.map);
      this.baseTileLayer = tileLayer;
      return;
    }

    // If no custom tiles are specified, use Cesium bundled NaturalEarthII tiles
    // Use EPSG:4326 (set in initializeLeaflet when customTileUrls.length === 0)
    // NaturalEarthII is provided as TMS (Tile Map Service) with origin at (-180, -90), EPSG:4326
    // See: cesium/Assets/Textures/NaturalEarthII/tilemapresource.xml
    //
    // Leaflet supports TMS-style Y indexing via the `tms: true` option.
    // Combined with CRS.EPSG4326 and global bounds, this displays the tiles correctly.
    const naturalEarthIIUrl = '/cesium/Assets/Textures/NaturalEarthII/{z}/{x}/{y}.jpg';
    const naturalEarthBounds = this.Leaflet.latLngBounds([
      [-90, -180], // south, west
      [90, 180],   // north, east
    ]);

    tileLayer = this.Leaflet.tileLayer(naturalEarthIIUrl, {
      minZoom: 0,
      // Native tiles exist only up to zoom level 2, but the map itself can zoom further (e.g., up to 5)
      // Leaflet will automatically upscale tiles beyond maxNativeZoom.
      maxNativeZoom: 2,
      tms: true, // TMS scheme (Y from bottom to top)
      bounds: naturalEarthBounds,
      noWrap: true,
      continuousWorld: false,
      attribution: '© NASA',
    });
    tileLayer.addTo(this.map);
    this.baseTileLayer = tileLayer;
  }

  /**
   * Set time information and day/night shading
   */
  private setupTimeAndLighting(): void {
    if (!this.map || !this.Leaflet) {
      return;
    }

    // Set time if specified
    if (this.map2dOptions?.time) {
      this.setTime(this.map2dOptions.time);
    }

    // Configure lighting and day/night shading
    // ViewContainer shared state takes priority, so only explicitly disable if false is specified
    // Otherwise controlled by ViewContainer's applySharedToggleStates
    // Only disable on initialization if enableLighting is explicitly false
    // If enableLighting is true or unspecified, controlled by ViewContainer's applySharedToggleStates
    if (this.map2dOptions?.enableLighting === false) {
      this.setLighting(false);
    }
    // If enableLighting is true or unspecified, wait for ViewContainer shared state (applied on registerView)
  }

  /**
   * Set time
   * @param timeISO ISO 8601 time string (e.g., "2025-06-21T12:00:00Z")
   */
  setTime(timeISO: string): void {
    // Save time for sun shading calculation
    // Only save time here, actual calculation is done in setLighting
    if (!this.map2dOptions) {
      this.map2dOptions = {};
    }
    this.map2dOptions.time = timeISO;
    
    // Update if lighting is enabled
    if (this.lightingEnabled) {
      this.updateNightShade();
    }
  }

  /**
   * Set day/night shading on/off
   * @param enabled true to enable, false to disable
   */
  setLighting(enabled: boolean): void {
    if (this.lightingEnabled === enabled) {
      return; // No change
    }
    
    this.lightingEnabled = enabled;
    
    // mapが初期化されていない場合は、フラグだけを設定して後で適用する
    if (!this.map || !this.Leaflet) {
      // ボタンの表示を更新（mapがなくてもボタンは更新可能）
      this.updateLightingButton();
      return;
    }

    if (enabled) {
      this.updateNightShade();
    } else {
      // Remove night shade and debug layers
      if (this.nightShadeLayer) {
        this.map.removeLayer(this.nightShadeLayer);
        this.nightShadeLayer = null;
      }
      if (this.nightShadeDebugLayer) {
        this.map.removeLayer(this.nightShadeDebugLayer);
        this.nightShadeDebugLayer = null;
      }
    }

    // ボタンの表示を更新
    this.updateLightingButton();
  }

  /**
   * Check if day/night shading is enabled
   */
  isLightingEnabled(): boolean {
    return this.lightingEnabled;
  }

  /**
   * Get always show edges state
   */
  getAlwaysShowEdges(): boolean {
    return this.alwaysShowEdges;
  }

  /**
   * Set always show edges state
   */
  setAlwaysShowEdges(enabled: boolean): void {
    if (this.alwaysShowEdges !== enabled) {
      this.alwaysShowEdges = enabled;
      this.updateAlwaysShowEdgesButton();
      // エッジの表示/非表示を反映するために再描画（ただしfitToNodesは呼ばない）
      this.renderWithoutFit();
    }
  }

  /**
   * Get lighting enabled state (for View interface)
   */
  getLightingEnabled(): boolean {
    return this.isLightingEnabled();
  }

  /**
   * Set lighting enabled state (for View interface)
   * @param enabled trueで有効、falseで無効
   * @param notifyContainer ViewContainerに通知するかどうか（デフォルト: true）
   */
  setLightingEnabled(enabled: boolean, notifyContainer: boolean = true): void {
    const oldValue = this.lightingEnabled;
    this.setLighting(enabled);
    // ViewContainerに通知（初期化時は通知しない）
    if (notifyContainer && this.onLightingChange && this.lightingEnabled !== oldValue) {
      this.onLightingChange(this.lightingEnabled);
    }
  }

  /**
   * Set callback for always show edges state changes
   */
  setAlwaysShowEdgesChangeCallback(callback: (enabled: boolean) => void): void {
    this.onAlwaysShowEdgesChange = callback;
  }

  /**
   * Set callback for lighting state changes
   */
  setLightingChangeCallback(callback: (enabled: boolean) => void): void {
    this.onLightingChange = callback;
  }

  /**
   * Get number of available tile servers (customTileUrls length)
   */
  getTileServerCount(): number {
    return this.customTileUrls.length;
  }

  /**
   * Get current tile server index (0-based)
   */
  getTileServerIndex(): number {
    return this.currentCustomTileIndex;
  }

  /**
   * Set current tile server index (0-based, for synchronized switching from ViewContainer)
   */
  setTileServerIndex(index: number): void {
    if (this.customTileUrls.length === 0) {
      return;
    }

    // Normalize index within range
    const count = this.customTileUrls.length;
    const normalizedIndex = ((index % count) + count) % count;

    if (this.currentCustomTileIndex === normalizedIndex) {
      // Already at requested index
      return;
    }

    this.currentCustomTileIndex = normalizedIndex;

    // If map is initialized, immediately apply the new tile
    if (this.map && this.Leaflet) {
      this.setupBaseTileLayer();
      this.updateTileTypeButton();
    }
  }

  /**
   * Cycle to next tile server (for View interface)
   */
  cycleTileServer(): void {
    this.switchTileType();
  }

  /**
   * 夜のシェード（昼夜境界線）を更新
   */
  private updateNightShade(): void {
    if (!this.map || !this.Leaflet) {
      return;
    }

    // Remove existing shade and debug layers
    if (this.nightShadeLayer) {
      this.map.removeLayer(this.nightShadeLayer);
      this.nightShadeLayer = null;
    }
    if (this.nightShadeDebugLayer) {
      this.map.removeLayer(this.nightShadeDebugLayer);
      this.nightShadeDebugLayer = null;
    }

    if (!this.lightingEnabled) {
      return;
    }

    // Get time (default: current time)
    const timeISO = this.map2dOptions?.time || new Date().toISOString();
    
    // Calculate terminator boundary (inner ring for hole)
    const longitudeRange = 720; // -360 to +360 degrees
    const resolution = 2; // degrees
    const terminatorBoundary = this.calculateTerminatorBoundary(timeISO, longitudeRange, resolution);
    
    if (!terminatorBoundary || terminatorBoundary.length === 0) {
      return;
    }

    // Unwrap longitudes to ensure continuity across antimeridian
    const unwrappedBoundary = this.unwrapLongitudes(terminatorBoundary);
    
    // Leaflet.Terminator generates a polygon that represents the night side
    // We need to convert this to outer ring + hole structure
    // The terminator boundary from Leaflet.Terminator encloses the night side
    // So we need to create a hole that encloses the day side
    
    // Create outer ring covering entire world (CCW)
    const lonStart = -(longitudeRange / 2);
    const lonEnd = longitudeRange / 2;
    const outerRing: [number, number][] = [
      [90, lonStart],   // North pole, west
      [90, lonEnd],     // North pole, east
      [-90, lonEnd],    // South pole, east
      [-90, lonStart],  // South pole, west
      [90, lonStart],   // Close ring (counter-clockwise)
    ];
    
    // The terminator boundary from Leaflet.Terminator represents the night side boundary
    // To create a hole for the day side, we need to reverse the boundary
    // (or create a complementary ring)
    // Actually, Leaflet.Terminator's boundary already goes around the night side
    // So if we reverse it, we get the day side boundary
    
    // Convert unwrapped boundary to array format
    let innerRing: [number, number][] = unwrappedBoundary.map(p => [p.lat, p.lng]);
    
    // Ensure the ring is closed
    if (innerRing.length > 0 && 
        (innerRing[0][0] !== innerRing[innerRing.length - 1][0] || 
         innerRing[0][1] !== innerRing[innerRing.length - 1][1])) {
      innerRing.push([innerRing[0][0], innerRing[0][1]]);
    }
    
    // Leaflet.Terminator's boundary represents the night side polygon
    // The boundary structure from Leaflet.Terminator:
    // - Starts with a pole cap
    // - Then terminator points in longitude order
    // - Ends with the other pole cap
    // This forms a closed ring that encloses the night side
    //
    // For outer ring + hole structure:
    // - We want to cut out the day side (hole)
    // - The day side is the complement of the night side
    // - So we need a ring that encloses the day side (clockwise)
    //
    // The issue: Simply reversing the boundary might not work because
    // the boundary might already be in the correct order for a hole
    // Let's check the original boundary direction first
    
    // Check original boundary direction
    const originalRingPoints = innerRing.map(([lat, lng]) => ({ lat, lng }));
    const originalIsCCW = this.isCounterClockwise(originalRingPoints);
    
    if (originalIsCCW) {
      // Original is CCW (encloses night side)
      // Reverse it to get CW (encloses day side) for use as a hole
      innerRing.reverse();
      if (this.map2dOptions?.debugNightShading) {
        console.debug('[night-shade] Original boundary is CCW, reversed to CW for hole');
      }
    } else {
      // Original is already CW (might already enclose day side)
      // Use it directly
      if (this.map2dOptions?.debugNightShading) {
        console.debug('[night-shade] Original boundary is already CW, using as-is for hole');
      }
    }
    
    // Final verification: inner ring should be CW for holes
    const finalRingPoints = innerRing.map(([lat, lng]) => ({ lat, lng }));
    const finalIsCCW = this.isCounterClockwise(finalRingPoints);
    
    if (finalIsCCW) {
      // Still CCW after processing
      // This might be because the boundary structure is complex
      // Try one more time: reverse again and check
      innerRing.reverse();
      const recheckPoints = innerRing.map(([lat, lng]) => ({ lat, lng }));
      const recheckIsCCW = this.isCounterClockwise(recheckPoints);
      
      if (recheckIsCCW) {
        // Both directions are CCW, which shouldn't happen with a proper ring
        // This might indicate an issue with the boundary calculation
        // For now, use the original order and let Leaflet handle it
        if (this.map2dOptions?.debugNightShading) {
          console.debug('[night-shade] Warning: Inner ring direction check inconclusive, using current order');
        }
      } else {
        // Reversed is now CW, use it
        if (this.map2dOptions?.debugNightShading) {
          console.debug('[night-shade] Inner ring is CW after second reverse');
        }
      }
    } else {
      if (this.map2dOptions?.debugNightShading) {
        console.debug('[night-shade] Inner ring is CW, ready for use as hole');
      }
    }
    
    // Create polygon with outer ring + hole (inner ring)
    // Leaflet polygon with holes: first array is outer ring, subsequent arrays are holes
    // 
    // IMPORTANT: If the shading is inverted (day side is shaded instead of night side),
    // we need to NOT reverse the boundary, or use the boundary directly as the night polygon
    // 
    // Current approach: outer ring (world) + inner ring (day side hole) = night side filled
    // If this is inverted, try: use boundary directly as night polygon (no outer ring + hole)
    
    // Try using the boundary directly as night polygon first (simpler approach)
    // This matches Leaflet.Terminator's direct usage
    const nightPolygon: [number, number][] = unwrappedBoundary.map(p => [p.lat, p.lng]);
    
    // Ensure closed
    if (nightPolygon.length > 0 && 
        (nightPolygon[0][0] !== nightPolygon[nightPolygon.length - 1][0] || 
         nightPolygon[0][1] !== nightPolygon[nightPolygon.length - 1][1])) {
      nightPolygon.push([nightPolygon[0][0], nightPolygon[0][1]]);
    }
    
    // Use direct polygon approach (like Leaflet.Terminator does)
    // This directly fills the night side without outer ring + hole
    const shadePolygon = this.Leaflet.polygon(nightPolygon, {
      fillColor: '#000000',
      fillOpacity: 0.3,
      color: '#000000',
      weight: 0,
      interactive: false,
    });

    shadePolygon.addTo(this.map);
    this.nightShadeLayer = shadePolygon;
    
    // Debug mode: render terminator boundary as red polyline
    if (this.map2dOptions?.debugNightShading) {
      const debugPolyline = this.Leaflet.polyline(innerRing, {
        color: '#ff0000',
        weight: 2,
        opacity: 0.8,
        interactive: false,
      });
      debugPolyline.addTo(this.map);
      this.nightShadeDebugLayer = debugPolyline;
    }
  }

  /**
   * Check if a ring is counter-clockwise (CCW) or clockwise (CW)
   * Uses the shoelace formula to calculate signed area
   * Positive area = CCW, Negative area = CW
   * @param ring Array of {lat, lng} points forming a closed ring
   * @returns true if counter-clockwise, false if clockwise
   */
  private isCounterClockwise(ring: Array<{ lat: number; lng: number }>): boolean {
    if (ring.length < 3) return false;
    
    let area = 0;
    for (let i = 0; i < ring.length - 1; i++) {
      const p1 = ring[i];
      const p2 = ring[i + 1];
      area += (p2.lng - p1.lng) * (p2.lat + p1.lat);
    }
    
    // Positive area means CCW (counter-clockwise)
    return area > 0;
  }

  /**
   * Unwrap longitudes to ensure continuity across antimeridian
   * Adjusts adjacent points by +/-360 degrees if they jump by more than 180 degrees
   * @param points Array of {lat, lng} points
   * @returns Unwrapped points with continuous longitudes
   */
  private unwrapLongitudes(points: Array<{ lat: number; lng: number }>): Array<{ lat: number; lng: number }> {
    if (points.length === 0) return points;
    
    const result: Array<{ lat: number; lng: number }> = [{ ...points[0] }];
    
    for (let i = 1; i < points.length; i++) {
      let { lat, lng } = points[i];
      const prevLng = result[i - 1].lng;
      
      // Adjust longitude if jump is more than 180 degrees
      while (lng - prevLng > 180) {
        lng -= 360;
        if (this.map2dOptions?.debugNightShading) {
          console.debug('[night-shade] unwrap: adjusted longitude', { index: i, from: points[i].lng, to: lng, prevLng });
        }
      }
      while (lng - prevLng < -180) {
        lng += 360;
        if (this.map2dOptions?.debugNightShading) {
          console.debug('[night-shade] unwrap: adjusted longitude', { index: i, from: points[i].lng, to: lng, prevLng });
        }
      }
      
      result.push({ lat, lng });
    }
    
    return result;
  }

  /**
   * Calculate Julian Date from a Date object
   * Supports negative years (BC dates)
   * Based on Leaflet.Terminator implementation
   */
  private julian(date: Date): number {
    // Calculate the present UTC Julian Date
    // Valid after the beginning of the UNIX epoch 1970-01-01 and ignores leap seconds
    // For BC dates, Date.getTime() returns negative values, which is fine
    return (date.getTime() / 86400000) + 2440587.5;
  }

  /**
   * Calculate Greenwich Mean Sidereal Time
   * Based on Leaflet.Terminator implementation
   * Reference: http://aa.usno.navy.mil/faq/docs/GAST.php
   */
  private GMST(julianDay: number): number {
    const d = julianDay - 2451545.0;
    // Low precision equation is good enough for our purposes
    return (18.697374558 + 24.06570982441908 * d) % 24;
  }

  /**
   * Compute the position of the Sun in ecliptic coordinates
   * Based on Leaflet.Terminator implementation
   * Reference: http://en.wikipedia.org/wiki/Position_of_the_Sun
   */
  private sunEclipticPosition(julianDay: number): { lambda: number; R: number } {
    // Days since start of J2000.0
    const n = julianDay - 2451545.0;
    // Mean longitude of the Sun
    let L = 280.460 + 0.9856474 * n;
    L = ((L % 360) + 360) % 360; // Normalize to 0-360
    // Mean anomaly of the Sun
    let g = 357.528 + 0.9856003 * n;
    g = ((g % 360) + 360) % 360; // Normalize to 0-360
    const D2R = Math.PI / 180;
    // Ecliptic longitude of Sun
    const lambda = L + 1.915 * Math.sin(g * D2R) + 0.02 * Math.sin(2 * g * D2R);
    // Distance from Sun in AU
    const R = 1.00014 - 0.01671 * Math.cos(g * D2R) - 0.0014 * Math.cos(2 * g * D2R);
    return { lambda, R };
  }

  /**
   * Calculate ecliptic obliquity
   * Based on Leaflet.Terminator implementation
   * Reference: http://en.wikipedia.org/wiki/Axial_tilt#Obliquity_of_the_ecliptic_.28Earth.27s_axial_tilt.29
   */
  private eclipticObliquity(julianDay: number): number {
    const n = julianDay - 2451545.0;
    // Julian centuries since J2000.0
    const T = n / 36525;
    const epsilon = 23.43929111 -
      T * (46.836769 / 3600
        - T * (0.0001831 / 3600
          + T * (0.00200340 / 3600
            - T * (0.576e-6 / 3600
              - T * 4.34e-8 / 3600))));
    return epsilon;
  }

  /**
   * Compute the Sun's equatorial position from its ecliptic position
   * Based on Leaflet.Terminator implementation
   */
  private sunEquatorialPosition(sunEclLng: number, eclObliq: number): { alpha: number; delta: number } {
    const D2R = Math.PI / 180;
    const R2D = 180 / Math.PI;
    const alpha = Math.atan(Math.cos(eclObliq * D2R) * Math.tan(sunEclLng * D2R)) * R2D;
    const delta = Math.asin(Math.sin(eclObliq * D2R) * Math.sin(sunEclLng * D2R)) * R2D;

    const lQuadrant = Math.floor(sunEclLng / 90) * 90;
    const raQuadrant = Math.floor(alpha / 90) * 90;
    const adjustedAlpha = alpha + (lQuadrant - raQuadrant);

    return { alpha: adjustedAlpha, delta };
  }

  /**
   * Compute the hour angle of the sun for a longitude on Earth
   * Based on Leaflet.Terminator implementation
   */
  private hourAngle(lng: number, sunPos: { alpha: number; delta: number }, gst: number): number {
    const lst = gst + lng / 15;
    return lst * 15 - sunPos.alpha;
  }

  /**
   * For a given hour angle and sun position, compute the latitude of the terminator
   * Based on Leaflet.Terminator implementation
   */
  private terminatorLatitude(ha: number, sunPos: { alpha: number; delta: number }): number {
    const D2R = Math.PI / 180;
    const R2D = 180 / Math.PI;
    const lat = Math.atan(-Math.cos(ha * D2R) / Math.tan(sunPos.delta * D2R)) * R2D;
    return lat;
  }

  /**
   * Calculate terminator boundary using Leaflet.Terminator's algorithm
   * @param timeISO ISO 8601 time string
   * @param longitudeRange Longitude range (default: 720 degrees, -360 to +360)
   * @param resolution Resolution (points per degree, default: 2)
   * @returns Array of {lat, lng} points forming the terminator boundary
   */
  private calculateTerminatorBoundary(timeISO: string, longitudeRange: number = 720, resolution: number = 2): Array<{ lat: number; lng: number }> | null {
    try {
      // Convert time string to Date object
      // Support BC dates (negative years)
      let date: Date;
      if (timeISO.startsWith('-')) {
        // BC date: parse and create Date object
        // JavaScript Date supports years from -271821 to 275760
        // For dates before 1970, getTime() returns negative values
        date = new Date(timeISO);
        if (isNaN(date.getTime())) {
          console.warn('Invalid date format:', timeISO);
          return null;
        }
      } else {
        date = new Date(timeISO);
        if (isNaN(date.getTime())) {
          console.warn('Invalid date format:', timeISO);
          return null;
        }
      }

      // Calculate Julian Day
      const julianDay = this.julian(date);
      
      // Calculate Greenwich Mean Sidereal Time
      const gst = this.GMST(julianDay);
      
      // Calculate Sun's position
      const sunEclPos = this.sunEclipticPosition(julianDay);
      const eclObliq = this.eclipticObliquity(julianDay);
      const sunEqPos = this.sunEquatorialPosition(sunEclPos.lambda, eclObliq);
      
      // Calculate terminator points by looping through longitudes
      // Based on Leaflet.Terminator's approach
      // This creates a polygon that represents the night side
      const latLng: Array<{ lat: number; lng: number }> = [];
      
      // Loop through longitudes from -longitudeRange/2 to +longitudeRange/2
      // Leaflet.Terminator uses: for (var i = 0; i <= this.options.longitudeRange * this.options.resolution; i++)
      for (let i = 0; i <= longitudeRange * resolution; i++) {
        const lng = -longitudeRange / 2 + i / resolution;
        const ha = this.hourAngle(lng, sunEqPos, gst);
        const lat = this.terminatorLatitude(ha, sunEqPos);
        // Leaflet.Terminator stores as [lat, lng] array, we use {lat, lng} object
        latLng.push({ lat, lng });
      }
      
      // Add pole caps based on sun's declination
      // Leaflet.Terminator's logic:
      // if (sunEqPos.delta < 0) {
      //   latLng[0] = [90, -longitudeRange/2];
      //   latLng[latLng.length] = [90, longitudeRange/2];
      // } else {
      //   latLng[0] = [-90, -longitudeRange/2];
      //   latLng[latLng.length] = [-90, longitudeRange/2];
      // }
      if (sunEqPos.delta < 0) {
        // Sun is in southern hemisphere, add north pole caps
        latLng.unshift({ lat: 90, lng: -longitudeRange / 2 });
        latLng.push({ lat: 90, lng: longitudeRange / 2 });
      } else {
        // Sun is in northern hemisphere, add south pole caps
        latLng.unshift({ lat: -90, lng: -longitudeRange / 2 });
        latLng.push({ lat: -90, lng: longitudeRange / 2 });
      }

      return latLng.length > 0 ? latLng : null;
    } catch (error) {
      console.warn('Failed to calculate night polygon:', error);
      return null;
    }
  }

  /**
   * 年内の日数を計算
   * @param date 日付
   * @returns 年内の日数（1-365/366）
   */
  private getDayOfYear(date: Date): number {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  }

  /**
   * 太陽の赤緯（declination）を計算（簡易版）
   * @param dayOfYear 年内の日数（1-365/366）
   * @returns 赤緯（度）
   */
  private calculateSolarDeclination(dayOfYear: number): number {
    // 簡易計算式（精度は低いが実装が簡単）
    // より正確な計算には、より複雑な式が必要
    const declinationRad = 23.45 * Math.PI / 180 * Math.sin(2 * Math.PI * (284 + dayOfYear) / 365);
    return declinationRad * 180 / Math.PI;
  }

  /**
   * クリックハンドラーを設定
   */
  private setupClickHandler(): void {
    if (!this.map || !this.Leaflet) {
      return;
    }

    // Leafletのクリックイベントを設定
    this.map.on('click', (e: any) => {
      // マーカーやポリラインのクリックは、それぞれの要素で処理される
      // ここでは地図自体のクリックのみを処理
    });

    // マーカーのクリックイベントは、render()で個別に設定
  }

  /**
   * Set data
   */
  setData(nodes: Node[], edges: Edge[]): void {
    this.nodes = nodes;
    this.edges = edges;

    if (this.map && this.Leaflet) {
      this.render();
    }
  }

  /**
   * Select node (highlight)
   * If same node is selected again, switch to fit action showing entire view
   */
  selectNode(nodeId: string | null): void {
    // Deselect if nodeId is null
    if (!nodeId) {
      this.selectedNodeId = null;
      this.lastSelectedNodeId = null;
      this.renderWithoutFit();
      return;
    }
    
    if (!this.map || !this.Leaflet) {
      return;
    }
    
    // 同じノードが再度選択された場合は、フィット動作に切り替える
    // lastSelectedNodeIdが同じnodeIdの場合、トグルしてフィット
    if (nodeId === this.lastSelectedNodeId) {
      // フィット動作（全体を表示）
      this.selectedNodeId = null;
      this.lastSelectedNodeId = null;
      this.fitToNodes();
      this.renderWithoutFit();
      return;
    }
    
    // 異なるノードが選択された場合は、ノードにズームイン
    // lastSelectedNodeIdを更新（次回のクリックでトグル判定に使用）
    this.lastSelectedNodeId = nodeId;
    this.selectedNodeId = nodeId;
    
    const node = this.nodes.find(n => n.id === nodeId);
    if (!node) {
      return;
    }
    
    // 座標があるノードの場合
    if (node.coordinates && node.coordinates.length === 2) {
      const [lat, lon] = node.coordinates;
      if (Number.isFinite(lat) && Number.isFinite(lon)) {
        const [latitude, longitude] = node.coordinates;
        
        // レンダリングを更新（先にマーカーを再作成）
        this.renderWithoutFit();
        
        // ズームレベルを上げてノードの位置に移動（ズームイン）
        // flyToメソッドを使用してスムーズなアニメーションを実現
        this.map.flyTo([latitude, longitude], 4, { // 最大ズームレベル8
          duration: 1.0, // 1秒でアニメーション
          easeLinearity: 0.25, // イージングの線形性（0.25が推奨値）
        });
        
        // flyToのアニメーションが完了した後にポップアップを開く
        // moveendイベントを使用して、アニメーション完了後にポップアップを表示
        const onMoveEnd = () => {
          const marker = this.markers.get(nodeId);
          if (marker) {
            marker.openPopup();
          }
          // イベントリスナーを削除（一度だけ実行）
          this.map.off('moveend', onMoveEnd);
        };
        this.map.once('moveend', onMoveEnd);
        return;
      }
    }
    
    // 座標がないノードの場合、矩形内の位置を計算してズーム
    const nodesWithoutCoords = this.nodes.filter(n => {
      if (!n.coordinates) return true;
      if (!Array.isArray(n.coordinates) || n.coordinates.length !== 2) return true;
      const [lat, lon] = n.coordinates;
      return !Number.isFinite(lat) || !Number.isFinite(lon);
    });
    
    if (nodesWithoutCoords.length > 0) {
      const RECT_MIN_LAT = -50;
      const RECT_MAX_LAT = 0;
      const RECT_MIN_LON = -32;
      const RECT_MAX_LON = 0;
      
      // ノードが矩形内のどの位置に配置されているかを計算
      const cols = Math.ceil(Math.sqrt(nodesWithoutCoords.length));
      const rows = Math.ceil(nodesWithoutCoords.length / cols);
      const latStep = (RECT_MAX_LAT - RECT_MIN_LAT) / (rows + 1);
      const lonStep = (RECT_MAX_LON - RECT_MIN_LON) / (cols + 1);
      
      const nodeIndex = nodesWithoutCoords.findIndex(n => n.id === nodeId);
      if (nodeIndex >= 0) {
        const row = Math.floor(nodeIndex / cols);
        const col = nodeIndex % cols;
        const latitude = RECT_MIN_LAT + (row + 1) * latStep;
        const longitude = RECT_MIN_LON + (col + 1) * lonStep;
        
        // レンダリングを更新（先にマーカーを再作成）
        this.renderWithoutFit();
        
        // カメラを矩形内のノード位置に移動
        this.map.flyTo([latitude, longitude], 4, {
          duration: 1.0, // 1秒でアニメーション
          easeLinearity: 0.25,
        });
        
        // flyToのアニメーションが完了した後にポップアップを開く
        const onMoveEnd = () => {
          const marker = this.markers.get(nodeId);
          if (marker) {
            marker.openPopup();
          }
          this.map.off('moveend', onMoveEnd);
        };
        this.map.once('moveend', onMoveEnd);
      }
    } else {
      // レンダリングを更新（座標がない場合）
      this.renderWithoutFit();
    }
  }

  /**
   * Render nodes and edges
   */
  private render(): void {
    if (!this.map || !this.Leaflet) {
      return;
    }

    // 既存のマーカーとポリラインを削除
    this.markers.forEach(marker => {
      this.map!.removeLayer(marker);
    });
    this.markers.clear();

    this.polylines.forEach(polyline => {
      this.map!.removeLayer(polyline);
    });
    this.polylines.clear();

    // 座標がないノードを収集（coordinatesがundefined、null、または有効な数値のペアでない場合）
    const nodesWithoutCoords = this.nodes.filter(n => {
      if (!n.coordinates) return true;
      if (!Array.isArray(n.coordinates) || n.coordinates.length !== 2) return true;
      const [lat, lon] = n.coordinates;
      return !Number.isFinite(lat) || !Number.isFinite(lon);
    });
    const nodesWithCoords = this.nodes.filter(n => {
      if (!n.coordinates) return false;
      if (!Array.isArray(n.coordinates) || n.coordinates.length !== 2) return false;
      const [lat, lon] = n.coordinates;
      return Number.isFinite(lat) && Number.isFinite(lon);
    });

    // 座標がないノードを矩形内に配置（Map2D: 0,0から-50,-32が対角線）
    if (nodesWithoutCoords.length > 0) {
      const RECT_MIN_LAT = -50;
      const RECT_MAX_LAT = 0;
      const RECT_MIN_LON = -32;
      const RECT_MAX_LON = 0;
      
      // 矩形の境界線を描画
      const rectBounds = this.Leaflet.latLngBounds(
        [RECT_MIN_LAT, RECT_MIN_LON],
        [RECT_MAX_LAT, RECT_MAX_LON]
      );
      this.rectLayer = this.Leaflet.rectangle(rectBounds, {
        color: '#666',
        fillColor: '#f0f0f0',
        fillOpacity: 0.1,
        weight: 1,
        dashArray: '5,5',
      });
      this.rectLayer.addTo(this.map);

      // ノードを矩形内に均等に配置
      const cols = Math.ceil(Math.sqrt(nodesWithoutCoords.length));
      const rows = Math.ceil(nodesWithoutCoords.length / cols);
      const latStep = (RECT_MAX_LAT - RECT_MIN_LAT) / (rows + 1);
      const lonStep = (RECT_MAX_LON - RECT_MIN_LON) / (cols + 1);

      nodesWithoutCoords.forEach((node, index) => {
        const row = Math.floor(index / cols);
        const col = index % cols;
        const latitude = RECT_MIN_LAT + (row + 1) * latStep;
        const longitude = RECT_MIN_LON + (col + 1) * lonStep;

        const isSelected = this.selectedNodeId === node.id;
        const nodeColor = node.style?.color || '#ffffff';
        const borderColor = isSelected ? '#2196f3' : (node.style?.borderColor || '#333333');

        const iconHtml = `
          <div style="
            width: ${isSelected ? 15 : 10}px;
            height: ${isSelected ? 15 : 10}px;
            background-color: ${nodeColor};
            border: 2px solid ${borderColor};
            border-radius: 50%;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          "></div>
        `;

        const icon = this.Leaflet.divIcon({
          html: iconHtml,
          className: 'relatos-node-marker',
          iconSize: [isSelected ? 15 : 10, isSelected ? 15 : 10],
          iconAnchor: [isSelected ? 7.5 : 5, isSelected ? 7.5 : 5],
        });

        const marker = this.Leaflet.marker([latitude, longitude], { icon });
        marker.bindPopup(node.label, {
          closeButton: false,
          offset: [0, -10],
        });

        marker.on('click', (e: any) => {
          if (this.onNodeClick) {
            const latlng = e.latlng;
            this.onNodeClick({
              node,
              position: { x: latlng.lng, y: latlng.lat },
              originalEvent: e.originalEvent,
            });
          }
        });

        marker.addTo(this.map);
        this.markers.set(node.id, marker);
      });
    }

    // 座標があるノードを描画
    for (const node of nodesWithCoords) {
      const [latitude, longitude] = node.coordinates!;
      const isSelected = this.selectedNodeId === node.id;

      // ノードの色を取得
      const nodeColor = node.style?.color || '#ffffff';
      const borderColor = isSelected ? '#2196f3' : (node.style?.borderColor || '#333333');

      // カスタムアイコンを作成
      const iconHtml = `
        <div style="
          width: ${isSelected ? 15 : 10}px;
          height: ${isSelected ? 15 : 10}px;
          background-color: ${nodeColor};
          border: 2px solid ${borderColor};
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        "></div>
      `;

      const icon = this.Leaflet.divIcon({
        html: iconHtml,
        className: 'relatos-node-marker',
        iconSize: [isSelected ? 15 : 10, isSelected ? 15 : 10],
        iconAnchor: [isSelected ? 7.5 : 5, isSelected ? 7.5 : 5],
      });

      // マーカーを作成
      const marker = this.Leaflet.marker([latitude, longitude], { icon });

      // ラベルを追加（ポップアップとして）
      marker.bindPopup(node.label, {
        closeButton: false,
        offset: [0, -10],
      });

      // クリックイベントを設定
      marker.on('click', (e: any) => {
        if (this.onNodeClick) {
          const latlng = e.latlng;
          this.onNodeClick({
            node,
            position: { x: latlng.lng, y: latlng.lat },
            originalEvent: e.originalEvent,
            view: 'map2d',
          });
        }
      });

      marker.addTo(this.map);
      this.markers.set(node.id, marker);
    }

    // エッジを描画（alwaysShowEdgesがtrueの場合のみ）
    if (this.alwaysShowEdges) {
      for (const edge of this.edges) {
        const srcNode = this.nodes.find(n => n.id === edge.src);
        const dstNode = this.nodes.find(n => n.id === edge.dst);

        if (!srcNode?.coordinates || !dstNode?.coordinates) {
          continue; // 座標がないノードはスキップ
        }

        const [srcLat, srcLon] = srcNode.coordinates;
        const [dstLat, dstLon] = dstNode.coordinates;

        // エッジの色を取得
        const edgeColor = edge.style?.color || '#999999';
        const edgeWeight = edge.style?.weight || 1;
        const width = Math.max(1, Math.min(5, edgeWeight));

        // ポリラインを作成
        const polyline = this.Leaflet.polyline(
          [[srcLat, srcLon], [dstLat, dstLon]],
          {
            color: edgeColor,
            weight: width,
            opacity: 0.7,
          }
        );

        // クリックイベントを設定
        polyline.on('click', (e: any) => {
          if (this.onEdgeClick) {
            const latlng = e.latlng;
            this.onEdgeClick({
              edge,
              position: { x: latlng.lng, y: latlng.lat },
              originalEvent: e.originalEvent,
              view: 'map2d',
            });
          }
        });

        polyline.addTo(this.map);
        this.polylines.set(edge.id, polyline);
      }
    }

    // カメラを調整してすべてのノードが表示されるようにする（初期化時のみ）
    this.fitToNodes();
  }

  /**
   * ノードとエッジを描画（フィット動作なし）
   */
  private renderWithoutFit(): void {
    if (!this.map || !this.Leaflet) {
      return;
    }

    // 既存のマーカーとポリラインを削除
    this.markers.forEach(marker => {
      this.map!.removeLayer(marker);
    });
    this.markers.clear();

    this.polylines.forEach(polyline => {
      this.map!.removeLayer(polyline);
    });
    this.polylines.clear();

    // 矩形レイヤーを削除
    if (this.rectLayer) {
      this.map!.removeLayer(this.rectLayer);
      this.rectLayer = null;
    }

    // 座標がないノードを収集（coordinatesがundefined、null、または有効な数値のペアでない場合）
    const nodesWithoutCoords = this.nodes.filter(n => {
      if (!n.coordinates) return true;
      if (!Array.isArray(n.coordinates) || n.coordinates.length !== 2) return true;
      const [lat, lon] = n.coordinates;
      return !Number.isFinite(lat) || !Number.isFinite(lon);
    });
    const nodesWithCoords = this.nodes.filter(n => {
      if (!n.coordinates) return false;
      if (!Array.isArray(n.coordinates) || n.coordinates.length !== 2) return false;
      const [lat, lon] = n.coordinates;
      return Number.isFinite(lat) && Number.isFinite(lon);
    });

    // 座標がないノードを矩形内に配置（Map2D: 0,0から-50,-32が対角線）
    if (nodesWithoutCoords.length > 0) {
      const RECT_MIN_LAT = -50;
      const RECT_MAX_LAT = 0;
      const RECT_MIN_LON = -32;
      const RECT_MAX_LON = 0;
      
      // 矩形の境界線を描画
      const rectBounds = this.Leaflet.latLngBounds(
        [RECT_MIN_LAT, RECT_MIN_LON],
        [RECT_MAX_LAT, RECT_MAX_LON]
      );
      this.rectLayer = this.Leaflet.rectangle(rectBounds, {
        color: '#666',
        fillColor: '#f0f0f0',
        fillOpacity: 0.1,
        weight: 1,
        dashArray: '5,5',
      });
      this.rectLayer.addTo(this.map);

      // ノードを矩形内に均等に配置
      const cols = Math.ceil(Math.sqrt(nodesWithoutCoords.length));
      const rows = Math.ceil(nodesWithoutCoords.length / cols);
      const latStep = (RECT_MAX_LAT - RECT_MIN_LAT) / (rows + 1);
      const lonStep = (RECT_MAX_LON - RECT_MIN_LON) / (cols + 1);

      nodesWithoutCoords.forEach((node, index) => {
        const row = Math.floor(index / cols);
        const col = index % cols;
        const latitude = RECT_MIN_LAT + (row + 1) * latStep;
        const longitude = RECT_MIN_LON + (col + 1) * lonStep;

        const isSelected = this.selectedNodeId === node.id;
        const nodeColor = node.style?.color || '#ffffff';
        const borderColor = isSelected ? '#2196f3' : (node.style?.borderColor || '#333333');

        const iconHtml = `
          <div style="
            width: ${isSelected ? 15 : 10}px;
            height: ${isSelected ? 15 : 10}px;
            background-color: ${nodeColor};
            border: 2px solid ${borderColor};
            border-radius: 50%;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          "></div>
        `;

        const icon = this.Leaflet.divIcon({
          html: iconHtml,
          className: 'relatos-node-marker',
          iconSize: [isSelected ? 15 : 10, isSelected ? 15 : 10],
          iconAnchor: [isSelected ? 7.5 : 5, isSelected ? 7.5 : 5],
        });

        const marker = this.Leaflet.marker([latitude, longitude], { icon });
        marker.bindPopup(node.label, {
          closeButton: false,
          offset: [0, -10],
        });

        marker.on('click', (e: any) => {
          if (this.onNodeClick) {
            const latlng = e.latlng;
            this.onNodeClick({
              node,
              position: { x: latlng.lng, y: latlng.lat },
              originalEvent: e.originalEvent,
              view: 'map2d',
            });
          }
        });

        marker.addTo(this.map);
        this.markers.set(node.id, marker);
      });
    }

    // 座標があるノードを描画
    for (const node of nodesWithCoords) {
      const [latitude, longitude] = node.coordinates!;
      const isSelected = this.selectedNodeId === node.id;

      const nodeColor = node.style?.color || '#ffffff';
      const borderColor = isSelected ? '#2196f3' : (node.style?.borderColor || '#333333');

      const iconHtml = `
        <div style="
          width: ${isSelected ? 15 : 10}px;
          height: ${isSelected ? 15 : 10}px;
          background-color: ${nodeColor};
          border: 2px solid ${borderColor};
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        "></div>
      `;

      const icon = this.Leaflet.divIcon({
        html: iconHtml,
        className: 'relatos-node-marker',
        iconSize: [isSelected ? 15 : 10, isSelected ? 15 : 10],
        iconAnchor: [isSelected ? 7.5 : 5, isSelected ? 7.5 : 5],
      });

      const marker = this.Leaflet.marker([latitude, longitude], { icon });
      marker.bindPopup(node.label, {
        closeButton: false,
        offset: [0, -10],
      });

      marker.on('click', (e: any) => {
        if (this.onNodeClick) {
          const latlng = e.latlng;
          this.onNodeClick({
            node,
            position: { x: latlng.lng, y: latlng.lat },
            originalEvent: e.originalEvent,
          });
        }
      });

      marker.addTo(this.map);
      this.markers.set(node.id, marker);
    }

    // エッジを描画（alwaysShowEdgesがtrueの場合のみ）
    if (this.alwaysShowEdges) {
      for (const edge of this.edges) {
        const srcNode = this.nodes.find(n => n.id === edge.src);
        const dstNode = this.nodes.find(n => n.id === edge.dst);

        if (!srcNode?.coordinates || !dstNode?.coordinates) {
          continue;
        }

        const [srcLat, srcLon] = srcNode.coordinates;
        const [dstLat, dstLon] = dstNode.coordinates;

        const edgeColor = edge.style?.color || '#999999';
        const edgeWeight = edge.style?.weight || 1;
        const width = Math.max(1, Math.min(5, edgeWeight));

        const polyline = this.Leaflet.polyline(
          [[srcLat, srcLon], [dstLat, dstLon]],
          {
            color: edgeColor,
            weight: width,
            opacity: 0.7,
          }
        );

        polyline.on('click', (e: any) => {
          if (this.onEdgeClick) {
            const latlng = e.latlng;
            this.onEdgeClick({
              edge,
              position: { x: latlng.lng, y: latlng.lat },
              originalEvent: e.originalEvent,
              view: 'map2d',
            });
          }
        });

        polyline.addTo(this.map);
        this.polylines.set(edge.id, polyline);
      }
    }
  }

  /**
   * フィットボタンと昼夜陰影ON/OFFボタンを作成
   */
  private createControlButtons(): void {
    if (!this.container) {
      return;
    }

    // ボタンコンテナを作成（既存のものがあれば再利用）
    let buttonContainer = this.container.querySelector('.relatos-map2d-controls') as HTMLElement;
    if (!buttonContainer) {
      buttonContainer = document.createElement('div');
      buttonContainer.className = 'relatos-map2d-controls';
      buttonContainer.style.position = 'absolute';
      buttonContainer.style.top = '8px';
      buttonContainer.style.right = '8px';
      buttonContainer.style.display = 'flex';
      buttonContainer.style.gap = '4px';
      buttonContainer.style.zIndex = '1000';
      buttonContainer.style.pointerEvents = 'none';
      this.container.appendChild(buttonContainer);
    }

    // エッジ表示ON/OFFボタンを作成
    this.alwaysShowEdgesButton = document.createElement('button');
    this.alwaysShowEdgesButton.innerHTML = createSvgIcon('icon-relations', 16);
    this.alwaysShowEdgesButton.setAttribute('aria-label', 'Toggle edges');
    this.alwaysShowEdgesButton.setAttribute('title', 'Toggle edges');
    this.alwaysShowEdgesButton.style.padding = '6px';
    this.alwaysShowEdgesButton.style.border = '1px solid #ccc';
    this.alwaysShowEdgesButton.style.borderRadius = '4px';
    this.alwaysShowEdgesButton.style.backgroundColor = '#fff';
    this.alwaysShowEdgesButton.style.cursor = 'pointer';
    this.alwaysShowEdgesButton.style.fontSize = '16px';
    this.alwaysShowEdgesButton.style.width = '32px';
    this.alwaysShowEdgesButton.style.height = '32px';
    this.alwaysShowEdgesButton.style.display = 'flex';
    this.alwaysShowEdgesButton.style.alignItems = 'center';
    this.alwaysShowEdgesButton.style.justifyContent = 'center';
    this.alwaysShowEdgesButton.style.pointerEvents = 'auto';
    this.alwaysShowEdgesButton.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    this.alwaysShowEdgesButton.style.transition = '0.2s';
    this.alwaysShowEdgesButton.style.color = '#000000';

    // クリックイベントを設定
    this.alwaysShowEdgesButton.addEventListener('click', () => {
      this.alwaysShowEdges = !this.alwaysShowEdges;
      this.updateAlwaysShowEdgesButton();
      // Notify ViewContainer of state change
      if (this.onAlwaysShowEdgesChange) {
        this.onAlwaysShowEdgesChange(this.alwaysShowEdges);
      }
      // エッジの表示/非表示を反映するために再描画（ただしfitToNodesは呼ばない）
      this.renderWithoutFit();
    });

    // 昼夜陰影ON/OFFボタンを作成
    this.lightingToggleButton = document.createElement('button');
    this.lightingToggleButton.innerHTML = createSvgIcon('icon-sun', 16);
    this.lightingToggleButton.setAttribute('aria-label', 'Toggle lighting');
    this.lightingToggleButton.setAttribute('title', 'Toggle lighting');
    this.lightingToggleButton.style.padding = '6px';
    this.lightingToggleButton.style.border = '1px solid #ccc';
    this.lightingToggleButton.style.borderRadius = '4px';
    this.lightingToggleButton.style.backgroundColor = '#fff';
    this.lightingToggleButton.style.cursor = 'pointer';
    this.lightingToggleButton.style.fontSize = '16px';
    this.lightingToggleButton.style.width = '32px';
    this.lightingToggleButton.style.height = '32px';
    this.lightingToggleButton.style.display = 'flex';
    this.lightingToggleButton.style.alignItems = 'center';
    this.lightingToggleButton.style.justifyContent = 'center';
    this.lightingToggleButton.style.pointerEvents = 'auto';
    this.lightingToggleButton.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    this.lightingToggleButton.style.transition = '0.2s';

    // クリックイベントを設定
    this.lightingToggleButton.addEventListener('click', () => {
      const currentEnabled = this.isLightingEnabled();
      this.setLighting(!currentEnabled);
      // Notify ViewContainer of state change
      if (this.onLightingChange) {
        this.onLightingChange(!currentEnabled);
      }
    });

    // フィットボタンを作成
    this.fitCenterButton = document.createElement('button');
    this.fitCenterButton.innerHTML = createSvgIcon('icon-home', 16);
    this.fitCenterButton.setAttribute('aria-label', 'Fit and center');
    this.fitCenterButton.setAttribute('title', 'Fit and center');
    this.fitCenterButton.style.padding = '6px';
    this.fitCenterButton.style.border = '1px solid #ccc';
    this.fitCenterButton.style.borderRadius = '4px';
    this.fitCenterButton.style.backgroundColor = '#fff';
    this.fitCenterButton.style.cursor = 'pointer';
    this.fitCenterButton.style.fontSize = '16px';
    this.fitCenterButton.style.width = '32px';
    this.fitCenterButton.style.height = '32px';
    this.fitCenterButton.style.display = 'flex';
    this.fitCenterButton.style.alignItems = 'center';
    this.fitCenterButton.style.justifyContent = 'center';
    this.fitCenterButton.style.pointerEvents = 'auto';
    this.fitCenterButton.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    this.fitCenterButton.style.transition = '0.2s';

    // クリックイベントを設定
    this.fitCenterButton.addEventListener('click', () => {
      this.fitToNodes();
    });

    // タイルタイプ切り替えボタンを作成
    this.tileTypeButton = document.createElement('button');
    this.tileTypeButton.innerHTML = '🗺️';
    this.tileTypeButton.setAttribute('aria-label', 'Switch tile type');
    this.tileTypeButton.style.padding = '6px';
    this.tileTypeButton.style.border = '1px solid #ccc';
    this.tileTypeButton.style.borderRadius = '4px';
    this.tileTypeButton.style.backgroundColor = '#fff';
    this.tileTypeButton.style.cursor = 'pointer';
    this.tileTypeButton.style.fontSize = '16px';
    this.tileTypeButton.style.width = '32px';
    this.tileTypeButton.style.height = '32px';
    this.tileTypeButton.style.display = 'flex';
    this.tileTypeButton.style.alignItems = 'center';
    this.tileTypeButton.style.justifyContent = 'center';
    this.tileTypeButton.style.pointerEvents = 'auto';
    this.tileTypeButton.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    this.tileTypeButton.style.transition = '0.2s';

    this.tileTypeButton.addEventListener('click', () => {
      this.switchTileType();
    });

    // ボタンを追加（左からエッジ表示ON/OFF、昼夜陰影ON/OFF、タイルタイプ、フィット）
    buttonContainer.appendChild(this.alwaysShowEdgesButton);
    buttonContainer.appendChild(this.lightingToggleButton);
    buttonContainer.appendChild(this.tileTypeButton);
    buttonContainer.appendChild(this.fitCenterButton);

    // 初期状態のボタン表示を更新
    this.updateAlwaysShowEdgesButton();
    this.updateLightingButton();
    this.updateTileTypeButton();
  }

  /**
   * customTileUrlsを順番に切り替え
   */
  private switchTileType(): void {
    // If customTileUrls are specified, switch between them
    if (this.customTileUrls.length > 1) {
      this.currentCustomTileIndex = (this.currentCustomTileIndex + 1) % this.customTileUrls.length;
      this.setupBaseTileLayer();
      this.updateTileTypeButton();
      return;
    }

    // If single customTileUrl is specified or no custom tiles, do nothing
  }

  /**
   * タイルタイプボタンの表示を更新
   */
  private updateTileTypeButton(): void {
    if (!this.tileTypeButton) {
      return;
    }

    // Show tile type button only if customTileUrls has 2 or more items
    // Hide if single customTileUrl or no customTileUrls
    if (this.customTileUrls.length > 1) {
      // Show button and display current tile index
      this.tileTypeButton.style.display = 'flex';
      const currentIndex = this.currentCustomTileIndex + 1;
      const totalTiles = this.customTileUrls.length;
      this.tileTypeButton.setAttribute('title', `Custom tile ${currentIndex}/${totalTiles}`);
      this.tileTypeButton.style.backgroundColor = '#fff';
      this.tileTypeButton.style.borderColor = '#ccc';
      this.tileTypeButton.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
      this.tileTypeButton.style.transform = 'translateY(0)';
      return;
    }

    // Hide tile type button if single customTileUrl or no customTileUrls
    if (this.customTileUrls.length > 0) {
      this.tileTypeButton.style.display = 'none';
      return;
    }
    // No custom tiles: hide button completely
    this.tileTypeButton.style.display = 'none';
  }

  /**
   * エッジ表示ON/OFFボタンの表示を更新
   */
  private updateAlwaysShowEdgesButton(): void {
    if (!this.alwaysShowEdgesButton) {
      return;
    }

    if (this.alwaysShowEdges) {
      this.alwaysShowEdgesButton.setAttribute('aria-label', 'Hide edges');
      this.alwaysShowEdgesButton.setAttribute('title', 'Hide edges');
      this.alwaysShowEdgesButton.style.backgroundColor = '#fff9c4';
      this.alwaysShowEdgesButton.style.color = '#000000';
      this.alwaysShowEdgesButton.style.borderColor = '#999';
      this.alwaysShowEdgesButton.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.2)';
      this.alwaysShowEdgesButton.style.transform = 'translateY(1px)';
    } else {
      this.alwaysShowEdgesButton.setAttribute('aria-label', 'Show edges');
      this.alwaysShowEdgesButton.setAttribute('title', 'Show edges');
      this.alwaysShowEdgesButton.style.backgroundColor = '#fff';
      this.alwaysShowEdgesButton.style.color = '#000000';
      this.alwaysShowEdgesButton.style.borderColor = '#ccc';
      this.alwaysShowEdgesButton.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
      this.alwaysShowEdgesButton.style.transform = 'translateY(0)';
    }
  }

  /**
   * 昼夜陰影ボタンの表示を更新
   */
  private updateLightingButton(): void {
    if (!this.lightingToggleButton) {
      return;
    }

    const enabled = this.isLightingEnabled();
    this.lightingToggleButton.innerHTML = createSvgIcon('icon-sun', 16);
    if (enabled) {
      this.lightingToggleButton.style.backgroundColor = '#fff9c4';
      this.lightingToggleButton.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.2)';
      this.lightingToggleButton.style.transform = 'translateY(1px)';
    } else {
      this.lightingToggleButton.style.backgroundColor = '#fff';
      this.lightingToggleButton.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
      this.lightingToggleButton.style.transform = 'translateY(0)';
    }
    this.lightingToggleButton.style.color = '#333';
  }

  /**
   * Fit and center view (for View interface)
   */
  fitAndCenter(): void {
    this.fitToNodes();
  }

  /**
   * カメラを調整してすべてのノードが表示されるようにする
   */
  private fitToNodes(): void {
    if (!this.map || !this.Leaflet || this.nodes.length === 0) {
      return;
    }

    // 座標があるノードと座標がないノードを分離
    const nodesWithCoords = this.nodes.filter(n => {
      if (!n.coordinates) return false;
      if (!Array.isArray(n.coordinates) || n.coordinates.length !== 2) return false;
      const [lat, lon] = n.coordinates;
      return Number.isFinite(lat) && Number.isFinite(lon);
    });
    const nodesWithoutCoords = this.nodes.filter(n => {
      if (!n.coordinates) return true;
      if (!Array.isArray(n.coordinates) || n.coordinates.length !== 2) return true;
      const [lat, lon] = n.coordinates;
      return !Number.isFinite(lat) || !Number.isFinite(lon);
    });

    // すべての座標を収集（座標があるノード + 座標がないノードの代替座標）
    const allLats: number[] = [];
    const allLons: number[] = [];

    // 座標があるノードの座標を追加
    nodesWithCoords.forEach(n => {
      if (n.coordinates && n.coordinates.length === 2) {
        const [lat, lon] = n.coordinates;
        if (Number.isFinite(lat) && Number.isFinite(lon)) {
          allLats.push(lat);
          allLons.push(lon);
        }
      }
    });

    // 座標がないノードの代替座標を計算して追加
    if (nodesWithoutCoords.length > 0) {
      const RECT_MIN_LAT = -50;
      const RECT_MAX_LAT = 0;
      const RECT_MIN_LON = -32;
      const RECT_MAX_LON = 0;

      const cols = Math.ceil(Math.sqrt(nodesWithoutCoords.length));
      const rows = Math.ceil(nodesWithoutCoords.length / cols);
      const latStep = (RECT_MAX_LAT - RECT_MIN_LAT) / (rows + 1);
      const lonStep = (RECT_MAX_LON - RECT_MIN_LON) / (cols + 1);

      nodesWithoutCoords.forEach((node, index) => {
        const row = Math.floor(index / cols);
        const col = index % cols;
        const latitude = RECT_MIN_LAT + (row + 1) * latStep;
        const longitude = RECT_MIN_LON + (col + 1) * lonStep;
        allLats.push(latitude);
        allLons.push(longitude);
      });
    }

    // 座標が1つもない場合は処理しない
    if (allLats.length === 0) {
      return;
    }

    // すべての座標から境界を計算
    const minLat = Math.min(...allLats);
    const maxLat = Math.max(...allLats);
    const minLon = Math.min(...allLons);
    const maxLon = Math.max(...allLons);

    // バウンディングボックスを作成
    const bounds = this.Leaflet.latLngBounds(
      [minLat, minLon],
      [maxLat, maxLon]
    );

    // マップをフィット
    // タイルサーバーへの負荷を防ぐため、最大ズームレベルを8に制限
    // flyToBoundsメソッドを使用してスムーズなアニメーションを実現
    this.map.flyToBounds(bounds, {
      padding: [20, 20],
      maxZoom: 5, // 最大ズームレベルを5に制限
      duration: 1.0, // 1秒でアニメーション
      easeLinearity: 0.25, // イージングの線形性（0.25が推奨値）
    });
  }

  /**
   * Show view
   */
  show(): void {
    this.container.style.display = 'block';
    if (this.map) {
      this.map.invalidateSize();
    } else if (this.leafletLoader) {
      // Initialize Leaflet on first show
      this.initializeLeaflet().catch((error) => {
        console.error('Failed to initialize Leaflet:', error);
      });
    }
  }

  /**
   * Hide view
   */
  hide(): void {
    this.container.style.display = 'none';
  }

  /**
   * Resize view
   */
  resize(): void {
    if (this.map) {
      this.map.invalidateSize();
    }
  }

  /**
   * Destroy view
   */
  destroy(): void {
    if (this.map) {
      this.map.remove();
      this.map = null;
    }
    this.markers.clear();
    this.polylines.clear();
  }

  /**
   * Check if editable (Map2D is not editable)
   */
  isEditable(): boolean {
    return false;
  }
}