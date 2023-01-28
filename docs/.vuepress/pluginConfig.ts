import { containerPlugin } from '@vuepress/plugin-container'
import registerComponentsPlugin from '@vuepress/plugin-register-components'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

const pluginsConfig = [
  googleAnalyticsPlugin({
    id: 'G-JH39M5NFKP',
  }),
  containerPlugin({
    type: 'info',
    before: (title: string): string =>
      `<div class="custom-container tip"><p class="custom-container-title">${title ? `title` : 'Info'}</p>\n`,
    after: (): string => '</div>\n',
  }),
  containerPlugin({
    type: 'murmur',
    before: (title: string): string =>
      `<div class="custom-container murmur"><p class="custom-container-title">${
        title ? title : 'Just murmur ...'
      }</p>\n`,
    after: (): string => '</div>\n',
  }),
  registerComponentsPlugin({
    componentsPatterns: ['docs/**/components/**/*.vue'],
  }),
]

export default pluginsConfig
