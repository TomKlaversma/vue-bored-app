const express = require('express');
const gifs = require('./gifs');
const activity = require('./activity');

const router = express.Router();

router.use('/gifs', gifs);
router.use('/activity', activity);

module.exports = router;
