/**
 * Relatos Viewer - Globe3D View
 * 3D globe display using Cesium
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
 * Cesium type definitions (simplified)
 * Use according to actual Cesium API
 */
type CesiumViewer = any; // Cesium.Viewer type (obtained from actual Cesium library)

/**
 * Globe3D View class
 */
export class Globe3DView implements View {
  private container: HTMLElement;
  private viewer: CesiumViewer | null = null;
  private Cesium: any = null; // Hold Cesium object
  private nodes: Node[] = [];
  private edges: Edge[] = [];
  private onNodeClick?: (event: NodeClickEvent) => void;
  private onEdgeClick?: (event: EdgeClickEvent) => void;
  private selectedNodeId: string | null = null;
  private lastSelectedNodeId: string | null = null; // Last selected node ID (for toggle behavior)
  private nodeEntities: Map<string, any> = new Map(); // Cesium entity
  private edgeEntities: Map<string, any> = new Map(); // Cesium entity
  private rectEntity: any = null; // Rectangle entity for nodes without coordinates
  private cesiumLoader?: () => Promise<any>; // Cesium loader function
  private fitCenterButton: HTMLButtonElement | null = null; // Fit and center button
  private lightingToggleButton: HTMLButtonElement | null = null; // Lighting toggle button
  private alwaysShowEdgesButton: HTMLButtonElement | null = null; // Toggle button for always showing all edges
  private alwaysShowEdges: boolean = true; // Flag for always showing all edges (default: true)
  private onAlwaysShowEdgesChange?: (enabled: boolean) => void; // Callback to notify always show edges state change
  private onLightingChange?: (enabled: boolean) => void; // Callback to notify lighting state change
  private tileTypeButton: HTMLButtonElement | null = null; // Toggle button for tile type (cycles through tile servers)
  private baseImageryLayer: any = null; // Reference to base imagery layer
  private timeISO: string | null = null; // Shared time for sun shading calculation
  private globe3dOptions?: {
    customTileUrl?: string;
    customTileUrls?: (string | TileServerConfig)[];
  }; // Globe3D options
  private customTileUrls: TileServerConfig[] = []; // Normalized custom tile configs array
  private currentCustomTileIndex: number = 0; // Current index in customTileUrls array
  private popupElement: HTMLElement | null = null; // Custom popup element (Leaflet-style)
  private popupEntity: any = null; // Entity that currently has popup shown
  private popupUpdateListener: any = null; // postRender event listener for popup position updates

  constructor(
    container: HTMLElement,
    onNodeClick?: (event: NodeClickEvent) => void,
    cesiumLoader?: () => Promise<any>,
    globe3dOptions?: {
      customTileUrl?: string;
      customTileUrls?: (string | TileServerConfig)[];
    },
    sharedTileServers?: (string | TileServerConfig)[] | null,
    onEdgeClick?: (event: EdgeClickEvent) => void
  ) {
    this.container = container;
    this.onNodeClick = onNodeClick;
    this.cesiumLoader = cesiumLoader;
    this.globe3dOptions = globe3dOptions;
    this.onEdgeClick = onEdgeClick;
    
    // Initialize customTileUrls from shared tileServers or per-view options
    const tileSources =
      (sharedTileServers && sharedTileServers.length > 0)
        ? sharedTileServers
        : globe3dOptions?.customTileUrls;

    if (tileSources && tileSources.length > 0) {
      // Normalize to TileServerConfig[]
      this.customTileUrls = tileSources.map((item) =>
        typeof item === 'string'
          ? { url: item }
          : item
      );
    } else if (globe3dOptions?.customTileUrl) {
      // Support deprecated customTileUrl for backward compatibility
      this.customTileUrls = [{ url: globe3dOptions.customTileUrl }];
    }

    // Set container styles
    this.container.style.position = 'relative';
    this.container.style.width = '100%';
    this.container.style.height = '100%';
  }

  private async initializeCesium(): Promise<void> {
    if (this.viewer) return;

    if (!this.cesiumLoader) {
      throw new Error('Cesium loader is not provided. Please provide options.loaders.cesium.');
    }

    const cesiumModule = await this.cesiumLoader();
    this.Cesium = cesiumModule.default || cesiumModule;

    const terrainProvider = new this.Cesium.EllipsoidTerrainProvider();
    
    // Disable Cesium ion
    if (this.Cesium.Ion) {
      this.Cesium.Ion.defaultAccessToken = '';
    }

    this.viewer = new this.Cesium.Viewer(this.container, {
      terrainProvider: terrainProvider,
      baseLayerPicker: false,
      animation: false,
      timeline: false,
      fullscreenButton: false,
      vrButton: false,
      geocoder: false,
      homeButton: false,
      infoBox: false,
      sceneModePicker: false,
      selectionIndicator: false,
      navigationHelpButton: false,
      requestRenderMode: false,
    });
    
    // Enable touch gestures (pinch zoom, pan) on mobile devices
    // Setting touch-action: none prevents browser from intercepting touch events
    // and allows Cesium's screenSpaceCameraController to handle them
    if (this.viewer.canvas) {
      this.viewer.canvas.style.touchAction = 'none';
    }
    
    // Enable moon (always visible in Globe3D, lighting controlled by setLighting)
    if (this.Cesium.Moon) {
      if (!this.viewer.scene.moon) {
        this.viewer.scene.moon = new this.Cesium.Moon();
      }
      this.viewer.scene.moon.show = true;
      if (this.viewer.scene.moon.onlySunLighting !== undefined) {
        this.viewer.scene.moon.onlySunLighting = false;
      }
    } else if (this.viewer.scene.moon) {
      this.viewer.scene.moon.show = true;
    }
    
    // Enable sun
    if (this.viewer.scene.sun) {
      this.viewer.scene.sun.show = true;
    }
    
    // Remove default imagery layers
    try {
      this.viewer.imageryLayers.removeAll();
    } catch (error) {
      // Ignore
    }
    
    this.setupCameraLimits();
    this.setupTrackpadPinchZoom();
    this.setTileTypeInternal(true);
    this.setupTimeAndLighting();
    this.setupClickHandler();

    if (this.nodes.length > 0 || this.edges.length > 0) {
      this.render();
    }
    
    // Trigger state sync for ViewContainer
    if (this.onLightingChange) {
      const currentState = this.isLightingEnabled();
    }
  }

