const { getMovieByName } = require("../../services/omdb");

const searchMovie = async (req, res) => {
  const { movie } = req.body;

  if (!movie) {
    return res.status(400).json({ error: "Invalid movie name" });
  }

  const data = await getMovieByName(movie);

  return res.json({ data });
};

module.exports = {
  searchMovie,
};
