const router = require('express').Router();
const { Recipe, User } = require('../models');
const withAuth = require('../utils/auth');
const { sequelize } = require('../config/connection');
const { Op } = require('sequelize');

// homepage populated with recipe images
router.get('/', withAuth, async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({
      include: [{
        model: User,
        attributes: ['username'],
      }],
    });

    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));

    const userRecipesHomeData = await Recipe.findAll({
      where: {
        // for testing purposes, i had to just set the user_id here since i can't get myself to be logged in
        // user_id: 1,
        user_id: req.session.user_id
      },
      // can't get the random to work rn
      // order: [sequelize.random()],
      limit: 6
    });

    const userRecipesHome = userRecipesHomeData.map((recipe) => recipe.get({ plain: true }));

    const randomRecipesData = await Recipe.findAll({
      include: [{ model: User, attributes: ['username'] }],
      where: {
          user_id: {
              // [Op.ne]: 1, 
              // exclude this user's recipes here
              [Op.ne]: req.session.user_id
          },
      },
      // order: [sequelize.random()],
      limit: 6 
  });
  

    const randomRecipes = randomRecipesData.map((recipe) => recipe.get({ plain: true }));

    res.render('homepage', {
      recipes,
      userRecipesHome,
      randomRecipes,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id
    });

    console.log('recipes:', recipes);


  } catch (err) {
    console.error(err)
    res.status(500).json(err);
  }
});


router.get('/profile', withAuth, async (req, res) => {
    try{
        const userData = await User.findByPk(req.session.user_id, {
          attributes: { exclude: ['password'] },
          include: [{ model: Project }],
        });

        const user = userData.get({ plain: true });
        res.render('profile', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//route for the create recipe page.
router.get('/newrecipe', async (req, res) => {
  res.render('newrecipe', {
    logged_in: true
  });
});

router.get('/login', (req, res) => {
    if (req.session.logged_in){
        res.redirect('/profile');
        return;
    }
    res.render('login');
});

// show signup page
router.get('/signup', async (req, res) => {
    if (req.session.logged_in){
        res.redirect('/profile');
        return;
    }
    res.render('signup');
});


// create new user 
router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Create a new user in the database
      const user = await User.create({
        username,
        password, 
      });

      
      // Start a session and set session variables
      req.session.save(() => {
          req.session.userId = user.id;
          req.session.name = user.username;
          req.session.loggedIn = true;
          req.session.user = username;
    });
  
      // redirect to homepage
      res.redirect('/');
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred during registration');
    }
  });
  

// browse
router.get('/browse', async (req, res) => {
  try {
    const recipes = await Recipe.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    console.log(req.session.user_id)

    res.render('browse', {
      logged_in: true,
      recipes: recipes.map(recipe => recipe.get({ plain: true })),
      user_id: req.session.user_id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred when fetching recipes');
  }
});

module.exports = router;