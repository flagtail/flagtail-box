const A = require("./a/moda");
const B = require("./b/modb");
const C = require("./b/c/modc");
const D = require("./c/modd");

const a = new A();
const b = new B();
const c = new C();
const d = new D();


console.log(" ### index ### ")
console.log(" -= A =-")
console.log(A.staticMethod());
console.log(A.staticCWD());
console.log(a.insMethod());
console.log(a.insCWD());
console.log(" -= B =-")
console.log(B.staticMethod());
console.log(B.staticCWD());
console.log(b.insMethod());
console.log(b.insCWD());
console.log(" -= C =-")
console.log(C.staticMethod());
console.log(C.staticCWD());
console.log(c.insMethod());
console.log(c.insCWD());
console.log(" -= D =-")
console.log(D.staticMethod());
console.log(D.staticCWD());
console.log(d.insMethod());
console.log(d.insCWD());


/*  
 --- A.dirname --- 
/home/rhie/wp/fexpress/sandbox/test/a
 --- A.cwd --- 
/home/rhie/wp/fexpress/sandbox
 --- B.dirname --- 
/home/rhie/wp/fexpress/sandbox/test/b
 --- B.cwd --- 
/home/rhie/wp/fexpress/sandbox
 --- C.dirname --- 
/home/rhie/wp/fexpress/sandbox/test/b/c
 --- C.cwd --- 
/home/rhie/wp/fexpress/sandbox
 --- D.dirname --- 
/home/rhie/wp/fexpress/sandbox/test/c
 --- D.cwd --- 
/home/rhie/wp/fexpress/sandbox
 ### index ### 
 -= A =-
/home/rhie/wp/fexpress/sandbox/test/a
/home/rhie/wp/fexpress/sandbox
/home/rhie/wp/fexpress/sandbox/test/a
/home/rhie/wp/fexpress/sandbox
 -= B =-
/home/rhie/wp/fexpress/sandbox/test/b
/home/rhie/wp/fexpress/sandbox
/home/rhie/wp/fexpress/sandbox/test/b
/home/rhie/wp/fexpress/sandbox
 -= C =-
/home/rhie/wp/fexpress/sandbox/test/b/c
/home/rhie/wp/fexpress/sandbox
/home/rhie/wp/fexpress/sandbox/test/b/c
/home/rhie/wp/fexpress/sandbox
 -= D =-
/home/rhie/wp/fexpress/sandbox/test/a
/home/rhie/wp/fexpress/sandbox
/home/rhie/wp/fexpress/sandbox/test/a
/home/rhie/wp/fexpress/sandbox
*/