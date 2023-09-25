const express = require("express");
const routes = express.Router();
const authRoutes = require("./auth.routes.js");
const userRoutes = require("./user.routes");

routes.use("/auth", authRoutes);
routes.use("/user", userRoutes);

module.exports = routes;
