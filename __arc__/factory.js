class Factory {

    static #factoryMode

    constructor(){
        if(!Factory.#factoryMode) {
            throw new SyntaxError("You can't create the Factory instance using new operation")
        }
        Factory.#factoryMode = false;
    }

    static create(Clazz){
        Factory.#factoryMode = true;
        
        if(Object.getPrototypeOf(Clazz) === Factory) {
            const ins = new Clazz();
            ins.data = "this is child";
            return ins;
        }
        const ins = new Factory();
        ins.data = "hello world";
        return ins;
    }

    static createInstacne(ins) {

    }

}

class ChildFactroy extends Factory {
}

console.log(Factory)
console.log(Object.getPrototypeOf(ChildFactroy))

const fact = Factory.create(ChildFactroy);
console.log(fact.data)
console.log(fact);