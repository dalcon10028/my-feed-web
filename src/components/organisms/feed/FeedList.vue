<script setup lang="ts">
  import FeedItem from './FeedItem.vue';
  import { computed } from 'vue';
  import { useStore } from 'vuex';

  const store = useStore();
  const feeds = computed(() => store.state.feed.feeds);
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
