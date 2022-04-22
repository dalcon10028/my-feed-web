<script setup lang="ts"></script>

<template>
  <div class="flex flex-col min-h-screen">
    <div class="grow px-4 mx-auto w-full max-w-3xl sm:px-6 lg:max-w-5xl">
      <router-view />
    </div>
  </div>
</template>

<style>
  @font-face {
    font-family: 'RIDIBatang';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/RIDIBatang.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'RIDIBatang', '-apple-system', 'BlinkMacSystemFont', 'Apple SD Gothic Neo';
  }
</style>
