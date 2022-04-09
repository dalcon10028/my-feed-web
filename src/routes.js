import HomePage from './views/HomePage.vue';
import NotFound from './views/NotFound.vue';

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: HomePage, meta: { title: 'HomePage' } },
  { path: '/:path(.*)', component: NotFound }
];
