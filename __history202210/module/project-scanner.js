const path = require("path");

module.exports = class ProjectScanner {

    constructor(rootPath) {
        this.rootPath = path.join(...this.#parseArg(rootPath));
    }

    static from(rootPath) {
        return new ProjectScanner(rootPath)
    }

    import(pathStringOrArray) {
        return require(`${path.join(this.rootPath, ...this.#parseArg(pathStringOrArray))}`);
    }

    getPath(pathStringOrArray) {
        return path.join(this.rootPath, ...this.#parseArg(pathStringOrArray));
    }

    #parseArg(arg){
        if (typeof arg === "string") return arg.split("/");
        if(arg instanceof Array) return arg
        throw new TypeError("parse path error");
    }
}