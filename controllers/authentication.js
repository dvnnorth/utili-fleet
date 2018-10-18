const db = require('../models/index');
const bcrypt = require('bcrypt');

const sendError = (err, res) => {
  if (err) {
    res.statusCode = 500;
    res.send(err);
  }
};

module.exports = {
  ///////////// Auth ///////////////////////
  register: (req, res) => {
    // Get password and generate salt and hashed password
    const password = req.body.password;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    // Create entry in Users table
    db.Users.create({
      username: req.body.username,
      password: hash,
    })
      .then((res) => {
        let newUser = res.dataValues;
        req.login(newUser, (err) => {
          res.redirect('/app');
        });
      })
      .catch(err => sendError(err, res));
  },
  
  success: (req, res) => {
    db.Users.findOne({ where: { username: req.params.username} })
      .then(response => {
        res.statusCode = 200;
        res.send(response);
      })
      .catch(err => sendError(err, res));
  },
  

  login: (req, res) => {
    console.log(req.body);
    if (req.isAuthenticated) {
      console.log(req.body.username);
      db.Users.findOne({ where: { username: req.body.username } })
        .then(data => {
          //console.log(req.body.username);
          res.statusCode = 200;
          res.send(data.dataValues.username);
        })
        .catch(err => sendError(err, res));
    }
    else {
      res.sendStatus(401);
    }
  },

  logout: (req, res) => {
    req.logout();
    if (process.env.NODE_ENV === 'production') {
      res.redirect('/');
    }
    else {
      res.redirect('http://localhost:3000');
    }
  },

  user: (req, res) => {
    if (req.user) {
      res.statusCode = 200;
      res.send(req.user.username);
    }
    else {
      res.statusCode = 401;
      res.send();
    }
  }
   /////////////// End Auth ///////////////////////
};