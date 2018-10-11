'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employees = sequelize.define('Employees', {
    EmployeeNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    JobTitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    MVRCheckDate: DataTypes.DATE,
    CanDrive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });
  Employees.associate = function (models) {
    // associations can be defined here
    Employees.belongsTo(models.Drivers, { onDelete: 'CASCADE' });
  };
  return Employees;
};