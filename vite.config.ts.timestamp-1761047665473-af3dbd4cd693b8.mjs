// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { copyFileSync, mkdirSync } from "fs";
import { resolve } from "path";
import { sentryVitePlugin } from "file:///home/project/node_modules/@sentry/vite-plugin/dist/esm/index.mjs";
var __vite_injected_original_dirname = "/home/project";
var vite_config_default = defineConfig(({ mode }) => ({
  base: process.env.GITHUB_ACTIONS ? "/Automate-hub/" : "/",
  plugins: [
    react(),
    // Optional: copy service worker only when explicitly enabled
    process.env.VITE_ENABLE_SW === "true" ? {
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
    } : void 0,
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgeyBjb3B5RmlsZVN5bmMsIG1rZGlyU3luYyB9IGZyb20gJ2ZzJztcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcbmltcG9ydCB7IHNlbnRyeVZpdGVQbHVnaW4gfSBmcm9tICdAc2VudHJ5L3ZpdGUtcGx1Z2luJztcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+ICh7XG4gIGJhc2U6IHByb2Nlc3MuZW52LkdJVEhVQl9BQ1RJT05TID8gJy9BdXRvbWF0ZS1odWIvJyA6ICcvJyxcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgLy8gT3B0aW9uYWw6IGNvcHkgc2VydmljZSB3b3JrZXIgb25seSB3aGVuIGV4cGxpY2l0bHkgZW5hYmxlZFxuICAgIHByb2Nlc3MuZW52LlZJVEVfRU5BQkxFX1NXID09PSAndHJ1ZSdcbiAgICAgID8ge1xuICAgICAgICAgIG5hbWU6ICdjb3B5LXNlcnZpY2Utd29ya2VyJyxcbiAgICAgICAgICBjbG9zZUJ1bmRsZSgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGNvbnN0IGRpc3RQYXRoID0gcmVzb2x2ZShfX2Rpcm5hbWUsICdkaXN0Jyk7XG4gICAgICAgICAgICAgIG1rZGlyU3luYyhkaXN0UGF0aCwgeyByZWN1cnNpdmU6IHRydWUgfSk7XG4gICAgICAgICAgICAgIGNvcHlGaWxlU3luYyhcbiAgICAgICAgICAgICAgICByZXNvbHZlKF9fZGlybmFtZSwgJ3B1YmxpYy9zZXJ2aWNlLXdvcmtlci5qcycpLFxuICAgICAgICAgICAgICAgIHJlc29sdmUoZGlzdFBhdGgsICdzZXJ2aWNlLXdvcmtlci5qcycpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdcdTI3MTMgU2VydmljZSB3b3JrZXIgY29waWVkIHRvIGRpc3QvJyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0NvdWxkIG5vdCBjb3B5IHNlcnZpY2Ugd29ya2VyOicsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICA6IHVuZGVmaW5lZCxcbiAgICAvLyBTZW50cnkgcGx1Z2luIGZvciBzb3VyY2UgbWFwcyAob25seSBpbiBwcm9kdWN0aW9uIGJ1aWxkcyB3aXRoIGF1dGggdG9rZW4pXG4gICAgbW9kZSA9PT0gJ3Byb2R1Y3Rpb24nICYmIHByb2Nlc3MuZW52LlNFTlRSWV9BVVRIX1RPS0VOXG4gICAgICA/IHNlbnRyeVZpdGVQbHVnaW4oe1xuICAgICAgICAgIG9yZzogcHJvY2Vzcy5lbnYuU0VOVFJZX09SRyxcbiAgICAgICAgICBwcm9qZWN0OiBwcm9jZXNzLmVudi5TRU5UUllfUFJPSkVDVCxcbiAgICAgICAgICBhdXRoVG9rZW46IHByb2Nlc3MuZW52LlNFTlRSWV9BVVRIX1RPS0VOLFxuICAgICAgICAgIHNvdXJjZW1hcHM6IHtcbiAgICAgICAgICAgIGFzc2V0czogJy4vZGlzdC8qKicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZWxlYXNlOiB7XG4gICAgICAgICAgICBuYW1lOiBwcm9jZXNzLmVudi5WSVRFX0FQUF9WRVJTSU9OIHx8ICcxLjAuMCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgIDogdW5kZWZpbmVkLFxuICBdLmZpbHRlcihCb29sZWFuKSxcbiAgb3B0aW1pemVEZXBzOiB7XG4gICAgZXhjbHVkZTogWydsdWNpZGUtcmVhY3QnXSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICAvLyBFbmFibGUgY29kZSBzcGxpdHRpbmcgZm9yIGJldHRlciBsYXp5IGxvYWRpbmdcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgbWFudWFsQ2h1bmtzOiB7XG4gICAgICAgICAgLy8gVmVuZG9yIGNodW5rc1xuICAgICAgICAgICdyZWFjdC12ZW5kb3InOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbScsICdyZWFjdC1yb3V0ZXItZG9tJ10sXG4gICAgICAgICAgJ2ljb25zJzogWydsdWNpZGUtcmVhY3QnXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBPcHRpbWl6ZSBjaHVuayBzaXplXG4gICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiAxMDAwLFxuICAgIC8vIFVzZSBlc2J1aWxkIG1pbmlmaWVyIChmYXN0ZXIgYW5kIGJ1aWx0LWluLCBubyBleHRyYSBkZXBlbmRlbmN5IG5lZWRlZClcbiAgICBtaW5pZnk6ICdlc2J1aWxkJyxcbiAgICBlc2J1aWxkOiB7XG4gICAgICBkcm9wOiBbJ2NvbnNvbGUnLCAnZGVidWdnZXInXSwgLy8gUmVtb3ZlIGNvbnNvbGUgbG9ncyBhbmQgZGVidWdnZXJzIGluIHByb2R1Y3Rpb25cbiAgICB9LFxuICAgIC8vIEVuYWJsZSBzb3VyY2UgbWFwcyBmb3IgU2VudHJ5IChvbmx5IGluIHByb2R1Y3Rpb24pXG4gICAgc291cmNlbWFwOiBtb2RlID09PSAncHJvZHVjdGlvbicsXG4gIH0sXG59KSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlOLFNBQVMsb0JBQW9CO0FBQ3RQLE9BQU8sV0FBVztBQUNsQixTQUFTLGNBQWMsaUJBQWlCO0FBQ3hDLFNBQVMsZUFBZTtBQUN4QixTQUFTLHdCQUF3QjtBQUpqQyxJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssT0FBTztBQUFBLEVBQ3pDLE1BQU0sUUFBUSxJQUFJLGlCQUFpQixtQkFBbUI7QUFBQSxFQUN0RCxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUE7QUFBQSxJQUVOLFFBQVEsSUFBSSxtQkFBbUIsU0FDM0I7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFDWixZQUFJO0FBQ0YsZ0JBQU0sV0FBVyxRQUFRLGtDQUFXLE1BQU07QUFDMUMsb0JBQVUsVUFBVSxFQUFFLFdBQVcsS0FBSyxDQUFDO0FBQ3ZDO0FBQUEsWUFDRSxRQUFRLGtDQUFXLDBCQUEwQjtBQUFBLFlBQzdDLFFBQVEsVUFBVSxtQkFBbUI7QUFBQSxVQUN2QztBQUNBLGtCQUFRLElBQUksdUNBQWtDO0FBQUEsUUFDaEQsU0FBUyxPQUFPO0FBQ2Qsa0JBQVEsS0FBSyxrQ0FBa0MsS0FBSztBQUFBLFFBQ3REO0FBQUEsTUFDRjtBQUFBLElBQ0YsSUFDQTtBQUFBO0FBQUEsSUFFSixTQUFTLGdCQUFnQixRQUFRLElBQUksb0JBQ2pDLGlCQUFpQjtBQUFBLE1BQ2YsS0FBSyxRQUFRLElBQUk7QUFBQSxNQUNqQixTQUFTLFFBQVEsSUFBSTtBQUFBLE1BQ3JCLFdBQVcsUUFBUSxJQUFJO0FBQUEsTUFDdkIsWUFBWTtBQUFBLFFBQ1YsUUFBUTtBQUFBLE1BQ1Y7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQLE1BQU0sUUFBUSxJQUFJLG9CQUFvQjtBQUFBLE1BQ3hDO0FBQUEsSUFDRixDQUFDLElBQ0Q7QUFBQSxFQUNOLEVBQUUsT0FBTyxPQUFPO0FBQUEsRUFDaEIsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLGNBQWM7QUFBQSxFQUMxQjtBQUFBLEVBQ0EsT0FBTztBQUFBO0FBQUEsSUFFTCxlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixjQUFjO0FBQUE7QUFBQSxVQUVaLGdCQUFnQixDQUFDLFNBQVMsYUFBYSxrQkFBa0I7QUFBQSxVQUN6RCxTQUFTLENBQUMsY0FBYztBQUFBLFFBQzFCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQTtBQUFBLElBRUEsdUJBQXVCO0FBQUE7QUFBQSxJQUV2QixRQUFRO0FBQUEsSUFDUixTQUFTO0FBQUEsTUFDUCxNQUFNLENBQUMsV0FBVyxVQUFVO0FBQUE7QUFBQSxJQUM5QjtBQUFBO0FBQUEsSUFFQSxXQUFXLFNBQVM7QUFBQSxFQUN0QjtBQUNGLEVBQUU7IiwKICAibmFtZXMiOiBbXQp9Cg==
