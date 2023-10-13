const express = require('express');
const router = express.Router();
const { User, Recipe, Comment } = require('../models');


router.get('/:id', async (req, res) => {
    try {
        const user_id = req.params.id;
        const user = await User.findByPk(user_id);

        if (!user) {
            return res.status(404).send('User not found');
        }

        const userRecipes = await Recipe.findAll({ where: { user_id } });
        const comments = await Comment.findAll({
            where: { user_id },
            include: [{ model: Recipe, as: 'recipe' }],
        });

        res.render('profile', {
            username: user.username,
            joinDate: user.createdAt, // should try to swap to the helper eventually
            userRecipes,
            comments,
            user_id: req.session.user_id,
            logged_in: req.session.logged_in,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


module.exports = router;
