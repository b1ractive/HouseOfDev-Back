const express = require("express");
const router = express.Router();
const { validateUser } = require("../middelwares/auth");

const {
  getUsers,
  getUser,
  editUser,
  deleteUser,
  getUserProfile,
} = require("../controllers/user.controllers");

router.get("/", getUsers);

router.get("/:userId", getUser);

router.put("/:userId", validateUser, editUser);

router.delete("/:userId", deleteUser);

module.exports = router;
