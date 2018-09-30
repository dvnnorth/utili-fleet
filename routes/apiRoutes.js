var express = require('express');
var router = express.Router();
var db = require("../models/");
var bcrypt = require('bcrypt');
var hash = bcrypt.hashSync('myPlaintextPassword', 10);


module.exports = app => {
  router.get('/api/test', (req, res) => {
    res.sendStatus(200);
  });

  router.post('/', (req, res) => {
    hash(password, 10) 
    db.Employee.create({ 
      username: username,
      email: email,
      password: hash
    }).then( (newEmployee) => {
      console.log(newEmployee);
      res.redirect('/');
    });
    
  });

};

module.exports = router;