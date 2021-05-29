module.exports.objectToQueryString = (obj = {}) => (
  Object.keys(obj).length
    ? Object.keys(obj)
      .filter((key) => obj[key])
      .reduce((acc, key) => `${acc}${acc !== '?' ? '&' : ''}${key}=${obj[key]}`, '?')
    : ''
);
