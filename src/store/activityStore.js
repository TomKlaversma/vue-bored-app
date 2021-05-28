import boredService from '@/services/boredService';

const ACTIVITY_REQUEST = 'ACTIVITY_REQUEST';

const initialState = {
  activity: {
    activity: null,
    accessibility: null,
    type: null,
    participants: null,
    price: null,
    link: null,
    key: null,
  },
};

const mutations = {
  [ACTIVITY_REQUEST]: (state, payload) => {
    state.activity = payload;
  },
};

const actions = {
  getActivity: async ({ commit }, options) => {
    const activity = await boredService.getActivity(options);
    commit(ACTIVITY_REQUEST, activity);
  },
};

export default {
  state: initialState,
  mutations,
  actions,
};
