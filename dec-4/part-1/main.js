const fs = require('fs');

const Log = require('./log');

fs.readFile('guard-log', { encoding: 'utf8' }, (error, data) => {
    if (error) return console.error(error);

});