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
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.webp'],
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), './src')
    }
  },
  root: '.',
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'mui': ['@mui/material'],
          'vendor': ['react', 'react-dom', 'react-router-dom'],
        }
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
