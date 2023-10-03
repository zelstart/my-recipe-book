const { Model, DataTypes } = require('sequelize');
const format = require('date-fns/format');
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
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // might need to create a user for Tasty API recipes so this doesn't give us errors
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'id'
            }
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        formatted_date: {
            type: DataTypes.VIRTUAL,
            get() {
                return format(this.created_at, 'dd/MM/yyyy - HH:mm');
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'recipe',
        tableName: 'Recipes',
        hooks: {
            beforeCreate: async (recipe) => {
                recipe.created_at = new Date();
            }
        }
    }
);

module.exports = Recipe;