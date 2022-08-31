const Middleware = require("./middleware.class")

class MyMiddleware extends Middleware {

    handle(req, res, next) {
        console.log("hello");
    }
}

const mm = new MyMiddleware();
mm.init();