// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  app: {
    head: {
      link: [
        {
          // google font icon
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0',
        },
      ],
    },
  },
  i18n: {
    // Link localizing settings
    locales: ['en', 'zh'],
    defaultLocale: 'zh',

    bundle: {
      compositionOnly: true,
      // 還沒有這個功能
      // fullInstall: false,
    },
  },
})
