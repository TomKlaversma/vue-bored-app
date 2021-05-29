const createHttpException = (status, error) => ({
  status,
  error,
});

module.exports = createHttpException;
