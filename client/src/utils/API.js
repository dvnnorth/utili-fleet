/*
import axios from 'axios';

export default {
  register: function (data) {
    return axios.post('/register', {
      username: this.state.username,
      password: this.state.password
    }).then(res => {
      console.log(res);
    });
  },
  login: function (username, password) {
    return axios.post('/signin',{
      username: username,
      password: password
    }).then(res => {
      console.log(res);
      res.json(res);
      this.setState({isAuthenticated: true});
    });
  },
  logout: function () {
    return axios.get('/logout');
  },


  getAllVehicles: function () {
    return axios.get('/api/vehicles')
  }
};

*/