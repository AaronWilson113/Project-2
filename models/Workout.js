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
        type: DataTypes.STRING
    }

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