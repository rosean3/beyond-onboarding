const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

console.log("chamei a database!");

const User = require("../models/User");

const connection = new Sequelize(dbConfig);

User.init(connection);

module.exports = connection;
