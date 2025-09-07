// const express = require("express");
// const UserRouter = express.Router();

const { Router } = require("express")        //-----> both are doing the same
const userRouter = Router();
const { z } = require("zod")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { UserModel, CoursesModel } = require("../db");
const { CoursesPurchaseModel } = require("../db")
const { Userauth } = require("../Middlewares/usermiddleware")


userRouter.get("/signup", async (req, res) => {
    const requiredbody = z.object({
        email: z.string().email().max(100).min(5),
        name: z.string().max(100).min(3),
        password: z.string().max(100).min(5)
    })

    const parsedDataWithSuccess = requiredbody.safeParse(req.body)
    if (!parsedDataWithSuccess.success) {
        res.json({
            msg: "Inorrect format"
        })
        return;
    }

    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    try {
        const hashedpassword = await bcrypt.hash(password, 10)

        await UserModel.create({
            name: name,
            email: email,
            password: hashedpassword,
        })

        console.log(hashedpassword);        //atlast comment it out

        res.json({
            msg: "sucessfully signin"
        })

    }

    catch (err) {
        res.json({
            msg: "Email already exists "
        })
    }


});

userRouter.get("/signin", async (req, res) => {
    const email = req.body.email
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email
    })

    if (!user) {
        res.json({
            msg: "User Dont exist in database"
        })
        return;
    }

    const passwordMatched = await bcrypt.compare(password, user.password)

    if (passwordMatched) {
        const token = jwt.sign({
            id: user._id
        }, process.env.SECRET_KEY_User)

        res.json({
            token: token
        })
    }
    else {
        res.json({
            msg: "Wrong Password"
        })
    }

});

userRouter.get("/course", Userauth, async (req, res) => {
    try {
        const userid = req.userid
        const user= await UserModel.findById({
            _id:userid
        })

        const allcourses= user.courseid

        res.json({
            allcourses
        })
    }

    catch(err){
        res.status(401).json({"Error :" : err})
    }
});



module.exports = {
    userRouter: userRouter
}