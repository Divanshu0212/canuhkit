import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='font-bold bg-black text-white p-5 m-5'>Hello World</div>
    </>
  )
}

export default App
