<script setup lang="ts">
  import FeedTag from '@/components/atoms/feed/FeedTag.vue';
  import FeedTitle from '../../molecules/title/FeedTitle.vue';
  import FeedDescription from '../../atoms/feed/FeedDescription.vue';
  import FeedTimeStamp from '../../molecules/date/FeedTimeStamp.vue';

  interface Channel {
    name: string;
    link: string;
    description: string;
    generator: string;
  }

  const props = defineProps<{
    channel: Channel;
    title: string;
    link: string;
    pubDate: string;
    description: string;
    tags: string[];
  }>();
</script>

<template>
  <li class="py-12">
    <article class="feed-item-body">
      <FeedTimeStamp :pub-date="props.pubDate" />
      <div class="space-y-5 xl:col-span-3">
        <div class="space-y-6">
          <FeedTitle :title="props.title" />
          <FeedDescription :description="props.description" />
        </div>
        <div class="feed-item-tag-list">
          <FeedTag v-for="(tag, idx) in tags" :key="idx" :tag="tag" />
        </div>
        <!-- <div class="text-base font-medium leading-6"></div> -->
      </div>
    </article>
  </li>
</template>

<style scoped>
  .feed-item-body {
    @apply space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0;
  }

  .feed-item-tag-list {
    @apply flex flex-wrap mb-2 space-x-1;
  }
</style>
