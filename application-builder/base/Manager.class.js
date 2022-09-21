const Typing = require("../util/Typing.class")

module.exports = class Manager {

    #name

    constructor(name) {
        if(!Typing.chain(name).isNotNull().primitiveOf(String).isValid()) {
            throw new SyntaxError("must set argument when construct <Manager>");
        }
        this.#name = name;
    }

    getName(){
        return this.#name;
    }

}