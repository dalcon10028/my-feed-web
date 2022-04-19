<script setup lang="ts">
  import DefaultLayout from './layout/DefaultLayout.vue';
  import LoginBox from '@/components/organisms/login/LoginBox.vue';
  import KakaoIcon from '@/assets/images/icon/icon-kakao.png';
</script>

<template>
  <DefaultLayout>
    <LoginBox>
      <form action="" class="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl">
        <button type="submit" class="btn-kakao">
          <img :src="KakaoIcon" alt="카카오 아이콘" width="25" class="inline-block" />
          카카오톡으로 로그인
        </button>

        <p class="text-sm text-center text-gray-500">
          <router-link to="/login/email">이메일 로그인</router-link>
        </p>
      </form>
    </LoginBox>
  </DefaultLayout>
</template>

<style scoped>
  .btn-kakao {
    @apply block py-3 px-5 w-full font-medium text-white rounded-lg;
    background-color: #fee500;
    color: #181600;
  }
</style>
