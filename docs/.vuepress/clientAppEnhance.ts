import { defineClientAppEnhance } from '@vuepress/client'
import Home from './Home.vue'

import 'tailwindcss/tailwind.css'

export default defineClientAppEnhance(({ app }) => {
  app.component('Home', Home)
})
