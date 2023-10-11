const router = require('express').Router();
const { Recipe, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
      const recipeData = await Recipe.findAll({
        include: [
            {
                model: User,
                attributes: ['username'],
            },
        ],
      });
      
      const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
      res.render('homepage', {
        recipes,
        logged_in: req.session.logged_in
      });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/recipe/:id', async (req,res) => {
    try {
      const recipeData = await Recipe.findByPk(req.params.id,{
        include: [
           {
              model: User,
              attributes: ['username'],
           },
          ],
       });
       
       const recipe = recipeData.get({ plain: true });
       res.render('project', {
        ...recipe,
        logged_in: req.session.logged_in
       });
    } catch (err) {
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
  


module.exports = router;