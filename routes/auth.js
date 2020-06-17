const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/signup', ctrl.auth.renderSignup);


module.exports = router;