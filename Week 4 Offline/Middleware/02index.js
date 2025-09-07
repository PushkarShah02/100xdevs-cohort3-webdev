//using middleware function
//using middleware function
const express = require("express");
const app = express();
function enoughageVIAMiddleware(req, res, next) {
    const age = req.query.age;
    if (age >= 14) {
        next();
    }
    else {
        res.status(411).json({
            msg: "you are not elegible for this ride "
        })
    }
}

//app.use(enoughageVIAMiddleware);

app.get("/ride1", enoughageVIAMiddleware, function (req, res) {
    res.json({
        msg: "you have riden the ride 1 sucessfully "
    })
})


app.get("/ride2", enoughageVIAMiddleware, function (req, res) {
    res.json({
        msg: "you have riden the ride 2 sucessfully "
    })
})


app.listen(3000);
