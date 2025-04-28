import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import Userstore from './redux/Userstore.js'

createRoot(document.getElementById('root')).render(
  <Provider store={Userstore}>
    <App />
  </Provider>
  
)
