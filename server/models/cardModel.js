const mongoose = require("mongoose");

const CardSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  file: {
    type: String,
    required: true,
  },
  command: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("card", CardSchema);
