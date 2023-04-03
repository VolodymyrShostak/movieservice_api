const mongoose = require("mongoose");
require("dotenv").config();



const connectMongoDB = async () => {
  mongoose.set("strictQuery", true);
  return mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.vda0eke.mongodb.net/moviesApi?retryWrites=true&w=majority`
  );
};

module.exports = { connectMongoDB };
// mongodb + srv://bcteam:bcteam@cluster0.vit3ev2.mongodb.net/database?retryWrites=true&w=majority
// mongodb+srv://bcteam:bcteam@cluster0.vit3ev2.mongodb.net/database?retryWrites=true&w=majority