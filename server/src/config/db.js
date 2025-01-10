// Purpose: Connect to the MongoDB database using mongoose.
const mongoose = require("mongoose");
const {mongodbURL} = require("../secret");

const connectDB = async (options ={}) => {
  try {
    await mongoose.connect(mongodbURL, options);
    console.log("DB is connected successfully");
    mongoose.connection.on("error", (error) => {
      console.error("DB connection error:", error);
    });
  } catch (error) {
    console.error("Failed to connect with DB", error.toString());
  }
};

module.exports = connectDB;