import { defineConfig } from 'vite';
import cesium from 'vite-plugin-cesium';
import dts from 'vite-plugin-dts';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';

export default defineConfig({
  plugins: [
    wasm(),
    topLevelAwait(),
    cesium(),
    dts({
      insertTypesEntry: true,
      include: ['src/**/*'],
      exclude: ['src/**/*.test.ts', 'src/**/*.spec.ts'],
      outDir: 'dist',
      copyDtsFiles: false,
    }),
  ],
  resolve: {
    alias: {
      // Set path to Cesium assets
      cesium: 'cesium',
    },
  },
  optimizeDeps: {
    // vite-plugin-cesium handles Cesium, no need to exclude
    // Add dependencies that may cause errors
    include: [
      'mersenne-twister',
      'urijs',
      'grapheme-splitter',
      'bitmap-sdf',
      'lerc',
    ],
    // Exclude WASM packages from optimization (handled by vite-plugin-wasm)
    exclude: ['brotli-wasm'],
    esbuildOptions: {
      // Enable CommonJS module transformation
      target: 'es2020',
      mainFields: ['module', 'main'],
    },
  },
  server: {
    fs: {
      // Allow access to Cesium assets in node_modules
      allow: ['..'],
    },
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'Relatos',
      fileName: (format) =>
        format === 'es' ? 'relatos.es.js' : 'relatos.umd.js',
      formats: ['umd', 'es'],
    },
    rollupOptions: {
      // External dependencies that should not be bundled
      external: ['leaflet', 'cesium'],
      output: {
        // Provide global variables for external dependencies
        globals: {
          leaflet: 'L',
          cesium: 'Cesium',
        },
      },
    },
    commonjsOptions: {
      // Enable CommonJS module transformation
      // Include Cesium and its dependencies (process all CommonJS modules in node_modules)
      include: [/cesium/, /node_modules/],
      transformMixedEsModules: true,
      // Handle CommonJS default exports
      defaultIsModuleExports: 'auto',
      // Process all CommonJS modules
      requireReturnsDefault: 'auto',
    },
  },
  // Configuration for proper delivery of Cesium assets
  assetsInclude: ['**/*.json', '**/*.jpg', '**/*.png'],
});
