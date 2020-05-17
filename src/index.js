import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// building the Form element 
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: 'grams',
      kiloCalories: 'kCal',
      price: 'DKK',
      kiloJoule: 'kJ'
    };

    // Bindings
    this.handleChangeWeight = this.handleChangeWeight.bind(this);
    this.handleChangeKiloCalories = this.handleChangeKiloCalories.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);    
    this.handleChangeKiloJoule = this.handleChangeKiloJoule.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

    // Methods for handling the submissions
  handleChangeWeight(event) {
        this.setState({weight: event.target.value});        
  }
  handleChangeKiloCalories(event) {
    this.setState({kiloCalories: event.target.value});        
  }
  handleChangePrice(event) {
    this.setState({price: event.target.value});        
  }
  handleChangeKiloJoule(event) {
    this.setState({kiloJoule: event.target.value});
  }

  
  handleSubmit(event) {
    alert('Data was submitted: ' + this.state.weight + this.state.kiloCalories + this.state.price + this.state.kiloJoule);
    event.preventDefault();
  }

  render() {
    return (
      <form class='ingridiens_data' onSubmit={this.handleSubmit}>
        <label>
          Weight
          <input type="text" value={this.state.weight} onChange={this.handleChangeWeight} />
        </label>
        <label>
          kiloCalories
          <input type="text" value={this.state.kiloCalories} onChange={this.handleChangeKiloCalories} /> 
        </label>
        <label>
          Price
          <input type="text" value={this.state.price} onChange={this.handleChangePrice} />
        </label>
        <label>
          kiloJoule
          <input type="text" value={this.state.kiloJoule} onChange={this.handleChangeKiloJoule} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  
  <NameForm />,  
  document.getElementById('form')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
