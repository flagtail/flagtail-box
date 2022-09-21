const Context = require("./base/Context.class")
const Typing = require("./util/Typing.class")
const express = require("express");
const ModuleScanner = require("./util/ModuleScanner.class");


module.exports = function run(args) {
    const conditions = [
        Typing.chain(args.protocol).ifNullThrow().primitiveOf(String).sameWith(["http", "https"]),
        Typing.chain(args.port).ifNullThrow().primitiveOf(Number),
    ]

    if(!conditions.every(elem => elem.isValid())) {
        throw new RangeError("check server arguments and range");
    }

    const context = new Context(express());


}