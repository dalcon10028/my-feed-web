<script setup lang="ts">
  const props = defineProps<{
    title: string;
    link: string;
  }>();
</script>

<template>
  <h2 class="text-2xl font-bold tracking-tight leading-8">
    <a :href="props.link" class="feed-title">{{ props.title }}</a>
  </h2>
</template>

<style scoped>
  feed-title {
    @apply text-gray-900 hover:text-primary-500 transition duration-300 ease-in-out;
  }
</style>
