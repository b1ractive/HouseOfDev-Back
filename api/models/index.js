// Aca van la relaciones
const Users = require("./User");
const Rating = require("./Rating");
const Appointment = require("./Appointment");
const Property = require("./Property");

Users.belongsToMany(Property, { through: Rating });
Property.belongsToMany(Users, { through: Rating });

Users.hasMany(Appointment);

Appointment.belongsToMany(Property, { through: "reservation" });
Property.belongsToMany(Appointment, { through: "reservation" });

module.exports = {
  Users,
  Rating,
  Property,
  Appointment,
};
