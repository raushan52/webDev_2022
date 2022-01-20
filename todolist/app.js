
const express = require("express");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
// let ejs = require('ejs');

const app = express();
app.set('view engine','ejs');

var items =[];

app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
    
    var today = new Date();
    
    var option = {
        weekday: "long",
        day: "numeric",
        month:"long"
    };

    var day = today.toLocaleDateString("en-US",option);
    

    res.render('list',{theDay:day,itm:items});
});

app.post("/",function(req,res){
    var item = req.body.item;

    items.push(item); 

    res.redirect("/");
});


app.listen(3000,function(){
    console.log("server started on port 3000");
});