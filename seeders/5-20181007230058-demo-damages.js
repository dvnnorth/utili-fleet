'use strict';
const faker = require('faker');

let damages = [];

for (let i = 0; i < 50; i++) {
  damages.push({
    section: faker.random.number({min:1, max:21}),
    description: faker.lorem.paragraph(),
    claimId: faker.random.number({min:1, max:51}),
    vehicleId: faker.random.number({min:1, max:51})
  });
}
console.log(damages[0]);

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
   return queryInterface.bulkInsert('Damages', damages, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Damages', null, {});
  }
};
