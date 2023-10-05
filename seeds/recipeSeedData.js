const { Recipe } = require('../models');

const recipeData = [
    {
        title: 'Bread Sandwich',
        ingredients: 'bread',
        instructions: 'Three pieces of bread stacked on top of each other',
        user_id: 1,
        image: 'https://via.placeholder.com/125x125',
        // may want to add tags in the future!!
    },
    {
        title: 'Ice Soup',
        instructions: 'Water with ice cubes in it',
        ingredients: 'water, ice',
        user_id: 2,
        image: 'https://via.placeholder.com/125x125',
    },
    {
        title: 'Spaghetti Carbonara',
        ingredients: 'spaghetti, bacon, eggs, cheese',
        instructions: 'Cook spaghetti, fry bacon, mix with eggs and cheese.',
        user_id: 1,
        image: 'https://via.placeholder.com/125x125',
      },
      {
        title: 'Salad Bowl',
        ingredients: 'lettuce, tomatoes, cucumbers, dressing',
        instructions: 'Mix lettuce, tomatoes, cucumbers, and dressing.',
        user_id: 3,
        image: 'https://via.placeholder.com/125x125',
      },
      {
        title: 'Omelette',
        ingredients: 'eggs, milk (optional), cheese (optional)',
        instructions: 'Whisk eggs, pour into hot pan, add fillings, fold and serve.',
        user_id: 1,
        image: 'https://via.placeholder.com/125x125',
      },
      {
        title: 'Pancakes',
        ingredients: 'flour, eggs, milk',
        instructions: 'Mix flour, eggs, milk. Cook on hot griddle.',
        user_id: 1,
        image: 'https://via.placeholder.com/125x125',
      },
      {
        title: 'Vegetable Stir Fry',
        ingredients: 'vegetables, soy sauce, ginger',
        instructions: 'Chop vegetables, stir fry with soy sauce and ginger.',
        user_id: 3,
        image: 'https://via.placeholder.com/125x125',
      },
      {
        title: 'Grilled Salmon',
        ingredients: 'salmon',
        instructions: 'Marinate salmon, grill until cooked through.',
        user_id: 1,
        image: 'https://via.placeholder.com/125x125',
      },
      {
        title: 'Chocolate Chip Cookies',
        ingredients: 'flour, butter, sugar, chocolate chips',
        instructions: 'Mix flour, butter, sugar, and chocolate chips. Bake until golden.',
        user_id: 1,
        image: 'https://via.placeholder.com/125x125',
      }
    ]

    const seedRecipe = () => Recipe.bulkCreate(recipeData);
    module.exports = seedRecipe;