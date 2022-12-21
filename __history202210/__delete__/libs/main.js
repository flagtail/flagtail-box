const path = require("path");
const projectPath = path.join(__dirname, "..", "..")

require("module")[Symbol.for("project")] = projectPath;

require("module")[Symbol.for("load")] = (moduleName) => {
    return require(path.join(projectPath, moduleName))
}

require("module")[Symbol.for("get")] = () => {
    return __dirname;
}

require("module")[Symbol.for("load")]("server/meta/loader")
require("module")[Symbol.for("load")]("server/libs/temp-test")
console.log(require("module")[Symbol.for("data")])
require("module")[Symbol.for("data")].testFunction("say", 10101010);

console.log(require("./temp-test").data)

require("module")[Symbol.for("data")].testFunction("aaa", 111111);

console.log(require("./temp-test").data)

console.log(Object.getOwnPropertyNames(Symbol));