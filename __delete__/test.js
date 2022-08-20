const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function program(msg) {
    const [command, key, value] = msg.split(' ');

    if( command === "get") {
        return require("./container").getData(key);
    }

    if( command === "set") {
        return require("./container").setData(key, value);
    }

    if( command === "all") {
        return JSON.stringify(require("./container").getAll(), null, 4);
    }

    if( command === "ref-set") {
        const data = require("./container").getAll();
        data[key] = value;
        return true;
    }

    return command;
}

console.log("--- prompt ---");

rl.on('line', (msg) => {

    const result = program(msg);

    if (result === "exit") {
        rl.close();
    }

    console.log(`result: ${result}`);
});

rl.on('close', ()=> {
    console.log("terminated");
})