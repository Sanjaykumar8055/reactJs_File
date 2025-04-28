import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Inlinecss from './Inlinecss'
import Internalcss from './Internalcss'
import Modulcss from './Modulcss'

function App() {

  return (
    <>
     <Inlinecss />
     <Internalcss />
     <Modulcss />
    </>
  )
}

export default App
