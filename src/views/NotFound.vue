<script setup lang="ts">
  import DefaultLayout from './layout/DefaultLayout.vue';
</script>

<template>
  <DefaultLayout>
    <div class="text-center">
      <h1 class="text-9xl text-primary-200">404</h1>
      <h2 class="mb-8 text-2xl text-primary-100">Page Not Found</h2>

      <img
        src="https://www.hyperui.dev/photos/confused-travolta.gif"
        alt="John Travolta confused"
        class="object-cover mx-auto h-64 rounded-lg"
      />

      <p class="mt-6 text-gray-500">페이지를 찾을 수 없습니다</p>
    </div>
  </DefaultLayout>
</template>
