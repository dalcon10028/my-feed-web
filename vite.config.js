import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        /* https://router.vuejs.org/guide/advanced/lazy-loading.html#with-vite */
        manualChunks: {
          'about-page': ['./src/views/AboutPage'],
          'email-login-page': ['./src/views/EmailLoginPage'],
          'home-page': ['./src/views/HomePage'],
          'login-page': ['./src/views/NotFound'],
          'sign-up-page': ['./src/views/SignUpPage']
        }
      }
    }
  }
});
