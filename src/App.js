// import React from 'react';
import React, { Component } from 'react';
// import logo from './logo.svg';
import logo2 from './media/logo2.jpg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mass: 0,
      carbohydrate: 0,
      protein: 0,
      fat: 0,
      total: 0    
    };

    this.handleMass = this.handleMass.bind(this);



    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleMass(event) {
    let xMass = event.target.value * 4.1;
    this.setState({mass: xMass});
  }

  handleSubmit(event) {
    alert('the mass of the meal in grams is: ' + this.state.mass);
    event.preventDefault();
  }
  

  render() {
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo2} className="App-logo2" alt="logo2" />       
        </header>
      
        <div className="App-form">
          <h1>When you read this then the project has begun</h1>

          {/*<!-- Setting up the fill in form  --> */}
          <form onSubmit={this.handleSubmit}>
            {/*<!-- Typing in the amount of food in grams -->*/}
            <label>
              Amount in grams
              <input type="number" value={this.state.value} onChange={this.handleMass}/>
            </label>

            {/*<!-- Typing in the amount of carbohydrates in grams -->*/}
            <label>
              Amount of carbohydrates in grams pr 100g
              <input type="number" id="carbohydrate" name="carbohydrate"/>
            </label>

            {/*<!-- Typing in the amount of proteins in grams -->*/}
            <label>
              Amount of proteins in grams pr. 100g
              <input type="number" id="protein" name="protein"/>
            </label>

            {/*<!-- Typing in the amount of fat in grams -->*/}
            <label>
              Amount of fat in grams pr. 100g
              <input type="number" id="fat" name="fat"/>
            </label>
            
            {/*<!-- Submitting the values -->*/}
            <input type="submit" value="Submit"/>
              
          </form>

        </div>

        <footer className="App-footer">
          <p>Created by Kristian Wit Bergqvist - 2020</p>
        </footer>
      </div>
    );
  }
}

export default App;
