const { Recipe } = require('../models');

const recipeData = [
  {
    title: 'Pancakes',
    ingredients: '1 cup all-purpose flour, 2 tablespoons sugar, 1 tablespoon baking powder, 1/2 teaspoon salt, 1 cup milk, 1 large egg, 2 tablespoons melted butter, Butter or oil for cooking',
    instructions: '1. In a large bowl, whisk together the flour, sugar, baking powder, and salt. 2. In a separate bowl, whisk together the milk, egg, and melted butter. 3. Pour the wet ingredients into the dry ingredients and stir until just combined. 4. Heat a griddle or skillet over medium-high heat and grease with butter or oil. 5. Pour 1/4 cup portions of batter onto the griddle and cook until bubbles form on the surface. Flip and cook until golden brown. 6. Serve with your favorite toppings.',
    image: 'https://via.placeholder.com/125x125',
    user_id: 1,
    tag_ids: [1, 2, 3]
  },
  {
    title: 'Chicken Alfredo',
    ingredients: '8 oz fettuccine, 2 boneless, skinless chicken breasts, Salt and pepper to taste, 2 tablespoons olive oil, 3 cloves garlic (minced), 1 cup heavy cream, 1/2 cup grated Parmesan cheese, 1/4 cup chopped parsley',
    instructions: '1. Cook the fettuccine according to package instructions. Drain and set aside. 2. Season the chicken breasts with salt and pepper. In a large skillet, heat the olive oil over medium-high heat. Cook the chicken until golden brown and cooked through, about 6-7 minutes per side. Remove from the skillet and let rest. 3. In the same skillet, add the minced garlic and cook for about 30 seconds. Pour in the heavy cream and bring to a simmer. 4. Stir in the Parmesan cheese and let cook for another 2-3 minutes until the sauce thickens. 5. Slice the chicken and return it to the skillet. Add the cooked fettuccine and toss to coat. 6. Serve hot, garnished with chopped parsley.',
    image: 'https://via.placeholder.com/125x125',
    user_id: 2,
    tag_ids: [4, 11] 
  },
  {
    title: 'Vegetable Stir Fry',
    ingredients: '2 cups mixed vegetables (broccoli, bell peppers, carrots, snap peas), 2 tablespoons soy sauce, 1 tablespoon hoisin sauce, 1 tablespoon sesame oil, 2 cloves garlic (minced), 1 tablespoon grated ginger, Cooked rice for serving',
    instructions: '1. In a large skillet or wok, heat the sesame oil over medium-high heat. Add the garlic and ginger and cook for about 30 seconds. 2. Add the mixed vegetables and stir-fry for 3-4 minutes, or until they are tender-crisp. 3. In a small bowl, whisk together the soy sauce and hoisin sauce. Pour over the vegetables and stir to combine. 4. Continue to cook for another 2-3 minutes, or until the sauce thickens. 5. Serve over cooked rice.',
    image: 'https://via.placeholder.com/125x125',
    user_id: 3,
    tag_ids: [5, 13] 
  }
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;
