const Users = require('../models').Users;
const Playlists = require('../models').Playlists;
const Songs = require('../models').Songs;

// const renderPlaylist = (req, res) => {
//     res.render('playlists.ejs');

// }

const showPlaylist = (req, res) => {
    Playlists.findByPk(req.params.index, {
        include: [{model: Users},{model: Songs}], 
    })
        .then(foundPlaylists => {
            res.render('playlists.ejs', {
                playlists: foundPlaylists
            })
        })
}

const showSongs = (req, res) => {
    Songs.create(req.body, {
      returning: true
    })
    .then(newSong => {
      Playlists.findByPk(req.params.index)
      .then(foundPlaylist => {
          newSong.setPlaylists(foundPlaylist.id)
          .then(songUpdate => {
            res.redirect(`/playlists/${req.params.index}`)
          })
          
      })
    })
  }

// const showSongs = (req, res) => {
//     req.body.id = req.params.index
//     Songs.create(req.body)
//     .then(newSong => {
//         res.redirect(`/playlists/${req.params.index}`)
//     })

// }

module.exports = {
    showPlaylist,
    showSongs
}