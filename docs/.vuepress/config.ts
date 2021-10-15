import { defineUserConfig } from 'vuepress-vite'
import type { DefaultThemeOptions, ViteBundlerOptions } from 'vuepress-vite'
import { makeNavbarRoute, makeSidebarRoute } from '../../utils/makeRoute'
import pluginsConfig from './pluginConfig'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-TW',
  title: 'G100 印象派 前端 筆記',
  description: 'Just playing around',
  head: [['link', { rel: 'icon', href: '/g100-logo-small.png' }]],
  base: '/G100-blog/',

  themeConfig: {
    logo: '/g100-logo.png',
    logoDark: '/g100-logo-dark.png',
    navbar: [...makeNavbarRoute('vuepress', 'Vuepress')],
    sidebar: { ...makeSidebarRoute('vuepress', 'Vuepress') },
    sidebarDepth: 0,
    repo: 'https://github.com/G100my',
  },

  plugins: pluginsConfig,

  bundlerConfig: {
    viteOptions: {
      css: {
        postcss: {
          plugins: [
            require('tailwindcss'),
            require('autoprefixer')
          ]
        }
      },

    }
  } as ViteBundlerOptions
})
