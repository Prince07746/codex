var express = require('express');
var bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
var app = express();

var port = process.env.PORT || 3000;
app.use(express.static(__dirname));

app.get('/',function(req,res){
    console.log(req.ip);
    res.sendFile(__dirname+"/apk.html");
});

app.listen(port,function(err){
    if(err) console.log('something is wrong');
    console.log("server started at "+port);
});
