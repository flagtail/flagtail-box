const ModuleScanner = require("./util/ModuleScanner.class")
const bundle = ModuleScanner.bundle(__dirname, {
    ignoreDir:["common", "request", "response", "resource"],
    ignoreFile:["Context"],
});

module.exports = () => {
    const Context = require("./core/Context");
    const ctx = new Context();
    for(const key in bundle){
        const mod = require(bundle[key]);
        ctx[mod.name] = mod
    }
    return ctx;
};