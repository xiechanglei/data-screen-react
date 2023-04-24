import postcssPresetEnv from "postcss-preset-env"
import { defineConfig } from 'vite'
import px2Viewport from "postcss-px-to-viewport"
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //alias
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  css: {
    postcss: {
      plugins: [
        postcssPresetEnv(),
        px2Viewport({
          viewportWidth: 1920,
          viewportHeight: 1080
        })
      ],
    }
  }
})
