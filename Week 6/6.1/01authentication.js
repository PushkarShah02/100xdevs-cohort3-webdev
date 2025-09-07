const express = require("express");
//express lib returns a function

const app = express(); // you call this function to create a http app

app.use(express.json()); // this middleware help us to parse the body when we send post req

const users = [];

function randomToken() {
    length = 32;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < length; i++) {
        token += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return token;
}

app.post("/signup", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })

    console.log(users)

    res.json({
        msg: "you are signed up",
    })

})


app.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;
    for (let i = 0; i < users.length; i++) {
        if (users[i].username == username && users[i].password == password) {
            foundUser = users[i];
        }

    }
    if (foundUser) {
        const token = randomToken();
        foundUser.token = token;
        console.log(users);
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

app.get("/me", function (req, res) {
    const token = req.headers.token;
    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].token == token) {
            foundUser = users[i];
        }
    }
    if (foundUser) {
        res.json({
            username: foundUser.username,
            Password: foundUser.password,
        });
    }
    else{
        res.json({
            message: "token is invalid"
        })
    }
})

app.listen(3000, () => {
    console.log("listning on port 3000")
})