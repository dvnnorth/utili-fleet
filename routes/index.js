const apiRoutes = require('./apiRoutes');
const htmlRoutes = require('./htmlRoutes');

module.exports = app => {
  apiRoutes(app);
  htmlRoutes(app);
};