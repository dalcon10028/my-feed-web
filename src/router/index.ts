import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import { Layout } from '@/layouts/layout-enum';
import UserRoutes from './user';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Main',
    component: () => import('@/views/HomePage.vue')
  },
  ...UserRoutes,
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
    meta: { layout: Layout.NoNavigationLayout }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
