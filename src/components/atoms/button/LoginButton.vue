<script setup lang="ts">
  import { UserIcon } from '@heroicons/vue/solid';
</script>

<template>
  <router-link
    class="inline-block p-2 hover:bg-primary-500 rounded-full border border-primary-500 fill-primary-500 hover:fill-white"
    to="/login"
  >
    <span class="sr-only"> 로그인 </span>
    <UserIcon class="w-4 h-4 text-primary-500 fill-inherit" />
  </router-link>
</template>
