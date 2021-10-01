import { defineClientAppEnhance } from '@vuepress/client'
import Home from './Home.vue'

export default defineClientAppEnhance(({ app }) => {
  app.component('Home', Home)
})
