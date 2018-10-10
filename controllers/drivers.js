const db = require('../models/index');

const sendError = (err, res) => {
  if (err) {
    res.statusCode = 500;
    res.send(err);
  }
};

module.exports = {
  ////////////// Driver Methods //////////////////
  getAllDrivers: (req, res) => {
    db.Drivers.findAll()
      .then(data => {
        res.statusCode = 200;
        res.send(data);
      })
      .catch(err => sendError(err, res));
  },

  getDriver: (req, res) => {
    db.Drivers.findOne({ where: { id: req.params.id } })
      .then(data => {
        res.statusCode = 200;
        res.send(data);
      })
      .catch(err => sendError(err, res));
  },

  createDriver: (req, res) => {
    db.Drivers.create(req.body)
      .then((data) => {
        res.statusCode = 200;
        res.send(data);
      }).catch(error => sendError(error, res));
  },

  updateDriver: (req, res) => {
    db.Drivers.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(dbdriver => {
        res.statusCode = 200;
        res.send(dbdriver);
      })
      .catch(error => sendError(error, res));
  },

  deleteDriver: (req, res) => {
    db.Drivers.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbdeleteDriver) {
      res.json(dbdeleteDriver);
    });
  }
  ////////////// End Drivers /////////////////
};