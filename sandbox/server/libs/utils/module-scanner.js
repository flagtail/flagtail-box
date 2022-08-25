class ModuleBuilder {

    static ROOT = Symbol("root")
    static PROJECT = Symbol("project")
    static MOD = "<<MODULE>>"

    static build(options) {
        /* 
            options : { 
                from : the path string,
                excludeFiles : string[] the filename or dirname,
            }
        */
        const moduleStructure = new Module({
                                        [ModuleBuilder.ROOT]: options.from,
                                        [ModuleBuilder.PROJECT]: ModuleBuilder.#scan(options),
                                    })
                            
        return Object.freeze(moduleStructure);
    }

    static #scan(options) {
        options = ModuleBuilder.#validateOption(options);

        let modStruct = {};
        
        const dirents = fs.readdirSync(options.from, { withFileTypes:true }).filter(dirent => !options.excludeFiles.includes(dirent.name))
        
        for(const dirent of dirents) {

            const isDir = dirent.isDirectory();

            if(isDir) {
                const newOptions = { ...options }
                newOptions.from = Path.from(options.from).getPath(dirent.name);
                modStruct[dirent.name] = ModuleBuilder.#scan(newOptions);
            }

            if(!isDir) {
                const moduleName = path.basename(dirent.name, path.extname(dirent.name));
                // modStruct[moduleName] = dirent.name;
                if(!(modStruct[ModuleBuilder.MOD])) {
                    modStruct[ModuleBuilder.MOD] = []
                }

                modStruct[ModuleBuilder.MOD] = [...modStruct[ModuleBuilder.MOD], dirent.name]
            }
        }

        return modStruct;
    }

    static #validateOption(options){
        options = options ?? {}
        options.from    = options?.from ?? Path.from(__dirname).getPath(".");
        options.excludeFiles = options?.excludeFiles ?? null;
        // options.include = options?.include ?? null
        // options.type    = options?.type ?? ModuleType.FILES;

        if(!(options.from instanceof Path)) { new TypeError("options.from must be <Path> type") }
        if(options.excludeFiles !== null && !(options.excludeFiles instanceof Array)) { new TypeError("options.excludeFiles must be <Array> type") }
        // if(options.include !== null && !(options.include instanceof Array)) { new TypeError("options.include must be <Array> type") }
        // if(!(typeof options.type === "symbol")) { new TypeError("option.type must be symbol of <ModuleType>")}

        return options;
    }
    
}