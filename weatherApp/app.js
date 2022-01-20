
const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({extended : true}));

app.get("/",function(req,res){

    res.sendFile(__dirname + "/index.html");      
});

app.post("/",function(req, res){
    // console.log(req.body.cityName);
    const city = req.body.cityName;
    const key = "1453608dacc14fb9825ed2d5c4bf6acf";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?appid="+key+"&units="+unit+"&q="+city+"";

    https.get(url,function(response){
        console.log(response.statusCode);

        response.on("data",function(data){
            const body = JSON.parse(data);
            const temp = body.main.temp;
            const desc = body.weather[0].description;
            console.log(temp);
            console.log(desc);
            const iconCode = body.weather[0].icon;
            // console.log(iconCode);
            const icon = "https://openweathermap.org/img/wn/"+ iconCode +"@2x.png";
            res.write("<p> The weather is : " + desc + " </p>");
            res.write("<h1>The temperature in "+city+" is : " + temp + " degree celcius.</h1>");
            res.write("<img src ="+icon+">");
            res.send();
            
        });
        
    });

});

app.listen(2000,function(){
    console.log("Server started on port no 2000");
});