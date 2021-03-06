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
        res.json(data);
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
        res.json(data);
      })
      .catch(err => sendError(err, res));
  },

  updateClaim: (req, res) => {
    db.Claims.find({
      where: { id: req.params.id }
    })
      .then(data => {
        return data.updateAttributes(req.body)
      })
      .then(updatedClaims => {
        res.json(updatedClaims);
      })
      .catch(err => sendError(err, res));
  },

  createClaim: (req, res) => {
    db.Claims.create(req.body)
      .then(data => {
        res.statusCode = 200;
        res.json(data);
      })
      .catch(err => sendError(err, res));
  },

  deleteClaim: (req, res) => {
    db.Claims.destroy({ 
      where: { 
        id: req.params.id 
      } 
    }).then(data => {
        res.statusCode = 200;
        res.json(data);
      })
      .catch(err => sendError(err, res));
  },
  ////////////////////// End Claims //////////////////////////
};