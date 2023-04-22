const mongoose = require("mongoose");

const allDataSchema = new mongoose.Schema({
  semName: {
    type: Number,
    required: true,
  },
  subjects: [
    {
      branchName: {
        type: String,
        required: true,
      },
      branchShortCode:{
        type: String,
        required: true,
      },
      subCode: {
        type: String,
        required: true,
      },
      subjectName: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("alldatas", allDataSchema);
