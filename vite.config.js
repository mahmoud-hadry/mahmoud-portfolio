import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",
  plugins: [
    react({
      include: "**/*.{js,jsx}"
    })
  ],
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    exclude: []
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx"
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Allow legacy @import used across the portfolio SCSS.
        silenceDeprecations: ["legacy-js-api", "import"]
      }
    }
  },
  build: {
    outDir: "build",
    sourcemap: false,
    assetsInlineLimit: 4096
  },
  server: {
    port: 3000,
    open: true
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
    globals: true,
    css: true
  }
});
