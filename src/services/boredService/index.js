import Axios from 'axios';

import { objectToQueryString } from './helpers';

const getActivity = async (options) => {
  const { data: activity } = await Axios.get(
    `http://www.boredapi.com/api/activity${objectToQueryString(options)}`,
  );

  return activity;
};

export default {
  getActivity,
};
