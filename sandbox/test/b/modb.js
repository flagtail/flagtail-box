class B {
    static staticMethod() {
        return __dirname;
    }

    insMethod() {
        return __dirname
    }

    static staticCWD() {
        return process.cwd();
    }

    insCWD() {
        return process.cwd()
    }
}

console.log(" --- B.dirname --- ")
console.log(__dirname)
console.log(" --- B.cwd --- ")
console.log(process.cwd())

module.exports = B;