<script setup lang="ts">
  const props = defineProps<{
    description: string;
  }>();
</script>

<template>
  <div class="max-w-none text-gray-500 prose">
    {{ props.description }}
  </div>
</template>
