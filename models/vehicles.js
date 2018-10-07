'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vehicles = sequelize.define('Vehicles', {
    UnitNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    VIN: {
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        notEmpty: true,
        isAlphanumeric: true,
        len: [17, 17],
        notContains: ['I', 'i', 'O', 'o', 'Q', 'q'],
        isVIN(value) {
          // Make sure value is uppercase string
          value = value.toString().toUpperCase();

          if (value.length < 17 || value.length > 17) {
            throw new Error('Invalid VIN: Bad length, must be 17 digits');
          }

          // Define transliteration table
          const TRANSLITERATION = {
            A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8,
            J: 1, K: 2, L: 3, M: 4, N: 5, P: 7, R: 9, S: 2,
            T: 3, U: 4, V: 5, W: 6, X: 7, Y: 8, Z: 9
          };

          // Define position weights
          const WEIGHT = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2];

          // Define check as check digit to be calculated and actualCheck as
          // the actual check digit as given (to be checked against check for
          // validation)
          let check, actualCheck = value[8];

          check = value.split('').reduce((sum, currentDigit, index) => {
            if (TRANSLITERATION.hasOwnProperty(currentDigit)) {
              return sum + (TRANSLITERATION[currentDigit] * WEIGHT[index]);
            }
            else if (!isNaN(parseInt(currentDigit))) {
              return sum + (parseInt(currentDigit) * WEIGHT[index]);
            }
            else {
              throw new Error('Invalid VIN: Bad digit in VIN');
            }
          }, 0);

          // Determine expected check digit
          check = check % 11;
          if (check === 10) {
            check = 'X';
          }
          else {
            check = check.toString();
          }

          if (check !== actualCheck) {
            throw new Error('Invalid VIN: Bad check digit')
          }
        }
      }
    },
    ModelYear: {
      type: DataTypes.SMALLINT(4),
      validation: {
        notNull: true,
        max: 9999,
        min: 1000
      }
    },
    Make: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Model: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Series: DataTypes.STRING,
    VehicleType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    BodyClass: DataTypes.STRING,
    ExteriorColor: {
      type: DataTypes.STRING,
      allowNull: false
    }, // Not obtainable through VIN
    InteriorColor: DataTypes.STRING, // Ditto
    LicensePlate: DataTypes.STRING,
    Mileage: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MaxMileage: DataTypes.INTEGER,
    NetCost: DataTypes.DECIMAL,
    DepreciationStart: DataTypes.DATE,
    DepreciationEnd: DataTypes.DATE,
    DepreciationRateYearly: DataTypes.DECIMAL,
    TollTagSerial: DataTypes.STRING,
    DriverID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Drivers',
        key: 'id'
      }
    }
  }, {});
  Vehicles.associate = function (models) {
    // associations can be defined here
    Vehicles.hasMany(models.Damages);
    Vehicles.hasMany(models.Claims);
    Vehicles.hasOne(models.Drivers);
  };
  return Vehicles;
};