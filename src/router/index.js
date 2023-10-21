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
      path: '/espaceadmin',
      name: 'EspaceAd',
      component: () => import('../views/EspaceAd.vue')
    },
    
    {
      path: '/gestionuser',
      name: 'GestionUser',
      component: () => import('../views/GestionUser.vue')
    },
    {
      path:'/upsertUser/:id?' ,
      name: 'UpsertUser',
      component: () => import('../views/UpsertUser.vue'),
      props: true 
    },
    {
      path:'/request' ,
      name: 'Request',
      component: () => import('../views/Request.vue'),
      props: true 
    }
  ]
})

export default router
