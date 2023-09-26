import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import CurrentLanguageProvider from './providers/CurrentLanguageProvider.jsx'
import CurrentChessboardProvider from './providers/CurrentChessboardStateProvider.jsx'
import CurrentChessboardHighlightedProvider from './providers/CurrentChessboardHighlightedProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CurrentLanguageProvider>
      <CurrentChessboardProvider>
        <CurrentChessboardHighlightedProvider>
          <Router>
            <App />
          </Router>
        </CurrentChessboardHighlightedProvider>
      </CurrentChessboardProvider>
    </CurrentLanguageProvider>
  </React.StrictMode>
)
