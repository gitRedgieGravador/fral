const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const port = 3000
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', function (req, res) {
    res.json({ "tutorial": "Build REST API with node.js" });
});
app.listen(port, function () { console.log('Node server listening on port' + port); });