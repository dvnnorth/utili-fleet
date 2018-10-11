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
    console.log({
      InsuranceCompany: req.body.InsuranceCompany,
      ClaimNumber: req.body.ClaimNumber,
      AdjusterEmail: req.body.AdjusterEmail,
      AdjusterName: req.body.AdjusterName,
      Estimate: req.body.Estimate,
      FinalCost: req.body.FinalCost,
      OpenClosed: req.body.OpenClosed,
      Status: req.body.Status,
      VehicleId: req.body.VehicleId
    });
    db.Claims.create({
      InsuranceCompany: req.body.InsuranceCompany,
      ClaimNumber: req.body.ClaimNumber,
      AdjusterEmail: req.body.AdjusterEmail,
      AdjusterName: req.body.AdjusterName,
      Estimate: req.body.Estimate,
      FinalCost: req.body.FinalCost,
      OpenClosed: req.body.OpenClosed,
      Status: req.body.Status,
      VehicleId: req.body.VehicleId
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