// Aca van la relaciones
const Users = require("./User");
const Rating = require("./Rating");
const Appointment = require("./Appointment");
const Property = require("./Property");

Users.belongsToMany(Property, { through: Rating });
Property.belongsToMany(Users, { through: Rating });

Users.belongsToMany(Property, {
  through: Appointment,
});
Property.belongsToMany(Users, {
  through: Appointment,
});

//Probar estas relaciones si funcionan o no

module.exports = {
  Users,
  Rating,
  Property,
  Appointment,
};
