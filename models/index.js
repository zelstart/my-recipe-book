const User = require('./User');
const Recipe = require('./Recipe');
const Tag = require('./Tag');
const Comment = require('./Comment');

User.hasMany(Comment, { foreignKey: 'user_id' });
User.hasMany(Recipe, { foreignKey: 'user_id' });

Recipe.belongsToMany(Tag, { through: 'recipe_tags' });
Recipe.hasMany(Comment, { foreignKey: 'recipe_id' });
Recipe.belongsTo(User, {foreignKey: 'user_id'})

Tag.belongsToMany(Recipe, { through: 'recipe_tags' });

Comment.belongsTo(User, { foreignKey: 'user_id' });
Comment.belongsTo(Recipe, { foreignKey: 'recipe_id' });

module.exports = { User, Recipe, Tag, Comment };
