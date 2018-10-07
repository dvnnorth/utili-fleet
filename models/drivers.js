'use strict';
module.exports = (sequelize, DataTypes) => {
  var Drivers = sequelize.define('Drivers', {
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: 3,
          msg: 'Last-name must be at least 3 characters in length'
        }
      }
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: 3,
          msg: 'Name must be at least 3 characters in length'
        }
      }
    },
    address1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zip: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1, 10]
    },
    telephone: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1, 10]
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    drivers_licence: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 50]
    },
    drivers_licence_expiration: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
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
    }
  });

  Drivers.associate = function (models) {
    // associations can be defined here
    Drivers.hasOne(models.Employees);
  };
  return Drivers;
};