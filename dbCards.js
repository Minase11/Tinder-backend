const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
  imgUrl: String,
});

module.exports = mongoose.model("cards", schema);
