const a = require("abcde");

console.log("======= index =======")

a.set("a", 10);
a.set("b", 20);
a.set("b", 33);
a.set("c", 111);
console.log(a.all());

