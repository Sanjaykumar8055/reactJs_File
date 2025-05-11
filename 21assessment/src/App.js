import { useState } from 'react';
import './App.css';
import Appcontext from './react-context';
import Loging from './Loging';

function App() {
  const [dark, SetDark] = useState()
  return (
    <Appcontext.Provider value={{ dark, SetDark }}>
      <Loging />
    </Appcontext.Provider>
  );
}

export default App;
