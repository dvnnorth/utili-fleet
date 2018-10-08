'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      employeeNumber: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      jobTitle: {
        type: Sequelize.STRING,
        allowNull: false
      },
      mvrCheckDate: {
        type: Sequelize.DATE
      },
      canDrive: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      driverId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Drivers',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Employees');
  }
};