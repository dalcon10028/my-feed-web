import { createStore, type GetterTree } from 'vuex';
import type { MutationTree } from 'vuex';
import feedModule from './feed';
import userModule from './user';
import { CLOSE_MODAL, OPEN_MODAL } from './mutation-types';
import type { ConfirmModal, ModalMessage } from './interfaces';
export class State {
  public modal: ConfirmModal = {
    isOpen: true,
    title: '',
    description: ''
  };
}

const getters: GetterTree<State, unknown> = {
  isModalOpen(state: State) {
    return state.modal.isOpen;
  }
};

const mutations: MutationTree<State> = {
  [OPEN_MODAL](state: State, message: ModalMessage) {
    state.modal = {
      isOpen: true,
      ...message
    };
  },
  [CLOSE_MODAL](state: State) {
    state.modal.isOpen = false;
  }
};

export default createStore({
  state: new State(),
  getters,
  mutations,
  modules: {
    feed: feedModule,
    user: userModule
  }
});
