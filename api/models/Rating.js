const { Model, DataTypes } = require("sequelize");
const db = require("../config/db");

class Rating extends Model {}

Rating.init(
  {
    qualification:{
      type:DataTypes.FLOAT
    },
    comment:{
      type:DataTypes.TEXT
    }
  },
  { sequelize: db, modelName: "Rating" }
);

module.exports = Rating;
