const request = require('supertest');
const app = require('../app'); 

describe('GET /test', () => {
  it('backend should be working', async () => {
    const response = await request(app).get('/test');
    expect(response.status).toBe(200);
    expect(response.text).toBe('working');
    expect(response.header['content-type']).toMatch(/text\/html/);
  });
});