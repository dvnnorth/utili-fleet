'use strict';
const faker = require('faker');

let claims = [];

for (let i = 0; i < 50; i++) {
  claims.push({
    insuranceCompany: faker.company.companyName(),
    claimNumber: faker.random.number({min:100, max:500}),
    adjusterName: faker.name.findName(),
    adjusterEmail: faker.internet.email(),
    estimate: faker.random.number({min:1, max:49}),
    finalCost: faker.random.number({min:1, max:49}),
    openClosed: faker.random.boolean(),
    status: faker.lorem.word(),
    vehicleId: faker.random.number({min:1, max:50})
  });
}
console.log(claims[0]);

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
   return queryInterface.bulkInsert('Claims', claims, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Claims', null, {});
  }
};
