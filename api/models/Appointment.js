const { DataTypes, Model } = require("sequelize");
const db = require("../config/db");

class Appointment extends Model {}

Appointment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // userId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
    // propertyId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
  },
  { sequelize: db, modelName: "appointments" }
);

module.exports = Appointment;
