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
  private timeISO: string | null = null; // Shared time for sun shading calculation
  private moonToggleButton: HTMLButtonElement | null = null; // Moon toggle button
  private moonEnabled: boolean = false; // Moon display flag
  private moonMarker: LeafletMarker | null = null; // Moon marker on map
  private map2dOptions?: {
    center?: [number, number];
    zoom?: number;
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

    // Update moon marker if enabled
    if (this.moonEnabled) {
      this.updateMoonMarker();
    }

    // Control buttons are now managed by ViewContainer - skip creating individual buttons

    // Set node click event
    this.setupClickHandler();
    
    // Moon marker position is calculated from time only, not from map position
    // No need to update on map move/zoom

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
   * Time and lighting are now controlled by ViewContainer's shared state
   */
  private setupTimeAndLighting(): void {
    if (!this.map || !this.Leaflet) {
      return;
    }
    // Time and lighting are applied via ViewContainer's applySharedToggleStates
  }

  /**
   * Set time
   * @param timeISO ISO 8601 time string (e.g., "2025-06-21T12:00:00Z")
   */
  setTime(timeISO: string): void {
    this.timeISO = timeISO;
    
    // Update if lighting is enabled
    if (this.lightingEnabled) {
      this.updateNightShade();
    }
    
    // Always update moon button icon (to reflect current moon phase)
    this.updateMoonButton();
    
    // Update moon marker if moon is enabled
    if (this.moonEnabled) {
      this.updateMoonMarker();
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
    
    // If map is not initialized, only set the flag and apply later
    if (!this.map || !this.Leaflet) {
      // Update button appearance (button can be updated even without map)
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

    // Update button appearance
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
      // Re-render to reflect edge visibility changes (without calling fitToNodes)
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
   * @param enabled true to enable, false to disable
   * @param notifyContainer Whether to notify ViewContainer (default: true)
   */
  setLightingEnabled(enabled: boolean, notifyContainer: boolean = true): void {
    const oldValue = this.lightingEnabled;
    this.setLighting(enabled);
    // Notify ViewContainer (not during initialization)
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
   * Update night shade (day/night terminator)
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
    const timeISO = this.timeISO || new Date().toISOString();
    
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
    } else {
      // Original is already CW (might already enclose day side)
      // Use it directly
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
      } else {
        // Reversed is now CW, use it
      }
    } else {
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
      }
      while (lng - prevLng < -180) {
        lng += 360;
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
          return null;
        }
      } else {
        date = new Date(timeISO);
        if (isNaN(date.getTime())) {
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
      return null;
    }
  }

  /**
   * Calculate day of year
   * @param date Date
   * @returns Day of year (1-365/366)
   */
  private getDayOfYear(date: Date): number {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  }

  /**
   * Calculate solar declination (simplified version)
   * @param dayOfYear Day of year (1-365/366)
   * @returns Declination in degrees
   */
  private calculateSolarDeclination(dayOfYear: number): number {
    // Simplified calculation formula (low precision but simple implementation)
    // More accurate calculation requires more complex formulas
    const declinationRad = 23.45 * Math.PI / 180 * Math.sin(2 * Math.PI * (284 + dayOfYear) / 365);
    return declinationRad * 180 / Math.PI;
  }

  /**
   * Setup click handler
   */
  private setupClickHandler(): void {
    if (!this.map || !this.Leaflet) {
      return;
    }

    // Set up Leaflet click event
    this.map.on('click', (e: any) => {
      // Marker and polyline clicks are handled by their respective elements
      // Only map clicks are handled here
    });

    // Marker click events are set individually in render()
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
    
    // If the same node is selected again, switch to fit action
    // If lastSelectedNodeId is the same as nodeId, toggle to fit
    if (nodeId === this.lastSelectedNodeId) {
      // Fit action (show all)
      // Keep selectedNodeId to maintain popup display (like Graph view behavior)
      this.lastSelectedNodeId = null;
      // Fit to show all nodes, popup remains visible
      this.fitToNodes();
      return;
    }
    
    // If a different node is selected, zoom in to the node
    // Update lastSelectedNodeId (used for toggle detection on next click)
    this.lastSelectedNodeId = nodeId;
    this.selectedNodeId = nodeId;
    
    const node = this.nodes.find(n => n.id === nodeId);
    if (!node) {
      return;
    }
    
    // For nodes with coordinates
    if (node.coordinates && node.coordinates.length === 2) {
      const [lat, lon] = node.coordinates;
      if (Number.isFinite(lat) && Number.isFinite(lon)) {
        const [latitude, longitude] = node.coordinates;
        
        // Update rendering (recreate markers first)
        this.renderWithoutFit();
        
        // Increase zoom level and move to node position (zoom in)
        // Use flyTo method for smooth animation
        this.map.flyTo([latitude, longitude], 4, { // Max zoom level 8
          duration: 1.0, // 1 second animation
          easeLinearity: 0.25, // Easing linearity (0.25 is recommended)
        });
        
        // Open popup after flyTo animation completes
        // Use moveend event to show popup after animation completes
        const onMoveEnd = () => {
          const marker = this.markers.get(nodeId);
          if (marker) {
            marker.openPopup();
          }
          // Remove event listener (execute only once)
          this.map.off('moveend', onMoveEnd);
        };
        this.map.once('moveend', onMoveEnd);
        return;
      }
    }
    
    // For nodes without coordinates, calculate position within rectangle and zoom
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
      
      // Calculate which position within the rectangle the node is placed
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
        
        // Update rendering (recreate markers first)
        this.renderWithoutFit();
        
        // Move camera to node position within rectangle
        this.map.flyTo([latitude, longitude], 4, {
          duration: 1.0, // 1 second animation
          easeLinearity: 0.25,
        });
        
        // Open popup after flyTo animation completes
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
      // Update rendering (when no coordinates)
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

    // Remove existing markers and polylines
    this.markers.forEach(marker => {
      this.map!.removeLayer(marker);
    });
    this.markers.clear();

    // Remove all polylines from map (create array copy to avoid iteration issues)
    // Use try-catch to handle cases where layer might already be removed or not exist
    // Also iterate by keys to ensure we remove all entries
    const edgeIdsToRemove = Array.from(this.polylines.keys());
    edgeIdsToRemove.forEach(edgeId => {
      const polyline = this.polylines.get(edgeId);
      if (polyline && this.map) {
        try {
          // Check if layer is on map before removing
          if (this.map.hasLayer(polyline)) {
            this.map.removeLayer(polyline);
          }
        } catch (e) {
          // Layer might already be removed or invalid, ignore error
        }
      }
      // Remove from Map regardless of removal success
      this.polylines.delete(edgeId);
    });
    // Clear any remaining entries (safety measure)
    this.polylines.clear();

    // Collect nodes without coordinates (coordinates is undefined, null, or not a valid number pair)
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

    // Place nodes without coordinates within rectangle (Map2D: diagonal from 0,0 to -50,-32)
    if (nodesWithoutCoords.length > 0) {
      const RECT_MIN_LAT = -50;
      const RECT_MAX_LAT = 0;
      const RECT_MIN_LON = -32;
      const RECT_MAX_LON = 0;
      
      // Draw rectangle border
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

      // Place nodes evenly in rectangle
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

    // Draw nodes with coordinates
    for (const node of nodesWithCoords) {
      const [latitude, longitude] = node.coordinates!;
      const isSelected = this.selectedNodeId === node.id;

      // Get node color
      const nodeColor = node.style?.color || '#ffffff';
      const borderColor = isSelected ? '#2196f3' : (node.style?.borderColor || '#333333');

      // Create custom icon
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

      // Create marker
      const marker = this.Leaflet.marker([latitude, longitude], { icon });

      // Add label (as popup)
      marker.bindPopup(node.label, {
        closeButton: false,
        offset: [0, -10],
      });

      // Set click event
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

    // Draw edges (only when alwaysShowEdges is true)
    if (this.alwaysShowEdges) {
      for (const edge of this.edges) {
        const srcNode = this.nodes.find(n => n.id === edge.src);
        const dstNode = this.nodes.find(n => n.id === edge.dst);

        if (!srcNode?.coordinates || !dstNode?.coordinates) {
          continue; // Skip nodes without coordinates
        }

        const [srcLat, srcLon] = srcNode.coordinates;
        const [dstLat, dstLon] = dstNode.coordinates;

        // Get edge color
        const edgeColor = edge.style?.color || '#999999';
        const edgeWeight = edge.style?.weight || 1;
        const width = Math.max(1, Math.min(5, edgeWeight));

        // Create polyline
        const polyline = this.Leaflet.polyline(
          [[srcLat, srcLon], [dstLat, dstLon]],
          {
            color: edgeColor,
            weight: width,
            opacity: 0.7,
          }
        );

        // Set click event
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

        // Remove existing polyline if it exists (to handle duplicate edge.id)
        const existingPolyline = this.polylines.get(edge.id);
        if (existingPolyline && this.map) {
          try {
            if (this.map.hasLayer(existingPolyline)) {
              this.map.removeLayer(existingPolyline);
            }
          } catch (e) {
            // Ignore error
          }
        }

        polyline.addTo(this.map);
        this.polylines.set(edge.id, polyline);
      }
    }

    // Adjust camera to show all nodes (only during initialization)
    this.fitToNodes();
  }

  /**
   * Render nodes and edges (without fit action)
   */
  private renderWithoutFit(): void {
    if (!this.map || !this.Leaflet) {
      return;
    }

    // Remove existing markers and polylines
    this.markers.forEach(marker => {
      this.map!.removeLayer(marker);
    });
    this.markers.clear();

    // Remove all polylines from map (create array copy to avoid iteration issues)
    // Use try-catch to handle cases where layer might already be removed or not exist
    // Also iterate by keys to ensure we remove all entries
    const edgeIdsToRemove = Array.from(this.polylines.keys());
    edgeIdsToRemove.forEach(edgeId => {
      const polyline = this.polylines.get(edgeId);
      if (polyline && this.map) {
        try {
          // Check if layer is on map before removing
          if (this.map.hasLayer(polyline)) {
            this.map.removeLayer(polyline);
          }
        } catch (e) {
          // Layer might already be removed or invalid, ignore error
        }
      }
      // Remove from Map regardless of removal success
      this.polylines.delete(edgeId);
    });
    // Clear any remaining entries (safety measure)
    this.polylines.clear();

    // Remove rectangle layer
    if (this.rectLayer) {
      this.map!.removeLayer(this.rectLayer);
      this.rectLayer = null;
    }

    // Collect nodes without coordinates (coordinates is undefined, null, or not a valid number pair)
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

    // Place nodes without coordinates within rectangle (Map2D: diagonal from 0,0 to -50,-32)
    if (nodesWithoutCoords.length > 0) {
      const RECT_MIN_LAT = -50;
      const RECT_MAX_LAT = 0;
      const RECT_MIN_LON = -32;
      const RECT_MAX_LON = 0;
      
      // Draw rectangle border
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

      // Place nodes evenly in rectangle
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

    // Draw nodes with coordinates
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

    // Draw edges (only when alwaysShowEdges is true)
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

        // Remove existing polyline if it exists (to handle duplicate edge.id)
        const existingPolyline = this.polylines.get(edge.id);
        if (existingPolyline && this.map) {
          try {
            if (this.map.hasLayer(existingPolyline)) {
              this.map.removeLayer(existingPolyline);
            }
          } catch (e) {
            // Ignore error
          }
        }

        polyline.addTo(this.map);
        this.polylines.set(edge.id, polyline);
      }
    }
  }

  // Control buttons are now managed by ViewContainer - no need to create individual buttons

  /**
   * Switch between customTileUrls in order
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
   * Update tile type button display
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
   * Update edge display ON/OFF button display
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
   * Get moon phase (0-7)
   * 0: New moon, 4: Full moon
   */
  /**
   * Calculate moon phase (0 to 1, where 0 = new moon, 0.5 = full moon)
   */
  private getMoonIllumination(date: Date): { fraction: number; phase: number; angle: number } {
    const julianDay = this.julian(date);
    const d = julianDay - 2451545.0; // Days since J2000.0
    
    // Calculate sun coordinates (RA, DEC)
    const M_sun = (357.5291 + 0.98560028 * d) * Math.PI / 180; // Solar mean anomaly
    const C = (1.9148 * Math.sin(M_sun) + 0.02 * Math.sin(2 * M_sun) + 0.0003 * Math.sin(3 * M_sun)) * Math.PI / 180;
    const P = (102.9372 * Math.PI / 180); // Perihelion of the Earth
    const L_sun = M_sun + C + P + Math.PI; // Ecliptic longitude
    const e = (23.4397 * Math.PI / 180); // Obliquity of the Earth
    const sunRa = Math.atan2(
      Math.sin(L_sun) * Math.cos(e) - Math.tan(0) * Math.sin(e),
      Math.cos(L_sun)
    );
    const sunDec = Math.asin(
      Math.sin(0) * Math.cos(e) + Math.cos(0) * Math.sin(e) * Math.sin(L_sun)
    );
    
    // Calculate moon coordinates (RA, DEC, distance)
    const L_moon = (218.316 + 13.176396 * d) * Math.PI / 180; // Ecliptic longitude
    const M_moon = (134.963 + 13.064993 * d) * Math.PI / 180; // Mean anomaly
    const F_moon = (93.272 + 13.229350 * d) * Math.PI / 180;  // Mean distance
    const l_moon = L_moon + (6.289 * Math.sin(M_moon)) * Math.PI / 180; // Longitude
    const b_moon = (5.128 * Math.sin(F_moon)) * Math.PI / 180; // Latitude
    const moonRa = Math.atan2(
      Math.sin(l_moon) * Math.cos(e) - Math.tan(b_moon) * Math.sin(e),
      Math.cos(l_moon)
    );
    const moonDec = Math.asin(
      Math.sin(b_moon) * Math.cos(e) + Math.cos(b_moon) * Math.sin(e) * Math.sin(l_moon)
    );
    const moonDist = 385001 - 20905 * Math.cos(M_moon); // Distance to the moon in km
    
    // Calculate angle between sun and moon
    const sdist = 149598000; // Distance from Earth to Sun in km
    const phi = Math.acos(
      Math.sin(sunDec) * Math.sin(moonDec) +
      Math.cos(sunDec) * Math.cos(moonDec) * Math.cos(sunRa - moonRa)
    );
    const inc = Math.atan2(
      sdist * Math.sin(phi),
      moonDist - sdist * Math.cos(phi)
    );
    const angle = Math.atan2(
      Math.cos(sunDec) * Math.sin(sunRa - moonRa),
      Math.sin(sunDec) * Math.cos(moonDec) -
      Math.cos(sunDec) * Math.sin(moonDec) * Math.cos(sunRa - moonRa)
    );
    
    return {
      fraction: (1 + Math.cos(inc)) / 2,
      phase: 0.5 + 0.5 * inc * (angle < 0 ? -1 : 1) / Math.PI,
      angle: angle
    };
  }

  getMoonPhase(date: Date): number {
    const illumination = this.getMoonIllumination(date);
    const phase = illumination.phase; // 0 to 1
    // Convert to 8 stages (0-7)
    return Math.floor(phase * 8) % 8;
  }

  /**
   * Get moon phase emoji or SVG
   */
  getMoonPhaseIcon(phase: number, size: number = 16): string {
    const moonPhases = ['🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘'];
    const emoji = moonPhases[phase] || '🌑';
    
    // Return as text (emoji) or create SVG if needed
    return `<span style="font-size: ${size}px; line-height: 1;">${emoji}</span>`;
  }

  /**
   * Calculate moon sub-lunar point (latitude and longitude where moon is directly overhead)
   * Returns latitude and longitude of the point on Earth directly below the moon
   * 
   * Calculation method:
   * 1. Calculate moon's right ascension (RA) and declination (DEC) from date
   * 2. Calculate Greenwich Mean Sidereal Time (GMST)
   * 3. Sub-lunar point:
   *    - Latitude = DEC (moon's declination)
   *    - Longitude = RA - GMST (moon's right ascension minus Greenwich sidereal time)
   * 
   */
  private calculateMoonPosition(date: Date, unusedLat: number, unusedLon: number): [number, number] | null {
    try {
      // Calculate Julian Day
      const julianDay = this.julian(date);
      const d = julianDay - 2451545.0; // Days since J2000.0
      
      // Calculate moon's ecliptic coordinates
      const L = (218.316 + 13.176396 * d) * Math.PI / 180; // Ecliptic longitude
      const M = (134.963 + 13.064993 * d) * Math.PI / 180; // Mean anomaly
      const F = (93.272 + 13.229350 * d) * Math.PI / 180;  // Mean distance
      
      const l = L + (6.289 * Math.sin(M)) * Math.PI / 180; // Longitude
      const b = (5.128 * Math.sin(F)) * Math.PI / 180;     // Latitude
      
      // Convert ecliptic coordinates to equatorial coordinates (RA, DEC)
      const e = (23.4397 * Math.PI / 180); // Obliquity of the Earth
      const ra = Math.atan2(
        Math.sin(l) * Math.cos(e) - Math.tan(b) * Math.sin(e),
        Math.cos(l)
      ); // Right ascension
      const dec = Math.asin(
        Math.sin(b) * Math.cos(e) + Math.cos(b) * Math.sin(e) * Math.sin(l)
      ); // Declination
      
      // Calculate Greenwich Mean Sidereal Time (in hours)
      const gstHours = this.GMST(julianDay);
      
      // Convert GST from hours to radians (1 hour = 15 degrees = π/12 radians)
      const gstRadians = gstHours * Math.PI / 12;
      
      // Sub-lunar point calculation:
      // Latitude = DEC (moon's declination)
      // Longitude = RA - GMST (moon's right ascension minus Greenwich sidereal time)
      const lat = dec;
      let lon = ra - gstRadians;
      
      // Convert to degrees first
      const latDegrees = lat * 180 / Math.PI;
      let lonDegrees = lon * 180 / Math.PI;
      
      // Normalize longitude to -180 to 180 range
      // Use proper modulo operation that handles negative numbers correctly
      lonDegrees = lonDegrees % 360;
      if (lonDegrees > 180) {
        lonDegrees -= 360;
      } else if (lonDegrees < -180) {
        lonDegrees += 360;
      }
      
      return [latDegrees, lonDegrees];
    } catch (error) {
      return null;
    }
  }

  /**
   * Update moon marker on map
   */
  private updateMoonMarker(): void {
    if (!this.map || !this.Leaflet) {
      return;
    }
    
    // Remove existing moon marker if disabled or if we need to update it
    if (this.moonMarker) {
      this.map.removeLayer(this.moonMarker);
      this.moonMarker = null;
    }
    
    // If moon is disabled, we're done (marker already removed above)
    if (!this.moonEnabled) {
      return;
    }
    
    // Use current time if timeISO is not set
    const date = this.timeISO ? new Date(this.timeISO) : new Date();
    
    // Calculate moon sub-lunar point (where moon is directly overhead)
    // The sub-lunar point is independent of observation point
    // We calculate it from time only, then Leaflet will display it at the correct position
    let moonPos = this.calculateMoonPosition(date, 0, 0);
    
    if (!moonPos) {
      return;
    }
    
    // Use the calculated moon position directly, just like node markers
    // Leaflet will handle the display correctly based on the latitude and longitude
    // No adjustment needed - use the same approach as node markers
    
    const phase = this.getMoonPhase(date);
    const iconHtml = this.getMoonPhaseIcon(phase, 24);
    
    const icon = this.Leaflet.divIcon({
      html: iconHtml,
      className: 'relatos-moon-marker',
      iconSize: [32, 32],
      iconAnchor: [16, 16],
    });
    
    this.moonMarker = this.Leaflet.marker([moonPos[0], moonPos[1]], { icon });
    this.moonMarker.addTo(this.map);
  }

  /**
   * Create moon toggle button
   */
  private createMoonToggleButton(): void {
    this.moonToggleButton = document.createElement('button');
    this.moonToggleButton.setAttribute('aria-label', 'Toggle moon');
    this.moonToggleButton.setAttribute('title', 'Toggle moon');
    this.moonToggleButton.style.padding = '6px';
    this.moonToggleButton.style.border = '1px solid #ccc';
    this.moonToggleButton.style.borderRadius = '4px';
    this.moonToggleButton.style.backgroundColor = '#fff';
    this.moonToggleButton.style.cursor = 'pointer';
    this.moonToggleButton.style.fontSize = '16px';
    this.moonToggleButton.style.width = '32px';
    this.moonToggleButton.style.height = '32px';
    this.moonToggleButton.style.display = 'flex';
    this.moonToggleButton.style.alignItems = 'center';
    this.moonToggleButton.style.justifyContent = 'center';
    this.moonToggleButton.style.pointerEvents = 'auto';
    this.moonToggleButton.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    this.moonToggleButton.style.transition = '0.2s';
    
    // Click event
    this.moonToggleButton.addEventListener('click', () => {
      this.moonEnabled = !this.moonEnabled;
      this.updateMoonButton();
      this.updateMoonMarker();
    });
  }

  /**
   * Get moon enabled state (for ViewContainer)
   */
  isMoonEnabled(): boolean {
    return this.moonEnabled;
  }

  /**
   * Toggle moon display (for ViewContainer)
   */
  toggleMoon(): void {
    this.moonEnabled = !this.moonEnabled;
    this.updateMoonMarker();
  }

  /**
   * Get time ISO string (for ViewContainer)
   */
  getTime(): string | null {
    return this.timeISO;
  }

  /**
   * Update moon button appearance (for ViewContainer)
   * This method is kept for internal use but ViewContainer will call getMoonPhase/getMoonPhaseIcon directly
   */
  private updateMoonButton(): void {
    // This method is no longer used as ViewContainer manages the button
    // Kept for backward compatibility
  }

  /**
   * Update lighting button appearance
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
   * Adjust camera to show all nodes
   */
  private fitToNodes(): void {
    if (!this.map || !this.Leaflet || this.nodes.length === 0) {
      return;
    }

    // Separate nodes with coordinates and nodes without coordinates
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

    // Collect all coordinates (nodes with coordinates + alternative coordinates for nodes without coordinates)
    const allLats: number[] = [];
    const allLons: number[] = [];

    // Add coordinates from nodes with coordinates
    nodesWithCoords.forEach(n => {
      if (n.coordinates && n.coordinates.length === 2) {
        const [lat, lon] = n.coordinates;
        if (Number.isFinite(lat) && Number.isFinite(lon)) {
          allLats.push(lat);
          allLons.push(lon);
        }
      }
    });

    // Calculate and add alternative coordinates for nodes without coordinates
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

    // Do not process if there are no coordinates
    if (allLats.length === 0) {
      return;
    }

    // Calculate bounds from all coordinates
    const minLat = Math.min(...allLats);
    const maxLat = Math.max(...allLats);
    const minLon = Math.min(...allLons);
    const maxLon = Math.max(...allLons);

    // Create bounding box
    const bounds = this.Leaflet.latLngBounds(
      [minLat, minLon],
      [maxLat, maxLon]
    );

    // Fit map
    // Limit max zoom level to 8 to prevent load on tile server
    // Use flyToBounds method for smooth animation
    this.map.flyToBounds(bounds, {
      padding: [20, 20],
      maxZoom: 5, // Limit max zoom level to 5
      duration: 1.0, // 1 second animation
      easeLinearity: 0.25, // Easing linearity (0.25 is recommended)
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
      this.initializeLeaflet().catch(() => {
        // Failed to initialize Leaflet
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