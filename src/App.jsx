import { useState } from 'react'
import './App.css'
import FlipCard from './FlipCard'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <FlipCard/>
   </>
  )
}

export default App