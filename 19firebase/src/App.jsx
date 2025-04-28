import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Firebase from './Firebase'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Firebase />
    </>
  )
}

export default App
