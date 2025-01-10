const express = require("express");
const path = require("path");
const app = express();
const connectDB = require("./src/config/db");
const Message = require("./src/models/messageModel");
const morgan = require("morgan");
const helmet = require("helmet");
const { serverPort } = require("./src/secret");
const cors = require("cors");

// middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));
app.use(cors());

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
  res.status(404).send("Sorry, page not found");
});
app.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(200).send('Message received!');
  } catch (error) {
    res.status(500).send('An error occurred.');
  }
});

// Server setup
app.listen(serverPort, async () => {
  console.log(`server is runnig at http://localhost:${serverPort}`);
  await connectDB();
});
