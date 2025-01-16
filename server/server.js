const express = require("express");
const mongoose = require('mongoose');
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

// Connect to MongoDB (ensure this is correctly configured)
mongoose.connect('mongodb://localhost:27017/user_message')
.then(() => console.log('MongoDB is connected...'))
.catch(err => console.log(err));


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

app.post('/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validate input
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Save to the database
    const newMessage = new Message({ name, email, phone, message });
    await newMessage.save();

    res.status(200).json({ message: 'Your message has been received!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.use((req, res, next) => {
  res.status(404).send("Sorry, page not found");
});


// Server setup
app.listen(serverPort, async () => {
  console.log(`server is runnig at http://localhost:${serverPort}`);
  await connectDB();
});
