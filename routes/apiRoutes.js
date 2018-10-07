var express = require('express');
var bcrypt = require('bcrypt');
var passport = require('passport');
var session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
let user_id;
const db = require('../models/index');
const request = require('request-promise');
const url = require('url');

module.exports = app => {
//local stragy used for signing in users
  passport.use(
    new LocalStrategy(function(username, password, done) {
      db.Users.findOne( {where: {username: username} }).then(function(user) {
      //console.log(user);
        if(!user) return done(null);
  
        console.log( user.dataValues.password);
        let hash = user.dataValues.password;
        bcrypt.compare(password, hash, function(err, res) {
          if(res){
            let user_id = user.dataValues.id;
            return done(null, res);
          } else {
            console.log('return err');
            return done (null, err);
          }

        });

      });
    })
  );



  const sendError = (err, res) => {
    if (err) {
      res.statusCode = 500;
      res.send(err);
    }
  };

  // Get all vehicles from the database
  app.get('/api/vehicles', authenticationMiddleware(), (req, res) => {
    db.Vehicles.findAll()
      .then(data => {
        res.statusCode = 200;
        res.send(data);
      })
      .catch(err => sendError(err, res));
  });

  app.get('/api/vehicles/:VIN', authenticationMiddleware(), (req, res) => {
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

  // Get the record from the NHTSA API for a particular VIN
  app.get('/api/vinCheck/:VIN', authenticationMiddleware(), (req, res) => {
    const nhtsaEndpoint = new URL('https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/' +
      req.params.VIN);
    nhtsaEndpoint.searchParams.append('format', 'json');
    request.get({ url: nhtsaEndpoint })
      .then(response => res.send(response))
      .catch(err => sendError(err, res));
  });

  app.get('/', authenticationMiddleware(), (req, res)=>{
    res.send('Welcome to your dashboard');
    console.log(req.user);
    console.log(req.isAuthenticated());
  });

  app.get('/api/test', (req, res) => {
    res.send('nothing here');
  });

  app.get('/dashboard', authenticationMiddleware(), (req, res) => {
    console.log(req.user);
    console.log(req.isAuthenticated());
    res.send('Welcome to your dash');
  });
  app.post('/register', function(req, res) {
    var password = req.body.password;
    var hash = bcrypt.hashSync(password, 10);
    db.Users.create({
      username: req.body.username,
      password: hash,
    }).then(function(newEmployee) {
      let username = req.body.username;
      user_id = newEmployee.dataValues.id;
      req.login(user_id, function(err){
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

  app.get('/api/claims', (req, res) => {
    db.Claims.findAll().then(data => {
      res.statusCode = 200;
      res.send(data);
    })
      .catch(err => sendError(err, res));
  });

  app.get('/api/claim/:id', (req, res) => {
    db.Claims.findAll({
      where: {
        id: req.params.id
      }
    })
      .then(data => {
        res.statusCode = 200;
        res.send(data);
      })
      .catch(err => sendError(err, res));
  });

  app.put('/api/claim/:id', (req, res) => {
    db.Claims.update({where: {id: req.params.id}})
      .then(data => {
        res.statusCode = 200;
        res.send(data);
      })
      .catch(err => sendError(err, res));
  }
  );
  
  app.post('/api/claims', (req, res) => {
    db.Claims.create({
      insuranceCOmpany: req.body.insuranceCompany,
      claimNumber: req.body.claimNumber,
      adjusterEmail: req.body.adjusterEmail,
      estimate: req.body.estimate,
      finalCost: req.body.finalCost,
      openClosed: req.body.openClosed,
      status: req.body.status,
      vehicleId: req.body.vehicleId,
    }).then(data => {
      res.statusCode = 200;
      res.send(data);
    })
      .catch(err => sendError(err, res));
  });
  
  app.delete('/api/claim/:id', (req, res) => {
    db.Claims.destroy({where: {id: req.params.id}})
      .then(data => {
        res.statusCode = 200;
        res.send(data);
      })
      .catch(err => sendError(err, res));
  });

  passport.serializeUser(function(user_id, done) {
    done(null, user_id);
    console.log(user_id);
  });

  passport.deserializeUser(function(user_id, done) {
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