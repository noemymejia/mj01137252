import { createRouter, createWebHistory } from 'vue-router';
import Principalpagina from '@/modules/landing/pages/Principalpagina.vue';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Principalpagina',
      component: Principalpagina,
    },
    {
      path: '/contacto',
      name: 'Contactopagina',
      component: () => import('@/modules/landing/pages/Contactopagina.vue'),
    },
    {
      path: '/factura',
      name: 'Facturepagina',
      component: () => import('@/modules/landing/pages/Facturepagina.vue'),
    },
    {
      path: '/precio',
      name: 'Preciopagina',
      component: () => import('@/modules/landing/pages/Preciopagina.vue'),
    },
  ],
});

export default router;