  /**
   * Setup trackpad pinch zoom for Mac
   * Mac trackpad pinch gestures are sent as:
   * - Chrome/Firefox: wheel event with ctrlKey=true
   * - Safari: gesturestart/gesturechange/gestureend events
   */
  private setupTrackpadPinchZoom(): void {
    if (!this.viewer || !this.Cesium) {
      return;
    }

    const canvas = this.viewer.canvas;
    const camera = this.viewer.scene.camera;
    const MIN_HEIGHT = 500000;
    const MAX_HEIGHT = 40000000;

    // Handle wheel event with ctrlKey (Chrome/Firefox trackpad pinch)
    const wheelHandler = (event: WheelEvent) => {
      // ctrlKey is true when the wheel event is from a trackpad pinch gesture
      if (event.ctrlKey) {
        event.preventDefault();
        event.stopPropagation();

        // Calculate zoom factor from deltaY
        // Negative deltaY = pinch out (zoom in), Positive deltaY = pinch in (zoom out)
        const zoomFactor = 1 - event.deltaY * 0.01;
        
        // Get current camera height
        const cartographic = this.Cesium.Cartographic.fromCartesian(camera.position);
        const currentHeight = cartographic.height;
        
        // Calculate new height (inverted: pinch out = zoom in = lower height)
        let newHeight = currentHeight / zoomFactor;
        
        // Clamp to min/max height
        newHeight = Math.max(MIN_HEIGHT, Math.min(MAX_HEIGHT, newHeight));
        
        // Apply new camera position
        const newPosition = this.Cesium.Cartesian3.fromRadians(
          cartographic.longitude,
          cartographic.latitude,
          newHeight
        );
        
        camera.setView({
          destination: newPosition,
          orientation: {
            heading: camera.heading,
            pitch: camera.pitch,
            roll: camera.roll,
          },
        });
      }
    };

    // Handle Safari gesture events
    let gestureStartScale = 1;
    let gestureStartHeight = 0;

    const gestureStartHandler = (event: any) => {
      event.preventDefault();
      gestureStartScale = event.scale || 1;
      const cartographic = this.Cesium.Cartographic.fromCartesian(camera.position);
      gestureStartHeight = cartographic.height;
    };

    const gestureChangeHandler = (event: any) => {
      event.preventDefault();
      
      const scale = event.scale || 1;
      const relativeScale = scale / gestureStartScale;
      
      // Calculate new height (scale > 1 = zoom in = lower height)
      let newHeight = gestureStartHeight / relativeScale;
      
      // Clamp to min/max height
      newHeight = Math.max(MIN_HEIGHT, Math.min(MAX_HEIGHT, newHeight));
      
      // Get current camera position
      const cartographic = this.Cesium.Cartographic.fromCartesian(camera.position);
      
      // Apply new camera position
      const newPosition = this.Cesium.Cartesian3.fromRadians(
        cartographic.longitude,
        cartographic.latitude,
        newHeight
      );
      
      camera.setView({
        destination: newPosition,
        orientation: {
          heading: camera.heading,
          pitch: camera.pitch,
          roll: camera.roll,
        },
      });
    };

    const gestureEndHandler = (event: any) => {
      event.preventDefault();
      gestureStartScale = 1;
      gestureStartHeight = 0;
    };

    // Add event listeners
    // Use passive: false to allow preventDefault
    canvas.addEventListener('wheel', wheelHandler, { passive: false });
    
    // Safari gesture events (only available in Safari)
    if ('GestureEvent' in window) {
      canvas.addEventListener('gesturestart', gestureStartHandler, { passive: false });
      canvas.addEventListener('gesturechange', gestureChangeHandler, { passive: false });
      canvas.addEventListener('gestureend', gestureEndHandler, { passive: false });
    }

    // Store handlers for cleanup
    (this as any)._trackpadPinchHandlers = {
      wheel: wheelHandler,
      gestureStart: gestureStartHandler,
      gestureChange: gestureChangeHandler,
      gestureEnd: gestureEndHandler,
    };
  }

  /**
   * Set time information and day/night shading
   * Time and lighting are now controlled by ViewContainer's shared state
   */
  private setupTimeAndLighting(): void {
    if (!this.viewer || !this.Cesium) {
      return;
    }
    // Time and lighting are applied via ViewContainer's applySharedToggleStates
  }

  /**
   * Set time
   * @param timeISO ISO 8601 time string (e.g., "2025-06-21T12:00:00Z")
   *                For BC dates, add minus sign to year (e.g., "-500-01-01T12:00:00Z")
   */
  setTime(timeISO: string): void {
    this.timeISO = timeISO;
    
    if (!this.viewer || !this.Cesium) {
      return;
    }

    try {
      let julianDate;
      
      // Check if minus sign indicates BC date
      if (timeISO.startsWith('-')) {
        // BC date: calculate JulianDate with custom processing
        julianDate = this.parseBCDate(timeISO);
      } else {
        // Normal ISO 8601 format (years 0000-9999)
        julianDate = this.Cesium.JulianDate.fromIso8601(timeISO);
      }
      
      if (julianDate) {
        this.viewer.clock.currentTime = julianDate;
        this.viewer.clock.startTime = julianDate;
        this.viewer.clock.stopTime = julianDate;
        this.viewer.clock.shouldAnimate = false; // Fix time (no animation)
      }
    } catch (error) {
      // Invalid time format
    }
  }

  /**
   * Convert BC date string to JulianDate (approximation using year 2000)
   */
  private parseBCDate(dateStr: string): any | null {
    if (!this.Cesium) return null;

    try {
      const match = dateStr.match(/^-(\d+)-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(Z|[+-]\d{2}:\d{2})?/);
      if (!match) throw new Error('Invalid BC date format');

      // Use year 2000 with same month/day/time as approximation
      const approximateDate = `2000-${match[2]}-${match[3]}T${match[4]}:${match[5]}:${match[6]}${match[7] || 'Z'}`;
      return this.Cesium.JulianDate.fromIso8601(approximateDate);
    } catch (error) {
      return null;
    }
  }

  /**
   * Set day/night shading on/off
   */
  setLighting(enabled: boolean): void {
    if (!this.viewer || !this.Cesium) return;
    if (this.isLightingEnabled() === enabled) return;

    const globe = this.viewer.scene.globe;
    globe.enableLighting = enabled;
    globe.dynamicAtmosphereLighting = enabled;
    globe.dynamicAtmosphereLightingFromSun = enabled;
    globe.showGroundAtmosphere = true;

    if (enabled) {
      globe.lightingFadeOutDistance = 0.0;
      globe.lightingFadeInDistance = 0.0;
      globe.nightFadeInDistance = 0.0;
      globe.nightFadeOutDistance = 0.0;

      if (this.baseImageryLayer) {
        this.baseImageryLayer.nightAlpha = 0.9;
      }

      if (this.viewer.scene.sun) {
        this.viewer.scene.sun.show = true;
      }
      
      // Moon sun lighting (shows phases)
      if (this.viewer.scene.moon?.onlySunLighting !== undefined) {
        this.viewer.scene.moon.onlySunLighting = true;
      }
    } else {
      // Moon uniformly lit when lighting disabled
      if (this.viewer.scene.moon?.onlySunLighting !== undefined) {
        this.viewer.scene.moon.onlySunLighting = false;
      }
    }

    this.updateLightingButton();
  }

