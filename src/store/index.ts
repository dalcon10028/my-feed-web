import { createStore } from 'vuex';
import feedModule from './feed';

export default createStore({
  modules: {
    feed: feedModule
  }
});
