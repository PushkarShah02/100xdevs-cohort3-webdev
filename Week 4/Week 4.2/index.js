const express = require('express')
const app = express()


// route handlers
app.get('/',function(req,res){
    res.send('Hello World are bhai bhai')
})

app.get('/ram',function(req,res){
    res.send('bolo ram ram')
})

app.get('/bro',function(req,res){
    res.send('he bro')
})




app.listen(3000)     //which port you want to run on?