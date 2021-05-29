const axios = require('axios');

const { objectToQueryString } = require('./helpers');

const search = async (options) => {
  const response = await axios.get(
    `http://www.boredapi.com/api/activity${objectToQueryString(options)}`,
  );

  return response;
};

module.exports = {
  search,
};
