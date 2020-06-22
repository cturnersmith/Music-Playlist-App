const Users = require('../models').Users;
const Playlists = require('../models').Playlists;
const Songs = require('../models').Songs;



const showPlaylist = (req, res) => {
    Playlists.findByPk(req.params.index, {
        include: [{model: Users},
          {model: Songs}], 
    })
        .then(foundPlaylists => {
          Songs.findAll()
          .then(allSongs => {

          
            res.render('playlists.ejs', {
                playlists: foundPlaylists,
                songs: allSongs
              });
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

//   const deleteSong = (req, res) => {
//     Songs.destroy({
//       where: {
//         id: req.params.index
//       }
//   })	
// }

const deletePlaylist = (req, res) => {
  Playlists.destroy({
      where: {
        id: req.params.index
         
      }
  })
} 

const addSong = (req, res) => {
  Playlists.update(req.body, {
      where: {id: req.params.id},
      returning: true
  })
  .then(updatedPlaylist => {
      Songs.findByPk(req.body.id)
      .then(foundSong => {
          Playlists.findByPk(req.params.id)
          .then(foundPlaylist => {
              foundPlaylist.setSongs(foundSong);
              res.redirect(`/playlists/${req.params.index}`);
          })
      })
  })
}



module.exports = {
    showPlaylist,
    showSongs,
    deletePlaylist,
    addSong
    
}