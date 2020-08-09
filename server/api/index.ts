import express from 'express'
const router = express.Router()

router.get('/greet', (req, res) => {
  return res.send('hello world')
})

export default router
