<script setup lang="ts">
  import { computed } from 'vue';

  const props = defineProps<{
    pubDate: string;
  }>();

  const pubDate = computed(() => {
    return new Date(props.pubDate).toLocaleString();
  });
</script>
<template>
  <dl>
    <dt class="sr-only">Published on</dt>
    <dd class="text-base font-medium leading-6 text-gray-500">
      <time :datetime="pubDate">{{ pubDate }}</time>
    </dd>
  </dl>
</template>
