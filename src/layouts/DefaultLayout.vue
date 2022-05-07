<script setup lang="ts">
  import NavigationBar from '@/components/organisms/nav/NavigationBar.vue';
</script>

<template>
  <NavigationBar />
  <main class="grow mb-8">
    <div class="divide-y divide-gray-200">
      <slot />
    </div>
  </main>
</template>
