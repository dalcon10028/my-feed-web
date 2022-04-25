<script setup lang="ts">
  const props = defineProps<{
    title: string;
  }>();
</script>

<template>
  <h2 class="text-2xl font-bold tracking-tight leading-8">
    <router-link to="/" class="feed-title">{{ props.title }}</router-link>
  </h2>
</template>

<style scoped>
  feed-title {
    @apply text-gray-900 hover:text-primary-500 transition duration-300 ease-in-out;
  }
</style>
