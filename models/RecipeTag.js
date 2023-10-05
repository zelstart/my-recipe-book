const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class RecipeTag extends Model {}

RecipeTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    recipe_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Recipe',
        key: 'id',
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Tag',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'RecipeTag',
    tableName: 'RecipeTags', 
  }
);

module.exports = RecipeTag;