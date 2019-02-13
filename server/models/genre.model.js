const Sequelize = require('Sequelize');
const sequelize = require('../modules/orm.config');

const config = {
    freezeTableName: true,
    underscored: true, // use snake_case not camelCase for attributes
    
}

const Genre = sequelize.define('genre', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    genre_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
}, config);


module.exports = Genre;