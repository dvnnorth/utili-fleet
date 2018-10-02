var express = require('express');
var router = express.Router();
var db = require('../models/');
 var bcrypt = require('bcrypt');
 var hash = bcrypt.hashSync('myPlaintextPassword', 10);
var passport = require('passport');
var session = require('express-session');
let user_id;


module.exports = app => {
  app.get('/', (req,res)=>{
    res.send('Home test');
    console.log(req.isAuthenticated());
  });
  app.get('/api/test', (req, res) => {
    res.sendStatus(200);
  });
/*
  app.post('/register', (req, res) => {
    console.log('REQ BODY IN POST: ', req.body);
    //hash(password, 10) 
    db.Employee.create({ 
      username: req.body.username,
      email: req.body.email,
      password: req.body.password//hash
    }).then( (newEmployee) => {
      console.log(newEmployee);
      res.redirect('/');
    });
    
  }); */
  app.post('/register', function(req, res) {
    var password = req.body.password;
    //console.log(req.body);
    bcrypt.hashSync(password, 10);
    db.Employee.create({
      //name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: hash,
      //photo: req.body.photo,
      //bio: req.body.about,
      //subjects: req.body.subject
    }).then(function(newEmployee) {
      //console.log(newTutor.dataValues.id);
      //console.log(Tutor.dataValues.id);
      user_id = newEmployee.dataValues.id;
      let username = req.body.username;
      req.login(user_id, function(err){
        res.redirect(`/`);// '/dashboard
        console.log(req.user);
        console.log(req.isAuthenticated());
      });
      //res.redirect(`/tutors/${username}`)
        
    });
  });
  app.get('/dashboard')

};







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
      //alert("You must be logged in to use this app"); 
      res.redirect('/');
    }
  };
}
  