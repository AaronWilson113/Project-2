const router = require('express').Router();

const Book = require('../../models/User');

router.post('/', (req, res) => {


    Book.create({
        userName: req.body.userName,
        currentWeight: req.body.currentWeight,
        weightGoal: req.body.weightGoal,
        targetCalories: req.body.targetCalories
    })
    .then((newUser) => {
        res.json(newUser);
    })
    .catch((err) => {
        res.json(err);
    });
});

module.exports = router;