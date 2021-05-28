export const objectToQueryString = (obj) => (
  obj.length
    ? obj.reduce((acc, key) => `${acc}&${key}=${obj[key]}`, '&')
    : ''
);

export default {
  objectToQueryString,
};
