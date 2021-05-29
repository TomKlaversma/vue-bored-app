import axios from 'axios';
import { BACKEND_PATH } from '../../config';

const ACTIVITY_REQUEST = 'ACTIVITY_REQUEST';
const ACTIVITY_REQUEST_SUCCESS = 'ACTIVITY_REQUEST_SUCCESS';
const ACTIVITY_REQUEST_FAILED = 'ACTIVITY_REQUEST_FAILED';

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
  error: null,
};

const mutations = {
  [ACTIVITY_REQUEST_SUCCESS]: (state, activity) => {
    state.activity = activity;
    state.hasActivity = true;
    state.isFetching = false;
  },
  [ACTIVITY_REQUEST]: (state) => {
    state.hasActivity = false;
    state.isFetching = true;
  },
  [ACTIVITY_REQUEST_FAILED]: (state, error) => {
    state.isFetching = false;
    state.error = error;
  },
};

const actions = {
  getActivity: async ({ commit }) => {
    commit(ACTIVITY_REQUEST);

    const response = await axios.get(`${BACKEND_PATH}/activity/random`);

    if (response instanceof Error) {
      return commit(ACTIVITY_REQUEST_FAILED, response);
    }

    return commit(ACTIVITY_REQUEST_SUCCESS, response.data.body);
  },
};

export default {
  state: initialState,
  mutations,
  actions,
};
