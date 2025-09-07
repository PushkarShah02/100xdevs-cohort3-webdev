const { Router } = require("express");
const adminRouter = Router();
const { AdminModel } = require("../db");
const { CoursesModel } = require("../db");
const { z } = require("zod")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const { Adminauth } = require("../Middlewares/adminmiddleware")


adminRouter.get("/signup", async (req, res) => {
    const requiredbody = z.object({
        email: z.string().email().max(100).min(5),
        name: z.string().max(100).min(3),
        password: z.string().max(100).min(5)
    })
    const parsedDataWithSuccess = requiredbody.safeParse(req.body)

    if (!parsedDataWithSuccess.success) {
        res.json({
            msg: "Incorrect Format"
        })
        return
    }

    const { email, name, password } = req.body

    try {
        const hashedpassword = await bcrypt.hash(password, 10)

        await AdminModel.create({
            name: name,
            email: email,
            password: hashedpassword,
        })
        console.log(hashedpassword)
        res.json({
            msg: "Successfully Signed in"
        })
    }
    catch (err) {
        res.json({
            msg: "Email Already Exists"
        })
    }

})

adminRouter.get("/signin", async (req, res) => {
    const { email, password } = req.body
    const admin = await AdminModel.findOne({
        email: email
    })

    if (!admin) {
        return res.status(404).json({ msg: "User not found" });
    }

    const passwordMatched = await bcrypt.compare(password, admin.password)
    if (passwordMatched) {
        const token = jwt.sign({ id: admin._id }, process.env.SECRET_KEY_Admin);
        res.json({ token })
    }

    else {
        return res.status(401).json({ msg: "Wrong password" });
    }
})

adminRouter.post("/addCourse", Adminauth, async (req, res) => {
    const adminId = req.adminid
    try {
        const { courseName, coursePrice, description, imageUrl } = req.body;

        const newCourse = await CoursesModel.create({
            courseName,
            coursePrice,
            description,
            imageUrl,
            Creatorid: adminId
        });

        res.json({
            msg: "Course has been created successfully",
            courseid: newCourse._id
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

adminRouter.delete("/deleteCourse", Adminauth, async (req, res) => {
    try {
        const { courseid } = req.body;
        const deleted = await CoursesModel.findOneAndDelete({
            _id: courseid,
            Creatorid:req.adminid
        })
        if (!deleted) {
            return res.status(404).json({ msg: "Course not found" });
        }
        res.json({ msg: "Course deleted" });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
})

adminRouter.put("/updateCourse", Adminauth, async (req, res) => {
    try {
        const { courseName, coursePrice, description, imageUrl, courseid } = req.body;

        const updatedCourse = await CoursesModel.findOneAndUpdate({
            _id: courseid,
            Creatorid:req.adminid
        }, {
                courseName,
                coursePrice,
                description,
                imageUrl,
            },
            { new: true });

        if (!updatedCourse) {
            return res.status(404).json({ msg: "Course not found" });
        }

        res.json({ msg: "Course updated", course: updatedCourse });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }

})

adminRouter.get("/allcourse",Adminauth, async(req,res)=>{
    try{
    const adminid=req.adminid;
    const courses= await CoursesModel.find({
        Creatorid:adminid
    })

    if (!courses) {
            return res.status(404).json({ msg: "Course not found" });
        }

    res.json({ msg: "Here is your all courses", Courses: courses });
}
catch (err) {
        res.status(500).json({ error: err.message });
    }
})
module.exports = {
    adminRouter: adminRouter
}