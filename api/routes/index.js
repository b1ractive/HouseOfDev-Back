const express = require("express");
const routes = express.Router();
const authRoutes = require("./auth.routes.js");

routes.use("/auth", authRoutes);

const userRoutes = require("./user.routes");

routes.use("/user", userRoutes);

module.exports = routes;
