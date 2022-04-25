<script setup lang="ts"></script>

<template>
  <header class="border-b">
    <div class="p-4 mx-auto max-w-screen-xl">
      <div class="flex justify-between items-center space-x-4">
        <div class="flex">
          <router-link to="/" class="font-bold text-primary-500">My Feed</router-link>
        </div>

        <!-- <nav class="hidden space-x-8 text-sm font-medium md:flex">
          <a class="text-gray-500" href="">About</a>
          <a class="text-gray-500" href="">Blog</a>
          <a class="text-gray-500" href="">Projects</a>
          <a class="text-gray-500" href="">Contact</a>
        </nav> -->

        <div class="flex flex-1 justify-end items-center space-x-4">
          <router-link
            class="group inline-flex overflow-hidden relative items-center py-2 px-6 text-primary-500 rounded border border-current"
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
      </div>
    </div>
  </header>
</template>
