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
    user: {},
    jwtToken: localStorage.getItem('myfeed-token') ?? ''
  }),
  getters: {
    isLogin(state: { user: any }) {
      return !!state.user.id;
    }
  },
  mutations: {
    [FETCH_JWT_TOKEN](state: { jwtToken: string }, jwtToken: string) {
      state.jwtToken = jwtToken;
      localStorage.setItem('myfeed-token', jwtToken);
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
      /* 프로필 갱신 */
      try {
        const { data } = await fetchUserProfile();
        commit(FETCH_USER_PROFILE, data);
      } catch (error: any) {
        /* 토큰이 유효하지 않을 경우 삭제 */
        if (error.request.statusText === 'Unauthorized') {
          localStorage.removeItem('myfeed-token');
        }
      }
    }
  }
};
