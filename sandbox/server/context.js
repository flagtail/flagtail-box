const [
    modularize,
    // tools,
] = [
        require("./libs/modularize"),
        // require("./libs/tools"),
    ]

const ModuleBuilder = modularize.ModuleBuilder;
const Path = modularize.Path;

const moduleInfo = ModuleBuilder.build({
    from: Path.from(__dirname).getPath(".."),
    excludeFiles: [
        "node_modules",
        "package.json",
        "package-lock.json",
        ".gitignore",
        ".gitkeep",
        "README.md",
    ]
})


console.log(JSON.stringify(moduleInfo.getProject(), null, 4))
console.log(require("server/libs/tools"));
console.log("=============REQ")
console.log(require)
console.log("=============MOD")
console.log(module);
console.log(require === module);
console.log(require.resolve("server/libs/loader"))
require("server/libs/loader")