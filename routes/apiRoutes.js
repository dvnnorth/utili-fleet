var express = require('express');
var router = express.Router();
var db = require('../models/');
var bcrypt = require('bcrypt');
var passport = require('passport');
var session = require('express-session');
let user_id;


module.exports = app => {
  app.get('/', authenticationMiddleware(), (req, res)=>{
    res.send('Welcome to your dashboard');
    console.log(req.user);
    console.log(req.isAuthenticated());
  });

  app.get('/api/test', (req, res) => {
    res.send('nothing here');
  });

  app.get('/dashboard', (req, res) => {
    res.send('hello here');
  });

  app.post('/register', function(req, res) {
    var password = req.body.password;
    var hash = bcrypt.hashSync(password, 10);
    db.Employee.create({
      email: req.body.email,
      username: req.body.username,
      password: hash,
    }).then(function(newEmployee) {
      user_id = newEmployee.dataValues.id;
      let username = req.body.username;
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
    successRedirect: '/',
    failureRedirect: '/api/test'
  }));

  app.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/');
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