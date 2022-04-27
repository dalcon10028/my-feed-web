import { createStore } from 'vuex';
import feedModule from './feed';
import userModule from './user';

export default createStore({
  modules: {
    feed: feedModule,
    user: userModule
  }
});
