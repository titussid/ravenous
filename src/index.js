import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/App/App'
import Food from './components/Food/Food'
import Book from './components/Book/Book'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
    <Book />
    {/* <Food /> */}
  </React.StrictMode>
)
