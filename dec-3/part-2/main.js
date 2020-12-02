const fs = require('fs');

const Fabric = require('./fabric');

fs.readFile('fabric-claims', { encoding: 'utf8' }, (error, data) => {
    if (error) return console.error(error);

    let fabric = new Fabric(1000, 1000);

    let claims = data.split('\n');
    claims.forEach(claim => {
        let regex = /#(\d*)\s@\s(\d*),(\d*):\s(\d*)x(\d*)/;
        let [_, id, x, y, width, height] = claim.match(regex);
        fabric.processClaim(id, x, y, width, height);        
    })

    console.log(fabric.overlapCheck());
});