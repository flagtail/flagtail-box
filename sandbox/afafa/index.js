console.log("------ afafa ------");
class Box {
    constructor() {
        this.data = {}
    }

    set(k, v) {
        this.data[k] = v;
        return true;
    }

    get(k) {
        return this.data[k]
    }

    all() {
        return this.data;
    }
}

module.exports = new Box();
console.log(" -------------- ")