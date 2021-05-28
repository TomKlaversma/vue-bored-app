import Vue from 'vue';
import Vuex from 'vuex';

import activityStore from './activityStore';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ...activityStore.state,
  },
  mutations: {
    ...activityStore.mutations,
  },
  actions: {
    ...activityStore.actions,
  },
  modules: {},
});
