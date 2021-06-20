"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMovies = exports.searchMoviesById = exports.searchMovies = exports.MovieList = void 0;
var movie_modal_1 = __importDefault(require("../Model/movie-modal"));
var axios_1 = __importDefault(require("axios"));
var MovieList = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var movie, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, movie_modal_1.default.find({}).sort({ imdbRating: 'desc' }).limit(5)];
            case 1:
                movie = _a.sent();
                res.send(movie);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                res.send(err_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.MovieList = MovieList;
var searchMovies = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var movie, foundMovies, newMovie, addMovie, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 7]);
                movie = req.params;
                console.log('PArams ', movie);
                return [4 /*yield*/, movie_modal_1.default.find({ Title: movie["movie"] })];
            case 1:
                foundMovies = _a.sent();
                console.log('Entered into Else Part', foundMovies);
                if (!(foundMovies.length === 0)) return [3 /*break*/, 4];
                console.log('Entered');
                return [4 /*yield*/, axios_1.default.get("http://www.omdbapi.com/?s=" + movie['movie'] + "&apikey=87e6d137")];
            case 2:
                newMovie = _a.sent();
                return [4 /*yield*/, movie_modal_1.default.create(newMovie.data.Search)];
            case 3:
                addMovie = _a.sent();
                console.log('New Movie ', newMovie.data);
                console.log('Add Movies ', addMovie);
                res.send(addMovie);
                return [3 /*break*/, 5];
            case 4:
                console.log('Entered into Else Part');
                res.send(foundMovies);
                _a.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                err_2 = _a.sent();
                console.log(err_2);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.searchMovies = searchMovies;
var searchMoviesById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var movie, foundMovies, newMovie, addMovie, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 7]);
                movie = req.params;
                console.log('PArams ', movie);
                return [4 /*yield*/, movie_modal_1.default.find({ imdbID: movie["imdbID"] }).limit(1)];
            case 1:
                foundMovies = _a.sent();
                if (!(foundMovies.length === 0)) return [3 /*break*/, 4];
                console.log('Entered');
                return [4 /*yield*/, axios_1.default.get("http://www.omdbapi.com/?i=" + movie['imdbID'] + "&apikey=87e6d137")];
            case 2:
                newMovie = _a.sent();
                return [4 /*yield*/, movie_modal_1.default.create(newMovie.data)];
            case 3:
                addMovie = _a.sent();
                console.log('New Movie ', newMovie.data);
                console.log('Add Movies ', addMovie);
                res.send(addMovie);
                return [3 /*break*/, 5];
            case 4:
                console.log('Entered into Else Part');
                res.send(foundMovies);
                _a.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                err_3 = _a.sent();
                console.log(err_3);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.searchMoviesById = searchMoviesById;
var addMovies = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newMovie, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, movie_modal_1.default.create(req.body)];
            case 1:
                newMovie = _a.sent();
                res.json({
                    data: {
                        movie: newMovie,
                    },
                });
                res.send(newMovie);
                res.status(200).json({
                    message: 'Successful',
                });
                return [3 /*break*/, 3];
            case 2:
                err_4 = _a.sent();
                res.send(err_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addMovies = addMovies;
