const db = require('../models/index');
const request = require('request-promise');
const url = require('url');
var express = require('express');
var router = express.Router();
var db = require('../models/');
var bcrypt = require('bcrypt');
var passport = require('passport');
var session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
let user_id;

module.exports = app => {

  const sendError = (err, res) => {
    if (err) {
      res.statusCode = 500;
      res.send(err);
    }
  };

  // Get all vehicles from the database
  app.get('/api/vehicles', (req, res) => {
    db.Vehicles.findAll()
      .then(data => {
        res.statusCode = 200;
        res.send(data);
      })
      .catch(err => sendError(err, res));
  });

  app.get('/api/vehicles/:VIN', (req, res) => {
    db.Vehicles.findAll({
      where: {
        VIN: req.params.VIN
      }
    })
      .then(data => {
        res.statusCode = 200;
        res.send(data);
      })
      .catch(err => sendError(err, res));
  });

  // Post a vehicle into the database
  app.post('/api/vehicle/create', (req, res) => {
    db.Vehicles.create(req.body)
      .then(data => {
        res.statusCode = 200;
        res.send(data);
      })
      .catch(err => sendError(err, res));
  });


  // Update a vehicle into the database
  app.put('/api/vehicle/:id',  (req, res)  => {
    db.Vehicles.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then( (dbVehicle) => {
      res.json(dbVehicle);
    })
    .catch(err => sendError(err, res));
  });

  // Delete a vehicle into the database
  app.delete("/api/vehicle/:id", function (req, res) {
    db.Vehicles.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbdeleteVehicle) {
      res.json(dbdeleteVehicle);
    })
    .catch(err => sendError(err, res));
  });

  // Get the record from the NHTSA API for a particular VIN
  app.get('/api/vinCheck/:VIN', (req, res) => {
    const nhtsaEndpoint = new URL('https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/' +
      req.params.VIN);
    nhtsaEndpoint.searchParams.append('format', 'json');
    request.get({ url: nhtsaEndpoint })
      .then(response => res.send(response))
      .catch(err => sendError(err, res));
  });


  passport.use(
    new LocalStrategy(function (username, password, done) {
      db.Employee.findOne({ where: { username: username } }).then(function (user) {
        //console.log(user);
        if (!user) return done(null);

        console.log(user.dataValues.password);
        let hash = user.dataValues.password;
        bcrypt.compare(password, hash, function (err, res) {
          if (res) {
            let user_id = user.dataValues.id;
            return done(null, res);
          } else {
            console.log('return err');
            return done(null, err);
          }

        });

      });
    })
  );

  app.get('/', authenticationMiddleware(), (req, res) => {
    res.send('Welcome to your dashboard');
    console.log(req.user);
    console.log(req.isAuthenticated());
  });

  app.get('/api/test', (req, res) => {
    res.send('nothing here');
  });

  app.get('/dashboard', (req, res) => {
    console.log(req.user);
    console.log(req.isAuthenticated());
    res.send('Welcome to your dash');
  });
  app.post('/register', function (req, res) {
    var password = req.body.password;
    var hash = bcrypt.hashSync(password, 10);
    db.Employee.create({
      email: req.body.email,
      username: req.body.username,
      password: hash,
    }).then(function (newEmployee) {
      let username = req.body.username;
      user_id = newEmployee.dataValues.id;
      req.login(user_id, function (err) {
        res.redirect('/');
        console.log(req.user);
        console.log(req.isAuthenticated());
      });
    });
  });

  app.get('/login', (req, res) => {
    res.send('hello here');
  });

  app.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/api/test'
  }));

  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  passport.serializeUser(function (user_id, done) {
    done(null, user_id);
    console.log(user_id);
  });

  passport.deserializeUser(function (user_id, done) {
    done(null, user_id);
  });

  function authenticationMiddleware() {
    return (req, res, next) => {
      console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport)}`);

      if (req.isAuthenticated()) return next();
      else {
        res.send('You are not authorized');
      }
    };
  }
};
