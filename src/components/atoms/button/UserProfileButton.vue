<script setup lang="ts">
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';

  const store = useStore();

  const user = computed(() => store.state.user.user);
</script>

<template>
  <Popover class="relative">
    <PopoverButton>
      <img :src="user.thumnail" class="w-10 h-10 rounded-full" alt="프로필 이미지" />
    </PopoverButton>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <PopoverPanel class="absolute -left-48 z-10">
        <div class="relative w-72 bg-white rounded-lg border border-gray-200 shadow-lg">
          <PopoverButton class="absolute -top-1 -right-1 p-1 bg-gray-100 rounded-full border border-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </PopoverButton>

          <div class="flex items-center p-4">
            <img class="object-cover w-12 h-12 rounded-lg" :src="user.thumnail" alt="프로필 사진" />

            <div class="overflow-hidden ml-3">
              <p class="font-medium text-gray-900">{{ user.nickname }}</p>
              <p class="max-w-xs text-sm text-gray-500 truncate">{{ user.username }}</p>
            </div>
          </div>
          <div class="inline-flex items-center -space-x-px w-full text-xs rounded-md">
            <button
              class="hover:z-10 focus:z-10 grow py-3 px-5 font-medium hover:bg-gray-50 rounded-l-md border focus:border-primary-700 focus:outline-none active:opacity-75"
              type="button"
            >
              로그아웃
            </button>

            <button
              class="hover:z-10 focus:z-10 grow py-3 px-5 font-medium hover:bg-gray-50 border focus:border-primary-700 focus:outline-none active:opacity-75"
              type="button"
            >
              마이페이지
            </button>

            <button
              class="hover:z-10 focus:z-10 grow py-3 px-5 font-medium hover:bg-gray-50 rounded-r-md border focus:border-primary-700 focus:outline-none active:opacity-75"
              type="button"
            >
              등등
            </button>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>
