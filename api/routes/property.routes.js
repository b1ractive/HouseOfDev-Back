const express = require("express");
const router = express.Router();

const {
  getProperty,
  getProperties,
} = require("../controllers/property.controllers");

router.get("/", getProperties);

router.get("/:propertyId", getProperty);

module.exports = router;
