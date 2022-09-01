// importing express package and User model
const router = require('express').Router();
const { User, Workout } = require('../../models');

// route to get all workouts
router.get('/', async (req, res) => {
    // wrapping code in a try to catch errors
    try {
        // including user model in await. 
        const workoutData = await Workout.findAll({
            include: [{ model: User }],
        });
        res.status(200).json(workoutData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// route to post a workout with a corresponding user
router.post('/', async (req, res) => {
    //wrapping code with a try to catch errors
    try {
        const workoutData = await Workout.create({
            workoutName: req.body.workoutName,
            user_id: req.body.user_id,
        });
        res.status(200).json(workoutData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// creating a new workout route 
router.post('/post', async (req, res) => {
    try {
        const newWorkout = await Workout.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newWorkout)
    } catch(err) {
        res.status(400).json(err);
    }
});

module.exports = router;