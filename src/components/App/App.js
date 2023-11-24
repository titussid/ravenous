import React, { useState } from 'react'
import logo from './../../logo.png'
import './App.css'
import Food from './../Food/Food'
import Books from './../Book/Book'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Navigation />
    </div>
  )
}
const Home = () => <div>Home Component</div>
const Games = () => <div>Games Component</div>
const Sports = () => <div>Sports Component</div>
const list = ['Home', 'Books', 'Food', 'Games', 'Sports']

const Navigation = () => {
  const [selectedNavItem, setSelectedNavItem] = useState('Books')

  const renderComponent = () => {
    switch (selectedNavItem) {
      case 'Home':
        return <Home />
      case 'Books':
        return <Books />
      case 'Food':
        return <Food />
      case 'Games':
        return <Games />
      case 'Sports':
        return <Sports />
      default:
        return null
    }
  }

  return (
    <>
      <nav>
        <ul>
          {list.map((item) => (
            <li key={item} onClick={() => setSelectedNavItem(item)}>
              <a href="#" id={item}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div>{renderComponent()}</div>
    </>
  )
}

export default App
