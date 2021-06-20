import express from 'express';
import { searchMovies, searchMoviesById, MovieList } from '../Controller/movie-controller'
const router = express.Router();

router.get('/', MovieList).get('/search/:movie', searchMovies).get('/:imdbID', searchMoviesById)


export default router;
