import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: () => import('../views/HomePage.vue')
  },

  {
    path: '/Ip',
    name: 'ip',
    component: () => import('../views/userAgentPage.vue')
  },

  {
    path: '/Zip',
    name: 'zip',
    component: () => import('../views/ZipPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
