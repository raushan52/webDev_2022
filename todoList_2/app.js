
const express = require("express");
const bodyParser = require("body-parser");
const { static } = require("express");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

let arr = ["apple","bannana"];
let workItems = [];

app.get("/",function(req, res){
    let day = new Date();
    let option = {
        weekday:"long",
        day:"numeric",
        month:"long"
    };

    let currDay = day.toLocaleDateString("en-US",option);

    res.render("list",{heading:currDay,itm:arr});
});

app.post("/",function(req,res){
    let input = req.body.item;
    // console.log(input);

    if(req.body.list === "Work"){
        workItems.push(input);
        res.redirect("/work");
    }else{
        arr.push(input);
        res.redirect("/");
    }
    
    
    // arr.push(input);
    // res.redirect("/");
});

app.get("/work",function(req,res){
    res.render("list",{heading:"Work Lists",itm: workItems});
});

// app.post("/work",function(req,res){
//     let work = req.body.item;
//     workItems.push(work);
//     res.redirect("/work");
// });


app.get("/about",function(req,res){
    res.render("about");
})

app.listen(3000,function(){
    console.log("server started on port number 3000");
});