const express = require('express');
const router = express.Router();
const { Recipe, User, Comment } = require('../models');

// get route for recipe page
router.get('/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findByPk(req.params.id, {
            include: [{ model: Comment, include: User }, User]
        });

        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }

        const recipeData = recipe.toJSON();
        recipeData.logged_in = req.session.logged_in;
        recipeData.user_id = req.session.user_id;

        res.render('recipepage', {
            recipe: recipeData,
            logged_in: req.session.logged_in,
            user_id: req.session.user_id
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// create comment
router.post('/:recipeId', async (req, res) => {
    try {
        const userId = req.session.user_id; 
        const recipeId = req.params.recipeId;
        const body = req.body.body; 


        await Comment.create({
            user_id: userId, 
            body,
            recipe_id: recipeId 
        });

        res.status(200).send('Comment created successfully (route)');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});



module.exports = router;
