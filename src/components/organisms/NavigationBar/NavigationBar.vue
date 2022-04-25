<script setup lang="ts"></script>

<template>
  <header class="border-b">
    <div class="p-4 mx-auto max-w-screen-xl">
      <div class="flex justify-between items-center space-x-4 lg:space-x-10">
        <div class="flex lg:flex-1 lg:w-0">
          <router-link to="/" class="font-bold text-primary-500">My Feed</router-link>
        </div>

        <!-- <nav class="hidden space-x-8 text-sm font-medium md:flex">
          <a class="text-gray-500" href="">About</a>
          <a class="text-gray-500" href="">Blog</a>
          <a class="text-gray-500" href="">Projects</a>
          <a class="text-gray-500" href="">Contact</a>
        </nav> -->

        <div class="hidden flex-1 justify-end items-center space-x-4 sm:flex">
          <router-link
            class="group inline-flex overflow-hidden relative items-center py-2 px-6 text-primary-500 rounded border border-current focus:outline-none focus:ring"
            to="/login"
          >
            <span class="absolute left-0 transition-transform -translate-x-full group-hover:translate-x-4">
              <svg
                class="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>

            <span class="group-hover:ml-4 text-sm font-medium transition-all"> 로그인 </span>
          </router-link>
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
