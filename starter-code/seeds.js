const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost/${mongoose-movies}`);

const dbName = 'mongoose-movies';
const Celebrity = require('../models/celebrities');
const Movie = require('../models/movies');


//Celebrities data.
const celebrities = [

  {
    name: " Dwayne 'The Rock' Johnson",
    occupation: "Hardest Worker In The Room",
    catchPhrase: "Let's move! The world ain't saving itself!"
  },

  {
    name: "Margot Robbie",
    occupation: "Illusionist",
    catchPhrase: "At the end of the day, this is a game of focus"
  },

  {
    name: "Keanu Reeves",
    occupation: "Matrixologist",
    catchPhrase: "I know kung fu."
  },

  {
    name: "Jennifer Lawrence",
    occupation: "Pandemonium Therapy",
    catchPhrase: "I’d rather look chubby on screen and like a person in real life."
  },

  {
    name: "Al Pacino",
    occupation: "High Intensity Chef",
    catchPhrase: "Say ‘hello’ to my little friend!"
  },

  {
    name: "Charlize Theron",
    occupation: "Conqueror",
    catchPhrase: "Get on my Harley and act like a guy."
  },
]

//Movies data.
const movies = [
  {
    title: "The Matrix",
    plot: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    genre: "Action, Sci-Fi"
  },

  {
    title: "War Games",
    plot: "A young man finds a back door into a military central computer in which reality is confused with game-playing, possibly starting World War III.",
    genre: "Sci-Fi, Thriller "
  },

  {
    title: "Ex Machina",
    plot: "A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a breath-taking humanoid A.I.",
    genre: "Drama, Mystery, Sci-Fi "
  },

  {
    title: "Swordfish",
    plot: "A covert counter-terrorist unit called Black Cell led by Gabriel Shear wants the money to help finance their war against international terrorism, but it's all locked away. Gabriel brings in convicted hacker Stanley Jobson to help him.",
    genre: "Action, Crime, Thriller"
  },
  
  {
    title: " Source Code",
    plot: "A soldier wakes up in someone else's body and discovers he's part of an experimental government program to find the bomber of a commuter train. A mission he has only 8 minutes to complete.",
    genre: "Mystery, Romance, Sci-Fi"
  },

  {
    title: "Lucy",
    plot: "A woman, accidentally caught in a dark deal, turns the tables on her captors and transforms into a merciless warrior evolved beyond human logic.",
    genre: "Action, Sci-Fi, Thriller"
  },
  
]

//Creating celebrities.
Celebrity.create(celebrities)
.then((result)=>{
  console.log(`created ${result.length} celebrities`);
  mongoose.disconnect();
})
  .catch((err)=>{
    console.log(err)
  });


//Creating movies.
Movies.create(movies)
.then((result)=>{
  console.log(`created ${result.length} movies`);
  mongoose.disconnect();
})
  .catch((err)=>{
    console.log(err)
  });
