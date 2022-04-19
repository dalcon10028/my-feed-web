<script setup lang="ts"></script>

<template>
  <DefaultLayout>
    <div class="py-16 px-4 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
      <div class="mx-auto max-w-lg">
        <h1 class="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">My Feed</h1>

        <p class="mx-auto mt-4 max-w-md text-center text-gray-500">
          나를 위한 RSS 피드 My Feed에 오신걸 환영합니다!<br />회원가입을 하시면 더 많은 서비스를 이용하실 수 있습니다.
        </p>

        <slot />
      </div>
    </div>
  </DefaultLayout>
</template>
