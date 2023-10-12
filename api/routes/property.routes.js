const express = require("express");
const router = express.Router();

const {
  getProperty,
  getProperties,
  filterProperties,
  search,
  searchPrice,
} = require("../controllers/property.controllers");

router.get("/", getProperties);

router.get("/:propertyId", getProperty);

router.get("/filter/category/:category", filterProperties);

router.get("/search/:query", search);

router.get("/search/price/:minPrice/:maxPrice", searchPrice);

module.exports = router;
