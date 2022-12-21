module.exports = {

    app : {
        target: [ "view", "static", "middleware", "route", "service" ],
        formats: {
            view: { dirname:"view" },
            static: { dirname:"public" },
            middleware: { dirname:"middlename", format:"middle" },
            route: { dirname:"routes" },
            service: { format:"service" },
        },
    },

    common : {
        target: [ "util", "model", "requester" ],
        formats: {
            util: { dirname:"utils", format:"utils" },
            model: { dirname:"interfaces/models", format:"model" },
            requester: {dirname:"interfaces/requesters", format:"req" }
        }
    },

    external: {},

}

const regexp_targets = [
    "a1.middle.js",
    "a2.middleware.js",
    "a3.middle.sample.js",
    "a4.midd.js"
]

const formatName = "middle";

const re = new RegExp(`\\.${formatName}\\.`);
// const re = /\.middle\./
console.log(re);

for(let i = 0; i < regexp_targets.length; i++) {
    const target = regexp_targets[i];


    console.log(re.exec(target))
}