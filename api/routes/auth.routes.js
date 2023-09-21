const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { generateToken } = require("../config/tokens");
const { validateUser } = require("../middelwares/auth");

// ruta de registro
router.post("/register", (req, res) => {
  const { name, last_name, email, password, telephone } = req.body;
  console.log(req.body);

  User.findOne({ where: { email } })
    .then((userExists) => {
      if (userExists) {
        // si el usuario existe tira mensaje de error que el mail ya esta en uso
        return res
          .status(400)
          .json({ error: "El correo electrónico ya está en uso" });
      }

      return User.create({
        // y sino me crea un nuevo usuario
        name,
        last_name,
        email,
        password,
        telephone,
      });
    })
    .then((newUser) => {
      res.status(201).json({ message: "Registro exitoso", user: newUser });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Error al registrar el usuario" });
    });
});

// ruta de login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  User.findOne({
    where: {
      email,
    },
  })
    .then((user) => {
      if (!user)
        return res.status(401).json({ error: "Usuario no encontrado" });

      // validar la contraseña
      return user.validatePassword(password).then((isValid) => {
        if (!isValid) {
          return res.status(401).json({ error: "Contraseña incorrecta" });
        } else {
          const payload = {
            userId: user.id,
            last_name: user.last_name,
            email: user.email,
            telephone: user.telephone,
          };
          const token = generateToken(payload);
          res.cookie("token", token);
          res.send(payload);
        }
      });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Error al iniciar sesión" });
    });
});

// ruta de logout

router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Sesión cerrada con éxito" });
});

// ruta /me
router.get("/me", validateUser, (req, res) => {
  res.send(req.user);
});

module.exports = router;
