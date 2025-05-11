import { useState } from 'react';
import './App.css';
import Home from './Home';
import Cotextdata from './store/context-api';

function App() {
  const [darkMode, setDarkMode] = useState();
  return (
    <Cotextdata.Provider value={{darkMode,setDarkMode}}>
      <Home />
    </Cotextdata.Provider>

  );
}

export default App;
