const mongoose = require("mongoose");
const validator = require("validator");

const paperSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please enter valid email"]
  },
  message: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Contact", paperSchema);