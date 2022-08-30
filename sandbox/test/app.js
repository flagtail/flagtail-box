const http = require("http");
const express = require('express');
const app = express();
const qs = require('qs');
const assert = require('assert')

class MyError extends Error {
    
    constructor(message) {
        super(message)
        this.message = message;
        this.name = "MY ERORR !!!"
    }

}

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const appRouteA = express.Router();
const appRouteB = express.Router();

appRouteA.get("/get", (req, res) => { 
    console.log(req.app.mountpath)
    res.json("hello my route A")
})

function middle(req, res, next) {
    console.log("hello")
    next();
}

appRouteB.get("/bbb/:dd", [middle], (req, res) => { 
    var expected = {
        a: {
            b: {
                c: {
                    d: {
                        e: {
                            f: {
                                '[g][h][i]': 'j'
                            }
                        }
                    }
                }
            }
        }
    };
    var string = 'a[b][c][d][e][f][g][h][i]=k';
    console.log(req.query)
    console.log(qs.parse(req.body))
    console.log(req.body)
    throw new MyError("hhhhhhhhhhhhhhhhhh")

    res.json("hello my route B")
})

app.use("/sample", appRouteA)
app.use("/sample", appRouteB)

app.get('/user/:id', (req, res, next) => {
    next()
})
  
// handler for the /user/:id path, which sends a special response
app.get('/user/:id', (req, res) => {
    res.json(req.app.get('aaa'))
})

app.use(function (error, req, res, next) {
    console.log("in the error middle")
    console.log(error)
    console.log(error instanceof MyError)

    res.status(400).json("{ message }")
})

http.createServer(app).listen(3333, () => {
    console.log(`app listening at https://localhost:${3333}`);
});