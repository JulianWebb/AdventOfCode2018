module.exports = class Log {
    constructor() {

    }
}

class Entry {
    constructor(datetime, action) {
        this.datetime = datetime;
        this.action = action;
    }
}