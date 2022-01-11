import { createRouter, createWebHashHistory } from 'vue-router'
import IndexNav from '../views/IndexNav.vue'
import Home from '../views/Home.vue'
import DynamicComponentDemo from '../components/vue/DynamicComponentDemo.vue'

export const routes = [
  {
    path: '/',
    name: 'IndexNav',
    component: IndexNav,
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/DynamicComponentDemo',
    name: 'DynamicComponentDemo',
    component: DynamicComponentDemo,
  },
]

export const router = createRouter({
  routes,
  history: createWebHashHistory(),
})
