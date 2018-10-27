const express = require('express');
const app = express();
var path = require('path');

// app.use(express.static(__dirname+'/public'))

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'public/'));
});

app.get('/public/css/style.css',function(req,res){
    res.sendFile(path.join(__dirname,'/public/css/style.css'));
});

app.get('/public/bundle/jsonSchemaBundle.js',function(req,res){
    res.sendFile(path.join(__dirname,'/public/bundle/jsonSchemaBundle.js'));
});

// PORT for deployment
const port =process.env.PORT || 8080;
app.listen(port);

// PORT for development
// app.listen(3000);