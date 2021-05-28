import Vue from 'vue';
import Vuex from 'vuex';

import activityStore from './modules/activityStore';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    activityStore,
  },
});
