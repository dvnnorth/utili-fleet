'use strict';

const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let employees = [];

    for (let i = 0; i < 50; i++) {
      employees.push({
        EmployeeNumber: faker.random.number({ min: 100, max: 999 }),
        JobTitle: faker.name.jobTitle(),
        MVRCheckDate: faker.date.recent(),
        CanDrive: faker.random.boolean(),
        DriverId: faker.random.number({ min: 1, max: 49 }),
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW')
      });
    }
    
    return queryInterface.bulkInsert('Employees', employees, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Employees', null, {});
  }
};
