import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Team from './Team';
import History from './History';
function App() {
  return (
    <>
      <nav>
        <Link to='/'>Home</Link>{'  '}
        <Link to='/about'>About</Link>{'  '}
        <Link to='/contact'>Contact</Link>{'  '}
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/about' element={<About />} >
          <Route path='team' element={<Team />} />
          <Route path='history' element={<History />} />
        </Route> //neated Router//

        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
