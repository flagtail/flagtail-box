console.log("into the container module")

class Container {

    static data = {}

    static setData(key, value) {
        Container.data[key] = value;
        return true;
    }

    static getData(key) {
        return Container.data[key];
    }

    static getAll() {
        return Container.data;
    }
}

console.log(Container.setData("a", 10))
console.log(Container.setData("b", 20))
console.log(Container.setData("c", 30))
console.log(Container.getData("b"))
console.log(Container.getAll())

// class Container {
//     constructor() {
//         this.data = {}
//     }

//     setData(key, value) {
//         this.data[key] = value;
//         return true;
//     }

//     getData(key) {
//         return this.data[key];
//     }

//     getAll() {
//         return this.data;
//     }
// }

module.exports = Container;
// module.exports = new Container();
console.log("the container module is loaded")