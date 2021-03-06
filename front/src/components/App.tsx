import React, { ReactElement, useState, useEffect } from 'react'
import axios from 'axios'

const App: React.FC = (): ReactElement => {
  const [greet, setGreet] = useState('')
  useEffect(() => {
    async function getGreet() {
      const res = await axios.get('/api/greet')
      setGreet(res.data)
    }
    getGreet()
  })
  return (
    <div>
      <h1>Aisatsu</h1>
      <p>{greet}</p>
    </div>
  )
}

export default App
