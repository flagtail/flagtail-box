const ExternalResource = require("./ExternalResource.class");

module.exports = class Network extends ExternalResource {
    host(host){
        this.host = host;
    }

    port(port){
        this.port = port;
    }

}