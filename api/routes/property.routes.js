const express = require("express");
const router = express.Router();

const {
  getProperty,
  getProperties,
  filterProperties,
} = require("../controllers/property.controllers");

router.get("/", getProperties);

router.get("/:propertyId", getProperty);

router.get("/filter/category/:category", filterProperties);

module.exports = router;
