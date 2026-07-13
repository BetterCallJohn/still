import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// `base` is '/' in local dev; on GitHub Pages it is set to '/still/' via the
// VITE_BASE env var in the deploy workflow, so assets resolve under the subpath.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react(), tailwindcss()],
})
