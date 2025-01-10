require("dotenv").config();

const serverPort = process.env.SERVER_PORT || 5500;
const mongodbURL = process.env.MONGODB_URL || "mongodb://localhost:27017/user_message";

// Export
module.exports = {
  serverPort,
  mongodbURL,
};
