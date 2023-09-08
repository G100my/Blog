import zh from './locales/zh.json'
import en from './locales/en.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'zh',
  messages: { zh, en },
  flatJson: true,
}))
