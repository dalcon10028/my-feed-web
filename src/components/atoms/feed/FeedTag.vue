<script setup lang="ts">
  const props = defineProps<{
    tag: string;
  }>();
</script>

<template>
  <strong class="feed-tag">
    {{ props.tag }}
  </strong>
</template>

<style scoped>
  .feed-tag {
    @apply py-1.5 px-5 mb-2 text-[10px] tracking-wide text-primary-500 uppercase whitespace-nowrap bg-green-50 rounded-full border border-primary-500;
  }
</style>
