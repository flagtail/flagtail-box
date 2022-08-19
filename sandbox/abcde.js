const path = require("path");
const a = require("abcde")
require("dotenv").config({
    path: path.join(__dirname, ".env")
});

// console.log(a);
// console.log(global);

// console.log(process);
console.log(process.env.AAAA)
console.log(process.env.THE_TEST_ENV)
console.log(require.main.paths.push(path.join(__dirname)));

console.log(require("afafa").set("a", 1111));
console.log(require("afafa").set("b", { num : 10 }));
console.log(require("afafa").set("c", "1234"));
console.log(require("afafa").set("d", null));
console.log(require("afafa").all())

console.log(process);
