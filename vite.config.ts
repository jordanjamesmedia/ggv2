/// <reference types="vite/client" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'
import path from 'path'

// https://vitejs.dev/config/
// Updated configuration for production build
export default defineConfig({
  plugins: [
    react(),
    compression(),
    visualizer({
      open: true,
      gzipSize: true
    })
  ],
  server: {
    port: 5173,
    strictPort: true
  },
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.webp', '**/*.svg'],
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), './src'),
      '@assets': path.resolve(process.cwd(), './src/assets')
    }
  },
  root: '.',
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          'mui': ['@mui/material'],
          'vendor': ['react', 'react-dom', 'react-router-dom'],
        },
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
      }
    },
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
})
