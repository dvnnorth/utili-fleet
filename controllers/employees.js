const db = require('../models/index');

const sendError = (err, res) => {
  if (err) {
    res.statusCode = 500;
    res.send(err);
  }
};

module.exports = {
  ////////////// Employee Methods //////////////////
  getAllEmployees: (req, res) => {
    db.Employees.findAll()
      .then(data => {
        res.statusCode = 200;
        res.send(data);
      })
      .catch(err => sendError(err, res));
  },

  getEmployee: (req, res) => {
    db.Employee.findOne({ where: { id: req.params.id } })
      .then(data => {
        res.statusCode = 200;
        res.send(data);
      })
      .catch(err => sendError(err, res));
  },

  createEmployee: (req, res) => {
    db.Employees.create(req.body)
      .then((data) => {
        res.statusCode = 200;
        res.send(data);
      }).catch(error => sendError(error, res));
  },

  updateEmployee: (req, res) => {
    console.log(req.params.id);
    console.log(req.body.section);
    console.log(req.body.description);
    console.log(req.body.claimId);
    console.log(req.body.vehicleId);
    
    db.Employees.find({
      where: { id: req.params.id }
    })
      .then(data => {
        return data.updateAttributes(req.body);
      })
      .then(updatedEmployee => {
        res.json(updatedEmployee);
      })
      .catch(err => sendError(err, res));
  },
  deleteEmployee: (req, res) => {
    db.Employee.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbdeleteDriver) {
      res.json(dbdeleteDriver);
    });
  }
  ////////////// End Employees /////////////////
};