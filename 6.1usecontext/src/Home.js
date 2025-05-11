import React, { useContext } from 'react'
import Cotextdata from './store/context-api'

function Home() {
  const {darkMode,setDarkMode}=useContext(Cotextdata)
  return (
    <div style={{
      backgroundColor: darkMode ? 'black' : '#fff',
      color: darkMode ? '#fff' : '#000',
      padding: '20px',
      minHeight: '100vh'
    }}>
      <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Mode
      </button>
    </div>
  )
}

export default Home