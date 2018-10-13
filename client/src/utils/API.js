import axios from 'axios';

export default {
  /*
  register: function (data) {
    return axios.post('/register', data).then(res => {
      console.log(res);
    });
  },

  login: function (data) {
    return axios.post('/signin', data).then(res => {
      console.log(res);
      res.json(res);
      this.setState({isAuthenticated: true});
    });
  },
  logout: function () {
    return axios.get('/logout');
  },
*/

/////////////////////////// Vehicles /////////////////////////
 

getAllVehicles: () => {
    return (axios.get("/api/vehicles"));
  },
getAllVehiclesByVIN: () => {
    return (axios.get("/api/vehicle/:VIN"));
  },
postVehicles: (data) => {
  const vehicleData = {
    UnitNumber: data.UnitNumber,
    VIN: data.VIN,
    ModelYear: data.ModelYear,
    Make: data.Make,
    Model: data.Model,
    Series: data.Series,
    VehicleType: data.VehicleType,
    BodyClass: data.BodyClass,
    ExteriorColor: data.ExteriorColor,
    InteriorColor: data.InteriorColor,
    LicencePlate: data.LicencePlate,
    Mileage: data.Mileage,
    MaxMileage: data.MaxMileage,
    NetCost: data.NetCost,
    DepreciationStart: data.DepreciationStart,
    DepreciationEnd: data.DepreciationEnd,
    DepreciationRateYearly: DepreciationRateYearly,
    TollTagSerial: data.TollTagSerial
  };
  return (axios.post("/api/vehicles"));
  },

updateVehicles: () => {
  const vehicleData = {
    UnitNumber: data.UnitNumber,
    VIN: data.VIN,
    ModelYear: data.ModelYear,
    Make: data.Make,
    Model: data.Model,
    Series: data.Series,
    VehicleType: data.VehicleType,
    BodyClass: data.BodyClass,
    ExteriorColor: data.ExteriorColor,
    InteriorColor: data.InteriorColor,
    LicencePlate: data.LicencePlate,
    Mileage: data.Mileage,
    MaxMileage: data.MaxMileage,
    NetCost: data.NetCost,
    DepreciationStart: data.DepreciationStart,
    DepreciationEnd: data.DepreciationEnd,
    DepreciationRateYearly: DepreciationRateYearly,
    TollTagSerial: data.TollTagSerial
  };
    return (axios.put("/api/vehicle/:id"));
  },

deleteVehicles: () => {
    return (axios.delete("/api/vehicle/:id"));
    
  }

/////////////////////////// Vehicles/////////////////////////
  
};

