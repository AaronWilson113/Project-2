const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Workout extends Model {}

Workout.init({

    workoutName: {
        type: DataTypes.STRING
    }

});