'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let claims = [];

    for (let i = 0; i < 50; i++) {
      claims.push({
        InsuranceCompany: faker.company.companyName(),
        ClaimNumber: faker.random.number({ min: 100, max: 500 }),
        AdjusterName: faker.name.findName(),
        AdjusterEmail: faker.internet.email(),
        Estimate: faker.random.number({ min: 1, max: 49 }),
        FinalCost: faker.random.number({ min: 1, max: 49 }),
        OpenClosed: faker.random.boolean(),
        Status: faker.lorem.word(),
        VehicleId: faker.random.number({ min: 1, max: 50 }),
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW')
      });
    }

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
