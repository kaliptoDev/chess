import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import CurrentLanguageProvider from './providers/CurrentLanguageProvider.jsx'
import CurrentChessboardProvider from './providers/CurrentChessboardStateProvider.jsx'
// import CurrentChessboardHighlightedBlackProvider from './providers/CurrentChessboardHighlightedBlackProvider.jsx'
import CurrentChessboardHighlightedWhiteProvider from './providers/CurrentChessboardHighlightedWhiteProvider.jsx'
import CurrentSelectedPieceProvider from './providers/CurrentSelectedPieceProvider.jsx'
import CurrentColorProvider from './providers/CurrentColorProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CurrentLanguageProvider>
      <CurrentChessboardProvider>
        <CurrentChessboardHighlightedWhiteProvider >
          {/* <CurrentChessboardHighlightedBlackProvider> */}
            <CurrentSelectedPieceProvider>
              <CurrentColorProvider>
                <Router>
                  <App />
                </Router>
              </CurrentColorProvider>
            </CurrentSelectedPieceProvider>
          {/* </CurrentChessboardHighlightedBlackProvider> */}
        </CurrentChessboardHighlightedWhiteProvider>
      </CurrentChessboardProvider>
    </CurrentLanguageProvider>
  </React.StrictMode>
)
