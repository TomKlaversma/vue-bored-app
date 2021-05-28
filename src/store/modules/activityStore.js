import boredService from '@/services/boredService';

const ACTIVITY_REQUEST = 'ACTIVITY_REQUEST';
const ACTIVITY_REQUEST_SUCCESS = 'ACTIVITY_REQUEST_SUCCESS';

const initialState = {
  hasActivity: false,
  isFetching: false,
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
  [ACTIVITY_REQUEST_SUCCESS]: (state, payload) => {
    state.activity = payload;
    state.hasActivity = true;
    state.isFetching = false;
  },
  [ACTIVITY_REQUEST]: (state) => {
    state.hasActivity = false;
    state.isFetching = true;
  },
};

const actions = {
  getActivity: async ({ commit }, options) => {
    commit(ACTIVITY_REQUEST);
    const activity = await boredService.getActivity(options);
    commit(ACTIVITY_REQUEST_SUCCESS, activity);
  },
};

export default {
  state: initialState,
  mutations,
  actions,
};
