const { Router } = require("express");

const {
  searchMovie,
  addToFavourites,
  getFavourites,
} = require("../controllers/api");

const router = Router();

router.post("/search", searchMovie);
router.get("/favourites", getFavourites);
router.post("/favourites", addToFavourites);

module.exports = router;
