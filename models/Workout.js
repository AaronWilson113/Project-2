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
        type: DataTypes.STRING,
        allowNull: false
    },
    
    calories: {
        type: DataTypes.INTEGER
    },

    repsDone: {
        type: DataTypes.INTEGER
    }, 

    weight: {
        type: DataTypes.INTEGER
    }, 

    time: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    notes: {
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