const {
  addFavoritesService,
  deleteFavoritesService,
  getFavoritesService,
  getCurrentFavoriteService,
} = require("../services/favoritesService");

const addFavoritesController = async (req, res) => {
  const movie = req.body;
  const { id } = req.user;
  const result = await addFavoritesService(movie, id);
  res.status(201).json({
    status: "success",
    message: "Movie added to favorites",
    result,
  });
};
const getFavoritesController = async (req, res) => {
  const { id } = req.user;
  const result = await getFavoritesService(id);
  res.status(200).json({
    status: "success",
    message: "Favorites list",
    result,
  });
};
const deleteFavoritesController = async (req, res) => {
  const { _id } = req.user;

  const { id } = req.query;

  const result = await deleteFavoritesService(_id, id);
  res.status(200).json({
    status: "success",
    message: "Movie deleted from favorites",
    result,
  });
};
const getCurrentFavoriteController = async (req, res) => {
  const movieId = req.query.id;
  const { _id } = req.user;

  const result = await getCurrentFavoriteService(_id, movieId);
  res.status(200).json({
    status: "success",
    message: "Current favorite",
    result,
  });
};

module.exports = {
  addFavoritesController,
  getFavoritesController,
  deleteFavoritesController,
  getCurrentFavoriteController,
};
