module.exports = class JSONResolver {

    static action(json, option) {
        
        const result = {}

        return JSONResolver.resolve(json, result, option)


    }

    static resolve(originJSON, option){
        
    }

    static resolvettt(inputJSON, outputJSON, option) {
        option = option ?? {};
        option.updateKey = option?.updateKey ?? function(key) { return key };
        option.ignoreKey = option?.ignoreKey ?? [];
        option.updateValue = option?.updateValue ?? function (value) { return value };
        option.ignoreValue = option?.ignoreValue ?? [];

        if (inputJSON instanceof Array) {
            const arrResult = []
            for (let i = 0; i < inputJSON.length; i++) {
                if (inputJSON[i] instanceof Object) {
                    const obj = Object.assign({}, inputJSON[i]);
                    arrResult[i] = JSONResolver.resolve(inputJSON[i], obj, option)
                } else {
                    arrResult[i] = option.updateValue(inputJSON[i]);
                }
            }

            return arrResult;
            
        } else {

            for (const key in inputJSON) {
                if (inputJSON[key] instanceof Object) {
                    const obj = Object.assign({}, inputJSON[key]);
                    outputJSON[key] = JSONResolver.resolve(inputJSON[key], obj, option)    
                } else {
                    outputJSON[key] = option.updateValue(inputJSON[key])
                }
            }

            return outputJSON;
        }
    }

}