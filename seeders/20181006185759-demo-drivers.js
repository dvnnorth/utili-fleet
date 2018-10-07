'use strict';

const faker = require('faker');

let drivers = [];

for (let i = 0; i < 50; i++) {
  drivers.push({
    lastname: faker.name.lastName(),
    firstname: faker.name.firstName(),
    address1: faker.address.secondaryAddress(),
    address2: faker.address.secondaryAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    zip: faker.address.zipCode(),
    telephone: faker.phone.phoneNumber(),
    dob: faker.date.past(),
    drivers_licence: faker.random.number(8),
    drivers_licence_expiration: faker.date.future(),
    email: faker.internet.email()
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
