module.exports = require("fs")
.readdirSync(`${__dirname}/routes`, {withFileTypes:false})
.map(file => path.basename(file, path.extname(file)))
.forEach(file=> {
    const method = file.split("#")[0];
    const url = "/"+file.split("#")[1].replaceAll("-","/");
    route[method](url, require(`${__dirname}/routes/${file}`));
})