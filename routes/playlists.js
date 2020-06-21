const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/:index', ctrl.playlists.showPlaylist);
router.post('/:index', ctrl.playlists.showSongs);
router.delete('/:index', ctrl.playlists.deletePlaylist);
router.put('/:index', ctrl.playlists.addSong);


module.exports = router;
