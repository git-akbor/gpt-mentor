const express = require("express");
const path = require("path");
const app = express();
const morgan = require("morgan")
const helmet = require('helmet');
const { serverPort } = require("./src/secret");
// middleware
app.use(morgan("dev"));
app.use(helmet());

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/about.html"));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/contact.html"));
});
app.get("/services", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/services.html"));
});
app.use((req, res, next) => {
  res.status(404).send('Sorry, page not found');
});
// Start the server

app.listen(serverPort, () => {
  console.log(`Server is running on http://localhost:${serverPort}`);
});
