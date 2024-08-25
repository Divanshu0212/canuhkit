import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='font-bold bg-black text-white p-5'>Hello World</div>
    </>
  )
}

export default App
