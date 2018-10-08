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
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    claimId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Claims',
        key: 'id'
      },
      vehicleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Vehicles',
          key: 'id'
        }
      }
    }
  });
  Damages.associate = function (models) {
    // associations can be defined here]
    Damages.belongsTo(models.Claims);
  };
  return Damages;
};