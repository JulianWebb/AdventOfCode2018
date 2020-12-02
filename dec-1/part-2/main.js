const fs = require('fs');

fs.readFile('frequency-changes', { encoding: 'utf8' }, (error, data) => {
    if (error) return console.error(error);

    let changes = data.split('\n');
    let frequencies = [0];
    
    while (1) {
        changes.forEach(change => {
            let newFrequency = frequencies[frequencies.length - 1] + parseInt(change);
            if (frequencies.indexOf(newFrequency) != -1) {
                console.log(`Repeated Frequency: ${newFrequency}`);
                process.exit(0);
            }
            frequencies.push(newFrequency);
        })
    }
})