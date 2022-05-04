<script setup lang="ts">
  import Logo from '@/components/atoms/logo/NavigationLogo.vue';
  import NavigationMenu from '@/components/molecules/menu/NavigationMenu.vue';
</script>

<template>
  <header class="border-b">
    <div class="p-4 mx-auto max-w-screen-xl">
      <div class="flex justify-between items-center space-x-4">
        <div class="flex"><Logo /></div>

        <NavigationMenu />
      </div>
    </div>
  </header>
</template>
