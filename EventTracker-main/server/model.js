const mongoose = require("mongoose");
require("dotenv").config();
const Schema = mongoose.Schema;
const mongoDB = process.env.CONNECTION;

module.exports = (async () => {
  await mongoose.connect(mongoDB);

  const TrackerSchema = new Schema({
    event: String,
    tags: [String],
    url: String,
    title: String,
    ts: String,
  });

  return mongoose.model("TrackerModels", TrackerSchema);
})();
