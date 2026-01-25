# Relatos - Architecture Documentation

## Overview

Relatos is a library that visualizes the same relational data across multiple views using a unified data model.

## Directory Structure

```
relatos/
├── src/
│   ├── index.ts                    # Entry point (createRelatosViewer)
│   ├── types.ts                    # Type definitions (for backward compatibility)
│   ├── types/
│   │   ├── index.ts                # Type definition exports
│   │   ├── options.ts              # Options type definitions
│   │   ├── data.ts                 # Node/Edge type definitions
│   │   ├── events.ts               # Event type definitions
│   │   └── viewer.ts               # Viewer type definitions
│   ├── core/
│   │   └── view_container.ts       # ViewContainer implementation (tab UI and view switching)
│   ├── views/
│   │   ├── graph/
│   │   │   └── view.ts             # Graph View implementation (both view/edit modes)
│   │   ├── map2d/
│   │   │   └── view.ts             # Map2D View implementation (Leaflet-based)
│   │   └── globe3d/
│   │       └── view.ts             # Globe3D View implementation (Cesium-based)
│   └── assets/
│       └── icons/
│           ├── icons.svg
│           └── icons-embedded.ts
├── examples/
│   ├── basic/
│   │   ├── index.html
│   │   └── main.ts                 # Basic example: minimal setup
│   └── airports/
│       ├── index.html
│       └── main.ts                 # Airports example: complete features
├── dist/                            # Build output
├── package.json
├── tsconfig.json
└── README.md
```

## Design Principles

1. **View Abstraction**: Each view (graph/map2d/globe3d) implements a common interface
2. **Lazy Loading**: Leaflet/Cesium are injected via `options.loaders`. Views are disabled if loaders are not provided.
3. **Edit Functionality**: Only graph edit mode allows editing. Changes are debounced and notified via `onSave`.
4. **Unified Data Model**: nodes/edges use a unified format
   - Graph: Use `position: {x, y}` for manual coordinates, or `coordinates: [lat, lon]` for auto-layout
   - Map2D/Globe3D: Use `coordinates: [lat, lon]` for geographic coordinates

## Implementation Status

### Graph View (Implemented)

- **View Mode**:
  - Node and edge display
  - Pan/zoom functionality (mouse, touch, wheel support)
  - Node click callbacks
  - Node selection (highlight display)
  - Fit/centering functionality

- **Edit Mode**:
  - Node move and resize
  - Edge anchor editing (edge selection, handle dragging)
  - Edge bend point editing (double-click to add, Delete/Backspace to remove)
  - Auto-save on changes (debounce: 500ms)

- **Auto-layout Functionality**:
  - Nodes with `coordinates: [lat, lon]` are auto-placed based on latitude/longitude
    - Uses 3/4 of the viewport width for latitude/longitude area
    - Calculates x,y coordinates from latitude/longitude and adjusts to prevent label overlap
  - Nodes without `coordinates` are auto-placed in the remaining 1/4 area (grid layout)
  - Automatically zooms out to fit all nodes in the viewport

### Map2D View (Implemented)

Leaflet-based 2D map display.

- **Geographic Display**:
  - Uses Leaflet for 2D map rendering
  - Supports standard Web Mercator (EPSG:3857) XYZ tile servers
  - Supports EPSG:4326 tiles (TMS format) when no tile servers are specified
  - Node markers with custom icons
  - Edge polylines connecting nodes

- **Tile Server Support**:
  - Custom tile servers via `tileServers` option
  - Tile switching button (when multiple tile servers are provided)
  - Default NaturalEarthII tiles (EPSG:4326, TMS) when no tile servers are specified
  - Supports `maxZoom`, `tms`, and `attribution` configuration

- **Interactive Features**:
  - Node selection and flyTo functionality
  - Time controls for day/night shading
  - Lighting toggle
  - Edge visibility controls

### Globe3D View (Implemented)

Cesium-based 3D globe display.

- **Geographic Display**:
  - Uses Cesium for 3D globe rendering
  - Supports geographic coordinate system (EPSG:4326)
  - Node entities with custom graphics
  - Edge polylines connecting nodes on the globe

- **Tile Server Support**:
  - Custom tile servers via `tileServers` option
  - Tile switching button (when multiple tile servers are provided)
  - Default NaturalEarthII tiles (EPSG:4326, TMS) when no tile servers are specified
  - Supports `maximumLevel`, `credit`, and attribution configuration

- **Interactive Features**:
  - Node selection and flyTo functionality
  - Time controls for sun position and day/night shading
  - Lighting toggle
  - Edge visibility controls
  - Camera controls matching Leaflet/Graph behavior:
    - Mouse drag: Pan/rotate globe
    - Mouse wheel / trackpad scroll: Zoom
    - Trackpad pinch: Zoom
    - Ctrl+drag: Tilt camera

