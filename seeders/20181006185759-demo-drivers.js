'use strict';

const faker = require('faker');

let drivers = [];

for (let i = 0; i < 5000; i++) {
  drivers.push({
    LastName: faker.name.lastName(),
    FirstName: faker.name.firstName(),
    Address1: faker.address.streetAddress("###"),
    Address2: faker.address.secondaryAddress(),
    City: faker.address.city(),
    State: faker.address.state(),
    Zip: faker.address.zipCode(),
    Telephone: faker.phone.phoneNumberFormat(2),
    DOB: faker.date.past(),
    DriversLicense: faker.random.number({ min: 10000000, max: 99999999 }).toString(),
    DriversLicenseExpiration: faker.date.future(),
    Email: faker.internet.email()
  });
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Drivers', drivers, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

    return queryInterface.bulkDelete('Drivers', null, {});
  }
};
