import { Route, Routes } from 'react-router-dom'
import './App.css'
import Jsoncrud from './Jsoncrud'
import Showdata from './Showdata'
function App() {

    return (
    <>
     <Routes>
     <Route path='/' element={<Jsoncrud />} />
      <Route path='/showdata' element={<Showdata />} />
     </Routes>
    </>
  )
}

export default App
