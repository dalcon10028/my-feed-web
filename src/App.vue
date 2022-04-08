<script setup lang="ts">
import { reactive } from 'vue'

interface Counter {
  me: number
}

let counter = reactive<Counter>({
  me: 0
})

setInterval(() => {
  counter.me++;
}, 1000)
</script>

<template>
  <div>
    <header class="bg-white shadow" v-if="$route.meta.title">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1
          @click="counter.me = 0"
          class="text-3xl font-bold leading-tight text-gray-900"
        >
          {{ $route.meta.title }} / {{ counter.me }}
        </h1>
      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>
