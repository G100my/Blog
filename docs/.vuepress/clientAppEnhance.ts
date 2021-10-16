import { defineClientAppEnhance } from '@vuepress/client'
import Home from '../../src/views/Home.vue'

import 'tailwindcss/tailwind.css'

export default defineClientAppEnhance(({ app }) => {
  app.component('Home', Home)
})
