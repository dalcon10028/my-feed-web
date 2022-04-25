<script setup lang="ts">
  const props = defineProps<{
    tag: string;
  }>();
</script>

<template>
  <!-- <a
    class="inline-block p-1 px-3 mr-1 mb-1 font-mono text-xs text-green-900 hover:text-orange-800 bg-primary-300 hover:bg-secondary-500 rounded transition duration-300 ease-in-out"
    href="/categories/development"
    >{{ props.tag }}</a
  > -->
  <strong
    class="py-1.5 px-5 text-[10px] tracking-wide text-primary-500 uppercase bg-green-50 rounded-full border border-primary-500"
  >
    {{ props.tag }}
  </strong>
</template>
