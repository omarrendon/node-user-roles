const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const user = sequelize.define(
  "users",
  {
    user_id: {
      type: DataTypes.INTEGER,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    apellido_paterno: {
      type: DataTypes.STRING,
    },
    apellido_materno: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    contrasenia: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamp: false,
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = user;
