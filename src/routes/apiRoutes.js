const { Router } = require("express");

const { searchMovie } = require("../controllers/api");

const router = Router();

router.post("/search", searchMovie);

module.exports = router;
