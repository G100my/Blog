import { defineUserConfig } from 'vuepress-vite';
import type { DefaultThemeOptions } from 'vuepress-vite';
import { getNavConfig, getSidebarConfig } from '../../utils/getConfig';
import pluginsConfig from './pluginConfig';

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-TW',
  title: 'G100 印象派 前端 筆記',
  description: 'Just playing around',
  head: [['link', { rel: 'icon', href: '/g100-logo-small.png' }]],
  base: '/G100-blog/',

  themeConfig: {
    logo: '/g100-logo.png',
    navbar: [
      ...getNavConfig('Vuepress', 'vuepress'),
    ],
    sidebar: {
      ...getSidebarConfig('Vuepress', 'vuepress'),
    },
    sidebarDepth: 0,
  },
  plugins: pluginsConfig
});