const Component = require("./component.class")
const HttpMethod = require("../enum/http-method.class")

class Router extends Component {

    HttpMethod = HttpMethod
    
    uri() {
        return "*"
    }

}

module.exports = Router;