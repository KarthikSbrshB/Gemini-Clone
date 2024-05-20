import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../../gemini-clone/src/App'
import './index.css'
import ContextProvider from '../../gemini-clone/src/context/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>,
)
