const Favorite = require("../models/favoritesModel");

// const { NotAuthorizedError } = require("../helpers/errors");





const addFavoritesService = async (reqMovie, id) => {
  const movie= {...reqMovie, owner: id}
  const newMovie = await Favorite.create(movie);
  return newMovie;

  
  
  // const user = await User.findByIdAndUpdate(id, { token: null });

  // if (!user) throw new NotAuthorizedError("Not authorized");
};
const getFavoritesService = async () => { }
const deleteFavoritesService = async () => { }
module.exports = {
  addFavoritesService,
  getFavoritesService,
  deleteFavoritesService,
};
