import React, { Component } from 'react';
<<<<<<< HEAD
import ScannerDiv from "./components/Scanner"
=======
>>>>>>> 2c1d7f4d84e913d0c4257dd1ac5998ac77425ff9
import SignUp from './components/SignUp';
import axios from 'axios';
//import API from './utils/API';

<<<<<<< HEAD
=======
import ScannerDiv from "./components/Scanner"
>>>>>>> 2c1d7f4d84e913d0c4257dd1ac5998ac77425ff9

class App extends Component {
  state = {
    username: '',
    email: '',
    password: ''
  }


  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });




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
        <SignUp clicked={this.formPost} handleInputChange={this.handleInputChange} />
        <ScannerDiv />
      </div>
=======
      <React.Fragment>
        <div className="App">
          <h1>Hello World!</h1>
          <SignUp clicked={this.formPost} handleInputChange={this.handleInputChange} />
        </div>
        <ScannerDiv />
      </React.Fragment>
>>>>>>> 2c1d7f4d84e913d0c4257dd1ac5998ac77425ff9
    );

  }
}

export default App;
