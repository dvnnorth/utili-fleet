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
      //where: { username: username } 
      db.Users.findOne({where: {username: username}})
        .then((res) => {
          //console.log(res);
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
              //console.log(user);
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

  app.post('/api/login', passport.authenticate('local'), controller.authentication.login);

  app.get('/api/logout', controller.authentication.logout);

  app.get('/api/user', controller.authentication.user);
  ////////////////////////// End Auth ///////////////////////////////////////

  //////////////////////// Vehicles /////////////////////////////////////////////
  // Get all vehicles from the database
  app.get('/api/vehicles', /*authenticationMiddleware(),*/ controller.vehicles.getAllVehicles);

  app.post('/api/vehicle', authenticationMiddleware(), controller.vehicles.getVehicleSearch);

  app.get('/api/vehicles/driverss', /*authenticationMiddleware(),*/ controller.vehicles.getVehiclesByDriver);
  app.get('/api/vehicle/:VIN', authenticationMiddleware(), controller.vehicles.getVehicleByVIN);

  // Post a vehicle into the database
  app.post('/api/vehicles', /*authenticationMiddleware(),*/ controller.vehicles.createVehicle);

  // Update a vehicle into the database
  app.put('/api/vehicle/:id', authenticationMiddleware(), controller.vehicles.updateVehicle);

  // Delete a vehicle into the database
  app.delete('/api/vehicle/:id', authenticationMiddleware(), controller.vehicles.deleteVehicle);

  // Get the record from the NHTSA API for a particular VIN
  app.get('/api/vinCheck/:VIN', authenticationMiddleware(), controller.vehicles.getFromVehicleDatabase);
  //////////////////////// End Vehicles /////////////////////////////



  ///////////////////////// Driver Routes ///////////////////////////////////
  // Get all drivers from the database
  app.get('/api/drivers', authenticationMiddleware(), controller.drivers.getAllDrivers);

  // Get a driver from the database
  app.get('/api/driver/:id', authenticationMiddleware(), controller.drivers.getDriver);

  //Post a driver to the database
  app.post('/api/drivers', authenticationMiddleware(), controller.drivers.createDriver);

  //Update a driver to the database
  app.put('/api/driver/:id', authenticationMiddleware(), controller.drivers.updateDriver);

  // Delete a driver into the database
  app.delete('/api/driver/:id', authenticationMiddleware(), controller.drivers.deleteDriver);
  ///////////////////////// End Driver Routes ///////////////////////////////////

  //////////////////////// Claims ///////////////////////////////////
  app.get('/api/claims', authenticationMiddleware(),controller.claims.getAllClaims);

  app.get('/api/claim/:id', authenticationMiddleware(), controller.claims.getClaimById);

  app.put('/api/claim/:id', authenticationMiddleware(), controller.claims.updateClaim);

  app.post('/api/claims', authenticationMiddleware(), controller.claims.createClaim);

  app.delete('/api/claim/:id', authenticationMiddleware(), controller.claims.deleteClaim);
  ///////////////////// End Claims //////////////////////////////

  //////////////////////// Damages ///////////////////////////////////
  app.get('/api/damages', authenticationMiddleware(), controller.damages.getAllDamages);

  app.get('/api/damage/:id', authenticationMiddleware(), controller.damages.getDamagesId);

  app.put('/api/damage/:id', authenticationMiddleware(), controller.damages.updateDamages);

  app.post('/api/damages', authenticationMiddleware(), controller.damages.createDamages);

  app.delete('/api/damage/:id', authenticationMiddleware(), controller.damages.deleteDamages);
  ///////////////////// End Damages //////////////////////////////

  ///////////////////// Employees //////////////////////////////
  app.get('/api/employees', authenticationMiddleware(), controller.employees.getAllEmployees);

  app.get('/api/employee/:id', authenticationMiddleware(), controller.employees.getEmployee);

  app.put('/api/employee/:id', authenticationMiddleware(), controller.employees.updateEmployee);

  app.post('/api/employees', authenticationMiddleware(), controller.employees.createEmployee);

  app.delete('/api/employee/:id', authenticationMiddleware(), controller.employees.deleteEmployee);
  ///////////////////// End Emplpoyees //////////////////////////////


};