import { createApp } from 'vue';
import { createVueKakaoSdk } from 'vue3-kakao-sdk';
import './tailwind.css';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App)
  .use(store)
  .use(router)
  .use(createVueKakaoSdk(import.meta.env.VITE_KAKAO_SDK_KEY))
  .mount('#app');
