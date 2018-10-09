'use strict';
module.exports = (sequelize, DataTypes) => {
  var Drivers = sequelize.define('Drivers', {
    LastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: 3,
          msg: 'Last-name must be at least 3 characters in length'
        }
      }
    },
    FirstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: 3,
          msg: 'Name must be at least 3 characters in length'
        }
      }
    },
    Address1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Address2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    City: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    State: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Zip: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [5, 11]
    },
    Telephone: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 15]
    },
    DOB: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    DriversLicense: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1, 50]
    },
    DriversLicenseExpiration: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING,
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
    }
  });

  Drivers.associate = function (models) {
    // associations can be defined here
    Drivers.hasOne(models.Employees);
    Drivers.belongsTo(models.Vehicles, { constraints: false });
  };
  return Drivers;
};