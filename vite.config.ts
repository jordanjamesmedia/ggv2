import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true
  },
  assetsInclude: ['**/*.jpg', '**/*.png'],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
