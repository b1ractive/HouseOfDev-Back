// Aca van la relaciones
const Users = require("./User");
const Favorite = require("./Favorite");
const Appointment = require("./Appointment");
const Property = require("./Property");

Users.belongsToMany(Property, { through: Favorite });
Property.belongsToMany(Users, { through: Favorite });

Users.belongsToMany(Property, {
  through: Appointment,
});
Property.belongsToMany(Users, {
  through: Appointment,
});

//Probar estas relaciones si funcionan o no

module.exports = {
  Users,
  Favorite,
  Property,
  Appointment,
};
