const express = require('express');
const router = express.Router();

// let`s get the controller
const usersController = require('../controllers/users_controller');

//maping the route to this usersController
router.get('/profile',usersController.profile);
module.exports = router;