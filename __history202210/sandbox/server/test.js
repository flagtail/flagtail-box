// function FirstClass() {
//     this.name = "hello";
// }

// class Clazz {
//     name = "hello";
// }

// class Childish extends FirstClass {}
// class Clazzer extends Clazz {}

// function FuncMall() {
//     FirstClass.call(this);
// }

// function ClassMall() {
//     Clazz.call(this);
// }


// const a = new Childish();
// const b = new Clazzer();


// console.log(a);
// console.log(b);

// const c = new FuncMall();
// const d = new ClassMall();

// console.log(c);
// console.log(d);

class Requester {
    
    msg = "hello world"

    post(req, res) {
        console.log(`(req, res) : (${req}, ${res})`)        
        console.log(`MESSAGE : ${this.msg}`)
    }
}

const requester = new Requester();
requester.post();
const myPost = requester.post;
myPost();