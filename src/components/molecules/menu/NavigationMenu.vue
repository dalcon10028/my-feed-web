<script setup lang="ts">
  import { computed } from 'vue';
  import { useStore } from 'vuex';

  import LoginButton from '@/components/atoms/button/LoginButton.vue';
  import UserProfileButton from '@/components/atoms/button/UserProfileButton.vue';

  const store = useStore();

  const isLogin = computed(() => store.getters['user/isLogin']);
</script>

<template>
  <div class="flex flex-1 justify-end items-center space-x-4">
    <UserProfileButton v-if="isLogin" />
    <LoginButton v-else />
  </div>
</template>
