// importing modules for my models. 
const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

// creating my new basic class to get the methods from the sequelize model class
class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

// creating my object and defining its structure
User.init(

    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        userName: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isAlphanumeric: true,
            },
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            },

        },

        currentWeight: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 30
        },

        goalWeight: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 30
        }
    },
    {
        // writing hooks to hash password upon login
        hooks: {
            beforeCreate: async (newUserData) => {
              newUserData.password = await bcrypt.hash(newUserData.password, 10);
              return newUserData;
            },
            beforeUpdate: async (updatedUserData) => {
              if (updatedUserData.password) {
              updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
              }
              return updatedUserData;
            },
          },
          // more sequelize configuration data
          sequelize,
          timestamps: false,
          freezeTableName: true,
          underscored: true,
          modelName: 'user',      
    }
);

//exporting user model
module.exports = User;
