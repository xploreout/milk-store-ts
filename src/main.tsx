import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Router } from 'react-router-dom'
import App from './App'
import MilksProvider from './context/milksContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <MilksProvider>
        <App />
      </MilksProvider>
    </BrowserRouter>
  </React.StrictMode>
)
