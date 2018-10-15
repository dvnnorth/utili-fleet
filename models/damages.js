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
    }
  });
  Damages.associate = function (models) {
    // associations can be defined here]
    Damages.belongsTo(models.Claims, { onDelete: 'SET NULL' });
    Damages.belongsTo(models.Vehicles, { onDelete: 'CASCADE' });
  };
  return Damages;
};