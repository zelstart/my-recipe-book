const User = require('./User');
const Recipe = require('./Recipe');
// const Comment = require('./Comment');
// const Tag = require('./Tag');
// const RecipeTag = require('./RecipeTag');


User.hasMany(Recipe, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
})

// User.hasMany(Comment, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE',
// })

Recipe.belongsTo(User, {
    foreign_key: 'user_id',
})

// Recipe.hasMany(Tag, {
//     foreign_key: 'tag_id',
// })

// Recipe.belongsToMany(Tag, {
//     through: 'RecipeTag',
//     foreignKey: 'recipe_id',
//     otherKey: 'tag_id',
//   });

// Tag.belongsToMany(Recipe, {
//     through: 'RecipeTag',
//     foreignKey: 'tag_id',
//     otherKey: 'recipe_id', 
// })

module.exports = { User, Recipe }

//Tag, Comment, RecipeTag