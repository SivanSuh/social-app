const mongoose = require("mongoose");

const tokenSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
  },
});

const TokenModel = mongoose.model("token", tokenSchema);
module.exports = TokenModel;
