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
      insuranceCompany: {
        type: Sequelize.STRING,
        allowNull: false,
        len: [1, 50]
      },
      claimNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
        len: [1, 50]
      },
      adjusterName: {
        type: Sequelize.STRING,
        allowNull: false,
        len: [1, 50]
      },
      adjusterEmail: {
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
      estimate: {
        type: Sequelize.INTEGER,
        allowNull: false,
        len: [1, 50]
      },
      finalCost: {
        type: Sequelize.INTEGER,
        allowNull: false,
        len: [1, 50]
      },
      openClosed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
        len: [1, 50]
      },
      vehicleId: {
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
    return queryInterface.dropTable('Claims');
  }
};