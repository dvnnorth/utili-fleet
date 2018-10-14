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
  addVehicle: function (data) {
    console.log(data);
    return axios.post("/api/vehicles", data);
  }
};
