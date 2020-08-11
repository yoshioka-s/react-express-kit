import "regenerator-runtime/runtime.js"
// import request from 'supertest'
const request = require('supertest')
import app from '../../app'

describe('The greet', () => {
  it('returns hello', async () => {
    const res = await request(app).get('/api/greet')
    expect(res.statusCode).toBe(200)
    console.log(res);
    expect(res.body).toBe('hello world')
  })
})
