'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employees = sequelize.define('Employees', {
    employeeNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    jobTitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mvrCheckDate: DataTypes.DATE,
    canDrive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {});
  Employees.associate = function(models) {
    // associations can be defined here
    Employees.hasOne(models.Drivers);
  };
  return Employees;
};