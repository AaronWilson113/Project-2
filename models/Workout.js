const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Workout extends Model {}

Workout.init({

    workoutId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    workoutName: {
        type: DataTypes.STRING
    }

},
{
    sequelize,

    timestamps: false, 
    underscored: true,
    modelName: 'Workout'
}
);

module.exports = Workout;