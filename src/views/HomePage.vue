<script setup lang="ts">
  import DefaultLayout from './layout/DefaultLayout.vue';
  import FeedList from '@/components/organisms/FeedList/FeedList.vue';
  import MainTitle from '@/components/molecules/MainTitle/MainTitle.vue';
</script>

<template>
  <DefaultLayout>
    <MainTitle />
    <FeedList />
  </DefaultLayout>
</template>
