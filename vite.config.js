import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Tailwind v3 via PostCSS does not require a Vite plugin

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      overlay: false,
    },
  },
})
