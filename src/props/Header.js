import React from 'react'
import logo2 from '../media/logo2.jpg'

function Header() {
    return (
        <header className="App-header">
            <h1>Welcome to the nutrition calculater project</h1>
            <h2>A better life for a better world</h2>
            <h3>Scroll down to type in data and calculate values</h3>
          <img src={logo2} className="App-logo2" alt="logo2" />       
        </header>
    )
}

export default Header;
