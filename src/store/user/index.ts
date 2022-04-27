import { useStorage, type RemovableRef } from '@vueuse/core';
import { fetchUserProfile } from '@/apis/users';
import instance from '@/apis/instance';
import { FETCH_JWT_TOKEN, FETCH_USER_PROFILE } from './mutation-types';

interface User {
  id?: number;
  username?: string;
  nickname?: string;
  provider?: string;
  thumnail: string;
  created_at?: Date;
  updated_at?: Date;
}

export default {
  namespaced: true,
  state: () => ({
    user: {}
  }),
  getters: {
    isLogin(state: { jwtToken: string }) {
      return !!state.jwtToken;
    }
  },
  mutations: {
    [FETCH_JWT_TOKEN](state: { jwtToken: RemovableRef<unknown> }, jwtToken: unknown) {
      state.jwtToken = useStorage('myfeed-token', jwtToken);
      instance.interceptors.request.use((config: any) => {
        config.headers.Authorization = `Bearer ${jwtToken}`;
        return config;
      });
    },
    [FETCH_USER_PROFILE](state: any, userData: User) {
      state.user = userData;
    }
  },
  actions: {
    async fetchUserProfile({ commit }: any) {
      const { data } = fetchUserProfile();
      commit(FETCH_USER_PROFILE, data);
    }
  }
};
