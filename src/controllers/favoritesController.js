const {
  addFavoritesService,
//   deleteFavoritesService,
//   getFavoritesService,
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
const getFavoritesController = async (req, res) => {};
const deleteFavoritesController = async (req, res) => {};

module.exports = {
  addFavoritesController,
  getFavoritesController,
  deleteFavoritesController,
};
