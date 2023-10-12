const seedUsers = require('./userSeedData');
const seedComments = require('./commentSeedData');
const seedRecipes = require('./recipeSeedData');
const seedTags = require('./tagSeedData');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  await seedRecipes();
  await seedComments();
  await seedTags();
  process.exit(0);
};

seedAll();
