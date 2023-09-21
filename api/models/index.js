// Aca van la relaciones
const Users = require("./Users.models");
const Rating = require("");
const Appointment = require("");
const Property = require("");

Users.belongsToMany(Property, { through: Rating });
Property.belongsToMany(Users, { through: Rating });

Users.hasMany(Appointment);

Appointment.belongsToMany(Property);
Property.belongsToMany(Appointment);

module.exports = {
  Users,
  Rating,
  Property,
  Appointment,
};
