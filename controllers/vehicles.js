const Sequelize = require('sequelize');
const db = require('../models/index');
const request = require('request-promise');

const Op = Sequelize.Op;

const sendError = (err, res) => {
  if (err) {
    res.statusCode = 500;
    res.send(err);
  }
};

module.exports = {
  ////////////// Vehicles ///////////////////
  getAllVehicles: (req, res) => {
    db.Vehicles.findAll()
      .then(data => {
        res.statusCode = 200;
        res.send(data);
      })
      .catch(err => sendError(err, res));
  },

  getVehicleByVIN: (req, res) => {
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
  },

  getVehicleSearch: (req, res) => {
    let constraints = {};
    for (let key in req.body) {
      constraints[key] = req.body[key]
    }
    db.Vehicles.findAll({
      where: constraints
    })
      .then(response => {
        res.statusCode = 200;
        res.send(response);
      })
      .catch(err => sendError(err, res));
  },

  createVehicle: (req, res) => {
    db.Vehicles.create(req.body)
      .then(data => {
        res.statusCode = 200;
        res.send(data);
      })
      .catch(err => sendError(err, res));
  },

  updateVehicle: (req, res) => {
    db.Vehicles.find({
      where: { id: req.params.id }
    })
      .then(data => {
        return data.updateAttributes(req.body);
      })
      .then(updatedVehicle => {
        res.json(updatedVehicle);
      })
      .catch(err => sendError(err, res));
  },
  deleteVehicle: function (req, res) {
    db.Vehicles.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(data => {
        // if (rowsAffected === 1)
         res.sendStatus(200);
         res.json(data)
      })
      .catch(err => sendError(err, res));
  },

  getVehiclesByDriver:(req, res) => {
    db.Vehicles.findAll({
      where: {
        DriverId : {[Op.ne] : null}
      }
    })
      .then(data => {
        res.statusCode = 200;
        res.json(data);
      })
      .catch(err => sendError(err, res));  
  },
  
  getVehiclesCost:(req, res) => {
    db.Vehicles.findAll({ 
        // attributes: ['NetCost', [Sequelize.fn('SUM', (Sequelize.fn('COALESCE', (Sequelize.col('NetCost')), 0)))]]
        attributes: [
          [Sequelize.fn('SUM', Sequelize.col('NetCost')), 'cost'],
        ]
      })
      .then(data => {
        res.statusCode = 200;
        res.send(data);
      })
      .catch(err => sendError(err, res));  
  },

  
  getFromVehicleDatabase: (req, res) => {
    const nhtsaEndpoint = new URL('https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/' +
      req.params.VIN);
    nhtsaEndpoint.searchParams.append('format', 'json');
    request.get({ url: nhtsaEndpoint })
      .then(response => res.send(response))
      .catch(err => sendError(err, res));
  }
};