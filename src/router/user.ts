export default [
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
    component: () => import('@/views/EmailLoginPage.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('@/views/EmailLoginPage.vue')
  }
];
