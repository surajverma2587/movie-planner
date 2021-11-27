const path = require("path");

const renderMyPlans = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/myPlans.html");
  res.sendFile(filePath);
};

const renderCreatePlan = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/createPlan.html");
  res.sendFile(filePath);
};

const renderFavourites = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/favourites.html");
  res.sendFile(filePath);
};

const renderMovie = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/movie.html");
  res.sendFile(filePath);
};

const renderHome = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/index.html");
  res.sendFile(filePath);
};

module.exports = {
  renderMyPlans,
  renderCreatePlan,
  renderFavourites,
  renderMovie,
  renderHome,
};
