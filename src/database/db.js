const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize("DB-ROLES", "omar", "password", {
  host: "localhost",
  dialect: "postgres",
});

sequelize
  .authenticate()
  .then(function (err) {
    console.log("Connection has been established successfully.");
  })
  .catch(function (err) {
    console.log("Unable to connect to the database:", err);
  });

module.exports = sequelize;
