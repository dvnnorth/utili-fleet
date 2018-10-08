'use strict';

const faker = require('faker');

let employees = [];

for (let i = 0; i < 50; i++) {
  employees.push({
    employeeNumber: faker.random.number({min:100, max:999}),
    jobTitle: faker.name.jobTitle(),
    mvrCheckDate: faker.date.recent(),
    canDrive: faker.random.boolean(),
    driverId: faker.random.number({min:1, max:49})
  });
}
console.log(employees[0]);

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
