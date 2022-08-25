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


},
{
    sequelize,

    timestamps: false, 
    underscored: true,
    modelName: 'User'
}
);

module.exports = User; 