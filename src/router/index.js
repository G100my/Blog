import { createRouter, createWebHashHistory } from 'vue-router'
import IndexNav from '../views/IndexNav.vue'
import Home from '../views/Home.vue'
import AutoRoutes from '~pages'

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
  ...AutoRoutes,
]

export const router = createRouter({
  routes,
  history: createWebHashHistory(),
})
