<script setup lang="ts">
  import { useStore } from 'vuex';
  import DefaultLayout from './layout/DefaultLayout.vue';
  import FeedList from '@/components/organisms/feed/FeedList.vue';
  import FeedListSkeleton from '@/components/organisms/feed/FeedListSkeleton.vue';
  import { FETCH_JWT_TOKEN } from '@/store/user/mutation-types';
  // import MainTitle from '@/components/molecules/title/MainTitle.vue';

  const store = useStore();

  /* 로그인 한 경우에 토큰 확인 후 로컬스토리지에 등록 */
  const jwtToken = new URL(window.location.href).searchParams.get('token');
  store.commit(`user/${FETCH_JWT_TOKEN}`, jwtToken);
  store.dispatch('user/fetchUserProfile');
  /* 토큰이 있는 경우에 로그인 처리 */
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
