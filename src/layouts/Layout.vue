<script setup lang="ts">
  /* eslint-disable @typescript-eslint/no-unused-vars */
  import { useRoute } from 'vue-router';
  import { computed } from 'vue';
  import DefaultLayout from './DefaultLayout.vue';

  const route = useRoute();
  const layout = computed(() => route.meta.layout || 'DefaultLayout');
</script>

<template>
  <component :is="layout"><slot /></component>
</template>
