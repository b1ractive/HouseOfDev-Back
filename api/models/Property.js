const { DataTypes, Model } = require("sequelize");
const db = require("../config/db");

class Property extends Model {}

Property.init(
  {
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    tipe: {  // seria el nombre
      type: DataTypes.STRING,
      allowNull: false,
    },
    availability: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,  // venta o alquiler
    },
  },
  { sequelize: db, modelName: "properties" }
);

module.exports = Property;
