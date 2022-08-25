const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init({

    userName: {
        type: DataTypes.STRING
    },

    currentWeight: {
        type: DataTypes.INTEGER
    },

    weightGoal: {
        type: DataTypes.INTEGER
    },

    targetCalories: {
        type: DataTypes.INTEGER
    },


});

module.exports = User; 