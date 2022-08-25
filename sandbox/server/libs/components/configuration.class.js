const Component = require("./component.class")

class Configuration extends Component{

    config(app) {
        throw new SyntaxError("<Configuration.class> config() not overrided");
    }

}

module.exports = Configuration;