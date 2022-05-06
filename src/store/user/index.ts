import { fetchUserProfile } from '@/apis/users';
import instance from '@/apis/instance';
import { FETCH_JWT_TOKEN, FETCH_USER_PROFILE } from './mutation-types';
import type { ActionContext, ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import axios from 'axios';

interface User {
  id: number;
  username: string;
  nickname: string;
  provider: string;
  thumnail: string;
  created_at: Date;
  updated_at: Date;
}

export class State {
  public user: User | object = {};
  public jwtToken: string = localStorage.getItem('myfeed-token') ?? '';
}

const getters: GetterTree<State, unknown> = {
  isLogin(state: State) {
    return 'id' in state.user ? !!state.user.id : false;
  }
};

const mutations: MutationTree<State> = {
  [FETCH_JWT_TOKEN](state: { jwtToken: string }, jwtToken: string) {
    state.jwtToken = jwtToken;
    localStorage.setItem('myfeed-token', jwtToken);
    instance.interceptors.request.use((config: any) => {
      config.headers.Authorization = `Bearer ${jwtToken}`;
      return config;
    });
  },
  [FETCH_USER_PROFILE](state: State, userData: User) {
    state.user = userData;
  }
};

const actions: ActionTree<State, unknown> = {
  async fetchUserProfile({ commit }: ActionContext<State, unknown>) {
    /* 프로필 갱신 */
    try {
      const { data } = await fetchUserProfile();
      commit(FETCH_USER_PROFILE, data);
    } catch (error) {
      if (axios.isAxiosError(error) && error.request.statusText === 'Unauthorized')
        /* 토큰이 유효하지 않을 경우 삭제 */
        localStorage.removeItem('myfeed-token');
      else alert(error);
    }
  }
};

const UserModule: Module<State, unknown> = {
  namespaced: true,
  state: new State(),
  getters,
  mutations,
  actions
};

export default UserModule;
