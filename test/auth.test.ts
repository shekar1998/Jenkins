const app = require('../app');
import supertest from 'supertest';

let token:any ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemF0aW9uIjoibWFuanVAZ21haWwuY29tIiwiaWF0IjoxNjIzMjk2NDA2LCJleHAiOjE2MjMzMDAwMDZ9.OqSm6dldzNA-cppMvY-CLuJntl_ekzLDPDoh9Qb1kLY';
let movie:any = { name:'Avengers End Game', synopsis:'Marvelous Movie', actors:['Robert Dowery', '...']}

beforeAll((done) => {
  supertest(app).post('/api/login').send({
      username:'manju1998',
      password:'1234'});
  done();
});

describe('Adding Movies without token, hoping for error', () => {
  it('It should require authorization', () => {
    return supertest(app)
    .post('/api/addmovie').send(movie)
      .then((res:any) => {
        expect(res.status).toBe(401);
      });
  });

  it('It responds with JSON', () => {
    return supertest(app)
    .post('/api/addmovie').send(movie)
      .set('Authorization', `${token}`)
      .then((res:any) => {
        expect(res.status).toBe(200);
        expect(res.type).toBe('application/json');
        expect((res.body._id)).not.toBe(null) 
      });
  });
});
