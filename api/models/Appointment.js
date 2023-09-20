const { DataTypes, Model } = require("sequelize");
const db = require("../config/db");

class Appointment extends Model {}

Appointment.init(
  {
   location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
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