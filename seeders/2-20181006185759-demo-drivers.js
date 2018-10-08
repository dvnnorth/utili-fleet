'use strict';

const faker = require('faker');

let drivers = [];

for (let i = 0; i < 50; i++) {
  drivers.push({
    lastname: faker.name.lastName(),
    firstname: faker.name.firstName(),
    address1: faker.address.streetAddress("###"),
    address2: faker.address.secondaryAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    zip: faker.address.zipCode(),
    telephone: faker.phone.phoneNumberFormat(2),
    dob: faker.date.past(),
    drivers_licence: faker.random.number({ min: 10000000, max: 99999999 }).toString(),
    drivers_licence_expiration: faker.date.future(),
    email: faker.internet.email()
  });
  console.log(`${i} ==================== \n`, drivers[i]);
}
console.log(drivers[0]);

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
