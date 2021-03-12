class ResultTemplate {

    static counter = 0;

    constructor(sides, pi, err) {
        this._id = ++ResultTemplate.counter;
        this._sides = parseInt(sides);
        this._pi = parseFloat(pi);
        this._err = parseFloat(err);
    }

    constructor(pi, err) {
        this._id = ++ResultTemplate.counter;
        this._pi = parseFloat(pi);
        this._err = parseFloat(err);
    }

    constructor(pi) {
        this._id = ++ResultTemplate.counter;
        this._pi = parseFloat(pi);
    }

}