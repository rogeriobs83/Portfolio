import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'

export default defineConfig({
  base: '/Portfolio/',
  server: {
    host: true,
    watch: {
      usePolling: true,
    },
  },

  plugins: [
    react(),
    tailwindcss(),
    imagetools(),
  ],
})
