"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app = require('../app');
var supertest_1 = __importDefault(require("supertest"));
var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemF0aW9uIjoibWFuanVAZ21haWwuY29tIiwiaWF0IjoxNjIzMjk2NDA2LCJleHAiOjE2MjMzMDAwMDZ9.OqSm6dldzNA-cppMvY-CLuJntl_ekzLDPDoh9Qb1kLY';
var movie = { name: 'Avengers End Game', synopsis: 'Marvelous Movie', actors: ['Robert Dowery', '...'] };
beforeAll(function (done) {
    supertest_1.default(app).post('/api/login').send({
        username: 'manju1998',
        password: '1234'
    });
    done();
});
describe('Adding Movies without token, hoping for error', function () {
    it('It should require authorization', function () {
        return supertest_1.default(app)
            .post('/api/addmovie').send(movie)
            .then(function (res) {
            expect(res.status).toBe(401);
        });
    });
    it('It responds with JSON', function () {
        return supertest_1.default(app)
            .post('/api/addmovie').send(movie)
            .set('Authorization', "" + token)
            .then(function (res) {
            expect(res.status).toBe(200);
            expect(res.type).toBe('application/json');
            expect((res.body._id)).not.toBe(null);
        });
    });
});
