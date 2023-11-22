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
          X1
        </a>
      </li>
      <li>
        <a href="#" id="x2">
          X2
        </a>
      </li>
      <li>
        <a href="#" id="x3">
          X3
        </a>
      </li>
      <li>
        <a href="#" id="x4">
          X4
        </a>
      </li>
    </ul>
  )
}

export default App
