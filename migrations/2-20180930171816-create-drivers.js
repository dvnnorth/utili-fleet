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
      lastname: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: {
            args: 3,
            msg: 'Last-name must be at least 3 characters in length'
          }
        }
      },
      firstname: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: {
            args: 3,
            msg: 'Name must be at least 3 characters in length'
          }
        }
      },
      address1: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address2: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      zip: {
        type: Sequelize.STRING,
        allowNull: false,
        len: [5, 11]
      },
      telephone: {
        type: Sequelize.STRING,
        allowNull: false,
        len: [1, 15]
      },
      dob: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      drivers_licence: {
        type: Sequelize.STRING,
        allowNull: false,
        len: [1, 50]
      },
      drivers_licence_expiration: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      email: {
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