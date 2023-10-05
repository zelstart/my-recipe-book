const { Comment } = require('../models');

const commentData = [
    // {
    //     body: 'Yum',
    //     user_id: 1,
    //     recipe_id: 1,
    // },
    // {
    //     body: 'Good stuff',
    //     user_id: 1,
    //     recipe_id: 2,
    // },
    // {
    //     body: 'Very good',
    //     user_id: 1,
    //     recipe_id: 3,
    // },
]

const seedComment = () => Comment.bulkCreate(commentData);

module.export = seedComment();