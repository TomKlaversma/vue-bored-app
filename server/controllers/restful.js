const HttpException = require('../exceptions/http');

module.exports = () => ({
  respondSuccess(res, body) {
    return res.send({
      status: 'ok',
      statusCode: 200,
      body,
    });
  },
  handleError(error, status, cb) {
    const exception = HttpException(status, error);
    return cb(exception);
  },
});
