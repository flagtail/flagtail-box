class Frame {

    bind() { 

    }

    register() { 

    }

    parse() { 

    }

}

class Scanning extends Frame {
    init(){}
}

const scan = new Scanning()

function chain(depth, obj){
    let target = obj;
    for(let i = depth; i > 0; i--) {
        target = Object.getPrototypeOf(target);
        if(target !== null) console.log(target.constructor, target.constructor === Frame);
    }
}

chain(4, scan);

const Scanning_Prototype = Object.getPrototypeOf(scan);
const Scanning_Constructor = Scanning_Prototype.constructor;
const Scanning_Constructor_Prototype = Object.getPrototypeOf(Scanning_Constructor)

console.log(
    scan.__proto__.__proto__.constructor === Scanning_Constructor_Prototype
)

console.log(
    Object.prototype.constructor,
    Object.getPrototypeOf(Frame.prototype).constructor
)