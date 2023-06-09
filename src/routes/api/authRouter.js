const express = require("express");
const router = express.Router();
const {
  registrationController,
  loginController,
  logoutController,
} = require("../../controllers/authController");
const { asyncWrapper } = require("../../helpers/apiHelpers");
const {
  autorisationsValidation,
} = require("../../middlewares/validationMiddleware");
const { authMiddleware } = require("../../middlewares/authMiddleware");

router

  .post(
    "/signup",
    autorisationsValidation,
    asyncWrapper(registrationController)
  )
  .post("/signin", autorisationsValidation, asyncWrapper(loginController))
  .post("/logout", authMiddleware, asyncWrapper(logoutController));

module.exports = router;