  /**
   * Check if day/night shading is enabled
   */
  isLightingEnabled(): boolean {
    if (!this.viewer) {
      return false;
    }
    return this.viewer.scene.globe.enableLighting === true;
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
      // Redraw to reflect edge visibility changes (don't call fitToNodes)
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
    const oldValue = this.isLightingEnabled();
    this.setLighting(enabled);
    // Notify ViewContainer only if state actually changed and notifyContainer is true
    if (notifyContainer && this.onLightingChange && this.isLightingEnabled() !== oldValue) {
      this.onLightingChange(this.isLightingEnabled());
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

    // If viewer is initialized, immediately apply the new tile
    if (this.viewer && this.Cesium) {
      this.setTileTypeInternal(true);
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
   * Limit camera altitude
   */
  private setupCameraLimits(): void {
    if (!this.viewer || !this.Cesium) {
      return;
    }

    const MIN_HEIGHT = 500000; // Min altitude: 500,000m
    const MAX_HEIGHT = 40000000; // Max altitude: 40,000,000m

    // Limit zoom range with screenSpaceCameraController
    const controller = this.viewer.scene.screenSpaceCameraController;
    controller.minimumZoomDistance = MIN_HEIGHT;
    controller.maximumZoomDistance = MAX_HEIGHT;
    
    // Explicitly enable touch input for mobile devices
    // This ensures pinch zoom, two-finger pan, and other touch gestures work properly
    controller.enableInputs = true;
    controller.enableZoom = true;
    controller.enableRotate = true;
    controller.enableTilt = true;
    controller.enableTranslate = true;
    
    // Configure camera controls to match Leaflet/Graph behavior on both desktop and mobile:
    // 
    // Desktop (MacBook):
    // - Mouse drag (left button): Pan/rotate globe (like Leaflet's drag to pan)
    // - Mouse wheel / Trackpad scroll: Zoom (like Leaflet/Graph)
    // - Trackpad pinch: Zoom (like Leaflet/Graph)
    // - Right-click drag: Not used (matches Leaflet/Graph)
    // - Ctrl+drag: Tilt camera (advanced, not in Leaflet/Graph but useful for 3D)
    //
    // Mobile:
    // - One-finger drag: Pan/rotate globe
    // - Pinch: Zoom
    // - Two-finger drag: Pan without rotation
    // 
    // Cesium event types:
    // - CameraEventType.PINCH: Two-finger pinch gesture (mobile)
    // - CameraEventType.LEFT_DRAG: Left mouse drag / one-finger touch drag
    // - CameraEventType.RIGHT_DRAG: Right mouse drag / two-finger touch drag
    // - CameraEventType.MIDDLE_DRAG: Middle mouse drag
    // - CameraEventType.WHEEL: Mouse wheel / trackpad scroll
    const CameraEventType = this.Cesium.CameraEventType;
    
    // Zoom: Mouse wheel (desktop) + Trackpad scroll (MacBook) + Pinch gesture (mobile)
    // This matches Leaflet and Graph zoom behavior
    controller.zoomEventTypes = [
      CameraEventType.WHEEL,
      CameraEventType.PINCH,
    ];
    
    // Rotate globe: Left mouse drag / one-finger drag
    // This is equivalent to Leaflet's "pan" - dragging moves the view
    // On a 3D globe, "rotating" the globe under the camera achieves the same effect as panning
    controller.rotateEventTypes = CameraEventType.LEFT_DRAG;
    
    // Tilt: Only with Ctrl modifier (advanced feature, not in Leaflet/Graph)
    // This prevents accidental tilting when the user just wants to pan
    controller.tiltEventTypes = [
      { eventType: CameraEventType.LEFT_DRAG, modifier: this.Cesium.KeyboardEventModifier.CTRL },
      { eventType: CameraEventType.MIDDLE_DRAG },
    ];
    
    // Translate (pan without rotation): Two-finger drag on mobile
    // On desktop, middle mouse drag can be used
    // Right-click drag is NOT assigned (matches Leaflet/Graph where right-click does nothing)
    controller.translateEventTypes = [
      CameraEventType.RIGHT_DRAG, // Two-finger drag on mobile/trackpad
    ];

    // Monitor camera changes in real-time to limit altitude
    let isAdjusting = false; // Flag to prevent infinite loop
    let isFlying = false; // Flag to prevent interference during flyTo animation
    
    this.viewer.scene.camera.changed.addEventListener(() => {
      if (isAdjusting || isFlying) {
        return; // Skip while adjusting or during flyTo animation
      }

      const camera = this.viewer!.scene.camera;
      const cartographic = this.Cesium.Cartographic.fromCartesian(camera.position);
      const height = cartographic.height;

      // Adjust if altitude is out of range
      if (height < MIN_HEIGHT || height > MAX_HEIGHT) {
        isAdjusting = true;
        const clampedHeight = Math.max(MIN_HEIGHT, Math.min(MAX_HEIGHT, height));
        const newPosition = this.Cesium.Cartesian3.fromRadians(
          cartographic.longitude,
          cartographic.latitude,
          clampedHeight
        );
        camera.setView({
          destination: newPosition,
          orientation: camera.orientation,
        });
        // Reset flag after adjustment
        setTimeout(() => {
          isAdjusting = false;
        }, 0);
      }
    });
    
    // Store isFlying flag for use in fitToNodes
    (this as any)._isFlying = () => isFlying;
    (this as any)._setIsFlying = (value: boolean) => { isFlying = value; };
  }

  /**
   * Set click handler
   */
  private setupClickHandler(): void {
    if (!this.viewer || !this.Cesium) {
      return;
    }

    const handler = new this.Cesium.ScreenSpaceEventHandler(this.viewer.canvas);
    
    handler.setInputAction((click: any) => {
      // Preferentially get node with scene.pick()
      const pickedObject = this.viewer!.scene.pick(click.position);
      
      // If node is picked
      if (pickedObject && pickedObject.id && pickedObject.id.nodeId) {
        const nodeId = pickedObject.id.nodeId;
        const node = this.nodes.find(n => n.id === nodeId);
        const entity = this.nodeEntities.get(nodeId);
        if (node && entity) {
          // Show popup
          this.showPopup(entity, node);
          
          if (this.onNodeClick) {
            // Calculate coordinates of click position from camera position
            const cartesian = this.viewer!.camera.pickEllipsoid(click.position, this.viewer!.scene.globe.ellipsoid);
            if (cartesian) {
              const cartographic = this.Cesium.Cartographic.fromCartesian(cartesian);
              const longitude = this.Cesium.Math.toDegrees(cartographic.longitude);
              const latitude = this.Cesium.Math.toDegrees(cartographic.latitude);

              this.onNodeClick({
                node,
                position: { x: longitude, y: latitude },
                originalEvent: click.originalEvent,
              });
            }
          }
        }
        return; // Skip edge processing if node is clicked
      }

      // Process edges: use drillPick() to get all objects including polylines
      // Polylines are thin, so may not be detected by scene.pick()
      const pickedObjects = this.viewer!.scene.drillPick(click.position);
      
      // Prioritize nodes (if node is on top, process node)
      for (const obj of pickedObjects) {
        if (obj.id && obj.id.nodeId) {
          const nodeId = obj.id.nodeId;
          const node = this.nodes.find(n => n.id === nodeId);
          const entity = this.nodeEntities.get(nodeId);
          if (node && entity) {
            // Show popup
            this.showPopup(entity, node);
            
            if (this.onNodeClick) {
              const cartesian = this.viewer!.camera.pickEllipsoid(click.position, this.viewer!.scene.globe.ellipsoid);
              if (cartesian) {
                const cartographic = this.Cesium.Cartographic.fromCartesian(cartesian);
                const longitude = this.Cesium.Math.toDegrees(cartographic.longitude);
                const latitude = this.Cesium.Math.toDegrees(cartographic.latitude);

                this.onNodeClick({
                  node,
                  position: { x: longitude, y: latitude },
                  originalEvent: click.originalEvent,
                });
              }
            }
          }
          return; // Skip edge processing if node is clicked
        }
      }
      
      // If nothing is picked (clicked empty space), close popup
      if (pickedObjects.length === 0) {
        this.hidePopup();
      }

      // Process edges (only if node is not prioritized)
      for (const obj of pickedObjects) {
        if (obj.id && obj.id.edgeId) {
          const edgeId = obj.id.edgeId;
          const edge = this.edges.find(e => e.id === edgeId);
          if (edge && this.onEdgeClick) {
            // Calculate coordinates of click position from camera position
            const cartesian = this.viewer!.camera.pickEllipsoid(click.position, this.viewer!.scene.globe.ellipsoid);
            if (cartesian) {
              const cartographic = this.Cesium.Cartographic.fromCartesian(cartesian);
              const longitude = this.Cesium.Math.toDegrees(cartographic.longitude);
              const latitude = this.Cesium.Math.toDegrees(cartographic.latitude);

              this.onEdgeClick({
                edge,
                position: { x: longitude, y: latitude },
                originalEvent: click.originalEvent,
              });
            }
          }
          return; // End processing if edge is found
        }
      }
      
      // If nothing is picked (clicked empty space), close popup
      if (!pickedObject && (!pickedObjects || pickedObjects.length === 0)) {
        this.hidePopup();
      }
    }, this.Cesium.ScreenSpaceEventType.LEFT_CLICK);
  }

  /**
   * Set data
   */
  setData(nodes: Node[], edges: Edge[]): void {
    this.nodes = nodes;
    this.edges = edges;

    if (this.viewer && this.Cesium) {
      this.render();
    }
  }

  /**
   * Select node (highlight)
   * In Globe3D mode, move camera to node position and display at center
   * If same node is selected again, switch to fit action showing entire view
   */
  selectNode(nodeId: string | null): void {
    if (!nodeId) {
      this.selectedNodeId = null;
      this.lastSelectedNodeId = null;
      this.hidePopup();
      this.render();
      return;
    }
    
    if (!this.viewer || !this.Cesium) return;
    
    // Toggle to fit if same node selected again
    if (nodeId === this.lastSelectedNodeId) {
      this.lastSelectedNodeId = null;
      if (this.nodeEntities.size > 0) {
        this.updateNodeSelection();
      }
      this.fitToNodes();
      return;
    }
    
    this.lastSelectedNodeId = nodeId;
    this.selectedNodeId = nodeId;
    
    if (this.nodeEntities.size > 0) {
      this.updateNodeSelection();
    } else {
      this.render();
    }
    
    const node = this.nodes.find(n => n.id === nodeId);
    if (!node) return;
    
    if (node.coordinates && node.coordinates.length === 2) {
      const [lat, lon] = node.coordinates;
      if (Number.isFinite(lat) && Number.isFinite(lon)) {
        const [latitude, longitude] = node.coordinates;
        const height = 3000000;
        
        const entity = this.nodeEntities.get(nodeId);
        if (entity && node) {
          this.showPopup(entity, node);
        }
        
        const setIsFlying = (this as any)._setIsFlying;
        if (setIsFlying) {
          setIsFlying(true);
        }

        setTimeout(() => {
        this.viewer.camera.flyTo({
          destination: this.Cesium.Cartesian3.fromDegrees(longitude, latitude, height),
          orientation: {
            heading: this.Cesium.Math.toRadians(0),
            pitch: this.Cesium.Math.toRadians(-90),
            roll: 0.0,
          },
          duration: 1.0, // Move in 1 second
            complete: () => {
              // Animation complete - clear flying flag
              if (setIsFlying) {
                setIsFlying(false);
              }
            }
          });
        }, 0);
        return;
      }
    }
    
    // If node has no coordinates, calculate position in rectangle and zoom
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
      
      // Compute node position inside the rectangle grid
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
        
        // Move camera to the node position inside the rectangle (height 3,000,000m)
        const height = 3000000;
        
        // Show popup before camera movement (position will be updated automatically)
        const entity = this.nodeEntities.get(nodeId);
        if (entity && node) {
          this.showPopup(entity, node);
        }
        
        // Set flying flag to prevent camera limit interference
        // Set flag before flyTo to ensure it's active when camera.changed fires
        const setIsFlying = (this as any)._setIsFlying;
        if (setIsFlying) {
          setIsFlying(true);
        }

        // Use setTimeout to ensure isFlying flag is set before flyTo triggers camera.changed
        setTimeout(() => {
        // Fly camera to the node position with animation
        this.viewer.camera.flyTo({
          destination: this.Cesium.Cartesian3.fromDegrees(longitude, latitude, height),
          orientation: {
            heading: this.Cesium.Math.toRadians(0), // Look north
            pitch: this.Cesium.Math.toRadians(-90), // Look straight down (-90 degrees)
            roll: 0.0,
          },
          duration: 1.0, // 1 second animation
            complete: () => {
              // Animation complete - clear flying flag
              if (setIsFlying) {
                setIsFlying(false);
              }
            }
          });
        }, 0);
      }
    }
  }

  /**
   * Render nodes and edges
   */
  private render(): void {
    if (!this.viewer || !this.Cesium) {
      return;
    }

    // Remove existing entities
    this.viewer.entities.removeAll();
    this.nodeEntities.clear();
    this.edgeEntities.clear();
    this.rectEntity = null;

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

    // Place nodes without coordinates inside a fixed rectangle (Globe3D: lat 0..-50, lon 0..-32)
    if (nodesWithoutCoords.length > 0) {
      const RECT_MIN_LAT = -50;
      const RECT_MAX_LAT = 0;
      const RECT_MIN_LON = -32;
      const RECT_MAX_LON = 0;
      
      // Draw rectangle border
      const rectPositions = [
        this.Cesium.Cartesian3.fromDegrees(RECT_MIN_LON, RECT_MIN_LAT, 0),
        this.Cesium.Cartesian3.fromDegrees(RECT_MAX_LON, RECT_MIN_LAT, 0),
        this.Cesium.Cartesian3.fromDegrees(RECT_MAX_LON, RECT_MAX_LAT, 0),
        this.Cesium.Cartesian3.fromDegrees(RECT_MIN_LON, RECT_MAX_LAT, 0),
      ];
      
      this.rectEntity = this.viewer.entities.add({
        polygon: {
          hierarchy: rectPositions,
          material: this.Cesium.Color.fromCssColorString('#f0f0f0').withAlpha(0.1),
          outline: true,
          outlineColor: this.Cesium.Color.fromCssColorString('#666'),
          height: 0,
        },
      });

      // Evenly place nodes inside the rectangle
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
        
        let pointColor: any;
        const rgbMatch = nodeColor.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
        if (rgbMatch) {
          const r = parseInt(rgbMatch[1], 16) / 255;
          const g = parseInt(rgbMatch[2], 16) / 255;
          const b = parseInt(rgbMatch[3], 16) / 255;
          pointColor = new this.Cesium.Color(r, g, b, 1.0);
        } else {
          pointColor = this.Cesium.Color.fromCssColorString(nodeColor);
          pointColor = pointColor.withAlpha(1.0);
        }
        const pointOutlineColor = this.Cesium.Color.fromCssColorString(borderColor);

        const entity = this.viewer.entities.add({
          position: this.Cesium.Cartesian3.fromDegrees(longitude, latitude, 0),
          point: {
            pixelSize: isSelected ? 15 : 10,
            color: pointColor,
            outlineColor: pointOutlineColor,
            outlineWidth: 2,
            heightReference: this.Cesium.HeightReference.CLAMP_TO_GROUND,
          },
          label: {
            text: node.label,
            font: '14px sans-serif',
            fillColor: this.Cesium.Color.WHITE,
            outlineColor: this.Cesium.Color.BLACK,
            outlineWidth: 2,
            style: this.Cesium.LabelStyle.FILL_AND_OUTLINE,
            verticalOrigin: this.Cesium.VerticalOrigin.BOTTOM,
            pixelOffset: new this.Cesium.Cartesian2(0, -20),
            heightReference: this.Cesium.HeightReference.CLAMP_TO_GROUND,
            show: false,
          },
          nodeId: node.id,
        });

        this.nodeEntities.set(node.id, entity);
      });
    }

