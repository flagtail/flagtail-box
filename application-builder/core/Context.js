const Typing = require("../util/Typing.class")

module.exports = class Context {


    config(args) {
        if(!
            [
                Typing.chain(args).isNotNull(),
                Typing.chain(args.urlScheme).isNotNull().primitiveOf(String).sameWith(["http","https"]),
                Typing.chain(args.port).isNotNull().primitiveOf(Number),
                
            ].every(result => result.isValid())
        ) throw new SyntaxError("invalid arguments");
        
        this.application = require("express")();

        this.urlScheme = args.urlScheme;
        this.port = args.port;
        return this;
    }

    run() {
        require(this.urlScheme).createServer(this.application).listen(this.port, ()=> {
            console.log(`application is listening at ${this.urlScheme}://${this.host ?? "localhost"}:${this.port}`);
        })
    }

}