import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Adminn/login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },





    {
      path: '/login',
      name: 'container',
      component: () => import('../views/Adminn/login.vue')
    }
  ]
})

export default router
