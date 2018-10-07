import React, { Component } from 'react';
<<<<<<< HEAD
=======
import ScannerDiv from "./components/Scanner"
>>>>>>> 1570cf3680c24fc1bdb3aebe6b9686d183ec8365
import SignUp from './components/SignUp';
import axios from 'axios';
import API from './utils/API';

<<<<<<< HEAD
import ScannerDiv from "./components/Scanner"
=======
>>>>>>> 1570cf3680c24fc1bdb3aebe6b9686d183ec8365

class App extends Component {
  state = { 
    isAuthenticated: false,
    username:'' ,
    email: '',
    password: '',
    user_id: ''
  }

  login = () => {
    API.login (this.state.username, this.state.password);
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
      <React.Fragment>
        <div className="App">
          <h1>Hello World!</h1>
          <SignUp clicked={this.formPost} handleInputChange={this.handleInputChange} />
        </div>
        <ScannerDiv />
      </React.Fragment>
=======
      <div className="App">
        <h1>Hello World!</h1>
        <SignUp clicked={this.formPost} handleInputChange={this.handleInputChange} />
        <ScannerDiv />
      </div>
>>>>>>> 1570cf3680c24fc1bdb3aebe6b9686d183ec8365
    );

  }
}

export default App;
