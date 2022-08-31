// importing neccesary modules 
const router = require('express').Router();
const { User, Workout } = require('../models');
const withAuth = require('../')

router.get('/', async (req, res) => {
    try {
        res.render('homepage');
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;