import express from 'express'
const router = express.Router()

router.get('/greet', (req, res) => {
  return res.json('hello world')
})

export default router