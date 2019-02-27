const Sequalize = require('sequelize');

const connectionString = 'postgres://oigvqgvvrhzazm:8b194a2aaeed8076cf8cdd4af4db96afbb12bce3666bb2adf9a29a760f6d9b3e@ec2-174-129-236-21.compute-1.amazonaws.com:5432/dfrloljl3kr92n'

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