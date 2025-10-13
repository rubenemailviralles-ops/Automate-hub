// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { copyFileSync, mkdirSync } from "fs";
import { resolve } from "path";
import { sentryVitePlugin } from "file:///home/project/node_modules/@sentry/vite-plugin/dist/esm/index.mjs";
var __vite_injected_original_dirname = "/home/project";
var vite_config_default = defineConfig(({ mode }) => ({
  plugins: [
    react(),
    // Custom plugin to copy service worker to dist
    {
      name: "copy-service-worker",
      closeBundle() {
        try {
          const distPath = resolve(__vite_injected_original_dirname, "dist");
          mkdirSync(distPath, { recursive: true });
          copyFileSync(
            resolve(__vite_injected_original_dirname, "public/service-worker.js"),
            resolve(distPath, "service-worker.js")
          );
          console.log("\u2713 Service worker copied to dist/");
        } catch (error) {
          console.warn("Could not copy service worker:", error);
        }
      }
    },
    // Sentry plugin for source maps (only in production builds with auth token)
    mode === "production" && process.env.SENTRY_AUTH_TOKEN ? sentryVitePlugin({
      org: process.env.SENTRY_ORG,
      project: process.env.SENTRY_PROJECT,
      authToken: process.env.SENTRY_AUTH_TOKEN,
      sourcemaps: {
        assets: "./dist/**"
      },
      release: {
        name: process.env.VITE_APP_VERSION || "1.0.0"
      }
    }) : void 0
  ].filter(Boolean),
  optimizeDeps: {
    exclude: ["lucide-react"]
  },
  build: {
    // Enable code splitting for better lazy loading
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "icons": ["lucide-react"]
        }
      }
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1e3,
    // Use esbuild minifier (faster and built-in, no extra dependency needed)
    minify: "esbuild",
    esbuild: {
      drop: ["console", "debugger"]
      // Remove console logs and debuggers in production
    },
    // Enable source maps for Sentry (only in production)
    sourcemap: mode === "production"
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgeyBjb3B5RmlsZVN5bmMsIG1rZGlyU3luYyB9IGZyb20gJ2ZzJztcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcbmltcG9ydCB7IHNlbnRyeVZpdGVQbHVnaW4gfSBmcm9tICdAc2VudHJ5L3ZpdGUtcGx1Z2luJztcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+ICh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIC8vIEN1c3RvbSBwbHVnaW4gdG8gY29weSBzZXJ2aWNlIHdvcmtlciB0byBkaXN0XG4gICAge1xuICAgICAgbmFtZTogJ2NvcHktc2VydmljZS13b3JrZXInLFxuICAgICAgY2xvc2VCdW5kbGUoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgZGlzdFBhdGggPSByZXNvbHZlKF9fZGlybmFtZSwgJ2Rpc3QnKTtcbiAgICAgICAgICBta2RpclN5bmMoZGlzdFBhdGgsIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xuICAgICAgICAgIGNvcHlGaWxlU3luYyhcbiAgICAgICAgICAgIHJlc29sdmUoX19kaXJuYW1lLCAncHVibGljL3NlcnZpY2Utd29ya2VyLmpzJyksXG4gICAgICAgICAgICByZXNvbHZlKGRpc3RQYXRoLCAnc2VydmljZS13b3JrZXIuanMnKVxuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1x1MjcxMyBTZXJ2aWNlIHdvcmtlciBjb3BpZWQgdG8gZGlzdC8nKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ0NvdWxkIG5vdCBjb3B5IHNlcnZpY2Ugd29ya2VyOicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICAgIC8vIFNlbnRyeSBwbHVnaW4gZm9yIHNvdXJjZSBtYXBzIChvbmx5IGluIHByb2R1Y3Rpb24gYnVpbGRzIHdpdGggYXV0aCB0b2tlbilcbiAgICBtb2RlID09PSAncHJvZHVjdGlvbicgJiYgcHJvY2Vzcy5lbnYuU0VOVFJZX0FVVEhfVE9LRU5cbiAgICAgID8gc2VudHJ5Vml0ZVBsdWdpbih7XG4gICAgICAgICAgb3JnOiBwcm9jZXNzLmVudi5TRU5UUllfT1JHLFxuICAgICAgICAgIHByb2plY3Q6IHByb2Nlc3MuZW52LlNFTlRSWV9QUk9KRUNULFxuICAgICAgICAgIGF1dGhUb2tlbjogcHJvY2Vzcy5lbnYuU0VOVFJZX0FVVEhfVE9LRU4sXG4gICAgICAgICAgc291cmNlbWFwczoge1xuICAgICAgICAgICAgYXNzZXRzOiAnLi9kaXN0LyoqJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlbGVhc2U6IHtcbiAgICAgICAgICAgIG5hbWU6IHByb2Nlc3MuZW52LlZJVEVfQVBQX1ZFUlNJT04gfHwgJzEuMC4wJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgOiB1bmRlZmluZWQsXG4gIF0uZmlsdGVyKEJvb2xlYW4pLFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBleGNsdWRlOiBbJ2x1Y2lkZS1yZWFjdCddLFxuICB9LFxuICBidWlsZDoge1xuICAgIC8vIEVuYWJsZSBjb2RlIHNwbGl0dGluZyBmb3IgYmV0dGVyIGxhenkgbG9hZGluZ1xuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBtYW51YWxDaHVua3M6IHtcbiAgICAgICAgICAvLyBWZW5kb3IgY2h1bmtzXG4gICAgICAgICAgJ3JlYWN0LXZlbmRvcic6IFsncmVhY3QnLCAncmVhY3QtZG9tJywgJ3JlYWN0LXJvdXRlci1kb20nXSxcbiAgICAgICAgICAnaWNvbnMnOiBbJ2x1Y2lkZS1yZWFjdCddLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIC8vIE9wdGltaXplIGNodW5rIHNpemVcbiAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDEwMDAsXG4gICAgLy8gVXNlIGVzYnVpbGQgbWluaWZpZXIgKGZhc3RlciBhbmQgYnVpbHQtaW4sIG5vIGV4dHJhIGRlcGVuZGVuY3kgbmVlZGVkKVxuICAgIG1pbmlmeTogJ2VzYnVpbGQnLFxuICAgIGVzYnVpbGQ6IHtcbiAgICAgIGRyb3A6IFsnY29uc29sZScsICdkZWJ1Z2dlciddLCAvLyBSZW1vdmUgY29uc29sZSBsb2dzIGFuZCBkZWJ1Z2dlcnMgaW4gcHJvZHVjdGlvblxuICAgIH0sXG4gICAgLy8gRW5hYmxlIHNvdXJjZSBtYXBzIGZvciBTZW50cnkgKG9ubHkgaW4gcHJvZHVjdGlvbilcbiAgICBzb3VyY2VtYXA6IG1vZGUgPT09ICdwcm9kdWN0aW9uJyxcbiAgfSxcbn0pKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeU4sU0FBUyxvQkFBb0I7QUFDdFAsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsY0FBYyxpQkFBaUI7QUFDeEMsU0FBUyxlQUFlO0FBQ3hCLFNBQVMsd0JBQXdCO0FBSmpDLElBQU0sbUNBQW1DO0FBT3pDLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxPQUFPO0FBQUEsRUFDekMsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBO0FBQUEsSUFFTjtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sY0FBYztBQUNaLFlBQUk7QUFDRixnQkFBTSxXQUFXLFFBQVEsa0NBQVcsTUFBTTtBQUMxQyxvQkFBVSxVQUFVLEVBQUUsV0FBVyxLQUFLLENBQUM7QUFDdkM7QUFBQSxZQUNFLFFBQVEsa0NBQVcsMEJBQTBCO0FBQUEsWUFDN0MsUUFBUSxVQUFVLG1CQUFtQjtBQUFBLFVBQ3ZDO0FBQ0Esa0JBQVEsSUFBSSx1Q0FBa0M7QUFBQSxRQUNoRCxTQUFTLE9BQU87QUFDZCxrQkFBUSxLQUFLLGtDQUFrQyxLQUFLO0FBQUEsUUFDdEQ7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBO0FBQUEsSUFFQSxTQUFTLGdCQUFnQixRQUFRLElBQUksb0JBQ2pDLGlCQUFpQjtBQUFBLE1BQ2YsS0FBSyxRQUFRLElBQUk7QUFBQSxNQUNqQixTQUFTLFFBQVEsSUFBSTtBQUFBLE1BQ3JCLFdBQVcsUUFBUSxJQUFJO0FBQUEsTUFDdkIsWUFBWTtBQUFBLFFBQ1YsUUFBUTtBQUFBLE1BQ1Y7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQLE1BQU0sUUFBUSxJQUFJLG9CQUFvQjtBQUFBLE1BQ3hDO0FBQUEsSUFDRixDQUFDLElBQ0Q7QUFBQSxFQUNOLEVBQUUsT0FBTyxPQUFPO0FBQUEsRUFDaEIsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLGNBQWM7QUFBQSxFQUMxQjtBQUFBLEVBQ0EsT0FBTztBQUFBO0FBQUEsSUFFTCxlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixjQUFjO0FBQUE7QUFBQSxVQUVaLGdCQUFnQixDQUFDLFNBQVMsYUFBYSxrQkFBa0I7QUFBQSxVQUN6RCxTQUFTLENBQUMsY0FBYztBQUFBLFFBQzFCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQTtBQUFBLElBRUEsdUJBQXVCO0FBQUE7QUFBQSxJQUV2QixRQUFRO0FBQUEsSUFDUixTQUFTO0FBQUEsTUFDUCxNQUFNLENBQUMsV0FBVyxVQUFVO0FBQUE7QUFBQSxJQUM5QjtBQUFBO0FBQUEsSUFFQSxXQUFXLFNBQVM7QUFBQSxFQUN0QjtBQUNGLEVBQUU7IiwKICAibmFtZXMiOiBbXQp9Cg==
