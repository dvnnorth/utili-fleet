import axios from 'axios';

export default {
  addEmployee: function (data) {
    return axios.post('/register', data);
  }

};