const express = require('express');
const port =process.env.PORT || 8080;
const app = express();
var path = require('path');

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(port);