import type { RouteRecordRaw } from 'vue-router';

const userRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login-sns',
    component: () => import('@/views/LoginPage.vue')
  },
  {
    path: '/login/email',
    name: 'login-email',
    component: () => import('@/views/EmailLoginPage.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/views/SignUpPage.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('@/views/EmailLoginPage.vue')
  }
];

export default userRoutes;
