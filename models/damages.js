'use strict';
module.exports = (sequelize, DataTypes) => {
  var Damages = sequelize.define('Damages', {
    Section: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ClaimId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Claims',
        key: 'id'
      },
    },
    VehicleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Vehicles',
        key: 'id'
      }
    }
  });
  Damages.associate = function (models) {
    // associations can be defined here]
    Damages.belongsTo(models.Claims);
    Damages.belongsTo(models.Vehicles);
  };
  return Damages;
};