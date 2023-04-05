const app = require("./src/app");
const { connectMongoDB } = require("./src/db/connection");
require("dotenv").config();

const start = async () => {
  try {
    await connectMongoDB();
    console.log("Database connection successful");

    app.listen(process.env.PORT, () => {
      console.log("Server running. Use our API on port: 3002");
    });
  } catch (error) {
    console.log("Database connection failed");
    process.exit(1);
  }
};

start();
