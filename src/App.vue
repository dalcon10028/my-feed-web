<script setup lang="ts">
  import Layout from '@/layouts/Layout.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <div class="grow px-4 mx-auto w-full max-w-3xl sm:px-6 lg:max-w-5xl">
      <Layout />
    </div>
  </div>
</template>

<style>
  @font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'GmarketSansMedium', '-apple-system', 'BlinkMacSystemFont', 'Apple SD Gothic Neo';
  }
</style>