    // Draw nodes that have geographic coordinates
    for (const node of nodesWithCoords) {
      const [latitude, longitude] = node.coordinates!;
      const isSelected = this.selectedNodeId === node.id;

      // Resolve node fill color (style.color or default white)
      const nodeColor = node.style?.color || '#ffffff';
      // Resolve border color (selected: blue, otherwise style.borderColor or default gray)
      const borderColor = isSelected ? '#2196f3' : (node.style?.borderColor || '#333333');
      
      // Compute point color (fully opaque)
      let pointColor: any;
      const rgbMatch = nodeColor.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
      if (rgbMatch) {
        const r = parseInt(rgbMatch[1], 16) / 255;
        const g = parseInt(rgbMatch[2], 16) / 255;
        const b = parseInt(rgbMatch[3], 16) / 255;
        pointColor = new this.Cesium.Color(r, g, b, 1.0);
      } else {
        // For non-RGB hex formats, use color as-is with alpha 1.0
        pointColor = this.Cesium.Color.fromCssColorString(nodeColor);
        pointColor = pointColor.withAlpha(1.0);
      }
      // Use border color for point outline
      const pointOutlineColor = this.Cesium.Color.fromCssColorString(borderColor);

      // Create point entity
      const entity = this.viewer.entities.add({
        position: this.Cesium.Cartesian3.fromDegrees(longitude, latitude, 0),
        point: {
          pixelSize: isSelected ? 15 : 10,
          color: pointColor, // Use node fill color
          outlineColor: pointOutlineColor, // Use border color
          outlineWidth: 2,
          heightReference: this.Cesium.HeightReference.CLAMP_TO_GROUND,
        },
        label: {
          text: node.label,
          font: '14px sans-serif',
          fillColor: this.Cesium.Color.WHITE,
          outlineColor: this.Cesium.Color.BLACK,
          outlineWidth: 2,
          style: this.Cesium.LabelStyle.FILL_AND_OUTLINE,
          verticalOrigin: this.Cesium.VerticalOrigin.BOTTOM,
          pixelOffset: new this.Cesium.Cartesian2(0, -20),
          heightReference: this.Cesium.HeightReference.CLAMP_TO_GROUND,
          show: false, // Hide labels by default, show popup on click instead
        },
        nodeId: node.id, // For hit testing
      });

      this.nodeEntities.set(node.id, entity);
    }

