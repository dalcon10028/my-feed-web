<script setup lang="ts">
  import NavigationBar from '@/components/NavigationBar.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <div class="grow px-4 mx-auto w-full max-w-3xl sm:px-6 lg:max-w-5xl">
      <NavigationBar />
      <router-view />
    </div>
  </div>
</template>
