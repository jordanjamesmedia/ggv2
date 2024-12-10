import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
// Updated configuration for production build
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true
  },
  assetsInclude: ['**/*.jpg', '**/*.png'],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  root: '.',
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
