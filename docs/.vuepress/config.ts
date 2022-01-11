import { defineUserConfig } from 'vuepress-vite'
import type { DefaultThemeOptions, ViteBundlerOptions } from 'vuepress-vite'
import { makeNavbarRoute, makeSidebarRoute } from '../../utils/makeRoute'
import pluginsConfig from './pluginConfig'
import svgLoader from 'vite-svg-loader'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-TW',
  title: 'G100 印象派 前端 筆記',
  description: 'Just playing around',
  head: [
    ['meta', { name: 'google-site-verification', content: 'tf18HhmYfg1OqUkm85gsOQgzEf3eCml_yx2uBLfKGrc' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico?v=2' }],
  ],
  base: '/',

  themeConfig: {
    logo: '/g100-logo.png',
    logoDark: '/g100-logo-dark.png',
    navbar: [
      ...makeNavbarRoute('vuepress', 'Vuepress'),
      ...makeNavbarRoute('frontend-note', 'Front-end 筆記'),
      ...makeNavbarRoute('sideProject', 'Side Project'),
      ...makeNavbarRoute('vue', 'Vue'),
    ],
    sidebar: {
      ...makeSidebarRoute('vuepress', 'Vuepress'),
      ...makeSidebarRoute('frontend-note', 'Front-end 筆記'),
      ...makeSidebarRoute('vue', 'Vue'),
    },
    sidebarDepth: 0,
    repo: 'https://github.com/G100my/G100my.github.io/',
  },

  plugins: pluginsConfig,

  bundlerConfig: {
    viteOptions: {
      plugins: [svgLoader()],
      css: {
        postcss: {
          plugins: [require('tailwindcss'), require('postcss-nested'), require('autoprefixer')],
        },
      },
    },
  } as ViteBundlerOptions,
})
