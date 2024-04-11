export default class Building {
    constructor(sqft) {
        if (typeof sqft !== 'number') throw new TypeError('Class extending Building must override evacuationWarningMessage');
        this._sqft = sqft;
    }

    get sqft() {
        return this._sqft;
    }
}