<script setup lang="ts"></script>

<template>
  <div class="py-16 px-4 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
    <div class="mx-auto max-w-lg">
      <h1 class="text-2xl font-bold text-center text-primary-500 sm:text-3xl">
        <slot name="title"> My Feed </slot>
      </h1>

      <p class="mx-auto mt-4 max-w-md text-center text-gray-500">
        <slot name="description">
          나를 위한 RSS 피드 My Feed에 오신걸 환영합니다!<br />회원가입을 하시면 더 많은 서비스를 이용하실 수 있습니다.
        </slot>
      </p>

      <div class="overflow-hidden relative p-8 mt-4 rounded-lg border border-gray-100 shadow">
        <slot />
      </div>
    </div>
  </div>
</template>
