'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let damages = [];

    for (let i = 0; i < 50; i++) {
      damages.push({
        Section: faker.random.number({ min: 1, max: 20 }),
        Description: faker.lorem.sentence(5),
        ClaimId: faker.random.number({ min: 1, max: 50 }),
        VehicleId: faker.random.number({ min: 1, max: 50 }),
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW')
      });
    }
    
    return queryInterface.bulkInsert('Damages', damages);
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
