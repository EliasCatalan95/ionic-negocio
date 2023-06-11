import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

import menu from '../views/Menu.vue';
import HomePage from '../views/HomePage.vue';





const routes: Array<RouteRecordRaw> = [
 
  {
    path: '/',
    redirect: '/HomePage'
  },
 
  {
    path: '/Pestañas/',
    component: menu,
    children: [
      {
        path: '',
        redirect: '/Pestañas/Informacion'
      },
      {
        path: 'Informacion',
        component: () => import('@/views/Informacion.vue')
      },
      {
        path: 'Registros',
        component: () => import('@/views/Registros.vue')
      },
      {
        path: 'Camara',
        component: () => import('@/views/Camara.vue')
      }

    ]
  },
  {
    path: '/HomePage',
    name: 'HomePage',
    component: HomePage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
