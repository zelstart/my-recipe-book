const { Comment } = require('../models');

const commentData = [
  {
    body: 'Comment 1',
    user_id: 1,
    recipe_id: 1
  },
  {
    body: 'Comment 2',
    user_id: 2,
    recipe_id: 1
  },
  {
    body: 'Comment 3',
    user_id: 3,
    recipe_id: 1
  },
  {
    body: 'Comment 4',
    user_id: 1,
    recipe_id: 2
  },
  {
    body: 'Comment 5',
    user_id: 2,
    recipe_id: 2
  },
  {
    body: 'Comment 6',
    user_id: 3,
    recipe_id: 2
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
