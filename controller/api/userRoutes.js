// importing router from express and bycrypt
const router = require('express').Router();
const bycrypt = require('bcrypt');
const { Workout } = require('../../models')

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


//user route to get just one user
router.get('/:id', async (req, res) => {
  // wrapping code in a try to catch errors
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [{ model: Workout}],
    });
    if (!userData) {
      res.status(404).json({ message: 'No user found'});
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
      req.session.loggedIn= true;

      res.status(200).json(userData)
    });
  
  } catch (err) {
    res.status(500).json(err);
  } 
});



// Update a user off of username route
router.put('/:userName', async (req, res) => {
  //wrapping code in a try to catch error codes
  try{
    const userData = await User.update(req.body, {
      where: {
        userName: req.params.userName
      },
      // designating our hooks to run for our update function
      individualHooks: true
    });
    if (!userData[0]) {
      res.status(404).json({ message: 'No user with this username!'});
      return;
    }
    res.status(200).json({userData});
  } catch (err) {
    res.status(500).json(err);
  }
});
  

// delete a user off of delete user route
router.delete('/:userName', async (req, res) => {
  //wrapping code in a try to catch error codes
  try {
  // Looks for users based off the give userName and deletes the user instance from the database
  const userData = await User.destroy({
    where: {
      userName: req.params.userName,
    },
  });
  if (!userData) {
    res.status(404).json({ message: 'No user with this username!'});
    return;
  }
  res.status(200).json(userData);
} catch (err) {
  res.status(500).json(err);
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
      req.session.loggedIn = true;

      res 
        .status(200)
        .json({ user: userData, message: 'you are now logged in'})
    });

  } catch (err) {
    res.status(500).json(err);
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