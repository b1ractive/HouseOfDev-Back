const express = require("express");
const routes = express.Router();
const authRoutes = require("./auth.routes.js");
const userRoutes = require("./user.routes");
const propertyRoutes = require("./property.routes.js");

routes.use("/auth", authRoutes);
routes.use("/user", userRoutes);
routes.use("/property", propertyRoutes);

module.exports = routes;
