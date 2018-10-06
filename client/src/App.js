import React, { Component } from 'react';
<<<<<<< HEAD
import ScannerDiv from "./components/Scanner"
=======
import SignUp from './components/SignUp';
import axios from 'axios';
//import API from './utils/API';

>>>>>>> 477a4aa54d003e88285a187aa41ef733ebafac0f

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
      <ScannerDiv/>
=======
      <div className="App">
        <h1>Hello World!</h1>
        <SignUp clicked={this.formPost} handleInputChange={this.handleInputChange}/>
      </div>
>>>>>>> 477a4aa54d003e88285a187aa41ef733ebafac0f
    );
  
  }
}

export default App;
