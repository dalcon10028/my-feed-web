<script setup lang="ts">
  import DefaultLayout from './layout/DefaultLayout.vue';
  import KakaoIcon from '@/assets/images/icon/icon-kakao.png';
</script>

<template>
  <DefaultLayout>
    <div class="py-16 px-4 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
      <div class="mx-auto max-w-lg">
        <h1 class="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">My Feed</h1>

        <p class="mx-auto mt-4 max-w-md text-center text-gray-500">
          나를 위한 RSS 피드 My Feed에 오신걸 환영합니다!<br />회원가입을 하시면 더 많은 서비스를 이용하실 수 있습니다.
        </p>

        <form action="" class="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl">
          <div></div>

          <button type="submit" class="btn-kakao">
            <img :src="KakaoIcon" alt="카카오 아이콘" width="25" class="inline-block" />
            카카오톡으로 로그인
          </button>

          <p class="text-sm text-center text-gray-500">
            <router-link to="/login/email">이메일 로그인</router-link>
          </p>
        </form>
      </div>
    </div>
  </DefaultLayout>
</template>

<style scoped>
  .btn-kakao {
    @apply block py-3 px-5 w-full font-medium text-white rounded-lg;
    background-color: #fee500;
    color: #181600;
  }
</style>
