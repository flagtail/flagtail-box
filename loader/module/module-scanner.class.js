const path = require("path");
const fs = require("fs");
const Path = require("./path.class");
const Typing = require("./typing.class");

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
    
}
