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
<<<<<<< HEAD
    console.log(req.params.id);
    console.log(req.body.section);
    console.log(req.body.description);
    console.log(req.body.claimId);
    console.log(req.body.vehicleId);
    
    db.Drivers.find({
      where: { id: req.params.id }
=======
    db.Drivers.update(req.body, {
      where: {
        id: req.body.id
      }
>>>>>>> b1ed034bacf02d08482280514b7b32b54d71b4a7
    })
      .then(data => {
        return data.updateAttributes(req.body);
      })
      .then(updatedEmployee => {
        res.json(updatedEmployee);
      })
      .catch(err => sendError(err, res));
  },

  // updateDriver: ("/driver/:id"(req, res) => {
  //   const id = req.params.id;
  //   const updates = req.body.updates;
  //   db.Driver.find({
  //     where: {
  //       id: id}
  //     })
  //     .then(driver => {
  //       return driver.updateAttributes(req.body)
  //     })
  //     .then(updateDriver =>{
  //       res.json(updateOwner);
  //     });
  // });

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