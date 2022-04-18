<script setup lang="ts">
  // import { computed } from 'vue';
  import { useStore } from 'vuex';
  import { fetchfeeds } from '@/apis/feeds';

  import FeedItem from './FeedItem.vue';

  const store = useStore();
  // const feeds = computed(() => store.state.feed.feeds);
  const { data } = await fetchfeeds();
  console.log(data);
</script>

<template>
  <ul class="divide-y divide-gray-200">
    <FeedItem
      v-for="feed in data"
      :key="feed.id"
      :channel="feed.channel"
      :title="feed.title"
      :link="feed.link"
      :pub-date="feed.pubDate"
      :description="feed.description"
    />
  </ul>
</template>
