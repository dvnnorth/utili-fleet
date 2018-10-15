'use strict';

const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let vehicleData = require('./vehicledata.json');
    vehicleData = vehicleData.map(vehicle => vehicle.Results[0])
      .map((vehicle, i) => ({
        UnitNumber: i,
        VIN: vehicle.VIN,
        ModelYear: vehicle.ModelYear || 1900,
        Make: vehicle.Make,
        Model: vehicle.Model,
        Series: vehicle.Series,
        VehicleType: vehicle.VehicleType,
        BodyClass: vehicle.BodyClass,
        ExteriorColor: Math.round(Math.random()) ? 'Black' : 'White',
        InteriorColor: Math.round(Math.random()) ? 'Black' : 'Tan',
        LicensePlate: faker.random.alphaNumeric(3).toUpperCase() + '-' + faker.random.alphaNumeric(4).toUpperCase(),
        Mileage: faker.random.number({ min: 10, max: 20000 }),
        MaxMileage: 18000,
        NetCost: faker.random.number({ min: 20000, max: 100000 }),
        DepreciationStart: faker.date.recent(),
        DepreciationEnd: faker.date.future(),
        DepreciationRateYearly: faker.random.number({ min: 1000, max: 2500 }),
        TollTagSerial: faker.random.alphaNumeric(10).toUpperCase(),
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW')
      }));
      
    return queryInterface.bulkInsert('Vehicles', vehicleData, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Vehicles', null, {});
  }
};
