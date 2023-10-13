const express = require('express');
const router = express.Router();
const { Recipe, User, Comment } = require('../models');

// get route for recipe page
router.get('/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findByPk(req.params.id, {
            include: [{ model: Comment, include: User }]
        });

        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }

        console.log('user id:', req.session.user_id)
        console.log(recipe.comments)
        const recipeData = recipe.toJSON();
        recipeData.logged_in = req.session.logged_in;
        recipeData.user_id = req.session.user_id;

        res.render('recipepage', {
            recipe: recipeData,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


module.exports = router;
