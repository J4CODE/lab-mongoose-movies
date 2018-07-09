//Iteration #1: The Celebrity Model
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const CelebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
});

const Celebrity = mongoose.model("Celebrity", CelebritySchema); //The model.

module.exports = Celebrity;
