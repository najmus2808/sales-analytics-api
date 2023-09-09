const mongoose = require("mongoose");

const app = require("./app");
const config = require("./src/config");

const dbConnect = async () => {
  try {
    await mongoose.connect(config.database_url);
    console.log("Database is connected successfully");
    server = app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`);
    });
  } catch (error) {
    console.log("Failed to connect database", error);
  }
};

dbConnect();
