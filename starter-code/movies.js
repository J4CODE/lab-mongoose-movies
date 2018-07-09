//Iteration #1: The Movie Model
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const MoviesSchema = new Schema({
  title: String,
  genre: String,
  plot: String,
});

const Movies = mongoose.model("Movies", MoviesSchema); //The model.

module.exports = Movies;
