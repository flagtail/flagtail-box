const path = require("path");
const fs = require("fs");
const Path = require("./path.class");
const Typing = require("./typing.class");
const JSONResolver = require("./json-resolver.class")

module.exports = class ModuleScanner {

    static scan(option){

        option.from = option.from ?? ".";
        option.extension = option.extension ?? "*";

        let modStruct = {};
        
        const dirents = fs.readdirSync(option.from, { withFileTypes:true })
        
        for(const dirent of dirents) {

            const isDir = dirent.isDirectory();

            if(isDir) {
                const newOption = { ...option }
                const directoryPath = Path.from(option.from).getPath(dirent.name);
                newOption.from = directoryPath;
                modStruct[dirent.name] = ModuleScanner.scan(newOption);
            }

            if(!isDir) {
                const moduleName = path.basename(dirent.name, path.extname(dirent.name));

                if(this.matchExtenstion(path.extname(dirent.name), option.extension)) {
                    modStruct[moduleName] = `${option.from}/${moduleName}`;
                }
                
            }
        }

        return modStruct;     
    }

    static matchExtenstion(extname, extension){

        if(extension === "*") {
            return true;
        }

        if(Typing.isArray(extension)) {
            for(let i = 0; i < extension.length; i++) {
                if(extension[i] === extname){
                    return true;
                }
            }
        }

        if(Typing.is(extension).primitiveOf(String)){
            return extname === extension;
        }

        return false;
    }
    
    static bundle(path, option){

        option = option ?? {};
        const ignoreDir = option.ignoreDir ?? [];
        const ignoreFile = option.ignoreFile ?? [];

        const sep = require("path").sep;
        const root = path.split(sep)[path.split(sep).length-1]
        const bundle = {}

        const scanned = ModuleScanner.scan({
            from:path,
            extension:[".js"],
        })

        JSONResolver.action(scanned, {
            returnValue: (modulePath) => {
                const modulePathArr = modulePath.split(sep);
                const rootPathPoint = modulePathArr.indexOf(root);
                const moduleNameArr = modulePathArr.slice(rootPathPoint + 1);
                const moduleName = moduleNameArr.join("/");

                if(ignoreDir.length > 0 && moduleNameArr.length > 1) {
                    for(let i = 0; i < moduleNameArr.length - 1; i++) {                    
                        const result = ignoreDir.find(dirName=> dirName === moduleNameArr[i]);
                        if(Typing.isNotNull(result)) return;
                    }
                }

                if(ignoreFile.length > 0 ) {
                    const result = ignoreFile.find(fileName=>fileName === moduleNameArr[moduleNameArr.length-1]);
                    if(result) return;
                }

                bundle[moduleName] = modulePath;
            }
        })

        if(bundle.index) delete bundle.index

        return bundle;
    }
}
