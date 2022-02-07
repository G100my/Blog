import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'

import 'tailwindcss/tailwind.css'
import '@vuepress/theme-default/lib/client/styles/normalize.scss'
import 'docs/.vuepress/styles/index.scss'

createApp(App).use(router).mount('#app')
