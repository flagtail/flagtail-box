const http = require("http");
const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

class Member {

    init() {
        this.name = "jade";
    }

    get(req, res) {
        console.log("get request");
        console.log(req.params);
        console.log(this);
        console.log(`the name is ${this.name}`)
        res.send("hello world");
    }

    static get(req, res) {
        console.log("static get request");
        console.log(req.params);
        res.send("static world")
    }
}


const m = new Member();
const router = express.Router();
m.init();
const insGet = m.get.bind(m);
const staGet = Member.get;

app.use("/", (req,res,next)=> {
    console.log(req.path)
    next();
})
router.get("/test", (req,res)=>{
    res.send("hello world");
})
router.get("/ins", insGet);
router.get("/inss", m.get);
router.get("/sta", staGet);

app.use("/", router);

http.createServer(app).listen(3333, () => {
    console.log(`app listening at https://localhost:${3333}`);
});