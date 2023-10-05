const { Tag } = require('../models')

const tagData = [
    {
        name: 'Chicken'
    },
    {
        name: 'Vegetarian'
    },
    {
        name: 'Dessert'
    },
    {
        name: 'Seafood'
    },
    {
        name: 'Vegan'
    },
    {
        name: 'Italian'
    },
    {
        name: 'Beef'
    },
    {
        name: 'Pork'
    },
    {
        name: 'Simple'
    },
    {
        name: 'No Bake'
    },
]

const seedTag = () => Tag.bulkCreate(tagData)
module.exports = seedTag;