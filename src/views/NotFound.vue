<script setup lang="ts">
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const goHome = () => {
    router.push('/');
  };
</script>

<template>
  <div class="mt-8 text-center">
    <h1 class="text-9xl text-primary-700">404</h1>
    <h2 class="mb-8 text-2xl text-primary-500">Page Not Found</h2>

    <img
      src="https://www.hyperui.dev/photos/confused-travolta.gif"
      alt="John Travolta confused"
      class="object-cover mx-auto h-64 rounded-lg"
    />

    <p class="mt-6 text-gray-500">페이지를 찾을 수 없습니다</p>
    <button class="py-3 px-5 my-5 text-sm font-medium text-white bg-primary-500 rounded-lg" @click="goHome">
      돌아가기
    </button>
  </div>
</template>
