const A = require("../a/moda");

class D extends A {}


console.log(" --- D.dirname --- ")
console.log(__dirname)
console.log(" --- D.cwd --- ")
console.log(process.cwd())

module.exports = D;