- **Touch/Mobile Support**:
  - One-finger drag: Pan/rotate globe
  - Pinch gesture: Zoom
  - Two-finger drag: Pan without rotation
  - `touch-action: none` to prevent browser interception

## Icon-only UI Design

- Buttons and controls must be icon-only.
- Icons must be designed to be understandable without text
  using basic human factors principles.
- Tooltips (title) and aria-labels must be written in English.
- Example:
  - Edit mode: pencil / cursor icon (✎)
  - Fit/Center: house icon (⌂)
  - Delete bend: trash icon (🗑)
  - Cancel edit: ↶

## Mobile-first Interaction Notes

- Use Pointer Events (pointerdown/move/up) instead of separate mouse/touch handlers.
- Hit targets:
  - Edges should use an invisible hit-path with large stroke-width (32px for touch targets).
- Hover:
  - Hover effects are optional and must not be required.
  - On touch, use single tap to set focus/highlight.
- Provide icon-only equivalents for:
  - Delete bend point (Delete/Backspace equivalent)
  - Fit/Center view
  - View/Edit mode toggle

## API Overview

### Entry Point

```typescript
import { createRelatosViewer } from 'relatos';

const viewer = createRelatosViewer('#container', {
  enabledViews: ['graph', 'map2d', 'globe3d'],
  initialView: 'graph',
  data: { nodes: [...], edges: [...] },
  graph: {
    mode: 'view',
    editable: true,
  },
  tileServers: [
    { url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', attribution: '© OpenStreetMap' }
  ],
  loaders: {
    leaflet: async () => (await import('leaflet')).default,
    cesium: async () => (await import('cesium')).Cesium,
  },
  events: {
    onNodeClick: (event) => { ... },
    onSave: (payload) => { ... },
  },
});
```

### Main Methods

- `viewer.setData(data: RelatosData)`: Set or update data (nodes and edges)
- `viewer.setView(viewType: ViewType)`: Switch view ('graph' | 'map2d' | 'globe3d')
- `viewer.getView(): ViewType`: Get current view type
- `viewer.setMode(mode: 'view' | 'edit')`: Set graph mode (only affects graph view)
- `viewer.getMode(): 'view' | 'edit'`: Get current graph mode
- `viewer.selectNode(nodeId: string | null)`: Select node (highlight display, pass null to deselect)
- `viewer.setTime(timeISO: string)`: Set time for day/night shading and moon position (ISO 8601 format)
- `viewer.setLighting(enabled: boolean)`: Set lighting state for Map2D and Globe3D (day/night shading)
- `viewer.resize()`: Resize viewer to fit container
- `viewer.destroy()`: Destroy viewer and clean up resources

## Data Model

### Node

```typescript
interface Node {
  id: string;
  label: string;
  type?: string;
  position?: { x: number; y: number };      // Graph coordinates (manual specification)
  coordinates?: [number, number];            // Geographic coordinates [latitude, longitude]
  style?: {
    color?: string;
    borderColor?: string;
    width?: number;
    height?: number;
  };
  meta?: Record<string, unknown>;
}
```

### Edge

```typescript
interface Edge {
  id: string;
  src: string;                              // Source node ID
  dst: string;                              // Destination node ID
  style?: {
    color?: string;                        // Edge color (hex or CSS color)
    weight?: number;                       // Edge weight (affects line width)
    label?: string;                        // Edge label text
  };
  srcAnchor?: EdgeAnchor;                  // Source anchor position (graph view)
  dstAnchor?: EdgeAnchor;                  // Destination anchor position (graph view)
  bends?: Array<{ x: number; y: number }>; // Bend points for polyline edges (graph view)
  meta?: Record<string, unknown>;          // Additional metadata
}

interface EdgeAnchor {
  side: 'top' | 'right' | 'bottom' | 'left'; // Which side of the node
  t: number;                                  // Position along the side (0..1)
}
```

## Options Reference

### RelatosOptions

```typescript
interface RelatosOptions {
  // View configuration
  enabledViews?: ViewType[];               // Default: ['graph', 'map2d', 'globe3d']
  initialView?: ViewType;                  // Default: 'graph'
  
  // Data
  data?: RelatosData;                      // Initial data (nodes and edges)
  
  // Graph view options
  graph?: {
    mode?: 'view' | 'edit';               // Default: 'view'
    editable?: boolean;                    // Enable edit mode button, default: false
  };
  
  // Map/Globe tile servers
  tileServers?: TileServerConfig[];        // Custom tile servers (optional)
  
  // Time setting (for day/night shading and moon position)
  time?: string;                           // ISO 8601 format, default: current time
  
  // Dependency loaders (required for map2d and globe3d views)
  loaders?: {
    leaflet?: () => Promise<typeof L>;     // Leaflet loader for map2d
    cesium?: () => Promise<typeof Cesium>; // Cesium loader for globe3d
  };
  
  // Event callbacks
  events?: {
    onNodeClick?: (event: NodeClickEvent) => void;
    onEdgeClick?: (event: EdgeClickEvent) => void;
    onSave?: (payload: SavePayload) => void;
    onViewChange?: (event: ViewChangeEvent) => void;
  };
}
```

