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
  - Camera controls (pan, zoom, rotate)

## Icon-only UI Design

- Buttons and controls must be icon-only.
- Icons must be designed to be understandable without text
  using basic human factors principles.
- Tooltips (title) and aria-labels must be written in English.
- Example:
  - Edit mode: pencil / cursor icon (✎)
  - View mode: eye icon
  - Fit/Center: house icon (⌂)
  - Clear selection: ✕
  - Delete bend: 🗑
  - Cancel edit: ↶

## Mobile-first Interaction Notes

- Use Pointer Events (pointerdown/move/up) instead of separate mouse/touch handlers.
- Hit targets:
  - Edges should use an invisible hit-path with large stroke-width (32px for touch targets).
- Hover:
  - Hover effects are optional and must not be required.
  - On touch, use single tap to set focus/highlight.
- Provide icon-only equivalents for:
  - Clear selection (Esc equivalent)
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

- `viewer.setData(data)`: Set data
- `viewer.setView(viewType)`: Switch view
- `viewer.getView()`: Get current view type
- `viewer.setMode(mode)`: Set graph mode ('view' | 'edit')
- `viewer.getMode()`: Get current graph mode
- `viewer.selectNode(nodeId)`: Select node (highlight display)
- `viewer.resize()`: Resize
- `viewer.destroy()`: Destroy

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
  src: string;
  dst: string;
  style?: {
    color?: string;
    weight?: number;
    label?: string;
    // ...
  };
  srcAnchor?: EdgeAnchor;
  dstAnchor?: EdgeAnchor;
  bends?: Array<{ x: number; y: number }>;
  meta?: Record<string, unknown>;
}
```
