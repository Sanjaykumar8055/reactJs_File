import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contect from './Contect'
import Naviget from './Naviget'
function App() {
  return (
    <>
      <nav style={{}}>
        <Link to='/'>Home</Link>  <span> </span>
        <Link to='/about'>about</Link><span> </span>
        <Link to='/contact'>contact</Link>
        <Link to= '/navigate'>Naviget Hooks</Link>
      </nav>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/contact'element={<Contect/>}/>
        <Route path='/navigate' element={<Naviget />} />
      </Routes>
    </>
  )
}

export default App
