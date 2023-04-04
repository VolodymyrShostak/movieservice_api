const Favorite = require("../models/favoritesModel");

const addFavoritesService = async (reqMovie, id) => {
  const movie = { ...reqMovie, owner: id };
  const newMovie = await Favorite.create(movie);
  return newMovie;
};
const getFavoritesService = async (id) => {
  const result = await Favorite.find({ owner: id });
  return result;
};

const deleteFavoritesService = async (_id, movieId) => {
  const result = await Favorite.findOneAndDelete({ owner: _id, id: movieId });
  return result;
};
const getCurrentFavoriteService = async (id, movieId) => {
  const result = await Favorite.findOne({ owner: id, id: movieId });
  console.log("333", result);
  return result;
};

module.exports = {
  addFavoritesService,
  getFavoritesService,
  deleteFavoritesService,
  getCurrentFavoriteService,
};
