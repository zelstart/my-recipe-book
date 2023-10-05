const { User } = require('../models');

const userData = [
    {
        username: 'john_doe',
        password: 'password'
    },
    {
        username: 'jane_doe',
        password: 'password'
    },
    {
        username: 'bob_smith',
        password: 'password'
    },
    {
        username: 'martha_stewart',
        password: 'password'
    },
]

const seedUser = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  
  module.exports = seedUser;