<script setup lang="ts">
  const props = defineProps<{
    description: string;
  }>();
</script>

<template>
  <div class="max-w-none text-gray-500 prose line-clamp-3">
    {{ props.description }}
  </div>
</template>
