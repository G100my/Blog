import { defineUserConfig } from 'vuepress-vite';
import type { DefaultThemeOptions } from 'vuepress-vite';

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-TW',
  title: 'G100 印象派前端技術筆記',
  description: 'Just playing around',
  head: [['link', { rel: 'icon', href: '/g100-logo-small.png' }]],

  themeConfig: {
    logo: '/g100-logo.png',
  },
});