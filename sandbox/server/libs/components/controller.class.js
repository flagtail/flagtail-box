const Router = require("./router.class")

class Controller extends Router{

    handle(req, res) {
        throw new SyntaxError("<Controller.class> handle() not overrided");
    }

}

module.exports = Controller