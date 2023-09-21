const bcrypt = require("bcrypt");

const { Users, Appointment, Property, Rating } = require("../models");

(async function () {
  const generateHashedPassword = (pass) => {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const password = bcrypt.hashSync(pass, salt);
    return { salt, password };
  };

  const userData = [
    {
      name: "Nombre1",
      last_name: "Apellido1",
      email: "correo1@example.com",
      ...generateHashedPassword("clave1"),
      telephone: "1234567890",
      is_admin: false,
      createdAt: "2023-09-21 10:00:00",
      updatedAt: "2023-09-21 10:00:00",
    },
    {
      name: "Nombre2",
      last_name: "Apellido2",
      email: "correo2@example.com",
      ...generateHashedPassword("clave1"),
      telephone: "1434567890",
      is_admin: true,
      createdAt: "2023-09-21 11:00:00",
      updatedAt: "2023-09-21 11:00:00",
    },
    {
      name: "Nombre3",
      last_name: "Apellido3",
      email: "correo3@example.com",
      ...generateHashedPassword("clave1"),
      telephone: "1134567890",
      is_admin: false,
      createdAt: "2023-09-21 12:00:00",
      updatedAt: "2023-09-21 12:00:00",
    },
  ];

  await Users.bulkCreate(userData);  
})();
