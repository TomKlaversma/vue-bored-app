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
  gif: null,
  error: null,
};

const mutations = {
  [ACTIVITY_REQUEST_SUCCESS]: (state, { activity, gif }) => {
    state.activity = activity;
    state.gif = gif;
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

const getGifForActivity = async ({ activity, type }) => {
  try {
    const gifResponse = await axios.get(`${BACKEND_PATH}/gifs/search?q=${activity}&limit=1`);
    if (gifResponse instanceof Error) throw gifResponse;
    const { data: { body: [gif] } } = gifResponse;
    return gif.images.original.url;
  } catch (e) {
    const gifResponse = await axios.get(`${BACKEND_PATH}/gifs/search?q=${type}&limit=1`);
    const { data: { body: [gif] } } = gifResponse;
    return gif.images.original.url;
  }
};

const actions = {
  getActivity: async ({ commit }) => {
    commit(ACTIVITY_REQUEST);

    const activityResponse = await axios.get(`${BACKEND_PATH}/activity/random`);

    if (activityResponse instanceof Error) {
      return commit(ACTIVITY_REQUEST_FAILED, activityResponse);
    }

    const { data: { body: activity } } = activityResponse;

    const gif = await getGifForActivity(activity);

    return commit(ACTIVITY_REQUEST_SUCCESS, {
      activity,
      gif,
    });
  },
};

export default {
  state: initialState,
  mutations,
  actions,
};
