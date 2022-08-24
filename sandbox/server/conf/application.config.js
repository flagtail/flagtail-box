module.exports = {
    dirname: "app", /* pointing directory */

    forward: { /* give configurations to pointed directory */
        lib: ["common"], /* common library */
        port: 3000, /* application port */
    }

}