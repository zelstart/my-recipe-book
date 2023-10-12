const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const recipeRoutes = require('./recipeRoutes');
const userRoutes = require('./userRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/recipes', recipeRoutes); 
router.use('/users', userRoutes); 

module.exports = router;