const http = require("http");
const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

class Member {
    get(req, res) {
        console.log("get request");
        console.log(req.params);
        res.send("hello world");
    }

    static get(req,res) {
        console.log("static get request");
        console.log(req.params);
        res.send("static world")
    }
}


const m = new Member()
const router = express.Router();

const insGet = m.get;
const staGet = Member.get;

router.get("/ins", insGet);
router.get("/sta", staGet);

app.use("/", router);

http.createServer(app).listen(3333, () => {
    console.log(`app listening at https://localhost:${3333}`);
});