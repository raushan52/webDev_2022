
const { response } = require("express");
const express = require("express");

const app = express();

app.get("/",function(req,res){
    res.send("hello");
});

app.get("/contact",function(req,res){
    res.send("contact me at: raushan52@hotmail.com");
});

app.get("/about",function(req,res){
    res.send("this is about page.");
});

app.listen(3000,function(){
    console.log("Server started on port no 3000");
});