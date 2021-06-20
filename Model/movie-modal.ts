import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  imdbID: {
    type: String,
  },
  Title: {
    type: String,
  },
  Poster: {
    type: String,
  },
  Year: {
    type: String,
  },
  imdbRating:{
      type:String
  }
});

const Movie = mongoose.model('movie', movieSchema);


export default Movie;
