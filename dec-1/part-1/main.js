const fs = require('fs');

fs.readFile('frequency-changes', { encoding: 'utf8' }, (error, data) => {
    if (error) return console.error(error);

    let changes = data.split('\n');
    let frequency = changes.reduce((previous, current) => previous + parseInt(current), 0);

    console.log(`Result: ${frequency}`);
})