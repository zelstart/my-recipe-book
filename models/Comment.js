const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'User',
          key: 'id'
      }
    },
    recipe_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'Recipe',
          key: 'id'
      }
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: false,
    underscored: true,
    modelName: 'Comment',
    hooks: {
      beforeCreate: async (comment) => {
          comment.created_at = new Date();
      }
    }
  }
);

module.exports = Comment;
