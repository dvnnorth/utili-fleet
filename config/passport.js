const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const db = require('../models/sequelize');

passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

passport.deserializeUser(function(id, done) {
    db.User.findById(id).then(function(user) {
      done(null, user);
    }).catch(function(error) {
      done(error);
    });
  });

passport.use(new LocalStrategy({ usernameField: 'email', passwordField: 'passwd' }, function(email, password, done) {
    email = email.toLowerCase();
    db.User.findUser(email, password, function(err, user) {
      if(err)
        return done(err, null);
      return done(null, user);
    });
  }));

exports.isAuthenticated = function(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/login');
  };
  
  /**
   * Authorization Required middleware.
   */
exports.isAuthorized = function(req, res, next) {
    var provider = req.path.split('/').slice(-1)[0];
  
    if (req.user.tokens[provider]) {
      next();
    } else {
      res.redirect('/auth/' + provider);
    }
  };