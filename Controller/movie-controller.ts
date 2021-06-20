import Movie from '../Model/movie-modal';
import axios from 'axios';



export const MovieList = async (req: any, res: any) => {
  try {
    const movie = await Movie.find({}).sort({ imdbRating: 'desc' }).limit(5)
    res.send(movie);
  } catch (err) {
    res.send(err);
  }
};

export const searchMovies = async (req: any, res: any) => {
  try {
    let movie:any = req.params;
    console.log('PArams ', movie);
    const foundMovies = await Movie.find({ Title: movie["movie"] });
    console.log('Entered into Else Part', foundMovies);

    if (foundMovies.length === 0) {
      console.log('Entered');
      const newMovie = await axios.get(`http://www.omdbapi.com/?s=${movie['movie']}&apikey=87e6d137`);
      const addMovie = await Movie.create(newMovie.data.Search);
      console.log('New Movie ', newMovie.data);
      console.log('Add Movies ', addMovie);
      res.send(addMovie);
    }else{
        console.log('Entered into Else Part');

        res.send(foundMovies);
    }
  } catch (err) {
    console.log(err);
  }
};


export const searchMoviesById = async (req: any, res: any) => {
    try {
      let movie:any = req.params;
      console.log('PArams ', movie);
      const foundMovies = await Movie.find({ imdbID: movie["imdbID"] }).limit(1);
      if (foundMovies.length === 0) {
        console.log('Entered');
        const newMovie = await axios.get(`http://www.omdbapi.com/?i=${movie['imdbID']}&apikey=87e6d137`);
        const addMovie = await Movie.create(newMovie.data);
        console.log('New Movie ', newMovie.data);
        console.log('Add Movies ', addMovie);
        res.send(addMovie)
      }else{
        console.log('Entered into Else Part');

        res.send(foundMovies);
    }
    } catch (err) {
      console.log(err);
    }
  };


export const addMovies = async (req: any, res: any) => {
  try {
    const newMovie = await Movie.create(req.body);
    res.json({
      data: {
        movie: newMovie,
      },
    });
    res.send(newMovie);
    res.status(200).json({
      message: 'Successful',
    });
  } catch (err) {
    res.send(err);
  }
};
