const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model {}

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ingredients: {
      type: DataTypes.TEXT,
      allowNull: false,
      get() {
        return this.getDataValue('ingredients').split(',');
      }
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image: {
        type: DataTypes.TEXT,
        allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: false,
    underscored: true,
    modelName: 'recipe'
  }
);

module.exports = Recipe;
