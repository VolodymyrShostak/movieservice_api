const { regisrtation, login, logout } = require("../services/authService");

const registrationController = async (req, res) => {
  const { email, password } = req.body;
  const token = await regisrtation(email, password);

  res.status(201).json({
    email,
    token,
    status: "success",
    message: "You are sign up successfully!",
  });
};

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const token = await login(email, password);
  res.status(200).json({
    status: "success",
    token,
    user: { email: `${email}` },
    message: "You are sign in successfully! Welcome!",
  });
};

const logoutController = async (req, res) => {
  const { id } = req.user;
  await logout(id);

  res.status(204).json();
};

module.exports = {
  registrationController,
  loginController,
  logoutController,
};
