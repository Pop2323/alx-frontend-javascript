export default class HolbertonClass {
    constructor(size, location) {
        this._size = size;
        this._location = location;
    }

    get size() {
        return this._size;
    }

    set size(val) {
        this._size = val;
    }

    get location() {
        return this._location;
    }

    set location(val) {
        this._location = val
    }

    [Symbol.toPrimitive](hint) {
        if (hint === 'number') {
            return this._size;
        }
        if (hint === 'string') {
            return this._location;
        }
        return null;
    }
}