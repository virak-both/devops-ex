// app.test.js
const request = require('supertest');
const app = require('./index');

describe('GET /', () => {
  it('should return Hello, World!', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Hello, World!');
  });
});

describe('GET /user/:id', () => {
  it('should return user object with id', async () => {
    const res = await request(app).get('/user/123');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', '123');
  });
});