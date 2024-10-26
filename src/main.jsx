import React , {useContext} from 'react'
import ReactDOM from 'react-dom/client'
// context
import { AppContext } from "./context/AppContext";
// app
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContext>
      <App />
    </AppContext>
  </React.StrictMode>,
)
