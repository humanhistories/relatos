/**
 * Relatos Viewer - Entry point
 */

import type {
  RelatosViewerOptions,
  RelatosViewer,
  ViewType,
  GraphMode,
  Node,
  Edge,
} from './types';
import { ViewContainer } from './core/view_container';
import { GraphView } from './views/graph/view';
import { Globe3DView } from './views/globe3d/view';
import { Map2DView } from './views/map2d/view';
import { injectSvgSprite } from './assets/icons/icons-embedded';

/**
 * Creates a RelatosViewer instance
 *
 * @param containerEl Container element (HTMLElement or selector string)
 * @param options Viewer options
 * @returns RelatosViewer instance
 */
export function createRelatosViewer(
  containerEl: HTMLElement | string,
  options: RelatosViewerOptions = {}
): RelatosViewer {
  // Inject SVG sprite on initialization
  injectSvgSprite();
  
  // Get container element
  let container: HTMLElement;
  if (typeof containerEl === 'string') {
    const el = document.querySelector(containerEl);
    if (!el || !(el instanceof HTMLElement)) {
      throw new Error(`Container element not found: ${containerEl}`);
    }
    container = el;
  } else {
    container = containerEl;
  }

  // Default option values
  const enabledViews: ViewType[] = options.enabledViews || ['graph', 'map2d', 'globe3d'];
  const initialView: ViewType = options.initialView || (enabledViews.includes('map2d') ? 'map2d' : enabledViews[0]);
  const graphMode: GraphMode = options.graph?.mode || 'view';
  const graphEditable: boolean = options.graph?.editable || false;
  const sharedTileServers = options.tileServers;

  // Create ViewContainer
  const viewContainer = new ViewContainer(container, enabledViews);

  // Initialize table display options
  if (options.tables) {
    viewContainer.setTableOptions(options.tables);
  }

  // Set onNodeClick callback for table row clicks
  if (options.events?.onNodeClick) {
    viewContainer.setOnNodeClickCallback(options.events.onNodeClick);
  }

  // Wrap onNodeClick to also highlight table row
  const wrappedOnNodeClick = options.events?.onNodeClick 
    ? (event: import('./types/events').NodeClickEvent) => {
        options.events!.onNodeClick!(event);
        viewContainer.highlightNodeRow(event.node.id);
      }
    : undefined;

  // Wrap onEdgeClick to also highlight table row
  // Always define callback: call options.events?.onEdgeClick if exists, then always call highlightEdgeRow
  const wrappedOnEdgeClick = (event: import('./types/events').EdgeClickEvent) => {
    if (options.events?.onEdgeClick) {
      options.events.onEdgeClick(event);
    }
    viewContainer.highlightEdgeRow(event.edge.id);
  };

  // Create Graph View (always enabled if in enabledViews)
  if (enabledViews.includes('graph')) {
    const graphViewContainer = document.createElement('div');
    graphViewContainer.style.width = '100%';
    graphViewContainer.style.height = '100%';
    viewContainer.getViewContainer().appendChild(graphViewContainer);

    const graphView = new GraphView(
      graphViewContainer,
      wrappedOnNodeClick || options.events?.onNodeClick,
      options.events?.onSave,
      graphEditable,
      wrappedOnEdgeClick
    );
    // Update edit toggle button when mode changes
    graphView.setModeChangeCallback(() => {
      viewContainer.updateEditToggleButton();
      viewContainer.updateGraphButtons();
    });
    // Update shared always show edges state
    graphView.setAlwaysShowEdgesChangeCallback((enabled: boolean) => {
      viewContainer.setAlwaysShowEdges(enabled);
    });
    // Update Graph-specific buttons in ViewContainer
    graphView.setGraphButtonsUpdateCallback(() => {
      viewContainer.updateGraphButtons();
    });
    graphView.setMode(graphMode);
    if (options.data) {
      graphView.setData(options.data.nodes, options.data.edges);
    }
    viewContainer.registerView('graph', graphView);
  }

  // Create Map2D View
  if (enabledViews.includes('map2d')) {
    if (!options.loaders?.leaflet) {
      console.warn('Map2D view requires leaflet loader. Please provide options.loaders.leaflet');
    } else {
      const map2dViewContainer = document.createElement('div');
      map2dViewContainer.style.width = '100%';
      map2dViewContainer.style.height = '100%';
      viewContainer.getViewContainer().appendChild(map2dViewContainer);

      const map2dView = new Map2DView(
        map2dViewContainer,
        wrappedOnNodeClick || options.events?.onNodeClick,
        options.loaders.leaflet,
        sharedTileServers,
        options.map2d,
        wrappedOnEdgeClick
      );
      // Update shared toggle states
      map2dView.setAlwaysShowEdgesChangeCallback((enabled: boolean) => {
        viewContainer.setAlwaysShowEdges(enabled);
      });
      map2dView.setLightingChangeCallback((enabled: boolean) => {
        viewContainer.setLightingEnabled(enabled);
      });
      // Apply initial states from options before registering view
      if (options.map2d?.enableLighting === true) {
        viewContainer.setLightingEnabled(true);
      }
      if (options.data) {
        map2dView.setData(options.data.nodes, options.data.edges);
      }
      viewContainer.registerView('map2d', map2dView);
    }
  }

  // Create Globe3D View
  if (enabledViews.includes('globe3d')) {
    if (!options.loaders?.cesium) {
      console.warn('Globe3D view requires cesium loader. Please provide options.loaders.cesium');
      console.warn('Globe3D tab button will be shown, but the view will not be available until cesium loader is provided.');
    } else {
      try {
        const globe3dViewContainer = document.createElement('div');
        globe3dViewContainer.style.width = '100%';
        globe3dViewContainer.style.height = '100%';
        viewContainer.getViewContainer().appendChild(globe3dViewContainer);

        const globe3dView = new Globe3DView(
          globe3dViewContainer,
          wrappedOnNodeClick || options.events?.onNodeClick,
          options.loaders.cesium,
          {
            time: options.globe3d?.time,
            enableLighting: options.globe3d?.enableLighting,
          },
          sharedTileServers,
          wrappedOnEdgeClick
        );
        // Update shared toggle states
        globe3dView.setAlwaysShowEdgesChangeCallback((enabled: boolean) => {
          viewContainer.setAlwaysShowEdges(enabled);
        });
        globe3dView.setLightingChangeCallback((enabled: boolean) => {
          viewContainer.setLightingEnabled(enabled);
        });
        // Apply initial states from options
        if (options.globe3d?.enableLighting === true) {
          viewContainer.setLightingEnabled(true);
        }
        if (options.data) {
          globe3dView.setData(options.data.nodes, options.data.edges);
        }
        viewContainer.registerView('globe3d', globe3dView);
        console.log('Globe3D view created and registered successfully');
      } catch (error) {
        console.error('Failed to create Globe3D view:', error);
        console.warn('Globe3D tab button will be shown, but the view will not be available due to initialization error.');
      }
    }
  }

  // Set initial view
  viewContainer.setInitialView(initialView);

  // Set initial data in ViewContainer (for table display)
  if (options.data) {
    viewContainer.setData(options.data.nodes, options.data.edges);
  }

  // Return RelatosViewer instance
  return {
    setData(data: { nodes: Node[]; edges: Edge[] }): void {
      const graphView = viewContainer.getView('graph') as GraphView | undefined;
      if (graphView) {
        graphView.setData(data.nodes, data.edges);
      }
      const map2dView = viewContainer.getView('map2d') as Map2DView | undefined;
      if (map2dView) {
        map2dView.setData(data.nodes, data.edges);
      }
      const globe3dView = viewContainer.getView('globe3d') as Globe3DView | undefined;
      if (globe3dView) {
        globe3dView.setData(data.nodes, data.edges);
      }
      // Also set data in ViewContainer (for table display)
      viewContainer.setData(data.nodes, data.edges);
    },

    setView(viewType: ViewType): void {
      viewContainer.switchView(viewType);
    },

    getView(): ViewType {
      const current = viewContainer.getCurrentView();
      if (!current) {
        throw new Error('No view is currently active');
      }
      return current;
    },

    setMode(mode: GraphMode): void {
      const graphView = viewContainer.getView('graph') as GraphView | undefined;
      if (graphView) {
        graphView.setMode(mode);
      }
    },

    getMode(): GraphMode | null {
      const graphView = viewContainer.getView('graph') as GraphView | undefined;
      if (graphView) {
        return graphView.getMode();
      }
      return null;
    },

    resize(): void {
      viewContainer.resize();
    },

    destroy(): void {
      viewContainer.destroy();
    },

    selectNode(nodeId: string | null): void {
      const graphView = viewContainer.getView('graph') as GraphView | undefined;
      if (graphView && graphView.selectNode) {
        graphView.selectNode(nodeId);
      }
      const map2dView = viewContainer.getView('map2d') as Map2DView | undefined;
      if (map2dView && map2dView.selectNode) {
        map2dView.selectNode(nodeId);
      }
      const globe3dView = viewContainer.getView('globe3d') as Globe3DView | undefined;
      if (globe3dView && globe3dView.selectNode) {
        globe3dView.selectNode(nodeId);
      }
    },

    // Map2D methods
    setMap2dTime(timeISO: string): void {
      const map2dView = viewContainer.getView('map2d') as Map2DView | undefined;
      if (map2dView && map2dView.setTime) {
        map2dView.setTime(timeISO);
      }
    },

    setMap2dLighting(enabled: boolean): void {
      const map2dView = viewContainer.getView('map2d') as Map2DView | undefined;
      if (map2dView && map2dView.setLighting) {
        map2dView.setLighting(enabled);
      }
    },

    // Globe3D methods
    setGlobe3dTime(timeISO: string): void {
      const globe3dView = viewContainer.getView('globe3d') as Globe3DView | undefined;
      if (globe3dView && globe3dView.setTime) {
        globe3dView.setTime(timeISO);
      }
    },

    setGlobe3dLighting(enabled: boolean): void {
      const globe3dView = viewContainer.getView('globe3d') as Globe3DView | undefined;
      if (globe3dView && globe3dView.setLighting) {
        globe3dView.setLighting(enabled);
      }
    },
  };
}

// Export type definitions
export type * from './types';
