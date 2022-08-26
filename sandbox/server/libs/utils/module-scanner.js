const path = require("path");
const fs = require("fs");
const Typing = require("./typing.class");
const TypeParser = require("./type-parser.class");

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
                modStruct[moduleName] = option.from;
            }
        }

        return modStruct;     
    }

    static matchExtenstion(extname, extension){
        if(extension === "*") {
            return true;
        }

        if(Typing.isArray(extension)) {
            extension.forEach(ext => {
                if(ext === extname) {
                    return true;
                }
            });
        }

        // if(Typing.is(extension).instanceOf())
    }
 
}

TypeParser.castFrom(10).toWrapperType();