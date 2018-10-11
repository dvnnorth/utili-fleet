const controller = require('../controllers/index');

module.exports = app => {

  // If the application is running in the production environment,
  // if (process.env.NODE_ENV === 'production') {
  //   // Route all requests to the react application
    app.get('/app', (req, res) => {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  // }
  // else {
  //   app.get('/app', controller.testing.successTest);
  // }

  app.get('/', (req, res) => res.send('This will be your login page'));

};