const Router = require("module").import("router").Router

module.exports = class extends Router {

    uri() {
        return "/ping"
    }

    handle(req, res) {
        const s1 = this.service["sample.service"].execute(req);
        const s2 = this.service["example.service"].execute(s1);
        return res.send("hello world");
    }

}