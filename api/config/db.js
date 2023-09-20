const Sequelize = require("sequelize");

const db = new Sequelize("house_of_dev", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = db;
