const express = require("express");
const routes = express.Router();
const authRoutes = require("./auth.routes.js");
const userRoutes = require("./user.routes");
const propertyRoutes = require("./property.routes.js");
const appointmentRoutes = require("./appointment.routes.js");
const adminRoutes = require("./admin.routes.js");
const favoriteRoutes = require("./favorite.routes.js");

routes.use("/auth", authRoutes);
routes.use("/user", userRoutes);
routes.use("/property", propertyRoutes);
routes.use("/appointment", appointmentRoutes);
routes.use("/admin", adminRoutes);
routes.use("/favorite", favoriteRoutes);

module.exports = routes;
