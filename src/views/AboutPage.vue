<script setup lang="ts"></script>

<template>
  <div class="bg-gray-50">
    <div class="py-12 px-4 mx-auto max-w-screen-xl sm:px-6 lg:flex lg:justify-between lg:items-center lg:py-16 lg:px-8">
      <h2 class="text-3xl font-extrabold tracking-tight leading-9 text-gray-900 sm:text-4xl sm:leading-10">
        About Page
        <br />
        <span class="text-indigo-600">Vite + Vue 3 + Tailwind CSS</span>
      </h2>
      <div class="flex mt-8 lg:shrink-0 lg:mt-0">
        <div class="inline-flex rounded-md shadow">
          <router-link
            to="/"
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium leading-6 text-white bg-indigo-600 hover:bg-indigo-500 rounded-md border border-transparent focus:outline-none transition duration-150 ease-in-out"
          >
            Back Home
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
