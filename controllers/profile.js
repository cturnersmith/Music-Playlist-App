const Users = require('../models').Users;
const Playlists = require('../models').Playlists;


const renderProfile = (req, res) => {
    Users.findByPk(req.params.index, {
        include: [
             Playlists
        ]
    })
   
    
    .then(userProfile=> {
        console.log(userProfile);
        res.render('profile.ejs', {
            users: userProfile
        })
    })
}

const editProfile = (req, res) => {
    Users.update(req.body, {
        where: {
            id: req.params.index
        },
        returning: true
    })
    .then(updatedUsers => {
        res.redirect(`/profile/${req.params.index}`);
    })
}

const deleteProfile = (req, res) => {
    Users.destroy({
        where: {
            id: req.params.index
        }
    })
    .then(() => {
        res.redirect('/');
    })

}

const createPlaylist = (req, res) => {
    Playlists.create(req.body)
    .then (newPlaylist => {
        res.redirect(`/profile/${req.params.index}`)
    });
    }

module.exports = {
    renderProfile,
    editProfile,
    deleteProfile,
    createPlaylist

}