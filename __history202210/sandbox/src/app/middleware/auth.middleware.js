const Middleware = require("module").import("router").Middleware

module.exports = class extends Middleware {

    uri() {
        return "/ping"
    }

    handle(req, res, next) {
        
    }

}