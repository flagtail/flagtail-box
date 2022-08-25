class JSONUtils {

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

    // static findKeys(json, selectKey) {

    //     const selected = {};

    //     for(const [key, value] of Object.entries(json)){
    //         if(key === selectKey){
    //             selectKey[key] = value;
    //         } else {
    //             if()
    //         }
    //     }
    // }

}

class Typing {

    static isNotNull(target) {
        return (
            target !== null &&
            target !== undefined &&
            target !== ""
        ) ? true : false;
    }

    static isNull(target) {
        return (
            target === null ||
            target === undefined ||
            target === ""
        ) ? true : false;
    }

    static ifNullAction(target, action, ...args) {
        if (Typing.isNull(target)) {
            if (Typing.isFunction(action)) return action(...args);
            return action;
        }
    }

    static ifNullThrow(target) {
        if (Typing.isNull(target)) {
            throw new TypeError(`the target is null or undefined or empty`)
        }
    }

    static checkWrapper(valueOfTarget) {
        const wrapperClasses = [String, Number, Boolean];
        return wrapperClasses.find(clazz => valueOfTarget instanceof clazz)
    }

    static checkPrimitive(valueOfTarget) {
        const primitiveClasses = [
            typeof 'str',
            typeof 10,
            typeof true,
            typeof BigInt(10),
            typeof Symbol()
        ];
        return primitiveClasses.find(typeName => typeof valueOfTarget === typeName)
    }

    static wrapperToPrimitive(wrapperTypeName) {
        let primitiveTypeName;

        if (wrapperTypeName === Boolean) {
            primitiveTypeName = typeof true;
        } else if (wrapperTypeName === Number) {
            primitiveTypeName = typeof 10;
        } else if (wrapperTypeName === BigInt) {
            primitiveTypeName = typeof BigInt(10);
        } else if (wrapperTypeName === String) {
            primitiveTypeName = typeof 'str';
        } else if (wrapperTypeName === Symbol) {
            primitiveTypeName = typeof Symbol();
        } else {
            primitiveTypeName = null;
        }

        return primitiveTypeName;
    }

    static isFunction(target) {
        return typeof target === "function" && target.toString().startsWith("function")
    }

    static isClass(target) {
        return typeof target === "function" && target.toString().startsWith("class")
    }

    static match(expectedType) {
        return {
            parse: function (target) {
                const wrapperTypeNameOfTarget = Typing.checkWrapper(target);
                if (wrapperTypeNameOfTarget) {
                    return wrapperTypeNameOfTarget === expectedType;
                }

                const primitiveTypeNameOfTarget = Typing.checkPrimitive(target);

                if (primitiveTypeNameOfTarget) {
                    return primitiveTypeNameOfTarget === Typing.wrapperToPrimitive(expectedType);
                }

                if (!wrapperTypeNameOfTarget && !primitiveTypeNameOfTarget) {
                    return target instanceof expectedType
                }
            }
        }
    }

    static scheme(json, schema) {
        const result = {}

        if (json instanceof Array) {
            const arrResult = []
            for (let i = 0; i < json.length; i++) {
                if (json[i] instanceof Object  && !Typing.checkWrapper(json[i])) {
                    const objectScheme = schema.filter(type=>{
                            return type instanceof Object && !Typing.isFunction(type);
                        })
                    arrResult[i] = Typing.scheme(json[i], objectScheme[0]);
                } else {
                    const notObjectScheme = schema.filter(type=>{
                            return Typing.isFunction(type);
                        })
                    let typeMatchResult = false;
                    for(const type of notObjectScheme){
                        if(Typing.match(type).parse(json[i])){
                            typeMatchResult = true;
                            break;
                        }
                    }
                    arrResult[i] = typeMatchResult;
                }
            }
            return arrResult;
        } else {
            for (const key in json) {
                if (json[key] instanceof Object && !Typing.checkWrapper(json[key])) {
                    result[key] = Typing.scheme(json[key], schema[key])
                } else {
                    result[key] = Typing.match(schema[key]).parse(json[key])
                }
            }
            return result;
        }
    }

    static isSchemeValid(resultOfScheme){
        let isValidScheme = true;
        try{
            JSONUtils.parse(resultOfScheme, value=>{
                if(value === false){
                    throw new SyntaxError()
                }
            })
        }catch{
            isValidScheme = false;
        }finally{
            return isValidScheme;
        }
    }

}

class Composer{

    static init(initFunc){
        return {
            stream: (...funcList) => {
                return funcList.reduce((previous, current)=>{
                    return current(previous);
                }, initFunc)
            }
        }        
    }
    
}

class Observable {
    
    constructor() {
        this.observers = []
    }

    subscribe(func) {
        this.observers.push(func);
        return this;
    }

    unsubscribe(func) {
        this.observers = this.observers.filter(observer => observer !== func)
        return this;
    }

    notify(data) {
        this.observers.forEach(observer => observer(data));
    }

    
    notifySafe(data){
        return {
            inspect(callback){
                this.observers.forEach(observer => {
                    if(callback(data)){
                        observer(data)
                    }
                });
            }
        }
    }
    
}


module.exports = {
    JSONUtils,
    Typing,
    Composer,
    Observable,
}