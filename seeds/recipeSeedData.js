const { Recipe } = require('../models');

const recipeData = [
    {
        title: 'Bread Sandwich',
        body: 'Three pieces of bread stacked on top of each other',
        user_id: 1,
        image: 'https://via.placeholder.com/125x125',
        // may want to add tags in the future!!
    },
    {
        title: 'Ice Soup',
        body: 'Water with ice cubes in it',
        user_id: 2,
        image: 'https://via.placeholder.com/125x125',
    },
    {
        title: 'Spaghetti Carbonara',
        body: 'Cook spaghetti, fry bacon, mix with eggs and cheese.',
        user_id: 1,
        image: 'https://via.placeholder.com/125x125',
      },
      {
        title: 'Salad Bowl',
        body: 'Mix lettuce, tomatoes, cucumbers, and dressing.',
        user_id: 3,
        image: 'https://via.placeholder.com/125x125',
      },
      {
        title: 'Omelette',
        body: 'Whisk eggs, pour into hot pan, add fillings, fold and serve.',
        user_id: 1,
        image: 'https://via.placeholder.com/125x125',
      },
      {
        title: 'Pancakes',
        body: 'Mix flour, eggs, milk. Cook on hot griddle.',
        user_id: 1,
        image: 'https://via.placeholder.com/125x125',
      },
      {
        title: 'Vegetable Stir Fry',
        body: 'Chop vegetables, stir fry with soy sauce and ginger.',
        user_id: 3,
        image: 'https://via.placeholder.com/125x125',
      },
      {
        title: 'Grilled Salmon',
        body: 'Marinate salmon, grill until cooked through.',
        user_id: 1,
        image: 'https://via.placeholder.com/125x125',
      },
      {
        title: 'Chocolate Chip Cookies',
        body: 'Mix flour, butter, sugar, and chocolate chips. Bake until golden.',
        user_id: 1,
        image: 'https://via.placeholder.com/125x125',
      }
    ]

    const seedRecipe = () => Recipe.bulkCreate(recipeData);
    module.exports = seedRecipe;