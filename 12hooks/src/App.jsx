import { createContext } from 'react'
import './App.css'
import Usecontext from './Usecontext'

export const UserContext = createContext()  /// first create Context and export;

function App() {
  const user = {
    name: 'sanju',
    age: 21,
  }
  return (
    <>
      <UserContext.Provider value={user}>   {/* //create Context.Provider and pass value for child cpmponent that value is access in child componente// */}
        <Usecontext />
      </UserContext.Provider>
    </>
  )
}

export default App
