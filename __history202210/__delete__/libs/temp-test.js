console.log("load temp-test!!!!!!!!")

const data = {}

require("module")[Symbol.for("data")] = {}
require("module")[Symbol.for("data")].testFunction = (key, value)=>{
    data[key] = value;
}

module.exports.data = data;