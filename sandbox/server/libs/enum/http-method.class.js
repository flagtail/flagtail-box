class HttpMethod {
    static GET     = "get";
    static POST    = "post";
    static PUT     = "put";
    static DELETE  = "delete";
    static HEAD    = "head";
    static OPTIONS = "options";
    static PATCH   = "patch";
    static TRACE   = "trace";
}

module.exports = Object.freeze(HttpMethod);