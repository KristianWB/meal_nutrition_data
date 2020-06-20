import React, { Component} from 'react';
import logo2 from './media/logo2.jpg';
import './App.css';
//import TableApp from './props/TableApp';
import Calculator from './props/Calculator'

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

    /* alert(
      'the mass of the meal in grams is: ' + this.state.mass + '\n' +
      'the Carbohydrate content of the meal in kCal is: ' + this.state.carbohydrate + '\n' +
      'the Protein content of the meal in kCal is: ' + this.state.protein + '\n' +
      'the fat of the meal in kCal is: ' + this.state.fat + '\n' +
      'the total kCal value of the meal is: ' + this.state.total
    );
    */
    event.preventDefault();
  }  
  

  render() {
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo2} className="App-logo2" alt="logo2" />       
        </header>
      
        <div className="App-form">
          <Calculator/>

        </div>

        <footer className="App-footer">
          <p>Created by Kristian Wit Bergqvist - 2020</p>
        </footer>
      </div>
    );
  }
}

export default App;
