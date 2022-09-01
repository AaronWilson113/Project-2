// importing neccesary modules
const { UUIDV4, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Workout extends Model {}

Workout.init({

    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },

    workoutName: {
        type: DataTypes.STRING,
        allowNull: false
    },

    exOne: {
        type: DataTypes.STRING,
        allowNull:true,
        defaultValue: "0"
    },

    exTwo: {
        type: DataTypes.STRING,
        allowNull:true,
        defaultValue: "0"
    },

    exThree: {
        type: DataTypes.STRING,
        allowNull:true,
        defaultValue: "0"
    },

    exFour: {
        type: DataTypes.STRING,
        allowNull:true,
        defaultValue: "0"
    },

    exFive: {
        type: DataTypes.STRING,
        allowNull:true,
        defaultValue: "0"
    },
    
    caloriesBurned: {
        type: DataTypes.INTEGER
    },

    timeNeeded: {
        type: DataTypes.INTEGER
    },

    notes: {
        type: DataTypes.STRING
    },

    workout_number: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4
    },

    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        },
    },
},
{
    sequelize, 
    timestamps: false,
    underscored: true,
    modelName: 'workout'
}
);

module.exports = Workout;