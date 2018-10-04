module.exports = function(sequelize, DataTypes) {
  var Employee = sequelize.define(
    'Employee',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      classMethods: {
        associate: function(models) {
          Employee.belongsTo(models.User, {
            foreignKey: {
              allowNull: false
            }
          });
          Employee.hasMany(models.Appointment, {
            onDelete: 'cascade'
          });
        }
      }
    }
  );
  return Employee;
};
  