import "regenerator-runtime/runtime.js"
import request from 'supertest'
import app from '../../app'

describe('The greet', () => {
  it('successes', async () => {
    const res = await request(app).get('/api/greet')
    expect(res.statusCode).toBe(200)
  })
  it('returns "hello world"', async () => {
    const res = await request(app).get('/api/greet')
    expect(res.body).toBe('hello world')
  })
})
