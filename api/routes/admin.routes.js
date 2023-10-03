const express = require("express");
const router = express.Router();
const {
  adminAddProperty,
  adminEditProperty,
  adminDeleteProperty,
} = require("../controllers/admin.controllers");

// administrador añada una propiedad
router.post("/addProperty", adminAddProperty);

// administrador edite una propiedad
router.put("/editProperty/:propertyId", adminEditProperty);

// administrador elimine una propiedad
router.delete("/deleteProperty/:propertyId", adminDeleteProperty);

module.exports = router;
