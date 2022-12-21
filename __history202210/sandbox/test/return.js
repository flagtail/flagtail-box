function test() {
    const a = [1, 2, 3, 4]

    a.forEach(num => {
        console.log(num);
        return "hello";
    })
}

console.log(test());
console.log(test());