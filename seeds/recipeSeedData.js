const { Recipe } = require('../models');

const recipeData = [
  {
    title: 'Pancakes',
    ingredients: '1 cup all-purpose flour, 2 tablespoons sugar, 1 tablespoon baking powder, 1/2 teaspoon salt, 1 cup milk, 1 large egg, 2 tablespoons melted butter, Butter or oil for cooking',
    instructions: 'In a large bowl, whisk together the flour, sugar, baking powder, and salt. In a separate bowl, whisk together the milk, egg, and melted butter. Pour the wet ingredients into the dry ingredients and stir until just combined. Heat a griddle or skillet over medium-high heat and grease with butter or oil. Pour 1/4 cup portions of batter onto the griddle and cook until bubbles form on the surface. Flip and cook until golden brown. Serve with your favorite toppings.',
    image: 'assets/nikldn-qp7WA8AV2x0-unsplash.jpg',
    user_id: 1,
    tag_ids: [1, 2, 3]
  },
  {
    title: 'Chicken Alfredo',
    ingredients: '8 oz fettuccine, 2 boneless, skinless chicken breasts, Salt and pepper to taste, 2 tablespoons olive oil, 3 cloves garlic (minced), 1 cup heavy cream, 1/2 cup grated Parmesan cheese, 1/4 cup chopped parsley',
    instructions: 'Cook the fettuccine according to package instructions. Drain and set aside. Season the chicken breasts with salt and pepper. In a large skillet, heat the olive oil over medium-high heat. Cook the chicken until golden brown and cooked through, about 6-7 minutes per side. Remove from the skillet and let rest. In the same skillet, add the minced garlic and cook for about 30 seconds. Pour in the heavy cream and bring to a simmer. Stir in the Parmesan cheese and let cook for another 2-3 minutes until the sauce thickens. Slice the chicken and return it to the skillet. Add the cooked fettuccine and toss to coat. Serve hot, garnished with chopped parsley.',
    image: '/assets/engin-akyurt-Jrvcg9My0B4-unsplash.jpg',
    user_id: 2,
    tag_ids: [4, 11] 
  },
  {
    title: 'Vegetable Stir Fry',
    ingredients: '2 cups mixed vegetables (broccoli, bell peppers, carrots, snap peas), 2 tablespoons soy sauce, 1 tablespoon hoisin sauce, 1 tablespoon sesame oil, 2 cloves garlic (minced), 1 tablespoon grated ginger, Cooked rice for serving',
    instructions: 'In a large skillet or wok, heat the sesame oil over medium-high heat. Add the garlic and ginger and cook for about 30 seconds. Add the mixed vegetables and stir-fry for 3-4 minutes, or until they are tender-crisp. In a small bowl, whisk together the soy sauce and hoisin sauce. Pour over the vegetables and stir to combine. Continue to cook for another 2-3 minutes, or until the sauce thickens. Serve over cooked rice.',
    image: '/assets/annie-spratt-oT7_v-I0hHg-unsplash.jpg',
    user_id: 3,
    tag_ids: [5, 13] 
  },

  {
    title: 'Caprese Salad',
    ingredients: 'Tomatoes, fresh mozzarella, fresh basil leaves, balsamic vinegar, olive oil, salt, pepper',
    instructions: 'Slice tomatoes and mozzarella, arrange with basil leaves, drizzle with olive oil and balsamic vinegar, season with salt and pepper.',
    image: '/assets/bryony-elena-dJGeISqeEiw-unsplash.jpg',
    user_id: 1,
    tag_ids: [] 
  },
  {
    title: 'Spaghetti Carbonara',
    ingredients: '200g spaghetti, 100g pancetta, 2 large eggs, 50g Pecorino cheese, 50g Parmesan cheese, black pepper, salt',
    instructions: 'Cook spaghetti, cook pancetta, mix eggs and cheese, combine all ingredients, serve with pepper and extra cheese.',
    image: '/assets/montatip-lilitsanong-DGwBTYl9y_Q-unsplash.jpg',
    user_id: 1,
    tag_ids: [] 
  },
  {
    title: 'Margherita Pizza',
    ingredients: 'Pizza dough, tomato sauce, fresh mozzarella, fresh basil leaves, olive oil, salt, pepper',
    instructions: 'Roll out pizza dough, spread sauce, add cheese and basil, drizzle with olive oil, bake until crust is golden.',
    image: '/assets/amirali-mirhashemian-zTxiTnTag78-unsplash.jpg',
    user_id: 1,
    tag_ids: [] 
  },
  {
    title: 'Lemon Garlic Shrimp Pasta',
    ingredients: '200g linguine, 200g shrimp, butter, garlic, lemon juice, parsley, salt, pepper',
    instructions: 'Cook pasta, cook shrimp in butter and garlic, add lemon juice, toss with pasta, garnish with parsley.',
    image: '/assets/olayinka-babalola-r01ZopTiEV8-unsplash.jpg',
    user_id: 1,
    tag_ids: [] 
  },
  {
    title: 'Caesar Salad',
    ingredients: 'Romaine lettuce, croutons, Parmesan cheese, Caesar dressing',
    instructions: 'Toss lettuce with dressing, top with croutons and cheese, serve chilled.',
    image: '/assets/farhad-ibrahimzade-LJ49dflDcH8-unsplash.jpg',
    user_id: 1,
    tag_ids: [] 
  },
  {
    title: 'Mushroom Risotto',
    ingredients: 'Arborio rice, mushrooms, chicken or vegetable broth, onion, garlic, white wine, Parmesan cheese, butter',
    instructions: 'Sauté mushrooms, cook onions and garlic, add rice and wine, gradually add broth, stir in cheese and butter.',
    image: '/assets/annie-spratt-oT7_v-I0hHg-unsplash.jpg',
    user_id: 2,
    tag_ids: [] 
  },
  {
    title: 'Grilled Cheese Sandwich',
    ingredients: 'Bread, butter, cheddar cheese slices',
    instructions: 'Butter bread slices, add cheese, grill until golden and cheese melts.',
    image: '/assets/pixzolo-photography-ZB8NK8cB4EE-unsplash.jpg',
    user_id: 2,
    tag_ids: [] 
  },
  {
    title: 'Spinach and Feta Stuffed Chicken Breast',
    ingredients: 'Chicken breasts, spinach, feta cheese, garlic, olive oil, salt, pepper',
    instructions: 'Butterfly chicken breasts, stuff with spinach and feta, bake until cooked through.',
    image: '/assets/elena-leya-iVOjxsSxqnk-unsplash.jpg',
    user_id: 3,
    tag_ids: [] 
  },
  {
    title: 'Chocolate Chip Cookies',
    ingredients: 'Butter, sugar, brown sugar, eggs, vanilla extract, flour, baking soda, chocolate chips',
    instructions: 'Cream butter and sugars, beat in eggs and vanilla, add dry ingredients, fold in chocolate chips, bake until golden brown.',
    image: '/assets/shakti-rajpurohit-qczubsyHofQ-unsplash.jpg',
    user_id: 2,
    tag_ids: [] 
  }

];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;
