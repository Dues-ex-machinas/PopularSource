import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Get base path from environment variable, default to '/' for root or '/repo-name/' for project pages
// For GitHub Pages: 
// - User/Org pages: base = '/'
// - Project pages: base = '/repository-name/'
const base = process.env.VITE_BASE_PATH || (process.env.NODE_ENV === 'production' ? '/PopularSource/' : '/');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: base,
  server: {
    port: 5173,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})

