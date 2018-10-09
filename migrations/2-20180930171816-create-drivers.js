'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Drivers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      LastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: {
            args: 3,
            msg: 'Last-name must be at least 3 characters in length'
          }
        }
      },
      FirstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: {
            args: 3,
            msg: 'Name must be at least 3 characters in length'
          }
        }
      },
      Address1: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Address2: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      City: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      State: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Zip: {
        type: Sequelize.STRING,
        allowNull: false,
        len: [5, 11]
      },
      Telephone: {
        type: Sequelize.STRING,
        allowNull: false,
        len: [1, 15]
      },
      DOB: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      DriversLicense: {
        type: Sequelize.STRING,
        allowNull: false,
        len: [1, 50]
      },
      DriversLicenseExpiration: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      Email: {
        type: Sequelize.STRING,
        allowNull: false,
        //unique: true,
        validate: {
          len: {
            args: [6, 128],
            msg: 'Email address must be between 6 and 128 characters in length'
          },
          isEmail: {
            msg: 'Email address must be valid'
          }
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
    return queryInterface.dropTable('Drivers');
  }
};