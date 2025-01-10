const { Schema, model, default: mongoose } = require("mongoose");

const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: false },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Message = model("message", messageSchema);

module.exports = Message;
