// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import AppWithHttpRequest from './AppWithHttpRequest.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // <App />
    <AppWithHttpRequest />
  // </StrictMode>,
)
