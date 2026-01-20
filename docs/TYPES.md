# Relatos - Type Definitions Documentation

## Overview

Overview of TypeScript type definitions for Relatos.

## Main Interfaces

### 1. RelatosViewerOptions

Options for creating a viewer instance.

```typescript
interface RelatosViewerOptions {
  enabledViews?: ViewType[];              // Available view types ['graph', 'map2d', 'globe3d']
  initialView?: ViewType;                 // Initial view type
  data?: { nodes: Node[]; edges: Edge[] }; // Initial data
  tileServers?: (string | TileServerConfig)[]; // Shared tile servers for Map2D and Globe3D
  loaders?: {
    leaflet?: () => Promise<typeof import('leaflet')>;
    cesium?: () => Promise<typeof import('cesium')>;
  };
  graph?: {
    mode?: GraphMode;                     // 'view' | 'edit' (default: 'view')
    editable?: boolean;                   // Whether editing is enabled (default: false)
  };
  map2d?: Map2DOptions;
  globe3d?: Globe3DOptions;
  tables?: TableOptions;
  events?: Partial<RelatosEvents>;
}
```

### 2. RelatosViewer

Viewer instance API.

```typescript
interface RelatosViewer {
  /**
   * Set data
   */
  setData(data: { nodes: Node[]; edges: Edge[] }): void;

  /**
   * Switch view
   */
  setView(viewType: ViewType): void;

  /**
   * Get current view type
   */
  getView(): ViewType;

  /**
   * Set graph mode (graph view only)
   */
  setMode(mode: GraphMode): void;

  /**
   * Get current graph mode
   */
  getMode(): GraphMode | null;

  /**
   * Select node (highlight display)
   * @param nodeId Node ID to select (null to deselect)
   */
  selectNode(nodeId: string | null): void;

  /**
   * Resize
   */
  resize(): void;

  /**
   * Destroy
   */
  destroy(): void;
}
```

### 3. Node

Node (data point).

```typescript
interface Node {
  id: string;
  label: string;
  type?: string;
  /**
   * Graph position (manual specification)
   * If not specified, auto-placed from coordinates
   */
  position?: { x: number; y: number };
  
  /**
   * Geographic coordinates [latitude, longitude]
   * - Graph: Auto-placed when coordinates are set (uses 3/4 of viewport for lat/lon area)
   * - Map2D/Globe3D: Used as geographic coordinates
   */
  coordinates?: [number, number];
  
  /**
   * Style settings
   */
  style?: {
    color?: string;           // Background color (default: '#fff')
    borderColor?: string;     // Border color (default: '#333')
    width?: number;           // Node width (default: 120)
    height?: number;          // Node height (default: 60)
  };
  
  meta?: Record<string, unknown>;
}
```

### 4. Edge

Edge (relationship).

```typescript
interface Edge {
  id: string;
  src: string;               // Source node ID
  dst: string;               // Target node ID
  
  /**
   * Style settings
   */
  style?: {
    color?: string;          // Edge color
    weight?: number;         // Edge thickness (1-10)
    label?: string;          // Edge label
    // ...
  };
  
  /**
   * Anchor information (editable in edit mode)
   * Places edge connection points on node edges
   */
  srcAnchor?: EdgeAnchor;
  dstAnchor?: EdgeAnchor;
  
  /**
   * Bend point information (editable in edit mode)
   * Customizes edge path
   */
  bends?: Array<{ x: number; y: number }>;
  
  meta?: Record<string, unknown>;
}
```

### 5. NodeClickEvent

Event when a node is clicked.

```typescript
interface NodeClickEvent {
  node: Node;
  position: { x: number; y: number };  // Click position (view coordinates)
  originalEvent: MouseEvent | TouchEvent;
  view: ViewType;
}
```

### 6. SavePayload

Payload when edits are saved.

```typescript
interface SavePayload {
  nodes: Node[];    // Edited nodes (includes position)
  edges: Edge[];    // Edited edges (includes anchors, bends)
}
```

### 7. TileServerConfig

Tile server configuration.

```typescript
interface TileServerConfig {
  url: string;                        // Tile URL template
  attribution?: string;               // Attribution string (for Leaflet)
  maximumLevel?: number;              // Maximum zoom level (for Cesium)
  maxZoom?: number;                   // Maximum zoom level (for Leaflet, if different)
  tms?: boolean;                      // TMS format (Y coordinate direction)
  credit?: TileServerCredit;          // Credit information (for Cesium)
}
```

## Design Points

1. **Unified Data Model**: Supports both Graph (position) and Map/Globe (coordinates) formats
2. **Auto-layout**: When `coordinates` are set, nodes are automatically placed in Graph view
   - Nodes with coordinates: Uses 3/4 of viewport width for lat/lon-based placement
   - Nodes without coordinates: Placed in remaining 1/4 area with grid layout
3. **Edit Functionality**: Only graph edit mode allows editing. Changes are debounced (500ms) and notified via `onSave`.
4. **Node Selection**: `selectNode(nodeId)` highlights the node
5. **Pan/Zoom**: Supports mouse, touch, and wheel. Includes fit/centering functionality
6. **Tile Server Support**: Shared `tileServers` option for both Map2D and Globe3D views

## Type Exports

```typescript
import type {
  RelatosViewer,
  RelatosViewerOptions,
  Node,
  Edge,
  NodeClickEvent,
  SavePayload,
  ViewType,
  GraphMode,
  TileServerConfig,
  TileServerCredit,
} from 'relatos';
```

## Implementation Status

- ✅ Graph View: Implemented
- ✅ Map2D View: Implemented
- ✅ Globe3D View: Implemented
