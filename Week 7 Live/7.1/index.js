const express = require("express");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");
const JWT_SECRET = "random@random@somthing";

mongoose.connect("mongodb+srv://PushkarShah2003:Spushkar2003%40mongo@cluster0.dlgskwc.mongodb.net/Todo_app_database");
const app = express();
app.use(express.json());

app.post("/signup", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({
        email: email,
        password: password,
        name: name
    })

    res.json({
        msg: "You are logged in"
    })
});

app.post("/signin", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
        password: password
    })
    // console.log(user);

    if (user) {
        const token = jwt.sign({
            id: user._id
        }, JWT_SECRET);
        res.json({
            token: token
        })
    }

    else {
        res.status(403).json({
            msg: "Incorrect Credentials"
        })
    }
});

function auth(req, res, next) {
    const token = req.headers.token;
    try {
        const decodedData = jwt.verify(token, JWT_SECRET);
        if (decodedData) {
            // store decoded data in request for future use
            req.userid = decodedData.id
            next();
        }
    }
    catch (err) {

        res.status(401).json({
            msg: "Invalid token "
        })

    }
}
app.post("/todo", auth, async function (req, res) {
    const userid=req.userid
    const description=req.headers.description;
    const done=req.headers.done;

    await TodoModel.create({
        description,
        done,
        userid
    })

    res.json({
        msg:"Todo created"
    })
});

app.get("/todos", auth, async function (req, res) {
    console.log("Decoded user ID:", req.userid);
    const userid=req.userid
    const todo = await TodoModel.find({
        userid
    })

    res.json({
        todo
    })

});

app.listen(3000, () => {
    console.log("listning on port 3000");
})