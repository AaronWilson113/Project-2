// importing neccesary modules 
const router = require('express').Router();
const { User, Workout } = require('../models');
const withAuth = require('../')

// route to render homepage
router.get('/', async (req, res) => {
    try {
        res.render('homepage');
    } catch(err) {
        res.status(500).json(err);
    }
});

// route to render signup page
router.get('/signup', async (req, res) => {
    try {
        res.render('signup');
    } catch(err) {
        res.status(500).json(err);
    }
});

// route to render profile page
router.get('/profile', async (req, res) => {
    // wrapping code in a try to catch errors
    try {
      const userData = await User.findOne(req.params.userName, {
        include: [{ model: Workout}],
      });

      const user = userData.get({ plain: true });
      
      res.render('profile', {
        ...user,
        loggedIn: true,
        weightInput: true,
        goalWeightInput: true
      });
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;