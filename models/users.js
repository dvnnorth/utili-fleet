'use strict';
module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      len: [1, 200],
      isEmail: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    instanceMethods: {
      generateHash: function (password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
      },
      validPassword: function (password) {
        return bcrypt.compareSync(password, this.password)
      }
    }

  });
  Users.associate = function(models) {
    // associations can be defined here
  };
  return Users;
};