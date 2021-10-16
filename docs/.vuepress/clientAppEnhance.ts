import { defineClientAppEnhance } from '@vuepress/client'
// @ts-ignore
import HomeShell from './theme/HomeShell.vue'

import 'tailwindcss/tailwind.css'

export default defineClientAppEnhance(({ app }) => {
  app.component('Home', HomeShell)
})
