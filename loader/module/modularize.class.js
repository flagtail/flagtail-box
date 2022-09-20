const JSONHandler = require("./json-handler.class");
const ModuleScanner = require("./module-scanner.class");

module.exports = class Modularize {
    static bundle(path, option){

        const ignoreDir = option.ignoreDir ?? [];
        const ignoreFile = option.ignoreFile ?? ["index"];

        const sep = require("path").sep;
        const root = path.split(sep)[path.split(sep).length-1]
        const bundle = {}

        const scanned = ModuleScanner.scan({
            from:path,
            extension:[".js"],
        })

        JSONHandler.action(scanned, {
            returnValue: (modulePath) => {
                const modulePathArr = modulePath.split(sep)
                const rootPathPoint = modulePathArr.indexOf(root)
                const moduleName = modulePathArr.slice(rootPathPoint + 1).join("/")
                if(ignoreDir.length > 0) {
                    // TODO
                }
                bundle[moduleName] = modulePath;
            }
        })

        if(bundle.index) delete bundle.index

        return bundle;
    }
}