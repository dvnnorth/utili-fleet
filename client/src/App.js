import React, { Component } from 'react';
import SignUp from './components/SignUp';
import axios from 'axios';
//import API from './utils/API';

import ScannerDiv from "./components/Scanner"

class App extends Component {
  state = { 
      username:'' ,
      email: '',
      password: ''
  }


  handleInputChange = (event) => {
    const {name, value} = event.target;
    this.setState({ [name] : value});

    

  
  };
  


  formPost = event => {    
    event.preventDefault();
    
    console.log('STATE AT AXIOS POST: ', this.state);
    axios.post('/register', this.state);
  };

  render() {
    return (
<<<<<<< HEAD
      <div className="App">
        <h1>Hello World!</h1>
        <SignUp clicked={this.formPost} handleInputChange={this.handleInputChange}/>
      </div>
=======
      <ScannerDiv/>
>>>>>>> 3e1818f021add121aceca2501e611f023b41cc71
    );
  
  }
}

export default App;
