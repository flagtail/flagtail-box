const Component = require("./component.class")

class Router extends Component {
    
    init() {
        this.str = "hello world";
    }

    uri() {
        return "*"
    }

}

module.exports = Router
