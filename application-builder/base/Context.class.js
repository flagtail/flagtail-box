const Manager = require("./Manager.class");
const Typing = require("../util/Typing.class");

module.exports = class Context {

    constructor(app){
        this.app = app;
        this.managers = {};
    }

    registManager(manager){
        if(!Typing.chain(manager).isNotNull().instanceOf(Manager).isValid()) {
            throw new RangeError("setManager() argument error: must be instance of <Manager>");
        }
    }

    
}