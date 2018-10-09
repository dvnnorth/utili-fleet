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
      EmployeeNumber: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      JobTitle: {
        type: Sequelize.STRING,
        allowNull: false
      },
      MVRCheckDate: {
        type: Sequelize.DATE
      },
      CanDrive: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      DriverId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Drivers',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Employees');
  }
};