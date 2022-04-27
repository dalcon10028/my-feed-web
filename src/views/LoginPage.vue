<script setup lang="ts">
  import DefaultLayout from './layout/DefaultLayout.vue';
  import LoginBox from '@/components/organisms/login/LoginBox.vue';
  import KakaoIcon from '@/assets/images/icon/icon-kakao.png';

  const kakaoLoginUrl = `${import.meta.env.VITE_MY_FEED_API}/users/kakao/login`;
</script>

<template>
  <DefaultLayout>
    <LoginBox>
      <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
      <a :href="kakaoLoginUrl" class="btn-kakao">
        <img :src="KakaoIcon" alt="카카오 아이콘" width="25" class="inline-block" />
        카카오톡으로 로그인
      </a>

      <p class="mt-6 text-sm text-center text-gray-500">
        <router-link to="/login/email">이메일 로그인</router-link>
      </p>
    </LoginBox>
  </DefaultLayout>
</template>

<style scoped>
  .btn-kakao {
    @apply block py-3 px-5 w-full font-medium text-white rounded-lg text-center hover:scale-105 transition duration-150 hover:shadow-xl ease-in-out;
    background-color: #fee500;
    color: #181600;
  }
</style>
