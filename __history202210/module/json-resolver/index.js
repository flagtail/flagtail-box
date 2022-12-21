const JSONResolver = require("./json-resolver");

const data = {
    a: 10,
    b: 20,
    c: 30,
    d: {
        aaa:"123123",
        ccc: [1,2,3,{inside:"ohyeah"}],
        abc: {
            name: "rhie",
            area: [
                33,
                {
                    st: "hello",
                    jete:[11, 111, 111],
                },
                55
            ]
        }
    }
};


(async()=>{
    const result = JSONResolver.action(data, {
        returnValue:(value)=>value+"|||||",
    });
    console.log(JSON.stringify(result, null, 4));
    console.log("--------------------------")
    console.log(JSON.stringify(data, null, 4));

    // console.log(JSONResolver.parse("key.a.b.c").join("."))
})()