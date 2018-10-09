'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Damages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Section: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ClaimId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Claims',
          key: 'id'
        }
      },
      VehicleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Vehicles',
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
    return queryInterface.dropTable('Damages');
  }
};