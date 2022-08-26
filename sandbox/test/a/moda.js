class A {
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

console.log(" --- A.dirname --- ")
console.log(__dirname)
console.log(" --- A.cwd --- ")
console.log(process.cwd())

module.exports = A;