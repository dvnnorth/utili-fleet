const db = require('../models/index');

const sendError = (err, res) => {
  if (err) {
    res.statusCode = 500;
    res.send(err);
  }
};

module.exports = {
  /////////////////////// Damages /////////////////////////////
  getAllDamages: (req, res) => {
    db.Damages.findAll()
      .then(data => {
        res.statusCode = 200;
        res.send(data);
      })
      .catch(err => sendError(err, res));
  },

  getDamagesId: (req, res) => {
    db.Damages.findAll({
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

  updateDamages: (req, res) => {
    console.log(req.params.id);
    console.log(req.body.section);
    console.log(req.body.description);
    console.log(req.body.claimId);
    console.log(req.body.vehicleId);
    
    db.Damages.find({
      where: { id: req.params.id }
    })
    .then(data => {
      return data.updateAttributes(req.body)
      })
      .then(updatedDAmage => {
        res.json(updatedDAmage);
      })
      .catch(err => sendError(err, res));
  },

  createDamages: (req, res) => {
    db.Damages.create(req.body).then(data => {
      res.statusCode = 200;
      res.send(data);
    })
      .catch(err => sendError(err, res));
  },

  deleteDamages: (req, res) => {
    db.Damages.destroy({ where: { id: req.params.id } })
      .then(data => {
        res.sendStatus(200);
      })
      .catch(err => sendError(err, res));
  },
  ////////////////////// End Damages //////////////////////////
};