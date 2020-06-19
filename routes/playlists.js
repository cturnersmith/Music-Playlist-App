const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// router.get('/', ctrl.playlists.renderPlaylist);
router.get('/:index', ctrl.playlists.showPlaylist);
router.post('/:index', ctrl.playlists.showSongs);


module.exports = router;
