<script setup lang="ts">
  import { fetchfeeds } from '@/apis/feeds';

  import FeedItem from './FeedItem.vue';

  const { data: feeds } = await fetchfeeds();
</script>

<template>
  <ul class="divide-y divide-gray-200">
    <FeedItem
      v-for="feed in feeds"
      :key="feed.id"
      :channel="feed.channel"
      :title="feed.title"
      :link="feed.link"
      :pub-date="feed.pubDate"
      :description="feed.description"
    />
  </ul>
</template>
