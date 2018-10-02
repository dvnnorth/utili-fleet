// Modules for Express server
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//require authentication packages
const bcrypt = require('bcrypt');
const saltRounds = 10;
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");
const cookieParser = require('cookie-parser')

// Require Sequelize
const db = require('./models/index');

// Init Express app
const app = express();

// Import routes
const apiRoutes = require('./routes/apiRoutes');

// Set Listening Port
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//this should be below the static file middleware
app.use(
  session({
    secret: "keyboard cat", //this should be a random string
    resave: false,
    saveUninitialized: true
    //cookie: { secure: true }
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(function(username, password, done) {
    db.Tutor.findOne({ where: {username: username} }, function(err, user) {
      console.log(user);
      //console.log(password);
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Incorrect username." });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: "Incorrect password." });
      }
      //const hash = 
      //bcrypt.compare(password, hash, function(err, res) {

     // });;
      return done(null, user);
    });
  })
);

// Call routes
apiRoutes(app);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
};

// Setup app listener and database connection
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  db.sequelize
    .sync()
    .then(() => {
      console.log('Connection to database has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
});

