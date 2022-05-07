<script setup lang="ts">
  /* eslint-disable @typescript-eslint/no-unused-vars */
  import { useRoute } from 'vue-router';
  import { computed } from 'vue';
  import DefaultLayout from './DefaultLayout.vue';
  import NoNavigationLayout from './NoNavigationLayout.vue';
  import { Layout } from './layout-enum';

  const route = useRoute();
  const layout = computed(() => route.meta.layout ?? Layout.DefaultLayout);
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
