const express = require('express');
const router = express.Router();
const { Recipe, User, Comment } = require('../models');


// get 
router.get('/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findByPk(req.params.id, {
            include: [{ model: Comment, include: { model: User } }]
        });

        res.render('recipepage', {
            recipeName: recipe.title,
            ingredients: recipe.ingredients,
            instructions: recipe.instructions,
            image: recipe.image,
            loggedIn: req.session.logged_in, 
            recipeComments: recipe.Comments
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
