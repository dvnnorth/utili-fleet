import axios from 'axios';

export default {
  register: function (data) {
    return axios.post('/register', data);
  },
  login: function (data) {
    return axios.post('/signin', data);
  },
  logout: function (data) {
    return axios.post('logout', data);
  }

};