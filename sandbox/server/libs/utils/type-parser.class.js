module.exports = class TypeParser {

    static #wrapperToPrimitiveMap = {
        [Boolean.name]: typeof true,
        [Number.name]: typeof 10,
        [BigInt.name]: typeof BigInt(10),
        [String.name]: typeof "str",
        [Symbol.name]: typeof Symbol(),
    }

    static #primitiveToWrapperMap = {
        [typeof true] : Boolean,
        [typeof 10]: Number,
        [typeof BigInt(10)]: BigInt,
        [typeof "str"]: String,
        [typeof Symbol()]: Symbol,
    }

    static castFrom(type) {
        function toWrapperType(){
            const result = this.#wrapperToPrimitiveMap[wrapperType.name];
            return ;
        }
        return {

        }
    }

    static wrapperTypeToPrimitive(wrapperType) {
        
    }
    
    static primitiveToWrapper(value) {
        return this.#primitiveToWrapperMap[typeof value] ?? undefined;
    }

    static isWrapperType(type) {
        return typeof type === "function" && Object.keys(this.#wrapperToPrimitiveMap).includes(type.name)
    }

    static 

}