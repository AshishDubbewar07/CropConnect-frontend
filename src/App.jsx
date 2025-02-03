import { useState } from 'react'

import './App.css'
import Login from './Components/Login'
import "tailwindcss";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Login/>
    </>
  )
}

export default App
