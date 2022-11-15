var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 3000;
app.use(express.static(__dirname));
app.get('/',function(req,res){
    res.sendFile(__dirname+"/apk.html");
});

app.listen(port,function(){
    console.log("server started at "+port);
});
