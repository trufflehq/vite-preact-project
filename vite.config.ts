import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { viteSassToCss } from './plugins/sass.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), viteSassToCss()],
})
