//  Create a middleware that logs all incoming requests to the console.

const express = require('express');
const app = express();

function logRequests(req, res, next) {
    // write the logic for request log here
    let method = req.method;
    let url= req.url;
    let timestamp = new Date().toISOString();
    console.log(`${url} ${method} - ${timestamp}`);
    next();
}

app.use(logRequests);

app.get('/info', (req, res) => {
    res.status(200).json({ message: 'Hello, world!' });
});

app.listen(3000,()=>{
    console.log("Listning on port 3000 ")
});

