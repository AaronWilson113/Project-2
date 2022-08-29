// importing neccesary routes modules.
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const workoutRoutes = require('./workoutRoutes')

// define all routes in userRoutes.js with /user
router.use('/user', userRoutes);
router.use('/workout', workoutRoutes)

module.exports = router;