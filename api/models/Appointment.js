const { DataTypes, Model } = require("sequelize");
const db = require("../config/db");

class Appointment extends Model {}

Appointment.init(
  {
  schedule: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time_init: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time_finish: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    },
  { sequelize: db, modelName: "Appointment" }
);

module.exports = Appointment;