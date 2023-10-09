const { Model, DataTypes } = require("sequelize");
const db = require("../config/db");

class Favorite extends Model {}

Favorite.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  { sequelize: db, modelName: "favorites" }
);

module.exports = Favorite;
