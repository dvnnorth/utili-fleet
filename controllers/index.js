const authentication = require('./authentication');
const claims = require('./claims');
const damages = require('./damages');
const drivers = require('./drivers');
const employees = require('./employees');
const vehicles = require('./vehicles');

module.exports = {
  authentication: authentication,
  claims: claims,
  damages: damages,
  drivers: drivers,
  employees: employees,
  vehicles: vehicles
};