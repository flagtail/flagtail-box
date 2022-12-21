const Typing = require("../utils/typing.class")

class A {}
const a = new A();

console.log(Typing.is(a).instanceOf(A))