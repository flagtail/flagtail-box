const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const cookieParser = require('cookie-parser');
const server_session = require('express-session');

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));

app.use('/public', express.static(path.join(__dirname, '../common/public')));

app.use(require("cors")())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());
app.use(server_session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: false,
}))

// Request Logging on Console
app.use("/", (req, res) => {
    console.log({
        method: req.method,
        url: req.url
    });
    req.next()
});

app.set("config", require("../common/config/external"));
app.set("libs", require("../common/libs"));
app.set("utils", require("../common/utils"));
app.set("resources", require("./resources")(app));

const route = express.Router();
require("fs")
    .readdirSync(`${__dirname}/routes`, {withFileTypes:false})
    .map(file => path.basename(file, path.extname(file)))
    .forEach(file=> {
        const method = file.split("#")[0];
        const url = "/"+file.split("#")[1].replaceAll("-","/");
        route[method](url, require(`${__dirname}/routes/${file}`));
    })
app.use("/", route);

const domain = require("../common/config/domain").broker

// Running Server
require(domain.protocol).createServer(app).listen(domain.port, () => {
    console.log(`app listening at http://localhost:${domain.port}`);
});


