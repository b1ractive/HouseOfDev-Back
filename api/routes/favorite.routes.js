const express = require("express");
const router = express.Router();

const {
  addFavorite,
  getFavorites,
  deleteFavorite,
} = require("../controllers/favorite.controllers");

router.get("/:userId/favorites", getFavorites);

router.post("/:userId/favorite/add", addFavorite);

router.delete("/:userId/delete/:favoriteId", deleteFavorite);

module.exports = router;
