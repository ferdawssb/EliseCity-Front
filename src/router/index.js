import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


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
      component: () => import('../views/Login.vue')
    },
    
    {
      path: '/gestionuser',
      name: 'GestionUser',
      component: () => import('../views/GestionUser.vue')
    },
    {
      path:'/:id/updateUser' ,
      name: 'UserUpdate',
      component: () => import('../views/UpdateUser.vue')
    }
    
    
    
    
    
  ]
})

export default router
