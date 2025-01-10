require("dotenv").config();

const serverPort = process.env.SERVER_PORT || 5500;

// Export
module.exports = {
  serverPort,
};
