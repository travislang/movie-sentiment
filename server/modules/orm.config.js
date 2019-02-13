const Sequalize = require('sequelize');

const connectionString = 'postgres://localhost:5432/movie_sentiment'

const sequelize = new Sequalize(connectionString, {
    operatorsAliases: false
})

sequelize
    .authenticate()
    .then(() => {
        console.log('sequelize connection has been established successfully!');
    })
    .catch((err) => {
        console.error('sequelize unable to connect to the database', err);
    })

module.exports = sequelize;