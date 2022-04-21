<script setup lang="ts">
  const props = defineProps<{
    title: string;
  }>();
</script>

<template>
  <h2 class="text-2xl font-bold tracking-tight leading-8">
    <a class="text-gray-900" href="/posts/connecting-multiple-platforms">{{ props.title }}</a>
  </h2>
</template>
