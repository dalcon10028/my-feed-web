<script setup lang="ts">
  import { reactive } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();

  interface Counter {
    me: number;
  }

  let counter = reactive<Counter>({
    me: 0
  });

  setInterval(() => {
    counter.me++;
  }, 1000);
</script>

<template>
  <div>
    <header v-if="route.meta.title" class="bg-white shadow">
      <div class="py-6 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold leading-tight text-gray-900" @click="counter.me = 0">
          {{ route.meta.title }} / {{ counter.me }}
        </h1>
      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>
