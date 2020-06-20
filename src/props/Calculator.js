import React from 'react'

function Sum(a, b, c) {

    const temp = parseInt(a) + parseInt(b) + parseInt(c);
    return temp;
  }
  
  function KCalCalculator(a, b, c) {
  
    const temp = parseInt(a) * 4.1 + parseInt(b) * 4.1 + parseInt(c) * 9.1;
    return temp;
  }
  
  
  class Calculator extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        carbohydrateMass: 0,
        proteinMass: 0,
        fatMass: 0,
        totalMass: 0,
        kCal: 0
      };
  
      this.handleCarbohydrateMassChange = this.handleCarbohydrateMassChange.bind(this);
      this.handleProteinMassChange = this.handleProteinMassChange.bind(this);
      this.handleFatMassChange = this.handleFatMassChange.bind(this);
      this.handleMassButton = this.handleMassButton.bind(this);
      this.handleKCalButton = this.handleKCalButton.bind(this);
    }
  
    // Handle functions for directing values in DOM to state
    handleCarbohydrateMassChange(e) {
      this.setState({carbohydrateMass: e.target.value});
    }
  
    handleProteinMassChange(e) {
      this.setState({proteinMass: e.target.value});
    }
  
    handleFatMassChange(e) {
      this.setState({fatMass: e.target.value});
    }
  
    handleMassButton(e) {
      this.setState({totalMass: e.target.value});
    }
  
    handleKCalButton(e) {
      this.setState({kCal: e.target.value});
    }
    
  
    render() {
  
      const carbohydrateMass = this.state.carbohydrateMass;
      const proteinMass = this.state.proteinMass;
      const fatMass = this.state.fatMass;
      const totalMass = this.state.totalMass; 
      const kCal = this.state.kCal;
  
      return (
        <div>
          <fieldset>
            <legend>Enter nutrition values in grams</legend>
            
            <legend>Enter carbohydrate mass</legend>
            <input value={carbohydrateMass}
                  onChange={this.handleCarbohydrateMassChange} />
  
            <legend>Enter mass for Protein</legend>
            <input value={proteinMass}
                  onChange={this.handleProteinMassChange} />
  
            <legend>Enter mass for Fat</legend>
            <input value={fatMass}
                  onChange={this.handleFatMassChange} />
          </fieldset> 
  
          <fieldset>
            <legend>Nutritional calculations {totalMass}</legend>
  
            <legend>Press button to calculate the total mass in grams</legend>
            <button value={Sum(carbohydrateMass, proteinMass, fatMass)} onClick={this.handleMassButton}>Click me to calculate total mass</button>
  
            <legend>The total kiloCalorie is: {kCal} kCal</legend>
            <button value={KCalCalculator(carbohydrateMass, proteinMass, fatMass)} onClick={this.handleKCalButton}>Click me to calculate total kCal</button>
          </fieldset>        
        </div>
      );
  
        /*
        componentDidMount() {
          this.timerID = setInterval(
            () => this.tick(),
            1000
          );
        }
        */
  
    }
  }

  export default Calculator;