const axios = require("axios");

const API_KEY = "trilogy";

const getMovieByName = async (movieName) => {
  const { data } = await axios.get(
    encodeURI(`https://www.omdbapi.com/?t=${movieName}&apikey=${API_KEY}`)
  );

  return data;
};

module.exports = {
  getMovieByName,
};
