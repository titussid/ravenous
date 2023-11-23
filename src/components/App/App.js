import React from 'react'
import logo from './../../logo.png'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <NavBar />
    </div>
  )
}

const NavBar = () => {
  return (
    <ul>
      <li>
        <a href="#" id="x1">
          Books
        </a>
      </li>
      <li>
        <a href="#" id="x2">
          Food
        </a>
      </li>
      <li>
        <a href="#" id="x3">
          Games
        </a>
      </li>
      <li>
        <a href="#" id="x4">
          Sports
        </a>
      </li>
    </ul>
  )
}

export default App
