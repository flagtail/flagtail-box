const ModuleScanner = require("./util/ModuleScanner.class")
const bundle = ModuleScanner.bundle(__dirname);
for(const key in bundle){
    bundle[key] = require(bundle[key]);
}
module.exports = bundle;