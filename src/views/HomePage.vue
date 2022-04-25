<script setup lang="ts">
  import DefaultLayout from './layout/DefaultLayout.vue';
  import FeedList from '@/components/organisms/feed/FeedList.vue';
  import FeedListSkeleton from '@/components/organisms/feed/FeedListSkeleton.vue';
  // import MainTitle from '@/components/molecules/title/MainTitle.vue';
</script>

<template>
  <DefaultLayout>
    <!-- <MainTitle /> -->
    <Suspense>
      <FeedList />
      <template #fallback><FeedListSkeleton /></template>
    </Suspense>
  </DefaultLayout>
</template>
