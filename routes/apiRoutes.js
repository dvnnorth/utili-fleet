const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../models/index');
const controller = require('../controllers/index');

// Create the authenticationMiddleware function to validate requests
const authenticationMiddleware = () => {
  return (req, res, next) => {
    if (req.isAuthenticated()) return next();
    else {
      res.statusCode = 401;
      res.redirect('/');
    }
  };
};

module.exports = app => {

  ////////////////////////// Auth ///////////////////////////////////////
  //local strategy used for signing in users
  passport.use(
    new LocalStrategy((username, password, done) => {
      // Retrieve a User object from the database using Sequelize 
      // by username
      db.Users.findOne({ where: { username: username } })
        .then((res) => {
          // res is the response from Sequelize in the promise
          // If there's no response, give error message
          if (!res) return done(null, false, { message: 'Incorrect username' });
          // Content (User object) is in res.dataValues
          let user = res.dataValues;
          // Password in the user.password field is already hashed. Store in variable hash
          let hash = user.password;
          // Compare the password (using the hash in session)
          bcrypt.compare(password, hash, (err, res) => {
            // res is the results of the comparison (true or false)
            if (err) return done(err);
            if (res) {
              return done(null, user);
            }
            else {
              return done(null, false, { message: 'Incorrect password' });
            }
          });
        });
    })
  );

  // Serialize and deserialize the user into / out of the session
  passport.serializeUser((user, done) => done(null, user.username));

  passport.deserializeUser((username, done) => {
    db.Users.findOne({ where: { username: username } })
      .then(res => {
        done(null, res.dataValues);
      })
      .catch(err => {
        done(err, null);
      });
  });

  app.post('/api/register', controller.authentication.register);

  app.post('/api/login', passport.authenticate('local', {
    successRedirect: '/app', // Application route
    failureRedirect: '/'
  }));

  app.get('/api/logout', controller.authentication.logout);
  ////////////////////////// End Auth ///////////////////////////////////////

  ///////////////////////// Driver Routes ///////////////////////////////////
  // Get all drivers from the database
  app.get('/api/drivers', authenticationMiddleware(), controller.drivers.getAllDrivers);

  // Get a driver from the database
  app.get('/api/driver/:id', authenticationMiddleware(), controller.drivers.getDriver);

  //Post a driver to the database
  app.post('/api/driver/create', authenticationMiddleware(), controller.drivers.createDriver);

  //Update a driver to the database
  app.put('/api/driver/:id', authenticationMiddleware(), controller.drivers.updateDriver);

  // Delete a driver into the database
  app.delete('/api/driver/:id', authenticationMiddleware(), controller.drivers.deleteDriver);
  ///////////////////////// End Driver Routes ///////////////////////////////////

  //////////////////////// Vehicles /////////////////////////////////////////////
  // Get all vehicles from the database
  app.get('/api/vehicles', authenticationMiddleware(), controller.vehicles.getAllVehicles);

  app.get('/api/vehicles/:VIN', authenticationMiddleware(), controller.vehicles.getVehicleByVIN);

  // Post a vehicle into the database
  app.post('/api/vehicle/create', authenticationMiddleware(), controller.vehicles.createVehicle);

  // Update a vehicle into the database
  app.put('/api/vehicle/:id', authenticationMiddleware(), controller.vehicles.updateVehicle);

  // Delete a vehicle into the database
  app.delete('/api/vehicle/:id', authenticationMiddleware(), controller.vehicles.deleteVehicle);

  // Get the record from the NHTSA API for a particular VIN
  app.get('/api/vinCheck/:VIN', authenticationMiddleware(), controller.vehicles.getFromVehicleDatabase);
  //////////////////////// End Vehicles /////////////////////////////

  //////////////////////// Claims ///////////////////////////////////
  app.get('/api/claims', authenticationMiddleware(), controller.claims.getAllClaims);

  app.get('/api/claim/:id', authenticationMiddleware(), controller.claims.getClaimById);

  app.put('/api/claim/:id', authenticationMiddleware(), controller.claims.updateClaim);

  app.post('/api/claims', authenticationMiddleware(), controller.claims.createClaim);

  app.delete('/api/claim/:id', authenticationMiddleware(), controller.claims.deleteClaim);
  ///////////////////// End Claims //////////////////////////////
};
