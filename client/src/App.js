import React, { Component } from 'react';
import SignUp from './components/SignUp';
import axios from 'axios';
//import API from './utils/API';


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
    
    console.log('STATE AT AXIOS POST: ', this.state.value);
    axios.post('/register', this.state);
  };

  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <SignUp clicked={this.formPost} handleInputChange={this.handleInputChange}/>
      </div>
    );
  
  }
}

export default App;
