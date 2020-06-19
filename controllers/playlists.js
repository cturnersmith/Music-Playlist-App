const Users = require('../models').Users;
const Playlists = require('../models').Playlists;
const Songs = require('../models').Songs;

const renderPlaylist = (req, res) => {
    res.render('playlists.ejs');

}

module.exports = {
    renderPlaylist
}