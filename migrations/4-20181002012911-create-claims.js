'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Claims', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      InsuranceCompany: {
        type: Sequelize.STRING,
        allowNull: false,
        len: [1, 50]
      },
      ClaimNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
        len: [1, 50]
      },
      AdjusterName: {
        type: Sequelize.STRING,
        allowNull: false,
        len: [1, 50]
      },
      AdjusterEmail: {
        type: Sequelize.STRING,
        allowNull: false,
        len: [1, 50],
        validate: {
          len: {
            args: [6, 128],
            msg: "Email address must be between 6 and 128 characters in length"
          },
          isEmail: {
            msg: "Email address must be valid"
          }
        }
      },
      Estimate: {
        type: Sequelize.INTEGER,
        allowNull: false,
        len: [1, 50]
      },
      FinalCost: {
        type: Sequelize.INTEGER,
        allowNull: false,
        len: [1, 50]
      },
      OpenClosed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      Status: {
        type: Sequelize.STRING,
        allowNull: false,
        len: [1, 50]
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
      },
      VehicleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Vehicles',
          key: 'id',
          onDelete: 'CASCADE'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Claims');
  }
};