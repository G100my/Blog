// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
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
  devServer: {
    port: 2309,
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css',
        },
      ],
    },
  },
})
