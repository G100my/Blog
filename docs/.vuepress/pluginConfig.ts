import { containerPlugin } from '@vuepress/plugin-container'
import registerComponentsPlugin from '@vuepress/plugin-register-components'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

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
    componentsDir: path.resolve(__dirname, '../'),
    componentsPatterns: ['**/*.vue'],
    getComponentName: filename => {
      const autoImportConponentName = path.trimExt(filename.replace(/\/|\\/g, '-'))
      console.log(`Auto import: ${autoImportConponentName}`)
      return autoImportConponentName
    },
  }),
]

export default pluginsConfig
