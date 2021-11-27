const axios = require("axios");
require("dotenv").config();

const API_KEY = process.env.API_KEY;

const getMovieByName = async (movieName) => {
  const { data } = await axios.get(
    encodeURI(`https://www.omdbapi.com/?t=${movieName}&apikey=${API_KEY}`)
  );

  return data;
};

const getMovieById = async (id) => {
  const { data } = await axios.get(
    encodeURI(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
  );

  return data;
};

module.exports = {
  getMovieByName,
  getMovieById,
};
