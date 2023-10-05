const express = require("express");
const routes = express.Router();
const authRoutes = require("./auth.routes.js");
const userRoutes = require("./user.routes");
const propertyRoutes = require("./property.routes.js");
const appointmentRoutes = require("./appointment.routes.js");

routes.use("/auth", authRoutes);
routes.use("/user", userRoutes);
routes.use("/property", propertyRoutes);
routes.use("/appointment", appointmentRoutes);

module.exports = routes;
