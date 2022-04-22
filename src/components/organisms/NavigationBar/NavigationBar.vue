<script setup lang="ts"></script>

<template>
  <header class="shadow-sm">
    <div class="p-4 mx-auto max-w-screen-xl">
      <div class="flex justify-between items-center space-x-4 lg:space-x-10">
        <div class="flex lg:flex-1 lg:w-0">
          <router-link to="/" class="font-bold">My Feed</router-link>
        </div>

        <!-- <nav class="hidden space-x-8 text-sm font-medium md:flex">
          <a class="text-gray-500" href="">About</a>
          <a class="text-gray-500" href="">Blog</a>
          <a class="text-gray-500" href="">Projects</a>
          <a class="text-gray-500" href="">Contact</a>
        </nav> -->

        <div class="hidden flex-1 justify-end items-center space-x-4 sm:flex">
          <router-link
            to="/login"
            class="py-2 px-5 text-sm font-medium bg-gray-200 hover:bg-primary rounded-lg border-2 border-accent border-dashed"
            >로그인</router-link
          >
        </div>

        <div class="lg:hidden">
          <button class="p-2 text-gray-600 bg-gray-100 rounded-lg" type="button">
            <span class="sr-only">Open menu</span>
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewbox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
