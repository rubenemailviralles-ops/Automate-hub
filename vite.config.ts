import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync, mkdirSync } from 'fs';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Custom plugin to copy service worker to dist
    {
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
    },
  ],
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
  },
});
