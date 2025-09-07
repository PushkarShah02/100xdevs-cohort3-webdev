const { Router } = require("express");
const { UserModel, CoursesModel } = require("../db");
const {Userauth}= require("../Middlewares/usermiddleware")
const courseRouter = Router();

courseRouter.post("/purchase",Userauth, async (req, res) => {
    try{
        const userid=req.userid
        const courseid=req.headers.courseid

        // Add the courseid to the user's courseid array
        await UserModel.findByIdAndUpdate(
            userid,
            { $push: { courseid: courseid } },
            { new: true }
        );
        // const purchase= await CoursesPurchaseModel.create({
        //     userid:userid,
        //     courseid:courseid
        // })

        res.json({
            msg: "Course has been purchased successfully",
        })
    }
    catch(err){
        res.status(401).json({
            error: err.message
        })
    }

});

courseRouter.get("/preview",async (req, res) => {
    const allcourse=await CoursesModel.find({})
    res.json({
        "preview": allcourse
    })
});



module.exports = {
    courseRouter: courseRouter
}