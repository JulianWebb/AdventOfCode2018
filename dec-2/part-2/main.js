const fs = require('fs');

fs.readFile('box-identifiers', { encoding: 'utf8' }, (error, data) => {
    if (error) return console.error(error);

    let identifiers = data.split('\n');
    identifiers.forEach(firstIdentifier => {
        identifiers.forEach(secondIdentifier => {
            let differenceCount = 0;
            let differenceIndex = 0;
            firstIdentifier.split('').forEach((character, index) => {
                if (character != secondIdentifier[index]) {
                    differenceCount += 1;
                    differenceIndex = index;
                };
            })

            if (differenceCount == 1) {
                let result = firstIdentifier.split('').filter((_, index) => index != differenceIndex).reduce((previous, current) => previous + current, "")
                console.log(`Output: ${result}`);
                process.exit(0);
            }
        })
    })
});