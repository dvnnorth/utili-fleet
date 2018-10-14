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
    return axios.get("/api/vehicles");
  },
  getAllVehiclesByVIN: (VIN) => {
    return axios.get(`/api/vehicle/${VIN}`);
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
      DepreciationRateYearly: data.DepreciationRateYearly,
      TollTagSerial: data.TollTagSerial
    };
    return axios.post("/api/vehicles", vehicleData);
  },

  updateVehicles: (data) => {
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
      DepreciationRateYearly: data.DepreciationRateYearly,
      TollTagSerial: data.TollTagSerial
    };
    return (axios.put(`/api/vehicle/${data.id}`, vehicleData));
  },

  deleteVehicles: (id) => {
    return (axios.delete(`/api/vehicle/${id}`));

  },

  /////////////////////////// Vehicles/////////////////////////

   /////////////////////////// Drivers /////////////////////////

  getAllDrivers: () => {
    return axios.get("/api/drivers");
  },
  getAllDriversByVIN: (VIN) => {
    return axios.get(`/api/driver/${VIN}`);
  },
  postDrivers: (data) => {
    const driverData = {
      LastName: data.LastName,
      FirstName: data.FirstName,
      Address1: data.Address1,
      Address2: data.Address2,
      City: data.City,
      State: data.State,
      Zip: data.Zip,
      Telephone: data.Telephone,
      DOB: data.DOB,
      DriversLicence: data.DriversLicence,
      DriversLicenseExpiration: data.DriversLicenseExpiration,
      Email: data.Email
    };
    return axios.post("/api/drivers", driverData);
  },

  updateDrivers: (data) => {
    const driverData = {
      LastName: data.LastName,
      FirstName: data.FirstName,
      Address1: data.Address1,
      Address2: data.Address2,
      City: data.City,
      State: data.State,
      Zip: data.Zip,
      Telephone: data.Telephone,
      DOB: data.DOB,
      DriversLicence: data.DriversLicence,
      DriversLicenseExpiration: data.DriversLicenseExpiration,
      Email: data.Email
    };
    return (axios.put(`/api/driver/${data.id}`, driverData));
  },

  deleteDrivers: (id) => {
    return (axios.delete(`/api/driver/${id}`));

  },

  /////////////////////////// Drivers/////////////////////////

   /////////////////////////// Employees /////////////////////////

   getAllEmployees: () => {
    return axios.get("/api/employees");
  },
  getAllEmployeesByVIN: (VIN) => {
    return axios.get(`/api/employee/${VIN}`);
  },
  postEmployees: (data) => {
    const employeeData = {
      EmployeeNumber: data.EmployeeNumber,
      JobTitle: data.JobTitle,
      MVRCheckDate: data.MVRCheckDate,
      CanDrive: data.CanDrive
    };
    return axios.post("/api/employees", employeeData);
  },

  updateEmployees: (data) => {
    const employeeData = {
      EmployeeNumber: data.EmployeeNumber,
      JobTitle: data.JobTitle,
      MVRCheckDate: data.MVRCheckDate,
      CanDrive: data.CanDrive
    };
    return (axios.put(`/api/employee/${data.id}`, employeeData));
  },

  deleteEmployees: (id) => {
    return (axios.delete(`/api/employee/${id}`));

  }

  ///////////////////////////Employees/////////////////////////

};

