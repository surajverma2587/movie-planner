const { Router } = require("express");

const {
  renderMyPlans,
  renderCreatePlan,
  renderFavourites,
  renderMovie,
  renderHome,
} = require("../controllers/view");

const router = Router();

router.get("/my-plans", renderMyPlans);
router.get("/create-plan", renderCreatePlan);
router.get("/favourites", renderFavourites);
router.get("/movies/:id", renderMovie);
router.get("/", renderHome);

module.exports = router;
