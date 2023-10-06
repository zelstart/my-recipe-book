const { Tag } = require('../models');

const tagData = [
  {
    name: 'Gluten Free'
  },
  {
    name: 'Dairy Free'
  },
  {
    name: 'Chicken'
  },
  {
    name: 'Vegetarian'
  },
  {
    name: 'Vegan'
  },
  {
    name: 'Seafood'
  },
  {
    name: 'Breakfast'
  },
  {
    name: 'Dessert'
  },
  {
    name: 'Healthy'
  },
  {
    name: 'Quick'
  },
  {
    name: 'Italian'
  },
  {
    name: 'Mexican'
  },
  {
    name: 'Asian'
  },
  {
    name: 'Soup'
  },
  {
    name: 'Salad'
  }
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
