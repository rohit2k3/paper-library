const mongoose = require("mongoose");

const paperSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  shortName: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  section_A: [
    {
      unit: {
        type: Number,
        required: true,
      },
      question: {
        type: String,
        required: true,
      },
      answer: {
        type: String,
        required: true,
      },
    },
  ],
  section_B: [
    {
      unit: {
        type: Number,
        required: true,
      },
      question: {
        type: String,
        required: true,
      },
      answer: {
        type: String,
        required: true,
      },
    },
  ],
  section_C: [
    {
      unit: {
        type: Number,
        required: true,
      },
      question: {
        type: String,
        required: true,
      },
      answer: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("papers", paperSchema);
