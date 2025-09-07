//Without using middleware function
//Without using middleware function
//Without using middleware function
const express = require("express");
const app = express();
function enoughage(age) {
    if (age >= 14) {
        return true;
    }
    else {
        return false;
    }
}

app.get("/ride1", function (req, res) {
    if (enoughage(req.query.age)) {
        res.json({
            msg: "you have riden the ride 1 sucessfully "
        })
    }

    else {
        res.status(411).json({
            msg: "you are not elegible for this ride "
        })
    }
})


app.get("/ride2", function (req, res) {
    if (enoughage(req.query.age)) {
        res.json({
            msg: "you have riden the ride 2 sucessfully "
        })
    }

    else {
        res.status(411).json({
            msg: "you are not elegible for this ride "
        })
    }
})


app.listen(3000);
