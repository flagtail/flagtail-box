const Controller = require("./libs/components").controller;

class MemberController extends Controller {

    get(req, res) { }
    post(req, res) { }
    put(req, res) { }
    delete(req, res) { }
}

const member = new MemberController();

console.log(Object.getOwnPropertyNames(member))

console.log(Object.getOwnPropertyNames(
    Object.getPrototypeOf(member)
))
console.log(Object.getOwnPropertyNames(
    Object.getPrototypeOf(Controller.prototype)
))

console.log(member.HttpMethod)

console.log("===========================")
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(Object)));
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(Function)))
console.log(Object.getOwnPropertyNames(Object));
console.log(Object.constructor)
console.log(Object)
console.log(class{} instanceof Function)
console.log(class{} instanceof Object)
console.log("===========================")

let proto = member;
for(let i = 0; i < 5; i++){
    proto = Object.getPrototypeOf(proto);
    console.log(proto.constructor)
    console.log(proto.constructor === Object)
}