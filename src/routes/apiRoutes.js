const { Router } = require("express");

const { searchMovie, addToFavourites } = require("../controllers/api");

const router = Router();

router.post("/search", searchMovie);
router.post("/favourites", addToFavourites);

module.exports = router;
