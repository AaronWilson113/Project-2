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

// route to render profile page with auth 
router.get('/profile', async(req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
        });

        const user = userData.get({ plain: true});

        res.render('profile', {
            ...user,
            loggedIn: true

        });
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;