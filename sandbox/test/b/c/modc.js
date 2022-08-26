class C {
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

console.log(" --- C.dirname --- ")
console.log(__dirname)
console.log(" --- C.cwd --- ")
console.log(process.cwd())

module.exports = C;