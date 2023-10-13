const router = require('express').Router();
const multer  = require('multer');
const { User, Recipe, Comment } = require('../../models');
const withAuth = require('../../utils/auth');





const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/assets');
    },
    filename: function (req, file, cb) {
        imageName = Date.now() + '-' + file.originalname;
        cb(null, imageName);
    }
});
  
const upload = multer({ storage: storage });

var imageName;


router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.findAll({
            include: [{
                model: Comment,
                include: {
                    model: User,
                    attributes: ['username']
                }
            }]
        });
        res.json(recipes);
    } catch (err) {
        res.status(500).json(err);
    }
 });

router.post('/', withAuth, upload.single('recipe-image'), async (req, res) => {
    try{

        imageName = "/assets/" + imageName;

        const newRecipe = await Recipe.create({
            title: req.body.recipeName, 
            ingredients: req.body.ingredients,
            instructions: req.body.instructions,
            image: imageName, 
            user_id: req.session.user_id,
        });
        console.log(newRecipe);
        console.log(newRecipe.id);
        res.status(200).json(newRecipe);
    } catch(err) {
        console.log(err);
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try{
        const recipeData = await Recipe.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

    if (!recipeData) {
        res.status(404).json({ message: 'No recipe found with this id!' });
        return;
    }
    res.status(200).json(recipeDataData);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;