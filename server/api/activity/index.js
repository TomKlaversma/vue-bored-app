const express = require('express');
const boredService = require('../../services/boredService');
const restfulController = require('../../controllers/restful');

const { respondSuccess, handleError } = restfulController();
const router = express.Router();

router.get('/search', async (req, res, next) => {
  try {
    const { type } = req.query;
    const { data } = await boredService.search({ type });
    respondSuccess(res, data);
  } catch (e) {
    handleError(e, 400, next);
  }
});

router.get('/random', async (req, res, next) => {
  try {
    const { data } = await boredService.search();
    respondSuccess(res, data);
  } catch (e) {
    handleError(e, 400, next);
  }
});

module.exports = router;
