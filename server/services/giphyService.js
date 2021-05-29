const axios = require('axios');
const { objectToQueryString } = require('./helpers');

const { GIPHY_API_KEY } = process.env;

const API_BASE = 'http://api.giphy.com/v1';

const search = async (q, { type = 'gifs', limit = 10 }) => {
  const qs = objectToQueryString({ api_key: GIPHY_API_KEY, q, limit });
  const { data } = await axios.get(`${API_BASE}/${type}/search${qs}`);
  return data;
};

const random = async ({ tag, type = 'gifs', limit = 10 }) => {
  const qs = objectToQueryString({ api_key: GIPHY_API_KEY, tag, limit });
  const { data } = await axios.get(`${API_BASE}/${type}/random${qs}`);
  return data;
};

module.exports = {
  search,
  random,
};
