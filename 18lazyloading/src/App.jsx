import React, { Suspense } from 'react'
import './App.css'
// import Home from './Home'
const Home = React.lazy(()=>import('./Home'))
function App() {
 

  return (
    <>
    <Suspense fallback = {'loading'}>
   <Home />
   </Suspense>
    </>
  )
}

export default App
