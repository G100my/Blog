import { defaultTheme, defineUserConfig, viteBundler } from 'vuepress-vite'
import { makeNavRoute } from '../../utils/makeRoute'
import pluginsConfig from './pluginConfig'
import svgLoader from 'vite-svg-loader'

const defaultExceptiojns = ['index.md', '.vuepress']

const exceptions: string[] = ['components', 'images']
const folderNameMap = {
  vuepress: 'Vuepress',
  anything: 'Anything',
  sideProject: 'Side Project',
  vue: 'Vue',
}
const navs = makeNavRoute(folderNameMap, exceptions.concat(defaultExceptiojns))

export default defineUserConfig({
  lang: 'zh-TW',
  title: 'G100 前端開發 筆記',
  description: 'Just playing around',
  head: [
    ['meta', { name: 'google-site-verification', content: 'tf18HhmYfg1OqUkm85gsOQgzEf3eCml_yx2uBLfKGrc' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico?v=2' }],
  ],
  base: '/',

  theme: defaultTheme({
    logo: '/g100-logo.png',
    logoDark: '/g100-logo-dark.png',
    navbar: navs,
    sidebar: navs,
    sidebarDepth: 0,
    repo: 'https://github.com/G100my/G100my.github.io/',
  }),

  plugins: pluginsConfig,

  bundler: viteBundler({
    viteOptions: { plugins: [svgLoader()] },
  }),
})
