const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
require("dotenv").config();    // Load .env variables at the top



const { courseRouter } = require("./routes/courses")
const { userRouter } = require("./routes/user")
const { adminRouter } = require("./routes/admin")

const app = express();
app.use(express.json())

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/courses", courseRouter);

// createCourseRoute(app);
// createUserRoute(app);  ------this is correct but not correct way
async function main() {

    await mongoose.connect(process.env.MONGO_URL)

    app.listen(3000, () => {
        console.log("listning on port 3000")
    })
}

main();


