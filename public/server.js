const express = require('express');
const port =process.env.PORT || 8080;
const app = express();
var path = require('path');

express.static('public');

app.listen(port);