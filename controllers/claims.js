const db = require('../models/index');

const sendError = (err, res) => {
  if (err) {
    res.statusCode = 500;
    res.send(err);
  }
};

module.exports = {
  /////////////////////// Claims /////////////////////////////
  getAllClaims: (req, res) => {
    db.Claims.findAll()
      .then(data => {
        res.statusCode = 200;
        res.send(data);
      })
      .catch(err => sendError(err, res));
  },

  getClaimById: (req, res) => {
    db.Claims.findAll({
      where: {
        id: req.params.id
      }
    })
      .then(data => {
        res.statusCode = 200;
        res.send(data);
      })
      .catch(err => sendError(err, res));
  },

  updateClaim: (req, res) => {
    db.Claims.update({ where: { id: req.params.id } })
      .then(data => {
        res.statusCode = 200;
        res.send(data);
      })
      .catch(err => sendError(err, res));
  },

  createClaim: (req, res) => {
    db.Claims.create({
      insuranceCOmpany: req.body.insuranceCompany,
      claimNumber: req.body.claimNumber,
      adjusterEmail: req.body.adjusterEmail,
      estimate: req.body.estimate,
      finalCost: req.body.finalCost,
      openClosed: req.body.openClosed,
      status: req.body.status,
      vehicleId: req.body.vehicleId,
    }).then(data => {
      res.statusCode = 200;
      res.send(data);
    })
      .catch(err => sendError(err, res));
  },

  deleteClaim: (req, res) => {
    db.Claims.destroy({ where: { id: req.params.id } })
      .then(data => {
        res.statusCode = 200;
        res.send(data);
      })
      .catch(err => sendError(err, res));
  },
  ////////////////////// End Claims //////////////////////////
};