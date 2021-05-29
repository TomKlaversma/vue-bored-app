/* eslint-disable import/prefer-default-export */
export const BACKEND_PATH = process.env.NODE_ENV !== 'production' ? 'http://localhost:3000/api' : '/api';

export default {
  BACKEND_PATH,
};
