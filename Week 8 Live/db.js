const { url } = require("inspector");
const { default: mongoose } = require("mongoose");
const mongosse = require("mongoose");
const { string } = require("zod/v4");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
// console.log("connecing to server....")

const CoursesSchema = new Schema({
    courseName: String,
    coursePrice: Number,
    description: String,
    imageUrl: String,
    Creatorid: ObjectId,       // can be from admin
})

const PurchaseCourseSchema = new Schema({
    userid: ObjectId,      // who bought
    courseid: ObjectId,    // what bought
})

const UserSchema = new Schema({
    Name: String,
    email: { type: String, unique: true },
    password: String,
    courseid: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"courses"
    }]
})

const AdminSchema = new Schema({
    Name: String,
    email: { type: String, unique: true },
    password: String,
})

const CoursesModel = mongoose.model('courses', CoursesSchema)
const CoursesPurchaseModel = mongoose.model('purchasecourses', PurchaseCourseSchema)
const UserModel = mongoose.model('users', UserSchema)
const AdminModel = mongoose.model('admins', AdminSchema)

module.exports = {
    CoursesModel,
    CoursesPurchaseModel,
    AdminModel,
    UserModel,
}