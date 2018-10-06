'use strict';
module.exports = (sequelize, DataTypes) => {
  var Damages = sequelize.define('Damages', {
    vehicle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    section: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    claim: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  });
  Damages.associate = function (models) {
    // associations can be defined here
    Damages.hasOne(models.Claims);
  };
  return Damages;
};