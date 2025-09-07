const express = require("express");
const app = express();

app.use(express.json()); // Middleware to parse JSON request bodies

// Dummy database
const users = [{
    name: "Pushkar",
    kidney: [
        { healthy: true },
        { healthy: false },
        { healthy: false }
    ]
}];

// GET route - calculates and sends kidney stats
app.get("/", function (req, res) {
    const PushkarKidney = users[0].kidney;
    const NoOfKidneys = PushkarKidney.length;
    let NoOfHealthyKidneys = 0;

    for (let i = 0; i < NoOfKidneys; i++) {
        if (PushkarKidney[i].healthy) {
            NoOfHealthyKidneys++;
        }
    }

    const NoOfUnhealthyKidneys = NoOfKidneys - NoOfHealthyKidneys;

    res.json({
        NoOfKidneys,
        NoOfHealthyKidneys,
        NoOfUnhealthyKidneys
    });
});

// POST route - adds a new kidney status
app.post("/", function (req, res) {
    const ishealthy = req.body.ishealthy;

    // Declare PushkarKidney here as well
    const PushkarKidney = users[0].kidney;
1
    PushkarKidney.push({
        healthy: ishealthy
    });

    res.json({
        msg: "Kidney Added Successfully!!"
    });
});

app.put("/",function(req,res){
    const PushkarKidneys =users[0].kidney;

    for(let i=0; i<PushkarKidneys.length; i++){
        PushkarKidneys[i].healthy=true;
    }

    res.json({})
})

app.delete("/",function(req,res){
    const newKidneys =[];
    if(isUnhealthyKidney()){

    for(let i=0; i<users[0].kidney.length; i++){
        if(users[0].kidney[i].healthy){
            newKidneys.push({
                healthy: true
            })
        }
    }

    users[0].kidney = newKidneys;
    res.json({ msg: "done"})
}
else{
    res.status(411).json({
        msg:" No Unhealthy Kidney Available"
    })
}

})

 function isUnhealthyKidney(){
    let unhealthykidney = false;

    for(let i=0; i<users[0].kidney.length; i++){
        if(!users[0].kidney[i].healthy){
            unhealthykidney = true;

            return unhealthykidney;

        }
    }
 }

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
