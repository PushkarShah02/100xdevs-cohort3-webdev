const bcrypt = require("bcrypt")
const express = require("express");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const JWT_SECRET = "random@random@somthing";
const {z}=require("zod");

mongoose.connect("mongodbURLhere");
const app = express();
app.use(express.json());

app.post("/signup", async function (req, res) {
    
    const requiredBody=z.object({
        email:z.string().email().max(20).min(3),
        name: z.string().max(20).min(3),
        password:z.string().max(20).min(5)
    })

    // const parsedData= requiredBody.parse(req.body)
    const parsedDataWithSuccess=requiredBody.safeParse(req.body);

    if(!parsedDataWithSuccess.success){
        res.json({
            msg:"Incorrect format"
        })
        return;
    }


    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;


    try {
        const hashedpassword = await bcrypt.hash(password, 10)
        console.log(hashedpassword);

        await UserModel.create({
            email: email,
            password: hashedpassword,
            name: name
        })

        res.json({
        msg: "You are logged in"
    })
    }
    catch(err){
        res.json({
            msg:"This email already exist "
        })
    }

});

app.post("/signin", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email
    })

    if (!user) {
        res.status(403).json({
            msg: "User doesnt exist in DB"
        })

        return;
    }
    const passwordMatched = await bcrypt.compare(password, user.password)

    if (passwordMatched) {
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
    const userid = req.userid
    const description = req.headers.description;
    const done = req.headers.done;

    await TodoModel.create({
        description,
        done,
        userid
    })

    res.json({
        msg: "Todo created"
    })
});

app.get("/todos", auth, async function (req, res) {
    console.log("Decoded user ID:", req.userid);
    const userid = req.userid
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