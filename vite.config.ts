import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync, mkdirSync } from 'fs';
import { resolve } from 'path';
import { sentryVitePlugin } from '@sentry/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: process.env.GITHUB_ACTIONS ? '/Automate-hub/' : '/',
  plugins: [
    react(),
    // Optional: copy service worker only when explicitly enabled
    process.env.VITE_ENABLE_SW === 'true'
      ? {
          name: 'copy-service-worker',
          closeBundle() {
            try {
              const distPath = resolve(__dirname, 'dist');
              mkdirSync(distPath, { recursive: true });
              copyFileSync(
                resolve(__dirname, 'public/service-worker.js'),
                resolve(distPath, 'service-worker.js')
              );
              console.log('✓ Service worker copied to dist/');
            } catch (error) {
              console.warn('Could not copy service worker:', error);
            }
          },
        }
      : undefined,
    // Sentry plugin for source maps (only in production builds with auth token)
    mode === 'production' && process.env.SENTRY_AUTH_TOKEN
      ? sentryVitePlugin({
          org: process.env.SENTRY_ORG,
          project: process.env.SENTRY_PROJECT,
          authToken: process.env.SENTRY_AUTH_TOKEN,
          sourcemaps: {
            assets: './dist/**',
          },
          release: {
            name: process.env.VITE_APP_VERSION || '1.0.0',
          },
        })
      : undefined,
  ].filter(Boolean),
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Enable code splitting for better lazy loading
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'icons': ['lucide-react'],
        },
      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Use esbuild minifier (faster and built-in, no extra dependency needed)
    minify: 'esbuild',
    esbuild: {
      drop: ['console', 'debugger'], // Remove console logs and debuggers in production
    },
    // Enable source maps for Sentry (only in production)
    sourcemap: mode === 'production',
  },
}));
