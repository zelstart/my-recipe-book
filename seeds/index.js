const sequelize = require('../config/connection');
const userSeedData = require('./userSeedData');
const recipeSeedData = require('./recipeSeedData');
// const tagSeedData = require('./tagSeedData');
// const commentSeedData = require('./commentSeedData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await userSeedData();
//   await tagSeedData();
  await recipeSeedData();
//   await commentSeedData();

  process.exit(0);
};

seedDatabase();
