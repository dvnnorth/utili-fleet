'use strict';

const faker = require('faker');

let drivers = [];

for (let i = 0; i < 50; i++) {
  drivers.push({
    employeeNumber: faker.random.number(3),
    lastname: faker.name.lastName(),
    firstname: faker.name.firstName(),
    address1: faker.address1(),
    address2: faker.address2(),
    city: faker.city(),
    state: faker.state(),
    zip: faker.zip(),
    telephone: faker.telephone(),
    dob: faker.dob(),
    drivers_licence: faker.drivers_licence(),
    drivers_licence_expiration: faker.drivers_licence_expiration(),
    email: faker.email()
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
    return queryInterface.bulkInsert('drivers', drivers, {});
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
