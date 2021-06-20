"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var movieSchema = new mongoose_1.default.Schema({
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
    imdbRating: {
        type: String
    }
});
var Movie = mongoose_1.default.model('movie', movieSchema);
exports.default = Movie;
