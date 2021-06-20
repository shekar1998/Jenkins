"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var movie_controller_1 = require("../Controller/movie-controller");
var router = express_1.default.Router();
router.get('/', movie_controller_1.MovieList).get('/search/:movie', movie_controller_1.searchMovies).get('/:imdbID', movie_controller_1.searchMoviesById);
exports.default = router;
