const db = require('../models/index');
const request = require('request-promise');
const url = require('url');

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

  // Get the record from the NHTSA API for a particular VIN
  app.get('/api/vinCheck/:VIN', (req, res) => {
    const nhtsaEndpoint = new URL('https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/' +
      req.params.VIN);
    nhtsaEndpoint.searchParams.append('format', 'json');
    request.get({ url: nhtsaEndpoint })
      .then(response => res.send(response))
      .catch(err => sendError(err, res));
  });

};