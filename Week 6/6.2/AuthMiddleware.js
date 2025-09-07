const express = require('express');
const jwt = require('jsonwebtoken');
const SecretKey = "ILoveMyself"

const app = express();
app.use(express.json());
app.use(logger);
let data = [];

function logger(req,res,next)
{
    console.log(req.method + " method is called")
    next();
}

app.get("/", function(req, res){
    res.sendFile(__dirname + "/Public/index.html");
})

app.post("/signup", function (req, res) {
    const username = req.body.username
    const password = req.body.password

    data.push({
        username: username,
        password: password
    })

    console.log(data)

    res.json({
        msg: "you sucessfully signed up boss"
    })
})

app.post("/signin", function (req, res) {
    const username = req.body.username
    const password = req.body.password
    let founduser = null;
    for (let i = 0; i < data.length; i++) {
        if (data[i].username == username && data[i].password == password) {
            founduser = data[i];
        }

    }
    if (founduser) {
        const token = jwt.sign({
            username: founduser.username
        }, SecretKey)

        res.json({
            token: token
        })
    }

    else {
        res.status(403).send({
            msg: "invalid credentials",
        })
    }
})

function AuthMiddleware(req, res, next) {
    const token = req.headers.token;
    const decodeToken = jwt.verify(token, SecretKey)

    if (decodeToken.username) {
        req.username = decodeToken.username;
        next()
    }
    else {
        res.json({
            msg: "token is invalid"
        })
    }
}
app.get("/info", AuthMiddleware, function (req, res) {
    let foundUser = null;

    for (let i = 0; i < data.length; i++) {
        if (data[i].username == req.username) {
            foundUser = data[i];
        }
    }
    if (foundUser) {
        res.json({
            username: foundUser.username,
            Password: foundUser.password,
        });
    }
    else {
        res.json({
            message: "User dont exist boss"
        })
    }
})

app.listen(3000, () => {
    console.log("listening on port 3000");
})