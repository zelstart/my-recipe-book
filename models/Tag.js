const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tag extends Model {}

Tag.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        tag_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'tag',
        tableName: 'Tags',
    }
)

module.exports = Tag;