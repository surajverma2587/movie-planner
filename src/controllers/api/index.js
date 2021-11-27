const { getMovieByName, getMovieById } = require("../../services/omdb");
const { getDataFromFile, writeDataToFile } = require("../../utils");

const searchMovie = async (req, res) => {
  const { movie } = req.body;

  if (!movie) {
    return res.status(400).json({ error: "Invalid movie name" });
  }

  const data = await getMovieByName(movie);

  return res.json({ data });
};

const addToFavourites = async (req, res) => {
  const { movieId } = req.body;

  if (!movieId) {
    return res.status(400).json({ error: "Invalid movie id" });
  }

  const data = await getMovieById(movieId);

  if (data) {
    const favourites = getDataFromFile("favourites");
    favourites.push(data);
    writeDataToFile("favourites", JSON.stringify(favourites));
    return res.json({ data: "Successfully added movie to favourites!" });
  }

  return res.status(500).json({ error: "Something went wrong" });
};

module.exports = {
  searchMovie,
  addToFavourites,
};
