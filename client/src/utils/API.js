import axios from "axios";

export default {
  register: function (data) {
    return axios.post("/register", data).then(res => {
      console.log(res);
    });
  },
  login: data => {
    return axios.post("/api/login", data);
  },
  logout: function () {
    return axios.get("/logout");
  },
  getAllVehicles: function () {
    return axios.get("/api/vehicles");
  },
  getVehicle: data => {
    return axios.post("/api/vehicle", data);
  },
  getUser: () => {
    return axios.get("/api/user");
  }
};
