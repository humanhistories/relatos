# Relatos

Relatos is a relational atlas visualization library
that renders the same relational data across multiple views.

- **Graph View** (SVG-based, editable)
- **2D Map View** (Leaflet-based)
- **3D Globe View** (Cesium-based)

Developed by [Human Histories](https://humanhistories.org/en/),
a non-profit organization working to make human history data open,
accessible, and reusable.

## Features

- **Unified Relational Model**  
  The same node and edge data structure is shared across all views.

- **Interactive Graph (SVG)**  
  Editable graph view with explicit node and edge manipulation.

- **Geographic Views**  
  Optional 2D map and 3D globe views using geographic coordinates.

- **Flexible Integration**  
  Works in plain web pages and web-based visualization environments,
  without relying on application-specific APIs.

- **Language-Neutral UI**  
  Icon-based controls designed for global use without localization dependencies.

- **Export APIs (v0.3.0)**  
  `getData()`, `getShapeDataForOffice()` (for xlsx/pptx shapes), `exportToPlantUML()` / `importFromPlantUML()` (with layout in `@relatos:layout:*` comments), `getViewAsSvg()`, `exportViewToImage('png'|'webp')`.


## Installation

Relatos can be installed via npm:

```bash
npm install relatos
```

### From GitHub

Alternatively, you can install directly from GitHub:

```bash
npm install git+https://github.com/humanhistories/relatos.git
```

Or clone and build manually:

```bash
git clone https://github.com/humanhistories/relatos.git
cd relatos
npm install
npm run build
```

The build outputs the following files in dist/:

 * relatos.umd.js — Universal build (recommended)

 * relatos.es.js — ES module build


## Quick Start

### Browser (UMD – recommended)

```
<div id="container"></div>
<script src="relatos.umd.js"></script>
<script>
  const viewer = Relatos.createRelatosViewer('#container', {
    enabledViews: ['graph', 'map2d', 'globe3d'],
    initialView: 'map2d',
    data: {
      nodes: [
        { id: '1', label: 'Node 1', coordinates: [35.6812, 139.7671] },
        { id: '2', label: 'Node 2', coordinates: [40.7128, -74.0060] }
      ],
      edges: [
        { id: 'e1', src: '1', dst: '2', label: 'Connection' }
      ]
    },
    loaders: {
      leaflet: async () => (await import('leaflet')).default,
      cesium: async () => (await import('cesium')).Cesium
    }
  });
</script>
```

### ES Modules

```
import { createRelatosViewer } from './relatos.es.js';

const viewer = createRelatosViewer('#container', {
  enabledViews: ['graph'],
  data: { nodes: [], edges: [] }
});
```

## Tile Server Configuration

### Default Behavior

When no `tileServers` option is specified, the library automatically uses Cesium's bundled NaturalEarthII tiles for both Map2D and Globe3D views. These tiles use EPSG:4326 (Geographic Coordinate System) and are compatible with air-gapped environments.

### Custom Tile Servers

You can specify custom tile servers using the `tileServers` option, which is shared by both Map2D and Globe3D views:

```javascript
const viewer = createRelatosViewer('#container', {
  enabledViews: ['graph', 'map2d', 'globe3d'],
  tileServers: [
    {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '© OpenStreetMap contributors',
      credit: {
        label: '© OpenStreetMap contributors',
        href: 'https://www.openstreetmap.org/copyright'
      },
      maxZoom: 19,
      maximumLevel: 19
    },
    {
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      attribution: '© Esri',
      credit: { label: '© Esri' },
      maxZoom: 19,
      maximumLevel: 19
    }
  ],
  // ... other options
});
```

When multiple tile servers are specified, a tile switching button is displayed that allows cycling through them. The button is only shown when two or more tile servers are configured.

### Tile Server Options

- **`url`** (required): Tile URL template (e.g., `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`)
- **`attribution`** (optional): Attribution string for Leaflet
- **`credit`** (optional): Credit information for Cesium (`label`, `href`, `showOnScreen`)
- **`maxZoom`** (optional): Maximum zoom level for Leaflet (defaults to `maximumLevel` if not specified)
- **`maximumLevel`** (optional): Maximum zoom level for Cesium
- **`tms`** (optional): Whether to use TMS format for Leaflet (Y coordinate increases from bottom to top, default: `false`)

Note: The Map2D view assumes standard Web Mercator (EPSG:3857) XYZ tile servers by default. When using EPSG:4326 tiles (like NaturalEarthII), the library automatically configures the appropriate coordinate reference system.

### Requirements

The following libraries are included as dependencies and are automatically installed when you install Relatos:

 * **Leaflet** — required for the 2D Map view  
   The Map2D view assumes standard Web Mercator (EPSG:3857) XYZ tile servers (e.g., `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`).
 * **CesiumJS** — required for the 3D Globe view

### Cesium Assets Configuration

When using the Globe3D view, Cesium requires its assets (Workers, Assets) to be accessible via HTTP. You have two options:

#### Option 1: Copy Assets Manually (Recommended for Production)

Copy the Cesium assets to your public directory:

```bash
# After npm install
cp -r node_modules/cesium/Build/Cesium/Workers public/cesium/Workers
cp -r node_modules/cesium/Build/Cesium/ThirdParty public/cesium/ThirdParty
cp -r node_modules/cesium/Build/Cesium/Assets public/cesium/Assets
cp -r node_modules/cesium/Build/Cesium/Widgets public/cesium/Widgets
```

Then set the base URL before loading Cesium:

```javascript
import { createRelatosViewer } from 'relatos';

// Set Cesium base URL before using Globe3D view
window.CESIUM_BASE_URL = '/cesium/';

const viewer = createRelatosViewer('#container', {
  enabledViews: ['graph', 'map2d', 'globe3d'],
  loaders: {
    cesium: async () => {
      const cesiumModule = await import('cesium');
      return cesiumModule.Cesium || cesiumModule.default || cesiumModule;
    },
  },
  // ... other options
});
```

#### Option 2: Use a Build Tool Plugin

If you're using Vite, the `vite-plugin-cesium` plugin handles this automatically:

```javascript
// vite.config.js
import { defineConfig } from 'vite';
import cesium from 'vite-plugin-cesium';

export default defineConfig({
  plugins: [cesium()],
});
```

The plugin automatically copies Cesium assets to your build output and configures the base URL.

#### Option 3: Serve from node_modules (Development Only)

For development, you can serve Cesium assets directly from `node_modules`:

```javascript
window.CESIUM_BASE_URL = '/node_modules/cesium/Build/Cesium/';
```

**Note:** This approach is only suitable for development. In production, always use Option 1 or 2.

## Examples

- **examples/basic/** — Minimal setup
- **examples/airports/** — Full features (tables, time, tile servers)

## Test Pages (v0.3.0)

- **test/import/** — PlantUML import (plain or deflate)
- **test/export/** — Data & view export: getData, getShapeDataForOffice, exportToPlantUML, getViewAsSvg, exportViewToImage (PNG/WebP)

Run dev server and open `/test/export/` or `/test/import/` to verify export/import APIs.

## Browser Support

 * Modern browsers with SVG support
 * ES module support is required only when using the ES build
 * The UMD build works with standard <script> loading

## License
This project is licensed under the **MIT License**. See `LICENSE` for details.

Relatos uses CesiumJS, which is licensed under the Apache License 2.0.
See the `NOTICE` file for more information.


## About Human Histories

Human Histories is a non-profit organization dedicated to visualizing
human history and making it accessible across languages, so that people
around the world can explore, understand, and collaboratively build
shared historical knowledge.

This project is developed as open-source software and is free to use,
modify, and distribute, including for commercial purposes.

https://humanhistories.org/en/


## Support the Project (Optional)

If this project supports your research, education, or product development,
you may consider supporting the Human Histories initiative.

Your support helps ensure the long-term maintenance, improvement,
and open availability of this software and its underlying data.

https://humanhistories.org/en/histoverse/#relatos

## Contributing

We appreciate your interest in contributing to Relatos.
Please note that response times may vary, and we may not be able to address all issues or pull requests immediately.

If you encounter issues or have suggestions, please use:
https://github.com/humanhistories/relatos/issues
