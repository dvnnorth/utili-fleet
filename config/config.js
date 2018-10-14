require('dotenv').config();

module.exports = {
  'development': {
    'username': process.env.DB_USERNAME_DEV || "root",
    'password': process.env.DB_PASSWORD_DEV || "root",
    'database': 'utilifleetDB_dev',
    'host': '127.0.0.1',
    'dialect': 'mysql',
  },
  'test': {
    'username': process.env.DB_USERNAME_DEV,
    'password': process.env.DB_PASSWORD_DEV,
    'database': 'utilifleetDB_CI',
    'host': '127.0.0.1',
    'dialect': 'mysql'
  },
  'production': {
    'use_env_variable': 'JAWSDB_URL',
    'dialect': 'mysql'
  }
};
