// importing router from express and bycrypt
const router = require('express').Router();
const bycrypt = require('bcrypt');
const { Workout } = require('../../models')
const withAuth = require('../../utils/auth')

// importing model
const User = require('../../models/User');

// Get all users off of get user route
router.get('/', async (req, res) => {
  //wrapping code in a try to catch error codes
  try {
  // Getting all available users from database
    const userData = await User.findAll({
      //including workouts model
      include: [{ model: Workout}], 
  });
    if (!userData) {
    res.status(404).json({ message: 'No user found!'});
    return;
  }
 res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a user off of user route
router.post('/', async (req, res) => {
  // wrapping code in a try to catch error codes
  try{
    const newUser = req.body;

    // Use Sequelize's `create()` method to add a row to the table
    const userData = await User.create(newUser);

     // setting up session 
     req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData)
    });
  
  } catch (err) {
    res.status(400).json(err);
  } 
});





// login off of login route
router.post('/login', async (req, res) => {
  // wrapping code in a try to catch error codes
  try {
    // searching database for a identical userName as the one input
    const userData = await User.findOne({ where: { userName: req.body.userName} });
    if (!userData) {
      res.status(400).json({ message: 'login failed'});
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password)
    // return error message if passwords dont match
    if (!validPassword) {
      res.status(400).json({ message: 'login failed'});
      return;
    }
    // code to start a session
    req.session.save(() => {
      req.session.user_id = userData.id
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!'});
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  // upon user logout, destroy the session
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
// current operating route api/user