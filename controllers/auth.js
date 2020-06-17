const Users = require('../models').Users;

const bcrypt = require('bcryptjs');

const renderSignup = (req, res) => {
    res.render('signup.ejs');
}



module.exports = {
    renderSignup
}