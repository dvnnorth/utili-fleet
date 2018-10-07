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
        unique: true,
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
        unique: true,
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
        type: Sequelize.INTEGER,
        allowNull: false,
        len: [1, 10]
      },
      telephone: {
        type: Sequelize.INTEGER,
        allowNull: false,
        len: [1, 10]
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
        unique: true,
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
<<<<<<< HEAD:migrations/20180930171816-create-drivers.js
      job_title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      access: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      mvr_check_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      can_drive: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
=======
>>>>>>> 2c1d7f4d84e913d0c4257dd1ac5998ac77425ff9:migrations/2-20180930171816-create-drivers.js
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
    return queryInterface.dropTable('Drivers');
  }
};