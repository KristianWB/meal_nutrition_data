import React, { Component} from 'react';
// import logo2 from './media/logo2.jpg';
import './App.css';
//import TableApp from './props/TableApp';
import Calculator from './props/Calculator'
import Footer from './props/Footer'
import Header from './props/Header'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {   
    };
  }

  render() {
    return(
      <div className="App">
        
        <div>
          <Header/>
        </div>
      
        <div className="App-form">
          <Calculator/>

        </div>

        <div>
          <Footer/>
        </div>
        
      </div>
    );
  }
}

export default App;
