import { defineClientConfig } from '@vuepress/client'
// @ts-ignore
import HomeShell from './theme/HomeShell.vue'

import 'tailwindcss/tailwind.css'

export default defineClientConfig({
  enhance({ app }) {
    app.component('Home', HomeShell)
  },
  layouts: {
    Home: HomeShell,
  },
})
