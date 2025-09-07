// creating an https server
// express is not bundulled with node

const express = require("express");

const app = express();

// The function takes:
// req: the request object (contains info about what the user sent)
// res: the response object (you use this to send a reply)

function sum(n){
    let sum=0;
    for(let i=1; i<=n; i++){
        sum=sum+i;
    }

    return sum;
}


app.get("/",function(req, res){  
    //This tells Express: "When someone sends a GET request to '/', here's what to do."
    const n = req.query.n; 
    const ans= sum(n);           
    res.send("Sum is " + ans);
})

app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
  });

// 1. Define all routes
// 2. Start the server

  