const express = require("express");
const router = express.Router();
const {
  getFavoritesController,
  addFavoritesController,
  deleteFavoritesController,
} = require("../../controllers/favoritesController");
const { asyncWrapper } = require("../../helpers/apiHelpers");

const { authMiddleware } = require("../../middlewares/authMiddleware");

router

  .get("/favorites", authMiddleware, asyncWrapper(getFavoritesController))
  .post("/favorites", authMiddleware, asyncWrapper(addFavoritesController))
  .delete(
    "/favorites",
    authMiddleware,
    asyncWrapper(deleteFavoritesController)
  );

module.exports = router;
