const express = require("express");
const router = express.Router();

const {
  addReserve,
  confirmReserve,
} = require("../controllers/appointment.controllers");

router.post("/reserve", addReserve);

router.post("/confirm-reserve", confirmReserve);

module.exports = router;
