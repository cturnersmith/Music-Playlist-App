const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/playlists', ctrl.playlists.renderPlaylist);

module.exports = router;
