const TypeParser = require("./type-parser.class")

module.exports = class Typing {

    static isNotNull(value) {
        return (
            value !== null &&
            value !== undefined &&
            value !== ""
        ) ? true : false;
    }

    static isNull(value) {
        return (
            value === null ||
            value === undefined ||
            value === ""
        ) ? true : false;
    }

    static ifNullThrow(value) {
        if (Typing.isNull(value)) {
            throw new TypeError(`the value is null or undefined or empty`)
        }
    }

    static isWrapper(value) {
        const wrapperClasses = [String, Number, Boolean];
        return wrapperClasses.find(clazz => value instanceof clazz)
    }

    static isPrimitive(value) {
        return (typeof value !== 'object' && typeof value !== 'function') || value === null
    }

    static isFunction(value) {
        return typeof value === "function" && value.toString().startsWith("function")
    }

    static isClass(value) {
        return typeof value === "function" && value.toString().startsWith("class")
    }

    static isObject(value) {
        return typeof value === "object"
    }

    static isArray(value) {
        return typeof value === "object" || value instanceof Array;
    }

    static is(value) {
        return {
            instanceOf(typeName) {
                return value instanceof typeName;
            },

            primitiveOf(typeName) {
                if(TypeParser.isWrapperType(typeName)) {
                    TypeParser.wrapperToPrimitive(typeName)
                }
            },

            same(valueOrType) {
                return value === valueOrType;
            }
        }
    }

}