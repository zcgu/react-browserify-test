var express = require('express');
var bodyParser = require('body-parser');
var helper = require('./helper');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

var gethome = function(req, res, next) {
  res.sendFile('./index.html');
}

app.get('/', gethome);

module.exports = app;