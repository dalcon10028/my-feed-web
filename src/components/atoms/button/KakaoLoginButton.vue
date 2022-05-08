<script setup lang="ts">
  import KakaoIcon from '@/assets/images/icon/icon-kakao.png';
  import { useKakao } from 'vue3-kakao-sdk';
  import { useRouter } from 'vue-router';
  import { loginKakao, type KakaoLoginSuccess, type KakaoUserProfile } from '@/apis/users';
  import { useStore } from 'vuex';
  import { FETCH_USER_PROFILE } from '@/store/user/mutation-types';
  import { fetchToken } from '@/apis/instance';

  const router = useRouter();
  const store = useStore();
  const { kakao } = useKakao();

  const MyKakao = {
    login() {
      return new Promise((resolve, reject) => {
        kakao.value.Auth.login({
          success(success) {
            resolve(success as KakaoLoginSuccess);
          },
          fail(error) {
            reject(error);
          }
        });
      });
    },
    getProfile(): Promise<KakaoUserProfile> {
      return new Promise((resolve, reject) => {
        kakao.value.API.request({
          url: '/v2/user/me',
          success: function (response) {
            resolve(response as KakaoUserProfile);
          },
          fail: function (error) {
            reject(error);
          }
        });
      });
    }
  };

  const onClickLogin = async () => {
    try {
      /* 카카오 로그인 */
      await MyKakao.login();
      /* 유저 정보 받아오기 */
      const kakaoUserProfile = await MyKakao.getProfile();
      const { data } = await loginKakao(kakaoUserProfile);
      /** 로그인 정보 저장 */
      store.commit(`user/${FETCH_USER_PROFILE}`, data);
      fetchToken(data.token);
      /* 신규 유저일 경우엔 카테고리 페이지로 이동 */
      if (data.newbie) router.push('/category');
      else router.push('/');
    } catch (error) {
      alert(error);
    }
  };
</script>

<template>
  <button class="btn-kakao" @click="onClickLogin">
    <img :src="KakaoIcon" alt="카카오 아이콘" width="25" class="inline-block" />
    카카오톡으로 로그인
  </button>
</template>

<style scoped>
  .btn-kakao {
    @apply block py-3 px-5 w-full font-medium text-white rounded-lg text-center hover:scale-105 transition duration-150 hover:shadow-xl ease-in-out;
    background-color: #fee500;
    color: #181600;
  }
</style>
