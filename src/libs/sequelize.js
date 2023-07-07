const { Sequelize } = require("sequelize");

const { config } = require("../config/config");
const setupModels = require("../db/models");

console.log("=====");
console.log(config.dbPassword);

const sequelize = new Sequelize(
    config.dbName,
    config.dbUser,
    config.dbPassword,
    {
        host: config.dbHost,
        dialect: 'postgresql',
    }
);

sequelize.sync();
setupModels(sequelize);

module.exports = sequelize;