### TileServerConfig

```typescript
interface TileServerConfig {
  url: string;                    // Tile URL template with {z}, {x}, {y} placeholders
  attribution?: string;           // Attribution text
  maxZoom?: number;              // Maximum zoom level (map2d)
  maximumLevel?: number;         // Maximum level (globe3d, equivalent to maxZoom)
  tms?: boolean;                 // Use TMS tile scheme (default: false)
  credit?: string;               // Credit text for Cesium (globe3d)
}
```

## Events Reference

### NodeClickEvent

```typescript
interface NodeClickEvent {
  node: Node;                    // Clicked node
  view?: ViewType;              // View that triggered the event
}
```

### EdgeClickEvent

```typescript
interface EdgeClickEvent {
  edge: Edge;                    // Clicked edge
  view?: ViewType;              // View that triggered the event
}
```

### SavePayload

Triggered when user edits data in graph edit mode (debounced by 500ms).

```typescript
interface SavePayload {
  nodes: Node[];                 // Updated nodes with position information
  edges: Edge[];                 // Updated edges with anchor and bend information
}
```

### ViewChangeEvent

```typescript
interface ViewChangeEvent {
  previousView: ViewType;        // Previous view
  currentView: ViewType;         // New view
}
```

## Features (v0.2.0)

### Day/Night Shading

- **Map2D**: Displays day/night boundary based on current time
- **Globe3D**: Displays sun position and atmospheric shading
- Toggle lighting on/off with lighting button
- Set custom time with `viewer.setTime(timeISO)`

### Moon Display

- **Map2D**: Displays moon marker at sub-lunar point (point on Earth directly below moon)
  - Shows current moon phase icon
  - Toggle moon display with moon button
  - Moon position calculated from time
- **Globe3D**: Always displays moon in sky
  - Moon orbit and phase rendered by Cesium

### Time Controls

```typescript
// Set specific time (ISO 8601 format)
viewer.setTime('2024-06-21T12:00:00Z');

// Use current time
viewer.setTime(new Date().toISOString());
```

## Usage Examples

### Basic Setup

```typescript
import { createRelatosViewer } from 'relatos';

const viewer = createRelatosViewer('#container', {
  data: {
    nodes: [
      { id: 'n1', label: 'Tokyo', coordinates: [35.6762, 139.6503] },
      { id: 'n2', label: 'New York', coordinates: [40.7128, -74.0060] }
    ],
    edges: [
      { id: 'e1', src: 'n1', dst: 'n2' }
    ]
  },
  initialView: 'map2d'
});
```

### With Leaflet and Cesium

```typescript
import { createRelatosViewer } from 'relatos';

const viewer = createRelatosViewer('#container', {
  enabledViews: ['graph', 'map2d', 'globe3d'],
  loaders: {
    leaflet: async () => (await import('leaflet')).default,
    cesium: async () => (await import('cesium')).Cesium
  },
  data: { nodes: [...], edges: [...] }
});
```

### With Custom Tile Servers

```typescript
const viewer = createRelatosViewer('#container', {
  tileServers: [
    {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19
    },
    {
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      attribution: '© Esri',
      maxZoom: 18
    }
  ],
  loaders: { /* ... */ }
});
```

### With Event Handlers

```typescript
const viewer = createRelatosViewer('#container', {
  events: {
    onNodeClick: (event) => {
      console.log('Node clicked:', event.node.label);
    },
    onSave: (payload) => {
      // Save edited data to server
      fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(payload)
      });
    },
    onViewChange: (event) => {
      console.log(`View changed from ${event.previousView} to ${event.currentView}`);
    }
  }
});
```

### Graph Edit Mode

```typescript
const viewer = createRelatosViewer('#container', {
  initialView: 'graph',
  graph: {
    mode: 'edit',
    editable: true
  },
  events: {
    onSave: (payload) => {
      console.log('Graph edited:', payload);
    }
  }
});

// Switch to edit mode programmatically
viewer.setMode('edit');
```

### Dynamic Data Update

```typescript
// Update data dynamically
viewer.setData({
  nodes: [
    { id: 'n1', label: 'Node 1', coordinates: [35.6762, 139.6503] },
    { id: 'n2', label: 'Node 2', coordinates: [40.7128, -74.0060] }
  ],
  edges: [
    { id: 'e1', src: 'n1', dst: 'n2' }
  ]
});

// Select a node
viewer.selectNode('n1');

// Switch view
viewer.setView('globe3d');
```
