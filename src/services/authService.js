const User = require("../models/userModel");
const jsonwebtoken = require("jsonwebtoken");
const { NotAuthorizedError, ConflictError } = require("../helpers/errors");
const bcrypt = require("bcrypt");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const regisrtation = async (email, password) => {
  const user = await User.findOne({ email });
  if (user) {
    throw new ConflictError("Email is already used");
  }
  const newUser = await User.create({
    email,
    password,
  });
  const token = jsonwebtoken.sign(
    {
      id: newUser._id,
      email: newUser.email,
    },
    process.env.JWT_SECRET
  );
  await User.findOneAndUpdate({ _id: newUser._id }, { token });
  // const msg = {
  //   to: email,
  //   from: "shostakvolodymyr24@gmail.com",
  //   subject: "Email verification",
  //   html: `<a href="http://localhost:3000/api/users/verify/${user.verificationToken}">Please verify your email</a>`,
  // };
  // await sgMail.send(msg);

  return token;
};

const login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new NotAuthorizedError("Email is wrong");
  }
  if (!(await bcrypt.compare(password, user.password))) {
    throw new NotAuthorizedError("Password is wrong");
  }

  const token = jsonwebtoken.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET
  );
  await User.findOneAndUpdate({ _id: user._id }, { token });
  return token;
};

const logout = async (id) => {
  const user = await User.findByIdAndUpdate(id, { token: null });

  if (!user) throw new NotAuthorizedError("Not authorized");
  
};

module.exports = {
  regisrtation,
  login,
  logout,
};
