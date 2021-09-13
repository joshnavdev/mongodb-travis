const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../src/app');

beforeAll(() => {
  const mongoURI = process.env.MONGO_URI;

  const mongoOptions = {
    autoIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  return mongoose.connect(mongoURI, mongoOptions).then(() => console.log('connected'));
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe('GET /', () => {
  test('return 200', async () => {
    const response = await request(app).get('/');

    expect(response.statusCode).toBe(200);
  });
});
