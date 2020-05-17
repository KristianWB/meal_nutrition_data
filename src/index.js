import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: 'grams',
      kiloCalories: 'kCal'
    };

    this.handleChangeWeight = this.handleChangeWeight.bind(this);
    this.handleChangeKiloCalories = this.handleChangeKiloCalories.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeWeight(event) {
        this.setState({weight: event.target.value});        
  }
  handleChangeKiloCalories(event) {
    this.setState({kiloCalories: event.target.value});        
  }
  handleSubmit(event) {
    alert('Data was submitted: ' + this.state.weight + this.state.kiloCalories);
    event.preventDefault();
  }

  render() {
    return (
      <form class='ingridiens_data' onSubmit={this.handleSubmit}>
        <label>
          Weight
          <input type="text" value={this.state.value} onChange={this.handleChangeWeight} />
        </label>
        <label>
          kiloCalories
          <input type="text" value={this.state.kiloCalories} onChange={this.handleChangeKiloCalories} /> 
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  
    <NameForm />,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
