import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ModeContextProvider } from './context/mode-context.js'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ModeContextProvider>
      <App />
      <ToastContainer position="top-center" theme="colored" autoClose={1000} />
    </ModeContextProvider>
  </StrictMode>,
)
