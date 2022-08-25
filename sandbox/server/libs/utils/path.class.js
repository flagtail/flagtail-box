const path = require("path");

module.exports = class Path {

    static from(rootPath){
        return {
            getPath(subPath){
                if(subPath instanceof Array) {
                    return path.join(rootPath, ...subPath);   
                }
                return path.join(rootPath, subPath);
            }
        }
    }

}