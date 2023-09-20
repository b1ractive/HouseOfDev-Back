const express = require("express");
const router = express.Router();

const {
  getUsers,
  getUser,
  editUser,
  deleteUser,
} = require("../controllers/user.controllers");

router.get("/", getUsers);

router.get("/:userId", getUser);

router.put("/:userId", editUser);

router.delete("/:userId", deleteUser);

module.exports = router;
