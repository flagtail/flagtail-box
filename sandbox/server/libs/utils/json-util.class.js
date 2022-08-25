module.exports = class JSONUtils {

    static parse(json, callback) {

        callback = callback ?? function (value) { return value }
    
        const result = {}
    
        if (json instanceof Array) {
            const arrResult = []
            for (let i = 0; i < json.length; i++) {
                if (json[i] instanceof Object) {
                    arrResult[i] = JSONUtils.parse(json[i], callback)
                } else {
                    arrResult[i] = callback(json[i]);
                }
            }
            return arrResult;
        } else {
            for (const key in json) {
                if (json[key] instanceof Object) {
                    result[key] = JSONUtils.parse(json[key], callback)
                } else {
                    result[key] = callback(json[key])
                }
            }
            return result;
        }
    
    }

}