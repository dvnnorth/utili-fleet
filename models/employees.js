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
    },
    driverId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Drivers',
        key: 'id'
      }
    }
  });
  Employees.associate = function(models) {
    // associations can be defined here
    Employees.belongsTo(models.Drivers);
  };
  return Employees;
};