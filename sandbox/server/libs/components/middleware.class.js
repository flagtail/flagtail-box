const Router = require("./router.class")

class Middleware extends Router{

    handle(req, res, next) {
        throw new SyntaxError("<Middleware.class> handle() not overrided");
    }
    
}

module.exports = Middleware;