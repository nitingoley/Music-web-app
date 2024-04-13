var express = require('express');
var app = express();
var Port = process.env.PORT || 7777;
var path = require('path');



app.set('view engine', "ejs");



app.get('/' , (req , res)=>{
    res.render("index");
})


app.listen(Port , ()=>{
    console.log(`The server running on the ${Port}`);
})