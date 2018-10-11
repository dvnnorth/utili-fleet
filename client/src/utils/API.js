import axios from 'axios';

export default {
  register: function (data) {
    return axios.post('/register', data).then(res => {
      console.log(res);
    });
  },
  login: function (data) {
    return axios.post('/signin', data).then(res => {
      console.log(res);
      res.json(res);
    });
  },
  logout: function () {
    return axios.get('/logout');
  },


  getAllVehicles: function () {
    return axios.get('/api/vehicles')
  }
};

