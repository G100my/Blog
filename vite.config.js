import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  css: {
    postcss: {
      plugins: [require('tailwindcss'), require('postcss-nested'), require('autoprefixer')],
    },
  },
  resolve: {
    alias: [
      { find: 'src', replacement: path.resolve(__dirname, './src') },
      { find: 'docs', replacement: path.resolve(__dirname, './docs') },
    ],
  },
})
