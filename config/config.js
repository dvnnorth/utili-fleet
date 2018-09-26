require('dotenv').config();

module.exports = {
  'development': {
    'username': process.env.DB_USERNAME_DEV,
    'password': process.env.DB_PASSWORD_DEV,
    'database': 'utilifleetDB_dev',
    'host': '127.0.0.1',
    'dialect': 'mysql'
  },
  'test': {
    'username': 'root',
    'password': null,
    'database': 'utilifleetDB_CI',
    'host': '127.0.0.1',
    'dialect': 'mysql'
  },
  'production': {
    'username': 'root',
    'password': null,
    'database': 'utilifleetDB',
    'host': '127.0.0.1',
    'dialect': 'mysql'
  }
};
