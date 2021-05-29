const express = require('express');
const giphy = require('../../services/giphyService');
const restfulController = require('../../controllers/restful');

const { respondSuccess, handleError } = restfulController();
const router = express.Router();

router.get('/search', async (req, res, next) => {
  try {
    const { q, type, limit } = req.query;
    const { data } = await giphy.search(q, { limit, type });
    respondSuccess(res, data);
  } catch (e) {
    handleError(e, 400, next);
  }
});

router.get('/random', async (req, res, next) => {
  try {
    const { tag, type, limit } = req.query;
    const { data } = await giphy.random({ tag, limit, type });
    respondSuccess(res, data);
  } catch (e) {
    handleError(e, 400, next);
  }
});

module.exports = router;
