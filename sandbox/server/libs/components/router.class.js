const Component = require("./component.class")

class Router extends Component{
    
    uri() {
        return "*"
    }

    handle() {
        throw new SyntaxError("<Router.class> handle() not overrided");
    }

}

module.exports = Router