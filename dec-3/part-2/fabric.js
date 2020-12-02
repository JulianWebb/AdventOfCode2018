const fs = require('fs');

module.exports = class Fabric {
    constructor (width, height) {
        this.area = []; // x
        for (var horizontal = 0; horizontal < width; horizontal++) {
            this.area[horizontal] = []; //y
            for (var vertical = 0; vertical < height; vertical++) {
                this.area[horizontal][vertical] = new Plot(horizontal, vertical);
            }
        }
    }

    processClaim(id, x, y, width, height) {
        let xOffset = parseInt(x) + parseInt(width);
        let yOffset = parseInt(y) + parseInt(height);

        for (var horizontal = x; horizontal < xOffset; horizontal++) {
            for (var vertical = y; vertical < yOffset; vertical++) {
                this.area[horizontal][vertical].addClaim(id);
            }
        }
    }

    overlapCheck() {
        let overlaps = [];
        this.area.forEach(line => {
            line.forEach(plot => {
                if (plot.claims.length > 1) {
                    plot.claims.forEach(claim => {
                        overlaps.push(parseInt(claim));
                    })
                }
            })
        })

        let claims = [];
        for (var i = 1; i <= 1317; i++) {
            claims[i] = i;
        }

        claims = claims.filter(identifier => {
            return overlaps.indexOf(identifier) == -1
        });

        return claims

    }

}

class Plot {
    constructor (x, y) {
        this.x = x;
        this.y = y;
        this.claims = [];
    }

    addClaim(id) {
        this.claims.push(id);
    }

}