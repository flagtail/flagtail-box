const ModuleScanner = require("./module/module-scanner.class")
module.exports = ModuleScanner.bundle(__dirname, {
    ignoreDir:["deep-dump", "test-dump"],
    ignoreFile:["good"],
});