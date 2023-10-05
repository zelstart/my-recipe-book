const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model {}

// as a stretch goal, might want to implement a tag feature
Recipe.init(
    {
        id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        },
        title: {
        type: DataTypes.STRING(100),
        allowNull: false,
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.TEXT, //url for now. may want to look into multer npm package for file uploads?
            allowNull: false,
          },
        // might need to create a user for Tasty API recipes so this doesn't give us errors
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'id'
            }
        },
        // tag_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'Tag',
        //         key: 'id'
        //     }
        // },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: false,
        underscored: true,
        modelName: 'Recipe',
        hooks: {
            beforeCreate: async (recipe) => {
                recipe.created_at = new Date();
            }
        }
    }
);

module.exports = Recipe;