var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/*', function(req, res, next) {
  res.setHeader('Content-Type', 'text/html;charset=utf-8');
  res.sendfile(path.join(__dirname, 'public/404.html'));
});

module.exports = app;
