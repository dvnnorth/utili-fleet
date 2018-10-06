'use strict';
module.exports = (sequelize, DataTypes) => {
  var Claims = sequelize.define('Claims', {
    insuranceCompany: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 50]
    },
    claimNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1, 50]
    },
    adjusterName: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 50]
    },
    adjusterEmail: {
      type: DataTypes.STRING,
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
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1, 50]
    },
    finalCost: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1, 50]
    },
    openClosed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 50]
    },
  });
  Claims.associate = function (models) {
    // associations can be defined here
  };
  return Claims;
};