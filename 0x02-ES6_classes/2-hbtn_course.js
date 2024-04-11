export default class HolbertonCourse {
    constructor(name, length, students) {
        if (typeof name !== 'string') throw new TypeError('name must be a string');
        if (typeof length !== 'number') throw new TypeError('Length must be a number');
        if (!Array.isArray(students)) throw new TypeError('Students must be an array');
        this._name = name;
        this._length = length;
        this._students = students;
    }
    get name() {
        return this._name;
    }

    set name(res) {
        if (typeof name !== 'string') throw new TypeError('Name must be a string');
        this._name = res;
    }

    get length() {
        return this._length;
    }

    set length(res) {
        if (typeof length !== 'number') throw new TypeError('Length must be a number');
        this._length = res;
    }

    get students() {
        return this._students;
    }

    set students(res) {
        if (!Array.isArray(students)) throw new TypeError('Students must be an array');
        this._students = res;
    }
}