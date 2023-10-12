const router = require('express').Router();
const multer  = require('multer');
const { Recipe } = require('../../models');
const withAuth = require('../../utils/auth');



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './assets/images');
    },
    filename: function (req, file, cb) {
        imageName = Date.now() + '-' + file.originalname;
        cb(null, imageName);
    }
});
  
const upload = multer({ storage: storage });

var imageName;

router.post('/', upload.single('recipe-image'), async (req, res) => {
    try{

        imageName = "./assets/images/" + imageName;

        const newRecipe = await Recipe.create({
            title: req.body.recipeName, 
            ingredients: req.body.ingredients,
            instructions: req.body.instructions,
            image: imageName, 
            user_id: req.session.user_id,
        });
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