<script setup lang="ts">
  import DefaultLayout from './layout/DefaultLayout.vue';
  import LoginBox from '@/components/organisms/login/LoginBox.vue';
  import KakaoLoginButton from '../components/atoms/button/KakaoLoginButton.vue';
</script>

<template>
  <DefaultLayout>
    <LoginBox>
      <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
      <KakaoLoginButton />

      <p class="mt-6 text-sm text-center text-gray-500">
        <router-link to="/login/email">이메일 로그인</router-link>
      </p>
    </LoginBox>
  </DefaultLayout>
</template>
