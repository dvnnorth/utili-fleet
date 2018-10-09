'use strict';
module.exports = (sequelize, DataTypes) => {
  var Claims = sequelize.define('Claims', {
    InsuranceCompany: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 50]
    },
    ClaimNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1, 50]
    },
    AdjusterName: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 50]
    },
    AdjusterEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 50],
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
    Estimate: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1, 50]
    },
    FinalCost: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1, 50]
    },
    OpenClosed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    Status: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 50]
    },
    VehicleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Vehicles',
        key: 'id'
      }
    },
  });
  Claims.associate = function (models) {
    // associations can be defined here
    Claims.hasMany(models.Damages);
    Claims.belongsTo(models.Vehicles);
  };
  return Claims;
};