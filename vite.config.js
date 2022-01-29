import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import path from 'path'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader(), Pages({ dirs: 'src/components' })],
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
