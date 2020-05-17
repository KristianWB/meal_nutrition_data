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
      kiloJoule: 'kJ',
      fat: 'grams',
      carbohydrate: '',
      fiber: '',
      protein: ''
    };

    // Bindings
    this.handleChangeWeight = this.handleChangeWeight.bind(this);
    this.handleChangeKiloCalories = this.handleChangeKiloCalories.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);    
    this.handleChangeKiloJoule = this.handleChangeKiloJoule.bind(this);
    this.handleChangeFat = this.handleChangeFat.bind(this);
    this.handleChangeCarbohydrate = this.handleChangeCarbohydrate.bind(this);
    this.handleChangeFiber = this.handleChangeFiber.bind(this);
    this.handleChangeProtein = this.handleChangeProtein.bind(this);


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
  handleChangeFat(event) {
    this.setState({fat: event.target.value});
  }
  handleChangeCarbohydrate(event) {
    this.setState({carbohydrate: event.target.value});        
}
handleChangeFiber(event) {
  this.setState({fiber: event.target.value});        
}
handleChangeProtein(event) {
  this.setState({protein: event.target.value});        
}

  
  handleSubmit(event) {
    alert('Data was submitted: ' + this.state.weight + this.state.kiloCalories + this.state.price + this.state.kiloJoule + this.state.fat);
    event.preventDefault();
  }

  //Rendering the html code for page
  render() {
    return (
      <form className='recipe_data' onSubmit={this.handleSubmit}>
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
        <label>
          Fat
          <input type="text" value={this.state.fat} onChange={this.handleChangeFat} />
        </label>
        <label>
          Carbohydrates
          <input type="text" value={this.state.carbohydrate} onChange={this.handleChangeCarbohydrate} />
        </label>
        <label>
          Fibers
          <input type="text" value={this.state.fiber} onChange={this.handleChangeFiber} />
        </label>
        <label>
          Proteins
          <input type="text" value={this.state.protein} onChange={this.handleChangeProtein} />
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
