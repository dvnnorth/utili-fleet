const fs = require('fs');
const request = require('request-promise');

fs.readFile('vins.txt', 'utf8', (err, res) => {
  vins = res.split(/\r\n|\n|\r/);
  vins.forEach((vin, i) => {
    if (i < 10) console.log('queueing get at', 'http://localhost:5000/api/vinCheck/' + vin);
    request.get('http://localhost:5000/api/vinCheck/' + vin)
      .then(data => {
        fs.appendFile('vehicleData.json', (data + ','), err => {
          if (err) console.log(err);
          console.log('saved index', i);
        });
      });
  });
});
