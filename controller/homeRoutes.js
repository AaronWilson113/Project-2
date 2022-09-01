// importing neccesary modules 
const router = require('express').Router();
const { User, Workout } = require('../models');
const withAuth = require('../utils/auth')

// route to render homepage
router.get('/', async (req, res) => {
    try {
        res.render('homepage');

        req.session.save(() => {
            req.session.loggedIn= true
          });
    } catch(err) {
        res.status(500).json(err);
    }
});

// route to render signup page
router.get('/signup', async (req, res) => {
    try {
        res.render('signup');

        req.session.save(() => {

            req.session.loggedIn= true
          });
    } catch(err) {
        res.status(500).json(err);
    }
});

router.get('/workout', async (req, res) => {
    try {
        res.render('workouts');

        req.session.save(() => {
            req.session.loggedIn= true
          });
    } catch(err){
        res.status(500).json(err)
    }
});

// route to render profile page
router.get('/profile', withAuth, async (req, res) => {
    // wrapping code in a try to catch errors
    try {
      const userData = await User.findByPk(req.session.user_id);

      const user = userData.get({ plain: true });
      
      res.render('profile', {
        ...user,
        logged_in: true,
      });
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;