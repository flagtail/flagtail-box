const Component = require("./component.class")

class Service extends Component {

    execute(app) {
        throw new SyntaxError("<Configuration.class> config() not overrided");
    }
    
}

module.exports = Service;