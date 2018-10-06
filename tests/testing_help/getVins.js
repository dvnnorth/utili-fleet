const request = require('request-promise');
const fs = require('fs');

async function getVins(num) {
    for (let i = 1; i < num + 1; i++) {
        await request.get('http://randomvin.com/getvin.php/?type=real')
            .then(async (res, err) => {
                console.log(res, '<== VIN # ' + i);
                await fs.appendFile('vins.txt', res + '\n', err => {
                    if (err) throw err;
                    console.log('Saved');
                });
            });
    }
}

getVins(1000);
