import { fetchUserProfile } from '@/apis/users';
import { FETCH_USER_PROFILE } from './mutation-types';
import type { ActionContext, ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import type { UserInfo } from './interfaces';

export class State {
  public user: UserInfo | object = {};
}

const getters: GetterTree<State, unknown> = {
  isLogin(state: State) {
    return 'id' in state.user ? !!state.user.id : false;
  }
};

const mutations: MutationTree<State> = {
  // [FETCH_JWT_TOKEN](state: { jwtToken: string }, jwtToken: string) {
  //   TokenStorage.setToken(jwtToken);
  //   instance.interceptors.request.use((config: AxiosRequestConfig) => ({
  //     ...config,
  //     headers: {
  //       ...config.headers,
  //       Authorization: `Bearer ${jwtToken}`
  //     }
  //   }));
  // },
  [FETCH_USER_PROFILE](state: State, userInfo: UserInfo) {
    state.user = userInfo;
  }
};

const actions: ActionTree<State, unknown> = {
  async fetchUserProfile({ commit }: ActionContext<State, unknown>) {
    /* 프로필 갱신 */
    try {
      const { data } = await fetchUserProfile();
      commit(FETCH_USER_PROFILE, data);
    } catch (error) {
      console.error(error);
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
