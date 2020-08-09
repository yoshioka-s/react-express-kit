import express from 'express'
import api from './api'
const app = express()
const port = 8080

app.use('/api', api)

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
})
