<script setup lang="ts"></script>

<template>
  <ul class="divide-y divide-gray-200">
    <li v-for="n in 3" :key="n" class="py-12">
      <article class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
        <div class="w-3/12 h-8 bg-gray-200 rounded-2xl animate-pulse"></div>
        <div class="space-y-5 xl:col-span-3">
          <div class="space-y-6">
            <div class="w-7/12 h-10 bg-gray-200 rounded-2xl animate-pulse"></div>
            <div class="w-full h-4 bg-gray-200 rounded-2xl animate-pulse"></div>
            <div class="w-full h-4 bg-gray-200 rounded-2xl animate-pulse"></div>
            <div class="w-full h-4 bg-gray-200 rounded-2xl animate-pulse"></div>
          </div>
          <div class="flex mb-2 space-x-1">
            <div class="w-20 h-7 bg-gray-200 rounded-2xl animate-pulse"></div>
            <div class="w-20 h-7 bg-gray-200 rounded-2xl animate-pulse"></div>
            <div class="w-20 h-7 bg-gray-200 rounded-2xl animate-pulse"></div>
          </div>
        </div>
      </article>
    </li>
  </ul>
</template>
