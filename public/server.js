const express = require('express');
const port =process.env.PORT || 8080;
const app = express();
var path = require('path');

app.use('/static', express.static(path.join(__dirname, 'public')))

app.listen(port);