    // Draw edges only when alwaysShowEdges is true
    if (this.alwaysShowEdges) {
      for (const edge of this.edges) {
        const srcNode = this.nodes.find(n => n.id === edge.src);
        const dstNode = this.nodes.find(n => n.id === edge.dst);

        if (!srcNode?.coordinates || !dstNode?.coordinates) {
          continue; // Skip edges where either endpoint has no coordinates
        }

        const [srcLat, srcLon] = srcNode.coordinates;
        const [dstLat, dstLon] = dstNode.coordinates;

        // Resolve edge style
        const edgeColor = edge.style?.color || '#999999';
        const edgeWeight = edge.style?.weight || 1;
        const width = Math.max(1, Math.min(5, edgeWeight));

        // Create polyline entity
        const entity = this.viewer.entities.add({
          polyline: {
            positions: [
              this.Cesium.Cartesian3.fromDegrees(srcLon, srcLat, 0),
              this.Cesium.Cartesian3.fromDegrees(dstLon, dstLat, 0),
            ],
            width: width,
            material: this.Cesium.Color.fromCssColorString(edgeColor),
            clampToGround: true,
          },
          edgeId: edge.id, // For hit testing
        });

        this.edgeEntities.set(edge.id, entity);
      }
    }

    // Adjust camera so that all nodes are visible (used only on initial fit)
    this.fitToNodes();
  }

  /**
   * Update node selection state without re-rendering edges
   * This preserves edge visibility during node selection
   */
  private updateNodeSelection(): void {
    if (!this.viewer || !this.Cesium) {
      return;
    }

    // Update all node entities' selection state
    for (const [nodeId, entity] of this.nodeEntities.entries()) {
      const node = this.nodes.find(n => n.id === nodeId);
      if (!node) {
        continue;
      }

      const isSelected = this.selectedNodeId === nodeId;
      const nodeColor = node.style?.color || '#ffffff';
      const borderColor = isSelected ? '#2196f3' : (node.style?.borderColor || '#333333');

      // Update point size and colors
      if (entity.point) {
        entity.point.pixelSize = isSelected ? 15 : 10;
        
        // Update point color
        let pointColor: any;
        const rgbMatch = nodeColor.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
        if (rgbMatch) {
          const r = parseInt(rgbMatch[1], 16) / 255;
          const g = parseInt(rgbMatch[2], 16) / 255;
          const b = parseInt(rgbMatch[3], 16) / 255;
          pointColor = new this.Cesium.Color(r, g, b, 1.0);
        } else {
          pointColor = this.Cesium.Color.fromCssColorString(nodeColor);
          pointColor = pointColor.withAlpha(1.0);
        }
        entity.point.color = pointColor;
        
        // Update outline color
        entity.point.outlineColor = this.Cesium.Color.fromCssColorString(borderColor);
      }
    }
  }

  /**
   * Draw nodes and edges without changing camera (no fit)
   */
  private renderWithoutFit(): void {
    if (!this.viewer || !this.Cesium) {
      return;
    }

    // Remove existing entities
    this.viewer.entities.removeAll();
    this.nodeEntities.clear();
    this.edgeEntities.clear();
    this.rectEntity = null;

    // Collect nodes without coordinates (coordinates is undefined, null, or invalid)
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

    // Place nodes without coordinates inside a fixed rectangle (Globe3D: lat 0..-50, lon 0..-32)
    if (nodesWithoutCoords.length > 0) {
      const RECT_MIN_LAT = -50;
      const RECT_MAX_LAT = 0;
      const RECT_MIN_LON = -32;
      const RECT_MAX_LON = 0;
      
      // Draw rectangle border
      const rectPositions = [
        this.Cesium.Cartesian3.fromDegrees(RECT_MIN_LON, RECT_MIN_LAT, 0),
        this.Cesium.Cartesian3.fromDegrees(RECT_MAX_LON, RECT_MIN_LAT, 0),
        this.Cesium.Cartesian3.fromDegrees(RECT_MAX_LON, RECT_MAX_LAT, 0),
        this.Cesium.Cartesian3.fromDegrees(RECT_MIN_LON, RECT_MAX_LAT, 0),
      ];
      
      this.rectEntity = this.viewer.entities.add({
        polygon: {
          hierarchy: rectPositions,
          material: this.Cesium.Color.fromCssColorString('#f0f0f0').withAlpha(0.1),
          outline: true,
          outlineColor: this.Cesium.Color.fromCssColorString('#666'),
          height: 0,
        },
      });

      // Evenly place nodes inside the rectangle
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
        
        let pointColor: any;
        const rgbMatch = nodeColor.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
        if (rgbMatch) {
          const r = parseInt(rgbMatch[1], 16) / 255;
          const g = parseInt(rgbMatch[2], 16) / 255;
          const b = parseInt(rgbMatch[3], 16) / 255;
          pointColor = new this.Cesium.Color(r, g, b, 1.0);
        } else {
          pointColor = this.Cesium.Color.fromCssColorString(nodeColor);
          pointColor = pointColor.withAlpha(1.0);
        }
        const pointOutlineColor = this.Cesium.Color.fromCssColorString(borderColor);

        const entity = this.viewer.entities.add({
          position: this.Cesium.Cartesian3.fromDegrees(longitude, latitude, 0),
          point: {
            pixelSize: isSelected ? 15 : 10,
            color: pointColor,
            outlineColor: pointOutlineColor,
            outlineWidth: 2,
            heightReference: this.Cesium.HeightReference.CLAMP_TO_GROUND,
          },
          label: {
            text: node.label,
            font: '14px sans-serif',
            fillColor: this.Cesium.Color.WHITE,
            outlineColor: this.Cesium.Color.BLACK,
            outlineWidth: 2,
            style: this.Cesium.LabelStyle.FILL_AND_OUTLINE,
            verticalOrigin: this.Cesium.VerticalOrigin.BOTTOM,
            pixelOffset: new this.Cesium.Cartesian2(0, -20),
            heightReference: this.Cesium.HeightReference.CLAMP_TO_GROUND,
            show: false,
          },
          nodeId: node.id,
        });

        this.nodeEntities.set(node.id, entity);
      });
    }

    // Draw nodes that have geographic coordinates
    for (const node of nodesWithCoords) {
      const [latitude, longitude] = node.coordinates!;
      const isSelected = this.selectedNodeId === node.id;

      const nodeColor = node.style?.color || '#ffffff';
      const borderColor = isSelected ? '#2196f3' : (node.style?.borderColor || '#333333');
      
      let pointColor: any;
      const rgbMatch = nodeColor.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
      if (rgbMatch) {
        const r = parseInt(rgbMatch[1], 16) / 255;
        const g = parseInt(rgbMatch[2], 16) / 255;
        const b = parseInt(rgbMatch[3], 16) / 255;
        pointColor = new this.Cesium.Color(r, g, b, 1.0);
      } else {
        pointColor = this.Cesium.Color.fromCssColorString(nodeColor);
        pointColor = pointColor.withAlpha(1.0);
      }
      const pointOutlineColor = this.Cesium.Color.fromCssColorString(borderColor);

      const entity = this.viewer.entities.add({
        position: this.Cesium.Cartesian3.fromDegrees(longitude, latitude, 0),
        point: {
          pixelSize: isSelected ? 15 : 10,
          color: pointColor,
          outlineColor: pointOutlineColor,
          outlineWidth: 2,
          heightReference: this.Cesium.HeightReference.CLAMP_TO_GROUND,
        },
        label: {
          text: node.label,
          font: '14px sans-serif',
          fillColor: this.Cesium.Color.WHITE,
          outlineColor: this.Cesium.Color.BLACK,
          outlineWidth: 2,
          style: this.Cesium.LabelStyle.FILL_AND_OUTLINE,
          verticalOrigin: this.Cesium.VerticalOrigin.BOTTOM,
          pixelOffset: new this.Cesium.Cartesian2(0, -20),
          heightReference: this.Cesium.HeightReference.CLAMP_TO_GROUND,
          show: false, // Hide labels by default, show popup on click instead
        },
        nodeId: node.id,
      });

      this.nodeEntities.set(node.id, entity);
    }

    // Draw edges only when alwaysShowEdges is true
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

        const entity = this.viewer.entities.add({
          polyline: {
            positions: [
              this.Cesium.Cartesian3.fromDegrees(srcLon, srcLat, 0),
              this.Cesium.Cartesian3.fromDegrees(dstLon, dstLat, 0),
            ],
            width: width,
            material: this.Cesium.Color.fromCssColorString(edgeColor),
            clampToGround: true,
          },
          edgeId: edge.id, // For hit testing
        });

        this.edgeEntities.set(edge.id, entity);
      }
    }
  }

  // Control buttons are now managed by ViewContainer - no need to create individual buttons

  /**
   * Switch to next tile server when multiple customTileUrls are provided
   */
  private switchTileType(): void {
    if (!this.viewer || !this.Cesium) {
      return;
    }

    // If customTileUrls are specified, switch between them
    if (this.customTileUrls.length > 1) {
      this.currentCustomTileIndex = (this.currentCustomTileIndex + 1) % this.customTileUrls.length;
      this.setTileTypeInternal(true); // Force update
      this.updateTileTypeButton();
      return;
    }

    // If single customTileUrl is specified or no custom tiles, do nothing
  }

  /**
   * Update base imagery layer based on current tile server configuration
   */
  private setTileTypeInternal(force: boolean = false): void {
    if (!this.viewer || !this.Cesium) {
      return;
    }

    // Helper to create safe Credit with HTML link
    const linkCredit = (Cesium: any, label: string, href: string, showOnScreen: boolean = false): any => {
      const safe = (s: string) => String(s)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");

      const html = `<a href="${safe(href)}" target="_blank" rel="noopener noreferrer">${safe(label)}</a>`;
      return new Cesium.Credit(html, showOnScreen);
    };

    // Remove existing base imagery layer if present
    if (this.baseImageryLayer) {
      try {
        this.viewer.imageryLayers.remove(this.baseImageryLayer);
      } catch (e) {
        // Layer may already be removed, ignore error
      }
    }

    // Use custom tile configs if specified (for on-premises or external tile servers)
    if (this.customTileUrls.length > 0) {
      const currentConfig = this.customTileUrls[this.currentCustomTileIndex];
      // Detect NaturalEarthII (local Cesium bundled tiles, EPSG:4326 / geodetic)
      const isNaturalEarthII = currentConfig.url.includes('NaturalEarthII');
      const maximumLevel = currentConfig.maximumLevel ?? (isNaturalEarthII ? 2 : 19);

      let credit: any = undefined;
      if (currentConfig.credit) {
        const c = currentConfig.credit;
        if (c.href) {
          credit = linkCredit(this.Cesium, c.label, c.href, c.showOnScreen ?? false);
        } else {
          credit = new this.Cesium.Credit(c.label, c.showOnScreen ?? false);
        }
      } else {
        credit = new this.Cesium.Credit(
          `Custom tile server (${this.currentCustomTileIndex + 1}/${this.customTileUrls.length})`
        );
      }

      const imageryOptions: any = {
        url: currentConfig.url,
        maximumLevel,
        credit,
      };
      // Use GeographicTilingScheme for NaturalEarthII (geodetic tiling)
      if (isNaturalEarthII && this.Cesium?.GeographicTilingScheme) {
        imageryOptions.tilingScheme = new this.Cesium.GeographicTilingScheme();
      }
      
      const newImagery = new this.Cesium.UrlTemplateImageryProvider(imageryOptions);
      this.baseImageryLayer = this.viewer.imageryLayers.addImageryProvider(newImagery, 0);
      this.updateTileTypeButton();
      return;
    }

    // If no custom tiles are specified, use Cesium bundled NaturalEarthII tiles
    // Explicitly set EPSG:4326 (Geographic Coordinate System) using GeographicTilingScheme
    // NaturalEarthII tiles use TMS (Tile Map Service) format with origin at (-180, -90)
    // According to tilemapresource.xml: Origin y="-90" x="-180", SRS="EPSG:4326"
    const naturalEarthIICredit = new this.Cesium.Credit('© NASA', true);
    
    // Create GeographicTilingScheme with correct origin for NaturalEarthII tiles
    // Origin: (-180, -90) as specified in tilemapresource.xml
    const geographicTilingScheme = new this.Cesium.GeographicTilingScheme({
      rectangle: this.Cesium.Rectangle.fromDegrees(-180, -90, 180, 90),
      numberOfLevelZeroTilesX: 2, // Level 0 has 2 tiles in X direction
      numberOfLevelZeroTilesY: 1, // Level 0 has 1 tile in Y direction
    });
    
    // NaturalEarthII uses TMS format where Y increases from bottom to top
    // Cesium's GeographicTilingScheme uses OSM format (Y from top to bottom)
    // We need to flip Y coordinate: y_flipped = (2^level - 1) - y
    const naturalEarthIIUrl = '/cesium/Assets/Textures/NaturalEarthII/{z}/{x}/{reverseY}.jpg';
    
    const naturalEarthIIProvider = new this.Cesium.UrlTemplateImageryProvider({
      url: naturalEarthIIUrl,
      maximumLevel: 2, // NaturalEarthII tiles only go up to level 2
      tilingScheme: geographicTilingScheme, // EPSG:4326 (Geographic Coordinate System)
      credit: naturalEarthIICredit,
      customTags: {
        reverseY: (imageryProvider: any, x: number, y: number, level: number): string => {
          // TMS format: Y increases from bottom to top
          // OSM format (Cesium default): Y increases from top to bottom
          // Reverse Y: y_tms = (2^level - 1) - y_osm
          const maxY = Math.pow(2, level) - 1;
          const reversedY = maxY - y;
          return String(reversedY);
        },
      },
    });
    
    this.baseImageryLayer = this.viewer.imageryLayers.addImageryProvider(naturalEarthIIProvider, 0);
    this.updateTileTypeButton();
  }

  /**
   * Update tile-switch button visibility/title based on current tile server index
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
   * Update edge-toggle button appearance
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
   * Update lighting-toggle button appearance
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
      // Inactive: normal button style
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
   * Adjust camera so that all nodes are visible
   */
  private fitToNodes(): void {
    if (!this.viewer || !this.Cesium || this.nodes.length === 0) {
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

    // Collect all coordinates (nodes with coordinates + alternative coordinates for nodes without)
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

    // Don't process if no coordinates exist
    if (allLats.length === 0) {
      return;
    }

    // Calculate bounds from all coordinates
    const minLat = Math.min(...allLats);
    const maxLat = Math.max(...allLats);
    const minLon = Math.min(...allLons);
    const maxLon = Math.max(...allLons);

    // Center coordinates
    const centerLat = (minLat + maxLat) / 2;
    const centerLon = (minLon + maxLon) / 2;

    // Calculate height (set appropriate height based on range)
    const latRange = maxLat - minLat;
    const lonRange = maxLon - minLon;
    const maxRange = Math.max(latRange, lonRange);
    const calculatedHeight = Math.max(1000000, maxRange * 111000 * 2); // Min 1000km, adjust based on range
    
    // Apply camera altitude limits (500,000m ~ 40,000,000m)
    const MIN_HEIGHT = 500000;
    const MAX_HEIGHT = 40000000;
    const height = Math.max(MIN_HEIGHT, Math.min(MAX_HEIGHT, calculatedHeight));

    // Wait for imagery layer to be ready before flying
    const waitForImagery = (): Promise<void> => {
      return new Promise((resolve) => {
        if (!this.baseImageryLayer) {
          resolve();
          return;
        }
        
        // Check if imagery is already ready
        if (this.baseImageryLayer.imageryProvider && this.baseImageryLayer.imageryProvider.ready) {
          resolve();
          return;
        }
        
        // Wait for imagery to be ready (with timeout)
        const timeout = setTimeout(() => {
          resolve(); // Resolve even if not ready after 2 seconds
        }, 2000);
        
        if (this.baseImageryLayer.imageryProvider && this.baseImageryLayer.imageryProvider.readyPromise) {
          this.baseImageryLayer.imageryProvider.readyPromise
            .then(() => {
              clearTimeout(timeout);
              resolve();
            })
            .catch(() => {
              clearTimeout(timeout);
              resolve(); // Resolve even on error
            });
        } else {
          clearTimeout(timeout);
          resolve();
        }
      });
    };

    // Set flying flag to prevent camera limit interference
    const setIsFlying = (this as any)._setIsFlying;
    if (setIsFlying) {
      setIsFlying(true);
    }

    // Wait for imagery, then fly
    waitForImagery().then(() => {
    // Set camera (with animation)
    this.viewer.camera.flyTo({
      destination: this.Cesium.Cartesian3.fromDegrees(centerLon, centerLat, height),
      orientation: {
        heading: 0,
        pitch: this.Cesium.Math.toRadians(-90),
        roll: 0,
      },
      duration: 1.0, // Animate in 1 second
        complete: () => {
          // Animation complete - clear flying flag and verify final position
          if (setIsFlying) {
            setIsFlying(false);
          }
          
          // Verify and adjust final camera position if needed
          const camera = this.viewer.scene.camera;
          const cartographic = this.Cesium.Cartographic.fromCartesian(camera.position);
          const finalHeight = cartographic.height;
          const MIN_HEIGHT = 500000;
          const MAX_HEIGHT = 40000000;
          
          if (finalHeight < MIN_HEIGHT || finalHeight > MAX_HEIGHT) {
            const clampedHeight = Math.max(MIN_HEIGHT, Math.min(MAX_HEIGHT, finalHeight));
            const newPosition = this.Cesium.Cartesian3.fromRadians(
              cartographic.longitude,
              cartographic.latitude,
              clampedHeight
            );
            camera.setView({
              destination: newPosition,
              orientation: camera.orientation,
            });
          }
        }
      });
    });
  }

  /**
   * Show view
   */
  show(): void {
    this.container.style.display = 'block';
    if (this.viewer) {
      this.viewer.resize();
    } else if (this.cesiumLoader) {
      // Initialize Cesium on first show
      this.initializeCesium().catch(() => {
        // Failed to initialize Cesium
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
    if (this.viewer) {
      this.viewer.resize();
    }
  }

  /**
   * Destroy view
   */
  destroy(): void {
    // Close popup
    this.hidePopup();
    
    // Remove popup element
    if (this.popupElement && this.popupElement.parentNode) {
      this.popupElement.parentNode.removeChild(this.popupElement);
      this.popupElement = null;
    }
    
    // Remove trackpad pinch event handlers
    if (this.viewer && (this as any)._trackpadPinchHandlers) {
      const canvas = this.viewer.canvas;
      const handlers = (this as any)._trackpadPinchHandlers;
      
      if (handlers.wheel) {
        canvas.removeEventListener('wheel', handlers.wheel);
      }
      if ('GestureEvent' in window) {
        if (handlers.gestureStart) {
          canvas.removeEventListener('gesturestart', handlers.gestureStart);
        }
        if (handlers.gestureChange) {
          canvas.removeEventListener('gesturechange', handlers.gestureChange);
        }
        if (handlers.gestureEnd) {
          canvas.removeEventListener('gestureend', handlers.gestureEnd);
        }
      }
      (this as any)._trackpadPinchHandlers = null;
    }
    
    if (this.viewer) {
      this.viewer.destroy();
      this.viewer = null;
    }
    this.nodeEntities.clear();
    this.edgeEntities.clear();
  }

  /**
   * Create custom popup (Leaflet style)
   */
  private createPopup(): HTMLElement {
    const popup = document.createElement('div');
    popup.className = 'relatos-globe3d-popup';
    popup.style.cssText = `
      position: absolute;
      background: white;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 8px 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      pointer-events: none;
      z-index: 10000;
      font-size: 14px;
      line-height: 1.4;
      max-width: 200px;
      word-wrap: break-word;
      overflow-wrap: break-word;
      white-space: normal;
      opacity: 0;
      transition: opacity 0.2s;
    `;
    
    // Popup arrow (bottom center)
    const arrow = document.createElement('div');
    arrow.style.cssText = `
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-top: 8px solid white;
    `;
    popup.appendChild(arrow);
    
    this.container.appendChild(popup);
    return popup;
  }

  /**
   * Show popup
   */
  private showPopup(entity: any, node: Node): void {
    if (!this.viewer || !this.Cesium || !entity) {
      return;
    }

    // Close existing popup
    this.hidePopup();

    // Create popup element if not exists
    if (!this.popupElement) {
      this.popupElement = this.createPopup();
    }

    // Set popup content
    this.popupElement.textContent = node.label;
    this.popupElement.style.opacity = '1';
    this.popupEntity = entity;

    // Update popup position
    this.updatePopupPosition();

    // Update popup position when camera moves
    if (!this.popupUpdateListener) {
      const updateHandler = () => {
        if (this.popupEntity && this.popupElement) {
          this.updatePopupPosition();
        }
      };
      this.viewer.scene.postRender.addEventListener(updateHandler);
      // Store cleanup function for Cesium event listeners
      this.popupUpdateListener = () => {
        this.viewer?.scene.postRender.removeEventListener(updateHandler);
      };
    }
  }

  /**
   * Hide popup
   */
  private hidePopup(): void {
    if (this.popupElement) {
      this.popupElement.style.opacity = '0';
      // Don't remove immediately, hide after transition completes
      setTimeout(() => {
        if (this.popupElement && this.popupElement.style.opacity === '0') {
          this.popupElement.style.display = 'none';
        }
      }, 200);
    }
    this.popupEntity = null;

    // Remove popup position update listener
    if (this.popupUpdateListener) {
      this.popupUpdateListener();
      this.popupUpdateListener = null;
    }
  }

  /**
   * Update popup position (handles CSS transform scale)
   */
  private updatePopupPosition(): void {
    if (!this.viewer || !this.Cesium || !this.popupEntity || !this.popupElement) return;

    const position = this.popupEntity.position?.getValue(this.viewer.clock.currentTime);
    if (!position) return;

    // Convert world to screen coordinates
    let screenPosition: any = null;
    if (this.Cesium.SceneTransforms?.worldToWindowCoordinates) {
      screenPosition = this.Cesium.SceneTransforms.worldToWindowCoordinates(this.viewer.scene, position);
    } else if (this.Cesium.SceneTransforms?.wgs84ToWindowCoordinates) {
      screenPosition = this.Cesium.SceneTransforms.wgs84ToWindowCoordinates(this.viewer.scene, position);
    } else {
      screenPosition = this.viewer.camera.project(position);
    }

    if (!screenPosition) {
      this.popupElement.style.display = 'none';
      return;
    }

    // Detect cumulative scale from container and ancestors
    let scale = 1;
    const rect = this.container.getBoundingClientRect();
    const logicalWidth = this.container.offsetWidth;
    if (logicalWidth > 0 && rect.width > 0) {
      scale = rect.width / logicalWidth;
    }

    // Convert to logical coordinates for CSS positioning
    const logicalX = screenPosition.x / scale;
    const logicalY = screenPosition.y / scale;

    this.popupElement.style.display = 'block';
    const offsetX = logicalX - this.popupElement.offsetWidth / 2;
    const offsetY = logicalY - this.popupElement.offsetHeight - 15; // Display above marker
    
    this.popupElement.style.left = `${offsetX}px`;
    this.popupElement.style.top = `${offsetY}px`;
  }

  /**
   * Check if editable (Globe3D is not editable)
   */
  isEditable(): boolean {
    return false;
  }
}
