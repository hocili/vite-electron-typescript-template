import { join } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const outDir = join(__dirname, 'dist/render')
const renderDir = join(__dirname, 'src/render')
const publicDir = join(__dirname, 'public')

// https://vitejs.dev/config/
export default defineConfig({
  publicDir,
  base: './',
  plugins: [vue()],
  build: {
    outDir,
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': renderDir,
    }
  },
})
