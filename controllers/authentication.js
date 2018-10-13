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

  login: (req, res) => {
    console.log(req.body);
    if (req.isAuthenticated) {
      db.Users.findOne({ where: { username: req.body.username } })
        .then(data => {
          res.statusCode = 200;
          res.send(data.dataValues);
        })
        .catch(err => sendError(err, res));
    }
    else {
      res.sendStatus(401);
    }
  },

  logout: (req, res) => {
    req.logout();
    res.redirect('/');
  }
  /////////////// End Auth ///////////////////////
};