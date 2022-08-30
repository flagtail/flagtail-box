const obj_test = {
    a: 10,
    b: 20,
    c: 30,
    d: {
        aaa:"123123",
        ccc: [1,2,3,{inside:"ohyeah"}],
        abc: {
            a : 10,
            ccc:"good",
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
}

const JSONHandler = require("../server/libs/utils/json-handler.class")

console.log(JSONHandler.action(obj_test))