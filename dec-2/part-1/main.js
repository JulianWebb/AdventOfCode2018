const fs = require('fs');

fs.readFile('box-identifiers', { encoding: 'utf8' }, (error, data) => {
    if (error) return console.error(error);
    
    let exactlyTwoOfAnyLetter   = 0;
    let exactlyThreeOfAnyLetter = 0;

    let identifiers = data.split('\n');
    identifiers.forEach(identifier => {
        let characterCount = new Map();
        identifier.split('').forEach(character => {
            if (characterCount.has(character)) {
                characterCount.set(character, characterCount.get(character) + 1);
            } else {
                characterCount.set(character, 1);
            }
        })

        let firstTwo = true;
        let firstThree = true;

        characterCount.forEach((stat, character) => {
            if (stat >= 2) { console.log(identifier, character, stat); };
            if (stat == 2 && firstTwo)   { exactlyTwoOfAnyLetter   += 1; firstTwo   = false; }
            if (stat == 3 && firstThree) { exactlyThreeOfAnyLetter += 1; firstThree = false; }
        })
    })

    let checksum = exactlyTwoOfAnyLetter * exactlyThreeOfAnyLetter;
    console.log(exactlyTwoOfAnyLetter, exactlyThreeOfAnyLetter)
    console.log(`Checksum: ${checksum}`);
})