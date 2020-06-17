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

  //Methods for handling the submissions (Binding)
    this.handleMass = this.handleMass.bind(this);
    this.handleCarbohydrate = this.handleCarbohydrate.bind(this);
    this.handleProtein = this.handleProtein.bind(this);
    this.handleFat = this.handleFat.bind(this);


    //Methods for handling the submissions (Binding)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

//Methods for handling the submissions (Calculation and storing)
  handleMass(event) {
      this.setState({mass: event.target.value});
  }

  handleCarbohydrate(event) {
    let xCarbohydrate = event.target.value * 4.1;
    this.setState({carbohydrate: xCarbohydrate})
  }

  handleProtein(event) {
    let xProtein = event.target.value * 4.1;
    this.setState({protein: xProtein});
  }

  handleFat(event) {
    let xFat = event.target.value * 9.1;
    this.setState({fat: xFat});
  }

  handleSubmit(event) {
    let xTotal = this.state.carbohydrate + this.state.protein + this.state.fat;
    this.setState({total: xTotal});

    alert(
      'the mass of the meal in grams is: ' + this.state.mass + '\n' +
      'the Carbohydrate content of the meal in kCal is: ' + this.state.carbohydrate + '\n' +
      'the Protein content of the meal in kCal is: ' + this.state.protein + '\n' +
      'the fat of the meal in kCal is: ' + this.state.fat + '\n' +
      'the total kCal value of the meal is: ' + this.state.total
    );

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
              Type in the amount in grams
              <input type="number" value={this.value} onChange={this.handleMass}/>
            </label>

            {/*<!-- Typing in the amount of carbohydrates in grams -->*/}
            <label>
              Type in the amount of carbohydrates in grams pr 100g
              <input type="number" value={this.value} onChange={this.handleCarbohydrate}/>
            </label>

            {/*<!-- Typing in the amount of proteins in grams -->*/}
            <label>
              Type in the amount of proteins in grams pr. 100g
              <input type="number" value={this.value} onChange={this.handleProtein}/>
            </label>

            {/*<!-- Typing in the amount of fat in grams -->*/}
            <label>
              Type in the amount of fat in grams pr. 100g
              <input type="number" value={this.value} onChange={this.handleFat}/>
            </label>
            
            {/*<!-- Submitting the values -->*/}
            <input type="submit" value="Submit"/>
              
          </form>

          {/*<!-- Setting up the fill in form  --> */}
          <table>
            {/*<!-- Typing in the amount of food in grams -->*/}
            <label>
              Total amount in grams
              <input type="number" value={this.value} onChange={this.handleMass}/>
            </label>

            {/*<!-- Typing in the amount of carbohydrates in grams -->*/}
            <label>
              Amount of kCal from carbohydrates in grams pr 100g
              <input type="number" value={this.value} onChange={this.handleCarbohydrate}/>
            </label>

            {/*<!-- Typing in the amount of proteins in grams -->*/}
            <label>
              Amount of kCal from proteins in grams pr. 100g
              <input type="number" value={this.value} onChange={this.handleProtein}/>
            </label>

            {/*<!-- Typing in the amount of fat in grams -->*/}
            <label>
              Amount of KcAL from fat in grams pr. 100g
              <input type="number" value={this.value} onChange={this.handleFat}/>
            </label>
            
            {/*<!-- Submitting the values -->*/}
            <input type="submit" value="Submit"/>
              
          </table>

        </div>

        <footer className="App-footer">
          <p>Created by Kristian Wit Bergqvist - 2020</p>
        </footer>
      </div>
    );
  }
}

export default App;
