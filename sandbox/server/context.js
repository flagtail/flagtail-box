


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